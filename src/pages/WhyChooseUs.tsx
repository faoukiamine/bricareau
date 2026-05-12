import React, { useEffect } from "react";
import { 
    ChevronRight, 
    ArrowRight,
    Star,
    CheckCircle2,
    ShieldCheck,
    Settings,
    Users,
    Clock,
    DollarSign,
    Leaf,
    ArrowUpRight,
    Phone,
    Zap,
    Trophy,
    HeartPulse,
    Globe
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { cn } from "@/lib/utils";
import { ProMaxButton } from "@/components/ui/ProMaxButton";

// Assets
import heroImg from "@/assets/10341859.jpg"; 

const WhyChooseUs = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Pourquoi nous choisir ? | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />

            <main>
                {/* 1. PREMIUM HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
                    {/* Background Overlay with Depth */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImg}
                            alt="Expertise Bricareau"
                            className="w-full h-full object-cover opacity-40 grayscale-[20%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-8">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                                <Trophy className="w-4 h-4 text-blue-400" />
                                <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Leader au Québec depuis 20 ans</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase">
                                L'EXCELLENCE <br />
                                <span className="text-blue-500">SANS COMPROMIS.</span>
                            </h1>
                            
                            <p className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed">
                                Plus qu'un simple fournisseur, Bricareau est l'architecte de votre pureté hydrique. Découvrez pourquoi des milliers de foyers et d'entreprises nous confient leur ressource la plus précieuse.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 pt-8">
                                <ProMaxButton 
                                    variant="primary" 
                                    className="px-12 h-16 text-[11px]"
                                    onClick={() => navigate("/contact")}
                                >
                                    DÉCOUVRIR NOTRE EXPERTISE
                                </ProMaxButton>
                                <button 
                                    className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors group"
                                    onClick={() => document.getElementById('expertise-grid')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    <span className="text-[11px] font-black uppercase tracking-widest">En savoir plus</span>
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500/50 transition-all">
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                        <div className="w-[1px] h-12 bg-white" />
                    </div>
                </section>

                {/* 2. THE DNA BENTO GRID */}
                <section id="expertise-grid" className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                            <div className="max-w-2xl space-y-6">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">ADN BRICAREAU</span>
                                <h2 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-none">
                                    Une vision moderne du <span className="text-[#18448F]">traitement de l'eau.</span>
                                </h2>
                            </div>
                            <p className="text-slate-500 text-lg max-w-md italic border-l-2 border-blue-100 pl-8">
                                "Nous ne vendons pas des machines, nous concevons des écosystèmes de santé pour votre quotidien."
                            </p>
                        </div>

                        {/* Bento Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px] md:auto-rows-[350px]">
                            
                            {/* 1. Expertise Card (Large) */}
                            <div className="md:col-span-8 bg-slate-50 rounded-[3rem] p-12 flex flex-col justify-between overflow-hidden relative group">
                                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Settings className="w-64 h-64 rotate-12" />
                                </div>
                                <div className="space-y-6 relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                        <Zap className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Ingénierie de précision</h3>
                                    <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
                                        Nos systèmes utilisent exclusivement des technologies de pointe, comme les valves de contrôle intelligentes et des résines à haute capacité, garantissant une efficacité maximale et une consommation de sel réduite de 40%.
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 text-[#18448F] font-bold uppercase text-[10px] tracking-widest mt-8">
                                    <span>Certifié NSF & WQA</span>
                                    <div className="h-[1px] flex-1 bg-slate-200" />
                                </div>
                            </div>

                            {/* 2. Trust Card (Vertical) */}
                            <div className="md:col-span-4 bg-[#18448F] rounded-[3rem] p-10 text-white flex flex-col justify-between group hover:bg-[#1e52ab] transition-colors duration-500">
                                <div className="space-y-6">
                                    <ShieldCheck className="w-12 h-12 text-blue-300" />
                                    <h3 className="text-3xl font-bold leading-tight">Garantie <br />Sérénité Totale</h3>
                                    <p className="text-blue-100/70 font-light">
                                        Une protection complète sur les pièces et la main-d'œuvre. Nous restons à vos côtés bien après l'installation.
                                    </p>
                                </div>
                                <ProMaxButton variant="white" className="w-full text-[10px]">NOS GARANTIES</ProMaxButton>
                            </div>

                            {/* 3. Team Card */}
                            <div className="md:col-span-4 bg-white border border-slate-100 rounded-[3rem] p-10 flex flex-col justify-between shadow-xl shadow-slate-100/50 group overflow-hidden relative">
                                <div className="space-y-4">
                                    <Users className="w-10 h-10 text-blue-600" />
                                    <h3 className="text-2xl font-bold text-slate-900">Expertise Humaine</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Nos techniciens ne sont pas de simples installateurs ; ce sont des spécialistes certifiés formés aux dernières normes sanitaires.
                                    </p>
                                </div>
                                <img 
                                    src="https://images.unsplash.com/photo-1581092921461-eab62e92c73e?q=80&w=800&auto=format&fit=crop" 
                                    alt="Expertise" 
                                    className="absolute bottom-0 right-0 w-32 h-32 object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* 4. Ecology Card (Wide) */}
                            <div className="md:col-span-8 bg-blue-50 rounded-[3rem] p-12 flex flex-col md:flex-row gap-12 items-center group">
                                <div className="flex-1 space-y-6">
                                    <div className="inline-flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                        <Leaf className="w-3 h-3" />
                                        Éco-Responsable
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900">Impact Zéro Plastique</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Chaque système Bricareau installé élimine en moyenne 2 400 bouteilles de plastique à usage unique par an. Une eau pure pour vous, une planète préservée pour tous.
                                    </p>
                                </div>
                                <div className="w-full md:w-64 aspect-square rounded-[2rem] overflow-hidden">
                                    <img 
                                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop" 
                                        alt="Nature" 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. TECHNICAL HIGHLIGHTS */}
                <section className="py-32 bg-slate-900 text-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em]">TECH & INNOVATION</span>
                                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
                                        Des composants <br /> <span className="text-blue-500">haute performance.</span>
                                    </h2>
                                    <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                        Nous ne faisons aucun compromis sur la qualité. Chaque pièce de nos systèmes est rigoureusement sélectionnée pour sa durabilité.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    {[
                                        { title: "Valves Clack & Fleck", desc: "La référence mondiale en fiabilité et facilité d'entretien." },
                                        { title: "Résines de Qualité Alimentaire", desc: "Performance d'échange ionique supérieure et longévité accrue." },
                                        { title: "Boîtiers en Noryl", desc: "Résistance extrême à la pression et à la corrosion chimique." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all">
                                                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                                <p className="text-slate-500 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -inset-20 bg-blue-600/20 blur-[120px] rounded-full" />
                                <div className="relative aspect-square rounded-[3rem] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl">
                                    <div className="w-full h-full rounded-[2rem] overflow-hidden">
                                        <img 
                                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" 
                                            alt="Technical" 
                                            className="w-full h-full object-cover opacity-80"
                                        />
                                    </div>
                                    {/* Tech Badge */}
                                    <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2rem] shadow-2xl text-slate-900 hidden md:block">
                                        <div className="flex items-center gap-4 mb-4">
                                            <Globe className="w-8 h-8 text-blue-600" />
                                            <div className="text-3xl font-black italic tracking-tighter leading-none">100%<br />CONFORME</div>
                                        </div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Aux normes Santé Canada</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. THE 4 PILLARS (Modern Icons) */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                { 
                                    icon: <HeartPulse className="w-10 h-10" />, 
                                    title: "Santé & Bien-être", 
                                    desc: "Éliminez les métaux lourds et les bactéries pour une eau qui régénère votre corps." 
                                },
                                { 
                                    icon: <DollarSign className="w-10 h-10" />, 
                                    title: "Économie réelle", 
                                    desc: "Réduisez de 50% vos dépenses en produits de nettoyage et prolongez la vie de vos appareils." 
                                },
                                { 
                                    icon: <Clock className="w-10 h-10" />, 
                                    title: "Réactivité 24/7", 
                                    desc: "Un problème ? Notre équipe de support technique intervient dans les meilleurs délais partout au Québec." 
                                },
                                { 
                                    icon: <ShieldCheck className="w-10 h-10" />, 
                                    title: "Transparence", 
                                    desc: "Pas de frais cachés. Nos analyses d'eau sont rigoureuses et nos devis sont détaillés au centime près." 
                                }
                            ].map((pillar, i) => (
                                <div key={i} className="space-y-6 group">
                                    <div className="text-blue-600 transition-transform duration-500 group-hover:-translate-y-2">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{pillar.title}</h3>
                                    <p className="text-slate-500 font-light leading-relaxed">{pillar.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. TESTIMONIALS */}
                <div className="bg-slate-50 py-32 border-y border-gray-100">
                    <TestimonialsSection 
                        filterProduct="/"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16">
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] block mb-4">AVIS CLIENTS</span>
                                <span className="font-bold text-[#18448F] block text-4xl md:text-7xl tracking-tighter uppercase">Une confiance qui se partage.</span>
                            </div>
                        }
                    />
                </div>

                {/* 6. FINAL CTA BOX */}
                <section className="py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="relative bg-[#18448F] rounded-[3.5rem] p-12 md:p-24 overflow-hidden text-center space-y-10 group">
                            {/* Animated Circles for background effect */}
                            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:scale-110 transition-transform duration-[5s]" />
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl group-hover:scale-110 transition-transform duration-[5s]" />

                            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
                                <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-none uppercase">
                                    Prêt à transformer <br /><span className="text-blue-300">votre expérience de l'eau ?</span>
                                </h2>
                                <p className="text-blue-100/70 text-lg md:text-xl font-light">
                                    Rejoignez les milliers de Québécois qui ont choisi l'excellence Bricareau. Votre analyse d'eau gratuite commence ici.
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 pt-4">
                                <ProMaxButton 
                                    variant="white" 
                                    className="px-16 h-20 text-[12px]"
                                    onClick={() => navigate("/contact")}
                                >
                                    DEMANDER UN DEVIS GRATUIT
                                </ProMaxButton>
                                <a href="tel:18552649328" className="flex items-center gap-4 text-white hover:text-blue-300 transition-colors">
                                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] font-black text-blue-300 uppercase tracking-widest">Appel gratuit</div>
                                        <div className="text-2xl font-bold tracking-tight">(855) 264-9328</div>
                                    </div>
                                </a>
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
