import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, BadgeCheck, Microscope, Waves, Droplets, ArrowRight, HeartPulse, Info, Zap, Sparkles, Filter, Home, Layout, Search, Sparkle, Hammer } from "lucide-react";

const FiltreEvierVsMaisonEntiere = () => {
    useEffect(() => {
        document.title = "Filtre sous évier ou Maison Entière : Le guide comparatif | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Quel système de filtration choisir : sous l'évier ou pour toute la maison ? Découvrez les différences, les usages et lequel convient le mieux à votre foyer.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-relaxed font-light text-justify">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
                            alt="Cuisine moderne avec robinetterie design"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-400 text-sm font-bold mb-6 tracking-widest uppercase">
                            Architecture De Filtration & Confort
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
                            Filtre sous l'évier <span className="text-blue-400">vs</span> Maison entière
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light mb-10 leading-relaxed max-w-4xl mx-auto italic text-center">
                            Dilemme de conception : devez-vous purifier uniquement ce que vous buvez ou chaque goutte d'eau de votre foyer ? Analyse complète des avantages, des coûts et des bénéfices réels.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 font-bold" asChild>
                                <a href="/Filtres-deau-pour-toute-la-maison">Systèmes toute la maison</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-10 h-16 font-bold backdrop-blur-sm" asChild>
                                <a href="/Systemes-de-filtration-deau-sous-evier">Filtres sous l'évier</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Article Intro Content */}
                <article className="py-20 lg:py-32 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-relaxed">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    Une question récurrente chez les nouveaux propriétaires est de savoir où placer la ligne de défense de leur eau. Isoler la purification à un seul point ou traiter le débit total de la résidence ?
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Chaque foyer est unique, et la stratégie de filtration parfaite dépend de deux facteurs clés : la nature de votre source d'eau et vos objectifs personnels de bien-être. Devez-vous d'abord protéger votre robinet de cuisine, votre peau sous la douche, ou l'intégrité de votre plomberie et de vos électroménagers ? Les deux systèmes — filtration sous l'évier (point-of-use) et filtration maison entière (point-of-entry) — sont souvent complémentaires plutôt qu'exclusifs. Ce guide Bricareau compare les deux approches pour vous aider à décider où investir pour un impact maximal.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. La Filtration sous l'évier (Point d'Usage)</h2>
                                <p>
                                    C'est la solution de précision. Le système se concentre exclusivement sur un point unique, généralement le robinet de la cuisine et le distributeur d'eau du réfrigérateur.
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Technologies typiques :</strong> Osmose inverse, charbon activé haute densité, ultrafiltration.</li>
                                    <li><strong>Bénéfices :</strong> Eau de boisson et de cuisson d'une pureté absolue, élimination des contaminants chimiques lourds (plomb, fluor, PFAS).</li>
                                    <li><strong>Installation :</strong> Compacte, sous l'évier, nécessite peu d'espace.</li>
                                </ul>

                                <div className="my-16 bg-blue-50 border border-blue-100 rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="shrink-0 bg-white p-6 rounded-2xl shadow-sm">
                                        <Filter className="w-16 h-16 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">Pourquoi le choisir ?</h3>
                                        <p className="text-slate-600 text-[18px]">
                                            C'est l'option idéale pour ceux qui s'inquiètent principalement de <strong>ce qu'ils ingèrent</strong> ou pour les familles vivant dans des appartements ou des condos où l'accès à l'entrée d'eau principale est limité.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. La Filtration Toute la Maison (Point d'Entrée)</h2>
                                <p>
                                    Ici, on traite l'eau dès qu'elle entre dans le bâtiment, avant même qu'elle ne se divise vers le chauffe-eau ou les salles de bain.
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Technologies typiques :</strong> Filtres à sédiments, filtres au charbon actif géants, adoucisseurs, KDF.</li>
                                    <li><strong>Bénéfices :</strong> Protection de la peau et des cheveux (chlore retiré des douches), préservation des électroménagers, élimination de la coloration ou de la turbidité dans tous les robinets de la maison.</li>
                                    <li><strong>Enjeux :</strong> Ne traite généralement pas les contaminants moléculaires comme le fluor ou l'arsenic à moins d'utiliser des médias très spécialisés.</li>
                                </ul>

                                <div className="my-16 bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 -translate-y-12">
                                        <Home className="w-96 h-96" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic">L'approche "Bouclier Total".</h3>
                                    <p className="text-xl text-blue-300 opacity-90 mb-12 max-w-3xl font-light leading-relaxed">
                                        Vivre sans chlore dans la douche est une révélation pour la peau sèche et l'asthme, tout en évitant l'inhalation de sous-produits de désinfection (THM) sous forme de vapeur chaude.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Comparaison Technique : Fiche de Score</h2>
                                <div className="overflow-x-auto my-12">
                                    <table className="w-full border-collapse border border-slate-200">
                                        <thead>
                                            <tr className="bg-slate-100">
                                                <th className="border p-4 text-left">Critère</th>
                                                <th className="border p-4 text-left">Sous l'Évier</th>
                                                <th className="border p-4 text-left">Maison Entière</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border p-4 font-bold">Qualité de l'eau purifiée</td>
                                                <td className="border p-4 italic">Exceptionnelle (échelle moléculaire)</td>
                                                <td className="border p-4 italic">Excellente (échelle macro & chimique)</td>
                                            </tr>
                                            <tr>
                                                <td className="border p-4 font-bold">Débit (Pression)</td>
                                                <td className="border p-4 italic">Limité à 1 robinet dédié</td>
                                                <td className="border p-4 italic">Débit complet de la résidence</td>
                                            </tr>
                                            <tr>
                                                <td className="border p-4 font-bold">Protection Électroménagers</td>
                                                <td className="border p-4 italic">Nulle</td>
                                                <td className="border p-4 italic">Optimale</td>
                                            </tr>
                                            <tr>
                                                <td className="border p-4 font-bold">Maintenance annuelle</td>
                                                <td className="border p-4 italic">Cartouches filtrantes (facile)</td>
                                                <td className="border p-4 italic">Rinçage automatique ou lavage de média</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">4. La Synergie Bricareau : Pourquoi choisir les deux ?</h2>
                                <p>
                                    Pour une protection sans compromis, la recommandation ultime des experts Bricareau est la combinaison des deux :
                                </p>
                                <p>
                                    Installer un système <strong>Maison Entière</strong> pour agir comme pré-filtre global (retirer les sédiments, le chlore, les mauvaises odeurs), ce qui préserve votre peau sous la douche et prolonge énormément la durée de vie de votre <strong>Osmose Inverse</strong> que vous installerez sous l'évier pour garantir une eau de boisson de pureté médicale.
                                </p>

                                <div className="mt-20 p-12 bg-blue-50 border border-blue-100 rounded-[3rem] shadow-inner relative overflow-hidden group">
                                    <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 italic flex items-center gap-4">
                                        <Search className="h-10 w-10 text-blue-600" />
                                        Le Diagnostic Sur Mesure
                                    </h3>
                                    <p className="text-xl text-blue-900 opacity-90 mb-10 font-light leading-relaxed text-justify max-w-3xl">
                                        Ne devinez pas vos besoins. Laissez un expert Bricareau analyser vos points de sortie d'eau pour déterminer l'architecture la plus efficace pour votre santé et votre budget.
                                    </p>
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 font-bold shadow-lg" asChild>
                                        <a href="/contact">Demander mon analyse de foyer gratuite</a>
                                    </Button>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed flex items-center gap-4">
                                    <Info className="h-10 w-10 text-blue-600 shrink-0" />
                                    <p>
                                        Note pour les propriétaires de puits : Pour vous, la filtration Toute la Maison n'est pas une option, mais une nécessité pour protéger votre pompe et votre chauffe-eau des sédiments minéraux.
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

export default FiltreEvierVsMaisonEntiere;
