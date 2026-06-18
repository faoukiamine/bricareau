import React, { useState, useEffect } from "react";
import {
    ChevronRight,
    ShieldCheck,
    Zap,
    Droplets,
    Settings,
    TrendingUp,
    Leaf,
    Phone,
    Star,
    Quote,
    AlertTriangle,
    Wrench,
    HeartPulse,
    Wallet,
    CheckCircle2,
    Clock,
    ArrowRight,
    Award,
    FileText,
    MessageCircle,
    Minus,
    Plus,
    PlayCircle,
    MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, NavLink } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Territoire from "@/components/Territoire";

import { cn } from "@/lib/utils";
import { allTestimonials } from "@/data/testimonials";

// Assets
import heroImg from "@/assets/family-preparing-dinner-together.jpg";
import partnerImg from "@/assets/skids-sur-mesure.jpg";
import resImg from "@/assets/21425.png";
import comImg from "@/assets/bureau-megamenu.jpg";
import officeSlideImg from "@/assets/2148496250.jpg";
import industrialSlideImg from "@/assets/43.jpg";
import horecaImg from "@/assets/522.jpg";
import commercialImg from "@/assets/industrial_hero_pro_max.png";
import waterWaveImg from "@/assets/wave-banner.jpg";
import montrealMapImg from "@/assets/montreal_dark_map.png";
import waterTestingImg from "@/assets/water testing.jpeg";

const SupportAgentIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 -960 960 960" 
    fill="currentColor"
    {...props}
  >
    <path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440ZM331.5-411.5Q320-423 320-440t11.5-28.5Q343-480 360-480t28.5 11.5Q400-457 400-440t-11.5 28.5Q377-400 360-400t-28.5-11.5Zm240 0Q560-423 560-440t11.5-28.5Q583-480 600-480t28.5 11.5Q640-457 640-440t-11.5 28.5Q617-400 600-400t-28.5-11.5ZM241-462q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z"/>
  </svg>
);

const TeamIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 -960 960 960" 
    fill="currentColor"
    {...props}
  >
    <path d="M40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm440-160q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z"/>
  </svg>
);

const partners = [
    "Coréalis Pharma", "Productions Zinda", "Ils Pharma", "Google", "Kinton Ramen",
    "Marriott", "IKEA", "Les peintres multicouleurs", "Imprimerie Stampa Media",
    "UPS", "Biovantek", "Garderie les poussins du monde", "Calo",
    "Fous de l'Ile Kombucha", "Garderie les petits carillons", "Fromagerie Marie-Kadé",
    "Gestion & Construction Métropolitain", "Gestion immobilière Wilkar",
    "Geep Canada", "Injectik", "Investment ERES", "I3 Biomedical", "Kruger",
    "Institut des communications graphiques"
];

const Home1 = () => {
    const navigate = useNavigate();
    // Case Study Testimonials State
    const caseStudyTestimonials = allTestimonials.slice(0, 8);
    const [testiIndex, setTestiIndex] = useState(0);
    const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);

    // Auto-scroll testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setTestiIndex((prev) => (prev + 1) % caseStudyTestimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [caseStudyTestimonials.length]);


    const features = [
        {
            icon: ShieldCheck,
            title: "Fournisseur de confiance",
            description: "Plus de 20 000 foyers canadiens nous font confiance chaque jour pour garantir la pureté de leur eau grâce à nos solutions éprouvées."
        },
        {
            icon: Settings,
            title: "Solutions multiples",
            description: "Du simple système résidentiel aux grandes installations industrielles, nous concevons des solutions sur mesure qui répondent parfaitement à vos besoins."
        },
        {
            icon: TeamIcon,
            title: "Équipe hautement qualifiée",
            description: "Nos techniciens certifiés mettent leur expertise à votre service pour vous garantir une installation impeccable et des équipements performants."
        },
        {
            icon: SupportAgentIcon,
            title: "Support Premium & Réactif",
            description: "Profitez d'une tranquillité d'esprit absolue grâce à notre assistance ultra-réactive et nos programmes d'entretien préventif."
        },
        {
            icon: TrendingUp,
            title: "Rentable",
            description: "Rentabilisez votre investissement grâce à nos équipements haute performance, spécialement conçus pour réduire vos coûts d'entretien et votre facture énergétique."
        },
        {
            icon: Leaf,
            title: "Engagement écologique",
            description: "Nous intégrons des systèmes éco-responsables de nouvelle génération pour préserver les ressources hydriques et minimiser l'empreinte écologique."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            badge: "Résidentiel — Grand Montréal",
            title1: "Une eau",
            titleAccent: "saine et pure,",
            titleAccentColor: "text-[#8CC63F]",
            title2: "pour votre foyer.",
            desc: "Protégez votre famille et vos appareils électroménagers avec nos systèmes de filtration d'eau et d'adoucissement résidentiels sur-mesure.",
            image: heroImg
        },
        {
            badge: "Bureaux — Espaces de travail",
            title1: "Une hydratation",
            titleAccent: "premium,",
            titleAccentColor: "text-[#8CC63F]",
            title2: "pour vos équipes de travail.",
            desc: "Améliorez le bien-être au bureau avec des fontaines d'eau purifiée sans bouteille, économiques et écologiques.",
            image: officeSlideImg
        },
        {
            badge: "HORECA — Hôtellerie & Restauration",
            title1: "L'excellence",
            titleAccent: "cristalline,",
            titleAccentColor: "text-[#8CC63F]",
            title2: "pour la gastronomie.",
            desc: "Une eau parfaite pour révéler le goût de vos cafés, protéger vos fours à vapeur et offrir des glaçons impeccables grâce à nos systèmes de traitement d'eau.",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <section className="relative bg-white overflow-hidden min-h-[85vh] md:min-h-screen flex flex-col justify-center pt-24 pb-8 lg:pt-28 lg:pb-16 border-b border-slate-200">
                <div className="absolute inset-0 w-full h-full opacity-40 lg:opacity-100">
                    {/* Mobile Gradient (Style Residentiel) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent z-10 lg:hidden"></div>
                    {/* Desktop Gradient */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,white_12.5%,rgba(255,255,255,0)_100%)] z-10 hidden lg:block"></div>
                    
                    {/* Container d'image sur toute la largeur */}
                    <div className="absolute right-0 top-0 w-full h-full">
                        {slides.map((slide, index) => (
                            <img 
                                key={index}
                                src={slide.image} 
                                alt={slide.category} 
                                className={`absolute inset-0 w-full h-full object-cover object-bottom lg:object-center transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-20 transition-all duration-1000"></div>
                
                <div className="container mx-auto px-6 relative z-30">
                    <div className="max-w-3xl flex flex-col justify-center">
                        <div className="grid mb-8">
                            {slides.map((slide, index) => (
                                <div 
                                    key={index}
                                    className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out flex flex-col justify-start ${currentSlide === index ? 'opacity-100 translate-y-0 pointer-events-auto z-10' : 'opacity-0 translate-y-4 pointer-events-none z-0 invisible'}`}
                                >

                                    <h1 className="text-[50px] leading-[55px] font-sans font-bold text-[#18448F] mb-6 tracking-tight">
                                        {slide.title1} <span className={`${slide.titleAccentColor} font-sans font-bold drop-shadow-sm`}>{slide.titleAccent}</span><br/> {slide.title2}
                                    </h1>
                                    
                                    <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl">
                                        {slide.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-start gap-6 mb-16">
                            <div className="relative inline-block w-full sm:w-auto group">
                                <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                <Button
                                    className="relative w-full sm:w-auto bg-[#18448F] text-white hover:bg-transparent hover:text-[#18448F] border border-[#18448F] rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all"
                                    onClick={() => navigate("/consultation")}
                                >
                                    Planifiez une consultation gratuite
                                </Button>
                            </div>

                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x divide-slate-200">
                            <div className="sm:pr-10">
                                <div className="text-3xl font-bold text-[#18448F] mb-2">25+</div>
                                <div className="text-xs text-slate-500 uppercase tracking-widest leading-relaxed">
                                    Années d'expertise<br/> en traitement d'eau
                                </div>
                            </div>
                            <div className="sm:px-10">
                                <div className="text-3xl font-bold text-[#18448F] mb-2">4</div>
                                <div className="text-xs text-slate-500 uppercase tracking-widest leading-relaxed">
                                    Régions desservies<br/> autour de Montréal
                                </div>
                            </div>
                            <div className="sm:pl-10">
                                <div className="text-3xl font-bold text-[#18448F] mb-2">100%</div>
                                <div className="text-xs text-slate-500 uppercase tracking-widest leading-relaxed">
                                    Solutions adaptées,<br/> jamais génériques
                                </div>
                            </div>
                        </div>
                        {/* Slide Indicators */}
                        <div className="flex gap-3 mt-12">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#18448F] scale-125' : 'bg-slate-300 hover:bg-[#18448F]/50'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Ribbon */}
            <section className="bg-[#18448F] py-10 overflow-hidden">
                <div className="w-full relative">
                    <div className="flex w-max animate-marquee gap-16 transition-opacity duration-700">
                        {/* First Set */}
                        <div className="flex gap-16 items-center px-8">
                            {partners.map((partner, i) => (
                                <span 
                                    key={i} 
                                    className="text-blue-200/50 font-bold text-xl italic whitespace-nowrap cursor-default animate-logo-light-up"
                                    style={{ animationDelay: `${(i * 1.25) - 6.5}s` }}
                                >
                                    {partner}
                                </span>
                            ))}
                        </div>
                        {/* Second Set (Duplicate) */}
                        <div className="flex gap-16 items-center px-8">
                            {partners.map((partner, i) => (
                                <span 
                                    key={`dup-${i}`} 
                                    className="text-blue-200/50 font-bold text-xl italic whitespace-nowrap cursor-default animate-logo-light-up"
                                    style={{ animationDelay: `${(i * 1.25) - 6.5}s` }}
                                >
                                    {partner}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Nouvelle Section: Traitement résidentiel (Institutionnel & Professionnel) */}
            <section className="py-24 bg-[#F8FAFC] relative border-t border-slate-200">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
                        
                        {/* Content Column */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center py-8 order-2 lg:order-1">
                            {/* Accent Line & Category */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-0.5 bg-[#8CC63F]"></div>
                                <span className="text-[#18448F] text-xs font-bold uppercase tracking-[0.15em] leading-none">
                                    Solutions Résidentielles
                                </span>
                            </div>
                            
                            <h2 className="heading-pro-max mb-8">
                                <span className="font-bold not-italic text-[#18448F] block">Votre eau de robinet</span>
                                <span className="font-bold not-italic text-[#8CC63F] block">mérite mieux.</span>
                            </h2>
                            
                            <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                Votre bien-être commence par la qualité de votre eau. Fini les désagréments liés au calcaire, au chlore ou au fer qui abîment votre plomberie, vos électroménagers et assèchent votre peau et vos cheveux. Bricareau analyse votre eau avec précision et conçoit un système sur mesure pour garantir une pureté absolue à toute votre famille.
                            </p>
                            
                            <div>
                                <div className="relative inline-block group mt-2">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button asChild className="relative inline-flex items-center justify-center bg-[#18448F] text-white hover:bg-transparent hover:text-[#18448F] border border-[#18448F] rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all">
                                        <NavLink to="/solutions-d-adoucissement-de-filtration-et-de-purification-d-eau-residentielles">
                                            Découvrir nos solutions
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </NavLink>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="w-full lg:w-1/2 relative min-h-[500px] md:min-h-[600px] lg:min-h-[400px] order-1 lg:order-2">
                            {/* Sharp rectangular image */}
                            <div className="absolute inset-0 z-10 shadow-md">
                                <img src={resImg} className="w-full h-full object-cover rounded-none"  alt="Système de traitement d'eau résidentiel" title="Traitement d'eau Québec par Bricareau" />
                            </div>
                            
                            {/* Overlapping Info Block (Corporate style) */}
                            <div className="absolute -bottom-6 -left-6 lg:-left-12 z-20 bg-white p-6 lg:p-8 shadow-xl border-l-4 border-[#8CC63F] max-w-xs">
                                <div className="flex items-start gap-4">
                                    <Droplets className="w-8 h-8 text-[#18448F] shrink-0" />
                                    <div>
                                        <h4 className="text-[#18448F] font-bold text-lg mb-1">Expertise Garantie</h4>
                                        <p className="text-slate-500 text-sm leading-snug">
                                            Analyse d'eau sur mesure et installation par nos techniciens certifiés.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Nouvelle Section: Traitement Bureaux & Commerces (Institutionnel & Professionnel) */}
            <section className="py-24 bg-white relative border-t border-slate-200">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
                        
                        {/* Image Column */}
                        <div className="w-full lg:w-1/2 relative min-h-[500px] md:min-h-[600px] lg:min-h-[400px] order-1 lg:order-1">
                            {/* Sharp rectangular image */}
                            <div className="absolute inset-0 z-10 shadow-md">
                                <img src={comImg} className="w-full h-full object-cover rounded-none"  alt="Système de traitement d'eau pour bureaux" title="Analyse d'eau professionnelle par Bricareau" />
                            </div>
                            
                            {/* Overlapping Info Block (Corporate style) */}
                            <div className="absolute -bottom-6 -right-6 lg:-right-12 z-20 bg-[#F8FAFC] p-6 lg:p-8 shadow-xl border-r-4 border-[#8CC63F] max-w-xs text-right">
                                <div className="flex items-start gap-4 flex-row-reverse">
                                    <TrendingUp className="w-8 h-8 text-[#18448F] shrink-0" />
                                    <div>
                                        <h4 className="text-[#18448F] font-bold text-lg mb-1">Rentabilité</h4>
                                        <p className="text-slate-500 text-sm leading-snug">
                                            Éliminez l'achat et le stockage de bouteilles plastiques.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center py-8 order-2 lg:order-2">
                            {/* Accent Line & Category */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-0.5 bg-[#8CC63F]"></div>
                                <span className="text-[#18448F] text-xs font-bold uppercase tracking-[0.15em] leading-none">
                                    Bureaux & Commerces
                                </span>
                            </div>
                            
                            <h2 className="heading-pro-max mb-8">
                                <span className="font-bold not-italic text-[#18448F] block">L'eau filtrée, un investissement</span>
                                <span className="font-bold not-italic text-[#8CC63F] block">rentable <span className="text-[#18448F]">pour votre entreprise.</span></span>
                            </h2>
                            
                            <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                Offrez à vos collaborateurs une eau de boisson pure et revitalisante. En remplaçant l'achat récurrent de bouteilles ou de bonbonnes par nos fontaines filtrantes sur réseau, vous réalisez des économies drastiques, éliminez la gestion des stocks et améliorez le bien-être quotidien au travail.
                            </p>
                            
                            <div>
                                <div className="relative inline-block group mt-2">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button asChild className="relative inline-flex items-center justify-center bg-[#18448F] text-white hover:bg-transparent hover:text-[#18448F] border border-[#18448F] rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all">
                                        <NavLink to="/solutions-de-traitement-d-eau-pour-offices-et-bureaux">
                                            Nos solutions pour bureaux
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </NavLink>
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Nouvelle Section: Traitement Hôtels & Restaurants (Institutionnel & Professionnel) */}
            <section className="py-24 bg-[#F8FAFC] relative border-t border-slate-200">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
                        
                        {/* Content Column */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center py-8 order-2 lg:order-1">
                            {/* Accent Line & Category */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-0.5 bg-[#8CC63F]"></div>
                                <span className="text-[#18448F] text-xs font-bold uppercase tracking-[0.15em] leading-none">
                                    Hôtels & Restaurants
                                </span>
                            </div>
                            
                            <h2 className="heading-pro-max mb-8">
                                <span className="font-bold not-italic text-[#18448F] block">Parce que <span className="text-[#8CC63F]">l'expérience</span></span>
                                <span className="font-bold not-italic text-[#18448F] block">de vos clients passe aussi par l'eau.</span>
                            </h2>
                            
                            <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                Dans l'hôtellerie et la restauration, l'eau intervient à chaque étape — cuisine, glace, linge, vaisselle, douches. Une eau mal traitée se traduit par des coûts cachés, des équipements fragilisés et une qualité de service en dessous de vos standards.
                            </p>
                            
                            <div>
                                <div className="relative inline-block group mt-2">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button asChild className="relative inline-flex items-center justify-center bg-[#18448F] text-white hover:bg-transparent hover:text-[#18448F] border border-[#18448F] rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all">
                                        <NavLink to="/solutions-de-traitement-et-filtration-d-eau-pour-hotels-et-restaurants">
                                            Découvrir l'offre HORECA
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </NavLink>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="w-full lg:w-1/2 relative min-h-[500px] md:min-h-[600px] lg:min-h-[400px] order-1 lg:order-2">
                            {/* Sharp rectangular image */}
                            <div className="absolute inset-0 z-10 shadow-md">
                                <img src={horecaImg} className="w-full h-full object-cover rounded-none"  alt="Système de traitement d'eau HORECA" title="Expert en eau par Bricareau" />
                            </div>
                            
                            {/* Overlapping Info Block (Corporate style) */}
                            <div className="absolute -bottom-6 -left-6 lg:-left-12 z-20 bg-white p-6 lg:p-8 shadow-xl border-l-4 border-[#8CC63F] max-w-xs">
                                <div className="flex items-start gap-4">
                                    <Award className="w-8 h-8 text-[#18448F] shrink-0" />
                                    <div>
                                        <h4 className="text-[#18448F] font-bold text-lg mb-1">Qualité Supérieure</h4>
                                        <p className="text-slate-500 text-sm leading-snug">
                                            Protégez vos équipements et sublimez le goût de vos préparations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>





            {/* Features Section */}
            <section className="py-24 bg-white relative border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[#18448F] text-xs font-bold uppercase tracking-[0.15em] mb-4 block">Notre Expertise</span>
                        <h2 className="heading-pro-max text-[#18448F] mb-6">Découvrez la différence <span className="text-[#8CC63F]">Bricareau</span></h2>
                        <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            Découvrez une fusion unique entre technologie de pointe et expertise humaine.
                            Nous concevons des écosystèmes hydriques intelligents pour protéger votre santé
                            et garantir une pureté absolue à chaque goutte, pour aujourd'hui et pour demain.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="pl-6 border-l-4 border-[#18448F] hover:border-[#8CC63F] transition-colors py-2 bg-white">
                                <feature.icon className="w-8 h-8 text-[#18448F] mb-4" />
                                <h3 className="text-lg font-bold text-[#18448F] mb-2">{feature.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <div className="relative inline-block group">
                            <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                            <Button className="relative inline-flex items-center justify-center bg-[#18448F] text-white hover:bg-transparent hover:text-[#18448F] border border-[#18448F] rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all" onClick={() => navigate("/pourquoi-choisir-bricareau")}>
                                Pourquoi nous choisir ?
                            </Button>
                        </div>
                    </div>
                </div>
            </section>




            {/* Section Témoignages */}
            <section className="py-24 bg-white relative border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-12 h-0.5 bg-[#8CC63F]"></div>
                            <span className="text-[#18448F] text-xs font-bold uppercase tracking-[0.15em] leading-none">
                                La Parole à Nos Clients
                            </span>
                            <div className="w-12 h-0.5 bg-[#8CC63F]"></div>
                        </div>
                        <h2 className="heading-pro-max">
                            <span className="font-bold not-italic text-[#18448F] block">L'excellence reconnue par</span>
                            <span className="font-bold not-italic text-[#8CC63F] block">ceux qui nous font <span className="text-[#18448F]">confiance.</span></span>
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                        <div className="lg:w-1/3 py-16 lg:py-24 lg:pr-16 flex flex-col justify-center">
                            <h2 className="text-6xl font-bold text-[#18448F] mb-4">+20 000</h2>
                            <p className="text-xl font-bold text-slate-800 mb-4">Installations réussies</p>
                            <p className="text-slate-500">Des foyers et entreprises nous font confiance au quotidien pour leur eau.</p>
                        </div>
                        <div className="lg:w-2/3 py-16 lg:py-24 lg:pl-16 flex flex-col justify-center relative">
                            <div className="mb-6 flex gap-1">
                                {[...Array(caseStudyTestimonials[testiIndex]?.rating || 5)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-[#8CC63F] text-[#8CC63F]" />))}
                            </div>
                            <h4 key={`testi-${testiIndex}`} className="text-3xl text-[#18448F] font-medium leading-relaxed mb-8">
                                « {caseStudyTestimonials[testiIndex]?.text} »
                            </h4>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-[#18448F] uppercase tracking-wider text-sm">{caseStudyTestimonials[testiIndex]?.name}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-none border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-[#18448F]" onClick={() => setTestiIndex(p => p === 0 ? caseStudyTestimonials.length - 1 : p - 1)}><ChevronRight className="w-5 h-5 rotate-180" /></button>
                                    <button className="w-10 h-10 rounded-none bg-[#18448F] flex items-center justify-center hover:bg-[#18448F]/90 text-white" onClick={() => setTestiIndex(p => (p + 1) % caseStudyTestimonials.length)}><ChevronRight className="w-5 h-5" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Territoire de Service */}
            <Territoire />

            {/* CTA Section (Institutionnel & Professionnel) */}
            <section className="py-24 bg-white relative border-t border-slate-200 overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
                        
                        {/* Image Column */}
                        <div className="w-full lg:w-1/2 relative min-h-[500px] md:min-h-[600px] lg:min-h-[400px] order-1 lg:order-1">
                            {/* Sharp rectangular image */}
                            <div className="absolute inset-0 z-10 shadow-md">
                                <img src={waterTestingImg} className="w-full h-full object-cover rounded-none"  alt="Analyse d'eau" title="Systèmes d'eau sur mesure par Bricareau" />
                            </div>
                            
                            {/* Overlapping Info Block (Corporate style) */}
                            <div className="absolute -bottom-6 -right-6 lg:-right-12 z-20 bg-white p-6 lg:p-8 shadow-xl border-l-4 border-[#8CC63F] max-w-xs">
                                <div className="flex items-start gap-4">
                                    <Phone className="w-8 h-8 text-[#18448F] shrink-0" />
                                    <div>
                                        <h4 className="text-[#18448F] font-bold text-lg mb-1">Assistance Experte</h4>
                                        <p className="text-slate-500 text-sm leading-snug">
                                            Diagnostic sur mesure avec un technicien qualifié.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center py-8 order-2 lg:order-2">
                            {/* Accent Line & Category */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-0.5 bg-[#8CC63F]"></div>
                                <span className="text-[#18448F] text-xs font-bold uppercase tracking-[0.15em] leading-none">
                                    Consultation Gratuite
                                </span>
                            </div>
                            
                            <h2 className="heading-pro-max mb-8">
                                <span className="font-bold not-italic text-[#18448F] block">Laissez-nous vous aider</span>
                                <span className="font-bold not-italic text-[#18448F] block">à trouver <span className="text-[#8CC63F]">la solution adaptée.</span></span>
                            </h2>
                            
                            <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                Fini les doutes sur la qualité de votre eau. Obtenez un diagnostic sur-mesure et découvrez le système de traitement parfait pour vos besoins.
                            </p>
                            
                            <div>
                                <div className="relative inline-block group mt-2">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button className="relative inline-flex items-center justify-center bg-[#18448F] text-white hover:bg-transparent hover:text-[#18448F] border border-[#18448F] rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all" onClick={() => navigate("/consultation")}>
                                        Nous joindre
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home1;
