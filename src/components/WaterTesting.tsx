import { Button } from "@/components/ui/button";
import { TestTube } from "lucide-react";

const WaterTesting = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full mb-4">
            <TestTube className="h-8 w-8 md:h-10 md:w-10 text-primary" />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Tests de la qualité de l'eau
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
              Vous êtes préoccupés par la qualité de votre eau ?
            </h3>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-snug">
            Procurez-vous notre kit de test d'eau et renvoyez-le-nous ! Nous réaliserons des analyses 
            d'eau approfondies et vous recommanderons des solutions selon la composition de votre eau.
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
            asChild
          >
            <a href="#test">Testez votre eau aujourd'hui !</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WaterTesting;
