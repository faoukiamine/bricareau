import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/95 text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-xl text-background">Bricareau</span>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Spécialiste du traitement d'eau au Canada depuis plus de 20 ans.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-background/70 hover:text-background transition-colors">
                  Traitement d'eau Résidentiel
                </a>
              </li>
              <li>
                <a href="/entreprises" className="text-background/70 hover:text-background transition-colors">
                  Traitement d'eau Entreprises & Bureaux
                </a>
              </li>
              <li>
                <a href="/commercial-industriel" className="text-background/70 hover:text-background transition-colors">
                  Traitement d'eau Commercial & Industriel
                </a>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">Connectez-vous avec nous</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/bricareauwaterspecialist"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-background" />
              </a>
              <a
                href="https://x.com/Bricareau"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-background" />
              </a>
              <a
                href="http://www.youtube.com/bricareau"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5 text-background" />
              </a>
              <a
                href="http://www.instagram.com/bricareau"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-background" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/70">
            Copyright © 2025 Bricareau Water Specialist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
