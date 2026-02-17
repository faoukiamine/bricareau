import { Microscope, Lightbulb, Drill, Headset, ArrowRight } from "lucide-react";

const stats = [
    {
        icon: Microscope,
        title: "Analyse de Précision",
        description: "Nous identifions la composition chimique et microbienne pour établir le profil exact de votre eau. Une base scientifique pour un résultat garanti.",
        step: "01"
    },
    {
        icon: Lightbulb,
        title: "Conseil Personnalisé",
        description: "Pas de solution générique. Nous sélectionnons la technologie adaptée à votre consommation pour maximiser vos économies.",
        step: "02"
    },
    {
        icon: Drill,
        title: "Installation Certifiée",
        description: "Mise en place propre et conforme aux normes. Nous calibrons votre appareil au milligramme près pour une efficacité immédiate.",
        step: "03"
    },
    {
        icon: Headset,
        title: "Suivi & Support",
        description: "Notre engagement continue après la pose. Profitez d'un SAV réactif pour une qualité d'eau constante, année après année.",
        step: "04"
    }
];

const BetterWaterStats = () => {
    return (
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#0B2447] overflow-hidden">
            {/* Decorative Background Elements - Light Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
                    <span className="inline-block px-4 py-1.5 bg-blue-400/10 border border-blue-400/20 rounded-full text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                        L'Excellence Bricareau
                    </span>
                    <h2
                        className="text-white tracking-tighter"
                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                    >
                        <span className="text-[32px] md:text-[60px] font-light leading-tight md:leading-[1.1] block">
                            La promesse d'une eau saine,
                        </span>
                        <span className="text-[32px] md:text-[60px] font-bold leading-tight md:leading-[1.1] block text-white drop-shadow-sm">
                            de notre rencontre à votre confort.
                        </span>
                    </h2>
                    <div className="flex justify-center pt-8">
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-white/20 rounded-full"></div>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="group relative"
                            >
                                {/* Step Number in Background */}
                                <span className="absolute -top-6 -left-2 text-[100px] font-black text-white/[0.05] select-none pointer-events-none group-hover:text-blue-300/[0.08] transition-colors duration-500">
                                    {stat.step}
                                </span>

                                <div className="relative p-8 rounded-[2.5rem] bg-white/[0.04] border border-white/[0.1] backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.08] hover:border-blue-300/40 hover:-translate-y-2 flex flex-col h-full shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                                    <div className="mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-blue-900/40 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                            <Icon className="h-8 w-8 text-[#19376D]" />
                                        </div>
                                    </div>

                                    <div className="space-y-4 flex-grow">
                                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-blue-200 transition-colors">
                                            {stat.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-blue-100/70 leading-relaxed font-light text-justify">
                                            {stat.description}
                                        </p>
                                    </div>

                                    {/* Indicator */}
                                    <div className="mt-8 pt-6 border-t border-white/[0.1] flex items-center justify-between">
                                        <span className="text-[10px] font-black text-blue-300 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                            Étape {stat.step}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-white/[0.1] flex items-center justify-center group-hover:bg-white group-hover:shadow-lg transition-all">
                                            <ArrowRight className="h-4 w-4 text-white group-hover:text-[#19376D] group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                    </div>
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
