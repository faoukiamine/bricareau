import { Phone, Award, DollarSign, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-commercial.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const CommercialIndustriel = () => {
  const solutions = [
    {
      title: "Adoucissement de l'eau",
      description: "Notre adoucisseur d'eau offrira à votre entreprise une grande quantité d'eau propre et douce à volonté."
    },
    {
      title: "Filtration de l'eau",
      description: "Profitez d'une eau plus propre avec notre système de purification d'eau à osmose inverse."
    },
    {
      title: "Déionisation de l'eau",
      description: "Nos filtres sont brillamment conçus pour résoudre vos problèmes spécifiques en matière d'eau."
    },
    {
      title: "Osmose inverse",
      description: "Nos systèmes de filtration aident à fournir une eau de qualité industrielle."
    },
    {
      title: "Ultrafiltration",
      description: "Technologie avancée pour la stérilisation contre les bactéries, les virus et autres contaminants."
    },
    {
      title: "Désinfection UV",
      description: "Systèmes de désinfection UV pratiques et économiques pour une eau de haute qualité."
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Experts",
      description: "Forte de plusieurs années d'expertise dans le secteur, notre équipe offre des connaissances et des compétences exceptionnelles dans tous les aspects de la conception et de la mise en œuvre des systèmes de traitement des eaux."
    },
    {
      icon: DollarSign,
      title: "Rentables",
      description: "Nos solutions de traitement des eaux sont conçues pour être rentables, garantissant aux clients de recevoir les systèmes les plus efficaces et les plus économiques sans compromettre la qualité ou les performances."
    },
    {
      icon: CheckCircle2,
      title: "Conformité",
      description: "Nos systèmes sont méticuleusement conçus pour assurer une conformité totale aux réglementations gouvernementales, offrant à nos clients la tranquillité d'esprit qu'ils respectent toutes les normes légales et environnementales."
    }
  ];

  const guarantees = [
    "Une eau de meilleure qualité, C'est 100% garantie",
    "Des soins incomparables - Service gants blancs et entretien sans tracas",
    "Tranquillité d'esprit - Nous nous soucions de votre eau pour que vous n'ayez pas à le faire",
    "Solutions durables - Ils sont aussi bons pour la planète que pour vous",
    "Pour tous, partout - Une meilleure eau à la maison, au travail et en déplacement"
  ];

  const markets = [
    "Aéronautique",
    "Agriculture",
    "Alimentation et boissons",
    "Automobile",
    "Fabrication",
    "Pâtes et papiers",
    "Pharmaceutique et biotechnologie"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Installation industrielle de traitement d'eau"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-white">
              <span className="text-sm font-bold uppercase tracking-widest text-[#60A5FA] mb-4 block">
                TRAITEMENT D'EAU INDUSTRIEL
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-md">
                Bricareau, votre partenaire de confiance
              </h1>
              <p className="text-lg md:text-xl font-medium opacity-90 mb-8 max-w-xl drop-shadow-sm">
                Notre mission est de vous offrir une tranquillité d'esprit dans vos projets de traitement de l'eau les plus exigeants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold"
                  asChild
                >
                  <a href="#solutions">Explorez nos solutions</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-10 h-14 text-lg font-bold backdrop-blur-sm"
                  asChild
                >
                  <a href="tel:18552649328" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    1-855-264-9328
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
              Nos solutions de traitement d'eau industrielles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {solutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
              Pourquoi nous choisir?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-background p-6 rounded-lg">
                  <advantage.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{guarantee}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Découvrez la meilleure solution de traitement de l'eau pour votre industrie.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Nous vous accompagnons dans le développement d'un système d'équipements de traitement de l'eau sur mesure et personnalisé.
                Nous sommes présents avant, pendant et après votre projet de traitement de l'eau.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Demandez une consultation
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Markets Section */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
              Marchés que nous servons
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Nous nous engageons à fournir des solutions innovantes en matière de traitement des eaux qui répondent aux besoins
              uniques de divers marchés. Notre expertise et nos technologies de pointe nous permettent de servir un large éventail
              d'industries, garantissant une gestion efficace et durable des eaux.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {markets.map((market, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow"
                >
                  <p className="text-lg font-medium text-foreground">{market}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Water Testing */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Testez la qualité de votre eau est essentiel pour garantir que votre entreprise répond aux exigences de l'industrie.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Les services de tests en laboratoire jouent un rôle essentiel dans la gestion des eaux, offrant des analyses
                essentielles pour identifier les solutions de traitement les plus efficaces. Nous pouvons déterminer avec précision
                la composition de l'eau et recommander les processus de traitement les plus adaptés aux exigences spécifiques.
              </p>
              <a
                href="/water-testing"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Testez votre eau aujourd'hui !
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Vous avez besoin d'aide?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Contactez nos experts dès aujourd'hui et trouvez des solutions à vos problèmes de traitement des eaux.
              </p>
              <a
                href="tel:18552649328"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Appelez-nous sans frais au 1 855 264 9328
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CommercialIndustriel;