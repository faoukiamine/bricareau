import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldAlert, Activity, Droplets, InfoIcon, ShieldCheck, MicroscopeIcon, AlertTriangle, Wind, Zap, FlaskConical, Target, CheckCircle2 } from "lucide-react";

const RadonEtUraniumPuitsPrives = () => {
    useEffect(() => {
        document.title = "Radon et uranium dans les puits privés : risques réels et solutions | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez les risques liés à la présence de radon et d'uranium dans les puits privés au Québec. Guide complet sur les tests et les solutions de filtration efficaces.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-snug font-light text-justify text-[16px]">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-slate-900 text-white overflow-hidden text-center shadow-lg">
                    <div className="absolute inset-0 opacity-20 transform scale-105">
                        <img
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
                            alt="Abstraction représentant l'analyse de l'eau"
                            className="w-full h-full object-cover grayscale mix-blend-overlay"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-red-600/20 border border-red-400/30 text-red-400 text-sm font-bold mb-6 tracking-widest uppercase mt-8">
                            Dossier Spécial : Contaminants Invisibles
                        </span>
                        <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-center sm:text-justify max-w-4xl mx-auto">
                            <span className="font-bold">Radon et uranium</span> dans les puits privés : <span className="text-red-400 font-bold">risques réels</span> et solutions efficaces
                        </h1>
                        <p className="text-[20px] leading-snug text-slate-300 font-light mb-10 text-center sm:text-justify max-w-2xl mx-auto italic">
                            Inodores, incolores et sans saveur, le radon et l'uranium sont des contaminants radioactifs naturellement présents dans les sols québécois. Découvrez l'impact de ces éléments sur votre santé et comment sécuriser votre approvisionnement en eau.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-10 h-16 font-bold shadow-lg transition-transform active:scale-95" asChild>
                                <a href="/tests-eau">Réserver une analyse d'eau</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-10 h-16 font-bold backdrop-blur-sm shadow-xl" asChild>
                                <a href="tel:18552649328" className="flex items-center gap-2">
                                    <Phone className="h-5 w-5" /> 1-855-264-9328
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="py-20 lg:py-32 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-relaxed">

                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-red-600 pl-8 italic">
                                    Contrairement au fer ou au soufre qui altèrent le goût et l'odeur de l'eau, le radon et l'uranium se cachent dans l'ombre. Leur présence silencieuse dans les puits artésiens est une préoccupation majeure de santé publique régionale, nécessitant une vigilance accrue des propriétaires.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Vivre à la campagne ou en périphérie urbaine offre de nombreux avantages, mais dépendre d’un puits privé implique une grande responsabilité : celle de s’assurer que l’eau puisée est propre à la consommation. Si les tests bactériens (comme E. coli) sont bien ancrés dans les habitudes, deux menaces bien plus insidieuses sont souvent négligées : <strong>le radon et l’uranium</strong>.
                                    </p>
                                    <p>
                                        Ces éléments radioactifs d'origine naturelle proviennent de la dégradation de la roche mère. Lorsqu'ils s'infiltrent dans les nappes phréatiques, ils se retrouvent pompés directement dans nos maisons. Ce guide exhaustif Bricareau est conçu pour démystifier la présence de ces contaminants, évaluer leurs risques avec objectivité et détailler les technologies approuvées pour les éradiquer.
                                    </p>
                                </div>

                                {/* Section 1: Origine */}
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. D'où viennent l'uranium et le radon ?</h2>
                                <p>
                                    Le radon et l'uranium ne sont pas le résultat d'une pollution industrielle. Ce sont des éléments qui existent sur Terre depuis sa formation.
                                </p>
                                <ul className="list-none space-y-6 my-10">
                                    <li className="flex gap-4 items-start">
                                        <div className="h-10 w-10 shrink-0 bg-blue-100 flex items-center justify-center rounded-full mt-1">
                                            <Target className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <strong className="text-xl text-slate-900 block mb-2">L'Uranium (U)</strong>
                                            <p className="text-slate-600">
                                                C'est un métal lourd radioactif présent naturellement dans certaines formations géologiques, particulièrement dans le Bouclier canadien. Au fil du temps, l'eau souterraine dissout de minuscules quantités de ce métal rocheux, l'entraînant dans les aquifères. Il est soluble dans l'eau et ne s'évapore pas.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="h-10 w-10 shrink-0 bg-red-100 flex items-center justify-center rounded-full mt-1">
                                            <Wind className="h-5 w-5 text-red-600" />
                                        </div>
                                        <div>
                                            <strong className="text-xl text-slate-900 block mb-2">Le Radon (Rn)</strong>
                                            <p className="text-slate-600">
                                                Le radon est un gaz noble radioactif. Il est en réalité créé par la désintégration de l'uranium et du radium présents dans le sol. Parce qu'il s'agit d'un gaz, il peut s'infiltrer dans les maisons par les fissures des fondations, mais il se dissout également dans l'eau souterraine sous pression.
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                {/* Section 2: Risques Santé */}
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Évaluation des risques pour la santé</h2>

                                <div className="bg-red-50 border border-red-100 rounded-3xl p-10 mb-12">
                                    <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                                        <AlertTriangle className="h-8 w-8" />
                                        Le danger de l'inhalation vs ingestion
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="font-bold text-red-800 text-lg mb-3">La toxicité de l'Uranium</h4>
                                            <p className="text-red-950/80 leading-snug">
                                                Bien qu'il soit radioactif, le danger principal de l'uranium dans l'eau potable pèse sur vos <strong>reins</strong>. Sa toxicité chimique est de loin supérieure à sa toxicité radiologique. Une exposition prolongée (ingestion par l'eau bue ou utilisée pour cuisiner) peut causer des lésions rénales chroniques irréversibles.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-red-800 text-lg mb-3">Le piège volatil du Radon</h4>
                                            <p className="text-red-950/80 leading-snug">
                                                Boire de l'eau contenant du radon présente un risque faible (cancer de l'estomac). Le vrai danger survient lorsque <strong>le gaz s'échappe de l'eau</strong>. Lors d'une douche chaude, d'une lessive ou de la vaisselle, le radon est relâché dans l'air de la maison et inhalé. Il est la deuxième cause de cancer du poumon après le tabagisme.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Santé Canada a établi des recommandations strictes (Concentrations Maximales Acceptables - CMA) :
                                    <ul className="list-disc pl-8 mt-4 space-y-2">
                                        <li><strong>Uranium :</strong> Le maximum autorisé est de 0,02 milligramme par litre (20 µg/L).</li>
                                        <li><strong>Radon dans l'air :</strong> 200 Becquerels par mètre cube (Bq/m³). (L'eau contribue au radon de l'air de la maison).</li>
                                    </ul>
                                </p>

                                {/* Section 3: Diagnostic */}
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Le processus de dépistage et d'analyse</h2>
                                <p>
                                    Parce qu'ils ne modifient ni l'aspect ni le goût de l'eau, les tests en laboratoire accrédité sont le seul moyen de confirmer leur présence.
                                </p>
                                <div className="flex flex-col md:flex-row gap-8 my-10">
                                    <div className="flex-1 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-6 opacity-5">
                                            <FlaskConical className="h-32 w-32" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 z-10 relative">Quand faut-il tester ?</h3>
                                        <ul className="space-y-3 text-slate-600 relative z-10">
                                            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> Lors de l'achat d'une propriété avec puits privé.</li>
                                            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> Si le puits est foré dans du substrat rocheux.</li>
                                            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> Une fois tous les 5 ans en prévention de routine.</li>
                                            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> S'il y a eu des secousses sismiques ou du dynamitage à proximité.</li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    Pour le radon, il est fortement conseillé de réaliser deux tests distincts : un test de l'air ambiant au niveau le plus bas de la maison (sous-sol), et un test de l'eau. Souvent, traiter l'eau fortement chargée en radon résout également une part significative du problème de radon dans l'air intérieur.
                                </p>

                                {/* Section 4: Solutions Technologiques */}
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">4. Solutions d'ingénierie et Technologies de filtration</h2>
                                <p>
                                    La bonne nouvelle est que la science de l'hydrologie domestique a développé des méthodes hautement efficaces pour retirer ces éléments dangereux. Voici comment les experts Bricareau procèdent pour sécuriser une résidence.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-6">Traitement de l'Uranium</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-6 items-start">
                                        <div className="bg-slate-900 text-white rounded-xl p-4 shrink-0">
                                            <Droplets className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">L'Osmose Inverse (Point d'utilisation)</h4>
                                            <p className="text-slate-600 leading-snug">
                                                Si l'uranium est le seul problème et que le but est d'avoir de l'eau potable saine (pour boire et cuisiner), un système d'osmose inverse installé sous l'évier est la référence absolue. Sa membrane semi-perméable ultra-fine rejette plus de 90-95% des atomes d'uranium lourds vers le drain.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-start">
                                        <div className="bg-slate-900 text-white rounded-xl p-4 shrink-0">
                                            <Activity className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">L'Échange Anionique (Maison entière)</h4>
                                            <p className="text-slate-600 leading-snug">
                                                Si les niveaux sont très élevés ou si l'on souhaite traiter l'eau de toute la résidence, les systèmes à résine échangeuse d'anions représentent la solution de pointe. Ressemblant à un adoucisseur d'eau, ce filtre utilise une résine spéciale qui attire l'uranium chargé négativement et le remplace par un ion chlorure.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-800 mt-16 mb-6">L'Éradication du Radon</h3>
                                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl my-8">
                                    <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                        <Wind className="h-6 w-6 text-blue-600" />
                                        L'Aération (Aérostripping)
                                    </h4>
                                    <p className="text-slate-600 mb-6 font-medium">L'approche la plus performante pour désamorcer le radon de l'eau avant son entrée dans vos tuyaux.</p>
                                    <p className="text-slate-600 leading-snug">
                                        L'aération est la méthode approuvée par le gouvernement (EPA/Santé Canada) pour enlever jusqu'à 99% du radon. Le système injecte de grandes quantités d'air ambiant dans la colonne d'eau de manière agitée. Le radon, gaz très volatil, est "arraché" (stripping) de l'eau et s'échappe dans l'air contenu dans la chambre de traitement. Cet air vicié est ensuite évacué de manière sécuritaire par un tuyau (évent) dirigé vers l'extérieur du toit de la maison. L'eau redescend pure et saine.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm my-8">
                                    <h4 className="text-xl font-bold text-slate-900 mb-4">Le Filtre au Charbon Actif (Pour de faibles niveaux)</h4>
                                    <p className="text-slate-600 leading-snug">
                                        Pour des concentrations légères, un immense réservoir de charbon actif de qualité catalytique peut capturer le radon de l'eau par adsorption. Toutefois, Bricareau met en garde : ce charbon accumule la radioactivité avec le temps. Le réservoir lui-même devient une source de rayonnement gamma et nécessite une disposition extrêmement contrôlée lorsqu'il est saturé. Il s'agit d'une solution de dernier recours ou pour des taux minimes.
                                    </p>
                                </div>

                                {/* Section 5: Conclusion & CTA */}
                                <div className="mt-24 p-12 bg-blue-900 text-white rounded-[3rem] relative overflow-hidden shadow-2xl">
                                    <div className="absolute bottom-0 right-0 opacity-10 scale-150 translate-x-10 translate-y-10">
                                        <ShieldCheck className="w-64 h-64" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter w-full lg:w-3/4">La tranquillité d'esprit commence par le savoir.</h3>
                                        <p className="text-xl text-blue-100 opacity-95 mb-10 font-light leading-relaxed max-w-2xl">
                                            Ne laissez pas l'invisibilité de ces contaminants vous rassurer faussement. Un test est simple, abordable, et sauve des vies. Chez Bricareau, nos ingénieurs en traitement des eaux conçoivent des stratégies de filtration multi-barrières qui éliminent le radon et l'uranium tout en respectant la chimie délicate de votre puits.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <Button size="lg" className="bg-blue-500 hover:bg-blue-400 text-white rounded-full px-12 h-16 text-lg font-bold shadow-xl transition-all" asChild>
                                                <a href="/contact">Parler à un spécialiste certifié</a>
                                            </Button>
                                        </div>
                                    </div>
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

export default RadonEtUraniumPuitsPrives;
