import heroImage from "@/assets/Gemini_Generated_Image_ct1u02ct1u02ct1u.png";
import { Button } from "@/components/ui/button";

const Hero = () => {

  return (
    <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Solutions expertes en traitement d'eau résidentiel Bricareau pour une eau pure et saine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent z-10" />
        {/* Brightening Start 1/3 Right */}
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Hero text */}
          <div className="space-y-6 text-white">
            <h1
              className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl"
              style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
            >
              <span className="font-bold">L’eau saine que votre famille mérite.</span>
            </h1>

            <p className="text-lg font-light leading-snug text-white/95 max-w-xl text-justify">
              Assurez-vous que l’eau de votre maison a une belle apparence, une bonne odeur et un bon goût, qu’elle provienne d’un système municipal ou d’un puits privé.
              <br />
              Plus de 20 000 foyers canadiens ont confié le traitement d’eau de leurs foyers à Bricareau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200 w-full sm:w-auto"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                asChild
              >
                <a href="/adoucissement#consultation">Planifiez une consultation gratuite</a>
              </Button>
            </div>
          </div>
        </div>
      </div>


      {/* Wave Separator Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg
          className="relative block w-full h-[50px] md:h-[80px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#FFFFFF"
            transform="rotate(180 600 60)"
          ></path>
        </svg>
      </div>
    </section >
  );
};

export default Hero;
