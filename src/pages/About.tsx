import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Award, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Qualité garantie",
      description: "Produits certifiés et installation professionnelle"
    },
    {
      icon: Users,
      title: "+20 000 clients satisfaits",
      description: "Plus de 20 ans d'expertise au service des Canadiens"
    },
    {
      icon: Award,
      title: "Excellence reconnue",
      description: "Leader en traitement d'eau résidentiel et commercial"
    },
    {
      icon: Clock,
      title: "Service rapide",
      description: "Installation et support disponibles 7j/7"
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
                À propos de Bricareau
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Votre partenaire de confiance pour une eau pure et saine depuis plus de 20 ans
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Notre Mission
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Chez Bricareau, notre mission est de protéger la santé et le bien-être de votre famille 
                  en fournissant des solutions de traitement d'eau de qualité supérieure. Nous croyons que 
                  chaque foyer canadien mérite un accès à une eau propre, pure et saine.
                </p>
              </div>

              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
                <p>
                  Depuis notre création, nous avons aidé plus de 20 000 foyers à travers le Canada à 
                  améliorer la qualité de leur eau. Notre expertise couvre tous les aspects du traitement 
                  d'eau, du résidentiel au commercial et industriel.
                </p>
                <p>
                  Nous sommes fiers d'offrir des produits certifiés, une installation professionnelle et 
                  un service client exceptionnel. Notre équipe d'experts est toujours disponible pour vous 
                  conseiller et vous accompagner dans le choix de la solution parfaite pour vos besoins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
                Nos Valeurs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <value.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Notre Équipe
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Notre équipe de professionnels certifiés possède une expertise approfondie en traitement 
                d'eau. Formés aux dernières technologies et normes de l'industrie, nos techniciens sont 
                dévoués à vous offrir le meilleur service possible.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                Chaque membre de notre équipe partage la même passion : garantir que votre eau soit de 
                la plus haute qualité pour protéger votre santé et celle de votre famille.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
