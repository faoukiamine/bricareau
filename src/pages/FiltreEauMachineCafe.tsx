
import React, { useEffect } from "react";
import { 
    ChevronRight, 
    ArrowRight,
    ShieldCheck,
    Droplets,
    Coffee,
    Sparkles,
    CheckCircle2,
    Settings,
    Smartphone,
    GlassWater,
    Phone,
    Utensils,
    Activity,
    Heart
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ProMaxButton } from "@/components/ui/ProMaxButton";

import heroImg from "@/assets/4319.jpg";
import filterImg from "@/assets/167206.jpg"; // Using a placeholder for the filter products
import coffeeDifferenceImg from "@/assets/14331.jpg";
import FilterImg1 from "@/assets/PURITY-C-Quell-ST-Advanced.webp";
import FilterImg2 from "@/assets/PURITY-C-Steam-Advanced.webp";
import FilterImg3 from "@/assets/PURITY-HCHF-Design-Center.webp";
import FilterImg4 from "@/assets/PURITY-C1100-XtraSafe.webp";
import FilterImg5 from "@/assets/PURITY-C1000-AC.webp";
import FilterImg6 from "@/assets/PURITY-C-Finest.png.webp";


const FiltreEauMachineCafe = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Filtres d'eau pour Machines à Café | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    const products = [
        {
            title: "PURITY C Quell ST",
            desc: "Le filtre classique pour espresso, idéal pour les eaux à dureté carbonatée élevée. Équilibre parfait des minéraux.",
            image: FilterImg1,
            link: "#"
        },
        {
            title: "PURITY C Steam",
            desc: "Conçu pour la minéralisation et l'élimination des odeurs. Idéal pour les cafés de spécialité.",
            image: FilterImg2,
            link: "#"
        },
        {
            title: "PURITY HCHF",
            desc: "Filtre à charbon actif pour une eau sans chlore. Recommandé pour les machines à café automatiques.",
            image: FilterImg3,
            link: "#"
        },
        {
            title: "PURITY C1100 XtraSafe",
            desc: "Haute capacité pour les grands établissements. Protection maximale contre le tartre pour un débit continu.",
            image: FilterImg4,
            link: "#"
        },
        {
            title: "PURITY C1000 AC",
            desc: "Spécialement conçu pour les fours vapeur et les machines à haute demande. Évite les dépôts de calcaire tenaces.",
            image: FilterImg5,
            link: "#"
        },
        {
            title: "PURITY C-Finest",
            desc: "Spécialement conçu pour les fours vapeur et les machines à haute demande. Évite les dépôts de calcaire tenaces.",
            image: FilterImg6,
            link: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />

            <main>
                {/* 1. HERO SECTION (MIMICKING HOTELLERIERESTAURATION STYLE) */}
                <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={heroImg} 
                            alt="Solutions de Filtration Café" 
                            className="w-full h-full object-cover opacity-90" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-12">
                            {/* Badge Removed */}
                            
                            <h1 
                                className="mb-6 animate-in fade-in slide-in-from-left duration-1000 max-w-4xl text-[32px] md:text-[46px] lg:text-[50px] leading-[1.1]"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontStyle: 'normal'
                                }}
                            >
                                <span className="text-[#8CC63F] font-bold not-italic">L'eau pure,</span> <span className="font-bold not-italic text-[#18448F]">l'âme de votre café.</span>
                            </h1>
                            
                            <p className="animate-in fade-in slide-in-from-left duration-1000 delay-100 text-justify lg:text-left max-w-[680px] text-slate-500 text-[15px] md:text-lg leading-relaxed">
                                Protégez vos équipements de haute précision et révélez le véritable profil aromatique de vos grains avec nos systèmes de filtration.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 pt-8">
                                <ProMaxButton variant="primary" className="px-12 h-16 text-[11px]" onClick={() => { document.getElementById('explore-filters')?.scrollIntoView({ behavior: 'smooth' }) }}>
                                    Explorez nos filtres
                                </ProMaxButton>
                                <a href="tel:18552649328" className="flex items-center gap-4 group">
                                    <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:border-blue-500/50 group-hover:bg-white transition-all">
                                        <Phone className="w-5 h-5 text-[#18448F]" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ligne Prioritaire</div>
                                        <div className="text-xl font-bold tracking-tight text-[#18448F]">1-855-264-9328</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* EXPLOREZ LA GAMME Removed */}
                </section>

                {/* 2. STATEMENT SECTION */}
                <section id="explore-filters" className="py-24 bg-white relative">
                    <div className="container mx-auto px-6 text-center space-y-8">
                        <div className="max-w-4xl mx-auto space-y-6">
                            <h2 
                                className="mb-8 text-center"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '48px',
                                    lineHeight: '52px',
                                    color: 'rgb(24, 68, 143)'
                                }}
                            >
                                <span className="block">Le café est 98% eau,</span>
                                <span className="block text-center">choisissez le bon <span className="text-[#8CC63F]">filtre.</span></span>
                            </h2>
                            <p className="text-slate-500 text-xl font-light leading-relaxed mx-auto max-w-2xl">
                                Nous proposons une gamme équilibrée de filtres adaptés à votre eau et à vos besoins de performance.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. PRODUCT GRID */}
                <section className="py-24 bg-slate-50/50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {products.map((product, idx) => (
                                <div key={idx} className="group bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center space-y-8">
                                    <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-8">
                                        <img 
                                            src={product.image} 
                                            alt={product.title} 
                                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                                            {product.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm font-light leading-relaxed">
                                            {product.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. SIDE-BY-SIDE SECTION (Expertise & App) */}
                <section className="py-32 bg-white overflow-hidden border-y border-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-24">
                            {/* Content Column */}
                            <div className="lg:w-1/2 space-y-12 order-2 lg:order-1">
                                <div className="space-y-6">
                                    <h2 
                                        className="mb-6"
                                        style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            fontSize: '48px',
                                            lineHeight: '52px',
                                            color: 'rgb(24, 68, 143)'
                                        }}
                                    >
                                        <span className="block">Le bon filtre</span>
                                        <span className="block">fait toute la <span className="text-[#8CC63F]">différence</span></span>
                                    </h2>
                                    <p className="text-slate-500 text-xl font-light leading-relaxed max-w-lg">
                                        Que vous dirigiez un petit café ou un grand service de restauration à haut volume, nos filtres garantissent la constance de chaque tasse tout en prolongeant la durée de vie de vos machines.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                                    <ProMaxButton variant="primary" className="px-12 h-16 text-[11px]" onClick={() => navigate("/contact-form")}>
                                        DEMANDEZ UNE SOUMISSION
                                    </ProMaxButton>
                                </div>
                            </div>

                            {/* Image Column (Mobile in Hand) */}
                            <div className="lg:w-1/2 relative order-1 lg:order-2">
                                <div className="relative group">
                                    <div className="absolute -inset-20 bg-blue-100/50 blur-[120px] rounded-full group-hover:bg-blue-200/50 transition-colors duration-700" />
                                    <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 group-hover:-rotate-1 transition-transform duration-700">
                                        <img 
                                            src={coffeeDifferenceImg} 
                                            alt="Le bon filtre fait toute la différence" 
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-transparent" />
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

export default FiltreEauMachineCafe;
