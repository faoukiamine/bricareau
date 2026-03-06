import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import { Button } from "@/components/ui/button";
import { Phone, ShieldAlert, BadgeCheck, Microscope, Waves, Droplets, Info, Search, AlertCircle, ShieldCheck, HeartPulse, Scale, FlaskConical, Zap, Wrench, Home, Sparkles, Filter } from "lucide-react";

const ManganeseFerEauBrune = () => {
    useEffect(() => {
        document.title = "Manganèse et Fer dans l'eau : Pourquoi votre eau est brune ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Votre eau est jaune ou brune ? Découvrez les secrets du manganèse et du fer dans votre puits : causes, taches, saveur métallique et solutions de filtration professionnelles.");
        }
    }, []);

    const tocItems = [
        {
                "id": "section-1",
                "title": "Identifier l'ennemi : Fer vs Manganèse"
        },
        {
                "id": "section-2",
                "title": "Pourquoi votre eau jaunit-elle ? (Science des Aquifères)"
        },
        {
                "id": "section-3",
                "title": "L'Impact sur votre foyer : Des coûts cachés"
        },
        {
                "id": "section-4",
                "title": "Solutions technologiques : Quelle filtration choisir ?"
        }
];

    return (
        <BlogLayout 
            title="Eau brune ou tachée ?" 
            headerImage={"https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"}
            tocItems={tocItems}
        >
            <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-amber-600 pl-8 italic">
                                    Rien n'est plus frustrant pour un propriétaire de puits que de constater une eau jaune, orange ou dotée de sédiments noirs. En plus d'avoir un goût métallique désagréable, cette situation ruine les lavabos, les douches et le linge blanc.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Bien que souvent considérés comme de simples nuisances esthétiques par les autorités de santé publique, le fer et le manganèse sont de véritables poisons pour l'infrastructure de votre maison. Leur présence signale souvent des processus chimiques souterrains complexes qui, s'ils ne sont pas traités, entraîneront des pannes d'appareils coûteuses et une dépréciation de votre confort quotidien. Ce guide expert Bricareau vous explique comment faire la différence entre ces deux minéraux et quelles technologies adopter pour retrouver une eau d'une clarté cristalline.
                                    </p>
                                </div>

                                <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">1. Identifier l'ennemi : Fer vs Manganèse</h2>
                                <p>
                                    Bien que souvent trouvés ensemble, ces deux minéraux ont des signatures distinctes que tout propriétaire devrait savoir reconnaître.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
                                    <div className="p-8 bg-amber-50 border border-amber-100 rounded-3xl group shadow-sm">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-inner ring-4 ring-amber-100">
                                            <Droplets className="w-8 h-8 text-amber-600" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-4 tracking-tight text-amber-950">Le Fer (Taches Orange)</h4>
                                        <p className="text-slate-700 text-[16px] text-justify">
                                            Le fer peut être dissous (fer ferreux - eau claire au robinet qui jaunit à l'air) ou particulaire (fer ferrique - eau déjà colorée). Il produit des trainées orange à rouges sur la porcelaine et donne un goût de métal au café.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-slate-100 border border-slate-200 rounded-3xl group shadow-sm">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-inner ring-4 ring-slate-200">
                                            <Filter className="w-8 h-8 text-slate-900" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-4 tracking-tight text-slate-950">Le Manganèse (Taches Noires)</h4>
                                        <p className="text-slate-700 text-[16px] text-justify">
                                            Plus rare mais plus tenace, le manganèse produit des taches noires ou brun foncé. À forte dose, il donne une texture huileuse à l'eau et peut être toxique pour le système nerveux à de très hautes concentrations prolongées.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">2. Pourquoi votre eau jaunit-elle ? (Science des Aquifères)</h2>
                                <p>
                                    L'eau souterraine est naturellement pauvre en oxygène. Dans cet état « réduit », les minéraux de fer et de manganèse présents dans le sol et les roches se dissolvent dans l'eau et deviennent invisibles.
                                </p>
                                <p>
                                    C'est au moment où l'eau entre en contact avec l'air (l'oxygène) dans votre plomberie ou votre verre que ces minéraux <strong>s'oxydent</strong>. Ils se transforment alors en particules solides. C'est le même principe que la rouille sur un métal : vos tuyaux ne rouillent pas de l'intérieur, c'est l'eau elle-même qui « rouille » devant vos yeux.
                                </p>

                                <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">3. L'Impact sur votre foyer : Des coûts cachés</h2>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Entartrage des tuyaux :</strong> Considérez ces minéraux comme du cholestérol pour votre plomberie. Ils s'accumulent et réduisent la pression d'eau au fil des ans.</li>
                                    <li><strong>Destruction du chauffe-eau :</strong> Les sédiments de fer s'accumulent au fond du réservoir, surchauffant l'unité et provoquant des fuites prématurées.</li>
                                    <li><strong>Ferrobactéries (Boue visqueuse) :</strong> Ces bactéries se nourrissent du fer et créent un biofilm gélatineux rouge ou brun dans les réservoirs de toilettes, dégageant parfois une odeur terreuse.</li>
                                </ul>

                                <div className="my-16 bg-blue-900 text-white rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 p-12 opacity-10 scale-150 rotate-12">
                                        <Wrench className="w-96 h-96" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic">Protégez vos électroménagers.</h3>
                                    <p className="text-xl text-blue-100 opacity-90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                        Un système de filtration de fer Bricareau agit comme une assurance-vie pour votre laveuse, votre lave-vaisselle et votre chauffe-eau. Ne laissez pas les minéraux détruire vos investissements.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-18 text-xl font-bold transition-transform active:scale-95 shadow-xl" asChild>
                                            <a href="/adoucisseur-eau-residentiel">Découvrir nos solutions de fer</a>
                                        </Button>
                                    </div>
                                </div>

                                <h2 id="section-4" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">4. Solutions technologiques : Quelle filtration choisir ?</h2>
                                <p>
                                    Éliminer le fer et le manganèse demande une approche rigoureuse basée sur votre analyse d'eau. Les solutions varient selon le type de fer (dissous ou particulaire) et les autres paramètres comme le pH.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">L'Oxydation par Injection d'Air (Filtres tout-en-un)</h3>
                                <p className="text-justify">
                                    C'est la méthode écologique la plus prisée. Le système maintient une poche d'air au sommet de l'unité qui oxyde instantanément le fer et le manganèse lorsqu'ils passent à travers. Les particules sont ensuite capturées par un média filtrant spécialisé et rejetées durant le cycle de rinçage. Aucun produit chimique n'est nécessaire.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">L'Échange d'ions (Filtres spécialisés)</h3>
                                <p className="text-justify">
                                    Pour le fer dissous en faibles concentrations, certains adoucisseurs d'eau équipés de résines à haute capacité peuvent capturer les ions de fer. C'est une solution « 2-en-1 » efficace pour traiter la dureté et le fer simultanément si les niveaux permettent ce type d'approche.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">Médias Catalytiques (Green Sand Plus / Birm)</h3>
                                <p className="text-justify">
                                    Utilisés pour les cas plus complexes de manganèse, ces médias agissent comme catalyseurs pour précipiter les minéraux avant qu'ils n'entrent dans votre réseau domestique.
                                </p>

                                <div className="mt-20 p-12 bg-amber-50 border border-amber-100 rounded-[3rem] shadow-inner relative overflow-hidden group">
                                    <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 italic flex items-center gap-4">
                                        <Sparkles className="h-10 w-10 text-amber-700 animate-pulse" />
                                        Audit de Clarté Bricareau
                                    </h3>
                                    <p className="text-xl text-amber-900 opacity-90 mb-10 font-light leading-relaxed text-justify max-w-3xl">
                                        Assez des chemises blanches qui sortent jaunies ? Nos techniciens effectuent des tests de fer ferreux sur place et recommandent le système au rendement garanti pour votre situation spécifique.
                                    </p>
                                    <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-12 h-16 font-bold shadow-lg" asChild>
                                        <a href="/contact">Réserver mon analyse d'eau gratuite</a>
                                    </Button>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed flex items-center gap-4">
                                    <Info className="h-10 w-10 text-amber-600 shrink-0" />
                                    <p>
                                        * Note de l'expert : Un pH faible (eau acide) rend le traitement du fer beaucoup plus difficile. Nous testons toujours votre pH avant de suggérer une technologie d'oxydation pour garantir votre satisfaction.
                                    </p>
                                </div>
        </BlogLayout>
    );
};

export default ManganeseFerEauBrune;
