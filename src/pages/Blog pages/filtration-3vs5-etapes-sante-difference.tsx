import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, BadgeCheck, Microscope, Waves, Droplets, Info, Zap, Sparkles, Filter, CheckCircle2, FlaskConical, Layout, Search, Scale, Activity, Pill, Microscope2, FlaskConicalIcon } from "lucide-react";

const Filtration3vs5EtapesSante = () => {
    useEffect(() => {
        document.title = "Filtration 3 vs 5 étapes : Comparaison Santé | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Pourquoi préférer un système de filtration 5 étapes à un 3 étapes ? Découvrez l'impact sur la santé, la pureté de l'eau et pourquoi chaque barrière compte.");
        }
    }, []);

    const tocItems = [
        {
                "id": "section-1",
                "title": "L'architecture à 3 étapes : Le Basic Utile"
        },
        {
                "id": "section-2",
                "title": "L'architecture à 5 étapes : L'étalon-or (Osmose Inverse)"
        },
        {
                "id": "section-3",
                "title": "L'importance de l'étape 6 : La Reminéralisation"
        }
];

    return (
        <BlogLayout 
            title="Filtration 3 vs 5 étapes" 
            headerImage={"https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"}
            tocItems={tocItems}
        >
            <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    Dans l'univers de la purification d'eau, le nombre d'étapes de filtration n'est pas qu'un argument de marketing ; c'est une architecture de sécurité.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Lorsque vous comparez des systèmes sous l'évier, vous rencontrerez souvent des versions à 3 étapes et d'autres à 5, 6, voire 7 étapes. La question fondamentale est : à quoi servent ces étapes supplémentaires et leur présence a-t-elle un impact mesurable sur votre santé à long terme ? Une filtration efficace repose sur le principe de la redondance et de la spécialisation. Chaque barrière est conçue pour bloquer un type de polluant spécifique. Chez Bricareau, nous croyons qu'une protection robuste est la clé d'un bien-être durable. Ce guide détaille les différences techniques et sanitaires entre ces architectures.
                                    </p>
                                </div>

                                <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">1. L'architecture à 3 étapes : Le Basic Utile</h2>
                                <p>
                                    Un système à 3 étapes est le standard d'entrée de gamme pour améliorer le goût et l'odeur de l'eau municipale.
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Étape 1 :</strong> Filtre à sédiments (retire le sable, la rouille, la boue).</li>
                                    <li><strong>Étape 2 :</strong> Charbon actif granulaire (retire le chlore et les mauvaises odeurs).</li>
                                    <li><strong>Étape 3 :</strong> Bloc de charbon compressé (finit le polissage chimique).</li>
                                    <li><strong>Verdict Santé :</strong> Adéquat pour le goût, insuffisant pour retirer les contaminants moléculaires comme les métaux lourds (plomb), le fluor ou les nitrates.</li>
                                </ul>

                                <div className="my-16 bg-blue-50 border border-blue-100 rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="shrink-0 bg-white p-6 rounded-2xl shadow-sm">
                                        <Filter className="w-16 h-16 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">Le palier minimum</h3>
                                        <p className="text-slate-600 text-[18px]">
                                            C'est une amélioration notable par rapport à une carafe filtrante, mais cela ne constitue pas une barrière médicale contre les pollutions chimiques modernes.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">2. L'architecture à 5 étapes : L'étalon-or (Osmose Inverse)</h2>
                                <p>
                                    Un système à 5 étapes (comme nos osmoses inverses) ajoute deux barrières critiques qui changent radicalement la chimie de votre eau.
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Étapes 1-3 :</strong> Pré-filtration complète pour protéger le cœur du système.</li>
                                    <li><strong>Étape 4 (Le Cœur) :</strong> La membrane d'Osmose Inverse. C'est ici que s'effectue la "purification" réelle. Sa porosité moléculaire rejette l'arsenic, le plomb, le fluor, les virus et les bactéries.</li>
                                    <li><strong>Étape 5 :</strong> Post-filtre de polissage pour une saveur cristalline finale.</li>
                                    <li><strong>Verdict Santé :</strong> C'est la protection ultime. Elle transforme l'eau du robinet en eau de pureté comparable à l'eau distillée, exempte de contaminants inorganiques et biologiques.</li>
                                </ul>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 text-justify">
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <BadgeCheck className="w-10 h-10 text-blue-600 mb-4" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Protection Neurotoxique</h4>
                                        <p className="text-slate-600 text-sm italic leading-relaxed">
                                            Un 5 étapes retire le fluorure et le plomb, deux neurotoxines documentées, ce qu'un système 3 étapes ne peut pratiquement pas faire à long terme.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Barrière Biologique</h4>
                                        <p className="text-slate-600 text-sm italic leading-relaxed">
                                            La membrane d'un 5 étapes est si fine qu'elle est physiquement impossible à traverser pour une bactérie ou un kyste pathogène.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">3. L'importance de l'étape 6 : La Reminéralisation</h2>
                                <p>
                                    Bien qu'un système 5 étapes soit techniquement "pur", l'absence de minéraux peut rendre l'eau acide. Chez Bricareau, nous recommandons le système <strong>RO-6</strong> (6 étapes) qui réintroduit des traces équilibrées de calcium et de magnésium naturels. Cela augmente le pH, améliore l'hydratation cellulaire et rend l'eau savoureuse, saine et alcaline.
                                </p>

                                <div className="mt-20 p-10 md:p-20 bg-blue-900 text-white rounded-[4rem] relative overflow-hidden text-center shadow-2xl group">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:rotate-12 transition-transform">
                                        <ShieldCheck className="w-96 h-96" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic">Pourquoi se contenter du minimum ?</h3>
                                    <p className="text-xl text-blue-100 opacity-90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                        Votre santé commence par la pureté de votre eau. Optez pour le système qui ne laisse aucune menace au hasard.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-full px-12 h-18 text-xl font-bold shadow-xl shadow-blue-900/50" asChild>
                                            <a href="/contact">Comparer nos systèmes en détail</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed flex items-start gap-4">
                                    <Info className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                                    <p>
                                        Rappel pour la famille : Les économies faites sur l'achat d'un système à 3 étapes peuvent coûter cher en santé si vous vivez dans une zone avec du plomb dans les conduites ou beaucoup de nitrates agricoles. Le diagnostic Bricareau est là pour vous guider.
                                    </p>
                                </div>
        </BlogLayout>
    );
};

export default Filtration3vs5EtapesSante;
