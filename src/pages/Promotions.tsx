import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import { Tag, Clock, CheckCircle, ArrowRight, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import promotionsHero from "@/assets/27651.jpg";
import filtrationPromoImg from "@/assets/10341859.jpg";

const Promotions = () => {
    useEffect(() => {
        document.title = "Promotions et Offres Spéciales | Traitement d'Eau Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Économisez sur votre système de traitement d'eau au Québec. Découvrir nos promotions exclusives sur les adoucisseurs et filtres à eau. Offres à durée limitée !");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Promotions Bricareau : Économisez sur la Qualité de votre Eau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Profiter de rabais exceptionnels sur l'installation et l'entretien de vos systèmes d'eau résidentiels et commerciaux.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/promotions");
    }, []);
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
            description: "Profiter de 20% de rabais sur nos systèmes de filtration pour toute la maison",
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
                <section className="relative h-[650px] md:h-[750px] lg:h-[800px] flex flex-col items-center justify-center overflow-hidden bg-white group">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>
                    
                    {/* Background Layer */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <img
                            src={promotionsHero}
                            className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-[3s]"
                         alt="Nos Promotions Bricareau - Offres exceptionnelles sur le traitement d'eau" title="Traitement d'eau Québec par Bricareau" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/40 via-white/40 to-white lg:bg-gradient-to-r lg:from-[#f0f9ff] lg:via-[#f0f9ff]/40 35% to-transparent" />
                    </div>

                    <div className="container relative z-20 mx-auto px-6 h-full flex items-center justify-center">
                        <div className="max-w-3xl mx-auto text-center space-y-8 py-12 lg:py-0 w-full">
                            <div className="flex items-center justify-center gap-2 bg-blue-600/10 backdrop-blur-xl px-4 py-2 rounded-full border border-blue-600/20 shadow-xl shadow-blue-600/10 mx-auto w-fit">
                                <Percent className="w-4 h-4 text-blue-600" />
                                <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Offres Exclusives</span>
                            </div>

                            <h1 className="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic text-slate-900 mb-6 tracking-tight">
    <span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg">Nos Promotions</span>
                                <span className="font-black text-[#18448F]">en Cours.</span>
</h1>
                            <p className="text-slate-700 font-light text-center max-w-xl mx-auto text-[18px] md:text-[20px] leading-relaxed">
                                Profiter de nos offres exceptionnelles sur nos systèmes de traitement d'eau pour transformer votre quotidien.
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
                                    • Nous contacter pour plus de détails sur les conditions d'éligibilité.
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
