import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import filtrationBlogImg from "@/assets/10341859.jpg";

const Blog = () => {
    const blogPosts = [
        {
            title: "La Désinfection UV : Impératif Sanitaire pour l'Eau de Puits",
            excerpt: "Analyse approfondie de la barrière microbiologique ultraviolette : enjeux sanitaires, principes de biophysique et protocoles d'ingénierie résidentielle.",
            date: "25 février 2025",
            author: "Équipe Bricareau",
            category: "Expertise",
            image: "https://images.unsplash.com/photo-1581093458791-9d42e3c5e2e9?q=80&w=600&auto=format&fit=crop",
            path: "/blog/lampe-uv-eau-de-puits"
        },
        {
            title: "Les avantages d'un adoucisseur d'eau pour votre maison",
            excerpt: "Découvrez comment un adoucisseur d'eau peut améliorer votre quotidien et protéger vos appareils électroménagers.",
            date: "15 décembre 2024",
            author: "Équipe Bricareau",
            category: "Conseils",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
            path: "/blog/adoucisseur-maison"
        },
        {
            title: "Comment choisir le bon système de filtration d'eau",
            excerpt: "Guide complet pour sélectionner le système de filtration adapté à vos besoins et votre budget.",
            date: "10 décembre 2024",
            author: "Équipe Bricareau",
            category: "Guides",
            image: filtrationBlogImg,
            path: "/blog/choisir-filtration"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-emerald-50 to-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                Blog Bricareau
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground">
                                Conseils, actualités et guides sur le traitement de l'eau
                            </p>
                        </div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {blogPosts.map((post, index) => (
                                <article
                                    key={index}
                                    className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group flex flex-col"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={`${post.title} - Article de blog Bricareau sur le traitement de l'eau`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-[#0052ff] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <User className="h-3 w-3" />
                                                {post.author}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#0052ff] transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <Button
                                            variant="link"
                                            className="p-0 h-auto text-[#0052ff] hover:text-[#0052ff]/80 self-start"
                                            asChild
                                        >
                                            <a href={post.path}>
                                                Lire la suite
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Newsletter CTA */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Restez informé
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground">
                                Inscrivez-vous à notre infolettre pour recevoir nos derniers articles et conseils.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Votre adresse courriel"
                                    className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-[#0052ff]"
                                />
                                <Button
                                    className="bg-[#0052ff] hover:bg-[#0052ff]/90 text-white rounded-lg px-6"
                                >
                                    S'inscrire
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

export default Blog;
