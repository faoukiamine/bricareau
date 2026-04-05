import React, { useEffect } from 'react';
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import drinkWaterImg from "@/assets/boire-eau-robinet.jpg";
import bathWomanImg from "@/assets/young-nude-woman-taking-relaxing-foamy-bath.jpg";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import {
    Check,
    ChevronRight,
    Star,
    Droplets,
    Smartphone,
    Search,
    Clock,
    Heart,
    Zap,
    ArrowRight,
    CheckCircle2,
    X,
    Settings,
    Wrench,
    CircleDollarSign,
    Phone
} from "lucide-react";
import safetyIcon from "@/assets/1709235770048.png";
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

const FiltreEauHauteEfficacite = () => {
    useEffect(() => {
        document.title = "Filtre d'eau Haute Efficacité au Québec | Bricareau HE | Économies d'eau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez l'adoucisseur et filtre d'eau le plus efficace au monde au Québec. Le Bricareau HE réduit jusqu'à 46% votre consommation de sel et d'eau. Pureté intelligente.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Bricareau HE : La Révolution de la Filtration d'eau au Québec");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Performance inégalée et économies garanties. Alliez santé et écologie avec notre système de filtration haute efficacité connecté.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/filtre-eau-haute-efficacite");
    }, []);
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    const productImage = "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png";

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* 1. Product Hero Section */}
                <section className="relative lg:h-[850px] flex flex-col lg:items-center overflow-hidden bg-white">
                    <div className="absolute top-[50px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>
                    <div className="container mx-auto px-6 h-full flex items-center">
                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
                            {/* Mobile Image Layer */}
                            <div className="lg:w-1/2 w-full flex flex-col items-center">
                                <div className="relative w-full aspect-square md:aspect-video lg:aspect-auto lg:h-[600px] flex items-center justify-center">
                                    <img
                                        src={productImage}
                                        alt="Filtre d'eau haute efficacité Bricareau HE - Performance et économie d'eau certifiée"
                                        className="h-full object-contain drop-shadow-2xl z-10"
                                    />
                                    {/* Sublte background decor */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
                                </div>
                                <div className="hidden lg:flex mt-8 gap-4 opacity-50">
                                    <div className="w-12 h-12 border border-slate-200 rounded p-1"><img src={productImage} alt="Icône du filtre d'eau haute efficacité HE Bricareau" className="w-full h-full object-contain" /></div>
                                    <div className="w-12 h-12 border border-slate-200 rounded p-1 opacity-50"><Smartphone className="w-full h-full p-2" /></div>
                                    <div className="w-12 h-12 border border-slate-200 rounded p-1 opacity-50"><Settings className="w-full h-full p-2" /></div>
                                </div>
                            </div>

                            {/* Content Layer */}
                            <div className="lg:w-1/2 w-full text-center lg:text-left pt-8 pb-16 lg:py-0 border-t lg:border-t-0 border-slate-100">
                                <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-4 block">
                                    SYSTÈME DE FILTRATION D'EAU
                                </span>
                                <h1 className="leading-[1.1] md:leading-[1.2] mb-8 tracking-tighter text-slate-900 text-center">
                                    <span className="italic font-light text-[#2563eb] block">Bricareau</span>
                                    <span className="font-bold text-[#1e3a8a] block">High Efficiency (HE)</span>
                                </h1>
                                <p className="body-pro-max mb-8 text-center lg:text-justify max-w-xl mx-auto lg:mx-0">
                                    L'adoucisseur et filtre d'eau le plus efficace au monde. Profitez d'une eau d'une pureté absolue tout en réalisant des économies d'eau et de sel inégalées.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <Button
                                        asChild
                                    >
                                        <NavLink to="/contact" className="flex items-center gap-2">
                                            Démarrer ici <ArrowRight className="h-5 w-5" />
                                        </NavLink>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        asChild
                                    >
                                        <a href="tel:18552649328">Appeler expert</a>
                                    </Button>
                                </div>
                                <div className="hidden lg:block space-y-6 border-t border-slate-100 pt-8 mt-12">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <Zap className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="text-slate-900">Technologie HE (Haute Efficacité)</h4>
                                            <p className="text-slate-500 text-sm">Réduit jusqu'à 46 % de votre consommation de sel et d'eau.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <Smartphone className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="text-slate-900">Application Bricareau Connect</h4>
                                            <p className="text-slate-500 text-sm">Contrôlez votre consommation d'eau et recevez des alertes sur votre mobile.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="text-slate-900">Aqua-Sensor® Intelligent</h4>
                                            <p className="text-slate-500 text-sm">Détecte automatiquement le besoin de régénération pour plus d'économies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Exclusivités technologiques */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 order-2 lg:order-1">
                                <h2 className="mb-8 heading-pro-max">
                                    <span className="italic font-light text-[#2563eb] block text-left">Exclusivités</span>
                                    <span className="font-bold text-[#1e3a8a] block text-left">technologiques de Bricareau</span>
                                </h2>
                                <div className="space-y-8">
                                    <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                                        <h3 className="mb-4 flex items-center gap-3">
                                            <div className="w-2 h-8 bg-blue-600 rounded-full" />
                                            Aqua-Sensor® Digital
                                        </h3>
                                         <p className="body-pro-max text-slate-600 text-justify">
                                             Le cerveau de votre système. Contrairement aux systèmes basés sur le temps, notre capteur breveté ajuste la régénération en fonction de l'utilisation réelle et de la dureté de l'eau.
                                         </p>
                                    </div>
                                    <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                                        <h3 className="mb-4 flex items-center gap-3">
                                            <div className="w-2 h-8 bg-blue-600 rounded-full" />
                                            Bricareau Connect App
                                        </h3>
                                         <p className="body-pro-max text-slate-600 text-justify">
                                             Une tranquillité d'esprit totale. Suivez votre consommation, recevez des alertes de fuite ou de niveau de sel bas directement sur votre téléphone.
                                         </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2">
                                <img
                                    src={productImage}
                                    alt="Technologie intelligente Aqua-Sensor et Bricareau Connect pour filtre HE"
                                    className="w-full max-w-md mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Filtration Intelligente (Benefits) */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="mb-8 heading-pro-max">
                            <span className="italic font-light text-[#2563eb] block">Filtration intelligente qui</span>
                            <span className="font-bold text-[#1e3a8a] block">améliore votre vie au quotidien</span>
                        </h2>
                         <p className="body-pro-max text-slate-500 text-center mx-auto">
                             Plus qu'un simple filtre, c'est une protection complète pour votre santé et votre maison.
                         </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Fini le goût et les odeurs", desc: "Élimine le chlore et les sédiments pour une eau pure au robinet.", icon: Droplets },
                                { title: "Protection des appareils", desc: "Empêche l'accumulation de tartre dans votre chauffe-eau et tuyauterie.", icon: safetyIcon, isImage: true },
                                { title: "Peau et cheveux plus doux", desc: "Ressentez la différence dès la première douche avec une eau sans calcaire.", icon: Heart },
                                { title: "Économies d'énergie", desc: "Des appareils plus propres fonctionnent avec une efficacité maximale.", icon: Zap }
                            ].map((benefit, i) => (
                                <div key={i} className="flex flex-col items-center group w-full sm:w-[calc(50%-3rem)] lg:w-[calc(25%-3rem)]">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        {benefit.isImage ? (
                                            <img src={benefit.icon as string} alt={benefit.title} className="h-12 w-12 object-contain" />
                                        ) : (
                                            <benefit.icon className="h-10 w-10 text-blue-600 group-hover:text-white font-light" strokeWidth={1.5} />
                                        )}
                                    </div>
                                    <h3 className="card-title mb-4">{benefit.title}</h3>
                                     <p className="body-pro-max text-slate-500 text-justify mb-8">
                                         {benefit.desc}
                                     </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. PREMIUM CTA SECTION */}
                <section className="relative h-[600px] flex items-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={drinkWaterImg}
                            alt="Pureté absolue Bricareau HE"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/60 to-blue-500/30 backdrop-blur-[2px]" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-white mb-6 heading-pro-max">
                                <span className="font-bold block tracking-tight opacity-90">Prêt pour une meilleure eau ?</span>
                            </h2>
                            <p className="text-white font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                                Découvrez pourquoi Bricareau est le leader mondial de l'eau. Alliez performance, économies et santé avec nos solutions de filtration intelligentes.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
                                    <NavLink to="/diagnostic">Trouver un expert</NavLink>
                                </Button>
                            </div>

                            <p className="mt-8 text-white/50 text-sm font-light">
                                Disponible 7j/7 — Réponse en moins de 24h
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. Trust Section (Child Drinking) */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                                    <img
                                        src={drinkWaterImg}
                                        alt="Enfant buvant une eau pure et saine filtrée par un système Bricareau HE"
                                        className="w-full h-full object-cover aspect-[4/3]"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2 text-left">
                                <h2 className="mb-8 heading-pro-max">
                                    <span className="italic font-light text-[#2563eb] block text-left">Le choix intelligent</span>
                                    <span className="font-bold text-[#1e3a8a] block text-left">pour votre maison.</span>
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        "Analysez votre eau gratuitement avec nos experts",
                                        "Réduisez les contaminants invisibles nocifs",
                                        "Améliorez la santé de votre peau et de vos cheveux",
                                        "Contribuez à un environnement plus vert sans plastique"
                                    ].map((point, i) => (
                                        <div key={i} className="flex gap-4 items-center">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                <Check className="w-4 h-4 text-blue-600" />
                                            </div>
                                             <p className="body-pro-max text-slate-700 text-justify">
                                                 {point}
                                             </p>
                                        </div>
                                    ))}
                                </div>
                                <Button 
                                    variant="outline"
                                    asChild
                                >
                                    <NavLink to="/tests-eau">En savoir plus sur nos tests</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Service Plan Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="mb-16 heading-pro-max text-center">
                            <span className="italic font-light text-[#2563eb] block text-center">Plan d'entretien et</span>
                            <span className="font-bold text-[#1e3a8a] block text-center">tranquillité d'esprit</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                { title: "Bricareau Care", desc: "Entretien préventif annuel et remplacement des filtres.", icon: Clock },
                                { title: "Garantie à vie", desc: "Couverture totale sur les pièces majeures de votre système.", icon: safetyIcon, isImage: true },
                                { title: "Service Prioritaire", desc: "Intervention rapide sous 24h en cas de besoin urgent.", icon: Zap }
                            ].map((plan, i) => (
                                <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                                        {plan.isImage ? (
                                            <img src={plan.icon as string} alt={plan.title} className="h-10 w-10 object-contain" />
                                        ) : (
                                            <plan.icon className="w-8 h-8 text-blue-600" />
                                        )}
                                    </div>
                                    <h3 className="card-title mb-4">{plan.title}</h3>
                                     <p className="body-pro-max text-slate-500 text-justify">
                                         {plan.desc}
                                     </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Comparison Table */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-16 heading-pro-max text-center">
                            <span className="italic font-light text-[#2563eb] block">Pourquoi choisir le</span>
                            <span className="font-bold text-[#1e3a8a] block">Bricareau HE ?</span>
                        </h2>
                        <div className="overflow-x-auto rounded-[3rem] border border-slate-100 shadow-xl bg-white">
                            <table className="w-full min-w-[800px]">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="p-8 text-left text-slate-400 font-light uppercase tracking-wider">CARACTÉRISTIQUES</th>
                                        <th className="p-8 text-center text-blue-600 font-black text-2xl">Bricareau HE</th>
                                        <th className="p-8 text-center text-slate-400 font-bold text-xl uppercase tracking-tighter">AUTRES FILTRES</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { feat: "Efficacité certifiée LEED", he: true, other: false },
                                        { feat: "Connectivité Mobile (App)", he: true, other: "Rarement" },
                                        { feat: "Capteur Aqua-Sensor® Patenté", he: true, other: false },
                                        { feat: "Régénération Proportionnelle", he: true, other: false },
                                        { feat: "Double filtration interne", he: true, other: "Optionnel" },
                                        { feat: "Garantie de 10 ans minimum", he: true, other: false }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-8 font-bold text-slate-700 text-lg">{row.feat}</td>
                                            <td className="p-8 text-center">
                                                {row.he === true ? <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto" strokeWidth={3} /> : <span className="text-slate-500 font-bold">{row.he}</span>}
                                            </td>
                                            <td className="p-8 text-center">
                                                {row.other === false ? <X className="w-8 h-8 text-slate-300 mx-auto" strokeWidth={3} /> : <span className="text-slate-400 font-light italic">{row.other}</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 8. Installation Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#2563eb] block text-center">Installation.</span>
                                <span className="font-bold text-[#1e3a8a] block text-center">Tranquille.</span>
                            </h2>
                             <p className="body-pro-max text-slate-600 text-justify mb-16 max-w-2xl mx-auto">
                                 Nos techniciens certifiés Bricareau ne se contentent pas d'installer votre système. Ils s'assurent qu'il fonctionne à son plein potentiel pour des années de service fiable.
                             </p>
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {[
                                    { title: "Planification expertise", desc: "Diagnostic gratuit de votre plomberie." },
                                    { title: "Installation certifiée", desc: "Respect strict des normes locales." },
                                    { title: "Mise en service", desc: "Paramétrage précis selon votre eau." },
                                    { title: "Formation client", desc: "On vous montre comment ça marche." }
                                ].map((step, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="text-4xl font-black text-blue-100 mb-4 italic">0{i + 1}</div>
                                        <h4 className="text-slate-900 mb-2">{step.title}</h4>
                                        <p className="text-xs text-slate-400 font-light uppercase tracking-wider">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="mb-16 heading-pro-max text-center">
                            <span className="italic font-light text-[#2563eb] block text-center">Questions</span>
                            <span className="font-bold text-[#1e3a8a] block text-center">fréquemment posées</span>
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                { q: "Quelle est la différence entre le Bricareau HE et un filtre standard ?", a: "Le Bricareau HE (High Efficiency) utilise des capteurs intelligents et une technologie brevetée pour réduire jusqu'à 46% de consommation de sel et d'eau par rapport à un filtre traditionnel." },
                                { q: "L'application mobile est-elle payante ?", a: "L'application Bricareau Connect est incluse avec tous les modèles HE Connect. Elle vous permet de suivre votre consommation et de recevoir des alertes sans frais supplémentaires." },
                                { q: "À quelle fréquence faut-il remplacer les filtres ?", a: "Cela dépend de la qualité de votre eau d'entrée. En moyenne, un entretien annuel est recommandé pour vérifier les résines et remplacer les pré-filtres si nécessaire." },
                                { q: "Le système HE filtre-t-il aussi le chlore ?", a: "Oui, nous pouvons configurer votre système HE avec des médias filtrants spécifiques pour éliminer le chlore, les goûts et les odeurs, en plus d'adoucir l'eau." }
                            ].slice(0, showAllFaqs ? undefined : 6).map((item, id) => (
                                <AccordionItem key={id} value={`faq-${id}`} className="border-b-slate-100 last:border-0 mb-4 rounded-2xl overflow-hidden border">
                                    <AccordionTrigger className="px-8 py-6 hover:bg-slate-50/50 hover:no-underline text-left text-base font-medium leading-6 text-slate-800" style={{}}>
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base font-light leading-6 text-slate-600 pb-6 text-justify" style={{}}>
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
                </section>

                {/* 10. Reviews & Testimonials */}
                <TestimonialsSection 
                    filterProduct="/filtre-eau-haute-efficacite" 
                    title={
                        <>
                             <h2 className="mb-8 heading-pro-max text-center">
                                <span className="italic font-light text-[#2563eb] block">L'eau pure,</span>
                                <span className="font-bold text-[#1e3a8a] block">le témoignage de nos clients.</span>
                            </h2>
                        </>
                    }
                />

                {/* 11. Consultation Promo */}
                <section className="py-24 bg-slate-100 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="bg-white rounded-[4rem] shadow-2xl flex flex-col lg:flex-row items-center overflow-hidden">
                            <div className="lg:w-1/2 p-12 lg:p-24 text-left">
                                <h2 className="mb-8 heading-pro-max text-left">
                                    <span className="italic font-light text-[#2563eb] block text-left">Offrez-vous le confort</span>
                                    <span className="font-bold text-[#1e3a8a] block text-left">que vous méritez.</span>
                                </h2>
                                 <p className="body-pro-max text-slate-600 text-justify mb-12">
                                     Plus de 11 millions de familles font confiance à Bricareau. Rejoignez-les dès aujourd'hui et transformez votre quotidien.
                                 </p>
                               <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-xl shadow-xl transition-all hover:scale-105" asChild>
                                    <NavLink to="/contact">Planifier ma consultation</NavLink>
                                </Button>
                            </div>
                            <div className="lg:w-1/2 self-stretch">
                                <img
                                    src={bathWomanImg}
                                    alt="Détente dans un bain moussant d'eau douce traitée par un adoucisseur Bricareau"
                                    className="w-full h-full object-cover min-h-[400px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 12. Related Products */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-8 heading-pro-max text-center">
                            <span className="italic font-light text-[#2563eb] block">Découvrez d'autres</span>
                            <span className="font-bold text-[#1e3a8a] block">solutions</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Osmose Inverse Bricareau", desc: "La pureté ultime pour votre eau de boisson.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png", link: "/systeme-de-filtration-deau-potable" },
                                { title: "Désinfection UV", desc: "Protection totale contre les bactéries.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png", link: "/systemes-de-desinfection-uv" },
                                { title: "Solutions Industrielles", desc: "L'expertise Bricareau pour votre entreprise.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png", link: "/entreprises" }
                            ].map((prod, i) => (
                                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100">
                                    <div className="bg-slate-50 aspect-square overflow-hidden flex items-center justify-center p-8">
                                        <img
                                            src={prod.image}
                                            alt={`${prod.title} - Solution Bricareau complémentaire pour une eau parfaite`}
                                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h3 className="mb-2 group-hover:text-blue-600 transition-colors tracking-tight">{prod.title}</h3>
                                         <p className="body-pro-max text-slate-500 text-justify">
                                             {prod.desc}
                                         </p>
                                       <NavLink
                                            to={prod.link || "#"}
                                            className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm"
                                        >
                                            Lire <ChevronRight className="h-4 w-4" />
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

export default FiltreEauHauteEfficacite;
