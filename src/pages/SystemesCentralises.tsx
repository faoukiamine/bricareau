import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
    Building2,
    ShieldCheck,
    Settings,
    Activity,
    ArrowRight,
    Zap,
    Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

// Assets
import heroFountains from "@/assets/Fontaines d'eau.webp";
import ourteamstudyyourwaterImg from "@/assets/10271.jpg";

const SystemesCentralises = () => {
    useEffect(() => {
        document.title = "Systèmes Centralisés | Bricareau";
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img src={heroFountains} alt="Systèmes Centralisés" className="w-full h-full object-cover scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-10 animate-in fade-in slide-in-from-left duration-1000">
                           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black tracking-widest uppercase">
                                <Building2 className="w-4 h-4" /> Infrastructure Immobilière
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tighter">
                                <span className="block text-blue-400 font-light italic">Gestion intelligente de l'eau</span>
                                <span className="block mt-2">pour grands complexes.</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
                                Optimisez l'infrastructure hydraulique de vos tours de bureaux et immeubles commerciaux. Une filtration centralisée haute performance pour une sécurité et une qualité constante.
                            </p>
                            <div className="flex flex-wrap gap-6 pt-4">
                                <Button size="lg" className="h-16 px-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest" asChild>
                                    <NavLink to="/contact-entreprises">Consulter un expert PRO</NavLink>
                                </Button>
                                <Button size="lg" variant="outline" className="h-16 px-12 rounded-full border-white/20 text-white hover:bg-white hover:text-slate-950 font-bold text-xs uppercase tracking-widest" asChild>
                                    <a href="tel:18552649328" className="flex items-center gap-3">
                                        <Phone className="w-5 h-5" /> 1-855-264-9328
                                    </a>
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
                                    <span className="italic font-light text-blue-600 block">Performance Industrielle</span>
                                    <span className="font-bold text-slate-950 block">Une protection robuste <br/>pour tout votre réseau.</span>
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        { title: "Filtration Haute Capacité", text: "Systèmes dimensionnés pour répondre aux besoins simultanés de plusieurs étages ou départements.", icon: Activity },
                                        { title: "Protection des Équipements", text: "Prolongez la durée de vie de vos machines à café, fontaines et conduits en éliminant les sédiments.", icon: Settings },
                                        { title: "Sécurité Sanitaire Globale", text: "Barrière microbiologique centralisée assurant une eau pure à chaque point de sortie.", icon: ShieldCheck },
                                        { title: "Gestion Centralisée", text: "Maintenance simplifiée et surveillance accrue de la qualité de l'eau sur l'ensemble du site.", icon: Zap }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="text-xl font-bold text-slate-950">{item.title}</h4>
                                                <p className="text-slate-500 font-light leading-relaxed">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-blue-100/50 rounded-[4rem] blur-2xl -z-10" />
                                <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                    <img src={ourteamstudyyourwaterImg} alt="Technicien Bricareau" className="w-full h-[650px] object-cover" />
                                    <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-xl">
                                        <h4 className="font-bold text-slate-900 mb-2">Expertise en Infrastructure</h4>
                                        <p className="text-slate-600 font-light italic text-sm">
                                            "Nous concevons des systèmes sur mesure qui s'adaptent aux défis spécifiques des grands bâtiments du Québec."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <TestimonialsSection title={<h2 className="heading-pro-max text-center mb-12">La confiance des <span className="italic font-light text-blue-600">gestionnaires</span> d'immeubles.</h2>} />
            </main>
            <Footer />
        </div>
    );
};

export default SystemesCentralises;
