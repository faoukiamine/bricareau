import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Waves, Leaf, Droplets, Shield, Wrench, Recycle, Check } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const benefits = [
  { icon: Leaf, title: "100% Écologique", description: "Aucun sel ajouté, aucun rejet d'eau salée dans l'environnement." },
  { icon: Recycle, title: "Zéro gaspillage d'eau", description: "Pas de rejet d'eau lors du processus de régénération." },
  { icon: Shield, title: "Protection anti-tartre", description: "Empêche la formation de nouveaux dépôts de tartre." },
  { icon: Wrench, title: "Entretien minimal", description: "Pas de sel à ajouter, système simple et efficace." },
  { icon: Droplets, title: "Conserve les minéraux", description: "Garde les minéraux bénéfiques dans votre eau." },
  { icon: Waves, title: "Installation simple", description: "S'installe facilement sans drain ou prise dédiée." }
];

const ConditionneursSansSel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-accent/10 via-background to-primary/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
                <Waves className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-accent">Alternative écologique</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Conditionneurs d'eau <span className="text-accent">sans sel</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Alternative écologique aux adoucisseurs conventionnels qui empêche la formation 
                de tartre dans votre plomberie et équipements sans utiliser de sel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-8 bg-accent hover:bg-accent/90" asChild>
                  <NavLink to="/contact-residentiel">Demander une consultation <ArrowRight className="ml-2 h-4 w-4" /></NavLink>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                  <a href="tel:18552649328">Appelez le 1-855-264-9328</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">Avantages des conditionneurs sans sel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <benefit.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">Prêt à passer au sans sel ?</h2>
            <p className="text-accent-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contactez nos experts pour découvrir si un conditionneur sans sel est la solution idéale.
            </p>
            <Button size="lg" className="rounded-full px-8 bg-white text-accent hover:bg-white/90" asChild>
              <NavLink to="/contact-residentiel">Demander un devis gratuit</NavLink>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ConditionneursSansSel;
