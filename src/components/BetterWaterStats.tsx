import { Microscope, Lightbulb, Drill, Headset, ArrowRight, CheckCircle2 } from "lucide-react";

const stats = [
    {
        icon: Microscope,
        title: "Analyse de Précision",
        description: "Nous identifions la composition chimique et microbienne pour établir le profil exact de votre eau.",
        step: "01"
    },
    {
        icon: Lightbulb,
        title: "Conseil Personnalisé",
        description: "Pas de solution générique. Nous sélectionnons la technologie adaptée à votre consommation.",
        step: "02"
    },
    {
        icon: Drill,
        title: "Installation Certifiée",
        description: "Mise en place propre et conforme aux normes. Calibrage précis pour une efficacité immédiate.",
        step: "03"
    },
    {
        icon: Headset,
        title: "Suivi & Support",
        description: "Notre engagement continue. Profitez d'un SAV réactif pour une qualité d'eau constante.",
        step: "04"
    }
];

const BetterWaterStats = () => {
    return (
        <section className="relative py-24 md:py-32 bg-[#020617] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        L'Excellence Bricareau
                    </div>
                    <h2
                        className="text-white tracking-tighter"
                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                    >
                        <span className="text-[40px] md:text-[64px] font-light leading-[1.1] block text-white/90">
                            La promesse d'une eau saine,
                        </span>
                        <span className="text-[40px] md:text-[64px] font-bold leading-[1.1] block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                            de notre rencontre à votre confort.
                        </span>
                    </h2>
                </div>

                {/* Timeline Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-0" />

                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="relative group">
                                {/* Timeline Node */}
                                <div className="relative z-10 flex justify-center mb-8">
                                    <div className="w-20 h-20 rounded-2xl bg-[#0f172a] border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] group-hover:scale-110 group-hover:border-blue-400 group-hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)] transition-all duration-500">
                                        <Icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    {/* Vertical Line (Mobile) */}
                                    <div className="lg:hidden absolute top-20 bottom-[-3rem] w-[2px] bg-blue-500/20 last:hidden" />
                                </div>

                                {/* Content Card */}
                                <div className="text-center px-4 relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    <span className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3 block">
                                        Étape {stat.step}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                                        {stat.title}
                                    </h3>
                                    <p className="text-lg text-slate-400 leading-relaxed font-light">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BetterWaterStats;
