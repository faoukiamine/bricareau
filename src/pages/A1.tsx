import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
    ChevronRight, 
    ArrowRight, 
    CheckCircle2, 
    Star, 
    Droplets, 
    Zap, 
    Heart, 
    Sparkles, 
    ShieldCheck,
    Phone
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

// Assets
import heroImg from "@/assets/23568974.png";
import technicianImg from "@/assets/2148563485.jpg";
import benefitsImg from "@/assets/18036672_SIE_2720_1530_21_04_30_SIE_CRM_Dishwasher_Hand_Taking_Out_Wine_Glass_Basket_Motiv_11_0017.webp";
import signs1 from "@/assets/Hard Water-Faucet.jpg";
import signs2 from "@/assets/tarte-chauffe-eau.jpg";
import signs3 from "@/assets/2149561614.jpg";
import signs4 from "@/assets/12163.jpg";
import signs5 from "@/assets/58279.jpg";
import signs6 from "@/assets/2148926639.jpg";
import action1 from "@/assets/Water-Softener-installation.jpg";
import action2 from "@/assets/2148563485.jpg";
import diagramImg from "@/assets/Portable_Water_Softener.jpg"; // Placeholder for process diagram
import maintenanceImg from "@/assets/undersink_filtration_header.jpg"; // Placeholder for maintenance

const A1 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Adoucissement de l'eau résidentielle | Bricareau";
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />
            
            <main>
                {/* 1. Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="space-y-4">
                                    <h1 className="text-5xl lg:text-7xl font-black text-[#3d6aab] leading-[1.1] uppercase tracking-tighter">
                                        ADOUCISSEMENT<br />
                                        <span className="text-[#3d6aab]">DE L'EAU</span><br />
                                        RÉSIDENTIELLE
                                    </h1>
                                    <p className="text-lg text-slate-500 max-w-xl font-light leading-relaxed">
                                        Protégez votre foyer et améliorez votre qualité de vie avec nos systèmes d'adoucissement d'eau haute performance. Dites adieu au calcaire définitivement.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-8">
                                    <div className="relative inline-block w-full sm:w-auto group">
                                        <div className="absolute inset-0 border border-[#3d6aab] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                        <Button 
                                            className="relative w-full sm:w-auto bg-[#3d6aab] hover:bg-white hover:text-[#3d6aab] text-white rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all border-none"
                                            onClick={() => navigate('/tests-eau')}
                                        >
                                            OBTENEZ UN TEST D'EAU GRATUIT
                                        </Button>
                                    </div>
                                    <div className="relative inline-block w-full sm:w-auto group">
                                        <div className="absolute inset-0 border border-[#3d6aab] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                        <Button 
                                            className="relative w-full sm:w-auto bg-[#3d6aab] hover:bg-white hover:text-[#3d6aab] text-white rounded-[2rem] h-[3.25rem] px-8 font-black uppercase tracking-[0.1em] text-[11px] transition-all border-none"
                                            onClick={() => navigate('/contact')}
                                        >
                                            CONTACTEZ UN EXPERT DÈS AUJOURD'HUI
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative">
                                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                                    <img 
                                        src={heroImg} 
                                        alt="Adoucisseur d'eau Bricareau" 
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
                                <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Commitment Section */}
                <section className="py-24 bg-slate-50/50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#3d6aab] leading-tight">
                                Engagé à fournir des solutions de haute qualité
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-light">
                                Chez Bricareau, nous comprenons que l'eau est au cœur de votre foyer. C'est pourquoi nous proposons des systèmes d'adoucissement d'eau de classe mondiale, conçus pour durer et pour offrir une performance exceptionnelle. Notre mission est de vous garantir une eau douce, pure et saine pour chaque aspect de votre vie quotidienne.
                            </p>
                            <div className="pt-4">
                                <Button 
                                    variant="ghost" 
                                    className="text-[#3d6aab] hover:text-[#3d6aab] font-bold uppercase tracking-widest text-[11px] group p-0"
                                    onClick={() => navigate('/notre-processus')}
                                >
                                    En savoir plus <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Benefits Section - Redesigned to match image */}
                <section className="relative py-32 overflow-hidden bg-white">
                    {/* Background split - light blue bottom part */}
                    <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#f4f9ff] z-0" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl lg:text-5xl font-black text-[#3d6aab] tracking-tight uppercase">
                                Avantages de l'eau douce
                            </h2>
                        </div>
                        
                        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
                            {/* Vertical Text Side Decoration */}
                            <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden 2xl:block">
                                <div className="flex items-center gap-4 -rotate-90 origin-center whitespace-nowrap">
                                    <div className="h-px w-12 bg-slate-300" />
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">
                                        VOTRE SOLUTION UNIQUE
                                    </p>
                                </div>
                            </div>

                            {/* Accordion Card (Left) */}
                            <div className="w-full lg:w-1/2 z-20">
                                <div className="bg-white p-10 lg:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-50">
                                    <Accordion type="single" defaultValue="item-0" className="w-full">
                                        {[
                                            {
                                                title: "Éliminer le tartre et les dommages",
                                                content: "Prévenez les dégâts importants et coûteux à votre tuyauterie et à vos appareils électroménagers en installant dès aujourd'hui un adoucisseur d'eau. En éliminant les minéraux responsables de la dureté de l'eau avant qu'ils n'atteignent votre domicile, vous prévenez les dommages à long terme et prolongez la durée de vie de vos appareils."
                                            },
                                            {
                                                title: "Améliorer l'esthétique de l'eau",
                                                content: "Une eau plus claire, sans odeur ni goût désagréable. Profitez d'une qualité d'eau supérieure pour la boisson et la cuisine, tout en protégeant vos éviers des taches jaunâtres."
                                            },
                                            {
                                                title: "Vaisselle impeccable et vêtements plus éclatants",
                                                content: "Retrouvez une vaisselle étincelante sans traces de séchage. Vos textiles restent souples, les couleurs sont préservées et vous utilisez jusqu'à 50% de savon en moins."
                                            }
                                        ].map((item, i) => (
                                            <AccordionItem 
                                                key={i} 
                                                value={`item-${i}`}
                                                className="border-b border-slate-100 last:border-none"
                                            >
                                                <AccordionTrigger className="hover:no-underline py-6 text-left font-bold text-[#3d6aab] text-lg lg:text-xl data-[state=open]:text-blue-600 transition-colors">
                                                    {item.title}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-500 leading-relaxed font-light text-base lg:text-lg pb-8">
                                                    {item.content}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>

                            {/* Large Image (Right) with Overlap */}
                            <div className="w-full lg:w-[65%] mt-8 lg:mt-0 lg:-ml-20 relative">
                                <div className="relative group">
                                    {/* Decorative Dots Pattern behind/over */}
                                    <div className="absolute -bottom-16 -left-16 w-80 h-80 opacity-40 z-0 pointer-events-none">
                                        <div className="grid grid-cols-12 gap-3">
                                            {[...Array(144)].map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 bg-[#3d6aab] rounded-full" />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] z-10 border-4 border-white">
                                        <img 
                                            src={technicianImg} 
                                            alt="Technicien Bricareau" 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Quote Section */}
                <section className="py-24 bg-[#3d6aab] text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                        <div className="absolute top-1/4 right-1/4 w-96 h-96 border-[40px] border-white rounded-full" />
                    </div>
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-12">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <blockquote className="text-2xl lg:text-4xl font-light italic leading-relaxed">
                                "Après des années à lutter contre les dépôts de calcaire sur nos robinetteries et la peau sèche de nos enfants, l'installation d'un adoucisseur Bricareau a été une véritable révélation. La différence est instantanée : une eau soyeuse, des verres étincelants et une équipe de techniciens qui a été incroyable. Je les recommande vivement !"
                            </blockquote>
                            <div className="space-y-2">
                                <div className="text-xl font-bold">Marie Durand</div>
                                <div className="text-sm uppercase tracking-[0.2em] opacity-60">Cliente satisfaite, Montréal</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Signs Section */}
                <section className="py-24 lg:py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20 space-y-4">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#3d6aab] uppercase tracking-tight">
                                L'impact silencieux du
calcaire sur votre vie.
                            </h2>
                            <p className="text-slate-500 max-w-2xl mx-auto font-light">
                                Le calcaire n'est pas qu'un dépôt blanc ; c'est un agent d'érosion invisible qui dégrade votre confort, votre santé et vos finances au quotidien.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[
                                { title: "Traces de calcaire", img: signs1, desc: "Dépôts blancs sur la robinetterie et les éviers." },
                                { title: "Accumulation", img: signs2, desc: "Tartre dans le chauffe-eau et les tuyaux." },
                                { title: "Irritations cutanées", img: signs3, desc: "Peau qui gratte après la douche ou le bain." },
                                { title: "Cheveux ternes", img: signs4, desc: "Difficulté à rincer le savon et cheveux cassants." },
                                { title: "Taches d'eau", img: signs5, desc: "Voiles blanchâtres sur les verres et la vaisselle." },
                                { title: "Résidus de savon", img: signs6, desc: "Mousse inefficace et résidus dans la douche." }
                            ].map((item, i) => (
                                <div key={i} className="group space-y-6">
                                    <div className="rounded-[2.5rem] overflow-hidden aspect-video shadow-lg group-hover:shadow-2xl transition-all duration-500">
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="space-y-2 text-center">
                                        <h3 className="text-xl font-bold text-[#3d6aab] group-hover:text-[#3d6aab] transition-colors uppercase tracking-wide">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 font-light italic">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Action Shots Section */}
                <section className="py-12">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px] lg:h-[600px]">
                                <img src={action1} alt="Installation adoucisseur" className="w-full h-full object-cover" />
                            </div>
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px] lg:h-[600px]">
                                <img src={action2} alt="Technicien Bricareau" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. About Section */}
                <section className="py-24 lg:py-32 bg-slate-50/50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#3d6aab] uppercase tracking-tight">
                                À propos des adoucisseurs d'eau
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold text-[#3d6aab] border-b-2 border-[#3d6aab] pb-4 inline-block">
                                        Procédé d'élimination de la dureté
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed font-light text-justify">
                                        Nos adoucisseurs utilisent un procédé sophistiqué d'échange ionique. L'eau dure passe à travers une résine chargée d'ions sodium qui capturent les ions calcium et magnésium (responsables du calcaire). Le résultat est une eau parfaitement adoucie qui circule dans toute votre maison.
                                    </p>
                                    <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-white/50">
                                        <img src={diagramImg} alt="Schéma adoucissement" className="w-full h-auto" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold text-[#3d6aab] border-b-2 border-[#3d6aab] pb-4 inline-block">
                                        Maintenance du système
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed font-light text-justify">
                                        Un système bien entretenu est la clé d'une eau douce constante. La maintenance consiste principalement à ajouter du sel de haute qualité régulièrement et à effectuer une vérification annuelle par nos techniciens pour optimiser les réglages et assurer la longévité de votre investissement.
                                    </p>
                                    <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-white/50">
                                        <img src={maintenanceImg} alt="Maintenance adoucisseur" className="w-full h-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Final CTA Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#3d6aab]/5 pointer-events-none" />
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto space-y-10">
                            <h2 className="text-4xl lg:text-6xl font-black text-[#3d6aab] leading-tight uppercase tracking-tighter">
                                Laissez-nous vous aider à trouver la solution adaptée
                            </h2>
                             <div className="pt-4">
                                <div className="relative inline-block group">
                                    <div className="absolute inset-0 border border-[#3d6aab] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button 
                                        className="relative bg-[#3d6aab] hover:bg-white hover:text-[#3d6aab] text-white rounded-[2rem] px-12 h-16 font-black uppercase tracking-widest text-xs transition-all border-none shadow-2xl"
                                        onClick={() => navigate('/contact')}
                                    >
                                        PARLEZ À UN EXPERT
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Partner Section */}
                <section className="py-24 border-t border-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-sm font-black text-[#3d6aab] uppercase tracking-[0.4em]">
                                Votre confiance. Notre plus grande fierté.
                            </h2>
                            <h3 className="text-3xl font-bold text-[#3d6aab]">
                                Témoignages de réussite de nos partenaires
                            </h3>
                        </div>
                        
                        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700">
                            {/* Partner Logos could go here */}
                            <div className="h-12 w-32 bg-slate-200 rounded animate-pulse" />
                            <div className="h-12 w-32 bg-slate-200 rounded animate-pulse" />
                            <div className="h-12 w-32 bg-slate-200 rounded animate-pulse" />
                            <div className="h-12 w-32 bg-slate-200 rounded animate-pulse" />
                            <div className="h-12 w-32 bg-slate-200 rounded animate-pulse" />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default A1;
