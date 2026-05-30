import React, { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "L'installation d'un système nécessite-t-elle de gros travaux ?",
        answer: "Non, dans la grande majorité des cas, l'installation se fait en moins d'une demi-journée. Nos techniciens certifiés raccordent le système directement à votre entrée d'eau principale ou sous votre évier sans endommager votre plomberie existante."
    },
    {
        question: "Dois-je entretenir le système moi-même ?",
        answer: "C'est l'avantage Bricareau. Nous proposons des forfaits d'entretien clés en main. Nous planifions et effectuons les changements de filtres et les vérifications annuelles pour que vous n'ayez à vous soucier de rien."
    },
    {
        question: "Comment savoir si j'ai vraiment besoin d'un filtre ou d'un adoucisseur ?",
        answer: "La seule façon d'en avoir la certitude est de faire analyser votre eau. Nous offrons un audit de qualité d'eau à domicile pour identifier exactement les problématiques (dureté, fer, chlore) avant de vous recommander une solution."
    },
    {
        question: "Qu'arrive-t-il si je déménage ?",
        answer: "Nos systèmes peuvent être désinstallés et réinstallés dans votre nouvelle demeure par nos experts. L'investissement que vous faites aujourd'hui vous suit demain."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center space-y-4 mb-16">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                        <MessageCircleQuestion className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Questions <span className="italic font-light text-blue-600">Fréquentes</span>
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Tout ce que vous devez savoir sur l'installation et l'entretien de nos systèmes.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div 
                            key={idx} 
                            className={cn(
                                "border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300",
                                openIndex === idx ? "bg-slate-50 shadow-md border-blue-200" : "bg-white hover:border-slate-300"
                            )}
                        >
                            <button 
                                className="w-full px-8 py-6 flex items-center justify-between text-left"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            >
                                <span className="text-lg font-bold text-slate-900 pr-8">
                                    {faq.question}
                                </span>
                                <ChevronDown 
                                    className={cn(
                                        "w-6 h-6 text-slate-400 shrink-0 transition-transform duration-300",
                                        openIndex === idx && "rotate-180 text-blue-600"
                                    )} 
                                />
                            </button>
                            
                            <div 
                                className={cn(
                                    "px-8 overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === idx ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <p className="text-slate-500 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
