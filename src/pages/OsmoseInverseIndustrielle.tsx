import React, { useEffect, useState } from "react";
import { 
    Zap, 
    ShieldCheck,
    Droplets,
    Wrench,
    TrendingUp,
    Shield,
    ChevronDown,
    Plus,
    Minus,
    CheckCircle2,
    DollarSign,
    Timer,
    Clock,
    Phone,
    Mail,
    Building2,
    MapPin,
    ArrowRight,
    Factory,
    Activity,
    Cpu,
    MonitorDot,
    Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import TestimonialsSection from "@/components/TestimonialsSection";
import { cn } from "@/lib/utils";

// Assets
import heroImg from "@/assets/jpg100-t3-scale100 (7).jpg";
import g1ProductImg from "@/assets/industrial_ro_g1_system_render_1778897323358.png";
import hpProductImg from "@/assets/industrial_ro_hp_skid_render_1778897339085.png";
import compactProductImg from "@/assets/jpg100.jpg";
import membraneImg from "@/assets/Commercial & industrial RO-Membranes.png";

const OsmoseInverseIndustrielle = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        document.title = "Systèmes d'osmose inverse industriels | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const valueProps = [
        {
            title: "Pureté Moléculaire",
            desc: "Élimination de 99.7% des sels dissous, bactéries et virus.",
            icon: Sparkles
        },
        {
            title: "Rendement Énergétique",
            desc: "Membranes basse pression pour une consommation électrique réduite.",
            icon: Zap
        },
        {
            title: "Gestion Intelligente",
            desc: "Contrôle PLC avec monitoring en temps réel de la conductivité.",
            icon: MonitorDot
        }
    ];

    const products = [
        {
            id: 1,
            title: "Système Osmose Série G1",
            desc: "Solution compacte et performante pour les besoins de débit modérés.",
            image: g1ProductImg,
            tag: "COMPACT"
        },
        {
            id: 2,
            title: "Unité RO Série HP",
            desc: "Système industriel à haut débit sur skid pour production intensive.",
            image: hpProductImg,
            tag: "HAUT DÉBIT"
        },
        {
            id: 3,
            title: "Série-M Mid-Range",
            desc: "L'équilibre parfait entre capacité et encombrement au sol.",
            image: compactProductImg,
            tag: "VERSATILE"
        },
        {
            id: 4,
            title: "Membranes Ultra-Low Energy",
            desc: "Technologies de rechange haute performance pour tous systèmes.",
            image: membraneImg,
            tag: "CONSOMMABLES"
        },
        {
            id: 5,
            title: "Système Combo RO + EDI",
            desc: "Production d'eau ultra-pure pour laboratoires et électronique.",
            image: hpProductImg,
            tag: "ULTRA-PURE"
        },
        {
            id: 6,
            title: "Unité RO Connectée i-2",
            desc: "Monitoring Cloud et alertes de maintenance prédictive intégrés.",
            image: g1ProductImg,
            tag: "SMART-TECH"
        }
    ];

    const faqs = [
        {
            q: "Qu'est-ce que l'osmose inverse industrielle ?",
            a: "C'est un processus de purification d'eau qui utilise une membrane semi-perméable pour éliminer les ions, molécules et particules plus grosses de l'eau potable, produisant une eau de process de haute pureté."
        },
        {
            q: "Quelle est la durée de vie des membranes ?",
            a: "Avec une préfiltration adéquate (adoucissement et filtration sédimentaire), les membranes d'osmose inverse industrielles durent généralement entre 3 et 5 ans."
        },
        {
            q: "Quel taux de rejet de sel peut-on attendre ?",
            a: "Nos systèmes standard atteignent un taux de réjection nominal de 99.5% à 99.8% des sels dissous totaux (TDS)."
        },
        {
            q: "Le système nécessite-t-il une surveillance constante ?",
            a: "Non, nos systèmes sont entièrement automatisés avec des capteurs de sécurité qui arrêtent l'unité en cas de pression anormale ou de qualité d'eau hors spécifications."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />
            
            <main>
                <Hero 
                    image={heroImg}
                    badge="EAU DE PROCESS & LABORATOIRE"
                    highlightedTitle="PURETÉ ABSOLUE"
                    mainTitle="GRADE INDUSTRIEL"
                    subtitle="Garantissez une pureté absolue pour vos processus critiques avec les solutions d'osmose inverse haute performance de Bricareau."
                    customCTA={
                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                            <ProMaxButton variant="primary" className="px-12 h-16 text-[11px]" onClick={() => navigate("/consultation")}>
                                DEMANDER UN DEVIS
                            </ProMaxButton>
                            <a href="tel:18552649328" className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-full bg-[#18448F]/5 flex items-center justify-center border border-[#18448F]/10 group-hover:border-blue-500/50 group-hover:bg-white transition-all">
                                    <Phone className="w-5 h-5 text-[#18448F]" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Division Commerciale</div>
                                    <div className="text-xl font-bold tracking-tight text-[#18448F]">1-855-264-9328</div>
                                </div>
                            </a>
                        </div>
                    }
                />

                {/* 2. VALUE PROPS (DARK SECTION) */}
                <section className="bg-[#051128] py-24 text-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">L'excellence au service de la pureté</h2>
                            <p className="text-slate-400 text-lg">Une technologie de pointe pour les standards les plus exigeants.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            {valueProps.map((prop, idx) => (
                                <div key={idx} className="space-y-6 group">
                                    <div className="w-20 h-20 rounded-full border-2 border-blue-400/30 flex items-center justify-center mx-auto group-hover:bg-blue-400/10 transition-all">
                                        <prop.icon className="w-10 h-10 text-blue-400" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold">{prop.title}</h3>
                                        <p className="text-slate-400 leading-relaxed px-4">{prop.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. PRODUCT CATALOG */}
                <section className="py-32 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24 space-y-4">
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-none">Solutions Osmose Inverse</h2>
                            <p className="text-slate-500 text-xl font-light">De l'unité compacte au skid industriel multi-colonnes.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {products.map((product) => (
                                <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col group hover:-translate-y-2 transition-all duration-500">
                                    <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                                        <img 
                                            src={product.image} 
                                            alt={product.title} 
                                            className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700" 
                                        />
                                        <div className="absolute top-6 left-6 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black tracking-widest rounded-full">
                                            {product.tag}
                                        </div>
                                    </div>
                                    <div className="p-10 flex flex-col flex-grow space-y-6">
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-bold text-slate-900">{product.title}</h3>
                                            <p className="text-slate-500 font-light leading-relaxed">{product.desc}</p>
                                        </div>
                                        <div className="pt-4 mt-auto">
                                            <button 
                                                onClick={() => navigate("/contact")}
                                                className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm tracking-tight hover:gap-4 transition-all"
                                            >
                                                FICHE TECHNIQUE PDF <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. TESTIMONIALS */}
                <div className="bg-white py-32 border-y border-slate-100">
                    <TestimonialsSection 
                        filterProduct="Industriel" 
                        title={
                            <>
                                <span className="font-light block text-slate-900">Ils font confiance à</span>
                                <span className="font-bold text-blue-600 block">Bricareau</span>
                            </>
                        }
                    />
                </div>

                {/* 5. FAQ SECTION */}
                <section className="py-32 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-20 tracking-tight">Expertise RO</h2>
                        
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300">
                                    <button 
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full flex items-center justify-between p-8 text-left group"
                                    >
                                        <span className={cn(
                                            "text-lg font-bold transition-colors",
                                            openFaq === idx ? "text-blue-600" : "text-slate-900"
                                        )}>{faq.q}</span>
                                        <div className={cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                                            openFaq === idx ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                                        )}>
                                            {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </div>
                                    </button>
                                    <div className={cn(
                                        "overflow-hidden transition-all duration-500 ease-in-out",
                                        openFaq === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                    )}>
                                        <div className="p-8 pt-0 text-slate-500 font-light leading-relaxed border-t border-slate-50">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. QUOTE FORM SECTION */}
                <section id="quote-form" className="py-32 bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50 -z-10 skew-x-[-15deg] translate-x-[20%]" />

                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-24">
                            <div className="lg:w-1/3 space-y-12">
                                <div className="space-y-6">
                                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none">
                                        Solution sur <br />
                                        <span className="text-blue-600 italic font-light lowercase">mesure.</span>
                                    </h2>
                                    <p className="text-slate-500 text-xl font-light leading-relaxed">
                                        Dimensionnons ensemble le système d'osmose inverse qui répondra à vos spécificités techniques et contraintes de production.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                            <Phone className="w-6 h-6 text-blue-600 group-hover:text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Consultation Expert</div>
                                            <div className="text-xl font-bold text-slate-900">1-855-264-9328</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                            <Mail className="w-6 h-6 text-blue-600 group-hover:text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Industriel</div>
                                            <div className="text-xl font-bold text-slate-900">projets@bricareau.ca</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100">
                                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Prénom</label>
                                            <input type="text" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nom</label>
                                            <input type="text" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Entreprise</label>
                                            <input type="text" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Débit quotidien souhaité (L/jour)</label>
                                            <input type="text" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                                            <input type="email" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Téléphone</label>
                                            <input type="tel" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none" />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Application (Pharmaceutique, Alimentaire, Lavage...)</label>
                                            <textarea className="w-full h-32 p-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none resize-none" />
                                        </div>
                                        <div className="md:col-span-2 pt-4">
                                            <ProMaxButton variant="primary" className="w-full h-16 text-sm uppercase tracking-widest">
                                                DEMANDER L'ÉTUDE TECHNIQUE
                                            </ProMaxButton>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pre-footer Blue Section */}
                <section className="bg-blue-600 py-20 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.4),transparent_50%)]" />
                    <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Expertise Bricareau : Maîtrisez la qualité de votre eau</h2>
                        <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
                            <input 
                                type="email" 
                                placeholder="Votre email pro" 
                                className="flex-grow h-14 px-8 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 outline-none focus:bg-white/20 transition-all"
                            />
                            <button className="h-14 px-10 rounded-full bg-white text-blue-600 font-bold hover:bg-slate-100 transition-all uppercase tracking-widest text-xs">
                                S'ABONNER
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default OsmoseInverseIndustrielle;
