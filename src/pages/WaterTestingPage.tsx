import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import {
  TestTube,
  Droplet,
  Shield,
  CheckCircle2,
  Clock,
  Home,
  Search,
  Wrench,
  Star,
  ChevronRight,
  Check,
  ArrowRight,
  GlassWater,
  MapPin,
  Zap,
  Thermometer
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

import heroTesting from "@/assets/6666f4137364e2dd1bf86a0a_EauTrouble.webp";

const WaterTestingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[800px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroTesting}
              alt="Expert testing water quality"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl text-white">
              <span className="inline-block px-4 py-1 bg-blue-600 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                Appelez-nous : 1 855 264 9328
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
                Planifiez un test <br />
                d'eau gratuit
              </h1>
              <p className="text-xl opacity-90 mb-10 leading-relaxed max-w-xl">
                Que vous souhaitiez tester votre eau de puits ou explorer l'eau municipale, obtenez une analyse d'eau gratuite et en personne d'un expert.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 text-xl font-bold shadow-xl transition-all hover:scale-105" asChild>
                <a href="#consultation">Planifier un test d'eau</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Pourquoi une analyse d'eau (Dark Blue) */}
        <section className="py-24 bg-[#001A4D] text-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Pourquoi une analyse d'eau ?</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-8">Voici ce que vous pourriez découvrir dans votre eau</h3>
                <p className="text-xl text-blue-100/80 leading-relaxed mb-10">
                  Même si votre eau semble propre, elle peut contenir des minéraux invisibles et des impuretés qui nuisent à votre maison et à votre santé. Un test d'eau à domicile est la première étape pour obtenir l'eau que vous méritez.
                </p>
                <Button variant="link" className="text-blue-400 p-0 font-bold text-lg hover:no-underline flex items-center group">
                  En savoir plus sur nos analyses <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="lg:w-1/2 w-full flex flex-col gap-4">
                <div className="bg-blue-600 p-8 rounded-2xl flex items-center justify-between group hover:bg-blue-500 transition-colors">
                  <div className="flex items-center gap-6">
                    <Droplet className="h-10 w-10 text-white" />
                    <div>
                      <h4 className="text-xl font-bold">Eau dure</h4>
                      <p className="text-blue-100/70">Minéraux comme le calcium et le magnésium</p>
                    </div>
                  </div>
                  <ChevronRight className="h-8 w-8 text-white/30" />
                </div>
                <div className="bg-white p-8 rounded-2xl flex items-center justify-between group hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-6">
                    <Zap className="h-10 w-10 text-blue-600" />
                    <div className="text-gray-900">
                      <h4 className="text-xl font-bold">Chlore</h4>
                      <p className="text-gray-500">Goût et odeur de chlore souvent présents</p>
                    </div>
                  </div>
                  <ChevronRight className="h-8 w-8 text-gray-200" />
                </div>
                <div className="bg-[#22C38E] p-8 rounded-2xl flex items-center justify-between group hover:bg-[#1faa7c] transition-colors">
                  <div className="flex items-center gap-6">
                    <Shield className="h-10 w-10 text-white" />
                    <div>
                      <h4 className="text-xl font-bold">Contaminants</h4>
                      <p className="text-white/70">Impuretés, fer, nitrates et particules</p>
                    </div>
                  </div>
                  <ChevronRight className="h-8 w-8 text-white/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Quand faut-il faire analyser l'eau */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-3xl mx-auto">
              Quand faut-il faire analyser l'eau de votre maison ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { icon: Home, title: "Après un emménagement", desc: "Testez votre eau dès que vous emménagez dans une nouvelle maison." },
                { icon: Search, title: "Modification du goût/odeur", desc: "Si votre eau a un goût métallique ou une odeur d'œufs pourris." },
                { icon: Droplet, title: "Taches sur les vêtements", desc: "Des taches blanches ou rouges indiquent souvent des minéraux." },
                { icon: Wrench, title: "Problèmes de plomberie", desc: "L'accumulation de calcaire peut réduire l'efficacité de vos appareils." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <item.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Chaque analyse d'eau */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2">
                <img
                  src="/src/assets/Scientist istesting water.webp"
                  alt="Scientist analyzing water"
                  className="rounded-[40px] shadow-2xl"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-10 italic">Chaque analyse d'eau :</h2>
                <div className="space-y-6">
                  {[
                    "Une visite à domicile par un expert certifié",
                    "Test précis de la dureté de l'eau",
                    "Analyse des TDS (Total Dissolved Solids)",
                    "Mesure du pH et de l'alcalinité",
                    "Détection du fer, du soufre et du manganèse",
                    "Interprétation immédiate de vos résultats"
                  ].map((txt, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-lg font-medium text-gray-700">{txt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Pourquoi choisir Bricareau */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">
                  Voici pourquoi choisir Bricareau pour votre analyse d'eau à domicile
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: "Expertise locale", desc: "Nos techniciens connaissent parfaitement l'eau de votre région." },
                    { title: "Analyse gratuite", desc: "Aucun frais caché pour le test initial effectué chez vous." },
                    { title: "Solutions sur mesure", desc: "Des recommandations techniques adaptées à vos besoins réels." },
                    { title: "Service professionnel", desc: "Une installation certifiée et un support après-vente complet." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                      <h4 className="text-lg font-bold mb-2 text-blue-600">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <img
                  src="/src/assets/hero-image.jpg"
                  alt="Expert explaining results"
                  className="rounded-[40px] shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Testimonials */}
        <TestimonialsSection />

        {/* Section 7: Comment améliorer la qualité de l'eau */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-16">Comment améliorer la qualité de l'eau</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Adoucisseurs d'eau", desc: "Pour une eau douce et protégée partout dans la maison.", img: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png", href: "/adoucisseur-eau-residentiel" },
                { title: "Systèmes de filtration", desc: "Une eau de boisson pure et délicieuse à chaque robinet.", img: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png", href: "/filtration" },
                { title: "Filtration complète", desc: "Une protection globale contre les contaminants et impuretés.", img: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png", href: "/filtration" }
              ].map((prod, i) => (
                <NavLink key={i} to={prod.href} className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="h-48 mb-8 flex items-center justify-center">
                    <img src={prod.img} alt={prod.title} className="max-h-full object-contain group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{prod.title}</h4>
                  <p className="text-gray-500 mb-6">{prod.desc}</p>
                  <Button variant="link" className="text-blue-600 font-bold p-0">
                    Découvrir <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">FAQ sur les tests de qualité de l'eau</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Combien de temps dure l'analyse à domicile ?", a: "En moyenne, une analyse complète prend entre 45 et 60 minutes selon la complexité de votre installation." },
                { q: "Est-ce vraiment gratuit ?", a: "Oui, l'analyse d'eau initiale effectuée par nos techniciens à domicile est totalement gratuite et sans engagement de votre part." },
                { q: "Dois-je être présent lors du test ?", a: "Oui, nous recommandons votre présence pour pouvoir vous expliquer les résultats en temps réel et répondre à vos questions." },
                { q: "Que se passe-t-il après le test ?", a: "L'expert vous remet un rapport détaillé et, si nécessaire, vous propose des solutions adaptées pour corriger les problèmes identifiés." }
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white mb-4 rounded-xl border-none shadow-sm overflow-hidden">
                  <AccordionTrigger className="px-8 py-5 text-left font-bold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-5 text-gray-600">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Section 9: Consultation Form */}
        <section id="consultation" className="py-24 bg-white scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3 text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight italic">
                  Réserver votre consultation gratuite d'une heure
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  C'est simple, rapide et sans engagement. Un expert Culligan viendra chez vous pour une analyse complète de votre eau.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-blue-600 font-bold">
                    <CheckCircle2 className="h-6 w-6" />
                    <span>Analyse certifiée</span>
                  </div>
                  <div className="flex items-center gap-4 text-blue-600 font-bold">
                    <CheckCircle2 className="h-6 w-6" />
                    <span>Diagnostic complet</span>
                  </div>
                  <div className="flex items-center gap-4 text-blue-600 font-bold">
                    <CheckCircle2 className="h-6 w-6" />
                    <span>Sans engagement</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-2xl">
                  {/* Progress */}
                  <div className="flex items-center gap-8 mb-12 overflow-x-auto pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-blue-600 font-bold whitespace-nowrap">
                      <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">1</span>
                      VOS INFOS
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 font-bold whitespace-nowrap">
                      <span className="w-10 h-10 rounded-full bg-slate-200 text-white flex items-center justify-center">2</span>
                      VOTRE DISPONIBILITÉ
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 font-bold whitespace-nowrap">
                      <span className="w-10 h-10 rounded-full bg-slate-200 text-white flex items-center justify-center">3</span>
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
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-16 h-14 text-xl font-bold w-full md:w-auto transition-transform hover:scale-105 shadow-lg shadow-blue-200">
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

export default WaterTestingPage;
