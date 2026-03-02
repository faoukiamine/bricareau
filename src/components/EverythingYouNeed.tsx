import { Droplet, Truck, Shield, Users } from "lucide-react";

const features = [
    {
        icon: Droplet,
        title: "Eau de qualité supérieure",
        description: "Profitez d'une eau pure et saine pour toute votre famille"
    },
    {
        icon: Truck,
        title: "Livraison et installation",
        description: "Service complet de la livraison à l'installation professionnelle"
    },
    {
        icon: Shield,
        title: "Garantie étendue",
        description: "Protection complète pour votre tranquillité d'esprit"
    },
    {
        icon: Users,
        title: "Support expert",
        description: "Une équipe dédiée à votre service 24/7"
    }
];

const EverythingYouNeed = () => {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Tout ce dont vous avez besoin pour une eau plus propre
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Des solutions complètes pour garantir la meilleure qualité d'eau dans votre maison
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="text-center space-y-4 p-6 rounded-xl bg-white hover:shadow-lg transition-shadow"
                            >
                                <div className="flex justify-center">
                                    <div className="w-16 h-16 rounded-full bg-[#2563EB]/10 flex items-center justify-center">
                                        <Icon className="h-8 w-8 text-[#2563EB]" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-snug">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EverythingYouNeed;
