import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import {
    ChevronRight,
    CheckCircle2,
    X,
    Wrench,
    GlassWater,
    HandCoins,
    Recycle,
    Phone,
    Play,
    ZapOff,
    CircleDollarSign,
    Sparkles,
    Shirt,
    Beaker,
    Droplets,
    Microscope,
    AlertTriangle,
    ShieldAlert,
    FlaskConical
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import heroFiltration from "@/assets/2149890905.jpg";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import teenagerShowerImg from "@/assets/teenager-taking-shower-reduce-hangover-effect.jpg";
import undersinkSystemImg from "@/assets/Triple Stage Filter.jpg";
import africanGirlImg from "@/assets/african-girl-stands-kitchen-drinks-water.jpg";
import glassOfWaterImg from "@/assets/glass-of-water.jpeg";
import waterTestingImg from "@/assets/Legionella-Monitoring.webp";
import { heroImg as filtreSousEvierImg } from "./Blog pages/Filtre-sous-evier-lalternative-simple-aux-pichets-filtrants";
import { heroImg as healthwaterImg } from "./Blog pages/Eau-embouteillee-les-dangers-meconnus-pour-votre-sante-au-quotidien";
import { heroImg as rowaterImg } from "./Blog pages/Osmose-inverse-la-technologie-derriere-une-eau-100-pure";
import ourteamstudyyourwaterImg from "@/assets/10271.jpg";
import dechetbouteilleImg from "@/assets/20051.jpg";
import eauinnondiationImg from "@/assets/geiser-breaking-images-du-geiser-au-grand-angle-plus-14-photos-en-bref.jpeg";
import oldpipesImg from "@/assets/Old Pipes.jpg";
import glassofwaterImg from "@/assets/2151358994.jpg";
import waterDropsImg from "@/assets/water_drops.svg";
import ecoImg from "@/assets/eco.svg";
import cheerImg from "@/assets/cheer.svg";
import countertopsImg from "@/assets/countertops.svg";
import verifiedImg from "@/assets/verified.svg";
import hotelClassImg from "@/assets/hotel_class.svg";
import contaminatedwaterImg from "@/assets/2148926639.jpg";
import arrowDownIcon from "@/assets/keyboard_double_arrow_down.svg";
import arrowUpIcon from "@/assets/keyboard_double_arrow_up.svg";


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Filtration = () => {
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    const [showAllHarms, setShowAllHarms] = React.useState(false);
    const navigate = useNavigate();

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);
    useEffect(() => {
        document.title = "Filtration d'eau : Une pureté maximale pour votre maison";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez nos systèmes de filtration d'eau pour toute la maison. Éliminez les contaminants et améliorez le goût de votre eau avec Bricareau.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Filtration d'eau : Pureté maximale | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Une eau pure à chaque robinet. Investissez dans la santé de votre famille avec nos solutions de filtration avancées.");
    }, []);


    const comparisonData = [
        { feature: "Installation", whole: "Point d'entrée", basic: "Sous l'évier" },
        { feature: "Portée de filtration", whole: "Toute la maison", basic: "Point d'utilisation" },
        { feature: "Élimine sédiments, chlore et odeurs", whole: true, basic: true },
        { feature: "Traitement spécialisé (Fer, Soufre, Manganèse)", whole: true, basic: false },
        { feature: "Élimination plomb, arsenic et métaux lourds", whole: false, basic: true },
        { feature: "Pureté de l'eau (99% sans contaminants)", whole: false, basic: true },
        { feature: "Rinçage et entretien du média", whole: "Automatique", basic: "Manuel (Cartouches)" },
        { feature: "Changement de membrane périodique", whole: false, basic: true },
        { feature: "Goût d'une eau embouteillée premium", whole: true, basic: "Supérieur" },
        { feature: "Emplacement courant", whole: "Salle mécanique", basic: "Cuisine" },
    ];

    return (

        <div className="min-h-screen bg-background text-slate-900 font-sans">
            <Header />
            <main>
                <Hero 
                    image={heroFiltration}
                    highlightedTitle="Filtration d'eau résidentielle"
                    mainTitle="L'excellence pour votre santé."
                    subtitle="Ne laissez plus les contaminants couler de vos robinets. Nos systèmes de filtration d'eau avancés constituent un bouclier durable pour votre maison, vous garantissant une eau d'une pureté irréprochable pour toute votre famille au Canada."
                    showPhone={true}
                    showBreadcrumbs={true}
                />

                {/* 2. The Problem Section */}
                <section className="py-32 bg-slate-50 relative overflow-hidden">
                    {/* Architectural Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[22rem] font-black text-slate-200/20 select-none pointer-events-none tracking-tighter z-0 uppercase">
                        PURETÉ
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                            {/* Left Column: Analytical Narrative */}
                            <div className="lg:col-span-5 space-y-8">
                                <div>
                                    <h2 className="heading-pro-max text-left mb-8">
                                        <span className="italic font-light text-[#2563eb] block">L'invisible dans</span>
                                        <span className="font-bold text-[#1e3a8a] block">votre verre d'eau</span>
                                    </h2>
                                    <p className="body-pro-max mb-8 max-w-xl text-left">
                                        L'eau municipale est traitée, mais elle n'est pas pure. Entre l'usine de traitement et votre robinet, elle transporte des résidus invisibles qui impactent votre santé.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-6 overflow-hidden transition-all duration-700">
                                    {[
                                        {
                                            title: "Chlore",
                                            desc: "Un agent de désinfection nécessaire mais agressif qui altère le goût de vos boissons et assèche votre peau."
                                        },
                                        {
                                            title: "Traces de Plomb",
                                            desc: "Résidus provenant des anciennes tuyauteries municipales qui persistent malgré les traitements."
                                        },
                                        {
                                            title: "Microplastiques",
                                            desc: "L'ingestion involontaire de milliers de particules microscopiques présentes dans l'eau potable chaque année."
                                        },
                                        {
                                            title: "Polluants Éternels",
                                            desc: "PFAS et hormones que les centres de traitement n'arrivent pas encore à filtrer totalement."
                                        },
                                        {
                                            title: "Sédiments & Rouille",
                                            desc: "Particules physiques provenant de la vétusté du réseau d'aqueduc qui s'accumulent chez vous."
                                        },
                                        {
                                            title: "Produits Chimiques",
                                            desc: "Résidus industriels et agricoles qui s'infiltrent dans les nappes et le cycle de l'eau."
                                        }
                                    ].filter((_, idx) => showAllHarms || idx < 3).map((harm, idx) => (
                                        <div key={idx} className="group flex items-start gap-4 p-2 rounded-3xl transition-colors hover:bg-slate-50 animate-in fade-in slide-in-from-top-4 duration-500">
                                            <div className="flex h-7 flex-shrink-0 items-center">
                                                <span className="text-3xl font-bold text-blue-600/20 group-hover:text-blue-600 transition-colors duration-500 leading-none -mt-1">
                                                    -
                                                </span>
                                            </div>
                                            <div className="space-y-0.5">
                                                <h3 className="text-lg font-bold text-blue-600/20 group-hover:text-blue-600 transition-colors duration-500 mb-1">{harm.title}</h3>
                                                <p className="text-slate-500 font-light text-sm leading-snug max-w-sm">
                                                    {harm.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 flex justify-center">
                                    <button
                                        onClick={() => setShowAllHarms(!showAllHarms)}
                                        className="flex items-center gap-2 text-blue-600 hover:scale-125 transition-all group"
                                        title={showAllHarms ? "Voir moins" : "Voir plus"}
                                    >
                                        <img 
                                            src={showAllHarms ? arrowUpIcon : arrowDownIcon} 
                                            className="w-10 h-10" 
                                            style={{ filter: 'invert(32%) sepia(96%) saturate(3015%) hue-rotate(212deg) brightness(97%) contrast(96%)' }}
                                            alt={showAllHarms ? "Voir moins" : "Voir plus"}
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Right Column: Cinematic Slideshow */}
                            <div className="lg:col-span-7 relative lg:sticky lg:top-32 -mx-6 lg:mx-0">
                                <div className="relative rounded-none lg:rounded-[3rem] overflow-hidden shadow-2xl border-0 lg:border-8 border-white group">
                                    <div className="embla overflow-hidden" ref={emblaRef}>
                                        <div className="embla__container flex">
                                            {[glassofwaterImg, healthwaterImg, dechetbouteilleImg, oldpipesImg, eauinnondiationImg, contaminatedwaterImg].map((img, idx) => (
                                                <div key={idx} className="embla__slide flex-[0_0_100%] min-w-0 relative h-[400px] md:h-[500px] lg:h-[600px]">
                                                    <img
                                                        src={img}
                                                        alt={`Problématique eau municipale ${idx + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Pagination Buttons - Premium Glass Style */}
                                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30 bg-black/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 shadow-2xl transition-all hover:bg-black/20 group-hover:bottom-10">
                                        {scrollSnaps.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => emblaApi?.scrollTo(index)}
                                                className={cn(
                                                    "h-1.5 rounded-full transition-all duration-500",
                                                    index === selectedIndex 
                                                        ? "bg-white w-8 shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                                                        : "bg-white/30 w-1.5 hover:bg-white/60"
                                                )}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. The Redesigned Bridge Section: Architectural Triptych */}
                <section className="py-32 bg-[#f8f9fa] relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
                            <h2 className="heading-pro-max">
                                <span className="italic font-light text-[#2563eb] block">De la prise de conscience</span>
                                <span className="font-bold text-[#1e3a8a] block ">à la solution parfaite</span>
                            </h2>
                            <p className="body-pro-max max-w-2xl mx-auto">
                                Identifier l'invisible est la première étape. Choisissez maintenant le bouclier technologique qui redéfinira la relation de votre foyer avec l'eau.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            
                            {/* Card 001: Whole House - Navy Style */}
                            <a href="#solutions-title" className="group block relative bg-[#1e3a8a] rounded-[2.5rem] p-10 h-[720px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                <div className="space-y-0 relative z-10 flex flex-col h-full">
                                    
                                    {/* 80px Spacer */}
                                    <div className="h-20"></div>

                                    {/* Unfiltered Architectural Image Overlay */}
                                    <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg relative">
                                        <img 
                                            src={teenagerShowerImg} 
                                            alt="Eau filtrée toute la maison" 
                                            className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="space-y-6 pt-8">
                                        <h3 className="text-3xl font-bold text-white leading-[1.1] group-hover:text-blue-200 transition-colors">
                                            Systèmes de filtration d'eau pour <br/> toute la maison
                                        </h3>
                                        <p className="text-white/70 text-sm leading-relaxed max-w-[260px]">
                                            Une protection globale qui neutralise le chlore et les sédiments dès l'entrée de votre demeure.
                                        </p>
                                    </div>
                                </div>
                                {/* Floating Arrow Button Custom Cutout Style */}
                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#f8f9fa] rounded-tl-[3rem] transition-all group-hover:w-28 group-hover:h-28">
                                    <div className="absolute inset-0 m-4 bg-[#2563eb] rounded-full flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
                                        <ChevronRight className="w-8 h-8" />
                                    </div>
                                </div>
                            </a>

                            {/* Card 002: Crystal Purity - Royal Blue Style */}
                            <a href="#undersink-title" className="group block relative bg-[#2563eb] rounded-[2.5rem] p-10 h-[720px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                <div className="space-y-0 relative z-10 flex flex-col h-full">
                                    

                                    {/* 80px Spacer */}
                                    <div className="h-20"></div>

                                    <div className="space-y-6">
                                        <h3 className="text-3xl font-bold text-white leading-[1.1]">
                                            Systèmes d'osmose inverse
                                        </h3>
                                        <p className="text-white/80 text-sm leading-relaxed max-w-[260px]">
                                            L'osmose inverse : la technologie d'élite pour une eau de dégustation pure, sans contaminants.
                                        </p>
                                        <div className="space-y-4 pt-4"></div>

                                    </div>

                                    {/* Unfiltered Architectural Image Overlay - After Paragraph */}
                                    <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg mt-8 relative">
                                        <img 
                                            src={glassOfWaterImg} 
                                            alt="Pureté cristalline" 
                                            className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                                
                                {/* Floating Arrow Button Custom Cutout Style */}
                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#f8f9fa] rounded-tl-[3rem] transition-all group-hover:w-28 group-hover:h-28">
                                    <div className="absolute inset-0 m-4 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
                                        <ChevronRight className="w-8 h-8" />
                                    </div>
                                </div>
                            </a>

                            {/* Card 003: Under-Sink Systems - Navy Patterned */}
                            <a href="#compact-filtration-title" className="group block relative bg-[#1e3a8a] rounded-[2.5rem] p-10 h-[720px] flex flex-col transition-all duration-700 hover:-translate-y-4 shadow-2xl overflow-hidden">
                                {/* Subtle Geometric Pattern Overlay (SVG pattern or Image) */}
                                <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                                    <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] lg:[background-size:30px_30px]" />
                                </div>

                                <div className="relative z-10 space-y-0 flex flex-col h-full">
                                    

                                    {/* 80px Spacer */}
                                    <div className="h-20"></div>

                                    {/* Unfiltered Architectural Image Overlay */}
                                    <div className="w-full h-48 overflow-hidden rounded-3xl shadow-lg relative">
                                        <img 
                                            src={undersinkSystemImg} 
                                            alt="Systèmes de filtration d'eau sous l'évier" 
                                            className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="space-y-6 pt-8">
                                        <h3 className="text-3xl font-bold text-white leading-[1.1] group-hover:text-blue-200 transition-colors">
                                            Systèmes de filtration d'eau <br/> sous l'évier.
                                        </h3>
                                        <p className="text-white/70 text-sm leading-relaxed max-w-[260px]">
                                            Des solutions compactes conçues pour s'intégrer harmonieusement sous votre évier sans compromettre l'espace.
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Floating Arrow Button Custom Cutout Style */}
                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#f8f9fa] rounded-tl-[3rem] transition-all group-hover:w-28 group-hover:h-28">
                                    <div className="absolute inset-0 m-4 bg-[#2563eb] rounded-full flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
                                        <ChevronRight className="w-8 h-8" />
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                </section>
                {/* 4. Whole House Water Filter Section - Modern Editorial */}
                <section className="relative py-32 bg-white overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-0" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                            {/* Left Side: Creative Image Stack */}
                            <div className="w-full lg:w-1/2 relative -mx-6 lg:mx-0">
                                <div className="relative group">
                                    {/* Main Hero Image */}
                                    <div className="relative z-10 rounded-none lg:rounded-[3rem] overflow-hidden aspect-[4/5] shadow-none lg:shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                                        <img
                                            src={teenagerShowerImg}
                                            alt="Douche sous eau filtrée Bricareau - Protection de la peau et des cheveux"
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                                    </div>

                                    {/* Floating Detail Card */}
                                    <div className="absolute -bottom-10 -right-6 md:-right-10 z-20 bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/50 max-w-[280px] hidden md:block animate-float">
                                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
                                            <img src={hotelClassImg} className="h-6 w-6 brightness-0 invert" alt="Qualité Hôtelière" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Qualité Hôtelière</h4>
                                        <p className="text-sm text-slate-500 font-light leading-relaxed">
                                            Une eau d'une pureté exceptionnelle pour vos salles de bain de luxe.
                                        </p>
                                    </div>

                                    {/* Background decorative square */}
                                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/5 rounded-[3rem] -z-10 animate-pulse" />
                                </div>
                            </div>

                            {/* Right Side: Content Editorial */}
                            <div className="w-full lg:w-1/2 lg:pl-4">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                                            PROTECTION & SANTÉ
                                        </span>
                                         <h2 id="solutions-title" className="heading-pro-max text-left mb-8 scroll-mt-[120px]">
                                            <span className="italic font-light text-[#2563eb] block">Eau filtrée pour toute la maison</span>
                                        </h2>
                                         
                                        <p className="body-pro-max text-justify max-w-xl">
                                            Les filtres d’eau pour toute la maison sont installés directement sur l’arrivée principale d’eau. Ils filtrent toute l’eau qui circule dans la maison : cuisine, salles de bain, buanderie, robinets extérieurs, etc. Ils sont idéaux pour réduire les sédiments, le sable, certaines odeurs et goûts (comme le chlore) et protéger la plomberie et les appareils.                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        {[
                                            { title: "Protection de la plomberie", desc: "Dites adieu au chlore résiduel et aux sédiments qui corrodent vos précieux appareils." },
                                            { title: "Clarté de l'eau", desc: "Une eau limpide à chaque robinet, protégeant l'éclat de vos sanitaires et de votre linge." },
                                            { title: "Performance longue durée", desc: "Une technologie haute fidélité offrant une filtration efficace pendant 5 à 7 ans sans entretien lourd." }
                                        ].map((item, i) => (
                                            <div key={i} className="group flex items-start gap-4 p-2 rounded-3xl transition-colors hover:bg-slate-50">
                                                <div className="text-2xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors pt-1">
                                                    0{i + 1}
                                                </div>
                                                <div className="space-y-0.5">
                                                    <h3 className="text-xl font-bold tracking-tight text-blue-600/20 group-hover:text-blue-600 transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-slate-500 font-light text-sm leading-relaxed max-w-sm">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-8 flex flex-col sm:flex-row gap-6">
                                        <NavLink to="/filtres-deau-pour-toute-la-maison" className="w-full sm:w-auto">
                                            <Button asChild>
                                                <NavLink to="/filtres-deau-pour-toute-la-maison" className="flex items-center">
                                                    Voir nos filtres d'eau
                                                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                                </NavLink>
                                            </Button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Reverse Osmosis Water Filtration Section - Modern Editorial */}
                <section className="relative py-32 bg-gray-50 overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-0" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">

                            {/* Right Side: Creative Image Stack */}
                            <div className="w-full lg:w-1/2 relative -mx-6 lg:mx-0">
                                <div className="relative group">
                                    {/* Main Hero Image */}
                                    <div className="relative z-10 rounded-none lg:rounded-[3rem] overflow-hidden aspect-[4/5] shadow-none lg:shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                                        <img
                                            src={glassOfWaterImg}
                                            alt="Verre d'eau pure provenant d'un système d'osmose inverse Bricareau"
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Floating Detail Card */}
                                    <div className="absolute -bottom-10 -left-6 md:-left-10 z-20 bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/50 max-w-[280px] hidden md:block animate-float">
                                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
                                            <img src={verifiedImg} className="h-6 w-6 brightness-0 invert" alt="Pureté Certifiée" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Pureté Certifiée</h4>
                                        <p className="text-sm text-slate-500 font-light leading-relaxed">
                                            Élimine 99% des contaminants pour une eau d'une clarté de diamant.
                                        </p>
                                    </div>

                                    {/* Background decorative square */}
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-[3rem] -z-10 animate-pulse" />
                                </div>
                            </div>

                            {/* Left Side: Content Editorial */}
                            <div className="w-full lg:w-1/2 lg:pr-4">
                                <div className="space-y-8 text-right lg:text-left">
                                    <div className="space-y-4">
                                        <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                                            EAU PURE À VOLONTÉ
                                        </span>
                                         <h2 id="undersink-title" className="heading-pro-max text-right lg:text-left mb-8 scroll-mt-[120px]">
                                            <span className="italic font-light text-[#2563eb] block">Votre source d'eau cristalline, sans compromis.</span>
                                        </h2>
                                        <p className="body-pro-max text-justify max-w-xl ml-auto lg:ml-0">
                                            Découvrez comment notre système d'osmose inverse libère votre quotidien du goût de chlore et de la corvée des bouteilles plastique. Une eau légère et saine à portée de main.
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        {[
                                            { title: "Pureté absolue", desc: "Élimine 99% des contaminants, métaux lourds et micro-plastiques pour une sécurité totale." },
                                            { title: "Éco-conscient", desc: "Réduisez drastiquement votre empreinte carbone en éliminant les bouteilles jetables." },
                                            { title: "Saveurs révélées", desc: "Sublimez le goût de vos boissons et petits plats avec une eau pure sans aucune impureté." }
                                        ].map((item, i) => (
                                            <div key={i} className="group flex items-start lg:flex-row flex-row-reverse gap-4 p-2 rounded-3xl transition-colors hover:bg-white/50">
                                                <div className="text-2xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors pt-1">
                                                    0{i + 1}
                                                </div>
                                                <div className="space-y-0.5 text-right lg:text-left">
                                                    <h3 className="text-xl font-bold tracking-tight text-blue-600/20 group-hover:text-blue-600 transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-slate-500 font-light text-sm leading-relaxed max-w-sm ml-auto lg:ml-0">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-8 flex flex-col sm:flex-row-reverse lg:flex-row gap-6 justify-end lg:justify-start">
                                        <NavLink to="/systeme-de-filtration-deau-potable" className="w-full sm:w-fit">
                                            <Button size="lg" className="rounded-full px-12 py-7 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100" asChild>
                                                <NavLink to="/systeme-de-filtration-deau-potable" className="flex items-center text-lg">
                                                    Découvrir nos systèmes d'osmose inverse
                                                    <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                                                </NavLink>
                                            </Button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* 6. Under Sink Water Filtration Systems Section - Modern Editorial */}
                <section className="relative py-32 bg-white overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px] -z-0" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                            {/* Left Side: Creative Image Stack */}
                            <div className="w-full lg:w-1/2 relative -mx-6 lg:mx-0">
                                <div className="relative group">
                                    {/* Main Hero Image */}
                                    <div className="relative z-10 rounded-none lg:rounded-[3rem] overflow-hidden aspect-[4/5] shadow-none lg:shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                                        <img
                                            src={africanGirlImg}
                                            alt="Enfant buvant de l'eau saine filtrée sous l'évier Bricareau"
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                                    </div>

                                    {/* Floating Detail Card */}
                                    <div className="absolute -bottom-10 -right-6 md:-right-10 z-20 bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/50 max-w-[280px] hidden md:block animate-float">
                                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
                                            <img src={countertopsImg} className="h-6 w-6 brightness-0 invert" alt="Solution Compacte" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Solution Compacte</h4>
                                        <p className="text-sm text-slate-500 font-light leading-relaxed">
                                            Performance maximale pour un encombrement minimal sous votre évier.
                                        </p>
                                    </div>

                                    {/* Background decorative square */}
                                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/5 rounded-[3rem] -z-10 animate-pulse" />
                                </div>
                            </div>

                            {/* Right Side: Content Editorial */}
                            <div className="w-full lg:w-1/2 lg:pl-4">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                                            COMPACT & PUISSANT
                                        </span>
                                        <h2 
                                        id="compact-filtration-title"
                                        className="scroll-mt-[120px] mb-8"
                                        style={{
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                            fontSize: '48px',
                                            lineHeight: '48px',
                                            fontStyle: 'normal'
                                        }}
                                    >
                                        <span className="italic font-light text-[#2563eb] block">Systèmes de filtration d'eau sous l'évier.</span>
                                        </h2>
                                        <p className="body-pro-max text-justify max-w-xl">
                                            Éliminez jusqu'à 99% des pathogènes, du plomb et du fluorure. Notre gamme Cristal Pro est la solution ultime pour une eau de boisson de qualité supérieure directement chez vous.
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        {[
                                            { title: "Filtration d'élite", desc: "Un processus rigoureux en 3 étapes qui neutralise les métaux lourds, le chlore et les sédiments invisibles." },
                                            { title: "Design intelligent", desc: "Ultra-compact conçu pour maximiser votre espace de rangement." },
                                            { title: "Finition de luxe", desc: "Inclut une sélection de robinets au design contemporain s'intégrant parfaitement à votre cuisine." }
                                        ].map((item, i) => (
                                            <div key={i} className="group flex items-start gap-4 p-2 rounded-3xl transition-colors hover:bg-slate-50">
                                                <div className="text-2xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors pt-1">
                                                    0{i + 1}
                                                </div>
                                                <div className="space-y-0.5">
                                                    <h3 className="text-xl font-bold tracking-tight text-blue-600/20 group-hover:text-blue-600 transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-slate-500 font-light text-sm leading-relaxed max-w-sm">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-8 flex flex-col sm:flex-row gap-6">
                                        <NavLink to="/Systemes-de-filtration-deau-sous-evier" className="w-full sm:w-fit">
                                            <Button size="lg" className="w-full rounded-full px-12 py-7 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200" asChild>
                                                <NavLink to="/Systemes-de-filtration-deau-sous-evier" className="flex items-center text-lg">
                                                    Voir nos filtres sous-évier
                                                    <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                                                </NavLink>
                                            </Button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7.Water Testing Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[750px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
                    {/* Mobile Image */}
                    <div className="lg:hidden w-full h-[300px] relative">
                        <img
                            src={waterTestingImg}
                            alt="Analyse d'eau en laboratoire pour détection de contaminants - Service expert Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-950/20" />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={waterTestingImg}
                            alt="Analyse d'eau en laboratoire"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-950/60 lg:bg-gradient-to-r lg:from-blue-950/95 lg:to-blue-900/40 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="font-bold text-[#1e3a8a] block uppercase mb-2">
                                Contrôle de la Qualité D'EAU
                            </span>
                            <h2 className="heading-pro-max text-left mb-8">
                                <span className="font-bold text-white block">Votre eau, notre priorité.</span>
                            </h2>
                            <p className="body-pro-max text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left">
                                Ne laissez plus le doute couler de votre robinet. Demandez votre test d'eau dès aujourd'hui et obtenez un portrait clair de votre eau ainsi que des solutions adaptées à votre foyer.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    asChild
                                >
                                    <a href="/tests-eau">Demandez une analyse d'eau</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Testimonials Section */}
                <TestimonialsSection
                    filterProduct="/filtration"
                    title={
                        <>
                            <h2 className="heading-pro-max text-center mb-12">
                                <span className="italic font-light text-[#2563eb] block">Honnêteté et passion :</span>
                                <span className="font-bold text-[#1e3a8a] block">la signature Bricareau vue par vous.</span>
                            </h2>
                        </>
                    }
                />


                {/* 9. Comparison Table */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="heading-pro-max text-left mb-8">
                                <span className="italic font-light text-[#2563eb] block">Comparez nos solutions</span>
                                <span className="font-bold text-[#1e3a8a] block">de filtration d'eau</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-light uppercase tracking-wider">Solutions</th>
                                        {[
                                            { name: "Filtres d'eau spécialisés", img: specializedFiltersImg },
                                            { name: "Systèmes de filtration sous l'évier", img: undersinkSystemImg }
                                        ].map((m, i) => (
                                            <th key={i} className="p-4 text-center text-gray-900 font-bold text-sm">
                                                <div className="flex flex-col items-center gap-2">
                                                    <img
                                                        src={m.img}
                                                        alt={`${m.name} - Solution de filtration d'eau Bricareau pour maison et cuisine`}
                                                        className="w-[150px] h-[120px] object-contain mx-auto mix-blend-multiply"
                                                    />
                                                    <div className="text-[14px]">{m.name}</div>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-8 font-light text-gray-700">{row.feature}</td>
                                            <td className="p-8 text-center">
                                                {typeof row.whole === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-4 py-1.5 rounded-full text-[10px] uppercase">{row.whole}</span> : (row.whole ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                            <td className="p-8 text-center">
                                                {typeof row.basic === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-4 py-1.5 rounded-full text-[10px] uppercase">{row.basic}</span> : (row.basic ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
        {/* 9. CTA Section - Premium Immersive */}
        <section className="relative h-[600px] flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={ourteamstudyyourwaterImg}
              alt="Expert Bricareau en traitement d'eau de puits"
              className="w-full h-full object-cover object-[40%_5%]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/70 to-blue-800/30 backdrop-blur-[2px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-pro-max text-white text-center mb-6">
                <span className="font-bold block tracking-tight">Un accompagnement personnalisé pour vous guider vers le système adapté à votre réalité et votre budget.</span>
              </h2>

              <p className="body-pro-max !text-white text-center mb-12 max-w-2xl mx-auto">
                Vous n’êtes pas certain de savoir si vous avez besoin d’un filtre toute maison, d’un système sous évier ou d’une station d’osmose inverse ? Contactez‑nous pour une évaluation de votre eau et de vos besoins. 
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" asChild>
                  <a href="tel:18552649328" className="flex items-center gap-3">
                    <Phone className="h-5 w-5 animate-bounce" />
                    Parlez à un expert
                  </a>
                </Button>

                <Button variant="outline" size="lg" asChild>
                  <NavLink to="/consultation">Planifiez une consultation gratuite</NavLink>
                </Button>
              </div>

              <p className="mt-8 text-white/50 text-sm font-light">
                Disponible 7j/7 — Réponse en moins de 24h
              </p>
            </div>
          </div>
        </section>

                {/* 11. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="heading-pro-max text-left mb-8">
                                <span className="italic font-light text-[#2563eb] block">Pour vous éclairer</span>
                                <span className="font-bold text-[#1e3a8a] block">Questions fréquentes</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {[
                                    {
                                        q: "Comment fonctionne l'osmose inverse ?",
                                        a: "L'osmose inverse pousse l'eau à travers une membrane semi-perméable microscopique pour éliminer les impuretés dissoutes, le chlore et les minéraux lourds, produisant une eau d'une pureté exceptionnelle."
                                    },
                                    {
                                        q: "Quelle est la différence entre un adoucisseur et un filtre ?",
                                        a: "Un adoucisseur élimine spécifiquement le calcaire (calcium et magnésium), tandis qu'un système de filtration élimine les contaminants, le chlore, les odeurs et les sédiments pour améliorer la qualité de l'eau."
                                    },
                                    {
                                        q: "À quelle fréquence faut-il changer les filtres sous l'évier ?",
                                        a: "Pour un système sous-évier, les cartouches classiques se changent généralement tous les 6 à 12 mois. La membrane d'osmose inverse peut durer 2 à 3 ans selon la qualité de votre eau d'entrée."
                                    },
                                    {
                                        q: "Les filtres sous-évier éliminent-il les bactéries ?",
                                        a: "Les systèmes d'osmose inverse et certains filtres spécialisés à ultrafiltration sont extrêmement efficaces contre les particules microscopiques, mais pour une protection bactériologique totale, nous recommandons un système UV en complément."
                                    },
                                    {
                                        q: "Est-ce que l'installation d'un filtre sous-évier réduit la pression d'eau ?",
                                        a: "Nos systèmes modernes sont conçus pour minimiser l'impact sur la pression. Les systèmes d'osmose inverse utilisent souvent un réservoir de stockage pour garantir un débit constant à votre robinet dédié."
                                    },
                                    {
                                        q: "Pourquoi choisir un filtre spécialisé pour le fer ou le soufre ?",
                                        a: "Les filtres standards ne peuvent pas traiter les fortes concentrations de fer (taches jaunes/rouges) ou de soufre (odeur d'œufs pourris). Nos filtres spécialisés utilisent des médias spécifiques pour neutraliser ces problèmes à la source."
                                    },
                                    {
                                        q: "Peut-on brancher un filtre sous-évier sur le frigo ?",
                                        a: "Absolument. Il est très courant de raccorder la sortie de votre système de filtration à votre distributeur d'eau de frigo et à votre machine à glaçons pour une glace cristalline."
                                    },
                                    {
                                        q: "Quelle place prend un système de filtration sous l'évier ?",
                                        a: "Nos systèmes compacts occupent généralement moins de 25% de l'espace sous l'évier, laissant amplement de place pour vos articles ménagers habituels."
                                    },
                                    {
                                        q: "L'eau filtrée est-elle meilleure pour cuisiner ?",
                                        a: "Oui, l'élimination du chlore et des impuretés rehausse considérablement les saveurs naturelles de vos aliments, du café et du thé, tout en évitant les dépôts de calcaire dans vos cafetières et bouilloires."
                                    },
                                    {
                                        q: "Est-ce que le système de filtration fait du bruit ?",
                                        a: "Non, les systèmes de filtration sont totalement silencieux. Seule la régénération de certains filtres centraux peut faire un léger bruit de circulation d'eau, généralement programmé la nuit."
                                    },
                                    {
                                        q: "Les filtres éliminent-ils le plomb et les métaux lourds ?",
                                        a: "Oui, nos systèmes d'osmose inverse et nos cartouches spécialisées sont certifiés pour réduire drastiquement le plomb, le cuivre et les autres métaux lourds souvent présents dans les vieilles tuyauteries."
                                    },
                                    {
                                        q: "Comment savoir quel filtre spécialisé choisir ?",
                                        a: "La meilleure façon est de procéder à une analyse d'eau. Selon que vous ayez du fer, du manganèse, des tanins ou du chlore, nos experts vous recommanderont le média filtrant approprié."
                                    },
                                    {
                                        q: "Quelle est la garantie sur les systèmes de filtration Bricareau ?",
                                        a: "Nous offrons des garanties complètes allant jusqu'à 10 ans sur la structure des réservoirs et des garanties solides sur les composants de contrôle et les robinetteries."
                                    },
                                    {
                                        q: "Un filtre sous-évier nécessite-t-il de l'électricité ?",
                                        a: "La plupart des systèmes de filtration standard et d'osmose inverse fonctionnent uniquement avec la pression de l'eau. Seuls certains modèles haute performance avec pompe de surpression nécessitent une prise électrique."
                                    },
                                    {
                                        q: "Est-ce que je peux installer le système moi-même ?",
                                        a: "Bien que cela soit possible pour les bricoleurs, nous recommandons une installation par nos techniciens certifiés pour garantir l'étanchéité parfaite et la validation de votre garantie Bricareau."
                                    }
                                ].slice(0, showAllFaqs ? undefined : 6).map((item, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-100 px-4">
                                        <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-8 text-slate-800" style={{}}>
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base font-light leading-6 text-slate-500 pb-8 text-justify" style={{}}>
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                            <div className="mt-12 text-center">
                                <Button onClick={() => setShowAllFaqs(!showAllFaqs)}>
                                    {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 12. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="heading-pro-max text-left mb-8">
                                <span className="font-bold text-[#1e3a8a] block">Ressources</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Filtre sous évier, l'alternative simple aux pichets filtrants",
                                    img: filtreSousEvierImg,
                                    link: "/filtre-sous-evier-lalternative-simple-aux-pichets-filtrants"
                                },
                                {
                                    title: "Osmose inverse et santé : quelle qualité d’eau obtenez-vous ?",
                                    img: healthwaterImg,
                                    link: "/osmose-inverse-et-sante-quelle-qualite-deau-obtenez-vous"
                                },
                                {
                                    title: "Osmose inverse : la technologie derrière une eau 100 % pure",
                                    img: rowaterImg,
                                    link: "/osmose-inverse-la-technologie-derriere-une-eau-100-pure"
                                },
                            ].map((art, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => navigate(art.link)}
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={art.img}
                                            alt={`${art.title} - Guide pratique Bricareau pour une meilleure qualité d'eau`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight font-medium text-base leading-6 text-[#0F1729]">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink
                                                to={art.link}
                                                className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm"
                                            >
                                                Lire <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Filtration;
