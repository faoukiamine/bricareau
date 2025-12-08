import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, Droplets, Shield, Beaker, Heart, Leaf, Check } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const contaminants = [
  "Chlore et chloramines",
  "Plomb et métaux lourds",
  "Nitrates et nitrites",
  "Pesticides et herbicides",
  "Produits pharmaceutiques",
  "Composés organiques volatils",
  "Arsenic",
  "Fluorure",
  "Bactéries et virus",
  "Sédiments et particules"
];

const benefits = [
  {
    icon: Droplets,
    title: "Eau pure et délicieuse",
    description: "Profitez d'une eau au goût pur et rafraîchissant, idéale pour boire et cuisiner. Fini le goût de chlore !"
  },
  {
    icon: Shield,
    title: "Protection de la santé",
    description: "Éliminez jusqu'à 99% des contaminants potentiellement nocifs présents dans votre eau du robinet."
  },
  {
    icon: Heart,
    title: "Meilleur pour la famille",
    description: "Offrez à toute votre famille une eau de qualité supérieure pour la boisson, les biberons et la cuisine."
  },
  {
    icon: Leaf,
    title: "Économies durables",
    description: "Arrêtez d'acheter de l'eau en bouteille. Un système d'osmose s'amortit rapidement et réduit les déchets plastiques."
  },
  {
    icon: Beaker,
    title: "Qualité certifiée",
    description: "Nos systèmes sont certifiés pour répondre aux normes les plus strictes de qualité de l'eau potable."
  },
  {
    icon: Filter,
    title: "Filtration complète",
    description: "Plusieurs étapes de filtration pour une purification maximale, incluant les membranes d'osmose inverse."
  }
];

const systems = [
  {
    title: "Osmose inverse sous évier",
    description: "Installation discrète sous votre évier de cuisine avec robinet dédié pour l'eau purifiée.",
    features: ["5 à 7 étapes de filtration", "Robinet chromé inclus", "Réservoir de stockage", "Installation professionnelle"]
  },
  {
    title: "Filtration maison entière",
    description: "Système de filtration complet pour toute la maison, traitant l'eau à son entrée.",
    features: ["Protection complète", "Tous les points d'eau", "Durée de vie prolongée", "Maintenance annuelle"]
  },
  {
    title: "Systèmes combinés",
    description: "Combinaison d'adoucisseur et de filtration pour une solution complète de traitement d'eau.",
    features: ["Adoucissement + filtration", "Solution tout-en-un", "Économies maximales", "Performance optimale"]
  }
];

const OsmoseFiltration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Filter className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Eau pure et saine</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Osmose inverse &{" "}
                  <span className="text-primary">Filtration</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Profitez d'une eau pure et délicieuse directement de votre robinet. 
                  Nos systèmes d'osmose inverse et de filtration éliminent les contaminants, 
                  métaux lourds, chlore et autres impuretés pour une eau de qualité supérieure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full px-8" asChild>
                    <NavLink to="/contact-residentiel">
                      Demander une consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </NavLink>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                    <a href="tel:18552649328">
                      Appelez le 1-855-264-9328
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=800&auto=format&fit=crop"
                  alt="Eau pure filtrée"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contaminants Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Qu'élimine l'osmose inverse ?
              </h2>
              <p className="text-muted-foreground text-lg">
                L'osmose inverse est l'une des méthodes de filtration les plus efficaces, 
                capable d'éliminer jusqu'à 99% des contaminants présents dans l'eau.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {contaminants.map((contaminant, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-sm"
                  >
                    <Check className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm text-foreground">{contaminant}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Pourquoi choisir la filtration par osmose ?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Une eau de qualité supérieure pour votre famille et votre cuisine.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Systems */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Nos systèmes de filtration
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Des solutions adaptées à chaque besoin et chaque budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {systems.map((system, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {system.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {system.description}
                  </p>
                  <ul className="space-y-3">
                    {system.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                          <Check className="h-3 w-3 text-accent" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src="https://bricareau.com/wp-content/uploads/2025/03/unnamed.png"
                  alt="Client satisfait"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg text-foreground italic mb-4">
                    "Excellent service! Ils m'ont installé un système d'osmose inverse depuis à peu près 2 ans. 
                    J'ai testé mon eau et elle fonctionne toujours parfaitement. Ils l'ont également connecté 
                    à mon réfrigérateur! Je ne peux pas vivre sans ça maintenant."
                  </p>
                  <p className="font-semibold text-foreground">Mariam Chejai</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Prêt à profiter d'une eau plus pure ?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une analyse gratuite de votre eau et découvrez 
              le système de filtration idéal pour votre maison.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-8 bg-white text-primary hover:bg-white/90"
                asChild
              >
                <NavLink to="/contact-residentiel">
                  Demander un devis gratuit
                </NavLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="tel:18552649328">
                  Appelez le 1-855-264-9328
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OsmoseFiltration;
