import React, { useEffect } from "react";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Play, Clock } from "lucide-react";
import filtrationVideoImg from "@/assets/10341859.jpg";

const Videos = () => {
    useEffect(() => {
        document.title = "Bibliothèque Vidéo | Tutoriels et Guides Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Visionnez nos tutoriels vidéo sur l'utilisation, l'entretien et l'installation de vos systèmes de traitement d'eau au Québec.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Vidéos et Tutoriels | Bricareau");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/videos");
    }, []);

    const videoCategories = [
        {
            title: "Installation",
            videos: [
                {
                    title: "Installation d'un adoucisseur d'eau",
                    duration: "12:45",
                    thumbnail: "https://images.unsplash.com/photo-1581093458791-9d42e3c5e2e9?q=80&w=600&auto=format&fit=crop",
                    description: "Guide complet pour installer votre adoucisseur d'eau"
                },
                {
                    title: "Installation d'un système de filtration",
                    duration: "10:30",
                    thumbnail: filtrationVideoImg,
                    description: "Étapes détaillées pour installer un système de filtration"
                }
            ]
        },
        {
            title: "Entretien",
            videos: [
                {
                    title: "Entretien annuel de votre adoucisseur",
                    duration: "8:20",
                    thumbnail: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?q=80&w=600&auto=format&fit=crop",
                    description: "Procédures d'entretien pour maintenir votre équipement"
                },
                {
                    title: "Remplacement des filtres",
                    duration: "6:15",
                    thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
                    description: "Comment remplacer vos filtres facilement"
                }
            ]
        },
        {
            title: "Dépannage",
            videos: [
                {
                    title: "Résoudre les problèmes courants",
                    duration: "15:00",
                    thumbnail: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=600&auto=format&fit=crop",
                    description: "Solutions aux problèmes les plus fréquents"
                },
                {
                    title: "Diagnostic des fuites",
                    duration: "9:40",
                    thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop",
                    description: "Identifier et réparer les fuites"
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[800px] bg-white overflow-hidden flex flex-col lg:items-center">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Mobile Image */}
                        <div className="lg:hidden w-full h-[300px] relative">
                            <img
                                src={filtrationVideoImg}
                                className="w-full h-full object-cover"
                             alt="Tutoriels Vidéo Bricareau" title="Systèmes d'eau sur mesure par Bricareau" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                                    <Play className="h-8 w-8 text-[#0052ff] ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </div>

                        <div className="container mx-auto px-6 h-full flex items-center">
                            <div className="max-w-3xl mx-auto text-center space-y-6 py-12 lg:py-0 w-full">
                                <div className="hidden lg:flex w-16 h-16 rounded-full bg-blue-50 items-center justify-center mx-auto mb-4">
                                    <Play className="h-8 w-8 text-[#0052ff] ml-1" fill="currentColor" />
                                </div>
                                <h1 className="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic text-slate-900 mb-6 tracking-tight">
    Bibliothèque <span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg">Vidéo</span>
</h1>
                                <p className="text-slate-600 font-light text-center max-w-xl mx-auto">
                                    Tutoriels et guides vidéo pour vous accompagner dans l'utilisation et l'entretien de vos équipements.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Categories */}
                {videoCategories.map((category, categoryIndex) => (
                    <section key={categoryIndex} className="py-12 md:py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-foreground mb-8">
                                {category.title}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                                {category.videos.map((video, videoIndex) => (
                                    <div
                                        key={videoIndex}
                                        className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                                    >
                                        <div className="relative h-48 overflow-hidden bg-slate-100">
                                            <img
                                                src={video.thumbnail}
                                                alt={`${video.title} - Guide vidéo Bricareau`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                                                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <Play className="h-8 w-8 text-[#0052ff] ml-1" fill="currentColor" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                {video.duration}
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-foreground mb-2 group-hover:text-[#0052ff] transition-colors">
                                                {video.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {video.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}

                {/* CTA Section */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h2 className="text-foreground">
                                Besoin d'aide personnalisée ?
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground">
                                Nos experts sont disponibles pour répondre à toutes vos questions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:18552649328"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-[#0052ff] text-white font-medium rounded-full hover:bg-[#0052ff]/90 transition-colors"
                                >
                                    Appelez-nous : 1 855 264 9328
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-[#0052ff] text-[#0052ff] font-medium rounded-full hover:bg-[#0052ff] hover:text-white transition-colors"
                                >
                                    Contactez-nous
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

export default Videos;
