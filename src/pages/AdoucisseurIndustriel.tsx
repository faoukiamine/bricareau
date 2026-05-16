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
    ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import TestimonialsSection from "@/components/TestimonialsSection";
import { cn } from "@/lib/utils";

// Assets
import heroImg from "@/assets/hospitality_laundry_water_softener_1778896396948.png";
import mainProductImg from "@/assets/high_efficiency_commercial_softener_render_1778896510314.png";
import twinProductImg from "@/assets/industrial_twin_water_softener_render_1778896495387.png";
import skidProductImg from "@/assets/WaterSoftenerInstallation.jpg";
import industrialProductImg from "@/assets/Industrial Water Softeners.png";

const AdoucisseurIndustriel = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        document.title = "Adoucisseurs d'eau commerciaux et industriels | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const valueProps = [
        {
            title: "Réduction des coûts",
            desc: "Réduisez vos factures d'énergie et de produits de nettoyage jusqu'à 30%.",
            icon: DollarSign
        },
        {
            title: "Longévité des équipements",
            desc: "Protégez vos chaudières, tours de refroidissement et lave-vaisselle du tartre.",
            icon: ShieldCheck
        },
        {
            title: "Assurance Qualité",
            desc: "Garantissez une eau de qualité constante pour vos processus industriels.",
            icon: CheckCircle2
        }
    ];

    const products = [
        {
            id: 1,
            title: "Série-I High-Efficiency",
            desc: "Performance maximale avec une consommation minimale de sel et d'eau.",
            image: mainProductImg,
            tag: "BEST-SELLER"
        },
        {
            id: 2,
            title: "Adoucisseur Twin CI",
            desc: "Système duplex assurant un flux ininterrompu 24h/24.",
            image: twinProductImg,
            tag: "SANS COUPURE"
        },
        {
            id: 3,
            title: "Série-X Heavy Duty",
            desc: "Conçu pour les environnements industriels les plus exigeants.",
            image: industrialProductImg,
            tag: "INDUSTRIEL"
        },
        {
            id: 4,
            title: "Modèle Compact CP",
            desc: "Puissance d'adoucissement dans un format gain de place.",
            image: mainProductImg,
            tag: "COMPACT"
        },
        {
            id: 5,
            title: "Système sur Skid",
            desc: "Solution clé en main pré-assemblée pour une installation rapide.",
            image: twinProductImg,
            tag: "PLUG & PLAY"
        },
        {
            id: 6,
            title: "Série Pro-Flow",
            desc: "Débit ultra-rapide pour les besoins de production élevés.",
            image: skidProductImg,
            tag: "HAUT DÉBIT"
        }
    ];

    const faqs = [
        {
            q: "Pourquoi mon entreprise a-t-elle besoin d'un adoucisseur industriel ?",
            a: "L'eau dure provoque l'accumulation de tartre dans les tuyaux et les machines, ce qui réduit l'efficacité énergétique, augmente les coûts de maintenance et peut entraîner des pannes coûteuses. Un adoucisseur protège vos investissements."
        },
        {
            q: "Quelle est la durée de vie moyenne de vos systèmes ?",
            a: "Nos adoucisseurs industriels sont conçus pour durer entre 15 et 20 ans avec un entretien régulier. Nous utilisons des composants de qualité supérieure résistants à l'usure intensive."
        },
        {
            q: "Proposez-vous des contrats de maintenance ?",
            a: "Oui, Bricareau propose des plans de service complets incluant la livraison de sel, l'analyse de l'eau et l'entretien préventif pour garantir une performance optimale en tout temps."
        },
        {
            q: "Comment choisir la taille appropriée pour mon besoin ?",
            a: "Nos experts effectuent une analyse gratuite de votre eau et de vos débits de pointe pour dimensionner le système parfaitement adapté à vos opérations."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />
            
            <main>
                {/* 1. HERO SECTION */}
                <Hero 
                    image={heroImg}
                    highlightedTitle="Adoucissement,"
                    mainTitle="Haute Performance."
                    subtitle="Optimisez vos opérations, protégez vos équipements et réduisez vos coûts d'exploitation avec les solutions d'adoucissement Bricareau."
                    showPhone={true}
                    showBreadcrumbs={false}
                />

                {/* 2. VALUE PROPS (DARK SECTION) */}
                <section className="bg-[#051128] py-24 text-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold">Choisissez Bricareau avec confiance</h2>
                            <p className="text-slate-400 text-lg">Nos experts vous accompagnent de l'analyse à l'installation.</p>
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
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">Trouvez l'adoucisseur adapté à vos besoins</h2>
                            <p className="text-slate-500 text-xl font-light">Une gamme complète pour tous les secteurs d'activité.</p>
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
                                                DÉTAILS DU PRODUIT <ArrowRight className="w-4 h-4" />
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
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-20 tracking-tight">FAQ sur les adoucisseurs</h2>
                        
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
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50 -z-10 skew-x-[-15deg] translate-x-[20%]" />

                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-24">
                            {/* Text side */}
                            <div className="lg:w-1/3 space-y-12">
                                <div className="space-y-6">
                                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none">
                                        Obtenez votre <br />
                                        <span className="text-blue-600 italic font-light lowercase">devis gratuit.</span>
                                    </h2>
                                    <p className="text-slate-500 text-xl font-light leading-relaxed">
                                        Parlez-nous de vos besoins et l'un de nos experts en eau commerciale vous contactera dans les plus brefs délais.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                            <Phone className="w-6 h-6 text-blue-600 group-hover:text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Appelez-nous</div>
                                            <div className="text-xl font-bold text-slate-900">1-855-264-9328</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                            <Mail className="w-6 h-6 text-blue-600 group-hover:text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</div>
                                            <div className="text-xl font-bold text-slate-900">info@bricareau.ca</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form side */}
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
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Titre du poste</label>
                                            <input type="text" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email professionnel</label>
                                            <input type="email" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Téléphone</label>
                                            <input type="tel" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none" />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Secteur d'activité</label>
                                            <select className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none appearance-none">
                                                <option>Veuillez choisir...</option>
                                                <option>Hôtellerie / Restauration</option>
                                                <option>Industrie / Manufacturier</option>
                                                <option>Santé / Laboratoire</option>
                                                <option>Éducation</option>
                                                <option>Autre</option>
                                            </select>
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Comment pouvons-nous vous aider ?</label>
                                            <textarea className="w-full h-32 p-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white transition-all outline-none resize-none" />
                                        </div>
                                        <div className="md:col-span-2 pt-4">
                                            <ProMaxButton variant="primary" className="w-full h-16 text-sm uppercase tracking-widest">
                                                ENVOYER LA DEMANDE
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Recevez des conseils d'experts et des offres spéciales</h2>
                        <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
                            <input 
                                type="email" 
                                placeholder="Votre email" 
                                className="flex-grow h-14 px-8 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 outline-none focus:bg-white/20 transition-all"
                            />
                            <button className="h-14 px-10 rounded-full bg-white text-blue-600 font-bold hover:bg-slate-100 transition-all uppercase tracking-widest text-xs">
                                S'INSCRIRE
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AdoucisseurIndustriel;
