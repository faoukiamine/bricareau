import React, { useEffect } from "react";
import { 
    ShieldCheck, 
    Zap, 
    Sparkles, 
    Activity, 
    ArrowRight,
    ShieldAlert,
    CheckCircle2,
    Factory,
    Microscope,
    HeartPulse,
    Settings,
    Lightbulb,
    Lock,
    Eye
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import TestimonialsSection from "@/components/TestimonialsSection";
import { cn } from "@/lib/utils";

// Assets
import mainImg from "@/assets/Aquaviva-Cannes-480x355.png";
import heroImg from "@/assets/1451506551.JPG";

const DesinfectionUVIndustrielle = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Systèmes de désinfection UV à haut débit | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    const biosafetySpecs = [
        { label: "Dose UV-C", value: "40 mJ/cm²", desc: "Standard NSF/ANSI 55 Classe A", icon: Zap },
        { label: "Durée de vie", value: "9,000 hrs", desc: "Lampes haute intensité", icon: Activity },
        { label: "Réacteur", value: "Inox 316L", desc: "Grade alimentaire poli miroir", icon: Factory },
        { label: "Certification", value: "Log 4 Destruction", desc: "99.99% Efficacité bactérienne", icon: ShieldCheck }
    ];

    return (
        <div className="min-h-screen bg-[#fcfcfd] font-sans selection:bg-purple-100 selection:text-purple-900">
            <Header />
            
            <main>
                {/* 1. SPECTRAL HERO (Violet/Dark Aesthetic) */}
                <section className="relative h-[90vh] flex items-center bg-[#05050a] overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={heroImg} 
                            alt="Industrial Sterilization Room" 
                            className="w-full h-full object-cover opacity-20 scale-110 blur-sm" 
                        />
                        {/* Purple/Blue Glow Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#05050a] via-[#05050a]/90 to-transparent" />
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]" />
                        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-12">
                            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-3xl animate-pulse">
                                <Sparkles className="w-4 h-4 text-purple-400" />
                                <span className="text-[10px] font-black text-purple-400 uppercase tracking-[0.4em]">Biosécurité Photonique</span>
                            </div>
                            
                            <h1 className="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic text-white mb-6 tracking-tight">
    Puissance <br />
                                <span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg">ultraviolette.</span>
</h1>
                            
                            <p className="text-xl md:text-3xl text-slate-400 font-light max-w-2xl leading-relaxed">
                                Neutralisation microbiologique instantanée pour vos lignes de production. La sécurité par la lumière, sans aucun produit chimique.
                            </p>

                            <div className="pt-8 flex flex-wrap gap-8 items-center">
                                <ProMaxButton variant="primary" className="px-16 h-20 text-[12px] bg-purple-600 hover:bg-purple-500 border-none shadow-[0_0_40px_rgba(147,51,234,0.3)]" onClick={() => navigate("/contact")}>
                                    CONSULTATION BIOSÉCURITÉ
                                </ProMaxButton>
                                <div className="flex items-center gap-4">
                                    <Eye className="w-6 h-6 text-purple-400" />
                                    <div className="text-white">
                                        <div className="text-2xl font-bold tracking-tighter">254nm</div>
                                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Longueur d'onde UV-C</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Spectral lines background */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                        <svg className="w-full h-full">
                            <defs>
                                <pattern id="spectral-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                                    <circle cx="1" cy="1" r="1" fill="white" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#spectral-grid)" />
                        </svg>
                    </div>
                </section>

                {/* 2. THE BIO-REACTOR (Futuristic Centerfold) */}
                <section className="py-40 bg-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-32">
                            
                            {/* Visual Side */}
                            <div className="lg:w-1/2 relative">
                                <div className="absolute inset-0 bg-purple-600/5 rounded-[4rem] blur-[80px]" />
                                <div className="relative rounded-[4rem] bg-slate-50 border border-slate-100 p-16 flex items-center justify-center shadow-2xl">
                                    <div className="absolute inset-0 overflow-hidden rounded-[4rem]">
                                        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent animate-pulse" />
                                    </div>
                                    <img src={mainImg} alt="UV Reactor Unit" className="w-full h-auto drop-shadow-2xl relative z-10 transition-transform duration-1000 hover:scale-105" />
                                    
                                    {/* Tech Callout */}
                                    <div className="absolute -bottom-10 -right-10 bg-[#05050a] text-white p-10 rounded-[3rem] shadow-2xl border border-white/10 z-20">
                                        <Lock className="w-10 h-10 text-purple-500 mb-6" />
                                        <div className="text-4xl font-black italic tracking-tighter">Log 4</div>
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Sécurité Maximale</div>
                                    </div>
                                </div>
                            </div>

                            {/* Copy Side */}
                            <div className="lg:w-1/2 space-y-16">
                                <div className="space-y-8">
                                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-950 uppercase leading-none">
                                        Action <br />
                                        <span className="text-purple-600 italic font-light lowercase">germicide.</span>
                                    </h2>
                                    <p className="text-slate-500 text-2xl font-light leading-relaxed">
                                        Nos réacteurs UV-C cassent la chaîne d'ADN des micro-organismes en une fraction de seconde. Zéro résidu, zéro goût, zéro compromis sur la sécurité de vos consommateurs.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    {[
                                        { title: "Zéro Chimique", desc: "Désinfection pure sans aucun ajout de chlore ou ozone.", icon: HeartPulse },
                                        { title: "Flux Ininterrompu", desc: "Traitement à passage direct sans perte de pression sur la ligne.", icon: Zap },
                                        { title: "Lampes Amalgame", desc: "Haute puissance pour des débits industriels massifs.", icon: Lightbulb },
                                        { title: "Monitoring Intensité", desc: "Capteurs UV certifiés pour une validation continue du traitement.", icon: Microscope }
                                    ].map((feat, idx) => (
                                        <div key={idx} className="group space-y-4">
                                            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                                                <feat.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-950 uppercase tracking-tight">{feat.title}</h3>
                                            <p className="text-slate-500 text-sm font-light leading-relaxed">{feat.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. PERFORMANCE GRID (Spectral Bento) */}
                <section className="py-32 bg-[#05050a] relative">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {biosafetySpecs.map((spec, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] hover:border-purple-500/50 hover:bg-white/10 transition-all group cursor-default">
                                    <spec.icon className="w-10 h-10 text-purple-400 mb-10 group-hover:rotate-12 transition-transform" />
                                    <div className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3">{spec.label}</div>
                                    <div className="text-4xl font-bold text-white tracking-tighter mb-4">{spec.value}</div>
                                    <p className="text-slate-500 text-sm font-light">{spec.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. FINAL CALL TO BIO-SAFETY */}
                <section className="py-40 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10 text-center space-y-16">
                        <div className="space-y-6">
                            <h2 className="text-6xl md:text-[140px] font-bold tracking-tighter uppercase leading-[0.8] text-slate-950">
                                Protégez <br />
                                <span className="text-purple-600 italic font-light lowercase">l'invisible.</span>
                            </h2>
                            <p className="text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                                L'expertise Bricareau en biosécurité industrielle. Assurez la conformité microbiologique totale de vos installations.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-8 justify-center pt-10">
                            <ProMaxButton variant="primary" className="px-20 h-24 text-[13px] rounded-none bg-purple-600 hover:bg-purple-500" onClick={() => navigate("/contact")}>
                                OBTENIR UN AUDIT UV
                            </ProMaxButton>
                            <ProMaxButton variant="outline" className="border-slate-200 text-slate-900 hover:bg-slate-50 px-20 h-24 text-[13px] rounded-none" onClick={() => navigate("/consultation")}>
                                FICHE TECHNIQUE SÉRIE-U
                            </ProMaxButton>
                        </div>
                    </div>

                    {/* Decorative Purple Wave */}
                    <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />
                </section>

                <TestimonialsSection filterProduct="Industriel" />
            </main>
            <Footer />
        </div>
    );
};

export default DesinfectionUVIndustrielle;
