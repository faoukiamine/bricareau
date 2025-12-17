import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wrench, Calendar, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Service = () => {
    const services = [
        {
            icon: Wrench,
            title: "Entretien préventif",
            description: "Maintenance régulière pour assurer le bon fonctionnement de vos équipements",
            features: [
                "Inspection complète annuelle",
                "Nettoyage et ajustements",
                "Remplacement des pièces usées",
                "Rapport détaillé"
            ]
        },
        {
            icon: Calendar,
            title: "Contrats de service",
            description: "Plans d'entretien personnalisés pour une tranquillité d'esprit totale",
            features: [
                "Visites planifiées",
                "Priorité d'intervention",
                "Tarifs préférentiels",
                "Rappels automatiques"
            ]
        },
        {
            icon: Shield,
            title: "Réparations",
            description: "Service de réparation rapide et professionnel",
            features: [
                "Diagnostic gratuit",
                "Pièces d'origine",
                "Techniciens certifiés",
                "Garantie sur réparations"
            ]
        },
        {
            icon: Phone,
            title: "Support technique",
            description: "Assistance téléphonique pour tous vos besoins",
            features: [
                "Disponible 24/7",
                "Conseils d'experts",
                "Dépannage à distance",
                "Intervention rapide"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-indigo-50 to-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                Service et Maintenance
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground">
                                Un service professionnel pour maintenir vos équipements en parfait état
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                                        <service.icon className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="text-indigo-600 mt-1">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Our Service */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                                Pourquoi choisir notre service ?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Techniciens certifiés</h3>
                                    <p className="text-muted-foreground">
                                        Notre équipe est formée et certifiée pour tous les types d'équipements.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Intervention rapide</h3>
                                    <p className="text-muted-foreground">
                                        Service d'urgence disponible 24/7 pour vos besoins critiques.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Pièces d'origine</h3>
                                    <p className="text-muted-foreground">
                                        Nous utilisons uniquement des pièces de remplacement authentiques.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Garantie complète</h3>
                                    <p className="text-muted-foreground">
                                        Toutes nos interventions sont garanties pour votre tranquillité d'esprit.
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
                                Besoin d'un service ?
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground">
                                Contactez-nous pour planifier un entretien ou une réparation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-[#0052ff] hover:bg-[#0052ff]/90 text-white rounded-full px-8"
                                    asChild
                                >
                                    <a href="tel:18552649328">Urgence 24/7: 1 855 264 9328</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-8"
                                    asChild
                                >
                                    <a href="/contact">Planifier un service</a>
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

export default Service;
