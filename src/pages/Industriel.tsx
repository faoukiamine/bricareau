import React, { useEffect } from "react";
import { ArrowRight, Download, ChevronRight, Settings, ShieldCheck, Zap, Factory, LineChart, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Assumed existing assets, mapping to the visual elements in the mockup
import heroImg from "@/assets/2127.webp";
import treatmentImg1 from "@/assets/skids-sur-mesure.jpg";
import treatmentLarge from "@/assets/Filtres d'eau industriels.jpg";

import sol1 from "@/assets/adoucissement-industriel.jpg";
import sol2 from "@/assets/DI-Water-System.jpg";
import sol3 from "@/assets/jpg100.jpg";
import sol4 from "@/assets/Aquaviva-Cannes-480x355.png";
import sol5 from "@/assets/Commercial-Water-Softener.webp";
import sol6 from "@/assets/Pulsafeeder dosing group.jpg";

import eq1 from "@/assets/IMG_FILTRE_QFINOX.jpg";
import eq2 from "@/assets/high_efficiency_commercial_softener_render_1778896510314.png";
import eq3 from "@/assets/filtre-catalytique-new.jpg";
import longeviteImg from "@/assets/2126.webp";

import partnerBg from "@/assets/Hero-Entreprise.jpg";

const Industriel = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        document.title = "Solutions Industrielles | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    const solutions = [
        { title: "Filtration sur média spécialisé", img: sol5, tag: "SÉPARATION" },
        { title: "Adoucissement de l'eau industrielle", img: sol1, objectPosition: "object-top", tag: "CONDITIONNEMENT" },
        { title: "Systèmes de dosage chimique", img: sol6, tag: "TRAITEMENT" },
        { title: "Osmose inverse et déminéralisation", img: sol3, tag: "PURIFICATION" },
        { title: "Déminéralisation & Déionisation de l'eau", img: sol2, tag: "HAUTE PURETÉ" },
        { title: "Désinfection par ultraviolets", img: sol4, tag: "STÉRILISATION" }
    ];

    const downloads = [
        "Brochure institutionnelle", "Fiche technique Adoucisseurs", "Guide traitement chaudières",
        "Documentation Osmose", "Certifications ISO", "Normes sanitaires",
        "Fiche technique Filtres", "Brochure UV", "Manuel de maintenance"
    ];

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />

            <main>
                {/* 1. HERO SECTION (Inline Style) */}
                <section className="relative bg-white overflow-hidden min-h-screen flex flex-col justify-center pt-24 pb-16 lg:pt-28 lg:pb-16 border-b border-slate-200">
                    <div className="absolute inset-0 w-full h-full opacity-40 lg:opacity-100">
                        {/* Mobile Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent z-10 lg:hidden"></div>
                        {/* Desktop Gradient: 1/3 solid white, fading to transparent */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,white_12.5%,rgba(255,255,255,0)_100%)] z-10 hidden lg:block"></div>
                        
                        <div className="absolute right-0 top-0 w-full h-full">
                            <img 
                                src={heroImg} 
                                alt="Solutions Industrielles Bricareau" 
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-20"></div>
                    
                    <div className="container mx-auto px-6 relative z-30">
                        <div className="max-w-3xl flex flex-col justify-center">
                            <div className="mb-8">
                                <h1 className="text-[50px] leading-[55px] font-sans font-bold mb-6 tracking-tight">
                                    <span className="text-[#18448F]">La puissance de l'eau,</span><br/>
                                    <span className="text-[#8CC63F]">optimisée pour vos procédés.</span>
                                </h1>
                                
                                <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl">
                                    Que ce soit pour la production de vapeur, le refroidissement ou les processus de fabrication, nous offrons une gamme complète d'équipements pour garantir une meilleure qualité de l'eau industrielle.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row items-start gap-6 mb-16">
                                <div className="relative inline-block w-full sm:w-auto group">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <button
                                        className="relative flex items-center justify-center w-full sm:w-auto bg-[#18448F] text-white hover:bg-transparent hover:text-[#18448F] border border-[#18448F] rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all"
                                        onClick={() => navigate("/consultation")}
                                    >
                                        Demandez une consultation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. EDITORIAL INTRO (Split Layout) */}
                <section className="relative py-24 md:py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                            {/* Text (Left) */}
                            <div className="lg:w-1/2 space-y-10">
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
                                    <span className="block text-[#18448F]">Traitement de</span>
                                    <span className="block text-[#8CC63F]">l'eau industriel.</span>
                                </h2>
                                <p className="text-slate-600 text-lg font-light leading-relaxed">
                                    L'optimisation des performances industrielles passe inévitablement par un traitement de l'eau rigoureusement adapté. Notre expertise reconnue nous permet de concevoir et de déployer des solutions sur mesure qui répondent aux normes les plus exigeantes de votre secteur d'activité, tout en réduisant de manière drastique votre empreinte écologique.
                                </p>

                                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                                    <div className="space-y-3">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                                            <Factory className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 uppercase tracking-tight text-sm">Normes Industrielles</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">Des solutions conçues pour résister aux environnements les plus rigoureux.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="w-12 h-12 rounded-2xl bg-[#8CC63F]/10 flex items-center justify-center">
                                            <ShieldCheck className="w-6 h-6 text-[#8CC63F]" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 uppercase tracking-tight text-sm">Protection Continue</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">Garantissez la longévité de vos chaudières et tours de refroidissement.</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Image (Right) */}
                            <div className="lg:w-1/2 relative">
                                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                    <img 
                                        src={treatmentLarge} 
                                        alt="Ingénierie Bricareau" 
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. BENTO GRID PORTFOLIO */}
                <section className="relative py-24 md:py-32 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="mb-20">
                            <h2 
                                className="text-slate-900 mb-8"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '48px',
                                    lineHeight: '52px'
                                }}
                            >
                                <span className="block text-[#18448F]">Toutes nos solutions</span>
                                <span className="block text-[#8CC63F]">pour l'industrie.</span>
                            </h2>
                            <p className="text-slate-600 text-xl font-light leading-relaxed max-w-3xl">
                                Une gamme exhaustive d'équipements de traitement, dimensionnée pour répondre aux débits massifs et aux exigences chimiques des procédés industriels.
                            </p>
                        </div>

                        {/* Bento Grid Layout (Asymétrique) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
                            {solutions.map((sol, idx) => (
                                <div 
                                    key={idx} 
                                    className={`group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col justify-end p-8 ${
                                        idx === 0 || idx === 3 ? "lg:col-span-2" : "lg:col-span-1"
                                    }`}
                                >
                                    <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                                        <img 
                                            src={sol.img} 
                                            alt={sol.title} 
                                            className={`w-full h-full ${idx % 2 === 0 ? "object-contain p-8 mix-blend-multiply" : "object-cover opacity-80 mix-blend-multiply"} transition-transform duration-700 group-hover:scale-105 ${sol.objectPosition || ''}`} 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                                    </div>
                                    <div className="relative z-10 space-y-4 mt-auto">
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${idx % 2 === 0 ? "text-[#8CC63F]" : "text-blue-600"}`}>
                                            {sol.tag}
                                        </span>
                                        <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-tight">
                                            {sol.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. PILIERS (AVANTAGES OPÉRATIONNELS) */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="mb-20">
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
                                <span className="block text-[#18448F]">Des avantages concrets,</span>
                                <span className="block text-[#8CC63F]">pour votre productivité.</span>
                            </h2>
                        </div>
                        <div className="space-y-32">
                            {/* Pilier 1 : Image Left, Text Right */}
                            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                                <div className="lg:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                    <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay z-10" />
                                    <img src={treatmentImg1} alt="Rendement et Énergie" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="lg:w-1/2 w-full space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <LineChart className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <h3 className="text-3xl font-medium tracking-tight text-slate-900">Rendement Supérieur.</h3>
                                    </div>
                                    <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                                            <p>Diminution des coûts opérationnels par l'amélioration du rendement global.</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-3 shrink-0" />
                                            <p>Fiabilisation et optimisation des cycles thermiques de vos procédés.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pilier 2 : Text Left, Image Right */}
                            <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
                                <div className="lg:w-1/2 w-full space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-[#8CC63F]/10 flex items-center justify-center shrink-0">
                                            <Clock className="w-8 h-8 text-[#8CC63F]" />
                                        </div>
                                        <h3 className="text-3xl font-medium tracking-tight text-slate-900">Longévité des Équipements.</h3>
                                    </div>
                                    <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] mt-3 shrink-0" />
                                            <p>Prévention totale contre l'entartrage et la corrosion, prolongeant drastiquement la vie de vos installations.</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] mt-3 shrink-0" />
                                            <p>Diminution des temps d'arrêt pour une maintenance prédictive et maîtrisée.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                                    <img src={longeviteImg} alt="Durée de vie des équipements" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                {/* 6. ÉTUDES DE CAS */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="mb-16">
                            <span className="text-[10px] font-black text-[#8CC63F] uppercase tracking-[0.4em] block mb-4">RESSOURCES CONNEXES</span>
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
                                <span className="block text-[#18448F]">Études de cas</span>
                                <span className="block text-[#8CC63F]">& Réalisations.</span>
                            </h2>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { tag: "Microbrasserie", title: "Profilage minéral complet d'une microbrasserie à Montréal.", desc: "Découvrez comment notre solution d'osmose inverse couplée à une minéralisation précise a stabilisé le goût des IPA." },
                                { tag: "Brasserie de débit", title: "Déchloration complète et filtration à Sherbrooke.", desc: "Élimination absolue de tout composé phénolique et microbiologique grâce à un système d'ultrafiltration industrielle." },
                                { tag: "Économie circulaire", title: "Réutilisation d'eau et optimisation CIP.", desc: "Une solution de filtration innovante permettant de recycler plus de 30% de l'eau de lavage et de rinçage chaud des cuves." }
                            ].map((study, idx) => (
                                <div key={idx} className="bg-slate-50 rounded-3xl p-10 flex flex-col h-full group hover:bg-[#18448F] transition-colors duration-500 cursor-pointer">
                                    <span className="text-[#8CC63F] text-[10px] font-black tracking-widest uppercase mb-4">{study.tag}</span>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-6 leading-tight transition-colors">{study.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-12 flex-grow group-hover:text-blue-100 transition-colors">{study.desc}</p>
                                    <div className="pt-6 border-t border-slate-200 group-hover:border-blue-800 flex items-center justify-between mt-auto transition-colors">
                                        <button className="text-[10px] font-black tracking-widest uppercase text-slate-900 group-hover:text-white flex items-center gap-2 transition-colors">
                                            Lire l'étude de cas <ChevronRight className="w-3 h-3" />
                                        </button>
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

export default Industriel;
