import React, { useEffect, useState } from "react";
import { 
    Phone,
    ShieldCheck, 
    Cpu,
    CheckCircle2,
    Zap,
    Settings,
    Star,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Leaf,
    FlaskConical,
    Clock,
    Award,
    Gem,
    Crown
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { cn } from "@/lib/utils";

// Assets
import heroImg from "@/assets/2241.jpg";
import designImg from "@/assets/water_system_blueprint_render_1778902045750.png";
import waterTestImg from "@/assets/Water-test_15395190.png";
import installationImg from "@/assets/Water-Softener-installation.jpg";
import serviceImg from "@/assets/RO service.png";
import ctaImg from "@/assets/2148858959.jpg";
import waterTestLabImg from "@/assets/2242.jpg";
import serviceNewImg from "@/assets/cae3c0a4-5b4d-4b0e-8bc3-3550a714f7bb.jpg";
import installationNewImg from "@/assets/2235.jpg";

import gal1 from "@/assets/2236.jpeg";
import gal2 from "@/assets/2240.jpeg";
import gal3 from "@/assets/2237.jpeg";
import gal4 from "@/assets/2239.jpeg";
import gal5 from "@/assets/2238.jpeg";

const processSteps = [
    {
        id: "01",
        title: "Les analyses de la qualité de l'eau",
        subtitle: "Le fondement de toute perfection.",
        desc: "Nous réalisons une analyse exhaustive de votre eau. Nos protocoles de diagnostic identifient avec précision les contaminants, le profil minéral et l'équilibre microbiologique. Ces données scientifiques rigoureuses constituent le socle de notre proposition technique.",
        icon: FlaskConical,
        image: waterTestLabImg,
        details: ["Profil minéral", "Spectrométrie des métaux", "Profil microbiologique", "Analyse TDS"]
    },
    {
        id: "02",
        title: "Proposition de solutions adaptées",
        subtitle: "La science au service du sur-mesure.",
        desc: "Chaque goutte compte. Nos experts techniques conçoivent une architecture de filtration parfaitement calibrée pour votre profil hydrique unique, sélectionnant des technologies de pointe pour une durabilité maximale.",
        icon: Cpu,
        image: designImg,
        details: ["Conception sur mesure", "Matériaux de pointe", "Écosystème intelligent", "Performance absolue"]
    },
    {
        id: "03",
        title: "Installation professionnelle",
        subtitle: "L'exécution avec une précision horlogère.",
        desc: "Nos techniciens certifiés orchestrent l'installation avec une rigueur absolue. De l'intégration mécanique à la calibration électronique, chaque composant est testé pour garantir une performance sans faille.",
        icon: Settings,
        image: installationNewImg,
        gallery: [installationNewImg, gal1, gal2, gal3, gal4, gal5],
        details: ["Installation sans tracas", "Calibration des instruments", "Paramétrage personnalisé", "Essais et mise en service"]
    },
    {
        id: "04",
        title: "Entretien et suivi régulier",
        subtitle: "Une tranquillité d'esprit inébranlable.",
        desc: "L'excellence s'entretient. Notre engagement s'étend bien au-delà de l'installation, avec un programme de maintenance proactive assurant que votre système opère à son apogée technologique, jour après jour.",
        icon: ShieldCheck,
        image: serviceNewImg,
        details: ["Programme de maintenance", "Analyses de contrôle", "Remplacement préventif", "Assistance prioritaire"]
    }
];

const ImageGallery = ({ images }: { images: string[] }) => {
    // Un découpage bento "arbitraire" pour 6 images dans une grille 3x3
    const bentoClasses = [
        "col-span-2 row-span-2",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
    ];

    return (
        <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-2">
            {images.slice(0, 6).map((img, idx) => (
                <div key={idx} className={cn("relative overflow-hidden rounded-xl group/item shadow-sm hover:shadow-md transition-shadow", bentoClasses[idx])}>
                    <div className="absolute inset-0 bg-[#18448F]/20 mix-blend-multiply z-10 group-hover/item:opacity-0 transition-opacity duration-500" />
                    <img 
                        src={img} 
                        alt={`Gallery ${idx}`} 
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700" 
                    />
                </div>
            ))}
        </div>
    );
};

const OurProcess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Notre Méthodologie | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 overflow-x-hidden">
            <Header />

            <main>
                {/* 1. HERO SECTION */}
                <section className="relative bg-white overflow-hidden min-h-[85vh] md:min-h-screen flex flex-col justify-center pt-24 pb-8 lg:pt-28 lg:pb-16 border-b border-slate-200">
                    <div className="absolute inset-0 w-full h-full opacity-40 lg:opacity-100">
                        {/* Mobile Gradient (Style Residentiel/Home1) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent z-10 lg:hidden"></div>
                        {/* Desktop Gradient */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,white_33.33%,rgba(255,255,255,0)_85%)] z-10 hidden lg:block"></div>
                        
                        {/* Image Container */}
                        <div className="absolute right-0 top-0 w-full lg:w-[80%] h-full">
                            <img 
                                src={heroImg} 
                                className="absolute inset-0 w-full h-full object-cover object-bottom lg:object-center animate-in fade-in duration-1000"
                             alt="Notre Processus - systèmes d'eau sur mesure" title="Systèmes d'eau sur mesure par Bricareau" />
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-20"></div>

                    <div className="container mx-auto px-6 relative z-30">
                        <div className="max-w-3xl flex flex-col justify-center animate-in fade-in slide-in-from-left-10 duration-1000 delay-300 fill-mode-both">
                            <h1 className="text-[50px] leading-[55px] font-sans font-bold text-[#18448F] mb-6 tracking-tight">
                                Notre savoir-faire d'expert.<br/> <span className="text-[#8CC63F] font-sans font-bold drop-shadow-sm">Pour une eau absolument parfaite.</span>
                            </h1>
                            
                            <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl mb-12">
                                Découvrez un processus rigoureux en quatre étapes. De l'analyse de la qualité de l'eau à l'entretien et suivi régulier, nous ne laissons aucune place au hasard pour garantir la perfection de votre eau.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <ProMaxButton variant="primary" className="px-10 h-16 shadow-lg" onClick={() => document.getElementById('les-etapes')?.scrollIntoView({ behavior: 'smooth' })}>
                                    DÉCOUVRIR LES ÉTAPES
                                </ProMaxButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. LE CŒUR DU PROCESSUS (Style Durabilité) */}
                <section className="py-32 bg-slate-50 relative overflow-hidden" id="les-etapes">
                    <div className="container mx-auto px-6 mb-24 text-center">
                        <span className="inline-block py-1 px-4 bg-[#18448F] text-white rounded-full font-bold tracking-[0.2em] uppercase text-xs mb-6">Notre Processus</span>
                        <h2 className="heading-pro-max">
                            <span className="font-bold not-italic text-[#18448F] block">La rigueur de</span>
                            <span className="font-bold text-[#8CC63F] block">notre méthodologie.</span>
                        </h2>
                        <p className="max-w-3xl mx-auto mt-8 text-slate-600 text-lg md:text-xl leading-relaxed">
                            Découvrez notre approche d'expert en <strong>traitement de l'eau</strong>. De l'<strong>analyse de la qualité de l'eau</strong> à l'installation d'<strong>adoucisseurs d'eau</strong> et de systèmes de <strong>filtration par osmose inverse</strong>, notre processus élimine rigoureusement le calcaire, le fer et les contaminants. Assurez à votre résidence, commerce ou industrie une <strong>eau pure et adoucie</strong> pour un confort absolu, une performance accrue et une protection optimale de vos installations.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto space-y-32">
                        {processSteps.map((step, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={step.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 px-6`}>
                                    <div className="lg:w-1/2 space-y-6">
                                        <div className="text-5xl md:text-6xl font-light text-[#18448F]/20 mb-2">{step.id}.</div>
                                        <h3 className="text-3xl lg:text-5xl font-light text-slate-900 leading-tight">
                                            {step.title.split(' ')[0]} <span className="font-bold text-[#18448F]">{step.title.split(' ').slice(1).join(' ')}</span>
                                        </h3>
                                        <p className="text-[#18448F] font-light italic text-xl mb-4">{step.subtitle}</p>
                                        <p className="text-slate-500 text-lg leading-relaxed font-light">
                                            {step.desc}
                                        </p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                                            {step.details.map((detail, dIdx) => (
                                                <li key={dIdx} className="flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-[#8CC63F] shrink-0" />
                                                    <span className="text-slate-700 font-medium">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="lg:w-1/2 w-full aspect-square md:aspect-video lg:aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl group">
                                        {step.gallery ? (
                                            <ImageGallery images={step.gallery} />
                                        ) : (
                                            <>
                                                <div className="absolute inset-0 bg-[#18448F]/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700" />
                                                <img src={step.image} alt={step.title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* 3. LES ENGAGEMENTS (Style Dark Mode immersif) */}
                <section className="relative min-h-screen py-32 flex items-center bg-slate-900 overflow-hidden" id="nos-engagements">
                    <div className="absolute inset-0 z-0">
                        {/* Motif abstrait / Halos */}
                        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#8CC63F]/40 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite]" />
                        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-[#18448F]/30 rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite_reverse]" />
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
                    </div>

                    <div className="relative z-10 container mx-auto px-6">
                        <div className="text-center mb-24">
                            <span className="inline-block py-1 px-4 bg-[#18448F] text-white rounded-full font-bold tracking-[0.2em] uppercase text-xs mb-10">L'Exigence Bricareau</span>
                            <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-tight mb-12">
                                Redéfinir le <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] to-blue-500 italic font-light">standard de qualité.</span>
                            </h2>
                            <p className="text-slate-300 text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
                                Des promesses claires qui redéfinissent les standards de l'industrie du traitement de l'eau au Québec.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 max-w-7xl mx-auto text-center lg:text-left">
                            {/* Engagement 1 */}
                            <div className="space-y-6">
                                <div className="mx-auto lg:mx-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                                    <Clock className="w-8 h-8 text-[#8CC63F]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Réactivité absolue</h3>
                                <p className="text-slate-400 leading-relaxed font-light">Intervention sous 48h. Votre confort ne peut attendre, nos équipes sont mobilisées pour agir avec célérité.</p>
                            </div>

                            {/* Engagement 2 */}
                            <div className="space-y-6">
                                <div className="mx-auto lg:mx-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                                    <Award className="w-8 h-8 text-[#8CC63F]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Garantie intégrale</h3>
                                <p className="text-slate-400 leading-relaxed font-light">Une couverture complète sur nos systèmes. Zéro compromis sur votre tranquillité d'esprit à long terme.</p>
                            </div>

                            {/* Engagement 3 */}
                            <div className="space-y-6">
                                <div className="mx-auto lg:mx-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                                    <Crown className="w-8 h-8 text-[#8CC63F]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Composants premium</h3>
                                <p className="text-slate-400 leading-relaxed font-light">Nous n'utilisons que des matériaux nobles et des valves de grade industriel pour une durabilité inégalée.</p>
                            </div>

                            {/* Engagement 4 */}
                            <div className="space-y-6">
                                <div className="mx-auto lg:mx-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                                    <Leaf className="w-8 h-8 text-[#8CC63F]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Éco-responsabilité</h3>
                                <p className="text-slate-400 leading-relaxed font-light">Nos solutions sont minutieusement calibrées pour minimiser le gaspillage d'eau et d'énergie au quotidien.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. LE CTA (Style Durabilité) */}
                <section className="relative overflow-hidden min-h-[80vh] md:min-h-screen lg:min-h-[80vh] flex items-center py-32">
                    {/* Background Image Full Width */}
                    <div className="absolute inset-0 z-0">
                        <img src={ctaImg} className="w-full h-full object-cover object-center"  alt="Contactez Bricareau" title="Traitement d'eau Québec par Bricareau" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white/95" />
                    </div>
                    
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 relative z-10">
                        <div className="md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-7 space-y-8 lg:space-y-10 text-center lg:text-left md:px-0 lg:pl-12">
                            <h2 className="text-[50px] leading-[55px] font-sans font-bold text-[#18448F] mb-6 tracking-tight mx-auto lg:mx-0">
                                Passez à l'ultime <br /><span className="text-[#8CC63F] font-sans font-bold drop-shadow-sm">standard de pureté.</span>
                            </h2>
                            <p className="text-slate-600 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Sollicitez nos experts techniques pour un diagnostic approfondi et personnalisé de votre qualité d'eau. L'expertise absolue au service de votre sérénité.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <ProMaxButton variant="primary" className="px-12 h-16 shadow-xl text-white font-bold" onClick={() => navigate("/tests-eau")}>
                                    PLANIFIEZ UNE ANALYSE d'eau
                                </ProMaxButton>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default OurProcess;
