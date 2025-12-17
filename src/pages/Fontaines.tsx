import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Snowflake, Droplets, Building2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Fontaines = () => {
    const fountainTypes = [
        {
            icon: Snowflake,
            title: "Fontaines à glace",
            description: "Eau fraîche et glace à volonté",
            features: [
                "Production de glace continue",
                "Eau filtrée et refroidie",
                "Capacité ajustable",
                "Hygiénique et pratique"
            ]
        },
        {
            icon: Droplets,
            title: "Fontaines d'eau",
            description: "Eau pure à température ambiante ou froide",
            features: [
                "Filtration intégrée",
                "Sans bouteille",
                "Économique",
                "Écologique"
            ]
        },
        {
            icon: Building2,
            title: "Solutions commerciales",
            description: "Pour bureaux, restaurants et commerces",
            features: [
                "Haute capacité",
                "Design professionnel",
                "Maintenance incluse",
                "Installation rapide"
            ]
        },
        {
            icon: Home,
            title: "Solutions résidentielles",
            description: "Parfait pour votre maison",
            features: [
                "Compact et élégant",
                "Facile d'utilisation",
                "Économie d'espace",
                "Installation simple"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-cyan-50 to-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                Fontaines à Glace et Eau
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground">
                                Eau fraîche et glace à portée de main pour votre maison ou entreprise
                            </p>
                        </div>
                    </div>
                </section>

                {/* Fountain Types */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {fountainTypes.map((fountain, index) => (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                                        <fountain.icon className="h-6 w-6 text-cyan-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-3">
                                        {fountain.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {fountain.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {fountain.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="text-cyan-600 mt-1">✓</span>
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
                                Avantages de nos fontaines
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="font-semibold text-lg mb-2">Économique</h3>
                                    <p className="text-muted-foreground">
                                        Éliminez les coûts d'eau embouteillée et de livraison.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="font-semibold text-lg mb-2">Écologique</h3>
                                    <p className="text-muted-foreground">
                                        Réduisez les déchets plastiques et votre empreinte carbone.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="font-semibold text-lg mb-2">Pratique</h3>
                                    <p className="text-muted-foreground">
                                        Eau fraîche disponible 24/7 sans effort.
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
                                Intéressé par une fontaine ?
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground">
                                Contactez-nous pour découvrir la solution parfaite pour vos besoins.
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
                                    <a href="/contact">Demander un devis</a>
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

export default Fontaines;
