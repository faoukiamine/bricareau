import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
    Snowflake,
    Zap,
    Users,
    ChevronRight,
    ArrowRight,
    ShieldCheck,
    CheckCircle2,
    TrendingUp,
    Phone,
    Thermometer,
    Droplets,
    Settings,
    Star,
    Sparkles,
    Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Premium Assets
import iceHeroImg from "@/assets/ice_hero_premium.png";
import iceDesktopCombo from "@/assets/ice_desktop_combo.png";
import iceUndercounterImg from "@/assets/ice_undercounter_premium.png";
// Fallback for industrial if missing
import iceMachineIndustrial from "@/assets/Machine+à+glaçons+de+comptoir+auto-nettoyante+de+26+lb+R.W.FLAME-78609293.webp";

const MachinesAGlaceEntreprises = () => {
    useEffect(() => {
        document.title = "Machines à Glace de Luxe pour Entreprises | Bricareau Pro";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Équipez votre entreprise avec les meilleures machines à glace au Québec. Glace pépite, cube et filtration AquaShield™. Solutions haut de gamme et entretien inclus.");
        }
    }, []);

    const products = [
        {
            title: "Modèle 'Élite Hydra' (Distributeur Eau & Glace Pépite)",
            desc: "L'élégance suprême pour votre salle de repos. Gère l'eau micro-filtrée et la glace pépite 'Chewblet' irrésistible.",
            image: iceDesktopCombo,
            specs: ["Type de glace : Pépite (Nugget)", "Capacité : 125 lb / jour", "Format : Comptoir"],
            tag: "Bestseller Salon"
        },
        {
            title: "Modèle 'Atlas Cube' (Sous-comptoir Haute Capacité)",
            desc: "Puissance et discrétion. S'intègre parfaitement sous vos comptoirs pour une production massive de cubes cristallins.",
            image: iceUndercounterImg,
            specs: ["Type de glace : Cube Classique", "Capacité : 150 lb / jour", "Format : Encastrable"],
            tag: "Service Restauration"
        },
        {
            title: "Modèle 'Zenith Bin' (Unité Haute Performance)",
            desc: "Conçu pour les environnements intensifs. Réservoir massif et haute vélocité pour les grands complexes.",
            image: iceMachineIndustrial,
            specs: ["Type de glace : Écaille ou Cube", "Capacité : 300+ lb / jour", "Format : Stationnaire"],
            tag: "Intensif"
        }
    ];

    const comparisonData = [
        { feature: "Type de glace", model1: "Pépite (Nugget)", model2: "Cube Cristallin", model3: "Écaille (Flake)" },
        { feature: "Production journalière", model1: "125 lb", model2: "150 lb", model3: "300 lb" },
        { feature: "Capacité du bac interne", model1: "30 lb", model2: "70 lb", model3: "150 lb" },
        { feature: "Filtration AquaShield™", model1: "Inclus", model2: "Inclus", model3: "Inclus" },
        { feature: "Option Eau Pétillante", model1: "Oui", model2: "Non", model3: "Non" },
        { feature: "Idéal pour", model1: "Bureaux, Cafés", model2: "Bars, Restaurants", model3: "Hôtels, Sport" }
    ];

    const faqs = [
        {
            q: "Quelle est la différence entre la glace pépite et la glace cube ?",
            a: "La glace pépite (nugget) est compressée et friable, elle retient la saveur des boissons et elle est très appréciée pour l'hydratation au bureau. La glace cube est plus dense, fond moins vite et est idéale pour les verres de spiritueux ou les sodas."
        },
        {
            q: "Les machines nécessitent-elles une arrivée d'eau ?",
            a: "Oui, toutes nos machines de gamme professionnelle se raccordent directement à votre plomberie pour garantir une production continue et une hygiène irréprochable via nos filtres Bricareau."
        },
        {
            q: "L'entretien est-il inclus dans la location ?",
            a: "Absolument. Nos forfaits 'Bricareau Care' incluent le changement des filtres, l'assainissement complet et le support technique prioritaire."
        },
        {
            q: "Proposez-vous d'autres modèles que ceux présentés ?",
            a: "Oui, nous avons accès à un catalogue complet d'unités spéciales. Contactez-nous pour un diagnostic précis de vos besoins."
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDFDFF] font-sans text-slate-900 overflow-x-hidden">
            <Header />

            <main>
                {/* 1. IMMERSIVE HERO - DARK LUXE */}
                <section className="relative h-[650px] md:h-[750px] lg:h-[850px] flex flex-col items-center justify-center overflow-hidden bg-slate-950">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>

                    <div className="absolute inset-0 z-0">
                        <img 
                            src={iceHeroImg} 
                            className="w-full h-full object-cover opacity-60 scale-105"
                            alt="Glace cristalline Bricareau Pro"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    </div>

                    <div className="container relative z-10 mx-auto px-6">
                        <div className="max-w-4xl space-y-10 animate-in fade-in slide-in-from-bottom duration-1000">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase">
                                <Snowflake className="w-4 h-4 animate-spin-slow" />
                                Pureté & Fraîcheur Suprême
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter">
                                <span className="block text-blue-400 font-light italic opacity-90">La pureté absolue</span>
                                <span className="block mt-2">au cœur de votre entreprise.</span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                                Finissez-en avec la glace de qualité médiocre. Bricareau équipe vos espaces avec des solutions de production de glace haute précision, alliant esthétique premium et filtration AquaShield™.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-6 pt-6">
                                <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-900/20" asChild>
                                    <NavLink to="/contact-entreprises">Planifier une démo</NavLink>
                                </Button>
                                <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-white/20 text-white hover:bg-white/10 transition-all">
                                    <NavLink to="/contact-entreprises">Télécharger le catalogue</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. REVOLUTIONARY TECHNOLOGY SECTION */}
                <section className="py-32 bg-white relative">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-24 items-center">
                            <div className="w-full lg:w-1/2 space-y-12">
                                <h2 className="heading-pro-max text-left tracking-tight">
                                    <span className="italic font-light text-blue-600 block mb-2">Innovation Bricareau Pure™</span>
                                    <span className="font-bold text-slate-950 block leading-tight">Une technologie de filtration <br/>révolutionnaire.</span>
                                </h2>
                                
                                <p className="body-pro-max text-slate-600">
                                    Chaque cristal de glace produit par nos unités est le résultat d'un processus rigoureux de purification. Notre système AquaShield™ élimine les contaminants au niveau moléculaire pour une transparence et un goût parfait.
                                </p>

                                <div className="space-y-10">
                                    {[
                                        { 
                                            title: "Purification Multicouche", 
                                            icon: <Droplets className="w-6 h-6" />, 
                                            text: "Élimine le chlore, les sédiments et les impuretés organiques pour une glace neutre." 
                                        },
                                        { 
                                            title: "Protection Anti-Microbienne", 
                                            icon: <ShieldCheck className="w-6 h-6" />, 
                                            text: "Revêtement interne certifié inhibant 99% de la croissance bactérienne." 
                                        },
                                        { 
                                            title: "Production Haute Vélocité", 
                                            icon: <Zap className="w-6 h-6" />, 
                                            text: "Échangeur thermique optimisé pour une production rapide et économe en énergie." 
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-8 group">
                                            <div className="w-14 h-14 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                                {item.icon}
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="text-xl font-bold text-slate-950">{item.title}</h4>
                                                <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="w-full lg:w-1/2 relative">
                                <div className="relative aspect-square rounded-[5rem] overflow-hidden shadow-2xl group">
                                    <img 
                                        src={iceHeroImg} 
                                        alt="Détail glace cristalline" 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply transition-opacity opacity-0 group-hover:opacity-100 duration-700" />
                                </div>
                                {/* Digital Accent */}
                                <div className="absolute -bottom-12 -left-12 bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 hidden md:block animate-bounce-slow">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase text-blue-600 tracking-widest">Qualité Certifiée</p>
                                            <p className="font-bold text-slate-900">Standard de Pureté 100%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. PRODUCT CATALOG - BENTO STYLE */}
                <section className="py-32 bg-slate-50 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24 space-y-4">
                            <h2 className="heading-pro-max">
                                <span className="italic font-light text-blue-600 block">Solutions sur-mesure</span>
                                <span className="font-bold text-slate-950 block">Explorez notre gamme de prestige.</span>
                            </h2>
                            <p className="body-pro-max max-w-2xl mx-auto">
                                Du bureau corporatif à la cuisine industrielle, trouvez l'unité parfaitement dimensionnée pour vos besoins spécifiques d'hydratation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {products.map((product, i) => (
                                <div key={i} className="group relative bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl">
                                    <div className="absolute top-8 right-8 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 group-hover:border-blue-600 transition-colors">
                                        {product.tag}
                                    </div>
                                    
                                    <div className="pt-12 mb-12 relative overflow-hidden h-[300px] flex items-center justify-center">
                                        <img 
                                            src={product.image} 
                                            alt={product.title} 
                                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-1000 group-hover:scale-110" 
                                        />
                                    </div>

                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold leading-tight text-slate-950 group-hover:text-blue-600 transition-colors">
                                            {product.title}
                                        </h3>
                                        <p className="text-slate-500 font-light text-sm leading-relaxed">
                                            {product.desc}
                                        </p>
                                        <ul className="space-y-3 pt-2">
                                            {product.specs.map((spec, j) => (
                                                <li key={j} className="flex items-center gap-3 text-xs font-bold text-slate-400">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600/30" />
                                                    {spec}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pt-4">
                                            <Button variant="ghost" className="p-0 text-blue-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                                Voir les détails <ChevronRight className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. COMPARISON TABLE - PREMIUM DESIGN */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="heading-pro-max text-center mb-20 font-bold text-slate-950">Comparatif des Technologies de Glace</h2>
                            <div className="overflow-x-auto rounded-[3rem] border border-slate-100 bg-white shadow-2xl relative">
                                <table className="w-full text-left border-collapse min-w-[800px]">
                                    <thead>
                                        <tr className="bg-slate-50">
                                            <th className="p-10 text-xl font-bold text-slate-950 w-1/4">Caractéristiques</th>
                                            <th className="p-10 text-center text-[#1e3a8a] text-lg font-bold">Élite Hydra</th>
                                            <th className="p-10 text-center text-[#1e3a8a] text-lg font-bold">Atlas Cube</th>
                                            <th className="p-10 text-center text-[#1e3a8a] text-lg font-bold">Zenith Bin</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comparisonData.map((row, i) => (
                                            <tr key={i} className="border-t border-slate-50 hover:bg-slate-50/50 transition-colors">
                                                <td className="p-8 md:p-10 font-bold text-slate-500 text-sm italic">{row.feature}</td>
                                                <td className="p-8 md:p-10 text-center text-slate-900 font-medium">{row.model1}</td>
                                                <td className="p-8 md:p-10 text-center text-slate-900 font-medium">{row.model2}</td>
                                                <td className="p-8 md:p-10 text-center text-slate-900 font-medium">{row.model3}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. INTERMEDIATE CTA - BLUE IMPACT */}
                <section className="py-24 bg-blue-600 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="space-y-4 text-center md:text-left">
                            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase italic leading-none">Vous n'êtes pas certain <br />de vos besoins ?</h2>
                            <p className="text-blue-100 font-light text-lg italic">Nos experts en hydratation vous conseillent gratuitement.</p>
                        </div>
                        <div className="flex gap-6">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 rounded-full h-16 font-bold shadow-2xl" asChild>
                                <a href="tel:18552649328">1-855-264-9328</a>
                            </Button>
                            <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-white/40 text-white hover:bg-white/10 hidden lg:flex">
                                <NavLink to="/contact-entreprises">Message Rapide</NavLink>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 6. TRUST & TESTIMONIALS */}
                <section className="py-32 bg-white relative">
                    <div className="container mx-auto px-6 text-center mb-20 space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 italic">Preuve Sociale</h2>
                        <h3 className="heading-pro-max font-bold text-[#1e3a8a] block">Les leaders de l'industrie font confiance <br/>à l'expertise en eau de Bricareau.</h3>
                        <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale pt-10">
                            {/* Placeholder Logos */}
                            <div className="font-serif text-3xl font-bold">CORPORATE</div>
                            <div className="font-serif text-3xl font-bold">HOSPITALITY</div>
                            <div className="font-serif text-3xl font-bold">TECH_HUB</div>
                            <div className="font-serif text-3xl font-bold">RESTAURANT_G</div>
                        </div>
                    </div>
                    <TestimonialsSection title={<span className="font-bold text-slate-900">Ce que disent nos clients PRO.</span>} />
                </section>

                {/* 7. SERVICE WORKFLOW SECTION */}
                <section className="py-32 bg-slate-950 text-white relative">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
                            <h2 className="heading-pro-max">
                                <span className="italic font-light text-blue-400 block mb-2">Accompagnement VIP</span>
                                <span className="font-bold block tracking-tighter">Un Service Complet à 360°.</span>
                            </h2>
                            <p className="body-pro-max text-slate-400">
                                Bricareau ne se contente pas de livrer une machine. Nous bâtissons un partenariat durable pour assurer la continuité de votre service.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Installation Facile", icon: <Settings className="w-8 h-8" />, desc: "Raccordement professionnel par des techniciens certifiés Bricareau." },
                                { title: "Maintenance Intensive", icon: <TrendingUp className="w-8 h-8" />, desc: "Visites préventives programmées pour une performance ininterrompue." },
                                { title: "Assainissement Pro", icon: <Sparkles className="w-8 h-8" />, desc: "Cycle de nettoyage profond et remplacement des filtres AquaShield™ semestre." },
                                { title: "Support Client", icon: <Phone className="w-8 h-8" />, desc: "Ligne dédiée Bricareau Pro avec intervention garantie sous 24h ouvrées." }
                            ].map((item, i) => (
                                <div key={i} className="group p-10 rounded-[3rem] bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white text-left">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-8 shadow-xl shadow-blue-500/10 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl font-bold mb-4 group-hover:text-slate-950 transition-colors uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-slate-400 text-sm font-light leading-relaxed group-hover:text-slate-500 transition-colors">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. FAQ SECTION */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="heading-pro-max text-center mb-20 font-bold">Foire aux questions</h2>
                            <Accordion type="single" collapsible className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`faq-${i}`} className="border border-slate-100 rounded-3xl px-8 py-2 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                        <AccordionTrigger className="text-lg font-bold text-slate-950 hover:no-underline">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-slate-600 font-light text-base leading-relaxed pt-2">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MachinesAGlaceEntreprises;
