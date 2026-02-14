import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroBath from "@/assets/young-nude-woman-taking-relaxing-foamy-bath.jpg";
import kitchenImg from "@/assets/18036672_SIE_2720_1530_21_04_30_SIE_CRM_Dishwasher_Hand_Taking_Out_Wine_Glass_Basket_Motiv_11_0017.webp";
import untitledImg from "@/assets/avantages conditionneurs sans sel.jpg";
import mceclip0Img from "@/assets/mceclip0.png";
import bathroomImg from "@/assets/2705.jpg";
import {
    ArrowRight,
    Droplets,
    Heart,
    Shield,
    TrendingDown,
    Shirt,
    Zap,
    Check,
    CheckCircle2,
    ChevronRight,
    Star,
    Play,
    X,
    Sparkles,
    Clock,
    Home,
    Award,
    HandCoins
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ConsultationFormSection from "@/components/ConsultationFormSection";


const Adoucissement = () => {
    return (
        <div className="min-h-screen bg-background font-sans text-slate-900">
            <Header />
            <main>
                {/* 1. Hero Section */}
                <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroBath}
                            alt="Homme prenant son bain"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 lg:bg-gradient-to-r lg:from-white/40 lg:to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block">
                                ADOUCISSEURS D'EAU
                            </span>
                            <h1
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                Une eau douce, <span className="font-normal">meilleure pour vous et votre maison</span>
                            </h1>
                            <p className="text-lg font-light leading-relaxed text-white/95 mb-8 max-w-xl text-justify">
                                Redécouvrez le confort d'une eau soyeuse protégeant votre peau et vos appareils. Alliez économies durables et bien-être absolu au quotidien.
                            </p>
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                asChild
                            >
                                <a href="#consultation">Planifier une consultation gratuite</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 2. Why choose our water softeners Section */}
                <section className="py-24 bg-blue-600 text-white text-center">
                    <div className="container mx-auto px-6 text-center">
                        <div className="text-center mb-16">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                                Les avantages de l'adoucissement d'eau
                            </h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
                            {[
                                { icon: Droplets, title: "Qualité supérieure", desc: "Une douceur incomparable pour votre peau et vos cheveux dès la première douche." },
                                { icon: Shield, title: "Protection totale", desc: "Prolongez la durée de vie de votre plomberie et de vos électroménagers coûteux." },
                                { icon: Shirt, title: "Linge plus doux", desc: "Des vêtements qui restent éclatants et souples plus longtemps, sans adoucissants." },
                                { icon: HandCoins, title: "Économies garanties", desc: "Réduisez vos factures d'énergie et vos dépenses en savons et détergents de 50%." },

                            ].map((item, id) => (
                                <div key={id} className="flex flex-col items-center group w-full sm:w-[calc(50%-3rem)] lg:w-[calc(25%-3rem)]">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <item.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h4 className="text-2xl font-medium mb-4 tracking-tight">{item.title}</h4>
                                    <p className="text-lg font-light leading-relaxed text-blue-100 text-justify">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* 3. Water Softeners Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 mb-20">
                            <div className="lg:w-1/2">
                                <img
                                    src={kitchenImg}
                                    alt="Cuisine moderne avec eau adoucie"
                                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    L'éclat d'une vaisselle protégée, la douceur d'une eau maîtrisée.
                                </h2>
                                <p className="text-lg font-light leading-relaxed text-gray-600 mb-8 text-justify">
                                    Offrez à votre foyer le luxe d'une eau sans calcaire. Nos adoucisseurs de pointe éliminent le tartre à la source, garantissant non seulement une vaisselle étincelante sans aucune trace, mais aussi une protection durable de vos appareils électroménagers et de votre plomberie. Redécouvrez la brillance et la douceur dans chaque recoin de votre maison.
                                </p>
                                <NavLink to="/adoucisseur-eau-residentiel" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
                                    Découvrir nos adoucisseurs d'eau
                                </NavLink>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                            {[
                                { title: "Économies réelles", desc: "Réduisez vos dépenses. Économisez jusqu'à 30% sur vos produits d'entretien et réduisez drastiquement vos factures d'énergie." },
                                { title: "Douceur infinie", desc: "Une peau et des cheveux sublimés. Retrouvez la souplesse naturelle de votre peau et l'éclat de vos cheveux dès la première douche" },
                                { title: "Protection totale", desc: "Préservez vos installations. Dites adieu aux pannes d'électroménager et aux traces de tartre sur votre robinetterie." }
                            ].map((item, i) => (
                                <div key={i}>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="text-blue-600 font-bold italic">0{i + 1}</span> {item.title}
                                    </h3>
                                    <p className="text-lg font-light leading-relaxed text-gray-500 text-justify">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Portable Water Softeners Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20">
                            <div className="lg:w-1/2">
                                <img
                                    src={mceclip0Img}
                                    alt="Cuisine moderne avec eau adoucie"
                                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-left">
                                    La douceur sans frontières : l'eau douce vous suit partout.
                                </h2>
                                <p className="text-lg font-light leading-relaxed text-gray-600 mb-8 text-justify">
                                    Ne laissez plus l’eau dure des campings ou des ports abîmer vos cheveux et vos équipements. Profitez d'une eau de qualité domestique dans votre VR, votre bateau ou votre chalet avec notre adoucisseur ultra-compact.
                                </p>
                                <NavLink to="/adoucisseurs-portables" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
                                    Découvrir nos adoucisseurs d'eau portables
                                </NavLink>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                            {[
                                { title: "Ultra-Compact & Léger", desc: "Conçu pour les petits espaces. Sa taille réduite lui permet de se glisser dans n'importe quel compartiment de rangement sans alourdir votre véhicule." },
                                { title: "Plug & Play", desc: "Aucun outil requis. Se branche directement sur votre tuyau d'arrosage ou votre arrivée d'eau standard. Une mise en service instantanée, sans plombier." },
                                { title: "Protection Mobile", desc: "Sauvez vos équipements. Protégez la tuyauterie de votre VR et votre chauffe-eau contre les eaux dures variables des terrains de camping." }
                            ].map((item, i) => (
                                <div key={i}>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="text-blue-600 font-bold italic">0{i + 1}</span> {item.title}
                                    </h3>
                                    <p className="text-lg font-light leading-relaxed text-gray-500 text-justify">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Water Conditionners without salt Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 mb-20">
                            <div className="lg:w-1/2">
                                <img
                                    src={untitledImg}
                                    alt="Femme se lavant les mains"
                                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                                />
                            </div>
                            <div className="lg:w-1/2 text-left">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    Zéro sel. Zéro électricité. Zéro souci.
                                </h2>
                                <p className="text-lg font-light leading-relaxed text-gray-600 mb-8 text-justify">
                                    Le secret d'un linge éclatant et d'une vaisselle sans traces. Sans l'ajout de sel, votre eau devient votre meilleure alliée beauté et ménage.
                                </p>
                                <NavLink to="/conditionneurs-sans-sel" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
                                    Découvrir nos conditionneurs d'eau sans sel
                                </NavLink>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                            {[
                                { title: "100% Écologique", desc: "Contrairement aux systèmes au sel, vous ne rejetez aucune saumure dans l'environnement et ne consommez pas d'eau pour la régénération." },
                                { title: "Zéro Contrainte", desc: "Oubliez les sacs de sel. Profitez d'une protection permanente sans électricité, sans réglages et sans maintenance mensuelle. Installez-le, oubliez-le." },
                                { title: "Eau Préservée", desc: "Gardez les bons minéraux. Le calcaire est neutralisé mais le calcium et le magnésium restent dans l'eau. Une eau saine pour votre santé et celle de votre famille." }
                            ].map((item, i) => (
                                <div key={i}>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="text-blue-600 font-bold italic">0{i + 1}</span> {item.title}
                                    </h3>
                                    <p className="text-lg font-light leading-relaxed text-gray-500 text-justify">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Testimonials */}
                <TestimonialsSection />

                {/* 7. Water Testing Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
                                <img
                                    src={bathroomImg}
                                    alt="Analyse de la qualité de l'eau"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
                            </div>
                            <div className="lg:w-1/2 bg-blue-600 text-white p-12 lg:p-20 flex flex-col justify-center items-start text-left">
                                <span className="text-white/80 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                    Qualité de l'eau
                                </span>
                                <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    L'excellence commence par une eau parfaite.
                                </h2>
                                <p className="text-lg font-light leading-relaxed text-white/90 mb-12 text-justify">
                                    Le luxe, c'est de ne pas avoir à se soucier de la qualité de ce que l'on consomme. Offrez-vous la sérénité d'une eau analysée par des experts, pour une maison où tout brille, sans effort et sans compromis.
                                </p>
                                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-12 h-16 text-xl font-bold shadow-xl transition-all hover:scale-105" asChild>
                                    <NavLink to="/water-testing">Demander une analyse d'eau</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">FAQ </span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {[
                                    { q: "Qu'est-ce qu'un adoucisseur d'eau ?", a: "Un adoucisseur d'eau est un système de filtration qui élimine le calcium et le magnésium, les minéraux responsables de la dureté de l'eau, par un processus appelé échange d'ions." },
                                    { q: "Quels sont les avantages d'une eau adoucie ?", a: "L'eau adoucie rend la peau et les cheveux plus souples, prévient les dépôts de calcaire dans la tuyauterie, prolonge la vie de vos appareils ménagers et réduit votre consommation de savon et détergents jusqu'à 50%." },
                                    { q: "Est-ce que l'eau adoucie est potable ?", a: "Oui, l'eau adoucie est parfaitement potable. Le processus d'adoucissement ajoute une infime quantité de sodium, mais bien moins que ce que l'on trouve naturellement dans une tranche de pain blanc." },
                                    { q: "Comment savoir si mon eau est dure ?", a: "Les signes incluent des taches blanches sur la vaisselle, une accumulation de calcaire sur les robinets, une peau sèche après la douche et un besoin excessif de savon pour faire de la mousse." },
                                    { q: "À quelle fréquence faut-il ajouter du sel ?", a: "Pour une famille moyenne, il faut généralement vérifier et ajouter du sel une fois par mois. Il est recommandé de maintenir le bac à sel au moins au tiers de sa capacité." },
                                    { q: "Quel type de sel dois-je utiliser ?", a: "Nous recommandons d'utiliser du sel en pastilles de haute pureté (pureté de 99 % minimum). Cela évite l'accumulation de résidus dans le bac à sel et assure une performance optimale." },
                                    { q: "Un adoucisseur d'eau élimine-t-il le fer ?", a: "Un adoucisseur peut éliminer de petites quantités de fer ferreux (fer clair). Cependant, pour une eau avec une forte teneur en fer, nous recommandons un système de filtration spécialisé en amont." },
                                    { q: "Quelle est la durée de vie d'un adoucisseur Bricareau ?", a: "Grâce à notre conception robuste et à une installation professionnelle, nos systèmes d'adoucissement ont une durée de vie moyenne de 15 à 20 ans avec un entretien minimal." },
                                    { q: "L'installation prend-elle beaucoup de place ?", a: "Nos modèles modernes sont conçus pour être compacts. Ils s'installent généralement près de l'entrée d'eau principale, souvent dans un sous-sol, un garage ou un placard technique." },
                                    { q: "Est-ce que l'adoucisseur gaspille beaucoup d'eau ?", a: "Non, nos systèmes 'High Efficiency' sont dotés d'une technologie intelligente qui calcule exactement quand la régénération est nécessaire, économisant ainsi de l'eau et du sel." },
                                    { q: "Peut-on installer un adoucisseur sur une eau de puits ?", a: "Absolument. En fait, les propriétaires de puits sont nos clients les plus fréquents car l'eau souterraine est naturellement chargée en minéraux de dureté." },
                                    { q: "Qu'est-ce que la régénération de l'adoucisseur ?", a: "La régénération est le cycle de nettoyage automatique où l'appareil utilise une solution de saumure pour rincer les minéraux accumulés sur les résines, les rendant prêtes à adoucir l'eau à nouveau." },
                                    { q: "L'adoucisseur nécessite-t-il un entretien professionnel ?", a: "Nous recommandons une vérification annuelle par l'un de nos techniciens pour optimiser les réglages, nettoyer les composants internes et garantir que votre eau reste de qualité supérieure." },
                                    { q: "L'eau adoucie est-elle meilleure pour les vêtements ?", a: "Oui, les minéraux de dureté rendent les fibres textiles rêches et ternes. L'eau adoucie permet de garder vos vêtements plus souples, plus éclatants et plus durables." },
                                    { q: "Quelle est la garantie offerte par Bricareau ?", a: "Bricareau offre l'une des garanties les plus solides du marché, couvrant la bouteille de résine, la tête de contrôle et les composants internes pour votre tranquillité d'esprit totale." }
                                ].map((item, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-gray-200">
                                        <AccordionTrigger className="text-left text-base font-medium leading-6 hover:no-underline py-6" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base font-light leading-6 text-gray-600 pb-6 text-justify" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* 9. Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Ressources</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Comment choisir son adoucisseur", img: untitledImg },
                                { title: "L'importance de l'eau adoucie", img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop" },
                                { title: "Entretien de votre système Bricareau", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop" }
                            ].map((art, i) => (
                                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100">
                                    <div className="h-56 overflow-hidden">
                                        <img src={art.img} alt={art.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink to="#" className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest uppercase">
                                                EN SAVOIR PLUS <ChevronRight className="h-4 w-4" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Consultation Form Section */}
                <ConsultationFormSection id="consultation" />
            </main>
            <Footer />
        </div>
    );
};

export default Adoucissement;
