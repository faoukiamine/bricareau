import React, { useEffect } from "react";
import { 
    Phone,
    ShieldCheck,
    Droplets,
    Leaf,
    Heart,
    Activity,
    Wallet,
    GlassWater,
    Settings,
    Users2,
    Zap,
    Building2,
    Star,
    TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpertTrustSection from "@/components/ExpertTrustSection";
import WaterDiagnosis from "@/components/water_diagnosis";
import TestimonialsSection from "@/components/TestimonialsSection";

// Assets
import heroImg from "@/assets/Hero-Entreprise.jpg";
import drinkWaterImg from "@/assets/20230add-4ce5-4ae6-a6dc-1f9a2c3aeb7b.jpg";
import centralSystemImg from "@/assets/LZS8WSSP-PF.webp";
import pauseEauImg from "@/assets/Pause-eau.jpg";
import hydratationImg from "@/assets/8456.jpg";
import ecoCorporateImg from "@/assets/2228.jpg";
import corporateExpertImg from "@/assets/4428cdd0-67df-4075-b0ba-d69247eb98dc.jpg";

const Bureau = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Solutions d'eau pour Bureaux | Bricareau";
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
                        {/* Desktop Gradient: fade over the text area */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 hidden lg:block w-[50%]"></div>
                        
                        <div className="absolute right-0 top-0 w-full h-full lg:w-[65%]">
                            {/* Inner gradient to blend the hard edge on desktop */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10 hidden lg:block w-1/3"></div>
                            <img 
                                src={heroImg} 
                                alt="Solutions Bureaux & Corporatives" 
                                className="absolute inset-0 w-full h-full object-cover object-center lg:object-right"
                            />
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-20"></div>
                    
                    <div className="container mx-auto px-6 relative z-30">
                        <div className="max-w-3xl flex flex-col justify-center">
                            <div className="mb-8">
                                <h1 className="text-[50px] leading-[55px] font-sans font-bold mb-6 tracking-tight">
                                    <span className="text-[#8CC63F]">L'excellence de l'eau,</span><br/>
                                    <span className="text-[#18448F]">au service de vos équipes.</span>
                                </h1>
                                
                                <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl">
                                    Optimisez le bien-être de vos équipes avec des solutions d'hydratation premium, écologiques et sans logistique encombrante.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row items-start gap-6 mb-16">
                                <div className="relative inline-block w-full sm:w-auto group">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <button
                                        className="relative flex items-center justify-center w-full sm:w-auto bg-[#18448F] text-white hover:bg-transparent hover:text-[#18448F] border border-[#18448F] rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all"
                                        onClick={() => navigate("/consultation")}
                                    >
                                        CONSULTATION CORPORATIVE GRATUITE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. INTRO SECTION */}
                <section className="relative py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            {/* Intro Text (Left) */}
                            <div className="w-full lg:w-1/2 space-y-8 relative z-10">
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
                                    <span className="block text-[#8CC63F]">L'hydratation premium,</span>
                                    <span className="block text-blue-600">pensée pour l'entreprise.</span>
                                </h2>
                                
                                <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl">
                                    "Un collaborateur bien hydraté est un collaborateur concentré et performant au quotidien." Éliminez la logistique des bonbonnes d'eau et offrez une eau filtrée, pure, directement depuis votre réseau, pour le plus grand confort de vos équipes.
                                </p>

                                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                                    <div className="space-y-3">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                                            <Users2 className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 uppercase tracking-tight text-sm">Bien-être Équipe</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">Renforcez la qualité de vie au travail grâce à une eau pure, disponible à volonté.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="w-12 h-12 rounded-2xl bg-[#8CC63F]/10 flex items-center justify-center">
                                            <TrendingUp className="w-6 h-6 text-[#8CC63F]" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 uppercase tracking-tight text-sm">Performance</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">Maintenez le focus de vos talents tout au long de la journée.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Intro Image (Right) */}
                            <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
                                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <img 
                                        src={hydratationImg} 
                                        alt="Une hydratation sans compromis" 
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                                </div>
                                {/* Floating Badge */}
                                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl animate-float hidden md:block border border-slate-50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                                            <Leaf className="w-6 h-6 text-[#8CC63F]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ENGAGEMENT RSE</p>
                                            <p className="font-bold text-slate-900">Zéro Plastique</p>
                                        </div>
                                    </div>
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
                                    <span className="text-blue-600">Nos solutions d'eau </span>
                                    <span className="text-[#8CC63F]">corporatives</span>
                                </span>
                                <span className="block text-blue-600">
                                    pour vos locaux.
                                </span>
                            </h2>
                            <p className="mt-6 text-slate-500 text-lg font-light leading-relaxed w-full max-w-3xl text-center">
                                Des fontaines modernes aux systèmes centralisés pour tours de bureaux, nous offrons une technologie de purification avancée adaptée aux exigences des entreprises.
                            </p>
                        </div>

                        {/* Bento Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-[400px] lg:auto-rows-[600px]">
                            {/* Card 1: Fontaines d'Eau Modernes */}
                            <div 
                                className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col justify-end p-8 lg:p-12"
                                onClick={() => navigate("/fontaines-deau-modernes")}
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                                    <img src={drinkWaterImg} alt="Fontaines d'Eau Modernes" className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                                </div>
                                <div className="relative z-10 space-y-4 mt-auto">
                                    <span className="text-[10px] font-black text-[#8CC63F] uppercase tracking-widest">EAU FRAÎCHE & CHAUDE</span>
                                    <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Fontaines d'eau<br/>modernes</h3>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                                        Éliminez la logistique des bouteilles. Nos fontaines branchées au réseau offrent une eau filtrée en continu pour vos espaces collaboratifs.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Systèmes Centralisés */}
                            <div 
                                className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col justify-end p-8 lg:p-12"
                                onClick={() => navigate("/systemes-centralises")}
                            >
                                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                                    <img src={centralSystemImg} alt="Systèmes Centralisés" className="w-full h-full object-contain p-12 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" />
                                </div>
                                <div className="relative z-10 space-y-4 mt-auto">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">HAUTE CAPACITÉ</span>
                                    <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Systèmes de filtration<br/>centralisés</h3>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                                        Pour les tours de bureaux et grands complexes, nous installons des systèmes de filtration centralisés dimensionnés pour de grands volumes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. AVANTAGES CORPORATIFS (PILIERS) */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="mb-20 text-center flex flex-col items-center mx-auto">
                            <span className="inline-block py-1 px-4 bg-[#18448F] text-white rounded-full font-bold tracking-[0.2em] uppercase text-xs mb-6">Avantages Corporatifs</span>
                            <h2 className="heading-pro-max">
                                <span className="font-bold not-italic text-[#18448F] block">Pourquoi adopter nos solutions</span>
                                <span className="font-bold text-[#8CC63F] block">pour vos bureaux ?</span>
                            </h2>
                        </div>
                        <div className="space-y-32">
                            {/* Pilier 1 : Image Left, Text Right */}
                            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                                <div className="lg:w-1/2 w-full min-h-[300px] md:min-h-[400px] relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                    <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay z-10" />
                                    <img src={pauseEauImg} alt="Technologie Avancée" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="lg:w-1/2 w-full space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <h3 className="text-3xl font-medium tracking-tight text-slate-900">L'eau parfaite, tout simplement.</h3>
                                    </div>
                                    <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                                            <p>Élimination de 99.9% des impuretés, du chlore et des métaux lourds.</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                                            <p>Une expérience de dégustation premium, idéale pour le café et le thé au bureau.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pilier 2 : Text Left, Image Right */}
                            <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
                                <div className="lg:w-1/2 w-full space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-[#8CC63F]/10 flex items-center justify-center shrink-0">
                                            <Leaf className="w-8 h-8 text-[#8CC63F]" />
                                        </div>
                                        <h3 className="text-3xl font-medium tracking-tight text-slate-900">Écologie et RSE.</h3>
                                    </div>
                                    <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] mt-3 shrink-0" />
                                            <p>Supprimez totalement l'utilisation de bouteilles et de verres en plastique jetables.</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] mt-3 shrink-0" />
                                            <p>Une démarche concrète pour améliorer le bilan carbone de votre entreprise.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full min-h-[300px] md:min-h-[400px] relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                    <img src={ecoCorporateImg} alt="Écologie et RSE" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 6. TESTIMONIALS */}
                <div className="bg-slate-50 py-32 border-y border-gray-100">
                    <TestimonialsSection 
                        filterProduct="Bureau"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16">
                                <div className="inline-flex items-center justify-center gap-4 mb-4">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">ILS NOUS FONT CONFIANCE</span>
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
                                    <span className="block text-blue-600">Le choix des</span>
                                    <span className="block text-[#8CC63F]">entreprises leaders.</span>
                                </h2>
                            </div>
                        }
                    />
                </div>

                {/* 5. EXPERT TRUST SECTION */}
                <div className="border-t border-slate-100">
                    <ExpertTrustSection 
                        title="L'expertise au service du corporatif, "
                        highlight="la performance dans chaque goutte."
                        description="Garantissez le bien-être de vos collaborateurs et la longévité de vos infrastructures. Chez Bricareau, nous transformons chaque analyse en un levier stratégique pour la qualité de vie au travail et l'excellence opérationnelle de votre organisation."
                        buttonText="Demandez une consultation corporative"
                        buttonLink="/consultation"
                        image={corporateExpertImg}
                    />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Bureau;
