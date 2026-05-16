import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
    Sparkles,
    CheckCircle2,
    Zap,
    Leaf,
    Droplets
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

// Assets
import heroFountains from "@/assets/Fontaines d'eau.webp";
import bottlelessFountainImg from "@/assets/A13.jpg";

const SolutionsEauPetillante = () => {
    useEffect(() => {
        document.title = "Solutions Eau Pétillante | Bricareau";
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <section className="relative min-h-[75vh] flex items-center pt-24 overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img src={heroFountains} alt="Eau Pétillante" className="w-full h-full object-cover grayscale brightness-50" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-10">
                           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black tracking-widest uppercase">
                                <Sparkles className="w-4 h-4 animate-pulse" /> Prestige & Rafraîchissement
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tighter">
                                <span className="block text-blue-400 font-light italic">L'effervescence de l'eau</span>
                                <span className="block mt-2">pour vos espaces de prestige.</span>
                            </h1>
                            <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                                Offrez une expérience d'hydratation premium. Nos systèmes d'eau pétillante filtrée allient pureté, durabilité et plaisir gustatif.
                            </p>
                            <div className="flex flex-wrap gap-6 pt-4">
                                <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold" asChild>
                                    <NavLink to="/contact-entreprises">Demandez un essai PRO</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[30px] left-0 right-0 z-30 hidden lg:block">
                        <div className="container mx-auto px-6">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>
                </section>

                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <h2 className="heading-pro-max text-left">
                                    <span className="italic font-light text-blue-600 block">Bien-être & Prestige</span>
                                    <span className="font-bold text-slate-950 block">Une alternative raffinée <br/>à l'eau embouteillée.</span>
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        { title: "Zéro Bouteille, Zéro Déchet", text: "Supprimez la gestion des caisses d'eau gazeuse et réduisez votre empreinte carbone.", icon: Leaf },
                                        { title: "Intensité de Bulles Ajustable", text: "De l'eau perlée à l'eau très pétillante, personnalisez chaque verre selon vos envies.", icon: Droplets },
                                        { title: "Pureté Absolue", text: "Filtration de haute précision éliminant 99% des impuretés tout en gardant l'éclat.", icon: CheckCircle2 },
                                        { title: "Performance Pro", text: "Systèmes robustes capables de fournir un débit constant pour les grands volumes.", icon: Zap }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                <item.icon className="w-5 h-5" />
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
                                <img src={bottlelessFountainImg} alt="Solutions Eau Pétillante" className="rounded-[4rem] shadow-2xl w-full h-[600px] object-cover" />
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

export default SolutionsEauPetillante;
