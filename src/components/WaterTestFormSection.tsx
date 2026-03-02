"use client"

import { useState, useEffect } from "react";
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
import { Loader2, CheckCircle2, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Beaker } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
    prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
    nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Adresse courriel invalide"),
    phone: z.string().min(10, "Numéro de téléphone invalide"),
    address: z.string().min(5, "Adresse requise"),
    ville: z.string().min(2, "Ville requise"),
    province: z.string().min(2, "Province requise"),
    code_postal: z.string().min(5, "Code postal requis"),
    water_test_kits: z.array(z.string()).refine((value) => value.length > 0, {
        message: "Veuillez sélectionner au moins une trousse d'analyse",
    }),
    appointment_date: z.date({
        required_error: "Veuillez choisir une date",
    }),
    appointment_time: z.string({
        required_error: "Veuillez choisir une heure",
    }),
});

const TIME_SLOTS = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"
];

const WaterTestFormSection = ({ id }: { id?: string }) => {
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
            water_test_kits: [],
        },
    });

    const [bookedSlots, setBookedSlots] = useState<string[]>([]);
    const selectedDate = form.watch("appointment_date");

    useEffect(() => {
        const fetchBookedSlots = async () => {
            if (!selectedDate) return;

            const start = startOfDay(selectedDate).toISOString();
            const end = endOfDay(selectedDate).toISOString();

            const { data, error } = await supabase
                .from("consultations") // Using same consultation table, assuming it handles generic appointments
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
            fieldsToValidate = ["water_test_kits"];
        } else if (step === 3) {
            fieldsToValidate = ["appointment_date", "appointment_time"];
        }

        const isValid = await form.trigger(fieldsToValidate);
        if (isValid) {
            setIsNavigating(true);
            setStep((prev) => Math.min(prev + 1, 4));
            setTimeout(() => setIsNavigating(false), 400); // Matches animation duration + buffer
        }
    };

    const prevStep = () => {
        if (isNavigating) return;
        setIsNavigating(true);
        setStep((prev) => Math.max(prev - 1, 1));
        setTimeout(() => setIsNavigating(false), 400);
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (step !== 4) return; // Prevent premature submission

        setIsSubmitting(true);
        try {
            // Combine date and time
            const [hours, minutes] = values.appointment_time.split(":").map(Number);
            const appointmentDateTime = setMinutes(setHours(values.appointment_date, hours), minutes);

            // 1. Insert into consultations (to handle availability blocking)
            const { error: consultationError } = await supabase
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

            if (consultationError) throw consultationError;

            // 2. Insert into the new dedicated table
            const { error: requestError } = await supabase
                .from("water_test_requests")
                .insert({
                    prenom: values.prenom,
                    nom: values.nom,
                    email: values.email,
                    phone: values.phone,
                    address: values.address,
                    ville: values.ville,
                    province: values.province,
                    code_postal: values.code_postal,
                    water_test_kits: values.water_test_kits,
                    appointment_time: appointmentDateTime.toISOString(),
                    status: 'new'
                });

            if (requestError) throw requestError;

            try {
                const { error: fnError } = await supabase.functions.invoke('send-consultation-confirmation', {
                    body: {
                        ...values,
                        appointment_time: appointmentDateTime.toISOString(),
                        type: "Water Test",
                        kits: values.water_test_kits
                    },
                });

                if (fnError) {
                    console.error("Failed to send confirmation email:", fnError);
                }
            } catch (fnErr) {
                console.error("Exception calling edge function:", fnErr);
            }

            toast.success("Demande de test d'eau envoyée avec succès!");
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
                            Merci de nous avoir contactés pour votre test d'eau. Un expert de Bricareau confirmera votre rendez-vous sous peu.
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
                            <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Planifiez</span>
                            <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">votre test d'eau</span>
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                        <p className="text-lg text-gray-600 mb-8 leading-snug">
                            Remplissez le formulaire ci-dessous pour planifier le prélèvement de votre échantillon d'eau.
                        </p>
                    </div>

                    {/* Right Side Form */}
                    <div className="w-full">
                        <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-2xl">
                            {/* Progress Steps */}
                            <div className="flex items-center gap-4 md:gap-8 mb-8 overflow-x-auto pb-4 border-b border-gray-100 no-scrollbar">
                                {[
                                    { id: 1, label: "VOS INFOS" },
                                    { id: 2, label: "CHOIX DES TESTS" },
                                    { id: 3, label: "DATE & HEURE" },
                                    { id: 4, label: "CONFIRMATION" }
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
                                                        <Input className="h-12 bg-gray-50 border-none" placeholder="" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="nom" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-bold">Nom*</FormLabel>
                                                    <FormControl>
                                                        <Input className="h-12 bg-gray-50 border-none" placeholder="" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="email" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-bold">Courriel*</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" className="h-12 bg-gray-50 border-none" placeholder="" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="phone" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-bold">Téléphone*</FormLabel>
                                                    <FormControl>
                                                        <Input type="tel" className="h-12 bg-gray-50 border-none" placeholder="" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <div className="md:col-span-2">
                                                <FormField control={form.control} name="address" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-bold">Adresse*</FormLabel>
                                                        <FormControl>
                                                            <Input className="h-12 bg-gray-50 border-none" placeholder="" {...field} />
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
                                                            <Input className="h-12 bg-gray-50 border-none" placeholder="" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="province" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-bold">Province*</FormLabel>
                                                        <FormControl>
                                                            <Input className="h-12 bg-gray-50 border-none" placeholder="" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="code_postal" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-bold">Code Postal*</FormLabel>
                                                        <FormControl>
                                                            <Input className="h-12 bg-gray-50 border-none" placeholder="" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 2: Kit Selection */}
                                    {step === 2 && (
                                        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-300">
                                            <div className="w-full bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                                <FormField control={form.control} name="water_test_kits" render={() => (
                                                    <FormItem className="space-y-4">
                                                        <FormLabel className="font-bold text-lg text-blue-900 flex items-center gap-2">
                                                            <Beaker className="w-5 h-5" />
                                                            Choisir vos trousses d'analyse
                                                        </FormLabel>
                                                        <div className="grid grid-cols-1 gap-4">
                                                            {[
                                                                { id: "microbiologique", label: "Analyse microbiologique" },
                                                                { id: "physico-chimique-type-1", label: "Analyse physico-chimique Type I" },
                                                                { id: "physico-chimique-type-2", label: "Analyse physico-chimique Type II" },
                                                                { id: "bilan-complet", label: "Bilan complet" }
                                                            ].map((item) => (
                                                                <FormField
                                                                    key={item.id}
                                                                    control={form.control}
                                                                    name="water_test_kits"
                                                                    render={({ field }) => {
                                                                        return (
                                                                            <FormItem
                                                                                key={item.id}
                                                                                className="flex flex-row items-start space-x-3 space-y-0 p-4 rounded-lg"
                                                                            >
                                                                                <FormControl>
                                                                                    <Checkbox
                                                                                        disabled={
                                                                                            item.id === "bilan-complet"
                                                                                                ? field.value?.some((id: string) => ["microbiologique", "physico-chimique-type-1", "physico-chimique-type-2"].includes(id))
                                                                                                : field.value?.includes("bilan-complet")
                                                                                        }
                                                                                        checked={field.value?.includes(item.id)}
                                                                                        onCheckedChange={(checked) => {
                                                                                            return checked
                                                                                                ? field.onChange([...field.value, item.id])
                                                                                                : field.onChange(
                                                                                                    field.value?.filter(
                                                                                                        (value) => value !== item.id
                                                                                                    )
                                                                                                )
                                                                                        }}
                                                                                    />
                                                                                </FormControl>
                                                                                <FormLabel className="font-medium font-normal cursor-pointer flex-1">
                                                                                    {item.label}
                                                                                </FormLabel>
                                                                            </FormItem>
                                                                        )
                                                                    }}
                                                                />
                                                            ))}
                                                        </div>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 3: Scheduling */}
                                    {step === 3 && (
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
                                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3">
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

                                    {/* STEP 4: Confirmation */}
                                    {step === 4 && (
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
                                                    <div className="md:col-span-2">
                                                        <p className="text-sm text-gray-500">Trousses sélectionnées</p>
                                                        <div className="flex flex-wrap gap-2 mt-1">
                                                            {form.getValues("water_test_kits")?.map((kit) => (
                                                                <span key={kit} className="font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded">
                                                                    {kit === "microbiologique" && "Analyse microbiologique"}
                                                                    {kit === "physico-chimique-type-1" && "Analyse physico-chimique Type I"}
                                                                    {kit === "physico-chimique-type-2" && "Analyse physico-chimique Type II"}
                                                                    {kit === "bilan-complet" && "Bilan complet"}
                                                                </span>
                                                            ))}
                                                        </div>
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

                                        {step < 4 ? (
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

export default WaterTestFormSection;
