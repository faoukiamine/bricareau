import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
    Beer,
    Droplets,
    Zap,
    Leaf,
    ShieldCheck,
    Star,
    GlassWater,
    ArrowRight,
    Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

// Assets
import brasserieWaterImg from "@/assets/124521.jpg";
import heroImg from "@/assets/2151949236.jpg";

const SolutionsBrasseries = () => {
    useEffect(() => {
        document.title = "Solutions pour Brasseries | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img src={heroImg} alt="Brasserie Excellence" className="w-full h-full object-cover scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-10 animate-in fade-in slide-in-from-left duration-1000">
                           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black tracking-widest uppercase">
                                <Beer className="w-4 h-4" /> Espace Brasserie & Bar
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tighter">
                                <span className="block text-blue-400 font-light italic">L'effervescence pure</span>
                                <span className="block mt-2">pour votre brasserie.</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
                                Transformez l'expérience de vos clients avec des solutions d'eau filtrée, plate ou pétillante, directement à la source. Alliez rentabilité, design et engagement écologique.
                            </p>
                            <div className="flex flex-wrap gap-6 pt-4">
                                <Button size="lg" className="h-16 px-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-blue-500/20" asChild>
                                    <NavLink to="/contact-entreprises">Essai gratuit 7 jours</NavLink>
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

                {/* Core Benefits */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">VALEUR AJOUTÉE</span>
                                    <h2 className="text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                                        Sublimez chaque <span className="text-blue-600 italic font-light lowercase">service.</span>
                                    </h2>
                                    <p className="text-slate-500 text-lg font-light leading-relaxed max-w-lg">
                                        Nos systèmes ne se contentent pas de filtrer l'eau ; ils deviennent un élément central de votre identité visuelle et de votre efficacité opérationnelle.
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { title: "Rentabilité Immédiate", text: "Éliminez les coûts d'achat, de transport et de stockage des bouteilles.", icon: Zap },
                                        { title: "Pureté Inégalée", text: "Une eau micro-filtrée qui respecte le profil aromatique de vos boissons.", icon: Droplets },
                                        { title: "Impact Écologique", text: "Engagement zéro plastique pour une image de marque moderne et durable.", icon: Leaf },
                                        { title: "Design Signé", text: "Des fontaines esthétiques qui s'intègrent à l'ambiance de votre bar.", icon: Star }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-4 group">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <h4 className="text-lg font-bold text-slate-950 uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-slate-500 text-sm font-light leading-relaxed">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="relative">
                                <div className="absolute -inset-4 bg-blue-100/50 rounded-[4rem] blur-2xl -z-10" />
                                <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                    <img src={brasserieWaterImg} alt="Brasserie Water Solution" className="w-full h-[650px] object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/80 to-transparent text-white">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                                                <GlassWater className="w-5 h-5" />
                                            </div>
                                            <span className="text-sm font-bold uppercase tracking-widest">L'Expérience Client</span>
                                        </div>
                                        <p className="text-xl font-light italic leading-relaxed">
                                            "Proposer une eau pétillante maison à nos clients a non seulement réduit nos déchets, mais a aussi créé un véritable sujet de discussion positif à table."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Excellence */}
                <section className="py-32 bg-slate-50 border-y border-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
                            <h2 className="text-5xl font-bold text-slate-950 tracking-tight">Une technologie de <span className="text-blue-600 italic font-light lowercase">haute voltige.</span></h2>
                            <p className="text-xl text-slate-500 font-light leading-relaxed">
                                Conçus pour les environnements à haut débit, nos systèmes garantissent une eau fraîche et pétillante même pendant les heures de pointe les plus intenses.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { 
                                    title: "Micro-Filtration 0.5μ", 
                                    desc: "Élimination des sédiments, du chlore et des micro-organismes tout en préservant les minéraux essentiels.",
                                    icon: ShieldCheck
                                },
                                { 
                                    title: "Carbonatation Pro", 
                                    desc: "Système de saturation CO2 haute performance pour des bulles fines et persistantes.",
                                    icon: Zap
                                },
                                { 
                                    title: "Refroidissement IceBank", 
                                    desc: "Technologie de banc de glace pour une température constante entre 3°C et 5°C, quel que soit le débit.",
                                    icon: Droplets
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-500">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                    <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <TestimonialsSection title={<h2 className="heading-pro-max text-center mb-12">L'avis des <span className="italic font-light text-blue-600">maîtres brasseurs</span> du Québec.</h2>} />
            </main>
            <Footer />
        </div>
    );
};

export default SolutionsBrasseries;
