import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const IdealBricareauCTA = () => {
    return (
        <section className="bg-[#18448F] py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="font-light block leading-tight lg:leading-[52px] text-white">
                        <span className="italic">La solution idéale Bricareau</span> <br />
                        <span className="font-bold font-serif">pour votre maison</span>
                    </h2>
                    <p className="text-white/90">
                        Découvrir comment nos systèmes de traitement d'eau peuvent transformer votre quotidien
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-[#18448F] hover:bg-white/90 rounded-full px-8 h-14 shadow-lg hover:shadow-xl transition-all group"
                        style={{ }}
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
