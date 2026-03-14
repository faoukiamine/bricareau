import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tag, Clock, CheckCircle, ArrowRight, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import filtrationPromoImg from "@/assets/10341859.jpg";

const Promotions = () => {
    const promotions = [
        {
            title: "Offre Spéciale Adoucisseur d'eau",
            description: "Économisez jusqu'à 500$ sur l'installation d'un adoucisseur d'eau résidentiel",
            discount: "20%",
            validUntil: "31 mars 2026",
            category: "Résidentiel",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
            features: [
                "Installation professionnelle incluse",
                "Garantie prolongée de 5 ans",
                "Première année d'entretien gratuit"
            ]
        },
        {
            title: "Système de Filtration d'eau Complet",
            description: "Profitez de 20% de rabais sur nos systèmes de filtration pour toute la maison",
            discount: "20%",
            validUntil: "15 avril 2026",
            category: "Résidentiel",
            image: filtrationPromoImg,
            features: [
                "Filtration complète de l'eau",
                "Cartouches de remplacement incluses",
                "Consultation gratuite"
            ]
        },
        {
            title: "Programme de Référence",
            description: "Recevez 100$ pour chaque client référé qui achète un système d'adoucissement ou de filtration d'eau",
            discount: "100%",
            validUntil: "Permanent",
            category: "Tous",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop",
            features: [
                "Crédit applicable sur votre compte",
                "Aucune limite de références",
                "Bonus cumulatifs disponibles"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-20 pb-0 md:pt-24 lg:pt-32 bg-white overflow-hidden">
                    {/* Mobile Header Decor */}
                    <div className="lg:hidden w-full h-40 bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center border-b border-slate-100">
                        <Tag className="h-16 w-16 text-blue-200" />
                    </div>

                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="max-w-3xl mx-auto pt-10 pb-16 lg:py-0 text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
                                <Tag className="h-5 w-5 text-blue-600" />
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Offres Spéciales</span>
                            </div>
                            <h1
                                className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-slate-900 text-center lg:text-justify max-w-xl mx-auto"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold">Nos Promotions en Cours</span>
                            </h1>
                            <p className="text-[20px] leading-snug text-slate-600 font-light text-center lg:text-justify max-w-xl mx-auto">
                                Profitez de nos offres exceptionnelles sur nos systèmes de traitement d'eau pour transformer votre quotidien.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Promotions Grid */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {promotions.map((promo, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden hover:shadow-xl transition-shadow group"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={promo.image}
                                            alt={`${promo.title} - Offre exclusive Bricareau`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <div className="bg-[#0052ff] text-white text-lg font-bold px-4 py-2 rounded-lg shadow-lg">
                                                <Percent className="h-5 w-5 inline mr-1" />
                                                {promo.discount}
                                            </div>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                                                {promo.category}
                                            </span>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-xl group-hover:text-[#0052ff] transition-colors">
                                            {promo.title}
                                        </CardTitle>
                                        <CardDescription className="text-sm">
                                            {promo.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Clock className="h-4 w-4" />
                                            <span>Valide jusqu'au {promo.validUntil}</span>
                                        </div>
                                        <ul className="space-y-2">
                                            {promo.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button
                                            className="w-full bg-[#0052ff] hover:bg-[#0052ff]/90 text-white rounded-lg"
                                            asChild
                                        >
                                            <a href="/contact" className="flex items-center justify-center gap-2">
                                                Profiter de l'offre
                                                <ArrowRight className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Terms Section */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold text-foreground mb-4">
                                Conditions générales
                            </h3>
                            <div className="prose prose-sm text-muted-foreground space-y-2">
                                <p>
                                    • Les promotions ne peuvent être combinées avec d'autres offres sauf indication contraire.
                                </p>
                                <p>
                                    • Les offres sont valides pour les nouveaux clients et peuvent être soumises à des conditions spécifiques.
                                </p>
                                <p>
                                    • Les prix et promotions sont sujets à changement sans préavis.
                                </p>
                                <p>
                                    • Installation professionnelle requise pour certains produits.
                                </p>
                                <p>
                                    • Contactez-nous pour plus de détails sur les conditions d'éligibilité.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Promotions;
