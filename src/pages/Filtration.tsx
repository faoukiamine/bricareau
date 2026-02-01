import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Filter, Droplets, Shield, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import heroFiltration from "@/assets/Enercare_JP_Day_2_Kitchen_Faucet_498-2048x1365.jpg";

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
        <div className="min-h-screen bg-background text-slate-900">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroFiltration}
                            alt="Robinet de cuisine avec filtration"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-sm font-bold uppercase tracking-widest text-[#60A5FA] mb-4 block">
                                SOLUTIONS DE FILTRATION
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-md">
                                Systèmes de <br /> Filtration d'eau
                            </h1>
                            <p className="text-lg md:text-xl font-medium opacity-95 mb-8 max-w-xl drop-shadow-sm">
                                Améliorez la qualité de votre eau au quotidien avec nos solutions de filtration avancées.
                                Fini le chlore, le calcaire et les impuretés.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold" asChild>
                                    <NavLink to="/contact">
                                        Demander une analyse d'eau
                                    </NavLink>
                                </Button>
                                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-10 h-14 text-lg font-bold backdrop-blur-sm shadow-lg" asChild>
                                    <a href="tel:18552649328" className="flex items-center gap-2">
                                        <Phone className="h-5 w-5" />
                                        1-855-264-9328
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filtration Systems */}
                <section className="py-20 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            {filtrationSystems.map((system, index) => (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                                        <system.icon className="h-8 w-8 text-[#0052ff]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-4">
                                        {system.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {system.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {system.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                <span className="text-[#0052ff] mt-1 font-bold">✓</span>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                                Pourquoi choisir nos systèmes de filtration ?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-xl mb-4 text-[#0052ff]">Eau de qualité supérieure</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Éliminez les contaminants et profitez d'une eau pure au goût exceptionnel, idéale pour la boisson et la cuisine.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-xl mb-4 text-[#0052ff]">Économies à long terme</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Réduisez vos dépenses en eau embouteillée et protégez vos appareils ménagers contre l'usure prématurée.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-xl mb-4 text-[#0052ff]">Installation professionnelle</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Nos experts certifiés assurent une installation rapide, propre et conforme aux normes les plus strictes.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-xl mb-4 text-[#0052ff]">Service et garantie</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Bénéficiez d'un service après-vente d'exception et de garanties complètes sur tous nos équipements.
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
                                Prêt à améliorer la qualité de votre eau ?
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Contactez-nous pour une consultation gratuite et découvrez le système de filtration idéal pour vos besoins spécifiques.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                                <Button
                                    size="lg"
                                    className="bg-[#0052ff] hover:bg-[#0052ff]/90 text-white rounded-full px-12 h-16 text-lg font-bold"
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
                                    <NavLink to="/water-testing">Analyse gratuite</NavLink>
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
