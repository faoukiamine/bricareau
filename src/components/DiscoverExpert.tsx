import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import guideExpertImg from "@/assets/40-AdobeStock_365603381.jpeg";

const DiscoverExpert = () => {
    return (
        <section className="py-16 md:py-18 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Content */}
                    <div className="space-y-6 order-2 md:order-1">
                        <h2
                            className="text-foreground tracking-tighter"
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                        >
                            <span className="text-[32px] md:text-[42px] lg:text-[60px] font-light leading-tight lg:leading-[60px] block">Votre solution d'eau personnalisée</span>
                            <span className="text-[32px] md:text-[42px] lg:text-[60px] font-normal leading-tight lg:leading-[60px] block">en moins de 60 secondes.</span>
                        </h2>
                        <p className="text-lg font-light leading-relaxed text-muted-foreground text-left md:text-justify px-2 md:px-0">
                            Ne laissez plus le hasard décider de la qualité de votre eau. Que vous soyez sur l’aqueduc municipal ou propriétaire d’un puits, notre outil intelligent analyse vos besoins spécifiques pour identifier la solution de filtration idéale. Obtenez une recommandation d’expert adaptée à votre foyer et redécouvrez le plaisir d'une eau d'une pureté irréprochable.
                        </p>
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 group"
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            asChild
                        >
                            <a href="/diagnostic">
                                Diagnostiquer mon Eau
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform inline-block" />
                            </a>
                        </Button>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                        <img
                            src={guideExpertImg}
                            alt="Femme profitant d'un bain moussant relaxant"
                            className="w-full h-[350px] md:h-[500px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverExpert;
