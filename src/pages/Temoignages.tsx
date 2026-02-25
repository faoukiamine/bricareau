import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";

const Temoignages = () => {
    const testimonials = [
        {
            name: "Marc-André L.",
            rating: 5,
            text: "Service exceptionnel. Connaissent vraiment leur domaine. Solution trouvée pour mon eau de puits là où d'autres ont échoué.",
            product: "Eau de puits"
        },
        {
            name: "Karine R.",
            rating: 5,
            text: "Entreprise fiable et honnête. Pas de vente de pression, juste de bons conseils adaptés à mes besoins.",
            product: "Eau de puits"
        },
        {
            name: "Alain S.",
            rating: 5,
            text: "Excellent service après-vente. Réponse rapide à une question technique après l'installation.",
            product: "Eau de puits"
        },
        {
            name: "Hélène B.",
            rating: 5,
            text: "Service humain et honnête. On ne se sent pas comme un simple numéro.",
            product: "Eau de puits"
        },
        {
            name: "Robert G.",
            rating: 5,
            text: "Très satisfait de l'expertise pour mon problème de fer dans l'eau de mon puits.",
            product: "Eau de puits, Systèmes de filtration d'eau spécialisés"
        },
        {
            name: "Jonathan H.",
            rating: 5,
            text: "Experts en traitement d'eau. Ils ont résolu mon problème de manganèse rapidement.",
            product: "Eau de puits, Systèmes de filtration d'eau spécialisés"
        },
        {
            name: "Chantal R.",
            rating: 5,
            text: "Je suis ravie du service. Mon eau est maintenant douce et sans odeur.",
            product: "Eau de puits, Systèmes de filtration d'eau spécialisés"
        },
        {
            name: "Caroline M.",
            rating: 5,
            text: "Enfin une solution durable pour notre eau de puits. Service impeccable.",
            product: "Systèmes de filtration d'eau spécialisés"
        },
        {
            name: "Philippe R.",
            rating: 5,
            text: "Expertise pointue sur les problèmes de tanins. Problème réglé efficacement.",
            product: "Systèmes de filtration d'eau spécialisés"
        },
        {
            name: "Éric V.",
            rating: 5,
            text: "Système de traitement du fer très efficace. Ma plomberie ne tache plus.",
            product: "Systèmes de filtration d'eau spécialisés"
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-green-50 to-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                Témoignages Clients
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground">
                                Découvrez ce que nos clients satisfaits disent de nos services
                            </p>
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-lg font-semibold">4.9/5</span>
                                <span className="text-muted-foreground">({testimonials.length} avis)</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Grid */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow relative"
                                >
                                    <Quote className="h-8 w-8 text-[#0052ff]/20 absolute top-4 right-4" />
                                    <div className="flex mb-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-foreground mb-4 italic">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="border-t border-border pt-4">
                                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                                        <p className="text-xs text-[#0052ff] mt-1">{testimonial.product}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Rejoignez nos clients satisfaits
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground">
                                Découvrez comment nous pouvons améliorer la qualité de votre eau.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/tests-eau"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-[#0052ff] text-white font-medium rounded-full hover:bg-[#0052ff]/90 transition-colors"
                                >
                                    Analyse d'eau gratuite
                                </a>
                                <a
                                    href="tel:18552649328"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-[#0052ff] text-[#0052ff] font-medium rounded-full hover:bg-[#0052ff] hover:text-white transition-colors"
                                >
                                    Appelez-nous : 1 855 264 9328
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Temoignages;
