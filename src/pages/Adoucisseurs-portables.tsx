import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
    Phone,
    ArrowRight,
    Settings,
    Calendar,
    RefreshCw,
    CheckCircle2,
    Droplets,
    ShieldCheck,
    Waves,
    MessageSquare,
    Mail,
    MapPin,
    Star,
    ChevronRight,
    PackageCheck,
    Check
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import heroPortables from "@/assets/sub-category-dryer.webp";
import heroBg from "@/assets/csm_visuel1_920x630_0_09518aee48.jpg";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import uvSystemImg from "@/assets/Systèmes de désinfection UV.webp";
import missionImg from "@/assets/boire-eau-robinet.jpg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const AdoucisseursPortables = () => {
    return (
        <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-[#0066FF] selection:text-white" style={{ '--top-banner': '168 100% 42%' } as React.CSSProperties}>
            <Header />

            {/* 2. SECTION HÉRO */}
            <section className="relative h-[750px] flex items-center pt-24 pb-48 overflow-hidden">
                {/* Background Image & Overlays */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Eau pure"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 lg:bg-gradient-to-r lg:from-black/80 lg:to-black/20" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
                    <div className="max-w-4xl">
                        <span className="text-[#60A5FA] text-sm font-bold uppercase tracking-[0.3em] mb-6 block animate-in fade-in slide-in-from-bottom duration-700">
                            FLEXIBILITÉ & QUALITÉ
                        </span>
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom duration-700 drop-shadow-2xl">
                            Profitez d’une eau douce <br />
                            où que vous alliez !
                        </h1>
                        <p className="text-gray-200 text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-100 drop-shadow-lg">
                            La solution flexible pour une eau douce sans installation permanente. Qualité professionnelle livrée chez vous, sans tracas.
                        </p>
                        <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-16 rounded-full text-xl font-bold transition-all shadow-xl" asChild>
                                <NavLink to="/water-testing">En savoir plus</NavLink>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SECTION BÉNÉFICES - Minimalist Grid Design */}
            <section className="py-32 bg-[#f9f9f9]">
                <div className="container mx-auto px-4">
                    {/* Header Section */}
                    <div className="mb-20">
                        <span className="text-[#888] text-xs font-bold uppercase tracking-[0.3em] mb-6 block animate-in fade-in slide-in-from-bottom duration-700">
                            VOS AVANTAGES
                        </span>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                            <div className="lg:col-span-5 animate-in fade-in slide-in-from-bottom duration-700">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tighter">
                                    Une eau de qualité,<br />
                                    partout avec vous.
                                </h2>
                            </div>
                            <div className="lg:col-span-4 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                                <p className="text-[#666] text-lg leading-relaxed pt-2">
                                    Nos adoucisseurs d'eau portables offrent une flexibilité et une protection contre le calcaire idéales pour les modes de vie mobiles (camping-cars, bateaux) ou les petits espaces. Ils permettent d'éliminer les minéraux responsables de la dureté de l'eau, comme le calcium et le magnésium, sans nécessiter d'installation permanente complexe.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Mobilité et Simplicité d'Installation",
                                desc: "La liberté d'avoir une eau douce lors de vos déplacements ou dans vos locations temporaires sans installation complexe.",
                                features: ["Polyvalence d'usage", "Installation sans outils", "Conception compacte"]
                            },
                            {
                                title: "Protection du Matériel et Économies",
                                desc: "Nous nous occupons de tout le travail lourd. Vous n'avez aucun sac de sel à porter ni de maintenance manuelle.",
                                features: ["Longévité des équipements", "Réduction des produits d'entretien", "Efficacité énergétique"]
                            },
                            {
                                title: "Bénéfices pour la Santé et le Confort",
                                desc: "Bénéficiez de la même expertise que nos installations résidentielles permanentes pour votre peau et vos cheveux.",
                                features: ["Soin de la peau et des cheveux", "Linge plus doux", "Nettoyage facilité"]
                            }
                        ].map((benefit, idx) => (
                            <div key={idx} className="bg-white border border-gray-100 p-12 flex flex-col h-full shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 group group animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
                                <h3 className="text-3xl font-bold mb-6 text-black tracking-tight">{benefit.title}</h3>
                                <p className="text-[#888] mb-10 leading-relaxed text-lg">
                                    {benefit.desc}
                                </p>

                                <div className="h-px bg-gray-100 w-full mb-10 opacity-60"></div>

                                <ul className="space-y-5 mb-14 flex-grow">
                                    {benefit.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-4 text-[#555] font-medium text-base">
                                            <Check className="h-4 w-4 text-gray-400 group-hover:text-black transition-colors" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SECTION "QUE FAUT-IL ATTENDRE" */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Que faut-il attendre</h2>
                        <div className="w-20 h-1.5 bg-[#00D4AA] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: CheckCircle2,
                                title: 'Commodité',
                                desc: 'Nous gérons tout le travail. Pas de sel à porter, pas d\'entretien à effectuer par vous-même.'
                            },
                            {
                                icon: ShieldCheck,
                                title: 'Rentabilité',
                                desc: 'Économisez sur les réparations et le remplacement prématuré des appareils ménagers dû à l\'eau dure.'
                            },
                            {
                                icon: Droplets,
                                title: 'Économies d\'eau',
                                desc: 'Nos systèmes optimisés réduisent le gaspillage d\'eau lors des cycles de régénération.'
                            },
                            {
                                icon: Waves,
                                title: 'Conformité communicative',
                                desc: 'Des solutions respectueuses de l\'environnement conformes aux réglementations locales.'
                            }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="bg-[#F5F5F5] p-10 rounded-xl border border-transparent hover:border-gray-200 hover:shadow-md transition-all group"
                                >
                                    <Icon className="h-10 w-10 text-[#0066FF] mb-6" />
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. SECTION TÉMOIGNAGES/AVIS */}
            <TestimonialsSection />

            {/* 6. SECTION PRODUITS ASSOCIÉS */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Découvrez les produits associés</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Optimisez votre expérience de traitement d'eau avec nos solutions complémentaires.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                name: "Adoucisseurs d'eau ",
                                desc: "Pour une eau de boisson d'une pureté exceptionnelle directement au robinet.",
                                img: waterSoftenerImg
                            },
                            {
                                name: "Stations d'eau potable",
                                desc: "Pour une eau de boisson d'une pureté exceptionnelle directement au robinet.",
                                img: drinkingWaterImg
                            },
                            {
                                name: "Système de stérilisation UV",
                                desc: "Élimine 99.9% des bactéries et virus pour une sécurité totale.",
                                img: uvSystemImg
                            }
                        ].map((prod, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="bg-gray-100 aspect-square rounded-xl mb-6 overflow-hidden flex items-center justify-center">
                                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-gray-900">{prod.name}</h3>
                                <p className="text-gray-600 mb-4">{prod.desc}</p>
                                <a href="#" className="text-[#0066FF] font-bold flex items-center gap-2 group-hover:translate-x-1 transition-all">
                                    En savoir plus <ChevronRight className="h-4 w-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. SECTION ENGAGEMENT */}
            <section className="bg-white py-24">
                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
                        <img src={missionImg} alt="Engagement" className="w-full h-auto" />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#001B3D] mb-8 leading-tight">
                            L'eau est notre mission
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Nous nous engageons à fournir non seulement le meilleur équipement de traitement d'eau, mais aussi un service après-vente irréprochable. Notre expertise locale nous permet de comprendre les défis spécifiques de votre région.
                            </p>
                            <p>
                                Chaque membre de notre équipe est formé pour vous offrir une consultation personnalisée et des solutions durables qui respectent votre budget et l'environnement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 12. Consultation Form Section */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/3 text-left">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight italic">
                                Planifiez une consultation gratuite sur l'eau
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Remplissez le formulaire ci-dessous pour organiser une visite d'un de nos experts de l'eau.
                            </p>
                        </div>

                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-2xl">
                                {/* Progress */}
                                <div className="flex items-center gap-8 mb-12 overflow-x-auto pb-4 border-b border-gray-100">
                                    <div className="flex items-center gap-2 text-blue-600 font-bold whitespace-nowrap">
                                        <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">1</span>
                                        VOS INFOS
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-300 font-bold whitespace-nowrap">
                                        <span className="w-10 h-10 rounded-full bg-gray-200 text-white flex items-center justify-center">2</span>
                                        VOTRE DISPONIBILITÉ
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-300 font-bold whitespace-nowrap">
                                        <span className="w-10 h-10 rounded-full bg-gray-200 text-white flex items-center justify-center">3</span>
                                        CONFIRMATION
                                    </div>
                                </div>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3 text-left">
                                        <Label htmlFor="fname" className="font-bold flex gap-1">Prénom*</Label>
                                        <Input id="fname" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Jean" />
                                    </div>
                                    <div className="space-y-3 text-left">
                                        <Label htmlFor="lname" className="font-bold flex gap-1">Nom*</Label>
                                        <Input id="lname" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Dupont" />
                                    </div>
                                    <div className="space-y-3 text-left">
                                        <Label htmlFor="email" className="font-bold flex gap-1">Courriel*</Label>
                                        <Input id="email" type="email" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="jean@exemple.com" />
                                    </div>
                                    <div className="space-y-3 text-left">
                                        <Label htmlFor="phone" className="font-bold flex gap-1">Téléphone*</Label>
                                        <Input id="phone" type="tel" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="(514) 000-0000" />
                                    </div>
                                    <div className="md:col-span-2 space-y-3 text-left">
                                        <Label htmlFor="address" className="font-bold flex gap-1">Adresse*</Label>
                                        <Input id="address" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="123 rue de l'Eau" />
                                    </div>
                                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="city" className="font-bold flex gap-1">Ville*</Label>
                                            <Input id="city" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Montréal" />
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="province" className="font-bold flex gap-1">Province*</Label>
                                            <Input id="province" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Québec" />
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="zip" className="font-bold flex gap-1">Code Postal*</Label>
                                            <Input id="zip" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="H1A 1A1" />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 text-left">
                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-16 h-14 text-xl font-bold w-full md:w-auto">
                                            Continuer
                                        </Button>
                                        <p className="mt-4 text-[10px] text-gray-400 max-w-lg">
                                            En soumettant ce formulaire, vous acceptez nos conditions d'utilisation et notre politique de confidentialité. Un spécialiste Bricareau vous contactera sous peu.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AdoucisseursPortables;
