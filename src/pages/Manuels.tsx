import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Manuels = () => {
    const manualCategories = [
        {
            title: "Adoucisseurs d'eau",
            manuals: [
                {
                    name: "Adoucisseur HE Series - Manuel d'utilisation",
                    pages: "32 pages",
                    language: "Français",
                    size: "2.4 MB"
                },
                {
                    name: "Adoucisseur HE Series - Guide d'installation",
                    pages: "16 pages",
                    language: "Français",
                    size: "1.8 MB"
                },
                {
                    name: "Adoucisseur Compact - Manuel complet",
                    pages: "24 pages",
                    language: "Français",
                    size: "2.1 MB"
                }
            ]
        },
        {
            title: "Systèmes de filtration",
            manuals: [
                {
                    name: "Osmose inverse - Manuel d'utilisation",
                    pages: "28 pages",
                    language: "Français",
                    size: "2.8 MB"
                },
                {
                    name: "Filtre UV - Guide d'installation",
                    pages: "12 pages",
                    language: "Français",
                    size: "1.2 MB"
                },
                {
                    name: "Système multi-étapes - Manuel complet",
                    pages: "36 pages",
                    language: "Français",
                    size: "3.2 MB"
                }
            ]
        },
        {
            title: "Fontaines et distributeurs",
            manuals: [
                {
                    name: "Fontaine commerciale - Manuel d'utilisation",
                    pages: "20 pages",
                    language: "Français",
                    size: "1.9 MB"
                },
                {
                    name: "Distributeur de glace - Guide d'entretien",
                    pages: "14 pages",
                    language: "Français",
                    size: "1.5 MB"
                }
            ]
        },
        {
            title: "Guides d'entretien",
            manuals: [
                {
                    name: "Guide d'entretien annuel - Adoucisseurs",
                    pages: "10 pages",
                    language: "Français",
                    size: "0.9 MB"
                },
                {
                    name: "Remplacement des filtres - Guide illustré",
                    pages: "8 pages",
                    language: "Français",
                    size: "1.1 MB"
                },
                {
                    name: "Dépannage et solutions - Guide complet",
                    pages: "22 pages",
                    language: "Français",
                    size: "2.3 MB"
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-teal-50 to-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <BookOpen className="h-16 w-16 text-[#0052ff] mx-auto" />
                            <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-foreground text-justify max-w-xl mx-auto">
                                <span className="font-bold">Manuels et Documentation</span>
                            </h1>
                            <p className="text-[20px] leading-snug text-muted-foreground font-light text-justify max-w-xl mx-auto">
                                Téléchargez les manuels d'utilisation et guides d'installation pour vos équipements
                            </p>
                        </div>
                    </div>
                </section>

                {/* Manual Categories */}
                {manualCategories.map((category, categoryIndex) => (
                    <section key={categoryIndex} className="py-12 md:py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                                {category.title}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                                {category.manuals.map((manual, manualIndex) => (
                                    <div
                                        key={manualIndex}
                                        className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                                                <FileText className="h-6 w-6 text-teal-600" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-foreground mb-2">
                                                    {manual.name}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                                            <div className="flex justify-between">
                                                <span>Pages:</span>
                                                <span className="font-medium">{manual.pages}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Langue:</span>
                                                <span className="font-medium">{manual.language}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Taille:</span>
                                                <span className="font-medium">{manual.size}</span>
                                            </div>
                                        </div>
                                        <Button
                                            className="w-full bg-[#0052ff] hover:bg-[#0052ff]/90 text-white"
                                            size="sm"
                                        >
                                            <Download className="h-4 w-4 mr-2" />
                                            Télécharger PDF
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}

                {/* Help Section */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                                Vous ne trouvez pas ce que vous cherchez ?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="font-semibold text-lg mb-2">Support technique</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Contactez notre équipe d'experts
                                    </p>
                                    <Button variant="outline" asChild>
                                        <a href="tel:18552649328">1 855 264 9328</a>
                                    </Button>
                                </div>
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="font-semibold text-lg mb-2">Vidéos tutoriels</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Guides vidéo étape par étape
                                    </p>
                                    <Button variant="outline" asChild>
                                        <a href="/videos">Voir les vidéos</a>
                                    </Button>
                                </div>
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="font-semibold text-lg mb-2">FAQ</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Questions fréquemment posées
                                    </p>
                                    <Button variant="outline" asChild>
                                        <a href="/faq">Consulter la FAQ</a>
                                    </Button>
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
                                Besoin d'assistance professionnelle ?
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground">
                                Nos techniciens certifiés peuvent vous aider avec l'installation et l'entretien.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-[#0052ff] hover:bg-[#0052ff]/90 text-white rounded-full px-8"
                                    asChild
                                >
                                    <a href="/service">Planifier un service</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-8"
                                    asChild
                                >
                                    <a href="/contact">Contactez-nous</a>
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

export default Manuels;
