import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Microscope, ShieldAlert, Sparkles, Droplets, Info, Scale, CheckCircle2, FlaskConical, ArrowRight } from "lucide-react";

const FluorEauBienfaitDanger = () => {
    useEffect(() => {
        document.title = "Fluor dans l'eau : Bienfait ou Danger ? | Guide complet Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Explorez le débat sur la fluoration de l'eau. Découvrez les bienfaits dentaires face aux risques de toxicité neurologique et apprenez comment filtrer efficacement le fluor selon vos besoins.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-snug font-light">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-teal-950 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1594411133519-2189874cb3d1?q=80&w=2000&auto=format&fit=crop"
                            alt="Molécule de fluor dans l'eau"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-teal-600/20 border border-teal-400/30 text-teal-400 text-sm font-bold mb-6 tracking-widest uppercase">
                            Science Et Société : Étude Approfondie
                        </span>
                        <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                            <span className="font-bold">Fluor dans l'eau</span> : <span className="text-teal-400 font-bold">Bienfait ou Danger ?</span>
                        </h1>
                        <p className="text-[20px] leading-snug text-slate-300 font-light mb-10 text-justify max-w-xl mx-auto italic">
                            Décoder le débat scientifique, comprendre la neurotoxicité émergente et maîtriser votre exposition grâce aux technologies de filtration sélectives.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-10 h-16 font-bold" asChild>
                                <a href="/contact">Analyse d'eau personnalisée</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-10 h-16 font-bold backdrop-blur-sm" asChild>
                                <a href="tel:18552649328" className="flex items-center gap-2">
                                    <Phone className="h-5 w-5" /> 1-855-264-9328
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="py-20 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-snug text-justify">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-teal-600 pl-8 italic">
                                    Sujet de controverse depuis plus de 60 ans, la fluoration de l'eau potable reste l'une des mesures de santé publique les plus débattues. Présenté comme une victoire monumentale contre la carie dentaire, le fluor fait aujourd'hui face à une réévaluation scientifique rigoureuse quant à ses effets systémiques sur le développement neurologique et endocrinien.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        L'exposition au fluor n'est plus, comme autrefois, limitée à l'eau de boisson. Nous le retrouvons désormais dans les dentifrices, les produits dentaires, les boissons transformées et même le thé. Cette « multi-exposition » brouille les cartes des recommandations classiques. Faut-il continuer à fluorer l'eau ? Est-il sécuritaire pour un nourrisson d'en consommer quotidiennement ? Comment contrôler ce que nous ingérons réellement ? Ce dossier Bricareau apporte un éclairage neutre et technologique sur une question complexe.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. Pourquoi y a-t-il du fluor dans mon eau ?</h2>
                                <p>
                                    Le fluor peut être présent de deux manières dans l'eau potable :
                                </p>
                                <p>
                                    <strong>Présence Naturelle :</strong> Certains sols rocheux et nappes phréatiques sont naturellement riches en minéraux contenant du fluor (comme la fluorine ou la cryolite). L'eau, en circulant, dissout ces minéraux. On trouve des zones à haute teneur en fluorure naturel principalement dans certaines régions de l'Ouest canadien.
                                </p>
                                <p>
                                    <strong>Fluoration Artificielle :</strong> Il s'agit d'une intervention délibérée des autorités de santé publique consistant à ajuster la teneur en fluorure à environ 0,7 milligramme par litre (mg/L). L'objectif historique est d'apporter une protection topique et systémique contre les caries dentaires, particulièrement dans les populations défavorisées ayant un accès limité aux soins dentaires professionnels.
                                </p>

                                <div className="my-16 bg-teal-50 rounded-3xl p-10 md:p-16 border border-teal-100 shadow-sm relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-teal-950 mb-6">Le Dilemme du Fluor</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <h4 className="font-bold flex items-center gap-2 text-teal-800"><Scale className="h-5 w-5" /> Les Bienfaits</h4>
                                                <p className="text-sm italic">Renforcement de l'émail dentaire et réduction de 25% de l'incidence des caries chez l'enfant et l'adulte (données OMS).</p>
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-bold flex items-center gap-2 text-red-800"><ShieldAlert className="h-5 w-5" /> Les Risques</h4>
                                                <p className="text-sm italic">Fluorose dentaire et osseuse, perturbations thyroïdiennes et accumulation neurologique suspectée à long terme.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 p-4 bg-white rounded-2xl shadow-inner border border-teal-100/50">
                                        <FlaskConical className="w-full h-32 text-teal-600" />
                                        <p className="text-center font-bold text-teal-900 mt-4 text-[12px] uppercase">Analyse Chimique F⁻</p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Signaux d'alerte : La remise en question scientifique</h2>
                                <p>
                                    De nouvelles études menées par des universités de renom (dont l'Université Harvard et l'Université de Toronto) suggèrent que l'apport systémique de fluor pourrait interférer avec le développement cérébral in utero et durant la petite enfance.
                                </p>
                                <p>
                                    La <strong>fluorose dentaire</strong> est la manifestation la plus visible d'un excès de fluor durant la formation des dents permanentes. Elle se traduit par des taches blanches ou brunes sur l'émail. Bien que qualifiée de problème « esthétique » par les partisans de la fluoration, elle témoigne biologiquement d'une saturation de l'organisme.
                                </p>
                                <p>
                                    L'inquiétude majeure concerne désormais le <strong>développement neurologique</strong>. Certaines recherches observent une corrélation entre des niveaux plus élevés de fluorure dans l'urine maternelle et une légère baisse du QI chez leur progéniture. Ces preuves, bien que toujours débattues, incitent de nombreux parents à opter pour le principe de précaution en filtrant leur eau de boisson.
                                </p>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight text-center">3. Comment filtrer efficacement le fluor ?</h2>
                                <p className="text-center leading-snug">
                                    Tous les filtres à eau ne retirent pas le fluor. Ce polluant est particulièrement complexe à éliminer en raison de sa charge électronique et de sa petite taille moléculaire.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
                                    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow group">
                                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <CheckCircle2 className="w-6 h-6 text-teal-600" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">L'Osmose Inverse</h4>
                                        <p className="text-slate-600 text-[16px] text-justify">
                                            C'est la méthode de référence. Une membrane d'osmose inverse haute performance est capable de rejeter entre 85 % et 95 % du fluorure présent dans l'eau. Pour un contrôle total, c'est la barrière la plus fiable technologiquement.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow group">
                                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <Sparkles className="w-6 h-6 text-teal-600" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Médias de Charbon Spécialisés</h4>
                                        <p className="text-slate-600 text-[16px] text-justify">
                                            Certains charbons actifs osseux (Bone Charcoal) ou l'alumine activée sont spécifiquement conçus pour adosrber sélectivement le fluorure. Ces médias nécessitent un remplacement rigoureux pour éviter une relargage massif des ions capturés.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">4. Qui devrait filtrer son eau pour le fluor ?</h2>
                                <p>
                                    La décision appartient ultimement au consommateur, mais certains profils devraient être plus attentifs :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Familles avec nourrissons :</strong> Afin de limiter l'apport systémique lors de la préparation des biberons (utilisation d'eau non fluorée recommandée).</li>
                                    <li><strong>Personnes souffrant de thyroïdite d'Hashimoto :</strong> Le fluor est suspecté d'aggraver l'hypothyroïdie.</li>
                                    <li><strong>Individus vivant dans des zones à fluoration forcée :</strong> Souhaitant rétablir leur liberté de choix quant à leur exposition chimique.</li>
                                </ul>

                                <div className="mt-20 p-10 md:p-20 bg-teal-900 text-white rounded-[4rem] text-center shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 -translate-y-12 translate-x-12 group-hover:rotate-12 transition-transform duration-1000">
                                        <Microscope className="w-80 h-80" />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold mb-10 tracking-tighter italic">Reprenez le pouvoir sur votre eau.</h3>
                                    <p className="text-xl text-teal-100 opacity-80 mb-12 max-w-3xl mx-auto font-light leading-snug">
                                        Que vous privilégiez les bénéfices dentaires ou que vous souhaitiez minimiser votre exposition chimique, nos experts vous conseillent sur les meilleures technologies pour atteindre vos objectifs de santé.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white border-teal-600 rounded-full px-12 h-18 text-xl font-bold shadow-teal-900/50 shadow-xl" asChild>
                                            <a href="/contact">Analyser la teneur en fluor de mon eau</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm italic border-t border-slate-100 pt-8 flex items-center gap-4">
                                    <Info className="h-10 w-10 text-teal-600 shrink-0" />
                                    <p>
                                        * Note de transparence : Bricareau s'appuie sur les fiches techniques des leaders en membranes osmotiques pour documenter l'efficacité de l'élimination du fluorure. Consultez toujours un professionnel de la santé pour vos besoins médicaux spécifiques.
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

export default FluorEauBienfaitDanger;
