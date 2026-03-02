import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, BadgeCheck, Microscope, Waves, Droplets, ArrowRight, HeartPulse, Info, Zap, Sparkles, Filter, CheckCircle2, FlaskConical, Scale } from "lucide-react";

const OsmoseInverseMeilleurSysteme = () => {
    useEffect(() => {
        document.title = "Osmose inverse à domicile : Le guide ultime pour votre famille | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "L'osmose inverse est-elle le meilleur système de filtration pour votre foyer ? Découvrez les avantages, le fonctionnement et pourquoi c'est la barrière ultime contre les contaminants.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-relaxed font-light text-justify">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-blue-950 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop"
                            alt="Famille heureuse buvant de l'eau pure"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-400 text-sm font-bold mb-6 tracking-widest uppercase">
                            Contrôle de Pureté & Santé Familiale
                        </span>
                        <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                            <span className="font-bold">Osmose inverse :</span> <span className="text-blue-400 font-bold italic">Le meilleur système ?</span>
                        </h1>
                        <p className="text-[20px] leading-[28px] text-slate-300 font-light mb-10 text-justify max-w-xl mx-auto italic">
                            Démystifier la technologie de filtration la plus avancée au monde : pourquoi l'osmose inverse est devenue le standard de référence pour la sécurité de l'eau potable résidentielle.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 font-bold" asChild>
                                <a href="/ro-6">Explorer nos systèmes RO-6</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-10 h-16 font-bold backdrop-blur-sm" asChild>
                                <a href="tel:18552649328" className="flex items-center gap-2">
                                    <Phone className="h-5 w-5" /> 1-855-264-9328
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="py-20 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-relaxed">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    À une époque où la qualité des sources d'eau municipales et de puits est de plus en plus remise en question, l'osmose inverse (RO) s'impose comme la solution de barrière totale. Mais est-ce vraiment le choix optimal pour votre famille ?
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Dans la quête de l'eau parfaite, de nombreuses technologies s'offrent aux consommateurs : filtres à charbon, adoucisseurs, ioniseurs, distillation... Cependant, aucun système ne suscite autant d'intérêt — et parfois autant d'interrogations — que l'osmose inverse. Utilisée à l'origine par la marine pour dessaler l'eau de mer et par l'industrie médicale pour produire de l'eau ultra-pure, cette technologie est aujourd'hui miniaturisée pour tenir sous votre évier de cuisine. Cet article analyse en profondeur pourquoi l'osmose inverse est considérée comme le "Saint Graal" de la purification de l'eau et comment elle peut transformer la santé de votre foyer.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. Qu'est-ce que l'osmose inverse ? (La Science)</h2>
                                <p>
                                    Pour comprendre l'osmose "inverse", il faut d'abord comprendre l'osmose naturelle. Dans la nature, l'eau se déplace d'une solution moins concentrée vers une solution plus concentrée à travers une membrane semi-perméable.
                                </p>
                                <p>
                                    L'<strong>osmose inverse</strong> inverse ce processus naturel en appliquant une forte pression sur l'eau pré-filtrée. On force ainsi l'eau à traverser une membrane dont les pores sont si fins (0,0001 micron) qu'ils ne laissent passer pratiquement que les molécules d'H₂O. Tout le reste — plomb, arsenic, bactéries, virus, PFAS, résidus de médicaments — est physiquement rejeté vers le drain. C'est, par définition, la filtration à l'échelle moléculaire.
                                </p>

                                <div className="my-16 bg-blue-50 border border-blue-100 rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="shrink-0 bg-white p-6 rounded-2xl shadow-sm">
                                        <FlaskConical className="w-16 h-16 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">Efficacité Inégalée</h3>
                                        <p className="text-slate-600 text-[18px]">
                                            Un système d'osmose inverse certifié retire jusqu'à <strong>99%</strong> de la totalité des solides dissous (TDS). C'est la seule technologie capable d'éliminer simultanément les contaminants chimiques, biologiques et minéraux en une seule étape.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Pourquoi est-ce le meilleur choix pour votre famille ?</h2>
                                <p>
                                    Le choix d'un système de filtration ne doit pas être basé uniquement sur le prix, mais sur la capacité de protection. Voici pourquoi l'osmose inverse l'emporte sur les autres méthodes :
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <ShieldCheck className="w-12 h-12 text-blue-600 mb-6" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Barrière Totale</h4>
                                        <p className="text-slate-600 text-sm italic leading-relaxed">
                                            Contrairement au charbon seul qui ne traite que le goût et l'odeur (chlore), l'osmose inverse traite les métaux lourds (plomb, mercure), les nitrates, le fluor et même les polluants "éternels" comme les PFAS.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <HeartPulse className="w-12 h-12 text-blue-600 mb-6" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Sécurité des plus vulnérables</h4>
                                        <p className="text-slate-600 text-sm italic leading-relaxed">
                                            Pour les nourrissons (préparation des biberons) et les personnes dont le système immunitaire est affaibli, l'absence garantie de contaminants biologiques et chimiques est un impératif de santé non négociable.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Le goût : La différence cristalline</h2>
                                <p>
                                    L'un des commentaires les plus fréquents des utilisateurs d'osmose inverse Bricareau est : "Je ne savais pas que l'eau pouvait avoir un goût aussi pur".
                                </p>
                                <p>
                                    En retirant les minéraux inorganiques lourds et les produits de désinfection municipaux, l'eau retrouve sa légèreté naturelle. Cela transforme non seulement l'eau que vous buvez, mais aussi la qualité de votre café, de votre thé et de vos aliments cuisinés à l'eau. Pour les familles, cela encourage souvent une hydratation accrue des enfants, délaissant ainsi les boissons sucrées.
                                </p>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">4. Mythes et Réalités : Ce qu'il faut savoir</h2>
                                <p>
                                    Certains détracteurs mentionnent le rejet d'eau ou le retrait des "bons" minéraux. Clarifions ces points :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Le rejet d'eau :</strong> Les systèmes modernes Bricareau ont des ratios de rejet extrêmement bas. L'eau utilisée pour nettoyer la membrane est un prix minime à payer pour l'assurance d'une pureté absolue.</li>
                                    <li><strong>Minéraux essentiels :</strong> Notre corps puise la vaste majorité de ses minéraux dans la nourriture, pas dans l'eau. Cependant, nos systèmes comme le <strong>RO-6</strong> incluent une étape de <strong>reminéralisation</strong> pour équilibrer le pH et redonner à l'eau une saveur riche et équilibrée.</li>
                                </ul>

                                <div className="mt-20 p-10 md:p-20 bg-blue-900 text-white rounded-[4rem] relative overflow-hidden text-center shadow-2xl">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 -translate-y-12">
                                        <BadgeCheck className="w-96 h-96" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic">L'excellence au service de votre famille.</h3>
                                    <p className="text-xl text-blue-100 opacity-90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                        Ne laissez plus le hasard décider de la pureté de votre eau. Optez pour la technologie utilisée par les plus grands laboratoires pour protéger votre foyer.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-full px-12 h-18 text-xl font-bold transition-transform active:scale-95 shadow-xl" asChild>
                                            <a href="/contact">Évaluation gratuite de vos besoins</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed flex items-start gap-4">
                                    <Info className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                                    <p>
                                        Rappel d'expert : Un système d'osmose inverse nécessite un changement régulier des filtres (annuel) pour conserver ses performances maximales et protéger la membrane. Bricareau offre un service de rappel d'entretien pour votre tranquillité.
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

export default OsmoseInverseMeilleurSysteme;
