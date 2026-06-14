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
import filtrationImg from "@/assets/Sérénité Direct-Flow installation.png";
import wholeHouseImg from "@/assets/Filtration-eau-de-puits.webp";
import uvImg from "@/assets/VH200-F10-265x300.jpg";
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
                    <div className="absolute inset-0 w-full h-full opacity-40 lg:opacity-100">
                        {/* Mobile Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent z-10 lg:hidden"></div>
                        {/* Desktop Gradient: 1/3 solid white, fading to transparent */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,white_12.5%,rgba(255,255,255,0)_100%)] z-10 hidden lg:block"></div>
                        
                        <div className="absolute right-0 top-0 w-full h-full">
                            <img 
                                src={heroImg} 
                                alt="Résidentiel Excellence" 
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
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
                                        alt="Le bien-être de votre famille" 
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                                    />
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
                                Découvrez nos systèmes avancés conçus spécifiquement pour la maison. De l'adoucisseur protégeant votre plomberie à la station d'eau potable ultra-pure pour votre cuisine, Bricareau garantit une qualité irréprochable à chaque robinet.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                            {/* Card 1: Adoucissement (Tall) */}
                            <div 
                                className="group relative bg-white lg:row-span-2 rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col justify-end p-8 lg:p-12"
                                onClick={() => navigate("/A")}
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                                    <img src={softenerImg} alt="Adoucissement Résidentiel" className="w-full h-full object-cover opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" />
                                </div>
                                <div className="relative z-10 space-y-4 mt-auto">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">ZÉRO CALCAIRE</span>
                                    <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Adoucisseurs<br/>d'eau</h3>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                                        Protégez vos électroménagers et profitez d'un linge plus doux et d'une peau moins asséchée.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Filtration Maison (Wide) */}
                            <div 
                                className="group relative bg-white lg:col-span-2 rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col justify-center p-8 lg:p-12"
                                onClick={() => navigate("/B")}
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                                    <img src={autoSystemImg} alt="Filtres Maison Automatiques" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
                                </div>
                                <div className="relative z-10 max-w-md space-y-4">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">SÉCURITÉ GLOBALE</span>
                                    <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Filtres d'eau spécialisés<br/>pour toute la maison</h3>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                                        Une barrière protectrice dès l'entrée d'eau. Éliminez chlore, sédiments et métaux lourds de chaque robinet.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3: Osmose (Square) */}
                            <div 
                                className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col justify-end p-8"
                                onClick={() => navigate("/C")}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 space-y-2 mt-auto w-[65%]">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">EAU POTABLE</span>
                                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Stations d'eau potable<br/>sous l'évier</h3>
                                    <p className="text-slate-500 text-xs font-light leading-relaxed">
                                        Une eau cristalline à 99% pure pour la boisson et la cuisine.
                                    </p>
                                </div>
                                <img src={filtrationImg} alt="Osmose" className="absolute right-0 bottom-0 h-[70%] object-contain transition-transform duration-500 group-hover:scale-105 mix-blend-multiply z-0" />
                            </div>

                            {/* Card 4: UV (Square) */}
                            <div 
                                className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col justify-end p-8"
                                onClick={() => navigate("/systemes-de-desinfection-uv")}
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                                    <img src={uvImg} alt="UV" className="w-full h-full object-contain p-12 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                                </div>
                                <div className="flex justify-between items-start relative z-10">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">STÉRILISATION</span>
                                </div>
                                <div className="space-y-2 relative z-10">
                                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Systèmes de désinfection<br/>UV</h3>
                                    <p className="text-slate-500 text-xs font-light leading-relaxed">
                                        Neutralise 99,9% des bactéries et virus. Idéal pour l'eau de puits.
                                    </p>
                                </div>
                            </div>

                            {/* Card 5: Fontaines (Square) */}
                            <div 
                                className="group relative bg-white md:col-span-2 lg:col-span-1 rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col justify-end p-8"
                                onClick={() => navigate("/fontaines")}
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                                    <img src={fountainImg} alt="Fontaines" className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-white/80 to-transparent" />
                                </div>
                                <div className="relative z-10 space-y-4">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">ÉLÉGANCE</span>
                                    <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Fontaines<br/>d'Eau</h3>
                                    <p className="text-slate-600 font-medium text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
                                        Eau fraîche, tempérée ou pétillante, avec un design intégré.
                                    </p>
                                </div>
                            </div>

                            {/* Card 6: Filtres de remplacement (Square) */}
                            <div 
                                className="group relative bg-white lg:col-span-1 rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col justify-end p-8"
                                onClick={() => navigate("/filtres-de-remplacement")}
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                                    <img src={replacementFilterImg} alt="Filtres remplacement" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                                </div>
                                <div className="relative z-10 space-y-4">
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">MAINTENANCE</span>
                                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Filtres de<br/>Remplacement</h3>
                                    <p className="text-white/80 font-medium text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
                                        Cartouches et pièces pour assurer la longévité de vos systèmes.
                                    </p>
                                </div>
                            </div>

                            {/* Card 7: Tests d'eau (Square) */}
                            <div 
                                className="group relative bg-white lg:col-span-1 rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col justify-end p-8"
                                onClick={() => navigate("/tests-eau")}
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                                    <img src={waterTestImg} alt="Tests d'eau" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                                </div>
                                <div className="relative z-10 space-y-4">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">DIAGNOSTIC</span>
                                    <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Tests<br/>d'Eau</h3>
                                    <p className="text-slate-600 font-medium text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
                                        Analyse professionnelle pour comprendre et résoudre vos problèmes d'eau.
                                    </p>
                                </div>
                            </div>
                        </div>
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
                            {/* Pilier 1 : Image Left, Text Right */}
                            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
                                <div className="flex lg:hidden items-center gap-6 w-full">
                                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                        <Wallet className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-3xl font-medium tracking-tight text-slate-900">Des économies durables.</h3>
                                </div>
                                <div className="lg:w-1/2 w-full min-h-[300px] md:min-h-[400px] relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                    <img src={economiesImg} alt="Économies" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="lg:w-1/2 w-full space-y-8">
                                    <div className="hidden lg:flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <Wallet className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <h3 className="text-3xl font-medium tracking-tight text-slate-900">Des économies durables.</h3>
                                    </div>
                                    <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] mt-3 shrink-0" />
                                            <p>Réduisez l'utilisation de savons et détergents jusqu'à 50% grâce à une eau adoucie.</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                                            <p>Allongez la durée de vie de vos électroménagers et chauffe-eau en empêchant le tartre.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pilier 2 : Text Left, Image Right */}
                            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-24">
                                <div className="flex lg:hidden items-center gap-6 w-full">
                                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                        <Heart className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-3xl font-medium tracking-tight text-slate-900">Santé et bien-être.</h3>
                                </div>
                                <div className="lg:w-1/2 w-full min-h-[300px] md:min-h-[400px] relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                    <img src={santeImg} alt="Santé" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="lg:w-1/2 w-full space-y-8">
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

                            {/* Pilier 3 : Image Left, Text Right */}
                            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
                                <div className="flex lg:hidden items-center gap-6 w-full">
                                    <div className="w-16 h-16 rounded-full bg-[#8CC63F]/10 flex items-center justify-center shrink-0">
                                        <Leaf className="w-8 h-8 text-[#8CC63F]" />
                                    </div>
                                    <h3 className="text-3xl font-medium tracking-tight text-slate-900">Un choix écologique.</h3>
                                </div>
                                <div className="lg:w-1/2 w-full min-h-[300px] md:min-h-[400px] relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                    <img src={fountainImg} alt="Écologie" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="lg:w-1/2 w-full space-y-8">
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
