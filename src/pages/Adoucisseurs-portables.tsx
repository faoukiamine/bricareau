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
import ConsultationFormSection from "@/components/ConsultationFormSection";
import heroPortables from "@/assets/sub-category-dryer.webp";
import heroBg from "@/assets/csm_visuel1_920x630_0_09518aee48.jpg";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import uvSystemImg from "@/assets/Systèmes de désinfection UV.webp";
import missionImg from "@/assets/boire-eau-robinet.jpg";


const AdoucisseursPortables = () => {
    return (
        <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-[#0066FF] selection:text-white" style={{ '--top-banner': '168 100% 42%' } as React.CSSProperties}>
            <Header />

            {/* 2. SECTION HÉRO */}
            <section className="relative h-[800px] flex items-start pt-[220px] overflow-hidden">
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
                        <h1 className="text-white text-[32px] md:text-[48px] font-normal mb-8 leading-[1.2] md:leading-[48px] tracking-tighter animate-in fade-in slide-in-from-bottom duration-700 drop-shadow-2xl">
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
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 leading-[1.2] md:leading-[48px] tracking-tighter text-left">
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

            {/* 4. SECTION PROCESSUS - Minimalist 4-Step Design */}
            <section className="bg-white py-32 border-t border-gray-50">
                <div className="container mx-auto px-4">
                    {/* Header Layout */}
                    <div className="mb-24">
                        <span className="text-[#888] text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
                            NOTRE FONCTIONNEMENT
                        </span>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 leading-[1.2] md:leading-[48px] tracking-tighter text-left">
                                Un service simple <br />& sans souci.
                            </h2>
                            <p className="text-[#666] text-xl leading-relaxed max-w-xl lg:ml-auto">
                                De l'installation initiale à la livraison régulière de sel, nous gérons chaque détail technique pour vous garantir une eau parfaite en permanence.
                            </p>
                        </div>
                    </div>

                    {/* 4-Step Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            {
                                title: "Analyse d'eau",
                                desc: "Nous commençons par un test complet pour calibrer votre adoucisseur portable selon vos besoins spécifiques."
                            },
                            {
                                title: "Installation Rapide",
                                desc: "Nos techniciens installent votre système portatif en quelques minutes, sans travaux lourds ni plomberie complexe."
                            },
                            {
                                title: "Cycles d'Échange",
                                desc: "Recevez des unités fraîchement régénérées selon un calendrier simplifié qui s'adapte à votre consommation réelle."
                            },
                            {
                                title: "Suivi & Support",
                                desc: "Une assistance continue et des vérifications de routine pour s'assurer que votre eau reste d'une qualité irréprochable."
                            }
                        ].map((step, idx) => (
                            <div key={idx} className="flex flex-col animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
                                {/* Circle Indicator with Number */}
                                <div className="relative mb-8">
                                    <div className="w-24 h-24 rounded-full bg-[#E5E5E5] flex items-center justify-center">
                                        {/* You can add a subtle icon here if wanted, or leave it minimal as in image */}
                                    </div>
                                    <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                                        {idx + 1}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-black tracking-tight">{step.title}</h3>
                                <p className="text-[#888] text-lg leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. SECTION TÉMOIGNAGES/AVIS */}
            <TestimonialsSection />

            {/* 6. SECTION PRODUITS ASSOCIÉS */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-8 leading-[1.1] tracking-tighter">Découvrez les produits associés</h2>
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
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#001B3D] mb-8 leading-[1.1] tracking-tighter text-left">
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
            <ConsultationFormSection />

            <Footer />
        </div>
    );
};

export default AdoucisseursPortables;
