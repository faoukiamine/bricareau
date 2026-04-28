import React, { useEffect, useState, useRef } from "react";
import { 
    ChevronRight, 
    ArrowRight,
    CheckCircle2,
    ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { cn } from "@/lib/utils";

// Assets
import heroImg from "@/assets/WaterSoftenerInstallation.jpg";
import softenerImg from "@/assets/Water-Softener-installation.jpg";
import filtrationImg from "@/assets/woman-and-kid-drink-glass-water.jpg";
import wholeHouseImg from "@/assets/Filtration-eau-de-puits.webp";
import drinkWaterImg from "@/assets/water-dispenser in kitchen.jpg";
import uvImg from "@/assets/UV-system.jpg";

const ResidentialServices = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(0);
    const [showNav, setShowNav] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.title = "Services Résidentiels | Bricareau";

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
                        
                        // Si c'est la dernière section, on lance le timer pour cacher la nav
                        if (index === programs.length - 1) {
                            setTimeout(() => {
                                setIsNavVisible(false);
                            }, 1000);
                        } else {
                            // Si on remonte ou change de section autre que la dernière, on la réaffiche
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
            title: "Systèmes de filtration pour toute la maison",
            navTitle: "Systèmes de filtration pour toute la maison",
            desc: "Installé pour fournir de l'eau filtrée dans toute votre maison, protégeant chaque point d'eau de votre foyer.",
            points: [
                "Élimination du chlore, produits chimiques et pesticides",
                "Systèmes pour éliminer le plomb, kystes et PFOA/PFOS",
                "Élimination efficace du fer et du manganèse"
            ],
            image: wholeHouseImg,
            link: "/filtres-deau"
        },{
            title: "Adoucissement de l'eau",
            navTitle: "Adoucissement de l'eau",
            desc: "L'un des problèmes d'eau les plus courants rencontrés par les propriétaires est l'eau dure.",
            points: [
                "Élimine la dureté, le calcium et le magnésium",
                "Améliore l'efficacité des appareils électroménagers",
                "Élimine l'accumulation de tartre et les taches d'eau dure"
            ],
            image: softenerImg,
            link: "/adoucisseur-eau-residentiel"
        },
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
            desc: "L'hydratation premium s'invite dans votre quotidien avec la même technologie utilisée par vos restaurants préférés.",
            points: [
                "Approvisionnement illimité en eau plate et gazeuse filtrée",
                "Servez vos invités dans les bouteilles en verre design",
                "La même technologie que celle utilisée par vos restaurants !"
            ],
            image: drinkWaterImg,
            link: "/fontaines"
        },
        {
            title: "Systèmes de désinfection UV",
            navTitle: "Désinfection UV",
            desc: "Éliminez 99,99% des bactéries, virus et kystes sans produits chimiques grâce à la puissance des rayons ultraviolets.",
            points: [
                "Protection totale contre E. coli et coliformes",
                "Traitement écologique sans goût ni odeur",
                "Idéal pour l'eau de puits et de surface"
            ],
            image: uvImg,
            link: "/Systemes-de-desinfection-UV"
        }
    ];

    const currentArticles = [
        {
            category: "Votre maison",
            title: "Symptômes de l'eau dure dans votre maison",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
            link: "/eau-dure-les-effets-caches-sur-vos-electromenagers"
        },
        {
            category: "Sécurité",
            title: "Investir dans la protection contre les PFAS",
            image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
            link: "/comment-losmose-inverse-protege-votre-famille-des-contaminants-invisibles"
        },
        {
            category: "Santé",
            title: "Le plomb dans l'eau potable",
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
                <section className="relative h-[85vh] flex items-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={heroImg}
                            alt="Services Résidentiels Bricareau"
                            className="w-full h-full object-cover brightness-[0.4]"
                        />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-6xl md:text-[5.5rem] font-black text-white uppercase tracking-tighter mb-12">
                                <span className="text-blue-400 italic font-light lowercase">Services</span><br />
                                Résidentiel
                            </h1>
                            <Button 
                                size="lg" 
                                className="bg-[#0052ff] hover:bg-blue-700 text-white px-10 h-14 rounded-full text-xs font-black transition-all shadow-2xl uppercase tracking-widest"
                                onClick={() => scrollToProgram(0)}
                            >
                                Solutions de traitement d'eau
                            </Button>
                        </div>
                    </div>
                    <div className="absolute bottom-12 right-12 z-20">
                        <div className="w-12 h-12 rounded-full bg-[#0052ff] flex items-center justify-center text-white cursor-pointer shadow-lg animate-bounce hover:bg-blue-600 transition-colors">
                            <ArrowDown className="w-6 h-6" />
                        </div>
                    </div>
                </section>

                {/* 2. Notre Approche */}
                <section id="approach" className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 uppercase tracking-[0.4em] mb-12 font-bold">
                            <span>Accueil</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-[#0052ff]">Résidentiel</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight text-slate-900">Notre approche</h2>
                        <p className="text-lg md:text-[1.2rem] text-slate-500 font-normal leading-relaxed">
                            Il n'y a jamais eu de meilleur moment pour <span className="text-slate-900 font-semibold italic">créer une maison saine</span>. Chez Bricareau, nous comprenons que vous voulez avoir confiance en l'eau que vous buvez, avec laquelle vous vous douchez et lavez votre vaisselle. Les propriétaires méritent une eau qui est <span className="text-[#0052ff] font-semibold">saine à consommer</span> et qui n'endommagera pas votre plomberie et vos appareils.
                        </p>
                    </div>
                </section>

                {/* 3. FULL SECTION PROGRAMS SLIDER */}
                <section ref={containerRef} className="relative">
                    
                    {/* Vertical Side Nav - ADJUSTED INDENT (RETRAIT) TO ALIGN WITH LOGO */}
                    <div className={cn(
                        "fixed left-0 top-0 bottom-0 z-50 hidden lg:block transition-all duration-700",
                        showNav && isNavVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}>
                        <div className="container mx-auto px-6 md:px-12 h-full relative">
                            {/* The Nav Group - Increased left offset to align with logo icon/center */}
                            <div className="absolute left-6 md:left-24 top-1/2 -translate-y-1/2 flex flex-col gap-14">
                                {/* Connecting Vertical Line */}
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
                                                    <div className="w-4 h-4 rounded-full bg-[#0052ff] shadow-[0_0_10px_rgba(0,82,255,0.8)]" />
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

                            {/* Sauter Button aligned with the same adjusted margin */}
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
                                    className="w-full h-full object-cover transition-transform duration-[10s] scale-105"
                                    style={{ transform: activeSection === idx ? 'scale(1)' : 'scale(1.15)' }}
                                />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>

                            <div className="relative z-10 w-full max-w-[700px] animate-in fade-in slide-in-from-right-16 duration-1000 px-4 md:px-0">
                                <div className="absolute -bottom-10 -left-10 w-full h-full border-[10px] border-white/95 rounded-sm -z-10 translate-x-3 translate-y-3 lg:block hidden shadow-2xl" />
                                
                                <div className="bg-white p-12 md:p-24 shadow-2xl rounded-sm">
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

                                    <Button 
                                        variant="outline" 
                                        className="border-slate-800 text-slate-900 hover:bg-slate-900 hover:text-white rounded-full px-14 h-14 font-black uppercase tracking-[0.2em] text-[11px] transition-all"
                                        onClick={() => navigate(prog.link)}
                                    >
                                        APPRENDRE ENCORE PLUS
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* 4. Testimonials */}
                <div ref={testimonialsRef} className="bg-slate-50 py-32">
                    <TestimonialsSection 
                        filterProduct="/"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16">
                                <span className="italic font-light text-[#0052ff] block text-2xl md:text-3xl">Votre confiance.</span>
                                <span className="font-bold text-[#1e3a8a] block text-4xl md:text-6xl tracking-tighter">Notre plus grande ferté.</span>
                            </div>
                        }
                    />
                </div>

                {/* 5. Blog Articles */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex items-end justify-between mb-24 gap-10">
                            <div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-[0.4em] mb-4 font-bold">Inspiration & Conseils</div>
                                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none">Articles récents</h2>
                            </div>
                            <Button 
                                variant="ghost" 
                                className="text-slate-900 hover:text-[#0052ff] font-bold p-0 text-sm group"
                                onClick={() => navigate("/blog")}
                            >
                                Tous les articles <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                            {currentArticles.map((article, i) => (
                                <div key={i} className="group cursor-pointer" onClick={() => navigate(article.link)}>
                                    <div className="aspect-[4/3] overflow-hidden rounded-sm mb-8 shadow-2xl relative">
                                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                                    </div>
                                    <div className="text-[11px] text-[#0052ff] uppercase tracking-widest mb-4 font-black flex items-center gap-2">
                                        <div className="w-4 h-px bg-blue-200" />
                                        {article.category}
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900 mb-8 leading-tight group-hover:text-[#0052ff] transition-colors">{article.title}</h4>
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
                            Trouvez <span className="text-[#3b82f6] italic font-light lowercase">la solution adaptée.</span>
                        </h2>
                        <Button 
                            size="lg" 
                            className="bg-[#0052ff] text-white hover:bg-blue-600 px-20 h-16 rounded-full font-black uppercase tracking-[0.3em] text-[10px] transition-all shadow-2xl hover:scale-105 active:scale-95"
                            onClick={() => navigate("/consultation")}
                        >
                            Planifier une consultation
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ResidentialServices;
