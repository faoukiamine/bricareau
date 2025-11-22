import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Contactez-nous
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Informations de contact
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    N'hésitez pas à nous contacter par téléphone, email ou en remplissant 
                    le formulaire. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                      <a href="tel:18552649328" className="text-muted-foreground hover:text-primary transition-colors">
                        1 855 264 9328
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@bricareau.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@bricareau.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Service disponible partout au Canada
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Heures d'ouverture</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lundi - Vendredi: 8h00 - 18h00</p>
                        <p>Samedi: 9h00 - 17h00</p>
                        <p>Dimanche: Sur rendez-vous</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Envoyez-nous un message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        Prénom
                      </label>
                      <Input id="firstName" placeholder="Votre prénom" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Nom
                      </label>
                      <Input id="lastName" placeholder="Votre nom" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="votre@email.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Téléphone
                    </label>
                    <Input id="phone" type="tel" placeholder="(xxx) xxx-xxxx" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Sujet
                    </label>
                    <Input id="subject" placeholder="Comment pouvons-nous vous aider ?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre besoin..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Envoyer le message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
