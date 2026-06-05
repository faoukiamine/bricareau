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
            description: "Forts d'un héritage d'excellence, nous protégeons la santé de plus de 20 000 foyers canadiens grâce à nos standards de sécurité rigoureux."
        },
        {
            icon: Settings,
            title: "Solutions multiples",
            description: "De l'ingénierie résidentielle précise aux déploiements industriels complexes, nos architectures sur mesure s'adaptent à chaque défi technique."
        },
        {
            icon: Zap,
            title: "Équipe hautement qualifiée",
            description: "Nos maîtres techniciens certifiés déploient une expertise de pointe pour garantir une installation millimétrée et une performance durable."
        },
        {
            icon: Droplets,
            title: "Service pratique",
            description: "Bénéficiez d'une continuité opérationnelle totale grâce à notre conciergerie technique réactive et nos protocoles de maintenance prédictive."
        },
        {
            icon: TrendingUp,
            title: "Rentable",
            description: "Optimisez vos actifs avec nos technologies à haut rendement, conçues pour maximiser votre retour sur investissement et réduire vos coûts énergétiques."
        },
        {
            icon: Leaf,
            title: "Engagés en faveur du développement durable",
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
            desc: "Protégez votre famille et vos électroménagers avec nos systèmes de filtration et d'adoucissement résidentiels sur-mesure.",
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
            desc: "Une eau parfaite pour révéler le goût de vos cafés, protéger vos fours vapeur et offrir des glaçons impeccables.",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80"
        },
        {
            badge: "Industriel — Procédés & Usines",
            title1: "Une performance",
            titleAccent: "inégalée,",
            titleAccentColor: "text-[#8CC63F]",
            title2: "pour votre production.",
            desc: "Des solutions de traitement d'eau à haut volume pour optimiser vos procédés industriels et réduire vos coûts opérationnels.",
            image: industrialSlideImg
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

            <section className="relative bg-[#18448F] overflow-hidden min-h-screen flex flex-col justify-center pt-24 pb-16 lg:pt-28 lg:pb-16">
                <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-50 lg:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#18448F] via-[#18448F]/40 to-transparent z-10 hidden lg:block"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#18448F] via-[#18448F]/40 to-transparent z-10 lg:hidden"></div>
                    {slides.map((slide, index) => (
                        <img 
                            key={index}
                            src={slide.image} 
                            alt={slide.category} 
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                </div>
                <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400/20 via-[#18448F]/0 to-transparent pointer-events-none z-20 transition-all duration-1000"></div>
                
                <div className="container mx-auto px-6 relative z-30">
                    <div className="max-w-3xl flex flex-col justify-center">
                        <div className="grid mb-8">
                            {slides.map((slide, index) => (
                                <div 
                                    key={index}
                                    className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out flex flex-col justify-start ${currentSlide === index ? 'opacity-100 translate-y-0 pointer-events-auto z-10' : 'opacity-0 translate-y-4 pointer-events-none z-0 invisible'}`}
                                >

                                    <h1 className="text-[50px] leading-[55px] font-sans font-bold text-white mb-6 tracking-tight">
                                        {slide.title1} <span className={`${slide.titleAccentColor} font-sans font-bold drop-shadow-lg`}>{slide.titleAccent}</span><br/> {slide.title2}
                                    </h1>
                                    
                                    <p className="text-blue-100 text-lg sm:text-xl font-light leading-relaxed max-w-xl drop-shadow-md">
                                        {slide.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-start gap-6 mb-16">
                            <div className="relative inline-block w-full sm:w-auto group">
                                <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                <Button
                                    className="relative w-full sm:w-auto bg-white text-[#18448F] hover:bg-transparent hover:text-white border border-white hover:border-blue-200 rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all"
                                    onClick={() => navigate("/consultation")}
                                >
                                    Planifiez une consultation gratuite
                                </Button>
                            </div>

                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x divide-white/20">
                            <div className="sm:pr-10">
                                <div className="text-3xl font-bold text-white mb-2">25+</div>
                                <div className="text-xs text-blue-200 uppercase tracking-widest leading-relaxed">
                                    Années d'expertise<br/> en traitement d'eau
                                </div>
                            </div>
                            <div className="sm:px-10">
                                <div className="text-3xl font-bold text-white mb-2">4</div>
                                <div className="text-xs text-blue-200 uppercase tracking-widest leading-relaxed">
                                    Régions desservies<br/> autour de Montréal
                                </div>
                            </div>
                            <div className="sm:pl-10">
                                <div className="text-3xl font-bold text-white mb-2">100%</div>
                                <div className="text-xs text-blue-200 uppercase tracking-widest leading-relaxed">
                                    Solutions adaptées,<br/> jamais génériques
                                </div>
                            </div>
                        </div>
                        
                        {/* Slide Indicators */}
                        <div className="absolute bottom-8 right-8 flex gap-3">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Ribbon */}
            <section className="bg-[#18448F] py-10 overflow-hidden border-y border-[#18448F]/20">
                <div className="w-full relative">
                    <div className="flex w-max animate-marquee gap-16 transition-opacity duration-700">
                        {/* First Set */}
                        <div className="flex gap-16 items-center px-8">
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Coréalis Pharma</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Productions Zinda</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Ils Pharma</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Google</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Kinton Ramen</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Marriott</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">IKEA</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Les peintres multicouleurs</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Imprimerie Stampa Media</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">UPS</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Biovantek</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Garderie les poussins du monde</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Calo</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Fous de l'Ile Kombucha</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Garderie les petits carillons</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Fromagerie Marie-Kadé</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Gestion & Construction Métropolitain</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Gestion immobilière Wilkar</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Geep Canada</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Injectik</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Investment ERES</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">I3 Biomedical</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Kruger</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Institut des communications graphiques</span>
                        </div>
                        {/* Second Set (Duplicate) */}
                        <div className="flex gap-16 items-center px-8">
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Coréalis Pharma</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Productions Zinda</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Ils Pharma</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Google</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Kinton Ramen</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Marriott</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">IKEA</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Les peintres multicouleurs</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Imprimerie Stampa Media</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">UPS</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Biovantek</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Garderie les poussins du monde</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Calo</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Fous de l'Ile Kombucha</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Garderie les petits carillons</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Fromagerie Marie-Kadé</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Gestion & Construction Métropolitain</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Gestion immobilière Wilkar</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Geep Canada</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Injectik</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Investment ERES</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">I3 Biomedical</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Kruger</span>
                            <span className="text-white font-bold text-xl italic whitespace-nowrap">Institut des communications graphiques</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nouvelle Section: Traitement résidentiel */}
            <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-50/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
                        <div className="max-w-2xl text-left">
                            <div className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
                                Traitement d'eau résidentiel
                            </div>
                            <h2 className="text-[50px] leading-[55px] font-sans font-light italic text-[#18448F] mb-8 tracking-tight">
                                Votre eau de robinet <span className="font-bold text-[#8CC63F]">mérite mieux.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light mb-10">
                                Votre bien-être commence par la qualité de votre eau. Fini les désagréments liés au calcaire, au chlore ou au fer qui abîment votre électroménager et assèchent votre peau. Bricareau analyse votre eau avec précision et conçoit un système sur mesure pour garantir une pureté absolue à toute votre famille.
                            </p>
                            <div className="relative inline-block group">
                                <div className="absolute inset-0 border border-[#18448F] rounded-full -translate-x-1 translate-y-1 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
                                <Button asChild size="lg" className="relative z-10 bg-[#18448F] hover:bg-blue-900 text-white rounded-full px-8 py-6 text-base shadow-xl">
                                    <NavLink to="/residentiel">
                                        Découvrir nos solutions résidentielles <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                                    </NavLink>
                                </Button>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-500/10 rounded-[2.5rem] transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                            <img src={resImg} alt="Traitement résidentiel" className="relative z-10 rounded-[2.5rem] w-full h-[400px] lg:h-[550px] object-cover shadow-2xl border border-white" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Nouvelle Section: Traitement Bureaux & Commerces */}
            <section className="py-24 bg-slate-100 relative overflow-hidden border-b border-slate-200">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-50/60 rounded-full blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
                        <div className="relative group order-2 lg:order-1">
                            <div className="absolute inset-0 bg-amber-500/10 rounded-[2.5rem] transform -translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                            <img src={comImg} alt="Bureaux et commerces" className="relative z-10 rounded-[2.5rem] w-full h-[400px] lg:h-[550px] object-cover shadow-2xl border border-white" />
                        </div>
                        <div className="max-w-2xl text-left order-1 lg:order-2">
                            <div className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
                                Bureaux & commerces
                            </div>
                            <h2 className="text-[50px] leading-[55px] font-sans font-light italic text-[#18448F] mb-8 tracking-tight">
                                L'eau traitée, un investissement <span className="font-bold italic text-[#8CC63F]">rentable</span> pour votre entreprise.
                            </h2>
                            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light mb-10">
                                Offrez à vos collaborateurs une eau de boisson pure et revitalisante. En remplaçant l'achat récurrent de bouteilles ou de bonbonnes par nos fontaines filtrantes sur réseau, vous réalisez des économies drastiques, éliminez la gestion des stocks et améliorez le bien-être quotidien au travail.
                            </p>
                            <div className="relative inline-block group">
                                <div className="absolute inset-0 border border-[#18448F] rounded-full -translate-x-1 translate-y-1 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
                                <Button asChild size="lg" className="relative z-10 bg-[#18448F] hover:bg-blue-900 text-white rounded-full px-8 py-6 text-base shadow-xl">
                                    <NavLink to="/bureau">
                                        Nos solutions pour bureaux <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                                    </NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nouvelle Section: Traitement Hôtels & Restaurants */}
            <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-50/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
                        <div className="max-w-2xl text-left">
                            <div className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
                                Hôtels & restaurants
                            </div>
                            <h2 className="text-[50px] leading-[55px] font-sans font-light italic text-[#18448F] mb-8 tracking-tight">
                                Parce que <span className="font-bold italic text-[#8CC63F]">l'expérience</span> de vos clients passe aussi par l'eau.
                            </h2>
                            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light mb-10">
                                Dans l'hôtellerie et la restauration, l'eau intervient à chaque étape — cuisine, glace, linge, vaisselle, douches. Une eau mal traitée se traduit par des coûts cachés, des équipements fragilisés et une qualité de service en dessous de vos standards.
                            </p>
                            <div className="relative inline-block group">
                                <div className="absolute inset-0 border border-[#18448F] rounded-full -translate-x-1 translate-y-1 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
                                <Button asChild size="lg" className="relative z-10 bg-[#18448F] hover:bg-blue-900 text-white rounded-full px-8 py-6 text-base shadow-xl">
                                    <NavLink to="/hotellerie-restauration">
                                        Découvrir l'offre HORECA <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                                    </NavLink>
                                </Button>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-rose-500/10 rounded-[2.5rem] transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                            <img src={horecaImg} alt="Hôtels et restaurants" className="relative z-10 rounded-[2.5rem] w-full h-[400px] lg:h-[550px] object-cover shadow-2xl border border-white" />
                        </div>
                    </div>
                </div>
            </section>





            {/* Features Section */}
            <section className="py-24 bg-white overflow-hidden relative">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">Notre Expertise</span>
                        <h2 className="text-[50px] leading-[55px] font-sans font-light italic mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Découvrez la différence <span className="font-medium not-italic">Bricareau</span></h2>
                        <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            Découvrez une fusion unique entre technologie de pointe et expertise humaine.
                            Nous concevons des écosystèmes hydriques intelligents pour protéger votre santé
                            et garantir une pureté absolue à chaque goutte, pour aujourd'hui et pour demain.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100 shadow-sm hover:shadow-md h-full">
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-[#18448F] transition-colors shadow-sm">
                                    <feature.icon className="w-8 h-8 text-[#18448F] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-4 min-h-[3.5rem] flex items-center justify-center">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium text-sm flex-1">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <div className="relative inline-block w-full sm:w-auto group">
                            <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                            <Button
                                className="relative w-full sm:w-auto bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white rounded-[2rem] h-[3.25rem] px-10 font-black uppercase tracking-widest text-[11px] transition-all border-none"
                                onClick={() => navigate("/pourquoi-choisir-bricareau")}
                            >
                                Pourquoi nous choisir ?
                            </Button>
                        </div>
                    </div>
                </div>
            </section>




            {/* Section Témoignages : Modèle Carrousel */}
            <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 items-stretch">
                        
                        {/* Left Card: Stats */}
                        <div className="rounded-3xl p-10 lg:p-12 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden">
                            {[resImg, comImg, horecaImg, commercialImg].map((img, idx) => (
                                <img 
                                    key={idx}
                                    src={img} 
                                    alt={`Secteur Bricareau ${idx}`} 
                                    className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${testiIndex % 4 === idx ? 'opacity-100' : 'opacity-0'}`} 
                                />
                            ))}
                            <div className="absolute inset-0 bg-slate-900/70 z-0"></div>
                            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-10"></div>
                            <div className="relative z-20">
                                <h3 className="text-6xl md:text-7xl font-bold mb-6 tracking-tighter">Plus de 20 000</h3>
                                <p className="text-[20px] leading-[28px] font-sans font-light text-slate-300">
                                    Des foyers et entreprises se transforment grâce à nos solutions d'eau exceptionnelles.
                                </p>
                            </div>
                            <div className="mt-24 relative z-20">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                                    TÉMOIGNAGES POSITIFS
                                </span>
                            </div>
                        </div>

                        {/* Right Card: Scrolling Testimonials */}
                        <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-2xl flex flex-col justify-center relative min-h-[500px]">
                            {/* Stars */}
                            <div className="mb-8 flex gap-1">
                                {[...Array(caseStudyTestimonials[testiIndex].rating || 5)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-[#f59e0b] text-[#f59e0b]" />
                                ))}
                            </div>
                            
                            {/* Quote Content */}
                            <div className="flex-1 flex items-center">
                                <h4 
                                    key={`quote-${testiIndex}`} 
                                    className="text-[20px] leading-[28px] font-sans font-light text-slate-500 animate-in fade-in slide-in-from-right-4 duration-500"
                                >
                                    « {caseStudyTestimonials[testiIndex].text} »
                                </h4>
                            </div>

                            {/* Profile & Navigation */}
                            <div className="mt-16 flex items-center gap-4 justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-slate-500 flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-inner">
                                        {caseStudyTestimonials[testiIndex].name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-lg">
                                            {caseStudyTestimonials[testiIndex].name}
                                        </p>
                                        <p className="text-slate-500 text-sm">Québec, CA</p>
                                    </div>
                                </div>

                                {/* Manual Navigation Buttons */}
                                <div className="flex gap-3">
                                    <button 
                                        className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300"
                                        onClick={() => setTestiIndex(p => p === 0 ? caseStudyTestimonials.length - 1 : p - 1)}
                                        aria-label="Témoignage précédent"
                                    >
                                        <ChevronRight className="w-6 h-6 rotate-180 text-slate-600" />
                                    </button>
                                    <button 
                                        className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300"
                                        onClick={() => setTestiIndex(p => (p + 1) % caseStudyTestimonials.length)}
                                        aria-label="Témoignage suivant"
                                    >
                                        <ChevronRight className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Nouvelle Section: Territoire de Service (Premium Redesign) */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
                {/* Map Full Background */}
                <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
                    {/* Centered Map Container to keep markers aligned with the image */}
                    <div className="relative w-full min-w-[1000px] max-w-[1400px] aspect-square opacity-40">
                        <img src={montrealMapImg} className="w-full h-full object-contain mix-blend-screen" alt="Carte de fond" />
                        
                        {/* Interactive Map Markers positioned relative to the square map container */}
                        {[ 
                            { id: 0, name: "Ile de Montréal", top: "50%", left: "50%" },
                            { id: 1, name: "Rive-Nord", top: "38%", left: "44%" },
                            { id: 2, name: "Rive-Sud", top: "62%", left: "56%" },
                            { id: 3, name: "Laurentides", top: "25%", left: "32%" },
                            { id: 4, name: "Lanaudière", top: "32%", left: "65%" },
                            { id: 5, name: "Montérégie", top: "68%", left: "35%" }
                        ].map((marker) => (
                            <div 
                                key={marker.id}
                                className={`absolute w-5 h-5 rounded-full border-[3px] transition-all duration-500 z-10 cursor-pointer ${hoveredRegion === marker.id ? 'bg-sky-400 border-white scale-150 shadow-[0_0_40px_rgba(56,189,248,1)] z-30' : 'bg-sky-500/50 border-sky-400/50 scale-100 hover:scale-125'}`}
                                style={{ top: marker.top, left: marker.left }}
                                onMouseEnter={() => setHoveredRegion(marker.id)}
                                onMouseLeave={() => setHoveredRegion(null)}
                            >
                                {hoveredRegion === marker.id && (
                                    <>
                                        <div className="absolute inset-0 bg-sky-400 rounded-full animate-ping opacity-75"></div>
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 border border-sky-500/30 text-white text-sm font-bold px-4 py-2 rounded-xl whitespace-nowrap shadow-2xl flex items-center gap-2 pointer-events-none">
                                            <MapPin className="w-4 h-4 text-sky-400" />
                                            {marker.name}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    {/* Vignette & Blur Overlays to blend edges */}
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,6,23,1)_70%)] pointer-events-none"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pointer-events-none">
                    <div className="text-center max-w-3xl mx-auto mb-16 pointer-events-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                            <MapPin className="w-4 h-4" />
                            <span>Territoire de service</span>
                        </div>
                        <h2 className="text-[50px] leading-[55px] font-sans font-light italic text-white mb-6 tracking-tight drop-shadow-lg">
                            Nous intervenons partout en <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 not-italic">région montréalaise.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light drop-shadow-md">
                            Qu'il s'agisse d'une résidence sur la Rive-Nord, d'un restaurant au centre-ville ou d'une usine en Montérégie — nos techniciens se déplacent dans un rayon couvrant l'ensemble de la grande région de Montréal.
                        </p>
                    </div>
                    
                    {/* Region Cards in a 3-column Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pointer-events-auto">
                        {[
                            { name: "Ile de Montréal", desc: "Intervention rapide" },
                            { name: "Rive-Nord", desc: "Laval, Terrebonne..." },
                            { name: "Rive-Sud", desc: "Longueuil, Brossard..." },
                            { name: "Laurentides", desc: "Saint-Jérôme et environs" },
                            { name: "Lanaudière", desc: "Repentigny, Mascouche..." },
                            { name: "Montérégie", desc: "Vaudreuil, Saint-Hyacinthe..." }
                        ].map((region, idx) => (
                            <div 
                                key={idx} 
                                className={`group relative bg-slate-900/40 border rounded-3xl p-6 hover:bg-slate-800/60 transition-all duration-500 overflow-hidden backdrop-blur-md cursor-pointer ${hoveredRegion === idx ? 'border-sky-500/50 shadow-[0_0_30px_rgba(14,165,233,0.2)] -translate-y-1' : 'border-white/10'}`}
                                onMouseEnter={() => setHoveredRegion(idx)}
                                onMouseLeave={() => setHoveredRegion(null)}
                            >
                                {/* Hover glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/0 to-sky-500/10 transition-opacity duration-500 ${hoveredRegion === idx ? 'opacity-100' : 'opacity-0'}`}></div>
                                
                                <div className="relative z-10 flex items-start gap-5">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500 shadow-lg ${hoveredRegion === idx ? 'bg-sky-500 text-white border-sky-400 scale-110' : 'bg-sky-500/20 text-sky-400 border-sky-500/30'}`}>
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold mb-1 transition-colors ${hoveredRegion === idx ? 'text-sky-300' : 'text-white'}`}>{region.name}</h3>
                                        <p className="text-sm text-slate-300 font-light">{region.desc}</p>
                                    </div>
                                </div>
                                
                                {/* Bottom border gradient line on hover */}
                                <div className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-700 ease-out ${hoveredRegion === idx ? 'w-full' : 'w-0'}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Creative Asymmetric CTA Section */}
            <section className="py-16 lg:py-20 relative bg-[#f8fafc] overflow-hidden">
                {/* Decorative Giant Typography */}
                <div className="absolute top-10 -left-10 text-[15rem] leading-none font-black text-slate-100/50 -rotate-6 pointer-events-none select-none">
                    H₂O
                </div>
                
                {/* Full-width right half image (Desktop) */}
                <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full z-0 group">
                    <img 
                        src={waterTestingImg} 
                        alt="Analyse d'eau" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center">
                        
                        {/* Left Content Area */}
                        <div className="w-full lg:w-1/2 relative py-12 lg:pr-16">
                            <div className="relative z-10">

                                
                                <h2 className="text-[50px] leading-[55px] font-sans font-light italic text-[#18448F] mb-8 tracking-tight">
                                    Laissez-nous vous aider à trouver <span className="font-bold italic text-[#8CC63F]">la solution adaptée.</span>
                                </h2>
                                
                                <p className="text-xl text-slate-500 font-light mb-12 max-w-lg leading-relaxed">
                                    Fini les doutes sur la qualité de votre eau. Obtenez un diagnostic sur-mesure et découvrez le système de traitement parfait pour vos besoins.
                                </p>
                                
                                <div className="relative inline-block w-full sm:w-auto group mt-6">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button 
                                        className="relative w-full sm:w-auto min-w-[200px] bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white rounded-[2rem] h-[3.25rem] px-10 font-black uppercase tracking-widest text-[11px] transition-all border-none"
                                        onClick={() => navigate("/consultation")}
                                    >
                                        Nous joindre
                                    </Button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Image/Graphic Area (Mobile) */}
                        <div className="w-full lg:hidden relative mt-8">
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <img 
                                    src={waterTestingImg} 
                                    alt="Analyse d'eau" 
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent mix-blend-overlay"></div>
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
