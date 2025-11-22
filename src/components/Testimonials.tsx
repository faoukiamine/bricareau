import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariam Chejai",
    initials: "MC",
    text: "Excellent service, ils m'ont installé un système d'osmose inverse depuis à peu près 2 ans. J'ai testé mon eau et elle fonctionne toujours parfaitement👍 - Ils l'ont également connecté à mon réfrigérateur ! Je ne peux pas vivre sans ça maintenant.",
  },
  {
    name: "Naomie Fontaine",
    initials: "NF",
    text: "Bricareau avait le produit que nous cherchions et le service a été très rapide! Le technicien est très passionné par son travail et m'a fait part de son savoir et de conseils. Je suis très satisfaite du service et nous pouvons maintenant boire de l'eau en toute confiance.",
  },
  {
    name: "Sylvie Thibeau",
    initials: "ST",
    text: "Le technicien était extra-ordinaire et donne un excellent service à la clientèle. Pour ce qui est du produit vous devez utiliser cette eau si fraîche et bonne pour la santé autant pour vous et les membres de votre famille incluant tous vos animaux qui eux aussi ont besoin d'une bonne eau filtrée!! Un gros Merci!",
  },
  {
    name: "Jean-François Babin",
    initials: "JB",
    text: "Je recommande fortement. On m'a très bien conseillé pour m'installer le bon produit pour mes besoins. Offre complète de produits. Service professionnelle, personnalisé et rapide.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base font-medium text-primary mb-2">Témoignage</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Ce que les gens disent à propos de nous
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3 pt-2">
                  <Avatar className="h-12 w-12 bg-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
