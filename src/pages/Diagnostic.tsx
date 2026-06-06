import React, { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaterDiagnosticQuiz from "@/components/WaterDiagnosticQuiz";

const Diagnostic = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Diagnostic en Ligne | Évaluez votre Eau au Québec | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Utilisez notre outil de diagnostic en ligne pour identifier les problèmes de votre eau : calcaire, fer, soufre ou odeurs. Solution personnalisée instantanée.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Diagnostic - Qualité de l'Eau | Bricareau");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/diagnostic");
    }, []);

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="relative flex-1 flex flex-col items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-16">
                {/* Background Accents - Subtle & Minimalist */}
                <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
                <div className="absolute top-40 left-1/4 w-[300px] h-[300px] bg-blue-100/20 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
                    <div className="max-w-3xl mx-auto text-center mb-10 w-full animate-in fade-in slide-in-from-top-4 duration-1000">
                        <h1 
                            className="mb-6 tracking-tight text-center"
                            style={{
                                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                color: '#18448F',
                                fontSize: '50px',
                                lineHeight: '55px'
                            }}
                        >
                            Découvrez la <span style={{ color: '#8CC63F' }}>solution parfaite</span>
                            <span className="block">pour votre eau.</span>
                        </h1>

                        <p 
                            className="max-w-xl mx-auto text-slate-500 font-light text-[18px] md:text-[20px] leading-snug"
                            style={{
                                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                fontStyle: 'normal'
                            }}
                        >
                            Quelques questions rapides pour transformer la qualité de votre quotidien. Obtenez votre prescription d'eau personnalisée en moins de 2 minutes.
                        </p>
                    </div>

                    <div className="w-full max-w-4xl">
                        <WaterDiagnosticQuiz />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Diagnostic;
