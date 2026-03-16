import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Garantie = () => {
    const warranties = [
        {
            title: "Garantie sur les produits",
            duration: "5 à 10 ans",
            description: "Couverture complète sur tous nos équipements",
            coverage: [
                "Défauts de fabrication",
                "Pièces et composants",
                "Réservoir et valves",
                "Électronique"
            ]
        },
        {
            title: "Garantie sur l'installation",
            duration: "2 ans",
            description: "Protection sur la main-d'œuvre et l'installation",
            coverage: [
                "Main-d'œuvre",
                "Raccordements",
                "Configuration",
                "Mise en service"
            ]
        },
        {
            title: "Garantie satisfaction",
            duration: "30 jours",
            description: "Garantie de satisfaction ou argent remis",
            coverage: [
                "Essai sans risque",
                "Retour gratuit",
                "Remboursement complet",
                "Aucune question posée"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[800px] bg-white overflow-hidden flex flex-col lg:items-center">
                    <div className="absolute top-[50px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Mobile Image */}
                        <div className="lg:hidden w-full h-[300px] relative">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                                alt="Protection et Qualité Bricareau"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
                        </div>

                        <div className="container mx-auto px-6 h-full flex items-center">
                            <div className="max-w-3xl mx-auto text-center space-y-6 py-12 lg:py-0 w-full">
                                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                                    <Shield className="h-8 w-8 text-[#0052ff]" />
                                </div>
                                <h1
                                    className="text-[32px] md:text-[52px] leading-tight text-slate-900 tracking-tighter"
                                    style={{
                                        fontWeight: 350
                                    }}
                                >
                                    Garanties et <span className="text-blue-600">Protection</span>
                                </h1>
                                <p className="text-slate-600 font-light max-w-xl mx-auto">
                                    Votre investissement est protégé par nos garanties complètes pour une tranquillité d'esprit totale.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Warranty Types */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {warranties.map((warranty, index) => (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-center mb-4">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-3">
                                            <CheckCircle className="h-8 w-8 text-green-600" />
                                        </div>
                                        <h3 className="text-foreground mb-1">
                                            {warranty.title}
                                        </h3>
                                        <p className="text-2xl font-bold text-[#0052ff]">
                                            {warranty.duration}
                                        </p>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4 text-center">
                                        {warranty.description}
                                    </p>
                                    <div className="border-t border-border pt-4">
                                        <p className="text-xs font-semibold text-foreground mb-2">Couverture:</p>
                                        <ul className="space-y-2">
                                            {warranty.coverage.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-green-600 mt-1">✓</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Warranty Registration */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-8">
                                <FileText className="h-12 w-12 text-[#0052ff] mx-auto mb-4" />
                                <h2 className="text-slate-900 mb-8 md:leading-[48px] text-center">
                                    Enregistrement de garantie
                                </h2>
                                <p className="text-muted-foreground">
                                    Enregistrez votre produit pour activer votre garantie complète
                                </p>
                            </div>

                            <div className="bg-white rounded-lg p-6 md:p-8 border border-border">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="mb-3">Informations requises:</h3>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600" />
                                                Numéro de série du produit
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600" />
                                                Date d'installation
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600" />
                                                Facture d'achat
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600" />
                                                Coordonnées du propriétaire
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="mb-3">Avantages de l'enregistrement:</h3>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-[#0052ff]" />
                                                Activation immédiate
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-[#0052ff]" />
                                                Rappels d'entretien
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-[#0052ff]" />
                                                Offres exclusives
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-[#0052ff]" />
                                                Support prioritaire
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <Button
                                    size="lg"
                                    className="w-full bg-[#0052ff] hover:bg-[#0052ff]/90 text-white"
                                >
                                    Enregistrer mon produit
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-slate-900 mb-8 md:leading-[48px] text-center">
                                Questions fréquentes sur la garantie
                            </h2>
                            <div className="space-y-4">
                                <details className="bg-card border border-border rounded-lg p-4">
                                    <summary className="font-semibold cursor-pointer">
                                        Que couvre exactement la garantie ?
                                    </summary>
                                    <p className="mt-3 text-sm text-muted-foreground">
                                        Notre garantie couvre tous les défauts de fabrication, les pièces défectueuses et les problèmes de fonctionnement normaux. Elle ne couvre pas les dommages causés par une mauvaise utilisation ou un manque d'entretien.
                                    </p>
                                </details>
                                <details className="bg-card border border-border rounded-lg p-4">
                                    <summary className="font-semibold cursor-pointer">
                                        Comment faire une réclamation de garantie ?
                                    </summary>
                                    <p className="mt-3 text-sm text-muted-foreground">
                                        Contactez notre service client au 1 855 264 9328 avec votre numéro de série et une description du problème. Notre équipe vous guidera à travers le processus.
                                    </p>
                                </details>
                                <details className="bg-card border border-border rounded-lg p-4">
                                    <summary className="font-semibold cursor-pointer">
                                        La garantie est-elle transférable ?
                                    </summary>
                                    <p className="mt-3 text-sm text-muted-foreground">
                                        Oui, la garantie peut être transférée au nouveau propriétaire en cas de vente de la propriété. Contactez-nous pour effectuer le transfert.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h2 className="text-slate-900 mb-8 md:leading-[48px] text-center">
                                Questions sur votre garantie ?
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground">
                                Notre équipe est là pour vous aider.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-[#0052ff] hover:bg-[#0052ff]/90 text-white rounded-full px-8"
                                    asChild
                                >
                                    <a href="tel:18552649328">Appelez-nous : 1 855 264 9328</a>
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

export default Garantie;
