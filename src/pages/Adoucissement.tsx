import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroBath from "@/assets/kid-playing-bathtub.jpg";
import kitchenImg from "@/assets/18036672_SIE_2720_1530_21_04_30_SIE_CRM_Dishwasher_Hand_Taking_Out_Wine_Glass_Basket_Motiv_11_0017.webp";
import untitledImg from "@/assets/Untitled23.png";
import mceclip0Img from "@/assets/mceclip0.png";
import bathroomImg from "@/assets/contemporary-bathroom-elements.jpg";
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
    Home
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
                            <p className="font-light text-[20px] leading-[28px] text-white/95 mb-8 max-w-xl">
                                Une solution pour toute la famille. L'eau dure agresse l'épiderme et rend les cheveux ternes. Redécouvrez le plaisir d'un bain hydratant.
                            </p>
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                Démarrer ici
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            <div className="lg:w-1/2">
                                <img
                                    src="https://bricareau.com/wp-content/uploads/2025/01/cl10em-00-sc_bt1833-removebg-preview-1.png"
                                    alt="Adoucisseur"
                                    className="w-full max-w-md mx-auto"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    Éliminez les coûts, économisez l'énergie et simplifiez vos tâches
                                </h2>
                                <p className="font-light text-[20px] leading-[28px] text-gray-600 mb-8 max-w-xl">
                                    Nos adoucisseurs d'eau haute technologie réduisent le calcaire, prolongent la vie de
                                    vos appareils et rendent le nettoyage plus facile que jamais.
                                </p>
                                <NavLink to="/contact-residentiel" className="text-blue-600 font-bold flex items-center gap-2 group">
                                    EN SAVOIR PLUS <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-[#00153D] text-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-[32px] md:text-[48px] font-normal text-center mb-16 text-white leading-[1.2] md:leading-[48px] tracking-tighter">Avantages de l'adoucissement <br />de l'eau</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center lg:px-20">
                            {[
                                { icon: Heart, text: "Peau & Cheveux doux" },
                                { icon: Shield, text: "Protection Plomberie" },
                                { icon: Shirt, text: "Linge soyeux" },
                                { icon: TrendingDown, text: "Économies d'énergie" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full border border-blue-400 flex items-center justify-center mb-4">
                                        <item.icon className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <span className="font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 mb-20">
                            <div className="lg:w-1/2">
                                <img
                                    src={kitchenImg}
                                    alt="Cuisine moderne avec eau adoucie"
                                    className="rounded-2xl shadow-xl w-full"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    L'éclat d'une vaisselle protégée, la douceur d'une eau maîtrisée.
                                </h2>
                                <p className="font-light text-[20px] leading-[28px] text-gray-600 mb-8">
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
                                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20">
                            <div className="lg:w-1/2">
                                <img
                                    src={mceclip0Img}
                                    alt="Cuisine moderne avec eau adoucie"
                                    className="rounded-2xl shadow-xl w-full"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-left">
                                    La douceur sans frontières : l'eau douce vous suit partout.
                                </h2>
                                <p className="font-light text-[20px] leading-[28px] text-gray-600 mb-8">
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
                                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 mb-20">
                            <div className="lg:w-1/2">
                                <img
                                    src={untitledImg}
                                    alt="Femme se lavant les mains"
                                    className="rounded-2xl shadow-xl w-full"
                                />
                            </div>
                            <div className="lg:w-1/2 text-left">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    Zéro sel. Zéro électricité. Zéro souci.
                                </h2>
                                <p className="font-light text-[20px] leading-[28px] text-gray-600 mb-8">
                                    Le secret d'un linge éclatant et d'une vaisselle sans traces. Sans l'ajout de sel, votre eau devient votre meilleure alliée beauté et ménage.
                                </p>
                                <Button className="bg-blue-600 text-white rounded-full px-12 h-14 text-lg font-bold" asChild>
                                    <NavLink to="/conditionneurs-sans-sel">Découvrir nos conditionneurs d'eau sans sel</NavLink>
                                </Button>
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
                                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-16 leading-[1.1] tracking-tighter text-center">Comparer nos systèmes d'adoucissement d'eau</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-medium uppercase tracking-widest text-xs">MODELLES</th>
                                        <th className="p-8 text-center text-gray-900 font-bold text-xl">Bricareau HE</th>
                                        <th className="p-8 text-center text-gray-900 font-bold text-xl text-gray-400 font-normal italic">Bricareau Medallist</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { f: "Technologie High Efficiency", h: true, m: true },
                                        { f: "Aqua-Sensor®", h: true, m: true },
                                        { f: "AccuSoft® Microprocessor", h: true, m: true },
                                        { f: "Dial-a-Softness®", h: true, m: true },
                                        { f: "Connectivité App", h: true, m: false },
                                        { f: "Débit ultra-rapide", h: true, m: false },
                                        { f: "Détection de sel", h: "Option", m: false },
                                        { f: "Installation extérieure", h: "Option", m: true }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-8 font-medium text-gray-700">{row.f}</td>
                                            <td className="p-8 text-center">
                                                {typeof row.h === 'string' ? row.h : (row.h ? <Check className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
                                            </td>
                                            <td className="p-8 text-center">
                                                {typeof row.m === 'string' ? row.m : (row.m ? <Check className="h-6 w-6 text-blue-600 mx-auto" /> : <X className="h-6 w-6 text-gray-300 mx-auto" />)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 6. Testimonials */}
                <TestimonialsSection />

                {/* 7. Water Test Section (Refactored Design) */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
                                <img
                                    src={bathroomImg}
                                    alt="Éléments de salle de bain contemporaine"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
                            </div>
                            <div className="lg:w-1/2 bg-blue-600 text-white p-12 lg:p-20 flex flex-col justify-center items-start text-left">
                                <span className="text-white/80 text-xs font-black uppercase tracking-[0.3em] mb-8 block">
                                    ANALYSE PROFESSIONNELLE
                                </span>
                                <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                                    L'excellence commence par une eau parfaite.
                                </h2>
                                <p className="font-light text-[20px] leading-[28px] text-white/90 mb-12">
                                    Le luxe, c'est de ne pas avoir à se soucier de la qualité de ce que l'on consomme. Offrez-vous la sérénité d'une eau analysée par des experts, pour une maison où tout brille, sans effort et sans compromis.
                                </p>
                                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-12 h-16 text-xl font-bold shadow-xl transition-all hover:scale-105" asChild>
                                    <NavLink to="/water-testing">Demandez une analyse</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-12 text-center leading-[1.1] tracking-tighter">FAQ sur les adoucisseurs d'eau</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                { q: "Quels sont les avantages d'un adoucisseur d'eau ?", a: "Un adoucisseur élimine le calcaire, protège vos appareils, adoucit votre peau et vos cheveux, et vous fait économiser sur les produits de nettoyage." },
                                { q: "Comment fonctionne un adoucisseur Bricareau ?", a: "Il utilise un processus d'échange d'ions pour remplacer les minéraux de dureté (calcium et magnésium) par des ions sodium doux." },
                                { q: "À quelle fréquence faut-il entretenir l'appareil ?", a: "Nous recommandons un entretien annuel pour garantir des performances optimales et prolonger la vie du système." },
                                { q: "Quelle quantité de sel consomme l'adoucisseur ?", a: "Cela dépend de votre consommation d'eau et de la dureté de celle-ci. Nos systèmes HE sont parmi les plus économes du marché." }
                            ].map((item, idx) => (
                                <AccordionItem key={idx} value={`item-${idx}`} className="border-b-gray-200">
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
                </section>

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
                                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                    <div className="h-56 overflow-hidden">
                                        <img src={art.img} alt={art.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h4 className="text-xl font-bold mb-4">{art.title}</h4>
                                        <NavLink to="#" className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest">
                                            EN SAVOIR PLUS <ChevronRight className="h-4 w-4" />
                                        </NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                            <div className="lg:w-1/3 text-left">
                                <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter italic">
                                    Planifiez une consultation gratuite sur l'eau
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

export default Adoucissement;
