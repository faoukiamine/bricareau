import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import heroImage from "@/assets/23568974.png";

interface HeroProps {
  image?: string;
  highlightedTitle?: string;
  mainTitle?: string;
  subtitle?: string;
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
  highlightedTitle = "L'eau saine,",
  mainTitle = "que votre famille mérite.",
  subtitle = "Assurez-vous que l'eau de votre maison a une belle apparence, une bonne odeur et un bon goût, qu'elle provienne d'un système municipal ou d'un puits privé. Plus de 20 000 foyers canadiens ont confié leur eau à Bricareau.",
  ctaText = "Planifiez une consultation gratuite",
  ctaLink = "/consultation",
  showPhone = true,
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
          src={image || heroImage}
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
            
            <p 
              className="max-w-xl"
              style={{
                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontWeight: 300,
                color: 'rgb(71, 85, 105)',
                fontSize: '20px',
                lineHeight: '28px',
                fontStyle: 'normal'
              }}
            >
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild>
                <a href={ctaLink}>{ctaText}</a>
              </Button>
              
              {showPhone && (
                <Button
                  variant="outline"
                  asChild
                >
                  <a href="tel:18552649328" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
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
