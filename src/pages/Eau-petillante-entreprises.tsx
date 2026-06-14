import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExpertAvatars from "@/components/ExpertAvatars";
import {
    Droplets,
    Sparkles,
    Wine,
    ChevronRight,
    ArrowRight,
    Plus,
    Award,
    ShieldCheck,
    Leaf,
    DollarSign,
    Clock,
    CheckCircle2,
    TrendingUp,
    Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

// Reusing assets
import heroFountains from "@/assets/Fontaines d'eau.webp";
import bottlelessFountainImg from "@/assets/A13.jpg";
import ecoImpactImg4 from "@/assets/water-dispenser in office.jpg";

const EauPetillanteEntreprises = () => {
    useEffect(() => {
        document.title = "Eau Pétillante pour Entreprises | Solutions Pro au Québec | Bricareau";
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <section className="relative min-h-[75vh] flex items-center pt-24 overflow-hidden bg-slate-900 font-sans">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img src={heroFountains} className="w-full h-full object-cover grayscale brightness-50"  alt="Eau Pétillante Bricareau" title="Système d'eau hôtel par Bricareau" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-10">
                           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black tracking-[0.3em] uppercase">
                                <Sparkles className="w-4 h-4 animate-pulse" />
                                Prestige & Rafraîchissement
                            </div>
                            
                            <h1 className="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic text-white mb-6 tracking-tight">
    <span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg">L'effervescence de l'eau</span>
                                <span className="block mt-2">pour vos réunions d'affaires.</span>
</h1>
                            
                            <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                                Offrez une expérience premium à vos clients et employés. Nos fontaines d'eau pétillante haut de gamme allient élégance et pureté pour un rafraîchissement d'exception au bureau.
                            </p>
                            
                            <div className="flex flex-wrap gap-6 pt-4">
                                <Button size="lg" className="h-16 px-10 text-lg rounded-full" asChild>
                                    <NavLink to="/contact-entreprises">Demandez un essai PRO</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Breadcrumbs - Hidden on Mobile, Absolute on Desktop */}
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>
                </section>

                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <h2 className="heading-pro-max text-left leading-tight">
                                    <span className="italic font-light text-blue-600 block">Bien-être & Prestige</span>
                                    <span className="font-bold text-slate-950 block">Une alternative saine <br/>& raffinée.</span>
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        { title: "Zéro Sucre, Zéro Sodium", text: "Une eau pétillante pure, extraite directement au bureau, sans calories ni additifs." },
                                        { title: "Niveau de Gazéification Ajustable", text: "Choisissez l'intensité de vos bulles selon vos préférences pour chaque verre." },
                                        { title: "Design Minimaliste", text: "Des fontaines élégantes qui s'intègrent parfaitement dans vos espaces lounge ou salles de conseil." },
                                        { title: "Installation sans logistique", text: "Plus de stockage de bouteilles d'eau gazeuse. Bulles infinies via le réseau filtré." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-lg font-bold text-slate-950">{item.title}</h4>
                                                <p className="text-slate-500 font-light leading-relaxed">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-blue-100/50 rounded-[4rem] blur-2xl -z-10" />
                                <img src={bottlelessFountainImg} className="rounded-[4rem] shadow-2xl w-full h-[600px] object-cover"  alt="Fontaine eau pétillante" title="Filtration d'eau commerciale par Bricareau" />
                            </div>
                        </div>
                    </div>
                </section>

                <TestimonialsSection title={<h2 className="heading-pro-max text-center mb-12">L'avis des <span className="italic font-light text-blue-600">professionnels</span> au Québec.</h2>} />
            </main>
            <Footer />
        </div>
    );
};

export default EauPetillanteEntreprises;
