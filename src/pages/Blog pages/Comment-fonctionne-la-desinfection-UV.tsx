import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import uvImage from "@/assets/lampe-uv-fonctionnement.png";
import microImage from "@/assets/purete-microbiologique.png";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Zap, Waves } from "lucide-react";

const FonctionnementDesinfectionUV = () => {
    useEffect(() => {
        document.title = "Comment fonctionne la désinfection UV ? | Guide complet | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Comprendre la science de la désinfection UV pour l'eau. Guide complet sur les rayons ultraviolets, la neutralisation des bactéries et la protection de votre eau de puits.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                        <img
                            src={uvImage}
                            alt="Technologie de désinfection UV de l'eau"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_70%)]" />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full mb-8">
                                <Zap className="h-4 w-4 text-blue-400" />
                                <span className="text-sm font-semibold tracking-wider uppercase">Guide Scientifique</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tighter">
                                Comment fonctionne la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">désinfection UV</span> ?
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 font-light mb-12 leading-relaxed text-justify">
                                Explorez la technologie ultraviolette : une barrière de protection biophysique invisible mais infaillible pour garantir la sécurité microbiologique de votre consommation d'eau.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 text-lg font-bold shadow-lg shadow-blue-900/40" asChild>
                                    <a href="/Systemes-de-desinfection-UV">Nos systèmes UV</a>
                                </Button>
                                <Button size="lg" variant="outline" className="text-white border-white/30 bg-white/5 hover:bg-white/10 rounded-full px-10 h-16 backdrop-blur-sm border" asChild>
                                    <a href="tel:18552649328" className="flex items-center gap-2">
                                        <Phone className="h-5 w-5" /> 1-855-264-9328
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <article className="py-24 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-relaxed text-justify">
                                <p className="lead text-2xl font-light text-slate-900 mb-16 border-l-4 border-blue-600 pl-8 italic">
                                    La désinfection par rayons ultraviolets (UV) représente l'une des avancées les plus significatives de l'ingénierie environnementale contemporaine. Sans ajout de chlore ni altération chimique, elle offre une protection absolue contre les agents pathogènes les plus résistants.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-20 mb-8 tracking-tight italic">La science derrière la lumière : Le spectre UV-C</h2>
                                <p>
                                    Le spectre de la lumière ultraviolette se divise en plusieurs catégories : UV-A, UV-B et UV-C. C'est cette dernière catégorie, située entre 200 et 280 nanomètres (nm), qui possède les propriétés germicides nécessaires au traitement de l'eau.
                                </p>
                                <p>
                                    La longueur d'onde optimale pour la désinfection est de 254 nm. À cette fréquence précise, l'énergie lumineuse pénètre la paroi cellulaire des micro-organismes (bactéries, virus, protozoaires) et est absorbée directement par leur matériel génétique (ADN et ARN).
                                </p>

                                <div className="my-20 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-inner">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Le mécanisme d'inactivation</h3>
                                    <p>
                                        Contrairement aux désinfectants chimiques qui "tuent" l'organisme par oxydation, les UV agissent par **inactivation génétique**. L'absorption des rayons provoque une rupture des liaisons moléculaires dans l'ADN, créant des "dimères de pyrimidine".
                                    </p>
                                    <p className="mt-4">
                                        Ce dommage structurel rend le micro-organisme incapable de se répliquer. Un agent pathogène qui ne peut pas se reproduire est considéré comme mort d'un point de vue épidémiologique, car il ne peut plus causer d'infection ou de maladie dans le corps humain.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">Anatomie d'un système UV Bricareau</h2>
                                <p>
                                    Un système de désinfection UV résidentiel est une pièce d'ingénierie de haute précision composée de quatre éléments fondamentaux :
                                </p>
                                <ul className="space-y-6 my-10">
                                    <li className="flex gap-4">
                                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-blue-600 font-bold">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl text-slate-900 mb-1">La lampe UV germicide</h4>
                                            <p>C'est le cœur du système. Elle contient des vapeurs de mercure qui, lorsqu'elles sont excitées par un courant électrique, génèrent la lumière UV-C à 254 nm.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-blue-600 font-bold">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl text-slate-900 mb-1">Le manchon de quartz</h4>
                                            <p>La lampe est protégée par un tube en quartz pur. Pourquoi le quartz ? Parce que le verre ordinaire bloque les rayons UV-C, alors que le quartz laisse passer plus de 90 % de l'énergie germicide tout en isolant la lampe thermiquement de l'eau froide.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-blue-600 font-bold">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl text-slate-900 mb-1">La chambre de réaction</h4>
                                            <p>Généralement construite en acier inoxydable 304 ou 316 poli, elle confine l'eau pendant son exposition. Sa finition miroir permet de réfléchir les rayons UV à l'intérieur, maximisant la dose reçue par chaque goutte d'eau.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-blue-600 font-bold">4</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl text-slate-900 mb-1">Le ballast intelligent</h4>
                                            <p>Il régule la tension de la lampe et surveille son état. Les systèmes Bricareau incluent des alarmes sonores et visuelles pour vous avertir s'il est temps de remplacer la lampe ou si la désinfection n'est plus optimale.</p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="relative my-24 rounded-[3rem] overflow-hidden shadow-2xl">
                                    <img src={microImage} alt="Pureté microbiologique garantie" className="w-full h-[500px] object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                                    <div className="absolute bottom-12 left-12 right-12 text-white">
                                        <ShieldCheck className="h-16 w-16 mb-6 text-blue-400" />
                                        <h3 className="text-3xl font-bold mb-4 italic text-white">Protection sans Compromis</h3>
                                        <p className="text-xl text-blue-100 font-light max-w-2xl leading-relaxed">
                                            Les virus comme l'Hépatite A et les bactéries comme E. coli sont neutralisés à 99,99 % en une fraction de seconde.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">Pourquoi choisir les UV plutôt que le chlore ?</h2>
                                <p>
                                    Pendant des décennies, la chloration a été la norme. Cependant, pour l'usage résidentiel, les UV présentent des avantages insurmontables :
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                                    <div className="p-8 bg-blue-50 border border-blue-100 rounded-3xl">
                                        <h4 className="font-bold text-xl text-blue-900 mb-4 flex items-center gap-2">
                                            <Waves className="h-5 w-5 text-blue-600" /> Intégrité de l'eau
                                        </h4>
                                        <p className="text-slate-700 text-sm">Les UV ne modifient ni le goût, ni l'odeur, ni le pH de l'eau. Vous buvez une eau physiquement pure, sans les sous-produits toxiques de la chloration (trihalométhanes).</p>
                                    </div>
                                    <div className="p-8 bg-blue-50 border border-blue-100 rounded-3xl">
                                        <h4 className="font-bold text-xl text-blue-900 mb-4 flex items-center gap-2">
                                            <ShieldCheck className="h-5 w-5 text-blue-600" /> Efficacité Totale
                                        </h4>
                                        <p className="text-slate-700 text-sm">Certains parasites comme *Cryptosporidium* et *Giardia* sont extrêmement résistants au chlore mais sont instantanément inactivés par les rayons UV.</p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">La Notion de Dose UV</h2>
                                <p>
                                    L'efficacité de la désinfection dépend de la "dose UV", exprimée en millijoules par centimètre carré (mJ/cm²). La formule est simple :
                                    **Dose = Intensité de la lampe x Temps de contact**.
                                </p>
                                <p>
                                    Les normes de santé exigent généralement une dose minimale de 30 à 40 mJ/cm² pour garantir une sécurité potable. Chez Bricareau, nos systèmes sont dimensionnés pour maintenir cette dose même au débit maximum autorisé par votre plomberie.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">Conditions essentielles pour une désinfection réussie</h2>
                                <p>
                                    La lumière UV doit pouvoir "voir" les bactéries pour les inactiver. Si l'eau est trouble ou contient trop de minéraux, ces derniers peuvent agir comme un bouclier (phénomène de *shadowing*).
                                </p>
                                <p>
                                    C'est pourquoi un système UV doit **toujours** être précédé de :
                                </p>
                                <ol className="list-decimal pl-8 my-10 space-y-4 font-semibold text-slate-900">
                                    <li>Une filtration de sédiments (5 microns ou moins) pour éliminer les particules physiques.</li>
                                    <li>Un adoucisseur d'eau si votre eau est dure (le calcaire encrasse le manchon de quartz).</li>
                                    <li>Un traitement du fer et du manganèse (ces métaux tachent le quartz et absorbent les UV).</li>
                                </ol>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-20 mb-8 tracking-tight text-center italic">Maintenance et Longévité</h2>
                                <p>
                                    Une lampe UV a une durée de vie efficace d'environ 9 000 heures, soit environ un an d'utilisation continue. Passé ce délai, même si la lampe produit encore de la lumière visible (le halo bleu que vous pouvez voir à travers le viseur), elle ne produit plus assez de rayons UV-C germicides. Le remplacement annuel est impératif pour votre sécurité alimentaire.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">Conclusion</h2>
                                <p>
                                    Le système UV est l'assurance-vie de votre eau de puits. C'est une technologie silencieuse, écologique et incroyablement fiable qui transforme une source d'eau potentiellement vulnérable en un approvisionnement d'une pureté comparable aux meilleures eaux embouteillées.
                                </p>
                                <p>
                                    Chez Bricareau, nous ne nous contentons pas d'installer une lampe ; nous concevons une barrière de protection complète adaptée à la chimie spécifique de votre eau.
                                </p>

                                <div className="mt-32 p-12 bg-gradient-to-br from-indigo-900 to-blue-800 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                                    <h3 className="text-4xl font-bold mb-8 italic text-white">Protégez votre santé dès aujourd'hui</h3>
                                    <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
                                        Ne laissez plus la place au doute concernant la qualité microbiologique de votre eau. Une étude personnalisée de vos besoins est la première étape vers une sécurité totale.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                        <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 rounded-full px-12 h-20 text-xl font-bold shadow-xl transition-all hover:scale-105" asChild>
                                            <a href="/contact">Demander une étude personnalisée</a>
                                        </Button>
                                        <div className="flex flex-col items-start">
                                            <span className="text-blue-200 text-sm uppercase tracking-widest mb-1">Expert conseil</span>
                                            <a href="tel:18552649328" className="text-3xl font-bold hover:text-blue-300 transition-colors">
                                                1-855-264-9328
                                            </a>
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

export default FonctionnementDesinfectionUV;
