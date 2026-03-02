import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldAlert, BadgeCheck, Microscope, Waves, Droplets, Info, Search, AlertCircle, ShieldCheck, HeartPulse, Scale, FlaskConical, Zap, Wrench, Home, Sparkles, Filter, ShieldHalf, Thermometer, GlassWater, MicroscopeIcon as Microscope2, AlertTriangle, Crosshair, ZapIcon, Lightbulb, Snowflake, Mountain } from "lucide-react";

const EauTurbideTrouble = () => {
    useEffect(() => {
        document.title = "Eau turbide ou trouble : Causes et Clarification | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Pourquoi votre eau est-elle trouble ou laiteuse ? Découvrez les causes de la turbidité dans l'eau de puits et les meilleures méthodes de filtration pour la clarifier.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-snug font-light">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-blue-50 text-slate-900 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <img
                            src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"
                            alt="Abstraction de vagues d'eau"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-600/10 border border-blue-400/30 text-blue-600 text-sm font-bold mb-6 tracking-widest uppercase">
                            Expertise Clarté & Pureté De L'eau
                        </span>
                        <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-blue-950 text-justify max-w-xl mx-auto">
                            <span className="font-bold">Eau</span> <span className="text-blue-600 font-bold">turbide</span> <span className="font-bold">ou trouble ?</span>
                        </h1>
                        <p className="text-[20px] leading-snug text-slate-600 font-light mb-10 text-justify max-w-xl mx-auto italic">
                            Retrouver la transparence d'une eau de source : comprendre les causes de l'aspect laiteux ou boueux et maîtriser les technologies de clarification par sédimentation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 font-bold shadow-lg shadow-blue-950/20" asChild>
                                <a href="/contact">Clarifier mon eau de puits</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-blue-900 border-blue-900 bg-white/50 hover:bg-white rounded-full px-10 h-16 font-bold backdrop-blur-sm shadow-inner transition-all" asChild>
                                <a href="tel:18552649328" className="flex items-center gap-2">
                                    <Phone className="h-5 w-5" /> 1-855-264-9328
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Article Intro Body */}
                <article className="py-20 lg:py-32 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 text-justify leading-snug">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    La turbidité est le premier indicateur, souvent alarmant, d'une dégradation de la qualité de votre eau. Qu'elle soit « laiteuse » dès le robinet ou qu'elle présente des dépôts de sable au fond du verre, une eau trouble n'est pas seulement un désagrément esthétique ; c'est un symptôme de dysfonctionnement de votre puits ou de votre réseau municipal.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Dans le monde du traitement d'eau, la clarté est la porte d'entrée de la pureté. Une eau turbide contient des particules en suspension (argile, sédiments, limon, ou matières organiques décomposées) qui captent la lumière. Outre l'aspect rébarbatif, ces particules servent de « bouclier » aux pathogènes et aux bactéries, les protégeant de l'effet désinfectant des systèmes UV ou du chlore. Pour clarifier votre eau, il faut d'abord diagnostiquer la nature de ce trouble. Ce guide Bricareau explore les causes de la turbidité et les solutions de filtration de pointe pour redonner à votre foyer une eau parfaitement cristalline.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. Diagnostiquer votre turbidité</h2>
                                <p>
                                    Toutes les eaux troubles ne se ressemblent pas. Observez l'apparence et le comportement de l'eau au repos :
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
                                    <div className="p-8 bg-blue-50/50 border border-blue-100 rounded-3xl group transition-all hover:bg-blue-50 hover:shadow-lg">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                            <Snowflake className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-4 tracking-tight text-blue-900">Turbidité « Laiteuse » (Air)</h4>
                                        <p className="text-slate-700 text-[16px] text-justify">
                                            Si l'eau est trouble mais s'éclaircit du bas vers le haut après une minute au repos, il s'agit simplement de microbulles d'air. Ce phénomène, fréquent lors des périodes froides ou après des travaux de plomberie, est totalement inoffensif.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-amber-50/50 border border-amber-100 rounded-3xl group transition-all hover:bg-amber-50 hover:shadow-lg">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                            <Mountain className="w-8 h-8 text-amber-600" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-4 tracking-tight text-amber-900">Turbidité Sédimentaire (Poussière/Sable)</h4>
                                        <p className="text-slate-700 text-[16px] text-justify">
                                            Si l'eau laisse un dépôt fin (argile) ou granuleux (sable) au fond d'un verre, la source est géologique. Un forage récent, une fissure dans le roc ou un effondrement partiel du chemisage de votre puits en sont souvent la cause.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Pourquoi l'eau trouble est-elle dangereuse ?</h2>
                                <p>
                                    Si l'on peut vivre avec une eau imparfaite visuellement, la turbidité pose trois problèmes techniques et sanitaires majeurs :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>L'Effet D'Ombrage :</strong> Si vous utilisez une lampe UV pour la désinfection, les particules de sédiments agissent comme de minuscules parapluies pour les bactéries. Les rayons UV ne peuvent pas atteindre le coeur de l'organisme caché derrière la poussière, annulant l'efficacité de votre stérilisateur.</li>
                                    <li><strong>Obstruction des infrastructures :</strong> Le sable et le limon provoquent l'usure prématurée des joints de robinetterie, bloquent les aérateurs et encrassent les échangeurs de chaleur des chauffe-eaux sans réservoir.</li>
                                    <li><strong>Coloration persistante (Tannins) :</strong> Dans certains cas, l'aspect trouble jaunâtre provient de matières organiques décomposées (tannins). Ces molécules ne se déposent jamais et nécessitent une approche chimique spécifique.</li>
                                </ul>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Solutions : Comment clarifier l'eau ?</h2>
                                <p>
                                    Le choix du système de clarification dépend de la taille des particules incriminées, mesurée en <strong>microns</strong> (un micron = un millième de millimètre).
                                </p>

                                <div className="space-y-12 my-16">
                                    <div className="flex flex-col md:flex-row gap-10 items-start p-10 bg-slate-50 rounded-3xl group border border-slate-100 hover:shadow-2xl transition-all">
                                        <div className="bg-white p-6 rounded-2xl shadow-inner group-hover:rotate-12 transition-transform shrink-0">
                                            <Filter className="w-12 h-12 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Filtration de Sédiments à cartouche</h4>
                                            <p className="text-slate-600 text-sm leading-snug text-justify">
                                                Pour la turbidité légère à modérée. Un filtre de haute capacité (Big Blue) avec une cartouche plissée ou bobinée retient physiquement les particules de sable et de terre dès l'entrée de l'eau dans la maison. Economique et facile d'entretien.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-10 items-start p-10 bg-slate-900 text-white rounded-3xl group border border-slate-800 hover:shadow-2xl transition-all">
                                        <div className="bg-white/10 p-6 rounded-2xl shadow-inner group-hover:rotate-12 transition-transform shrink-0 backdrop-blur-sm">
                                            <Waves className="w-12 h-12 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold mb-4 tracking-tight">Filtre Multimédia Automatique</h4>
                                            <p className="text-slate-300 text-sm leading-snug text-justify">
                                                Pour les problèmes de turbidité chroniques ou massifs. Ce système remplit de sable, de verre concassé ou d'anthracite, filtre l'eau à travers plusieurs couches de densités différentes. Il s'autonettoie (backwash) périodiquement, éliminant les particules accumulées sans intervention humaine.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-10 items-start p-10 bg-blue-100/50 rounded-3xl group border border-blue-200 hover:shadow-2xl transition-all">
                                        <div className="bg-white p-6 rounded-2xl shadow-inner group-hover:rotate-12 transition-transform shrink-0">
                                            <Sparkles className="w-12 h-12 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">L'Ultrafiltration (0,02 micron)</h4>
                                            <p className="text-blue-900/70 text-sm leading-snug text-justify">
                                                La technologie de clarification ultime. Une membrane d'ultrafiltration bloque non seulement la turbidité, mais virtuellement toutes les bactéries connues. C'est la solution choisie pour les eaux de surface (lacs, rivières) qui présentent une turbidité fluctuante.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-20 p-10 md:p-20 bg-blue-950 text-white rounded-[4rem] text-center shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:scale-175 transition-transform duration-[4s]">
                                        <Sparkles className="w-80 h-80 text-white" />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold mb-10 tracking-tighter italic">Voyez la clarté, respirez la pureté.</h3>
                                    <p className="text-xl text-blue-200 opacity-80 mb-12 max-w-3xl mx-auto font-light leading-snug">
                                        Ne tolérez plus une eau qui ne ressemble pas à de l'eau. Demandez dès aujourd'hui un diagnostic de turbidité et retrouvez la joie d'un foyer où l'eau brille à nouveau.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-full px-12 h-18 text-xl font-bold shadow-xl shadow-blue-900/50" asChild>
                                            <a href="/contact">Analyser la turbidité de mon eau</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-snug flex items-center gap-4">
                                    <Info className="h-10 w-10 text-blue-600 shrink-0" />
                                    <p>
                                        * Note de sagesse : Pour protéger l'investissement que représente votre adoucisseur d'eau ou votre osmoseur, un pré-filtre de sédiments est toujours indispensable pour éviter l'encrassement des composantes internes sensibles.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default EauTurbideTrouble;
