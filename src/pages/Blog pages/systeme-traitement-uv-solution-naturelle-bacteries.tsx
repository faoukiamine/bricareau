import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, BadgeCheck, Microscope, Waves, Droplets, Info, Zap, Sparkles, Filter, CheckCircle2, FlaskConical, MicroscopeIcon, Search, ZapIcon, Lightbulb, Sun, HeartPulse } from "lucide-react";

const TraitementUVBacteriaNaturel = () => {
    useEffect(() => {
        document.title = "Système UV : Élimination naturelle des bactéries | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Pourquoi le traitement UV est-il la solution la plus saine contre les bactéries ? Découvrez l'action physique de l'ultraviolet sans aucun produit chimique.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-relaxed font-light text-justify">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-blue-900 text-white overflow-hidden text-center">
                    <div className="absolute inset-0 opacity-30">
                        <img
                            src="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2000&auto=format&fit=crop"
                            alt="Abstraction de lumière ultraviolette"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-400/20 border border-blue-300/30 text-blue-300 text-sm font-bold mb-6 tracking-widest uppercase">
                            Stérilisation Photonique & Bio-Protection
                        </span>
                        <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                            <span className="font-bold">Le pouvoir de</span> <span className="text-blue-300 font-bold italic">la lumière</span> <span className="font-bold">UV</span>
                        </h1>
                        <p className="text-[20px] leading-[28px] text-slate-100 font-light mb-10 text-justify max-w-xl mx-auto italic text-center">
                            Comment une technologie inspirée du soleil permet d'éradiquer 99,99 % des micro-organismes sans altérer la chimie de votre eau : une barrière invisible contre les bactéries.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 rounded-full px-10 h-16 font-bold" asChild>
                                <a href="/Systemes-de-desinfection-UV">Découvrir nos systèmes UV Expert</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-10 h-16 font-bold backdrop-blur-sm" asChild>
                                <a href="tel:18552649328" className="flex items-center gap-2">
                                    <Phone className="h-5 w-5" /> 1-855-264-9328
                                </a>
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
                                    Imaginez pouvoir désinfecter votre eau sans chlore, sans odeur chimique et sans danger pour vos reins. C'est la promesse tenue de la technologie UV-C.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Dans un monde de plus en plus soucieux de réduire l'exposition aux produits chimiques, le traitement de l'eau par ultraviolet (UV) s'impose comme une révolution éco-responsable. Utilisée depuis des décennies dans les grandes villes du monde et les installations médicales, cette méthode physique de désinfection gagne maintenant les résidences du Québec. Que vous soyez sur un puits artésien ou un réseau municipal, la lampe UV offre une sécurité microbiologique infaillible. Ce guide détaille pourquoi cette "solution naturelle" est indispensable pour protéger votre famille.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. La Neutralisation Photonique : Comment ça marche ?</h2>
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

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Les 3 Avantages "Naturels" de l'UV</h2>
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

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Quand le système UV est-il obligatoire ?</h2>
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
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default TraitementUVBacteriaNaturel;
