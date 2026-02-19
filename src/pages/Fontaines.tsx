import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
    Snowflake,
    Droplets,
    Building2,
    Phone,
    Zap,
    Coffee,
    ChevronRight,
    ArrowRight,
    Star,
    ChevronLeft,
    Coins,
    Clock,
    Layout,
    ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import heroFountains from "@/assets/Fontaines d'eau.webp";
import solutionsEauImg from "@/assets/Solutions d'eau potable.webp";
import fontaineAutoportanteImg from "@/assets/Refroidisseur+d'eau+autoportant+à+eau+chaude,+froide+et+à+température+ambiante.webp";

const Fontaines = () => {
    return (
        <div className="min-h-screen bg-background text-slate-900">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroFountains}
                            alt="Fontaines à eau modernes"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        {/* Brightening Start 1/3 Right */}
                        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-4 block">
                                FRAÎCHEUR ILLIMITÉE
                            </span>
                            <h1 className="text-[32px] md:text-[48px] font-normal mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-white drop-shadow-md">
                                Fontaines à eau <br /> & Machines à glace
                            </h1>
                            <p className="font-light text-[20px] leading-[28px] text-white/95 mb-8 max-w-xl drop-shadow-sm">
                                Profitez d'une source inépuisable d'eau fraîche et de glace à portée de main,
                                que ce soit pour votre domicile ou votre espace professionnel.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="#consultation">
                                        Planifiez une consultation gratuite
                                    </a>
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
                    {/* Wave Separator Bottom - Transition to Dark Blue Section */}
                    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
                        <svg
                            className="relative block w-full h-[50px] md:h-[80px]"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                fill="#0A192F"
                                transform="rotate(180 600 60)"
                            ></path>
                        </svg>
                    </div>
                </section>

                {/* Section 1: Solutions professionnelles */}
                <section className="py-24 bg-[#0A192F] text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                            Solutions professionnelles <br />pour l'eau. À votre service.
                        </h2>
                        <p className="font-light text-[20px] leading-[28px] text-white/70 max-w-4xl mx-auto mb-16">
                            Bricareau est à votre service pour les meilleures solutions d'eau destinées aux entreprises.
                            Que vous soyez un petit bureau ou une grande installation industrielle, nous avons l'expertise pour répondre à vos besoins.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl">
                            {[
                                { title: "Distributeurs d'eau de comptoir", desc: "Une solution compacte offrant une eau filtrée de qualité supérieure directement sur votre comptoir, sans encombrement.", img: fontaineAutoportanteImg },
                                { title: "Fontaines d'eau sans bouteille", desc: "Eau fraîche et purifiée en continu, sans la corvée des bouteilles. Hydratation illimitée pour votre famille.", img: fontaineAutoportanteImg },
                                { title: "Machines à glaçons", desc: "Machines robustes produisant une glace pure et abondante pour satisfaire vos besoins en toute circonstance, sans aucune interruption.", icon: Snowflake },
                                { title: "Stations de purification d'eau", desc: "Technologie avancée éliminant les contaminants pour une eau cristalline d'une pureté absolue et un goût parfait.", img: solutionsEauImg },
                            ].map((item, i) => (
                                <div key={i} className="bg-white text-slate-900 rounded-2xl p-8 flex flex-col items-center transition-all hover:shadow-2xl hover:-translate-y-2">
                                    <div className="w-full aspect-square bg-slate-100 rounded-xl mb-6 flex items-center justify-center p-4">
                                        {item.img ? (
                                            <img src={item.img} alt={item.title} className="w-full h-full object-contain mix-blend-multiply" />
                                        ) : (
                                            item.icon && <item.icon className="w-16 h-16 text-blue-600 opacity-20" />
                                        )}
                                    </div>
                                    <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                                    <p className="font-light text-[18px] leading-[24px] text-slate-500 mb-6 flex-grow">{item.desc}</p>
                                    <Button variant="link" className="text-blue-600 font-bold p-0 group self-end">
                                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 4: Testimonials */}
                <TestimonialsSection />

                {/* Section 5: Hydratez-vous */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">
                            Hydratez-vous comme <br />jamais auparavant.
                        </h2>
                        <p className="text-slate-500 max-w-3xl mx-auto text-lg mb-16">
                            Nos services d'eau commerciale offrent une fiabilité sans précédent et une qualité constante pour garantir
                            que vos employés restent hydratés et productifs.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { title: "Économisez de l'argent", desc: "Supprimez les coûts de livraison et de stockage des bouteilles.", icon: Coins },
                                { title: "Gagnez du temps", desc: "Finies les commandes récurrentes et les factures multiples.", icon: Clock },
                                { title: "Économie pratique", desc: "Bénéficiez d'une facturation simplifiée et d'un service prévisible.", icon: Layout }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                                        <item.icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 6: Installation Facile (Mosaic) */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter">Installation. Facile.</h2>
                            <p className="text-slate-500 text-lg mb-16">Un processus fluide de la consultation à la mise en service.</p>
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-blue-600 text-white p-8 rounded-2xl flex flex-col justify-between min-h-[240px]">
                                        <h3 className="text-2xl font-bold italic underline decoration-white/30 underline-offset-8">Analyse d'eau gratuite</h3>
                                        <p className="opacity-80">Nous testons votre eau pour recommander le système parfait.</p>
                                    </div>
                                    <div className="bg-[#22C38E] text-white p-8 rounded-2xl flex flex-col justify-between min-h-[240px]">
                                        <h3 className="text-2xl font-bold italic underline decoration-white/30 underline-offset-8">Filtration sur mesure</h3>
                                        <p className="opacity-80">Un système adapté précisément à vos niveaux de contaminants.</p>
                                    </div>
                                    <div className="bg-white text-slate-900 p-8 rounded-2xl flex flex-col justify-between border border-slate-200 min-h-[240px]">
                                        <h3 className="text-2xl font-bold italic underline decoration-blue-600/30 underline-offset-8">Installation sans tracas</h3>
                                        <p className="text-slate-500">Nos techniciens certifiés s'occupent de tout de A à Z.</p>
                                    </div>
                                    <div className="bg-[#1A2A4D] text-white p-8 rounded-2xl flex flex-col justify-between min-h-[240px]">
                                        <h3 className="text-2xl font-bold italic underline decoration-white/30 underline-offset-8">Service d'entretien</h3>
                                        <p className="opacity-80">Maintenance préventive incluse pour une tranquillité totale.</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 rounded-[3rem] overflow-hidden shadow-2xl bg-white flex items-center justify-center p-12">
                                    <img
                                        src={heroFountains}
                                        alt="Modern office cooler"
                                        className="max-h-[600px] object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 7: L'eau que vous voulez */}
                <section className="py-24 bg-[#0A192F] text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-16 leading-[1.1] tracking-tighter">
                            L'eau que vous voulez. <br />Comme vous la voulez.
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Température souhaitée", desc: "Froide, chaude ou à température ambiante, c'est vous qui choisissez.", icon: Zap },
                                { title: "Carbonatation sur demande", desc: "Profitez d'eau pétillante fraîchement gazéifiée à tout moment.", icon: Snowflake },
                                { title: "Soins experts", desc: "Plus de 85 ans d'expertise au service de votre bureau.", icon: Building2 },
                                { title: "Garantie à vie", desc: "La meilleure garantie de l'industrie pour votre tranquillité d'esprit.", icon: ShieldCheck }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl flex flex-col items-start text-left hover:bg-white/10 transition-colors group">
                                    <item.icon className="w-10 h-10 text-blue-400 mb-6 transition-transform group-hover:scale-110" />
                                    <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 8: CTA Pre-footer */}
                <section className="py-24 bg-slate-100 border-t border-slate-200">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 mb-8 leading-[1.1] tracking-tighter">Prêts à aimer votre eau ?</h2>
                        <p className="text-slate-500 text-lg mb-12">Contactez-nous aujourd'hui pour voir comment Bricareau peut transformer votre bureau.</p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-xl font-bold shadow-xl">
                                Demander un rappel
                            </Button>
                            <Button variant="outline" className="bg-white border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-12 h-16 text-xl font-bold shadow-sm">
                                Planifier un test d'eau
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    );
};

export default Fontaines;
