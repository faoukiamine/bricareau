import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import heroImage from "@/assets/23568974.png";
import { cn } from "@/lib/utils";

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
  gradualOpacity75?: boolean;
  className?: string;
  imagePosition?: string;
  liveStatus?: boolean;
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
  singleLineTitle = false,
  gradualOpacity75 = true,
  className,
  imagePosition = "object-right",
  liveStatus = false
}: HeroProps) => {
  return (
    <section className={cn("relative lg:h-[800px] flex flex-col overflow-hidden bg-white", className)}>
      {showBreadcrumbs && (
        <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
          <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
            <GlobalBreadcrumbs variant="light" />
          </div>
        </div>
      )}

      {/* 1. Image Section - Stacked on Mobile/Tablet Portrait, Overlay on Desktop */}
      <div className="relative lg:absolute lg:inset-0 w-full h-[400px] md:h-[550px] lg:h-full z-0 overflow-hidden">
        <div className={cn(
          "absolute inset-0 z-10 transition-opacity duration-1000",
          gradualOpacity75 
            ? "bg-gradient-to-b from-transparent to-white lg:bg-gradient-to-r lg:from-[#f0f9ff] lg:via-[#f0f9ff]/40 lg:to-transparent lg:35%" 
            : "bg-gradient-to-b from-transparent to-white lg:bg-gradient-to-r lg:from-[#f0f9ff] lg:via-[#f0f9ff]/80 lg:to-transparent"
        )} />
        <img
          src={image || heroImage}
          alt={imageAlt}
          className={cn("w-full h-full object-cover", imagePosition)}
        />
      </div>

      {/* 2. Content Section */}
      <div className="container relative z-10 mx-auto px-4 lg:h-full flex flex-col items-start justify-center pt-16 pb-24 lg:pt-0 lg:pb-0">
        <div className="max-w-3xl space-y-8 text-left">
          <div className="space-y-6">
            {badge && (
              <div className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-[0.2em]",
                liveStatus 
                  ? "bg-green-50 border-green-100 text-green-600" 
                  : "bg-[#2563eb]/10 border-[#2563eb]/20 text-[#2563eb]"
              )}>
                {liveStatus ? (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
                )}
                {badge}
              </div>
            )}
            <h1 
              className="text-[32px] md:text-[46px] lg:text-[50px] leading-[1.1] mb-12 max-w-xl animate-in fade-in slide-in-from-left duration-1000"
              style={{
                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontStyle: 'normal'
              }}
            >
              <span className="italic font-light text-[#2563eb]">{highlightedTitle}</span>
              <br />
              <span className="font-bold text-[#1e3a8a]">{mainTitle}</span>
            </h1>
            
            <p 
              className="max-w-xl animate-in fade-in slide-in-from-left duration-1000 delay-100 text-lg"
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

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 animate-in fade-in slide-in-from-left duration-1000 delay-200">
              <Button asChild className="w-fit">
                <a href={ctaLink}>{ctaText}</a>
              </Button>
              
              {showPhone && (
                <Button
                  variant="outline"
                  asChild
                  className="w-fit"
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
