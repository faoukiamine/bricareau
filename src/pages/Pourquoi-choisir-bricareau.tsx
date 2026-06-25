import React, { useEffect, useState, useRef } from "react";
import { 
    ChevronRight, 
    ArrowRight,
    ShieldCheck,
    Settings,
    Leaf,
    Phone,
    Activity,
    Target,
    Sparkles,
    CheckCircle2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import { cn } from "@/lib/utils";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import image2230 from '../assets/2230.jpg';
import image2119 from '../assets/2119.jpg';
import image2120 from '../assets/2120.jpg';

// Assets
import heroImg from "@/assets/10341859.jpg"; 

const WhyChooseUs = () => {
    const navigate = useNavigate();
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollCarousel = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.clientWidth * 0.6;
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        document.title = "Pourquoi Choisir Bricareau | L'Excellence en Traitement d'Eau";
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(scrolled / maxScroll);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 overflow-x-hidden">
            <Header />

            <main>
                {/* 1. CUSTOM HERO SECTION (Style Home1) */}
                <section className="relative bg-white overflow-hidden min-h-[85vh] md:min-h-screen flex flex-col justify-center pt-24 pb-8 lg:pt-28 lg:pb-16 border-b border-slate-200">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-6 pointer-events-auto">
                            <GlobalBreadcrumbs />
                        </div>
                    </div>
                    <div className="absolute inset-0 w-full h-full opacity-40 lg:opacity-100">
                        {/* Mobile Gradient (Style Residentiel/Home1) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent z-10 lg:hidden"></div>
                        {/* Desktop Gradient: 1/3 solid white, fading to transparent */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,white_50%,rgba(255,255,255,0)_90%)] z-10 hidden lg:block"></div>
                        
                        {/* Image Container */}
                        <div className="absolute right-0 top-0 w-full lg:w-[80%] h-full">
                            <img 
                                src={heroImg} 
                                className="absolute inset-0 w-full h-full object-cover object-bottom lg:object-center animate-in fade-in duration-1000"
                             alt="Eau Pure Bricareau" title="Systèmes d'eau sur mesure par Bricareau" />
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-20"></div>

                    <div className="container mx-auto px-6 relative z-30">
                        <div className="max-w-3xl flex flex-col justify-center animate-in fade-in slide-in-from-left-10 duration-1000 delay-300 fill-mode-both">
                            <div className="inline-block py-1.5 px-4 bg-slate-50 rounded-full text-[#18448F] font-bold tracking-[0.2em] uppercase text-xs mb-8 w-fit border border-slate-200 shadow-sm">
                                La Référence Québécoise
                            </div>

                            <h1 className="text-[50px] leading-[55px] font-sans font-bold text-[#18448F] mb-6 tracking-tight">
                                25 ans d'excellence,<br />
                                <span className="text-[#8CC63F] font-sans font-bold drop-shadow-sm italic">votre eau est notre métier.</span>
                            </h1>
                            
                            <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl mb-12">
                                Forts de 25 années d'expertise dans le traitement de l'eau, nous concevons des systèmes de filtration d'eau répondant aux standards de qualité les plus exigeants. Notre savoir-faire technique assure à votre foyer ou votre entreprise une eau pure, saine et sécuritaire en tout temps.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <ProMaxButton variant="primary" className="px-10 h-16 shadow-lg" onClick={() => document.getElementById('notre-vision')?.scrollIntoView({ behavior: 'smooth' })}>
                                    DÉCOUVRIR NOTRE VISION
                                </ProMaxButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. NOTRE HISTOIRE: Elevated Timeline */}
                <section className="py-32 bg-[#F8FAFC] relative" id="notre-histoire">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-24 space-y-6">
                                <span className="inline-block py-1 px-4 border border-[#18448F]/20 rounded-full text-[#18448F] font-bold tracking-[0.2em] uppercase text-xs">Notre Histoire</span>
                                <h2 className="text-3xl lg:text-5xl font-bold text-[#18448F] leading-tight">Plus de 25 ans <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] to-blue-500 italic font-light">d'engagement.</span></h2>
                            </div>

                            <div className="relative space-y-24 mb-16">
                                
                                <div className="relative md:w-1/2 md:pr-16 md:ml-0 md:text-right">
                                    <div className="hidden md:block absolute top-0 -right-[9px] w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)] ring-4 ring-blue-100" />
                                    <div className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Les Fondations</div>
                                    <h3 className="text-3xl font-semibold text-slate-900 mb-4">L'obsession de la qualité</h3>
                                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                                        Bricareau est né d'un constat simple : la qualité de l'eau municipale et de puits n'était pas à la hauteur des besoins en santé et en confort des familles. Nous avons commencé avec une mission claire : sourcer les meilleures technologies de filtration mondiales.
                                    </p>
                                </div>

                                <div className="relative md:w-1/2 md:pl-16 md:ml-auto">
                                    <div className="hidden md:block absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)] ring-4 ring-blue-100" />
                                    <div className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">L'Expansion</div>
                                    <h3 className="text-3xl font-semibold text-slate-900 mb-4">Expertise Multi-Sectorielle</h3>
                                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                                        Face à la demande croissante, nous avons étendu notre expertise au secteur industriel et commercial, développant des solutions d'ingénierie sur-mesure capables de répondre aux réalités complexes de l'eau au Québec.
                                    </p>
                                </div>

                                <div className="relative md:w-1/2 md:pr-16 md:ml-0 md:text-right">
                                    <div className="hidden md:block absolute top-0 -right-[9px] w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)] ring-4 ring-blue-100" />
                                    <div className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Aujourd'hui</div>
                                    <h3 className="text-3xl font-semibold text-slate-900 mb-4">La Référence Québécoise</h3>
                                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                                        Avec plus de 20 000 foyers et entreprises protégés, Bricareau est devenu l'incontournable du traitement de l'eau. Une équipe de maîtres techniciens dédiés et une réputation bâtie sur la confiance absolue de nos clients.
                                    </p>
                                </div>

                                {/* Absolute line for desktop center */}
                                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-[1px] w-0.5 bg-gradient-to-b from-blue-600 via-[#8CC63F] to-transparent" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. NOTRE VISION: L'Immersion Sombre */}
                <section className="relative min-h-screen py-32 flex items-center bg-slate-900 overflow-hidden" id="notre-vision">
                    <div className="absolute inset-0 z-0">
                        {/* Motif abstrait / Halos */}
                        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#8CC63F]/40 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite]" />
                        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-[#18448F]/30 rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite_reverse]" />
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
                    </div>

                    <div className="relative z-10 container mx-auto px-6 text-center">
                        <span className="inline-block py-1 px-4 border border-[#8CC63F] rounded-full text-[#8CC63F] font-bold tracking-[0.2em] uppercase text-xs mb-10">Notre Vision</span>
                        <h2 
                            className="text-white mb-12"
                            style={{
                                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                fontWeight: 300,
                                fontSize: '48px',
                                lineHeight: '48px'
                            }}
                        >
                            <span style={{ fontWeight: 700 }}>Redéfinir le</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] to-blue-500 italic">standard de pureté.</span>
                        </h2>
                        <p className="text-slate-300 text-xl md:text-3xl font-light leading-relaxed max-w-4xl mx-auto">
                            Nous croyons que chaque foyer et entreprise québécoise mérite un accès inconditionnel à une eau parfaite, alliant santé humaine et préservation écologique. L'eau n'est pas qu'une ressource, c'est le fondement de notre avenir.
                        </p>
                    </div>
                </section>

                {/* 3. NOTRE MISSION: Le Contraste Lumineux (Éditorial) */}
                <section className="min-h-screen flex items-center py-40 bg-white relative overflow-hidden" id="notre-mission">
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <span className="inline-block py-1 px-4 border border-[#18448F]/20 rounded-full text-[#18448F] font-bold tracking-[0.2em] uppercase text-xs mb-10">Notre Mission</span>
                        <h2 
                            className="font-light text-slate-900 tracking-tighter max-w-5xl mx-auto"
                            style={{ fontSize: '48px', lineHeight: '48px' }}
                        >
                            Protéger la santé des <span className="font-bold text-[#18448F]">foyers</span> et optimiser la performance des <span className="font-bold text-[#18448F]">entreprises</span> en offrant des solutions d'eau d'une <span className="italic font-serif text-[#8CC63F]">pureté absolue</span>.
                        </h2>
                    </div>
                </section>

                {/* 4. NOS VALEURS: Le Layout Asymétrique (Split-Screen) */}
                <section className="py-32 bg-slate-50 border-t border-slate-200 overflow-hidden" id="nos-valeurs">
                    <div className="container mx-auto px-6 mb-24 text-center">
                        <span className="inline-block py-1 px-4 border border-[#8CC63F]/30 rounded-full text-[#8CC63F] font-bold tracking-[0.2em] uppercase text-xs">Nos Valeurs Fondamentales</span>
                    </div>

                    {/* Valeur 1 : Texte à gauche, Déco à droite */}
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 mb-32 px-6">
                        <div className="lg:w-1/2 space-y-8">
                            <h3 className="text-3xl lg:text-5xl font-light text-slate-900 leading-tight">
                                Utiliser de nouvelles <br/><span className="font-bold text-[#8CC63F]">technologies au quotidien</span>
                            </h3>
                            <ul className="space-y-6 text-slate-600 font-light text-lg">
                                <li className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-[#8CC63F] mt-2 shrink-0" />
                                    <span>Nous maximisons nos efforts en recherche et développement pour offrir des solutions de purification d'eau toujours plus performantes et durables.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-[#8CC63F] mt-2 shrink-0" />
                                    <span>Nous jumelons plus de 25 ans d'expertise avec des méthodologies d'ingénierie de pointe pour garantir à nos clients une eau d'une pureté absolue.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-[#8CC63F] mt-2 shrink-0" />
                                    <span>Nous nous engageons à sourcer les meilleures technologies de filtration et de purification d'eau mondiales pour vous offrir des procédés optimaux, sans jamais sacrifier la qualité de votre eau.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2 w-full min-h-[500px] md:min-h-[600px] lg:min-h-0 lg:aspect-square relative rounded-[3rem] overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-[#18448F]/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700" />
                            <img src={image2119} className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"  alt="Technologies de pointe - expert en eau" title="Expert en eau par Bricareau" />
                        </div>
                    </div>

                    {/* Valeur 2 : Déco à gauche, Texte à droite */}
                    <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 px-6">
                        <div className="lg:w-1/2 w-full min-h-[500px] md:min-h-[600px] lg:min-h-0 lg:aspect-square relative rounded-[3rem] overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-[#8CC63F]/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700" />
                            <img src={image2120} className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"  alt="Entreprise socialement responsable - traitement d'eau Québec" title="Traitement d'eau Québec par Bricareau" />
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <h3 className="text-3xl lg:text-5xl font-light text-slate-900 leading-tight">
                                Être une entreprise <br/><span className="font-bold text-[#18448F]">socialement responsable</span>
                            </h3>
                            <ul className="space-y-6 text-slate-600 font-light text-lg">
                                <li className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-[#18448F] mt-2 shrink-0" />
                                    <span>Nous faisons preuve d'une transparence totale et d'une honnêteté rigoureuse dans tous nos diagnostics hydriques.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-[#18448F] mt-2 shrink-0" />
                                    <span>Nous attachons une importance vitale à l'environnement, en concevant des systèmes qui réduisent le gaspillage et éliminent la dépendance aux plastiques à usage unique.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-[#18448F] mt-2 shrink-0" />
                                    <span>Nous plaçons la santé et le bien-être des familles et des entreprises au centre de toutes nos prises de décision.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-[#18448F] mt-2 shrink-0" />
                                    <span>Nous établissons des normes d'éthique et de rendement extrêmement élevées, car nous considérons l'accès à une eau saine comme fondamental.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>



                {/* 5. POURQUOI NOUS SOMMES LA RÉFÉRENCE: 3D Bento Grid */}
                <section className="py-32 bg-white relative" id="pourquoi-reference">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24 space-y-4">
                            <h2 className="text-3xl lg:text-5xl font-bold text-[#18448F] leading-tight">
                                Pourquoi nous sommes <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] to-blue-500 italic font-light">la référence au Québec ?</span>
                            </h2>
                        </div>

                        <div className="relative mt-20 max-w-7xl mx-auto">
                            {/* Navigation Arrows (Tablet only) */}
                            <button 
                                onClick={() => scrollCarousel('left')}
                                className="hidden md:flex lg:hidden absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl border border-slate-200 items-center justify-center z-10 text-[#18448F] hover:bg-slate-50 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                            </button>
                            <button 
                                onClick={() => scrollCarousel('right')}
                                className="hidden md:flex lg:hidden absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl border border-slate-200 items-center justify-center z-10 text-[#18448F] hover:bg-slate-50 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </button>

                            <div 
                                ref={carouselRef}
                                className="flex flex-col md:flex-row md:items-stretch lg:grid grid-cols-1 lg:grid-cols-3 gap-8 md:overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide pb-8 lg:pb-0"
                            >
                                {/* Pilier 01 */}
                                <div className="md:min-w-[60vw] lg:min-w-0 snap-center group flex flex-col gap-8 items-start p-10 lg:p-12 border border-slate-200/60 hover:bg-slate-50/50 transition-colors duration-500 rounded-3xl h-auto md:h-auto lg:h-full self-stretch">
                                    <div className="text-5xl md:text-6xl font-light text-[#18448F]/20 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8CC63F] group-hover:to-blue-500 transition-all duration-500 tracking-tighter mb-4">
                                        01.
                                    </div>
                                    <div className="flex-1 space-y-4 pt-2">
                                        <h3 className="text-3xl font-semibold text-slate-900 group-hover:text-[#18448F] transition-colors duration-300 tracking-tight">Expertise technique avancée</h3>
                                        <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                                            Nous procédons à une analyse physico-chimique rigoureuse de votre eau afin de concevoir un système de traitement entièrement sur mesure, garantissant une efficacité et une fiabilité de pointe.
                                        </p>
                                    </div>
                                </div>

                                {/* Pilier 02 */}
                                <div className="md:min-w-[60vw] lg:min-w-0 snap-center group flex flex-col gap-8 items-start p-10 lg:p-12 border border-slate-200/60 hover:bg-slate-50/50 transition-colors duration-500 rounded-3xl h-auto md:h-auto lg:h-full self-stretch">
                                    <div className="text-5xl md:text-6xl font-light text-[#18448F]/20 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8CC63F] group-hover:to-blue-500 transition-all duration-500 tracking-tighter mb-4">
                                        02.
                                    </div>
                                    <div className="flex-1 space-y-4 pt-2">
                                        <h3 className="text-3xl font-semibold text-slate-900 group-hover:text-[#18448F] transition-colors duration-300 tracking-tight">Installation de qualité supérieure</h3>
                                        <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                                            Nos techniciens spécialisés assurent une exécution impeccable de chaque projet. L'installation est conçue pour optimiser l'espace tout en respectant scrupuleusement les normes de l'industrie et l'intégrité de votre propriété.
                                        </p>
                                    </div>
                                </div>

                                {/* Pilier 03 */}
                                <div className="md:min-w-[60vw] lg:min-w-0 snap-center group flex flex-col gap-8 items-start p-10 lg:p-12 border border-slate-200/60 hover:bg-slate-50/50 transition-colors duration-500 rounded-3xl h-auto md:h-auto lg:h-full self-stretch">
                                    <div className="text-5xl md:text-6xl font-light text-[#18448F]/20 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8CC63F] group-hover:to-blue-500 transition-all duration-500 tracking-tighter mb-4">
                                        03.
                                    </div>
                                    <div className="flex-1 space-y-4 pt-2">
                                        <h3 className="text-3xl font-semibold text-slate-900 group-hover:text-[#18448F] transition-colors duration-300 tracking-tight">Service client dédié</h3>
                                        <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                                            Nous nous engageons à offrir un suivi technique continu. Notre équipe assure un service après-vente rapide, une maintenance rigoureuse et vous fait bénéficier de garanties solides sur l'ensemble de nos équipements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5.5 NOTRE EXPERT (GEO / E-E-A-T) */}
                <section className="py-24 bg-slate-50 border-t border-slate-200" id="notre-expert">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/3 relative">
                                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative bg-slate-200">
                                    <div className="absolute inset-0 bg-[#18448F]/10 mix-blend-multiply z-10"></div>
                                    <img 
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                                        alt="Saïd Oussara - Expert en traitement d'eau" 
                                        className="w-full h-full object-cover grayscale-[20%]"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#8CC63F]/20 flex items-center justify-center text-[#8CC63F]">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-slate-900">25+ ans</p>
                                            <p className="text-sm font-medium text-slate-500">d'expertise reconnue</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-2/3 space-y-6">
                                <span className="inline-block py-1 px-4 border border-[#18448F]/20 rounded-full text-[#18448F] font-bold tracking-[0.2em] uppercase text-xs">L'Expertise Humaine</span>
                                <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
                                    L'engagement de <span className="text-[#18448F]">Saïd Oussara</span>
                                </h2>
                                <h3 className="text-xl text-[#8CC63F] font-medium italic">Fondateur & Maître Technicien en Traitement de l'Eau</h3>
                                <p className="text-slate-600 text-lg leading-relaxed font-light">
                                    Fort de plus de 25 années d'expérience sur le terrain au Québec, Saïd Oussara a bâti Bricareau sur une conviction profonde : la qualité de l'eau ne souffre d'aucun compromis. Son expertise pointue en hydraulique, en chimie de l'eau et en ingénierie de filtration a permis de résoudre les cas de contamination les plus complexes.
                                </p>
                                <ul className="space-y-4 pt-4 text-slate-600">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#18448F] shrink-0" />
                                        <span>Spécialiste accrédité en systèmes d'osmose inverse et désinfection UV.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#18448F] shrink-0" />
                                        <span>Consultant privilégié pour des installations industrielles majeures (Coréalis Pharma, Google).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#18448F] shrink-0" />
                                        <span>Garant de la norme de qualité Bricareau sur chaque projet déployé.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. REDESIGNED CTA: Éditorial Aligné à Droite avec Image Full Width (Dark Mode) */}
                <section className="relative overflow-hidden min-h-[80vh] flex items-center py-32">
                    {/* Background Image Full Width */}
                    <div className="absolute inset-0 z-0">
                        <img src={image2230} className="w-full h-full object-cover object-center"  alt="Excellence Bricareau" title="Filtration Bricareau par Bricareau" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/60 to-slate-900/95" />
                    </div>
                    
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 relative z-10">
                        <div className="md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-7 space-y-8 lg:space-y-10 text-center lg:text-left md:px-0 lg:pl-12">
                            <h2 
                                className="text-white"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontWeight: 300,
                                    fontSize: '48px',
                                    lineHeight: '52px'
                                }}
                            >
                                <span className="text-[#8CC63F]" style={{ fontWeight: 700 }}>L'Excellence</span> <br /><span>n'attend pas.</span>
                            </h2>
                            <p className="text-slate-300 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Passez à l'étape supérieure et ne faites plus aucun compromis sur la qualité de votre eau. Échangez avec nos spécialistes d'eau pour analyser vos besoins et entamer votre transition vers une eau filtrée, pure et saine.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <ProMaxButton variant="white" className="px-12 h-16 shadow-[0_0_40px_rgba(255,255,255,0.2)] text-[#18448F] font-bold" onClick={() => navigate("/consultation")}>Nous contacter</ProMaxButton>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default WhyChooseUs;
