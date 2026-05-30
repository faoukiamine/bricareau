import React from "react";
import { Droplets, AlertTriangle, ShieldX, Sparkles } from "lucide-react";

const ProblemSolutionSection = () => {
    const problems = [
        {
            icon: <AlertTriangle className="w-8 h-8 text-amber-500" />,
            title: "Calcaire & Tartre",
            desc: "Détruit vos électroménagers prématurément et obstrue vos canalisations, entraînant des réparations coûteuses."
        },
        {
            icon: <ShieldX className="w-8 h-8 text-red-500" />,
            title: "Chlore & Mauvais Goût",
            desc: "Une odeur désagréable et un goût chimique qui gâchent l'expérience de boire l'eau de votre propre robinet."
        },
        {
            icon: <Droplets className="w-8 h-8 text-blue-400" />,
            title: "Contaminants Invisibles",
            desc: "Métaux lourds, résidus médicamenteux ou PFAS qui s'accumulent dans votre organisme à long terme."
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    
                    {/* Left side: The Problem */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="space-y-4">
                            <span className="text-blue-600 font-black tracking-widest uppercase text-sm">Le Problème</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Ce que cache réellement <br />
                                <span className="italic font-light text-slate-500">l'eau de votre robinet.</span>
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
                                L'eau municipale ou de puits respecte les normes minimales, mais elle est loin d'être parfaite. Voici pourquoi de plus en plus de foyers décident de reprendre le contrôle de leur eau.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {problems.map((prob, idx) => (
                                <div key={idx} className="flex gap-6 items-start group">
                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all">
                                        {prob.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{prob.title}</h3>
                                        <p className="text-slate-500 leading-relaxed">
                                            {prob.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side: The Solution Card */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            {/* Glow */}
                            <div className="absolute inset-0 bg-blue-400 blur-[100px] opacity-20 rounded-full" />
                            
                            {/* Card */}
                            <div className="relative bg-[#18448F] rounded-[3rem] p-10 md:p-14 text-white shadow-2xl overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                
                                <div className="relative z-10 space-y-8">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <Sparkles className="w-8 h-8 text-blue-200" />
                                    </div>
                                    
                                    <h3 className="text-3xl font-bold">
                                        La Solution Bricareau
                                    </h3>
                                    
                                    <p className="text-blue-100/80 text-lg leading-relaxed">
                                        Nos systèmes agissent comme une barrière infranchissable. Ils neutralisent le calcaire, éliminent 99.9% des contaminants et redonnent à votre eau son goût pur et naturel.
                                    </p>

                                    <ul className="space-y-4 pt-4">
                                        {["Peau et cheveux soyeux", "Électroménagers protégés", "Eau délicieuse au robinet"].map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-blue-300" />
                                                </div>
                                                <span className="font-medium text-white">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolutionSection;
