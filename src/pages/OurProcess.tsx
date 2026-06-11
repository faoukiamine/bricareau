import React, { useEffect } from "react";
import { 
    Phone,
    ShieldCheck, 
    Cpu,
    CheckCircle2,
    Zap,
    FlaskConical,
    Settings,
    Star,
    ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { cn } from "@/lib/utils";

// Assets
import heroImg from "@/assets/bricareau_process_hero_engineering_1778902027858.png";
import designImg from "@/assets/water_system_blueprint_render_1778902045750.png";
import waterTestImg from "@/assets/Water-test_15395190.png";
import installationImg from "@/assets/Water-Softener-installation.jpg";
import serviceImg from "@/assets/RO service.png";

const processSteps = [
    {
        id: "01",
        title: "L'Analyse Moléculaire",
        subtitle: "Le fondement de toute perfection.",
        desc: "Nous plongeons au cœur de votre eau. Nos diagnostics de précision révèlent l'invisible : contaminants, profil minéral, et équilibre chimique. C'est sur ces données irréfutables que nous bâtissons votre solution.",
        icon: FlaskConical,
        image: waterTestImg,
        details: ["Évaluation de dureté", "Spectrométrie des métaux", "Profil microbiologique", "Analyse TDS"]
    },
    {
        id: "02",
        title: "L'Ingénierie Architecturale",
        subtitle: "La science au service du sur-mesure.",
        desc: "Chaque goutte compte. Nos ingénieurs conçoivent une architecture de filtration parfaitement calibrée pour votre profil hydrique unique, sélectionnant des technologies de pointe pour une durabilité maximale.",
        icon: Cpu,
        image: designImg,
        details: ["Dimensionnement hydraulique", "Sélection des médias", "Intégration technologique", "Rendement optimisé"]
    },
    {
        id: "03",
        title: "Le Déploiement Maîtrisé",
        subtitle: "L'exécution avec une précision horlogère.",
        desc: "Nos techniciens certifiés orchestrent l'installation avec une rigueur absolue. De l'intégration mécanique à la calibration électronique, chaque composant est testé pour garantir une performance sans faille.",
        icon: Settings,
        image: installationImg,
        details: ["Calibration systémique", "Tests de pression", "Configuration intelligente", "Transfert de compétences"]
    },
    {
        id: "04",
        title: "Le Suivi Perpétuel",
        subtitle: "Une tranquillité d'esprit inébranlable.",
        desc: "L'excellence s'entretient. Notre engagement s'étend bien au-delà de l'installation, avec un programme de maintenance proactive assurant que votre système opère à son apogée technologique, jour après jour.",
        icon: ShieldCheck,
        image: serviceImg,
        details: ["Entretien préventif", "Analyses de contrôle", "Réapprovisionnement", "Assistance VIP"]
    }
];

const OurProcess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Notre Méthodologie | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#18448F] selection:text-white overflow-x-hidden">
            <Header />
            
            <main>
                {/* 1. HERO SECTION ÉDITORIALE (Typographie massive, fond pur) */}
                <section className="pt-40 pb-20 bg-slate-50 relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-slate-200 bg-white mb-16 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#18448F]"></span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">La Méthode Bricareau</span>
                        </div>
                        
                        <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black text-slate-900 leading-[0.85] tracking-tighter mb-12 max-w-6xl">
                            L'Art de la Pureté.<br/>
                            <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-[#18448F] to-blue-400">L'Ingénierie de l'Excellence.</span>
                        </h1>
                        
                        <p className="text-xl md:text-3xl text-slate-500 font-light max-w-4xl leading-relaxed mb-20">
                            Découvrez un processus rigoureux en quatre étapes. De l'analyse moléculaire au suivi perpétuel, nous ne laissons aucune place au hasard.
                        </p>
                    </div>

                    {/* Image panoramique d'introduction (style magazine) */}
                    <div className="container mx-auto px-6">
                        <div className="w-full h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden shadow-2xl relative">
                            <img src={heroImg} alt="Engineering" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        </div>
                    </div>
                </section>

                {/* 2. LE CŒUR DU PROCESSUS (Z-Pattern Alterné) */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 space-y-32 md:space-y-48">
                        {processSteps.map((step, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={step.id} className={cn(
                                    "flex flex-col gap-12 md:gap-24 items-center",
                                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                                )}>
                                    
                                    {/* Bloc Image */}
                                    <div className="w-full md:w-1/2 relative group">
                                        <div className="absolute inset-0 bg-[#18448F]/5 -translate-x-4 translate-y-4 rounded-[2rem] transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
                                        <div className={cn(
                                            "relative overflow-hidden rounded-[2rem] shadow-xl",
                                            isEven ? "aspect-[4/5]" : "aspect-[16/10]"
                                        )}>
                                            <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                        </div>
                                    </div>

                                    {/* Bloc Texte */}
                                    <div className="w-full md:w-1/2 relative">
                                        {/* Grand chiffre en filigrane */}
                                        <div className={cn(
                                            "absolute -top-32 md:-top-40 text-[200px] md:text-[280px] font-black text-slate-50/80 -z-10 select-none leading-none tracking-tighter",
                                            isEven ? "-left-10" : "-right-10"
                                        )}>
                                            {step.id}
                                        </div>

                                        <div className="space-y-8 relative z-10">
                                            <div className="flex items-center gap-4 text-[#8CC63F] font-bold tracking-[0.2em] uppercase text-sm">
                                                <step.icon className="w-5 h-5" />
                                                Étape {step.id}
                                            </div>
                                            
                                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                                                {step.title}
                                            </h2>
                                            
                                            <h3 className="text-2xl md:text-3xl font-light italic text-[#18448F]">
                                                {step.subtitle}
                                            </h3>

                                            <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                                                {step.desc}
                                            </p>

                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                                                {step.details.map((detail, dIdx) => (
                                                    <li key={dIdx} className="flex items-center gap-3">
                                                        <CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0" />
                                                        <span className="text-slate-700 font-medium">{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* 3. LES ENGAGEMENTS (Colonnes Minimalistes) */}
                <section className="py-40 bg-slate-50 border-t border-slate-200">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mb-24">
                            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter mb-8">
                                L'Exigence <span className="italic font-light text-[#18448F]">Bricareau.</span>
                            </h2>
                            <p className="text-2xl text-slate-500 font-light">Des promesses claires qui redéfinissent les standards de l'industrie du traitement de l'eau au Québec.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                            
                            {/* Engagement 1 */}
                            <div className="lg:border-l border-slate-200 lg:pl-8 space-y-6">
                                <Zap className="w-10 h-10 text-[#18448F]" strokeWidth={1.5} />
                                <h3 className="text-2xl font-bold text-slate-900">Réactivité Absolue</h3>
                                <p className="text-slate-500 leading-relaxed font-light">Intervention sous 48h. Votre confort ne peut attendre, nos équipes sont mobilisées pour agir avec célérité.</p>
                            </div>

                            {/* Engagement 2 */}
                            <div className="lg:border-l border-slate-200 lg:pl-8 space-y-6">
                                <ShieldCheck className="w-10 h-10 text-[#18448F]" strokeWidth={1.5} />
                                <h3 className="text-2xl font-bold text-slate-900">Garantie Intégrale</h3>
                                <p className="text-slate-500 leading-relaxed font-light">Une couverture complète sur nos systèmes. Zéro compromis sur votre tranquillité d'esprit à long terme.</p>
                            </div>

                            {/* Engagement 3 */}
                            <div className="lg:border-l border-slate-200 lg:pl-8 space-y-6">
                                <Star className="w-10 h-10 text-[#18448F]" strokeWidth={1.5} />
                                <h3 className="text-2xl font-bold text-slate-900">Composants Premium</h3>
                                <p className="text-slate-500 leading-relaxed font-light">Nous n'utilisons que des matériaux nobles et des valves de grade industriel pour une durabilité inégalée.</p>
                            </div>

                            {/* Engagement 4 */}
                            <div className="lg:border-l border-slate-200 lg:pl-8 space-y-6">
                                <FlaskConical className="w-10 h-10 text-[#18448F]" strokeWidth={1.5} />
                                <h3 className="text-2xl font-bold text-slate-900">Éco-Responsabilité</h3>
                                <p className="text-slate-500 leading-relaxed font-light">Nos solutions sont minutieusement calibrées pour minimiser le gaspillage d'eau et d'énergie au quotidien.</p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 4. LE "PRESTIGE" CTA */}
                <section className="py-40 bg-white">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-[0.9]">
                            Passez à l'ultime <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18448F] to-blue-400 italic font-light lowercase">standard de pureté.</span>
                        </h2>
                        
                        <p className="text-slate-500 text-xl md:text-2xl font-light mb-16 leading-relaxed">
                            Contactez notre division ingénierie pour une analyse privée et confidentielle de votre eau. L'excellence n'attend pas.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <ProMaxButton variant="primary" className="px-12 h-16 shadow-xl shadow-blue-900/10 text-white font-bold" onClick={() => navigate("/consultation")}>
                                PLANIFIER UNE ANALYSE
                            </ProMaxButton>
                            
                            <a href="tel:18552649328" className="group flex items-center gap-4 text-slate-900 hover:text-[#18448F] transition-colors">
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#18448F]/30 group-hover:bg-slate-50 transition-all">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="font-bold tracking-widest text-lg">1-855-264-9328</span>
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default OurProcess;
