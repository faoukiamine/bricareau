import React, { useEffect } from "react";
import { 
    Leaf, 
    Droplets, 
    Zap, 
    Globe, 
    ChevronRight,
    ArrowRight,
    Phone
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import { cn } from "@/lib/utils";
import { ProMaxButton } from "@/components/ui/ProMaxButton";

// Assets
import heroImg from "@/assets/2233.jpg"; 
import imgMovement from "@/assets/2232.jpg"; 
import imgGaspillage from "@/assets/bouteilles-plastiques.jpg";
import imgCO2 from "@/assets/2229.jpg";
import imgLifestyle from "@/assets/2234.jpg";

const Sustainability = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Durabilité | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 overflow-x-hidden max-w-[100vw]">
            <Header forceWhiteMobileOnly={true} />

            <main>
                {/* 1. CUSTOM HERO SECTION */}
                <section className="relative bg-white overflow-hidden min-h-[85vh] md:h-[100vh] lg:h-auto lg:min-h-screen flex flex-col justify-center pt-24 pb-8 lg:pt-28 lg:pb-16 border-b border-slate-200">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-6 pointer-events-auto">
                            <GlobalBreadcrumbs />
                        </div>
                    </div>
                    <div className="absolute inset-0 w-full h-full opacity-40 md:opacity-100">
                        {/* Mobile Gradient (Style Residentiel/Home1) */}
                        {/* Mobile Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-transparent z-10 md:hidden"></div>
                        {/* Tablet Vertical Filter (Progressive) */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,white_0%,rgba(255,255,255,0.95)_40%,rgba(255,255,255,0.5)_70%,transparent_100%)] z-10 hidden md:block lg:hidden"></div>
                        {/* Desktop Gradient: 1/3 solid white, fading to transparent */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,white_33.33%,rgba(255,255,255,0)_85%)] z-10 hidden lg:block"></div>
                        
                        {/* Image Container */}
                        <div className="absolute right-0 top-0 w-full lg:w-[80%] h-full">
                            <img 
                                src={heroImg} 
                                className="absolute inset-0 w-full h-full object-cover object-bottom lg:object-center animate-in fade-in duration-1000"
                             alt="Durabilité Bricareau" title="Filtration Bricareau par Bricareau" />
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-20"></div>

                    <div className="container mx-auto px-6 relative z-30">
                        <div className="max-w-3xl md:w-[75%] lg:w-full flex flex-col justify-center animate-in fade-in slide-in-from-left-10 duration-1000 delay-300 fill-mode-both">

                            <h1 className="text-[50px] leading-[55px] font-sans font-bold text-[#18448F] mb-6 tracking-tight">
                                Ensemble, cultivons <br className="hidden md:block" /><span className="text-[#8CC63F] font-sans font-bold drop-shadow-sm">un avenir durable.</span>
                            </h1>
                            
                            <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl mb-12">
                                Parce que la durabilité est au cœur de notre démarche, nos systèmes de filtration d'eau sont conçus pour allier performance et respect de l'écologie. Pour votre domicile comme pour votre entreprise, Bricareau élimine votre dépendance aux bouteilles en plastique et vous offre une eau d'une qualité exceptionnelle, protégeant durablement la santé de tous et l'avenir de notre planète.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <ProMaxButton variant="primary" className="px-10 h-16 shadow-lg" onClick={() => document.getElementById('notre-engagement')?.scrollIntoView({ behavior: 'smooth' })}>
                                    DÉCOUVRIR NOTRE ENGAGEMENT
                                </ProMaxButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. NOTRE ENGAGEMENT: L'Immersion Sombre */}
                <section className="relative min-h-screen py-32 flex items-center bg-slate-900 overflow-hidden" id="notre-engagement">
                    <div className="absolute inset-0 z-0">
                        {/* Motif abstrait / Halos */}
                        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#8CC63F]/40 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite]" />
                        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-[#18448F]/30 rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite_reverse]" />
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
                    </div>

                    <div className="relative z-10 container mx-auto px-6 text-center">
                        <span className="inline-block py-1 px-4 bg-[#18448F] text-white rounded-full font-bold tracking-[0.2em] uppercase text-xs mb-10">Notre Engagement</span>
                        <h2 className="heading-pro-max font-bold text-white mb-12">
                            Redéfinir le <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] to-blue-500 italic font-light">standard écologique.</span>
                        </h2>
                        <div className="text-white text-xl md:text-3xl font-light leading-relaxed max-w-4xl mx-auto space-y-6">
                            <p>
                                Face à l'urgence environnementale, chaque décision compte. Préserver nos ressources naturelles et réduire drastiquement notre empreinte écologique n'est plus une option, mais une responsabilité collective absolue.
                            </p>
                            <p>
                                C'est avec cette vision que Bricareau a vu le jour. Nous avons repensé le cycle de l'eau pour éradiquer définitivement les plastiques à usage unique, en concevant des systèmes de purification d'avant-garde qui garantissent une eau d'une pureté inégalée, directement à votre robinet.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. NOS PILIERS: Split Screen */}
                <section className="py-32 bg-slate-50 relative overflow-hidden" id="nos-piliers">
                    <div className="container mx-auto px-6 mb-24 text-center">
                        <span className="inline-block py-1 px-4 bg-[#18448F] text-white rounded-full font-bold tracking-[0.2em] uppercase text-xs mb-6">Un Futur Plus Vert</span>
                        <h2 className="heading-pro-max">
                            <span className="font-bold not-italic text-[#18448F] block">Pourquoi choisir</span>
                            <span className="font-bold text-[#8CC63F] block">le traitement durable ?</span>
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto space-y-32">
                        {/* Pilier 01 */}
                        <div className="flex flex-col lg:flex-row items-center gap-16 px-6">
                            <div className="lg:w-1/2 space-y-6">
                                <div className="text-5xl md:text-6xl font-light text-[#18448F]/20 mb-2">01.</div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-[#18448F] leading-tight">
                                    Réduire le gaspillage
                                </h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-light">
                                    La fabrication d'une seule bouteille d'eau nécessite environ trois litres d'eau gaspillée, plus une quantité considérable d'énergie. Autant de gaspillage qu'il est possible d'éviter en optant pour nos solutions de filtration.
                                </p>
                            </div>
                            <div className="lg:w-1/2 w-full min-h-[500px] md:min-h-[600px] lg:min-h-0 lg:aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 bg-[#18448F]/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700" />
                                <img src={imgGaspillage} className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"  alt="Réduire le gaspillage - filtration Bricareau" title="Filtration Bricareau par Bricareau" />
                            </div>
                        </div>

                        {/* Pilier 02 */}
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 px-6">
                            <div className="lg:w-1/2 w-full min-h-[500px] md:min-h-[600px] lg:min-h-0 lg:aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 bg-[#8CC63F]/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700" />
                                <img src={imgCO2} className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"  alt="Moins de CO2 - filtration Bricareau" title="Filtration Bricareau par Bricareau" />
                            </div>
                            <div className="lg:w-1/2 space-y-6">
                                <div className="text-5xl md:text-6xl font-light text-[#18448F]/20 mb-2">02.</div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-[#18448F] leading-tight">
                                    Moins de CO<sub>2</sub>
                                </h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-light">
                                    Non seulement la production de bouteilles à usage unique engendre un gaspillage considérable, mais le transport et la distribution génèrent également une empreinte carbone inutile.
                                </p>
                            </div>
                        </div>

                        {/* Pilier 03 */}
                        <div className="flex flex-col lg:flex-row items-center gap-16 px-6">
                            <div className="lg:w-1/2 space-y-6">
                                <div className="text-5xl md:text-6xl font-light text-[#18448F]/20 mb-2">03.</div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-[#18448F] leading-tight">
                                    Mode de vie sain
                                </h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-light">
                                    En optant pour nos solutions durables, vous donnez un véritable modèle en matière de développement durable. Découvrir à quel point l'utilisation d'eau filtrée est simple et pratique.
                                </p>
                            </div>
                            <div className="lg:w-1/2 w-full min-h-[500px] md:min-h-[600px] lg:min-h-0 lg:aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 bg-[#18448F]/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700" />
                                <img src={imgLifestyle} className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"  alt="Mode de vie sain - analyse d'eau professionnelle" title="Analyse d'eau professionnelle par Bricareau" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Testimonials */}
                <div className="bg-slate-50 py-32 border-t border-slate-200">
                    <TestimonialsSection 
                        filterProduct="/"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16 px-6">
                                <span className="inline-block py-1 px-4 bg-[#18448F] text-white rounded-full font-bold tracking-[0.2em] uppercase text-xs mb-4">Avis Clients</span>
                                <h2 className="heading-pro-max">
                                    <span className="font-bold not-italic text-[#18448F] block">L'engagement durable</span>
                                    <span className="font-bold text-[#8CC63F] block">récompensé.</span>
                                </h2>
                            </div>
                        }
                    />
                </div>

                {/* 4. CTA: Éditorial Aligné à Droite avec Image Full Width (Dark Mode) */}
                <section className="relative overflow-hidden min-h-[50vh] md:min-h-screen lg:min-h-[80vh] flex items-center py-16 md:py-32">
                    {/* Background Image Full Width */}
                    <div className="absolute inset-0 z-0">
                        <img src={imgMovement} className="w-full h-full object-cover object-center"  alt="Durabilité Bricareau" title="Traitement d'eau Québec par Bricareau" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/60 to-slate-900/95" />
                    </div>
                    
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 relative z-10">
                        <div className="md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-7 space-y-8 lg:space-y-10 text-center lg:text-left md:px-0 lg:pl-12">

                            <h2 
                                className="text-white tracking-tighter mb-6"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontWeight: 300,
                                    fontSize: '48px',
                                    lineHeight: '48px'
                                }}
                            >
                                <span className="text-[#8CC63F]" style={{ fontWeight: 700 }}>Rejoignez</span> <br className="md:hidden lg:block" /><span>le mouvement.</span>
                            </h2>
                            <p className="text-slate-300 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Rejoignez les milliers de Québécois qui ont dit non aux bouteilles en plastique. Nos experts en durabilité sont à votre disposition pour vous conseiller sur les meilleures pratiques de gestion de l'eau.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
                                <ProMaxButton variant="white" className="px-12 h-16 shadow-[0_0_40px_rgba(255,255,255,0.2)] text-[#18448F] font-bold" onClick={() => navigate("/consultation")}>PASSER AU DURABLE</ProMaxButton>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default Sustainability;









