import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldAlert, BadgeCheck, Microscope, Waves, Droplets, ArrowRight, ShieldCheck, HeartPulse, Baby, Info, Zap, FlaskConical, AlertTriangle } from "lucide-react";

const NitratesEauDanger = () => {
    useEffect(() => {
        document.title = "Nitrates dans l'eau : Danger pour les nourrissons et Élimination | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Comprenez les risques des nitrates dans l'eau potable, particulièrement pour les bébés (syndrome du bébé bleu). Découvrez comment tester et éliminer les nitrates de votre eau.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-snug font-light">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-blue-950 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1594411133519-2189874cb3d1?q=80&w=2000&auto=format&fit=crop"
                            alt="Eau pure et sécurité familiale"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-400 text-sm font-bold mb-6 tracking-widest uppercase">
                            Santé Infantile & Qualité de l'Eau
                        </span>
                        <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                            <span className="font-bold">Nitrates dans l'eau :</span> <span className="text-blue-400 font-bold">Le danger invisible</span>
                        </h1>
                        <p className="text-[20px] leading-snug text-slate-300 font-light mb-10 text-justify max-w-xl mx-auto italic">
                            Protéger les plus vulnérables contre le syndrome du bébé bleu : guide expert sur la détection et l'élimination des nitrates en zone rurale et agricole.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 font-bold" asChild>
                                <a href="/tests-eau">Réserver un test de nitrates</a>
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
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    Dans les régions agricoles du Québec et de l'Ontario, les nitrates constituent l'une des sources de contamination les plus fréquentes et les plus pernicieuses des eaux souterraines. Incolores, inodores et sans saveur, ils s'infiltrent silencieusement dans les puits, posant un risque critique pour la santé des nourrissons et des femmes enceintes.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        L'eau est l'élément de base de la vie, mais lorsqu'elle est chargée de nitrates, elle peut devenir un vecteur de danger physiologique majeur. Pour une famille rurale, la vigilance ne doit pas seulement se porter sur la clarté de l'eau, mais sur sa composition chimique invisible. Comprendre la dynamique des nitrates, c'est avant tout protéger la capacité de transport d'oxygène dans le sang de nos enfants.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. Origines : D'où viennent ces nitrates ?</h2>
                                <p>
                                    Les nitrates (NO₃) sont des composés azotés qui existent naturellement dans l'environnement, mais leur concentration dans l'eau potable est massivement amplifiée par l'activité humaine.
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Activités Agricoles :</strong> L'épandage massif de fertilisants azotés et de lisiers sur les terres cultivées. L'excédent non absorbé par les plantes est lessivé par la pluie et s'infiltre dans les nappes phréatiques.</li>
                                    <li><strong>Installations Septiques :</strong> Des systèmes de traitement des eaux usées domestiques défaillants ou trop denses peuvent libérer des nitrates dans le sol environnant, contaminant les puits artésiens à proximité.</li>
                                    <li><strong>Élevage de Bétail :</strong> Le stockage inadéquat des fumiers et les enclos de bétail à forte densité sont des sources ponctuelles de contamination majeure.</li>
                                </ul>

                                <div className="my-16 bg-blue-50 border border-blue-100 rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="shrink-0 bg-white p-6 rounded-2xl shadow-sm">
                                        <FlaskConical className="w-16 h-16 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">Le Seuil de Sécurité</h3>
                                        <p className="text-slate-600 text-[18px]">
                                            Santé Canada et l'Organisation Mondiale de la Santé (OMS) ont fixé la concentration maximale acceptable (CMA) de nitrates dans l'eau potable à <strong>10 mg/L (azote nitrique)</strong>. Au-delà de ce seuil, l'eau est officiellement jugée impropre à la consommation pour les populations vulnérables.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. L'Urgence Médicale : Le Syndrome du Bébé Bleu</h2>
                                <p>
                                    Le danger le plus grave associé aux nitrates est la <strong>méthémoglobinémie</strong>, plus connue sous le nom de « syndrome du bébé bleu ».
                                </p>
                                <p>
                                    Lorsqu'un nourrisson de moins de six mois ingère de l'eau contenant des nitrates, ses bactéries gastriques transforment ces nitrates en <strong>nitrites</strong> (beaucoup plus toxiques). Ces nitrites se lient à l'hémoglobine du sang, transformant celle-ci en méthémoglobine, une molécule incapable de transporter l'oxygène vital aux tissus de l'organisme.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                                        <Baby className="w-12 h-12 text-red-600 mb-6" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Cibles Vulnérables</h4>
                                        <p className="text-slate-600 text-sm italic leading-snug">
                                            Les nourrissons alimentés par du lait maternisé préparé avec de l'eau de puits non filtrée sont les plus exposés. Les femmes enceintes sont également à risque en raison d'une demande accrue en oxygène.
                                        </p>
                                    </div>
                                    <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
                                        <AlertTriangle className="w-12 h-12 text-amber-600 mb-6" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Signes de Danger</h4>
                                        <p className="text-slate-600 text-sm italic leading-snug">
                                            Une coloration bleue/violacée de la peau (cyanose), particulièrement autour des lèvres, des mains et des pieds, associée à une détresse respiratoire, constitue une urgence médicale absolue.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Détection : Comment savoir si votre eau est contaminée ?</h2>
                                <p>
                                    Puisque les nitrates ne modifient ni l'aspect ni le goût de l'eau, seule une <strong>analyse de laboratoire rigoureuse</strong> peut confirmer leur présence.
                                </p>
                                <p>
                                    Bricareau recommande une analyse initiale complète pour tout nouveau puits, suivie d'une vérification annuelle, de préférence au printemps ou après de fortes pluies, périodes de ruissellement agricole intense. Il est crucial d'utiliser des contenants stériles et de transporter les échantillons rapidement au laboratoire pour éviter toute dégradation chimique qui fausserait les résultats.
                                </p>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">4. Solutions d'élimination : La technologie à votre service</h2>
                                <p>
                                    Il est important de noter que <strong>faire bouillir l'eau ne retire pas les nitrates</strong>. Au contraire, l'ébullition fait s'évaporer l'eau pure, ce qui concentre davantage les nitrates restants, aggravant ainsi le risque. Deux types de technologies résidentielles sont certifiées pour l'élimination des nitrates :
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
                                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <Zap className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-4 tracking-tight">L'Osmose Inverse</h4>
                                        <p className="text-slate-600 text-[16px] text-justify">
                                            Installée sous l'évier, l'osmose inverse utilise une membrane semi-perméable pour rejeter physiquement 85% à 95% des nitrates. C'est la solution de prédilection pour l'eau de boisson et la préparation des biberons.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <Waves className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-4 tracking-tight">Échange d'ions (Résine sélective)</h4>
                                        <p className="text-slate-600 text-[16px] text-justify">
                                            Similaire à un adoucisseur d'eau, ce système utilise une résine anionique spécifique qui capture les ions nitrates et les remplace par des ions chlorures. Idéal pour traiter toute l'entrée d'eau de la maison.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-20 p-10 md:p-20 bg-blue-900 text-white rounded-[4rem] relative overflow-hidden text-center shadow-2xl">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 -translate-y-12">
                                        <ShieldCheck className="w-96 h-96" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic">Aucun compromis sur la vie.</h3>
                                    <p className="text-xl text-blue-100 opacity-90 mb-12 max-w-2xl mx-auto font-light leading-snug">
                                        L'incertitude n'a pas sa place au moment de préparer le repas de votre nouveau-né. Laissez nos experts diagnostiquer votre puits et installer la protection certifiée dont vous avez besoin.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-full px-12 h-18 text-xl font-bold transition-transform active:scale-95 shadow-xl" asChild>
                                            <a href="/contact">Analyse d'eau professionnelle</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-snug flex items-start gap-4">
                                    <Info className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                                    <p>
                                        Note importante : Un système d'osmose inverse nécessite un entretien rigoureux des pré-filtres et du post-filtre pour maintenir son taux de rejet nominal contre les nitrates. Un audit annuel est recommandé.
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

export default NitratesEauDanger;
