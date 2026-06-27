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
import rentabiliteImg from "@/assets/7860.jpg";

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
                    <div className="absolute inset-0 w-full h-full opacity-40 md:opacity-100">
                        {/* Mobile Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent z-10 md:hidden"></div>
                        {/* Tablet Vertical Filter (Progressive) */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,white_0%,rgba(255,255,255,0.8)_25%,rgba(255,255,255,0.4)_60%,transparent_100%)] z-10 hidden md:block lg:hidden"></div>
                        {/* Desktop Gradient: fade over the text area */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10 hidden lg:block w-[50%]"></div>
                        
                        <div className="absolute right-0 top-0 w-full h-full lg:w-[65%]">
                            {/* Inner gradient to blend the hard edge on desktop */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10 hidden lg:block w-1/3"></div>
                            <img 
                                src={heroImg} 
                                className="absolute inset-0 w-full h-full object-cover object-center lg:object-right"
                             alt="Horeca Excellence - fontaine à eau bureau" title="Fontaine à eau bureau par Bricareau" />
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-20"></div>
                    
                    <div className="container mx-auto px-6 relative z-30">
                        <div className="max-w-3xl flex flex-col justify-center">
                            <div className="mb-8">
                                <h1 className="text-[50px] leading-[55px] font-sans font-bold text-[#18448F] mb-6 tracking-tight">
                                    L'excellence de <span className="text-[#8CC63F] font-sans font-bold drop-shadow-sm">l'eau pure,</span><br/> à la table des plus grands.
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
                                        Planifier une consultation gratuite
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
                            <div className="w-full lg:w-1/2 space-y-10">
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
                            <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
                                <div className="aspect-[4/3] w-full max-w-2xl mx-auto relative group overflow-hidden rounded-2xl">
                                    <div className="absolute inset-0 bg-slate-100 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 rounded-2xl" />
                                    <img 
                                        src={hospitalityImg2} 
                                        className="absolute inset-0 w-full h-full object-cover object-[center_30%] z-10 transition-transform duration-700 group-hover:scale-105 rounded-2xl"
                                     alt="Service d'excellence - système d'eau hôtel" title="Système d'eau hôtel par Bricareau" />
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
                                Découvrir nos systèmes avancés de <strong>traitement et d'adoucissement d'eau</strong> conçus sur mesure pour le secteur <strong>HORECA (Hôtellerie, Restauration, Cafés)</strong>. De la protection anticalcaire de vos machines à espresso professionnelles jusqu'à la filtration gastronomique pour vos cuisines étoilées, Bricareau garantit une qualité d'eau irréprochable. Préservez la durée de vie de votre équipement CHR, sublimez les arômes de vos préparations culinaires et offrez à votre clientèle une eau purifiée au service exclusif de l'excellence.
                            </p>
                        </div>
                        
                        {(() => {
                            const hospitalityCards = [
                                {
                                    title: "Adoucissement\nd'eau",
                                    subtitle: "PROTECTION ABSOLUE",
                                    desc: "Protégez vos investissements onéreux et garantissez une verrerie étincelante, sans la moindre trace.",
                                    img: TechnicalRoomHotelImg,
                                    link: "/adoucisseurs-eau-commerciaux",
                                    className: "lg:row-span-2",
                                    imgClass: "object-cover"
                                },
                                {
                                    title: "Filtration\nd'eau",
                                    subtitle: "EXCELLENCE GUSTATIVE",
                                    desc: "Une eau cristalline, sans goût ni odeur, pour sublimer la saveur authentique de vos créations culinaires et surprendre vos convives.",
                                    img: CommercialfiltrationImg,
                                    link: "/filtration-hotels-restaurants",
                                    className: "md:col-span-2",
                                    imgClass: "object-contain p-6 opacity-80"
                                },
                                {
                                    title: "Espace\nBrasserie",
                                    subtitle: "SERVICE PRESTIGE",
                                    desc: "L'élégance d'une eau filtrée sur mesure, plate ou finement pétillante. Une expérience de service fluide, raffinée et totalement libérée de la contrainte des bouteilles.",
                                    img: brasserieBgImg,
                                    link: "/solutions-brasseries",
                                    className: "",
                                    imgClass: "object-cover"
                                },
                                {
                                    title: "L'Art\ndu Café",
                                    subtitle: "PRÉCISION BARISTA",
                                    desc: "L'eau secrète des baristas pour révéler les arômes les plus subtils de vos grains.",
                                    img: FilterImg1,
                                    link: "/filtres-eau-machine-cafe",
                                    className: "",
                                    imgClass: "object-contain p-6 opacity-80"
                                }
                            ];

                            return (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
                                    {hospitalityCards.map((card, index) => (
                                        <div 
                                            key={index}
                                            className={`group relative rounded-[2rem] overflow-hidden cursor-pointer flex flex-col justify-end p-8 ${card.className}`}
                                            onClick={() => navigate(card.link)}
                                        >
                                            {/* Image Background */}
                                            <div className="absolute inset-0 bg-slate-900">
                                                <img 
                                                    src={card.img} 
                                                    className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${card.imgClass || 'object-cover'}`} 
                                                    alt={card.title.replace('\n', ' ')} 
                                                />
                                                {/* Gradient Overlay for Text Readability */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />
                                            </div>
                                            
                                            {/* Content */}
                                            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="text-[#8CC63F] text-sm font-bold tracking-wider">{card.subtitle}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                                                    {card.title.split('\n').map((line, i) => (
                                                        <span key={i} className="block">{line}</span>
                                                    ))}
                                                </h3>
                                                <p className="text-slate-300 font-light leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[150px] transition-all duration-500 overflow-hidden">
                                                    {card.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            );
                        })()}
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
                                    Nous maîtrisons les défis des très grands services : pics de fréquentation, normes d'hygiène rigoureuses et tolérance zéro pour les pannes.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-y sm:border-y-0 sm:border-x border-slate-200">
                                {[
                                    { title: "Normes HACCP", desc: "Nous assurons une conformité absolue aux exigences sanitaires les plus strictes. Chaque système est pensé pour éliminer tout risque bactériologique, garantissant une hygiène irréprochable et sécurisant vos opérations quotidiennes.", icon: ShieldCheck },
                                    { title: "Performance Continue", desc: "Nos équipements sont ingénierés pour absorber les pics de fréquentation les plus intenses. Ils maintiennent un débit constant et une pression optimale, vous assurant un service fluide et ininterrompu, même aux heures d'affluence.", icon: Timer },
                                    { title: "Gants Blancs", desc: "Bénéficiez d'un accompagnement sur mesure avec notre service de maintenance proactive. Nos techniciens interviennent en toute discrétion avant la moindre anomalie, vous garantissant une disponibilité totale de vos installations.", icon: HandPlatter }
                                ].map((feature, idx) => (
                                    <div key={idx} className="group p-10 border-b sm:border-b-0 border-slate-200 last:border-b-0 sm:border-r sm:last:border-r-0 hover:bg-slate-50 transition-colors duration-500">
                                        <feature.icon className="w-8 h-8 text-slate-300 mb-6 group-hover:text-blue-600 transition-colors" />
                                        <h3 className="text-xl font-bold mb-4 tracking-tight text-slate-900">{feature.title}</h3>
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
                                    <img src={maitriseImg} className="absolute inset-0 w-full h-full object-cover"  alt="Salle technique - traitement d'eau entreprise" title="Traitement d'eau entreprise par Bricareau" />
                                </div>
                                <div className="lg:w-1/2 w-full space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-[#8CC63F]/10 flex items-center justify-center shrink-0">
                                            <Wallet className="w-8 h-8 text-[#8CC63F]" />
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
                                    <img src={coffeeFilterImg} className="absolute inset-0 w-full h-full object-cover"  alt="Café parfait - adoucisseur d'eau pour restaurant" title="Adoucisseur d'eau pour restaurant par Bricareau" />
                                </div>
                            </div>

                            {/* Pilier 3 : Image Left, Text Right */}
                            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                                <div className="lg:w-1/2 w-full aspect-[4/3] rounded-3xl overflow-hidden relative shadow-xl">
                                    <img src={reputationImg} className="absolute inset-0 w-full h-full object-cover"  alt="Verrerie de luxe - traitement d'eau entreprise" title="Traitement d'eau entreprise par Bricareau" />
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

                {/* 5. EXPERT TRUST SECTION */}
                <div className="border-t border-slate-100">
                    <ExpertTrustSection 
                        title="Une consultation gratuite pour "
                        highlight="optimiser votre rentabilité."
                        description="Découvrir comment nos systèmes de filtration d'eau peuvent réduire vos coûts opérationnels, éliminer les plastiques à usage unique et prolonger la durée de vie de vos équipements et réduire leur entretien."
                        buttonText="Rentabiliser mon business"
                        buttonLink="/consultation"
                        image={rentabiliteImg}
                        imageRight={true}
                    />
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default HotellerieRestauration;







