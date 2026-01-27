import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
    ArrowRight,
    Droplets,
    Smartphone,
    Truck,
    Star,
    Check,
    Play,
    Plus,
    Minus,
    Sparkles,
    Heart,
    Utensils,
    Wallet
} from "lucide-react";
import { NavLink } from "react-router-dom"; // Using standard NavLink or imports from current project

const Adoucisseurs = () => {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Header />
            <main>
                {/* 1. Hero Section */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Cuisine moderne avec famille heureuse"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>

                    <div className="container relative z-10 px-4 md:px-6 text-center md:text-left">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Transformez votre eau pour <br className="hidden md:block" />
                                <span className="text-primary-foreground">toute la maison</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                                Profitez d'une eau plus pure, plus douce et plus saine. Protégez vos appareils,
                                sublimez votre peau et redécouvrez le plaisir de l'eau au quotidien.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-primary hover:bg-primary/90">
                                    <NavLink to="/contact-residentiel">Commander maintenant</NavLink>
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
                                    <NavLink to="#benefits">En savoir plus</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Why Choose Us Section */}
                <section className="py-20 bg-[#0f172a] text-white">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Pourquoi nous choisir ?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {/* Card 1 */}
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                                    <Droplets className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Technologie intelligente</h3>
                                <p className="text-gray-300">
                                    Nos systèmes s'adaptent à votre consommation réelle pour maximiser l'efficacité et réduire le gaspillage.
                                </p>
                            </div>
                            {/* Card 2 */}
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                                    <Smartphone className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Contrôle intelligent</h3>
                                <p className="text-gray-300">
                                    Surveillez votre consommation et recevez des alertes directement sur votre smartphone via notre application dédiée.
                                </p>
                            </div>
                            {/* Card 3 */}
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                                    <Truck className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Installation complète</h3>
                                <p className="text-gray-300">
                                    Nos techniciens certifiés s'occupent de tout : installation, configuration et mise en service clé en main.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Comparison Section */}
                <section className="py-20 bg-slate-50">
                    <div className="container px-4 md:px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Trouvez votre adoucisseur d'eau idéal</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
                            Nous avons une gamme complète de solutions adaptées à la taille de votre foyer et à la dureté de votre eau.
                            Comparez nos modèles pour trouver celui qui vous convient.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-8 text-primary font-semibold">
                            <NavLink to="/solutions" className="flex items-center gap-2 hover:underline group">
                                Voir tous les adoucisseurs <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </NavLink>
                            <NavLink to="/filtration" className="flex items-center gap-2 hover:underline group">
                                Voir tous les filtres <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </NavLink>
                        </div>
                    </div>
                </section>

                {/* 4. Testimonials Section */}
                <section className="py-20 bg-white">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Avis clients</h2>

                        <Carousel className="w-full max-w-5xl mx-auto">
                            <CarouselContent>
                                {[
                                    { name: "Marie Dubois", quote: "Une transformation incroyable !", text: "Ma peau n'a jamais été aussi douce et mes appareils ménagers sont enfin protégés. Je recommande vivement !" },
                                    { name: "Thomas Martin", quote: "Installation professionnelle", text: "L'équipe a été ponctuelle, polie et très efficace. Le système fonctionne parfaitement depuis 6 mois." },
                                    { name: "Sophie Leroux", quote: "Économies réelles", text: "Je consomme beaucoup moins de savon et de produits ménagers. C'est bon pour mon portefeuille et pour la planète." },
                                    { name: "Jean Tremblay", quote: "Service client au top", text: "J'avais quelques questions au début et le support a été très réactif et pédagogue. Très satisfait." }
                                ].map((testimonial, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                                        <Card className="h-full shadow-lg border-none bg-slate-50">
                                            <CardContent className="flex flex-col p-8 h-full">
                                                <div className="flex gap-1 mb-4 text-yellow-400">
                                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                                </div>
                                                <h4 className="font-bold text-lg mb-2 text-slate-900">"{testimonial.quote}"</h4>
                                                <p className="text-slate-600 mb-6 flex-grow italic">"{testimonial.text}"</p>
                                                <p className="font-semibold text-primary">{testimonial.name}</p>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden md:flex" />
                            <CarouselNext className="hidden md:flex" />
                        </Carousel>
                    </div>
                </section>

                {/* 5. Benefits Section */}
                <section id="benefits" className="py-20 bg-slate-50">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">Avantages d'un adoucisseur d'eau</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Sparkles, title: "Meilleur goût", desc: "Redécouvrez le vrai goût de vos boissons et plats." },
                                    { icon: Heart, title: "Peau & cheveux sains", desc: "Fini la peau sèche et les cheveux ternes après la douche." },
                                    { icon: Utensils, title: "Vaisselle plus propre", desc: "Adieu les traces de calcaire sur vos verres et couverts." },
                                    { icon: Wallet, title: "Économies sur le sel", desc: "Nos systèmes optimisés consomment moins de sel et d'eau." }
                                ].map((benefit, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                        <benefit.icon className="w-8 h-8 text-primary mb-4" />
                                        <h3 className="font-bold text-lg mb-2 text-slate-900">{benefit.title}</h3>
                                        <p className="text-slate-600 text-sm">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                                    alt="Femme profitant d'une cuisine moderne"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Free Water Test Section */}
                <section className="py-0 bg-white">
                    <div className="container px-4 md:px-6 max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl bg-[#0f172a] text-white">
                            <div className="relative h-64 lg:h-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
                                    alt="Remplir un verre d'eau"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                            </div>
                            <div className="p-10 lg:p-16 flex flex-col justify-center">
                                <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                                    Gratuit
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Commencez par un test d'eau gratuit</h2>
                                <p className="text-gray-300 mb-8 text-lg">
                                    Vous ne savez pas si votre eau est dure ? Nos experts viennent chez vous pour analyser votre eau gratuitement et sans engagement.
                                    Découvrez exactement ce qu'il y a dans votre eau.
                                </p>
                                <Button size="lg" className="rounded-full w-fit bg-white text-[#0f172a] hover:bg-gray-100 hover:text-primary">
                                    <NavLink to="/water-testing">Planifier mon test</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. FAQ Section */}
                <section className="py-20 bg-[#f8f7f4]">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="hidden lg:block relative h-[500px] rounded-2xl overflow-hidden shadow-xl sticky top-24">
                                <img
                                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                                    alt="Technicien expliquant un adoucisseur"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-2">Questions sur le remplacement</h2>
                                <p className="text-slate-600 mb-8">Tout ce que vous devez savoir avant de changer votre système.</p>

                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {[
                                        { q: "Quand dois-je remplacer mon adoucisseur d'eau ?", a: "En général, un adoucisseur d'eau dure entre 10 et 15 ans. Si vous remarquez une baisse de pression, des dépôts calcaires récurrents ou une surconsommation de sel, il est temps de consulter un expert." },
                                        { q: "Combien coûte l'installation d'un nouveau système ?", a: "Le coût varie selon le modèle choisi et la complexité de votre plomberie. Nous proposons des devis gratuits et détaillés après analyse de vos besoins." },
                                        { q: "Est-ce que l'installation prend beaucoup de temps ?", a: "Une installation standard prend généralement entre 2 et 4 heures. Nos techniciens s'assurent de laisser les lieux propres et de vous expliquer le fonctionnement du système avant de partir." },
                                        { q: "Proposez-vous des garanties sur vos appareils ?", a: "Absolument. Tous nos adoucisseurs sont couverts par une garantie pièces et main d'œuvre. Nous offrons également des extensions de garantie avec nos contrats d'entretien." },
                                        { q: "Quelle maintenance est requise ?", a: "L'entretien principal consiste à ajouter du sel régulièrement. Nous recommandons également une révision annuelle par nos techniciens pour assurer une performance optimale et hygiénique." }
                                    ].map((item, i) => (
                                        <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border border-slate-200 shadow-sm">
                                            <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline">
                                                {item.q}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 pb-6 text-base leading-relaxed">
                                                {item.a}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Video Testimonial Section */}
                <section className="py-24 bg-[#1e293b] text-white relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="container relative z-10 px-4 md:px-6 text-center">
                        <span className="text-primary font-bold tracking-wider uppercase mb-2 block">Témoignages vidéos</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-12">Écoutez ce que disent nos clients</h2>

                        <div className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer aspect-video bg-black">
                            <img
                                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Video thumbnail"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                    <Play className="w-8 h-8 text-white fill-current" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-left">
                                <p className="text-2xl font-bold italic mb-2">"C'est le meilleur investissement pour notre maison cette année."</p>
                                <p className="text-gray-300">— La famille Bernard, Québec</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Blog/Resources Section */}
                <section className="py-20 bg-white">
                    <div className="container px-4 md:px-6">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-2">Articles et Ressources</h2>
                                <p className="text-slate-600">Restez informés sur la qualité de l'eau et nos solutions.</p>
                            </div>
                            <Button variant="ghost" className="hidden sm:flex" asChild>
                                <NavLink to="/blog" className="flex items-center gap-2">
                                    Voir tous les articles <ArrowRight className="w-4 h-4" />
                                </NavLink>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    tag: "Guide",
                                    title: "Comment choisir son adoucisseur ?",
                                    excerpt: "Les critères essentiels à prendre en compte pour faire le bon choix selon votre consommation et la dureté de votre eau.",
                                    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1669&q=80"
                                },
                                {
                                    tag: "Santé",
                                    title: "Les bienfaits de l'eau douce pour la peau",
                                    excerpt: "Pourquoi l'eau calcaire agresse votre épiderme et comment l'eau adoucie peut soulager l'eczéma et les irritations.",
                                    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80"
                                },
                                {
                                    tag: "Économies",
                                    title: "Adoucisseur d'eau : quel retour sur investissement ?",
                                    excerpt: "Analyse détaillée des économies réalisées sur l'énergie, les produits ménagers et la durée de vie de vos appareils.",
                                    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                                }
                            ].map((article, i) => (
                                <Card key={i} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={article.img}
                                            alt={article.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <CardContent className="p-6 flex flex-col flex-grow">
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{article.tag}</span>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{article.title}</h3>
                                        <p className="text-slate-600 text-sm mb-4 flex-grow">{article.excerpt}</p>
                                        <a href="#" className="inline-flex items-center text-primary font-semibold hover:underline mt-auto">
                                            Lire plus <ArrowRight className="w-3 h-3 ml-1" />
                                        </a>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Button variant="ghost" className="w-full mt-8 sm:hidden" asChild>
                            <NavLink to="/blog" className="flex items-center justify-center gap-2">
                                Voir tous les articles <ArrowRight className="w-4 h-4" />
                            </NavLink>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Adoucisseurs;
