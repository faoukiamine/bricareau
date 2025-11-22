import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TestTube, Droplet, Shield, CheckCircle } from "lucide-react";

const WaterTestingPage = () => {
  const testingBenefits = [
    {
      icon: Droplet,
      title: "Analyse complète",
      description: "Test de tous les contaminants courants et minéraux"
    },
    {
      icon: Shield,
      title: "Santé protégée",
      description: "Identifiez les risques pour votre famille"
    },
    {
      icon: TestTube,
      title: "Laboratoire certifié",
      description: "Résultats précis et fiables garantis"
    },
    {
      icon: CheckCircle,
      title: "Recommandations",
      description: "Solutions adaptées à vos résultats"
    }
  ];

  const testingProcess = [
    {
      step: "1",
      title: "Commandez votre kit",
      description: "Recevez votre kit de test d'eau directement chez vous"
    },
    {
      step: "2",
      title: "Prélevez l'échantillon",
      description: "Suivez les instructions simples pour prélever votre eau"
    },
    {
      step: "3",
      title: "Renvoyez le kit",
      description: "Utilisez l'enveloppe prépayée pour nous retourner l'échantillon"
    },
    {
      step: "4",
      title: "Recevez vos résultats",
      description: "Analyse détaillée et recommandations personnalisées sous 5-7 jours"
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                <TestTube className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Tests de la qualité de l'eau
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Assurez-vous que votre eau est saine et pure pour votre famille
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
                Pourquoi tester votre eau ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testingBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
                Comment ça marche ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {testingProcess.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    {index < testingProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Test Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
                Ce que nous testons
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Contaminants courants
                  </h3>
                  <ul className="space-y-2">
                    {["Bactéries et virus", "Plomb et métaux lourds", "Chlore et chloramine", "Pesticides", "Nitrates et nitrites"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Minéraux et propriétés
                  </h3>
                  <ul className="space-y-2">
                    {["Dureté de l'eau", "pH et alcalinité", "Fer et manganèse", "Sulfates", "Turbidité"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Prêt à tester votre eau ?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Procurez-vous notre kit de test d'eau et recevez une analyse complète 
                avec des recommandations personnalisées pour votre situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">Commander un kit de test</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:18552649328">Appelez-nous : 1 855 264 9328</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WaterTestingPage;
