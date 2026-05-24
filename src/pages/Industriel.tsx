import React, { useEffect, useState } from "react";
import { ArrowRight, Download, ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

// Assumed existing assets, mapping to the visual elements in the mockup
import heroImg from "@/assets/industrial_filtration_facility_hero_1778897015657.png";
import treatmentImg1 from "@/assets/skids-sur-mesure.jpg";
import treatmentImg2 from "@/assets/Multimedia filters.png";
import treatmentLarge from "@/assets/Filtres d'eau industriels.jpg";

import sol1 from "@/assets/adoucissement-industriel.jpg";
import sol2 from "@/assets/DI-Water-System.jpg";
import sol3 from "@/assets/jpg100.jpg";
import sol4 from "@/assets/Aquaviva-Cannes-480x355.png";
import sol5 from "@/assets/Commercial-Water-Softener.webp";
import sol6 from "@/assets/Pulsafeeder dosing group.jpg";

import caseStudy1 from "@/assets/industrial_hero_pro_max.png";
import caseStudy2 from "@/assets/water_system_blueprint_render_1778902045750.png";

import eq1 from "@/assets/IMG_FILTRE_QFINOX.jpg";
import eq2 from "@/assets/high_efficiency_commercial_softener_render_1778896510314.png";
import eq3 from "@/assets/filtre-catalytique-new.jpg";

import partnerBg from "@/assets/Hero-Entreprise.jpg";

const Industriel = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        document.title = "Solutions Industrielles | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    const solutions = [
        { title: "Filtration sur média spécialisé", img: sol5 },
        { title: "Adoucissement de l'eau industrielle", img: sol1, objectPosition: "object-top" },
        { title: "Systèmes de dosage chimique", img: sol6 },
        { title: "Osmose inverse et déminéralisation", img: sol3 },
        { title: "Déminéralisation & Déionisation de l'eau", img: sol2 },
        { title: "Désinfection par ultraviolets", img: sol4 }
    ];

    const downloads = [
        "Brochure institutionnelle", "Fiche technique Adoucisseurs", "Guide traitement chaudières",
        "Documentation Osmose", "Certifications ISO", "Normes sanitaires",
        "Fiche technique Filtres", "Brochure UV", "Manuel de maintenance"
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />

            <main>
                {/* 1. CINEMATIC HERO */}
                <Hero 
                    image={heroImg}
                    highlightedTitle="Solutions "
                    mainTitle="d'ingénierie de l'eau."
                    subtitle="Que ce soit pour la production de vapeur, le refroidissement ou les processus de fabrication, nous offrons une gamme complète d'équipements pour garantir la qualité de l'eau industrielle."
                    ctaText="CONTACTEZ NOUS"
                    ctaLink="/consultation"
                    showPhone={true}
                    badge="Solutions Industrielles"
                />

                {/* 2. TRAITEMENT DE L'EAU INDUSTRIEL */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16">
                            <div className="lg:w-1/2 space-y-8">
                                <div className="border-l-4 border-blue-600 pl-6">
                                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                                        Traitement de l'eau industriel
                                    </h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    L'optimisation des performances passe par un traitement de l'eau adapté. Notre expertise reconnue nous permet de concevoir et de déployer des solutions sur mesure qui répondent aux normes les plus exigeantes de votre secteur d'activité, tout en réduisant votre empreinte écologique.
                                </p>
                                <div className="flex gap-6 mt-10">
                                    <img src={treatmentImg1} alt="System 1" className="w-1/2 h-48 object-cover rounded shadow-md" />
                                    <img src={treatmentImg2} alt="System 2" className="w-1/2 h-48 object-cover rounded shadow-md" />
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <img src={treatmentLarge} alt="Ingénieur" className="w-full h-full min-h-[400px] object-cover rounded shadow-lg" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. BANDEAU BLEU CARACTÉRISTIQUES */}
                <section className="bg-blue-600 text-white py-16">
                    <div className="container mx-auto px-6">
                        <h3 className="text-2xl font-bold mb-10 border-l-4 border-white pl-4">
                            Bénéfices Opérationnels
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-blue-50">
                            <ul className="space-y-4">
                                <li className="flex gap-3"><ChevronRight className="shrink-0 w-5 h-5" /> Augmentation du rendement</li>
                                <li className="flex gap-3"><ChevronRight className="shrink-0 w-5 h-5" /> Réduction des coûts d'énergie</li>
                                <li className="flex gap-3"><ChevronRight className="shrink-0 w-5 h-5" /> Durée de vie prolongée des équipements</li>
                            </ul>
                            <ul className="space-y-4">
                                <li className="flex gap-3"><ChevronRight className="shrink-0 w-5 h-5" /> Conformité environnementale</li>
                                <li className="flex gap-3"><ChevronRight className="shrink-0 w-5 h-5" /> Sécurité des installations</li>
                                <li className="flex gap-3"><ChevronRight className="shrink-0 w-5 h-5" /> Maintenance prédictive</li>
                            </ul>
                            <ul className="space-y-4">
                                <li className="flex gap-3"><ChevronRight className="shrink-0 w-5 h-5" /> Contrôle qualité continu</li>
                                <li className="flex gap-3"><ChevronRight className="shrink-0 w-5 h-5" /> Assistance technique 24/7</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4. SOLUTIONS (BENTO GRID) */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-blue-900 mb-16 border-l-4 border-blue-600 pl-4 inline-block">
                            Les solutions de traitement d'eau pour toutes les industries
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {solutions.map((sol, idx) => (
                                <div key={idx} className="relative group h-72 md:h-80 overflow-hidden rounded shadow-md">
                                    <img src={sol.img} alt={sol.title} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${sol.objectPosition || ''}`} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                                        <div className="border-l-2 border-white pl-4 mb-4">
                                            <h3 className="text-xl font-bold">{sol.title}</h3>
                                        </div>
                                        <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium transition-colors w-max">
                                            En savoir plus <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. CERCLE DE PROCESSUS */}
                <section className="py-24 bg-blue-600 text-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            {/* Graphical representation of the circle */}
                            <div className="lg:w-1/2 flex justify-center">
                                <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-full border-8 border-white/20 p-4">
                                    <div className="absolute inset-0 m-4 rounded-full border border-white/30 animate-spin-slow" />
                                    {/* Pseudo-slices using absolute positioning */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 overflow-hidden origin-bottom">
                                        <img src={treatmentImg1} className="w-[200%] h-[200%] max-w-none object-cover opacity-80" alt="" />
                                    </div>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 overflow-hidden origin-bottom rotate-60">
                                        <img src={sol1} className="w-[200%] h-[200%] max-w-none object-cover opacity-80" alt="" />
                                    </div>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 overflow-hidden origin-bottom rotate-120">
                                        <img src={sol2} className="w-[200%] h-[200%] max-w-none object-cover opacity-80" alt="" />
                                    </div>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 overflow-hidden origin-bottom rotate-180">
                                        <img src={sol3} className="w-[200%] h-[200%] max-w-none object-cover opacity-80" alt="" />
                                    </div>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 overflow-hidden origin-bottom rotate-240">
                                        <img src={sol4} className="w-[200%] h-[200%] max-w-none object-cover opacity-80" alt="" />
                                    </div>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 overflow-hidden origin-bottom rotate-300">
                                        <img src={sol5} className="w-[200%] h-[200%] max-w-none object-cover opacity-80" alt="" />
                                    </div>
                                    {/* Center circle */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-blue-900 rounded-full flex flex-col items-center justify-center border-4 border-white shadow-2xl z-10">
                                        <span className="text-2xl font-bold uppercase tracking-widest text-white">EAU</span>
                                        <span className="text-sm text-blue-300 uppercase">Processus</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="lg:w-1/2 space-y-8">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold border-l-4 border-white pl-4">
                                        Étapes du traitement d'eau
                                    </h3>
                                    <p className="text-blue-100">
                                        Nos systèmes intégrés couvrent l'ensemble du cycle de l'eau dans votre installation, assurant une purification étape par étape pour atteindre les spécifications exactes requises par vos procédés industriels.
                                    </p>
                                </div>
                                <div className="space-y-6 mt-8">
                                    <h3 className="text-3xl font-bold border-l-4 border-white pl-4">
                                        Un contrôle à 360°
                                    </h3>
                                    <p className="text-blue-100">
                                        De la filtration primaire à la déminéralisation ultime, chaque étape est monitorée et optimisée. Nos technologies travaillent en synergie pour garantir une protection maximale de vos actifs.
                                    </p>
                                </div>
                                <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors">
                                    Voir toutes les solutions
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. ÉTUDES DE CAS */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                            <div className="space-y-4">
                                <span className="inline-block bg-[#1a4a8d] text-white text-[10px] font-bold tracking-wider px-4 py-1.5 rounded-full uppercase">
                                    Cas de réussite brassicole
                                </span>
                                <h2 className="text-4xl md:text-5xl text-[#1a4a8d]">
                                    <span className="font-light italic">Ressources connexes</span><br/>
                                    <span className="font-bold">& Études de cas.</span>
                                </h2>
                            </div>
                            <button className="flex items-center gap-4 border border-slate-300 rounded-full px-6 py-3 text-sm font-bold text-[#1a4a8d] hover:bg-slate-50 transition-colors">
                                Toutes les ressources <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] flex flex-col h-full hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] transition-shadow">
                                <span className="text-[#1a4a8d] text-[10px] font-bold tracking-widest uppercase mb-4">Étude de cas : Microbrasserie</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight">Profilage minéral complet d'une microbrasserie à Montréal.</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-12 flex-grow">Découvrez comment notre solution d'osmose inverse couplée à une minéralisation précise a stabilisé le goût des IPA et éliminé les variations saisonnières d'eau.</p>
                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                                    <button className="text-[10px] font-bold tracking-widest uppercase text-slate-900 flex items-center gap-2 hover:text-[#1a4a8d] transition-colors">
                                        Lire l'étude de cas <ChevronRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] flex flex-col h-full hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] transition-shadow">
                                <span className="text-[#1a4a8d] text-[10px] font-bold tracking-widest uppercase mb-4">Étude de cas : Brasserie de débit</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight">Déchloration complète et filtration à Sherbrooke.</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-12 flex-grow">Élimination absolue de tout composé phénolique et microbiologique grâce à un système d'ultrafiltration industrielle, assurant 50 000 hl/an de pureté.</p>
                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                                    <button className="text-[10px] font-bold tracking-widest uppercase text-slate-900 flex items-center gap-2 hover:text-[#1a4a8d] transition-colors">
                                        Lire l'étude de cas <ChevronRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] flex flex-col h-full hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] transition-shadow">
                                <span className="text-[#1a4a8d] text-[10px] font-bold tracking-widest uppercase mb-4">Étude de cas : Économie circulaire</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight">Réutilisation d'eau et optimisation CIP pour brasserie verte.</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-12 flex-grow">Une solution de filtration innovante permettant de recycler plus de 30% de l'eau de lavage et de rinçage chaud des cuves sans aucun risque sanitaire.</p>
                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                                    <button className="text-[10px] font-bold tracking-widest uppercase text-slate-900 flex items-center gap-2 hover:text-[#1a4a8d] transition-colors">
                                        Lire l'étude de cas <ChevronRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. ÉQUIPEMENTS */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-between items-end mb-12">
                            <h2 className="text-3xl font-bold text-blue-900 border-l-4 border-blue-600 pl-4">
                                Équipements
                            </h2>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700">
                                Voir le catalogue
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[ 
                                { img: eq1, title: "Filtres Acier Inoxydable", desc: "Haute capacité pour polissage final." },
                                { img: eq2, title: "Filtres Haute Pression", desc: "Conçus pour les débits massifs." },
                                { img: eq3, title: "Systèmes Catalytiques", desc: "Pour l'élimination du fer et manganèse." }
                            ].map((eq, idx) => (
                                <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100 group">
                                    <div className="h-64 overflow-hidden p-6 bg-slate-100/50">
                                        <img src={eq.img} alt={eq.title} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" />
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                                            Fiche technique
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900">{eq.title}</h3>
                                        <p className="text-slate-500">{eq.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. RESSOURCES À TÉLÉCHARGER */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-between items-end mb-12">
                            <h2 className="text-3xl font-bold text-blue-900 border-l-4 border-blue-600 pl-4">
                                Ressources à télécharger
                            </h2>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700">
                                Centre de ressources
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {downloads.map((doc, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-[#e6f4fc] p-6 rounded-lg hover:shadow-md transition-shadow cursor-pointer group">
                                    <div className="w-12 h-12 shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                                        <Download className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                                            Document PDF
                                        </span>
                                        <h4 className="font-bold text-slate-900">
                                            {doc}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. PARTENAIRE CHEM-AQUA */}
                <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0">
                        <img src={partnerBg} alt="Partenaire" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#003875]/90 to-[#003875]/60" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="md:w-1/2 space-y-6">
                                <div className="border-l-4 border-blue-400 pl-6">
                                    <h2 className="text-4xl md:text-5xl font-bold">
                                        Partenaire de<br />Chem-Aqua
                                    </h2>
                                </div>
                                <p className="text-blue-100 max-w-md">
                                    En tant que partenaire certifié, nous déployons les technologies et méthodologies de pointe pour garantir l'efficacité de vos installations de traitement d'eau.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex flex-col gap-6">
                                <div className="flex items-center gap-6 border-b border-white/20 pb-6">
                                    <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-[#003875] transition-colors cursor-pointer">
                                        <ArrowRight className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold">Découvrez l'expertise</h4>
                                        <span className="text-blue-200 text-sm">Méthodologie Chem-Aqua</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-[#003875] transition-colors cursor-pointer">
                                        <ArrowRight className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold">Contactez un ingénieur</h4>
                                        <span className="text-blue-200 text-sm">Support technique direct</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Industriel;
