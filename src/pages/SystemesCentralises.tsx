import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import Hero from "@/components/Hero";
import {
    Building2,
    ShieldCheck,
    Settings,
    Activity,
    ArrowRight,
    Zap,
    Phone,
    Plus,
    Minus,
    ChevronDown,
    ChevronRight,
    Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import ExpertAvatars from "@/components/ExpertAvatars";
import { ProMaxButton } from "@/components/ui/ProMaxButton";

// High-fidelity generated assets
import engineeringHeroImg from "@/assets/2148836794.jpg";
import protectionConduitsImg from "@/assets/70609919.jpg";
import conformiteSanitaireImg from "@/assets/initial.jpg";
import economiesEnergieImg from "@/assets/2149281314.jpg";
import technicianInspectionImg from "@/assets/2149394950.jpg";
import reverseOsmosisSkidImg from "@/assets/144d1310-23fc-4cbd-92df-81d17d7a393c.jpg";
import filtrationSkidImg from "@/assets/7kbp.png";
import elkayBottleFillerImg from "@/assets/elkayv2-LZS8WSLK_image_vignette.webp";
import laundryImg from "@/assets/2152006094.jpg";
import campusImg from "@/assets/education_water_solution.png";
import constructionImg from "@/assets/2148269294.jpg";

const SystemesCentralises = () => {
    const [activeAdvantageImage, setActiveAdvantageImage] = useState(protectionConduitsImg);
    const [currentIndustryIndex, setCurrentIndustryIndex] = useState(0);

    useEffect(() => {
        document.title = "Systèmes de Filtration Centralisés pour Bâtiments | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndustryIndex((prev) => (prev + 1) % 3);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />
            
            <main>
                {/* SECTION 1: MODERN CINEMATIC HERO (Same style as /residentiel) */}
                <Hero 
                    className="min-h-[100vh]"
                    image={engineeringHeroImg}
                    highlightedTitle={<span className="font-bold not-italic">Solutions de filtration d'eau </span>}
                    mainTitle={<><span className="text-[#8CC63F]">centralisées</span> pour bâtiments.</>}
                    subtitle="Protégez l'ensemble des installations de votre bâtiment avec une filtration industrielle et commerciale centralisée de premier ordre. Une solution sur mesure pour éliminer le calcaire, le chlore et les contaminants."
                    ctaText="DEMANDER UNE ÉTUDE SUR MESURE"
                    ctaLink="/contact-entreprises"
                    showPhone={true}
                    showBreadcrumbs={true}
                    breadcrumbVariant="light"
                    homeVariant={false}
                />

                {/* SECTION 2: HIGH-FIDELITY STATEMENT BANNER */}
                {/* SECTION 2: HIGH-FIDELITY STATEMENT BANNER & EXPERTISE SECTORIELLE MERGED */}
                <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            {/* Left Column: Text Content */}
                            <div className="lg:col-span-5 space-y-6">
                                <h3 className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
                                    DURABILITÉ & VALEUR PATRIMONIALE
                                </h3>
                                <h2 className="mb-6 heading-pro-max text-left">
                                    <span className="font-bold not-italic text-[#18448F]">Engagé à fournir des solutions de </span>
                                    <span className="font-bold not-italic text-[#8CC63F]">haute qualité.</span>
                                </h2>
                                <div className="w-16 h-1 bg-blue-600 rounded-full" />
                                <div className="text-slate-600 text-[15px] font-light leading-relaxed pt-2 space-y-4">
                                    <p>L'eau est le flux vital de vos infrastructures. Une qualité non maîtrisée expose vos installations à des risques critiques (corrosion, entartrage, prolifération bactérienne), compromettant leur intégrité et générant des surcoûts importants.</p>
                                    <p>Pour pallier ces défis, Bricareau déploie des programmes de traitement d'eau sur mesure, garantissant la pérennité de vos actifs et la conformité sanitaire. Nous développons des stratégies d'ingénierie complètes et innovantes.</p>

                                    <p className="font-medium text-[#18448F] pt-2">Bricareau, c’est un partenaire qui prend à cœur la santé et l’efficacité de votre bâtiment.</p>
                                </div>
                                <div className="pt-6">
                                    <a href="/consultation" className="inline-flex items-center gap-2 text-white bg-[#18448F] hover:bg-blue-700 px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-md hover:shadow-lg group">
                                        Planifiez une consultation <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>

                            {/* Right Column: Industries Cards Slider */}
                            <div className="lg:col-span-7">
                                {[
                                    { img: laundryImg, title: "Bâtiments commerciaux" },
                                    { img: campusImg, title: "Campus universitaires" },
                                    { img: constructionImg, title: "Constructions neuves" }
                                ].map((industry, index) => (
                                    index === currentIndustryIndex && (
                                        <div key={index} className="w-[85%] mx-auto group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 animate-in fade-in slide-in-from-right-4 zoom-in-95">
                                            <div className="aspect-[3/4] w-full overflow-hidden">
                                                <img src={industry.img} alt={industry.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#18448F]/90 via-[#18448F]/20 to-transparent flex flex-col justify-end p-8">
                                                <h3 className="text-white font-bold text-2xl md:text-3xl mb-3 drop-shadow-lg">{industry.title}</h3>
                                                <div className="w-16 h-1.5 bg-[#8CC63F] rounded-full shadow-sm"></div>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: ACCORDION FEATURE GRID ("Ce que nous apportons à votre campus" using the "Avantages de l'eau douce" layout) */}
                <section id="campus-benefits" className="py-24 bg-white relative overflow-hidden">
                    {/* Background vertical line */}
                    <div className="absolute left-[10%] top-0 bottom-0 w-px bg-slate-200 hidden xl:block z-0" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-24">
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                L'INGÉNIERIE DE L'INFRASTRUCTURE
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block">Ce que nous apportons </span>
                                <span className="font-bold text-[#18448F] block text-center">à la performance de votre campus.</span>
                            </h2>
                        </div>

                        <div className="relative max-w-6xl mx-auto">


                            <div className="flex flex-col lg:flex-row items-center gap-0 relative">
                                {/* Left: Benefits Accordion in a Card */}
                                <div className="w-full lg:w-[45%] z-20 mb-12 lg:mb-0">
                                    <div className="bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] p-8 md:p-12 border border-slate-50 lg:-mr-32 relative">
                                        <Accordion 
                                            type="single" 
                                            defaultValue="item-0" 
                                            className="w-full space-y-2"
                                            onValueChange={(value) => {
                                                const mapping: Record<string, string> = {
                                                    "item-0": protectionConduitsImg,
                                                    "item-1": economiesEnergieImg,
                                                    "item-2": conformiteSanitaireImg,
                                                    "item-3": reverseOsmosisSkidImg
                                                };
                                                if (value && mapping[value]) {
                                                    setActiveAdvantageImage(mapping[value]);
                                                }
                                            }}
                                        >
                                            {[
                                                {
                                                    title: "Protection des conduits",
                                                    desc: "Élimination totale du calcaire et des sédiments pour préserver l'ensemble du réseau de tuyauteries et éviter l'entartrage prématuré de vos actifs immobiliers."
                                                },
                                                {
                                                    title: "Économies d'énergie",
                                                    desc: "Des échangeurs de chaleur et chauffe-eau propres consomment jusqu'à 30% d'énergie en moins, réduisant considérablement vos factures énergétiques et l'empreinte carbone."
                                                },
                                                {
                                                    title: "Expérience usager améliorée",
                                                    desc: "Fournissez une eau de qualité exceptionnelle, exempte de goûts et d'odeurs désagréables, améliorant ainsi l'expérience quotidienne de vos résidents ou employés."
                                                },
                                                {
                                                    title: "Maintenance prédictive",
                                                    desc: "Une surveillance continue de vos systèmes de traitement d'eau pour anticiper les remplacements de pièces et l'entretien des filtres. Minimisez les temps d'arrêt et prolongez la durée de vie de vos équipements grâce à une maintenance proactive."
                                                }
                                            ].map((item, idx) => (
                                                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-slate-100 last:border-none">
                                                    <AccordionTrigger className="text-[#18448F] font-bold text-left text-lg hover:no-underline py-5 data-[state=open]:text-blue-600 transition-colors">
                                                        {item.title}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-slate-600 text-[15px] leading-relaxed pb-6 text-justify">
                                                        {item.desc}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                </div>

                                {/* Right: Image Section with Dot Pattern */}
                                <div className="w-full lg:w-[65%] relative">
                                    {/* Dot pattern background */}
                                    <div className="absolute -top-12 -left-12 w-48 h-48 opacity-40 pointer-events-none z-0">
                                        <div className="grid grid-cols-12 gap-3">
                                            {Array.from({ length: 144 }).map((_, i) => (
                                                <div key={i} className="w-1 h-1 bg-blue-500 rounded-full" />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[550px] bg-white p-6 border border-slate-100 flex items-center justify-center">
                                        <img 
                                            key={activeAdvantageImage}
                                            src={activeAdvantageImage} 
                                            className="max-h-full object-contain animate-in fade-in zoom-in duration-500"
                                         alt="Schéma technique et infrastructures de filtration centralisées" title="Expert en eau par Bricareau" />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none" />
                                    </div>

                                    {/* Another Dot pattern bottom right */}
                                    <div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-30 pointer-events-none z-0">
                                        <div className="grid grid-cols-12 gap-4">
                                            {Array.from({ length: 144 }).map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: COLUMN SPACE & SERVICE GRID */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center space-y-4 mb-20">
                            <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                                NOTRE SERVICE GLOBAL
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#18448F] block">Valoriser & sécuriser</span>
                                <span className="font-bold text-[#18448F] block text-center">vos infrastructures.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            
                            {/* Block 1: Elkay Bottle Filling Stations */}
                            <div className="flex flex-col gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow justify-between">
                                <div className="space-y-4">
                                    <span className="inline-block px-3 py-1 bg-[#18448F] text-white rounded-full text-[9px] font-black uppercase tracking-wider">
                                        Remplissage Écoresponsable
                                    </span>
                                    <h3 className="text-2xl font-medium text-slate-900 leading-tight">
                                        Stations de remplissage d'eau automatiques
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed text-justify">
                                        Intégrez nos stations de remplissage automatique intelligentes. Une solution robuste et hygiénique à activation sans contact, idéale pour réduire l'usage de plastique à usage unique et offrir une eau réfrigérée et purifiée de grand débit à vos usagers.
                                    </p>
                                </div>
                                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-inner">
                                    <img 
                                        src={elkayBottleFillerImg} 
                                        className="w-full h-full object-cover" 
                                     alt="Station de remplissage automatique de bouteilles d'eau Elkay intégrée par Bricareau" title="Expert en eau par Bricareau" />
                                </div>
                            </div>

                            {/* Block 2: Innovative Solutions */}
                            <div className="flex flex-col gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow justify-between">
                                <div className="space-y-4">
                                    <span className="inline-block px-3 py-1 bg-[#18448F] text-white rounded-full text-[9px] font-black uppercase tracking-wider">
                                        Conception & Planification
                                    </span>
                                    <h3 className="text-2xl font-medium text-slate-900 leading-tight">
                                        Ingénierie & Solutions sur mesure
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed text-justify">
                                        Nous concevons des stations de filtration centralisées modulaires s'intégrant parfaitement dans vos locaux techniques, optimisant l'encombrement au sol tout en maximisant la performance globale.
                                    </p>
                                </div>
                                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-inner">
                                    <img 
                                        src={filtrationSkidImg} 
                                        className="w-full h-full object-cover" 
                                     alt="Station de filtration centralisée modulaire conçue par Bricareau" title="Analyse d'eau professionnelle par Bricareau" />
                                </div>
                            </div>

                            {/* Block 3: Maintenance and Support */}
                            <div className="flex flex-col gap-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow justify-between">
                                <div className="space-y-4">
                                    <span className="inline-block px-3 py-1 bg-[#18448F] text-white rounded-full text-[9px] font-black uppercase tracking-wider">
                                        Disponibilité & Opérabilité
                                    </span>
                                    <h3 className="text-2xl font-medium text-slate-900 leading-tight">
                                        Maintenance & Support technique
                                    </h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed text-justify">
                                        Notre assistance technique disponible 24/7 et nos contrats d'entretien préventif sur mesure garantissent la continuité de vos opérations et la longévité de vos infrastructures hydrauliques.
                                    </p>
                                </div>
                                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-inner">
                                    <img 
                                        src={reverseOsmosisSkidImg} 
                                        className="w-full h-full object-cover" 
                                     alt="Équipement d'osmose inverse industriel et support technique Bricareau" title="Analyse d'eau professionnelle par Bricareau" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SECTION 8: TESTIMONIALS SECTION (MOVED HERE) */}
                <div className="bg-slate-50 py-32 border-y border-slate-100">
                    <TestimonialsSection 
                        filterProduct="Industriel"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16">
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] block mb-4">AVIS CLIENTS</span>
                                <h2 className="heading-pro-max text-center uppercase">
                                    <span className="italic font-light text-[#18448F]">La satisfaction de nos </span>
                                    <span className="font-bold text-[#18448F]">partenaires.</span>
                                </h2>
                            </div>
                        }
                    />
                </div>

                {/* SECTION 7: PREMIUM CTA SECTION */}
                <section className="py-32 bg-slate-900 relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-radial-gradient opacity-20" />
                    
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src={technicianInspectionImg}
                            className="w-full h-full object-cover brightness-110"
                         alt="Technicien inspectant les systèmes de filtration du bâtiment - Solution Bricareau" title="Expert en eau par Bricareau" />
                        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-white text-[#18448F] rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                    PROTECTION & PERFORMANCE DES INFRASTRUCTURES
                                </span>
                                <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                                    Garantissez une eau d'excellence <br />
                                    <span className="text-white italic font-bold font-serif">à l'échelle de votre bâtiment.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto font-light leading-relaxed">
                                    Des solutions de filtration centralisées sur mesure pour protéger vos canalisations, préserver vos équipements thermiques et garantir la conformité sanitaire absolue de tout votre réseau. <br className="hidden md:block" />
                                    Sécurisez <span className="text-white font-bold border-b border-white">la longévité de vos installations</span> dès aujourd'hui.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                                <ProMaxButton 
                                    asChild
                                    variant="white"
                                >
                                    <a href="tel:18552649328" className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 animate-bounce" />
                                        Parlez à un ingénieur-conseil
                                    </a>
                                </ProMaxButton>
                                <ProMaxButton
                                    variant="outline-white"
                                    asChild
                                >
                                    <NavLink to="/contact-entreprises">Demander une étude technique</NavLink>
                                </ProMaxButton>
                            </div>

                            <div className="pt-8 flex flex-col items-center gap-4">
                                <ExpertAvatars />
                                <p className="text-blue-200/60 text-sm font-medium">
                                    Déjà adopté par <span className="text-white">plus de 180 gestionnaires immobiliers</span> et sites d'envergure au Québec.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: RELATED RESOURCES / CASE STUDIES (MOVED TO THE END) */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
                            <div className="space-y-4">
                                <span className="inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                                    CAS D'EXCELLENCE
                                </span>
                                <h2 className="mb-8 heading-pro-max text-left">
                                    <span className="italic font-light text-[#18448F] block">Ressources connexes</span>
                                    <span className="font-bold text-[#18448F] block text-left">& Études de cas.</span>
                                </h2>
                            </div>
                            <div>
                                <Button variant="outline" className="rounded-full border-slate-300 text-slate-700 hover:bg-slate-100" asChild>
                                    <NavLink to="/blog">Toutes les ressources &nbsp;<ArrowRight className="w-4 h-4" /></NavLink>
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    cat: "Étude de cas : Campus",
                                    title: "Filtration et traitement d'un campus universitaire complet à Québec.",
                                    desc: "Découvrez comment nos filtres centralisés ont réduit les coûts de maintenance de 35% tout en assurant une eau d'une pureté absolue pour 15 000 étudiants."
                                },
                                {
                                    cat: "Étude de cas : Hôpital",
                                    title: "Conformité sanitaire et traitement ultra-pur d'un centre hospitalier.",
                                    desc: "Une solution stérile avec désinfection UV-C industrielle pour garantir la conformité microbiologique absolue aux points de soins critiques."
                                },
                                {
                                    cat: "Étude de cas : Hôtel",
                                    title: "Amélioration de l'expérience client et protection anticalcaire pour un hôtel 5 étoiles.",
                                    desc: "Une eau douce et protectrice pour l'ensemble des installations de bien-être, préservant la robinetterie haut de gamme et les systèmes de spa."
                                }
                            ].map((res, idx) => (
                                <div key={idx} className="bg-slate-50/50 border border-slate-100 p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[360px] hover:-translate-y-1.5 transition-transform duration-500">
                                    <div className="space-y-4">
                                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none block">
                                            {res.cat}
                                        </span>
                                        <h4 className="text-xl font-bold text-slate-900 leading-snug">
                                            {res.title}
                                        </h4>
                                        <p className="text-slate-500 text-xs font-light leading-relaxed">
                                            {res.desc}
                                        </p>
                                    </div>
                                    <div className="pt-6 border-t border-slate-100">
                                        <NavLink to="/blog" className="inline-flex items-center gap-2 text-[10px] font-black text-slate-800 uppercase tracking-widest hover:text-blue-600 transition-colors group">
                                            Lire l'étude de cas <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </NavLink>
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

export default SystemesCentralises;
