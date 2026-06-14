import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpertAvatars from "@/components/ExpertAvatars";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import {
    ChevronRight,
    ChevronLeft,
    CheckCircle2,
    ArrowRight,
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
import { ProMaxButton } from "@/components/ui/ProMaxButton";
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
import waterTestingImg from "@/assets/39677.jpg";
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
import hardWaterFaucetImg from "@/assets/Hard Water-Faucet.jpg";
import newbornHealthImg from "@/assets/47A0F39600000578-5222035-image-a-1_1514911887749.jpg";
import healthAndSafetyIcon from "@/assets/health_and_safety.svg";
import waterTasteImg from "@/assets/water-taste.jpg";


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
    const [activeCol, setActiveCol] = React.useState(0);
    const navigate = useNavigate();

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
    const resourcesRef = React.useRef<HTMLDivElement>(null);

    const scrollResources = (direction: 'left' | 'right') => {
        if (resourcesRef.current) {
            const scrollAmount = resourcesRef.current.clientWidth * 0.8;
            resourcesRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

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

    const [resourceIndex, setResourceIndex] = React.useState(1);
    const resources = [
        {
            title: "Filtre sous évier : l'alternative simple aux pichets filtrants",
            img: filtreSousEvierImg,
            link: "/filtre-sous-evier-lalternative-simple-aux-pichets-filtrants"
        },
        {
            title: "Eau embouteillée : les dangers méconnus pour votre santé au quotidien",
            img: healthwaterImg,
            link: "/eau-embouteillee-les-dangers-meconnus-pour-votre-sante-au-quotidien"
        },
        {
            title: "Nos systèmes de filtration d'eau sous évier : La solution ultime",
            img: undersinkSystemImg,
            link: "/systemes-de-filtration-deau-sous-evier"
        }
    ];

    const handleScrollRessources = () => {
        if (resourcesRef.current) {
            const scrollLeft = resourcesRef.current.scrollLeft;
            const containerWidth = resourcesRef.current.offsetWidth;
            const itemWidth = resourcesRef.current.querySelector('div')?.offsetWidth || containerWidth;
            const newIndex = Math.round(scrollLeft / itemWidth) + 1;
            setResourceIndex(Math.min(newIndex, resources.length));
        }
    };
    useEffect(() => {
        document.title = "Filtration d'eau au Québec | Eau Pure et Saine | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Systèmes de filtration d'eau haute performance au Québec. Éliminez chlore, plomb et contaminants avec nos solutions sur mesure pour toute la maison ou sous l'évier.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Filtration d'eau au Québec : Pureté et Santé | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Obtenez une eau cristalline à chaque robinet. Découvrez nos technologies de filtration avancées pour la santé de votre foyer.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/filtration");
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
                    highlightedTitle={<>Filtration d'eau <span className="text-amber-500 font-serif italic font-normal drop-shadow-sm">résidentielle</span></>}
                    mainTitle="L'excellence pour votre santé."
                    subtitle="Ne laissez plus les contaminants couler de vos robinets. Nos systèmes de filtration d'eau avancés constituent un bouclier durable pour votre maison, vous garantissant une eau d'une pureté irréprochable pour toute votre famille au Canada."
                    showPhone={true}
                    showBreadcrumbs={true}
                />

                {/* 2. The Problem Section */}
                <section id="problemes-eau" className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto mb-20">
                            <span className="inline-block px-4 py-1 bg-[#18448F] text-white rounded-full text-[10px] font-black tracking-widest mb-6 uppercase">
                                Diagnostic de Pureté
                            </span>
                            <h2 className="heading-pro-max">
                                <span className="italic font-light text-blue-600 block leading-tight">Identifier l'invisible :</span>
                                <span className="font-bold text-[#18448F] block leading-tight">Pourquoi filtrer votre eau ?</span>
                            </h2>
                            <p className="body-pro-max text-slate-500 mt-6 mx-auto max-w-2xl px-4">
                                L'eau municipale traverse des kilomètres de tuyauteries vétustes avant d'arriver chez vous. Chaque verre peut contenir des traces de l'imparfait.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Réseaux Vétustes",
                                    desc: "Des particules de rouille et de sédiments provenant de tuyauteries municipales centenaires se déposent dans vos verres.",
                                    benefit: "Infrastructure",
                                    color: "bg-amber-600",
                                    icon: <Wrench className="w-6 h-6" />,
                                    img: oldpipesImg
                                },
                                {
                                    title: "Santé & Nouveau-nés",
                                    desc: "Traces de plomb, micro-plastiques et hormones. Protégez les systèmes immunitaires fragiles de votre famille.",
                                    benefit: "Sécurité Totale",
                                    color: "bg-pink-500",
                                    icon: <img src={healthAndSafetyIcon} className="w-6 h-6 brightness-0 invert"  alt="Santé & Nouveau-nés icon" title="Filtration Bricareau par Bricareau" />,
                                    img: newbornHealthImg
                                },
                                {
                                    title: "Goût de Chlore",
                                    desc: "Le chlore est nécessaire pour désinfecter, mais il altère le goût de vos boissons et dessèche votre peau sous la douche.",
                                    benefit: "Confort Gustatif",
                                    color: "bg-blue-600",
                                    icon: <GlassWater className="w-6 h-6" />,
                                    img: waterTasteImg
                                },
                                {
                                    title: "L'impact Plastique",
                                    desc: "Éliminez définitivement l'achat de 2000+ bouteilles de plastique par an. Une victoire écologique et financière.",
                                    benefit: "Zéro Déchet",
                                    color: "bg-emerald-500",
                                    icon: <Recycle className="w-6 h-6" />,
                                    img: dechetbouteilleImg
                                },
                            ].map((item, i) => (
                                <div 
                                    key={i} 
                                    className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-slate-100 bg-slate-50/50 cursor-pointer shadow-sm transition-all duration-700 hover:shadow-2xl hover:shadow-blue-200/50 hover:border-blue-100 hover:-translate-y-3"
                                    onClick={() => {
                                        let targetId = 'solutions-title';
                                        if (i === 0) targetId = 'compact-filtration-title';
                                        else if (i === 1) targetId = 'undersink-title';
                                        
                                        const el = document.getElementById(targetId);
                                        el?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    {/* background with slight zoom on hover */}
                                    <div className="absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform duration-[2000ms]">
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover opacity-1 group-hover:opacity-40 transition-opacity grayscale group-hover:grayscale-0" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                                    </div>

                                    <div className="relative z-10 p-10 flex flex-col h-full justify-between">
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between">
                                                <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12`}>
                                                    {item.icon}
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-colors">
                                                    {item.benefit}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-bold text-slate-800 leading-[1.1] transition-all duration-500 group-hover:text-blue-700">
                                                {item.title}
                                            </h3>
                                            <p className="body-pro-max text-sm leading-relaxed text-slate-600 opacity-80 group-hover:opacity-100 transition-all">
                                                {item.desc}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            Voir solutions <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Glow effect on hover */}
                                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                </div>
                            ))}
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
                                    <div className="relative z-10 rounded-none lg:rounded-[3rem] overflow-hidden aspect-square shadow-none lg:shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                                        <img
                                            src={teenagerShowerImg}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                         alt="Douche sous eau filtrée Bricareau - Protection de la peau et des cheveux" title="Filtration Bricareau par Bricareau" />
                                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                                    </div>

                                    {/* Floating Detail Card */}
                                    <div className="absolute -bottom-10 -right-6 md:-right-10 z-20 bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/50 max-w-[280px] hidden md:block animate-float">
                                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
                                            <img src={hotelClassImg} className="h-6 w-6 brightness-0 invert"  alt="Qualité Hôtelière - fontaine à eau bureau" title="Fontaine à eau bureau par Bricareau" />
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
                                            <span className="italic font-light text-[#18448F] block">Eau filtrée pour toute la maison</span>
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
                                        <ProMaxButton 
                                            asChild
                                            className="h-14 px-10 text-[11px]"
                                        >
                                            <NavLink to="/filtres-deau-pour-toute-la-maison" className="flex items-center">
                                                Voir nos filtres d'eau
                                                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                            </NavLink>
                                        </ProMaxButton>
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
                                    <div className="relative z-10 rounded-none lg:rounded-[3rem] overflow-hidden aspect-square shadow-none lg:shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                                        <img
                                            src={glassOfWaterImg}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                         alt="Verre d'eau pure provenant d'un système d'osmose inverse Bricareau" title="Filtration Bricareau par Bricareau" />
                                    </div>

                                    {/* Floating Detail Card */}
                                    <div className="absolute -bottom-10 -left-6 md:-left-10 z-20 bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/50 max-w-[280px] hidden md:block animate-float">
                                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
                                            <img src={verifiedImg} className="h-6 w-6 brightness-0 invert"  alt="Pureté Certifiée - systèmes d'eau sur mesure" title="Systèmes d'eau sur mesure par Bricareau" />
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
                                <div className="space-y-8 text-left">
                                    <div className="space-y-4">
                                        <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                                            EAU PURE À VOLONTÉ
                                        </span>
                                         <h2 id="undersink-title" className="heading-pro-max text-left mb-8 scroll-mt-[120px]">
                                            <span className="italic font-light text-[#18448F] block">Votre source d'eau cristalline, sans compromis.</span>
                                        </h2>
                                        <p className="body-pro-max text-justify lg:text-left max-w-xl lg:ml-0">
                                            Découvrez comment notre système d'osmose inverse libère votre quotidien du goût de chlore et de la corvée des bouteilles plastique. Une eau légère et saine à portée de main.
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        { [
                                            { title: "Pureté absolue", desc: "Élimine 99% des contaminants, métaux lourds et micro-plastiques pour une sécurité totale." },
                                            { title: "Éco-conscient", desc: "Réduisez drastiquement votre empreinte carbone en éliminant les bouteilles jetables." },
                                            { title: "Saveurs révélées", desc: "Sublimez le goût de vos boissons et petits plats avec une eau pure sans aucune impureté." }
                                        ].map((item, i) => (
                                            <div key={i} className="group flex items-start flex-row gap-4 p-2 rounded-3xl transition-colors hover:bg-white/50">
                                                <div className="text-2xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors pt-1">
                                                    0{i + 1}
                                                </div>
                                                <div className="space-y-0.5 text-left">
                                                    <h3 className="text-xl font-bold tracking-tight text-blue-600/20 group-hover:text-blue-600 transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-slate-500 font-light text-sm leading-relaxed max-w-sm lg:ml-0">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-8 flex flex-col sm:flex-row lg:flex-row gap-6 justify-start">
                                        <ProMaxButton 
                                            asChild
                                            className="h-14 px-10 text-[11px]"
                                        >
                                            <NavLink to="/systeme-de-filtration-deau-potable" className="flex items-center">
                                                Découvrir nos systèmes d'osmose inverse
                                                <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                                            </NavLink>
                                        </ProMaxButton>
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
                                    <div className="relative z-10 rounded-none lg:rounded-[3rem] overflow-hidden aspect-square shadow-none lg:shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                                        <img
                                            src={africanGirlImg}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                         alt="Enfant buvant de l'eau saine filtrée sous l'évier Bricareau" title="Analyse d'eau professionnelle par Bricareau" />
                                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                                    </div>

                                    {/* Floating Detail Card */}
                                    <div className="absolute -bottom-10 -right-6 md:-right-10 z-20 bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/50 max-w-[280px] hidden md:block animate-float">
                                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
                                            <img src={countertopsImg} className="h-6 w-6 brightness-0 invert"  alt="Solution Compacte - analyse d'eau professionnelle" title="Analyse d'eau professionnelle par Bricareau" />
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
                                            className="heading-pro-max scroll-mt-[120px] mb-8"
                                        >
                                            <span className="italic font-light text-[#18448F] block">Systèmes de filtration d'eau sous l'évier</span>
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
                                        <ProMaxButton 
                                            asChild
                                            className="h-14 px-10 text-[11px]"
                                        >
                                            <NavLink to="/Systemes-de-filtration-deau-sous-evier" className="flex items-center">
                                                Voir nos filtres sous-évier
                                                <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                                            </NavLink>
                                        </ProMaxButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7.Water Testing Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[800px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
                    {/* Mobile Image */}
                    <div className="lg:hidden w-full relative bg-[#F8FAFC]">
                        <img
                            src={waterTestingImg}
                            className="w-full h-auto object-contain block mx-auto"
                         alt="Analyse d'eau en laboratoire - Bricareau" title="Filtration Bricareau par Bricareau" />
                        <div className="absolute inset-0 bg-blue-950/5 pointer-events-none" />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0 bg-slate-50">
                        <img
                            src={waterTestingImg}
                            className="w-full h-full object-cover"
                         alt="Analyse d'eau en laboratoire" title="Traitement d'eau Québec par Bricareau" />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="text-blue-600 lg:text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                Contrôle de la Qualité D'EAU
                            </span>

                            <h2 className="heading-pro-max text-left mb-8">
                                <span className="font-light italic text-[#18448F] lg:text-white block">Votre eau est</span>
                                <span className="text-[#18448F] lg:text-white italic font-bold font-serif"> notre priorité.</span>
                            </h2>
                            <p className="body-pro-max text-black lg:text-white/95 mb-8 max-w-xl text-justify lg:text-left">
                                Ne laissez plus le doute couler de votre robinet. Demandez votre test d'eau dès aujourd'hui et obtenez un portrait clair de votre eau ainsi que des solutions adaptées à votre foyer.
                            </p>
                            <div className="flex gap-4">
                                <ProMaxButton
                                    asChild
                                    variant="dark"
                                    className="h-14 px-10 text-[11px]"
                                >
                                    <a href="/tests-eau">Demandez une analyse d'eau</a>
                                </ProMaxButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Testimonials Section */}
                <TestimonialsSection
                    filterProduct="/filtration"
                    title={
                        <>
                            <span className="italic font-light text-[#18448F] block text-center">Honnêteté et passion :</span>
                            <span className="font-bold text-[#18448F] block text-center">la signature Bricareau vue par vous.</span>
                        </>
                    }
                />


                {/* 9. Comparison Table */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="heading-pro-max text-left mb-8">
                                <span className="italic font-light text-[#18448F] block">Comparez nos solutions</span>
                                <span className="font-bold text-[#18448F] block">de filtration d'eau</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-visible relative">
                            {/* Navigation Arrows for Mobile/Tablet */}
                            <div className="lg:hidden flex items-center justify-end gap-3 mb-8 relative z-30">
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="w-10 h-10 rounded-full border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    onClick={() => setActiveCol(0)}
                                    disabled={activeCol === 0}
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </Button>
                                <div className="flex gap-1.5 px-2">
                                    {[0, 1].map((i) => (
                                        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeCol ? 'w-6 bg-blue-600' : 'w-1.5 bg-blue-100'}`} />
                                    ))}
                                </div>
                                <Button 
                                    size="icon" 
                                    variant="outline" 
                                    className="w-10 h-10 rounded-full border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    onClick={() => setActiveCol(1)}
                                    disabled={activeCol === 1}
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="overflow-x-auto lg:overflow-x-visible no-scrollbar pb-8">
                                <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-2xl relative">
                                    <thead>
                                        <tr className="bg-slate-50 relative z-20">
                                            <th className="p-6 md:p-10 text-left text-blue-900/40 font-black uppercase tracking-widest text-[10px] sticky left-0 bg-slate-50 z-30 border-r border-slate-100 drop-shadow-md lg:drop-shadow-none min-w-[160px] md:min-w-[200px]">
                                                Critères Techniques
                                            </th>
                                            {[
                                                { name: "Filtres d'eau spécialisés", img: specializedFiltersImg, badge: "Protection Globale", badgeColor: "bg-blue-600" },
                                                { name: "Systèmes de filtration sous l'évier", img: undersinkSystemImg, badge: "Pureté Dégustation", badgeColor: "bg-emerald-600" }
                                            ].map((m, i) => (
                                                <th 
                                                    key={i} 
                                                    className={cn(
                                                        "p-4 md:p-6 text-center transition-all duration-500 min-w-[220px]",
                                                        i === activeCol ? "table-cell" : "hidden lg:table-cell"
                                                    )}
                                                >
                                                    <div className="flex flex-col items-center gap-6">
                                                        <div className="relative group/img">
                                                            <div className={`absolute -top-3 -right-16 z-20 ${m.badgeColor} text-white text-[8px] font-black uppercase tracking-[0.4em] px-3 py-1 rounded-full shadow-2xl whitespace-nowrap scale-90 md:scale-100`}>
                                                                {m.badge}
                                                            </div>
                                                            <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-0 group-hover/img:opacity-20 transition-opacity duration-700" />
                                                            <img
                                                                src={m.img}
                                                                alt={m.name}
                                                                className="w-[140px] md:w-[180px] h-[100px] md:h-[140px] object-contain mx-auto mix-blend-multiply relative z-10 transition-transform duration-700 group-hover/img:scale-110"
                                                            />
                                                        </div>
                                                        <div className="text-[13px] md:text-lg font-bold text-[#18448F] max-w-[150px] mx-auto leading-tight">{m.name}</div>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 relative z-10">
                                        {comparisonData.map((row, i) => (
                                            <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                                <td className="p-6 md:p-10 font-bold text-[#18448F] bg-white sticky left-0 z-30 border-r border-slate-50 drop-shadow-sm lg:drop-shadow-none text-[12px] md:text-sm italic group-hover:text-blue-600 transition-colors">
                                                    {row.feature}
                                                </td>
                                                <td 
                                                    className={cn(
                                                        "p-6 md:p-10 text-center text-[13px] md:text-sm font-light leading-relaxed text-slate-600 transition-all duration-500",
                                                        activeCol === 0 ? "table-cell" : "hidden lg:table-cell"
                                                    )}
                                                >
                                                    {typeof row.whole === 'string' ? <span className="text-blue-600 font-bold bg-blue-50/50 px-4 py-1.5 rounded-full text-[10px] uppercase shadow-sm whitespace-nowrap">{row.whole}</span> : (row.whole ? <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mx-auto" /> : <div className="h-5 w-5 md:h-6 md:w-6 mx-auto opacity-10"><X className="h-5 w-5 md:h-6 md:w-6" /></div>)}
                                                </td>
                                                <td 
                                                    className={cn(
                                                        "p-6 md:p-10 text-center text-[13px] md:text-sm font-light leading-relaxed text-slate-600 transition-all duration-500",
                                                        activeCol === 1 ? "table-cell" : "hidden lg:table-cell"
                                                    )}
                                                >
                                                    {typeof row.basic === 'string' ? <span className="text-blue-600 font-bold bg-blue-50/50 px-4 py-1.5 rounded-full text-[10px] uppercase shadow-sm whitespace-nowrap">{row.basic}</span> : (row.basic ? <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mx-auto" /> : <div className="h-5 w-5 md:h-6 md:w-6 mx-auto opacity-10"><X className="h-5 w-5 md:h-6 md:w-6" /></div>)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

        {/* 10. PREMIUM CTA SECTION - REBUILT FOR IMPACT */}
        <section className="relative py-32 flex items-center overflow-hidden bg-[#18448F]">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
            
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    src={ourteamstudyyourwaterImg}
                    className="w-full h-full object-cover grayscale brightness-150"
                 alt="Problématique d'eau dure sur la robinetterie - Solution Bricareau" title="Systèmes d'eau sur mesure par Bricareau" />
                <div className="absolute inset-0 bg-[#18448F]/10 backdrop-blur-sm" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <div className="space-y-6">
                        <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                            AVIS D'EXPERTS D'EAU
                        </span>
                        <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                            Démystifiez vos options <br />
                            <span className="text-white italic font-bold font-serif">de filtration d'eau résidentielle.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                            Vous n’êtes pas certain de savoir si vous avez besoin d’un filtre d'eau pour toute la maison, d’un système sous évier ou d’une station d’osmose inverse ? Contactez‑nous pour accompagnement personnalisé pour vous guider vers le système adapté à votre réalité et votre budget.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                        <ProMaxButton 
                            asChild
                            variant="white"
                            className="h-14 px-10 text-[11px]"
                        >
                            <a href="tel:18552649328" className="flex items-center gap-3">
                                <Phone className="h-5 w-5 animate-bounce" />
                                Parlez à un expert
                            </a>
                        </ProMaxButton>
                        <ProMaxButton
                            asChild
                            variant="outline-white"
                            className="h-14 px-10 text-[11px]"
                        >
                            <NavLink to="/consultation">Planifiez une consultation</NavLink>
                        </ProMaxButton>
                    </div>

                    <div className="pt-8 flex flex-col items-center gap-4">
                        <ExpertAvatars />
                        <p className="text-blue-200/60 text-sm font-medium">
                            Rejoignez plus de <span className="text-white">1,500 familles</span> satisfaites au Québec cette année.
                        </p>
                    </div>
                </div>
            </div>
        </section>

                {/* 11. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="heading-pro-max text-left mb-8">
                                <span className="italic font-light text-[#18448F] block">Pour vous éclairer</span>
                                <span className="font-bold text-[#18448F] block">Questions fréquentes</span>
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
                                <ProMaxButton
                                    onClick={() => setShowAllFaqs(!showAllFaqs)}
                                >
                                    {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                                </ProMaxButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 12. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="heading-pro-max text-left mb-8">
                                <span className="font-bold text-[#18448F] block">Ressources</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div 
                            ref={resourcesRef}
                            onScroll={handleScrollRessources}
                            className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x snap-mandatory pb-12 px-1 lg:px-0 scroll-smooth"
                        >
                            {resources.map((art, i) => (
                                <div
                                    key={i}
                                    className="min-w-[70vw] md:min-w-[45vw] lg:min-w-0 snap-center group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
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

                        {/* Navigation arrows and numbering for carousel - Mobile/Tablet ONLY */}
                        <div className="lg:hidden flex items-center justify-center relative mt-6">
                            <div className="flex items-center gap-4">
                                <Button 
                                    size="icon" 
                                    className="w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
                                    onClick={() => scrollResources('left')}
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </Button>
                                <Button 
                                    size="icon" 
                                    className="w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
                                    onClick={() => scrollResources('right')}
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </Button>
                            </div>
                            
                            <div className="absolute right-2 text-sm font-black text-[#18448F] bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/50">
                                <span className="text-blue-600">{resourceIndex}</span>
                                <span className="mx-1 text-slate-300">/</span>
                                <span className="text-slate-400">{resources.length}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Floating Sticky CTA - Phase III Conversion Focus */}
                <div className="hidden md:block fixed bottom-8 right-8 z-[100] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-[3s] pointer-events-none">
                  <div className="pointer-events-auto group/sticky">
                    <ProMaxButton
                      asChild
                      variant="primary"
                    >
                      <a href="/consultation" className="flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                        <span className="font-medium text-sm tracking-wider whitespace-nowrap text-center">
                          Réservez votre <br />consultation gratuite
                        </span>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white group-hover/sticky:rotate-[360deg] transition-all">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </a>
                    </ProMaxButton>
                  </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Filtration;
