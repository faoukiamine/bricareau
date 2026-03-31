import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExpertAvatars from "@/components/ExpertAvatars";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Phone,
    CheckCircle2,
    ChevronRight,
    Droplets,
    ShieldCheck,
    ShieldAlert,
    Sparkles,
    Leaf,
    Activity,
    Check,
    X,
    FlaskConical,
    Layers,
    Sprout,
    Atom,
    GlassWater,
    Anvil,
    Microscope,
    Bug,
    Mountain,
    TriangleAlert,
    Waves
} from "lucide-react";
import waterFilterPng from "@/assets/water-filter_8782563.png";
import safetyIcon from "@/assets/1709235770048.png";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import heroDrink from "@/assets/hero-image.jpg";
import eliteROImg from "@/assets/Triple Stage Filter.jpg";
import plusROImg from "@/assets/Double Stage Filter.jpg";
import essentialImg from "@/assets/Single Stage Filter.jpg";
import waterTestingImg from "@/assets/undersink_filtration_header.jpg";
import multiStageFilterImg from "@/assets/RO undersink system.jpg";
import medsInWaterImg from "@/assets/eau_medicaments.png";
import undersinkVsWholeHouseImg from "@/assets/2148947324.jpg";
import bgEfficiencyImg from "@/assets/2148728701.jpg";
import { heroImg as filtreSousEvierImg } from "./Blog pages/Filtre-sous-evier-lalternative-simple-aux-pichets-filtrants";
import { heroImg as plombVieillesMaisonsImg } from "./Blog pages/Le-plomb-dans-les-vieilles-maisons-comment-se-proteger";
import { heroImg as eauVilleFiltreeImg } from "./Blog pages/Pourquoi-meme-leau-de-ville-a-besoin-detre-filtree";
import womandrinkingwaterImg from "@/assets/25716.jpg";
import ourteamstudyyourwaterImg from "@/assets/10271.jpg";

const WaterFilterIcon = ({ className }: { className?: string }) => (
    <div 
        className={className} 
        style={{
            backgroundColor: "currentColor",
            maskImage: `url(${waterFilterPng})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: `url(${waterFilterPng})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
        }}
    />
);

const FiltrationSousEvier = () => {
    const navigate = useNavigate();
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);

    useEffect(() => {
        document.title = "Filtration sous évier : Eau pure directement au robinet";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez nos systèmes de filtration sous évier. Une eau potable pure, sans chlore et au goût parfait directement de votre robinet.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Filtration sous évier : Pureté et Confort | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Profitez d'une eau saine et délicieuse avec nos solutions d'ultrafiltration Cristal Pro. Gain d'espace et performance.");
    }, []);

    interface ComparisonItem {
        feature: string;
        elite: boolean | string;
        plus: boolean | string;
        essential: boolean | string;
    }

    const comparisonData: ComparisonItem[] = [
        { feature: "Nombre d'étapes de filtration", elite: "3 Étapes", plus: "2 Étapes", essential: "1 Étape" },
        { feature: "Élimination des sédiments (sable, terre et rouille)", elite: true, plus: true, essential: true },
        { feature: "Élimination du chlore (Goût/Odeur)", elite: true, plus: true, essential: false },
        { feature: "Retrait des COV et pesticides", elite: true, plus: true, essential: false },
        { feature: "Membrane d'ultrafiltration (0.01 µm)", elite: true, plus: false, essential: false },
        { feature: "Élimination 99.9% bactéries/virus", elite: true, plus: false, essential: false },
        { feature: "Préservation des minéraux naturels", elite: true, plus: true, essential: true },
        { feature: "Aucun rejet d'eau au drain", elite: true, plus: true, essential: true },
    ];

    return (
        <div className="min-h-screen bg-background text-slate-900 font-sans">
             <Header />
             <main>
                <Hero 
                    image={heroDrink}
                    highlightedTitle="Système de filtration sous évier,"
                    mainTitle="de l'eau pure à chaque goutte."
                    subtitle="Profitez d'une eau potable d'une qualité exceptionnelle directement de votre robinet. Nos systèmes de filtration sous comptoir et d'ultrafiltration éliminent 99% des contaminants pour la santé de votre famille."
                    ctaText="Explorez nos systèmes de filtration"
                    ctaLink="#systemes-filtration"
                    showPhone={true}
                    showBreadcrumbs={true}
                    singleLineTitle={true}

                />

                {/* 2. La Pureté Invisible - High-Impact Bento Grid */}
                <section className="py-24 lg:py-32 bg-slate-50/30 relative overflow-hidden">
                    {/* Abstract Pure Water Background */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(8,145,178,0.05)_0%,_transparent_50%)] pointer-events-none" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-24">
                            <span className="inline-block px-4 py-1.5 bg-cyan-600/10 text-cyan-700 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                OPTIMISATION DU ROBINET
                            </span>
                             <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#0891B2] block">L'eau de source,</span>
                                <span className="font-bold text-[#164E63] block text-center">sans la bouteille.</span>
                            </h2>
                            <p className="body-pro-max text-slate-500 text-center mx-auto max-w-2xl">
                                Pourquoi vous contenter d'une eau moyenne ? Nos filtres sous évier transforment votre robinet standard en une source de pureté gastronomique, éliminant l'indésirable pour ne laisser que l'essentiel.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { 
                                    title: "Goût & Odeur", 
                                    benefit: "Élimination Chlore", 
                                    desc: "Dites adieu aux saveurs chimiques. Retrouvez l'arôme pur de vos cafés, thés et bouillons sans l'arrière-goût de chlore.",
                                    icon: <Droplets className="w-6 h-6 text-cyan-600" />,
                                    badge: "Gastronomique"
                                },
                                { 
                                    title: "Protection Plomb", 
                                    benefit: "Filtre Sédiments", 
                                    desc: "Une barrière impénétrable contre les résidus métalliques et le plomb des anciennes canalisations pour la sécurité de vos enfants.",
                                    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
                                    badge: "Santé Famille"
                                },
                                { 
                                    title: "Zéro Bactérie", 
                                    benefit: "Ultrafiltration", 
                                    desc: "Notre membrane 0.01 micron bloque physiquement 99.9% des micro-organismes, sans aucun produit chimique ajouté.",
                                    icon: <Microscope className="w-6 h-6 text-blue-600" />,
                                    badge: "Bio-Pureté"
                                },
                                { 
                                    title: "Éco-Impact", 
                                    benefit: "3000L par Filtre", 
                                    desc: "Remplacez jusqu'à 2000 bouteilles plastiques par an. Une solution durable pour votre portefeuille et pour la planète.",
                                    icon: <Leaf className="w-6 h-6 text-emerald-500" />,
                                    badge: "Planète"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 hover:shadow-[0_40px_80px_-20px_rgba(8,145,178,0.12)] transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-cyan-50 transition-all duration-500 shadow-sm border border-slate-100">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-4 flex-grow">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest block">{item.benefit}</span>
                                            <h3 className="text-xl font-bold text-[#164E63]">{item.title}</h3>
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-slate-50 w-full">
                                        <span className="px-3 py-1 bg-slate-100/50 rounded-full text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.badge}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Product Grid */}
                <section id="systemes-filtration" className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block">Nos systèmes de filtration</span>
                                <span className="font-bold text-[#1e3a8a] block">d'eau sous évier</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                            <p className="body-pro-max mb-16 max-w-7xl mx-auto text-justify">
                                Nos systèmes de filtration d'eau sous évier représentent la solution ultime pour transformer votre cuisine en une source de pureté inépuisable. Conçus pour s'intégrer discrètement sous votre comptoir, ces systèmes utilisent des technologies de pointe pour éliminer jusqu'à 99 % des contaminants, incluant le chlore, le plomb et les sédiments. Contrairement aux pichets filtrants, ils offrent un débit constant et une filtration beaucoup plus rigoureuse, garantissant une eau de boisson cristalline et un goût irréprochable pour vos cafés et vos repas. Avec un entretien simplifié, vous reprenez le contrôle total sur la qualité de l’eau que votre famille consomme au quotidien.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                            {[
                                { name: "Cristal Pro I", desc: "La première ligne de défense pour votre eau. Ce filtre à sédiments haute performance élimine efficacement le sable, la rouille et les particules en suspension, en clarifiant instantanément votre eau, jour après jour, en toute simplicité.", img: essentialImg },
                                { name: "Cristal Pro II", desc: "La combinaison parfaite pour une eau saine. Ce système duo associe la filtration des sédiments à un filtre charbon actif premium, éliminant non seulement les particules mais aussi le chlore, les COV et les goûts désagréables.", img: plusROImg },
                                { name: "Cristal Pro III", desc: "La technologie d'ultrafiltration avancée. Ce système offre une purification microscopique supérieure, filtrant virus, bactéries et kystes tout en conservant les minéraux bénéfiques pour une eau d'une pureté absolue, rafraîchissante et inégalée.", img: eliteROImg },
                            ].map((product, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => navigate("/contact")}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                        <img
                                            src={product.img}
                                            alt={`${product.name} - Système de filtration d'eau sous évier haute performance Bricareau`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h3 className="card-title text-center group-hover:text-blue-600 transition-colors duration-500">
                                            {product.name}
                                        </h3>
                                        <p className="body-pro-max text-slate-500 flex-grow text-justify">
                                            {product.desc}
                                        </p>
                                        <div
                                            className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                            style={{}}
                                        >
                                            <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

               {/* 3. Pourquoi choisir - Fluid Editorial Design */}
                <section className="py-32 bg-white relative overflow-hidden">
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -translate-y-1/2 z-0" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-50/20 rounded-full blur-[100px] translate-y-1/2 z-0" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-24">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                                L'EXCELLENCE DE L'EAU FILTRÉE AU QUOTIDIEN
                            </span>
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#2563eb] block">Pourquoi privilégier nos</span>
                                <span className="font-bold text-[#1e3a8a] block">systèmes de filtration d'eau sous l'évier ?</span>
                            </h2>
                            <div className="w-16 h-0.5 bg-blue-600/20 mx-auto mb-10" />
                            <p className="font-light text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed italic">
                                Une fusion parfaite entre haute technologie, durabilité environnementale et confort domestique absolu.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
                            {[
                                { 
                                    icon: GlassWater, 
                                    title: "Goût Authentique", 
                                    desc: "Sublimez vos saveurs. Un café aux arômes authentiques et des plats qui retrouvent leur vrai goût, libérés du chlore.",
                                    num: "01"
                                },
                                { 
                                    icon: Leaf, 
                                    title: "Zéro Plastique", 
                                    desc: "Dites définitivement adieu au plastique. Une seule cartouche préserve la planète de milliers de bouteilles jetables.",
                                    num: "02"
                                },
                                { 
                                    icon: WaterFilterIcon, 
                                    title: "Design compact", 
                                    desc: "L'élégance de la discrétion. Une intégration fluide sous votre comptoir qui préserve l'esthétique de votre cuisine.",
                                    num: "03"
                                },
                                { 
                                    icon: Activity, 
                                    title: "Rendement Durable", 
                                    desc: "Une économie intelligente. Transformez votre eau du robinet en une ressource premium, sans coût récurrent.",
                                    num: "04"
                                },
                            ].map((item, i) => (
                                <div key={i} className="group flex items-start gap-10">
                                    <div className="relative flex-shrink-0">
                                        <div className="w-16 h-16 flex items-center justify-center text-blue-600 transition-all duration-700">
                                            <item.icon strokeWidth={1} className="w-14 h-14 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700" />
                                        </div>
                                        <span className="absolute -top-6 -left-6 text-6xl font-black text-blue-100/20 group-hover:text-blue-200/30 transition-colors duration-700 select-none">
                                            {item.num}
                                        </span>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <h3 className="font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-500">
                                                {item.title}
                                            </h3>
                                            <div className="h-px w-0 group-hover:w-12 bg-blue-600/30 transition-all duration-700" />
                                        </div>
                                        <p className="text-slate-500 font-light text-base leading-relaxed text-justify opacity-80 group-hover:opacity-100 transition-opacity duration-500 max-w-lg">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Comparison Table */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block">Comparez nos solutions</span>
                                <span className="font-bold text-[#1e3a8a] block">de filtration d'eau potable.</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-auto pb-12">
                            <table className="w-full min-w-[1000px] border-collapse bg-white rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
                                <thead>
                                    <tr className="bg-slate-50/50">
                                        <th className="p-10 text-left text-blue-900/40 font-black uppercase tracking-widest text-[10px]">Critères Techniques</th>
                                        {[
                                            { name: "Cristal Pro I", img: essentialImg, badge: "L'Essentiel", color: "bg-cyan-600" },
                                            { name: "Cristal Pro II", img: plusROImg, badge: "Le Plus Populaire", color: "bg-emerald-600" },
                                            { name: "Cristal Pro III", img: eliteROImg, badge: "Ultra-Protection", color: "bg-blue-600" },
                                        ].map((m, i) => (
                                            <th key={i} className="p-6 text-center">
                                                <div className="flex flex-col items-center gap-6">
                                                    <div className="relative group/img">
                                                        <div className={`absolute -top-3 -right-12 z-20 ${m.color} text-white text-[8px] font-black uppercase tracking-[0.4em] px-3 py-1 rounded-full shadow-2xl whitespace-nowrap`}>
                                                            {m.badge}
                                                        </div>
                                                        <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-0 group-hover/img:opacity-20 transition-opacity duration-700" />
                                                        <img
                                                            src={m.img}
                                                            alt={`Modèle ${m.name}`}
                                                            className="w-[160px] h-[130px] object-contain mx-auto mix-blend-multiply relative z-10 transition-transform duration-700 group-hover/img:scale-110"
                                                        />
                                                    </div>
                                                    <div className="text-lg font-bold text-[#1e3a8a] max-w-[150px] mx-auto leading-tight">{m.name}</div>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                            <td className="p-10 font-bold text-[#1e3a8a] border-r border-slate-50 bg-slate-50/20 text-sm italic group-hover:text-blue-600 transition-colors">
                                                {row.feature}
                                            </td>
                                            <td className="p-10 text-center text-sm font-light leading-relaxed text-slate-600">
                                                {typeof row.essential === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-4 py-1.5 rounded-full text-[10px] uppercase shadow-sm">{row.essential}</span> : (row.essential ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <div className="h-6 w-6 mx-auto opacity-10"><X className="h-6 w-6" /></div>)}
                                            </td>
                                            <td className="p-10 text-center text-sm font-light leading-relaxed text-slate-600">
                                                {typeof row.plus === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-4 py-1.5 rounded-full text-[10px] uppercase shadow-sm">{row.plus}</span> : (row.plus ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <div className="h-6 w-6 mx-auto opacity-10"><X className="h-6 w-6" /></div>)}
                                            </td>
                                            <td className="p-10 text-center text-sm font-light leading-relaxed text-slate-600">
                                                {typeof row.elite === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-4 py-1.5 rounded-full text-[10px] uppercase shadow-sm">{row.elite}</span> : (row.elite ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <div className="h-6 w-6 mx-auto opacity-10"><X className="h-6 w-6" /></div>)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 5.Water Testing Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[750px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
                    {/* Mobile Image */}
                    <div className="lg:hidden w-full h-[300px] relative">
                        <img
                            src={waterTestingImg}
                            alt="Analyse professionnelle de la qualité d'eau sous évier pour une filtration sur mesure - Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* Desktop Background */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <img
                            src={waterTestingImg}
                            alt="Analyse professionnelle"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
                        <div className="max-w-2xl text-slate-900 lg:text-white">
                            <span className="text-blue-600 lg:text-[#1e3a8a] text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                TESTS D'EAU PROFESSIONNELS
                            </span>
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-white block">Identifiez l'invisible,</span>
                                <span className="font-bold text-white block">maîtrisez la pureté de votre eau.</span>
                            </h2>
                            <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Ne laissez plus le doute couler de votre robinet. Nos tests d'eau révèlent la composition réelle de votre eau pour vous offrir une solution de filtration sur mesure, garantissant santé et sérénité à toute votre famille.
                            </p>
                            <div className="flex gap-4">
                                <Button asChild>
                                    <a href="/tests-eau">
                                        Demandez une analyse d'eau
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Testimonials Section */}
                <TestimonialsSection
                    filterProduct="/Systemes-de-filtration-deau-sous-evier"
                 title={
                    <h2 className="mb-8 heading-pro-max text-center">
                        <span className="italic font-light text-[#2563eb] block text-center">Adieu les bouteilles plastiques,</span>
                        <span className="font-bold text-[#1e3a8a] block text-center">Enfin la liberté au robinet.</span>
                    </h2>
                 }
                />

                {/* 7. FAQ Section */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-4 text-left">
                        <div className="text-left mb-16">
                            <h2 className="mb-8 heading-pro-max text-left">
                                <span className="italic font-light text-[#2563eb] block">Pour vous éclairer</span>
                                <span className="font-bold text-[#1e3a8a] block">Questions fréquentes</span>
                            </h2>

                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {[
                                    {
                                        q: "Quels sont les avantages d'un système de filtration sous l'évier ?",
                                        a: "Il offre une eau de qualité embouteillée directement à votre robinet, élimine le goût et l'odeur de chlore, retire les métaux lourds et réduit drastiquement vos dépenses ainsi que votre empreinte plastique."
                                    },
                                    {
                                        q: "Quels problèmes d'eau ce système peut-il résoudre ?",
                                        a: "Il est particulièrement efficace contre le chlore, les sédiments, le plomb, le mercure, les résidus de pesticides, et les microplastiques, garantissant une eau saine pour boire et cuisiner."
                                    },
                                    {
                                        q: "Quelle est la différence entre un filtre standard et l'osmose inverse ?",
                                        a: "Un filtre standard réduit principalement le chlore et les sédiments. L'osmose inverse va plus loin en éliminant jusqu'à 99 % de tous les contaminants dissous grâce à une membrane semi-perméable ultra-fine."
                                    },
                                    {
                                        q: "À quelle fréquence faut-il remplacer les filtres ?",
                                        a: "Pour une performance optimale, les cartouches de pré-filtration et de post-filtration doivent être changées tous les 6 à 12 mois. La membrane d'osmose inverse peut durer de 2 à 4 ans."
                                    },
                                    {
                                        q: "Le système prend-il beaucoup de place sous l'évier ?",
                                        a: "Nos systèmes modernes sont très compacts. Ils occupent généralement moins de 25 % de l'espace de votre armoire sous l'évier, vous laissant de la place pour vos autres articles ménagers."
                                    },
                                    {
                                        q: "Puis-je l'utiliser pour mon réfrigérateur et ma machine à glaçons ?",
                                        a: "Absolument ! Nous pouvons raccorder votre système de filtration à votre frigo pour que vous profitiez d'une eau fraîche et de glaçons cristallins, sans aucun goût indésirable."
                                    },
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
                                            <Button
                                              onClick={() => setShowAllFaqs(!showAllFaqs)}
                                            >
                                              {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                                            </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. PREMIUM CTA SECTION - REBUILT FOR IMPACT */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#1e3a8a]">
                    {/* Animated background elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4" />
                    
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src={womandrinkingwaterImg}
                            alt="Problématique d'eau dure sur la robinetterie - Solution Bricareau"
                            className="w-full h-full object-cover grayscale brightness-150"
                        />
                        <div className="absolute inset-0 bg-[#1e3a8a]/10 backdrop-blur-sm" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                    FINI LES BOUTEILLES EN PLASTIQUE
                                </span>
                                <h2 className="text-4xl md:text-6xl lg:text-5xl font-light text-white leading-[1.1] tracking-tighter">
                                    Optez pour un filtre sous évier et savourez <br />
                                    <span className="text-white italic font-bold font-serif">une eau pure au robinet.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                                    Passez au filtre sous évier et profitez d’une eau filtrée, savoureuse et économique directement à votre robinet. Contactez-nous pour une démonstration, une analyse d’eau ou un devis personnalisé. Installation rapide sous 48h disponible dans plusieurs régions !                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                                <Button asChild>
                                    <a href="tel:18552649328" className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 animate-bounce" />
                                        Parlez à un expert
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    asChild
                                >
                                    <NavLink to="/consultation">Planifiez une consultation</NavLink>
                                </Button>
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


                {/* 9. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                             <h2 className="mb-8 heading-pro-max text-left">
                                <span className="font-bold text-[#1e3a8a] block text-left">Ressources</span>
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
                                    title: "Le plomb dans les vieilles maisons : Comment se protéger?",
                                    img: plombVieillesMaisonsImg,
                                    link: "/le-plomb-dans-les-vieilles-maisons-comment-se-proteger"
                                },
                                {
                                    title: "Pourquoi même l'eau de ville a besoin d'être filtrée?",
                                    img: eauVilleFiltreeImg,
                                    link: "/pourquoi-meme-leau-de-ville-a-besoin-detre-filtree"
                                },
                            ].map((art, i) => (
                                <NavLink
                                    key={i}
                                    to={art.link || "#"}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full block cursor-pointer"
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={art.img}
                                            alt={`${art.title} - Guide expert Bricareau sur la filtration sous évier`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight font-medium text-base leading-6 text-[#0F1729]">{art.title}</h4>
                                        <div className="mt-auto">
                                            <span className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm">
                                                Lire <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />

            {/* Sticky Consultation CTA - Pro Max Conversion Tool */}
            <div className="fixed bottom-8 right-8 z-[100] group hidden md:block">
                <NavLink to="/consultation">
                    <div className="relative">
                        <div className="absolute inset-0 bg-cyan-600 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-cyan-100 p-2 pr-6 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(8,145,178,0.2)] transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-cyan-600">
                            <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-cyan-600 transition-colors duration-500">
                                <Sparkles className="w-6 h-6 animate-pulse" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 group-hover:text-white/80 transition-colors">Audit Gratuit</span>
                                <span className="text-sm font-bold text-slate-900 group-hover:text-white transition-colors">Analyse d'eau</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default FiltrationSousEvier;
