
import { Button } from "@/components/ui/button";
import { ArrowRight, Gem, Eye } from "lucide-react";
import expertImg from "@/assets/water testing.jpeg";

const ExpertTrustSection = () => {
    return (
        <section className="bg-white relative overflow-hidden border-y border-slate-100">
            <div className="flex flex-col lg:flex-row items-stretch min-h-[500px] lg:min-h-[750px]">
                
                {/* Image Side - 50% width on Desktop */}
                <div className="w-full lg:w-1/2 relative group overflow-hidden h-[400px] md:h-[550px] lg:h-auto">
                    <img
                        src={expertImg}
                        alt="Expert Bricareau lors d'une analyse d'eau rigoureuse"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Floating Stats Overlay */}
                    <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50 max-w-[200px] z-20">
                        <div className="text-3xl font-bold text-blue-600 mb-1">+25 ans</div>
                        <div className="text-sm font-semibold text-slate-900 leading-tight">d'expertise cumulée à votre service</div>
                    </div>
                    {/* Decorative floating dots */}
                    <div className="absolute top-10 left-10 grid grid-cols-3 gap-2 opacity-20 z-10">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-blue-600" />
                        ))}
                    </div>
                </div>

                {/* Content Side - Aligned with grid */}
                <div className="w-full lg:w-1/2 flex items-center bg-slate-50/10 justify-start">
                    <div className="w-full max-w-[700px] px-6 sm:px-12 lg:px-10 xl:px-12 py-20 lg:py-32">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2
                                    style={{
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                        fontSize: '48px',
                                        lineHeight: '48px',
                                        fontStyle: 'normal'
                                    }}
                                >
                                    <span className="italic font-light text-[#2563eb]">Votre eau mérite un expert, </span>
                                    <span className="font-bold text-[#1e3a8a]">pas un doute.</span>
                                </h2>
                                <p
                                    className="max-w-xl text-left lg:text-justify"
                                    style={{
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                        fontWeight: 300,
                                        color: 'rgb(71, 85, 105)',
                                        fontSize: '20px',
                                        lineHeight: '28px',
                                        fontStyle: 'normal'
                                    }}
                                >
                                    Ne laissez pas l'incertitude couler de votre robinet. Chez Bricareau, nous transformons chaque analyse en une certitude scientifique pour la santé de votre foyer.
                                </p>
                            </div>

                            <div className="pt-6">
                                <Button
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
            </div>
        </section>
    );
};

export default ExpertTrustSection;
