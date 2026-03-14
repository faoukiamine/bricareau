import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import adoucisseursImg from "@/assets/Adoucisseurs d'eau.webp";
import solutionsPotableImg from "@/assets/Solutions d'eau potable.webp";
import filtresSpecialisesImg from "@/assets/Filtres d'eau spécialisés.webp";
import fontainesImg from "@/assets/A13.jpg";
import filtrationPuitsImg from "@/assets/Filtration-eau-de-puits.webp";
import uvImg from "@/assets/Systèmes de désinfection UV.webp";

const products = [
    {
        name: "Filtres d'eau spécialisés",
        description: "Nos filtres sont brillamment conçus pour résoudre vos problèmes spécifiques en matière d'eau.",
        image: filtresSpecialisesImg,
        link: "/filtres-deau"
    },
    {
        name: "Adoucisseurs d'eau",
        description: "Notre adoucisseur d'eau offrira à votre famille une grande quantité d'eau propre et douce à volonté.",
        image: adoucisseursImg,
        link: "/adoucissement"
    },
    {
        name: "Solutions d'eau potable",
        description: "Profitez d'une eau plus propre avec notre système de purification d'eau à osmose inverse à 6 étapes.",
        image: solutionsPotableImg,
        link: "/systeme-de-filtration-deau-potable"
    },

    {
        name: "Fontaines d'eau",
        description: "Pratiques et économiques afin que vous puissiez profiter d’une eau fraîche au meilleur goût.",
        image: fontainesImg,
        link: "/fontaines"
    },
    {
        name: "Filtration eau de puits",
        description: "Nos systèmes de filtration aident à fournir une eau de qualité en provenance d'un puits artésien ou de surface.",
        image: filtrationPuitsImg,
        link: "/eau-de-puits"
    },
    {
        name: "Systèmes de désinfection UV",
        description: "Utilisés pour la stérilisation contre les bactéries, les virus, les coliformes, l'E.Coli, le Cryptosporidium,...",
        image: uvImg,
        link: "/Systemes-de-desinfection-UV"
    }
];

const ProductShowcase = () => {
    return (
        <section id="solutions" className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2
                        id="solutions-title"
                        className="text-slate-900 scroll-mt-[120px]"
                        style={{ }}
                    >
                        <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">Solutions résidentielles</span>
                        <span className="text-[32px] md:text-[60px] font-medium leading-[1.2] md:leading-[60px] block">de traitement de l'eau</span>
                    </h2>
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                            onClick={() => window.location.href = product.link}
                        >
                            {/* Product image */}
                            <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                <img
                                    src={product.image}
                                    alt={`${product.name} - Solution Bricareau`}
                                    className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                />
                            </div>

                            {/* Product info */}
                            <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                <h3
                                    className="text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight text-center"
                                    style={{ }}
                                >
                                    {product.name}
                                </h3>
                                <p
                                    className="leading-[25px] text-slate-500 font-light flex-grow text-justify"
                                    style={{ }}
                                >
                                    {product.description}
                                </p>
                                <div
                                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                    style={{ }}
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
    );
};

export default ProductShowcase;
