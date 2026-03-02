import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldAlert, BadgeCheck, Microscope, Waves, Droplets, ArrowRight, ShieldCheck, HeartPulse, Building2 } from "lucide-react";

const PlombEauPotable = () => {
    useEffect(() => {
        document.title = "Le plomb dans l'eau potable : Risques, Tests et Solutions | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Comprenez les dangers du plomb dans l'eau de votre robinet. Apprenez à réaliser un test de plomb et découvrez les systèmes de filtration certifiés pour éliminer ce métal toxique.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-relaxed font-light">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"
                            alt="Plomberie en plomb"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-red-600/20 border border-red-400/30 text-red-500 text-sm font-bold mb-6 tracking-widest uppercase">
                            Santé Publique : Dossier Urgent
                        </span>
                        <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                            <span className="font-bold">Le plomb dans</span> <span className="text-blue-400 font-bold">l'eau potable</span>
                        </h1>
                        <p className="text-[20px] leading-[28px] text-slate-300 font-light mb-10 text-justify max-w-xl mx-auto italic">
                            Risques neurologiques, tests de détection précis et solutions technologiques haute performance : tout ce que vous devez savoir pour éliminer ce poison invisible de votre foyer.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 font-bold" asChild>
                                <a href="/tests-eau">Réserver un test de plomb professionnel</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-10 h-16 font-bold backdrop-blur-sm shadow-lg" asChild>
                                <a href="tel:18552649328" className="flex items-center gap-2">
                                    <Phone className="h-5 w-5" /> 1-855-264-9328
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Article Intro Body */}
                <article className="py-20 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-relaxed text-justify">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-red-600 pl-8 italic">
                                    Le plomb est un poison séculaire insidieux. Incolore, inodore et sans goût, sa présence dans l'eau de votre robinet ne peut être détectée par nos sens. Pourtant, l'impact d'une exposition prolongée, même à des doses infinitésimales, peut avoir des conséquences irréversibles sur la santé, particulièrement celle des enfants et des femmes enceintes.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Bien que son utilisation dans les nouvelles infrastructures soit interdite depuis des décennies, le plomb demeure un héritage toxique tapi dans les structures vieillissantes de nos quartiers. Au Québec et au Canada, des milliers de foyers sont encore alimentés par des branchements de service ou des soudures contenant du plomb. Face à ce risque, la seule stratégie efficace est une approche combinant connaissance scientifique, tests rigoureux et technologies de filtration certifiées.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. Pourquoi le plomb se retrouve-t-il dans mon eau ?</h2>
                                <p>
                                    L'eau quittant les usines de traitement municipales est, dans l'immense majorité des cas, exempte de plomb. Ce métal toxique s'infiltre dans votre eau lors de son transit à travers le réseau de distribution domestique vers votre verre. On parle alors de <strong>corrosion galvanique</strong> ou chimique.
                                </p>
                                <p>
                                    Les principales sources de contamination sont :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Entrées de service en plomb :</strong> Les tuyaux reliant la conduite principale de la ville à votre maison (souvent dans les maisons construites avant 1970).</li>
                                    <li><strong>Soudures au plomb :</strong> Utilisées pour assembler les tuyaux en cuivre avant 1986-1990.</li>
                                    <li><strong>Robinetterie et composantes en laiton :</strong> Même moderne, la robinetterie peut libérer de faibles quantités de plomb si elle n'est pas certifiée « sans plomb ».</li>
                                </ul>

                                <div className="my-16 bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm relative italic">
                                    <div className="absolute top-0 right-0 p-8 opacity-10">
                                        <Building2 className="w-24 h-24 text-slate-900" />
                                    </div>
                                    <p className="text-slate-600 text-[18px]">
                                        « Au Québec, environ 300 000 foyers pourraient encore être raccordés par des entrées de service en plomb. C'est un défi de santé publique massif dont les propriétaires doivent assumer la responsabilité au niveau domestique. »
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Les RISQUES : Ce que dit la médecine moderne</h2>
                                <p>
                                    Le plomb est classé comme un métal lourd toxique dont il n'existe <strong>aucun niveau de sécurité connu</strong> dans l'organisme. Une fois dans le sang, il se lie aux globules rouges puis se dépose dans les tissus mous et, surtout, dans les os où il peut rester stocké pendant des décennies.
                                </p>
                                <p>
                                    <strong>Impact neurologique :</strong> Le plomb interfère avec le développement des neurotransmetteurs. Chez les enfants, une exposition chronique est directement liée à une baisse du quotient intellectuel (QI), des troubles de l'apprentissage maladifs, une irritabilité accrue et une impulsivité non contrôlée.
                                </p>
                                <p>
                                    <strong>Impact physiologique :</strong> Chez l'adulte, il contribue à l'hypertension artérielle, à l'insuffisance rénale chronique et aux complications cardiovasculaires. Pour les femmes enceintes, le plomb traverse la barrière placentaire, affectant la croissance fœtale et augmentant le risque d'accouchements prématurés.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                                        <HeartPulse className="w-12 h-12 text-red-600 mb-6" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Neurotoxicité sévère</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed text-justify">
                                            Le plomb remplace le calcium vital dans les signaux cérébraux, provoquant des dommages neurologiques permanents avant même l'apparition de symptômes physiques.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                        <ShieldCheck className="w-12 h-12 text-blue-600 mb-6" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Une norme plus stricte</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed text-justify">
                                            Santé Canada a récemment abaissé la Concentration Maximale Acceptable (CMA) de 0,010 mg/L à 0,005 mg/L, reflétant l'urgence de protéger la population.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Comment tester précisément votre eau ?</h2>
                                <p>
                                    Le test d'eau est l'unique moyen de quantifier le risque. Cependant, un test superficiel peut donner un faux sentiment de sécurité. La procédure « Bricareau » est méticuleuse :
                                </p>
                                <p>
                                    Il est impératif d'effectuer un test de <strong>"première coulée"</strong> (pour mesurer le plomb libéré par les robinets après une stagnation prolongée) et un test de <strong>"flux constant"</strong> (pour identifier si l'entrée de service elle-même déverse du plomb dans votre circuit). Les échantillons sont analysés dans des laboratoires certifiés ISO, utilisant la spectrométrie EM-ICP de haute précision.
                                </p>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">4. LE TRAITEMENT : Élimination complète certifiée</h2>
                                <p>
                                    Ne vous fiez pas aux solutions artisanales. Pour le plomb, seul l'équipement <strong>certifié NSF/ANSI 53 ou 58</strong> garantit l'efficacité annoncée. Chez Bricareau, nous privilégions deux technologies majeures :
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">L'Osmose Inverse (Certification NSF 58)</h3>
                                <p className="text-justify">
                                    C'est la solution d'assainissement total par excellence. La membrane osmotique agit comme un filtre moléculaire qui rejette le plomb et plus de 98 % des autres métaux lourds. Installé sous le comptoir de cuisine, ce système fournit une eau pure pour la boisson et la cuisson des aliments, éliminant tout soupçon de contamination.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">Filtration au charbon optimisé avec échange d'ions</h3>
                                <p className="text-justify">
                                    Certains blocs de charbon actif de haute densité sont spécifiquement imprégnés d'un média d'échange d'ions conçu pour capturer chimiquement les ions de plomb. Cette solution est compacte, performante et certifiée NSF 53 pour réduire le plomb sous le seuil de 0,001 mg/L.
                                </p>

                                <div className="mt-20 p-10 md:p-16 bg-blue-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150">
                                        <BadgeCheck className="w-64 h-64" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-8 italic tracking-tighter">Votre sécurité ne peut plus attendre.</h3>
                                    <p className="text-xl text-blue-100 opacity-80 mb-12 font-light text-justify max-w-2xl leading-relaxed">
                                        Pourquoi continuer à douter de chaque verre d'eau que vous servez à vos enfants ? Demandez une expertise Bricareau aujourd'hui et transformez votre robinet en source de santé inviolable.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-full px-12 h-16 text-lg font-bold transition-transform hover:scale-105" asChild>
                                            <a href="/contact">Analyser mon eau maintenant</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed">
                                    <p>
                                        * Note importante : Si vous soupçonnez la présence de plomb, évitez d'utiliser l'eau chaude du robinet pour boire ou cuisiner, car la chaleur dissout le plomb beaucoup plus rapidement des tuyaux et soudures internes.
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

export default PlombEauPotable;
