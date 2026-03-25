import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";

interface HeroProps {
  image: string;
  highlightedTitle: string;
  mainTitle: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  showPhone?: boolean;
  showBreadcrumbs?: boolean;
  imageAlt?: string;
  badge?: string;
  singleLineTitle?: boolean;
}

const Hero = ({
  image,
  highlightedTitle,
  mainTitle,
  subtitle,
  ctaText = "Planifiez une consultation gratuite",
  ctaLink = "/consultation",
  showPhone = false,
  showBreadcrumbs = false,
  imageAlt = "Solutions expertes en traitement d'eau résidentiel Bricareau",
  badge,
  singleLineTitle = false
}: HeroProps) => {
  return (
    <section className="relative lg:h-[800px] flex flex-col items-center overflow-hidden bg-white">
      {showBreadcrumbs && (
        <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
          <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
            <GlobalBreadcrumbs variant="dark" />
          </div>
        </div>
      )}

      {/* 1. Background Image Section with Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0f9ff] via-[#f0f9ff]/80 to-transparent z-10" />
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-right opacity-60"
        />
      </div>

      {/* 2. Content Section */}
      <div className="container relative z-10 mx-auto px-4 h-full flex items-center pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="max-w-3xl space-y-8 text-left">
          <div className="space-y-6">
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 text-[#2563eb] text-sm font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
                {badge}
              </div>
            )}
            <h1 
              className="text-4xl sm:text-5xl lg:text-[70px] font-[800] text-[#1e3a8a] leading-tight lg:leading-[70px] tracking-tight"
              style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
            >
              <span className="italic font-light text-[#2563eb]">{highlightedTitle}</span>{singleLineTitle ? " " : <br />} {mainTitle}
            </h1>
            
            <p className="font-light text-[#1e3a8a]/80 text-lg lg:text-xl max-w-xl leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild variant="outline" className="bg-[#2563eb] border-[#2563eb] text-white hover:bg-white hover:text-[#2563eb] h-14 px-10 rounded-full text-lg cursor-pointer font-bold">
                <a href={ctaLink}>{ctaText}</a>
              </Button>
              
              {showPhone && (
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-[#2563eb] border-[#2563eb] text-white hover:bg-white hover:text-[#2563eb] h-14 px-10 rounded-full text-lg cursor-pointer font-bold"
                  asChild
                >
                  <a href="tel:18552649328" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    1-855-264-9328
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
