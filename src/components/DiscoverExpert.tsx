import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import guideExpertImg from "@/assets/40-AdobeStock_365603381.jpeg";

const DiscoverExpert = () => {
    return (
        <section className="py-16 md:py-18 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Content */}
                    <div className="space-y-6 order-2 lg:order-1">
                        <h2
                            className="text-foreground tracking-tighter"
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                        >
                            <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">Découvrez les options</span>
                            <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block">de traitement de nos spécialistes</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Nos spécialistes de l'eau vous guident vers la solution parfaite pour votre maison.
                            Profitez d'une eau plus pure, plus douce et meilleure pour votre santé.
                        </p>
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 group"
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                        >
                            Répondre à notre Quiz
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                        <img
                            src={guideExpertImg}
                            alt="Femme profitant d'un bain moussant relaxant"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverExpert;
