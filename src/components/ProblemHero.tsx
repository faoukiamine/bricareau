
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import problemHeroBg from "@/assets/problem_hero_bg.jpg";

const ProblemHero = () => {
    return (
        <section className="relative w-full min-h-[750px] flex items-center overflow-hidden bg-gray-50">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={problemHeroBg}
                    alt="Problèmes d'eau"
                    className="w-full h-full object-cover object-right"
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:to-white/10"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center py-16 lg:py-24 max-w-2xl">
                        <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4">
                            PROBLÈMES D'EAU
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#009EE2] leading-[1.15] mb-6 uppercase">
                            ÉPARGNEZ-VOUS LES MAUX DE TÊTE ET CONFIEZ LE TRAITEMENT DE L'EAU À NOS SPÉCIALISTES
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                            Vous vous inquiétez de la qualité de votre eau potable, de tâches de rouille
                            dans votre baignoire ou d'une odeur des œufs pourris lorsque vous prenez
                            votre douche ?
                        </p>

                        <div>
                            <Button
                                className="bg-[#009EE2] hover:bg-[#008CC9] text-white px-8 py-6 text-base md:text-lg rounded-sm font-bold shadow-md hover:shadow-lg transition-all"
                                asChild
                            >
                                <a href="/consultation" className="flex items-center gap-2">
                                    Cédulez une consultation
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Contaminant List */}
                    <div className="hidden lg:flex flex-col justify-end pb-12 items-end">
                        <div className="bg-white/80 md:bg-transparent p-4 rounded-lg md:p-0 backdrop-blur-sm md:backdrop-blur-none max-w-md text-right">
                            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium uppercase tracking-wide">
                                Chlore <span className="text-gray-300 mx-1">|</span>
                                Dureté <span className="text-gray-300 mx-1">|</span>
                                Fer <span className="text-gray-300 mx-1">|</span>
                                Manganèse <span className="text-gray-300 mx-1">|</span>
                                Mauvais goût <span className="text-gray-300 mx-1">|</span>
                                Odeur des œufs pourris <span className="text-gray-300 mx-1">|</span>
                                Plomb <span className="text-gray-300 mx-1">|</span>
                                Sédiments <span className="text-gray-300 mx-1">|</span>
                                Sels dissous <span className="text-gray-300 mx-1">|</span>
                                Sulfure d'hydrogène <span className="text-gray-300 mx-1">|</span>
                                Tannins <span className="text-gray-300 mx-1">|</span>
                                Turbidité
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemHero;
