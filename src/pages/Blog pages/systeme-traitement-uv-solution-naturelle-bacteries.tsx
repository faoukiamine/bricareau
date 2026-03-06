import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, BadgeCheck, Microscope, Waves, Droplets, Info, Zap, Sparkles, Filter, CheckCircle2, FlaskConical, MicroscopeIcon, Search, Microscope2, ZapIcon, Lightbulb, Sun, HeartPulse } from "lucide-react";

const TraitementUVBacteriaNaturel = () => {
    useEffect(() => {
        document.title = "Système UV : Élimination naturelle des bactéries | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Pourquoi le traitement UV est-il la solution la plus saine contre les bactéries ? Découvrez l'action physique de l'ultraviolet sans aucun produit chimique.");
        }
    }, []);

    const tocItems = [
        {
                "id": "section-1",
                "title": "La Neutralisation Photonique : Comment ça marche ?"
        },
        {
                "id": "section-2",
                "title": "Les 3 Avantages \"Naturels\" de l'UV"
        },
        {
                "id": "section-3",
                "title": "Quand le système UV est-il obligatoire ?"
        }
];

    return (
        <BlogLayout 
            title="Le pouvoir de la lumière UV" 
            headerImage={"https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2000&auto=format&fit=crop"}
            tocItems={tocItems}
        >
            <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    Imaginez pouvoir désinfecter votre eau sans chlore, sans odeur chimique et sans danger pour vos reins. C'est la promesse tenue de la technologie UV-C.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Dans un monde de plus en plus soucieux de réduire l'exposition aux produits chimiques, le traitement de l'eau par ultraviolet (UV) s'impose comme une révolution éco-responsable. Utilisée depuis des décennies dans les grandes villes du monde et les installations médicales, cette méthode physique de désinfection gagne maintenant les résidences du Québec. Que vous soyez sur un puits artésien ou un réseau municipal, la lampe UV offre une sécurité microbiologique infaillible. Ce guide détaille pourquoi cette "solution naturelle" est indispensable pour protéger votre famille.
                                    </p>
                                </div>

                                <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">1. La Neutralisation Photonique : Comment ça marche ?</h2>
                                <p>
                                    Le système UV n'ajoute rien à l'eau et ne lui retire aucun minéral. Le secret réside dans l'exposition intense au rayonnement UV-C (254 nanomètres).
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Action Physique :</strong> Les photons de la lumière UV pénètrent la cellule des bactéries et des virus.</li>
                                    <li><strong>Inactivation de l'ADN :</strong> Le rayonnement brise les liaisons moléculaires de l'ADN du micro-organisme, le rendant incapable de se reproduire. Un pathogène qui ne peut se multiplier ne peut pas causer d'infection.</li>
                                    <li><strong>Résultat :</strong> Les bactéries comme E. coli, les virus comme l'hépatite et les kystes résistants au chlore (Cryptosporidium et Giardia) sont neutralisés quasi-instantanément.</li>
                                </ul>

                                <div className="my-16 bg-blue-50 border border-blue-100 rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 scale-150">
                                        <ZapIcon className="w-56 h-56 text-blue-900" />
                                    </div>
                                    <div className="shrink-0 bg-white p-6 rounded-2xl shadow-sm relative z-10">
                                        <Lightbulb className="w-16 h-16 text-blue-600" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">Efficacité de 99,99 %</h3>
                                        <p className="text-slate-600 text-[18px]">
                                            Les systèmes UV Bricareau respectent les normes rigoureuses de désinfection, garantissant une eau exempte de vie bactérienne active, ce qui est crucial pour le traitement des eaux de puits au Québec.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">2. Les 3 Avantages "Naturels" de l'UV</h2>
                                <p>
                                    Le passage à la technologie UV change non seulement la qualité de l'eau, mais aussi le mode de vie du foyer.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Zéro Chimie</h4>
                                        <p className="text-slate-600 text-[13px] italic leading-relaxed text-justify">
                                            Aucun résidu chimique dans l'eau. Le goût et l'odeur originels de l'eau sont préservés à 100%. Idéal pour les peaux ultra-sensibles.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Protection continue</h4>
                                        <p className="text-slate-600 text-[13px] italic leading-relaxed text-justify">
                                            Dès que l'eau circule, elle est stérilisée. Pas de temps de stockage ou de réaction nécessaire, contrairement au chlore.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Énergie Propre</h4>
                                        <p className="text-slate-600 text-[13px] italic leading-relaxed text-justify">
                                            Une lampe UV moderne consomme à peine plus d'énergie qu'une simple ampoule domestique (40 à 60 Watts).
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">3. Quand le système UV est-il obligatoire ?</h2>
                                <p>
                                    Pour les résidences alimentées par un puits, une source de surface ou une citerne, le système UV n'est pas une simple recommandation ; c'est votre <strong>seule assurance</strong> d'une eau bactériologiquement sûre en tout temps. Les infiltrations de surface après de fortes pluies ou la fonte des neiges peuvent contaminer un puits sain du jour au lendemain. Le système UV agit comme un gardien permanent, neutralisant tout intrus biologique avant qu'il n'atteigne votre verre d'eau.
                                </p>

                                <div className="mt-20 p-10 md:p-20 bg-blue-900 text-white rounded-[4rem] relative overflow-hidden text-center shadow-2xl">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12">
                                        <BadgeCheck className="w-96 h-96" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic">L'avenir de la stérilisation domestique.</h3>
                                    <p className="text-xl text-blue-100 opacity-90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                        Protégez la santé de vos proches avec la puissance cristalline de la lumière ultraviolette. Installez une barrière physique impénétrable autour de votre foyer.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-full px-12 h-18 text-xl font-bold shadow-xl shadow-blue-900/50" asChild>
                                            <a href="/contact">Évaluation d'eau gratuite par un expert</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed flex items-start gap-4">
                                    <Info className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                                    <p>
                                        Rappel technique critique : L'eau doit être 100% limpide avant d'entrer dans l'UV (dureté basse, pas de fer, turbidité nulle). Si l'eau est trouble, la bactérie peut "se cacher" derrière une particule et ne pas recevoir la dose fatale de lumière (effet d'ombrage). C'est pourquoi un système UV est toujours précédé d'un filtre à sédiments.
                                    </p>
                                </div>
        </BlogLayout>
    );
};

export default TraitementUVBacteriaNaturel;
