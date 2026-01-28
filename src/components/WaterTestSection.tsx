
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import waterTestBg from "@/assets/water_test_bg.png";

const WaterTestSection = () => {
    return (
        <section className="relative w-full min-h-[500px] flex items-center overflow-hidden bg-gray-50">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={waterTestBg}
                    alt="Test de qualité d'eau"
                    className="w-full h-full object-cover object-center"
                />
                {/* Overlay to ensure text legibility */}
                <div className="absolute inset-0 bg-white/30"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl bg-white/0 lg:pl-10">
                    <span className="text-xs font-bold tracking-[0.1em] text-gray-600 uppercase mb-4 block">
                        TESTS DE LA QUALITÉ DE L'EAU
                    </span>

                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#009EE2] leading-tight mb-6 uppercase max-w-lg">
                        VOUS ÊTES PRÉOCCUPÉS PAR LA QUALITÉ DE VOTRE EAU ?
                    </h2>

                    <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-8 max-w-md font-medium">
                        Procurez-vous notre kit de test d'eau et renvoyez-le-nous ! Nous réaliserons
                        des analyses d'eau approfondies et vous recommanderons des solutions selon
                        la composition de votre eau.
                    </p>

                    <Button
                        className="bg-[#009EE2] hover:bg-[#008CC9] text-white px-8 py-6 rounded-md font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                        asChild
                    >
                        <a href="/water-testing" className="flex items-center gap-2">
                            Testez votre eau aujourd'hui !
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default WaterTestSection;
