import React, { useEffect, useState, useRef } from "react";
import { 
    ChevronRight, 
    ArrowRight,
    CheckCircle2,
    ArrowDown,
    Star,
    Phone,
    ShieldCheck,
    Zap,
    Utensils,
    Droplets,
    Settings,
    Building2,
    Coffee,
    Wine,
    Sparkles,
    GlassWater,
    Heart,
    Activity,
    Activity as SparklesIcon,
    Leaf,
    HandPlatter,
    Timer,
    ChevronDown,
    TrendingDown,
    Wallet
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { cn } from "@/lib/utils";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import ExpertTrustSection from "@/components/ExpertTrustSection";
import WaterDiagnosis from "@/components/water_diagnosis";

// Assets
import heroImg from "@/assets/2151949236.jpg";
import TechnicalRoomHotelImg from "@/assets/15952_50060.jpg";
import CommercialfiltrationImg from "@/assets/1494014028920430592_8e1000580b747b8dac3a78e0855f0394-removebg-preview.png";
import brasserieWaterImg from "@/assets/124521.jpg";
import coffeeFilterImg from "@/assets/167206.jpg";
import verifiedImg from "@/assets/verified.svg";
import savingsImg from "@/assets/savings.svg";
import healthSafeImg from "@/assets/health_and_safety.svg";
import ecoImg from "@/assets/eco.svg";
import industrialHospitalityImg from "@/assets/industrial_hospitality.png";
import FilterImg1 from "@/assets/PURITY-C-Quell-ST-Advanced.webp";
import maitriseImg from "@/assets/2226.jpeg";
import hospitalityImg2 from "@/assets/2121.png";
import brasserieBgImg from "@/assets/2122.jpg";
import reputationImg from "@/assets/132626.jpg";

const HotellerieRestauration = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Hôtellerie & Restauration | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />

            <main>
                {/* 1. HERO SECTION */}
                <section className="relative bg-white overflow-hidden min-h-screen flex flex-col justify-center pt-24 pb-16 lg:pt-28 lg:pb-16 border-b border-slate-200">
                    <div className="absolute inset-0 w-full h-full opacity-40 lg:opacity-100">
                        {/* Mobile Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent z-10 lg:hidden"></div>
                        {/* Desktop Gradient: 1/3 solid white, fading to transparent */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,white_33.33%,rgba(255,255,255,0)_85%)] z-10 hidden lg:block"></div>
                        
                        <div className="absolute right-0 top-0 w-full lg:w-[80%] h-full">
                            <img 
                                src={heroImg} 
                                alt="Horeca Excellence" 
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-20"></div>
                    
                    <div className="container mx-auto px-6 relative z-30">
                        <div className="max-w-3xl flex flex-col justify-center">
                            <div className="mb-8">
                                <h1 className="text-[50px] leading-[55px] font-sans font-bold text-[#18448F] mb-6 tracking-tight">
                                    L'excellence <span className="text-[#8CC63F] font-sans font-bold drop-shadow-sm">pure,</span><br/> à la table des plus grands.
                                </h1>
                                
                                <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl">
                                    Sublimez l'expérience de vos convives et optimisez vos opérations avec des solutions d'eau intelligentes conçues pour l'exigence du milieu HORECA.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row items-start gap-6 mb-16">
                                <div className="relative inline-block w-full sm:w-auto group">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <button
                                        className="relative flex items-center justify-center w-full sm:w-auto bg-[#18448F] text-white hover:bg-transparent hover:text-[#18448F] border border-[#18448F] rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all"
                                        onClick={() => navigate("/consultation")}
                                    >
                                        Planifiez une consultation gratuite
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. EDITORIAL INTRO */}
                <section className="relative py-24 md:py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                            <div className="lg:w-1/2 space-y-10">
                                <div className="inline-flex items-center gap-4">
                                    <span className="w-12 h-[1px] bg-slate-900" />
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">L'ESSENCE DU SERVICE</span>
                                </div>
                                <h2 
                                    className="text-slate-900"
                                    style={{
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        fontSize: '48px',
                                        lineHeight: '52px'
                                    }}
                                >
                                    <span className="block text-blue-600">L'art de l'hospitalité</span>
                                    <span className="block">
                                        <span className="text-blue-600">ne laisse rien</span>
                                        <span className="text-[#8CC63F]"> au hasard.</span>
                                    </span>
                                </h2>
                                <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                    Dans l'univers de la haute gastronomie et de l'hôtellerie de prestige, chaque détail définit l'expérience. La qualité de votre eau n'est pas une simple commodité : c'est la signature silencieuse de votre raffinement et le protecteur de votre excellence.
                                </p>
                            </div>
                            <div className="lg:w-1/2 relative">
                                <div className="aspect-[4/3] w-full max-w-2xl mx-auto relative group overflow-hidden rounded-2xl">
                                    <div className="absolute inset-0 bg-slate-100 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 rounded-2xl" />
                                    <img 
                                        src={hospitalityImg2} 
                                        alt="Service d'excellence" 
                                        className="absolute inset-0 w-full h-full object-cover object-[center_30%] z-10 transition-transform duration-700 group-hover:scale-105 rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. BENTO GRID PORTFOLIO */}
                <section className="relative py-24 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="mb-16">
                            <h2 
                                className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8 max-w-4xl"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '48px',
                                    lineHeight: '52px'
                                }}
                            >
                                <span className="block text-blue-600">Nos solutions de filtration d'eau</span>
                                <span className="block">
                                    <span className="text-blue-600">pour les professionnels de </span>
                                    <span className="text-[#8CC63F]">l'hôtellerie et la restauration.</span>
                                </span>
                            </h2>
                            <p className="mt-6 text-slate-500 text-lg font-light leading-relaxed w-full text-justify">
                                Découvrez nos systèmes avancés de <strong>traitement et d'adoucissement d'eau</strong> conçus sur mesure pour le secteur <strong>HORECA (Hôtellerie, Restauration, Cafés)</strong>. De la protection anticalcaire de vos machines à espresso professionnelles jusqu'à la filtration gastronomique pour vos cuisines étoilées, Bricareau garantit une qualité d'eau irréprochable. Préservez la durée de vie de votre équipement CHR, sublimez les arômes de vos préparations culinaires et offrez à votre clientèle une eau purifiée au service exclusif de l'excellence.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                            {/* Card 1: Adoucissement (Tall) */}
                            <div 
                                className="group relative bg-white lg:row-span-2 rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col justify-end p-8"
                                onClick={() => navigate("/adoucisseurs-eau-commerciaux")}
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                                    <img src={TechnicalRoomHotelImg} alt="Adoucissement Commercial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                                </div>
                                <div className="relative z-10 space-y-4">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">PROTECTION ABSOLUE</span>
                                    <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Adoucissement<br/>d'eau</h3>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
                                        Protégez vos investissements onéreux et garantissez une verrerie étincelante, sans la moindre trace.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Filtration (Wide) */}
                            <div 
                                className="group relative bg-white md:col-span-2 rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col justify-center p-8 lg:p-12"
                                onClick={() => navigate("/filtration-hotels-restaurants")}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 max-w-md space-y-4">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">EXCELLENCE GUSTATIVE</span>
                                    <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Filtration<br/>Gastronomique</h3>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                                        Une eau cristalline, sans goût ni odeur, pour sublimer la saveur authentique de vos créations culinaires et surprendre vos convives.
                                    </p>
                                </div>
                                <img src={CommercialfiltrationImg} alt="Filtration" className="absolute right-0 bottom-0 h-[80%] object-contain transition-transform duration-500 group-hover:scale-105 mix-blend-multiply z-0" />
                            </div>

                            {/* Card 3: Brasserie (Square) */}
                            <div 
                                className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col justify-end p-8"
                                onClick={() => navigate("/solutions-brasseries")}
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                                    <img src={brasserieBgImg} alt="Espace Brasserie" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                                </div>
                                <div className="relative z-10 space-y-2 mt-auto">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">SERVICE PRESTIGE</span>
                                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Espace<br/>Brasserie</h3>
                                    <p className="text-slate-500 text-xs font-light leading-relaxed">
                                        L'élégance d'une eau filtrée sur mesure, plate ou finement pétillante. Une expérience de service fluide, raffinée et totalement libérée de la contrainte des bouteilles.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4: Café (Square) */}
                            <div 
                                className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col justify-between p-8"
                                onClick={() => navigate("/filtres-eau-machine-cafe")}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tl from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="flex justify-between items-start relative z-10">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">PRÉCISION BARISTA</span>
                                </div>
                                <div className="space-y-2 relative z-10 w-[70%]">
                                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">L'Art<br/>du Café</h3>
                                    <p className="text-slate-500 text-xs font-light leading-relaxed">
                                        L'eau secrète des baristas pour révéler les arômes les plus subtils de vos grains.
                                    </p>
                                </div>
                                <img src={FilterImg1} alt="Filtre Café" className="absolute right-0 top-0 h-[65%] object-contain transition-all duration-500 group-hover:scale-105 mix-blend-multiply z-0" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. EXPERTISE CULINAIRE */}
                <section className="relative py-32 bg-white text-slate-900 overflow-hidden border-t border-slate-100">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none" />
                    
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col gap-16">
                            <div className="space-y-8 max-w-3xl">
                                <div className="inline-flex items-center gap-4">
                                    <span className="w-12 h-[1px] bg-slate-900" />
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">NOTRE SIGNATURE</span>
                                </div>
                                <h2 
                                    className="text-slate-900"
                                    style={{
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        fontSize: '48px',
                                        lineHeight: '52px'
                                    }}
                                >
                                    <span className="block text-blue-600">L'Exigence</span>
                                    <span className="block">
                                        <span className="text-blue-600">sans</span>
                                        <span className="text-[#8CC63F]"> compromis.</span>
                                    </span>
                                </h2>
                                <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                    Nous maîtrisons les défis des très grands services : pics de fréquentation, normes d'hygiène draconiennes et tolérance zéro pour les pannes.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-y sm:border-y-0 sm:border-x border-slate-200">
                                {[
                                    { title: "Normes HACCP", desc: "Conformité absolue aux exigences sanitaires les plus strictes de la restauration professionnelle.", icon: ShieldCheck },
                                    { title: "Performance Continue", desc: "Des systèmes de filtration d'eau conçus pour encaisser les services intensifs sans baisse de pression.", icon: Timer },
                                    { title: "Gants Blancs", desc: "Maintenance préventive et intervention VIP pour garantir une disponibilité à 100%.", icon: HandPlatter }
                                ].map((feature, idx) => (
                                    <div key={idx} className="group p-10 border-b sm:border-b-0 border-slate-200 last:border-b-0 sm:border-r sm:last:border-r-0 hover:bg-slate-50 transition-colors duration-500">
                                        <feature.icon className="w-8 h-8 text-slate-300 mb-6 group-hover:text-blue-600 transition-colors" />
                                        <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-slate-900">{feature.title}</h3>
                                        <p className="text-slate-500 text-sm font-light leading-relaxed">
                                            {feature.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>




                {/* 6. PILIERS DE LA RENTABILITÉ (Z-PATTERN / ÉDITORIAL) */}
                <section className="py-32 bg-white text-slate-900 relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        
                        {/* Section Header */}
                        <div className="text-center max-w-4xl mx-auto mb-32">
                            <div className="inline-flex items-center justify-center gap-4 mb-8">
                                <span className="w-12 h-[1px] bg-slate-900" />
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">INVESTISSEMENT STRATÉGIQUE</span>
                            </div>
                            <h2 
                                className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8 mx-auto"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '48px',
                                    lineHeight: '52px'
                                }}
                            >
                                <span className="block text-blue-600">Les 3 piliers</span>
                                <span className="block">
                                    <span className="text-blue-600">de la</span>
                                    <span className="text-[#8CC63F]"> rentabilité.</span>
                                </span>
                            </h2>
                            <p className="text-slate-500 text-xl font-light leading-relaxed">
                                L'eau pure n'est pas qu'une question d'hygiène. L'impact de nos systèmes se fait sentir à tous les niveaux de votre établissement, de la réduction des coûts jusqu'à l'augmentation de votre chiffre d'affaires.
                            </p>
                        </div>

                        <div className="space-y-40">
                            {/* Pilier 1 : Image Left, Text Right */}
                            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                                <div className="lg:w-1/2 w-full aspect-[4/3] rounded-3xl overflow-hidden relative shadow-xl">
                                    <img src={maitriseImg} alt="Salle technique" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="lg:w-1/2 w-full space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <Wallet className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <h3 className="text-3xl font-medium tracking-tight text-slate-900">Maîtrise absolue des coûts.</h3>
                                    </div>
                                    <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] mt-3 shrink-0" />
                                            <div><strong className="text-slate-900 font-medium">Longévité de l'équipement :</strong> Protection contre l'entartrage et la corrosion (fours, machines à espresso, lave-vaisselle). Fini les remplacements prématurés.</div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] mt-3 shrink-0" />
                                            <div><strong className="text-slate-900 font-medium">Économies de produits :</strong> Réduction de 30% à 50% de l'utilisation de détergents grâce à une eau douce qui mousse mieux.</div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] mt-3 shrink-0" />
                                            <div><strong className="text-slate-900 font-medium">Efficacité énergétique :</strong> Vos machines fonctionnent sans la barrière thermique du calcaire, réduisant vos factures d'énergie.</div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] mt-3 shrink-0" />
                                            <div><strong className="text-slate-900 font-medium">Efficacité opérationnelle :</strong> Moins de traces sur la verrerie équivaut à moins de temps passé à polir et relaver.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pilier 2 : Text Left, Image Right */}
                            <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
                                <div className="lg:w-1/2 w-full space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <Utensils className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <h3 className="text-3xl font-medium tracking-tight text-slate-900">L'excellence au service des revenus.</h3>
                                    </div>
                                    <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                                            <div><strong className="text-slate-900 font-medium">Révélation des saveurs :</strong> Une eau neutre sans chlore qui sublime vos thés, cafés et créations culinaires.</div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                                            <div><strong className="text-slate-900 font-medium">Esthétique parfaite :</strong> Des glaçons cristallins et une verrerie étincelante pour une première impression irréprochable.</div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                                            <div><strong className="text-slate-900 font-medium">Nouvelles marges :</strong> Transformez l'eau en source de revenus avec une offre d'eau filtrée embouteillée sur place à votre marque.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full aspect-[4/3] rounded-3xl overflow-hidden relative shadow-xl">
                                    <img src={coffeeFilterImg} alt="Café parfait" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Pilier 3 : Image Left, Text Right */}
                            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                                <div className="lg:w-1/2 w-full aspect-[4/3] rounded-3xl overflow-hidden relative shadow-xl">
                                    <img src={reputationImg} alt="Verrerie de luxe" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="lg:w-1/2 w-full space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-[#8CC63F]/10 flex items-center justify-center shrink-0">
                                            <Leaf className="w-8 h-8 text-[#8CC63F]" />
                                        </div>
                                        <h3 className="text-3xl font-medium tracking-tight text-slate-900">Une réputation bâtie sur l'engagement.</h3>
                                    </div>
                                    <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] mt-3 shrink-0" />
                                            <div><strong className="text-slate-900 font-medium">Engagement écologique :</strong> Élimination de la dépendance aux bouteilles en plastique à usage unique grâce aux systèmes sur place.</div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] mt-3 shrink-0" />
                                            <div><strong className="text-slate-900 font-medium">Réputation :</strong> La satisfaction globale (goût, propreté, écologie) génère de meilleurs avis en ligne et fidélise votre clientèle.</div>
                                        </div>
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

export default HotellerieRestauration;
