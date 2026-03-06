import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import eauOdeurImg from "@/assets/eau-odeur-oeufs-pourris.png";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const PourquoiEauSentOeufsPourris = () => {
    useEffect(() => {
        document.title = "Pourquoi mon eau sent l'odeur des œufs pourris ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Comprenez les causes de l'odeur de soufre dans votre eau et découvrez les solutions efficaces pour l'éliminer. Guide d'expert par Bricareau.");
        }
    }, []);

    const tocItems = [
        { id: "origine-odeur", title: "L'origine de l'odeur de soufre" },
        { id: "gaz-h2s", title: "Le responsable : Le gaz H2S" },
        { id: "risques-sante", title: "Les risques pour la santé et la maison" },
        { id: "solutions", title: "Solutions de traitement efficaces" },
        { id: "maintenance", title: "L'importance de la maintenance" }
    ];

    return (
        <BlogLayout
            title="Pourquoi mon eau sent l'odeur des œufs pourris ?"
            headerImage={eauOdeurImg}
            tocItems={tocItems}
        >
            <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-amber-600 pl-8 italic">
                L'odeur désagréable de soufre, souvent comparée à celle des œufs pourris, est l'un des problèmes les plus fréquents mais aussi les plus dérangeants rencontrés dans les systèmes de puits artésiens.
            </p>

            <div className="space-y-16">
                <section id="origine-odeur">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">L'origine de l'odeur de soufre</h2>
                    <p className="text-lg text-slate-600 mb-6">
                        Cette odeur provient généralement du sulfate ou du gaz de soufre hydrogéné. Elle peut se manifester uniquement dans l'eau chaude ou à la fois dans l'eau froide et l'eau chaude, ce qui aide à diagnostiquer la source du problème.
                    </p>
                </section>

                <section id="gaz-h2s">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Le responsable : Le gaz H2S</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Le sulfure d'hydrogène (H2S) est un gaz incolore qui se dissout facilement dans l'eau. Il est produit par la décomposition de matières organiques ou par l'activité de bactéries réductrices de soufre.
                    </p>
                </section>

                <section id="risques-sante">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Les risques pour la santé et la maison</h2>
                    <p className="text-lg text-slate-600 mb-6">
                        Bien que généralement sans danger immédiat pour la santé aux niveaux habituels, l'H2S est très corrosif. Il peut noircir l'argenterie et endommager les pièces en cuivre et en laiton dans votre plomberie.
                    </p>
                </section>

                <section id="solutions">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Solutions de traitement efficaces</h2>
                    <div className="space-y-4">
                        <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <ArrowRight className="h-6 w-6 text-amber-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Aération de l'eau</h4>
                                <p className="text-slate-600">L'injection d'air est souvent la méthode la plus naturelle et la plus efficace pour dissiper les gaz.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <ArrowRight className="h-6 w-6 text-amber-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Filtration au charbon actif</h4>
                                <p className="text-slate-600">Pour les faibles concentrations, des filtres spécialisés peuvent adsorber les molécules d'odeur.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <ArrowRight className="h-6 w-6 text-amber-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Systèmes d'oxydation</h4>
                                <p className="text-slate-600">Pour les cas sévères, des systèmes d'injection d'oxygène ou de peroxyde transforment le gaz en solides filtrables.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="maintenance">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">L'importance de la maintenance</h2>
                    <p className="text-lg text-slate-600">
                        Un système négligé peut voir le retour de l'odeur. Un entretien régulier de l'anode de votre chauffe-eau et le nettoyage des filtres sont essentiels pour une eau qui sent bon toute l'année.
                    </p>
                </section>
            </div>

            <div className="mt-24 p-12 bg-amber-900 text-white rounded-[3rem] relative overflow-hidden shadow-2xl">
                <div className="absolute bottom-0 right-0 opacity-10 scale-150 translate-x-10 translate-y-10">
                    <ArrowRight className="w-64 h-64" />
                </div>
                <div className="relative z-10">
                    <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">Retrouvez la fraîcheur de votre eau</h3>
                    <p className="text-xl text-amber-100 opacity-90 mb-10 font-light leading-relaxed max-w-2xl">
                        Ne supportez plus cette odeur un jour de plus. Nos techniciens certifiés peuvent diagnostiquer la source exacte du soufre dans votre maison.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-12 h-16 text-lg font-bold shadow-xl transition-all" asChild>
                            <a href="/contact">Demander un diagnostic</a>
                        </Button>
                        <a href="tel:18552649328" className="flex items-center gap-4 text-3xl font-bold hover:text-amber-300 transition-colors">
                            <Phone className="h-8 w-8" />
                            1-855-264-9328
                        </a>
                    </div>
                </div>
            </div>
        </BlogLayout>
    );
};

export default PourquoiEauSentOeufsPourris;
