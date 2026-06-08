import React, { useEffect, useState } from "react";
import { 
    ChevronRight, 
    ArrowRight,
    ShieldCheck,
    Settings,
    Leaf,
    Phone,
    Activity,
    Target,
    Sparkles,
    CheckCircle2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ProMaxButton } from "@/components/ui/ProMaxButton";

// Assets
import heroImg from "@/assets/10341859.jpg"; 

const WhyChooseUs = () => {
    const navigate = useNavigate();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        document.title = "Pourquoi Choisir Bricareau | L'Excellence en Traitement d'Eau";
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(scrolled / maxScroll);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 overflow-x-hidden">
            <Header />

            <main>
                {/* 1. CUSTOM HERO SECTION */}
                <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
                    {/* Background Image with Parallax & Gradient */}
                    <div className="absolute inset-0">
                        <img 
                            src={heroImg} 
                            alt="Eau Pure Bricareau" 
                            className="w-full h-full object-cover animate-in fade-in duration-[2000ms]"
                            style={{ transform: `translateY(${scrollProgress * 200}px)` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-[#0f172a]" />
                    </div>

                    <div className="relative z-10 container mx-auto px-6 text-center mt-20 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 fill-mode-both">
                        <span className="inline-block py-1.5 px-4 bg-white/10 backdrop-blur-md rounded-full text-cyan-300 font-bold tracking-[0.2em] uppercase text-xs mb-8 border border-white/20">
                            La Référence Québécoise
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                            Plus qu'une filtration.<br />
                            <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Une renaissance hydrique.</span>
                        </h1>
                        <p className="text-blue-100/80 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
                            Bricareau redéfinit la relation entre l'homme et l'eau. Depuis plus de deux décennies, nous fusionnons ingénierie de pointe et vision holistique pour transformer chaque goutte en une source de vitalité pure.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <ProMaxButton variant="white" className="px-10 h-16 text-xs" onClick={() => document.getElementById('notre-vision')?.scrollIntoView({ behavior: 'smooth' })}>
                                DÉCOUVRIR NOTRE VISION
                            </ProMaxButton>
                        </div>
                    </div>
                </section>

                {/* 2. NOTRE VISION: "Liquid Glass" Interactive Manifesto */}
                <section className="relative h-[150vh] bg-slate-900" id="notre-vision">
                    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                        {/* Liquid Background Effect */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-600/30 rounded-full blur-[120px] -translate-y-1/2 animate-[pulse_8s_ease-in-out_infinite]" style={{ opacity: 0.5 + scrollProgress * 0.5 }} />
                            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#164E63]/50 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite_reverse]" />
                            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[50px]" />
                        </div>

                        <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
                            <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm block mb-6 opacity-80">Notre Vision</span>
                            <h2 
                                className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-tight mb-8"
                                style={{ transform: `translateY(${(1 - scrollProgress) * 50}px)`, opacity: scrollProgress > 0.1 ? 1 : 0.3, transition: 'all 0.5s ease-out' }}
                            >
                                Redéfinir le <br />
                                <span className="text-cyan-400 italic font-light">standard de pureté.</span>
                            </h2>
                            <p 
                                className="text-cyan-100/70 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto"
                                style={{ transform: `translateY(${(1 - scrollProgress) * 80}px)`, opacity: scrollProgress > 0.15 ? 1 : 0, transition: 'all 0.8s ease-out' }}
                            >
                                Nous croyons que chaque foyer et entreprise québécoise mérite un accès inconditionnel à une eau parfaite, alliant santé humaine et préservation écologique. L'eau n'est pas qu'une ressource, c'est le fondement de notre avenir.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. NOTRE MISSION: Oversized Minimalist Typography */}
                <section className="py-40 bg-white relative overflow-hidden" id="notre-mission">
                    {/* Subtle aesthetic lines */}
                    <div className="absolute top-0 left-1/2 w-[1px] h-32 bg-gradient-to-b from-slate-200 to-transparent -translate-x-1/2" />
                    
                    <div className="container mx-auto px-6 text-center">
                        <span className="text-[#18448F] font-bold tracking-widest uppercase text-xs block mb-12">Notre Mission</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-[1.3] md:leading-[1.4] max-w-6xl mx-auto tracking-tight">
                            Protéger la santé des <span className="font-bold text-[#18448F]">foyers</span> et optimiser la performance des <span className="font-bold text-[#18448F]">entreprises</span> en offrant des solutions d'eau d'une <span className="italic text-blue-500">pureté absolue</span>.
                        </h2>
                    </div>
                </section>

                {/* 4. NOTRE HISTOIRE: Elevated Timeline */}
                <section className="py-32 bg-[#F8FAFC] relative" id="notre-histoire">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-24 space-y-4">
                                <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Notre Histoire</span>
                                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">Plus de 20 ans <br/><span className="text-[#18448F] italic font-light">d'engagement.</span></h2>
                            </div>

                            {/* Timeline */}
                            <div className="relative border-l-2 border-blue-200 ml-6 md:ml-0 md:pl-0 pl-10 space-y-24 mb-16">
                                
                                <div className="relative md:w-1/2 md:pr-16 md:ml-0 md:text-right">
                                    <div className="absolute top-0 -left-[45px] md:-right-[9px] md:left-auto w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)] ring-4 ring-blue-100" />
                                    <div className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Les Fondations</div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">L'obsession de la qualité</h3>
                                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                                        Bricareau est né d'un constat simple : la qualité de l'eau municipale et de puits n'était pas à la hauteur des besoins en santé et en confort des familles. Nous avons commencé avec une mission claire : sourcer les meilleures technologies de filtration mondiales.
                                    </p>
                                </div>

                                <div className="relative md:w-1/2 md:pl-16 md:ml-auto">
                                    <div className="absolute top-0 -left-[45px] md:-left-[9px] w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)] ring-4 ring-blue-100" />
                                    <div className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">L'Expansion</div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Expertise Multi-Sectorielle</h3>
                                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                                        Face à la demande croissante, nous avons étendu notre expertise au secteur industriel et commercial, développant des solutions d'ingénierie sur-mesure capables de répondre aux réalités complexes de l'eau au Québec.
                                    </p>
                                </div>

                                <div className="relative md:w-1/2 md:pr-16 md:ml-0 md:text-right">
                                    <div className="absolute top-0 -left-[45px] md:-right-[9px] md:left-auto w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)] ring-4 ring-blue-100" />
                                    <div className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Aujourd'hui</div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">La Référence Québécoise</h3>
                                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                                        Avec plus de 20 000 foyers et entreprises protégés, Bricareau est devenu l'incontournable du traitement de l'eau. Une équipe de maîtres techniciens dédiés et une réputation bâtie sur la confiance absolue de nos clients.
                                    </p>
                                </div>

                                {/* Absolute line for desktop center */}
                                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-[1px] w-0.5 bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. POURQUOI NOUS SOMMES LA RÉFÉRENCE: 3D Bento Grid */}
                <section className="py-32 bg-white relative" id="pourquoi-reference">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24 space-y-4">
                            <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">L'ADN BRICAREAU</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">Pourquoi nous sommes <br className="md:hidden" /><span className="text-[#18448F]">la référence au Québec.</span></h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px]">
                            {/* Tech Card */}
                            <div className="md:col-span-8 bg-slate-50 border border-slate-100 shadow-lg rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                                <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-100 rounded-full blur-[80px] opacity-50 group-hover:bg-blue-200 transition-colors" />
                                <div className="relative z-10 space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[#18448F] flex items-center justify-center text-white shadow-lg">
                                        <Activity className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900">Calibrage Scientifique</h3>
                                    <p className="text-slate-500 text-lg max-w-lg leading-relaxed">
                                        Analyse physico-chimique moléculaire de votre eau pour concevoir un système entièrement sur-mesure. Nous ne laissons rien au hasard.
                                    </p>
                                </div>
                            </div>

                            {/* Guarantee Card */}
                            <div className="md:col-span-4 bg-gradient-to-br from-[#164E63] to-[#083344] border border-cyan-800 shadow-lg rounded-[2.5rem] p-10 text-white flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-500">
                                <div className="space-y-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                                        <ShieldCheck className="w-7 h-7 text-cyan-300" />
                                    </div>
                                    <h3 className="text-3xl font-bold">Protection<br />Patrimoniale</h3>
                                    <p className="text-cyan-100/70 leading-relaxed font-light">
                                        Une garantie exceptionnelle. Nous protégeons votre famille et la valeur de votre investissement à très long terme.
                                    </p>
                                </div>
                            </div>

                            {/* Eco Card */}
                            <div className="md:col-span-8 bg-slate-50 border border-slate-100 shadow-lg rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                                <div className="absolute bottom-0 right-0 p-8 opacity-5">
                                    <Leaf className="w-64 h-64 rotate-12" />
                                </div>
                                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">
                                    <div className="flex-1 space-y-4">
                                        <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                                            <Leaf className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900">Empreinte Zéro</h3>
                                        <p className="text-slate-500 text-lg leading-relaxed">
                                            Réduction de 50% de la consommation de sel de rinçage et élimination de plus de 2500 bouteilles de plastique par an pour une famille moyenne.
                                        </p>
                                    </div>
                                    <div className="w-40 h-40 rounded-full bg-emerald-50 border-8 border-emerald-100 flex flex-col items-center justify-center shrink-0">
                                        <span className="text-4xl font-black text-emerald-600">-50%</span>
                                        <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest mt-1">De Sel</span>
                                    </div>
                                </div>
                            </div>

                            {/* Support Card */}
                            <div className="md:col-span-4 bg-slate-50 border border-slate-100 shadow-lg rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                                <div className="space-y-4">
                                    <Phone className="w-10 h-10 text-blue-600" />
                                    <h3 className="text-2xl font-bold text-slate-900">Ligne Prioritaire</h3>
                                    <p className="text-slate-500 leading-relaxed">
                                        Service technique d'élite 24/7. Une réactivité absolue partout au Québec.
                                    </p>
                                </div>
                                <a href="tel:18552649328" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-widest group-hover:gap-4 transition-all">
                                    Appeler <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. REDESIGNED CTA: Full Bleed Glassmorphism */}
                <section className="relative py-40 flex items-center justify-center overflow-hidden">
                    {/* Dark aesthetic background image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1550005973-78ce3f78fa45?q=80&w=2000&auto=format&fit=crop" 
                            alt="Ingénierie Bricareau" 
                            className="w-full h-full object-cover scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    </div>

                    <div className="relative z-10 container mx-auto px-6">
                        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl overflow-hidden group">
                            {/* Animated glowing orb behind glass */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
                            
                            <div className="relative z-10 space-y-10">
                                <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-black text-white uppercase tracking-widest shadow-xl">
                                    <Sparkles className="w-4 h-4 text-cyan-300" />
                                    Le Moment est Venu
                                </div>
                                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
                                    L'Excellence <br /><span className="text-cyan-300 font-light italic">n'attend pas.</span>
                                </h2>
                                <p className="text-blue-100 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                                    Réservez votre analyse technique offerte et rejoignez le cercle très fermé de ceux qui ne font aucun compromis sur la qualité de leur eau.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                                    <ProMaxButton 
                                        variant="primary" 
                                        className="px-16 h-20 text-[13px] shadow-2xl hover:shadow-cyan-500/20 w-full sm:w-auto"
                                        onClick={() => navigate("/consultation")}
                                    >
                                        RÉSERVER MON ANALYSE
                                    </ProMaxButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default WhyChooseUs;
