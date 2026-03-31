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
        email: ''
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
        <div id="quiz-container" className="flex items-center justify-center p-0 md:p-4 scroll-mt-40">
            <div className={cn(
                "w-full max-w-4xl bg-white border border-slate-100 rounded-none md:rounded-[3rem] shadow-sm overflow-hidden transition-all duration-500"
            )}>
                {/* Progress Header - Ultra-Compact */}
                <div className="pt-10 px-6 sm:px-12 w-full">
                    <div className="flex items-center justify-between mb-8 max-w-xl mx-auto w-full relative">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center gap-3 z-10 bg-white px-2 sm:px-4 text-center">
                            <div className={cn(
                                "w-2.5 h-2.5 rounded-full transition-all duration-500",
                                mainStep >= 1 ? "bg-blue-600 ring-4 ring-blue-50" : "bg-slate-200"
                            )} />
                            <span className={cn(
                                "text-[9px] font-black uppercase tracking-widest transition-colors",
                                mainStep >= 1 ? "text-blue-600" : "text-slate-300"
                            )}>Profil</span>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center gap-3 z-10 bg-white px-2 sm:px-4 text-center">
                            <div className={cn(
                                "w-2.5 h-2.5 rounded-full transition-all duration-500",
                                mainStep >= 2 ? "bg-blue-600 ring-4 ring-blue-50" : "bg-slate-200"
                            )} />
                            <span className={cn(
                                "text-[9px] font-black uppercase tracking-widest transition-colors",
                                mainStep >= 2 ? "text-blue-600" : "text-slate-300"
                            )}>Évaluation</span>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center gap-3 z-10 bg-white px-2 sm:px-4 text-center">
                            <div className={cn(
                                "w-2.5 h-2.5 rounded-full transition-all duration-500",
                                mainStep >= 3 || isSubmitted ? "bg-blue-600 ring-4 ring-blue-50" : "bg-slate-200"
                            )} />
                            <span className={cn(
                                "text-[9px] font-black uppercase tracking-widest transition-colors",
                                mainStep >= 3 || isSubmitted ? "text-blue-600" : "text-slate-300"
                            )}>Résultats</span>
                        </div>

                        <div className="absolute top-[5px] left-0 right-0 h-[1px] bg-slate-100 -z-0" />
                    </div>
                </div>

                {/* Quiz Content */}
                <div className="px-6 md:px-12 pb-12 min-h-[400px] flex flex-col justify-center">
                    {!isSubmitted ? (
                        <div key={step} className="animate-in fade-in slide-in-from-bottom-2 duration-500">

                            {/* Question 01: Occupancy */}
                            {step === 1 && (
                                <div className="space-y-8 py-4">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 text-center">Étape 01 — Statut</p>
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
                                                            "flex items-center justify-center p-8 rounded-[2rem] border-2 cursor-pointer transition-all hover:bg-slate-50 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50/20",
                                                            formData.occupancy === option ? "border-blue-600 bg-blue-50/20" : "border-slate-50 bg-slate-50/30"
                                                        )}
                                                    >
                                                        <span className="text-xl font-light text-slate-900">{option}</span>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                    <div className="flex justify-center pt-2">
                                        <Button
                                            disabled={!formData.occupancy}
                                            onClick={() => setStep(2)}
                                            size="lg"
                                            className="rounded-full px-12 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            Suivant <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Question 02: Residence */}
                            {step === 2 && (
                                <div className="space-y-8 py-4">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 text-center">Étape 02 — Habitat</p>
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
                                                            "flex items-center justify-center p-6 rounded-[2rem] border-2 cursor-pointer transition-all hover:bg-slate-50 h-24 text-center peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50/20",
                                                            formData.residenceType === option ? "border-blue-600 bg-blue-50/20" : "border-slate-50 bg-slate-50/30"
                                                        )}
                                                    >
                                                        <span className="text-lg font-light text-slate-900">{option}</span>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                    <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4 pt-2">
                                        <Button variant="outline" onClick={() => setStep(1)} size="lg" className="rounded-full px-12 transition-all w-full sm:w-auto">
                                            <ArrowLeft className="w-4 h-4 mr-2" /> Précédent
                                        </Button>
                                        <Button disabled={!formData.residenceType} onClick={() => setStep(3)} size="lg" className="rounded-full px-12 transition-all w-full sm:w-auto">
                                            Suivant <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Question 03: Source */}
                            {step === 3 && (
                                <div className="space-y-8 py-4">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 text-center">Étape 03 — Source</p>
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
                                                            "flex items-center justify-center p-6 rounded-[2rem] border-2 cursor-pointer transition-all hover:bg-slate-50 h-24 text-center peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50/20",
                                                            formData.source === option ? "border-blue-600 bg-blue-50/20" : "border-slate-50 bg-slate-50/30"
                                                        )}
                                                    >
                                                        <span className="text-lg font-light text-slate-900">{option}</span>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                    <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4 pt-2">
                                        <Button variant="outline" onClick={() => setStep(2)} size="lg" className="rounded-full px-12 transition-all w-full sm:w-auto">
                                            <ArrowLeft className="w-4 h-4 mr-2" /> Précédent
                                        </Button>
                                        <Button disabled={!formData.source} onClick={() => setStep(4)} size="lg" className="rounded-full px-12 transition-all w-full sm:w-auto">
                                            Suivant <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Question 04: Household */}
                            {step === 4 && (
                                <div className="space-y-8 py-4">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 text-center">Étape 04 — Foyer</p>
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
                                                    className={`h-24 rounded-[2rem] border-2 transition-all font-light text-xl ${formData.household === option ? 'border-blue-600 bg-blue-50/20 text-slate-900' : 'border-slate-50 bg-slate-50/30 text-slate-900 hover:border-blue-100'}`}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4 pt-2">
                                        <Button variant="outline" onClick={() => setStep(3)} size="lg" className="rounded-full px-12 transition-all w-full sm:w-auto">
                                            <ArrowLeft className="w-4 h-4 mr-2" /> Précédent
                                        </Button>
                                        <Button disabled={!formData.household} onClick={() => setStep(5)} size="lg" className="rounded-full px-12 transition-all w-full sm:w-auto">
                                            Analysez mon eau <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
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
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Étape {step.toString().padStart(2, '0')} — Symptômes</p>
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
                                                        formData.signs.includes(option) ? "border-blue-600 bg-blue-50/20" : "border-slate-50 bg-white hover:bg-slate-50"
                                                    )}
                                                >
                                                    <Checkbox checked={formData.signs.includes(option)} className="w-4 h-4 rounded-full border-slate-300" />
                                                    <span className="text-sm font-light text-slate-800 leading-tight">{option.replace(/ \(.*\)/, '')}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4 pt-6">
                                            <Button variant="outline" onClick={() => setStep(step - 1)} size="lg" className="rounded-full px-12 transition-all w-full sm:w-auto">
                                                <ArrowLeft className="w-4 h-4 mr-2" /> Précédent
                                            </Button>
                                            <Button onClick={() => setStep(step + 1)} size="lg" className="rounded-full px-12 transition-all w-full sm:w-auto">
                                                {step === 8 ? "Suivant" : "Continuer"} <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                );
                            })()}

                            {/* Final Step: Contact Form */}
                            {step === 9 && (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-xl mx-auto py-4">
                                    <div className="text-center space-y-2">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Résultats</p>
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
                                    </div>

                                    <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4 pt-4">
                                        <Button variant="outline" type="button" onClick={() => setStep(8)} size="lg" className="rounded-full px-12 transition-all w-full sm:w-auto">
                                            <ArrowLeft className="w-4 h-4 mr-2" /> Précédent
                                        </Button>
                                        <Button type="submit" disabled={isSubmitting} size="lg" className="rounded-full transition-all w-full sm:w-auto">
                                            {isSubmitting ? "Envoi..." : "Générer ma prescription gratuite"}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    ) : (
                        /* Results - Compact */
                        <div className="max-w-4xl mx-auto py-8">
                            <div className="text-center mb-10">
                                <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-4" />
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
                                        <Button variant="link" className="p-0 h-auto text-blue-600 font-bold text-xs" onClick={() => window.location.href = rec.link}>Voir le produit <ArrowRight className="ml-1 w-3 h-3" /></Button>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col items-center gap-4 pt-6 border-t border-slate-100">
                                <Button size="lg" className="bg-slate-900 border-slate-900 text-white hover:bg-white hover:text-slate-900 rounded-full px-12 shadow-xl transition-all" onClick={() => window.location.href = '/contact'}>Prendre rendez-vous avec un expert</Button>
                                <Button variant="ghost" onClick={() => { setIsSubmitted(false); setStep(1); }} className="text-slate-400 text-xs hover:text-blue-600 font-bold">Relancer le diagnostic</Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WaterDiagnosticQuiz;
