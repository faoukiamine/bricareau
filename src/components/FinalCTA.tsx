import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left side - Stats */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="text-5xl md:text-6xl font-bold text-[#2563EB]">
                                140M
                            </div>
                            <p className="text-xl md:text-2xl font-semibold text-foreground">
                                Litres d'eau économisés
                            </p>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Nos systèmes efficaces permettent d'économiser des millions de litres d'eau chaque année
                            </p>
                        </div>

                        <div className="space-y-4 pt-8 border-t border-border">
                            <div className="text-5xl md:text-6xl font-bold text-[#2563EB]">
                                36%
                            </div>
                            <p className="text-xl md:text-2xl font-semibold text-foreground">
                                Réduction des coûts
                            </p>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Économisez sur vos factures d'eau et d'énergie avec nos solutions efficaces
                            </p>
                        </div>
                    </div>

                    {/* Right side - CTA Card */}
                    <Card className="bg-[#2563EB] border-none shadow-2xl">
                        <CardContent className="p-8 md:p-12 space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                Prêt à améliorer la qualité de votre eau ?
                            </h3>
                            <p className="text-lg text-white/90 leading-relaxed">
                                Commencez dès aujourd'hui avec une consultation gratuite et découvrez comment nous pouvons transformer votre eau.
                            </p>
                            <Button
                                size="lg"
                                className="w-full bg-white text-[#2563EB] hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all group"
                            >
                                Commencer maintenant
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <p className="text-sm text-center text-white/80">
                                Consultation gratuite • Sans engagement • Réponse rapide
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
