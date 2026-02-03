import { Shield, Award, Clock, ThumbsUp } from "lucide-react";

const stats = [
    {
        icon: Shield,
        title: "Qualité garantie",
        description: "Produits certifiés et testés pour votre sécurité"
    },
    {
        icon: Award,
        title: "Excellence reconnue",
        description: "Leader du traitement d'eau depuis plus de 20 ans"
    },
    {
        icon: Clock,
        title: "Service rapide",
        description: "Installation en 24-48h partout au Canada"
    },
    {
        icon: ThumbsUp,
        title: "Satisfaction client",
        description: "Plus de 20 000 foyers satisfaits"
    }
];

const BetterWaterStats = () => {
    return (
        <section className="bg-slate-900 py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2
                        className="text-white tracking-tighter"
                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                    >
                        <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">Une meilleure eau,</span>
                        <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block">garantie</span>
                    </h2>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="text-center space-y-4 p-6 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                            >
                                <div className="flex justify-center">
                                    <div className="w-16 h-16 rounded-full bg-[#2563EB]/20 flex items-center justify-center">
                                        <Icon className="h-8 w-8 text-[#2563EB]" />
                                    </div>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">
                                    {stat.title}
                                </h3>
                                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BetterWaterStats;
