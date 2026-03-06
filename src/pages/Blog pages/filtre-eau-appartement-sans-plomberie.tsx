import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, BadgeCheck, Microscope, Waves, Droplets, Info, Zap, Sparkles, Filter, CheckCircle2, Home, Layout, Search, Sparkle, Hammer, Wrench, Building2, Key } from "lucide-react";

const FiltreEauAppartementSansPlomberie = () => {
    useEffect(() => {
        document.title = "Filtre à eau pour appartement (Sans Plomberie) : Guide complet | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Vivre dans un appartement ne signifie pas sacrifier la pureté de votre eau. Découvrez nos solutions de filtration haute performance sans travaux de plomberie majeurs.");
        }
    }, []);

    const tocItems = [
        {
                "id": "section-1",
                "title": "Pourquoi filtrer en appartement ?"
        },
        {
                "id": "section-2",
                "title": "Option 1 : Filtration sous-évier sans perçage"
        },
        {
                "id": "section-3",
                "title": "Option 2 : Systèmes de comptoir (Osmose Inverse portative)"
        },
        {
                "id": "section-4",
                "title": "La protection de douche : Le luxe du locataire"
        }
];

    return (
        <BlogLayout 
            title="Filtre appartement : Zéro travaux." 
            headerImage={""}
            tocItems={tocItems}
        >
            <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    Vivre en appartement n'est pas une excuse pour tolérer le goût du chlore ou les traces de plomb. Pour les locataires, la filtration de l'eau nécessite une approche différente : la portabilité et la réversibilité.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        La vie urbaine à Montréal ou Québec s'accompagne souvent de réseaux de distribution d'eau vieillissants. Pour un locataire, l'idée de percer des trous dans l'évier ou de couper des conduites pour installer une filtration est inenvisageable. Pourtant, la sécurité de votre famille ne devrait pas être compromise par votre bail. Des solutions technologiques contemporaines permettent maintenant d'atteindre des niveaux de pureté extrêmes (y compris l'osmose inverse) sans modification irréversible de la structure. Ce guide détaille les meilleures options pour transformer votre appartement en sanctuaire de pureté hydrographique.
                                    </p>
                                </div>

                                <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">1. Pourquoi filtrer en appartement ?</h2>
                                <p>
                                    Même si l'eau municipale est traitée, elle doit traverser des kilomètres de tuyaux parfois centenaires. Le goût de chlore omniprésent est la plainte numéro un des locataires, suivi de près par la présence de sédiments (eau brune lors de travaux) et l'inquiétude concernant les vieilles entrées de plomb dans certains quartiers historiques.
                                </p>

                                <div className="my-16 bg-slate-50 border border-slate-200 rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="shrink-0 bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                                        <Building2 className="w-16 h-16 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">Défi du locataire</h3>
                                        <p className="text-slate-600 text-[18px]">
                                            Opter pour une filtration <strong>réversible</strong> signifie que vous l'emportez avec vous lors de votre prochain déménagement, protégeant ainsi votre investissement sur le long terme.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">2. Option 1 : Filtration sous-évier sans perçage</h2>
                                <p>
                                    Contrairement aux idées reçues, vous pouvez installer un système multi-étapes sophistiqué sous votre évier d'appartement sans endommager les pièces originales.
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Le principe :</strong> Utiliser des tuyaux flexibles robustes et un robinet de luxe à trois voies (qui remplace le robinet actuel du locateur). Le système se déconnecte en 5 minutes.</li>
                                    <li><strong>Avantages :</strong> Pureté moléculaire, aucune bouteille de plastique encombrante, débit instantané.</li>
                                    <li><strong>Technologies :</strong> Ultrafiltration ou Charbon Bloc compressé à haute densité.</li>
                                </ul>

                                <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">3. Option 2 : Systèmes de comptoir (Osmose Inverse portative)</h2>
                                <p>
                                    C'est la quintessence de la filtration locative. Ces unités élégantes ne nécessitent <strong>aucun branchement</strong> à la plomberie. Vous les posez simplement sur votre comptoir de cuisine, vous remplissez le réservoir d'eau, et le système s'occupe de la purification osmotique internement.
                                </p>
                                <p>
                                    Parfait pour les tout petits appartements, les studios ou pour les personnes vivant seules qui souhaitent le plus haut niveau de pureté possible (élimination du plomb, fluor, PFAS) sans une seule vis.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800">
                                        <Wrench className="w-10 h-10 text-blue-400 mb-4" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight text-blue-300 italic">Zéro Outil</h4>
                                        <p className="text-slate-300 text-sm italic leading-relaxed text-justify opacity-80">
                                            Nos solutions de comptoir sont prêtes à l'emploi en moins de 2 minutes après déballage. Branchez, Versez, Buvez.
                                        </p>
                                    </div>
                                    <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800">
                                        <Key className="w-10 h-10 text-blue-400 mb-4" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight text-blue-300 italic">100% Amovible</h4>
                                        <p className="text-slate-300 text-sm italic leading-relaxed text-justify opacity-80">
                                            Au moment du départ, remettez simplement le robinet original. Le propriétaire ne verra jamais la différence, mais votre enfant aura bu une eau exempte de neurotoxines.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-4" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">4. La protection de douche : Le luxe du locataire</h2>
                                <p>
                                    Ne négligez pas votre salle de bain. Le chlore des municipalités dessèche violemment la peau urbaine. Un filtre de douche à visser directement entre le bras de douche et le pommeau est une modification de 30 secondes qui apporte un confort instantané, évitant l'eczéma et la chute de cheveux prématurée.
                                </p>

                                <div className="mt-20 p-10 md:p-20 bg-blue-900 text-white rounded-[4rem] relative overflow-hidden text-center shadow-2xl group">
                                    <div className="absolute top-0 right-0 p-12 opacity-10 translate-x-12">
                                        <Building2 className="w-96 h-96" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic">Transformez votre appartement dès aujourd'hui.</h3>
                                    <p className="text-xl text-blue-100 opacity-90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                        Vivre en condo ou en appartement n'est plus un frein à votre santé. Nos experts Bricareau ont conçu des solutions spécifiques pour la vie urbaine.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-full px-12 h-18 text-xl font-bold shadow-xl shadow-blue-900/50" asChild>
                                            <a href="/contact">Demander conseil pour votre appartement</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed flex items-start gap-4">
                                    <Info className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                                    <p>
                                        Rappel d'expert : Même sans travaux permanents, la maintenance régulière des filtres est indispensable pour garantir l'efficacité bactériostatique de votre système.
                                    </p>
                                </div>
        </BlogLayout>
    );
};

export default FiltreEauAppartementSansPlomberie;
