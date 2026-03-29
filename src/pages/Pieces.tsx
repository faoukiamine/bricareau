import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Search, ArrowRight, ChevronRight, MessageSquare, Phone } from "lucide-react";
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
import piecesHero from "@/assets/wave-banner.jpg";

const Pieces = () => {
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
                { name: "Filer-Ag", image: filterAgMedia },
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
        <div className="min-h-screen bg-background font-sans text-slate-900">
            <Header />
            <main>
                {/* 1. Hero Section */}
                <section className="relative lg:h-[650px] flex flex-col lg:items-center overflow-hidden bg-white">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>
                    <div className="relative lg:absolute lg:inset-0 h-[350px] sm:h-[450px] lg:h-full w-full lg:z-0 overflow-hidden">
                        <img
                            src={piecesHero}
                            alt="Pièces de Remplacement Bricareau - Maintenez vos équipements en parfait état"
                            className="w-full h-full object-cover object-[center_35%]"
                        />
                        <div className="hidden lg:block absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 h-full flex items-center lg:px-6">
                        <div className="max-w-2xl lg:text-white py-12 lg:py-0">
                            <h1
                                className="leading-[1.1] md:leading-[1.2] mb-4 lg:mb-8 tracking-tighter text-slate-900 lg:text-white text-left max-w-xl"
                            >
                                Pièces de <span className="text-blue-600 lg:text-blue-400">Remplacement</span>
                            </h1>
                            <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Trouvez toutes les pièces dont vous avez besoin pour maintenir vos équipements en parfait état de fonctionnement.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="heading-pro-max mb-8 text-center">
                                <span className="italic font-light text-[#2563eb] block">Explorez nos</span>
                                <span className="font-bold text-[#1e3a8a] block">catégories de pièces</span>
                            </h2>
                            <p className="body-pro-max text-slate-500 max-w-3xl mx-auto">
                                Gardez votre système de traitement d'eau à son summum de performance avec nos composantes de qualité supérieure. Nous avons rigoureusement sélectionné chaque pièce pour sa durabilité et sa conformité aux normes les plus exigeantes. Explorez nos catégories pour identifier les solutions de remplacement authentiques — des cartouches filtrantes de précision aux vannes de contrôle intelligentes — conçues pour assurer la pureté et la clarté de votre eau, jour après jour.
                            </p>
                        </div>

                        <Tabs defaultValue="Tout" className="flex flex-col lg:flex-row gap-12 text-center lg:text-left">
                            <aside className="lg:w-1/4">
                                <TabsList className="flex flex-col items-stretch h-auto w-full p-2 bg-slate-50/50 backdrop-blur-md rounded-3xl border border-slate-100 shadow-sm lg:sticky lg:top-32 gap-1">
                                    <TabsTrigger
                                        value="Tout"
                                        className="w-full justify-start px-6 py-3.5 rounded-2xl text-[14px] font-bold tracking-tight transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-[#1e3a8a] data-[state=active]:shadow-lg text-slate-500 hover:text-[#2563eb]"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Package className="h-4 w-4" />
                                            <span>Toutes les catégories</span>
                                        </div>
                                    </TabsTrigger>
                                    {partCategories.map((category) => (
                                        <TabsTrigger
                                            key={category.name}
                                            value={category.name}
                                            className="w-full justify-start px-6 py-3.5 rounded-2xl text-[14px] font-bold tracking-tight transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-[#1e3a8a] data-[state=active]:shadow-lg text-slate-500 hover:text-[#2563eb]"
                                        >
                                            <div className="flex items-center gap-3 text-left">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-40" />
                                                <span>{category.name}</span>
                                            </div>
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </aside>

                            <div className="lg:w-3/4">
                                <TabsContent 
                                    value="Tout"
                                    className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                        {partCategories.flatMap(cat => cat.items).map((item, itemIndex) => (
                                                <div
                                                    key={itemIndex}
                                                    className="group bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                                >
                                                    <div className="relative h-64 overflow-hidden bg-slate-50 flex items-center justify-center p-8">
                                                        <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        {item.image ? (
                                                            <img
                                                                src={item.image}
                                                                alt={`${item.name} - Bricareau`}
                                                                className="max-h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                                            />
                                                        ) : (
                                                            <Package className="h-16 w-16 text-slate-300 relative z-10" />
                                                        )}
                                                    </div>
                                                    <div className="p-6 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                            {item.name}
                                                        </h3>
                                                    </div>
                                                </div>
                                        ))}
                                    </div>
                                </TabsContent>

                                {partCategories.map((category, index) => (
                                    <TabsContent 
                                        key={index}
                                        value={category.name}
                                        className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                            {category.items.map((item, itemIndex) => (
                                                    <div
                                                        key={itemIndex}
                                                        className="group bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                                    >
                                                        <div className="relative h-64 overflow-hidden bg-slate-50 flex items-center justify-center p-8">
                                                            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                            {item.image ? (
                                                                <img
                                                                    src={item.image}
                                                                    alt={`${item.name} - Bricareau`}
                                                                    className="max-h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                                                />
                                                            ) : (
                                                                <Package className="h-16 w-16 text-slate-300 relative z-10" />
                                                            )}
                                                        </div>
                                                        <div className="p-6 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                                {item.name}
                                                            </h3>
                                                        </div>
                                                    </div>
                                            ))}
                                        </div>
                                    </TabsContent>
                                ))}
                            </div>
                        </Tabs>
                    </div>
                </section>

                {/* Help Section */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-center mb-12">
                                <span className="font-light italic text-[#00b4ff] block mb-2 sm:mb-0 sm:inline">Besoin d'aide pour </span>
                                <span className="font-bold text-[#1e3a8a] block sm:inline">trouver la bonne pièce ?</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                                <div className="bg-white p-8 rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">Par téléphone</h3>
                                    <p className="text-sm text-slate-500 mb-6 font-light">
                                        Nos experts vous aident à identifier la pièce immédiatement.
                                    </p>
                                    <Button asChild className="rounded-full px-8">
                                        <a href="tel:18552649328">1 855 264 9328</a>
                                    </Button>
                                </div>
                                <div className="bg-white p-8 rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">Service</h3>
                                    <p className="text-sm text-slate-500 mb-6 font-light">
                                        Laissez nos techniciens certifiés s'en occuper pour vous.
                                    </p>
                                    <Button asChild className="rounded-full px-8">
                                        <a href="/service">Planifier un service</a>
                                    </Button>
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

export default Pieces;
