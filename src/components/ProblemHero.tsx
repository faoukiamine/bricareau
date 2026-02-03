import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Assets for staggered grid
import rouilleThumb from "@/assets/rouille_thumb.jpg";
import rottenEggsThumb from "@/assets/Water_Smells_Like_Rotten_Eggs_1400x.webp";
import waterTasteThumb from "@/assets/water-taste.jpg";
import turbideWaterThumb from "@/assets/Turbide-Water.webp";
import hardWaterThumb from "@/assets/detartrage-chauffe-eau-electrique.jpg";
import taninWaterThumb from "@/assets/problemes-deau-tanin.jpg";

const ProblemHero = () => {
    return (
        <section className="relative w-full bg-white h-[700px] flex items-center overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Content - Typography focused */}
                    <div className="flex flex-col max-w-2xl animate-in fade-in slide-in-from-left duration-1000">
                        <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block">
                            Problèmes d'eau
                        </span>

                        <h1
                            className="text-slate-900 mb-10 tracking-tighter"
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                        >
                            <span className="text-[40px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Épargnez-vous les</span>
                            <span className="text-[40px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">maux de tête.</span>
                        </h1>

                        <p className="font-light text-[20px] leading-[28px] text-slate-600 mb-12 max-w-xl">
                            Vous vous inquiétez de la qualité de votre eau potable, du calcaire sur votre pomme de douche, des tâches de rouille dans votre baignoire ou d’une odeur des œufs pourris lorsque vous prenez votre douche ?
                        </p>

                        <div>
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 transition-all group"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                asChild
                            >
                                <a href="/consultation" className="flex items-center gap-2">
                                    Cédulez une consultation gratuite
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Overlapping Composition */}
                    <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end animate-in fade-in slide-in-from-right duration-1000 delay-200">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            {/* Main Large Box */}
                            <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[3rem] overflow-hidden shadow-2xl z-10 group bg-slate-50">
                                <img
                                    src={hardWaterThumb}
                                    alt="Eau dure"
                                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                            </div>

                            {/* Left Vertical Box (Overlapping) */}
                            <div className="absolute left-0 top-[30%] w-[35%] h-[55%] rounded-[2rem] overflow-hidden shadow-2xl z-30 group bg-slate-100 border-4 border-white">
                                <img
                                    src={rouilleThumb}
                                    alt="Eau ferreuse"
                                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                            </div>

                            {/* Bottom Horizontal Box (Overlapping) */}
                            <div className="absolute left-[20%] bottom-0 w-[50%] h-[35%] rounded-[2rem] overflow-hidden shadow-2xl z-40 group bg-slate-200 border-4 border-white">
                                <img
                                    src={rottenEggsThumb}
                                    alt="Odeur de soufre    "
                                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemHero;
