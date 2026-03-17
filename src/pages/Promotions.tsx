import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import { Tag, Clock, CheckCircle, ArrowRight, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import promotionsHero from "@/assets/27651.jpg";
import filtrationPromoImg from "@/assets/10341859.jpg";

const Promotions = () => {
    const promotions = [
        {
            title: "Offre Spéciale Adoucisseur d'eau",
            description: "Économisez jusqu'à 500$ sur l'installation d'un adoucisseur d'eau résidentiel",
            validUntil: "31 mars 2026",
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
            validUntil: "15 avril 2026",
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
            validUntil: "Permanent",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop",
            features: [
                "Crédit applicable sur votre compte",
                "Aucune limite de références",
                "Bonus cumulatifs disponibles"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans text-slate-900">
            <Header />
            <main>
                {/* 1. Hero Section */}
                <section className="relative lg:h-[650px] flex flex-col lg:items-center overflow-hidden bg-white">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>
                    <div className="relative lg:absolute lg:inset-0 h-[350px] sm:h-[450px] lg:h-full w-full lg:z-0 overflow-hidden">
                        <img
                            src={promotionsHero}
                            alt="Nos Promotions Bricareau - Offres exceptionnelles sur le traitement d'eau"
                            className="w-full h-full object-cover object-[center_35%]"
                        />
                        <div className="hidden lg:block absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 h-full flex items-center lg:px-6">
                        <div className="max-w-2xl lg:text-white py-12 lg:py-0">
                            <h1
                                className="text-[32px] md:text-[52px] leading-[1.1] md:leading-[1.2] mb-4 lg:mb-8 tracking-tighter text-slate-900 lg:text-white text-left lg:text-justify max-w-xl"
                                style={{
                                    fontWeight: 350
                                }}
                            >
                                Nos <span className="text-blue-600 lg:text-blue-400">Promotions</span> en Cours
                            </h1>
                            <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Profitez de nos offres exceptionnelles sur nos systèmes de traitement d'eau pour transformer votre quotidien.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Promotions Grid */}
                <section className="pt-20 pb-12 md:pb-16">
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
                            <h3 className="text-foreground mb-4">
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
