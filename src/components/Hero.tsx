import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import heroImage from "@/assets/23568974.png";
import { cn } from "@/lib/utils";

interface HeroProps {
  image?: string;
  highlightedTitle?: React.ReactNode;
  mainTitle?: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  showPhone?: boolean;
  showBreadcrumbs?: boolean;
  breadcrumbVariant?: "on-light" | "on-dark" | "light" | "dark";
  imageAlt?: string;
  badge?: string;
  singleLineTitle?: boolean;
  gradualOpacity75?: boolean;
  className?: string;
  imagePosition?: string;
  liveStatus?: boolean;
  customCTA?: React.ReactNode;
  homeVariant?: boolean;
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
  breadcrumbVariant = "on-light",
  imageAlt = "Solutions expertes en traitement d'eau résidentiel Bricareau",
  badge,
  singleLineTitle = false,
  gradualOpacity75 = true,
  className,
  imagePosition = "object-right",
  liveStatus = false,
  customCTA,
  homeVariant = false,
}: HeroProps) => {
  return (
    <section className={cn("relative bg-white overflow-hidden min-h-[85vh] lg:min-h-screen flex flex-col justify-center pt-24 pb-8 lg:pt-28 lg:pb-16 border-b border-slate-200", className)}>
      {showBreadcrumbs && (
        <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
          <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
            <GlobalBreadcrumbs variant={breadcrumbVariant} />
          </div>
        </div>
      )}

      {/* 1. Image Section */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Desktop Gradient: 1/4 solid white, fading to transparent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,white_25%,rgba(255,255,255,0)_75%)] z-10 hidden lg:block"></div>
        
        <div className="absolute right-0 top-0 w-full lg:w-[80%] h-full">
            <img
            src={image || heroImage}
            alt={imageAlt}
            className={cn(
              "absolute inset-0 w-full h-full object-cover object-bottom lg:object-center", 
              imagePosition
            )}
            />
        </div>
      </div>
      <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-0 hidden lg:block"></div>

      {/* 2. Content Section */}
      <div className="container relative z-10 mx-auto px-4 lg:px-12 lg:h-full flex flex-col items-start justify-center pt-24 pb-12 lg:pt-0 lg:pb-0">
        <div className="max-w-3xl space-y-8 text-left">
          <div className="space-y-6">
            {badge && (
              <div className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-[0.2em]",
                liveStatus 
                  ? "bg-green-50 border-green-100 text-green-600" 
                  : "bg-[#18448F]/10 border-[#18448F]/20 text-[#18448F]"
              )}>
                {liveStatus ? (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-[#18448F] animate-pulse" />
                )}
                {badge}
              </div>
            )}
            <h1 
              className={cn(
                "mb-6 animate-in fade-in slide-in-from-left duration-1000",
                homeVariant ? "tracking-tighter" : (singleLineTitle ? "max-w-4xl" : "max-w-[680px]"),
                !homeVariant && "text-[32px] md:text-[46px] lg:text-[50px] leading-[1.1]"
              )}
              style={homeVariant ? { fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontSize: '50px', lineHeight: '55px' } : {
                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontStyle: 'normal'
              }}
            >
              <span className={cn("italic font-light text-[#18448F]", !singleLineTitle && "block")}>{highlightedTitle}</span>
              <span className={cn("font-bold text-[#18448F]", !singleLineTitle && "block")}>{singleLineTitle && " "}{mainTitle}</span>
            </h1>
            
            <p 
              className={cn(
                "animate-in fade-in slide-in-from-left duration-1000 delay-100 text-justify lg:text-left",
                homeVariant ? "max-w-[680px] text-lg md:text-xl font-light text-slate-600 leading-relaxed" : "max-w-[680px] text-slate-500 text-[15px] md:text-lg leading-relaxed"
              )}
            >
              {subtitle}
            </p>

            {customCTA ? (
              <div className="pt-4">
                {customCTA}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-8 pt-6 animate-in fade-in slide-in-from-left duration-1000 delay-200 w-full sm:w-auto">
                <ProMaxButton 
                  asChild 
                  className="w-full sm:w-fit"
                >
                  <a href={ctaLink} className="inline-flex items-center justify-center gap-2">
                    {ctaText}
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                  </a>
                </ProMaxButton>
                
                {showPhone && (
                  <ProMaxButton
                    variant="white"
                    asChild
                    className="w-full sm:w-fit"
                  >
                    <a href="tel:18552649328" className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      1-855-264-9328
                    </a>
                  </ProMaxButton>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
