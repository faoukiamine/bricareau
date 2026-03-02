
import { Button } from "@/components/ui/button";
import { ArrowRight, Gem, Eye } from "lucide-react";
import expertImg from "@/assets/water testing.jpeg";

const ExpertTrustSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Soft background accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 -skew-x-12 transform translate-x-20 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Side */}
                    <div className="lg:w-1/2 relative group">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-blue-200/50">
                            <img
                                src={expertImg}
                                alt="Expert Bricareau lors d'une analyse d'eau rigoureuse"
                                className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Floating Stats Overlay */}
                            <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50 max-w-[200px]">
                                <div className="text-3xl font-bold text-blue-600 mb-1">+25 ans</div>
                                <div className="text-sm font-semibold text-slate-900 leading-tight">d'expertise cumulée à votre service</div>
                            </div>
                            {/* Decorative floating dots */}
                        <div className="absolute top-10 left-10 grid grid-cols-3 gap-2 opacity-20">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-blue-600" />
                            ))}
                        </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 space-y-10">
                        <div className="space-y-6">
                            <h2
                                className="text-slate-900 tracking-tighter text-[40px] md:text-[56px] leading-[1.1]"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold">Votre eau mérite un expert, </span>
                                <span className="font-light text-blue-600 italic">pas un doute.</span>
                            </h2>
                            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-xl text-justify">
                                Ne laissez pas l'incertitude couler de votre robinet. Chez Bricareau, nous transformons chaque analyse en une certitude scientifique pour la santé de votre foyer.
                            </p>
                        </div>

            

                        <div className="pt-6">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-lg font-bold shadow-2xl shadow-blue-200 transition-all hover:-translate-y-1 w-full sm:w-auto"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                asChild
                            >
                                <a href="/tests-eau#water-test" className="flex items-center justify-center gap-3">
                                    Réservez votre analyse d'eau
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExpertTrustSection;
