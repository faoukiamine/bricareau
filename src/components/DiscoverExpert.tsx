import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DiscoverExpert = () => {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                            Découvrez les options de traitement d'experts
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Nos spécialistes de l'eau vous guident vers la solution parfaite pour votre maison.
                            Profitez d'une eau plus pure, plus douce et meilleure pour votre santé.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#2563EB] mt-2" />
                                <p className="text-base text-foreground">
                                    Analyse complète de la qualité de votre eau
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#2563EB] mt-2" />
                                <p className="text-base text-foreground">
                                    Recommandations personnalisées par nos experts
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#2563EB] mt-2" />
                                <p className="text-base text-foreground">
                                    Installation professionnelle et garantie complète
                                </p>
                            </div>
                        </div>
                        <Button
                            size="lg"
                            className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-semibold group"
                        >
                            En savoir plus
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1200&auto=format&fit=crop"
                            alt="Personne profitant d'un bain relaxant"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverExpert;
