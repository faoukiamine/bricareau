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
        /* New Section - Masonry Grid Layout */
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Right Content - Masonry Grid (Now Left) */}
                    <div className="grid grid-cols-2 gap-4 h-[650px] overflow-hidden mask-gradient-b">
                        {/* Column 1 */}
                        <div className="relative">
                            <div className="flex flex-col gap-4 animate-scroll-y">
                                {/* Original Set */}
                                <div className="h-72 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                                    <img src={waterTasteThumb} alt="Goût de l'eau" className="w-full h-full object-cover object-top" />
                                </div>
                                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200 shrink-0">
                                    <img src={turbideWaterThumb} alt="Eau trouble" className="w-full h-full object-cover object-center" />
                                </div>
                                <div className="h-56 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                                    <img src={taninWaterThumb} alt="Tanin" className="w-full h-full object-cover object-center" />
                                </div>

                                {/* Duplicate Set for Loop */}
                                <div className="h-72 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                                    <img src={waterTasteThumb} alt="Goût de l'eau" className="w-full h-full object-cover object-top" />
                                </div>
                                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200 shrink-0">
                                    <img src={turbideWaterThumb} alt="Eau trouble" className="w-full h-full object-cover object-center" />
                                </div>
                                <div className="h-56 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                                    <img src={taninWaterThumb} alt="Tanin" className="w-full h-full object-cover object-center" />
                                </div>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="relative pt-8">
                            <div className="flex flex-col gap-4 animate-scroll-y" style={{ animationDuration: '35s' }}>
                                {/* Original Set */}
                                <div className="h-56 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                                    <img src={hardWaterThumb} alt="Eau dure" className="w-full h-full object-cover object-center" />
                                </div>
                                <div className="h-72 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                                    <img src={rouilleThumb} alt="Rouille" className="w-full h-full object-cover object-center" />
                                </div>
                                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200 shrink-0">
                                    <img src={rottenEggsThumb} alt="Soufre" className="w-full h-full object-cover object-top" />
                                </div>

                                {/* Duplicate Set */}
                                <div className="h-56 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                                    <img src={hardWaterThumb} alt="Eau dure" className="w-full h-full object-cover object-center" />
                                </div>
                                <div className="h-72 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                                    <img src={rouilleThumb} alt="Rouille" className="w-full h-full object-cover object-center" />
                                </div>
                                <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200 shrink-0">
                                    <img src={rottenEggsThumb} alt="Soufre" className="w-full h-full object-cover object-top" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left Content - Text (Now Right) */}
                    <div className="flex flex-col max-w-xl lg:pl-12">
                        <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block">
                            NOTRE EXPERTISE
                        </span>
                        <h2
                            className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-bold text-slate-900 mb-6"
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                        >
                            Une solution <br /><span className="font-normal">pour chaque problème</span>
                        </h2>
                        <p className="text-lg font-light leading-relaxed text-slate-600 mb-8 text-justify">
                            Que vous ayez une eau dure, ferreuse, ou malodorante, nos experts ont la solution adaptée. Nous analysons votre eau et vous proposons le système de traitement idéal pour votre foyer.
                        </p>
                        <div className="flex gap-4">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 transition-all group"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                asChild
                            >
                                <a href="/consultation" className="flex items-center gap-2">
                                    Planifiez une consultation gratuite
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemHero;
