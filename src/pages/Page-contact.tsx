import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
    PhoneCall, 
    Calendar as CalendarIcon, 
    MapPin, 
    Loader2,
    CheckCircle2,
    MessageSquare,
    Send
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import contactHero from "@/assets/126171.jpg";

const formSchema = z.object({
    prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
    nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Adresse courriel invalide"),
    phone: z.string().min(10, "Numéro de téléphone invalide"),
    interest: z.string({
        required_error: "Veuillez choisir un service"
    }).min(1, "Veuillez choisir un service"),
    message: z.string().optional(),
    legal_consent: z.boolean().refine(val => val === true, {
        message: "Champs Obligatoire"
    }),
    marketing_consent: z.boolean().optional().default(false)
});

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prenom: "",
            nom: "",
            email: "",
            phone: "",
            interest: "",
            message: "",
            legal_consent: false,
            marketing_consent: false
        }
    });

    useEffect(() => {
        document.title = "Contacter Bricareau | Service & Support d'Eau au Québec";
    }, []);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        try {
            // Use current date/time as placeholder for the database
            const now = new Date().toISOString();

            const { error } = await supabase
                .from("consultations")
                .insert({
                    prenom: values.prenom,
                    nom: values.nom,
                    email: values.email,
                    phone: values.phone,
                    interest: values.interest,
                    message: values.message,
                    address: "Non spécifié",
                    ville: "Non spécifié",
                    province: "QC",
                    code_postal: "00000",
                    appointment_time: now,
                    type: "Service Request"
                });

            if (error) throw error;

            try {
                await supabase.functions.invoke('send-consultation-confirmation', {
                    body: {
                        ...values,
                        appointment_time: now,
                        type: "Service Request"
                    }
                });
            } catch (fnErr) {
                console.error("Email function error:", fnErr);
            }

            toast.success("Demande envoyée avec succès!");
            setIsSuccess(true);
        } catch (error) {
            console.error("Error:", error);
            toast.error(error instanceof Error ? error.message : ((error as any)?.message || "Erreur lors de l'envoi."));
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center p-4">
                    <div className="max-w-md w-full bg-white rounded-3xl p-10 border border-gray-100 shadow-2xl text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Demande Reçue!</h2>
                        <p className="text-gray-600 mb-8">
                            Merci de votre confiance. Un expert de Bricareau vous contactera sous peu.
                        </p>
                        <Button
                            onClick={() => {
                                setIsSuccess(false);
                                form.reset();
                            }}
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12"
                        >
                            Nouvelle demande
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <section className="relative lg:h-[850px] flex flex-col lg:items-center overflow-hidden bg-white lg:pt-32">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>
                    <div className="relative lg:absolute lg:inset-0 h-[350px] sm:h-[450px] lg:h-full w-full lg:z-0 overflow-hidden">
                        <img
                            src={contactHero}
                            className="w-full h-full object-cover object-[center_35%] opacity-80"
                         alt="Service client Bricareau" title="Expert en eau par Bricareau" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#f0f9ff] via-[#f0f9ff]/40 35% to-transparent z-10" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 h-full flex items-start pt-12 lg:pt-0 lg:items-center lg:px-6">
                        <div className="max-w-3xl text-left space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-[10px] font-black uppercase tracking-[0.2em] w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Support Technique en ligne • Temps de réponse &lt; 15 min
                            </div>
                            <h1 className="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic text-slate-900 mb-6 tracking-tight">
    <span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg">Comment pouvons-nous</span>
                                <span className="font-bold text-[#18448F] block">vous aider ?</span>
</h1>
                            <p className="font-light text-slate-600 max-w-xl text-lg leading-relaxed">
                                Besoin d'une installation, d'une réparation ou d'un simple changement de filtres ? 
                                Nos experts interviennent partout au Grand Montréal et ses environs.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="contact-form" className="py-20 lg:pb-32 bg-slate-50 relative scroll-mt-32" ref={formRef}>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[22rem] font-black text-slate-200/10 select-none pointer-events-none tracking-tighter z-0 uppercase">
                        SUPPORT
                    </div>

                    <div className="container mx-auto px-6 relative z-10 lg:-translate-y-32">
                        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-stretch gap-16 lg:gap-20">
                            {/* Left Icons Column */}
                            <div className="lg:w-1/3 flex flex-col justify-end space-y-6">
                                {[
                                    { icon: PhoneCall, title: "Appel sans frais", content: "(855) 264-9328", sub: "Ligne prioritaire 24/7", delay: "delay-100" },
                                    { icon: CalendarIcon, title: "Disponibilités", content: "Lun - Ven : 8h00 - 18h00", sub: "Service à domicile rapide", delay: "delay-200" },
                                    { icon: MapPin, title: "Zone d'intervention", content: "Grand Montréal & Environs", sub: "Périmètre de 300km (Rayon Local)", delay: "delay-300", isMap: true }
                                ].map((item, i) => (
                                    <div key={i} className={cn("flex flex-col bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-sm border border-slate-100 w-full group hover:shadow-xl transition-all duration-500", item.delay)}>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 group-hover:rotate-3 transition-all">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div className="text-left">
                                                <h4 className="font-bold text-slate-900 text-sm tracking-tight">{item.title}</h4>
                                                <p className={cn("text-lg font-bold leading-none", item.isMap ? "text-slate-800" : "text-blue-600")}>{item.content}</p>
                                                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mt-1 opacity-60">{item.sub}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                                <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-200 delay-500">
                                    <h4 className="font-bold text-lg mb-2">Besoin d'aide immédiate?</h4>
                                    <p className="text-white/80 text-sm font-light mb-6">Nos techniciens sont prêts à répondre à vos questions techniques complexes dès maintenant.</p>
                                    <a
                                        href="https://wa.me/14389936402?text=Bonjour%20Bricareau%2C%20j%27ai%20besoin%20d%27aide%20!"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-green-600 h-12 font-bold transition-all duration-300 gap-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                        Clavardage en direct
                                    </a>
                                </div>
                            </div>

                            {/* Right Form Card */}
                            <div className="lg:w-2/3 w-full">
                                <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden transition-all duration-500">
                                    <div className="mb-10 border-b border-slate-100 pb-6">
                                        <h3 className="text-2xl font-bold text-slate-900">Envoyez-nous un message</h3>
                                        <p className="text-slate-500 font-light mt-1">Nous vous répondrons dans les plus brefs délais.</p>
                                    </div>

                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4">
                                                <FormField control={form.control} name="prenom" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase text-slate-400 ml-1">Prénom*</FormLabel>
                                                        <FormControl><Input placeholder="Prénom" className="h-14 bg-slate-50 border-none rounded-2xl shadow-inner focus:bg-white transition-all" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="nom" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase text-slate-400 ml-1">Nom*</FormLabel>
                                                        <FormControl><Input placeholder="Nom" className="h-14 bg-slate-50 border-none rounded-2xl shadow-inner focus:bg-white transition-all" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="email" render={({ field }) => (
                                                    <FormItem className="md:col-span-2 space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase text-slate-400 ml-1">Courriel*</FormLabel>
                                                        <FormControl><Input placeholder="votre@email.com" type="email" className="h-14 bg-slate-50 border-none rounded-2xl shadow-inner focus:bg-white transition-all" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="phone" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase text-slate-400 ml-1">Téléphone*</FormLabel>
                                                        <FormControl><Input placeholder="(514) 000-0000" type="tel" className="h-14 bg-slate-50 border-none rounded-2xl shadow-inner focus:bg-white transition-all" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="interest" render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase text-slate-400 ml-1">Service requis*</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="h-14 bg-slate-50 border-none rounded-2xl shadow-inner focus:bg-white">
                                                                    <SelectValue placeholder="Choisir un service" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="Analyse d'eau">Analyse d'eau</SelectItem>
                                                                <SelectItem value="Entretien">Entretien & Maintenance</SelectItem>
                                                                <SelectItem value="Installation">Installation & Mise en service</SelectItem>
                                                                <SelectItem value="Réparation">Réparations d'urgence</SelectItem>
                                                                <SelectItem value="Soumission">Demande de soumission</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="message" render={({ field }) => (
                                                    <FormItem className="md:col-span-2 space-y-2">
                                                        <FormLabel className="text-xs font-black uppercase text-slate-400 ml-1">Détails de votre demande</FormLabel>
                                                        <FormControl><Textarea placeholder="Comment pouvons-nous vous aider ?" className="min-h-[120px] bg-slate-50 border-none rounded-2xl shadow-inner focus:bg-white" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <div className="md:col-span-2 space-y-4">
                                                    <FormField control={form.control} name="legal_consent" render={({ field }) => (
                                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                                                            <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
                                                            <div className="space-y-1">
                                                                <FormLabel className="text-[11px] leading-relaxed text-slate-500 font-light cursor-pointer block" style={{ textAlign: 'justify' }}>
                                                                    En cochant cette case ou en utilisant le site web Bricareau.com, vous reconnaissez avoir lu les <Link to="/conditions-generales-utilisation" className="text-blue-600 font-bold underline">Conditions générales</Link> et la <Link to="/politique-de-confidentialite" className="text-blue-600 font-bold underline">Politique de confidentialité</Link>, les comprendre et accepter d'y être lié.*
                                                                </FormLabel>
                                                                <FormMessage />
                                                            </div>
                                                        </FormItem>
                                                    )} />
                                                </div>
                                            </div>

                                            <div className="pt-8 border-t border-slate-100">
                                                <Button 
                                                    type="submit" 
                                                    disabled={isSubmitting} 
                                                    className="w-full md:w-auto rounded-full px-12 h-14 bg-blue-600 text-white border-2 border-blue-600 font-bold transition-all hover:bg-white hover:text-blue-600 hover:scale-105 active:scale-95 shadow-xl shadow-blue-200"
                                                >
                                                    {isSubmitting ? (
                                                        <><Loader2 className="mr-2 w-5 h-5 animate-spin" /> Envoi en cours...</>
                                                    ) : (
                                                        <><Send className="mr-2 w-5 h-5" /> Envoyer le message</>
                                                    )}
                                                </Button>
                                            </div>
                                        </form>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
