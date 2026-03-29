import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import {
    CheckCircle2,
    Sparkles,
    Award,
    Star,
    Phone,
    ChevronDown
} from "lucide-react";
import React, { useEffect, useState } from "react";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import heroConsultation from "@/assets/8786.jpg";


const PageConsultation = () => {
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    useEffect(() => {
        document.title = "Planifiez une consultation gratuite | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Discutez avec nos experts et planifiez une consultation téléphonique sans engagement pour analyser votre eau et trouver la meilleure solution de traitement.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Consultation Gratuite sur l'eau | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Recevez une évaluation personnalisée de vos besoins en traitement d'eau par un expert certifié Bricareau.");
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Hero 
                image={heroConsultation}
                badge="Consultation Sans Frais"
                highlightedTitle="Prenez le contrôle de"
                mainTitle="la qualité de votre eau."
                subtitle="Organisez une consultation téléphonique gratuite avec l'un de nos experts d'eau. Nous analyserons vos besoins, répondrons à vos questions et vous guiderons vers la meilleure solution d'adoucissement ou de filtration, sans aucune vente à pression."
                showPhone={true}
                showBreadcrumbs={true}
                ctaText="Commencer l'évaluation"
                ctaLink="#consultation-form"
            />

            <main className="relative flex flex-col lg:items-center bg-white py-16 lg:py-32">
                <div id="consultation-form" className="container mx-auto px-4 lg:px-6">

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        {/* Left Column: Sales Pitch (Features & Proof) */}
                        <div className="lg:w-5/12 xl:w-1/2 flex flex-col justify-center space-y-12">
                            <div className="flex flex-col items-center lg:items-start space-y-6 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                                {[
                                    { icon: CheckCircle2, title: "Évaluation sur mesure", desc: "Solutions personnalisées pour votre domicile." },
                                    { icon: Sparkles, title: "Zéro pression", desc: "Conseils impartiaux, aucune obligation d'achat." },
                                    { icon: Award, title: "Expertise garantie", desc: "Des techniciens certifiés à votre écoute." }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-6 bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-sm border border-slate-100 w-full group hover:shadow-md transition-all">
                                        <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform shrink-0">
                                            <feature.icon className="w-6 h-6" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-slate-900 text-base mb-1">{feature.title}</h4>
                                            <p className="text-slate-500 text-sm font-light leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:w-7/12 xl:w-1/2 animate-in fade-in zoom-in duration-1000 relative">
                            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-3xl transform scale-110 -z-10"></div>
                            <ConsultationFormSection isStandalone={true} />
                        </div>

                    </div>
                </div>
            </main>

            {/* Section: Notre Processus / FAQ */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="heading-pro-max mb-8">
                            <span className="italic font-light text-[#2563eb] block">Comment se déroule</span>
                            <span className="font-bold text-[#1e3a8a] block">notre consultation ?</span>
                        </h2>
                        <p className="text-slate-600 font-light">
                            Voici les questions les plus fréquentes concernant notre processus d'évaluation gratuite.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                { q: "Combien de temps dure la consultation téléphonique ?", a: "La consultation dure généralement entre 15 et 30 minutes, selon vos questions et la complexité de votre situation." },
                                { q: "La consultation est-elle vraiment sans obligation d'achat ?", a: "Absolument. Notre objectif premier est de vous informer et d'évaluer vos besoins. Vous êtes totalement libre de vos décisions suite à cet appel." },
                                { q: "Quelles informations dois-je préparer avant l'appel ?", a: "Il est utile de savoir si vous êtes sur l'eau de la ville ou sur un puits, le nombre de personnes résidant dans la maison, et quels sont les problèmes d'eau que vous avez remarqués (goût, odeur, calcaire, etc.)." },
                                { q: "Un technicien devra-t-il se déplacer chez moi ?", a: "Dans la majorité des cas, nous pouvons faire une excellente pré-évaluation par téléphone. Si une analyse d'eau plus poussée ou une vérification de plomberie est nécessaire, nous pourrons planifier un déplacement." },
                                { q: "Est-ce que je serai en contact avec un vendeur à pression ?", a: "Non. Chez Bricareau, vous parlerez avec un expert conseiller technique. Notre approche est éducative et consultative, sans aucune pression de vente." },
                                { q: "Puis-je reporter ou annuler mon rendez-vous téléphonique ?", a: "Oui, bien sûr. Si vous avez un empêchement, envoyez-nous simplement un courriel ou appelez-nous pour replanifier à votre convenance." }
                            ].slice(0, showAllFaqs ? undefined : 4).map((item, idx) => (
                                <AccordionItem key={idx} value={`item-${idx}`} className="border-b-gray-200">
                                    <AccordionTrigger className="text-left text-base md:text-lg font-medium leading-6 hover:no-underline py-6" style={{}}>
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base font-light leading-relaxed text-slate-600 pb-6 text-justify" style={{}}>
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <div className="mt-12 text-center">
                             <Button
                                 onClick={() => setShowAllFaqs(!showAllFaqs)}
                                 variant="outline"
                            >
                                {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PageConsultation;
