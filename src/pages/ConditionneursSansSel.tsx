import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroGirl from "@/assets/cute-little-girl-washing-hands.jpg";
import {
  Leaf,
  Star,
  ChevronRight,
  ChevronLeft,
  TestTube,
  CheckCircle2,
  Clock,
  Sparkles,
  Home,
  Quote
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const whyChoose = [
  {
    icon: Home,
    title: "Maison plus propre",
    description: "Des surfaces étincelantes et des cheveux plus soyeux sans les résidus de calcaire."
  },
  {
    icon: TestTube,
    title: "D'eau plus douce",
    description: "Une sensation de douceur sur la peau et une protection accrue pour vos appareils."
  },
  {
    icon: Leaf,
    title: "Respectueux de l'environnement",
    description: "Pas de rejet de sel dans l'environnement et aucune consommation d'eau supplémentaire."
  }
];

const faqs = [
  {
    question: "Qu'est-ce qu'un conditionneur d'eau sans sel ?",
    answer: "Un conditionneur d'eau sans sel utilise une technologie de cristallisation ou de séquestration pour empêcher le calcaire d'adhérer aux surfaces, sans retirer les minéraux ni ajouter de sel."
  },
  {
    question: "Comment fonctionne un conditionneur d'eau sans sel ?",
    answer: "Le système transforme les minéraux de dureté en cristaux microscopiques stables qui flottent dans l'eau au lieu de se fixer sur vos tuyaux et robinets."
  },
  {
    question: "Quelle est la différence avec un adoucisseur Culligan ?",
    answer: "Contrairement à l'adoucisseur classique, le conditionneur ne nécessite aucun sel, ne consomme pas d'eau pour le nettoyage et conserve les minéraux bénéfiques."
  },
  {
    question: "Quelle est la meilleure option pour moi ?",
    answer: "Le choix dépend du niveau de dureté de votre eau et de vos préférences écologiques. Une analyse d'eau gratuite peut vous aider à décider."
  },
  {
    question: "Pourquoi choisir un conditionneur d'eau plutôt qu'un adoucissement classique ?",
    answer: "C'est une option zéro entretien, sans électricité et écologique, idéale pour les résidences avec des restrictions de rejet de saumure."
  }
];

const resources = [
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    title: "Guide d'installation de l'adoucisseur",
    description: "Découvrez comment nos experts assurent une installation parfaite de votre système."
  },
  {
    image: "https://images.unsplash.com/photo-1595152772835-2196740b6ca0?q=80&w=800&auto=format&fit=crop",
    title: "Solution contre l'eau dure : Guide complet",
    description: "Tout ce que vous devez savoir pour protéger votre maison du calcaire."
  },
  {
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop",
    title: "Comment tester la dureté de son eau",
    description: "Des étapes simples pour comprendre la qualité de l'eau à votre robinet."
  }
];

const ConditionneursSansSel = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroGirl}
              alt="Petite fille se lavant les mains avec l'eau douce"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-white">
              <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-bold uppercase tracking-wider rounded-sm mb-4">
                Nouveau chez Bricareau
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Une solution simple et sans sel contre l'eau dure
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
                Protégez votre plomberie et profitez d'une eau plus saine grâce à notre technologie
                de conditionnement avancée, sans sel et sans entretien.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-lg">
                Demander une consultation gratuite
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-[#00153D] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pourquoi choisir un conditionneur sans sel Bricareau ?
              </h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-blue-400 flex items-center justify-center mb-6">
                    <item.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="opacity-70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  Avantages d'un conditionneur d'eau sans sel
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Le conditionneur d'eau sans sel de Bricareau est une alternative efficace et écologique
                  à l'adoucisseur traditionnel. Il protège vos tuyaux et appareils sans ajouter de sel
                  ni rejeter d'eau, idéal pour les foyers soucieux de leur empreinte écologique.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 mb-12">
                  Voir toutes les options
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { c: "01", t: "Économies", d: "Réduit les coûts d'entretien et prolonge la vie des appareils." },
                    { c: "02", t: "Installation", d: "S'installe facilement on l'arrivée d'eau principale." },
                    { c: "03", t: "Qualité", d: "Conserve l'eau potable et riche en minéraux naturels." }
                  ].map((item, idx) => (
                    <div key={idx} className="border-t border-gray-200 pt-6">
                      <span className="text-blue-600 font-bold mb-2 block">{item.c}</span>
                      <h4 className="font-bold mb-2">{item.t}</h4>
                      <p className="text-sm text-gray-500">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[500px]">
                  <img
                    src="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?q=80&w=800&auto=format&fit=crop"
                    alt="Conditionneur d'eau"
                    className="max-h-[450px] object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-light text-[#1a1a1a]">
                Eau savoureuse. <span className="font-bold">Service professionnel.</span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Testimonial Card */}
              <div className="bg-white rounded-[32px] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative mb-12">
                <div className="mb-8">
                  <Quote className="h-12 w-12 text-[#60A5FA] fill-[#60A5FA] rotate-180" />
                </div>

                <p className="text-lg md:text-xl text-gray-600 italic leading-relaxed mb-12">
                  « Bricareau avait le produit que nous cherchions et le service a été très rapide! »
                </p>

                <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-[#1a1a1a]">JP Babin</h4>
                    <span className="text-gray-400">Montreal, QC</span>
                  </div>

                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} className="h-6 w-6 fill-[#FBBF24] text-[#FBBF24]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-8">
                <button className="p-2 text-gray-300 hover:text-blue-600 transition-colors">
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="flex gap-2 items-center">
                  <div className="w-8 h-2 bg-blue-400 rounded-full" />
                  <div className="w-2 h-2 bg-gray-200 rounded-full" />
                  <div className="w-2 h-2 bg-gray-200 rounded-full" />
                </div>

                <button className="p-2 text-gray-300 hover:text-blue-600 transition-colors">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Link CTA Section */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-8">C'est pas ça dont vous avez besoin ?</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <NavLink to="/water-testing" className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
                ANALYZER L'EAU <ChevronRight className="h-4 w-4" />
              </NavLink>
              <NavLink to="/adoucisseurs" className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
                CHOISIR UN AUTRE SYSTÈME <ChevronRight className="h-4 w-4" />
              </NavLink>
            </div>
          </div>
        </section>

        {/* Quality Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1200&auto=format&fit=crop"
                  alt="Analyse d'eau professionnelle"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Ne remettez jamais en question la qualité de votre eau
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Notre expertise nous permet de vous proposer des solutions sur mesure.
                  En commençant par une analyse rigoureuse de votre eau, nous identifions
                  précisément vos besoins pour garantir une satisfaction totale.
                </p>
                <ul className="space-y-4">
                  {[
                    "Analyse gratuite et sans engagement",
                    "Installation professionnelle certifiée",
                    "Support client local et réactif"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">FAQ sur les adoucisseurs d'eau sans sel</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b-gray-200">
                  <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Articles et ressources</h2>
                <p className="text-gray-500">Tout ce que vous devez savoir sur le traitement de l'eau.</p>
              </div>
              <Button variant="outline" className="hidden md:flex rounded-full border-blue-600 text-blue-600">
                Voir tout le blog
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((res, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={res.image}
                      alt={res.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{res.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{res.description}</p>
                    <div className="flex items-center text-blue-600 font-bold text-sm">
                      EN SAVOIR PLUS <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3 text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight italic">
                  Planifiez une consultation gratuite sur l'eau
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Remplissez le formulaire ci-dessous pour organiser une visite d'un de nos experts de l'eau.
                </p>
              </div>

              <div className="lg:w-2/3">
                <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-2xl">
                  {/* Progress */}
                  <div className="flex items-center gap-8 mb-12 overflow-x-auto pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-blue-600 font-bold whitespace-nowrap">
                      <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">1</span>
                      VOS INFOS
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 font-bold whitespace-nowrap">
                      <span className="w-10 h-10 rounded-full bg-gray-200 text-white flex items-center justify-center">2</span>
                      VOTRE DISPONIBILITÉ
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 font-bold whitespace-nowrap">
                      <span className="w-10 h-10 rounded-full bg-gray-200 text-white flex items-center justify-center">3</span>
                      CONFIRMATION
                    </div>
                  </div>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3 text-left">
                      <Label htmlFor="fname" className="font-bold flex gap-1">Prénom*</Label>
                      <Input id="fname" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Jean" />
                    </div>
                    <div className="space-y-3 text-left">
                      <Label htmlFor="lname" className="font-bold flex gap-1">Nom*</Label>
                      <Input id="lname" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Dupont" />
                    </div>
                    <div className="space-y-3 text-left">
                      <Label htmlFor="email" className="font-bold flex gap-1">Courriel*</Label>
                      <Input id="email" type="email" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="jean@exemple.com" />
                    </div>
                    <div className="space-y-3 text-left">
                      <Label htmlFor="phone" className="font-bold flex gap-1">Téléphone*</Label>
                      <Input id="phone" type="tel" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="(514) 000-0000" />
                    </div>
                    <div className="md:col-span-2 space-y-3 text-left">
                      <Label htmlFor="address" className="font-bold flex gap-1">Adresse*</Label>
                      <Input id="address" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="123 rue de l'Eau" />
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-3 text-left">
                        <Label htmlFor="city" className="font-bold flex gap-1">Ville*</Label>
                        <Input id="city" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Montréal" />
                      </div>
                      <div className="space-y-3 text-left">
                        <Label htmlFor="province" className="font-bold flex gap-1">Province*</Label>
                        <Input id="province" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Québec" />
                      </div>
                      <div className="space-y-3 text-left">
                        <Label htmlFor="zip" className="font-bold flex gap-1">Code Postal*</Label>
                        <Input id="zip" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="H1A 1A1" />
                      </div>
                    </div>
                    <div className="md:col-span-2 text-left">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-16 h-14 text-xl font-bold w-full md:w-auto">
                        Continuer
                      </Button>
                      <p className="mt-4 text-[10px] text-gray-400 max-w-lg">
                        En soumettant ce formulaire, vous acceptez nos conditions d'utilisation et notre politique de confidentialité. Un spécialiste Bricareau vous contactera sous peu.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConditionneursSansSel;
