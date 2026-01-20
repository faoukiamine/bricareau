import { Button } from "@/components/ui/button";
import heroVideo from "../assets/hero-uhd_3840_2160_30fps.mp4";

const Hero = () => {

  return (
    <section className="relative w-full min-h-[600px] lg:h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-[51%] min-w-[105%] min-h-[105%] object-[25%_center] md:object-center object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Hero text */}
          <div className="space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Profitez d'une meilleure eau dans toute votre maison
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              Des solutions de traitement d'eau personnalisées pour votre famille
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white shadow-lg hover:shadow-xl transition-all font-semibold"
                asChild
              >
                <a href="#solutions">
                  Explorez nos solutions
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
