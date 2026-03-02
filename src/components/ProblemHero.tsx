import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, FlaskConical, Sparkles, ShieldAlert, Biohazard, Check } from "lucide-react";
import rouilleThumb from "@/assets/rouille_thumb.jpg";
import rottenEggsThumb from "@/assets/Water_Smells_Like_Rotten_Eggs_1400x.webp";
import waterTasteThumb from "@/assets/water-taste.jpg";
import turbideWaterThumb from "@/assets/Turbide-Water.webp";
import hardWaterThumb from "@/assets/detartrage-chauffe-eau-electrique.jpg";

const problems = [
    {
        id: "calcaire",
        title: "Eau Dure & Calcaire",
        desc: "L'eau dure laisse des dépôts blancs tenaces, entartre vos électroménagers et assèche votre peau.",
        solution: "Nos adoucisseurs éliminent 100% du calcaire pour une protection totale.",
        img: hardWaterThumb,
        icon: Sparkles
    },
    {
        id: "fer",
        title: "Fer & Rouille",
        desc: "Les taches oranges dans la douche et la toilette sont signes d'une présence de fer.",
        solution: "Nos filtres spécialisés oxydent et captent le fer avant qu'il ne tache.",
        img: rouilleThumb,
        icon: ShieldAlert
    },
    {
        id: "odeur",
        title: "Odeur d'Oeufs",
        desc: "Cette odeur désagréable est causée par le soufre gazeux dissous dans votre eau.",
        solution: "Nos systèmes d'aération ou au peroxyde neutralisent le soufre instantanément.",
        img: rottenEggsThumb,
        icon: Biohazard
    },
    {
        id: "gout",
        title: "Mauvais Goût",
        desc: "Chlore, terre, ou goût métallique ? Ne buvez plus une eau qui ne vous plaît pas.",
        solution: "La filtration au charbon actif ou l'osmose inverse redonne un goût pur.",
        img: waterTasteThumb,
        icon: FlaskConical
    },
    {
        id: "trouble",
        title: "Eau Trouble",
        desc: "L'eau brouillée ou colorée contient des sédiments ou de la matière organique.",
        solution: "Des filtres à sédiments multi-couches clarifient l'eau parfaitement.",
        img: turbideWaterThumb,
        icon: Droplets
    }
];

const ProblemHero = () => {
    const [activeTab, setActiveTab] = useState(problems[0].id);
    const activeProblem = problems.find(p => p.id === activeTab) || problems[0];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-[300px] bg-slate-100/50 -skew-y-3 origin-top-left -translate-y-20 transform z-0" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Centered */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                        Diagnostic Interactif
                    </span>
                    <h2
                        className="text-slate-900 tracking-tighter mb-6"
                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                    >
                        <span className="text-[40px] md:text-[56px] font-bold leading-[1.1] block">Identifiez votre problème</span>
                        <span className="text-[40px] md:text-[56px] font-light leading-[1.1] block text-slate-500">nous avons la solution.</span>
                    </h2>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {problems.map((item) => {
                        const isActive = activeTab === item.id;
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`
                                    flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 md:text-base
                                    ${isActive
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                                        : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"}
                                `}
                            >
                                <Icon className={`w-4 h-4 ${isActive ? "text-blue-100" : "text-slate-400"}`} />
                                {item.title}
                            </button>
                        );
                    })}
                </div>

                {/* content Card */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Main Card */}
                    <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[500px] animate-in fade-in zoom-in-95 duration-500 key={activeTab}">

                        {/* Image Side */}
                        <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
                            <img
                                src={activeProblem.img}
                                alt={`${activeProblem.title} - Problème de qualité d'eau identifié par Bricareau`}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60 opacity-60" />
                        </div>

                        {/* Text Side */}
                        <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative">
                            {/* Decorative large icon */}
                            <activeProblem.icon className="absolute top-8 right-8 w-32 h-32 text-slate-50 -rotate-12 pointer-events-none" />

                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 relative z-10">
                                {activeProblem.title}
                            </h3>

                            <div className="space-y-6 relative z-10 mb-8">
                                <div>
                                    <span className="text-xs font-bold text-red-500 uppercase tracking-wide mb-1 block">Le Problème</span>
                                    <p className="text-lg text-slate-600 leading-snug">
                                        {activeProblem.desc}
                                    </p>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2 block flex items-center gap-2">
                                        <Check className="w-3 h-3" /> La Solution Bricareau
                                    </span>
                                    <p className="text-lg font-medium text-slate-800">
                                        {activeProblem.solution}
                                    </p>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-14 w-full md:w-auto self-start z-10 shadow-lg"
                                asChild
                            >
                                <a href="/consultation" className="flex items-center justify-center gap-2">
                                    Obtenir cette solution
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProblemHero;
