import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const products = [
    {
        name: "Adoucisseurs d'eau",
        description: "Réduisez l'accumulation sur les éviers et les douches",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
        link: "/adoucisseurs"
    },
    {
        name: "Filtres de douche",
        description: "Profitez de cheveux et d'une peau plus doux",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop",
        link: "/services#filtration"
    },
    {
        name: "Filtration maison complète",
        description: "Filtrez l'eau dans toute votre maison",
        image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=600&auto=format&fit=crop",
        link: "/services#filtration"
    },
    {
        name: "Livraison de sel",
        description: "Livraisons régulières selon votre horaire",
        image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=600&auto=format&fit=crop",
        link: "/services#accessoires"
    },
    {
        name: "Échange portable",
        description: "Eau douce pour propriétés saisonnières",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
        link: "/services#adoucissement"
    },
    {
        name: "Conditionneurs sans sel",
        description: "Réduisez l'accumulation sans gaspillage d'eau",
        image: "https://images.unsplash.com/photo-1563207153-f403bf289096?q=80&w=600&auto=format&fit=crop",
        link: "/conditionneurs-sans-sel"
    }
];

const ProductShowcase = () => {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        L'adoucissement d'eau est un incontournable de la maison
                    </h2>
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {products.map((product, index) => (
                        <Card
                            key={index}
                            className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Product image */}
                            <div className="relative h-64 overflow-hidden bg-slate-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Product info */}
                            <CardContent className="p-6 space-y-3">
                                <h3 className="text-xl font-bold text-foreground">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {product.description}
                                </p>
                                <a
                                    href={product.link}
                                    className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all group/link"
                                >
                                    <span>En savoir plus</span>
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
