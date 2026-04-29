import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Droplets,
    Waves,
    MapPin,
    AlertTriangle,
    Heart,
    Users,
    Mail,
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    Sparkles,
    ShieldCheck,
    Activity,
    Zap,
    Info,
    Loader2,
    Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const steps = [
    {
        id: 1,
        title: "Votre profil",
        question: "Commençons par votre profil",
        icon: MapPin
    },
    {
        id: 2,
        title: "Vos symptômes",
        question: "Quels sont vos symptômes ?",
        description: "Cochez toutes les cases qui concernent votre consommation d'eau.",
        icon: Activity
    },
    {
        id: 3,
        title: "Nos recommandations",
        question: "Votre rapport personnalisé",
        icon: ShieldCheck
    }
];

const symptomCategories = [
    {
        title: "Accumulation et taches",
        options: [
            "Accumulation de tartre",
            "Corrosion des tuyaux",
            "Linge rêche",
            "Plats tachetés",
            "Résidus de savon",
            "Taches de rouille",
            "Taches bleu-vert"
        ]
    },
    {
        title: "Peau et cheveux",
        options: [
            "cheveux secs et ternes",
            "Peau sèche et irritée"
        ]
    },
    {
        title: "Goût, odeur et aspect",
        options: [
            "Amer",
            "Chlore (Goût/Odeur)",
            "Mauvais goût",
            "Métallique",
            "Moisisserie",
            "Nuageux",
            "Odeur d'oeuf pourri",
            "Salé"
        ]
    },
    {
        title: "Contaminants",
        options: [
            "Arsenic",
            "Bactéries",
            "Chlore (Contaminant)",
            "Eau dure",
            "Microplastiques",
            "Nitrate",
            "PFAS",
            "Plomb",

        ]
    }
];

const WaterDiagnosticQuiz = () => {
    // 1-4: Profil, 5-8: Symptoms (Categories), 9: Contact
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        occupancy: '',
        residenceType: '',
        source: '',
        signs: [] as string[],
        household: '',
        prenom: '',
        nom: '',
        phone: '',
        email: '',
        legal_consent: false,
        marketing_consent: false
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const element = document.getElementById('quiz-container');
        if (element) {
            const rect = element.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            window.scrollTo({ top: rect.top + scrollTop - 100, behavior: 'smooth' });
        }
    }, [step, isSubmitted]);

    const handleSourceChange = (value: string) => {
        setFormData({ ...formData, source: value });
    };

    const handleSignToggle = (sign: string) => {
        const newSigns = formData.signs.includes(sign)
            ? formData.signs.filter(s => s !== sign)
            : [...formData.signs, sign];
        setFormData({ ...formData, signs: newSigns });
    };

    const handleHouseholdChange = (value: string) => {
        setFormData({ ...formData, household: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const recommendations = getRecommendations();

        try {
            const { error: dbError } = await supabase
                .from("diagnostics_leads")
                .insert({
                    prenom: formData.prenom,
                    nom: formData.nom,
                    email: formData.email,
                    phone: formData.phone,
                    occupancy: formData.occupancy,
                    residence_type: formData.residenceType,
                    source: formData.source,
                    symptomes: formData.signs.join(", "),
                    household: formData.household,
                    recommendation_title: recommendations.map(r => r.title).join(" + "),
                    recommendation_product: recommendations.map(r => r.product).join(", ")
                });

            if (dbError) console.info("Note: Lead db insert skipped or failed", dbError.message);

            const { error: fnError } = await supabase.functions.invoke('send-water-diagnostic', {
                body: {
                    prenom: formData.prenom,
                    nom: formData.nom,
                    email: formData.email,
                    phone: formData.phone,
                    occupancy: formData.occupancy,
                    residenceType: formData.residenceType,
                    source: formData.source,
                    symptomes: formData.signs.join(", "),
                    household: formData.household,
                    recommendations: recommendations.map(r => ({
                        title: r.title,
                        product: r.product,
                        desc: r.desc,
                        link: window.location.origin + r.link
                    }))
                }
            });

            if (fnError) throw fnError;

            toast.success("Votre rapport a été envoyé par courriel !");
            setIsSubmitted(true);
        } catch (error) {
            console.error("Error submitting diagnostic:", error);
            toast.error("Erreur lors de l'envoi du courriel, mais voici vos résultats.");
            setIsSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const getRecommendations = () => {
        const { source, signs } = formData;
        const recs = [];

        if (["Accumulation de tartre", "Résidus de savon", "Plats tachetés", "Linge rêche",
            "cheveux secs et ternes", "Peau sèche", "Eau dure"].some(s => signs.includes(s))) {
            const isMunicipal = source === "Municipal";
            recs.push({
                title: isMunicipal ? "Adoucisseur d'Eau Municipal" : "Adoucisseur d'Eau de Puits",
                desc: "Élimine le calcaire et la dureté pour protéger vos tuyaux, vos électroménagers et votre peau.",
                link: isMunicipal ? "/adoucisseur-eau-residentiel" : "/adoucisseurs-eau-de-puits",
                product: isMunicipal ? "Série Sérénité HE" : "Série Infiniti"
            });
        }

        if (["Plomb", "Nitrate", "Microplastiques", "PFAS", "Amer", "Salé"].some(s => signs.includes(s))) {
            recs.push({
                title: "Système d'osmose inverse",
                desc: "Filtration moléculaire avancée pour éliminer plomb, nitrates et PFAS, garantissant une eau de boisson pure.",
                link: "/ro-6",
                product: "Système RO-6 PREMIUM"
            });
        }

        if (["Chlore (Contaminant)", "Chlore (Goût/Odeur)", "Mauvais goût"].some(s => signs.includes(s))) {
            recs.push({
                title: "Filtre spécialisé Chlor Stop",
                desc: "Élimine le chlore et les mauvais goûts pour une eau rafraîchissante et sans odeur de produits chimiques.",
                link: "/Filtres-deau",
                product: "Chlor Stop HE"
            });
        }

        if (signs.includes("Arsenic")) {
            recs.push({
                title: "Filtre spécialisé Zéro-As",
                desc: "Média filtrant haute performance conçu spécifiquement pour l'élimination sécuritaire de l'arsenic.",
                link: "/Filtres-deau",
                product: "Zéro-As"
            });
        }

        if (signs.includes("Bactéries")) {
            recs.push({
                title: "Système de désinfection UV",
                desc: "Désinfection microbiologique totale éliminant bactérie E. coli, virus et kystes sans résidus chimiques.",
                link: "/Systemes-de-desinfection-UV",
                product: "Série VH Bricareau"
            });
        }

        if (signs.includes("Métallique") || signs.includes("taches de rouille")) {
            recs.push({
                title: "Filtre spécialisé Iron Shield",
                desc: "Protection efficace contre le fer et les sédiments métalliques qui tachent la plomberie.",
                link: "/Filtres-deau",
                product: "Iron Shield"
            });
        }

        if (signs.includes("Odeur d'oeuf pourri")) {
            recs.push({
                title: "Filtre spécialisé Oxy-Pure",
                desc: "Élimine instantanément l'odeur d'oeufs pourris (soufre) par oxydation naturelle.",
                link: "/Filtres-deau",
                product: "Oxy-Pure"
            });
        }

        if (signs.includes("Nuageux")) {
            recs.push({
                title: "Filtre spécialisé Vortex",
                desc: "Clarifie l'eau trouble en éliminant les particules en suspension et sédiments fins.",
                link: "/Filtres-deau",
                product: "Vortex Sand Guard"
            });
        }

        if (signs.includes("Corrosion des tuyaux") || signs.includes("Taches bleu-vert")) {
            recs.push({
                title: "Filtre neutralisant Zen-pH",
                desc: "Neutralise l'eau corrosive pour protéger vos tuyaux de cuivre contre l'amincissement et les taches vertes.",
                link: "/Filtres-deau",
                product: "Série Zen-pH"
            });
        }

        if (recs.length === 0) {
            recs.push({
                title: "Solution Bricareau Sur Mesure",
                desc: "Une consultation personnalisée est recommandée pour votre situation.",
                link: "/contact",
                product: "Système Bricareau Elite"
            });
        }

        return recs;
    };

    const recommendations = getRecommendations();

    const getActiveMainStep = () => {
        if (isSubmitted) return 3;
        if (step <= 4) return 1; // Profil
        if (step >= 5 && step <= 8) return 2; // Evaluation
        if (step === 9) return 3; // Résultats
        return 3;
    };

    const mainStep = getActiveMainStep();

    return (
        <div id="quiz-container" className="flex items-center justify-center p-0 md:p-4 scroll-mt-40 w-full overflow-x-hidden">
            <div className={cn(
                "w-full max-w-4xl bg-white border border-slate-100 rounded-none md:rounded-[3rem] shadow-sm overflow-hidden"
            )}>
                {/* Progress Header - Ultra-Compact */}
                <div className="pt-10 px-0 sm:px-12 w-full overflow-x-hidden">
                    <div className="flex items-center justify-center gap-2 sm:gap-12 mb-8 max-w-xl mx-auto w-full relative px-2">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center gap-3 z-10 bg-white px-2 sm:px-4 text-center">
                            <div className={cn(
                                "w-2.5 h-2.5 rounded-full transition-all duration-500",
                                mainStep >= 1 ? "bg-[#18448F] ring-4 ring-[#18448F]/10" : "bg-slate-200"
                            )} />
                            <span className={cn(
                                "text-[8px] sm:text-[9px] font-black uppercase tracking-tight sm:tracking-widest transition-colors",
                                mainStep >= 1 ? "text-[#18448F]" : "text-slate-300"
                            )}>Profil</span>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center gap-3 z-10 bg-white px-2 sm:px-4 text-center">
                            <div className={cn(
                                "w-2.5 h-2.5 rounded-full transition-all duration-500",
                                mainStep >= 2 ? "bg-[#18448F] ring-4 ring-[#18448F]/10" : "bg-slate-200"
                            )} />
                            <span className={cn(
                                "text-[8px] sm:text-[9px] font-black uppercase tracking-tight sm:tracking-widest transition-colors",
                                mainStep >= 2 ? "text-[#18448F]" : "text-slate-300"
                            )}>Évaluation</span>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center gap-3 z-10 bg-white px-2 sm:px-4 text-center">
                            <div className={cn(
                                "w-2.5 h-2.5 rounded-full transition-all duration-500",
                                mainStep >= 3 || isSubmitted ? "bg-[#18448F] ring-4 ring-[#18448F]/10" : "bg-slate-200"
                            )} />
                            <span className={cn(
                                "text-[8px] sm:text-[9px] font-black uppercase tracking-tight sm:tracking-widest transition-colors",
                                mainStep >= 3 || isSubmitted ? "text-[#18448F]" : "text-slate-300"
                            )}>Résultats</span>
                        </div>

                        <div className="absolute top-[5px] left-0 right-0 h-[1px] bg-slate-100 -z-0" />
                    </div>
                </div>

                {/* Quiz Content */}
                <div className="py-8 md:py-12 px-0 md:px-12 min-h-[400px] flex flex-col items-center w-full relative">
                    {!isSubmitted ? (
                        <div key={step} className="animate-in fade-in slide-in-from-bottom-2 duration-500">

                            {/* Question 01: Occupancy */}
                            {step === 1 && (
                                <div className="space-y-8 py-4">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#18448F] text-center">Étape 01 — Statut</p>
                                        <h3 className="text-center" style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontSize: '24px',
                                            lineHeight: '28px',
                                            fontWeight: 500,
                                            color: 'rgb(15, 23, 42)'
                                        }}>Êtes-vous propriétaire ou locataire ?</h3>
                                        <RadioGroup
                                            value={formData.occupancy}
                                            onValueChange={(val) => setFormData({ ...formData, occupancy: val })}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl mx-auto pt-4"
                                        >
                                            {[ "Propriétaire", "Locataire" ].map((option) => (
                                                <div key={option} className="relative">
                                                    <RadioGroupItem value={option} id={`occ-${option}`} className="peer sr-only" />
                                                    <Label
                                                        htmlFor={`occ-${option}`}
                                                        className={cn(
                                                            "flex items-center justify-center p-8 rounded-[2rem] border-2 cursor-pointer transition-all hover:bg-slate-50 peer-data-[state=checked]:border-[#18448F] peer-data-[state=checked]:bg-[#18448F]/5",
                                                            formData.occupancy === option ? "border-[#18448F] bg-[#18448F]/5" : "border-slate-50 bg-slate-50/30"
                                                        )}
                                                    >
                                                        <span className="text-xl font-light text-slate-900">{option}</span>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                    <div className="flex justify-center pt-2">
                                        <div className="relative group w-full sm:w-auto">
                                            <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                            <Button
                                                disabled={!formData.occupancy}
                                                onClick={() => setStep(2)}
                                                className="relative w-full sm:w-auto bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                            >
                                                Suivant <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Question 02: Residence */}
                            {step === 2 && (
                                <div className="space-y-8 py-4">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#18448F] text-center">Étape 02 — Habitat</p>
                                        <h3 className="text-center" style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontSize: '24px',
                                            lineHeight: '28px',
                                            fontWeight: 500,
                                            color: 'rgb(15, 23, 42)'
                                        }}>Quel type d'habitation ?</h3>
                                        <RadioGroup
                                            value={formData.residenceType}
                                            onValueChange={(val) => setFormData({ ...formData, residenceType: val })}
                                            className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-4"
                                        >
                                            {[ "Chalet", "Condo", "Maison" ].map((option) => (
                                                <div key={option} className="relative">
                                                    <RadioGroupItem value={option} id={`res-${option}`} className="peer sr-only" />
                                                    <Label
                                                        htmlFor={`res-${option}`}
                                                        className={cn(
                                                            "flex items-center justify-center p-6 rounded-[2rem] border-2 cursor-pointer transition-all hover:bg-slate-50 h-24 text-center peer-data-[state=checked]:border-[#18448F] peer-data-[state=checked]:bg-[#18448F]/5",
                                                            formData.residenceType === option ? "border-[#18448F] bg-[#18448F]/5" : "border-slate-50 bg-slate-50/30"
                                                        )}
                                                    >
                                                        <span className="text-lg font-light text-slate-900">{option}</span>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-2">
                                        <div className="relative group w-full sm:w-auto">
                                            <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                            <Button 
                                                variant="outline" 
                                                onClick={() => setStep(1)} 
                                                className="relative w-full sm:w-auto bg-white hover:bg-[#18448F] text-[#18448F] hover:text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                            >
                                                <ArrowLeft className="w-4 h-4 mr-2" /> Précédent
                                            </Button>
                                        </div>
                                        <div className="relative group w-full sm:w-auto">
                                            <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                            <Button 
                                                disabled={!formData.residenceType} 
                                                onClick={() => setStep(3)} 
                                                className="relative w-full sm:w-auto bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                            >
                                                Suivant <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Question 03: Source */}
                            {step === 3 && (
                                <div className="space-y-8 py-4">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#18448F] text-center">Étape 03 — Source</p>
                                        <h3 className="text-center" style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontSize: '24px',
                                            lineHeight: '28px',
                                            fontWeight: 500,
                                            color: 'rgb(15, 23, 42)'
                                        }}>D'où provient votre eau ?</h3>
                                        <RadioGroup
                                            value={formData.source}
                                            onValueChange={(val) => handleSourceChange(val)}
                                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto pt-4"
                                        >
                                            {[ "Municipal", "Eau de puits" ].map((option) => (
                                                <div key={option} className="relative">
                                                    <RadioGroupItem value={option} id={`src-${option}`} className="peer sr-only" />
                                                    <Label
                                                        htmlFor={`src-${option}`}
                                                        className={cn(
                                                            "flex items-center justify-center p-6 rounded-[2rem] border-2 cursor-pointer transition-all hover:bg-slate-50 h-24 text-center peer-data-[state=checked]:border-[#18448F] peer-data-[state=checked]:bg-[#18448F]/5",
                                                            formData.source === option ? "border-[#18448F] bg-[#18448F]/5" : "border-slate-50 bg-slate-50/30"
                                                        )}
                                                    >
                                                        <span className="text-lg font-light text-slate-900">{option}</span>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-2">
                                        <div className="relative group w-full sm:w-auto">
                                            <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                            <Button 
                                                variant="outline" 
                                                onClick={() => setStep(2)} 
                                                className="relative w-full sm:w-auto bg-white hover:bg-[#18448F] text-[#18448F] hover:text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                            >
                                                <ArrowLeft className="w-4 h-4 mr-2" /> Précédent
                                            </Button>
                                        </div>
                                        <div className="relative group w-full sm:w-auto">
                                            <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                            <Button 
                                                disabled={!formData.source} 
                                                onClick={() => setStep(4)} 
                                                className="relative w-full sm:w-auto bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                            >
                                                Suivant <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Question 04: Household */}
                            {step === 4 && (
                                <div className="space-y-8 py-4">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#18448F] text-center">Étape 04 — Foyer</p>
                                        <h3 className="text-center" style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontSize: '24px',
                                            lineHeight: '28px',
                                            fontWeight: 500,
                                            color: 'rgb(15, 23, 42)'
                                        }}>Combien de personnes ?</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto pt-4">
                                            {[ "1 à 2", "3 à 5", "6+" ].map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() => handleHouseholdChange(option)}
                                                    className={`h-24 rounded-[2rem] border-2 transition-all font-light text-xl ${formData.household === option ? 'border-[#18448F] bg-[#18448F]/5 text-slate-900' : 'border-slate-50 bg-slate-50/30 text-slate-900 hover:border-[#18448F]/20'}`}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-2">
                                        <div className="relative group w-full sm:w-auto">
                                            <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                            <Button 
                                                variant="outline" 
                                                onClick={() => setStep(3)} 
                                                className="relative w-full sm:w-auto bg-white hover:bg-[#18448F] text-[#18448F] hover:text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                            >
                                                <ArrowLeft className="w-4 h-4 mr-2" /> Précédent
                                            </Button>
                                        </div>
                                        <div className="relative group w-full sm:w-auto">
                                            <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                            <Button 
                                                disabled={!formData.household} 
                                                onClick={() => setStep(5)} 
                                                className="relative w-full sm:w-auto bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                            >
                                                Analysez mon eau <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Steps 5, 6, 7, 8: Granular Symptoms Categories */}
                            {[5, 6, 7, 8].includes(step) && (() => {
                                const catIdx = step - 5;
                                const category = symptomCategories[catIdx];
                                return (
                                    <div className="space-y-8 py-4">
                                        <div className="text-center max-w-xl mx-auto space-y-2">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#18448F]">Étape {step.toString().padStart(2, '0')} — Symptômes</p>
                                            <h3 style={{
                                                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                                fontSize: '24px',
                                                lineHeight: '28px',
                                                fontWeight: 500,
                                                color: 'rgb(15, 23, 42)'
                                            }}>{category.title}</h3>
                                            <p className="text-slate-500 text-sm font-light">Cochez les éléments observés chez vous.</p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
                                            {category.options.map((option) => (
                                                <div
                                                    key={option}
                                                    onClick={() => handleSignToggle(option)}
                                                    className={cn(
                                                        "group p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3",
                                                        formData.signs.includes(option) ? "border-[#18448F] bg-[#18448F]/5" : "border-slate-50 bg-white hover:bg-slate-50"
                                                    )}
                                                >
                                                    <Checkbox checked={formData.signs.includes(option)} className="w-4 h-4 rounded-full border-slate-300 data-[state=checked]:bg-[#18448F] data-[state=checked]:border-[#18448F]" />
                                                    <span className="text-sm font-light text-slate-800 leading-tight">{option.replace(/ \(.*\)/, '')}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
                                            <div className="relative group w-full sm:w-auto">
                                                <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                                <Button 
                                                    variant="outline" 
                                                    onClick={() => setStep(step - 1)} 
                                                    className="relative w-full sm:w-auto bg-white hover:bg-[#18448F] text-[#18448F] hover:text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                                >
                                                    <ArrowLeft className="w-4 h-4 mr-2" /> Précédent
                                                </Button>
                                            </div>
                                            <div className="relative group w-full sm:w-auto">
                                                <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                                <Button 
                                                    onClick={() => setStep(step + 1)} 
                                                    className="relative w-full sm:w-auto bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                                >
                                                    {step === 8 ? "Suivant" : "Continuer"} <ArrowRight className="ml-2 w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()}

                            {/* Final Step: Contact Form */}
                            {step === 9 && (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-xl mx-auto py-4">
                                    <div className="text-center space-y-2">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#18448F]">Résultats</p>
                                        <h3 style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontSize: '24px',
                                            lineHeight: '28px',
                                            fontWeight: 500,
                                            color: 'rgb(15, 23, 42)'
                                        }}>Où envoyer votre rapport ?</h3>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <Input placeholder="Prénom" required className="h-12 rounded-xl border-slate-100 font-light" value={formData.prenom} onChange={(e) => setFormData({ ...formData, prenom: e.target.value })} />
                                        <Input placeholder="Nom" required className="h-12 rounded-xl border-slate-100 font-light" value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })} />
                                        <Input type="tel" placeholder="Téléphone" required className="h-12 rounded-xl border-slate-100 font-light col-span-2" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                                        <Input type="email" placeholder="Email" required className="h-12 rounded-xl border-slate-100 font-light col-span-2" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                        
                                        <div className="col-span-2 space-y-4 pt-2">
                                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 transition-all hover:bg-slate-100/50">
                                                <Checkbox 
                                                    id="legal_consent" 
                                                    required 
                                                    checked={formData.legal_consent}
                                                    onCheckedChange={(checked) => setFormData({ ...formData, legal_consent: checked === true })}
                                                    className="data-[state=checked]:bg-[#18448F] data-[state=checked]:border-[#18448F]"
                                                />
                                                <Label htmlFor="legal_consent" className="text-[10px] leading-relaxed text-slate-500 font-normal cursor-pointer select-none" style={{ textAlign: 'justify' }}>
                                                    En cochant cette case ou en utilisant le site web Bricareau.com, vous reconnaissez avoir lu les Conditions générales et la Politique de confidentialité, les comprendre et accepter d'y être lié.*
                                                </Label>
                                            </div>

                                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 transition-all hover:bg-slate-100/50">
                                                <Checkbox 
                                                    id="marketing_consent" 
                                                    checked={formData.marketing_consent}
                                                    onCheckedChange={(checked) => setFormData({ ...formData, marketing_consent: checked === true })}
                                                    className="data-[state=checked]:bg-[#18448F] data-[state=checked]:border-[#18448F]"
                                                />
                                                <Label htmlFor="marketing_consent" className="text-[10px] leading-relaxed text-slate-500 font-normal cursor-pointer select-none">
                                                    Je souhaite recevoir les prochaines communications de Bricareau. (Vous pouvez vous désabonner à tout moment.)
                                                </Label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
                                        <div className="relative group w-full sm:w-auto">
                                            <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                            <Button 
                                                variant="outline" 
                                                type="button" 
                                                onClick={() => setStep(8)} 
                                                className="relative w-full sm:w-auto bg-white hover:bg-[#18448F] text-[#18448F] hover:text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                            >
                                                <ArrowLeft className="w-4 h-4 mr-2" /> Précédent
                                            </Button>
                                        </div>
                                        <div className="relative group w-full sm:w-auto">
                                            <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                            <Button 
                                                type="submit" 
                                                disabled={isSubmitting} 
                                                className="relative w-full sm:w-auto bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                            >
                                                {isSubmitting ? "Envoi..." : "Obtenir mon rapport"}
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    ) : (
                        /* Results - Compact */
                        <div className="w-full py-4 px-4 md:px-8 flex flex-col items-center">
                            <div className="text-center mb-8 w-full flex flex-col items-center">
                                <ShieldCheck className="w-10 h-10 text-[#18448F] mx-auto mb-4" />
                                <h2 className="mb-2" style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontSize: '24px',
                                    lineHeight: '28px',
                                    fontWeight: 500,
                                    color: 'rgb(15, 23, 42)'
                                }}>Votre rapport d'eau</h2>
                                <p className="text-slate-500">Solutions recommandées pour votre foyer.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                {recommendations.map((rec, idx) => (
                                    <div key={idx} className="bg-slate-50 rounded-3xl p-6 border-2 border-transparent hover:border-blue-100 transition-all flex flex-col items-start">
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">{rec.title}</h4>
                                        <p className="text-slate-500 text-sm font-light mb-4 line-clamp-2">{rec.desc}</p>
                                        <Button variant="link" className="p-0 h-auto text-[#18448F] font-bold text-xs" onClick={() => window.location.href = rec.link}>Voir le produit <ArrowRight className="ml-1 w-3 h-3" /></Button>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col items-center gap-8 pt-6 border-t border-slate-100 w-full">
                                <div className="relative group w-full sm:w-auto">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button 
                                        onClick={() => window.location.href = '/contact'}
                                        className="relative w-full sm:w-auto bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                    >
                                        Prendre rendez-vous avec un expert
                                    </Button>
                                </div>
                                <div className="relative group w-full sm:w-auto">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button 
                                        variant="outline"
                                        onClick={() => { setIsSubmitted(false); setStep(1); }}
                                        className="relative w-full sm:w-auto bg-white hover:bg-[#18448F] text-[#18448F] hover:text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                    >
                                        Relancer le diagnostic
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WaterDiagnosticQuiz;
