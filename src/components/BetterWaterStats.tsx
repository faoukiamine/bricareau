import { Shield, Award, Clock, ThumbsUp, Microscope, Lightbulb, Drill, Headset } from "lucide-react";

const stats = [
    {
        icon: Microscope,
        title: "Analyse de Précision",
        description: "Nous identifions la composition chimique et microbienne pour établir le profil exact de votre eau. Une base scientifique pour un résultat garanti."
    },
    {
        icon: Lightbulb,
        title: "Conseil Personnalisé",
        description: "Pas de solution générique. Nous sélectionnons la technologie adaptée à votre consommation pour maximiser vos économies."
    },
    {
        icon: Drill,
        title: "Installation Certifiée",
        description: "Mise en place propre et conforme aux normes. Nous calibrons votre appareil au milligramme près pour une efficacité immédiate."
    },
    {
        icon: Headset,
        title: "Suivi & Support",
        description: "Notre engagement continue après la pose. Profitez d'un SAV réactif pour une qualité d'eau constante, année après année."
    }
];

const BetterWaterStats = () => {
    return (
        <section className="bg-[#2563EB] py-16 md:py-20">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2
                        className="text-white tracking-tighter"
                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                    >
                        <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">La promesse d'une eau saine,</span>
                        <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block">de notre première rencontre à votre confort absolu.</span>
                    </h2>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="text-center space-y-6 p-8 rounded-[2rem] bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="flex justify-center">
                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                                        <Icon className="h-8 w-8 text-[#2563EB]" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl md:text-2xl font-bold text-white">
                                        {stat.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
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
