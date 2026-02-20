import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Waves, Filter, Beaker } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import filtrationImage from "@/assets/10341859.jpg";

const solutions = [
  {
    id: "adoucisseurs",
    title: "Adoucisseurs d'eau",
    description: "Dites adieu à l'eau dure et faites de la place à l'eau douce ! Solution efficace contre le calcaire, nos adoucisseurs d'eau sont une véritable source de bien-être et de confort au quotidien.",
    benefits: [
      "Peau douce et cheveux soyeux",
      "Linge plus moelleux et durable",
      "Vaisselle étincelante sans traces",
      "Protection de vos appareils électroménagers",
      "Économies sur les détergents (jusqu'à 50%)",
      "Réduction des coûts énergétiques"
    ],
    icon: Droplets,
    link: "/adoucisseurs",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "conditionneurs",
    title: "Conditionneurs d'eau sans sel",
    description: "Alternative écologique aux adoucisseurs conventionnels. Empêche la formation de tartre dans votre plomberie, vos équipements et vos chauffe-eau sans utiliser de sel.",
    benefits: [
      "Zéro utilisation de sel",
      "Écologique et respectueux de l'environnement",
      "Prévention du tartre sans rejets d'eau",
      "Protection de la plomberie",
      "Idéal pour zones à restriction de saumure",
      "Entretien minimal"
    ],
    icon: Waves,
    link: "/conditionneurs-sans-sel",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "osmose",
    title: "Osmose inverse & Filtration",
    description: "Profitez d'une eau pure et délicieuse directement de votre robinet. Nos systèmes éliminent les contaminants, métaux lourds, chlore et autres impuretés pour une eau de qualité supérieure.",
    benefits: [
      "Eau pure sans contaminants",
      "Élimination du chlore et des métaux lourds",
      "Goût et odeur améliorés",
      "Idéal pour la cuisine et les boissons",
      "Protection contre les nitrates",
      "Économies sur l'eau en bouteille"
    ],
    icon: Filter,
    link: "/osmose-filtration",
    image: filtrationImage
  },
  {
    id: "puits",
    title: "Traitement de l'eau de puits",
    description: "Solutions complètes pour les propriétaires alimentés par puits privé. Nous traitons les problèmes spécifiques comme le fer, le soufre, les bactéries et les sédiments.",
    benefits: [
      "Élimination du fer et du manganèse",
      "Traitement de l'odeur de soufre",
      "Désinfection bactériologique",
      "Filtration des sédiments",
      "Test et analyse de l'eau",
      "Solutions personnalisées"
    ],
    icon: Beaker,
    link: "/eau-de-puits",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Nos Solutions de Traitement d'Eau
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Découvrez notre gamme complète de solutions pour améliorer la qualité de votre eau.
                Que vous ayez besoin d'adoucir, filtrer ou purifier, nous avons la solution adaptée à vos besoins.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-16 md:space-y-24">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  id={solution.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <solution.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {solution.title}
                      </h2>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-6 mb-6">
                      <h3 className="font-semibold text-foreground mb-4">Avantages clés :</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {solution.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-accent" />
                            </div>
                            <span className="text-sm text-foreground/80">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="rounded-full px-8">
                      <NavLink to={solution.link}>
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </NavLink>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Besoin d'aide pour choisir la bonne solution ?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Nos experts sont là pour vous conseiller et vous proposer la solution
              la plus adaptée à vos besoins et à la qualité de votre eau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-8 bg-white text-primary hover:bg-white/90"
                asChild
              >
                <NavLink to="/contact-residentiel">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="tel:18552649328">
                  Appeler 1-855-264-9328
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

export default Solutions;
