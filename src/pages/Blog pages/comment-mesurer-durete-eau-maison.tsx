import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, BadgeCheck, Microscope, Waves, Droplets, Info, Zap, Sparkles, Filter, CheckCircle2, Home, Layout, Search, Sparkle, Hammer, Wrench, Settings, Activity, FlaskConical, Scale, Thermometer, MicroscopeIcon, Pipette } from "lucide-react";

const MesurerDureteEauMaison = () => {
    useEffect(() => {
        document.title = "Comment mesurer la dureté de votre eau à la maison ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Apprenez à tester la dureté de votre eau vous-même : des bandelettes réactives aux tests de titrage précis et au service gratuit Bricareau.");
        }
    }, []);

    const tocItems = [
        {
                "id": "section-1",
                "title": "La méthode \"Test du Savon\" (Indication Rapide)"
        },
        {
                "id": "section-2",
                "title": "Bandelettes Réactives vs Kits de Titrage"
        },
        {
                "id": "section-3",
                "title": "L'importance de tester l'eau brute ET l'eau après traitement"
        }
];

    return (
        <BlogLayout 
            title="Mesurer la dureté : Le guide pratique." 
            headerImage={"https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"}
            tocItems={tocItems}
        >
            <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    Connaître la dureté de son eau est la première étape vers une gestion intelligente de son foyer. C'est l'information clé qui détermine le réglage de votre futur adoucisseur.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Si vous vivez au Québec, vous avez probablement déjà remarqué des résidus blancs autour de la base de vos robinets ou des taches ternes sur vos verres après le lave-vaisselle. Ces indices sont les signes évidents d'une eau dure, mais de combien exactement ? Mesurer précisément la dureté de l'eau est crucial pour ajuster les cycles de régénération d'un adoucisseur et éviter le gaspillage d'eau et de sel. Il existe plusieurs méthodes, allant du test rapide à la maison à l'analyse en laboratoire. Ce guide Bricareau vous montre comment procéder comme un pro.
                                    </p>
                                </div>

                                <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">1. La méthode "Test du Savon" (Indication Rapide)</h2>
                                <p>
                                    C'est le test le plus simple et le plus ancien. Prenez une bouteille d'eau vide, remplissez-la à moitié avec de l'eau froide du robinet et ajoutez 10 gouttes de liquide vaisselle doux. Secouez vigoureusement.
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Eau Douce :</strong> S'il y a beaucoup de mousse et que l'eau sous la mousse est claire, votre eau est probablement douce.</li>
                                    <li><strong>Eau Dure :</strong> Si la mousse est fine, disparaît vite et que l'eau devient laiteuse ou trouble, vous avez une présence significative de calcium qui empêche le savon de réagir.</li>
                                </ul>

                                <div className="my-16 bg-blue-50 border border-blue-100 rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="shrink-0 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                        <Pipette className="w-16 h-16 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">Limites du test maison</h3>
                                        <p className="text-slate-600 text-[18px]">
                                            Bien que révélateur, ce test ne vous donne pas de chiffre précis (Grains par Gallon), ce qui est nécessaire pour programmer correctement un appareil de traitement d'eau.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">2. Bandelettes Réactives vs Kits de Titrage</h2>
                                <p>
                                    Pour obtenir un résultat chiffré, vous pouvez acheter des kits de test dans le commerce :
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Bandelettes (Précision Moyenne)</h4>
                                        <p className="text-slate-600 text-[13px] italic leading-relaxed text-justify">
                                            Vous trempez une bandelette dans l'eau et comparez la couleur à une échelle sur l'emballage. C'est rapide et économique pour un premier diagnostic général de dureté totale.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Kit à Gouttes (Titrage - Haute Précision)</h4>
                                        <p className="text-slate-600 text-[13px] italic leading-relaxed text-justify">
                                            C'est la méthode utilisée par les installateurs Bricareau. Vous ajoutez un réactif goutte à goutte dans un échantillon d'eau jusqu'à ce que la couleur change radicalement. Chaque goutte représente 1 grain de dureté.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">3. L'importance de tester l'eau brute ET l'eau après traitement</h2>
                                <p>
                                    Si vous possédez déjà un adoucisseur d'eau et que vous continuez à voir des signes de calcaire, faites le test sur un robinet d'eau non adoucie (souvent le robinet extérieur) et comparez avec l'eau de votre cuisine. Si le résultat est le même, votre adoucisseur ne fonctionne plus ou nécessite une régénération manuelle immédiate.
                                </p>

                                <div className="mt-20 p-10 md:p-20 bg-blue-900 text-white rounded-[4rem] relative overflow-hidden text-center shadow-2xl group">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 scale-150 group-hover:rotate-12 transition-transform duration-700">
                                        <BadgeCheck className="w-96 h-96" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic">Laissez l'expert s'en charger.</h3>
                                    <p className="text-xl text-blue-100 opacity-90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                        Tester la dureté ne prend que quelques minutes. Savoir interpréter le résultat pour choisir le bon équipement demande de l'expérience.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-full px-12 h-18 text-xl font-bold shadow-xl shadow-blue-900/50 transition-transform active:scale-95" asChild>
                                            <a href="/contact">Évaluation gratuite à domicile</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed flex items-start gap-4">
                                    <Info className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                                    <p>
                                        Rappel pour les propriétaires de puits : Pour vous, tester la dureté ne suffit pas. L'analyse doit inclure le fer et le manganèse, car ces minéraux peuvent encrasser irrémédiablement la résine de votre adoucisseur si le système n'est pas conçu pour les traiter.
                                    </p>
                                </div>
        </BlogLayout>
    );
};

export default MesurerDureteEauMaison;
