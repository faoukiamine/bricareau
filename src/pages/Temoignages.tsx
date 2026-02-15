import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";

const Temoignages = () => {
    const testimonials = [
        {
            name: "Marie Tremblay",
            location: "Montréal, QC",
            rating: 5,
            text: "Excellent service! L'installation de notre adoucisseur d'eau a été rapide et professionnelle. La différence est incroyable - notre peau est plus douce et nos appareils fonctionnent mieux.",
            product: "Adoucisseur d'eau résidentiel"
        },
        {
            name: "Jean Dubois",
            location: "Québec, QC",
            rating: 5,
            text: "Nous avons installé un système de filtration il y a 6 mois et nous ne pourrions pas être plus satisfaits. L'eau a un goût excellent et le service après-vente est impeccable.",
            product: "Système de filtration"
        },
        {
            name: "Sophie Martin",
            location: "Laval, QC",
            rating: 5,
            text: "Le personnel de Bricareau est très compétent et courtois. Ils ont pris le temps de bien expliquer le fonctionnement de notre système et répondre à toutes nos questions.",
            product: "Adoucisseur sans sel"
        },
        {
            name: "Pierre Gagnon",
            location: "Sherbrooke, QC",
            rating: 5,
            text: "Après avoir eu des problèmes avec notre eau de puits, Bricareau nous a proposé une solution parfaite. L'équipe est professionnelle et le service est exceptionnel.",
            product: "Traitement eau de puits"
        },
        {
            name: "Isabelle Roy",
            location: "Trois-Rivières, QC",
            rating: 5,
            text: "Je recommande fortement Bricareau! Leur équipe a installé notre fontaine d'eau au bureau et tout le monde en est ravi. Plus besoin d'acheter de l'eau embouteillée!",
            product: "Fontaine d'eau commerciale"
        },
        {
            name: "Marc Leblanc",
            location: "Gatineau, QC",
            rating: 5,
            text: "Service impeccable du début à la fin. L'analyse d'eau gratuite nous a permis de choisir le bon système. Très satisfait de notre investissement!",
            product: "Système de filtration UV"
        },
        {
            name: "Caroline Bouchard",
            location: "Longueuil, QC",
            rating: 5,
            text: "L'entretien annuel est toujours fait dans les temps et les techniciens sont très professionnels. C'est rassurant de savoir que notre système est bien entretenu.",
            product: "Adoucisseur d'eau"
        },
        {
            name: "Daniel Côté",
            location: "Saguenay, QC",
            rating: 5,
            text: "Excellent rapport qualité-prix. Notre facture d'électricité a même diminué depuis l'installation de l'adoucisseur. Je recommande à tous mes amis!",
            product: "Adoucisseur haute efficacité"
        },
        {
            name: "Nathalie Fortin",
            location: "Drummondville, QC",
            rating: 5,
            text: "Le service à la clientèle est remarquable. Ils ont répondu rapidement à toutes nos questions et l'installation s'est déroulée sans problème.",
            product: "Système complet résidentiel"
        }
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
                                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
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
