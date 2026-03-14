import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, Search, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import sedimentFilterImg from "@/assets/PURTREX_PX05-9_78_2000x.webp";
import carbonFilterImg from "@/assets/pentek-cbc-10-carbon-filter-cartridge-155162-43_2000x.webp";
import pleatedFilterImg from "@/assets/pentek-r30-20bb-sediment-filter-cartridge-155430-43_2000x.webp";
import woundFilterImg from "@/assets/Filtres bobinés.png";
import inlineFilterImg from "@/assets/OMNIPURE_K2533-JJ_2000x.webp";
import deionizationFilterImg from "@/assets/PENTEK_WS-10_WATER_SOFTENING_CARTRIDGE_155319-43_-2_2000x.webp";
import membraneFilterImg from "@/assets/FILMTEC_TW30-1812-50HR_REVERSE_OSMOSIS_MEMBRANE_-_50_GPD_2000x.webp";

const Pieces = () => {
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
                { name: "Résine adoucisseur (sac 25kg)", price: "199.99", stock: "En stock", image: pleatedFilterImg },
                { name: "Sel en pastilles (sac 20kg)", price: "12.99", stock: "En stock", image: pleatedFilterImg },
                { name: "Sel en cristaux (sac 20kg)", price: "11.99", stock: "En stock", image: pleatedFilterImg },
                { name: "Nettoyant pour résine", price: "29.99", stock: "En stock", image: pleatedFilterImg }
            ]
        },
        {
            name: "Filtres à bobine",
            items: [
                { name: "Résine adoucisseur (sac 25kg)", price: "199.99", stock: "En stock", image: woundFilterImg },
                { name: "Sel en pastilles (sac 20kg)", price: "12.99", stock: "En stock", image: woundFilterImg },
                { name: "Sel en cristaux (sac 20kg)", price: "11.99", stock: "En stock", image: woundFilterImg },
                { name: "Nettoyant pour résine", price: "29.99", stock: "En stock", image: woundFilterImg }
            ]
        },
        {
            name: "Filtres inline",
            items: [
                { name: "Résine adoucisseur (sac 25kg)", price: "199.99", stock: "En stock", image: inlineFilterImg },
                { name: "Sel en pastilles (sac 20kg)", price: "12.99", stock: "En stock", image: inlineFilterImg },
                { name: "Sel en cristaux (sac 20kg)", price: "11.99", stock: "En stock", image: inlineFilterImg },
                { name: "Nettoyant pour résine", price: "29.99", stock: "En stock", image: inlineFilterImg }
            ]
        },
        {
            name: "Filtres de déionisation",
            items: [
                { name: "Valve de contrôle électronique", price: "349.99", stock: "Sur commande", image: deionizationFilterImg },
                { name: "Raccord rapide 3/4\"", price: "8.99", stock: "En stock", image: deionizationFilterImg },
                { name: "Valve de dérivation", price: "45.99", stock: "En stock", image: deionizationFilterImg },
                { name: "Kit de raccordement", price: "79.99", stock: "En stock", image: deionizationFilterImg }
            ]
        },
        {
            name: "Membranes d'osmose inverse",
            items: [
                { name: "Résine adoucisseur (sac 25kg)", price: "199.99", stock: "En stock", image: membraneFilterImg },
                { name: "Sel en pastilles (sac 20kg)", price: "12.99", stock: "En stock", image: membraneFilterImg },
                { name: "Sel en cristaux (sac 20kg)", price: "11.99", stock: "En stock", image: membraneFilterImg },
                { name: "Nettoyant pour résine", price: "29.99", stock: "En stock", image: membraneFilterImg }
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-20 pb-0 md:pt-24 lg:pt-32 bg-white overflow-hidden">
                    {/* Mobile Decor Layer */}
                    <div className="lg:hidden w-full h-48 bg-gradient-to-br from-orange-50 via-white to-blue-50 flex flex-col items-center justify-center border-b border-slate-100">
                        <Package className="h-20 w-20 text-blue-200" />
                    </div>

                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="max-w-3xl mx-auto pt-10 pb-16 lg:py-0 text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
                                <Package className="h-5 w-5 text-blue-600" />
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest leading-none">PIÈCES D'ORIGINE</span>
                            </div>
                            <h1
                                className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-slate-900 text-center lg:text-justify max-w-xl mx-auto"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold">Filtres de Remplacement</span>
                            </h1>
                            <p className="text-[20px] leading-snug text-slate-600 font-light text-center lg:text-justify max-w-xl mx-auto">
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
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                                {category.name}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                                {category.items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                                    >
                                        <div className="aspect-square bg-slate-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                                            {item.image ? (
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <Package className="h-16 w-16 text-slate-400" />
                                            )}
                                        </div>
                                        <h3 className="font-semibold text-foreground mb-2">
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
                            <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                                Besoin d'aide pour trouver la bonne pièce ?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="font-semibold text-lg mb-2">Par téléphone</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Nos experts vous aident à identifier la pièce
                                    </p>
                                    <Button variant="outline" asChild>
                                        <a href="tel:18552649328">1 855 264 9328</a>
                                    </Button>
                                </div>
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="font-semibold text-lg mb-2">Manuels</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Consultez les schémas de pièces
                                    </p>
                                    <Button variant="outline" asChild>
                                        <a href="/manuels">Voir les manuels</a>
                                    </Button>
                                </div>
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="font-semibold text-lg mb-2">Service</h3>
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
