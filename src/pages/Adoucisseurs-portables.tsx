import React, { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
    Phone,
    ArrowRight,
    Settings,
    Calendar,
    RefreshCw,
    CheckCircle2,
    Droplets,
    Waves,
    MessageSquare,
    Mail,
    MapPin,
    Star,
    ChevronRight,
    PackageCheck,
    Check,
    Search,
    Wrench,
    HeartHandshake,
    ShieldCheck,
    Shield
} from 'lucide-react';
import safetyIcon from "@/assets/1709235770048.png";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import heroPortables from "@/assets/sub-category-dryer.webp";
import heroBg from "@/assets/unnamed (4).jpg";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import specialFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import missionImg from "@/assets/boire-eau-robinet.jpg";
import portableSoftenerProdImg from "@/assets/Portable Water Softener.webp";


const AdoucisseursPortables = () => {
    useEffect(() => {
        document.title = "Adoucisseur d'eau portable | Service d'Échange et Livraison | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "La solution flexible pour une eau douce partout au Canada : l'adoucisseur d'eau portable par échange. Pas d'installation permanente, livraison rapide à domicile.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Adoucisseur d'eau portable et Service d'échange | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Profitez d’une eau douce sans installation permanente avec notre service d'échange d'adoucisseurs portables.");
    }, []);

    return (
        <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-[#0066FF] selection:text-white" style={{ '--top-banner': '168 100% 42%' } as React.CSSProperties}>
             <Header />
 
             <main>
                <Hero 
                    image={heroBg}
                    highlightedTitle="Adoucisseur d'eau portable,"
                    mainTitle="une eau douce où que vous soyez !"
                    subtitle="La solution d'adoucissement flexible pour votre résidence ou commerce sans installation permanence. Profitez de notre service d'échange d'adoucisseur portable avec livraison directement chez vous."
                    showPhone={true}
                    showBreadcrumbs={true}
                />


            {/* 3. Sections Benefits - Fluid Asymmetrical Editorial Layout */}
            <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
                {/* Background Fluid Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                        
                        {/* Left Content Side: Header & Fact */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-16">
                            <div>
                                <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                                    VOS AVANTAGES
                                </span>
                                <h2 className="text-slate-900 mb-8 leading-[1.1] tracking-tight">
                                    Une eau parfaite, <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">kilomètre après kilomètre.</span>
                                </h2>
                                <p className="text-slate-500 font-light text-xl leading-relaxed">
                                    Que vous soyez au camping, au quai ou dans un chalet, ne laissez pas la qualité de l'eau gâcher votre confort. Nos solutions portables vous suivent partout.
                                </p>
                            </div>

                            <div className="relative p-10 bg-white shadow-2xl shadow-blue-900/5 rounded-3xl border border-blue-50/50 group hover:-translate-y-1 transition-transform duration-500 overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -translate-y-12 translate-x-12 opacity-50" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-6 h-[1px] bg-blue-600" />
                                        <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Le saviez-vous ?</span>
                                    </div>
                                    <p className="text-slate-600 font-light text-lg leading-relaxed italic">
                                        "L'eau dure des campings endommage les chauffe-eaux de VR en moins de 2 ans. Un adoucisseur est votre meilleure assurance."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Content Side: Staggered Benefits Cards */}
                        <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-32 lg:pt-32">
                            
                            {/* Card 1: 100% Nomade */}
                            <div className="group relative lg:translate-x-12">
                                <div className="absolute -inset-4 bg-white/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative bg-white p-10 md:p-14 rounded-[3rem] shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-700">
                                    <div className="flex flex-col md:flex-row gap-10 items-start">
                                        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-blue-900/5">
                                            <MapPin className="h-8 w-8" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="mb-6">
                                                <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">Conçu pour la route</span>
                                                <h3 className="card-title mt-2">100% Nomade</h3>
                                            </div>
                                            <p className="text-slate-500 font-light text-lg leading-relaxed mb-8">
                                                Un format ultra-compact qui se range facilement dans une soute de VR ou un coffre de bateau. Poids plume pour une manipulation aisée.
                                            </p>
                                            <div className="flex flex-wrap gap-3">
                                                {["Poids réduit", "Poignée ergonomique", "Format valise"].map((f, i) => (
                                                    <span key={i} className="text-sm font-medium text-slate-500 flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
                                                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Installation Instantanée */}
                            <div className="group relative lg:-translate-x-12">
                                <div className="relative bg-blue-600 p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-blue-900/20 text-white overflow-hidden hover:bg-blue-700 transition-all duration-700">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                    <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                                            <Settings className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="mb-6">
                                                <span className="text-blue-100 font-bold text-xs uppercase tracking-[0.2em]">Prêt en 5 minutes</span>
                                                <h3 className="card-title text-white mt-2">Installation Instantanée</h3>
                                            </div>
                                            <p className="text-blue-50 font-light text-lg leading-relaxed mb-8">
                                                Pas besoin de plombier. Connectez-le simplement entre le robinet du camping et votre entrée d'eau. C'est aussi simple que de brancher un tuyau d'arrosage.
                                            </p>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                {["Raccords standards", "Sans outils", "Plug & Play"].map((f, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-blue-100">
                                                        <Check className="w-4 h-4" />
                                                        {f}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Protection Maximale */}
                            <div className="group relative lg:translate-x-4">
                                <div className="relative bg-white p-10 md:p-14 rounded-[3rem] shadow-xl shadow-blue-900/5 hover:shadow-2xl transition-all duration-700 border border-slate-100">
                                    <div className="flex flex-col md:flex-row gap-10 items-start">
                                        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                            <Shield className="h-8 w-8" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="mb-6">
                                                <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">Préservez vos actifs</span>
                                                <h3 className="card-title mt-2">Protection Maximale</h3>
                                            </div>
                                            <p className="text-slate-500 font-light text-lg leading-relaxed mb-8">
                                                Élimine le calcium et le magnésium qui obstruent les tuyauteries et réduisent l'efficacité de vos appareils. Prolongez la vie de votre investissement.
                                            </p>
                                            <div className="flex flex-wrap gap-4">
                                                {["Anti-tartre", "Débit constant", "Sans électricité"].map((f, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-blue-600 bg-blue-50/50 px-4 py-2 rounded-full tracking-tighter">
                                                        <CheckCircle2 className="w-4 h-4" />
                                                        {f}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Section Processus - Modern "Timeline" Service Design (UV Inspired) */}
            <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
                {/* Advanced "Service Flow" Background Layers */}
                <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                    {/* Diffused Product Image - Integrating the subject without clutter */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-full opacity-10 md:opacity-[0.22] pointer-events-none z-0">
                        <img 
                            src={portableSoftenerProdImg} 
                            alt="" 
                            className="w-full h-full object-contain scale-110"
                        />
                         {/* Soft Gradient Fade for diffusion */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-slate-50" />
                    </div>

                    {/* Spectral Glows - Water and Purity Focus */}
                    <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)] blur-[120px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] blur-[140px]" />
                    
                    {/* Linear Flow Beams */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent rotate-3 blur-[1px]" />
                    <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-600/10 to-transparent -rotate-6 blur-[2px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            NOTRE FONCTIONNEMENT
                        </span>
                        <h2 className="text-slate-900 mb-6 text-[42px] leading-[1.1]">
                            Un service simple <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">& sans souci.</span>
                        </h2>
                        <p className="text-slate-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
                            De l'installation initiale à la livraison des unités fraîchement régénérées, nous gérons chaque détail technique pour vous garantir une eau parfaite en permanence.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Central Flow Line (Desktop Only) */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent -translate-x-1/2 opacity-60" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-32 gap-y-16 lg:gap-y-0 relative">
                            {[
                                {
                                    number: "01",
                                    title: "Analyse d'eau",
                                    desc: "Nous commençons par un test complet pour calibrer votre adoucisseur portable selon vos besoins spécifiques."
                                },
                                {
                                    number: "02",
                                    title: "Installation Rapide",
                                    desc: "Nos techniciens installent votre système portatif en quelques minutes, sans travaux lourds ni plomberie complexe."
                                },
                                {
                                    number: "03",
                                    title: "Cycles d'Échange",
                                    desc: "Recevez des unités fraîchement régénérées selon un calendrier simplifié qui s'adapte à votre consommation réelle."
                                },
                                {
                                    number: "04",
                                    title: "Suivi & Support",
                                    desc: "Une assistance continue et des vérifications de routine pour s'assurer que votre eau reste d'une qualité irréprochable."
                                }
                            ].map((step, idx) => (
                                <div 
                                    key={idx} 
                                    className={`group relative flex flex-col md:flex-row items-start lg:items-center gap-6 lg:gap-8 ${
                                        idx % 2 === 0 ? 'lg:justify-end lg:text-right text-left' : 'lg:justify-start lg:text-left text-left'
                                    } ${
                                        // Stagger effect on desktop
                                        idx % 2 !== 0 ? 'lg:translate-y-24' : ''
                                    } lg:mb-32 transition-all duration-700`}
                                >
                                    {/* Content container */}
                                    <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:items-end' : 'lg:items-start'} max-w-md`}>
                                        <div className={`w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600 font-bold text-lg group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(37,99,235,0.1)]`}>
                                            {step.number}
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className={`text-slate-500 font-light leading-relaxed ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-justify md:text-inherit`}>
                                            {step.desc}
                                        </p>
                                    </div>

                                    {/* Connecting Glow Node on the central line (Desktop only) */}
                                    <div className={`hidden lg:block absolute top-1/4 w-4 h-4 rounded-full bg-blue-100 border-2 border-white shadow-sm transition-all duration-500 group-hover:bg-blue-600 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] ${
                                        idx % 2 === 0 ? '-right-16 lg:-right-[68px]' : '-left-16 lg:-left-[68px]'
                                    } `} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Section Testimonials */}
            <TestimonialsSection
                filterProduct="/adoucisseurs-portables"
            title={
                <>
                    <span className="font-light block">L’eau pure comme standard.</span>
                    <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Le service comme signature.</span>
                </>
            }
        />

            {/* 6. Section Associated Products */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-slate-900 mb-6 text-4xl leading-10">
                            <span className="font-bold block">Découvrez les produits associés</span>
                        </h2>
                        <p className="font-light text-gray-500 max-w-2xl mx-auto text-center">
                            Optimisez votre expérience de traitement d'eau avec nos solutions complémentaires.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Adoucisseurs d'eau",
                                desc: "Éliminez le calcaire pour une peau douce, un linge éclatant et une protection durable de vos installations.",
                                img: waterSoftenerImg,
                                link: "/adoucisseur-eau-residentiel"
                            },
                            {
                                name: "Stations d'eau potable",
                                desc: "Une eau de qualité minérale directement à votre évier, pour une hydratation pure et sans déchets plastiques.",
                                img: drinkingWaterImg,
                                link: "/systeme-de-filtration-deau-potable"
                            },
                            {
                                name: "Systèmes de filtration d'eau spécialisés",
                                desc: "Nos filtres spécialisés sont conçus pour cibler et éliminer efficacement les contaminants spécifiques de votre eau.",
                                img: specialFiltersImg,
                                link: "/filtres-deau-pour-toute-la-maison"
                            }
                        ].map((prod, i) => (
                            <div
                                key={i}
                                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                onClick={() => window.location.href = prod.link}
                            >
                                <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                    <img
                                        src={prod.img}
                                        alt={`${prod.name} - Solution Bricareau pour une eau pure et sans calcaire partout`}
                                        className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                    />
                                </div>
                                <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                    <h3
                                        className="card-title group-hover:text-blue-600 transition-colors text-center"
                                    >
                                        {prod.name}
                                    </h3>
                                    <p
                                        className="leading-[25px] text-slate-500 font-light flex-grow text-justify"
                                        style={{}}
                                    >
                                        {prod.desc}
                                    </p>
                                    <div
                                        className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                        style={{}}
                                    >
                                        <span></span>
                                        <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
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

export default AdoucisseursPortables;
