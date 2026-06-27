import React, { useEffect } from "react";
import { 
    Phone,
    ShieldCheck,
    Droplets,
    Leaf,
    Heart,
    Activity,
    Wallet,
    GlassWater
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpertTrustSection from "@/components/ExpertTrustSection";
import WaterDiagnosis from "@/components/water_diagnosis";
import TestimonialsSection from "@/components/TestimonialsSection";

// Assets
import heroImg from "@/assets/23568974.png";
import drinkWaterImg from "@/assets/20230add-4ce5-4ae6-a6dc-1f9a2c3aeb7b.jpg";
import softenerImg from "@/assets/Adoucisseur_d_eau.png";
import familyWellbeingImg from "@/assets/1713.jpg";
import filtrationImg from "@/assets/2237.jpeg";
import wholeHouseImg from "@/assets/Filtration-eau-de-puits.webp";
import uvImg from "@/assets/Viqua UV System.png";
import fountainImg from "@/assets/Fontaines d'eau.webp";
import waterTestImg from "@/assets/water-test.jpg";
import replacementFilterImg from "@/assets/2148728698.jpg";
import freeSaltImg from "@/assets/free salt conditionner.webp";
import underSinkImg from "@/assets/RO undersink system.jpg";
import economiesImg from "@/assets/Untitled23.png";
import santeImg from "@/assets/kid-playing-bathtub.jpg";
import autoSystemImg from "@/assets/clack-water-softener.webp";

const ResidentialServices = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Solutions d'eau résidentielles | Bricareau";
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
                                className="absolute inset-0 w-full h-full object-cover object-[80%_center] lg:object-right"
                             alt="Résidentiel Excellence - expert en eau" title="Expert en eau par Bricareau" />
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-20"></div>
                    
                    <div className="container mx-auto px-6 relative z-30">
                        <div className="max-w-3xl flex flex-col justify-center">
                            <div className="mb-8">
                                <h1 className="text-[50px] leading-[55px] font-sans font-bold mb-6 tracking-tight">
                                    <span className="text-[#18448F]">L'excellence d'</span>
                                    <span className="text-[#8CC63F]">une eau parfaite,</span><br/>
                                    <span className="text-[#18448F]">au cœur de votre foyer.</span>
                                </h1>
                                
                                <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl">
                                    Transformez l'eau de votre maison en une ressource cristalline, saine et protectrice. Plus de 20 000 familles au Québec nous font confiance.
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
                        <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 items-center">
                            <div className="xl:w-1/2 space-y-10">
                                <div className="inline-flex items-center gap-4">
                                    <span className="w-12 h-[1px] bg-slate-900" />
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">L'ESSENCE DU FOYER</span>
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
                                    <span className="block text-[#8CC63F]">Le bien-être de</span>
                                    <span className="block">
                                        <span className="text-[#8CC63F]">votre famille</span>
                                        <span className="text-blue-600"> avant tout.</span>
                                    </span>
                                </h2>
                                <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                    L'eau est le cœur de votre foyer. Que ce soit pour boire, cuisiner, ou vous laver, sa pureté a un impact direct sur votre confort quotidien et la santé de ceux que vous aimez. Ne laissez plus la qualité de votre eau au hasard.
                                </p>
                            </div>
                            <div className="xl:w-1/2 w-full relative">
                                <div className="aspect-[4/3] min-h-[300px] md:min-h-[400px] w-full max-w-2xl mx-auto relative group overflow-hidden rounded-2xl">
                                    <div className="absolute inset-0 bg-slate-100 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 rounded-2xl" />
                                    <img 
                                        src={familyWellbeingImg} 
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                                     alt="Le bien-être de votre famille - traitement d'eau Québec" title="Traitement d'eau Québec par Bricareau" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. BENTO GRID PORTFOLIO */}
                <section className="relative py-24 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="mb-16 text-center flex flex-col items-center mx-auto">
                            <h2 
                                className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8 max-w-4xl text-center"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '48px',
                                    lineHeight: '52px'
                                }}
                            >
                                <span className="block">
                                    <span className="text-blue-600">Nos solutions de </span>
                                    <span className="text-[#8CC63F]">filtration d'eau</span>
                                </span>
                                <span className="block text-blue-600">
                                    pour votre résidence.
                                </span>
                            </h2>
                            <p className="mt-6 text-slate-500 text-lg font-light leading-relaxed w-full max-w-3xl text-center">
                                Découvrir nos systèmes avancés conçus spécifiquement pour la maison. De l'adoucisseur protégeant votre plomberie à la station d'eau potable ultra-pure pour votre cuisine, Bricareau garantit une qualité irréprochable à chaque robinet.
                            </p>
                        </div>
                        
                        {(() => {
                            const solutionsCards = [
                                {
                                    title: "Adoucisseurs\nd'eau",
                                    subtitle: "ZÉRO CALCAIRE",
                                    desc: "Protégez vos électroménagers et profitez d'un linge plus doux et d'une peau moins asséchée.",
                                    img: softenerImg,
                                    link: "/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire",
                                    className: "lg:row-span-2",
                                    imgClass: "object-cover"
                                },
                                {
                                    title: "Filtres d'eau spécialisés\npour toute la maison",
                                    subtitle: "SÉCURITÉ GLOBALE",
                                    desc: "Une barrière protectrice dès l'entrée d'eau. Éliminez chlore, sédiments et métaux lourds de chaque robinet.",
                                    img: autoSystemImg,
                                    link: "/Systemes-de-filtration-d-eau-specialises-pour-toute-la-maison",
                                    className: "lg:col-span-2",
                                    imgClass: "object-cover"
                                },
                                {
                                    title: "Stations d'eau potable\nsous l'évier",
                                    subtitle: "EAU POTABLE",
                                    desc: "Une eau cristalline à 99% pure pour la boisson et la cuisine.",
                                    img: filtrationImg,
                                    link: "/Stations-d-eau-potables-sous-l-evier-de-la-cuisine",
                                    className: "",
                                    imgClass: "object-cover opacity-50"
                                },
                                {
                                    title: "Systèmes de désinfection\nUV",
                                    subtitle: "STÉRILISATION",
                                    desc: "Neutralise 99,9% des bactéries et virus. Idéal pour l'eau de puits.",
                                    img: uvImg,
                                    link: "/systemes-de-desinfection-uv",
                                    className: "",
                                    imgClass: "object-contain p-10 opacity-50"
                                },
                                {
                                    title: "Fontaines\nd'Eau",
                                    subtitle: "ÉLÉGANCE",
                                    desc: "Eau fraîche, tempérée ou pétillante, avec un design intégré.",
                                    img: fountainImg,
                                    link: "/fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche",
                                    className: "md:col-span-2 lg:col-span-1",
                                    imgClass: "object-cover opacity-90"
                                },
                                {
                                    title: "Filtres de\nRemplacement",
                                    subtitle: "MAINTENANCE",
                                    desc: "Cartouches et pièces pour assurer la longévité de vos systèmes.",
                                    img: replacementFilterImg,
                                    link: "/filtres-d-eau-de-remplacement",
                                    className: "lg:col-span-1",
                                    imgClass: "object-cover"
                                },
                                {
                                    title: "Tests\nd'Eau",
                                    subtitle: "DIAGNOSTIC",
                                    desc: "Analyse professionnelle pour comprendre et résoudre vos problèmes d'eau.",
                                    img: waterTestImg,
                                    link: "/Analyses-et-Tests-d-eau",
                                    className: "lg:col-span-1",
                                    imgClass: "object-cover"
                                }
                            ];

                            return (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
                                    {solutionsCards.map((card, index) => (
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
                                            
                                            {/* Content Panel */}
                                            <div className="relative z-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="flex justify-between items-start mb-4">
                                                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{card.subtitle}</span>
                                                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0 border border-white/20">
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-3 whitespace-pre-line leading-tight">{card.title}</h3>
                                                <p className="text-slate-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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

                {/* 4. LES 3 PILIERS (Z-PATTERN) */}
                <section className="relative py-32 bg-white text-slate-900 overflow-hidden border-t border-slate-100">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none" />
                    
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        {/* Section Header */}
                        <div className="text-center max-w-4xl mx-auto mb-32">
                            <div className="inline-flex items-center justify-center gap-4 mb-8">
                                <span className="w-12 h-[1px] bg-slate-900" />
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">LES AVANTAGES BRICAREAU</span>
                                <span className="w-12 h-[1px] bg-slate-900" />
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
                                <span className="block text-blue-600">Pourquoi investir dans</span>
                                <span className="block">
                                    <span className="text-blue-600">un </span>
                                    <span className="text-[#8CC63F]">système de traitement d'eau ?</span>
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-32">
                            {/* Pilier 1 : Text Left, Image Right */}
                            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-24">
                                {/* Titre Mobile (caché sur tablette et desktop) */}
                                <div className="flex md:hidden items-center gap-6 w-full">
                                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                        <Wallet className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-3xl font-medium tracking-tight text-slate-900">Des économies durables.</h3>
                                </div>
                                <div className="lg:w-1/2 w-full min-h-[300px] md:min-h-[400px] relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                    <img src={economiesImg} className="absolute inset-0 w-full h-full object-cover"  alt="Économies - systèmes d'eau sur mesure" title="Systèmes d'eau sur mesure par Bricareau" />
                                    {/* Titre Tablette (superposé) */}
                                    <div className="hidden md:flex lg:hidden absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex-col justify-end p-8">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                                                <Wallet className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-3xl font-medium tracking-tight text-white"><span className="underline decoration-2 underline-offset-8">Des</span> économies durables.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full space-y-8">
                                    {/* Titre Desktop (caché sur mobile et tablette) */}
                                    <div className="hidden lg:flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <Wallet className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <h3 className="text-3xl font-medium tracking-tight text-slate-900">Des économies durables.</h3>
                                    </div>
                                    <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                                            <p>Réduisez l'utilisation de savons et détergents jusqu'à 50% grâce à une eau adoucie.</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                                            <p>Allongez la durée de vie de vos électroménagers et chauffe-eau en empêchant le tartre.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pilier 2 : Image Left, Text Right */}
                            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
                                {/* Titre Mobile (caché sur tablette et desktop) */}
                                <div className="flex md:hidden items-center gap-6 w-full">
                                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                        <Heart className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-3xl font-medium tracking-tight text-slate-900">Santé et bien-être.</h3>
                                </div>
                                <div className="lg:w-1/2 w-full min-h-[300px] md:min-h-[400px] relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                    <img src={santeImg} className="absolute inset-0 w-full h-full object-cover"  alt="Santé - filtration Bricareau" title="Filtration Bricareau par Bricareau" />
                                    {/* Titre Tablette (superposé) */}
                                    <div className="hidden md:flex lg:hidden absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex-col justify-end p-8">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                                                <Heart className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-3xl font-medium tracking-tight text-white"><span className="underline decoration-2 underline-offset-8">San</span>té et bien-être.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full space-y-8">
                                    {/* Titre Desktop (caché sur mobile et tablette) */}
                                    <div className="hidden lg:flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <Heart className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <h3 className="text-3xl font-medium tracking-tight text-slate-900">Santé et bien-être.</h3>
                                    </div>
                                    <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                                            <p>Fini la peau sèche et les cheveux ternes après la douche.</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                                            <p>Une eau de boisson sans chlore, plomb, et autres contaminants pour toute la famille.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pilier 3 : Text Left, Image Right */}
                            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-24">
                                {/* Titre Mobile (caché sur tablette et desktop) */}
                                <div className="flex md:hidden items-center gap-6 w-full">
                                    <div className="w-16 h-16 rounded-full bg-[#8CC63F]/10 flex items-center justify-center shrink-0">
                                        <Leaf className="w-8 h-8 text-[#8CC63F]" />
                                    </div>
                                    <h3 className="text-3xl font-medium tracking-tight text-slate-900">Un choix écologique.</h3>
                                </div>
                                <div className="lg:w-1/2 w-full min-h-[300px] md:min-h-[400px] relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                    <img src={fountainImg} className="absolute inset-0 w-full h-full object-cover"  alt="Écologie - traitement d'eau Québec" title="Traitement d'eau Québec par Bricareau" />
                                    {/* Titre Tablette (superposé) */}
                                    <div className="hidden md:flex lg:hidden absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex-col justify-end p-8">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                                                <Leaf className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-3xl font-medium tracking-tight text-white"><span className="underline decoration-2 underline-offset-8">Un </span>choix écologique.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full space-y-8">
                                    {/* Titre Desktop (caché sur mobile et tablette) */}
                                    <div className="hidden lg:flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-[#8CC63F]/10 flex items-center justify-center shrink-0">
                                            <Leaf className="w-8 h-8 text-[#8CC63F]" />
                                        </div>
                                        <h3 className="text-3xl font-medium tracking-tight text-slate-900">Un choix écologique.</h3>
                                    </div>
                                    <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] mt-3 shrink-0" />
                                            <p>Dites adieu aux bouteilles en plastique et réduisez considérablement vos déchets domestiques.</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] mt-3 shrink-0" />
                                            <p>Des systèmes conçus pour être ultra-efficaces et réduire le gaspillage d'eau.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. EXPERT TRUST SECTION */}
                <div className="border-t border-slate-100">
                    <ExpertTrustSection />
                </div>

                {/* 6. TESTIMONIALS */}
                <div className="bg-slate-50 py-32 border-y border-gray-100">
                    <TestimonialsSection 
                        filterProduct="/"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16">
                                <div className="inline-flex items-center justify-center gap-4 mb-4">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">L'EXPÉRIENCE BRICAREAU</span>
                                </div>
                                <h2 
                                    className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8 mx-auto"
                                    style={{
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        fontSize: '48px',
                                        lineHeight: '52px',
                                    }}
                                >
                                    <span className="block text-blue-600">Une famille satisfaite</span>
                                    <span className="block text-[#8CC63F]">après l'autre.</span>
                                </h2>
                            </div>
                        }
                    />
                </div>
                {/* 7. WATER DIAGNOSIS */}
                <WaterDiagnosis />
            </main>

            <Footer />
        </div>
    );
};

export default ResidentialServices;
