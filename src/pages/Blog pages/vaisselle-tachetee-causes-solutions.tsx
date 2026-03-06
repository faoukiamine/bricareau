import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2, FlaskConical, GlassWater, Sparkles, Sun } from "lucide-react";

const VaisselleTachetee = () => {
    useEffect(() => {
        document.title = "Pourquoi votre vaisselle sort-elle toujours tachetée ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Marre des taches blanches sur vos verres ? Découvrez pourquoi l'eau dure est la cause de votre vaisselle tachetée et comment y remédier définitivement.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop"
                            alt="Vaisselle étincelante et pureté de l'eau"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full mb-8">
                                <Sparkles className="h-4 w-4 text-blue-400" />
                                <span className="text-sm font-semibold tracking-wider uppercase">Art de Vivre & Propreté</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter">
                                Pourquoi votre vaisselle sort-elle toujours <span className="text-blue-400">tachetée</span> ?
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 font-light mb-10 leading-relaxed text-justify">
                                Explorer la science des résidus minéraux et comment transformer votre rituel de nettoyage pour obtenir une transparence cristalline absolue.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 font-bold" asChild>
                                    <a href="/tests-eau">Réserver mon analyse d'eau</a>
                                </Button>
                                <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-8 h-14 backdrop-blur-sm shadow-xl" asChild>
                                    <a href="tel:18552649328" className="flex items-center gap-2">
                                        <Phone className="h-5 w-5" /> 1-855-264-9328
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="py-20 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-relaxed text-justify font-light">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    Il n'y a rien de plus décourageant que de dresser une table élégante pour des convives et de s'apercevoir, à la lumière des bougies, que les verres à vin sont recouverts d'un voile terne ou de petites taches circulaires opaques. Ce phénomène, loin d'être un signe de négligence ménagère, est la signature indubitable d'un affrontement chimique silencieux dans votre lave-vaisselle : celui de l'eau dure contre votre vaisselle.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Le coupable invisible : Le calcaire dissous</h2>
                                <p>
                                    Le problème commence au niveau moléculaire. L'eau dure contient des concentrations élevées de calcium et de magnésium. Lorsque l'eau est chauffée à l'intérieur de votre lave-vaisselle, une partie de ces minéraux se "précipite", passant d'un état dissous à un état solide microscopique.
                                </p>
                                <p>
                                    Pendant le cycle de séchage, les gouttes d'eau qui restent sur vos verres s'évaporent, mais les minéraux qu'elles contenaient ne le font pas. Ils restent sur la surface, créant ces taches blanches caractéristiques. C'est un peu comme si vous saupoudriez une poussière de roche invisible sur votre vaisselle avant chaque dîner.
                                </p>

                                <div className="my-20 bg-blue-50 rounded-[3rem] p-12 border border-blue-100 flex flex-col md:flex-row gap-12 items-center">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-blue-900 mb-4">L'effet "Film de Savon"</h3>
                                        <p className="text-lg text-blue-800 font-light">
                                            L'eau dure ne se contente pas de laisser des minéraux ; elle neutralise aussi votre détergent. Les minéraux "piègent" le savon pour former un résidu collant appelé *soap scum*. Ce film de savon attire ensuite les graisses et les résidus alimentaires, les fixant sur votre vaisselle au lieu de les éliminer par le drain.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/3 text-center">
                                        <FlaskConical className="h-24 w-24 text-blue-600 mx-auto opacity-70" />
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Pourquoi les solutions domestiques échouent-elles ?</h2>
                                <p>
                                    Face à la vaisselle tachetée, le premier réflexe est souvent d'augmenter la dose de détergent ou d'ajouter du vinaigre. Malheureusement, ces solutions sont souvent contre-productives :
                                </p>
                                <ul className="space-y-6 my-10 pl-6">
                                    <li><strong>Trop de détergent :</strong> Paradoxalement, cela peut créer encore plus de résidus savonneux qui s'accrochent aux minéraux de l'eau.</li>
                                    <li><strong>Le vinaigre :</strong> Bien qu'il aide à dissoudre les taches actuelles, il ne règle pas le problème à la source et peut, à long terme, attaquer les joints en caoutchouc de votre lave-vaisselle.</li>
                                    <li><strong>Les agents de rinçage :</strong> Ils aident l'eau à "glisser" sur les surfaces, mais ne peuvent pas compenser une dureté de l'eau élevée. Ils ne font que masquer superficiellement le problème.</li>
                                </ul>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight italic">La solution Bricareau : Un changement physique, pas chimique</h2>
                                <p>
                                    La seule façon d'obtenir une vaisselle réellement étincelante sans efforts supplémentaires est de traiter l'eau avant qu'elle n'entre dans l'appareil. Un adoucisseur d'eau Bricareau utilise le principe de l'échange ionique pour remplacer les ions calcium et magnésium par des ions sodium ou potassium.
                                </p>
                                <p>
                                    L'eau devient alors "douce". Dans cette eau, le détergent se dissout instantanément et travaille à 100 % de sa capacité. Le rinçage devient parfait car il ne reste aucun minéral solide après l'évaporation. Vos verres sortent de la machine avec une transparence de cristal, sans aucun voile opaque.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                                        <h4 className="font-bold text-xl text-blue-600 mb-4 flex items-center gap-2">
                                            <GlassWater className="h-6 w-6" /> Transparence Totale
                                        </h4>
                                        <p className="text-slate-700 text-sm">Finies les taches sur les verres à vin et les couverts. Votre vaisselle retrouve son éclat d'origine sans aucun polissage manuel.</p>
                                    </div>
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                                        <h4 className="font-bold text-xl text-blue-600 mb-4 flex items-center gap-2">
                                            <Sun className="h-6 w-6" /> Économie de Produits
                                        </h4>
                                        <p className="text-slate-700 text-sm">Utilisez jusqu'à 70 % moins de détergent et éliminez complètement le besoin d'agents de rinçage coûteux.</p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Un impact au-delà de l'esthétique</h2>
                                <p>
                                    Avoir une vaisselle propre n'est pas qu'une question de vanité. Les résidus de calcaire et de film savonneux peuvent abriter des bactéries microscopiques à leur surface. En assurant un rinçage parfait, vous garantissez un environnement plus hygiénique pour vos repas familiaux. De plus, vous protégez les composants internes de votre lave-vaisselle (pompes, buses, éléments chauffants) contre l'entartrage.
                                </p>

                                <div className="mt-24 p-12 bg-blue-600 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden">
                                    <h3 className="text-4xl font-bold mb-6 italic">Le luxe d'une vaisselle cristalline</h3>
                                    <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
                                        Ne laissez plus l'eau dure ternir vos moments de convivialité. Offrez à votre maison la pureté qu'elle mérite avec les systèmes Signature de Bricareau.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                        <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 rounded-full px-12 h-20 text-xl font-bold shadow-xl font-bold transition-all hover:scale-105" asChild>
                                            <a href="/adoucissement">Voir nos adoucisseurs</a>
                                        </Button>
                                        <a href="tel:18552649328" className="text-3xl font-bold hover:text-blue-200 transition-colors">
                                            1-855-264-9328
                                        </a>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Conclusion</h2>
                                <p>
                                    La vaisselle tachetée est le symptôme visible d'un problème invisible. En choisissant l'adoucissement de l'eau, vous restaurez non seulement la beauté de votre verrerie, mais vous optimisez également l'efficacité globale de votre cuisine. C'est l'un des changements les plus gratifiants et immédiats que vous puissiez apporter à votre environnement domestique.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default VaisselleTachetee;
