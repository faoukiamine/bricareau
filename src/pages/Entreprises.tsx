import { Phone, CheckCircle, Leaf, Users, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-entreprises.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { NavLink } from "@/components/NavLink";

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
      {/* Header with Entreprises Navigation */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="hidden md:block border-b border-border bg-secondary/30">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-6">
                <NavLink to="/">Résidentiel</NavLink>
                <span className="text-primary font-medium">Entreprise</span>
                <NavLink to="/commercial-industriel">Commercial & Industriel</NavLink>
              </div>
            <div className="flex items-center gap-4">
              <a href="tel:18552649328" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-3 w-3" />
                <span>1 855 264 9328</span>
              </a>
              <a href="/contact-residentiel" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-3 w-3" />
                <span>Contactez-nous</span>
              </a>
              <a href="#localisation" className="flex items-center gap-2 hover:text-primary transition-colors">
                <MapPin className="h-3 w-3" />
                <span>Localisation</span>
              </a>
            </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg md:text-xl">B</span>
              </div>
              <span className="font-bold text-xl md:text-2xl text-foreground">Bricareau</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Environnement professionnel avec eau pure" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Des solutions dédiées aux environnements professionnels pour vous faire profiter d'une eau pure fraîche au quotidien.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Vos collaborateurs apprécieront la nouvelle façon d'avoir de l'eau fraîche dans votre entreprise !
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  Explorez nos solutions d'eau
                </a>
                <a
                  href="tel:18552649328"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Appelez le 1-855-264-9328
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
              Nos solutions de traitement d'eau
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
              Pourquoi plus de 10 000 entreprises choisissent Bricareau?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Pas de plastique, pas de déchets.
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-primary">
                Contribuez à la protection de notre écosystème
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
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
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Traitement d'eau résidentiel
              </h2>
              <h3 className="text-xl font-semibold text-primary">
                l'eau de votre maison
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Planifiez votre consultation sur l'eau
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Nos spécialistes en eau sont prêts à vous assister dans la recherche de la solution adéquate à votre problème d'eau. 
                Nous vous offrons un test d'eau ainsi qu'une consultation à votre domicile.
              </p>
              <a
                href="/contact-entreprises"
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