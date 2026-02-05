import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import {
    Check,
    ChevronRight,
    Star,
    Droplets,
    ShieldCheck,
    Smartphone,
    Search,
    Clock,
    Heart,
    Zap,
    ArrowRight,
    CheckCircle2,
    X,
    Settings,
    Wrench
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FiltreEauHauteEfficacite = () => {
    const productImage = "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png";

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* 1. Product Hero Section */}
                <section className="pt-32 pb-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2 flex flex-col items-center">
                                <img
                                    src={productImage}
                                    alt="Bricareau High Efficiency Water Filter"
                                    className="max-h-[600px] object-contain drop-shadow-2xl"
                                />
                                <div className="mt-8 flex gap-4 opacity-50">
                                    <div className="w-12 h-12 border border-slate-200 rounded p-1"><img src={productImage} className="w-full h-full object-contain" /></div>
                                    <div className="w-12 h-12 border border-slate-200 rounded p-1 opacity-50"><Smartphone className="w-full h-full p-2" /></div>
                                    <div className="w-12 h-12 border border-slate-200 rounded p-1 opacity-50"><Settings className="w-full h-full p-2" /></div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 text-left">
                                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">
                                    SYSTÈME DE FILTRATION D'EAU
                                </span>
                                <h1
                                    className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-foreground"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                >
                                    Bricareau High <span className="font-normal">Efficiency (HE)</span>
                                </h1>
                                <p className="font-light text-[20px] leading-[28px] text-slate-600 mb-8">
                                    L'adoucisseur et filtre d'eau le plus efficace au monde. Profitez d'une eau d'une pureté absolue tout en réalisant des économies d'eau et de sel inégalées.
                                </p>
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 mb-12"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <NavLink to="/contact">Démarrer ici</NavLink>
                                </Button>
                                <div className="space-y-6 border-t border-slate-100 pt-8">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <Zap className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Technologie HE (Haute Efficacité)</h4>
                                            <p className="text-slate-500 text-sm">Réduit jusqu'à 46 % de votre consommation de sel et d'eau.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <Smartphone className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Application Bricareau Connect</h4>
                                            <p className="text-slate-500 text-sm">Contrôlez votre consommation d'eau et recevez des alertes sur votre mobile.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Aqua-Sensor® Intelligent</h4>
                                            <p className="text-slate-500 text-sm">Détecte automatiquement le besoin de régénération pour plus d'économies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Exclusivités technologiques */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 order-2 lg:order-1">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    Exclusivités technologiques de Bricareau
                                </h2>
                                <div className="space-y-8">
                                    <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                            <div className="w-2 h-8 bg-blue-600 rounded-full" />
                                            Aqua-Sensor® Digital
                                        </h3>
                                        <p className="font-light text-[20px] leading-[28px] text-slate-600">
                                            Le cerveau de votre système. Contrairement aux systèmes basés sur le temps, notre capteur breveté ajuste la régénération en fonction de l'utilisation réelle et de la dureté de l'eau.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                            <div className="w-2 h-8 bg-blue-600 rounded-full" />
                                            Bricareau Connect App
                                        </h3>
                                        <p className="font-light text-[20px] leading-[28px] text-slate-600">
                                            Une tranquillité d'esprit totale. Suivez votre consommation, recevez des alertes de fuite ou de niveau de sel bas directement sur votre téléphone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2">
                                <img
                                    src={productImage}
                                    alt="Technologie Bricareau HE"
                                    className="w-full max-w-md mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Filtration Intelligente (Benefits) */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                            Filtration intelligente qui améliore votre vie au quotidien
                        </h2>
                        <p className="font-light text-[20px] leading-[28px] text-slate-600 mb-16 max-w-3xl mx-auto">
                            Plus qu'un simple filtre, c'est une protection complète pour votre santé et votre maison.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Fini le goût et les odeurs", desc: "Élimine le chlore et les sédiments pour une eau pure au robinet.", icon: Droplets },
                                { title: "Protection des appareils", desc: "Empêche l'accumulation de tartre dans votre chauffe-eau et tuyauterie.", icon: ShieldCheck },
                                { title: "Peau et cheveux plus doux", desc: "Ressentez la différence dès la première douche avec une eau sans calcaire.", icon: Heart },
                                { title: "Économies d'énergie", desc: "Des appareils plus propres fonctionnent avec une efficacité maximale.", icon: Zap }
                            ].map((benefit, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-8 transition-all hover:-translate-y-2">
                                    <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                                        <benefit.icon className="w-10 h-10 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-sm">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Blue CTA Banner */}
                <section className="py-16 bg-blue-600 text-white">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">Prêt pour une meilleure eau ?</h2>
                            <p className="text-blue-100 text-lg font-medium">Découvrez pourquoi Bricareau est le leader mondial de l'eau.</p>
                        </div>
                        <Button className="bg-white text-blue-600 hover:bg-slate-100 rounded-full px-12 h-16 text-xl font-bold shadow-lg transition-transform hover:scale-105">
                            Trouver un expert
                        </Button>
                    </div>
                </section>

                {/* 5. Trust Section (Child Drinking) */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                                    <img
                                        src="/src/assets/boire-eau-robinet.jpg"
                                        alt="Enfant buvant de l'eau"
                                        className="w-full h-full object-cover aspect-[4/3]"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2 text-left">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    Le choix intelligent <br /> pour votre maison.
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        "Analysez votre eau gratuitement avec nos experts",
                                        "Réduisez les contaminants invisibles nocifs",
                                        "Améliorez la santé de votre peau et de vos cheveux",
                                        "Contribuez à un environnement plus vert sans plastique"
                                    ].map((point, i) => (
                                        <div key={i} className="flex gap-4 items-center">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                <Check className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <p className="text-lg text-slate-700 font-medium">{point}</p>
                                        </div>
                                    ))}
                                </div>
                                <Button className="mt-12 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-10 h-14 text-lg font-bold">
                                    En savoir plus sur nos tests
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Service Plan Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-16 leading-[1.1] tracking-tighter">
                            Plan d'entretien et tranquillité d'esprit
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                { title: "Bricareau Care", desc: "Entretien préventif annuel et remplacement des filtres.", icon: Clock },
                                { title: "Garantie à vie", desc: "Couverture totale sur les pièces majeures de votre système.", icon: ShieldCheck },
                                { title: "Service Prioritaire", desc: "Intervention rapide sous 24h en cas de besoin urgent.", icon: Zap }
                            ].map((plan, i) => (
                                <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                                        <plan.icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{plan.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{plan.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Comparison Table */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-16 text-center leading-[1.1] tracking-tighter">
                            Pourquoi choisir le Bricareau HE ?
                        </h2>
                        <div className="overflow-x-auto rounded-[3rem] border border-slate-100 shadow-xl bg-white">
                            <table className="w-full min-w-[800px]">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="p-8 text-left text-slate-400 font-medium uppercase tracking-wider">CARACTÉRISTIQUES</th>
                                        <th className="p-8 text-center text-blue-600 font-black text-2xl">Bricareau HE</th>
                                        <th className="p-8 text-center text-slate-400 font-bold text-xl uppercase tracking-tighter">AUTRES FILTRES</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { feat: "Efficacité certifiée LEED", he: true, other: false },
                                        { feat: "Connectivité Mobile (App)", he: true, other: "Rarement" },
                                        { feat: "Capteur Aqua-Sensor® Patenté", he: true, other: false },
                                        { feat: "Régénération Proportionnelle", he: true, other: false },
                                        { feat: "Double filtration interne", he: true, other: "Optionnel" },
                                        { feat: "Garantie de 10 ans minimum", he: true, other: false }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-8 font-bold text-slate-700 text-lg">{row.feat}</td>
                                            <td className="p-8 text-center">
                                                {row.he === true ? <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto" strokeWidth={3} /> : <span className="text-slate-500 font-bold">{row.he}</span>}
                                            </td>
                                            <td className="p-8 text-center">
                                                {row.other === false ? <X className="w-8 h-8 text-slate-300 mx-auto" strokeWidth={3} /> : <span className="text-slate-400 font-medium italic">{row.other}</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 8. Installation Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-8 leading-[1.1] tracking-tighter">Installation. Tranquille.</h2>
                            <p className="font-light text-[20px] leading-[28px] text-slate-600 mb-16">
                                Nos techniciens certifiés Bricareau ne se contentent pas d'installer votre système. Ils s'assurent qu'il fonctionne à son plein potentiel pour des années de service fiable.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {[
                                    { title: "Planification expertise", desc: "Diagnostic gratuit de votre plomberie." },
                                    { title: "Installation certifiée", desc: "Respect strict des normes locales." },
                                    { title: "Mise en service", desc: "Paramétrage précis selon votre eau." },
                                    { title: "Formation client", desc: "On vous montre comment ça marche." }
                                ].map((step, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="text-4xl font-black text-blue-100 mb-4 italic">0{i + 1}</div>
                                        <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed font-medium uppercase tracking-wider">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-16 text-center text-slate-900 leading-[1.1] tracking-tighter">
                            Questions fréquemment posées
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                { q: "Quelle est la différence entre le Bricareau HE et un filtre standard ?", a: "Le Bricareau HE (High Efficiency) utilise des capteurs intelligents et une technologie brevetée pour réduire jusqu'à 46% de consommation de sel et d'eau par rapport à un filtre traditionnel." },
                                { q: "L'application mobile est-elle payante ?", a: "L'application Bricareau Connect est incluse avec tous les modèles HE Connect. Elle vous permet de suivre votre consommation et de recevoir des alertes sans frais supplémentaires." },
                                { q: "À quelle fréquence faut-il remplacer les filtres ?", a: "Cela dépend de la qualité de votre eau d'entrée. En moyenne, un entretien annuel est recommandé pour vérifier les résines et remplacer les pré-filtres si nécessaire." },
                                { q: "Le système HE filtre-t-il aussi le chlore ?", a: "Oui, nous pouvons configurer votre système HE avec des médias filtrants spécifiques pour éliminer le chlore, les goûts et les odeurs, en plus d'adoucir l'eau." }
                            ].map((item, id) => (
                                <AccordionItem key={id} value={`faq-${id}`} className="border-b-slate-100 last:border-0 mb-4 rounded-2xl overflow-hidden border">
                                    <AccordionTrigger className="px-8 py-6 hover:bg-slate-50/50 hover:no-underline text-left font-bold text-lg text-slate-800">
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-8 pb-6 font-light text-[20px] leading-[28px] text-slate-600">
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* 10. Reviews & Testimonials */}
                <TestimonialsSection />

                {/* 11. Consultation Promo */}
                <section className="py-24 bg-slate-100 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="bg-white rounded-[4rem] shadow-2xl flex flex-col lg:flex-row items-center overflow-hidden">
                            <div className="lg:w-1/2 p-12 lg:p-24 text-left">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                                    Offrez-vous le confort que vous méritez.
                                </h2>
                                <p className="font-light text-[20px] leading-[28px] text-slate-600 mb-12">
                                    Plus de 11 millions de familles font confiance à Bricareau. Rejoignez-les dès aujourd'hui et transformez votre quotidien.
                                </p>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-xl font-bold shadow-xl transition-all hover:scale-105" asChild>
                                    <NavLink to="/contact">Planifier ma consultation</NavLink>
                                </Button>
                            </div>
                            <div className="lg:w-1/2 self-stretch">
                                <img
                                    src="/src/assets/young-nude-woman-taking-relaxing-foamy-bath.jpg"
                                    alt="Woman relaxing in bath"
                                    className="w-full h-full object-cover min-h-[400px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 12. Related Products */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-8 text-center leading-[1.1] tracking-tighter">Découvrez d'autres solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Osmose Inverse Bricareau", desc: "La pureté ultime pour votre eau de boisson.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
                                { title: "Désinfection UV", desc: "Protection totale contre les bactéries.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" },
                                { title: "Solutions Industrielles", desc: "L'expertise Bricareau pour votre entreprise.", image: "https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png" }
                            ].map((prod, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="bg-slate-50 rounded-[2rem] p-12 mb-8 flex items-center justify-center transition-transform group-hover:scale-105 transition-all duration-500">
                                        <img src={prod.image} alt={prod.title} className="max-h-56 object-contain drop-shadow-lg" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{prod.title}</h3>
                                    <p className="text-slate-500 text-sm mb-6">{prod.desc}</p>
                                    <Button variant="link" className="p-0 text-blue-600 font-bold group-hover:underline">
                                        DÉCOUVRIR <ChevronRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default FiltreEauHauteEfficacite;
