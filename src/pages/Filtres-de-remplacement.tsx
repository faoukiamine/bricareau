import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Package, Search, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import sedimentFilterImg from "@/assets/PURTREX_PX05-9_78_2000x.webp";
import carbonFilterImg from "@/assets/pentek-cbc-10-carbon-filter-cartridge-155162-43_2000x.webp";
import pleatedFilterImg from "@/assets/pentek-r30-20bb-sediment-filter-cartridge-155430-43_2000x.webp";
import woundFilterImg from "@/assets/PENTEK_DGD-2501_2000x.webp";
import inlineFilterImg from "@/assets/OMNIPURE_K2533-JJ_2000x.webp";
import deionizationFilterImg from "@/assets/PENTEK_WS-10_WATER_SOFTENING_CARTRIDGE_155319-43_-2_2000x.webp";
import membraneFilterImg from "@/assets/FILMTEC_TW30-1812-50HR_REVERSE_OSMOSIS_MEMBRANE_-_50_GPD_2000x.webp";

const FiltresDeRemplacement = () => {
    const partCategories = [
        {
            name: "Filtres à sédiments",
            items: [
                { name: "Filtre à sédiments 50 microns", price: "24.99", stock: "En stock", image: sedimentFilterImg },
                { name: "Filtre à sédiments 25 microns", price: "24.99", stock: "En stock", image: sedimentFilterImg },
                { name: "Filtre à sédiments 10 microns", price: "24.99", stock: "En stock", image: sedimentFilterImg },
                { name: "Filtre à sédiments 5 microns", price: "24.99", stock: "En stock", image: sedimentFilterImg },
                { name: "Filtre à sédiments 1 micron", price: "24.99", stock: "En stock", image: sedimentFilterImg },
            ]
        },
        {
            name: "Filtres à charbon actif",
            items: [
                { name: "Filtre à charbon actif GAC 10", price: "199.99", stock: "En stock", image: carbonFilterImg },
                { name: "Filtre à charbon actif GAC 20", price: "12.99", stock: "En stock", image: carbonFilterImg },
                { name: "Filtre à charbon actif bloc 5 microns 10", price: "11.99", stock: "En stock", image: carbonFilterImg },
                { name: "Filtre à charbon actif bloc 5 microns 20", price: "29.99", stock: "En stock", image: carbonFilterImg }
            ]
        },
        {
            name: "Filtres à papier plissé",
            items: [
                { name: "Filtre plissé 20 microns", price: "28.99", stock: "En stock", image: pleatedFilterImg },
                { name: "Filtre plissé 5 microns", price: "28.99", stock: "En stock", image: pleatedFilterImg },
                { name: "Filtre plissé Big Blue 10\"", price: "34.99", stock: "En stock", image: pleatedFilterImg },
                { name: "Filtre plissé Big Blue 20\"", price: "54.99", stock: "En stock", image: pleatedFilterImg }
            ]
        },
        {
            name: "Filtres à bobine",
            items: [
                { name: "Filtre bobiné 50 microns", price: "19.99", stock: "En stock", image: woundFilterImg },
                { name: "Filtre bobiné 20 microns", price: "19.99", stock: "En stock", image: woundFilterImg },
                { name: "Filtre bobiné 5 microns", price: "19.99", stock: "En stock", image: woundFilterImg },
                { name: "Filtre bobiné 1 micron", price: "19.99", stock: "En stock", image: woundFilterImg }
            ]
        },
        {
            name: "Filtres inline",
            items: [
                { name: "Filtre inline sédiment 1/4\"", price: "24.99", stock: "En stock", image: inlineFilterImg },
                { name: "Filtre inline charbon GAC", price: "29.99", stock: "En stock", image: inlineFilterImg },
                { name: "Filtre inline reminéralisation", price: "34.99", stock: "En stock", image: inlineFilterImg },
                { name: "Filtre inline alcalin", price: "39.99", stock: "En stock", image: inlineFilterImg }
            ]
        },
        {
            name: "Filtres de déionisation",
            items: [
                { name: "Cartouche DI Standard 10\"", price: "69.99", stock: "En stock", image: deionizationFilterImg },
                { name: "Cartouche DI Haute Capacité", price: "89.99", stock: "En stock", image: deionizationFilterImg },
                { name: "Kit de déionisation complet", price: "149.99", stock: "En stock", image: deionizationFilterImg }
            ]
        },
        {
            name: "Membranes d'osmose inverse",
            items: [
                { name: "Membrane 50 GPD", price: "84.99", stock: "En stock", image: membraneFilterImg },
                { name: "Membrane 75 GPD", price: "94.99", stock: "En stock", image: membraneFilterImg },
                { name: "Membrane 100 GPD", price: "109.99", stock: "En stock", image: membraneFilterImg },
                { name: "Membrane commerciale LP", price: "249.99", stock: "En stock", image: membraneFilterImg }
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative lg:h-[700px] bg-white overflow-hidden flex flex-col lg:items-center">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>
                    {/* Mobile Decor Layer */}
                    <div className="lg:hidden w-full h-48 bg-gradient-to-br from-orange-50 via-white to-blue-50 flex flex-col items-center justify-center border-b border-slate-100">
                        <Package className="h-20 w-20 text-blue-200" />
                    </div>

                    <div className="container mx-auto px-4 lg:px-6 h-full flex items-center">
                        <div className="max-w-3xl mx-auto py-12 lg:py-0 text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
                                <Package className="h-5 w-5 text-blue-600" />
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest leading-none">PIÈCES D'ORIGINE</span>
                            </div>
                            <h1
                                className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] mb-8 tracking-tighter text-slate-900 text-center lg:text-justify max-w-xl mx-auto"
                                style={{
                                    fontWeight: 350
                                }}
                            >
                                <span>Filtres de Remplacement</span>
                            </h1>
                            <p className="text-slate-600 font-light text-center lg:text-justify max-w-xl mx-auto">
                                Trouvez toutes les cartouches filtrantes dont vous avez besoin pour vos équipements afin de maintenir une qualité d'eau optimale toute l'année.
                            </p>
                            <div className="mt-12 flex justify-center lg:justify-start">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 flex items-center gap-2" asChild>
                                    <a href="#categories">Explorer le catalogue <ArrowRight className="h-5 w-5" /></a>
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
                                        <div className="aspect-square bg-[#f0f4f8] rounded-lg mb-4 flex items-center justify-center overflow-hidden p-4">
                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-contain"
                                                    style={{ mixBlendMode: 'multiply' }}
                                                />
                                            ) : (
                                                <Package className="h-16 w-16 text-slate-400" />
                                            )}
                                        </div>
                                        <h3 className="text-foreground mb-2">
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

export default FiltresDeRemplacement;
