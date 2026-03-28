import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import adoucisseursImg from "@/assets/Adoucisseurs d'eau.webp";
import solutionsPotableImg from "@/assets/Solutions d'eau potable.webp";
import filtresSpecialisesImg from "@/assets/Filtres d'eau spécialisés.webp";
import fontainesImg from "@/assets/A13.jpg";
import filtrationPuitsImg from "@/assets/Filtration-eau-de-puits.webp";
import uvImg from "@/assets/Systèmes de désinfection UV.webp";
import WellWaterEquipmentImg from "@/assets/vs6opjvs6opjvs6o.png";

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
        name: "Filtration d'eau de puits",
        description: "Nos systèmes de filtration aident à fournir une eau de qualité en provenance d'un puits artésien ou de surface.",
        image: WellWaterEquipmentImg,
        link: "/traitement-eau-de-puits"
    },
    {
        name: "Systèmes de désinfection UV",
        description: "Utilisés pour la stérilisation contre les bactéries, les virus, les coliformes, l'E.Coli, le Cryptosporidium,...",
        image: uvImg,
        link: "/systemes-de-desinfection-uv"
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
                        className="scroll-mt-[120px] mb-8 text-[28px] md:text-[36px] lg:text-[48px] leading-tight"
                        style={{
                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                            fontStyle: 'normal'
                        }}
                    >
                        <span className="italic font-light text-[#2563eb] block">Nos solutions résidentielles</span>
                        <span className="font-bold text-[#1e3a8a] block">de traitement de l'eau</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-slate-600 font-light text-lg md:text-xl leading-relaxed mt-8">
                        Découvrez une gamme complète de technologies de pointe conçues pour transformer la qualité de l'eau de votre foyer. De l'adoucissement haute efficacité à la purification par osmose inverse, nos solutions allient performance, durabilité et design pour offrir à votre famille une eau d'une pureté absolue, chaque jour.
                    </p>
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
                                    className="card-title group-hover:text-blue-600 transition-colors"
                                >
                                    {product.name}
                                </h3>
                                <p
                                    className="flex-grow text-justify text-[16px] md:text-[18px] lg:text-[20px] leading-snug font-light text-slate-600"
                                    style={{
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                        fontStyle: 'normal'
                                    }}
                                >
                                    {product.description}
                                </p>
                                <div
                                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                    style={{ }}
                                >
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
