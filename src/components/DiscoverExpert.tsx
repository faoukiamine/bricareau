import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import guideExpertImg from "@/assets/discover_expert.jpg";

const DiscoverExpert = () => {
    return (
        <section className="bg-white relative overflow-hidden border-y border-slate-100">
            <div className="flex flex-col-reverse lg:flex-row items-stretch min-h-[500px] lg:min-h-[750px]">
                
                {/* Left Side: Content - Aligned with logo */}
                <div className="w-full lg:w-1/2 flex items-center bg-slate-50/10 justify-start lg:justify-end">
                    <div className="w-full max-w-[700px] px-6 sm:px-12 lg:px-10 xl:px-12 py-20 lg:py-32">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <h2 
                                    className="text-[28px] md:text-[36px] lg:text-[48px] leading-tight lg:leading-[48px]"
                                    style={{
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                        fontStyle: 'normal'
                                    }}
                                >
                                    <span className="italic font-light text-[#2563eb]">Votre solution d'eau personnalisée </span>
                                    <span className="font-bold text-[#1e3a8a]">en quelques clics.</span>
                                </h2>
                                <p 
                                    className="max-w-lg text-left lg:text-justify text-[16px] md:text-[18px] lg:text-[20px] leading-snug font-light text-slate-600"
                                    style={{
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                        fontStyle: 'normal'
                                    }}
                                >
                                    Quelques étapes suffisent pour transformer l'eau de votre foyer. Identifiez vos priorités et découvrez instantanément le système Bricareau adapté à votre réalité.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Button asChild>
                                    <a href="/diagnostic" className="flex items-center justify-center gap-3">
                                        Diagnostic gratuit en 1 min
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image - 50% width on Desktop */}
                <div className="w-full lg:w-1/2 relative group overflow-hidden h-[400px] md:h-[550px] lg:h-auto border-l border-slate-100">
                    <img
                        src={guideExpertImg}
                        alt="Expert Bricareau effectuant une analyse d'eau à domicile pour un diagnostic personnalisé"
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                        style={{ filter: 'contrast(1.05) saturate(1.1) brightness(1.02)' }}
                    />
                    
                    {/* Glassmorphism Badge */}
                    <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/50 z-20">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-600">
                                        User
                                    </div>
                                ))}
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-bold text-slate-900">Rejoint par +1000 foyers</div>
                                <div className="text-xs text-slate-500">Ce mois-ci</div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative floating dots */}
                    <div className="absolute top-10 right-10 grid grid-cols-3 gap-2 opacity-20 z-10">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-blue-600" />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DiscoverExpert;
