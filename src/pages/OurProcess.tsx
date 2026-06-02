import React, { useEffect } from "react";
import { 
    Search, 
    Layers, 
    Wrench, 
    ShieldCheck, 
    ArrowRight,
    Phone,
    Activity,
    ClipboardCheck,
    Cpu,
    CheckCircle2,
    Clock,
    Zap,
    FlaskConical,
    Settings,
    Timer,
    Truck
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { cn } from "@/lib/utils";

// Assets
import heroImg from "@/assets/bricareau_process_hero_engineering_1778902027858.png";
import designImg from "@/assets/water_system_blueprint_render_1778902045750.png";
import waterTestImg from "@/assets/Water-test_15395190.png";
import installationImg from "@/assets/Water-Softener-installation.jpg";
import serviceImg from "@/assets/RO service.png";

const OurProcess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Notre processus | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    const processSteps = [
        {
            number: "01",
            title: "Analyse Moléculaire",
            subtitle: "Diagnostic de précision",
            desc: "Tout commence par une analyse rigoureuse. Nous identifions les contaminants invisibles, la dureté minérale et les paramètres chimiques pour établir le profil exact de votre eau.",
            icon: FlaskConical,
            image: waterTestImg,
            details: ["Test de dureté (GPG)", "Détection des métaux lourds", "Analyse microbiologique", "Mesure des TDS"]
        },
        {
            number: "02",
            title: "Ingénierie Sur Mesure",
            subtitle: "Conception applicative",
            desc: "Sur la base de votre profil hydrique, nos experts conçoivent une solution technologique optimisée. Chaque composant est sélectionné pour son efficacité et sa durabilité.",
            icon: Cpu,
            image: designImg,
            details: ["Dimensionnement hydraulique", "Choix des médias filtrants", "Schémas d'intégration", "Optimisation ROI"]
        },
        {
            number: "03",
            title: "Déploiement Expert",
            subtitle: "Installation certifiée",
            desc: "Nos techniciens certifiés déploient votre système avec une précision millimétrée. Nous garantissons une intégration propre, sécurisée et conforme aux normes.",
            icon: Settings,
            image: installationImg,
            details: ["Calibrage des vannes", "Tests d'étanchéité", "Mise en service PLC", "Formation utilisateur"]
        },
        {
            number: "04",
            title: "Accompagnement Pro",
            subtitle: "Maintenance & Service",
            desc: "Notre engagement est permanent. Nous assurons le suivi, l'entretien préventif et la fourniture de consommables pour garantir une eau pure, année après année.",
            icon: ShieldCheck,
            image: serviceImg,
            details: ["Entretien annuel", "Analyse de suivi", "Livraison de sel", "Support prioritaire"]
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />
            
            <main>
                {/* 1. HERO SECTION */}
                <Hero 
                    image={heroImg}
                    highlightedTitle="L'Ingénierie du Succès,"
                    mainTitle="votre projet étape par étape."
                    subtitle="De l'analyse moléculaire initiale au déploiement expert, nous transformons votre vision en une réalité hydrique parfaite avec une précision chirurgicale."
                    showPhone={true}
                    showBreadcrumbs={false}
                />

                <section className="relative py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-12">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
                                <Settings className="w-4 h-4 text-blue-600" />
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Ingénierie & Méthodologie Bricareau</span>
                            </div>
                            
                            <h1 className="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic text-white mb-6 tracking-tight">
    <span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg">La rigueur, </span>
                                <span className="font-bold text-[#18448F]">au service de la pureté.</span>
</h1>
                            
                            <p className="text-lg md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
                                Découvrez comment nous fusionnons science, technologie et expertise pour transformer la qualité de votre eau au quotidien.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 pt-8">
                                <ProMaxButton variant="primary" className="px-12 h-16 text-[11px]" onClick={() => navigate("/consultation")}>
                                    ANALYSE TECHNIQUE
                                </ProMaxButton>
                                <a href="tel:18552649328" className="flex items-center gap-4 group">
                                    <div className="w-14 h-14 rounded-full bg-[#18448F]/5 flex items-center justify-center border border-[#18448F]/10 group-hover:border-blue-500/50 group-hover:bg-white transition-all">
                                        <Phone className="w-5 h-5 text-[#18448F]" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Division Conseil</div>
                                        <div className="text-xl font-bold tracking-tight text-[#18448F]">1-855-264-9328</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. THE DNA TIMELINE (Vertical High-Fidelity) */}
                <section className="py-40 bg-slate-50 relative">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-32 space-y-4">
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-none">Le Parcours Bricareau</h2>
                            <p className="text-slate-500 text-xl font-light">Quatre étapes clés pour une tranquillité d'esprit totale.</p>
                        </div>

                        <div className="relative max-w-6xl mx-auto">
                            {/* Vertical Line */}
                            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 hidden lg:block" />

                            <div className="space-y-32">
                                {processSteps.map((step, idx) => (
                                    <div key={idx} className={cn(
                                        "flex flex-col lg:flex-row items-center gap-20 relative",
                                        idx % 2 !== 0 && "lg:flex-row-reverse"
                                    )}>
                                        {/* Step Content */}
                                        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                                            <div className={cn(
                                                "flex items-center gap-6 justify-center lg:justify-start",
                                                idx % 2 !== 0 && "lg:justify-end lg:flex-row-reverse"
                                            )}>
                                                <div className="w-20 h-20 rounded-3xl bg-white shadow-xl shadow-blue-100 flex items-center justify-center border border-slate-100 group hover:bg-blue-600 transition-all duration-500">
                                                    <step.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                                                </div>
                                                <div className={cn(
                                                    "text-left",
                                                    idx % 2 !== 0 && "lg:text-right"
                                                )}>
                                                    <div className="text-blue-600 font-black text-xs tracking-widest uppercase mb-1">{step.subtitle}</div>
                                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{step.title}</h3>
                                                </div>
                                            </div>
                                            
                                            <p className="text-slate-500 text-lg font-light leading-relaxed">
                                                {step.desc}
                                            </p>

                                            <div className={cn(
                                                "grid grid-cols-2 gap-4",
                                                idx % 2 !== 0 && "lg:text-right"
                                            )}>
                                                {step.details.map((detail, dIdx) => (
                                                    <div key={dIdx} className={cn(
                                                        "flex items-center gap-2 text-sm font-bold text-slate-700",
                                                        idx % 2 !== 0 && "lg:flex-row-reverse"
                                                    )}>
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                                        <span>{detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Step Visual */}
                                        <div className="lg:w-1/2 relative group">
                                            <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white h-[400px]">
                                                <img 
                                                    src={step.image} 
                                                    alt={step.title} 
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                                />
                                                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-6 py-2 rounded-full text-slate-900 font-black text-xs tracking-widest border border-slate-100 shadow-sm">
                                                    ÉTAPE {step.number}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dot on Center Line */}
                                        <div className="absolute left-[50%] -translate-x-[50%] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-lg hidden lg:block z-10" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. BENTO GRID: COMMITMENT TO EXCELLENCE */}
                <section className="py-40 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
                            <div className="lg:w-1/2 space-y-8">
                                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-950 uppercase leading-[0.8]">
                                    Plus qu'un service, <br />
                                    <span className="text-blue-600 italic font-light lowercase">une promesse.</span>
                                </h2>
                                <p className="text-slate-500 text-2xl font-light leading-relaxed">
                                    Nous avons bâti notre réputation sur la rigueur technique et l'intégrité. Chaque installation est une pièce d'ingénierie destinée à durer.
                                </p>
                            </div>
                            <div className="lg:w-1/2 grid grid-cols-2 gap-8 w-full">
                                <div className="bg-slate-50 p-10 rounded-[3rem] space-y-6">
                                    <Zap className="w-10 h-10 text-blue-600" />
                                    <h4 className="text-xl font-bold tracking-tight">Réactivité 48h</h4>
                                    <p className="text-slate-500 text-sm font-light">Intervention rapide partout au Québec pour les urgences hydrauliques.</p>
                                </div>
                                <div className="bg-slate-900 p-10 rounded-[3rem] space-y-6 text-white">
                                    <ShieldCheck className="w-10 h-10 text-blue-400" />
                                    <h4 className="text-xl font-bold tracking-tight">Garantie Totale</h4>
                                    <p className="text-white/60 text-sm font-light">Une tranquillité d'esprit certifiée sur les pièces et la main d'œuvre.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. TESTIMONIALS */}
                <div className="bg-slate-50 py-32 border-y border-slate-100">
                    <TestimonialsSection 
                        filterProduct="Général" 
                        title={
                            <>
                                <span className="font-light block text-slate-900">Ce que nos clients disent de</span>
                                <span className="font-bold text-blue-600 block">notre service</span>
                            </>
                        }
                    />
                </div>

                {/* 5. CALL TO ACTION: FINAL */}
                <section className="py-40 bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50 -z-10 skew-x-[-15deg] translate-x-[20%]" />
                    
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-24 items-center">
                            <div className="lg:w-1/2 space-y-12">
                                <div className="space-y-6 text-center lg:text-left">
                                    <h2 className="text-5xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-none uppercase">
                                        Prêt pour <br />
                                        <span className="text-blue-600 italic font-light lowercase">le changement ?</span>
                                    </h2>
                                    <p className="text-slate-500 text-2xl font-light leading-relaxed">
                                        L'eau de qualité supérieure est à portée de main. Commençons par une analyse gratuite aujourd'hui.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                                    <ProMaxButton variant="primary" className="px-12 h-20 text-[11px]" onClick={() => navigate("/contact")}>
                                        PLANIFIER UNE ANALYSE GRATUITE
                                    </ProMaxButton>
                                    <a href="tel:18552649328" className="inline-flex items-center gap-4 px-10 h-20 rounded-full border border-slate-200 font-bold text-slate-900 hover:bg-slate-50 transition-all">
                                        <Phone className="w-5 h-5 text-blue-600" />
                                        (855) 264-9328
                                    </a>
                                </div>
                            </div>

                            <div className="lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-blue-600/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                                    <img 
                                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop" 
                                        alt="Water Treatment Professional" 
                                        className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-[3s]" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                    <div className="absolute bottom-12 left-12 right-12 text-white">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                                                <Truck className="w-6 h-6" />
                                            </div>
                                            <span className="font-black text-xs tracking-widest uppercase">Service Mobile Québec</span>
                                        </div>
                                        <p className="text-xl font-light">Une flotte de véhicules équipée pour répondre à tous vos besoins, où que vous soyez.</p>
                                    </div>
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

export default OurProcess;
