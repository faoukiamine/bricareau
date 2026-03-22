import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Package } from "lucide-react";
import polypropyleneIcon from "@/assets/Polypropylene.svg";
import pleatedWaterFilters from "@/assets/Pleated Water Filters.png";
import GranularActivatedCarbon from "@/assets/gac water filters.png";
import CarbonBlockFilters from "@/assets/cbc water filters.png";
import AntiScaleFilter from "@/assets/Water Softening Filters.png";
import DeionizationCartridges from "@/assets/deionized water filters.png";
import InlineFilters from "@/assets/inline water filters.png";
import woundFilterImg from "@/assets/String Wound Cartridge Filters.png";

const FiltresDeRemplacement = () => {
    const partCategories = [
        {
            items: [
                { name: "Filtres à sédiments", image: polypropyleneIcon },
                { name: "Filtres à bobine", image: woundFilterImg },
                { name: "Filtres a papier plissé", image: pleatedWaterFilters },
                { name: "Filtres à charbon actif granulé", image: GranularActivatedCarbon },
                { name: "Filtres à charbon actif en bloc", image: CarbonBlockFilters },
                { name: "Filtres anti calcaire", image: AntiScaleFilter },
                { name: "Filtres de déionisation", image: DeionizationCartridges },
                { name: "Filtres inline", image: InlineFilters }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Breadcrumbs Section - Matching Adoucissement positioning */}
                <div className="relative h-[100px] bg-white hidden lg:block">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>
                </div>

                <div id="categories">
                    {partCategories.map((category, categoryIndex) => (
                        <section key={categoryIndex} className="py-12 md:py-16">
                            <div className="container mx-auto px-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                                    {category.items.map((item, itemIndex) => (
                                        <div
                                            key={itemIndex}
                                            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-default"
                                        >
                                            <div className="relative aspect-square bg-[#f0f4f8] flex items-center justify-center p-8 overflow-hidden">
                                                {item.image ? (
                                                    <img
                                                        src={item.image}
                                                        alt={`${item.name} - Bricareau`}
                                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                                    />
                                                ) : (
                                                    <Package className="h-16 w-16 text-slate-400" />
                                                )}
                                            </div>
                                            <div className="p-6 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                                <h3 className="text-slate-900 text-center group-hover:text-blue-600 transition-colors tracking-tight">
                                                    {item.name}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FiltresDeRemplacement;
