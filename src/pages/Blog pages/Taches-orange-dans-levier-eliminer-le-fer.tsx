import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import tachesOrangeImg from "@/assets/taches-orange-evier.png";
import filtrationFerImg from "@/assets/systeme-filtration-fer.png";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

const TachesOrangeDansLevier = () => {
    useEffect(() => {
        document.title = "Taches orange dans l'évier : Le guide complet pour éliminer le fer de votre eau | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez comment éliminer définitivement les taches orange de votre évier. Guide expert sur le fer dans l'eau : causes, tests et solutions de filtration professionnelles.");
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
                            src={tachesOrangeImg}
                            alt="Problème de taches orange de fer dans l'eau"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                                <span className="font-bold">Taches orange dans l'évier</span> : Le <span className="text-blue-400 font-bold">guide complet</span> pour éliminer le fer
                            </h1>
                            <p className="text-[20px] leading-[28px] text-slate-300 font-light mb-10 text-justify max-w-xl mx-auto">
                                Comprendre l'origine des dépôts ferreux et explorer les solutions de traitement avancées pour une eau parfaitement limpide et des sanitaires éclatants.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14" asChild>
                                    <a href="/tests-eau">Réserver une analyse d'eau</a>
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

                {/* Main Article Content */}
                <article className="py-20 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-relaxed text-justify">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    Rien ne défigure plus une salle de bain de luxe ou une cuisine moderne que l'apparition de traînées orangeâtres au fond de l'évier ou de la baignoire. Ces taches de "rouille", persistantes et difficiles à nettoyer, sont le signe indéniable d'une concentration excessive de fer dans votre approvisionnement en eau.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Le fer dans l'eau : Une complexité invisible</h2>
                                <p>
                                    Le fer est l'un des minéraux les plus abondants de la croûte terrestre. Il n'est donc pas surprenant de le retrouver fréquemment dans les eaux de puits, mais sa présence peut prendre plusieurs formes, chacune exigeant une approche de traitement spécifique. Contrairement à une idée reçue, l'eau peut paraître parfaitement claire au sortir du robinet tout en étant chargée de fer "invisible".
                                </p>
                                <p>
                                    Il est crucial de distinguer les deux types de fer les plus courants rencontrés dans les résidences :
                                </p>
                                <ul className="space-y-4 my-8">
                                    <li><strong>Le fer ferreux (fer de l'eau claire) :</strong> L'eau est limpide lors du remplissage d'un verre, mais après quelques minutes d'exposition à l'oxygène de l'air, le fer s'oxyde et des particules orange se forment. C'est ce fer qui crée les taches les plus tenaces par oxydation lente.</li>
                                    <li><strong>Le fer ferrique (fer de l'eau rouge) :</strong> Le fer est déjà oxydé avant d'atteindre votre robinet. L'eau sort avec une teinte jaunâtre ou rougeâtre, car elle contient des particules solides en suspension.</li>
                                </ul>

                                <div className="my-16 bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-sm overflow-hidden flex flex-col md:flex-row gap-12 items-center">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-blue-900 mb-6">Le saviez-vous ?</h3>
                                        <p className="text-blue-800 text-lg">
                                            Même une concentration de fer aussi basse que 0,3 milligramme par litre (mg/L) est suffisante pour provoquer des taches visibles sur vos sanitaires et altérer la saveur de vos boissons préférées, comme le café ou le thé.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/3 h-48 rounded-2xl overflow-hidden shadow-inner">
                                        <img src={tachesOrangeImg} alt="Détails des taches de fer" className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Les causes de la présence de fer</h2>
                                <p>
                                    Pourquoi votre voisin possède-t-il une eau parfaite alors que la vôtre tache tout sur son passage ? La réponse réside souvent dans la géologie locale ou l'état de vos infrastructures.
                                </p>
                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. La géologie des aquifères</h3>
                                <p>
                                    Au Québec, de nombreuses régions possèdent des sols riches en fer et en manganèse. L'eau de pluie, en s'infiltrant dans le sol, devient légèrement acide par absorption de dioxyde de carbone. Cette acidité lui permet de dissoudre les minéraux ferreux des roches environnantes. Une fois dans l'aquifère, le fer reste en solution jusqu'à ce qu'il soit pompé vers votre maison.
                                </p>
                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Corrosion des anciennes tuyauteries</h3>
                                <p>
                                    Dans les maisons plus anciennes ou les réseaux de distribution municipaux vieillissants, le fer peut provenir de la corrosion interne des tuyaux en fonte ou en acier galvanisé. Ce type de fer est généralement ferrique (particules visibles) et peut varier en intensité selon le débit d'eau ou les travaux sur le réseau.
                                </p>
                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. Bactéries ferrugineuses</h3>
                                <p>
                                    Moins connues mais tout aussi problématiques, les bactéries ferrugineuses ne sont pas dangereuses pour la santé mais se nourrissent de fer pour se multiplier. Elles créent une texture gélatineuse et filamenteuse dans les réservoirs de toilette et peuvent obstruer les crépines des robinets, tout en exacerbant les problèmes d'odeur et de taches.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Les conséquences : Un impact global sur votre foyer</h2>
                                <p>
                                    Le fer ne se contente pas de laisser des traces esthétiques ; il s'attaque à la longévité de votre patrimoine domestique.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <h4 className="font-bold text-xl mb-3 text-blue-600">Patrimoine Textil</h4>
                                        <p className="text-sm">Le fer jaunit le linge blanc et ternit les couleurs. Les particules se logent dans les fibres, rendant les taches impossibles à retirer avec un simple détergent.</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <h4 className="font-bold text-xl mb-3 text-blue-600">Plomberie & Appareils</h4>
                                        <p className="text-sm">L'accumulation de fer réduit le diamètre utile de vos tuyaux et endommage les valves des lave-vaisselle et laveuses, menant à des bris coûteux.</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <h4 className="font-bold text-xl mb-3 text-blue-600">Qualité Culinaire</h4>
                                        <p className="text-sm">Le fer donne un goût métallique prononcé à l'eau et noircit les légumes cuits à l'eau, affectant la présentation et la saveur des plats.</p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Comment traiter le fer efficacement ?</h2>
                                <p>
                                    Éliminer le fer nécessite une technologie adaptée au type de fer présent. Une erreur courante consiste à installer un adoucisseur d'eau standard pour traiter de fortes concentrations de fer, ce qui sature rapidement la résine et réduit la durée de vie de l'appareil.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">L'Oxydation par Injection d'Air (AIO) : La solution Bricareau</h3>
                                <p>
                                    La méthode la plus propre et la plus efficace consiste à "forcer" l'oxydation du fer avant qu'il n'atteigne vos tuyaux. Notre système **Iron Shield** utilise une chambre d'air comprimé pour oxyder instantanément le fer dissous en particules solides, qui sont ensuite capturées par un média catalytique haute performance. Ce système ne nécessite aucun produit chimique et se nettoie automatiquement.
                                </p>

                                <section className="my-20 relative rounded-[3rem] overflow-hidden">
                                    <img src={filtrationFerImg} alt="Installation professionnelle Bricareau" className="w-full h-[500px] object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                                    <div className="absolute bottom-10 left-10 right-10 text-white">
                                        <h3 className="text-3xl font-bold mb-4">Ingénierie de Précision</h3>
                                        <p className="text-lg text-slate-200 max-w-2xl">
                                            Chaque système est calibré précisément selon les résultats de votre analyse d'eau pour garantir une suppression totale du fer.
                                        </p>
                                    </div>
                                </section>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Les résines d'échange ionique spécialisées</h3>
                                <p>
                                    Pour les eaux qui présentent à la fois une dureté élevée et des niveaux modérés de fer, Bricareau propose des adoucisseurs équipés de résines à haute affinité pour le fer. Ces systèmes sont paramétrés avec des cycles de nettoyage spécifiques garantissant que le fer est correctement expulsé lors de la régénération.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Tableau comparatif des méthodes de traitement</h2>
                                <div className="overflow-x-auto my-12">
                                    <table className="w-full border-collapse border border-slate-200">
                                        <thead>
                                            <tr className="bg-slate-100">
                                                <th className="border border-slate-200 p-4 font-bold text-slate-900 text-left">Technologie</th>
                                                <th className="border border-slate-200 p-4 font-bold text-slate-900 text-left">Efficacité Fer</th>
                                                <th className="border border-slate-200 p-4 font-bold text-slate-900 text-left">Produits Chimiques</th>
                                                <th className="border border-slate-200 p-4 font-bold text-slate-900 text-left">Avantages</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-slate-200 p-4">Injection d'Air (AIO)</td>
                                                <td className="border border-slate-200 p-4 text-green-600 font-bold">Maximale</td>
                                                <td className="border border-slate-200 p-4">Aucun</td>
                                                <td className="border border-slate-200 p-4">Écologique, sans entretien manuel</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-200 p-4">Filtre au Manganèse</td>
                                                <td className="border border-slate-200 p-4">Haute</td>
                                                <td className="border border-slate-200 p-4">Permanganate</td>
                                                <td className="border border-slate-200 p-4">Efficace sur fer et manganèse</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-200 p-4">Adoucisseur Spécialisé</td>
                                                <td className="border border-slate-200 p-4">Moyenne</td>
                                                <td className="border border-slate-200 p-4">Sel</td>
                                                <td className="border border-slate-200 p-4">Traite dureté et fer simultanément</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Maintenance : La clé de la performance</h2>
                                <p>
                                    Même le meilleur système de filtration nécessite un suivi professionnel pour opérer à 100% sur le long terme. Les dépôts de fer peuvent, avec le temps, encrasser les vannes de contrôle.
                                </p>
                                <p>
                                    C'est pourquoi Bricareau inclut dans ses solutions :
                                </p>
                                <ul className="space-y-4 my-8">
                                    <li className="flex gap-4">
                                        <ArrowRight className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <p><strong>Nettoyant pour résine :</strong> Des solutions formulées pour dissoudre les accumulations de fer tenaces lors des cycles de nettoyage.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <ArrowRight className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <p><strong>Vérification annuelle :</strong> Un technicien certifié inspecte les injecteurs et ajuste le système selon l'évolution de la qualité de votre puits.</p>
                                    </li>
                                </ul>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Conclusion : Libérez votre foyer du fer</h2>
                                <p>
                                    Vivre avec des taches orange n'est pas une fatalité liée à votre région ou à votre puits. C'est un défi technique pour lequel Bricareau possède les outils et l'expertise nécessaires. En éliminant le fer à la source, vous protégez non seulement vos investissements (plomberie, électroménagers) mais vous retrouvez également le plaisir d'une eau saine et limpide pour toute votre famille.
                                </p>
                                <p>
                                    Ne laissez pas le fer déprécier votre maison et compliquer votre quotidien. Une simple analyse d'eau suffit pour ouvrir la porte à une solution durable.
                                </p>

                                <div className="mt-20 p-10 bg-blue-600 rounded-[2rem] text-white text-center shadow-xl">
                                    <h3 className="text-3xl font-bold mb-6">Prêt pour une eau sans taches ?</h3>
                                    <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
                                        Contactez nos experts aujourd'hui pour une analyse gratuite et découvrez la tranquillité d'esprit Bricareau.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                        <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 rounded-full px-10 h-16 text-lg font-bold" asChild>
                                            <a href="/tests-eau">Réserver mon analyse gratuite</a>
                                        </Button>
                                        <p className="font-bold text-xl">OU</p>
                                        <a href="tel:18552649328" className="text-2xl font-bold hover:underline underline-offset-8">
                                            1-855-264-9328
                                        </a>
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

export default TachesOrangeDansLevier;
