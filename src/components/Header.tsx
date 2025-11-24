import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
      {/* Top bar - Responsive design */}
      <div className="border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            {/* Mobile: Compact category links */}
            <div className="flex items-center gap-2 md:gap-6 text-xs md:text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary transition-colors font-medium">Résidentiel</a>
              <span className="text-muted-foreground/50">|</span>
              <a href="/entreprises" className="hover:text-primary transition-colors font-medium">Entreprise</a>
              <span className="text-muted-foreground/50">|</span>
              <a href="/commercial-industriel" className="hover:text-primary transition-colors font-medium whitespace-nowrap">Commercial & Industriel</a>
            </div>
            {/* Desktop: Contact info */}
            <div className="hidden md:flex items-center gap-4 text-muted-foreground">
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

          {/* Mobile menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 p-0 bg-background">
              <div className="flex flex-col h-full">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <a href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">B</span>
                      </div>
                      <span className="font-bold text-xl text-foreground">Bricareau</span>
                    </div>
                  </a>
                </div>

                {/* Category tabs - Mobile */}
                <div className="flex items-center justify-center gap-1 p-4 border-b border-border bg-secondary/20">
                  <a
                    href="/"
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-background rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Résidentiel
                  </a>
                  <span className="text-muted-foreground/30">|</span>
                  <a
                    href="/entreprises"
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-background rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Entreprise
                  </a>
                  <span className="text-muted-foreground/30">|</span>
                  <a
                    href="/commercial-industriel"
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-background rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Commercial
                  </a>
                </div>

                {/* Mobile navigation */}
                <nav className="flex flex-col p-6 space-y-1 overflow-y-auto flex-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  
                  {/* Mobile contact section */}
                  <div className="border-t border-border mt-6 pt-6 space-y-2">
                    <a
                      href="tel:18552649328"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Phone className="h-5 w-5" />
                      <span>1 855 264 9328</span>
                    </a>
                    <a
                      href="/contact-residentiel"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Mail className="h-5 w-5" />
                      <span>Contactez-nous</span>
                    </a>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </header>
  );
};

export default Header;
