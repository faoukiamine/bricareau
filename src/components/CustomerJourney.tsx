
import React from 'react';
import { 
    ArrowRight
} from "lucide-react";
import diagnosticStepImg from "@/assets/step-diagnostic.png";
import customStepImg from "@/assets/catalogue.png";
import installationStepImg from "@/assets/Installation experte - Bricareau.jpg";
import serenityStepImg from "@/assets/close-up-handsom-man-taking-bath.jpg";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { Button } from "@/components/ui/button";

const steps = [
    {
        number: "01",
        title: "Diagnostic complet",
        desc: "Un diagnostic physico-chimique rigoureux pour identifier avec précision chaque contaminant présent dans votre eau.",
        img: diagnosticStepImg,
    },
    {
        number: "02",
        title: "Solution sur mesure",
        desc: "Pas de solution générique. Nous concevons le système optimal sur mesure selon vos habitudes de consommation.",
        img: customStepImg,
    },
    {
        number: "03",
        title: "Installation experte",
        desc: "Nos techniciens assurent une mise en place millimétrée, propre et conforme aux normes les plus strictes.",
        img: installationStepImg,
    },
    {
        number: "04",
        title: "Tranquillité totale",
        desc: "Notre engagement ne s'arrête pas après la pose. Profiter d'un suivi proactif et d'un support technique d'exception.",
        img: serenityStepImg,
    }
];

const CustomerJourney = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 -skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        L'EXPÉRIENCE BRICAREAU
                    </span>
                    <h2 
                        className="mb-8 heading-pro-max"
                    >
                        <span className="italic font-light text-[#18448F] block">La promesse d'une eau saine,</span>
                        <span className="font-bold text-[#18448F] block">de notre rencontre à votre confort.</span>
                    </h2>
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-snug font-light text-slate-600 max-w-2xl mx-auto mb-12">
                        Parce que la santé de votre foyer ne supporte aucune approximation, nous avons bâti un protocole rigoureux qui garantit une pureté absolue à chaque étape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="group relative">
                            {/* Connector Line (Desktop) */}
                            {idx < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-24 left-[70%] w-full h-px border-t border-dashed border-slate-200 z-0" />
                            )}

                            <div className="relative z-10 space-y-8 flex flex-col items-center lg:items-start">
                                {/* Image Container (Glassmorphism Frame) */}
                                <div className="relative w-48 h-48 rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-blue-200/50">
                                    <img 
                                        src={step.img} 
                                        alt={step.title} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#18448F]/40 to-transparent mix-blend-multiply opacity-60" />
                                    
                                </div>

                                <div className="space-y-4 text-center lg:text-left px-4 lg:px-0">
                                    <div className="flex items-center justify-center lg:justify-start gap-4">
                                        <span className="text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors tracking-tighter">
                                            {step.number}
                                        </span>
                                        <h3 className="text-2xl font-bold text-[#18448F] group-hover:text-blue-600 transition-colors">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-500 font-light text-base leading-relaxed max-w-xs">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action below steps */}
                <div className="mt-24 flex justify-center">
                    <ProMaxButton asChild>
                        <a href="/consultation">
                            Planifier une consultation gratuite
                        </a>
                    </ProMaxButton>
                </div>
            </div>
        </section>
    );
};

export default CustomerJourney;
