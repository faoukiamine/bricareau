import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Microscope, ShieldAlert, BadgeCheck, Sparkles, Droplets, Info, Search, AlertCircle, ShieldCheck, HeartPulse, Scale, FlaskConical } from "lucide-react";

const MicroplastiquesEauRobinet = () => {
    useEffect(() => {
        document.title = "Microplastiques dans l'eau du robinet : Réalité ou Mythe ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez l'ampleur de la contamination par les microplastiques dans l'eau potable. Apprenez comment ces particules affectent votre santé et quelles technologies de filtration les éliminent.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-relaxed font-light">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"
                            alt="Abstraction de particules de plastique dans l'eau"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-400 text-sm font-bold mb-6 tracking-widest uppercase">
                            Science Environnementale : État des Lieux
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
                            Microplastiques : <span className="text-blue-400">Réalité ou Mythe ?</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light mb-10 leading-relaxed max-w-4xl mx-auto italic">
                            Une immersion dans la pollution particulaire moderne : comprendre les menaces nanométriques et reprendre le contrôle sur l'eau de votre robinet.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 font-bold" asChild>
                                <a href="/osmose-filtration">Détecter et filtrer les microplastiques</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-10 h-16 font-bold backdrop-blur-sm" asChild>
                                <a href="tel:18552649328" className="flex items-center gap-2">
                                    <Phone className="h-5 w-5" /> 1-855-264-9328
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Article Intro Content */}
                <article className="py-20 lg:py-32 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 text-justify leading-relaxed">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    Imaginez boire l'équivalent d'une carte de crédit en plastique chaque semaine. Ce chiffre, souvent cité par les organisations de santé environnementale, illustre l'ampleur d'une menace invisible : la contamination par les microplastiques.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Pendant des années, nous avons perçu le plastique comme une nuisance visuelle — des bouteilles flottant dans les océans ou jonchant les plages. Mais aujourd'hui, la science révèle une réalité plus sombre : le plastique ne disparaît pas, il se fragmente en particules si petites qu'elles s'infiltrent dans les nappes phréatiques, les réseaux municipaux et, finalement, dans votre verre d'eau. Ce n'est plus un mythe de science-fiction, mais un défi sanitaire et technologique majeur de notre époque.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. Que sont réellement les microplastiques ?</h2>
                                <p>
                                    Sur le plan scientifique, un <strong>microplastique</strong> est défini comme une particule solide de matière plastique mesurant moins de 5 millimètres. Toutefois, l'inquiétude se porte désormais sur les <strong>nanoplastiques</strong>, si infimes (moins de 1 micromètre) qu'ils peuvent franchir les barrières cellulaires humaines.
                                </p>
                                <p>
                                    On distingue deux catégories principales :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Microplastiques Primaires :</strong> Conçus volontairement pour des usages spécifiques (comme les microbilles dans les cosmétiques, bien que désormais largement interdites, ou les fibres synthétiques issues de nos vêtements lors du lavage).</li>
                                    <li><strong>Microplastiques Secondaires :</strong> Résultant de la fragmentation de macro-déchets plastiques (emballages, pneus, filets de pêche) sous l'effet du soleil, du vent et de l'usure mécanique.</li>
                                </ul>

                                <div className="my-16 bg-blue-900 text-white rounded-[2rem] p-10 md:p-20 relative overflow-hidden shadow-2xl group">
                                    <div className="absolute top-0 right-0 p-12 opacity-10 -translate-y-12 translate-x-12 rotate-45 group-hover:rotate-12 transition-transform duration-1000">
                                        <Microscope className="w-80 h-80 text-blue-400" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-8 italic tracking-tighter">L'Invisible devient mesurable</h3>
                                    <p className="text-xl text-slate-300 opacity-90 mb-12 font-light leading-relaxed max-w-2xl text-justify">
                                        Une étude de l'université du Minnesota a révélé que 83 % des échantillons d'eau du robinet prélevés dans le monde contenaient des fibres de plastique. Le Canada ne fait pas exception à cette règle systémique.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-lg font-bold transition-transform active:scale-95" asChild>
                                            <a href="/filtration">Comment stopper les particules</a>
                                        </Button>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Origines : Comment le plastique atteint votre robinet ?</h2>
                                <p>
                                    Contrairement à certains contaminants qui proviennent de sources ponctuelles (comme les pesticides), le plastique est omniprésent.
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Lessivage atmosphérique :</strong> Les fibres synthétiques flottent dans l'air et se déposent dans les rivières et les lacs servant de sources d'approvisionnement municipal.</li>
                                    <li><strong>Eaux usées domestiques :</strong> Chaque brassée de vêtements en polyester ou nylon libère des millions de microfibres que les stations d'épuration municipales actuelles ne sont pas équipées pour filtrer à 100 %.</li>
                                    <li><strong>Décomposition des infrastructures :</strong> Ironiquement, certains joints et revêtements des réseaux de distribution d'eau potable eux-mêmes peuvent vieillir et relâcher des particules plastiques.</li>
                                </ul>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Toxicité : À quel point faut-il s'inquiéter ?</h2>
                                <p>
                                    La science médicale sur l'effet à long terme des microplastiques est encore à ses débuts, mais les inquiétudes se divisent en deux axes : la toxicité physique et la toxicité chimique.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="p-8 bg-blue-50 border border-blue-100 rounded-2xl group hover:shadow-xl transition-all">
                                        <ShieldAlert className="w-12 h-12 text-blue-600 mb-6 group-hover:rotate-12 transition-transform" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Le « Cheval de Troie »</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed text-justify">
                                            Les microplastiques sont poreux. Ils absorbent les toxines environnantes (Pesticides, PFAS, Métaux Lourds) dans l'eau et les transportent directement dans notre système digestif, augmentant la biodisponibilité de ces poisons.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-blue-50 border border-blue-100 rounded-2xl group hover:shadow-xl transition-all">
                                        <HeartPulse className="w-12 h-12 text-blue-600 mb-6 group-hover:rotate-12 transition-transform" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Déséquilibre Endocrinien</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed text-justify">
                                            De nombreux plastiques contiennent des additifs tels que les phtalates ou le bisphénol A (BPA), connus pour être des perturbateurs hormonaux interférant avec la reproduction et le développement.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">4. Solutions : Éliminer les microplastiques à domicile</h2>
                                <p>
                                    Bonne nouvelle : les technologies de filtration modernes sont extrêmement efficaces pour stopper ces particules, à condition d'utiliser les bons équipements.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">L'Osmose Inverse (Le Standard de Référence)</h3>
                                <p className="text-justify">
                                    En raison de sa membrane semi-perméable d'une finesse extrême (0,0001 micromètre), l'osmose inverse est la solution ultime. Elle rejette non seulement les microplastiques, mais également les nanoplastiques les plus infimes, garantissant une eau sans résidus solides artificiels.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">Filtration au Charbon de Haute Densité (Sub-micron)</h3>
                                <p className="text-justify">
                                    Certains blocs de charbon compressés, avec une porosité nominale de 0,5 micromètre ou moins, sont capables de piéger physiquement la quasi-totalité des microfibres et microbilles présentes dans l'eau du robinet. C'est une excellente alternative pour les systèmes sous-évier compacts.
                                </p>

                                <div className="mt-20 p-12 bg-slate-50 border border-slate-100 rounded-[3rem] shadow-inner relative group overflow-hidden">
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 italic flex items-center gap-4">
                                        <Search className="h-10 w-10 text-blue-600" />
                                        Diagnostic Expert Bricareau
                                    </h3>
                                    <p className="text-xl text-slate-600 opacity-90 mb-10 font-light leading-relaxed text-justify max-w-3xl">
                                        Votre foyer mérite une eau libre de tout résidu synthétique. Profitez d'une consultation gratuite pour cartographier les risques de votre quartier et installer la barrière de protection adaptée à vos besoins.
                                    </p>
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 font-bold shadow-lg" asChild>
                                        <a href="/contact">Analyser mon eau maintenant</a>
                                    </Button>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed flex items-center gap-4">
                                    <Info className="h-10 w-10 text-blue-600 shrink-0" />
                                    <p>
                                        * Note de sagesse : Utiliser un filtre à domicile est l'acte de protection le plus direct que vous puissiez poser aujourd'hui pour contrer l'omniprésence du plastique dans nos écosystèmes modernes.
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

export default MicroplastiquesEauRobinet;
