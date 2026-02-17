import heroImage from "@/assets/Gemini_Generated_Image_ct1u02ct1u02ct1u.png";
import { Button } from "@/components/ui/button";

const Hero = () => {

  return (
    <section className="relative w-full h-[800px] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Hero text */}
          <div className="space-y-6 text-white">
            <h1
              className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-bold"
              style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
            >
              Protégez votre eau, <span className="font-normal">protégez votre famille</span>
            </h1>

            <p className="text-lg font-light leading-relaxed text-white/95 max-w-xl text-justify">
              Assurez-vous que l’eau de votre maison a une belle apparence, une bonne odeur et un bon goût, qu’elle provienne d’un système municipal ou d’un puits privé.
            </p>
            <p className="text-lg font-light leading-relaxed text-white/95 max-w-xl text-justify">
              Plus de 20 000 foyers canadiens ont confié le traitement d’eau de leurs foyers à Bricareau.
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                asChild
              >
                <a href="#solutions-title">Explorer nos solutions</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white/10 rounded-full px-8 h-14"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                asChild
              >
                <a href="/diagnostic">Diagnostiquer mon eau</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
