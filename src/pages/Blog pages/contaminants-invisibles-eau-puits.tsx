import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldAlert, Microscope, Waves, Droplets, Info, FlaskConical, MicroscopeIcon as Microscope2, Search, Zap, Crosshair, Sparkles } from "lucide-react";

const ContaminantsInvisiblesPuits = () => {
    useEffect(() => {
        document.title = "Contaminants invisibles dans votre puits : Risques et Diagnostics | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Explorez les menaces invisibles qui pèsent sur votre puits artésien ou de surface. Apprenez à identifier les bactéries, nitrates, radon et métaux lourds avant qu'ils ne nuisent à votre santé.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 leading-snug font-light">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-teal-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1594411133519-2189874cb3d1?q=80&w=2000&auto=format&fit=crop"
                            alt="Vue aérienne d'un puits en forêt"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-teal-600/20 border border-teal-400/30 text-teal-300 text-sm font-bold mb-6 tracking-widest uppercase">
                            Sécurité Des Eaux Souterraines
                        </span>
                        <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                            <span className="font-bold text-white">Contaminants</span> <span className="text-teal-400 font-bold">invisibles</span> <span className="font-bold text-white">dans votre puits</span>
                        </h1>
                        <p className="text-[20px] leading-snug text-slate-200 font-light mb-10 text-justify max-w-xl mx-auto italic">
                            Par-delà la limpidité, découvrez les menaces biologiques et chimiques silencieuses qui exigent une vigilance professionnelle rigoureuse.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 font-bold" asChild>
                                <a href="/tests-eau">Expertise d'eau de puits immédiate</a>
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
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 text-justify leading-snug">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-teal-600 pl-8 italic">
                                    La limpidité de l'eau est une illusion de pureté. Si une eau trouble ou malodorante signale immédiatement un problème, statistiquement, les menaces les plus graves pour votre santé sont totalement imperceptibles : sans odeur, sans goût et d'une transparence parfaite.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        En tant que propriétaire d'un puits artésien ou de surface, vous êtes, de fait, le gestionnaire de votre propre station de traitement d'eau. Contrairement aux réseaux municipaux surveillés 24h/24 par des ingénieurs, la sécurité de votre puits repose sur votre capacité à anticiper les risques souterrains. Des bactéries coliformes aux nitrates agricoles, ce guide expose les principaux contaminants invisibles qui hantent les aquifères québécois.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. La menace biologique : Bactéries et Virus</h2>
                                <p>
                                    C'est le risque le plus immédiat et le plus fréquent. L'infiltration d'eaux de surface, le ruissellement après une fonte des neiges massive ou un défaut au niveau du couvert du puits peut introduire des microorganismes pathogènes.
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Coliformes Totaux :</strong> Indicateurs d'une infiltration d'eau de surface ou d'un scellement défectueux.</li>
                                    <li><strong>E. coli :</strong> Indication directe d'une contamination fécale (animale ou humaine) exigeant un protocole d'urgence « Avis d'ébullition ».</li>
                                    <li><strong>Entérocoques :</strong> Marqueurs d'une contamination microbiologique persistante dans l'aquifère.</li>
                                </ul>

                                <div className="my-16 bg-slate-900 text-white rounded-[2rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 p-12 opacity-15">
                                        <Zap className="w-48 h-48 text-blue-400" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-8 italic tracking-tighter">La Stérilisation UV : Le bouclier ultime</h3>
                                    <p className="text-xl text-slate-300 opacity-80 mb-10 font-light leading-snug max-w-2xl text-justify">
                                        Ne laissez pas la chance décider de la sécurité de votre famille. Un système de désinfection ultraviolette (UV) professionnel éradique 99,99% des pathogènes instantanément.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-lg font-bold transition-transform hover:scale-105" asChild>
                                            <a href="/Systemes-de-desinfection-UV">Comment fonctionne le traitement UV ?</a>
                                        </Button>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Nitrates et Nitrites : Le danger pour les nourrissons</h2>
                                <p>
                                    Particulièrement présents dans les zones agricoles, les nitrates s'infiltrent lentement vers les nappes phréatiques suite à l'épandage de fertilisants ou de lisiers. Ils sont totalement incolores et insipides.
                                </p>
                                <p>
                                    Une teneur élevée en nitrates peut causer la <strong>méthémoglobinémie</strong> (syndrome du bébé bleu), une condition grave qui empêche le sang des nourrissons de transporter l'oxygène. Les femmes enceintes et les bébés de moins de six mois sont les populations les plus vulnérables. Seule une osmose inverse peut éliminer efficacement ces sels minéraux complexes.
                                </p>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Radon : Le gaz radioactif indétectable</h2>
                                <p>
                                    Le radon est un gaz radioactif noble issu de la désintégration de l'uranium présent naturellement dans le roc canadien. S'il est bien connu pour s'accumuler dans les sous-sols, il peut également se dissoudre dans l'eau souterraine.
                                </p>
                                <p>
                                    Lorsqu'une eau chargée en radon est utilisée pour la douche ou le lavage, le gaz se libère dans l'air de la maison, augmentant drastiquement le risque de cancer du poumon par inhalation. Le traitement nécessite une aération forcée (stripping) ou un charbon actif spécialisé avant que l'eau n'entre dans la résidence.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
                                    <div className="p-10 bg-slate-50 border border-slate-100 rounded-3xl group hover:shadow-2xl transition-all">
                                        <MicroscopeIcon className="w-12 h-12 text-blue-600 mb-6 group-hover:rotate-12 transition-transform" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Analyse chimique complète</h4>
                                        <p className="text-slate-600 text-[16px] text-justify">
                                            Un test incluant le baryum, l'uranium, l'arsenic et les chlorures est indispensable tous les deux ans pour les puits artésiens. L'invisible n'est pas inoffensif.
                                        </p>
                                    </div>
                                    <div className="p-10 bg-slate-50 border border-slate-100 rounded-3xl group hover:shadow-2xl transition-all">
                                        <Search className="w-12 h-12 text-blue-600 mb-6 group-hover:rotate-12 transition-transform" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Inspection visuelle du puits</h4>
                                        <p className="text-slate-600 text-[16px] text-justify">
                                            Vérifiez l'état de la collerette de scellement et assurez-vous que le couvercle est hermétique et situé à au moins 30 cm au-dessus du niveau du sol.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">4. Arsenic et Uranium : Les minéraux de profondeur</h2>
                                <p>
                                    Ces métaux lourds proviennent directement de la roche-mère. L'arsenic, par exemple, est un cancérigène humain reconnu par l'OMS (Groupe 1). Sa présence dans le bouclier canadien est une réalité géologique courante.
                                </p>
                                <p>
                                    Parce que l'arsenic n'altère ni la clarté ni le goût, des personnes ont bu des doses toxiques pendant des années sans le savoir. Une analyse de laboratoire certifiée est l'unique bouclier contre ces risques géogéniques silencieux.
                                </p>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">5. Fréquence des tests : Votre protocole de sécurité</h2>
                                <p>
                                    Bricareau recommande un protocole de surveillance strict pour garantir l'intégrité de votre eau potable :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Microbiologie :</strong> Deux fois par an (printemps et automne) pour détecter les bactéries et virus saisonniers.</li>
                                    <li><strong>Chimie complète (Inorganique) :</strong> Une fois tous les deux à trois ans pour vérifier l'arsenic, l'uranium, le fluorure et le sodium.</li>
                                    <li><strong>Vérification instantanée :</strong> Après tout travail de plomberie majeur ou inondation locale.</li>
                                </ul>

                                <div className="mt-20 p-12 bg-teal-100 border border-teal-200 rounded-[3rem] group">
                                    <h3 className="text-3xl md:text-4xl font-bold text-teal-900 mb-8 italic flex items-center gap-4">
                                        <Crosshair className="h-10 w-10 animate-pulse text-teal-600" />
                                        Diagnostic Expert Bricareau
                                    </h3>
                                    <p className="text-xl text-teal-800 opacity-90 mb-10 font-light leading-snug text-justify max-w-3xl">
                                        Ne laissez plus l'incertitude planer sur la santé de votre famille. Profitez d'une expertise professionnelle pour cartographier les risques invisibles de votre puits et installer la barrière de protection appropriée.
                                    </p>
                                    <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white rounded-full px-12 h-16 font-bold shadow-lg" asChild>
                                        <a href="/contact">Demander mon analyse d'eau</a>
                                    </Button>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-snug">
                                    <p>
                                        * Avertissement : Les informations ci-dessus ne remplacent pas les directives locales de santé publique. Pour tout puits contaminé, cessez la consommation et contactez immédiatement un technicien spécialisé.
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

// Simple wrapper icon to avoid import issues
const MicroscopeIcon = ({ className }: { className?: string }) => (
    <div className={className}><Microscope2 /></div>
);

export default ContaminantsInvisiblesPuits;
