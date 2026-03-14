import { ArrowRight, Building2, Factory } from "lucide-react";
import imgEntreprise from "@/assets/hero-entreprises.jpg";
import imgCommercial from "@/assets/hero-commercial.jpg";

const MarketExploration = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2
                        className="text-foreground"
                        style={{ }}
                    >
                        <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">Explore More</span>
                        <span className="text-[32px] md:text-[60px] font-medium leading-[1.2] md:leading-[60px] block">Solutions</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Workplace / Entreprises Card */}
                    <a href="/entreprises" className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg block">
                        <div className="absolute inset-0">
                            <img
                                src={imgEntreprise}
                                alt="Workplace Water Solutions"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0052ff]/90 to-[#0052ff]/40 mix-blend-multiply opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>

                        <div className="relative h-full p-8 md:p-12 flex flex-col justify-end text-white z-10">
                            <div className="mb-4 bg-white/20 w-fit p-3 rounded-xl backdrop-blur-sm">
                                <Building2 className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="md:text-3xl mb-3">Workplace Water Solutions</h3>
                            <p className="text-white/90 mb-6 max-w-md">
                                Hydration solutions delivering safer and sustainable water for a wide range of sectors.
                            </p>
                            <div
                                className="flex items-center gap-2 font-medium text-[16px] leading-[24px] group-hover:gap-3 transition-all"
                                style={{ }}
                            >
                                <span>See Workplace Water Systems</span>
                                <ArrowRight className="h-5 w-5" />
                            </div>
                        </div>
                    </a>

                    {/* Commercial / Industrial Card */}
                    <a href="/commercial-industriel" className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg block">
                        <div className="absolute inset-0">
                            <img
                                src={imgCommercial}
                                alt="Commercial & Industrial Solutions"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 to-gray-800/50 mix-blend-multiply opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>

                        <div className="relative h-full p-8 md:p-12 flex flex-col justify-end text-white z-10">
                            <div className="mb-4 bg-white/20 w-fit p-3 rounded-xl backdrop-blur-sm">
                                <Factory className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="md:text-3xl mb-3">Commercial & Industrial Solutions</h3>
                            <p className="text-white/90 mb-6 max-w-md">
                                Water treatment solutions for a range of commercial and industrial water applications.
                            </p>
                            <div
                                className="flex items-center gap-2 font-medium text-[16px] leading-[24px] group-hover:gap-3 transition-all"
                                style={{ }}
                            >
                                <span>See Commercial Treatment Solutions</span>
                                <ArrowRight className="h-5 w-5" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MarketExploration;
