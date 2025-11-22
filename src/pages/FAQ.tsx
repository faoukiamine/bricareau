import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "Général",
      questions: [
        {
          q: "Pourquoi devrais-je traiter mon eau ?",
          a: "Le traitement de l'eau élimine les contaminants, améliore le goût, protège vos appareils ménagers et assure la santé de votre famille. Même l'eau municipale peut contenir du chlore, des métaux lourds et d'autres substances indésirables."
        },
        {
          q: "Quelle est la différence entre un adoucisseur et un filtre ?",
          a: "Un adoucisseur élimine le calcaire et le magnésium pour protéger vos appareils. Un filtre enlève les contaminants comme le chlore, les métaux lourds et les impuretés pour améliorer la qualité de l'eau potable. Les deux sont souvent complémentaires."
        },
        {
          q: "Combien coûte l'installation d'un système de traitement d'eau ?",
          a: "Le coût varie selon le type de système et votre situation. Contactez-nous pour une évaluation gratuite et un devis personnalisé adapté à vos besoins spécifiques."
        }
      ]
    },
    {
      category: "Installation et Maintenance",
      questions: [
        {
          q: "Combien de temps prend l'installation ?",
          a: "La plupart des installations résidentielles se font en 2-4 heures. Pour les systèmes commerciaux ou industriels, le délai peut varier selon la complexité du projet."
        },
        {
          q: "À quelle fréquence dois-je entretenir mon système ?",
          a: "Les adoucisseurs nécessitent un ajout de sel régulier. Les filtres doivent être changés tous les 6-12 mois selon l'utilisation. Nous offrons des plans d'entretien pour vous faciliter la tâche."
        },
        {
          q: "Offrez-vous un service de maintenance ?",
          a: "Oui ! Nous proposons des contrats d'entretien avec visites préventives, remplacement des filtres et support prioritaire pour garantir le bon fonctionnement de votre système."
        }
      ]
    },
    {
      category: "Qualité de l'eau",
      questions: [
        {
          q: "Comment savoir si mon eau a besoin d'être traitée ?",
          a: "Des signes comme un goût désagréable, une odeur, des taches sur les appareils, une peau sèche ou des vêtements ternes indiquent un problème. Nous offrons des tests d'eau gratuits pour une analyse précise."
        },
        {
          q: "L'eau traitée est-elle sûre pour boire ?",
          a: "Absolument ! Nos systèmes sont certifiés et améliorent la qualité de votre eau en éliminant les contaminants. L'eau devient plus pure et plus saine pour toute votre famille."
        },
        {
          q: "Peut-on traiter l'eau de puits ?",
          a: "Oui, nous sommes spécialisés dans le traitement d'eau de puits. Nous analysons votre eau et recommandons le système adapté pour éliminer les contaminants spécifiques à votre source."
        }
      ]
    },
    {
      category: "Produits",
      questions: [
        {
          q: "Quelle est la durée de vie d'un système de traitement d'eau ?",
          a: "Avec un entretien approprié, nos systèmes durent 10-15 ans ou plus. Les composants comme les filtres et les résines doivent être remplacés régulièrement selon les recommandations du fabricant."
        },
        {
          q: "Les systèmes consomment-ils beaucoup d'électricité ?",
          a: "Non, la plupart de nos systèmes sont très économes en énergie. Certains modèles n'utilisent même pas d'électricité et fonctionnent avec la pression de l'eau."
        },
        {
          q: "Offrez-vous des garanties ?",
          a: "Oui, tous nos systèmes sont couverts par des garanties manufacturier. Nous offrons également des garanties d'installation et de satisfaction client."
        }
      ]
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
                Questions Fréquentes
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Trouvez les réponses à vos questions sur le traitement d'eau
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="bg-card border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-semibold text-foreground pr-4">
                            {faq.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pt-2 pb-4">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Vous n'avez pas trouvé votre réponse ?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Notre équipe d'experts est disponible pour répondre à toutes vos questions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:18552649328"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  Appelez-nous : 1 855 264 9328
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors"
                >
                  Contactez-nous
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
