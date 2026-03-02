import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Pieces = () => {
    const partCategories = [
        {
            name: "Filtres",
            items: [
                { name: "Filtre à sédiments 5 microns", price: "24.99", stock: "En stock" },
                { name: "Filtre à charbon actif", price: "34.99", stock: "En stock" },
                { name: "Membrane osmose inverse", price: "89.99", stock: "En stock" },
                { name: "Filtre UV de remplacement", price: "149.99", stock: "En stock" }
            ]
        },
        {
            name: "Résines et sel",
            items: [
                { name: "Résine adoucisseur (sac 25kg)", price: "199.99", stock: "En stock" },
                { name: "Sel en pastilles (sac 20kg)", price: "12.99", stock: "En stock" },
                { name: "Sel en cristaux (sac 20kg)", price: "11.99", stock: "En stock" },
                { name: "Nettoyant pour résine", price: "29.99", stock: "En stock" }
            ]
        },
        {
            name: "Valves et raccords",
            items: [
                { name: "Valve de contrôle électronique", price: "349.99", stock: "Sur commande" },
                { name: "Raccord rapide 3/4\"", price: "8.99", stock: "En stock" },
                { name: "Valve de dérivation", price: "45.99", stock: "En stock" },
                { name: "Kit de raccordement", price: "79.99", stock: "En stock" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-orange-50 to-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <Package className="h-16 w-16 text-[#0052ff] mx-auto" />
                            <h1
                                className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-foreground text-justify max-w-xl mx-auto"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold">Pièces de Remplacement</span>
                            </h1>
                            <p className="text-[20px] leading-[28px] text-muted-foreground font-light text-justify max-w-xl mx-auto">
                                Trouvez toutes les pièces dont vous avez besoin pour vos équipements
                            </p>
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
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                                {category.name}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                                {category.items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                                    >
                                        <div className="aspect-square bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
                                            <Package className="h-16 w-16 text-slate-400" />
                                        </div>
                                        <h3 className="font-semibold text-foreground mb-2">
                                            {item.name}
                                        </h3>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-2xl font-bold text-[#0052ff]">
                                                ${item.price}
                                            </span>
                                            <span className={`text-xs px-2 py-1 rounded ${item.stock === "En stock"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-orange-100 text-orange-700"
                                                }`}>
                                                {item.stock}
                                            </span>
                                        </div>
                                        <Button
                                            className="w-full bg-[#0052ff] hover:bg-[#0052ff]/90 text-white"
                                            size="sm"
                                        >
                                            <ShoppingCart className="h-4 w-4 mr-2" />
                                            Ajouter au panier
                                        </Button>
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
