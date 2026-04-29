import React, { useEffect } from "react";
import { 
    ChevronRight, 
    ArrowRight,
    Star,
    CheckCircle2,
    ShieldCheck,
    Settings,
    Users,
    Clock,
    DollarSign,
    Leaf,
    ArrowUpRight,
    Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { cn } from "@/lib/utils";

// Assets (Assuming these exist or equivalents)
import heroImg from "@/assets/10341859.jpg"; 
import waveImg from "@/assets/close-up-handsom-man-taking-bath.jpg"; // Placeholder for the wave transition

const WhyChooseUs = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Pourquoi nous choisir ? | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-[#0052ff]" />,
            title: "Fournisseur de confiance",
            desc: "Nous sommes fiers de notre réputation de leader en matière de solutions d'eau de confiance à travers le Québec."
        },
        {
            icon: <Settings className="w-8 h-8 text-[#0052ff]" />,
            title: "Solutions multiples",
            desc: "Des adoucisseurs d'eau aux systèmes d'osmose inverse, nous offrons une gamme complète de solutions."
        },
        {
            icon: <Users className="w-8 h-8 text-[#0052ff]" />,
            title: "Équipe hautement qualifiée",
            desc: "Nos techniciens certifiés reçoivent une formation continue pour assurer les plus hauts standards d'installation."
        },
        {
            icon: <Clock className="w-8 h-8 text-[#0052ff]" />,
            title: "Service pratique",
            desc: "Nous nous adaptons à votre horaire. Notre service après-vente est rapide, efficace et toujours à votre écoute."
        },
        {
            icon: <DollarSign className="w-8 h-8 text-[#0052ff]" />,
            title: "Rentable",
            desc: "Nos solutions sont conçues pour durer, réduisant vos coûts de maintenance et la consommation de savon."
        },
        {
            icon: <Leaf className="w-8 h-8 text-[#0052ff]" />,
            title: "Engagés pour le développement durable",
            desc: "Nous privilégions des technologies qui minimisent le gaspillage d'eau et réduisent l'utilisation de bouteilles plastique."
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
                            alt="Pourquoi nous choisir ?"
                            className="w-full h-full object-cover brightness-[0.5]"
                        />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <h1 className="text-5xl md:text-[5rem] leading-[1.1] font-black text-white uppercase tracking-tighter">
                                POURQUOI NOUS CHOISIR ?
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
                <section className="py-24 bg-white border-b border-gray-50">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">
                            Votre partenaire en filtration d'eau
                        </h2>
                        <div className="space-y-8 text-lg md:text-xl text-slate-500 font-normal leading-relaxed">
                            <p>
                                Chez Bricareau, nous comprenons que la qualité de votre eau est essentielle à votre <span className="text-[#0052ff] font-bold">santé</span>, votre <span className="text-[#0052ff] font-bold">confort</span> et votre <span className="text-[#0052ff] font-bold">sécurité</span>. En tant qu'experts en traitement d'eau au Québec, nous nous engageons à fournir des solutions de filtration sur mesure qui répondent exactement à vos besoins.
                            </p>
                            <p>
                                Forts de 25 ans d'expérience, nous avons bâti notre réputation sur la <span className="text-slate-900 font-semibold italic">transparence</span> et l'<span className="text-slate-900 font-semibold italic">excellence</span>. De l'analyse initiale gratuite à l'installation professionnelle et au suivi régulier, nous sommes votre partenaire de confiance à chaque étape.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. Features Grid */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24 space-y-4">
                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em]">L'EXPÉRIENCE BRICAREAU</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter">
                                Découvrez la différence
                            </h2>
                            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                                Nous combinons expertise technique et service client exceptionnel pour vous offrir la meilleure eau possible.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 max-w-7xl mx-auto">
                            {features.map((feature, idx) => (
                                <div key={idx} className="group hover:bg-slate-50 p-8 rounded-2xl transition-all duration-300">
                                    <div className="mb-8 w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#0052ff] transition-all duration-500 group-hover:scale-110 shadow-sm group-hover:shadow-blue-200 group-hover:shadow-xl">
                                        <div className="group-hover:text-white transition-colors duration-500">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed font-normal">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Testimonials Section (Matching bluedrop style) */}
                <div className="bg-slate-50 py-32 border-y border-gray-100">
                    <TestimonialsSection 
                        filterProduct="/"
                        limit={6}
                        title={
                            <div className="text-center space-y-3 mb-16">
                                <span className="italic font-light text-[#0052ff] block text-2xl md:text-3xl">Nos clients parlent pour nous.</span>
                                <span className="font-bold text-[#3d6aab] block text-4xl md:text-6xl tracking-tighter uppercase">CE QUE NOS CLIENTS DISENT</span>
                            </div>
                        }
                    />
                </div>

                {/* 5. Wave Cinematic Transition */}
                <section className="relative h-[30vh] md:h-[50vh] overflow-hidden flex items-end">
                    <img 
                        src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2000&auto=format&fit=crop" 
                        alt="Water Background" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </section>

                {/* 6. Solution Finder Form */}
                <section className="py-32 bg-slate-900 text-white">
                    <div className="container mx-auto px-6 max-w-5xl text-center space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Trouver une solution</h2>
                            <p className="text-slate-400 text-lg md:text-xl font-light">
                                Découvrez l'équipement idéal pour votre résidence ou votre entreprise en quelques secondes.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                            <div className="space-y-3 text-left">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Je cherche une solution pour</label>
                                <select className="w-full h-14 bg-white/5 border border-white/10 rounded-sm px-6 text-sm focus:ring-2 focus:ring-[#0052ff] outline-none transition-all">
                                    <option className="bg-slate-900">Ma maison</option>
                                    <option className="bg-slate-900">Mon entreprise</option>
                                </select>
                            </div>
                            <div className="space-y-3 text-left">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Préférence de système</label>
                                <select className="w-full h-14 bg-white/5 border border-white/10 rounded-sm px-6 text-sm focus:ring-2 focus:ring-[#0052ff] outline-none transition-all">
                                    <option className="bg-slate-900">Adoucissement</option>
                                    <option className="bg-slate-900">Filtration</option>
                                    <option className="bg-slate-900">Eau potable</option>
                                </select>
                            </div>
                            <Button 
                                className="bg-white text-slate-900 hover:bg-[#0052ff] hover:text-white h-14 rounded-full font-black uppercase tracking-widest text-[11px] transition-all"
                                onClick={() => navigate("/contact")}
                            >
                                PLANIFIER UNE CONSULTATION
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 7. Final Call to Action */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-6 max-w-4xl space-y-8">
                        <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Vous avez encore des questions ?</h3>
                        <p className="text-slate-500 text-lg">Nos experts sont disponibles pour discuter de votre projet et répondre à toutes vos interrogations techniques.</p>
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

export default WhyChooseUs;
