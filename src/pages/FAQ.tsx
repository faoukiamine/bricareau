import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, CheckCircle2, Droplets, Filter, Shield, Zap, GlassWater, Waves, Snowflake, CupSoda } from "lucide-react";
import { NavLink } from "react-router-dom";
import residentialWaterSoftenerImg from "@/assets/residential-water-softener.png";
import analysisImg from "@/assets/10341859.jpg";

const categories = [
    {
        title: "Adoucissement de l'eau",
        id: "adoucissement",
        products: [
            {
                title: "Fonctionnement : Le Guide",
                desc: "Démystifier la technologie de l'échange d'ions et la science de l'adoucissement.",
                image: "https://images.unsplash.com/photo-1594411133519-2189874cb3d1?q=80&w=2000&auto=format&fit=crop",
                href: "/qu-est-ce-qu-un-adoucisseur-eau-fonctionnement"
            },
            {
                title: "Dureté : Le Seuil Critique",
                desc: "À partir de quel niveau de calcaire un adoucisseur devient-il rentable ?",
                image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
                href: "/niveau-durete-eau-besoin-adoucisseur"
            },
            {
                title: "Mesurer sa dureté soi-même",
                desc: "Guide pratique des méthodes de test à la maison pour quantifier le calcaire.",
                image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
                href: "/comment-mesurer-durete-eau-maison"
            },
            {
                title: "Les Signes de Besoin Absolu",
                desc: "Quand votre maison appelle à l'aide : les symptômes d'une eau trop agressive.",
                image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
                href: "/les-signes-absolument-besoin-adoucisseur-eau"
            },
            {
                title: "Sel vs Sans Sel : La Vérité",
                desc: "Débat technique final : quel système retire réellement le calcaire de votre eau ?",
                image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
                href: "/adoucisseur-eau-sel-vs-sans-sel-efficacite"
            },
            {
                title: "5 signes indéniables",
                desc: "Découvrez les signes alarmants qui indiquent que votre eau est trop dure.",
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
                href: "/5-signes-besoin-adoucisseur-eau"
            }
        ]
    },
    {
        title: "Eau de boisson & Santé",
        id: "eau-de-boisson",
        products: [
            {
                title: "Osmose Inverse : Meilleur choix ?",
                desc: "Pourquoi l'osmose inverse est la référence absolue pour une famille en santé.",
                image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
                href: "/osmose-inverse-domicile-meilleur-systeme-famille"
            },
            {
                title: "Sous Évier vs Toute la Maison",
                desc: "Où placer votre ligne de défense ? Analyse comparative des architectures.",
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop",
                href: "/filtre-evier-vs-maison-entiere-choisir"
            },
            {
                title: "Charbon Actif & Ses Limites",
                desc: "Ce qu'il capture avec brio et les dangers invisibles qu'il laisse traverser.",
                image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
                href: "/filtre-charbon-actif-capacite-limites"
            },
            {
                title: "3 vs 5 Étapes : Comparaison",
                desc: "Quelle architecture multicouche est nécessaire pour garantir votre santé ?",
                image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
                href: "/filtration-3vs5-etapes-sante-difference"
            },
            {
                title: "Filtre Douche : Peau & Cheveux",
                desc: "Pourquoi filtrer l'eau de votre douche est le fondement de vos soins de beauté.",
                image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=2000&auto=format&fit=crop",
                href: "/filtre-douche-bienfaits-peau-cheveux"
            },
            {
                title: "Filtre Appartement (Sans Travaux)",
                desc: "Solutions de haute performance pour locataires, portables et sans plomberie.",
                image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
                href: "/filtre-eau-appartement-sans-plomberie"
            },
            {
                title: "PFAS : Polluants éternels",
                desc: "Ce que vous devez savoir sur les PFAS et comment les éliminer de votre eau.",
                image: "https://images.unsplash.com/photo-1517646288020-f4ca67909930?q=80&w=2000&auto=format&fit=crop",
                href: "/pfas-eau-robinet-elimination"
            }
        ]
    },
    {
        title: "Eau de Puits & Problèmes Spécialisés",
        id: "eau-de-puits",
        products: [
            {
                title: "Traitement UV : Solution Naturelle",
                desc: "Éliminer 99,99% des bactéries sans chimie grâce au pouvoir de la lumière.",
                image: "https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2000&auto=format&fit=crop",
                href: "/systeme-traitement-uv-solution-naturelle-bacteries"
            },
            {
                title: "Bactéries E. coli : Guide Urgence",
                desc: "Réagir face à une contamination fécale et installer une protection UV.",
                image: "https://images.unsplash.com/photo-1594411133519-2189874cb3d1?q=80&w=2000&auto=format&fit=crop",
                href: "/bacteries-e-coli-eau-puits-causes-solutions"
            },
            {
                title: "Fer & Manganèse (Taches)",
                desc: "Éliminer définitivement les taches orange (fer) et noires (manganèse).",
                image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop",
                href: "/manganese-fer-eau-brune-remedes"
            },
            {
                title: "Arsenic dans l'eau potable",
                desc: "Zones à risque, effets sur la santé et filtration efficace certifiée.",
                image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
                href: "/arsenic-eau-potable-risques-filtration"
            }
        ]
    }
];

const FAQ = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            <main>
                {/* Hero Section - Following the design in the image */}
                <section className="relative bg-[#001529] pt-[180px] pb-24 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden lg:block bg-black overflow-hidden">
                        <iframe
                            src="https://player.vimeo.com/video/1155585885?autoplay=1&loop=1&muted=1&background=1"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78%] h-[177.78%] min-w-full min-h-full pointer-events-none"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Background video"
                        ></iframe>
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-3xl">
                            <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl">
                                <span className="font-bold text-white">Questions fréquemment posées (FAQ)</span>
                            </h1>
                            <p className="text-[20px] leading-snug opacity-90 mb-10 text-blue-100/80 max-w-xl text-justify font-light">
                                Trouvez les réponses aux questions les plus courantes sur nos produits et services.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <NavLink to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
                                    Démarrer une analyse gratuite
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Navigation / Categories Icons */}
                <div className="bg-white border-b sticky top-[64px] z-30 hidden md:block shadow-sm">
                    <div className="container mx-auto px-6 overflow-x-auto">
                        <div className="flex justify-center gap-12 py-6">
                            {categories.map((cat) => (
                                <a
                                    key={cat.id}
                                    href={`#${cat.id}`}
                                    className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors whitespace-nowrap"
                                >
                                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                    {cat.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Category Sections */}
                {categories.map((cat, idx) => (
                    <section key={cat.id} id={cat.id} className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{cat.title}</h2>
                                    <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
                                </div>
                                <Button variant="link" className="text-blue-600 font-bold p-0 group" asChild>
                                    <NavLink to={cat.products[0].href} className="flex items-center">
                                        Voir toutes les options <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </NavLink>
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {cat.products.map((product, pIdx) => (
                                    <NavLink
                                        key={pIdx}
                                        to={product.href}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={`${product.title} - Solution Bricareau`}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        </div>
                                        <div className="p-8 flex flex-col flex-1">
                                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                {product.title}
                                            </h3>
                                            <p className="text-slate-600 mb-6 flex-1 leading-snug">
                                                {product.desc}
                                            </p>
                                            <div className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider group/btn">
                                                Explorer <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                            </div>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}

                {/* Final Call to Action */}
                <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <Waves className="absolute -bottom-10 -left-10 w-96 h-96 text-white" />
                        <Droplets className="absolute -top-10 -right-10 w-64 h-64 text-white" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">
                            Prêt à transformer la qualité de votre eau ?
                        </h2>
                        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-snug">
                            Nos experts sont disponibles pour une consultation personnalisée et gratuite à votre domicile ou entreprise.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-12 h-16 text-lg font-bold shadow-lg" asChild>
                                <a href="/contact">Planifier ma visite</a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-12 h-16 text-lg font-bold" asChild>
                                <a href="tel:18552649328">1 (855) 264-9328</a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default FAQ;
