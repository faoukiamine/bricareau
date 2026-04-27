import React, { useEffect } from "react";
import { 
    Phone, 
    Award, 
    ChevronRight, 
    Factory, 
    Droplets, 
    FlaskConical, 
    ShieldCheck, 
    Zap, 
    Activity, 
    HardHat, 
    Building2, 
    BarChart3, 
    Microscope, 
    Workflow,
    ArrowRight,
    Star,
    HeartPulse,
    Settings,
    History
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, NavLink } from "react-router-dom";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExpertAvatars from "@/components/ExpertAvatars";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import { cn } from "@/lib/utils";

// New Assets
import industrialHeroImg from "@/assets/industrial_hero_pro_max.png";
import labTestImg from "@/assets/industrial_lab_testing.png";
import hospitalityImg from "@/assets/industrial_hospitality.png";
import consultationImg from "@/assets/industrial_consultation.png";
import industrialCartridgeFilterImg from "@/assets/SFH_FAMILY.png";
import DosinggroupsystemImg from "@/assets/15-gallon-white-tank-sys-downloads.jpg";
import industrialROSystemImg from "@/assets/1494014028920430592_8e1000580b747b8dac3a78e0855f0394-removebg-preview.png";
import DIServiceImg from "@/assets/portable_di_services.jpg";
import industrialUVSystemImg from "@/assets/System-bloc-text_0022_Coffrets-UV-IAM-TS-640x640.png";
import multimediafiltrationsystemImg from "@/assets/Multimedia filters.png";
import EDISystemImg from "@/assets/EDI-Skid.png";
import CIPSystemImg from "@/assets/CIP-RO-Membrane-Cleaning.png";

// Existing Products (Placeholders or reuse if relevant)
import alternatingSoftenerImg from "@/assets/Alternating Water Softener.png";
import roMembranesImg from "@/assets/Commercial & industrial RO-Membranes.png";
import ws1ValveImg from "@/assets/WS1_CI_Valve_Left_side_view.webp";

const CommercialIndustriel = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Traitement d'Eau Industriel et Commercial au Québec | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Solutions de traitement d'eau haute performance pour commerces et industries au Québec. Adoucisseurs, osmose inverse et ingénierie sur mesure. Fiabilité 24/7.");
        }
    }, []);

    const mainSolutions = [
        {
            title: "Systèmes de filtration multimédia",
            desc: "Élimination haute capacité des sédiments et de la turbidité. Une architecture de filtration robuste pour sécuriser l'intégrité de vos réseaux et protéger vos infrastructures.",
            icon: BarChart3,
            image: multimediafiltrationsystemImg
        },
        {
            title: "Systèmes de filtration de précision sur cartouches",
            desc: "Protection micronique avancée pour une limpidité totale. La barrière ultime contre les particules fines, garantissant une eau sans impuretés pour vos procédés sensibles.",
            icon: Settings,
            image: industrialCartridgeFilterImg
        },
        {
            title: "Systèmes d'adoucissement industriel",
            desc: "Neutralisation radicale du calcaire pour une efficacité thermique optimale. Maximisez le rendement de vos équipements et éliminez les arrêts techniques liés à l'entartrage.",
            icon: Droplets,
            image: industrialROSystemImg
        },
        {
            title: "Systèmes de dosage chimique & contrôle",
            desc: "Régulation automatisée et précise des paramètres physico-chimiques. Une gestion intelligente de l'équilibre de l'eau pour prévenir la corrosion et assurer la conformité.",
            icon: FlaskConical,
            image: DosinggroupsystemImg
        },
        {
            title: "Systèmes d'osmose inverse",
            desc: "Ingénierie membranaire de pointe pour une pureté h2o inégalée. Production d'eau ultra-pure à haut flux pour les exigences critiques des laboratoires et de l'industrie.",
            icon: Factory,
            image: industrialROSystemImg
        },
        {
            title: "Unités CIP de Nettoyage Membranaire",
            desc: "Restauration optimisée des performances de vos membranes. Des protocoles de nettoyage spécialisés pour prolonger la longévité de vos systèmes et maintenir un débit nominal.",
            icon: Workflow,
            image: CIPSystemImg
        },
        {
            title: "Systèmes de Déionisation (DI)",
            desc: "Production d'eau déminéralisée de haute résistivité par échange d'ions. Une solution fiable pour les applications techniques exigeant une absence totale de minéraux.",
            icon: Activity,
            image: DIServiceImg
        },
        {
            title: "Systèmes d'Électrodéionisation Continue (CEDI)",
            desc: "Technologie hybride sans produits chimiques pour une eau ultra-pure constante. La solution écologique par excellence pour une déminéralisation ininterrompue.",
            icon: Zap,
            image: EDISystemImg
        },
        {
            title: "Systèmes de Stérilisation de l'eau par UV",
            desc: "Élimination microbiologique par rayonnement ultraviolet de haute intensité. Sécurisez vos réseaux contre 99,99% des bactéries et virus sans altérer la chimie de l'eau.",
            icon: ShieldCheck,
            image: industrialUVSystemImg
        }
    ];

    const timelineSteps = [
        {
            step: "ALPHA",
            title: "Audit & Diagnostic",
            desc: "Immersion totale dans votre environnement hydraulique. Caractérisation moléculaire de l'eau et audit de conformité ISO.",
            metric: "99.9% Précision",
            icon: Microscope,
            color: "from-blue-600 to-indigo-600"
        },
        {
            step: "SIGMA",
            title: "Modélisation",
            desc: "Conception CAO de votre architecture sur mesure. Optimisation thermodynamique et hydraulique.",
            metric: "-30% Énergie",
            icon: Settings,
            color: "from-cyan-500 to-blue-500"
        },
        {
            step: "OMEGA",
            title: "Déploiement",
            desc: "Installation Plug-and-Play sans interruption. Calibration sensorielle et mise en service certifiée.",
            metric: "0 Downtime",
            icon: Workflow,
            color: "from-indigo-600 to-purple-600"
        },
        {
            step: "CORE",
            title: "Intelligence",
            desc: "Gouvernance digitale de vos ressources. Monitoring prédictif et support expert prioritaire.",
            metric: "Support 24/7",
            icon: History,
            color: "from-blue-700 to-blue-900"
        }
    ];

    const sectorSolutions = [
        {
            title: "Hôtellerie & Restaurants",
            subtitle: "Expérience Client & Protection",
            desc: "Élevez l'expérience de vos clients avec une eau de qualité signature. Protection intégrale de vos infrastructures de blanchisserie et optimisation de vos équipements culinaires haute performance.",
            image: hospitalityImg,
            icon: Building2
        },
        {
            title: "Santé & Laboratoires",
            subtitle: "Normes & Pureté Critique",
            desc: "Conformité absolue aux protocoles sanitaires et normes de pureté critique. Des solutions d'eau ultra-pure pour sécuriser vos analyses médicales et vos environnements de recherche stériles.",
            image: "https://images.unsplash.com/photo-1579154235602-3c2c2aa92e21?auto=format&fit=crop&q=80&w=800",
            icon: HeartPulse
        },
        {
            title: "Industrie & Manufacturier",
            subtitle: "Performance Opérationnelle",
            desc: "Performance opérationnelle et continuité de service garanties. Calibrage précis de votre eau de process pour maximiser la longévité de vos machines et l'efficacité de vos cycles de production.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
            icon: Factory
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* 1. Hero Section - Redesigned with Inspiration */}
                <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={industrialHeroImg}
                            alt="Traitement d'eau industriel Bricareau"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4000ms] brightness-[0.9]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-8">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">
                                <div className="w-2 h-2 rounded-full bg-blue-200 animate-pulse" />
                                SOLUTIONS INDUSTRIELLES
                            </div>
                            
                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                                <span className="block font-light italic text-blue-400">Des solutions de</span>
                                <span className="block">traitement de l'eau</span>
                                <span className="block">pour chaque secteur.</span>
                            </h1>
                            
                            <p className="text-xl text-slate-100 max-w-2xl font-light leading-relaxed">
                                Bricareau déploie une expertise d'ingénierie avancée pour les leaders de l’industrie au Québec, garantissant performance et durabilité.
                            </p>
                            
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 rounded-full font-bold" onClick={() => navigate("/consultation")}>
                                    Parler à un expert
                                </Button>
                                <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-blue-900 px-8 h-14 rounded-full font-bold">
                                    Voir nos réalisations
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-white py-4 shadow-sm border-b border-slate-50 relative z-20">
                    <div className="container mx-auto px-6">
                        <GlobalBreadcrumbs />
                    </div>
                </div>

                {/* 2. Main Solutions Grid (6 items) */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                            <h2 className="heading-pro-max text-center">
                                <span className="italic font-light text-blue-600 block">Expertise Technique</span>
                                <span className="font-bold text-[#1e3a8a] block">Solutions de traitement de l'eau commerciales et industrielles</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {mainSolutions.map((sol, i) => (
                                <div key={i} className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/40 hover:shadow-2xl transition-all duration-500">
                                    <div className="aspect-[16/10] overflow-hidden relative">
                                        <img src={sol.image} alt={sol.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                                        <div className="absolute top-6 left-6">
                                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-blue-900/20">
                                                <sol.icon className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-10 space-y-4">
                                        <h3 className="text-2xl font-bold text-[#1e3a8a] line-clamp-1">{sol.title}</h3>
                                        <p className="text-slate-500 font-light leading-relaxed line-clamp-2 italic">
                                            {sol.desc}
                                        </p>
                                        <div className="pt-4 flex justify-end">
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Operational Timeline Steps (Creative Alternative: Industrial DNA Bento) */}
                <section className="py-32 bg-[#05070A] relative overflow-hidden">
                    {/* Futuristic Grid Background */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent" />
                    </div>
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
                            <div className="max-w-2xl space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                                    Système Opérationnel 2.0
                                </div>
                                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                                    L'Architecture de <br /><span className="text-blue-500 italic font-light">l'Excellence.</span>
                                </h2>
                            </div>
                            <p className="text-slate-400 font-light text-lg max-w-sm lg:text-right">
                                Du diagnostic initial au monitoring intelligent, nous redéfinissons les standards du traitement industriel.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[300px]">
                            {/* ALPHA - Diagnostic (Tall) */}
                            <div className="lg:col-span-4 lg:row-span-2 group relative rounded-[3rem] bg-white/[0.03] border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-700">
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="p-10 h-full flex flex-col justify-between relative z-10">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                                                <Microscope className="w-6 h-6" />
                                            </div>
                                            <span className="text-xs font-black text-blue-500 uppercase tracking-widest">{timelineSteps[0].step}</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white">{timelineSteps[0].title}</h3>
                                        <p className="text-slate-400 font-light leading-relaxed">
                                            {timelineSteps[0].desc}
                                        </p>
                                    </div>
                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="text-2xl font-bold text-white">{timelineSteps[0].metric}</div>
                                        <ArrowRight className="w-6 h-6 text-blue-500 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>

                            {/* SIGMA - Design (Wide) */}
                            <div className="lg:col-span-8 lg:row-span-1 group relative rounded-[3rem] bg-white/[0.03] border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-700">
                                <div className="p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full relative z-10">
                                    <div className="space-y-4 max-w-md">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white">
                                                <Settings className="w-6 h-6" />
                                            </div>
                                            <span className="text-xs font-black text-cyan-500 uppercase tracking-widest">{timelineSteps[1].step}</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white">{timelineSteps[1].title}</h3>
                                        <p className="text-slate-400 font-light line-clamp-2">
                                            {timelineSteps[1].desc}
                                        </p>
                                    </div>
                                    <div className="bg-white/[0.05] p-6 rounded-[2rem] border border-white/10 text-center">
                                        <div className="text-3xl font-black text-cyan-400">{timelineSteps[1].metric}</div>
                                        <div className="text-[10px] text-slate-500 uppercase font-black mt-1">Impact Mesuré</div>
                                    </div>
                                </div>
                            </div>

                            {/* OMEGA - Deployment */}
                            <div className="lg:col-span-4 lg:row-span-1 group relative rounded-[3rem] bg-white/[0.03] border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-all duration-700">
                                <div className="p-10 flex flex-col justify-between h-full relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                                            <Workflow className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">{timelineSteps[2].title}</h3>
                                    </div>
                                    <div className="text-xl font-bold text-indigo-400">{timelineSteps[2].metric}</div>
                                </div>
                            </div>

                            {/* CORE - Intelligence (Wide Gradient Accent) */}
                            <div className="lg:col-span-4 lg:row-span-1 group relative rounded-[3rem] bg-blue-600 border border-blue-500 overflow-hidden hover:bg-blue-700 transition-all duration-700">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                                <div className="p-10 flex flex-col justify-between h-full relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                            <History className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white tracking-tight">{timelineSteps[3].title}</h3>
                                    </div>
                                    <div className="text-2xl font-black text-white">{timelineSteps[3].metric}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Sectoral Excellence (Innovative Solutions) */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
                            <h2 className="heading-pro-max text-center">
                                <span className="italic font-light text-blue-600 block">Verticales d’Excellence Métier</span>
                                <span className="font-bold text-[#1e3a8a] block">Là où la pureté de l’eau dicte la performance de vos actifs.</span>
                            </h2>
                            <p className="body-pro-max text-center opacity-80">
                                Nous combinons ingénierie de précision et conformité réglementaire pour répondre aux défis spécifiques de votre industrie.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                            {sectorSolutions.map((sector, i) => (
                                <div key={i} className="group relative bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:-translate-y-2 transition-all duration-700">
                                    <div className="h-[350px] overflow-hidden relative">
                                        <img src={sector.image} alt={sector.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="p-10 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                <sector.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">{sector.subtitle}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#1e3a8a]">{sector.title}</h3>
                                        <p className="text-slate-500 font-light leading-relaxed">
                                            {sector.desc}
                                        </p>
                                        <div className="pt-6 flex justify-end">
                                            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#1e3a8a] group-hover:text-white transition-all">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-16 text-center">
                            <span className="text-sm font-bold text-blue-600 cursor-pointer hover:underline">Voir tous les secteurs couverts &rarr;</span>
                        </div>
                    </div>
                </section>

                {/* 5. Start Today Section (Split Banner) */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="bg-[#f8fafc] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center border border-slate-100 shadow-2xl shadow-slate-200/50">
                            <div className="w-full lg:w-3/5 h-[400px] lg:h-[550px] overflow-hidden">
                                <img src={consultationImg} alt="Consultation Bricareau" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3000ms]" />
                            </div>
                            <div className="w-full lg:w-2/5 p-12 lg:p-20 space-y-8 text-center lg:text-left">
                                <h2 className="text-4xl font-bold text-[#1e3a8a] leading-tight">Commencez dès aujourd'hui.</h2>
                                <p className="text-slate-500 font-light text-lg">Nos experts sont prêts à auditer votre réseau et à concevoir une solution optimisée pour votre entreprise.</p>
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-14 font-black uppercase tracking-widest text-xs" onClick={() => navigate("/contact")}>
                                    Planifier un audit gratuit
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Testimonials Integration */}
                <section className="py-32 bg-slate-50 relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                            <h2 className="heading-pro-max text-center">
                                <span className="italic font-light text-blue-600 block">Retours d’Expérience</span>
                                <span className="font-bold text-[#1e3a8a] block tracking-tight">Leur succès opérationnel est notre meilleure signature.</span>
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {[
                                { name: "Robert Gagnon", ref: "Directeur Usine Manufacturière", text: "Depuis l'installation du système de traitement Bricareau, nos coûts de maintenance sur les chaudières ont chuté de 40%." },
                                { name: "Sophie Lemay", ref: "Gestionnaire Hôtel 5*", text: "Une qualité d'eau irréprochable qui fait la différence pour nos clients. Le support technique est d'une réactivité exemplaire." },
                                { name: "Marc-André Fortin", ref: "Responsable Labo", text: "La pureté de l'eau est critique pour nos analyses. Bricareau a su dimensionner un système RO parfait pour nos besoins." }
                            ].map((t, i) => (
                                <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/30 flex flex-col justify-between">
                                    <div className="space-y-6">
                                        <div className="flex gap-1 text-yellow-400">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                        </div>
                                        <p className="text-slate-600 font-light italic leading-relaxed">"{t.text}"</p>
                                    </div>
                                    <div className="pt-8 mt-8 border-t border-slate-50">
                                        <h4 className="font-bold text-[#1e3a8a]">{t.name}</h4>
                                        <p className="text-[10px] uppercase font-black tracking-widest text-blue-500 mt-1">{t.ref}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Water Analysis (Side-by-side) */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-10 order-2 lg:order-1">
                                <div className="w-20 h-2 bg-blue-600 rounded-full"></div>
                                <h2 className="heading-pro-max text-left leading-tight">
                                    <span className="italic font-light text-blue-600 block">Expertise de Laboratoire</span>
                                    <span className="font-bold text-[#1e3a8a] block">Décoder votre eau pour garantir l’intégrité de vos processus.</span>
                                </h2>
                                <p className="body-pro-max text-left text-slate-500">
                                    Avant toute proposition technique, nous effectuons une caractérisation complète de votre eau en laboratoire. C'est la garantie d'un système dimensionné pour la réalité de vos opérations.
                                </p>
                                <div className="pt-6">
                                    <Button size="lg" className="rounded-full px-12 h-16 bg-slate-950 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/40" onClick={() => navigate("/tests-eau")}>
                                        Explorer les services de test &rarr;
                                    </Button>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 rounded-[4rem] overflow-hidden shadow-2xl relative group">
                                <img src={labTestImg} alt="Laboratoire Bricareau" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-[4000ms]" />
                                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Values/Trust Grid */}
                <section className="py-24 bg-slate-50 border-y border-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 max-w-6xl mx-auto">
                            {[
                                { icon: ShieldCheck, title: "Qualité Certifiée", desc: "Produits conformes aux normes NSF/ANSI." },
                                { icon: Zap, title: "Flexibilité", desc: "Solutions modulaires adaptées à votre croissance." },
                                { icon: HardHat, title: "Conformité", desc: "Installations certifiées par les codes du bâtiment." },
                                { icon: Activity, title: "Performance", desc: "Optimisation de l'efficacité opérationnelle." },
                                { icon: Workflow, title: "Support Expert", desc: "Support technique disponible 24/7." },
                                { icon: Microscope, title: "Analyse", desc: "Tests rigoureux avant chaque installation." },
                                { icon: FlaskConical, title: "Précision", desc: "Solutions calibrées au micron près." },
                                { icon: Settings, title: "Maintenance", desc: "Plans de maintenance préventive personnalisés." }
                            ].map((v, i) => (
                                <div key={i} className="space-y-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        <v.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-[#1e3a8a] group-hover:text-blue-600 transition-colors uppercase tracking-widest text-xs">{v.title}</h4>
                                    <p className="text-slate-500 text-[11px] leading-relaxed italic">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. Partner Banner (Dark) */}
                <section className="py-32 bg-[#0A0F1C] relative overflow-hidden text-center">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <h2 className="text-5xl font-bold text-white tracking-tighter">Votre partenaire pour une meilleure eau.</h2>
                            
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                   { icon: Phone, title: "Support 24/7", sub: "Assistance Réactive" },
                                   { icon: Microscope, title: "Diagnostic Expert", sub: "Audit Précis" },
                                   { icon: Activity, title: "Maintenance", sub: "Suivi Proactif" },
                                   { icon: Star, title: "Excellence", sub: "Qualité Signature" }
                                ].map((p, i) => (
                                    <div key={i} className="space-y-4">
                                        <div className="mx-auto w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
                                            <p.icon className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{p.title}</h4>
                                            <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">{p.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. Engagement Certifié Section - Cinematic Full Width */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-6">
                        <div className="rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-100 group relative">
                            <img 
                                src={hospitalityImg} 
                                alt="Excellence opérationnelle Bricareau" 
                                className="w-full h-[500px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-[4000ms] brightness-[0.7] contrast-[1.1]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/40 to-transparent p-12 md:p-20 flex items-center">
                                <div className="max-w-2xl space-y-8">
                                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em]">
                                        <Award className="w-4 h-4" />
                                        L'EXCELLENCE BRICAREAU
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                        L'excellence Bricareau <br /><span className="italic font-light text-blue-300">s'installe chez vous.</span>
                                    </h2>
                                    <p className="text-xl text-blue-50/90 font-light leading-relaxed max-w-xl text-justify">
                                        Chaque installation industrielle est le fruit d'une ingénierie rigoureuse et d'un engagement total envers votre succès. Nous ne nous contentons pas de traiter l'eau ; nous sécurisons votre continuité opérationnelle avec des technologies de pointe et un support expert 24/7.
                                    </p>
                                    <div className="flex gap-6">
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-bold text-white">100%</span>
                                            <span className="text-[10px] uppercase tracking-widest text-blue-200">De Conformité Normative</span>
                                        </div>
                                        <div className="w-px h-12 bg-white/20" />
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-bold text-white">24/7</span>
                                            <span className="text-[10px] uppercase tracking-widest text-blue-200">Support Technique Prioritaire</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            {/* Floating Sticky CTA - Phase III Conversion Focus */}
            <div className="hidden md:block fixed bottom-8 right-8 z-[100] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-[3s] pointer-events-none">
              <div className="pointer-events-auto group/sticky">
                <Button
                  asChild
                  className="bg-white hover:-translate-y-2 transition-all duration-10000 active:scale-95 shadow-2xl"
                  style={{ backdropFilter: "blur(20px)" }}
                >
                  <a href="/consultation" className="flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                    <span className="font-bold text-sm tracking-wider text-blue-600 whitespace-nowrap text-center">
                      Planifiez votre <br />audit industriel gratuit
                    </span>
                    <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center text-white group-hover/sticky:rotate-[360deg] shadow-lg shadow-blue-200">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </a>
                </Button>
              </div>
            </div>

            <ConsultationFormSection />
            </main>

            <Footer />
        </div>
    );
};

export default CommercialIndustriel;
