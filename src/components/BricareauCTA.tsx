import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const IdealCulliganCTA = () => {
    return (
        <section className="bg-[#2563EB] py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        La solution idéale Bricareau pour votre maison
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                        Découvrez comment nos systèmes de traitement d'eau peuvent transformer votre quotidien
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-[#2563EB] hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all group"
                    >
                        En savoir plus
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default IdealCulliganCTA;
