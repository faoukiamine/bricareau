import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import {
    Check,
    ChevronRight,
    Droplets,
    ShieldCheck,
    Sparkles,
    Zap,
    Clock,
    ArrowRight,
    CheckCircle2,
    X,
    Filter,
    Settings,
    Smartphone,
    Wrench,
    ThumbsUp,
    Shield
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const RO6 = () => {
    // Note: Using a representative image for Aquasential RO
    const productImage = "https://bricareau.com/wp-content/uploads/2025/01/Aquasential-RO-System-1.png";

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
                                    alt="Système d'osmose inverse Aquasential Bricareau - Filtration d'eau potable ultra-pure sous évier"
                                    className="max-h-[500px] object-contain drop-shadow-2xl"
                                />
                                <div className="mt-8 flex gap-4 opacity-50">
                                    <div className="w-12 h-12 border border-slate-200 rounded p-1"><img src={productImage} alt="Icône du système d'osmose inverse Aquasential HE Bricareau" className="w-full h-full object-contain" /></div>
                                    <div className="w-12 h-12 border border-slate-200 rounded p-1 opacity-50"><Filter className="w-full h-full p-2" /></div>
                                    <div className="w-12 h-12 border border-slate-200 rounded p-1 opacity-50"><Settings className="w-full h-full p-2" /></div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 text-left">
                                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">
                                    SYSTÈME D'OSMOSE INVERSE
                                </span>
                                <h1
                                    className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-foreground text-justify max-w-xl"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                >
                                    Aquasential® <span className="font-normal">Osmose Inverse</span>
                                </h1>
                                <p className="font-light text-[20px] leading-snug text-slate-600 mb-8">
                                    Découvrez le système de filtration d'eau potable le plus intelligent au monde. Éliminez jusqu'à 99 % des contaminants pour une eau pure et délicieuse directement de votre robinet.
                                </p>
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 mb-12"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <NavLink to="/contact">Démarrer ici</NavLink>
                                </Button>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 pt-8">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Filtration certifiée</h4>
                                            <p className="text-slate-500 text-xs text-left">Élimine plus de 90 contaminants, incluant le plomb et le l'arsenic.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <Smartphone className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Suivi intelligent</h4>
                                            <p className="text-slate-500 text-xs text-left">Surveillez la qualité de l'eau et la durée de vie des filtres depuis votre smartphone.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Advanced Features */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 order-2 lg:order-1 text-left">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-left">
                                    La technologie de pointe au service de votre santé
                                </h2>
                                <div className="space-y-6">
                                    <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                            <div className="w-2 h-8 bg-blue-600 rounded-full" />
                                            Système modulaire évolutif
                                        </h3>
                                        <p className="font-light text-[20px] leading-snug text-slate-600 text-left">
                                            Le système Aquasential peut être configuré pour répondre précisément aux besoins spécifiques de votre eau, avec des options pour l'alcalinité, la reminéralisation et plus encore.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                            <div className="w-2 h-8 bg-blue-600 rounded-full" />
                                            Design compact et élégant
                                        </h3>
                                        <p className="font-light text-[20px] leading-snug text-slate-600 text-left">
                                            Conçu pour s'intégrer discrètement sous votre évier sans sacrifier l'espace de stockage précieux, tout en offrant une performance de qualité industrielle.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2">
                                <img
                                    src={productImage}
                                    alt="Détails technologiques du système Aquasential RO pour une eau cristalline"
                                    className="w-full max-w-md mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Benefit Grids */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-16 tracking-tighter leading-[1.2] md:leading-[48px]">
                            Une eau pure pour chaque moment
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Boire en confiance", desc: "Plus de plomb, de chlore ou de contaminants nocifs.", icon: Droplets },
                                { title: "Préparation des repas", desc: "Révélez les vraies saveurs de vos aliments avec une eau pure.", icon: Sparkles },
                                { title: "Café et thé parfaits", desc: "Une eau sans minéraux durs pour un goût optimal.", icon: Zap },
                                { title: "Écologique", desc: "Remplacez des milliers de bouteilles de plastique par an.", icon: ThumbsUp }
                            ].map((benefit, i) => (
                                <div key={i} className="flex flex-col items-center p-8 transition-all hover:bg-slate-50 rounded-3xl">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                                        <benefit.icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                                    <p className="text-slate-500 leading-snug text-sm">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Installation & Maintenance */}
                <section className="py-24 bg-slate-900 text-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-[32px] md:text-[48px] font-normal mb-16 italic text-white leading-[1.2] md:leading-[48px] tracking-tighter">Installation et entretien par nos experts</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full border border-blue-500 flex items-center justify-center mb-6 text-blue-500 font-bold text-2xl italic">1</div>
                                    <h3 className="text-xl font-bold mb-4">Analyse gratuite</h3>
                                    <p className="text-slate-400 text-sm">Nous commençons par tester l'eau à votre domicile.</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full border border-blue-500 flex items-center justify-center mb-6 text-blue-500 font-bold text-2xl italic">2</div>
                                    <h3 className="text-xl font-bold mb-4">Installation certifiée</h3>
                                    <p className="text-slate-400 text-sm">Nos techniciens règlent tout pour une performance optimale.</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full border border-blue-500 flex items-center justify-center mb-6 text-blue-500 font-bold text-2xl italic">3</div>
                                    <h3 className="text-xl font-bold mb-4">Entretien continu</h3>
                                    <p className="text-slate-400 text-sm">Remplacement périodique des filtres et vérification du système.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Blue CTA Banner */}
                <section className="py-16 bg-blue-600 text-white">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">Prêt à goûter la différence ?</h2>
                            <p className="text-blue-100 text-lg">Rejoignez des millions de familles satisfaites par Bricareau.</p>
                        </div>
                        <Button className="bg-white text-blue-600 hover:bg-slate-100 rounded-full px-12 h-16 text-xl font-bold shadow-lg">
                            Démarrer ici
                        </Button>
                    </div>
                </section>

                {/* 6. Comparison Table */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-16 text-center leading-[1.2] md:leading-[48px] tracking-tighter">
                            Comment Bricareau se compare
                        </h2>
                        <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
                            <table className="w-full min-w-[800px]">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="p-8 text-left text-slate-400 font-medium uppercase tracking-wider">CARACTÉRISTIQUES</th>
                                        <th className="p-8 text-center text-blue-600 font-black text-2xl italic">AQUASENTIAL RO</th>
                                        <th className="p-8 text-center text-slate-400 font-bold text-xl uppercase tracking-tighter">FILTRES STANDARDS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { feat: "Filtration en 5 étapes", ro: true, std: false },
                                        { feat: "Élimination de 99% des impuretés", ro: true, std: false },
                                        { feat: "Application mobile de suivi", ro: true, std: false },
                                        { feat: "Garantie à vie disponible", ro: true, std: "Variable" },
                                        { feat: "Analyse d'eau professionnelle incluse", ro: true, std: false }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-8 font-bold text-slate-700 text-lg text-left">{row.feat}</td>
                                            <td className="p-8 text-center">
                                                {row.ro === true ? <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto" strokeWidth={3} /> : <span className="text-slate-500 font-bold">{row.ro}</span>}
                                            </td>
                                            <td className="p-8 text-center">
                                                {row.std === false ? <X className="w-8 h-8 text-slate-300 mx-auto" strokeWidth={3} /> : <span className="text-slate-400 font-medium italic">{row.std}</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 7. Consultation Image Break */}
                <section className="py-24 bg-slate-50 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="bg-white rounded-[3rem] shadow-2xl flex flex-col lg:flex-row items-center overflow-hidden">
                            <div className="lg:w-1/2 p-12 lg:p-24 text-left">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-left">
                                    Parlez à l'un de nos experts de l'eau.
                                </h2>
                                <p className="font-light text-[20px] leading-snug text-slate-600 mb-12">
                                    Plus de 85 ans d'expérience pour vous aider à trouver la solution parfaite pour votre foyer. Simple, gratuit et sans pression.
                                </p>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-xl font-bold shadow-xl transition-all hover:scale-105" asChild>
                                    <NavLink to="/contact">Planifier ma consultation</NavLink>
                                </Button>
                            </div>
                            <div className="lg:w-1/2 self-stretch">
                                <img
                                    src="/src/assets/discover_expert.jpg"
                                    alt="Expert Bricareau lors d'une consultation personnalisée pour traitement d'eau à domicile"
                                    className="w-full h-full object-cover min-h-[400px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 text-center leading-[1.2] md:leading-[48px] tracking-tighter">
                            Questions fréquentes
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                { q: "Qu'est-ce que l'osmose inverse ?", a: "C'est un processus qui utilise une membrane semi-perméable pour éliminer les impuretés, le sel et d'autres molécules de l'eau potable." },
                                { q: "Dois-je remplacer les filtres moi-même ?", a: "Vous pouvez le faire, mais la plupart de nos clients préfèrent que nos techniciens s'occupent de tout pour garantir que le système fonctionne parfaitement." },
                                { q: "Le système prend-il beaucoup de place ?", a: "Non, l'Aquasential RO a été conçu spécifiquement pour être compact et s'insérer facilement sous la plupart des éviers de cuisine standards." },
                                { q: "L'eau osmosée est-elle meilleure pour la santé ?", a: "En éliminant jusqu'à 99% des contaminants incluant le plomb et le chlore, vous obtenez une eau d'une pureté exceptionnelle, idéale pour l'hydratation quotidienne." }
                            ].map((item, id) => (
                                <AccordionItem key={id} value={`faq-${id}`} className="border-b-slate-100 last:border-0 mb-4 rounded-2xl overflow-hidden border">
                                    <AccordionTrigger className="px-8 py-6 hover:bg-slate-50/50 hover:no-underline text-left font-bold text-lg text-slate-800">
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-8 pb-6 font-light text-[20px] leading-snug text-slate-600 text-left">
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* 11. Testimonials */}
                <TestimonialsSection filterProduct="/ro-6" />
            </main>

            <Footer />
        </div>
    );
};

export default RO6;
