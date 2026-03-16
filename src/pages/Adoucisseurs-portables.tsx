import React, { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    Search
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

            {/* 1. Section Hero (Redesigned for Mobile) */}
            <section className="relative lg:h-[850px] flex items-center overflow-hidden bg-white">
                <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                    <div className="container mx-auto px-6 pointer-events-auto">
                        <GlobalBreadcrumbs variant="dark" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full">
                    {/* Mobile Image */}
                    <div className="lg:hidden w-full h-[350px] relative">
                        <img
                            src={heroBg}
                            alt="Adoucisseur portable Bricareau"
                            className="w-full h-full object-cover object-[center_30%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
                    </div>

                    {/* Desktop Background Area (Hidden on Mobile) */}
                    <div className="absolute inset-0 z-0 hidden lg:block">
                        <img
                            src={heroBg}
                            alt="Service d'échange et livraison d'adoucisseurs d'eau portables Bricareau au Québec et Canada"
                            className="w-full h-full object-cover object-[center_30%]"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container relative z-10 mx-auto px-6 h-full flex items-center">
                        <div className="max-w-4xl text-left py-12 lg:py-0">
                            <h1
                                className="text-[32px] md:text-[42px] leading-[1.1] md:leading-[1.2] mb-4 lg:mb-8 tracking-tighter text-slate-900 lg:text-white text-left lg:text-justify max-w-xl"
                                style={{
                                    fontWeight: 350
                                }}
                            >
                                Adoucisseur d'eau portable, une eau douce où que vous soyez !
                            </h1>
                            <p className="font-light text-slate-600 lg:text-gray-200 mb-12 max-w-xl text-left lg:text-justify animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                                La solution d'adoucissement flexible pour votre résidence ou commerce sans installation permanence. Profitez de notre service d'échange d'adoucisseur portable avec livraison directement chez vous.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    asChild
                                >
                                    <NavLink to="/consultation" style={{ fontWeight: 300 }}>
                                        Planifiez une consultation gratuite
                                    </NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Wave Separator (Hidden on Mobile) */}
                <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none hidden lg:block">
                    <svg
                        className="relative block w-full h-[80px]"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            fill="#f9f9f9"
                            transform="rotate(180 600 60)"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* 3. Sections Benefits - Sticky Split Layout */}
            <section className="py-24 bg-gray-50 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        {/* Left Column: Sticky Header */}
                        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-200">
                                VOS AVANTAGES
                            </span>
                            <h2
                                className="text-slate-900 mb-8"
                                style={{}}
                            >
                                Une eau parfaite,<br />
                                <span className="text-blue-600">kilomètre après kilomètre.</span>
                            </h2>
                            <p className="text-slate-600 font-light mb-8 text-justify">
                                Que vous soyez au camping, au quai ou dans un chalet, ne laissez pas la qualité de l'eau gâcher votre confort. Nos solutions portables vous suivent partout.
                            </p>

                            <div className="hidden lg:block p-6 bg-white rounded-2xl shadow-lg border border-blue-50">
                                <p className="font-medium text-slate-900 mb-2">Le saviez-vous ?</p>
                                <p className="text-sm text-slate-500 font-light">
                                    L'eau dure des campings endommage les chauffe-eaux de VR en moins de 2 ans. Un adoucisseur est votre meilleure assurance.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Vertical Card Stack */}
                        <div className="lg:w-2/3 flex flex-col gap-8">
                            {[
                                {
                                    icon: MapPin,
                                    title: "100% Nomade",
                                    subtitle: "Conçu pour la route",
                                    desc: "Un format ultra-compact qui se range facilement dans une soute de VR ou un coffre de bateau. Poids plume pour une manipulation aisée.",
                                    features: ["Poids réduit", "Poignée ergonomique", "Format valise"],
                                    color: "blue"
                                },
                                {
                                    icon: Settings,
                                    title: "Installation Instantanée",
                                    subtitle: "Prêt en 5 minutes",
                                    desc: "Pas besoin de plombier. Connectez-le simplement entre le robinet du camping et votre entrée d'eau. C'est aussi simple que de brancher un tuyau d'arrosage.",
                                    features: ["Raccords standards", "Sans outils", "Plug & Play"],
                                    color: "blue"
                                },
                                {
                                    icon: safetyIcon,
                                    isImage: true,
                                    title: "Protection Maximale",
                                    subtitle: "Préservez vos actifs",
                                    desc: "Élimine le calcium et le magnésium qui obstruent les tuyauteries et réduisent l'efficacité de vos appareils. Prolongez la vie de votre investissement.",
                                    features: ["Anti-tartre", "Débit constant", "Sans électricité"],
                                    color: "blue"
                                }
                            ].map((item, id) => (
                                <div key={id} className="group bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-1">
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                                            {item.isImage ? (
                                                <img src={item.icon as string} alt={item.title} className="h-10 w-10 object-contain" />
                                            ) : (
                                                <item.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors rotate-0" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                                <h3 className="text-slate-900">{item.title}</h3>
                                                <span className={`text-sm font-medium text-${item.color}-600 bg-${item.color}-50 px-3 py-1 rounded-full w-fit`}>
                                                    {item.subtitle}
                                                </span>
                                            </div>
                                            <p className="text-slate-600 font-light mb-6 text-justify">
                                                {item.desc}
                                            </p>
                                            <div className="flex flex-wrap gap-3">
                                                {item.features.map((feature, i) => (
                                                    <span key={i} className="text-sm text-slate-500 flex items-center gap-1.5">
                                                        <CheckCircle2 className={`w-4 h-4 text-${item.color}-500`} />
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. Section Processus - Modern Connected Steps (Blue Theme) */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-32 relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    {/* Header Layout */}
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <span className="text-blue-200 text-xs font-bold uppercase tracking-[0.3em] mb-6 block animate-in fade-in slide-in-from-bottom duration-700">
                            NOTRE FONCTIONNEMENT
                        </span>
                        <h2 className="text-white mb-6">
                            Un service simple <br />& sans souci.
                        </h2>
                        <p className="font-light text-blue-100 max-w-xl mx-auto">
                            De l'installation initiale à la livraison régulière de sel, nous gérons chaque détail technique pour vous garantir une eau parfaite en permanence.
                        </p>
                    </div>

                    {/* Connected Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop Only) */}
                        <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent w-full -z-10 opacity-50"></div>

                        {[
                            {
                                step: "01",
                                title: "Analyse d'eau",
                                desc: "Nous commençons par un test complet pour calibrer votre adoucisseur portable selon vos besoins spécifiques."
                            },
                            {
                                step: "02",
                                title: "Installation Rapide",
                                desc: "Nos techniciens installent votre système portatif en quelques minutes, sans travaux lourds ni plomberie complexe."
                            },
                            {
                                step: "03",
                                title: "Cycles d'Échange",
                                desc: "Recevez des unités fraîchement régénérées selon un calendrier simplifié qui s'adapte à votre consommation réelle."
                            },
                            {
                                step: "04",
                                title: "Suivi & Support",
                                desc: "Une assistance continue et des vérifications de routine pour s'assurer que votre eau reste d'une qualité irréprochable."
                            }
                        ].map((step, idx) => (
                            <div key={idx} className="group relative bg-white/10 backdrop-blur-sm pt-8 pb-8 px-6 rounded-3xl hover:bg-white/20 transition-all duration-500 text-center lg:text-left border border-white/10 hover:border-white/30 hover:-translate-y-1">
                                {/* Step Number Bubble */}
                                <div className="w-20 h-20 mx-auto lg:mx-0 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-8 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                    {step.step}
                                </div>

                                <h3 className="text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-blue-100 font-light text-sm text-justify">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Section Testimonials */}
            <TestimonialsSection
                filterProduct="/adoucisseurs-portables"
                title={
                    <>
                        <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">L’eau pure comme standard.</span>
                        <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block text-blue-600">Le service comme signature.</span>
                    </>
                }
            />

            {/* 6. Section Associated Products */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-slate-900 mb-8">Découvrez les produits associés</h2>
                        <p className="font-light text-gray-500 max-w-2xl mx-auto text-justify">
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
                                link: "/Filtres-deau-pour-toute-la-maison"
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
                                        className="text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight text-center"
                                        style={{}}
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

            <Footer />
        </div>
    );
};

export default AdoucisseursPortables;
