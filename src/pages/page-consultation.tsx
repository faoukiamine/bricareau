import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroBath from "@/assets/40-AdobeStock_365603381.jpeg";
import kitchenImg from "@/assets/18036672_SIE_2720_1530_21_04_30_SIE_CRM_Dishwasher_Hand_Taking_Out_Wine_Glass_Basket_Motiv_11_0017.webp";
import untitledImg from "@/assets/2151469364.jpg";
import mobileSoftenerImg from "@/assets/9-optimized.webp";
import bathroomImg from "@/assets/2705.jpg";
import waterTestGemini from "@/assets/Gemini_Generated_Image_rk3i02rk3i02rk3i.png";
import waterTestingImg from "@/assets/2147800429.jpg";
import process1 from "@/assets/2148563485.jpg";
import labTestImg from "@/assets/test-laboratoire-diligence-inspection-750x500.jpg";
import waterTestingBg from "@/assets/undersink_filtration_header.jpg";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import undersinkSystemImg from "@/assets/Système+de+filtration+Serene+Lite.webp";
import hardWaterSignsImg from "@/assets/Signs+of+hard+water+in+your+home-640w.webp";
import hardWaterImg from "@/assets/58279.jpg";
import {
    ArrowRight,
    Droplets,
    Heart,
    Shield,
    TrendingDown,
    Shirt,
    Zap,
    Check,
    CheckCircle2,
    ChevronRight,
    Star,
    Play,
    X,
    Sparkles,
    Clock,
    Home,
    Award,
    HandCoins,
    Phone
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";


const PageConsultation = () => {
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        document.title = "Adoucisseur d'eau : Adieu le calcaire et l'eau dure";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Dites adieu au calcaire avec nos adoucisseurs d'eau haute performance. Profitez d'une peau plus douce et protégez vos appareils.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Adoucisseur d'eau : Éliminez le calcaire | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Une eau soyeuse pour toute la maison. Découvrez nos solutions d'adoucissement haute performance.");
    }, []);
    return (
        <div className="min-h-screen bg-background font-sans text-slate-900">
            <Header />
            <main>
                {/* 1. Hero Section */}
                <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroBath}
                            alt="Confort d'une eau douce et soyeuse Québec - Bain relaxant sans calcaire Bricareau"
                            className="w-full h-full object-cover object-[center_35%]"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        {/* Brightening Start 1/3 Right */}
                        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-2xl text-white">
                            <h1
                                className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text max-w-xl"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold text-white">Planifiez une consultation gratuite sur l'eau</span> <br />
                            </h1>
                            <p className="text-lg font-light leading-snug text-white/95 mb-8 max-w-xl text-justify">
                                Remplissez le formulaire pour organiser une consultation téléphonique avec l'un de nos experts.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2.Consultation Form Section */}
                <ConsultationFormSection id="consultation" />
            </main>
            <Footer />
        </div>
    );
};

export default PageConsultation;
