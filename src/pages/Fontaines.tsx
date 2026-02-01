import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Snowflake, Droplets, Building2, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFountains from "@/assets/Fontaines d'eau.webp";

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
        <div className="min-h-screen bg-background text-slate-900">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroFountains}
                            alt="Fontaines à eau modernes"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-4 block">
                                FRAÎCHEUR ILLIMITÉE
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-md">
                                Fontaines à <br /> Glace et Eau
                            </h1>
                            <p className="text-lg md:text-xl font-medium opacity-95 mb-8 max-w-xl drop-shadow-sm">
                                Profitez d'une source inépuisable d'eau fraîche et de glace à portée de main,
                                que ce soit pour votre domicile ou votre espace professionnel.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold" asChild>
                                    <a href="tel:18552649328" className="flex items-center gap-2">
                                        <Phone className="h-5 w-5" />
                                        1-855-264-9328
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-10 h-14 text-lg font-bold backdrop-blur-sm shadow-lg" asChild>
                                    <a href="/contact">Demander un devis</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fountain Types */}
                <section className="py-20 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            {fountainTypes.map((fountain, index) => (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center mb-6">
                                        <fountain.icon className="h-8 w-8 text-cyan-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-4">
                                        {fountain.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {fountain.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {fountain.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                <span className="text-cyan-600 mt-1 font-bold">✓</span>
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
                <section className="py-20 md:py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
                                L'excellence dans chaque goutte
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                                    <h3 className="font-bold text-xl mb-4 text-cyan-600">Économique</h3>
                                    <p className="text-muted-foreground">
                                        Éliminez définitivement les coûts exorbitants d'eau embouteillée et de livraison.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                                    <h3 className="font-bold text-xl mb-4 text-cyan-600">Écologique</h3>
                                    <p className="text-muted-foreground">
                                        Réduisez drastiquement vos déchets plastiques et votre empreinte carbone.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                                    <h3 className="font-bold text-xl mb-4 text-cyan-600">Pratique</h3>
                                    <p className="text-muted-foreground">
                                        Accès immédiat à une eau pure et glacée 24/7, sans effort ni encombrement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                                Intéressé par une fontaine ?
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Contactez nos experts pour découvrir la solution de fontaine parfaite adaptée à votre consommation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-lg font-bold shadow-lg"
                                    asChild
                                >
                                    <a href="tel:18552649328">1 855 264 9328</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-12 h-16 text-lg font-bold border-blue-600 text-blue-600 hover:bg-blue-50"
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
