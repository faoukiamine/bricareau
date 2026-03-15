import { Phone, Award, DollarSign, CheckCircle2, ChevronRight } from "lucide-react";
import heroImage from "@/assets/1451506551.JPG";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
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
    "Une eau de meilleure qualité, c'est 100% garanti",
    "Des soins incomparables - Service gants blancs et entretien sans tracas",
    "Tranquillité d'esprit - Nous nous soucions de votre eau pour que vous n'ayez pas à le faire",
    "Solutions durables - Elles sont aussi bonnes pour la planète que pour vous",
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
        {/* 1. Hero Section (Redesigned for Mobile) */}
        <section className="relative lg:h-[850px] flex items-center overflow-hidden bg-white">
          <div className="absolute top-[50px] left-0 right-0 z-30 pointer-events-none">
            <div className="container mx-auto px-6 pointer-events-auto">
              <GlobalBreadcrumbs variant="dark" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full">
            {/* Mobile Image */}
            <div className="lg:hidden w-full h-[350px] relative">
              <img
                src={heroImage}
                alt="Installation industrielle Bricareau"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
            </div>

            {/* Desktop Background Area (Hidden on Mobile) */}
            <div className="absolute inset-0 z-0 hidden lg:block">
              <img
                src={heroImage}
                alt="Installation industrielle de traitement d'eau et osmose inverse commerciale Bricareau"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto px-4 h-full flex items-center lg:px-6">
              <div className="max-w-2xl lg:text-white py-12 lg:py-0">
                <h1
                  className="text-[32px] md:text-[42px] leading-tight mb-8 tracking-tighter text-slate-900 lg:text-white"
                  style={{
                    fontWeight: 350
                  }}
                >
                  <span>Bricareau, votre partenaire de confiance</span>
                </h1>
                <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl">
                  Notre mission est de vous offrir une tranquillité d'esprit dans vos projets de traitement de l'eau les plus exigeants.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                    asChild
                  >
                    <a href="#solutions">Explorez nos solutions</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-blue-50 lg:hover:bg-white/20 text-blue-600 lg:text-white border-blue-600 lg:border-white rounded-full px-8 h-14 backdrop-blur-sm"
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
          </div>
          {/* Wave Separator (Hidden on Mobile) */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none hidden lg:block">
            <svg
              className="relative block w-full h-[150px]"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="#ffffff"
                transform="rotate(180 600 60)"
              ></path>
            </svg>
          </div>
        </section>

        {/* 3. Solutions Section */}
        <section id="solutions" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-slate-900 mb-16 text-center md:leading-[48px]">
              Nos solutions de traitement d'eau industrielles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100 p-8">
                  <h3 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{solution.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 flex-grow">{solution.description}</p>
                  <div className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm mt-auto">
                    Lire <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-slate-900 mb-16 text-center md:leading-[48px]">
              Pourquoi nous choisir?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-background p-6 rounded-lg">
                  <advantage.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-foreground mb-3">
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

        {/* 5. Guarantees */}
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

        {/* 6. CTA Banner */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-slate-900 mb-8 md:leading-[48px]">
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

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. Markets Section */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-slate-900 mb-8 md:leading-[48px] text-center">
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
                  <p className="font-medium text-foreground">{market}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Water Testing */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-slate-900 mb-8 md:leading-[48px]">
                Tester la qualité de votre eau est essentiel pour votre entreprise.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Les services de tests en laboratoire jouent un rôle essentiel dans la gestion des eaux, offrant des analyses
                essentielles pour identifier les solutions de traitement les plus efficaces. Nous pouvons déterminer avec précision
                la composition de l'eau et recommander les processus de traitement les plus adaptés aux exigences spécifiques.
              </p>
              <a
                href="/tests-eau"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Testez votre eau aujourd'hui !
              </a>
            </div>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-slate-900 mb-8 md:leading-[48px]">
                Améliorez votre eau aujourd'hui
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
