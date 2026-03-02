import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldAlert, BadgeCheck, Microscope, Waves, Droplets, ArrowRight } from "lucide-react";

const PFASEauRobinet = () => {
    useEffect(() => {
        document.title = "PFAS dans l'eau du robinet : Risques et Solutions d'élimination | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Tout savoir sur les PFAS (polluants éternels) dans l'eau potable. Découvrez les risques pour la santé, comment tester votre eau et les solutions de filtration efficaces.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1517646288020-f4ca67909930?q=80&w=2000&auto=format&fit=crop"
                            alt="Analyse de la qualité de l'eau du robinet"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-block px-4 py-1 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-400 text-sm font-bold mb-6 tracking-widest uppercase">
                                Dossier Spécial Santé & Environnement
                            </span>
                            <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                                <span className="font-bold">PFAS dans l'eau du robinet :</span> <span className="text-blue-400 font-bold italic">ce que vous devez savoir</span>
                            </h1>
                            <p className="text-[20px] leading-snug text-slate-300 font-light mb-10 text-justify max-w-xl mx-auto italic">
                                Comprendre les "polluants éternels", leurs impacts sur votre santé et les technologies de pointe indispensables pour les éliminer définitivement de votre foyer.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 text-lg font-bold transition-all hover:scale-105" asChild>
                                    <a href="/contact">Analyse d'eau professionnelle</a>
                                </Button>
                                <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-10 h-16 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105" asChild>
                                    <a href="tel:18552649328" className="flex items-center gap-2">
                                        <Phone className="h-5 w-5" /> 1-855-264-9328
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Intro */}
                <article className="py-20 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-snug text-justify">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    Ils sont partout, invisibles et quasiment indestructibles. Les PFAS, surnommés « polluants éternels », se sont immiscés dans notre environnement et, plus inquiétant encore, dans notre eau potable. Face à cette menace émergente, l'ignorance n'est plus une option.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Depuis quelques années, un acronyme revient de plus en plus fréquemment dans les rapports de santé publique et les médias spécialisés : les <strong>PFAS</strong> (Substances Per- et Polyfluoroalkylées). Utilisés massivement depuis les années 1940 dans une multitude d'industries, ces composés chimiques sont aujourd'hui au cœur d'une préoccupation mondiale majeure. Leur présence dans l'eau du robinet, même à des concentrations infimes, soulève des questions fondamentales sur la sécurité de notre consommation quotidienne.
                                    </p>
                                    <p>
                                        Cet article se donne pour mission de décortiquer cette problématique complexe. Nous explorerons la nature chimique de ces substances, les raisons de leur persistance, les risques réels qu'elles font peser sur le corps humain, et surtout, les solutions concrètes et technologiques pour protéger l'eau de votre famille. Car si les PFAS sont « éternels », notre vulnérabilité ne doit pas l'être.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. Que sont exactement les PFAS ?</h2>
                                <p>
                                    Les PFAS constituent une vaste famille de plus de 4 700 composés chimiques synthétiques. Leur caractéristique commune réside dans une chaîne d'atomes de carbone où certains atomes d'hydrogène ont été remplacés par du fluor. La liaison carbone-fluor est l'une des liaisons les plus solides de la chimie organique, ce qui confère à ces molécules une stabilité exceptionnelle.
                                </p>
                                <p>
                                    C'est précisément cette robustesse qui les rend si utiles pour l'industrie : elles résistent à la chaleur, aux taches, à la graisse et à l'eau. On les retrouve dans les poêles antiadhésives (Téflon), les emballages alimentaires, les textiles imperméables (Gore-Tex), les mousses anti-incendie et même certains produits cosmétiques. Cependant, cette même propriété de « résistance ultime » signifie qu'elles ne se décomposent pas naturellement dans l'environnement, d'où leur surnom de polluants éternels.
                                </p>
                                <p>
                                    Une fois libérés dans la nature — que ce soit par des rejets industriels, l'usure de produits de consommation ou l'utilisation de mousses extinctrices — les PFAS migrent inévitablement vers les cours d'eau et les nappes phréatiques. Leur solubilité dans l'eau facilite leur dispersion sur de très longues distances, contaminant des écosystèmes loin de toute source industrielle directe.
                                </p>

                                <div className="my-16 bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-10">
                                        <ShieldAlert className="w-32 h-32 text-blue-900" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Le Cycle de Contamination</h3>
                                    <ul className="space-y-4 text-blue-800">
                                        <li className="flex gap-3">
                                            <BadgeCheck className="w-6 h-6 shrink-0 mt-1" />
                                            <span><strong>Production :</strong> Émissions atmosphériques et rejets liquides des usines chimiques.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <BadgeCheck className="w-6 h-6 shrink-0 mt-1" />
                                            <span><strong>Consommation :</strong> Dégradation des produits ménagers et textiles vers les eaux usées.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <BadgeCheck className="w-6 h-6 shrink-0 mt-1" />
                                            <span><strong>Cycle de l'eau :</strong> Infiltration dans les nappes phréatiques et rivières utilisées pour l'eau potable.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <BadgeCheck className="w-6 h-6 shrink-0 mt-1" />
                                            <span><strong>Accumulation :</strong> Absorption par les plantes, les animaux et finalement l'homme.</span>
                                        </li>
                                    </ul>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Les risques pour la santé humaine</h2>
                                <p>
                                    Le problème majeur des PFAS ne réside pas seulement dans leur persistance environnementale, mais dans leur capacité à se <strong>bioaccumuler</strong> dans le corps humain. Une fois ingérés par l'eau ou la nourriture, ils restent dans le sang et les organes pendant des années avant d'être éliminés.
                                </p>
                                <p>
                                    Des études épidémiologiques approfondies menées par des organismes de renommée mondiale comme l'EPA (Environmental Protection Agency) aux États-Unis et Santé Canada ont établi des liens préoccupants entre une exposition chronique aux PFAS et divers problèmes de santé :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Perturbations hormonales :</strong> Interférence avec les fonctions thyroïdiennes et les hormones reproductrices.</li>
                                    <li><strong>Défis immunitaires :</strong> Réduction de la réponse immunitaire aux vaccins, particulièrement chez les enfants.</li>
                                    <li><strong>Risques de cancers :</strong> Augmentation du risque de cancer du rein et des testicules (notamment pour le PFOA).</li>
                                    <li><strong>Problèmes métaboliques :</strong> Augmentation des niveaux de cholestérol et risques de maladies cardiovasculaires.</li>
                                    <li><strong>Santé néonatale :</strong> Effets sur le développement fœtal, pouvant entraîner des retards de croissance ou des problèmes de développement moteur.</li>
                                </ul>
                                <p>
                                    L'aspect le plus sournois des PFAS est que les effets ne sont pas immédiats. Il s'agit d'une toxicité lente, cumulative, qui peut se manifester après des décennies d'exposition à de « faibles » doses quotidiennes via l'eau du robinet. C'est pourquoi les seuils de sécurité recommandés ne cessent d'être revus à la baisse par les autorités sanitaires.
                                </p>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Pourquoi l'eau du robinet est-elle particulièrement à risque ?</h2>
                                <p>
                                    Les usines de traitement des eaux municipales traditionnelles ont été conçues pour éliminer les sédiments, les bactéries, les virus et certains polluants classiques comme le chlore. Elles ne sont pas équipées, pour la plupart, de technologies capables de capturer des molécules aussi petites et stables que les PFAS.
                                </p>
                                <p>
                                    Dans de nombreuses régions, l'eau potable est puisée dans des rivières qui reçoivent les rejets de stations d'épuration urbaines ou industrielles. Si ces rejets contiennent des PFAS, ceux-ci traversent le cycle de potabilisation sans être éliminés, arrivant ainsi directement dans le verre d'eau des consommateurs. Pour les propriétaires de puits privés, le risque provient de la migration souterraine de produits chimiques depuis des sites d'enfouissement, des zones agricoles ou des sites industriels voisins.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <Microscope className="w-12 h-12 text-blue-600 mb-6" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Analyse de laboratoire</h4>
                                        <p className="text-slate-600 text-sm leading-snug">
                                            Seules des analyses de laboratoire très poussées (chromatographie liquide couplée à la spectrométrie de masse) peuvent détecter les PFAS dans l'eau. Un test d'eau standard n'est pas suffisant.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <Droplets className="w-12 h-12 text-blue-600 mb-6" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">L'eau de puits n'est pas épargnée</h4>
                                        <p className="text-slate-600 text-sm leading-snug">
                                            L'eau souterraine peut être contaminée par des PFAS provenant de mousses anti-incendie utilisées à proximité (aéroports, casernes) ou de boues d'épuration épandues sur les champs.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">4. Comment éliminer efficacement les PFAS ?</h2>
                                <p>
                                    La bonne nouvelle est que la science du traitement de l'eau a fait des bonds de géant. Il existe aujourd'hui des technologies domestiques capables de réduire les concentrations de PFAS à des niveaux quasi indétectables. Cependant, toutes les filtrations ne se valent pas.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">L'Osmose Inverse : La barrière ultime</h3>
                                <p>
                                    L'osmose inverse est largement reconnue comme la technologie la plus efficace pour éliminer une large gamme de PFAS, y compris les molécules à chaîne courte (les plus difficiles à capturer). En forçant l'eau à travers une membrane semi-perméable microscopique, ce système rejette les contaminants chimiques pour ne laisser passer que les molécules d'eau pure.
                                </p>
                                <p>
                                    Chez Bricareau, nos systèmes d'osmose inverse intègrent plusieurs étages de filtration, assurant une sécurité multicouche. Non seulement ils éliminent les PFAS, mais ils traitent également le plomb, l'arsenic, les nitrates et les résidus pharmaceutiques.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Le Charbon Actif Granulaire (CAG)</h3>
                                <p>
                                    Le charbon actif de haute qualité agit comme une éponge chimique. Les PFAS sont attirés par la surface du charbon par un processus appelé <strong>adsorption</strong>. Pour être réellement efficace contre les PFAS, le filtre doit contenir un charbon de densité supérieure et l'eau doit avoir un temps de contact suffisant avec le média filtrant.
                                </p>
                                <p>
                                    Il est crucial de noter que les filtres de type « pichet » basiques sont souvent insuffisants pour une élimination complète et durable des PFAS. Des systèmes montés sous évier ou pour toute la maison sont nécessaires pour garantir une efficacité constante.
                                </p>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">5. L'importance d'un entretien rigoureux</h2>
                                <p>
                                    Installer un système de filtration est la première étape, mais son efficacité à long terme dépend entièrement de son entretien. Un filtre saturé ne peut plus capturer de nouveaux polluants et peut même en relâcher si le média n'est pas remplacé à temps.
                                </p>
                                <p>
                                    Un protocole de maintenance professionnelle est indispensable. Cela inclut le remplacement périodique des cartouches de charbon et la vérification de l'intégrité de la membrane d'osmose inverse par des tests de conductivité ou de TDS (Total Dissolved Solids). C'est la base de la promesse Bricareau : une eau saine, jour après jour, sans compromis.
                                </p>

                                <div className="mt-20 p-10 bg-slate-900 text-white rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-12 opacity-5">
                                        <Waves className="w-64 h-64" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Prenez le contrôle de votre eau aujourd'hui</h3>
                                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light">
                                        Les polluants éternels ne doivent pas faire partie de l'avenir de votre famille. Nos experts peuvent analyser votre eau et concevoir la barrière de protection adaptée à votre foyer.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-lg font-bold" asChild>
                                            <a href="/contact">Demander un diagnostic gratuit</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-500 text-sm italic border-t border-slate-100 pt-8">
                                    <p>
                                        Avertissement : Les informations contenues dans cet article sont basées sur les connaissances scientifiques actuelles et les directives de santé publique. Bien que les solutions de filtration domestiques soient hautement efficaces, des analyses régulières sont recommandées pour valider la performance de tout système de traitement d'eau.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Articles or Products section could go here */}
            </main>
            <Footer />
        </div>
    );
};

export default PFASEauRobinet;
