import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Search, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Test d'eau", href: "/water-testing" },
    { name: "FAQ", href: "/faq" },
  ];

  const menuSections = [
    { 
      title: "Filtration d'eau", 
      items: [
        { name: "Accueil", href: "/" },
        { name: "Services", href: "/services" },
      ]
    },
    { 
      title: "Distributeurs d'eau & glace", 
      items: [
        { name: "Test d'eau", href: "/water-testing" },
      ]
    },
    { 
      title: "Eau de puits", 
      items: [
        { name: "À propos", href: "/about" },
      ]
    },
    { 
      title: "Ressources", 
      items: [
        { name: "FAQ", href: "/faq" },
      ]
    },
    { 
      title: "Support", 
      items: [
        { name: "Contact", href: "/contact-residentiel" },
      ]
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background shadow-sm">
      {/* Green CTA Bar - Mobile Only */}
      <div className="lg:hidden bg-[hsl(145,73%,67%)] text-[hsl(147,50%,15%)]">
        <a 
          href="/contact-residentiel" 
          className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium hover:bg-[hsl(145,73%,60%)] transition-colors"
        >
          <span>Commencez avec une consultation gratuite</span>
          <span>→</span>
        </a>
      </div>

      {/* Top bar - Desktop only */}
      <div className="hidden lg:block border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary transition-colors font-medium">Résidentiel</a>
              <span className="text-muted-foreground/50">|</span>
              <a href="/entreprises" className="hover:text-primary transition-colors font-medium">Entreprise</a>
              <span className="text-muted-foreground/50">|</span>
              <a href="/commercial-industriel" className="hover:text-primary transition-colors font-medium whitespace-nowrap">Commercial & Industriel</a>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
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

          {/* Mobile: Header icons + Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10" asChild>
              <a href="tel:18552649328">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <MapPin className="h-5 w-5" />
            </Button>
            
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full p-0 bg-background flex flex-col">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                  <a href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">B</span>
                      </div>
                      <span className="font-bold text-xl text-foreground">Bricareau</span>
                    </div>
                  </a>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-10 w-10">
                      <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-10 w-10" asChild>
                      <a href="tel:18552649328">
                        <Phone className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-10 w-10">
                      <MapPin className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Accordion navigation */}
                <div className="flex-1 overflow-y-auto">
                  <Accordion type="single" collapsible className="w-full">
                    {menuSections.map((section, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                        <AccordionTrigger className="px-6 py-4 text-base font-medium hover:no-underline hover:bg-secondary/20">
                          {section.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="flex flex-col gap-2">
                            {section.items.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Bottom section: Category tabs */}
                <div className="border-t border-border p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <a
                      href="/"
                      className="font-medium text-primary border-b-2 border-primary pb-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Résidentiel
                    </a>
                    <span className="text-muted-foreground/30">|</span>
                    <a
                      href="/entreprises"
                      className="font-medium text-muted-foreground hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Entreprise
                    </a>
                    <span className="text-muted-foreground/30">|</span>
                    <a
                      href="/commercial-industriel"
                      className="font-medium text-muted-foreground hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Commercial
                    </a>
                    <span className="text-muted-foreground/30">|</span>
                    <a
                      href="/about"
                      className="font-medium text-muted-foreground hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Découvrir Bricareau
                    </a>
                  </div>

                  {/* Language switcher */}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-primary border-b-2 border-primary pb-1">Français</span>
                    <span className="text-muted-foreground/30">|</span>
                    <span className="text-muted-foreground">English</span>
                  </div>

                  {/* Call CTA */}
                  <a
                    href="tel:18552649328"
                    className="flex items-center gap-2 text-primary text-base font-medium"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Appelez 1 855 264 9328</span>
                  </a>
                </div>

                {/* Floating action button */}
                <Button
                  size="icon"
                  className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary shadow-lg hover:shadow-xl z-50"
                  asChild
                >
                  <a href="/contact-residentiel">
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
