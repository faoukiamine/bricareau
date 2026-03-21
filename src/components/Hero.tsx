import heroImage from "@/assets/Gemini_Generated_Image_ct1u02ct1u02ct1u.png";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowRight } from "lucide-react";

const Hero = () => {

  return (
    <section className="relative lg:h-[650px] flex flex-col lg:flex-row lg:items-center overflow-hidden bg-white">
      {/* 1. Background Image Section */}
      <div className="relative lg:absolute lg:inset-0 h-[350px] sm:h-[450px] lg:h-full w-full lg:z-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Solutions expertes en traitement d'eau résidentiel Bricareau pour une eau pure et saine"
          className="w-full h-full object-cover lg:object-cover"
        />
        {/* Desktop Gradients */}
        <div className="hidden lg:block absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent z-10" />
        <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent z-10" />
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent z-10" />
      </div>

      {/* 2. Content Section */}
      <div className="container relative z-10 mx-auto px-4 py-10 sm:py-16 lg:py-20 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero text */}
          <div className="space-y-6 lg:text-white">
            <h1
              className="mb-4 lg:mb-8 tracking-tighter text-slate-900 lg:text-white text-left lg:text-justify max-w-xl"
              style={{
                fontWeight: 350
              }}
            >
              L’eau saine que votre famille mérite.
            </h1>

            <p className="font-light text-slate-600 lg:text-white/95 max-w-xl text-left lg:text-justify mb-4 lg:mb-0">
              Assurez-vous que l’eau de votre maison a une belle apparence, une bonne odeur et un bon goût, qu’elle provienne d’un système municipal ou d’un puits privé.
              <br className="hidden lg:block" />
              <span className="mt-4 block">Plus de 20 000 foyers canadiens ont confié le traitement d’eau de leurs foyers à Bricareau.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-100 lg:shadow-blue-200 w-full sm:w-auto flex items-center justify-center gap-2 group"
                asChild
              >
                <NavLink to="/consultation">
                  Planifiez une consultation gratuite
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
