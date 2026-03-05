"use client"

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { format, addDays, setHours, setMinutes, startOfDay, endOfDay } from "date-fns";
import { fr } from "date-fns/locale";
import { Loader2, CheckCircle2, ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const formSchema = z.object({
    prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
    nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Adresse courriel invalide"),
    phone: z.string().min(10, "Numéro de téléphone invalide"),
    address: z.string().min(5, "Adresse requise"),
    ville: z.string().min(2, "Ville requise"),
    province: z.string().min(2, "Province requise"),
    code_postal: z.string().min(5, "Code postal requis"),
    appointment_date: z.date({
        required_error: "Veuillez choisir une date",
    }),
    appointment_time: z.string({
        required_error: "Veuillez choisir une heure",
    }),
});

const TIME_SLOTS = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"
];

const ConsultationFormSection = ({ id }: { id?: string }) => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prenom: "",
            nom: "",
            email: "",
            phone: "",
            address: "",
            ville: "",
            province: "",
            code_postal: "",
        },
    });

    const [bookedSlots, setBookedSlots] = useState<string[]>([]);
    const selectedDate = form.watch("appointment_date");
    const formRef = useRef<HTMLDivElement>(null);

    const scrollToForm = () => {
        if (formRef.current) {
            const yOffset = -120; // Accounts for sticky header
            const y = formRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const fetchBookedSlots = async () => {
            if (!selectedDate) return;

            const start = startOfDay(selectedDate).toISOString();
            const end = endOfDay(selectedDate).toISOString();

            const { data, error } = await supabase
                .from("consultations")
                .select("appointment_time")
                .gte("appointment_time", start)
                .lte("appointment_time", end);

            if (data) {
                const booked = data.map((item) => format(new Date(item.appointment_time), "HH:mm"));
                setBookedSlots(booked);
            }
        };

        fetchBookedSlots();
    }, [selectedDate]);

    const [isNavigating, setIsNavigating] = useState(false);

    const nextStep = async () => {
        if (isNavigating) return;

        let fieldsToValidate: (keyof z.infer<typeof formSchema>)[] = [];
        if (step === 1) {
            fieldsToValidate = ["prenom", "nom", "email", "phone", "address", "ville", "province", "code_postal"];
        } else if (step === 2) {
            fieldsToValidate = ["appointment_date", "appointment_time"];
        }

        const isValid = await form.trigger(fieldsToValidate);
        if (isValid) {
            setIsNavigating(true);
            setStep((prev) => Math.min(prev + 1, 3));
            scrollToForm();
            setTimeout(() => setIsNavigating(false), 400); // Matches animation duration + buffer
        }
    };

    const prevStep = () => {
        if (isNavigating) return;
        setIsNavigating(true);
        setStep((prev) => Math.max(prev - 1, 1));
        scrollToForm();
        setTimeout(() => setIsNavigating(false), 400);
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (step !== 3) return; // Prevent premature submission

        setIsSubmitting(true);
        try {
            // Combine date and time
            const [hours, minutes] = values.appointment_time.split(":").map(Number);
            const appointmentDateTime = setMinutes(setHours(values.appointment_date, hours), minutes);

            const { error } = await supabase
                .from("consultations")
                .insert({
                    prenom: values.prenom,
                    nom: values.nom,
                    email: values.email,
                    phone: values.phone,
                    ville: values.ville,
                    province: values.province,
                    code_postal: values.code_postal,
                    appointment_time: appointmentDateTime.toISOString(),
                });

            if (error) throw error;

            try {
                const { error: fnError } = await supabase.functions.invoke('send-consultation-confirmation', {
                    body: {
                        ...values,
                        appointment_time: appointmentDateTime.toISOString(),
                    },
                });

                if (fnError) {
                    console.error("Failed to send confirmation email:", fnError);
                }
            } catch (fnErr) {
                console.error("Exception calling edge function:", fnErr);
            }

            toast.success("Demande de consultation envoyée avec succès!");
            setIsSuccess(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Une erreur s'est produite lors de l'envoi du formulaire.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-md mx-auto bg-white rounded-3xl p-10 border border-gray-100 shadow-xl">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Demande Reçue!</h3>
                        <p className="text-gray-600 mb-8">
                            Merci de nous avoir contactés. Un expert de Bricareau confirmera votre rendez-vous sous peu.
                        </p>
                        <Button
                            onClick={() => {
                                setIsSuccess(false);
                                setStep(1);
                                form.reset();
                            }}
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
                        >
                            Nouvelle demande
                        </Button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id={id} className="py-24 bg-white border-t border-gray-100 scroll-mt-24">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                    {/* Left Side Content */}
                    <div className="w-full text-left">
                        <h2
                            className="text-slate-900 tracking-tighter mb-8 text-left"
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                        >
                            <span className="text-[32px] md:text-[60px] font-bold leading-[1.1] md:leading-[60px] block">Planifiez une consultation</span>
                            <span className="text-[32px] md:text-[60px] font-bold leading-[1.1] md:leading-[60px] block">gratuite sur l'eau</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-snug">
                            Remplissez le formulaire ci-dessous pour organiser une consultation téléphonique avec l'un de nos experts.
                        </p>
                    </div>

                    {/* Right Side Form */}
                    <div className="w-full" ref={formRef}>
                        <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-2xl">
                            {/* Progress Steps */}
                            <div className="flex items-center gap-4 md:gap-8 mb-8 overflow-x-auto pb-4 border-b border-gray-100 no-scrollbar">
                                {[
                                    { id: 1, label: "Vos informations" },
                                    { id: 2, label: "Disponibilité" },
                                    { id: 3, label: "Confirmation" }
                                ].map((s) => (
                                    <div key={s.id} className={cn(
                                        "flex items-center gap-2 font-bold whitespace-nowrap transition-colors",
                                        step >= s.id ? "text-blue-600" : "text-gray-300"
                                    )}>
                                        <span className={cn(
                                            "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base transition-colors",
                                            step >= s.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"
                                        )}>
                                            {step > s.id ? <CheckCircle2 className="w-5 h-5" /> : s.id}
                                        </span>
                                        <span className="hidden md:inline">{s.label}</span>
                                    </div>
                                ))}
                            </div>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                                    {/* STEP 1: Personal Info */}
                                    {step === 1 && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                            <FormField control={form.control} name="prenom" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-bold">Prénom*</FormLabel>
                                                    <FormControl>
                                                        <Input className="h-12 bg-gray-50 border-none" placeholder=" " {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="nom" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-bold">Nom*</FormLabel>
                                                    <FormControl>
                                                        <Input className="h-12 bg-gray-50 border-none" placeholder=" " {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="email" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-bold">Courriel*</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" className="h-12 bg-gray-50 border-none" placeholder=" " {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="phone" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-bold">Téléphone*</FormLabel>
                                                    <FormControl>
                                                        <Input type="tel" className="h-12 bg-gray-50 border-none" placeholder=" " {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <div className="md:col-span-2">
                                                <FormField control={form.control} name="address" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-bold">Adresse*</FormLabel>
                                                        <FormControl>
                                                            <Input className="h-12 bg-gray-50 border-none" placeholder=" " {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <FormField control={form.control} name="ville" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-bold">Ville*</FormLabel>
                                                        <FormControl>
                                                            <Input className="h-12 bg-gray-50 border-none" placeholder=" " {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="province" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-bold">Province*</FormLabel>
                                                        <FormControl>
                                                            <Input className="h-12 bg-gray-50 border-none" placeholder=" " {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="code_postal" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-bold">Code Postal*</FormLabel>
                                                        <FormControl>
                                                            <Input className="h-12 bg-gray-50 border-none" placeholder=" " {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 2: Scheduling */}
                                    {step === 2 && (
                                        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-300">
                                            <div className="w-full">
                                                <FormField control={form.control} name="appointment_date" render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel className="font-bold mb-2">Choisir une date</FormLabel>
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            disabled={(date) =>
                                                                date < new Date() || date > addDays(new Date(), 7) || date.getDay() === 0
                                                            }
                                                            locale={fr}
                                                            className="rounded-md border shadow-sm p-3 w-full flex justify-center bg-white"
                                                            classNames={{
                                                                day_selected: "bg-blue-600 text-white hover:bg-blue-600 focus:bg-blue-600",
                                                                day_today: "bg-gray-100 text-gray-900 border border-gray-200",
                                                                month: "space-y-4 w-full",
                                                                table: "w-full border-collapse space-y-1",
                                                                head_row: "flex w-full justify-between",
                                                                row: "flex w-full mt-2 justify-between",
                                                                cell: "text-center text-sm p-0 flex-1 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                                                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 flex items-center justify-center mx-auto"
                                                            }}
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                            <div className="w-full">
                                                <FormField control={form.control} name="appointment_time" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-bold mb-2">Choisir une heure</FormLabel>
                                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3">
                                                            {TIME_SLOTS.map((time) => {
                                                                const isBooked = bookedSlots.includes(time);
                                                                return (
                                                                    <div key={time}>
                                                                        <input
                                                                            type="radio"
                                                                            id={`time-${time}`}
                                                                            className="peer sr-only"
                                                                            {...form.register("appointment_time")}
                                                                            value={time}
                                                                            disabled={isBooked}
                                                                        />
                                                                        <label
                                                                            htmlFor={`time-${time}`}
                                                                            className={cn(
                                                                                "flex items-center justify-center px-4 py-3 border rounded-lg cursor-pointer transition-all font-medium text-sm",
                                                                                isBooked
                                                                                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed decoration-slice"
                                                                                    : "bg-white border-gray-200 hover:bg-gray-50 peer-checked:bg-blue-50 peer-checked:border-blue-600 peer-checked:text-blue-600"
                                                                            )}
                                                                        >
                                                                            {time}
                                                                            {isBooked && <span className="sr-only">(Indisponible)</span>}
                                                                        </label>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 3: Confirmation */}
                                    {step === 3 && (
                                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                            <div className="bg-gray-50 rounded-xl p-6 space-y-4 border border-gray-100">
                                                <h3 className="font-bold text-lg text-gray-900 border-b border-gray-200 pb-2">Récapitulatif</h3>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <p className="text-sm text-gray-500">Nom complet</p>
                                                        <p className="font-medium text-gray-900">{form.getValues("prenom")} {form.getValues("nom")}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-500">Contact</p>
                                                        <p className="font-medium text-gray-900">{form.getValues("email")}</p>
                                                        <p className="font-medium text-gray-900">{form.getValues("phone")}</p>
                                                    </div>
                                                    <div className="md:col-span-2">
                                                        <p className="text-sm text-gray-500">Adresse</p>
                                                        <p className="font-medium text-gray-900">
                                                            {form.getValues("address")}, {form.getValues("ville")}, {form.getValues("province")} {form.getValues("code_postal")}
                                                        </p>
                                                    </div>
                                                    <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg border border-blue-100">
                                                        <p className="text-sm text-blue-600 font-semibold mb-1">Rendez-vous demandé</p>
                                                        <div className="flex items-center gap-2 text-blue-900 font-bold text-lg">
                                                            <CalendarIcon className="w-5 h-5" />
                                                            {form.getValues("appointment_date") && format(form.getValues("appointment_date"), "d MMMM yyyy", { locale: fr })}
                                                            <span>à</span>
                                                            <span>{form.getValues("appointment_time")}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-sm text-gray-500 text-center">
                                                Veuillez vérifier les informations ci-dessus avant de confirmer votre demande.
                                            </p>
                                        </div>
                                    )}

                                    {/* Navigation Buttons */}
                                    <div className="flex gap-4 pt-4 border-t border-gray-100">
                                        {step > 1 && (
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={prevStep}
                                                disabled={isNavigating || isSubmitting}
                                                className="w-full md:w-auto h-12 rounded-full px-8 border-gray-300"
                                            >
                                                <ChevronLeft className="w-4 h-4 mr-2" /> Retour
                                            </Button>
                                        )}

                                        {step < 3 ? (
                                            <Button
                                                type="button"
                                                onClick={nextStep}
                                                disabled={isNavigating}
                                                className="w-full md:w-auto ml-auto h-12 rounded-full px-8 bg-blue-600 hover:bg-blue-700 text-white"
                                            >
                                                Continuer <ChevronRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        ) : (
                                            <Button
                                                type="submit"
                                                disabled={isSubmitting || isNavigating}
                                                className="w-full md:w-auto ml-auto h-12 rounded-full px-8 bg-blue-600 hover:bg-blue-700 text-white"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Envoi en cours...
                                                    </>
                                                ) : (
                                                    "Confirmer RDV"
                                                )}
                                            </Button>
                                        )}
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationFormSection;
