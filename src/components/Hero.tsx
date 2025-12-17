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
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop"
          alt="Water specialist"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
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

          {/* Right side - Booking form card */}
          <div className="lg:ml-auto w-full max-w-md">
            <Card className="shadow-2xl border-none">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-center">
                  Réservez votre test d'eau gratuit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Location input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Votre localisation
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Entrez votre code postal"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10 pr-24 h-12 text-base"
                    />
                    <Button
                      type="button"
                      variant="link"
                      size="sm"
                      onClick={handleGetLocation}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-[#2563EB] hover:text-[#2563EB]/80 font-medium"
                    >
                      Utiliser ma position
                    </Button>
                  </div>
                </div>

                {/* Date picker */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Date et heure préférées
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="datetime-local"
                      className="pl-10 h-12 text-base"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <Button
                  size="lg"
                  className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-semibold h-12 text-base"
                >
                  Planifiez mon test d'eau gratuit
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Aucune obligation • Consultation gratuite • Service rapide
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
