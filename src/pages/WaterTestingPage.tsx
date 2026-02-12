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
  Thermometer,
  Heart,
  Sparkles,
  FileText,
  ShieldCheck
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
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import watersofterImg from "@/assets/Adoucisseurs d'eau.webp";
import drinkingwatersofterImg from "@/assets/Solutions d'eau potable.webp";
import heroImageImg from "@/assets/hero-image.jpg";
import waterProblemImg from "@/assets/Corrosive-Water.webp";
import smellImg from "@/assets/Water_Smells_Like_Rotten_Eggs_1400x.webp";
import stainImg from "@/assets/rouille_thumb.jpg";
import plumbingImg from "@/assets/detartrage-chauffe-eau-electrique.jpg";
import movingTipsImg from "@/assets/astuces-emmenagement-maison.jpg";
import clothesStainsImg from "@/assets/302731406_443870381116589_3770801709209607894_n.jpg";

const WaterTestingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
          <div className="absolute inset-0 z-0">
            <img
              src={heroTesting}
              alt="Expert testing water quality"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl text-white">
              <span className="text-sm font-bold uppercase tracking-widest text-[#60A5FA] mb-4 block">
                ANALYSE D'EAU GRATUITE
              </span>
              <h1
                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                Vous désirez faire analyser <br />
                <span className="font-normal">votre eau résidentielle?</span>
              </h1>
              <p className="font-light text-[20px] leading-[28px] text-white/95 mb-8 max-w-xl">
                Pour vos analyses annuelles, une transaction hypothécaire ou encore parce que vous avez un souci avec la qualité de votre eau, bricareau est là pour vous!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                  asChild
                >
                  <a href="#consultation">Planifier un test d'eau</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-8 h-14 backdrop-blur-sm shadow-lg flex items-center gap-2"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                  asChild
                >
                  <a href="tel:18552649328">
                    1-855-264-9328
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-blue-100 font-bold uppercase tracking-widest text-sm mb-4">Pourquoi une analyse d'eau ?</h2>
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-left"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block text-white">Voici ce que vous pourriez</span>
                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block text-white">découvrir dans votre eau</span>
              </h2>
              <p className="text-xl text-blue-50/90 leading-relaxed max-w-4xl">
                Même si votre eau semble propre, elle peut contenir des minéraux invisibles et des impuretés qui nuisent à votre maison et à votre santé. Un test d'eau à domicile est la première étape pour obtenir l'eau que vous méritez.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Santé et bien-être",
                  desc: "Détectez les contaminants invisibles qui peuvent nuire à votre santé et à votre famille."
                },
                {
                  icon: Home,
                  title: "Protection de votre maison",
                  desc: "Limitez les dégâts et bris pouvant être causés par certains contaminants de l’eau."
                },
                {
                  icon: Sparkles,
                  title: "Tranquillité d’esprit",
                  desc: "Avec un rapport professionnel, vous aurez tout en main pour choisir le bon système."
                },
                {
                  icon: FileText,
                  title: "Conformité aux normes",
                  desc: "Ayez en main les documents légaux requis pour une transaction hypothécaire."
                }
              ].map((item, id) => (
                <div key={id} className="bg-[#001A4D] border border-white/5 p-8 rounded-[2rem] flex flex-col h-full group hover:bg-[#00266b] hover:scale-[1.02] transition-all duration-300 shadow-xl">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6 group-hover:bg-blue-600/40 transition-colors">
                    <item.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
                  <p className="text-blue-100/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Quand faut-il faire analyser l'eau (Modern Visual Grid) */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-center"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Quand faut-il faire analyser</span>
                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">l'eau de votre maison ?</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Nouvel emménagement",
                  desc: "Testez votre eau dès que vous emménagez dans une nouvelle propriété pour votre sécurité.",
                  img: movingTipsImg
                },
                {
                  title: "Goût ou odeur suspecte",
                  desc: "Si votre eau a un goût métallique ou une odeur d'œufs pourris inhabituelle.",
                  img: smellImg
                },
                {
                  title: "Taches sur les vêtements",
                  desc: "Des taches blanches ou rouge-orange indiquent souvent des minéraux en excès.",
                  img: clothesStainsImg
                },
                {
                  title: "Problèmes de plomberie",
                  desc: "L'accumulation de calcaire réduit considérablement l'efficacité de vos équipements.",
                  img: plumbingImg
                }
              ].map((item, idx) => (
                <div key={idx} className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-6 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <ChevronRight className="text-white h-6 w-6" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4 leading-tight min-h-[64px] flex items-end">{item.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed line-clamp-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Testimonials */}
        <TestimonialsSection />

        {/* Section 7: Water Testing plans*/}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <div className="text-center mb-16">
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-center"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Nos trousses d'analyse</span>
                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">de la qualité de l'eau</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "1. Analyse d'eau microbiologique", desc: "Une eau de boisson pure et délicieuse à chaque robinet.", href: "/filtration" },
                { title: "2. Analyse d'eau physico-chimique Type I", desc: "Pour une eau douce et protégée partout dans la maison.", href: "/adoucisseur-eau-residentiel" },
                { title: "3. Analyse d'eau physico-chimique Type II", desc: "Une protection globale contre les contaminants et impuretés.", href: "/filtration" },
                { title: "4. Analyse d'eau physico-chimique globale", desc: "Une protection globale contre les contaminants et impuretés.", href: "/filtration" }
              ].map((prod, i) => (
                <NavLink key={i} to={prod.href} className="group bg-[#001A4D] p-8 rounded-[2rem] border border-white/5 hover:bg-[#00266b] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full shadow-xl">
                  <h4 className="text-xl font-bold mb-4 text-white">{prod.title}</h4>
                  <p className="text-blue-100/70 text-sm leading-relaxed mb-6 flex-grow">{prod.desc}</p>
                  <Button variant="link" className="text-blue-400 font-bold p-0 group-hover:text-blue-300 transition-colors w-fit">
                    Découvrir <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 text-left">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-left"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">FAQ</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "Qu'est-ce qu'une analyse physico-chimique de l'eau ?",
                    a: "Une analyse physico-chimique mesure les paramètres non vivants tels que la dureté, le pH, le fer, le manganèse, les nitrates et les solides dissous. Cela permet d'évaluer l'esthétique de l'eau et son impact sur votre tuyauterie."
                  },
                  {
                    q: "Qu'est-ce qu'une analyse microbiologique ?",
                    a: "Cette analyse recherche la présence d'organismes vivants comme les bactéries coliformes et E. coli. Ces micro-organismes peuvent causer des problèmes de santé immédiats et leur absence est essentielle pour qu'une eau soit déclarée potable."
                  },
                  {
                    q: "Pourquoi tester l'eau si elle semble claire et inodore ?",
                    a: "Plusieurs contaminants dangereux comme l'arsenic, le plomb ou les nitrates sont incolores, inodores et sans goût. Seule une analyse professionnelle en laboratoire peut confirmer la sécurité réelle de votre eau."
                  },
                  {
                    q: "À quelle fréquence devrais-je faire analyser mon eau de puits ?",
                    a: "Santé Québec recommande d'analyser la qualité microbiologique de votre eau de puits au moins deux fois par an (printemps et automne) et d'effectuer une analyse physico-chimique complète tous les deux ans."
                  },
                  {
                    q: "Quels sont les paramètres les plus critiques à surveiller au Québec ?",
                    a: "Pour les puits résidentiels, les priorités sont les bactéries, les nitrates, le fer, le manganèse, la dureté et, dans certaines régions, l'arsenic et le radon."
                  },
                  {
                    q: "Comment dois-je prélever l'échantillon pour le laboratoire ?",
                    a: "Pour un test microbiologique, vous devez utiliser un flacon stérile fourni par le laboratoire et suivre une procédure de désinfection du robinet rigoureuse pour éviter de fausser les résultats."
                  },
                  {
                    q: "Quelle est la différence entre un test à domicile et une analyse en laboratoire ?",
                    a: "Le test à domicile permet d'obtenir des résultats instantanés sur les minéraux et la dureté. L'analyse en laboratoire accrédité est nécessaire pour certifier la potabilité microbiologique et détecter les contaminants chimiques complexes."
                  },
                  {
                    q: "Que signifie la présence de coliformes totaux dans mon rapport ?",
                    a: "Cela indique que votre puits est vulnérable aux infiltrations d'eau de surface. Bien que tous les coliformes ne soient pas pathogènes, leur présence suggère qu'un traitement de désinfection est nécessaire."
                  },
                  {
                    q: "Un pH acide peut-il endommager ma résidence ?",
                    a: "Absolument. Un pH inférieur à 6,5 est considéré comme corrosif. Il peut attaquer vos tuyaux de cuivre, provoquant des fuites 'trous d'épingle' et libérant des métaux lourds dans votre eau de boisson."
                  },
                  {
                    q: "Que faire si les résultats indiquent une eau non potable ?",
                    a: "Pas de panique. Nos experts analyseront votre rapport et vous recommanderont le système approprié (UV pour les bactéries, adoucisseur pour la dureté ou filtre spécialisé) pour rendre votre eau parfaitement sûre."
                  }
                ].map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b-gray-200"
                  >
                    <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-light text-[20px] leading-[28px] text-gray-600 pb-6 text-left">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* 10. Contact Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3 text-left">
                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter italic">
                  Planifier une consultation gratuite sur l'eau
                </h2>
                <p className="font-light text-[20px] leading-[28px] text-gray-600 mb-8">
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

export default WaterTestingPage;
