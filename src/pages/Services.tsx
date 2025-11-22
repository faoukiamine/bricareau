import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Solutions from "@/components/Solutions";
import { Building, Home, Factory } from "lucide-react";

const Services = () => {
  const serviceTypes = [
    {
      icon: Home,
      title: "Résidentiel",
      description: "Solutions complètes pour votre maison et votre famille",
      features: [
        "Adoucisseurs d'eau",
        "Systèmes de filtration",
        "Purificateurs UV",
        "Fontaines d'eau",
        "Traitement d'eau de puits"
      ]
    },
    {
      icon: Building,
      title: "Commercial",
      description: "Équipements adaptés pour bureaux, restaurants et commerces",
      features: [
        "Systèmes haute capacité",
        "Filtration professionnelle",
        "Maintenance préventive",
        "Solutions sur mesure",
        "Service 24/7"
      ]
    },
    {
      icon: Factory,
      title: "Industriel",
      description: "Solutions robustes pour industries et grandes installations",
      features: [
        "Traitement grande échelle",
        "Systèmes personnalisés",
        "Analyse complète",
        "Installation certifiée",
        "Support technique dédié"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Nos Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Des solutions de traitement d'eau pour tous vos besoins
              </p>
            </div>
          </div>
        </section>

        {/* Service Types */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {serviceTypes.map((service, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow"
                >
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <Solutions />

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Besoin d'une solution personnalisée ?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Contactez-nous pour une consultation gratuite et découvrez la solution 
                parfaite pour vos besoins spécifiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:18552649328"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  Appelez-nous : 1 855 264 9328
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors"
                >
                  Contactez-nous en ligne
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
