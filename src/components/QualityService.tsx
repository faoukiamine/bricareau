import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Wrench, Settings, Headphones } from "lucide-react";

const features = [
    {
        icon: CheckCircle2,
        title: "Produits de qualité",
        description: "Nous offrons uniquement des produits certifiés et de haute qualité",
        points: [
            "Certifications NSF/ANSI",
            "Garantie fabricant étendue",
            "Technologies éprouvées"
        ]
    },
    {
        icon: Wrench,
        title: "Service expert",
        description: "Notre équipe de spécialistes certifiés assure une installation parfaite",
        points: [
            "Techniciens certifiés",
            "Installation professionnelle",
            "Formation complète"
        ]
    },
    {
        icon: Settings,
        title: "Solutions personnalisées",
        description: "Chaque système est adapté à vos besoins spécifiques",
        points: [
            "Analyse d'eau gratuite",
            "Recommandations sur mesure",
            "Configuration optimale"
        ]
    },
    {
        icon: Headphones,
        title: "Support continu",
        description: "Un accompagnement tout au long de la vie de votre système",
        points: [
            "Service après-vente",
            "Maintenance préventive",
            "Support technique 24/7"
        ]
    }
];

const QualityService = () => {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2
                        className="text-foreground tracking-tighter"
                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                    >
                        <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">Qualité inégalée.</span>
                        <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block">Service inoubliable.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-snug max-w-3xl mx-auto">
                        Nous nous engageons à fournir les meilleures solutions de traitement d'eau avec un service exceptionnel
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={index}
                                className="border-border hover:shadow-lg transition-shadow bg-white"
                            >
                                <CardContent className="p-8 space-y-4">
                                    <div className="w-14 h-14 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                                        <Icon className="h-7 w-7 text-[#2563EB]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">
                                        {feature.title}
                                    </h3>
                                    <p className="text-base text-muted-foreground leading-snug">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-2 pt-2">
                                        {feature.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                                                <CheckCircle2 className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default QualityService;
