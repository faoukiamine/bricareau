import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, AlertTriangle, Home, Heart, Zap, Wrench, Check, ChevronRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroProblem from "@/assets/problem_hero_bg.jpg";
import { Phone } from "lucide-react";

const effects = [
  {
    icon: Home,
    title: "Dommages aux équipements",
    description: "Les dépôts de calcaire réduisent la durée de vie de vos appareils électroménagers (lave-linge, lave-vaisselle, chauffe-eau) et de votre plomberie."
  },
  {
    icon: Zap,
    title: "Surconsommation énergétique",
    description: "Un dépôt de calcaire de 1mm sur un élément chauffant augmente la consommation d'énergie de 10 à 15%. Vos factures d'énergie grimpent !"
  },
  {
    icon: Heart,
    title: "Inconfort pour la peau",
    description: "L'eau dure forme avec le savon des sels insolubles qui se déposent sur la peau et les cheveux, causant sécheresse, démangeaisons et cheveux ternes."
  },
  {
    icon: Wrench,
    title: "Entretien accru",
    description: "Plus de temps et de produits nécessaires pour nettoyer les traces de calcaire sur les robinets, carrelages, parois de douche et éviers."
  }
];

const faqs = [
  {
    question: "Quels sont les effets de l'eau dure?",
    answer: `• Augmentation des coûts énergétiques due à la performance réduite des chaudières et chauffe-eau
• Équipements de la maison abîmés et rongés par le calcaire
• Durée de vie des équipements considérablement réduite
• Consommation de produits d'entretien jusqu'à 50% supérieure
• Charge de travail plus importante pour maintenir les pièces d'eau propres
• Peau et cheveux agressés : plaques rouges, peau sèche, cheveux ternes
• Linge rêche qui perd de son éclat`
  },
  {
    question: "Pourquoi l'eau dure peut-elle nuire à l'environnement?",
    answer: "Quand l'eau est très dure, il est indispensable d'utiliser beaucoup plus de lessive pour atteindre le même effet de nettoyage. Pour éliminer les taches de calcaire, on utilise souvent des agents nettoyants agressifs. Ces deux actions génèrent une pollution des eaux usées. De plus, un dépôt de calcaire de 1mm sur la surface d'un échangeur de chaleur augmente la consommation d'énergie."
  },
  {
    question: "Quelles sont les conséquences d'une eau dure sur la peau?",
    answer: "L'eau dure, qui contient du calcaire, forme avec le savon des sels insolubles, appelés « savon calcaire ». Ce savon calcaire se dépose sur la peau et les cheveux. De nombreuses personnes ressentent alors une sensation de tension sur la peau et se plaignent d'avoir les cheveux ternes et épointés. Avec de l'eau douce, la peau est nettement plus douce et soyeuse, les cheveux plus brillantes et souples."
  },
  {
    question: "Pourquoi l'eau dure génère-t-elle plus de travail à la maison?",
    answer: "Si l'eau est trop dure, les gouttes d'eau génèrent des taches de calcaire sur la vaisselle, la robinetterie, le carrelage, les parois de douche et les éviers en acier inoxydable. Dans la baignoire se forme du savon calcaire qui reste sous forme de bordures de saleté. Les taches et traînées de calcaire exigent de frotter et d'utiliser des agents nettoyants agressifs et polluants."
  },
  {
    question: "Comment reconnaissez-vous les processus de corrosion?",
    answer: `• Décoloration de l'eau vers des teintes brunes/rougeâtres
• Particules de rouille ou de sable dans les filtres à sédiment
• Décoloration bleu-vert de l'eau dans les tuyaux de cuivre
• Pour les nouvelles installations, la probabilité de corrosion peut être déterminée par l'analyse de l'eau`
  },
  {
    question: "La corrosion peut-elle nuire à votre santé?",
    answer: "Par les processus de corrosion, des métaux lourds des matériaux de conduite peuvent parvenir dans l'eau potable et entraver la qualité de l'eau. Ces métaux, en particulier chez les personnes sensibles (nourrissons, malades et personnes âgées), peuvent générer des problèmes de santé. Il est recommandé de laisser d'abord couler l'eau un certain temps après une stagnation prolongée."
  }
];

const solutions = [
  {
    title: "Adoucisseurs d'eau",
    description: "Éliminent efficacement le calcium et le magnésium responsables du calcaire.",
    link: "/adoucisseurs"
  },
  {
    title: "Conditionneurs sans sel",
    description: "Alternative écologique qui prévient la formation de tartre sans utiliser de sel.",
    link: "/conditionneurs-sans-sel"
  },
  {
    title: "Systèmes combinés",
    description: "Solutions complètes associant adoucissement et filtration pour une eau parfaite.",
    link: "/solutions"
  }
];

const EauDure = () => {
  return (
    <div className="min-h-screen bg-background text-slate-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
          <div className="absolute inset-0 z-0">
            <img
              src={heroProblem}
              alt="Problèmes de calcaire"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/70 lg:to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl text-white">
              <span className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-4 block">
                COMPRENDRE LE PROBLÈME
              </span>
              <h1
                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                Eau dure <span className="font-normal">& Calcaire</span>
              </h1>
              <p className="font-light text-[20px] leading-[28px] text-white/95 mb-8 max-w-xl">
                Découvrez ses effets sur votre maison, votre santé et vos équipements,
                ainsi que les solutions durables pour y remédier définitivement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                  asChild
                >
                  <NavLink to="/water-testing">
                    Tester la dureté de mon eau
                  </NavLink>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-8 h-14 backdrop-blur-sm shadow-lg"
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

        {/* What is Hard Water */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                  Qu'est-ce que l'eau dure ?
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  L'eau dure est une eau qui contient une quantité élevée de minéraux dissous,
                  principalement du calcium (Ca) et du magnésium (Mg). Ces minéraux sont naturellement
                  présents dans le sol et se dissolvent dans l'eau souterraine.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  La dureté de l'eau se mesure en parties par million (ppm) ou en degrés français (°f).
                  Une eau est considérée comme dure à partir de 15°f ou 150 ppm.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-amber-600" />
                    Le saviez-vous ?
                  </h3>
                  <p className="text-muted-foreground">
                    Au Canada, environ 80% des foyers ont une eau dure ou très dure,
                    ce qui peut causer des problèmes significatifs à long terme.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-100 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">0-7°f</div>
                  <div className="text-sm text-muted-foreground">Eau très douce</div>
                </div>
                <div className="bg-slate-100 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">7-15°f</div>
                  <div className="text-sm text-muted-foreground">Eau douce</div>
                </div>
                <div className="bg-amber-100 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">15-25°f</div>
                  <div className="text-sm text-muted-foreground">Eau moyennement dure</div>
                </div>
                <div className="bg-amber-200 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-amber-700 mb-2">25°f+</div>
                  <div className="text-sm text-muted-foreground">Eau dure à très dure</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Effects Grid */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-16 text-center leading-[1.2] md:leading-[48px] tracking-tighter">
                Les effets sur votre foyer
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Le calcaire s'accumule progressivement et cause des problèmes coûteux.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {effects.map((effect, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <effect.icon className="h-7 w-7 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {effect.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {effect.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-8 leading-[1.1] tracking-tighter text-center">
                  Questions fréquentes sur l'eau dure
                </h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-xl border border-border px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-8 leading-[1.1] tracking-tighter text-center">
                Nos solutions contre l'eau dure
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Découvrez les différentes options pour traiter votre eau dure et protéger votre maison.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100">
                  <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{solution.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{solution.description}</p>
                    <NavLink
                      to={solution.link}
                      className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest uppercase"
                    >
                      EN SAVOIR PLUS <ChevronRight className="h-4 w-4" />
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 leading-[1.1] tracking-tighter text-center">
              Vous êtes préoccupé par la qualité de votre eau ?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Faites analyser votre eau gratuitement par nos experts et découvrez
              la solution adaptée à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-8 bg-white text-primary hover:bg-white/90"
                asChild
              >
                <NavLink to="/water-testing">
                  Tester mon eau gratuitement
                </NavLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white text-white bg-transparent hover:bg-white/10"
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

export default EauDure;
