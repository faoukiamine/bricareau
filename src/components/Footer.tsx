import { useState } from "react";
import { Facebook, Twitter, Youtube, Instagram, Mail, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import logoBricareau from "@/assets/Logo Bricareau.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Veuillez entrer une adresse courriel valide.");
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.functions.invoke("newsletter-subscribe", {
        body: { email },
      });

      if (error) throw error;

      toast.success("Votre inscription a été enregistrée avec succès !");
      setEmail("");
    } catch (err: any) {
      console.error("Newsletter error:", err);
      toast.error("Une erreur s'est produite lors de l'inscription.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-[#18448F] text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto] gap-x-8 md:gap-x-12 gap-y-8 mb-12">
          {/* Logo and tagline - spans both rows */}
          <div className="space-y-4 lg:row-span-2">
            <div className="flex items-center gap-2">
              <img
                src={logoBricareau}
                alt="Bricareau Water Specialist - Spécialiste du traitement d'eau au Canada"
                className="h-10 md:h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Bricareau est votre expert en traitement d'eau et filtration au Québec depuis plus de 20 ans. Que ce soit pour l'installation d'un adoucisseur d'eau, d'un système d'osmose inverse, de la filtration de l'eau de puits ou de la désinfection UV, nous offrons des solutions complètes adaptées aux besoins résidentiels, commerciaux et industriels. Faites confiance à nos spécialistes certifiés pour une eau pure, saine et de qualité supérieure partout au Québec.
            </p>
          </div>

          {/* Résidentiel - Row 1 */}
          <div>
            <h3 className="mb-6 text-white font-bold text-base uppercase tracking-wider">Résidentiel</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/tests-eau" className="text-white/80 hover:text-white transition-colors">
                  Analyses & Tests d'eau
                </a>
              </li>
              <li>
                <a href="/A" className="text-white/80 hover:text-white transition-colors">
                  Adoucisseurs d'eau Résidentiels
                </a>
              </li>
              <li>
                <a href="/B" className="text-white/80 hover:text-white transition-colors">
                  Filtres d'eau spécialisés
                </a>
              </li>
              <li>
                <a href="/C" className="text-white/80 hover:text-white transition-colors">
                  Systèmes de filtration sous évier
                </a>
              </li>
              <li>
                <a href="/systemes-de-desinfection-uv" className="text-white/80 hover:text-white transition-colors">
                  Systèmes de désinfection UV
                </a>
              </li>
              <li>
                <a href="/fontaines" className="text-white/80 hover:text-white transition-colors">
                  Fontaines et refroidisseurs
                </a>
              </li>
            </ul>
          </div>

          {/* Bureau - Row 1 */}
          <div>
            <h3 className="mb-6 text-white font-bold text-base uppercase tracking-wider">Bureau</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/fontaines-deau-modernes" className="text-white/80 hover:text-white transition-colors">
                  Fontaines d'Eau Modernes
                </a>
              </li>
              <li>
                <a href="/systemes-centralises" className="text-white/80 hover:text-white transition-colors">
                  Systèmes Centralisés
                </a>
              </li>
            </ul>
          </div>

          {/* Hôtellerie - spans both rows */}
          <div className="lg:row-span-2">
            <h3 className="mb-6 text-white font-bold text-base uppercase tracking-wider">Hôtellerie et restauration</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/adoucisseurs-eau-commerciaux" className="text-white/80 hover:text-white transition-colors">
                  Adoucisseur d'eau commercial
                </a>
              </li>
              <li>
                <a href="/filtration-hotels-restaurants" className="text-white/80 hover:text-white transition-colors">
                  Filtration d'eau pour hôtels et restaurants
                </a>
              </li>
              <li>
                <a href="/solutions-brasseries" className="text-white/80 hover:text-white transition-colors">
                  Solutions pour Brasseries
                </a>
              </li>
              <li>
                <a href="/filtres-eau-machine-cafe" className="text-white/80 hover:text-white transition-colors">
                  Filtres pour Machines à Café
                </a>
              </li>
            </ul>
          </div>

          {/* Commercial & Industriel - Row 2, under Résidentiel */}
          <div>
            <h3 className="mb-6 text-white font-bold text-base uppercase tracking-wider">Commercial & Industriel</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/filtration-industrielle" className="text-white/80 hover:text-white transition-colors">
                  Systèmes de filtration industriels
                </a>
              </li>
              <li>
                <a href="/adoucisseurs-eau-industriel" className="text-white/80 hover:text-white transition-colors">
                  Adoucisseurs d'eau industriels
                </a>
              </li>
              <li>
                <a href="/osmose-inverse-industrielle" className="text-white/80 hover:text-white transition-colors">
                  Systèmes d'osmose inverse
                </a>
              </li>
              <li>
                <a href="/desinfection-uv-industrielle" className="text-white/80 hover:text-white transition-colors">
                  Systèmes de désinfection UV à haut débit
                </a>
              </li>
            </ul>
          </div>

          {/* Restez informé - Row 2, under Bureau */}
          <div>
            <h3 className="mb-6 text-white font-bold text-base uppercase tracking-wider">Restez informé</h3>
            <p className="text-sm text-white/80 mb-4">
              Inscrivez-vous à notre infolettre pour recevoir des conseils et offres exclusives
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50"
                  disabled={isLoading}
                  required
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-white text-[#18448F] hover:bg-white/90 shrink-0"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-[10px] text-white/50 leading-tight">
                En m'inscrivant, j'accepte la <Link to="/politique-de-confidentialite" className="underline">politique de confidentialité</Link>.
              </p>
            </form>
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
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
              <Link to="/politique-de-confidentialite" className="hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/conditions-generales-utilisation" className="hover:text-white transition-colors">
                Conditions d'utilisation
              </Link>
              <Link to="/desabonnement" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
                se désabonner
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center">
          <p className="text-sm text-white/70">
            Copyright © 2026 Bricareau Water Specialist. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
