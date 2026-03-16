import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
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
            <Header />
            <main className="relative lg:h-[850px] flex flex-col lg:items-center overflow-hidden bg-white pt-20 lg:pt-0">
                <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                    <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                        <GlobalBreadcrumbs variant="light" />
                    </div>
                </div>
                <div className="container mx-auto px-4 lg:px-6 h-full flex items-center">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                        {/* Left Column: Sales Pitch */}
                        <div className="lg:w-5/12 xl:w-1/2 flex flex-col justify-center">
                            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block animate-in fade-in slide-in-from-bottom duration-500">
                                Consultation Sans Frais
                            </span>
                            <h1
                                className="text-[32px] md:text-[48px] text-slate-900 mb-6 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom duration-700"
                                style={{
                                    fontWeight: 350
                                }}
                            >
                                Prenez le contrôle de <br className="hidden md:block" />
                                <span className="text-blue-600">la qualité de votre eau.</span>
                            </h1>
                            <p className="text-slate-600 mb-10 font-light text-justify animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                                Organisez une consultation téléphonique gratuite avec l'un de nos experts d'eau. Nous analyserons vos besoins, répondrons à vos questions et vous guiderons vers la meilleure solution d'adoucissement ou de filtration, sans aucune vente à pression.
                            </p>

                            <div className="space-y-6 mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                                {[
                                    { icon: CheckCircle2, title: "Évaluation sur mesure", desc: "Solutions personnalisées pour votre domicile." },
                                    { icon: Sparkles, title: "Zéro pression", desc: "Conseils impartiaux, aucune obligation d'achat." },
                                    { icon: Award, title: "Expertise garantie", desc: "Des techniciens certifiés à votre écoute." }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                            <feature.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-slate-900 mb-1">{feature.title}</h3>
                                            <p className="text-slate-600 font-light">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center gap-6 max-w-sm animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                                <div className="flex -space-x-3">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-white flex items-center justify-center font-bold text-blue-600 text-sm">+10k</div>
                                </div>
                                <div>
                                    <div className="flex text-yellow-400 mb-1">
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                    </div>
                                    <p className="text-sm font-medium text-slate-900">Familles québécoises satisfaites</p>
                                </div>
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
                        <h2
                            className="text-slate-900 mb-6"
                            style={{}}
                        >
                            Comment se déroule <span className="text-blue-600">notre consultation ?</span>
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
                                className="rounded-full px-8 h-12 text-blue-600 border-blue-600 hover:bg-blue-50"
                            >
                                {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialsSection
                title={
                    <>
                        <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">Approuvé par</span>
                        <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block">des milliers de familles.</span>
                    </>
                }
                maxReviews={8}
            />

            {/* CTA Section */}
            <section className="bg-primary py-16 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-primary-foreground mb-4">
                        Vous préférez nous appeler directement ?
                    </h2>
                    <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                        Notre équipe est disponible du lundi au vendredi de 8h30 à 20h30.
                    </p>
                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full px-8 h-14 border-white text-white bg-transparent hover:bg-white/10 flex items-center gap-2"
                            asChild
                        >
                            <a href="tel:18552649328">
                                <Phone className="w-5 h-5" />
                                1-855-264-9328
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PageConsultation;
