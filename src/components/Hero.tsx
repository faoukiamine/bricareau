import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://bricareau.com/wp-content/uploads/2025/03/7505283-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            <span className="text-primary">Protégez votre eau,</span>
            <br />
            <span className="text-primary">Protégez votre famille</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed max-w-xl">
            Assurez-vous que l'eau de votre maison a une belle apparence, une bonne odeur et un bon goût,
            qu'elle provienne d'un système municipal ou d'un puits privé.
          </p>

          <p className="text-sm md:text-base text-foreground/80">
            Plus que <span className="font-semibold text-primary">20000 foyers canadiens</span> ont confié
            le traitement d'eau de leurs foyers à Bricareau.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all group"
              asChild
            >
              <a href="#solutions">
                Explorez nos solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              asChild
            >
              <a href="#contact">Contactez-nous</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
