import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Heart, Shirt, Sparkles, Home, Leaf, Zap, Check } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const benefits = [
    {
        icon: Heart,
        title: "Peau douce & Cheveux Soyeux",
        description: "Fini les sensations désagréables de peau sèche qui démange et les irritations après une douche ou un bain. Des cheveux plus brillants et soyeux. Un meilleur rasage."
    },
    {
        icon: Shirt,
        title: "Linge Moelleux",
        description: "Votre lave-linge sera plus efficace en lavant vos vêtements à l'eau adoucie. Sans dépôts, votre linge plus blanc et plus doux aura une plus longue durée de vie."
    },
    {
        icon: Sparkles,
        title: "Vaisselle Étincelante",
        description: "Diminuez résidus et traces sur votre vaisselle et vos verres ! L'eau adoucie améliore au quotidien tous les aspects de votre vie."
    },
    {
        icon: Home,
        title: "Surfaces Brillantes",
        description: "L'eau adoucie augmente la durée de vie de la robinetterie, de vos canalisations et de vos appareils électroménagers et en réduit l'usure prématurée due au calcaire."
    },
    {
        icon: Leaf,
        title: "Empreinte écologique",
        description: "Utilisez moins d'eau pour vos applications ménagères et économisez plus de 50% sur les détergents, poudres à lessiver, savons, shampoings et conditionneurs."
    },
    {
        icon: Zap,
        title: "Économie énergétique",
        description: "Toutes les économies faites sur l'électricité et coûts de chauffage dépassent le prix d'achat d'un adoucisseur d'eau !"
    }
];

const reasons = [
    "Réduction des dépôts de calcaire dans vos canalisations",
    "Protection de vos appareils électroménagers (lave-linge, lave-vaisselle, chauffe-eau)",
    "Économies significatives sur les produits d'entretien",
    "Amélioration du confort pour la peau et les cheveux",
    "Prolongation de la durée de vie de vos équipements",
    "Réduction des coûts énergétiques liés au chauffage de l'eau"
];

const Adoucisseurs = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                                    <Droplets className="h-5 w-5 text-primary" />
                                    <span className="text-sm font-medium text-primary">Adoucisseurs d'eau</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                                    Dites adieu à l'eau dure et faites de la place à{" "}
                                    <span className="text-primary">l'eau douce !</span>
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    Solution efficace contre le calcaire, nos adoucisseurs d'eau sont une véritable source
                                    de bien-être et de confort au quotidien. Grâce à leurs résines qui retiennent les éléments
                                    entartrants et diminuent la dureté de votre eau, vous profitez toute l'année d'une eau
                                    douce dans toute la maison.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="rounded-full px-8" asChild>
                                        <NavLink to="/contact-residentiel">
                                            Planifiez une consultation
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </NavLink>
                                    </Button>
                                    <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                                        <a href="tel:18552649328">
                                            Appelez le 1-855-264-9328
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png"
                                    alt="Adoucisseur d'eau Bricareau"
                                    className="w-full max-w-md mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Section */}
                <section className="py-16 md:py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Pourquoi installer un adoucisseur d'eau ?
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                L'eau dure contient des minéraux comme le calcium et le magnésium qui causent
                                des dépôts de calcaire. Un adoucisseur résout ces problèmes efficacement.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                        <Check className="h-5 w-5 text-accent" />
                                    </div>
                                    <p className="text-foreground">{reason}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Grid */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Quels avantages vous procure l'eau adoucie ?
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Cheveux soyeux, linge moelleux et vaisselle étincelante…
                                c'est l'allié détente de toute la famille !
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                        <benefit.icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Salt-Free CTA */}
                <section className="py-16 bg-gradient-to-r from-accent/10 to-primary/10">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Découvrez nos solutions de conditionnement sans sel
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Alternative écologique aux adoucisseurs d'eau conventionnels qui empêche la formation
                                de tartre dans votre système de plomberie, vos équipements de traitement de l'eau,
                                vos chauffe-eau sans réservoir et traditionnels, vos lave-vaisselle, etc.
                            </p>
                            <Button size="lg" className="rounded-full px-8" asChild>
                                <NavLink to="/conditionneurs-sans-sel">
                                    Voir nos conditionneurs sans sel
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </NavLink>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary py-16 md:py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                            Besoin d'aide ?
                        </h2>
                        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                            Nos spécialistes sont là à votre service, de la conception jusqu'à
                            l'entretien de votre adoucisseur d'eau.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="rounded-full px-8 bg-white text-primary hover:bg-white/90"
                                asChild
                            >
                                <NavLink to="/contact-residentiel">
                                    Demander un devis gratuit
                                </NavLink>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full px-8 border-white text-white bg-transparent hover:bg-white/10"
                                asChild
                            >
                                <a href="tel:18552649328">
                                    Appelez le 1-855-264-9328
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Adoucisseurs;
