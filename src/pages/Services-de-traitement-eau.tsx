import React, { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { 
    ArrowRight, 
    CheckCircle2, 
    Wrench, 
    ShieldCheck, 
    PhoneCall, 
    Settings, 
    UserCheck,
    Calendar,
    Zap,
    MapPin,
    Phone,
    Loader2,
    Send,
    MessageSquare
} from "lucide-react";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import servicesHero from "@/assets/SERVICES.jpg";
import bricareauCareImg from "@/assets/cae3c0a4-5b4d-4b0e-8bc3-3550a714f7bb.jpg";
import waterSoftenerInstallImg from "@/assets/Water-Softener-installation.jpg";
import roServiceImg from "@/assets/RO service.png";
import labTestImg from "@/assets/test-laboratoire-diligence-inspection-750x500.jpg";
import diagnosticImg from "@/assets/step-diagnostic.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { NavLink } from "@/components/NavLink";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
} from "@/components/ui/carousel";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
    nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Adresse courriel invalide"),
    phone: z.string().min(10, "Numéro de téléphone invalide"),
    interest: z.string({
        required_error: "Veuillez choisir un service"
    }),
    message: z.string().optional(),
    legal_consent: z.boolean().refine(val => val === true, {
        message: "Champs Obligatoire"
    }),
    marketing_consent: z.boolean().optional().default(false)
});

const ServicesTraitementEau = () => {
    const navigate = useNavigate();
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
        document.title = "Services & Entretien Bricareau | Expertise en Traitement d'Eau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Bénéficiez d'une maintenance experte pour vos adoucisseurs et systèmes de filtration au Québec. Mise en service, dépannage et contrats d'entretien Bricareau.");
        }
    }, []);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        try {
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
            toast.error("Erreur lors de l'envoi.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Header />
            
            <main>
                {/* 1. IMMERSIVE HERO - INDEX STYLE */}
                <section className="relative lg:h-[800px] flex flex-col overflow-hidden bg-white lg:pt-32">
                    {/* Image Section - Stacked on Mobile/Tablet Portrait, Overlay on Desktop */}
                    <div className="relative lg:absolute lg:inset-0 w-full h-[400px] md:h-[550px] lg:h-full z-0 overflow-hidden">
                        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#f0f9ff]/20 to-white lg:bg-gradient-to-r lg:from-[#f0f9ff] lg:via-[#f0f9ff]/40 35% lg:to-transparent" />
                        <img 
                            src={servicesHero} 
                            className="w-full h-full object-cover"
                         alt="Services Bricareau - Expertise technique" title="Analyse d'eau professionnelle par Bricareau" />
                    </div>
                    
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>

                    <div className="container relative z-20 mx-auto px-6 lg:h-full flex flex-col items-start justify-center pt-16 pb-24 lg:pt-0 lg:pb-0">
                        <div className="max-w-3xl text-left">
                            <h1 className="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic text-[#18448F] mb-6 tracking-tight">
    <span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg">Expertise & Sérénité</span>
                                <span className="font-bold block">Des services dédiés à <br />votre tranquillité.</span>
</h1>
                            <p className="text-slate-600 mb-10 max-w-xl animate-in fade-in slide-in-from-left duration-1000 delay-100 text-lg">
                                Bricareau s'engage à vos côtés pour simplifier le suivi, l'entretien et la performance de vos installations d'eau, partout au Québec.
                            </p>
                            <div className="flex flex-col sm:flex-row items-start lg:items-center gap-8 animate-in fade-in slide-in-from-left duration-1000 delay-200 pt-4">
                                    <ProMaxButton 
                                        variant="primary"
                                        asChild
                                    >
                                        <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                            Planifier un service
                                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                                        </button>
                                    </ProMaxButton>
                                
                                <div className="flex items-center gap-4 text-slate-500 text-sm font-light border-l border-slate-200 pl-8 hidden md:flex">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[#18448F]">Intervention sous 24h</span>
                                        <span className="text-xs">Urgences prioritaires</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Architectural Accent */}
                    <div className="absolute bottom-0 right-0 w-1/3 h-24 bg-white rounded-tl-[5rem] hidden md:block z-10" />
                </section>

                {/* 2. SERVICES CAROUSEL - WITH WATERMARK */}
                <section className="py-24 bg-white relative overflow-hidden">
                    {/* Background Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                        <span className="text-[12rem] md:text-[20rem] font-bold text-slate-100/40 opacity-30 leading-none uppercase tracking-tighter">SÉRÉNITÉ</span>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
                            <h2 className="heading-pro-max">
                                <span className="italic font-light text-[#18448F] block">Une expertise complète</span>
                                <span className="font-bold text-[#18448F] block">pour votre eau</span>
                            </h2>
                            <p className="body-pro-max max-w-2xl mx-auto text-slate-500">
                                De l'installation à la maintenance préventive, nos techniciens certifiés assurent la pérennité de vos équipements de traitement d'eau à travers tout le Québec.
                            </p>
                        </div>

                        <div className="relative animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
                            <Carousel 
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                className="w-full"
                            >
                                <CarouselContent className="-ml-8">
                                    {/* Card 001: Mise en service - Navy Style */}
                                    <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3">
                                        <div className="group block relative bg-[#18448F] rounded-[2.5rem] p-10 h-[720px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                            <div className="space-y-0 relative z-10 flex flex-col h-full">
                                                <div className="h-20"></div>
                                                <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg relative">
                                                    <img 
                                                        src={bricareauCareImg} 
                                                        className="w-full h-full object-cover object-[50%_30%]"
                                                     alt="Expertise technique certifiée Bricareau" title="Systèmes d'eau sur mesure par Bricareau" />
                                                </div>
                                                <div className="space-y-6 pt-8">
                                                    <h3 className="text-3xl font-bold text-white leading-[1.1] group-hover:text-blue-200 transition-colors">
                                                        Mise en service certifiée
                                                    </h3>
                                                    <p className="text-white/70 text-sm leading-relaxed">
                                                        L'installation par un expert certifié garantit la validité de votre garantie et la performance optimale de votre système dès le premier jour.
                                                    </p>
                                                    <ul className="space-y-2 pt-1">
                                                        {["Calibration précise", "Tests d'étanchéité", "Formation utilisateur"].map((benefit, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-xs font-medium text-white/60">
                                                                <CheckCircle2 className="w-3 h-3 text-blue-400" />
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>

                                    {/* Card 002: Entretien préventif - Royal Blue Style */}
                                    <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3">
                                        <div className="group block relative bg-[#18448F] rounded-[2.5rem] p-10 h-[720px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                            <div className="space-y-0 relative z-10 flex flex-col h-full">
                                                <div className="h-20"></div>
                                                <div className="space-y-6">
                                                    <h3 className="text-3xl font-bold text-white leading-[1.1]">
                                                        Entretien préventif durable
                                                    </h3>
                                                    <p className="text-white/80 text-sm leading-relaxed">
                                                        Un système bien entretenu dure deux fois plus longtemps. Nos techniciens réalisent un diagnostic complet et le nettoyage de vos composants.
                                                    </p>
                                                    <ul className="space-y-2 pt-1 mb-12">
                                                        {["Nettoyage résine", "Vérification vannes", "Livraison consommables"].map((benefit, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-xs font-medium text-white/70">
                                                                <CheckCircle2 className="w-3 h-3 text-blue-100" />
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg mt-12 relative">
                                                    <img 
                                                        src={waterSoftenerInstallImg} 
                                                        className="w-full h-full object-cover"
                                                     alt="Entretien de système d'eau" title="Traitement d'eau Québec par Bricareau" />
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>

                                    {/* Card 003: Dépannage - Navy Patterned */}
                                    <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3">
                                        <div className="group block relative bg-[#18448F] rounded-[2.5rem] p-10 h-[720px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                                                <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
                                            </div>
                                            <div className="relative z-10 space-y-0 flex flex-col h-full">
                                                <div className="h-20"></div>
                                                <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg relative">
                                                    <img 
                                                        src={servicesHero} 
                                                        className="w-full h-full object-cover"
                                                     alt="Dépannage expert Bricareau" title="Filtration Bricareau par Bricareau" />
                                                </div>
                                                <div className="space-y-6 pt-8">
                                                    <h3 className="text-3xl font-bold text-white leading-[1.1] group-hover:text-blue-200 transition-colors">
                                                        Dépannage expert 24/7
                                                    </h3>
                                                    <p className="text-white/70 text-sm leading-relaxed">
                                                        Votre système montre des signes de fatigue ? Nous intervenons sur toutes les marques du marché pour restaurer la qualité de votre eau.
                                                    </p>
                                                    <ul className="space-y-2 pt-1">
                                                        {["Diagnostic rapide", "Pièces d'origine", "Réparation garantie"].map((benefit, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-xs font-medium text-white/60">
                                                                <CheckCircle2 className="w-3 h-3 text-blue-400" />
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>

                                    {/* Card 004: Analyses d'eau - Royal Blue Style */}
                                    <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3">
                                        <div className="group block relative bg-[#18448F] rounded-[2.5rem] p-10 h-[720px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                            <div className="space-y-0 relative z-10 flex flex-col h-full">
                                                <div className="h-20"></div>
                                                <div className="space-y-6">
                                                    <h3 className="text-3xl font-bold text-white leading-[1.1]">
                                                        Analyses d'eau expertes
                                                    </h3>
                                                    <p className="text-white/80 text-sm leading-relaxed">
                                                        Évaluez la qualité de votre eau avec des tests certifiés et recevez un diagnostic complet sous 48h pour une solution sur mesure.
                                                    </p>
                                                    <ul className="space-y-2 pt-1 mb-12">
                                                        {["Tests certifiés", "Rapport détaillé", "Solutions sur-mesure"].map((benefit, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-xs font-medium text-white/70">
                                                                <CheckCircle2 className="w-3 h-3 text-blue-100" />
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg mt-12 relative">
                                                    <img 
                                                        src={labTestImg} 
                                                        className="w-full h-full object-cover"
                                                     alt="Analyses de laboratoire certifiées - expert en eau" title="Expert en eau par Bricareau" />
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none">
                                    <div className="container mx-auto relative h-full">
                                        <CarouselPrevious className="pointer-events-auto absolute -left-12 lg:-left-20 h-14 w-14 bg-white/90 backdrop-blur-md text-blue-600 border-none shadow-2xl hover:bg-blue-600 hover:text-white transition-all duration-300" />
                                        <CarouselNext className="pointer-events-auto absolute -right-12 lg:-right-20 h-14 w-14 bg-white/90 backdrop-blur-md text-blue-600 border-none shadow-2xl hover:bg-blue-600 hover:text-white transition-all duration-300" />
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </section>

                {/* 3. BRICAREAU CARE - SERVICE CONTRACTS */}
                <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-20 animate-in fade-in slide-in-from-bottom duration-1000">
                            <div className="lg:w-1/2 relative group">
                                <div className="relative z-10 rounded-[4rem] overflow-hidden aspect-square shadow-2xl">
                                    <img 
                                        src={bricareauCareImg} 
                                        className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                                     alt="Service Bricareau Care" title="Analyse d'eau professionnelle par Bricareau" />
                                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 rounded-full flex flex-col items-center justify-center text-center p-6 shadow-2xl z-20 border-8 border-slate-900">
                                    <span className="text-4xl font-black block text-white">+25</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest block text-white">Ans de service</span>
                                </div>
                            </div>

                            <div className="lg:w-1/2 space-y-8">
                                <h2 className="heading-pro-max">
                                    <span className="italic font-light text-blue-400 block">Bricareau Care</span>
                                    <span className="font-bold block leading-[1.1]">Contrats d'entretien <br />All-Inclusive.</span>
                                </h2>
                                <p className="body-pro-max text-white/70 text-left">
                                    Ne vous souciez plus jamais de la qualité de votre eau. Nos plans d'entretien annuels assurent un suivi proactif de vos équipements pour une tranquillité totale.
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { icon: <ShieldCheck className="w-5 h-5" />, text: "Garantie étendue pièces & Main d'oeuvre" },
                                        { icon: <PhoneCall className="w-5 h-5" />, text: "Dépannage prioritaire sous 24h" },
                                        { icon: <CheckCircle2 className="w-5 h-5" />, text: "Analyses d'eau incluses" },
                                        { icon: <UserCheck className="w-5 h-5" />, text: "Suivi par un technicien dédié" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                                            <div className="text-blue-400">{item.icon}</div>
                                            <span className="text-sm font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6">
                                    <ProMaxButton
                                        asChild
                                        variant="white"
                                    >
                                        <a href="tel:18552649328" className="flex items-center gap-2">
                                            <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                                            Parlez avec un conseiller
                                        </a>
                                    </ProMaxButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. WATER SOFTENER MAINTENANCE - WITH PERFORMANCE WATERMARK */}
                <section className="py-32 bg-slate-50 overflow-hidden relative">
                    {/* Background Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                        <span className="text-[12rem] md:text-[20rem] font-bold text-slate-200/40 opacity-30 leading-none uppercase tracking-tighter">PERFORMANCE</span>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-24 animate-in fade-in slide-in-from-bottom duration-1000">
                            <div className="lg:w-1/2">
                                <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl group">
                                    <img 
                                        src={waterSoftenerInstallImg} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                     alt="Maintenance adoucisseur d'eau Bricareau" title="Systèmes d'eau sur mesure par Bricareau" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#18448F]/40 to-transparent" />
                                     <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                                        <p className="text-white font-medium italic">"Une valve bien réglée peut économiser jusqu'à 30% de sel par an."</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2 space-y-8">
                                <h2 className="heading-pro-max text-left text-slate-900 mb-8">
                                    <span className="italic font-light text-blue-600 block">Performance & Protection</span>
                                    <span className="font-bold text-[#18448F] block">Une maintenance d'élite <br />pour vos systèmes d'eau.</span>
                                </h2>
                                <p className="body-pro-max text-slate-600 text-justify">
                                    Optimisez la performance et la longévité de vos adoucisseurs et filtres d'eau partout au Québec. Un entretien régulier par nos techniciens certifiés assure une élimination efficace du calcaire et des contaminants, protège vos installations de plomberie et garantit une eau d'une qualité exceptionnelle pour toute votre famille.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                                    {[
                                        { title: "Valves & Contrôleurs", desc: "Expertise multimarques (Fleck, Clack, Autotrol)." },
                                        { title: "Rebed", desc: "Changement des résines et médias filtrants haute qualité." },
                                        { title: "Nettoyage et Désinfection", desc: "Traitement antibactérien des réservoirs de sel." },
                                        { title: "Optimisation Éco", desc: "Réglages fins pour minimiser les rejets d'eau et la consommation de sel." }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-1">
                                            <h4 className="text-base font-bold text-slate-900 border-l-2 border-blue-600 pl-3">{item.title}</h4>
                                            <p className="text-xs text-slate-500 font-light">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6">
                                    <ProMaxButton 
                                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                        variant="primary"
                                    >
                                        Planifiez un service
                                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                                    </ProMaxButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. REVERSE OSMOSIS MAINTENANCE - WITH PURITÉ WATERMARK */}
                <section className="py-32 bg-white overflow-hidden relative">
                    {/* Background Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                        <span className="text-[12rem] md:text-[20rem] font-bold text-slate-100/40 opacity-30 leading-none uppercase tracking-tighter">PURITÉ</span>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-24 animate-in fade-in slide-in-from-bottom duration-1000">
                            <div className="lg:w-1/2">
                                <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl group bg-slate-50">
                                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <img 
                                        src={roServiceImg} 
                                        className="w-full h-full object-cover drop-shadow-2xl transition-transform duration-1000 group-hover:scale-110"
                                     alt="Maintenance système d'osmose inverse - traitement d'eau Québec" title="Traitement d'eau Québec par Bricareau" />
                                </div>
                            </div>

                            <div className="lg:w-1/2 space-y-8">
                                <h2 className="heading-pro-max text-left text-slate-900 mb-8">
                                    <span className="italic font-light text-blue-600 block">Pureté & Santé</span>
                                    <span className="font-bold text-[#18448F] block">Savourez une eau d'une <br />pureté exceptionnelle.</span>
                                </h2>
                                <p className="body-pro-max text-slate-600 text-justify">
                                    Assurez la pureté cristalline de votre eau potable municipale ou de puits. Le remplacement périodique des membranes et des filtres de votre système d'osmose inverse est essentiel pour éliminer 99% des contaminants et garantir une hygiène irréprochable.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                                    {[
                                        { title: "Filtres d'eau de haute qualité", desc: "Remplacement semestriel pour protéger la membrane." },
                                        { title: "Membranes TFC", desc: "Tests de pureté et remplacement tous les 2-3 ans." },
                                        { title: "Biofilm & Hygiène", desc: "Désinfection complète du réservoir de stockage." },
                                        { title: "Analyse de TDS", desc: "Vérification instantanée de l'efficacité de filtration." }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-1">
                                            <h4 className="text-base font-bold text-slate-900 border-l-2 border-blue-600 pl-3">{item.title}</h4>
                                            <p className="text-xs text-slate-500 font-light">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6">
                                    <ProMaxButton 
                                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                        variant="primary"
                                    >
                                        Réservez votre entretien
                                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                                    </ProMaxButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. WATER ANALYSIS & DIGITAL DIAGNOSTIC - WITH ANALYSE WATERMARK */}
                <section className="py-32 bg-white overflow-hidden relative">
                    {/* Background Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                        <span className="text-[12rem] md:text-[20rem] font-bold text-slate-100/40 opacity-30 leading-none uppercase tracking-tighter">ANALYSE</span>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-24 animate-in fade-in slide-in-from-bottom duration-1000">
                            <div className="lg:w-1/2">
                                <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl group">
                                    <img 
                                        src={diagnosticImg} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                     alt="Diagnostic digital d'eau Bricareau" title="Traitement d'eau Québec par Bricareau" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                                </div>
                            </div>

                            <div className="lg:w-1/2 space-y-8">
                                <h2 className="heading-pro-max text-left text-slate-900 mb-8">
                                    <span className="italic font-light text-blue-600 block">Diagnostic & Précision</span>
                                    <span className="font-bold text-[#18448F] block">Révélez ce que <br />votre eau vous cache.</span>
                                </h2>
                                <p className="body-pro-max text-slate-600 text-justify">
                                    L'apparence cristalline de votre eau ne garantit pas sa pureté. Bricareau déploie des protocoles d'analyse scientifique pour identifier les contaminants invisibles qui impactent votre santé et vos installations. Du calcaire aux métaux lourds, notre diagnostic cible la racine de vos problèmes d'eau pour déployer la solution de traitement parfaitement adaptée.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Analyse certifiée des minéraux et bactéries",
                                        "Scan des métaux lourds",
                                        "Rapport d'analyse détaillé"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-blue-600" />
                                            <span className="font-bold text-slate-900">{text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <ProMaxButton 
                                        onClick={() => navigate('/tests-eau')}
                                        variant="primary"
                                    >
                                        Voir toutes les analyses 
                                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                                    </ProMaxButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. CONTACT FORM SECTION */}
                <section id="contact-form" className="py-32 bg-slate-50 relative scroll-mt-32" ref={formRef}>
                     {/* Background Watermark */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[22rem] font-black text-slate-200/20 select-none pointer-events-none tracking-tighter z-0 uppercase">
                        SUPPORT
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        {isSuccess ? (
                            <div className="max-w-2xl mx-auto bg-white rounded-[3rem] p-12 text-center shadow-2xl animate-in zoom-in-95 duration-500">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Demande Reçue !</h2>
                                <p className="text-slate-600 mb-10 text-lg">
                                    Merci pour votre message. Un expert technique de Bricareau analysera votre demande et vous contactera dans les plus brefs délais.
                                </p>
                                <Button
                                    onClick={() => {
                                        setIsSuccess(false);
                                        form.reset();
                                    }}
                                    className="rounded-full px-10 h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold"
                                >
                                    Faire une autre demande
                                </Button>
                            </div>
                        ) : (
                            <>
                                <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
                                    <h2 className="heading-pro-max">
                                        <span className="italic font-light text-[#18448F] block">Planifiez votre</span>
                                        <span className="font-bold text-[#18448F] block">rendez-vous de service.</span>
                                    </h2>
                                    <p className="body-pro-max max-w-2xl mx-auto">
                                        Besoin d'une installation, d'une réparation ou d'un simple changement de filtres ? Nos experts interviennent sur tous les types d'équipements, au Grand Montréal et ses environs.
                                    </p>
                                </div>

                                <div className="flex flex-col-reverse lg:flex-row items-start gap-16 lg:gap-20">
                                    {/* Left Icons Column */}
                                    <div className="lg:w-1/3 space-y-6">
                                        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-100 w-full group hover:shadow-md transition-all">
                                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                                <PhoneCall className="w-6 h-6" />
                                            </div>
                                            <div className="text-left">
                                                <h4 className="font-bold text-slate-900 text-sm">Appel sans frais</h4>
                                                <p className="text-blue-600 font-bold text-lg">1-855-264-9328</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-100 w-full group hover:shadow-md transition-all">
                                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                                <Calendar className="w-6 h-6" />
                                            </div>
                                            <div className="text-left">
                                                <h4 className="font-bold text-slate-900 text-sm">Disponibilités</h4>
                                                <p className="text-slate-500 text-sm">Lun - Ven : 8h00 - 18h00</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-100 w-full group hover:shadow-md transition-all">
                                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                            <div className="text-left">
                                                <h4 className="font-bold text-slate-900 text-sm">Zone d'intervention</h4>
                                                <p className="text-slate-500 text-sm text-[11px]">Partout au Grand Montréal et ses environs (Périmètre de 300km)</p>
                                            </div>
                                        </div>

                                        <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-200">
                                            <h4 className="font-bold text-lg mb-2">Besoin d'aide immédiate?</h4>
                                            <p className="text-white/80 text-sm font-light mb-6">Nos techniciens sont prêts à répondre à vos questions techniques complexes dès maintenant.</p>
                                            <ProMaxButton 
                                                variant="outline-white"
                                                className="w-full h-12"
                                            >
                                                <MessageSquare className="w-4 h-4 mr-2" /> Clavardage en direct
                                            </ProMaxButton>
                                        </div>
                                    </div>

                                    {/* Right Form Card */}
                                    <div className="lg:w-2/3 w-full">
                                        <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
                                            <div className="mb-10 text-left border-b border-slate-100 pb-6">
                                                <h3 className="text-2xl font-bold text-slate-900">Formulaire de demande</h3>
                                                <p className="text-slate-500 font-light mt-1">Réponse technique sous 15 minutes.</p>
                                            </div>

                                            <Form {...form}>
                                                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <FormField control={form.control} name="prenom" render={({ field }) => (
                                                        <FormItem className="space-y-2 text-left">
                                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Prénom*</FormLabel>
                                                            <FormControl><Input placeholder="Prénom" className="h-14 bg-slate-50 border-none rounded-2xl shadow-inner focus:bg-white transition-all" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="nom" render={({ field }) => (
                                                        <FormItem className="space-y-2 text-left">
                                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Nom*</FormLabel>
                                                            <FormControl><Input placeholder="Nom" className="h-14 bg-slate-50 border-none rounded-2xl shadow-inner focus:bg-white transition-all" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="email" render={({ field }) => (
                                                        <FormItem className="md:col-span-2 space-y-2 text-left">
                                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Courriel*</FormLabel>
                                                            <FormControl><Input placeholder="votre@email.com" type="email" className="h-14 bg-slate-50 border-none rounded-2xl shadow-inner focus:bg-white transition-all" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="phone" render={({ field }) => (
                                                        <FormItem className="space-y-2 text-left">
                                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Téléphone*</FormLabel>
                                                            <FormControl><Input placeholder="(514) 000-0000" type="tel" className="h-14 bg-slate-50 border-none rounded-2xl shadow-inner focus:bg-white transition-all" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <FormField control={form.control} name="interest" render={({ field }) => (
                                                        <FormItem className="space-y-2 text-left">
                                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Service requis*</FormLabel>
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
                                                        <FormItem className="md:col-span-2 space-y-2 text-left">
                                                            <FormLabel className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Détails de votre demande</FormLabel>
                                                            <FormControl><Textarea placeholder="Comment pouvons-nous vous aider ?" className="min-h-[120px] bg-slate-50 border-none rounded-2xl shadow-inner focus:bg-white" {...field} /></FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                    <div className="md:col-span-2 space-y-4 pt-4">
                                                        <FormField control={form.control} name="legal_consent" render={({ field }) => (
                                                            <FormItem className="flex flex-row items-start space-x-4 bg-slate-50 p-6 rounded-[2rem] border border-slate-100 transition-all hover:bg-slate-100/50">
                                                                <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
                                                                <div className="space-y-1">
                                                                    <FormLabel className="text-[11px] leading-relaxed text-slate-500 font-light cursor-pointer block" style={{ textAlign: 'justify' }}>
                                                                        En cochant cette case ou en utilisant le site web Bricareau.com, vous reconnaissez avoir lu les <Link to="/conditions-generales-utilisation" className="text-blue-600 font-bold underline">Conditions générales</Link> et la <Link to="/politique-de-confidentialite" className="text-blue-600 font-bold underline">Politique de confidentialité</Link>, les comprendre et accepter d'y être lié.*
                                                                    </FormLabel>
                                                                    <FormMessage />
                                                                </div>
                                                            </FormItem>
                                                        )} />

                                                        <ProMaxButton 
                                                            type="submit"
                                                            disabled={isSubmitting}
                                                            variant="primary"
                                                            className="w-full md:w-auto"
                                                        >
                                                            {isSubmitting ? (
                                                                <><Loader2 className="mr-2 w-5 h-5 animate-spin" /> Envoi en cours...</>
                                                            ) : (
                                                                <><Send className="mr-2 w-5 h-5" /> Envoyer ma demande</>
                                                            )}
                                                        </ProMaxButton>
                                                    </div>
                                                </form>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    );
};

export default ServicesTraitementEau;
