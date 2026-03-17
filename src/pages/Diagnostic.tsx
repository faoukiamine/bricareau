import React from 'react';
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import WaterDiagnosticQuiz from "@/components/WaterDiagnosticQuiz";
import problemBg from "@/assets/problem_hero_bg.jpg";

const Diagnostic = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Header />
            <main className="relative flex flex-col items-center bg-white pt-20 pb-20 lg:pt-32">
                <div className="absolute top-[50px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                    <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                        <GlobalBreadcrumbs variant="light" />
                    </div>
                </div>
                {/* Visual Background Elements */}
                <div className="absolute top-0 left-0 w-full h-[500px] z-0 opacity-10 pointer-events-none">
                    <img src={problemBg} alt="Diagnostic interactif de la qualité de l'eau Bricareau - Analyse et solutions personnalisées" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] z-0 pointer-events-none animate-pulse" />
                <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-cyan-50/50 rounded-full blur-[120px] z-0 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                    <div className="max-w-4xl mx-auto text-center mb-12 w-full animate-in fade-in slide-in-from-top-4 duration-1000">
                        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                            OUTIL D'ANALYSE INTELLIGENT
                        </span>
                        <h1
                            className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] mb-8 tracking-tighter text-slate-900 text-justify max-w-xl mx-auto"
                            style={{
                                fontWeight: 350
                            }}
                        >
                            Découvrez la solution parfaite pour votre eau
                        </h1>
                        <p className="text-slate-500 font-light text-justify max-w-xl mx-auto">
                            Répondez à quelques questions rapides pour obtenir une recommandation personnalisée basée sur vos besoins spécifiques et la provenance de votre eau.
                        </p>
                    </div>

                    <WaterDiagnosticQuiz />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Diagnostic;
