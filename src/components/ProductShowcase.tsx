import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import adoucisseursImg from "@/assets/Adoucisseurs d'eau.webp";
import solutionsPotableImg from "@/assets/Solutions d'eau potable.webp";
import filtresSpecialisesImg from "@/assets/Filtres d'eau spécialisés.webp";
import fontainesImg from "@/assets/Fontaines d'eau.webp";
import filtrationPuitsImg from "@/assets/Filtration-eau-de-puits.webp";
import uvImg from "@/assets/Systèmes de désinfection UV.webp";

const products = [
    {
        name: "Adoucisseurs d'eau",
        description: "Réduisez l'accumulation sur les éviers et les douches.",
        image: adoucisseursImg,
        link: "/adoucisseurs"
    },
    {
        name: "Solutions d'eau potable",
        description: "Profitez d'une eau pure et saine directement au robinet.",
        image: solutionsPotableImg,
        link: "/filtration"
    },
    {
        name: "Filtres d'eau spécialisés",
        description: "Solutions ciblées pour des besoins de filtration spécifiques.",
        image: filtresSpecialisesImg,
        link: "/filtration"
    },
    {
        name: "Fontaines d'eau",
        description: "Eau fraîche et filtrée pour le bureau ou la maison.",
        image: fontainesImg,
        link: "/fontaines"
    },
    {
        name: "Filtration eau de puits",
        description: "Traitement complet pour une eau de puits sûre.",
        image: filtrationPuitsImg,
        link: "/eau-de-puits"
    },
    {
        name: "Systèmes de désinfection UV",
        description: "Éliminez les bactéries et virus sans produits chimiques.",
        image: uvImg,
        link: "/eau-de-puits/uv"
    }
];

const ProductShowcase = () => {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Nos solutions de traitement d'eau résidentielles
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
                            <div className="relative h-80 overflow-hidden bg-white p-6">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
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
