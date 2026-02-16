import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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
    Info
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    {
        id: 1,
        title: "La source de votre eau",
        question: "D’où provient votre eau ?",
        icon: MapPin,
    },
    {
        id: 2,
        title: "Symptômes et inquiétudes",
        question: "Partagez vos symptômes et vos inquiétudes concernant votre consommation d’eau.",
        description: "Examinez les catégories ci-dessous et cochez les cases qui vous concernent.",
        icon: Activity,
    },
    {
        id: 3,
        title: "Configuration du foyer",
        question: "Combien de personnes habitent dans votre demeure ?",
        icon: Users,
    },
    {
        id: 4,
        title: "Votre recommandation",
        question: "Finalisons votre rapport personnalisé",
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
    }
];

const WaterDiagnosticQuiz = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        source: '',
        signs: [] as string[],
        household: '',
        prenom: '',
        nom: '',
        phone: '',
        email: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSourceChange = (value: string) => {
        setFormData({ ...formData, source: value });
        setTimeout(() => setStep(2), 300);
    };

    const handleSignToggle = (sign: string) => {
        const newSigns = formData.signs.includes(sign)
            ? formData.signs.filter(s => s !== sign)
            : [...formData.signs, sign];
        setFormData({ ...formData, signs: newSigns });
    };

    const handleHouseholdChange = (value: string) => {
        setFormData({ ...formData, household: value });
        setTimeout(() => setStep(4), 300);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const getRecommendation = () => {
        const { source, signs } = formData;

        // 1. Désinfection UV (Bactéries)
        if (signs.includes("Bactéries")) {
            return {
                title: "Système de désinfection UV",
                desc: "La solution de sécurité microbiologique ultime pour éliminer les bactéries, virus et kystes sans produits chimiques.",
                link: "/Systemes-de-desinfection-UV",
                product: "Série VH Bricareau"
            };
        }

        // 2. Osmose Inverse (Contaminants chimiques/santé)
        if (["Plomb", "PFAS", "Microplastiques", "Nitrate", "Salé", "Amer"].some(s => signs.includes(s))) {
            return {
                title: "Système d'osmose inverse",
                desc: "Filtration moléculaire de pointe pour éliminer le plomb, les nitrates, les PFAS et le sel pour une pureté inégalée.",
                link: "/ro-6",
                product: "Système RO-6 PREMIUM"
            };
        }

        // 3. Arsenic (As Guard / Zéro-As)
        if (signs.includes("Arsenic")) {
            return {
                title: "Filtre spécialisé Zéro-As",
                desc: "Média filtrant haute performance spécifiquement conçu pour l'élimination sécuritaire de l'arsenic.",
                link: "/Filtres-deau",
                product: "Zéro-As"
            };
        }

        // 4. Odeur d'oeufs pourris (Oxy-Pure)
        if (signs.includes("Odeur d'oeuf pourri")) {
            return {
                title: "Filtre spécialisé Oxy-Pure",
                desc: "Élimine les odeurs de soufre et de marécage par oxydation naturelle, sans produits chimiques.",
                link: "/Filtres-deau",
                product: "Oxy-Pure"
            };
        }

        // 5. Fer et Métallique (Iron Shield)
        if (signs.includes("taches de rouille") || signs.includes("Métallique")) {
            return {
                title: "Filtre spécialisé Iron Shield",
                desc: "Protection totale contre les taches de fer, de rouille et le goût métallique de l'eau.",
                link: "/Filtres-deau",
                product: "Iron Shield"
            };
        }

        // 6. Corrosion et Taches Bleu-Vert (Zen-pH)
        if (signs.includes("Corrosion des canalisations") || signs.includes("Taches bleu-vert")) {
            return {
                title: "Filtre neutralisant Zen-pH",
                desc: "Neutralise l'acidité de l'eau pour protéger votre plomberie cuivre contre la corrosion et les traces vertes.",
                link: "/Filtres-deau",
                product: "Série Zen-pH"
            };
        }

        // 7. Chlore et Mauvais Goût (Chlor Stop)
        if (signs.includes("Chlore (Contaminant)") || signs.includes("Chlore (Goût/Odeur)") || signs.includes("mauvais goût")) {
            return {
                title: "Filtre spécialisé Chlor Stop",
                desc: "Élimine instantanément le chlore et les mauvais goûts pour une eau pure au robinet.",
                link: "/Filtres-deau",
                product: "Chlor Stop HE"
            };
        }

        // 8. Nuageux/Sédimentaire (Vortex)
        if (signs.includes("Nuageux/sédimentaire")) {
            return {
                title: "Filtre spécialisé Vortex",
                desc: "Action cyclonique pour capturer les sédiments, le sable et clarifier l'eau trouble.",
                link: "/Filtres-deau",
                product: "Vortex Sand Guard"
            };
        }

        // 9. Adoucisseur (Calcaire/Dureté)
        if (["Échelle / accumulation", "Résidus de savon", "Plats tachetés", "Linge rêche et irritant", "cheveux secs et ternes", "Peau sèche et irritée", "Eau dure"].some(s => signs.includes(s))) {
            const isMunicipal = source === "Municipal";
            return {
                title: isMunicipal ? "Adoucisseur d'Eau Municipal" : "Adoucisseur d'Eau de Puits",
                desc: "Élimine le calcaire et la dureté pour protéger vos appareils et votre peau.",
                link: isMunicipal ? "/adoucisseur-eau-residentiel" : "/adoucisseurs-eau-de-puits",
                product: isMunicipal ? "Série Sérénité HE" : "Série Infiniti"
            };
        }

        return {
            title: "Solution Bricareau Sur Mesure",
            desc: "D'après votre profil, une consultation détaillée permettra de configurer le système idéal.",
            link: "/contact",
            product: "Système Bricareau Elite"
        };
    };

    const recommendation = getRecommendation();
    const progress = (step / steps.length) * 100;

    return (
        <div className="min-h-[700px] flex items-center justify-center p-4">
            <div className={cn(
                "w-full bg-white/80 backdrop-blur-xl border border-blue-100 rounded-[40px] shadow-2xl overflow-hidden transition-all duration-500",
                step === 2 ? "max-w-4xl" : "max-w-2xl"
            )}>

                {/* Progress Header */}
                <div className="pt-8 px-8 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-600 rounded-xl">
                            <Droplets className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-blue-900 uppercase">Diagnostic Bricareau</h1>
                    </div>

                    <div className="w-full h-1.5 bg-blue-50 rounded-full overflow-hidden mb-8">
                        <div
                            className="h-full bg-blue-600 transition-all duration-700 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Quiz Steps */}
                <div className="px-8 pb-12">
                    {!isSubmitted ? (
                        <div key={step} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mb-4">
                                    {React.createElement(steps[step - 1].icon, { className: "w-6 h-6 text-blue-600" })}
                                </div>
                                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Étape {step} sur {steps.length}</p>
                                <h2 className="text-3xl font-light text-slate-900 tracking-tight leading-tight px-4">
                                    {steps[step - 1].question}
                                </h2>
                                {steps[step - 1].description && (
                                    <p className="text-slate-500 text-sm mt-4 italic max-w-2xl mx-auto">{steps[step - 1].description}</p>
                                )}
                            </div>

                            {/* Step 1: Source */}
                            {step === 1 && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        "Municipal",
                                        "Eau de puits",
                                        "Pas sûr"
                                    ].map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleSourceChange(option)}
                                            className={`flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all text-center h-32 ${formData.source === option
                                                ? 'border-blue-600 bg-blue-50/50 shadow-md scale-[1.02]'
                                                : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50'
                                                }`}
                                        >
                                            <span className="text-lg font-bold text-slate-700">{option}</span>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Step 2: Expanded Symptoms */}
                            {step === 2 && (
                                <div className="space-y-12">
                                    {symptomCategories.map((category, catIdx) => (
                                        <div key={catIdx} className="space-y-6">
                                            <h3 className="text-xl font-bold text-blue-900 border-b border-blue-50 pb-2">{category.title}</h3>
                                            <p className="text-sm text-slate-400 mb-4">Sélectionnez toutes les réponses qui s'appliquent.</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                                {category.options.map((option) => (
                                                    <div
                                                        key={option}
                                                        onClick={() => handleSignToggle(option)}
                                                        className={cn(
                                                            "group p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-center justify-between text-center min-h-[120px]",
                                                            formData.signs.includes(option)
                                                                ? "border-blue-600 bg-blue-50/50 shadow-sm"
                                                                : "border-slate-100 bg-slate-50/30 hover:border-blue-200 hover:bg-white"
                                                        )}
                                                    >
                                                        <span className="text-sm font-bold text-slate-700 leading-tight mb-2">
                                                            {option.replace(/ \(.*\)/, '')}
                                                        </span>
                                                        <button
                                                            className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter hover:underline flex items-center gap-1"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                // Future implementation for individual info
                                                            }}
                                                        >
                                                            Apprendre encore plus
                                                        </button>
                                                        {formData.signs.includes(option) && (
                                                            <div className="absolute top-2 right-2">
                                                                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    <div className="pt-8 flex flex-col items-center gap-4">
                                        <Button
                                            className="h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xl font-bold w-full max-w-md shadow-xl shadow-blue-100 transition-all hover:scale-[1.02]"
                                            onClick={() => setStep(3)}
                                        >
                                            Continuer <ArrowRight className="ml-3 w-6 h-6" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Household */}
                            {step === 3 && (
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        "1 à 2 personnes",
                                        "3 à 5 personnes",
                                        "6 personnes et plus"
                                    ].map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleHouseholdChange(option)}
                                            className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all text-left ${formData.household === option
                                                ? 'border-blue-600 bg-blue-50/50 shadow-md'
                                                : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50'
                                                }`}
                                        >
                                            <span className="text-lg font-medium text-slate-700">{option}</span>
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.household === option ? 'border-blue-600 bg-blue-600' : 'border-slate-300'}`}>
                                                {formData.household === option && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Step 4: Enriched Contact Collection with Solution Import */}
                            {step === 4 && (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6 animate-in fade-in duration-500">
                                    <div className="bg-blue-50/50 border-2 border-dashed border-blue-200 rounded-3xl p-6 mb-4 text-center">
                                        <p className="text-blue-600 text-sm font-black uppercase tracking-widest mb-2">Solution Identifiée :</p>
                                        <h3 className="text-xl font-bold text-slate-900">{recommendation.title}</h3>
                                        <p className="text-slate-500 text-sm italic mt-1">"{recommendation.product}"</p>
                                    </div>

                                    <div className="text-center mb-4">
                                        <p className="text-slate-600 text-lg">
                                            Excellent ! <br />
                                            <span className="font-bold text-blue-600">Où devrions-nous vous envoyer votre rapport personnalisé ?</span>
                                        </p>
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

                                    <Button
                                        type="submit"
                                        className="h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xl font-bold w-full shadow-xl shadow-blue-100 transition-all hover:scale-[1.02] mt-4"
                                    >
                                        Obtenir mes résultats <Sparkles className="ml-3 w-6 h-6" />
                                    </Button>
                                    <p className="text-slate-400 text-[10px] text-center px-8">
                                        En soumettant ce formulaire, vous acceptez que Bricareau vous contacte pour discuter de votre diagnostic d'eau. Vos données sont protégées et ne seront jamais partagées.
                                    </p>
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
                        /* Result Section stays similar */
                        <div className="animate-in zoom-in-95 duration-700 text-center">
                            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-xl">
                                <CheckCircle2 className="w-12 h-12 text-green-500" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Votre Prescription d'Eau</h2>
                            <p className="text-slate-500 mb-10">Basé sur votre situation ({formData.source})</p>

                            <div className="bg-blue-600 text-white p-10 rounded-[40px] shadow-2xl shadow-blue-200 relative overflow-hidden group mb-10 text-left">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                    <Zap className="w-32 h-32" />
                                </div>
                                <div className="relative z-10">
                                    <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest mb-6">
                                        Solution Recommandée
                                    </span>
                                    <h3 className="text-3xl font-bold mb-4 leading-tight">{recommendation.title}</h3>
                                    <p className="text-blue-50 leading-relaxed text-lg mb-8 opacity-90 italic">
                                        "{recommendation.desc}"
                                    </p>
                                    <div className="flex items-center gap-2 text-white font-bold bg-white/10 w-fit px-4 py-2 rounded-xl border border-white/20">
                                        <ShieldCheck className="w-5 h-5 text-blue-200" />
                                        Garantie Bricareau incluse
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <Button
                                    className="h-16 bg-blue-900 hover:bg-black text-white rounded-2xl text-lg font-bold shadow-lg"
                                    onClick={() => window.location.href = recommendation.link}
                                >
                                    Voir la solution <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-16 border-2 border-slate-100 text-slate-900 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all"
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
