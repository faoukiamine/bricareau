import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    Phone,
    ArrowRight,
    Settings,
    Calendar,
    RefreshCw,
    CheckCircle2,
    Droplets,
    ShieldCheck,
    Waves,
    MessageSquare,
    Mail,
    MapPin,
    Star,
    ChevronRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AdoucisseursPortables = () => {
    return (
        <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-[#0066FF] selection:text-white" style={{ '--top-banner': '168 100% 42%' } as React.CSSProperties}>
            <Header />

            {/* 2. SECTION HÉRO */}
            <section className="relative h-[600px] flex items-center overflow-hidden">
                {/* Background Image - Lifestyle */}
                <div className="absolute inset-0 bg-gray-900">
                    <div
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80')] bg-cover bg-center scale-105"
                        style={{ filter: 'brightness(0.6)' }}
                    ></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6 uppercase tracking-tight animate-in fade-in slide-in-from-bottom duration-700">
                            service de livraison<br />
                            d'adoucisseurs d'eau portables
                        </h1>
                        <p className="text-white/90 text-xl md:text-2xl mb-10 max-w-xl animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                            La solution flexible pour une eau douce sans installation permanente. Qualité professionnelle livrée chez vous.
                        </p>
                        <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                            <Button size="lg" className="bg-[#0066FF] hover:bg-[#0052cc] text-white h-14 px-8 rounded-full text-lg font-bold flex items-center gap-3 transition-all hover:scale-105 shadow-lg group">
                                Obtenir mon eau potable aujourd'hui
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SECTION BÉNÉFICES */}
            <section className="bg-[#001B3D] py-24 text-white">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
                    {/* Text Left */}
                    <div className="lg:w-2/5">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Plus de commodité, <br />
                            moins de tracas, <br />
                            une meilleure eau.
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Notre service de livraison d'adoucisseurs d'eau portables est conçu pour vous offrir la meilleure qualité d'eau avec une simplicité absolue. Plus besoin de manipuler des sacs de sel lourds ou de s'inquiéter de l'entretien.
                        </p>
                    </div>

                    {/* Cards Right */}
                    <div className="lg:w-3/5 flex flex-col gap-6 w-full">
                        {[
                            {
                                bg: 'bg-[#0066FF]',
                                icon: Settings,
                                title: 'TENEZ VOTRE INSTALLATION PROPRE ET EFFICACE',
                                textColor: 'text-white'
                            },
                            {
                                bg: 'bg-white',
                                icon: Calendar,
                                title: 'LIVRAISON RÉGULIÈRE À VOTRE DOMICILE',
                                textColor: 'text-[#001B3D]'
                            },
                            {
                                bg: 'bg-[#7FFFD4]',
                                icon: RefreshCw,
                                title: 'SERVICE D\'ÉCHANGE SIMPLE ET RAPIDE',
                                textColor: 'text-[#001B3D]'
                            }
                        ].map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div
                                    key={i}
                                    className={`${card.bg} p-8 rounded-xl flex items-center gap-6 shadow-xl transition-all hover:-translate-y-1 cursor-default`}
                                >
                                    <div className={`p-4 rounded-lg ${card.bg === 'bg-white' ? 'bg-gray-100' : 'bg-black/10'}`}>
                                        <Icon className={`h-8 w-8 ${card.textColor}`} />
                                    </div>
                                    <p className={`text-xl font-bold uppercase tracking-wide ${card.textColor}`}>
                                        {card.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. SECTION "QUE FAUT-IL ATTENDRE" */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Que faut-il attendre</h2>
                        <div className="w-20 h-1.5 bg-[#00D4AA] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: CheckCircle2,
                                title: 'Commodité',
                                desc: 'Nous gérons tout le travail. Pas de sel à porter, pas d\'entretien à effectuer par vous-même.'
                            },
                            {
                                icon: ShieldCheck,
                                title: 'Rentabilité',
                                desc: 'Économisez sur les réparations et le remplacement prématuré des appareils ménagers dû à l\'eau dure.'
                            },
                            {
                                icon: Droplets,
                                title: 'Économies d\'eau',
                                desc: 'Nos systèmes optimisés réduisent le gaspillage d\'eau lors des cycles de régénération.'
                            },
                            {
                                icon: Waves,
                                title: 'Conformité communicative',
                                desc: 'Des solutions respectueuses de l\'environnement conformes aux réglementations locales.'
                            }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="bg-[#F5F5F5] p-10 rounded-xl border border-transparent hover:border-gray-200 hover:shadow-md transition-all group"
                                >
                                    <Icon className="h-10 w-10 text-[#0066FF] mb-6" />
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. SECTION TÉMOIGNAGES/AVIS */}
            <section className="bg-[#F5F5F5] py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900">avis sur la livraison d'adoucisseurs d'eau</h2>
                        <div className="flex justify-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-[#0066FF] text-[#0066FF]" />
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Service incroyable",
                                text: "Plus besoin de m'inquiéter pour mon eau. La livraison est toujours à l'heure et l'eau est parfaite.",
                                name: "Marie L."
                            },
                            {
                                quote: "Facile et efficace",
                                text: "L'échange se fait en quelques minutes. C'est la solution idéale pour notre appartement.",
                                name: "Jean D."
                            },
                            {
                                quote: "Qualité supérieure",
                                text: "On sent vraiment la différence sur la peau et les cheveux. Finis les dépôts de calcaire !",
                                name: "Sophie R."
                            }
                        ].map((review, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                                <div className="flex gap-0.5 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-[#0066FF] text-[#0066FF]" />
                                    ))}
                                </div>
                                <h4 className="text-xl font-bold mb-3 italic">"{review.quote}"</h4>
                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{review.text}</p>
                                <div className="font-bold text-gray-900 uppercase text-sm tracking-widest">{review.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SECTION PRODUITS ASSOCIÉS */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Découvrez les produits associés</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Optimisez votre expérience de traitement d'eau avec nos solutions complémentaires.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                name: "Adoucisseur d'eau ",
                                desc: "Élimine les particules et impuretés pour protéger votre système.",
                                img: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80"
                            },
                            {
                                name: "Station d'eau potable",
                                desc: "Pour une eau de boisson d'une pureté exceptionnelle directement au robinet.",
                                img: "https://images.unsplash.com/photo-1585806110250-18ca0a818301?auto=format&fit=crop&q=80"
                            },
                            {
                                name: "Système de stérilisation UV",
                                desc: "Élimine 99.9% des bactéries et virus pour une sécurité totale.",
                                img: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&q=80"
                            }
                        ].map((prod, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="bg-gray-100 aspect-square rounded-xl mb-6 overflow-hidden flex items-center justify-center">
                                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-gray-900">{prod.name}</h3>
                                <p className="text-gray-600 mb-4">{prod.desc}</p>
                                <a href="#" className="text-[#0066FF] font-bold flex items-center gap-2 group-hover:translate-x-1 transition-all">
                                    En savoir plus <ChevronRight className="h-4 w-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. SECTION ENGAGEMENT */}
            <section className="bg-white py-24">
                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" alt="Engagement" className="w-full h-auto" />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#001B3D] mb-8 leading-tight">
                            L'eau est notre mission
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Nous nous engageons à fournir non seulement le meilleur équipement de traitement d'eau, mais aussi un service après-vente irréprochable. Notre expertise locale nous permet de comprendre les défis spécifiques de votre région.
                            </p>
                            <p>
                                Chaque membre de notre équipe est formé pour vous offrir une consultation personnalisée et des solutions durables qui respectent votre budget et l'environnement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FORMULAIRE DE CONTACT */}
            <section className="bg-[#F5F5F5] py-24">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#001B3D] mb-6 leading-tight">Contactez-nous pour commencer dès aujourd'hui</h2>
                        <p className="text-xl text-gray-500 leading-relaxed font-medium capitalize">
                            Nos experts sont prêts à vous aider à trouver la solution de traitement d'eau parfaite pour vos besoins.
                        </p>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-white">
                            <h3 className="text-2xl font-bold text-[#001B3D] mb-8">Saisissez vos informations</h3>
                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase">Prénom</label>
                                    <Input placeholder="Votre prénom" className="h-12 rounded-lg border-gray-200 focus:ring-[#0066FF]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase">Nom de famille</label>
                                    <Input placeholder="Votre nom" className="h-12 rounded-lg border-gray-200 focus:ring-[#0066FF]" />
                                </div>
                                <div className="space-y-2 sm:col-span-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase">Adresse courriel</label>
                                    <Input type="email" placeholder="votre@email.com" className="h-12 rounded-lg border-gray-200 focus:ring-[#0066FF]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase">Numéro de téléphone</label>
                                    <Input type="tel" placeholder="(514) 000-0000" className="h-12 rounded-lg border-gray-200 focus:ring-[#0066FF]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase">Code postal</label>
                                    <Input placeholder="A1A 1A1" className="h-12 rounded-lg border-gray-200 focus:ring-[#0066FF]" />
                                </div>
                                <div className="space-y-2 sm:col-span-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase">Commentaires</label>
                                    <Textarea placeholder="Comment pouvons-nous vous aider ?" className="min-h-[120px] rounded-lg border-gray-200 focus:ring-[#0066FF] p-4" />
                                </div>
                                <Button className="sm:col-span-2 h-14 bg-[#0066FF] hover:bg-[#0052cc] text-white text-lg font-bold rounded-full shadow-lg transition-all hover:scale-[1.02] mt-4">
                                    Soumettre
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating Action Buttons */}
            <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-50">
                <button className="bg-[#0066FF] text-white w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-all flex items-center justify-center group relative" title="Appelez-nous">
                    <Phone className="h-6 w-6" />
                    <span className="absolute right-full mr-4 bg-[#001B3D] text-white py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-bold text-sm">1-800-123-4567</span>
                </button>
                <button className="bg-[#00D4AA] text-white w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-all flex items-center justify-center group relative" title="Message">
                    <MessageSquare className="h-6 w-6" />
                    <span className="absolute right-full mr-4 bg-[#001B3D] text-white py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-bold text-sm">Discutez avec nous</span>
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default AdoucisseursPortables;
