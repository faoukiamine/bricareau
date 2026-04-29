import React, { useEffect } from "react";
import { 
    Search, 
    Layers, 
    Wrench, 
    ShieldCheck, 
    ArrowRight,
    Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { cn } from "@/lib/utils";

// Assets (Assuming equivalents)
import heroImg from "@/assets/industrial_hero_pro_max.png";
import waterTestImg from "@/assets/Water-test_15395190.png";
import diagramImg from "@/assets/Commissioning.svg"; // Mockup for technical diagram or finding a similar asset
import installationImg from "@/assets/Water-Softener-installation.jpg";
import serviceImg from "@/assets/RO service.png";

const OurProcess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Notre processus | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    const steps = [
        {
            title: "Analyse de l'eau",
            desc: "Notre équipe commence par une analyse rigoureuse et gratuite de votre eau à domicile ou en entreprise. Cette étape cruciale nous permet d'identifier précisément les contaminants, la dureté et les impuretés pour vous proposer la solution de traitement la plus efficace et adaptée à votre réalité.",
            image: waterTestImg,
            align: "left"
        },
        {
            title: "Conception d'applications",
            desc: "Sur la base des résultats de l'analyse, nos ingénieurs et experts conçoivent un système sur mesure. Qu'il s'agisse d'un simple filtre sous évier ou d'une station de traitement industrielle complexe, nous sélectionnons les meilleurs composants pour garantir une performance optimale et durable.",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop", // Technical diagram style
            align: "right"
        },
        {
            title: "Installation",
            desc: "Nos techniciens certifiés assurent une installation impeccable, rapide et sans tracas. Nous respectons les normes les plus strictes de l'industrie et veillons à ce que votre nouveau système soit parfaitement calibré dès le premier jour pour une tranquillité d'esprit totale.",
            image: installationImg,
            align: "left"
        },
        {
            title: "Service et maintenance",
            desc: "Notre engagement ne s'arrête pas à l'installation. Nous offrons un support technique complet, des plans d'entretien préventif et un service de livraison de sel ou de remplacement de filtres. Nous sommes là pour veiller à ce que vous profitiez d'une eau de qualité supérieure, année après année.",
            image: serviceImg,
            align: "right"
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />

            <main>
                {/* 1. Hero Section */}
                <section className="relative h-[70vh] flex items-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={heroImg}
                            alt="Technicien Bricareau"
                            className="w-full h-full object-cover brightness-[0.4]"
                        />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-12">
                            <h1 className="text-5xl md:text-[6rem] leading-[1] font-black text-white uppercase tracking-tighter">
                                NOTRE PROCESSUS
                            </h1>
                             <Button 
                                 onClick={() => navigate("/contact")}
                             >
                                 DEMANDER UNE CONSULTATION
                             </Button>
                        </div>
                    </div>
                </section>

                {/* 2. Intro Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                            Notre processus nous distingue
                        </h2>
                        <div className="w-24 h-1 bg-[#0052ff] mx-auto" />
                    </div>
                </section>

                {/* 3. Steps with Alternating Layout and Dot Patterns */}
                <section className="py-12 space-y-32 mb-12">
                    {steps.map((step, idx) => (
                        <div key={idx} className="container mx-auto px-6">
                            <div className={cn(
                                "flex flex-col md:flex-row items-center gap-16 md:gap-24",
                                step.align === "right" && "md:flex-row-reverse"
                            )}>
                                {/* Text Content */}
                                <div className="flex-1 space-y-8">
                                    <div className="flex items-center gap-4">
                                        <span className="text-6xl font-black text-slate-100 tabular-nums">0{idx + 1}</span>
                                        <div className="h-px bg-slate-100 flex-1" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-xl text-slate-500 font-light leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Image with Dot Pattern */}
                                <div className="flex-1 relative">
                                    {/* Dot Pattern Background */}
                                    <div className={cn(
                                        "absolute -z-10 w-64 h-64 opacity-20",
                                        step.align === "left" ? "-top-12 -right-12" : "-bottom-12 -left-12"
                                    )}>
                                        <div className="grid grid-cols-6 gap-4">
                                            {[...Array(36)].map((_, i) => (
                                                <div key={i} className="w-2 h-2 rounded-full bg-[#0052ff]" />
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="rounded-2xl overflow-hidden shadow-2xl skew-y-0 group hover:skew-y-1 transition-transform duration-700">
                                        <img 
                                            src={step.image} 
                                            alt={step.title} 
                                            className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* 4. Wave Transition */}
                <section className="relative h-[40vh] overflow-hidden flex items-end">
                    <img 
                        src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2000&auto=format&fit=crop" 
                        alt="Cinematic Water" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </section>

                {/* 5. CTA Section */}
                <section className="py-32 bg-slate-900 text-white selection:bg-blue-600">
                    <div className="container mx-auto px-6 max-w-4xl text-center space-y-12">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
                            Laissez-nous vous aider à trouver la solution adaptée.
                        </h2>
                        <Button 
                            variant="outline"
                            className="bg-white text-slate-900"
                            onClick={() => navigate("/contact")}
                        >
                            PLANIFIER UNE CONSULTATION
                        </Button>
                    </div>
                </section>

                {/* 6. Testimonials Section */}
                <div className="bg-slate-50 py-32 border-y border-gray-100">
                    <TestimonialsSection 
                        filterProduct="/"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16 px-6">
                                <span className="italic font-light text-[#0052ff] block text-2xl md:text-3xl">La qualité de service avant tout.</span>
                                <span className="font-bold text-[#18448F] block text-4xl md:text-6xl tracking-tighter uppercase leading-none">RÉSULTATS PROUVÉS</span>
                            </div>
                        }
                    />
                </div>

                {/* 7. Contact Info */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-6 max-w-4xl space-y-8">
                        <Wrench className="w-16 h-16 text-[#0052ff] mx-auto mb-4" />
                        <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Besoin d'une installation urgente ?</h3>
                        <p className="text-slate-500 text-lg">Nos techniciens mobiles couvrent tout le Québec pour vous servir le plus rapidement possible.</p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <a href="tel:18552649328" className="text-2xl font-black text-[#0052ff] hover:scale-105 transition-transform flex items-center gap-3">
                                <Phone className="w-6 h-6" />
                                (855) 264-9328
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default OurProcess;
