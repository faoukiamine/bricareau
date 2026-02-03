import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, CheckCircle2, Droplets, Filter, Shield, Zap, GlassWater, Waves, Snowflake, CupSoda } from "lucide-react";
import { NavLink } from "react-router-dom";
import residentialWaterSoftenerImg from "@/assets/residential-water-softener.png";

const categories = [
    {
        title: "Eau de Puits",
        id: "eau-de-puits",
        products: [
            {
                title: "Analyses & Tests d'eau",
                desc: "Détection précise des contaminants pour une eau de puits sécuritaire.",
                image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=800&auto=format&fit=crop",
                href: "/water-testing"
            },
            {
                title: "Filtration spécialisée",
                desc: "Éliminez le fer, le soufre et le manganèse efficacement.",
                image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800&auto=format&fit=crop",
                href: "/Filtres-deau"
            },
            {
                title: "Désinfection UV",
                desc: "Stérilisation instantanée contre les bactéries et micro-organismes.",
                image: "https://images.unsplash.com/photo-1594411133519-2189874cb3d1?q=80&w=800&auto=format&fit=crop",
                href: "/Systemes-de-desinfection-UV"
            }
        ]
    },
    {
        title: "Adoucissement d'eau",
        id: "adoucissement",
        products: [
            {
                title: "Adoucisseurs Résidentiels",
                desc: "La référence pour une eau douce et la protection de vos appareils.",
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
                href: "/adoucisseur-eau-residentiel"
            },
            {
                title: "Conditionneurs sans sel",
                desc: "Réduction du tartre sans sel ni rejet d'eau.",
                image: residentialWaterSoftenerImg,
                href: "/conditionneurs-sans-sel"
            },
            {
                title: "Livraison de sel",
                desc: "Service de livraison à domicile pour votre tranquillité.",
                image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
                href: "/pieces"
            }
        ]
    },
    {
        title: "Eau de boisson & Filtration",
        id: "eau-de-boisson",
        products: [
            {
                title: "Osmose Inverse",
                desc: "Eau pure de qualité bouteille directement à votre robinet.",
                image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop",
                href: "/osmose-filtration"
            },
            {
                title: "Filtration sous-évier",
                desc: "Solutions compactes pour une eau filtrée délicieuse.",
                image: "https://images.unsplash.com/photo-1517646288020-f4ca67909930?q=80&w=800&auto=format&fit=crop",
                href: "/Systemes-de-filtration-deau-sous-evier"
            },
            {
                title: "Filtration toute la maison",
                desc: "Protection globale contre le chlore et les sédiments.",
                image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=800&auto=format&fit=crop",
                href: "/filtration"
            }
        ]
    },
    {
        title: "Filtres spécialisés",
        id: "filtres-specialises",
        products: [
            {
                title: "Filtres à charbon actif",
                desc: "Élimination des goûts et odeurs désagréables de chlore.",
                image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800&auto=format&fit=crop",
                href: "/filtration"
            },
            {
                title: "Filtres à sédiments",
                desc: "Élimine le sable, le limon et les particules en suspension.",
                image: "https://images.unsplash.com/photo-1517646288020-f4ca67909930?q=80&w=800&auto=format&fit=crop",
                href: "/filtration"
            },
            {
                title: "Traitement du fer",
                desc: "Systèmes robustes pour éliminer les taches de rouille.",
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
                href: "/Filtres-deau"
            }
        ]
    },
    {
        title: "Solutions Commerciales",
        id: "commercial",
        products: [
            {
                title: "Distributeurs d'eau",
                desc: "Solutions d'hydratation élégantes pour bureaux et entreprises.",
                image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=800&auto=format&fit=crop",
                href: "/fontaines"
            },
            {
                title: "Filtration Commerciale",
                desc: "Systèmes haute capacité pour les besoins industriels.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
                href: "/commercial-industriel"
            },
            {
                title: "Service de maintenance",
                desc: "Support technique professionnel pour vos installations.",
                image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
                href: "/service"
            }
        ]
    }
];

const SpecializedFiltration = () => {
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
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Solutions spécialisées en filtration d'eau
                            </h1>
                            <p className="text-xl opacity-90 mb-10 leading-relaxed text-blue-100/80 max-w-2xl">
                                Découvrez notre gamme complète de systèmes de traitement d'eau conçus pour répondre à tous vos besoins, de la maison au commerce.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 font-bold h-14" asChild>
                                    <a href="/contact">Démarrer une analyse gratuite</a>
                                </Button>
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
                                                alt={product.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        </div>
                                        <div className="p-8 flex flex-col flex-1">
                                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                {product.title}
                                            </h3>
                                            <p className="text-slate-600 mb-6 flex-1 leading-relaxed">
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
                        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
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

export default SpecializedFiltration;
