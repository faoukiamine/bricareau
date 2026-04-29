import React, { useEffect, useState, useRef } from "react";
import { 
    ChevronRight, 
    ArrowRight,
    CheckCircle2,
    ArrowDown,
    Phone,
    Star,
    Quote
} from "lucide-react";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { cn } from "@/lib/utils";
import { allTestimonials } from "@/data/testimonials";

// Assets
import heroImg from "@/assets/hero-entreprise.jpg";
import softenerImg from "@/assets/Water-Softener-installation.jpg";
import filtrationImg from "@/assets/Sérénité Direct-Flow installation.png";
import wholeHouseImg from "@/assets/Filtration-eau-de-puits.webp";
import drinkWaterImg from "@/assets/20230add-4ce5-4ae6-a6dc-1f9a2c3aeb7b.jpg";
import uvImg from "@/assets/UV-system.jpg";
import sparklingImg from "@/assets/Slider_V3-204_1.png";
import partnerImg from "@/assets/waterdrop-carafe-in-use.webp";

const Bureau = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(0);
    const [showNav, setShowNav] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    
    // Case Study Testimonials State
    const caseStudyTestimonials = allTestimonials.slice(0, 8);
    const [testiIndex, setTestiIndex] = useState(0);
    
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.title = "Bureau | Bricareau";

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = sectionRefs.current.findIndex(ref => ref === entry.target);
                    if (index !== -1) {
                        setActiveSection(index);
                        
                        if (index === programs.length - 1) {
                            setTimeout(() => {
                                setIsNavVisible(false);
                            }, 1000);
                        } else {
                            setIsNavVisible(true);
                        }
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        const handleGlobalScroll = () => {
            if (containerRef.current) {
                const { offsetTop, offsetHeight } = containerRef.current;
                const isInside = window.scrollY >= offsetTop - 200 && window.scrollY < offsetTop + offsetHeight - 300;
                setShowNav(isInside);
            }
        };

        window.addEventListener("scroll", handleGlobalScroll);
        
        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleGlobalScroll);
        };
    }, []);

    const programs = [
        {
            title: "Systèmes de filtration d'eau potable",
            navTitle: "Systèmes de filtration d'eau potable",
            desc: "L'osmose inverse, c'est comme avoir une usine de purification d'eau en bouteille sous son évier.",
            points: [
                "Idéal pour l'eau potable et la cuisson",
                "Niveau maximal de purification de l'eau",
                "Procure une tranquillité d'esprit totale"
            ],
            image: filtrationImg,
            link: "/systeme-de-filtration-deau-potable"
        },
        {
            title: "Fontaines d'eau",
            navTitle: "Fontaines d'eau",
            desc: "Offrez à vos employés une eau pure et fraîche en tout temps, sans la logistique encombrante des bouteilles. Reliées directement au réseau avec filtration intégrée.",
            points: [
                "Eau froide, tempérée et chaude à la demande",
                "Filtration avancée pour une eau propre et goûteuse",
                "Réduction des coûts et de l'empreinte plastique"
            ],
            image: drinkWaterImg,
            link: "/refroidisseurs-eau-entreprises"
        },
        {
            title: "Systèmes d'eau pétillante",
            navTitle: "Systèmes d'eau pétillante",
            desc: "La qualité du café commence par la qualité de l'eau. Nos systèmes de filtration protègent vos machines et subliment chaque tasse servie à vos équipes.",
            points: [
                "Élimination du calcaire qui endommage les machines",
                "Amélioration notable du goût du café et des infusions",
                "Compatibilité avec toutes les marques de machines professionnelles"
            ],
            image: sparklingImg,
            link: "/machines-a-cafe-entreprises"
        },
        {
            title: "Systèmes centralisés de filtration d'eau pour tours de bureaux",
            navTitle: "Systèmes Centralisés de filtration d'eau pour tours de bureaux",
            desc: "Transformez l'hydratation au bureau avec de l'eau gazeuse fraîche et filtrée, disponible à la demande. Une touche premium pour vos espaces de bien-être.",
            points: [
                "Eau plate et pétillante filtrée à partir d'un seul appareil",
                "Idéal pour les salles de réunion et les espaces communs",
                "Zéro bouteille, zéro logistique, économies garanties"
            ],
            image: wholeHouseImg,
            link: "/eau-petillante-entreprises"
        }
    ];

    const currentArticles = [
        {
            category: "Bureau",
            title: "Comment une eau de qualité booste la productivité de vos équipes",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
            link: "/eau-dure-les-effets-caches-sur-vos-electromenagers"
        },
        {
            category: "Bien-être",
            title: "Les avantages d'une fontaine d'eau filtrée en milieu de travail",
            image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
            link: "/comment-losmose-inverse-protege-votre-famille-des-contaminants-invisibles"
        },
        {
            category: "Économies",
            title: "Réduire les coûts en éliminant les bouteilles d'eau au bureau",
            image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800",
            link: "/le-plomb-dans-les-vieilles-maisons-comment-se-proteger"
        }
    ];

    const scrollToProgram = (idx: number) => {
        const el = sectionRefs.current[idx];
        if (el) {
            window.scrollTo({
                top: el.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const handleSkip = () => {
        if (activeSection < programs.length - 1) {
            scrollToProgram(activeSection + 1);
        } else if (testimonialsRef.current) {
            window.scrollTo({
                top: testimonialsRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />

            <main>
                {/* 1. Hero Section */}
                <section className="relative lg:h-[800px] flex flex-col overflow-hidden bg-white">
                    {/* 1. Image Section - Overlay on Desktop */}
                    <div className="relative lg:absolute lg:inset-0 w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-full z-0 overflow-hidden">
                        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-white lg:bg-gradient-to-r lg:from-white lg:via-white/70 lg:to-transparent" />
                        <img
                            src={heroImg}
                            alt="Solutions Bureaux Bricareau"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* 2. Content Section */}
                    <div className="container relative z-10 mx-auto px-4 lg:px-12 lg:h-full flex flex-col items-start justify-center pt-20 pb-24 lg:pt-0 lg:pb-0">
                        <div className="max-w-3xl space-y-8 text-left">
                            <div className="space-y-6">
                                <h1 className="mb-6 animate-in fade-in slide-in-from-left duration-1000 tracking-tighter"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontSize: '50px', lineHeight: '55px' }}>
                                    <span className="italic font-light text-[#18448F] block">Solutions pour</span>
                                    <span className="font-bold text-[#18448F] block">Bureaux & Entreprises.</span>
                                </h1>
                                
                                <p className="max-w-xl animate-in fade-in slide-in-from-left duration-1000 delay-100 text-left text-slate-600 text-lg md:text-xl font-light leading-relaxed">
                                    Assurez à vos collaborateurs une eau pure, fraîche et saine au quotidien. Plus de 20 000 clients canadiens font confiance à l'expertise de Bricareau pour leur gestion de l'eau.
                                </p>

                                <div className="flex flex-col sm:flex-row items-start gap-8 pt-4">
                                    <ProMaxButton 
                                        variant="primary"
                                        className="w-full sm:w-auto"
                                        onClick={() => navigate("/consultation")}
                                    >
                                        Planifiez une consultation gratuite
                                    </ProMaxButton>
                                    
                                    <ProMaxButton 
                                        variant="primary"
                                        className="w-full sm:w-auto"
                                        asChild
                                    >
                                        <a href="tel:18552649328" className="flex items-center justify-center gap-2">
                                            <Phone className="w-5 h-5 flex-shrink-0" />
                                            1-855-264-9328
                                        </a>
                                    </ProMaxButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Notre Approche */}
                <section id="approach" className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 uppercase tracking-[0.4em] mb-12 font-bold">
                            <span>Accueil</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-[#18448F]">Bureau</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight text-slate-900">Notre approche</h2>
                        <p className="text-lg md:text-[1.2rem] text-slate-500 font-normal leading-relaxed">
                            En milieu de travail, la qualité de l'eau est un levier de <span className="text-slate-900 font-semibold italic">productivité, de bien-être et de performance</span>. Chez Bricareau, nous proposons des solutions d'hydratation et de traitement d'eau spécialement conçues pour les environnements de bureau. De la fontaine sans bouteille aux machines à café protégées, offrez à vos équipes une eau <span className="text-[#18448F] font-semibold">pure, fraîche et accessible</span> tout au long de la journée.
                        </p>
                    </div>
                </section>

                {/* 3. FULL SECTION PROGRAMS SLIDER */}
                <section ref={containerRef} className="relative">
                    
                    {/* Vertical Side Nav */}
                    <div className={cn(
                        "fixed left-0 top-0 bottom-0 z-50 hidden lg:block transition-all duration-700",
                        showNav && isNavVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}>
                        <div className="container mx-auto px-6 md:px-12 h-full relative">
                            <div className="absolute left-6 md:left-24 top-1/2 -translate-y-1/2 flex flex-col gap-14">
                                <div className="absolute left-[15.5px] top-6 bottom-6 w-[2.5px] bg-white/20" />
                                
                                {programs.map((prog, idx) => (
                                    <div 
                                        key={idx} 
                                        className="relative flex items-center gap-10 cursor-pointer group"
                                        onClick={() => scrollToProgram(idx)}
                                    >
                                        <div className="relative flex items-center justify-center w-8 flex-shrink-0">
                                            {activeSection === idx ? (
                                                <div className="w-10 h-10 rounded-full border-[2.5px] border-white flex items-center justify-center transition-all duration-500 bg-transparent">
                                                    <div className="w-4 h-4 rounded-full bg-[#18448F] shadow-[0_0_10px_rgba(61,106,171,0.8)]" />
                                                </div>
                                            ) : (
                                                <div className="w-2.5 h-2.5 rounded-full border-[1.5px] border-blue-400 opacity-60 group-hover:opacity-100 transition-all" />
                                            )}
                                        </div>

                                        <span className={cn(
                                            "text-base transition-all duration-500 whitespace-nowrap leading-tight",
                                            activeSection === idx 
                                                ? "text-white font-bold opacity-100 scale-105" 
                                                : "text-white/40 font-medium group-hover:text-white/60"
                                        )}>
                                            {prog.navTitle.split(' ').map((word, i) => (
                                                <React.Fragment key={i}>
                                                    {word} {i === 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className={cn(
                                "absolute bottom-12 left-6 md:left-24 flex items-center gap-3 text-white/80 hover:text-white cursor-pointer transition-all uppercase text-[10px] font-bold tracking-widest group"
                            )}
                                 onClick={handleSkip}>
                                <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-slate-900 transition-all">
                                    <ArrowDown className="w-5 h-5" />
                                </div>
                                <span>Sauter</span>
                            </div>
                        </div>
                    </div>

                    {/* The Sections */}
                    {programs.map((prog, idx) => (
                        <div 
                            key={idx}
                            ref={el => sectionRefs.current[idx] = el}
                            className="relative h-screen w-full flex items-center justify-end px-6 md:px-24 lg:px-40 overflow-hidden"
                        >
                            <div className="absolute inset-0">
                                <img 
                                    src={prog.image} 
                                    alt={prog.title}
                                    className="w-full h-full object-cover transition-transform duration-[10s]"
                                    style={{ 
                                        transform: `${activeSection === idx ? 'scale(1)' : 'scale(1.15)'} ${prog.title === "Systèmes de filtration d'eau potable" ? 'scaleX(-1)' : ''}` 
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>

                            <div className="relative z-10 w-full max-w-[700px] animate-in fade-in slide-in-from-right-16 duration-1000 px-4 md:px-0">
                                <div className="absolute -bottom-10 -left-10 w-full h-full border-[10px] border-white/95 rounded-sm -z-10 translate-x-3 translate-y-3 lg:block hidden shadow-2xl" />
                                
                                <div className="bg-white/40 backdrop-blur-lg p-12 md:p-24 shadow-2xl rounded-sm border border-white/20">
                                    <h3 className="text-3xl md:text-[2.75rem] font-bold text-slate-900 mb-8 leading-[1.2] tracking-tight">
                                        {prog.title}
                                    </h3>
                                    
                                    <p className="text-lg md:text-[1.15rem] text-slate-600 font-normal leading-relaxed mb-12">
                                        {prog.desc}
                                    </p>
                                    
                                    <ul className="space-y-6 mb-16">
                                        {prog.points.map((pt, pIdx) => (
                                            <li key={pIdx} className="flex items-center gap-5 text-[1.05rem] text-slate-800 font-medium h-fit">
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center">
                                                    <div className="w-2.5 h-1.5 border-l-2 border-b-2 border-white -rotate-45" />
                                                </div>
                                                <span className="leading-tight">{pt}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <ProMaxButton 
                                        variant="primary"
                                        onClick={() => navigate(prog.link)}
                                    >
                                        APPRENDRE ENCORE PLUS
                                    </ProMaxButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* 4. Case Study Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-16 gap-8">
                            <div className="max-w-2xl">
                                <span className="text-slate-600 font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] block mb-4">Témoignages de réussite de nos partenaires</span>
                                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-[#0f172a] leading-[1.1] tracking-tight">
                                    <span className="italic font-light text-[#18448F] block">Votre confiance.</span>
                                    <span className="font-bold text-[#18448F] block">Notre plus grande fierté.</span>
                                </h2>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex flex-col lg:flex-row relative">
                                {/* White Focus Card */}
                                <div className="relative z-10 w-full lg:w-[55%] pt-8 lg:pt-20 lg:pr-12">
                                    <div className="bg-white px-8 py-12 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 relative">
                                        <div className="flex gap-4 font-black text-slate-400 mb-8 items-center text-sm">
                                            <button
                                                className="hover:text-slate-900 transition-colors disabled:opacity-30"
                                                onClick={() => setTestiIndex(p => Math.max(0, p - 1))}
                                                disabled={testiIndex === 0}
                                            >
                                                &lt;
                                            </button>
                                            <span key={`count-${testiIndex}`} className="text-slate-900 tracking-widest">{testiIndex + 1} / {caseStudyTestimonials.length}</span>
                                            <button
                                                className="hover:text-slate-900 transition-colors disabled:opacity-30"
                                                onClick={() => setTestiIndex(p => Math.min(caseStudyTestimonials.length - 1, p + 1))}
                                                disabled={testiIndex === caseStudyTestimonials.length - 1}
                                            >
                                                &gt;
                                            </button>
                                        </div>
                                        <div className="min-h-[200px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] flex items-center mb-12">
                                            <p key={`text-${testiIndex}`} className="text-2xl sm:text-3xl font-light text-[#0f172a] italic leading-[1.6]">
                                                "{caseStudyTestimonials[testiIndex].text}"
                                            </p>
                                        </div>
                                        <div className="mb-12">
                                            <p className="font-black text-[#0f172a] mb-2">{caseStudyTestimonials[testiIndex].name}</p>
                                            <div className="flex gap-1">
                                                {[...Array(caseStudyTestimonials[testiIndex].rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-10 border-t border-slate-200/60 gap-8">
                                            <div className="flex flex-col items-start">
                                                <span className="font-black tracking-[0.2em] text-[#0f172a] text-xs uppercase">CLIENTS SATISFAITS</span>
                                                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest mt-1">PARTOUT AU QUÉBEC</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Background */}
                                <div className="w-full lg:w-[65%] lg:absolute lg:top-0 lg:right-0 lg:h-[600px] z-0 mt-8 lg:mt-0">
                                    <div className="w-full h-[400px] lg:h-full overflow-hidden bg-slate-100 flex relative">
                                        <img src={partnerImg} alt="Water solution" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply" />
                                    </div>
                                </div>
                            </div>

                            {/* Circular Badge */}
                            <div className="absolute right-4 sm:right-12 lg:right-24 bottom-16 sm:bottom-12 z-20">
                                <div className="relative w-32 h-32 flex items-center justify-center animate-[spin_15s_linear_infinite] bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-2xl">
                                    <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-[#18448F] font-sans overflow-visible">
                                        <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                        <text fontSize="8.5" fontWeight="900" letterSpacing="0.16em" fill="currentcolor">
                                            <textPath href="#circlePath" startOffset="0%" textAnchor="start">
                                                VOTRE PARTENAIRE VERS LE SUCCÈS •
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Blog Articles */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex items-end justify-between mb-24 gap-10">
                            <div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-[0.4em] mb-4 font-bold">Inspiration & Conseils</div>
                                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none">Articles récents</h2>
                            </div>
                            <ProMaxButton 
                                variant="outline" 
                                className="h-12 px-6"
                                onClick={() => navigate("/blog")}
                            >
                                Tous les articles <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </ProMaxButton>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                            {currentArticles.map((article, i) => (
                                <div key={i} className="group cursor-pointer" onClick={() => navigate(article.link)}>
                                    <div className="aspect-[4/3] overflow-hidden rounded-sm mb-8 shadow-2xl relative">
                                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                                    </div>
                                    <div className="text-[11px] text-[#18448F] uppercase tracking-widest mb-4 font-black flex items-center gap-2">
                                        <div className="w-4 h-px bg-blue-200" />
                                        {article.category}
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900 mb-8 leading-tight group-hover:text-[#18448F] transition-colors">{article.title}</h4>
                                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                        Lire la suite <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. CTA */}
                <section className="py-48 bg-[#0c1016] text-center relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10 space-y-16">
                        <h2 className="text-4xl md:text-[5.5rem] font-black text-white leading-tight tracking-tighter">
                            Trouvez <span className="text-[#18448F] italic font-light lowercase">la solution adaptée.</span>
                        </h2>
                        <ProMaxButton 
                            variant="white"
                            onClick={() => navigate("/consultation")}
                        >
                            Planifier une consultation
                        </ProMaxButton>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Bureau;
