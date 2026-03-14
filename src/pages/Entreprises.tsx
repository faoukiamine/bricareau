import { Phone, CheckCircle, Leaf, Users, ChevronRight, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-entreprises.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const Entreprises = () => {
  const solutions = [
    {
      title: "Fontaines & Distributeurs d'eau à Réseau",
      description: "Pratiques, rentables et adaptés pour tous les milieux de travail. Réduisent le gaspillage et simplifient l'utilisation en entreprise."
    },
    {
      title: "Fontaines & Distributeurs d'eau avec Bouteille",
      description: "Obtenez de l'eau fraîche grâce à nos options de livraison flexibles pour répondre à vos besoins professionnels."
    },
    {
      title: "Stations d'hydratation d'eau réfrigérée sans contact",
      description: "Pratiques et faciles à installer. Elles fournissent de l'eau rafraîchissante, réfrigérée quelle que soit la demande."
    },
    {
      title: "Stations d'eau potable purifiée par osmose inverse",
      description: "Installation facile sous l'évier pour accès à une eau délicieuse et saine et plus fraîche directement de votre robinet de cuisine."
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Solutions personnalisées",
      description: "Nos spécialistes en eau vont évaluer la qualité de votre eau potable et les besoins de votre environnement de travail pour créer une solution personalisée et une installation adaptée à votre site, sans aucune interruption."
    },
    {
      icon: Users,
      title: "Service complet",
      description: "L'équipe de service à la clientèle dédiée est disponible pour chaque installation. Nos équipes compétentes de service à la clientèle vous promettent une maintenance préventive proactive, les changements de filtres et tout le service et soutien."
    },
    {
      icon: Leaf,
      title: "Solutions rentables & durables",
      description: "Beaucoup de nos clients ont minimisé leur empreinte écologique en utilisant nos systèmes de traitement d'eau rentables et durables tout en bénéficiant d'une eau propre, sûre et conforme aux normes réglementaires."
    }
  ];

  const sectors = [
    "Entreprise",
    "Écoles, collèges & Universités",
    "Cliniques & Hôpitaux",
    "Restaurants"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative lg:h-[800px] flex flex-col lg:flex-row items-stretch lg:items-start overflow-hidden pt-16 lg:pt-[120px] bg-white">
          <div className="relative w-full h-[40vh] lg:absolute lg:inset-0 lg:z-0 overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1155585825?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100%] min-w-[177.77%] -translate-x-1/2 -translate-y-1/2 object-cover"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-black/20 lg:bg-black/30 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
          </div>

          <div className="container mx-auto px-4 lg:px-6 relative z-10 pt-10 pb-20 lg:pt-[100px] lg:pb-0">
            <div className="max-w-3xl text-center lg:text-left">
              <span className="lg:hidden text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-4 block">
                SOLUTIONS BUSINESS
              </span>
              <h1
                className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-slate-900 lg:text-white text-center lg:text-justify max-w-xl mx-auto lg:mx-0"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="font-bold">Une eau pure au quotidien</span>
              </h1>
              <p className="font-light text-[18px] md:text-[20px] leading-snug text-slate-600 lg:text-white/95 mb-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-justify">
                Vos collaborateurs apprécieront la nouvelle façon d'avoir de l'eau fraîche dans votre entreprise !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                  asChild
                >
                  <a href="#solutions" className="flex items-center gap-2">
                    Explorez nos solutions <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white lg:bg-white/10 hover:bg-slate-50 lg:hover:bg-white/20 text-blue-600 lg:text-white border-blue-600 lg:border-white rounded-full px-8 h-14 backdrop-blur-sm"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
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
            <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-16 text-center leading-[1.2] md:leading-[48px] tracking-tighter">
              Nos solutions de traitement d'eau
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100 p-8">
                  <h3 className="text-xl font-medium mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{solution.title}</h3>
                  <p className="text-slate-500 text-sm leading-snug mb-6 flex-grow">{solution.description}</p>
                  <div className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm mt-auto">
                    Lire <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 text-center leading-[1.2] md:leading-[48px] tracking-tighter max-w-4xl mx-auto">
              Pourquoi plus de 10 000 entreprises choisissent Bricareau?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-snug">
              Bricareau offre des solutions sur mesure pour fournir une eau plus fraîche et plus savoureuse dans votre espace de travail.
              Que ce soit dans la cuisine ou à la salle de réunion, nos systèmes peuvent être installés là où vos employés nécessitent une eau de haute qualité.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-background p-6 rounded-lg">
                  <benefit.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                Pas de plastique, pas de déchets.
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-primary">
                Contribuez à la protection de notre écosystème
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-snug">
                Équipez votre entreprise d'un refroidisseur d'eau spécialement conçu pour les espaces exigeants et
                diminuez l'empreinte carbone de votre entreprise grâce à nos fontaines d'eau purifiée sans bouteilles.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Sectors */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 text-center leading-[1.2] md:leading-[48px] tracking-tighter">
              Nos secteurs d'activités
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Nous nous engageons à fournir des solutions innovantes en matière de traitement des eaux qui répondent aux besoins
              uniques de divers marchés. Notre expertise et nos technologies de pointe nous permettent de servir un large éventail
              de secteurs d'activités, garantissant une gestion efficace et durable des eaux.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {sectors.map((sector, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow"
                >
                  <p className="text-lg font-medium text-foreground">{sector}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Residential Promotion */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                Traitement d'eau résidentiel
              </h2>
              <h3 className="text-xl font-semibold text-primary">
                l'eau de votre maison
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-snug">
                Bricareau vous garantit la meilleure d'eau pour toute la maison. Nous vous proposons des solutions innovantes
                en fonction de vos besoins: Adoucisseurs d'eau, Filtre d'eau ou stations d'eau potable par exemple.
              </p>
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Voir nos solutions d'eau
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-[32px] md:text-[48px] font-bold text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                Planifiez votre consultation sur l'eau
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-snug">
                Nos spécialistes en eau sont prêts à vous assister dans la recherche de la solution adéquate à votre problème d'eau.
                Nous vous offrons un test d'eau ainsi qu'une consultation à votre domicile.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Entreprises;
