import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExpertAvatars from "@/components/ExpertAvatars";
import {
    Phone,
    Zap,
    ArrowRight,
    Leaf,
    Plus,
    Minus,
    Award,
    ShieldCheck,
    Droplets,
    Recycle,
    PiggyBank,
    Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import heroFountains from "@/assets/Fontaines d'eau.webp";
import countertopFountainImg from "@/assets/A9.jpg";
import bottlelessFountainImg from "@/assets/A13.jpg";
import iceMachineImg from "@/assets/Machine+à+glaçons+de+comptoir+auto-nettoyante+de+26+lb+R.W.FLAME-78609293.webp";
import ecoImpactImg3 from "@/assets/Water fountain in the dining room.jpg";
import ecoImpactImg4 from "@/assets/water-dispenser in office.jpg";
import ecoImpactImg5 from "@/assets/water-dispenser in kitchen.jpg";
import ecoImpactImg6 from "@/assets/water-dispenser in evening room.png";
import eauFontaineImg from "@/assets/83658.jpg";

interface SolutionItem {
    title: string;
    desc: string;
    img: string;
    features: string[];
}

const ImpactCalculator = () => {
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(1);
    const [timeframe, setTimeframe] = useState(1);

    const adultBottlesPerYear = adults * 4 * 365;
    const childBottlesPerYear = children * 2 * 365;
    const bottlesSavedBase = Math.round(adultBottlesPerYear + childBottlesPerYear);
    const bottlesSaved = bottlesSavedBase * timeframe;

    const taxRate = 1.14975;
    const costPerBottle = (6 * taxRate / 28) + 0.10;
    const moneySaved = Math.round(bottlesSaved * costPerBottle);

    return (
        <div className="relative group bg-white p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 h-full flex flex-col overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-20 -mt-20 blur-3xl opacity-60" />
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#18448F] to-[#18448F]/80 flex items-center justify-center text-white shadow-lg shadow-[#18448F]/20">
                        <Leaf className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-slate-900 tracking-tight leading-none mb-1.5 font-bold">Eco-Bilan</h3>
                        <p className="text-[#18448F] text-[10px] font-black uppercase tracking-widest leading-none">Simulateur d'économie</p>
                    </div>
                </div>
                <div className="space-y-4 mb-8">
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Adultes", value: adults, setter: setAdults },
                            { label: "Enfants", value: children, setter: setChildren }
                        ].map((input, idx) => (
                            <div key={idx} className="bg-slate-50/50 rounded-[2rem] p-4 border border-slate-100/80">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center mb-3">{input.label}</p>
                                <div className="flex items-center justify-between bg-white rounded-2xl p-1 shadow-sm border border-slate-100">
                                    <button onClick={() => input.setter(Math.max(0, input.value - 1))} className="w-8 h-8 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#18448F] transition-colors active:scale-90">
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="text-xl font-bold text-slate-900">{input.value}</span>
                                    <button onClick={() => input.setter(Math.min(10, input.value + 1))} className="w-8 h-8 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#18448F] transition-colors active:scale-90">
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex p-1 bg-slate-100/50 rounded-2xl border border-slate-200/50">
                        {[1, 5, 10].map((y) => (
                            <button key={y} onClick={() => setTimeframe(y)} className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${timeframe === y ? 'bg-white text-[#18448F] shadow-sm transform scale-[1.02]' : 'text-slate-400 hover:text-slate-600'}`}>
                                {y} {y === 1 ? 'AN' : 'ANS'}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-auto space-y-3">
                    <div className="relative overflow-hidden p-6 rounded-[2.5rem] bg-emerald-600 border border-emerald-700 flex items-center justify-between group/res transition-all duration-500 shadow-xl shadow-emerald-200">
                        <div>
                            <span className="text-[10px] font-black text-emerald-100 uppercase tracking-widest block mb-1">Plastique Évité</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black text-white tracking-tighter tabular-nums">{bottlesSaved.toLocaleString()}</span>
                                <span className="text-emerald-100/60 text-[10px] font-bold uppercase">Unités</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover/res:scale-110 transition-transform">
                            <Recycle className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <div className="relative overflow-hidden p-6 rounded-[2.5rem] bg-[#18448F] border border-[#18448F]/80 flex items-center justify-between group/res transition-all duration-500 shadow-xl shadow-[#18448F]/20">
                        <div>
                            <span className="text-[10px] font-black text-blue-100 uppercase tracking-widest block mb-1">Économies Nettes</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-white tracking-tighter tabular-nums">{moneySaved.toLocaleString()}</span>
                                <span className="text-white font-bold text-2xl tracking-tighter">$</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover/res:scale-110 transition-transform">
                            <PiggyBank className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SolutionCard = ({ item }: { item: SolutionItem }) => {
    const [showSpecs, setShowSpecs] = useState(false);
    return (
        <div className="group w-full md:w-[380px] h-[620px] relative overflow-hidden rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 bg-white transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-2">
            <div className="h-full p-10 flex flex-col items-center">
                <div className="w-full aspect-square bg-slate-50/50 rounded-[2.5rem] mb-8 flex items-center justify-center p-8 relative overflow-hidden group-hover:bg-blue-50/30 transition-colors duration-700">
                    <img src={item.img} alt={item.title} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-1000 scale-100 group-hover:scale-110" />
                </div>
                <div className="space-y-4 text-center flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-500 font-light text-lg leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-8 w-full">
                    <Button className="w-full bg-[#18448F] hover:bg-[#18448F]/90 text-white rounded-full h-14 font-bold uppercase tracking-widest text-[10px]" onClick={() => setShowSpecs(true)}>
                        Spécifications <Plus className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
            <div className={`absolute inset-0 bg-white/95 backdrop-blur-xl p-12 flex flex-col transition-all duration-700 z-20 ${showSpecs ? "translate-y-0" : "translate-y-full"}`}>
                <h3 className="text-3xl font-bold text-slate-900 mb-8">Caractéristiques</h3>
                <ul className="space-y-6 flex-grow">
                    {item.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-4">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-[#18448F]" />
                            <span className="text-slate-600 font-light">{f}</span>
                        </li>
                    ))}
                </ul>
                <Button onClick={() => setShowSpecs(false)} variant="outline" className="rounded-full">Retour</Button>
            </div>
        </div>
    );
};

const FontainesDeauModernes = () => {
    useEffect(() => {
        document.title = "Fontaines d'Eau Modernes | Bricareau";
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <section className="relative h-[600px] lg:h-[800px] flex items-center pt-32 overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img src={heroFountains} alt="Fontaines Modernes" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black tracking-widest uppercase">
                                <Zap className="w-4 h-4" /> Solutions Corporatives
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tighter">
                                <span className="block text-blue-400 italic font-light">L'excellence de l'eau</span>
                                <span className="block mt-2">pour votre entreprise.</span>
                            </h1>
                            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
                                Transformez l'hydratation de vos collaborateurs avec nos fontaines filtrantes haut de gamme. Design, performance et écologie réunis.
                            </p>
                            <div className="flex flex-wrap gap-6 pt-4">
                                <Button size="lg" className="h-16 px-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-xs" asChild>
                                    <NavLink to="/contact-entreprises">Demandez un essai gratuit</NavLink>
                                </Button>
                                <Button size="lg" variant="outline" className="h-16 px-12 rounded-full border-white/20 text-white hover:bg-white hover:text-slate-950 font-bold uppercase tracking-widest text-xs" asChild>
                                    <a href="tel:18552649328">Appelez un expert</a>
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
                        <div className="text-center max-w-4xl mx-auto mb-24">
                            <h2 className="heading-pro-max mb-6">
                                <span className="italic font-light text-blue-600 block">Une gamme complète</span>
                                <span className="font-bold text-slate-950 block">pour chaque besoin d'affaires.</span>
                            </h2>
                            <p className="text-xl text-slate-500 font-light leading-relaxed">
                                Nos modèles sont sélectionnés pour leur fiabilité industrielle et leur design prestigieux, s'intégrant parfaitement dans vos espaces de travail.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-12 max-w-7xl mx-auto">
                            {[
                                {
                                    title: "Distributeur de Comptoir",
                                    desc: "Performance maximale dans un format compact. Idéal pour les salles de conférence et cafétérias.",
                                    img: countertopFountainImg,
                                    features: ["Eau froide, chaude et tiède", "Interface tactile", "Filtration Charbon + UV", "Certifié NSF"]
                                },
                                {
                                    title: "Fontaine Autoportante",
                                    desc: "La solution classique revisitée avec élégance. Conçue pour les zones à fort achalandage.",
                                    img: bottlelessFountainImg,
                                    features: ["Débit haute performance", "Bac de récupération large", "Double filtration", "Design inox"]
                                },
                                {
                                    title: "Station de Glaçons Pro",
                                    desc: "Production continue de glace pure pour vos besoins événementiels et quotidiens.",
                                    img: iceMachineImg,
                                    features: ["26lb / jour", "Auto-nettoyante", "Compacte", "Silencieuse"]
                                }
                            ].map((item, i) => (
                                <SolutionCard key={i} item={item} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-32 bg-slate-50 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <h2 className="heading-pro-max text-left">
                                    <span className="italic font-light text-blue-600 block">L'engagement Bricareau</span>
                                    <span className="font-bold text-slate-950 block">Zéro bouteille, 100% pureté.</span>
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        { title: "Éco-responsabilité", desc: "Éliminez des milliers de bouteilles plastiques par an.", icon: Leaf },
                                        { title: "Économies Fixes", desc: "Réduisez vos coûts d'eau jusqu'à 70% par rapport aux bouteilles.", icon: PiggyBank },
                                        { title: "Hygiène Supérieure", desc: "Système fermé et filtration UV pour une sécurité totale.", icon: ShieldCheck }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-xl font-bold text-slate-950">{item.title}</h4>
                                                <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <ImpactCalculator />
                            </div>
                        </div>
                    </div>
                </section>

                <TestimonialsSection title={<h2 className="heading-pro-max text-center mb-12">L'avis des <span className="italic font-light text-blue-600">entreprises</span> satisfaites.</h2>} />
            </main>
            <Footer />
        </div>
    );
};

export default FontainesDeauModernes;
