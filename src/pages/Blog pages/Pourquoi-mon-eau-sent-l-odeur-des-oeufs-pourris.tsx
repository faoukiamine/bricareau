import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import eauOdeurImg from "@/assets/eau-odeur-oeufs-pourris.png";
import filtrationSystemImg from "@/assets/Filtration-eau-de-puits.webp";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const PourquoiEauSentOeufsPourris = () => {
    useEffect(() => {
        document.title = "Pourquoi mon eau sent l'odeur des œufs pourris ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Guide complet sur l'odeur d'œufs pourris dans l'eau (hydrogène sulfuré). Causes, dangers, diagnostics et solutions de filtration professionnelles.");
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
                            src={eauOdeurImg}
                            alt="Problème d'odeur de soufre dans l'eau"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                                <span className="font-bold">Pourquoi mon eau</span> sent-elle l'odeur des <span className="text-blue-400 font-bold">œufs pourris</span> ?
                            </h1>
                            <p className="text-[20px] leading-snug text-slate-300 font-light mb-10 text-justify max-w-xl mx-auto">
                                Un guide exhaustif sur l'hydrogène sulfuré, les causes de cette nuisance olfactive et les solutions technologiques de pointe pour retrouver une eau d'une pureté absolue.
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
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-snug text-justify">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    L'expérience est aussi brutale que désagréable : vous ouvrez votre robinet pour vous verser un verre d'eau ou prendre une douche, et une odeur nauséabonde d'œufs pourris envahit instantanément la pièce. Cette nuisance, bien qu'extrêmement commune, soulève immédiatement des inquiétudes légitimes quant à la sécurité de votre approvisionnement en eau.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Le coupable démasqué : L'hydrogène sulfuré (H₂S)</h2>
                                <p>
                                    Sur le plan scientifique, l'odeur caractéristique d'œufs pourris est la signature olfactive d'un gaz incolore : <strong>l'hydrogène sulfuré</strong>, ou sulfure d'hydrogène (H₂S). Ce composé n'est pas seulement une nuisance pour vos sens ; il est le produit de divers processus chimiques et biologiques se déroulant dans votre eau ou vos systèmes de plomberie.
                                </p>
                                <p>
                                    L'hydrogène sulfuré est détectable par l'odorat humain à des concentrations infimes, parfois aussi basses que 0,01 partie par million (ppm). Bien qu'il se dissipe rapidement dans l'air, sa présence dans l'eau courante indique un déséquilibre qui mérite une attention professionnelle rigoureuse.
                                </p>

                                <div className="my-16 bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-sm overflow-hidden flex flex-col md:flex-row gap-12 items-center">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-blue-900 mb-6">Saviez-vous que ?</h3>
                                        <p className="text-blue-800 text-lg">
                                            L'hydrogène sulfuré n'est pas seulement un problème d'odeur. À long terme, il peut attaquer les tuyaux en cuivre, ternir l'argenterie et endommager les composants internes de vos appareils ménagers par un processus de corrosion accélérée.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/3 h-48 rounded-2xl overflow-hidden shadow-inner">
                                        <img src={eauOdeurImg} alt="Analyse de l'eau" className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Les trois origines principales de la nuisance</h2>
                                <p>
                                    Comprendre pourquoi votre eau dégage cette odeur nécessite un diagnostic précis. En règle générale, les causes se divisent en trois catégories distinctes, allant des facteurs naturels aux défaillances techniques de votre système de production d'eau chaude.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. La décomposition naturelle et les aquifères</h3>
                                <p>
                                    Pour les propriétaires de puits artésiens, l'origine est fréquemment géologique. L'hydrogène sulfuré peut être présent naturellement dans les eaux souterraines. Il se forme lors de la décomposition de matières organiques anciennes piégées dans les couches rocheuses ou par la dissolution de minéraux contenant du soufre, comme la pyrite.
                                </p>
                                <p>
                                    Dans ces environnements privés d'oxygène (anaérobies), le soufre devient omniprésent. Lorsque vous pompez l'eau vers la surface, le gaz se libère sous l'effet de la baisse de pression, produisant l'odeur caractéristique.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. L'activité des bactéries sulfato-réductrices</h3>
                                <p>
                                    Souvent confondues avec des bactéries pathogènes, les bactéries sulfato-réductrices (BSR) sont des microorganismes qui utilisent les sulfates présents dans l'eau comme source d'énergie, produisant de l'hydrogène sulfuré comme sous-produit métabolique.
                                </p>
                                <p>
                                    Ces bactéries se plaisent particulièrement dans les environnements stagnants et pauvres en oxygène : fonds de puits, réservoirs de stockage ou tuyauteries peu utilisées. Bien qu'elles ne représentent généralement pas un risque direct pour la santé, leur présence crée un biofilm qui peut compliquer les traitements d'eau et encourager d'autres types de croissance microbienne.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. La réaction électrochimique du chauffe-eau</h3>
                                <p>
                                    Si l'odeur ne se manifeste <strong>que lorsque vous utilisez l'eau chaude</strong>, le coupable est presque certainement votre chauffe-eau. Plus précisément, il s'agit d'une réaction entre l'eau et la tige d'anode protectrice située à l'intérieur du réservoir.
                                </p>
                                <p>
                                    Ces tiges, souvent en magnésium, sont conçues pour se corroder à la place du réservoir (protection cathodique). Cependant, dans certaines conditions chimiques, la tige de magnésium réagit avec les sulfates et les bactéries pour produire du H₂S. Remplacer la tige par une anode en aluminium-zinc ou une anode motorisée peut souvent résoudre ce problème spécifique.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Conséquences et dangers : Au-delà de l'odeur</h2>
                                <p>
                                    Une question revient sans cesse : est-il dangereux de boire une eau qui sent les œufs pourris ? La réponse courte est : généralement non, à des concentrations résidentielles typiques. Cependant, cela ne signifie pas que vous devriez ignorer le problème.
                                </p>
                                <ul className="space-y-4 my-10">
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-1">1</div>
                                        <p><strong>Corrosion des métaux :</strong> L'H₂S est hautement corrosif. Il attaque le cuivre de vos tuyaux, créant des micro-fuites au fil du temps, et noircit prématurément votre plomberie.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-1">2</div>
                                        <p><strong>Impact culinaire :</strong> Le gaz altère le goût de vos aliments, particulièrement ceux cuits à l'eau comme les pâtes, le riz ou le thé, leur conférant une amertume désagréable.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-1">3</div>
                                        <p><strong>Esthétique et confort :</strong> L'odeur peut devenir si imprégnante qu'elle s'attache à vos vêtements fraîchement lavés et à votre peau après la douche, affectant votre confort et celui de vos invités.</p>
                                    </li>
                                </ul>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Le diagnostic par étape : Trouvez la source chez vous</h2>
                                <p>
                                    Avant de nous contacter pour une solution définitive, vous pouvez effectuer ces tests simples mais révélateurs pour orienter nos techniciens :
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                                        <h4 className="text-xl font-bold mb-4">Le test de température</h4>
                                        <p className="text-base text-slate-600">
                                            Faites couler l'eau froide puis l'eau chaude séparément. Si l'odeur n'est présente qu'avec l'eau chaude, le problème se situe dans votre chauffe-eau. Si elle est présente dans les deux, la source est l'aquifère ou les bactéries dans le puits.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                                        <h4 className="text-xl font-bold mb-4">Le test de stagnation</h4>
                                        <p className="text-base text-slate-600">
                                            Si l'odeur est forte au premier écoulement le matin mais disparaît après quelques minutes, il s'agit probablement d'une croissance bactérienne locale dans votre tuyauterie interne plutôt qu'un problème généralisé.
                                        </p>
                                    </div>
                                </div>

                                <section className="my-20 relative rounded-[3rem] overflow-hidden">
                                    <img src={filtrationSystemImg} alt="Système de filtration Bricareau" className="w-full h-[500px] object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                                    <div className="absolute bottom-10 left-10 right-10 text-white">
                                        <h3 className="text-3xl font-bold mb-4">Solutions Professionnelles</h3>
                                        <p className="text-lg text-slate-200 max-w-2xl">
                                            Bricareau conçoit des systèmes sur mesure utilisant l'oxydation et la filtration avancée pour éradiquer le soufre à la source.
                                        </p>
                                    </div>
                                </section>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Comment Bricareau élimine définitivement les odeurs de soufre</h2>
                                <p>
                                    Une fois que l'origine du problème est identifiée, Bricareau déploie son expertise pour installer une solution pérenne. L'élimination du soufre et de l'H₂S repose sur un principe fondamental : <strong>l'oxydation</strong>.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">L'Air Injection Oxidation (AIO) : La solution de référence</h3>
                                <p>
                                    Nos systèmes AIO représentent le summum de la technologie actuelle pour le traitement du soufre résidentiel. Le processus se déroule en trois phases :
                                </p>
                                <ol className="space-y-4 my-8">
                                    <li><strong>L'Injection d'air :</strong> Le système crée une poche d'air au sommet du réservoir de filtration. En traversant cette zone, l'eau entre en contact avec l'oxygène, ce qui provoque la conversion instantanée du gaz d'hydrogène sulfuré en particules de soufre solides.</li>
                                    <li><strong>L'Oxydation catalytique :</strong> Un média filtrant spécialisé capte ces particules précipitées. Ce média agit comme un aimant haute performance pour les impuretés oxydées.</li>
                                    <li><strong>Le Nettoyage automatique :</strong> Régulièrement, le système se nettoie automatiquement (backwash), expulsant les particules capturées vers le drain, garantissant ainsi une performance constante sans intervention humaine.</li>
                                </ol>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Filtration au charbon actif catalytique</h3>
                                <p>
                                    Pour les concentrations modérées d'hydrogène sulfuré, nous recommandons souvent le charbon actif catalytique. Contrairement au charbon standard, ce média est traité pour accélérer les réactions chimiques de décomposition du soufre. Il offre l'avantage supplémentaire de retirer le chlore et d'autres goûts et odeurs indésirables, produisant une eau d'une clarté de cristal.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Désinfection par rayonnement UV</h3>
                                <p>
                                    Si nos tests révèlent une présence importante de bactéries sulfato-réductrices, un système de désinfection UV est impératif. En détruisant l'ADN des bactéries, le rayonnement UV empêche leur prolifération et la production future de gaz odorant. C'est une barrière de sécurité non chimique indispensable pour les eaux de puits.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">L'importance d'une expertise locale et certifiée</h2>
                                <p>
                                    Le traitement de l'eau est une science complexe. Installer un système trouvé en grande surface sans analyse préalable peut non seulement être inefficace, mais aussi aggraver certains problèmes de qualité d'eau par l'introduction de composants mal adaptés.
                                </p>
                                <p>
                                    Chez Bricareau, nos techniciens sont formés pour comprendre les nuances hydrogéologiques propres à chaque région du Québec. Nous ne vendons pas seulement des équipements ; nous offrons une garantie de résultat. Chaque installation commence par une analyse d'eau rigoureuse pour déterminer les niveaux précis de soufre, de fer, de manganèse et le pH, car ces facteurs interagissent tous entre eux.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Analyse technique des médias filtrants pour le soufre</h2>
                                <p>
                                    Le choix d'un média filtrant est d'un importance capitale. Contrairement aux filtres à charbon classiques, les systèmes spécialisés de Bricareau utilisent des minerais catalytiques capables d'induire une réaction chimique rapide même dans des conditions de débit élevé.
                                </p>
                                <div className="overflow-x-auto my-12">
                                    <table className="w-full border-collapse border border-slate-200">
                                        <thead>
                                            <tr className="bg-slate-100">
                                                <th className="border border-slate-200 p-4 font-bold text-slate-900">Média</th>
                                                <th className="border border-slate-200 p-4 font-bold text-slate-900">Efficacité Soufre</th>
                                                <th className="border border-slate-200 p-4 font-bold text-slate-900">Mécanisme</th>
                                                <th className="border border-slate-200 p-4 font-bold text-slate-900">Entretien</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-slate-200 p-4">Charbon Catalytique</td>
                                                <td className="border border-slate-200 p-4">Excellente (modéré)</td>
                                                <td className="border border-slate-200 p-4">Conversion sur surface</td>
                                                <td className="border border-slate-200 p-4">Remplacement périodique</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-200 p-4">Manganese Greensand</td>
                                                <td className="border border-slate-200 p-4">Très Haute</td>
                                                <td className="border border-slate-200 p-4">Oxydation par contact</td>
                                                <td className="border border-slate-200 p-4">Régénération chimique</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-200 p-4">Katalox Light</td>
                                                <td className="border border-slate-200 p-4">Exceptionnelle</td>
                                                <td className="border border-slate-200 p-4">Haut flux de catalyse</td>
                                                <td className="border border-slate-200 p-4">Simple Backwash</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">L'impact insoupçonné sur la valeur de votre propriété</h2>
                                <p>
                                    Dans un marché immobilier compétitif, la qualité de l'eau est devenue un critère de sélection majeur pour les acheteurs avertis. Une maison dont l'eau sent les œufs pourris perd instantanément de sa valeur perçue. Pire encore, lors de l'inspection pré-achat, la présence d'H₂S peut être interprétée comme le signe d'un puits contaminé ou d'une plomberie défectueuse, pouvant mener à l'annulation d'une vente ou à une renégociation agressive du prix.
                                </p>
                                <p>
                                    Investir dans un système de filtration professionnel n'est pas seulement une question de confort quotidien ; c'est une valorisation durable de votre actif immobilier. Un système Bricareau, avec sa longévité prouvée et son efficacité constante, devient un argument de vente rassurant pour tout nouvel acquéreur.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Maintenance et pérennité des équipements</h2>
                                <p>
                                    Un système de traitement du soufre performant nécessite une maintenance préventive pour opérer à son plein potentiel pendant des décennies. Nos programmes d'entretien incluent :
                                </p>
                                <ul className="space-y-4 my-8">
                                    <li className="flex gap-4">
                                        <ArrowRight className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <p><strong>Nettoyage de l'injecteur d'air :</strong> L'accumulation de minéraux peut obstruer l'arrivée d'oxygène, réduisant l'efficacité de l'oxydation.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <ArrowRight className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <p><strong>Vérification de la résine/média :</strong> Au fil des années, le média filtrant peut se saturer ou s'éroder, nécessitant une recharge pour maintenir la qualité d'eau.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <ArrowRight className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <p><strong>Ajustement des cycles de lavage :</strong> Selon l'évolution de la qualité de votre nappe phréatique, nos techniciens recalibrent le système pour minimiser la consommation d'eau tout en maximisant la filtration.</p>
                                    </li>
                                </ul>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Cas d'étude : Réussite d'une décontamination en Estrie</h2>
                                <p>
                                    Prenons l'exemple d'une résidence en Estrie confrontée à des niveaux d'hydrogène sulfuré extrêmement élevés (supérieurs à 5 ppm). L'odeur était perceptible à plus de 10 mètres de la maison lors de l'utilisation des tuyaux d'arrosage extérieurs. Après une analyse rigoureuse, Bricareau a installé une solution combinée : un injecteur d'air AIO suivi d'un charbon catalytique haute performance.
                                </p>
                                <p>
                                    Résultat : Une eau totalement inodore dès le premier jour, une protection retrouvée pour la tuyauterie en cuivre qui commençait déjà à se corroder, et une famille satisfaite qui peut enfin utiliser son bain autoportant sans gêne.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Conclusion : Retrouver la fierté de votre eau</h2>
                                <p>
                                    Vivre avec une eau qui sent l'odeur des œufs pourris n'est pas une fatalité. C'est un signal d'alarme que votre système de traitement actuel réclame une mise à niveau. Que le problème vienne de votre puits, de votre chauffe-eau ou de bactéries locales, des solutions efficaces, durables et écologiques existent.
                                </p>
                                <p>
                                    En choisissant Bricareau, vous optez pour la tranquillité d'esprit, une protection accrue de votre patrimoine immobilier et, surtout, le plaisir simple mais essentiel de boire une eau pure, fraîche et sans aucune odeur.
                                </p>

                                <div className="mt-20 p-10 bg-blue-600 rounded-[2rem] text-white text-center shadow-xl">
                                    <h3 className="text-3xl font-bold mb-6">Prêt à transformer votre eau ?</h3>
                                    <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
                                        Nos experts sont à votre disposition pour analyser votre situation et vous proposer la solution idéale.
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

export default PourquoiEauSentOeufsPourris;
