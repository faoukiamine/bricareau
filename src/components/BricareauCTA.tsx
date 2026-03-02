import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const IdealBricareauCTA = () => {
    return (
        <section className="bg-[#2563EB] py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2
                        className="text-white tracking-tighter"
                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                    >
                        <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">La solution idéale Bricareau</span>
                        <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block">pour votre maison</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 leading-snug">
                        Découvrez comment nos systèmes de traitement d'eau peuvent transformer votre quotidien
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-[#2563EB] hover:bg-white/90 rounded-full px-8 h-14 shadow-lg hover:shadow-xl transition-all group"
                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                    >
                        En savoir plus
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default IdealBricareauCTA;
