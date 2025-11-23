import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Test d'eau", href: "/water-testing" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top bar - hidden on mobile */}
      <div className="hidden md:block border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <a href="/" className="hover:text-primary transition-colors">Résidentiel</a>
              <span className="text-muted-foreground/50">|</span>
              <a href="/entreprises" className="hover:text-primary transition-colors">Entreprise</a>
              <span className="text-muted-foreground/50">|</span>
              <a href="/commercial-industriel" className="hover:text-primary transition-colors">Commercial & Industriel</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:18552649328" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-3 w-3" />
                <span>1 855 264 9328</span>
              </a>
              <a href="/contact-residentiel" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-3 w-3" />
                <span>Contactez-nous</span>
              </a>
              <a href="#localisation" className="flex items-center gap-2 hover:text-primary transition-colors">
                <MapPin className="h-3 w-3" />
                <span>Localisation</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg md:text-xl">B</span>
              </div>
              <span className="font-bold text-xl md:text-2xl text-foreground">Bricareau</span>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary/50"
              >
                {item.name}
              </a>
            ))}
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-border mt-2 pt-2 space-y-2">
              <a
                href="tel:18552649328"
                className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>1 855 264 9328</span>
              </a>
              <a
                href="/contact-residentiel"
                className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>Contactez-nous</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
