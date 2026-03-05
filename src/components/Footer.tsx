import { Facebook, Twitter, Youtube, Instagram, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#2563EB] text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Bricareau Water Specialist - Spécialiste du traitement d'eau au Canada"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/80 leading-snug">
              Spécialiste du traitement d'eau au Canada depuis plus de 20 ans.
              Votre partenaire de confiance pour une eau de qualité supérieure.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Nos Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/adoucisseurs" className="text-white/80 hover:text-white transition-colors">
                  Adoucisseurs d'eau
                </a>
              </li>
              <li>
                <a href="/services#filtration" className="text-white/80 hover:text-white transition-colors">
                  Filtration d'eau
                </a>
              </li>
              <li>
                <a href="/services#osmose" className="text-white/80 hover:text-white transition-colors">
                  Osmose inverse
                </a>
              </li>
              <li>
                <a href="/eau-de-puits" className="text-white/80 hover:text-white transition-colors">
                  Traitement eau de puits
                </a>
              </li>
              <li>
                <a href="/services#fontaines" className="text-white/80 hover:text-white transition-colors">
                  Fontaines d'eau
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-white/80 hover:text-white transition-colors">
                  Résidentiel
                </a>
              </li>
              <li>
                <a href="/entreprises" className="text-white/80 hover:text-white transition-colors">
                  Entreprises
                </a>
              </li>
              <li>
                <a href="/commercial-industriel" className="text-white/80 hover:text-white transition-colors">
                  Commercial & Industriel
                </a>
              </li>
              <li>
                <a href="/tests-eau" className="text-white/80 hover:text-white transition-colors">
                  Tests d'eau
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Restez informé</h3>
            <p className="text-sm text-white/80 mb-4">
              Inscrivez-vous à notre infolettre pour recevoir des conseils et offres exclusives
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50"
              />
              <Button
                size="icon"
                className="bg-white text-[#2563EB] hover:bg-white/90 shrink-0"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/bricareauwaterspecialist"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://x.com/Bricareau"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="http://www.youtube.com/bricareau"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5 text-white" />
              </a>
              <a
                href="http://www.instagram.com/bricareau"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <a href="/faq" className="hover:text-white transition-colors">
                FAQ
              </a>
              <a href="/about" className="hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center">
          <p className="text-sm text-white/70">
            Copyright © 2025 Bricareau Water Specialist. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
