import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Phone,
  CheckCircle2,
  X,
  ChevronRight,
  GlassWater,
  CircleDollarSign,
  Trash2,
  Wrench,
  ShieldCheck,
  Droplets,
  Zap
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TestimonialsSection from "@/components/TestimonialsSection";

import heroDrink from "@/assets/boire-eau-robinet.jpg";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import sereneLiteImg from "@/assets/Système+de+filtration+Serene+Lite.webp";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import uvSystemImg from "@/assets/Systèmes de désinfection UV.webp";
import waterTestBg from "@/assets/water_test_bg.png";

const OsmoseFiltration = () => {
  const comparisonData = [
    { feature: "Filtration en 5 étapes", elite: true, plus: true, essential: true },
    { feature: "Élimination des métaux lourds", elite: true, plus: true, essential: true },
    { feature: "Membrane d'osmose inverse", elite: true, plus: true, essential: true },
    { feature: "Reminéralisation alcaline", elite: true, plus: "Option", essential: false },
    { feature: "Débit rapide (75 GPD)", elite: true, plus: true, essential: false },
    { feature: "Compact (Sans réservoir)", elite: false, plus: false, essential: false },
    { feature: "Garantie prolongée", elite: true, plus: true, essential: true },
  ];

  return (
    <div className="min-h-screen bg-background text-slate-900 font-sans">
      <Header />
      <main>
        {/* Hero Section - UNCHANGED */}
        <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
          <div className="absolute inset-0 z-0">
            <img
              src={heroDrink}
              alt="Femme buvant de l'eau pure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-white">
              <span className="text-sm font-bold uppercase tracking-widest text-[#60A5FA] mb-4 block">
                PURETÉ INÉGALÉE
              </span>
              <h1
                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                La différence que vous pouvez voir <br /> <span className="font-normal">sentir et goûter</span>
              </h1>
              <p className="font-light text-[20px] leading-[28px] text-white/95 mb-8 max-w-xl">
                Profitez d'une eau pure et délicieuse directement de votre robinet.
                Nos purificateurs d'eau d'osmose inverse éliminent 99% des contaminants pour une tranquillité d'esprit totale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                  style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                  asChild
                >
                  <NavLink to="/contact">
                    Découvrir nos systèmes
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

        {/* 2. Pourquoi choisir - Blue Section (Merged with Avantages) */}
        <section className="py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                Pourquoi choisir nos systèmes <br />d'osmose inverse ?
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                Une technologie de pointe pour une eau d'une pureté exceptionnelle tout en offrant une protection permanente pour votre foyer.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { icon: ShieldCheck, title: "Sécurité maximale", desc: "Élimine 99% des virus, bactéries et contaminants chimiques." },
                { icon: Droplets, title: "Goût incomparable", desc: "Retrouvez le vrai goût de l'eau, limpide et rafraîchissante." },
                { icon: Zap, title: "Performance durable", desc: "Des membranes de haute qualité pour une efficacité constante." },
                { icon: GlassWater, title: "Eau pure 24/7", desc: "Accès instantané à une eau de qualité restaurant." },
                { icon: CircleDollarSign, title: "Économies", desc: "Éliminez l'achat de bouteilles d'eau plastique." },
                { icon: Trash2, title: "Zéro déchet", desc: "Réduisez drastiquement votre empreinte écologique." },
                { icon: Wrench, title: "Entretien pro", desc: "Suivi et remplacement des filtres géré par nos experts." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                    <item.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Systèmes d'osmose inverse - Product Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-left mb-16">
              <h2
                className="text-slate-900 tracking-tighter mb-8 text-left"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
              >
                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Nos systèmes de purification</span>
                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">d'eau par osmose inverse</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Bricareau Elite RO", desc: "Le summum de la filtration avec reminéralisation alcaline incluse.", img: drinkingWaterImg },
                { name: "Bricareau Plus RO", desc: "Performance exceptionnelle pour les familles actives.", img: drinkingWaterImg },
                { name: "Bricareau Essential", desc: "La pureté accessible sans compromis sur la qualité.", img: drinkingWaterImg },
              ].map((product, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="bg-slate-50 aspect-square rounded-3xl mb-6 overflow-hidden flex items-center justify-center p-8 transition-all group-hover:shadow-xl group-hover:bg-white group-hover:-translate-y-2">
                    <img src={product.img} alt={product.name} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{product.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{product.desc}</p>
                  <NavLink to="#" className="text-blue-600 font-bold flex items-center gap-2 text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all">
                    EN SAVOIR PLUS <ChevronRight className="h-4 w-4" />
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Intro Content (Image Right) */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 text-left">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-8 leading-[1.1] tracking-tighter text-left">
                  Une eau de qualité <br /> restaurant à la maison.
                </h2>
                <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed">
                  Saviez-vous que la plupart des grands restaurants et cafés utilisent l'osmose inverse pour servir leur eau et préparer leur café ? Bricareau apporte cette même technologie professionnelle directement sous votre évier.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-4xl font-bold text-blue-600">99%</span>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Pureté atteinte</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-4xl font-bold text-blue-600">24h</span>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Disponibilité</span>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold flex items-center gap-2 group">
                  Explorer nos systèmes <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative z-10 group">
                  <img src={drinkingWaterImg} alt="Cuisine moderne" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute -top-10 -right-10 w-2/3 h-2/3 bg-blue-50 rounded-[3rem] -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* 6. Expertise Section (Blue Box Design) */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="lg:w-1/2 relative min-h-[400px]">
                <img src={waterTestBg} alt="Analyse d'eau" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-900/10" />
              </div>
              <div className="lg:w-1/2 bg-blue-600 text-white p-12 lg:p-20 flex flex-col justify-center items-start text-left">
                <span className="text-white/80 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                  ANALYSE ET CONSEIL
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 leading-[1.1] tracking-tighter text-left">
                  Ne devinez pas, <br /> testez votre eau.
                </h2>
                <p className="text-white/90 text-lg font-medium mb-12 leading-relaxed">
                  Chaque foyer est différent. Nos experts effectuent une analyse gratuite sur place pour identifier les contaminants spécifiques à votre résidence et vous recommander la solution optimale.
                </p>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-12 h-16 text-xl font-bold shadow-xl">
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Comparison Table */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2
              className="text-slate-900 tracking-tighter mb-16 text-center"
              style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
            >
              <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Comparez nos solutions</span>
              <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">de filtration d'eau potable</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-8 text-left text-gray-400 font-medium uppercase tracking-wider">Solutions</th>
                    {[
                      { name: "Elite RO", img: drinkingWaterImg },
                      { name: "Plus RO", img: drinkingWaterImg },
                      { name: "Essential", img: drinkingWaterImg },
                    ].map((m, i) => (
                      <th key={i} className="p-4 text-center text-gray-900 font-bold text-sm">
                        <div className="flex flex-col items-center gap-2">
                          <img
                            src={m.img}
                            alt={m.name}
                            className="w-[120px] h-[100px] object-contain mx-auto mix-blend-multiply"
                          />
                          <span className="max-w-[100px] inline-block uppercase tracking-wider text-[10px]">{m.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-8 font-medium text-gray-700">{row.feature}</td>
                      <td className="p-8 text-center">
                        {typeof row.elite === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px]">{row.elite}</span> : (row.elite ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
                      </td>
                      <td className="p-8 text-center">
                        {typeof row.plus === 'string' ? <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-[10px]">{row.plus}</span> : (row.plus ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
                      </td>
                      <td className="p-8 text-center">
                        {row.essential ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 8. Testimonials Section */}
        <TestimonialsSection />

        {/* 9. FAQ Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-4xl text-left">
            <div className="text-center mb-16">
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
                POUR VOUS ÉCLAIRER
              </span>
              <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                Questions fréquentes
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Comment fonctionne réellement l'osmose inverse ?",
                  a: "C'est un processus qui force l'eau à traverser une membrane semi-perméable ultra-fine. Cette membrane est si dense qu'elle ne laisse passer pratiquement que les molécules d'eau, retenant les polluants, les métaux lourds et les microbes qui sont ensuite évacués vers le drain.",
                },
                {
                  q: "L'osmose inverse gaspille-t-elle beaucoup d'eau ?",
                  a: "Historiquement, les systèmes étaient moins efficaces. Aujourd'hui, nos modèles haute performance réduisent considérablement le ratio d'évacuation. De plus, les économies réalisées en n'achetant plus d'eau embouteillée compensent largement cette consommation minime.",
                },
                {
                  q: "L'eau osmosée est-elle 'morte' car déminéralisée ?",
                  a: "L'osmose élimine en effet les minéraux (bons et mauvais). C'est pourquoi nos modèles Elite et Plus incluent une étape de reminéralisation à la fin du cycle pour réintroduire du calcium et du magnésium essentiels, équilibrant le pH pour une eau alcaline et saine.",
                },
                {
                  q: "Quelle est la durée de vie des filtres ?",
                  a: "Les pré-filtres et post-filtres se changent généralement tous les 6 à 12 mois. La membrane d'osmose inverse, elle, peut durer de 2 à 4 ans selon la qualité de l'eau d'entrée et l'entretien régulier du système.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-100 px-4">
                  <AccordionTrigger className="text-left font-bold text-xl hover:no-underline py-8 text-slate-800">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 text-lg leading-relaxed pb-8">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 10. Resources Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 text-left leading-[1.2] md:leading-[48px] tracking-tighter">
              Ressources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Eau municipale vs Osmose inverse",
                  img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop",
                },
                {
                  title: "Le guide complet de l'eau alcaline",
                  img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
                },
                {
                  title: "Maintenance préventive de votre osmoseur",
                  img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
                },
              ].map((art, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={art.img}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                    <h4 className="text-xl font-bold mb-4">{art.title}</h4>
                    <NavLink
                      to="#"
                      className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest"
                    >
                      EN SAVOIR PLUS <ChevronRight className="h-4 w-4" />
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Consultation Form Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3 text-left">
                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter italic text-left">
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
      </main >
      <Footer />
    </div >
  );
};

export default OsmoseFiltration;
