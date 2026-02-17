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
                            <span className="text-[32px] md:text-[42px] lg:text-[60px] font-normal leading-tight lg:leading-[60px] block">en quelques clics.</span>
                        </h2>
                        <p className="text-lg font-light leading-relaxed text-muted-foreground text-left md:text-justify px-2 md:px-0">
                            Parce que chaque maison est unique, notre outil de recommandation analyse vos préoccupations pour vous guider vers la technologie la plus performante pour votre eau. Rapide, gratuit et précis.                        </p>
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 group"
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            asChild
                        >
                            <a href="/diagnostic">
                                Diagnostiquer mon Eau
                            </a>
                        </Button>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                        <img
                            src={guideExpertImg}
                            alt="Expert Bricareau en analyse d'eau"
                            className="w-full h-[350px] md:h-[500px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverExpert;
