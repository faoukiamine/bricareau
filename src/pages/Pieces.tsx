import React, { useEffect } from "react";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Search, ArrowRight, ChevronRight, MessageSquare, Phone, PhoneCall, ShieldCheck, Truck, Timer, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import polypropyleneIcon from "@/assets/Polypropylene.svg";
import filterHousingIcon from "@/assets/Big Blue Water Filter.png";
import standardHousingIcon from "@/assets/Standard housing.png";
import pleatedWaterFilters from "@/assets/Pleated Water Filters.png";
import GranularActivatedCarbon from "@/assets/gac water filters.png";
import CarbonBlockFilters from "@/assets/cbc water filters.png";
import AntiScaleFilter from "@/assets/Water Softening Filters.png";
import DeionizationCartridges from "@/assets/deionized water filters.png";
import InlineFilters from "@/assets/inline water filters.png";
import KataloxLightMedia from "@/assets/Katalox Light Media.jpg";
import centaurActivatedCarbonMedia from "@/assets/Centaur_Catalytic_Carbon.webp";
import activatedCarbon from "@/assets/activated_carbon.jpg";
import birmMedia from "@/assets/Birm_Media.jpg";
import calciteMedia from "@/assets/calcite.webp";
import filterAgMedia from "@/assets/Filter-Ag.webp";
import nextSandMedia from "@/assets/Nextsand.webp";
import greensandPlusMedia from "@/assets/greensand-plus.webp";
import windsorPelletSaltMedia from "@/assets/Windsor Pellet Salt.png";
import siftoCrystalPlusMedia from "@/assets/Sifto Crystal Plus 20kg Water Softener Salt.png";
import residentialMembrane from "@/assets/Residential Membranes.png";
import commercialMembrane from "@/assets/Commercial & industrial RO-Membranes.png";
import blackROFaucet from "@/assets/Black RO Faucet.jpg";
import brushNickelROFaucet from "@/assets/Brush Nickel RO Faucet.jpg";
import chromeROFaucet from "@/assets/Chrome RO faucet.jpg";
import rustOut from "@/assets/Rust Out.jpg";
import resinCleaner from "@/assets/Res-Care.png";
import clackMeteredValve from "@/assets/WS1_CI_Valve_Left_side_view.webp";
import clackCalendarValve from "@/assets/clack-water-softener.webp";
import clackTwinValve from "@/assets/clack-ws1 twin alternating valve.jpg";
import ClackBypassValve from "@/assets/Clack by-pass V3006.webp";
import ClackMixingValve from "@/assets/Clack mixing valve.webp";
import ClackKitV3007 from "@/assets/Clack V3007.jpg";
import ClackKitV300701 from "@/assets/Clack V3007-01.jpg";
import ClackKitV300705 from "@/assets/Clack V3007-05.jpg";
import ClackKitV300712 from "@/assets/Clack V3007-12.jpg";
import UVBallast from "@/assets/Ballast UV.webp";
import UVQuartzTube from "@/assets/uv-quartz-sleeves.webp";
import UVLamp from "@/assets/uv lamps.webp";
import FRPROHousing from "@/assets/RO-Housings.jpg";
import SSROHousing from "@/assets/SS-Membrane-Housing.webp";
import piecesHero from "@/assets/2148976317.jpg";

const Pieces = () => {
    useEffect(() => {
        document.title = "Pièces de Remplacement | Filtres et Composantes d'Origine au Québec | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Besoin de filtres, membranes ou cartouches pour votre système d'eau ? Trouvez les pièces de remplacement certifiées chez Bricareau. Expédition rapide partout au Québec.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Pièces de Remplacement Certifiées | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Maintenez la performance de votre système avec nos pièces d'origine certifiées.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/pieces");
    }, []);

    const partCategories = [
        {
            name: "Cartouches filtrantes",
            items: [
                { name: "Filtres à sédiments", image: polypropyleneIcon },
                { name: "Filtres a papier plissé", image: pleatedWaterFilters },
                { name: "Filtres à charbon actif granulé", image: GranularActivatedCarbon },
                { name: "Filtres à charbon actif en bloc", image: CarbonBlockFilters },
                { name: "Filtres anti calcaire", image: AntiScaleFilter },
                { name: "Filtres de déionisation", image: DeionizationCartridges },
                { name: "Filtres inline", image: InlineFilters }
            ]
        },
        {
            name: "Boitiers de filtration",
            items: [
                { name: "Boitier de filtration Standard 10 & 20", image: standardHousingIcon },
                { name: "Boitier de filtration Big Blue 10 & 20", image: filterHousingIcon },
            ]
        },
        {
            name: "RO housings & Membranes d'osmose inverse",
            items: [
                { name: "FRP RO housings", image: FRPROHousing },
                { name: "Stainless Steel RO housings", image: SSROHousing },
                { name: "Membranes d'osmose inverse résidentielles", image: residentialMembrane },
                { name: "Membranes d'osmose inverse commerciales & industrielles", image: commercialMembrane },
            ]
        },
        {
            name: "Résines et Média de filtration",
            items: [
                { name: "Résine d'adoucissement Standard (sac 28,3 litres)" },
                { name: "Résine d'adoucissement Fine Mesh (sac 28,3 litres)" },
                { name: "Résine d'adoucissement Haute Efficacité (sac 28,3 litres)" },
                { name: "Résine de décoloration pour les tanins (sac 28,3 litres)" },
                { name: "Sel en pastilles (sac 18,1 kg)", image: windsorPelletSaltMedia },
                { name: "Sel en cristaux (sac 20 Kg)", image: siftoCrystalPlusMedia },
                { name: "Katalox-Light (sac 25 litres)", image: KataloxLightMedia },
                { name: "Charbon actif (sac 25 litres)", image: activatedCarbon },
                { name: "Charbon actif catalytique (sac 25 litres)", image: centaurActivatedCarbonMedia },
                { name: "Birm (sac 25 litres)", image: birmMedia },
                { name: "Green-Sand", image: greensandPlusMedia },
                { name: "Calcite", image: calciteMedia },
                { name: "Filter-Ag", image: filterAgMedia },
                { name: "Next-Sand", image: nextSandMedia },
            ]
        },
        {
            name: "Vannes de contrôle et raccords",
            items: [
                { name: "Valve de contrôle électronique Calendrier", image: clackCalendarValve },
                { name: "Valve de contrôle électronique avec Meter", image: clackMeteredValve },
                { name: "Valve de contrôle électronique duplex avec Meter", image: clackTwinValve },
                { name: "Valve de dérivation", image: ClackBypassValve },
                { name: "Mixing Valve", image: ClackMixingValve },
                { name: "Kit de raccordement V3007", image: ClackKitV3007 },
                { name: "Kit de raccordement V3007-01", image: ClackKitV300701 },
                { name: "Kit de raccordement V3007-05", image: ClackKitV300705 },
                { name: "Kit de raccordement V3007-12", image: ClackKitV300712 },
            ]
        },
        {
            name: "Robinets pour osmoseur",
            items: [
                { name: "Robinet pour osmoseur avec finition chromé", image: chromeROFaucet },
                { name: "Robinet pour osmoseur avec finition noir", image: blackROFaucet },
                { name: "Robinet pour osmoseur avec finition Nickel satiné", image: brushNickelROFaucet }
            ]
        },
        {
            name: "Nettoyants de résines",
            items: [
                { name: "Rust Out (nettoyant pour le fer)", image: rustOut },
                { name: "Res-Care (nettoyant pour résine)", image: resinCleaner }
            ]
        },
        {
            name: "Accessoires des systèmes UV",
            items: [
                { name: "Lampes UV", image: UVLamp },
                { name: "Tubes au Quartz", image: UVQuartzTube },
                { name: "Ballasts", image: UVBallast }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />
            <main>
                {/* 1. HERO SECTION PRO MAX */}
                <section className="relative h-[800px] flex flex-col items-center justify-center overflow-hidden bg-white group">
                    {/* Breadcrumbs Positioning - Fixed to top to match Home page */}
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block animate-in fade-in slide-in-from-top-4 duration-700">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>

                    {/* Background Layer */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <img
                            src={piecesHero}
                            alt="Pièces de Remplacement Bricareau"
                            className="w-full h-full object-cover object-[center_35%] scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out"
                        />
                        {/* Gradient Signature Bricareau - Exactly like Index Hero */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f0f9ff] via-[#f0f9ff]/40 35% to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
                    </div>

                    {/* Content Layer */}
                    <div className="container relative z-20 mx-auto px-6 h-full flex flex-col items-start justify-center">
                        <div className="mt-12 max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-[1.2s]">
                            <h1 
                                className="leading-[55px] tracking-tighter text-left mb-8 max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-[1.2s]"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                }}
                            >
                                <span className="italic font-light text-[#2563eb] text-[50px] block lg:inline-block">Maintenez la performance.</span>
                                <br className="hidden lg:block" />
                                <span className="font-bold text-[#1e3a8a] text-[50px] block lg:inline-block">Pièces de Remplacement</span>
                            </h1>

                            <p className="body-pro-max text-slate-600 max-w-xl text-left font-light leading-relaxed">
                                Trouvez les composantes d'origine nécessaires pour assurer la pérennité et l'efficacité de vos systèmes de traitement d'eau. Une sélection rigoureuse pour une tranquillité d'esprit totale.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button className="bg-[#2563eb] hover:bg-[#1e3a8a] text-white rounded-full h-16 px-10 text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-200 group/btn">
                                    Parler à un expert
                                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                                </Button>
                                <Button variant="outline" className="rounded-full h-16 px-10 text-lg font-bold border-2 border-slate-200 hover:bg-slate-50 transition-all group/call">
                                    <Phone className="mr-2 w-5 h-5 text-[#2563eb]" />
                                    1 855 264 9328
                                </Button>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
                                {/* Item 1: Stock */}
                                <div className="bg-white/60 backdrop-blur-2xl p-4 rounded-[1.5rem] border border-white/50 shadow-xl shadow-blue-900/5 min-w-[180px] group cursor-default">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">
                                            <Timer className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Stock</p>
                                            <p className="text-[13px] font-bold text-[#1e3a8a]">Expédition 24/48h</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2: Origine */}
                                <div className="bg-white/60 backdrop-blur-2xl p-4 rounded-[1.5rem] border border-white/50 shadow-xl shadow-blue-900/5 min-w-[180px] group cursor-default">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Origine</p>
                                            <p className="text-[13px] font-bold text-[#1e3a8a]">Pièces Certifiées</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 3: Expédition */}
                                <div className="bg-white/60 backdrop-blur-2xl p-4 rounded-[1.5rem] border border-white/50 shadow-xl shadow-blue-900/5 min-w-[180px] group cursor-default">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">
                                            <Truck className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Expédition</p>
                                            <p className="text-[13px] font-bold text-[#1e3a8a]">Partout au Canada</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. CATALOG SECTION PRO MAX */}
                <section className="py-24 bg-white relative overflow-hidden">
                     {/* Background Watermark 1 */}
                     <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[15rem] lg:text-[25rem] font-black text-slate-50/50 select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap z-0">
                        SÉLECTION
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <Tabs defaultValue="Tout" className="flex flex-col lg:flex-row gap-16">
                            {/* Sticky Navigation Sidebar */}
                            <aside className="lg:w-1/4 animate-in fade-in slide-in-from-left duration-1000">
                                <div className="lg:sticky lg:top-32 space-y-4">
                                    <div className="bg-slate-50/80 backdrop-blur-md p-6 rounded-[2.5rem] border border-slate-100 shadow-sm">
                                        <div className="mb-6 px-2">
                                            <h4 className="text-xs font-black text-[#2563eb] uppercase tracking-widest mb-1">Sélecteur</h4>
                                            <p className="text-lg font-bold text-[#1e3a8a]">Catégories</p>
                                        </div>
                                        <TabsList className="flex flex-col items-stretch h-auto w-full p-0 bg-transparent gap-2">
                                            <TabsTrigger
                                                value="Tout"
                                                className="w-full justify-start px-6 py-4 rounded-3xl text-[14px] font-black tracking-tight transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-[#2563eb] data-[state=active]:shadow-lg data-[state=active]:scale-[1.02] text-slate-400 hover:text-[#2563eb] hover:bg-white/50"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Package className="h-5 w-5" />
                                                    <span>Inventaire Complet</span>
                                                </div>
                                            </TabsTrigger>
                                            {partCategories.map((category) => (
                                                <TabsTrigger
                                                    key={category.name}
                                                    value={category.name}
                                                    className="w-full justify-start px-6 py-4 rounded-3xl text-[14px] font-black tracking-tight transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-[#2563eb] data-[state=active]:shadow-lg data-[state=active]:scale-[1.02] text-slate-400 hover:text-[#2563eb] hover:bg-white/50 text-left"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-blue-400 opacity-40 group-data-[state=active]:opacity-100" />
                                                        <span className="truncate">{category.name}</span>
                                                    </div>
                                                </TabsTrigger>
                                            ))}
                                        </TabsList>
                                    </div>

                                    {/* Sidebar CTA Badge */}
                                    <div className="bg-[#1e3a8a] p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group/sidebar-cta">
                                        <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-blue-600/20 rounded-full transition-transform group-hover/sidebar-cta:scale-150 duration-700" />
                                        <div className="relative z-10 space-y-4">
                                            <MessageSquare className="w-10 h-10 text-blue-400" />
                                            <p className="text-white font-bold leading-tight">Besoin d'aide pour identifier une pièce ?</p>
                                            <Button variant="link" className="text-blue-400 p-0 h-auto font-black uppercase text-xs tracking-widest hover:text-white transition-colors flex items-center">
                                                Envoyer une photo
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </aside>

                            {/* Main Content Area */}
                            <div className="lg:w-3/4 space-y-12">
                                <div className="flex flex-col items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                                     <h2 className="heading-pro-max text-left">
                                        <span className="italic font-light text-[#2563eb] block">Explorez nos</span>
                                        <span className="font-bold text-[#1e3a8a] block uppercase">composantes d'origine.</span>
                                    </h2>
                                    <p className="body-pro-max text-slate-500 max-w-2xl text-left font-light">
                                        Filtres, membranes, vannes et accessoires parfaitement compatibles avec vos systèmes. Qualité certifiée pour un rendement optimal.
                                    </p>
                                </div>

                                <div className="relative">
                                    <TabsContent value="Tout" className="animate-in fade-in slide-in-from-bottom-8 duration-700 m-0">
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                            {partCategories.flatMap(cat => cat.items).map((item, idx) => (
                                                <PartCard key={idx} item={item} />
                                            ))}
                                        </div>
                                    </TabsContent>

                                    {partCategories.map((category, idx) => (
                                        <TabsContent key={idx} value={category.name} className="animate-in fade-in slide-in-from-bottom-8 duration-700 m-0">
                                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                                {category.items.map((item, itemIdx) => (
                                                    <PartCard key={itemIdx} item={item} />
                                                ))}
                                            </div>
                                        </TabsContent>
                                    ))}
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </section>

                {/* 3. SUPPORT / CONVERSION SECTION PRO MAX */}
                <section className="py-32 bg-slate-50 relative overflow-hidden">
                     {/* Background Watermark 2 */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[22rem] font-black text-slate-200/20 select-none pointer-events-none tracking-tighter uppercase z-0">
                        SUPPORT
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 space-y-8 text-left animate-in fade-in slide-in-from-left duration-[1.2s]">
                                <h2 className="heading-pro-max">
                                    <span className="italic font-light text-[#2563eb] block font-sans">Ne perdez pas de temps,</span>
                                    <span className="font-black text-[#1e3a8a] block uppercase">parlez à un technicien.</span>
                                </h2>
                                <p className="body-pro-max text-slate-600 font-light leading-relaxed">
                                    Identifier la bonne pièce peut être complexe. Nos experts sont formés pour vous donner la référence exacte en quelques minutes. Un service gratuit pour vous assurer la bonne commande du premier coup.
                                </p>
                                
                                <div className="space-y-4 pt-4">
                                     <div className="flex items-center gap-6 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-blue-900/5 group hover:shadow-2xl transition-all border border-slate-100">
                                        <div className="w-14 h-14 bg-blue-600 rounded-[1.5rem] flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg shadow-blue-200">
                                            <PhoneCall className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Support Téléphonique</p>
                                            <p className="text-2xl font-black text-[#1e3a8a]">1-855-264-9328</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-blue-900/5 group hover:shadow-2xl transition-all border border-slate-100">
                                        <div className="w-14 h-14 bg-blue-600 rounded-[1.5rem] flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg shadow-blue-200">
                                            <Calendar className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Besoin d'installation ?</p>
                                            <a href="/service#contact-form" className="text-2xl font-black text-[#2563eb] hover:underline flex items-center gap-2">
                                                Prendre rendez-vous
                                                <ArrowRight className="w-6 h-6" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2 w-full animate-in fade-in slide-in-from-right duration-[1.2s]">
                                <div className="relative bg-white p-10 md:p-14 rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden">
                                     <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl" />
                                     <div className="relative z-10 space-y-6">
                                        <div className="w-16 h-1 bg-blue-600 rounded-full mb-6" />
                                        <h3 className="text-3xl font-black text-[#1e3a8a] uppercase leading-tight">Zone d'intervention</h3>
                                        <p className="text-slate-500 font-light leading-relaxed">
                                            Nous livrons vos pièces partout au Canada. Pour les installations, nos techniciens mobiles se déplacent chez vous au **Grand Montréal et un périmètre de 300km**avec tout l'équipement nécessaire.
                                        </p>
                                        <div className="flex items-center gap-3 text-[#2563eb] font-bold">
                                            <MapPin className="w-5 h-5" />
                                            <span>Livraison partout au Canada</span>
                                        </div>
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

/* Sub-component for Part Cards to keep main clean and manage animations */
const PartCard = ({ item }: { item: any }) => (
    <div 
        className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer relative animate-in fade-in slide-in-from-bottom-12"
        onClick={() => {
            // For now, since there's no specific link for parts, we scroll to contact or show support
            const contactSection = document.getElementById('contact-support');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }}
    >
        {/* Availability Badge */}
        <div className="absolute top-6 right-6 z-20">
             <div className="bg-[#22c55e]/10 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 border border-[#22c55e]/30">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#15803d]">En Stock</span>
             </div>
        </div>

        {/* Product image */}
        <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
            {item.image ? (
                <img
                    src={item.image}
                    alt={`${item.name} - Bricareau`}
                    className="max-h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                />
            ) : (
                <Package className="h-20 w-20 text-slate-200 relative z-10 group-hover:text-blue-100 transition-colors" />
            )}
        </div>

        {/* Product info */}
        <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
            <h3 className="card-title group-hover:text-blue-600 transition-colors">
                {item.name}
            </h3>
            
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-auto group-hover:underline self-end">
                <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    </div>
);

export default Pieces;
