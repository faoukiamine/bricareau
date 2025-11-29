import { useState } from "react";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const mainNavigation = [
    { name: "Accueil", href: "/" },
    { 
      name: "Adoucissement de l'eau", 
      href: "/services#adoucissement",
      hasDropdown: false
    },
    { 
      name: "Filtration d'eau", 
      href: "/services#filtration",
      hasDropdown: false
    },
    { 
      name: "Solutions d'eau potable", 
      href: "/services#potable",
      hasDropdown: false
    },
    { 
      name: "Fontaines d'eau", 
      href: "/services#fontaines",
      hasDropdown: false
    },
    { 
      name: "Eau de puits", 
      href: "/services#puits",
      hasDropdown: false
    },
    { name: "Ressources", href: "/faq" },
    { name: "Support", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      {/* Top banner - Culligan style */}
      <div className="bg-top-banner text-top-banner-foreground">
        <div className="container mx-auto px-4 py-2.5 text-center">
          <p className="text-sm font-medium">
            Obtenez une consultation gratuite sur l'eau
          </p>
        </div>
      </div>

      {/* Secondary bar */}
      <div className="hidden lg:block border-b border-border bg-background">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <NavLink to="/" className="hover:text-primary transition-colors font-medium">
                Résidentiel
              </NavLink>
              <span className="text-muted-foreground/30">|</span>
              <NavLink to="/entreprises" className="hover:text-primary transition-colors font-medium">
                Entreprises
              </NavLink>
              <span className="text-muted-foreground/30">|</span>
              <NavLink to="/commercial-industriel" className="hover:text-primary transition-colors font-medium">
                Commercial & Industriel
              </NavLink>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:18552649328" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-medium">1 855 264 9328</span>
              </a>
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
                asChild
              >
                <a href="#localisation" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Trouver un emplacement</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center group">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-primary-foreground font-bold text-2xl">B</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-foreground leading-none">Bricareau</span>
                  <span className="text-xs text-muted-foreground italic">L'eau que vous aimez</span>
                </div>
              </div>
            </NavLink>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary/50"
                >
                  {item.name}
                </NavLink>
              ))}
              <Button 
                size="sm"
                className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                asChild
              >
                <NavLink to="/contact-residentiel">Contactez-nous</NavLink>
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {mainNavigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="border-t border-border mt-2 pt-4 space-y-3">
              <div className="px-4 space-y-2">
                <NavLink
                  to="/"
                  className="block py-2 text-sm font-medium text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Résidentiel
                </NavLink>
                <NavLink
                  to="/entreprises"
                  className="block py-2 text-sm font-medium text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Entreprises
                </NavLink>
                <NavLink
                  to="/commercial-industriel"
                  className="block py-2 text-sm font-medium text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Commercial & Industriel
                </NavLink>
              </div>
              <div className="border-t border-border pt-3 px-4">
                <a
                  href="tel:18552649328"
                  className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  <span>1 855 264 9328</span>
                </a>
              </div>
              <div className="px-4">
                <Button 
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                  asChild
                >
                  <NavLink to="/contact-residentiel" onClick={() => setIsMenuOpen(false)}>
                    Contactez-nous
                  </NavLink>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
