import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardCheck, Activity, CheckCircle2 } from "lucide-react";
import guideExpertImg from "@/assets/11.webp";

const DiscoverExpert = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-50/50">
            {/* Decorative Background Elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Side: Content */}
                    <div className="lg:w-1/2 space-y-10">
                        <div className="space-y-6">
                            <h2
                                className="text-slate-900 tracking-tighter"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[40px] md:text-[56px] font-light leading-[1.1] block">Votre solution d'eau</span>
                                <span className="text-[40px] md:text-[56px] font-bold leading-[1.1] text-blue-600 block">personnalisée en quelques clics.</span>
                            </h2>
                            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-lg">
                                Quelques étapes suffisent pour transformer l'eau de votre foyer. Identifiez vos priorités et découvrez instantanément le système Bricareau adapté à votre réalité.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 text-lg shadow-xl shadow-blue-200 hover:shadow-blue-300 transition-all hover:-translate-y-1 w-full sm:w-auto"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                asChild
                            >
                                <a href="/diagnostic" className="flex items-center justify-center gap-3">
                                    Diagnostic gratuit en 1 min
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Side: Image with Floating Elements */}
                    <div className="lg:w-1/2 relative w-full">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
                            <img
                                src={guideExpertImg}
                                alt="Expert Bricareau effectuant une analyse d'eau à domicile pour un diagnostic personnalisé"
                                className="w-full h-[500px] md:h-[600px] object-cover object-top"
                            />
                            {/* Glassmorphism Badge */}
                            <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-white/50">
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
                        </div>

                        {/* Decorative floating dots */}
                        <div className="absolute top-10 -right-10 grid grid-cols-3 gap-2 opacity-20">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-blue-600" />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DiscoverExpert;
