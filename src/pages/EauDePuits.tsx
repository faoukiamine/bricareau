import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Beaker, AlertTriangle, Droplets, Shield, Check, Bug, Flame } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const problems = [
  {
    icon: Flame,
    title: "Fer et manganèse",
    description: "Causent des taches orange ou noires sur les appareils sanitaires, le linge et donnent un goût métallique à l'eau.",
    solution: "Systèmes d'oxydation et de filtration spécialisés"
  },
  {
    icon: AlertTriangle,
    title: "Sulfure d'hydrogène",
    description: "Responsable de l'odeur caractéristique d'œufs pourris, ce gaz peut être désagréable et corrosif.",
    solution: "Filtres au charbon actif ou systèmes d'aération"
  },
  {
    icon: Bug,
    title: "Bactéries et coliformes",
    description: "La présence de bactéries peut rendre l'eau dangereuse pour la consommation humaine.",
    solution: "Désinfection UV ou chloration contrôlée"
  },
  {
    icon: Droplets,
    title: "Sédiments et turbidité",
    description: "Sable, argile et particules en suspension qui rendent l'eau trouble et peuvent endommager les équipements.",
    solution: "Filtration mécanique multi-étapes"
  },
  {
    icon: Beaker,
    title: "Nitrates",
    description: "Particulièrement dangereux pour les nourrissons, ils proviennent souvent de l'agriculture environnante.",
    solution: "Osmose inverse ou échange d'ions"
  },
  {
    icon: Shield,
    title: "Acidité (pH bas)",
    description: "Une eau acide peut corroder les tuyaux et libérer des métaux lourds dans l'eau potable.",
    solution: "Neutraliseur de pH avec calcite"
  }
];

const process = [
  {
    step: 1,
    title: "Analyse complète de l'eau",
    description: "Nous effectuons un test approfondi de votre eau de puits pour identifier tous les contaminants présents."
  },
  {
    step: 2,
    title: "Diagnostic personnalisé",
    description: "Nos experts analysent les résultats et conçoivent une solution sur mesure pour vos besoins spécifiques."
  },
  {
    step: 3,
    title: "Installation professionnelle",
    description: "Notre équipe installe le système de traitement adapté avec le plus grand soin et professionnalisme."
  },
  {
    step: 4,
    title: "Suivi et entretien",
    description: "Nous assurons un suivi régulier et l'entretien de votre système pour garantir une eau de qualité continue."
  }
];

const EauDePuits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-50 via-background to-primary/5 py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
                  <Beaker className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">Solutions pour puits privés</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Traitement de l'eau{" "}
                  <span className="text-primary">de puits</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Propriétaire d'un puits privé ? Nous comprenons les défis uniques que pose l'eau souterraine. 
                  Du fer au soufre, en passant par les bactéries et les sédiments, nous avons les solutions 
                  pour vous offrir une eau saine et de qualité.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full px-8" asChild>
                    <NavLink to="/water-testing">
                      Faire analyser mon eau
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
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
                  alt="Propriété avec puits"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problems Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Problèmes courants de l'eau de puits
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Chaque puits est unique. Voici les contaminants les plus fréquemment rencontrés 
                et nos solutions pour les traiter.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                    <problem.icon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {problem.description}
                  </p>
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{problem.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Notre processus en 4 étapes
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                De l'analyse à l'installation, nous vous accompagnons à chaque étape 
                pour garantir une eau de qualité.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {process.map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 to-primary/5 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src="https://bricareau.com/wp-content/uploads/2025/02/team-s8-1.jpg"
                  alt="Christian Lareau"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg text-foreground italic mb-4">
                    "Très satisfait du service de Bricareau Water Specialist. Toute la famille est contente, 
                    le système de filtration d'eau installé nous a procuré une bonne eau claire transparente 
                    sans l'odeur des œufs pourris. Je vous recommande les produits et le service de Bricareau 
                    si vous souhaitez avoir la tranquillité d'esprit, le bon service et la meilleure qualité d'eau."
                  </p>
                  <p className="font-semibold text-foreground">Christian Lareau</p>
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

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Pourquoi choisir Bricareau pour votre puits ?
                </h2>
                <ul className="space-y-4">
                  {[
                    "Plus de 20 ans d'expérience avec les puits privés",
                    "Analyse d'eau gratuite et complète",
                    "Solutions personnalisées à chaque situation",
                    "Équipement de qualité professionnelle",
                    "Installation par des techniciens certifiés",
                    "Service après-vente et entretien régulier",
                    "Garantie sur les pièces et la main-d'œuvre"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Vous avez un puits ?
                </h3>
                <p className="text-white/80 mb-6">
                  Faites analyser votre eau gratuitement par nos experts. 
                  Nous vous proposerons la solution la plus adaptée à votre situation.
                </p>
                <Button
                  size="lg"
                  className="w-full rounded-full bg-white text-emerald-600 hover:bg-white/90"
                  asChild
                >
                  <NavLink to="/water-testing">
                    Demander une analyse gratuite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Besoin d'aide avec votre eau de puits ?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Nos spécialistes de l'eau de puits sont là pour vous aider à résoudre 
              tous vos problèmes de qualité d'eau.
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

export default EauDePuits;
