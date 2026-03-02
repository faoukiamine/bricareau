import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const problems = [
  "Chlore",
  "Dureté",
  "Fer",
  "Manganèse",
  "Mauvais goût",
  "Odeur des oeufs pourris",
  "Plomb",
  "Sédiments",
  "Sels dissous",
  "Sulfure d'hydrogène",
  "Tannins",
  "Turbidité",
];

const WaterProblems = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Problèmes d'eau
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
              Épargnez-vous les maux de tête et confiez le traitement de l'eau à nos Spécialistes
            </h3>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-snug">
            Vous vous inquiétez de la qualité de votre eau potable, de tâches de rouille dans votre baignoire 
            ou d'une odeur des œufs pourris lorsque vous prenez votre douche ?
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-4">
            {problems.map((problem, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm md:text-base font-medium bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              >
                {problem}
              </Badge>
            ))}
          </div>

          <div className="pt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
              asChild
            >
              <a href="#contact">Cédulez une consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterProblems;
