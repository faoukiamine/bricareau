import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { BookOpen, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Guides = () => {
    const guides = [
        {
            title: "Guide complet de l'adoucisseur d'eau",
            description: "Tout ce que vous devez savoir sur les adoucisseurs d'eau : fonctionnement, installation, entretien et avantages.",
            pages: "24 pages",
            category: "Adoucissement"
        },
        {
            title: "Manuel d'installation des systèmes de filtration",
            description: "Instructions détaillées pour installer et configurer votre système de filtration d'eau.",
            pages: "18 pages",
            category: "Filtration"
        },
        {
            title: "Guide d'entretien annuel",
            description: "Calendrier et procédures pour maintenir vos équipements en parfait état toute l'année.",
            pages: "12 pages",
            category: "Entretien"
        },
        {
            title: "Comprendre la qualité de l'eau",
            description: "Guide pour interpréter les résultats d'analyse d'eau et identifier les problèmes courants.",
            pages: "16 pages",
            category: "Analyse"
        },
        {
            title: "Solutions pour eau de puits",
            description: "Guide spécialisé pour le traitement et l'entretien de l'eau de puits résidentielle.",
            pages: "20 pages",
            category: "Eau de puits"
        },
        {
            title: "Économies d'énergie et d'eau",
            description: "Conseils pratiques pour réduire votre consommation et vos coûts avec nos systèmes.",
            pages: "14 pages",
            category: "Économies"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[800px] bg-white overflow-hidden flex flex-col lg:items-center">
                    <div className="absolute top-[50px] left-0 right-0 z-30 pointer-events-none">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Mobile Image */}
                        <div className="lg:hidden w-full h-[300px] relative">
                            <img
                                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
                                alt="Guides et Documentation Bricareau"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
                        </div>

                        <div className="container mx-auto px-6 h-full flex items-center">
                            <div className="max-w-3xl mx-auto text-center space-y-6 py-12 lg:py-0 w-full">
                                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                                    <BookOpen className="h-8 w-8 text-[#0052ff]" />
                                </div>
                                <h1
                                    className="text-[32px] md:text-[52px] leading-tight text-slate-900 tracking-tighter text-center max-w-xl mx-auto"
                                    style={{
                                        fontWeight: 350
                                    }}
                                >
                                    Guides et <span className="text-blue-600">Documentation</span>
                                </h1>
                                <p className="text-slate-600 font-light text-center max-w-xl mx-auto">
                                    Ressources complètes pour vous aider à tirer le meilleur parti de vos systèmes de traitement d'eau.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Guides Grid */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {guides.map((guide, index) => (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                                            <FileText className="h-6 w-6 text-amber-600" />
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground bg-slate-100 px-2 py-1 rounded">
                                            {guide.category}
                                        </span>
                                    </div>
                                    <h3 className="text-foreground mb-2 font-medium text-base leading-6 text-[#0F1729]">
                                        {guide.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {guide.description}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-border">
                                        <span className="text-xs text-muted-foreground">{guide.pages}</span>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="text-[#0052ff] border-[#0052ff] hover:bg-[#0052ff] hover:text-white"
                                        >
                                            <Download className="h-4 w-4 mr-2" />
                                            Télécharger
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Help Section */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-center mb-8">
                                Besoin d'aide supplémentaire ?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="mb-2">FAQ</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Consultez nos questions fréquentes
                                    </p>
                                    <Button variant="link" className="text-[#0052ff]" asChild>
                                        <a href="/faq">Voir la FAQ</a>
                                    </Button>
                                </div>
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="mb-2">Vidéos</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Tutoriels vidéo étape par étape
                                    </p>
                                    <Button variant="link" className="text-[#0052ff]" asChild>
                                        <a href="/videos">Voir les vidéos</a>
                                    </Button>
                                </div>
                                <div className="bg-white p-6 rounded-lg text-center">
                                    <h3 className="mb-2">Support</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Contactez notre équipe d'experts
                                    </p>
                                    <Button variant="link" className="text-[#0052ff]" asChild>
                                        <a href="/contact">Nous contacter</a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Guides;
