import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2, Cog, Gauge, ShieldAlert, Zap } from "lucide-react";

const CalcaireElectromenagers = () => {
    useEffect(() => {
        document.title = "Comment le calcaire réduit la durée de vie de vos électroménagers ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez l'impact dévastateur du calcaire sur vos appareils ménagers. Un guide expert sur la protection de vos investissements grâce à l'adoucissement de l'eau.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-br from-slate-900 to-blue-950 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                        <img
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop"
                            alt="Ingénierie et protection des électroménagers"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full mb-8">
                                <ShieldAlert className="h-4 w-4 text-blue-400" />
                                <span className="text-sm font-semibold tracking-wider uppercase">Expertise Technique</span>
                            </div>
                            <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                                <span className="font-bold">Comment le calcaire réduit la</span> <span className="text-blue-400 font-bold">durée de vie</span> de vos électroménagers ?
                            </h1>
                            <p className="text-[20px] leading-snug text-slate-300 font-light mb-10 text-justify max-w-xl mx-auto">
                                Analyser l'impact technologique et économique des eaux minéralisées sur les composants critiques de vos appareils ménagers haut de gamme.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 font-bold" asChild>
                                    <a href="/adoucisseur-eau-residentiel">Découvrir les solutions</a>
                                </Button>
                                <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-8 h-14 backdrop-blur-sm" asChild>
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
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-snug text-justify font-light">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    Derrière chaque panneau de commande élégant et chaque promesse de haute efficacité de vos appareils ménagers modernes se cache une fragilité insidieuse : leur sensibilité à la chimie de l'eau. Dans un environnement aux eaux calcaires, un électroménager certifié pour durer quinze ans peut voir sa vie abrégée de moitié, tout en consommant une énergie excessive lors de son agonie technologique.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Le calcaire : Un isolant thermique non désiré</h2>
                                <p>
                                    Pour comprendre pourquoi le calcaire est si dévastateur, il faut examiner sa nature physique. Le carbonate de calcium est un excellent isolant. Dans tout appareil qui chauffe de l'eau — chauffe-eau, lave-vaisselle, cafetière — le calcaire se dépose préférentiellement sur les surfaces les plus chaudes.
                                </p>
                                <p>
                                    Cette accumulation crée une "barrière thermique" entre l'élément chauffant et l'eau. Pour atteindre la température de consigne, l'élément doit rester allumé plus longtemps et atteindre des températures internes beaucoup plus élevées, ce qui mène inévitablement à un "burnout" prématuré du composant.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-20">
                                    <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-start shadow-sm">
                                        <div className="h-14 w-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                            <Gauge className="h-8 w-8 text-blue-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Perte d'Efficacité</h3>
                                        <p className="text-sm">Une accumulation de seulement 1,5 mm de calcaire sur un élément chauffant peut augmenter les coûts énergétiques de 15 %. Plus l'eau est dure, plus la facture monte mensuellement.</p>
                                    </div>
                                    <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-start shadow-sm">
                                        <div className="h-14 w-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                            <Cog className="h-8 w-8 text-blue-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Usure Mécanique</h3>
                                        <p className="text-sm">Le calcaire durcit les joints et obstrue les pompes. Cela force les moteurs à travailler contre une résistance accrue, menant à des bris mécaniques coûteux.</p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Le Chauffe-eau : Première victime</h2>
                                <p>
                                    Le chauffe-eau est le poumon de votre confort domestique, mais c'est aussi le foyer principal de la sédimentation calcaire. Dans un réservoir alimenté par de l'eau dure, des "cailloux" de calcium se forment au fond, réduisant le volume d'eau disponible et créant des bruits de craquements inquiétants lors des cycles de chauffe.
                                </p>
                                <p>
                                    Pour les chauffe-eau "tankless" (instantanés), la situation est encore plus critique. Leurs conduits d'échange thermique extrêmement fins peuvent s'obstruer complètement en quelques mois, rendant l'appareil inopérant et souvent irréparable sans un détartrage chimique agressif qui fragilise les métaux internes.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Laveuse et Lave-vaisselle : L'agression interne</h2>
                                <p>
                                    Ces appareils reposent sur de fines buses et des joints d'étanchéité de précision. Le calcaire a deux effets majeurs :
                                </p>
                                <ol className="space-y-6 my-10 font-semibold text-slate-900 pl-6">
                                    <li>L'obstruction des bras d'aspersion du lave-vaisselle, résultant en une vaisselle mal nettoyée malgré l'utilisation de cycles "heavy duty".</li>
                                    <li>Le durcissement des membranes en caoutchouc et des joints dans la laveuse, provoquant des fuites mineures internes qui finissent par corroder les circuits électroniques.</li>
                                </ol>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight italic">Cafetières et Petit Électroménager</h2>
                                <p>
                                    Même vos machines à espresso haut de gamme ne sont pas épargnées. Le calcaire altère non seulement le goût de votre café en changeant l'extraction des huiles, mais il immobilise les micro-valves de l'appareil. Un adoucisseur d'eau Bricareau protège ces instruments de précision, garantissant une température d'infusion constante et un goût pur, tasse après tasse.
                                </p>

                                <div className="my-24 bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl flex flex-col md:flex-row gap-12 items-center">
                                    <div className="flex-1">
                                        <h3 className="text-3xl font-bold mb-6 italic">Le retour sur investissement</h3>
                                        <p className="text-lg font-light mb-8 text-slate-300">
                                            Investir dans un adoucisseur d'eau n'est pas une dépense, c'est une stratégie de protection de patrimoine. En prolongeant la vie de vos appareils de 30 à 50 %, le système s'amortit de lui-même en quelques années seulement, sans compter les économies réalisées sur les appels de service et l'énergie.
                                        </p>
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 font-bold" asChild>
                                            <a href="/tests-eau">Évaluer mon eau aujourd'hui</a>
                                        </Button>
                                    </div>
                                    <div className="hidden md:block w-1/3">
                                        <Zap className="h-32 w-32 text-blue-500 opacity-50" />
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Maintenance vs Prévention</h2>
                                <p>
                                    Beaucoup de propriétaires attendent la panne pour agir. Pourtant, une fois que le calcaire a cristallisé à l'intérieur d'un composant, le mal est fait. La prévention par l'échange ionique — le cœur de nos adoucisseurs Bricareau — est la seule méthode reconnue pour éliminer physiquement le calcium et le magnésium de l'eau avant qu'ils ne puissent causer des dommages.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Conclusion</h2>
                                <p>
                                    Protéger vos électroménagers, c'est protéger votre investissement et votre tranquillité d'esprit. L'eau douce de Bricareau agit comme un lubrifiant cosmétique et technique pour votre maison, assurant que vos appareils fonctionnent avec la même fluidité et efficacité qu'au premier jour. Ne laissez pas le calcaire silencieux saboter votre demeure.
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

export default CalcaireElectromenagers;
