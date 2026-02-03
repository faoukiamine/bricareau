import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tag, Clock, CheckCircle, ArrowRight, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Promotions = () => {
    const promotions = [
        {
            title: "Offre Spéciale Adoucisseur d'eau",
            description: "Économisez jusqu'à 500$ sur l'installation d'un adoucisseur d'eau résidentiel",
            discount: "500$",
            validUntil: "31 mars 2025",
            category: "Résidentiel",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
            features: [
                "Installation professionnelle incluse",
                "Garantie prolongée de 5 ans",
                "Première année d'entretien gratuit"
            ]
        },
        {
            title: "Système de Filtration Complet",
            description: "Profitez de 20% de rabais sur nos systèmes de filtration pour toute la maison",
            discount: "20%",
            validUntil: "15 avril 2025",
            category: "Résidentiel",
            image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=600&auto=format&fit=crop",
            features: [
                "Filtration complète de l'eau",
                "Cartouches de remplacement incluses",
                "Consultation gratuite"
            ]
        },
        {
            title: "Forfait Entreprise Premium",
            description: "Solutions complètes pour entreprises avec installation et maintenance incluses",
            discount: "15%",
            validUntil: "30 juin 2025",
            category: "Entreprise",
            image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=600&auto=format&fit=crop",
            features: [
                "Analyse d'eau professionnelle",
                "Maintenance préventive annuelle",
                "Support technique prioritaire"
            ]
        },
        {
            title: "Fontaine d'eau pour Bureau",
            description: "Obtenez votre première fontaine d'eau avec 3 mois de service gratuit",
            discount: "3 mois",
            validUntil: "31 mai 2025",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=600&auto=format&fit=crop",
            features: [
                "Installation gratuite",
                "Livraison d'eau incluse",
                "Entretien régulier"
            ]
        },
        {
            title: "Analyse d'eau Gratuite",
            description: "Test complet de la qualité de votre eau offert pour tout nouveau client",
            discount: "Gratuit",
            validUntil: "31 décembre 2025",
            category: "Tous",
            image: "https://images.unsplash.com/photo-1581093458791-9d42e3c5e2e9?q=80&w=600&auto=format&fit=crop",
            features: [
                "Test en laboratoire certifié",
                "Rapport détaillé",
                "Recommandations personnalisées"
            ]
        },
        {
            title: "Programme de Référence",
            description: "Recevez 200$ pour chaque client référé qui achète un système",
            discount: "200$",
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
                <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-background to-emerald-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <div className="inline-flex items-center gap-2 bg-[#0052ff]/10 rounded-full px-4 py-2 mb-4">
                                <Tag className="h-5 w-5 text-[#0052ff]" />
                                <span className="text-sm font-medium text-[#0052ff]">Offres Spéciales</span>
                            </div>
                            <h1
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-foreground"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                Nos Promotions <span className="font-normal">en Cours</span>
                            </h1>
                            <p className="font-light text-[20px] leading-[28px] text-muted-foreground">
                                Profitez de nos offres exceptionnelles sur nos systèmes de traitement d'eau
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
                                            alt={promo.title}
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

                {/* CTA Section */}
                <section className="py-12 md:py-16 bg-gradient-to-r from-[#0052ff] to-blue-600">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                Besoin d'aide pour choisir ?
                            </h2>
                            <p className="text-base md:text-lg text-white/90">
                                Nos experts sont là pour vous conseiller et vous aider à trouver la meilleure solution adaptée à vos besoins.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="bg-white text-[#0052ff] hover:bg-white/90 rounded-full px-8"
                                    asChild
                                >
                                    <a href="/contact">Contactez-nous</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white bg-transparent hover:bg-white/10 rounded-full px-8"
                                    asChild
                                >
                                    <a href="tel:18552649328">Appelez le 1-855-264-9328</a>
                                </Button>
                            </div>
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
