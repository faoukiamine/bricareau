import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Filter, Droplets, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Filtration = () => {
    const filtrationSystems = [
        {
            icon: Filter,
            title: "Filtration par osmose inverse",
            description: "Élimine jusqu'à 99% des contaminants pour une eau ultra-pure",
            features: [
                "Élimine les métaux lourds",
                "Réduit les produits chimiques",
                "Améliore le goût",
                "Installation sous évier"
            ]
        },
        {
            icon: Droplets,
            title: "Filtres à charbon actif",
            description: "Améliore le goût et l'odeur de votre eau",
            features: [
                "Réduit le chlore",
                "Élimine les odeurs",
                "Filtration naturelle",
                "Entretien facile"
            ]
        },
        {
            icon: Shield,
            title: "Purificateurs UV",
            description: "Protection contre les bactéries et virus",
            features: [
                "Désinfection complète",
                "Sans produits chimiques",
                "Efficacité 99.99%",
                "Écologique"
            ]
        },
        {
            icon: Sparkles,
            title: "Systèmes multi-étapes",
            description: "Combinaison de technologies pour une eau parfaite",
            features: [
                "Filtration complète",
                "Protection maximale",
                "Eau de qualité supérieure",
                "Solution tout-en-un"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                Systèmes de Filtration d'Eau
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground">
                                Profitez d'une eau pure et saine avec nos systèmes de filtration avancés
                            </p>
                        </div>
                    </div>
                </section>

                {/* Filtration Systems */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {filtrationSystems.map((system, index) => (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                                        <system.icon className="h-6 w-6 text-[#0052ff]" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-3">
                                        {system.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {system.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {system.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="text-[#0052ff] mt-1">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                                Pourquoi choisir nos systèmes de filtration ?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Eau de qualité supérieure</h3>
                                    <p className="text-muted-foreground">
                                        Éliminez les contaminants et profitez d'une eau pure au goût exceptionnel.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Économies à long terme</h3>
                                    <p className="text-muted-foreground">
                                        Réduisez vos dépenses en eau embouteillée et protégez vos appareils.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Installation professionnelle</h3>
                                    <p className="text-muted-foreground">
                                        Nos experts certifiés assurent une installation rapide et conforme.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Service et garantie</h3>
                                    <p className="text-muted-foreground">
                                        Bénéficiez d'un service après-vente exceptionnel et de garanties complètes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Prêt à améliorer la qualité de votre eau ?
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground">
                                Contactez-nous pour une consultation gratuite et découvrez le système de filtration idéal pour vous.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-[#0052ff] hover:bg-[#0052ff]/90 text-white rounded-full px-8"
                                    asChild
                                >
                                    <a href="tel:18552649328">Appelez-nous : 1 855 264 9328</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-8"
                                    asChild
                                >
                                    <a href="/water-testing">Analyse d'eau gratuite</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Filtration;
