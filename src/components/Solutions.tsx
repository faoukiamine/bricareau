import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Filter, Sparkles, Waves, Zap, Wine } from "lucide-react";

const solutions = [
  {
    icon: Droplets,
    title: "Adoucisseurs d'eau",
    description: "Notre adoucisseur d'eau offrira à votre famille une grande quantité d'eau propre et douce à volonté.",
    href: "#",
  },
  {
    icon: Sparkles,
    title: "Solutions d'eau potable",
    description: "Profitez d'une eau plus propre avec notre système de purification d'eau à osmose inverse à 6 étapes.",
    href: "#",
  },
  {
    icon: Filter,
    title: "Filtres d'eau spécialisés",
    description: "Nos filtres sont brillamment conçus pour résoudre vos problèmes spécifiques en matière d'eau.",
    href: "#",
  },
  {
    icon: Waves,
    title: "Filtration de l'eau de puits",
    description: "Nos systèmes de filtration aident à fournir une eau de qualité en provenance d'un puits artésien ou de surface.",
    href: "#",
  },
  {
    icon: Zap,
    title: "Systèmes de désinfection UV",
    description: "Utilisés pour la stérilisation contre les bactéries, les virus, les coliformes, l'E.Coli, le Cryptosporidium,...",
    href: "#",
  },
  {
    icon: Wine,
    title: "Fontaines d'eau",
    description: "Pratiques et économiques afin que vous puissiez profiter d'une eau fraîche au meilleur goût.",
    href: "#",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-12 md:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nos Solutions de Traitement d'Eau Résidentielles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardHeader>
                  <div className="mb-4 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm md:text-base leading-relaxed">
                    {solution.description}
                  </CardDescription>
                  <Button
                    variant="link"
                    className="px-0 text-primary hover:text-primary/80 font-medium"
                    asChild
                  >
                    <a href={solution.href}>
                      Voir plus →
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
