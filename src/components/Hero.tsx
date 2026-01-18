import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [location, setLocation] = useState("");

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app, you'd reverse geocode these coordinates
          setLocation(`${position.coords.latitude.toFixed(2)}, ${position.coords.longitude.toFixed(2)}`);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation("Location access denied");
        }
      );
    }
  };

  return (
    <section className="relative w-full min-h-[600px] lg:h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1155585523?background=1&autoplay=1&loop=1&byline=0&title=0"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '105vw',
            height: '105vh',
            minHeight: '56.25vw',
            minWidth: '177.77vh',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover'
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Hero Video"
          className="pointer-events-none"
        ></iframe>
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
