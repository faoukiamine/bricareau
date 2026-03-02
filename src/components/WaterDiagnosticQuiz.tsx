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
    Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const steps = [
    {
        id: 1,
        title: "Votre situation",
        question: "Commençons par votre situation",
        icon: MapPin,
    },
    {
        id: 2,
        title: "Vos symptômes",
        question: "Quels sont vos symptômes ?",
        description: "Cochez toutes les cases qui concernent votre consommation d'eau.",
        icon: Activity,
    },
    {
        id: 3,
        title: "Nos recommandations",
        question: "Votre rapport personnalisé",
        icon: ShieldCheck,
    }
];

const symptomCategories = [
    {
        title: "Accumulation et taches",
        options: [
            "Échelle / accumulation",
            "Résidus de savon",
            "Plats tachetés",
            "Linge rêche et irritant",
            "Corrosion des canalisations",
            "taches de rouille",
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
            "Chlore (Goût/Odeur)",
            "Amer",
            "Salé",
            "mauvais goût",
            "Métallique",
            "Odeur d'oeuf pourri",
            "Moisisserie/marécageux",
            "Nuageux/sédimentaire"
        ]
    },
    {
        title: "Contaminants",
        options: [
            "Arsenic",
            "Chlore (Contaminant)",
            "Nitrate",
            "Bactéries",
            "Plomb",
            "Microplastiques",
            "PFAS",
            "Eau dure"
        ]
    }
];

const WaterDiagnosticQuiz = () => {
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
            // 1. Enregistrer dans la base de données
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

            // 2. Envoyer le courriel via Edge Function
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
                },
            });

            if (fnError) throw fnError;

            toast.success("Votre prescription a été envoyée par courriel !");
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

        // 1. Adoucisseur (Calcaire, Peau sèche, Eau dure)
        if (["Échelle / accumulation", "Résidus de savon", "Plats tachetés", "Linge rêche et irritant",
            "cheveux secs et ternes", "Peau sèche et irritée", "Eau dure"].some(s => signs.includes(s))) {
            const isMunicipal = source === "Municipal";
            recs.push({
                title: isMunicipal ? "Adoucisseur d'Eau Municipal" : "Adoucisseur d'Eau de Puits",
                desc: "Élimine le calcaire et la dureté pour protéger vos tuyaux, vos électroménagers et votre peau.",
                link: isMunicipal ? "/adoucisseur-eau-residentiel" : "/adoucisseurs-eau-de-puits",
                product: isMunicipal ? "Série Sérénité HE" : "Série Infiniti"
            });
        }

        // 2. Osmose Inverse (Métaux lourds, Santé, Goût Amer/Salé)
        if (["Plomb", "Nitrate", "Microplastiques", "PFAS", "Amer", "Salé"].some(s => signs.includes(s))) {
            recs.push({
                title: "Système d'osmose inverse",
                desc: "Filtration moléculaire avancée pour éliminer plomb, nitrates et PFAS, garantissant une eau de boisson pure.",
                link: "/ro-6",
                product: "Système RO-6 PREMIUM"
            });
        }

        // 3. Charbon Actif / Chlor Stop (Chlore, Mauvais goût)
        if (["Chlore (Contaminant)", "Chlore (Goût/Odeur)", "mauvais goût"].some(s => signs.includes(s))) {
            recs.push({
                title: "Filtre spécialisé Chlor Stop",
                desc: "Élimine le chlore et les mauvais goûts pour une eau rafraîchissante et sans odeur de produits chimiques.",
                link: "/Filtres-deau",
                product: "Chlor Stop HE"
            });
        }

        // 4. Arsenic
        if (signs.includes("Arsenic")) {
            recs.push({
                title: "Filtre spécialisé Zéro-As",
                desc: "Média filtrant haute performance conçu spécifiquement pour l'élimination sécuritaire de l'arsenic.",
                link: "/Filtres-deau",
                product: "Zéro-As"
            });
        }

        // 5. Désinfection UV
        if (signs.includes("Bactéries")) {
            recs.push({
                title: "Système de désinfection UV",
                desc: "Désinfection microbiologique totale éliminant bactérie E. coli, virus et kystes sans résidus chimiques.",
                link: "/Systemes-de-desinfection-UV",
                product: "Série VH Bricareau"
            });
        }

        // 6. Iron Shield
        if (signs.includes("Métallique") || signs.includes("taches de rouille")) {
            recs.push({
                title: "Filtre spécialisé Iron Shield",
                desc: "Protection efficace contre le fer et les sédiments métalliques qui tachent la plomberie.",
                link: "/Filtres-deau",
                product: "Iron Shield"
            });
        }

        // 7. Oxy-pure
        if (signs.includes("Odeur d'oeuf pourri")) {
            recs.push({
                title: "Filtre spécialisé Oxy-Pure",
                desc: "Élimine instantanément l'odeur d'oeufs pourris (soufre) par oxydation naturelle.",
                link: "/Filtres-deau",
                product: "Oxy-Pure"
            });
        }

        // 8. Vortex
        if (signs.includes("Nuageux/sédimentaire")) {
            recs.push({
                title: "Filtre spécialisé Vortex",
                desc: "Clarifie l'eau trouble en éliminant les particules en suspension et sédiments fins.",
                link: "/Filtres-deau",
                product: "Vortex Sand Guard"
            });
        }

        // 9. Zen-pH
        if (signs.includes("Corrosion des canalisations") || signs.includes("Taches bleu-vert")) {
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

    return (
        <div className="min-h-[700px] flex items-center justify-center p-4">
            <div className={cn(
                "w-full max-w-4xl bg-white/80 backdrop-blur-xl border border-blue-100 rounded-[40px] shadow-2xl overflow-hidden transition-all duration-500"
            )}>

                {/* Progress Header - New Layout according to image */}
                <div className="pt-10 px-6 sm:px-12 w-full">
                    <div className="flex items-center justify-between mb-8 max-w-4xl mx-auto w-full relative">
                        {/* Step 1: Emplacement (Fusion Code steps 1 & 3) */}
                        <div className="flex items-center gap-3 z-10 bg-white/80 pr-4">
                            <div className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                                step > 1 ? "bg-blue-600 shadow-lg shadow-blue-200" : "bg-blue-600 shadow-lg shadow-blue-200"
                            )}>
                                {step > 1 ? (
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                ) : (
                                    <span className="text-white font-bold">1</span>
                                )}
                            </div>
                            <span className={cn(
                                "hidden sm:block text-[10px] md:text-sm lg:text-base font-bold transition-colors",
                                step >= 1 ? "text-slate-900" : "text-slate-400"
                            )}>Votre situation</span>
                        </div>

                        {/* Step 2: Préoccupations */}
                        <div className="flex items-center gap-3 z-10 bg-white/80 px-4">
                            <div className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                                step > 2 ? "bg-blue-600 shadow-lg shadow-blue-200" : (step === 2 ? "bg-blue-600 shadow-lg shadow-blue-200" : "bg-slate-500")
                            )}>
                                {step > 2 ? (
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                ) : (
                                    <span className="text-white font-bold">2</span>
                                )}
                            </div>
                            <span className={cn(
                                "hidden sm:block text-[10px] md:text-sm lg:text-base font-bold transition-colors",
                                step >= 2 ? "text-slate-900" : "text-slate-400"
                            )}>Vos symptômes</span>
                        </div>

                        {/* Step 3: Recommandations */}
                        <div className="flex items-center gap-3 z-10 bg-white/80 pl-4">
                            <div className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                                isSubmitted ? "bg-blue-600 shadow-lg shadow-blue-200" : (step === 3 ? "bg-blue-600 shadow-lg shadow-blue-200" : "bg-slate-500")
                            )}>
                                {isSubmitted ? (
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                ) : (
                                    <span className="text-white font-bold">3</span>
                                )}
                            </div>
                            <span className={cn(
                                "hidden sm:block text-[10px] md:text-sm lg:text-base font-bold transition-colors",
                                step === 3 || isSubmitted ? "text-slate-900" : "text-slate-400"
                            )}>Nos recommandations</span>
                        </div>

                        {/* Background Line */}
                        <div className="absolute top-5 left-0 right-0 h-[1px] bg-slate-200 -z-0" />
                    </div>

                    {/* Bottom Border Line */}
                    <div className="w-full h-px bg-slate-200 mb-10" />
                </div>

                {/* Quiz Steps */}
                <div className="px-8 pb-12">
                    {!isSubmitted ? (
                        <div key={step} className="animate-in fade-in slide-in-from-bottom-4 duration-500">

                            {/* Step 1: Emplacement (Source + Household Fusion) */}
                            {step === 1 && (
                                <div className="space-y-10">
                                    <div className="text-center">
                                        <h2 className="text-3xl font-light text-slate-900 tracking-tight leading-tight mb-8">
                                            Parlez-nous de <span className="font-bold text-blue-600">votre situation</span>
                                        </h2>
                                    </div>

                                    {/* Question 0: Occupancy */}
                                    <div className="space-y-4">
                                        <p className="text-sm font-black uppercase tracking-widest text-blue-600 text-center">Êtes-vous ?</p>
                                        <RadioGroup
                                            value={formData.occupancy}
                                            onValueChange={(val) => setFormData({ ...formData, occupancy: val })}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        >
                                            {[
                                                "Propriétaire",
                                                "Locataire"
                                            ].map((option) => (
                                                <div key={option} className="relative">
                                                    <RadioGroupItem
                                                        value={option}
                                                        id={`occ-${option}`}
                                                        className="peer sr-only"
                                                    />
                                                    <Label
                                                        htmlFor={`occ-${option}`}
                                                        className={cn(
                                                            "flex items-center gap-4 p-6 rounded-2xl border-2 cursor-pointer transition-all hover:bg-slate-50 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50/50 peer-data-[state=checked]:shadow-md",
                                                            formData.occupancy === option ? "border-blue-600 bg-blue-50/50" : "border-slate-100"
                                                        )}
                                                    >
                                                        <div className={cn(
                                                            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                                                            formData.occupancy === option ? "border-blue-600 bg-blue-600" : "border-slate-300 bg-white"
                                                        )}>
                                                            {formData.occupancy === option && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                                                        </div>
                                                        <span className="text-lg font-bold text-slate-700">{option}</span>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>

                                    {/* Question 0.2: Residence Type */}
                                    <div className="space-y-4">
                                        <p className="text-sm font-black uppercase tracking-widest text-blue-600 text-center">Habitez-vous ?</p>
                                        <RadioGroup
                                            value={formData.residenceType}
                                            onValueChange={(val) => setFormData({ ...formData, residenceType: val })}
                                            className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4"
                                        >
                                            {[
                                                "Condo",
                                                "Maison unifamiliale",
                                                "Chalet"
                                            ].map((option) => (
                                                <div key={option} className="relative">
                                                    <RadioGroupItem
                                                        value={option}
                                                        id={`res-${option}`}
                                                        className="peer sr-only"
                                                    />
                                                    <Label
                                                        htmlFor={`res-${option}`}
                                                        className={cn(
                                                            "flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-2xl border-2 cursor-pointer transition-all hover:bg-slate-50 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50/50 peer-data-[state=checked]:shadow-md h-full",
                                                            formData.residenceType === option ? "border-blue-600 bg-blue-50/50" : "border-slate-100"
                                                        )}
                                                    >
                                                        <div className={cn(
                                                            "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all",
                                                            formData.residenceType === option ? "border-blue-600 bg-blue-600" : "border-slate-300 bg-white"
                                                        )}>
                                                            {formData.residenceType === option && <div className="w-2 h-2 rounded-full bg-white" />}
                                                        </div>
                                                        <span className="text-base font-bold text-slate-700">{option}</span>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>

                                    {/* Question A: Source */}
                                    <div className="space-y-4">
                                        <p className="text-sm font-black uppercase tracking-widest text-blue-600 text-center">D'où provient votre eau ?</p>
                                        <RadioGroup
                                            value={formData.source}
                                            onValueChange={handleSourceChange}
                                            className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4"
                                        >
                                            {[
                                                "Municipal",
                                                "Eau de puits",
                                                "Pas sûr"
                                            ].map((option) => (
                                                <div key={option} className="relative">
                                                    <RadioGroupItem
                                                        value={option}
                                                        id={`src-${option}`}
                                                        className="peer sr-only"
                                                    />
                                                    <Label
                                                        htmlFor={`src-${option}`}
                                                        className={cn(
                                                            "flex items-center gap-4 p-6 rounded-2xl border-2 cursor-pointer transition-all hover:bg-slate-50 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50/50 peer-data-[state=checked]:shadow-md h-full",
                                                            formData.source === option ? "border-blue-600 bg-blue-50/50" : "border-slate-100"
                                                        )}
                                                    >
                                                        <div className={cn(
                                                            "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all",
                                                            formData.source === option ? "border-blue-600 bg-blue-600" : "border-slate-300 bg-white"
                                                        )}>
                                                            {formData.source === option && <div className="w-2 h-2 rounded-full bg-white" />}
                                                        </div>
                                                        <span className="text-lg font-bold text-slate-700">{option}</span>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>

                                    {/* Question B: Household */}
                                    <div className="space-y-4">
                                        <p className="text-sm font-black uppercase tracking-widest text-blue-600 text-center">Combien de personnes au foyer ?</p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {[
                                                "1 à 2 personnes",
                                                "3 à 5 personnes",
                                                "6 personnes et plus"
                                            ].map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() => handleHouseholdChange(option)}
                                                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all text-center h-28 ${formData.household === option
                                                        ? 'border-blue-600 bg-blue-50/50 shadow-md scale-[1.02]'
                                                        : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50'
                                                        }`}
                                                >
                                                    <span className="text-lg font-bold text-slate-700">{option}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6 flex justify-center">
                                        <Button
                                            type="button"
                                            disabled={!formData.source || !formData.household || !formData.occupancy || !formData.residenceType}
                                            className="h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xl font-bold w-full max-w-md shadow-xl shadow-blue-100 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:grayscale"
                                            onClick={() => setStep(2)}
                                        >
                                            Suivant <ArrowRight className="ml-3 w-6 h-6" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Symptoms */}
                            {step === 2 && (
                                <div className="space-y-12">
                                    <div className="text-center mb-10">
                                        <h2 className="text-3xl font-light text-slate-900 tracking-tight leading-tight">
                                            Quels sont <span className="font-bold text-blue-600">vos symptômes ?</span>
                                        </h2>
                                        <p className="text-slate-500 text-sm mt-4 italic">Cochez toutes les préoccupations qui vous concernent.</p>
                                    </div>

                                    {symptomCategories.map((category, catIdx) => (
                                        <div key={catIdx} className="space-y-6">
                                            <h3 className="text-xl font-bold text-blue-900 border-b border-blue-50 pb-2">{category.title}</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {category.options.map((option) => (
                                                    <div
                                                        key={option}
                                                        onClick={() => handleSignToggle(option)}
                                                        className={cn(
                                                            "group p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4",
                                                            formData.signs.includes(option)
                                                                ? "border-blue-600 bg-blue-50/50 shadow-sm"
                                                                : "border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50"
                                                        )}
                                                    >
                                                        <Checkbox
                                                            checked={formData.signs.includes(option)}
                                                            className="w-6 h-6 border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 rounded-md"
                                                        />
                                                        <span className="text-sm font-bold text-slate-700 leading-tight">
                                                            {option.replace(/ \(.*\)/, '')}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <button
                                            type="button"
                                            className="text-slate-400 hover:text-blue-600 font-bold px-8 py-4 transition-colors order-2 sm:order-1"
                                            onClick={() => setStep(1)}
                                        >
                                            Retour
                                        </button>
                                        <Button
                                            type="button"
                                            className="h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xl font-bold w-full max-w-md shadow-xl shadow-blue-100 transition-all hover:scale-[1.02] order-1 sm:order-2"
                                            onClick={() => setStep(3)}
                                        >
                                            Suivant <ArrowRight className="ml-3 w-6 h-6" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Contact Form */}
                            {step === 3 && (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6 animate-in fade-in duration-500">
                                    <div className="text-center mb-4">
                                        <h2 className="text-2xl font-light text-slate-900 mb-2">Finalisons votre <span className="font-bold text-blue-600">rapport personnalisé</span></h2>
                                        <p className="text-slate-500">Où devrions-nous envoyer vos résultats ?</p>
                                    </div>


                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-sm font-bold text-slate-700 ml-1">Prénom</Label>
                                            <Input
                                                placeholder="Jean"
                                                required
                                                className="h-14 rounded-xl border-2 border-slate-100 focus:border-blue-600 transition-all font-medium"
                                                value={formData.prenom}
                                                onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-sm font-bold text-slate-700 ml-1">Nom</Label>
                                            <Input
                                                placeholder="Dupont"
                                                required
                                                className="h-14 rounded-xl border-2 border-slate-100 focus:border-blue-600 transition-all font-medium"
                                                value={formData.nom}
                                                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-sm font-bold text-slate-700 ml-1">Téléphone</Label>
                                            <Input
                                                type="tel"
                                                placeholder="(514) 000-0000"
                                                required
                                                className="h-14 rounded-xl border-2 border-slate-100 focus:border-blue-600 transition-all font-medium"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-sm font-bold text-slate-700 ml-1">Courriel</Label>
                                            <Input
                                                type="email"
                                                placeholder="jean@exemple.com"
                                                required
                                                className="h-14 rounded-xl border-2 border-slate-100 focus:border-blue-600 transition-all font-medium"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                                        <button
                                            type="button"
                                            className="text-slate-400 hover:text-blue-600 font-bold px-8 py-4 transition-colors order-2 sm:order-1"
                                            onClick={() => setStep(2)}
                                        >
                                            Précédent
                                        </button>
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xl font-bold w-full shadow-xl shadow-blue-100 transition-all hover:scale-[1.02] order-1 sm:order-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-3 w-6 h-6 animate-spin" />
                                                    Envoi en cours...
                                                </>
                                            ) : (
                                                <>
                                                    Obtenir ma prescription d'eau
                                                    <ArrowRight className="ml-3 w-6 h-6" />
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            )}

                            {/* Navigation Footer */}
                            {step > 1 && (
                                <div className="mt-8 flex justify-center">
                                    <button
                                        onClick={() => setStep(step - 1)}
                                        className="flex items-center text-slate-400 hover:text-blue-600 font-medium transition-colors"
                                    >
                                        <ArrowLeft className="mr-2 w-4 h-4" /> Retour à l'étape précédente
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Result Section */
                        <div className="animate-in zoom-in-95 duration-700">
                            <div className="text-center mb-10">
                                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-2">Votre Prescription d'Eau</h2>
                                <p className="text-slate-500 italic">Voici les solutions recommandées basées sur votre profil</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                                {recommendations.map((rec, idx) => (
                                    <div key={idx} className="bg-white border-2 border-blue-50 hover:border-blue-600 rounded-[30px] p-6 shadow-xl transition-all group relative overflow-hidden flex flex-col justify-between">
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                                            <Zap className="w-16 h-16 text-blue-600" />
                                        </div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="px-2 py-0.5 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full">
                                                    Recommandé
                                                </span>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                                    {rec.product}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{rec.title}</h3>
                                            <p className="text-sm text-slate-600 mb-6 leading-snug">
                                                {rec.desc}
                                            </p>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            className="p-0 text-blue-600 font-bold hover:bg-transparent hover:text-blue-700 group-hover:translate-x-1 transition-transform self-start mt-auto"
                                            onClick={() => window.location.href = rec.link}
                                        >
                                            Découvrir <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4">
                                <Button
                                    className="h-16 bg-blue-900 hover:bg-black text-white rounded-2xl text-lg font-bold shadow-lg"
                                    onClick={() => window.location.href = '/contact'}
                                >
                                    Parler à un spécialiste
                                </Button>
                                <button
                                    onClick={() => { setIsSubmitted(false); setStep(1); }}
                                    className="text-slate-400 hover:text-blue-600 font-medium py-4 transition-colors"
                                >
                                    Recommencer le diagnostic
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WaterDiagnosticQuiz;
