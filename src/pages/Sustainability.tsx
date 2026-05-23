import React, { useEffect } from "react";
import { 
    Leaf, 
    Droplets, 
    Zap, 
    Globe, 
    ChevronRight,
    ArrowRight,
    Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { cn } from "@/lib/utils";

// Assets
import heroImg from "@/assets/7031878.jpg"; // Using a bottle or modern interior image
import waveImg from "@/assets/pure_water_lifestyle.png"; 

const Sustainability = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Durabilité | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
            <Header />

            <main>
                {/* 1. Hero Section */}
                <section className="relative h-[70vh] flex items-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={waveImg}
                            alt="Durabilité Bricareau"
                            className="w-full h-full object-cover brightness-[0.4]"
                        />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl space-y-12">
                            <h1 className="text-5xl md:text-[6rem] leading-[1] font-black text-white uppercase tracking-tighter">
                                DURABILITÉ
                            </h1>
                            <Button 
                                size="lg" 
                                className="bg-[#0052ff] hover:bg-blue-700 text-white px-12 h-14 rounded-full text-[11px] font-black transition-all shadow-2xl uppercase tracking-widest"
                                onClick={() => navigate("/contact")}
                            >
                                DEMANDER UNE CONSULTATION
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 2. Intro Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="space-y-12 text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                            <p>
                                L'industrie de l'eau en bouteille a de bonnes raisons de détester Bricareau. Nous bouleversons leur modèle économique obsolète qui redonne du pouvoir d'achat à nos clients tout en réduisant les déchets et l'impact environnemental.
                            </p>
                            <p>
                                Alors que nous commençons à réfléchir à ce que nous voulons faire pour notre planète, il est important que nous envisagions toutes les options pour préserver les ressources naturelles et minimiser les déchets inutiles.
                            </p>
                            <p>
                                Bricareau a été fondée sur le principe d'éliminer le besoin d'eau en bouteille plastique en proposant des <span className="text-[#0052ff] font-bold">solutions durables</span> pour une eau pure et savoureuse, quel que soit l'environnement. Notre priorité est d'offrir aux consommateurs une alternative viable à l'eau en bouteille, plus que jamais utile, durable et saine.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. Pillars Section */}
                <section className="py-24 space-y-32">
                    {/* Pillar 1 */}
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 text-[#0052ff]">
                                <Droplets className="w-10 h-10" />
                                <div className="h-px bg-blue-100 flex-1" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                                Réduire le gaspillage d'eau et d'énergie
                            </h2>
                            <p className="text-xl text-slate-500 leading-relaxed font-light">
                                La fabrication d'une seule bouteille d'eau nécessite environ trois litres d'eau gaspillée. À cela s'ajoute une quantité considérable d'énergie pour la production de bouteilles et de canettes en plastique. Autant de gaspillage qu'il est possible d'éviter en optant pour les solutions de filtration d'eau durables de Bricareau.
                            </p>
                        </div>
                    </div>

                    {/* Pillar 2 */}
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 text-emerald-500">
                                <Zap className="w-10 h-10" />
                                <div className="h-px bg-emerald-100 flex-1" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                                Réduire les émissions de gaz à effet de serre
                            </h2>
                            <p className="text-xl text-slate-500 leading-relaxed font-light">
                                Non seulement la production de bouteilles à usage unique engendre un gaspillage considérable d'eau et d'énergie, mais le transport et la distribution de l'eau conditionnée génèrent également une empreinte carbone inutile. Opter pour des solutions de filtration d'eau durables permet de réduire considérablement ces coûts.
                            </p>
                        </div>
                    </div>

                    {/* Pillar 3 */}
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 text-orange-500">
                                <Globe className="w-10 h-10" />
                                <div className="h-px bg-orange-100 flex-1" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                                Promouvoir les changements de mode de vie
                            </h2>
                            <p className="text-xl text-slate-500 leading-relaxed font-light">
                                En optant pour nos solutions durables, vous donnez un véritable modèle en matière de développement durable. Vos invités, clients, amis et voisins découvriront tous les avantages d'un mode de vie plus écologique et constateront à quel point l'utilisation d'eau filtrée est simple et pratique.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. Testimonials (Matching model) */}
                <div className="bg-slate-50 py-32 border-y border-gray-100">
                    <TestimonialsSection 
                        filterProduct="/"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16 px-6">
                                <span className="italic font-light text-[#0052ff] block text-2xl md:text-3xl">L'engagement durable récompensé.</span>
                                <span className="font-bold text-[#18448F] block text-4xl md:text-6xl tracking-tighter uppercase leading-none">VOS AVIS NOUS MOTIVENT</span>
                            </div>
                        }
                    />
                </div>

                {/* 5. Wave Cinematic Transition */}
                <section className="relative h-[40vh] overflow-hidden flex items-end">
                    <img 
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" 
                        alt="Teal Ocean" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </section>

                {/* 6. Solution Finder Form */}
                <section className="py-32 bg-slate-900 text-white">
                    <div className="container mx-auto px-6 max-w-5xl text-center space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Passer au durable</h2>
                            <p className="text-slate-400 text-lg md:text-xl font-light">
                                Rejoignez les milliers de Québécois qui ont dit non aux bouteilles plastique.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                            <div className="space-y-3 text-left">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Secteur d'activité</label>
                                <select className="w-full h-14 bg-white/5 border border-white/10 rounded-sm px-6 text-sm focus:ring-2 focus:ring-[#0052ff] outline-none transition-all">
                                    <option className="bg-slate-900">Résidentiel</option>
                                    <option className="bg-slate-900">Bureaux</option>
                                    <option className="bg-slate-900">Restauration</option>
                                    <option className="bg-slate-900">Industriel</option>
                                </select>
                            </div>
                            <div className="space-y-3 text-left">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Votre objectif principal</label>
                                <select className="w-full h-14 bg-white/5 border border-white/10 rounded-sm px-6 text-sm focus:ring-2 focus:ring-[#0052ff] outline-none transition-all">
                                    <option className="bg-slate-900">Réduire le plastique</option>
                                    <option className="bg-slate-900">Économiser de l'argent</option>
                                    <option className="bg-slate-900">Meilleur goût de l'eau</option>
                                </select>
                            </div>
                            <Button 
                                className="bg-[#0052ff] text-white hover:bg-blue-600 h-14 rounded-full font-black uppercase tracking-widest text-[11px] transition-all"
                                onClick={() => navigate("/contact")}
                            >
                                DEMANDER UNE ÉTUDE D'IMPACT
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 7. Contact CTA */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-6 max-w-4xl space-y-8">
                        <Leaf className="w-16 h-16 text-[#0052ff] mx-auto mb-4 animate-bounce" />
                        <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Ensemble pour un futur plus vert.</h3>
                        <p className="text-slate-500 text-lg">Nos experts en durabilité sont à votre disposition pour vous conseiller sur les meilleures pratiques de gestion de l'eau.</p>
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

export default Sustainability;
