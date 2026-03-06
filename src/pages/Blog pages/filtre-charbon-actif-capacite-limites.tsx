import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, BadgeCheck, Microscope, Waves, Droplets, Info, Zap, Sparkles, Filter, CheckCircle2, FlaskConical, MicroscopeIcon, Search, Microscope2, FlaskConicalIcon, FlaskRound } from "lucide-react";

const FiltreCharbonActifLimites = () => {
    useEffect(() => {
        document.title = "Filtre au charbon actif : Capacité réelle et limites | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Que filtre vraiment le charbon actif et quelles sont ses limites ? Notre étude complète sur l'adsorption et les contaminants qu'il ne traite pas.");
        }
    }, []);

    const tocItems = [
        {
                "id": "section-1",
                "title": "Le miracle de l'Adsorption"
        },
        {
                "id": "section-2",
                "title": "Ce qu'il NE filtre PAS : Les Limites Critiques"
        },
        {
                "id": "section-3",
                "title": "Charbon Granulaire vs Bloc de Charbon"
        }
];

    return (
        <BlogLayout 
            title="Filtre au charbon actif : La vérité." 
            headerImage={"https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"}
            tocItems={tocItems}
        >
            <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    Il est partout : dans les carafes filtrantes, les réfrigérateurs et les masques à gaz. Le charbon actif est le "maître du goût", mais est-il suffisant pour garantir la sécurité de votre foyer au Québec ?
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Le charbon actif n'est pas simplement du charbon brûlé. C'est un matériau traité par une chaleur extrême pour acquérir une porosité interne phénoménale. Une seule cuillère à café de charbon actif possède une surface interne équivalente à un terrain de football ! C'est cette surface qui "adsorbe" (attire et emprisonne) les polluants organiques. Cependant, derrière son efficacité redoutable contre le goût de chlore se cache une réalité technique souvent ignorée du grand public : le charbon actif a des limites physiques précises. Ce rapport Bricareau détaille le fonctionnement de cette technologie et quand elle doit être couplée à d'autres barrières.
                                    </p>
                                </div>

                                <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">1. Le miracle de l'Adsorption</h2>
                                <p>
                                    Contrairement à un filtre à sédiments (qui agit comme un tamis), le charbon actif utilise l'<strong>adsorption</strong>. Les molécules de gaz ou de pollution organique adhèrent aux pores microscopiques du charbon par les forces de Van der Waals.
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Origine :</strong> Généralement issu d'écorces de noix de coco traitées à la vapeur, offrant la plus haute microporosité.</li>
                                    <li><strong>Force :</strong> Élimination à 99% du chlore libre, des composés organiques volatils (COV), des pesticides, herbicides, et de certains goûts et odeurs terreux (géosmine).</li>
                                </ul>

                                <div className="my-16 bg-blue-50 border border-blue-100 rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="shrink-0 bg-white p-6 rounded-2xl shadow-sm">
                                        <FlaskRound className="w-16 h-16 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">Le Maître du Chlore</h3>
                                        <p className="text-slate-600 text-[18px]">
                                            C'est sans conteste le meilleur média pour retirer les produits chimiques de désinfection ajoutés par les municipalités, rendant l'eau immédiatement plus saine pour la peau et les muqueuses.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">2. Ce qu'il NE filtre PAS : Les Limites Critiques</h2>
                                <p>
                                    Une erreur fatale pour de nombreux consommateurs est de croire qu'un simple filtre à charbon purifie l'eau de tout danger. Voici ce que le charbon actif ne peut tout simplement pas capturer efficacement :
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Minéraux Dissous (TDS)</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed text-justify italic">
                                            Le charbon ne traite pas le calcium (calcaire), l'arsenic, le plomb, le fluor, les nitrates ou les sulfates dissous. Ces substances traversent ses pores sans aucun ralentissement.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Menaces Biologiques</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed text-justify italic">
                                            Les bactéries, virus et kystes ne sont généralement pas éliminés par le charbon actif seul. Pire encore, si le filtre n'est pas changé périodiquement, le charbon peut devenir un nid de culture bactérienne.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">3. Charbon Granulaire vs Bloc de Charbon</h2>
                                <p>
                                    La forme compte. Chez Bricareau, nous privilégions le <strong>Carbon Block</strong> (charbon compressé à haute densité). Pourquoi ? Le charbon granulaire laisse l'eau se frayer des chemins préférentiels (canalisations), laissant passer d'importantes quantités de contaminants. Un bloc compressé force chaque goutte d'eau à traverser une structure dense et uniforme, maximisant le temps de contact et l'efficacité de l'adsorption.
                                </p>

                                <div className="mt-20 p-10 md:p-20 bg-slate-900 text-white rounded-[4rem] relative overflow-hidden text-center shadow-2xl">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150">
                                        <BadgeCheck className="w-80 h-80" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic">L'intelligence technologique pour votre purification.</h3>
                                    <p className="text-xl text-slate-300 opacity-90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                        Ne demandez pas trop à un simple filtre. Apprenez à intégrer le charbon actif dans une architecture de filtration multi-étapes pour une protection réelle et totale.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-full px-12 h-18 text-xl font-bold shadow-xl shadow-blue-900/50" asChild>
                                            <a href="/contact">Découvrir nos solutions multi-systèmes</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed flex items-start gap-4">
                                    <Info className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                                    <p>
                                        Note technique : En raison de l'accumulation de matière organique, un filtre au charbon doit être remplacé au minimum tous les 12 mois, quelle que soit la quantité d'eau filtrée, pour prévenir le phénomène de "percée" chimique.
                                    </p>
                                </div>
        </BlogLayout>
    );
};

export default FiltreCharbonActifLimites;
