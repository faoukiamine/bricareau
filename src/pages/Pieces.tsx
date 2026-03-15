import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Package, Search } from "lucide-react";
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
import calciteMedia from "@/assets/Calcite.webp";
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
import UVQuartzTube from "@/assets/UV Quartz Sleeves.jpg";

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
            name: "Membranes d'osmose inverse",
            items: [
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
                { name: "lampes UV" },
                { name: "Tubes au Quartz", image: UVQuartzTube },
                { name: "Ballasts", image: UVBallast }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[800px] bg-white overflow-hidden flex flex-col lg:items-center">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Mobile Image */}
                        <div className="lg:hidden w-full h-[300px] relative">
                            <img
                                src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1200&auto=format&fit=crop"
                                alt="Pièces de Remplacement Bricareau"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
                        </div>

                        <div className="container mx-auto px-6 h-full flex items-center">
                            <div className="max-w-3xl mx-auto text-center space-y-6 py-12 lg:py-0 w-full">
                                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                                    <Package className="h-8 w-8 text-[#0052ff]" />
                                </div>
                                <h1
                                    className="text-[32px] md:text-[52px] leading-tight text-slate-900 tracking-tighter text-center max-w-2xl mx-auto"
                                    style={{
                                        fontWeight: 350
                                    }}
                                >
                                    Pièces de <span className="text-blue-600">Remplacement</span>
                                </h1>
                                <p className="text-slate-600 font-light text-center max-w-xl mx-auto">
                                    Trouvez toutes les pièces dont vous avez besoin pour maintenir vos équipements en parfait état de fonctionnement.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Search Section */}
                <section className="py-8 bg-slate-50 border-b border-border">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto">
                            <div className="flex gap-3">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Rechercher par numéro de pièce ou nom..."
                                        className="pl-10"
                                    />
                                </div>
                                <Button className="bg-[#0052ff] hover:bg-[#0052ff]/90">
                                    Rechercher
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Parts Categories */}
                {partCategories.map((category, categoryIndex) => (
                    <section key={categoryIndex} className="py-12 md:py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-foreground mb-8">
                                {category.name}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                                {category.items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                                    >
                                        <div className="aspect-square bg-[#f0f4f8] rounded-lg mb-4 flex items-center justify-center p-4">
                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={`${item.name} - Bricareau`}
                                                    className="w-full h-full object-contain"
                                                    style={{
                                                        mixBlendMode: item.image === UVQuartzTube ? 'screen' : 'multiply'
                                                    }}
                                                />
                                            ) : (
                                                <Package className="h-16 w-16 text-slate-400" />
                                            )}
                                        </div>
                                        <h3 className="text-foreground">
                                            {item.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}

                {/* Help Section */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-slate-900 mb-8 md:leading-[48px] text-center">
                                Besoin d'aide pour trouver la bonne pièce ?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="mb-2">Par téléphone</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Nos experts vous aident à identifier la pièce
                                    </p>
                                    <Button variant="outline" asChild>
                                        <a href="tel:18552649328">1 855 264 9328</a>
                                    </Button>
                                </div>
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="mb-2">Manuels</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Consultez les schémas de pièces
                                    </p>
                                    <Button variant="outline" asChild>
                                        <a href="/manuels">Voir les manuels</a>
                                    </Button>
                                </div>
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="mb-2">Service</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Laissez nos techniciens s'en occuper
                                    </p>
                                    <Button variant="outline" asChild>
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
