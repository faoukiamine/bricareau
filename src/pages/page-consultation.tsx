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
    ShieldCheck,
    Quote,
    Clock,
    UserCheck,
    Smartphone,
    ChevronDown
} from "lucide-react";
import React, { useEffect, useState } from "react";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import { cn } from "@/lib/utils";
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
        document.title = "Consultation Gratuite sur l'Eau au Québec | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Obtenir une évaluation gratuite de la qualité de votre eau. Planifier une consultation téléphonique sans engagement pour trouver la solution de traitement idéale.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Consultation Gratuite : Trouvez Votre Solution d'Eau | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Recevez des conseils d'experts pour votre eau de puits ou municipale au Québec. Aucun engagement, satisfaction garantie.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/consultation");
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Header />
            <Hero 
                image={heroConsultation}
                highlightedTitle=""
                mainTitle={
                    <>
                        Prenez le contrôle de <span className="text-[#8CC63F] font-sans font-bold drop-shadow-sm">la qualité</span><br/> de votre eau.
                    </>
                }
                subtitle="Organisez une consultation téléphonique gratuite avec l'un de nos experts d'eau. Nous analyserons vos besoins, répondrons à vos questions et vous guiderons vers la meilleure solution d'adoucissement ou de filtration, sans aucune vente à pression."
                showBreadcrumbs={true}
                showPhone={false}
                badge="Service Technique en ligne"
                liveStatus={true}
                ctaText="Commencer l'évaluation"
                ctaLink="#consultation-form"
            />
            <main className="relative flex flex-col bg-white pb-16 lg:pb-32">
                <div id="consultation-form" className="container mx-auto px-4 lg:px-6 -mt-24 lg:-mt-40 relative z-20">
                    <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
                        
                        {/* Left Side: Editorial Content */}
                        <div className="w-full lg:w-4/12 space-y-12 animate-in fade-in slide-in-from-left duration-1000 lg:pt-56 pt-24">
                             <div className="space-y-6">
                                 <p className="body-pro-max text-slate-600 max-w-xl text-left">
                                    Remplissez le formulaire à droite pour choisir le moment idéal. Nos experts vous contacteront pour une évaluation complète et sans engagement de vos besoins.
                                 </p>
                             </div>

                             {/* Modern Benefit List with Icons - Staggered Reveal */}
                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
                                {[
                                    { icon: Phone, title: "Appel de conseil", text: "15 min avec un expert certifié", delay: "delay-100" },
                                    { icon: ShieldCheck, title: "Zéro Engagement", text: "Conseils 100% impartiaux", delay: "delay-200" },
                                    { icon: Award, title: "Professionnels certifiés", text: "Le meilleur de l'industrie", delay: "delay-300" },
                                    { icon: Star, title: "Satisfaction", text: "Plus de 20,000 foyers", delay: "delay-500" }
                                ].map((item, i) => (
                                    <div key={i} className={cn("flex flex-col gap-3 group animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both", item.delay)}>
                                        <div className="w-10 h-10 rounded-xl bg-[#18448F]/10 flex items-center justify-center text-[#18448F] group-hover:bg-[#18448F] group-hover:text-white transition-all duration-500">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#18448F] text-sm uppercase tracking-wider">{item.title}</h4>
                                            <p className="text-slate-500 text-xs font-light">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                             </div>

                             {/* Editorial Testimonial in Column */}
                             <div className="pt-12 border-t border-slate-100 animate-in fade-in duration-1000 delay-700">
                                 <Quote className="w-10 h-10 text-[#18448F] mb-4" />
                                 <p className="text-xl font-light italic text-slate-500 leading-relaxed mb-6">
                                    "Une approche humaine et technique qui a totalement changé notre vision du traitement de l'eau. Simple, efficace et sans aucune pression."
                                 </p>
                                 <div className="flex items-center gap-4">
                                     <div>
                                         <p className="font-bold text-[#18448F] text-sm uppercase">Marc-Antoine D.</p>
                                         <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Client Privé • Montréal</p>
                                     </div>
                                 </div>
                             </div>
                        </div>

                        {/* Right Side: The Premium Form Card */}
                        <div className="w-full lg:w-8/12 animate-in fade-in slide-in-from-right duration-1000">
                            <div className="relative">
                                {/* Decorative Blobs */}
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#18448F]/10 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
                                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#18448F]/5 rounded-full blur-3xl opacity-50 -z-10"></div>
                                
                                <div className="bg-white p-4 md:p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_22px_70px_4px_rgba(0,0,0,0.08)] border border-slate-50 relative overflow-hidden backdrop-blur-sm">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-[#18448F]"></div>
                                    <ConsultationFormSection isStandalone={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step-by-Step Timeline Section */}
                <div className="w-full mt-32 py-24 bg-slate-50/50">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center mb-16 max-w-2xl mx-auto">
                            <h3 className="heading-pro-max mb-6">
                                <span className="font-bold not-italic text-[#18448F] block">Le parcours de</span>
                                <span className="font-bold text-[#8CC63F] block">votre consultation</span>
                            </h3>
                            <p className="text-slate-500 font-light">Simple, transparent et professionnel. Voici comment nous préparons votre solution.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                            {/* Horizontal Line (Desktop) */}
                            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 hidden md:block -translate-y-1/2 -z-10"></div>
                            
                            {[
                                { step: "01", icon: Smartphone, title: "Réservation Rapide", desc: "Choisissez votre créneau en 30 secondes." },
                                { step: "02", icon: UserCheck, title: "Validation d'expert", desc: "Nous analysons votre demande avant l'appel." },
                                { step: "03", icon: Phone, title: "Analyse de votre besoin", desc: "15 min pour comprendre votre eau." },
                                { step: "04", icon: Clock, title: "Rapport Dédié", desc: "Recevez votre solution personnalisée." }
                            ].map((process, i) => (
                                <div key={i} className="flex flex-col items-center text-center space-y-4 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                                    <div className="w-16 h-16 rounded-3xl bg-[#18448F] text-white flex items-center justify-center shadow-lg shadow-[#18448F]/20 group-hover:rotate-6 transition-transform">
                                        <process.icon className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-black text-[#18448F] uppercase tracking-[0.2em]">{process.step}</span>
                                        <h4 className="font-bold text-[#18448F] text-base mb-1">{process.title}</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed font-light">{process.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Section: Notre Processus / FAQ */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="heading-pro-max mb-8">
                            <span className="font-bold not-italic text-[#18448F] block">Comment se déroule</span>
                            <span className="font-bold text-[#8CC63F] block">notre consultation ?</span>
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
                            <div className="relative inline-block group">
                                <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                <Button
                                    className="relative bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none"
                                    onClick={() => setShowAllFaqs(!showAllFaqs)}
                                >
                                    {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PageConsultation;
