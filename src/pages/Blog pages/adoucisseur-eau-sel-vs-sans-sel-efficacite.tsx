import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, BadgeCheck, Microscope, Waves, Droplets, Info, Zap, Sparkles, Filter, CheckCircle2, Home, Layout, Search, Sparkle, Hammer, Wrench, Settings, Activity, FlaskConical, Scale, Thermometer, MicroscopeIcon, Pipette, ZapIcon, InfoIcon, ShieldAlert, BadgeInfo } from "lucide-react";

const AdoucisseurSelVsSansSelEfficacite = () => {
    useEffect(() => {
        document.title = "Adoucisseur à sel vs sans sel : Lequel est vraiment efficace ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez la vérité sur les adoucisseurs à sel et les systèmes sans sel (conditionneurs). Comparaison technique, efficacité réelle contre le calcaire et conseils d'experts.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-snug font-light text-justify text-[16px]">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-slate-900 text-white overflow-hidden text-center shadow-lg">
                    <div className="absolute inset-0 opacity-20 transform scale-110">
                        <img
                            src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"
                            alt="Abstraction de billes de résine et cristaux de sel"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-400 text-sm font-bold mb-6 tracking-widest uppercase">
                            Chimie vs Physique & Débat Technique
                        </span>
                        <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                            <span className="font-bold">Adoucisseur à sel</span> <span className="text-blue-400 font-bold">vs</span> <span className="font-bold">Sans sel</span>
                        </h1>
                        <p className="text-[20px] leading-snug text-slate-300 font-light mb-10 text-justify max-w-xl mx-auto italic">
                            La grande vérité sur l'adoucissement de l'eau : entre marketing agressif et réalités scientifiques, lequel protège réellement votre foyer contre le calcaire destructeur ?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 font-bold shadow-lg" asChild>
                                <a href="/adoucissement">Voir nos adoucisseurs performants</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-10 h-16 font-bold backdrop-blur-sm shadow-xl" asChild>
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
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-snug">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    Il existe une confusion majeure sur le marché québécois entre "adoucissement" et "conditionnement". L'un retire le problème, l'autre tente de le distraire.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Lorsque vous cherchez une solution contre le calcaire, vous tombez inévitablement sur deux camps : les adoucisseurs traditionnels à base d'échange d'ions (à sel) et les systèmes dits "sans sel" ou "électrodécalcifieurs". Les promesses du "sans sel" sont alléchantes : pas de sacs lourds à transporter, pas de rejet d'eau, pas de maintenance. Mais la réalité technique est plus nuancée. Pour un propriétaire au Québec, faire le mauvais choix peut signifier voir ses canalisations s'entartrer malgré un investissement de plusieurs milliers de dollars. Ce guide Bricareau apporte une réponse définitive et scientifique à ce duel technologique.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. L'Adoucisseur à Sel : La Solution par Soustraction</h2>
                                <p>
                                    C'est la seule technologie que les experts certifiés (WQA) reconnaissent comme capable de <strong>réduire physiquement</strong> les grains de dureté dans l'eau.
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Mécanisme :</strong> Utilise la résine échangeuse d'ions pour capturer le calcium et le magnésium et les remplacer par des ions sodium (ou potassium).</li>
                                    <li><strong>Efficacité :</strong> Réduit la dureté de 15-20 grains à virtuellement 0 gpg.</li>
                                    <li><strong>Avantages :</strong> Protection totale de la plomberie, suppression complète des taches blanches, mousse de savon abondante, peau soyeuse.</li>
                                    <li><strong>Enjeux :</strong> Nécessite l'ajout régulier de sel et rejette une petite quantité d'eau lors de sa régénération.</li>
                                </ul>

                                <div className="my-16 bg-blue-50 border border-blue-100 rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="shrink-0 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                        <BadgeCheck className="w-16 h-16 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">Le Verdict des Experts</h3>
                                        <p className="text-slate-600 text-[18px]">
                                            Si vous voulez une eau réellement douce au toucher et une vaisselle sans aucune tache, <strong>seul le système à sel</strong> peut obtenir ce résultat au Québec.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Le "Sans Sel" : Un Conditionneur, pas un Adoucisseur</h2>
                                <p>
                                    Les systèmes sans sel (souvent utilisant la Template Assisted Crystallization ou TAC) ne retirent pas le calcaire de l'eau. Ils agissent sur sa forme physique.
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Mécanisme :</strong> Ils modifient la structure cristalline du calcaire pour qu'il reste en suspension dans l'eau plutôt que de coller aux parois des tuyaux.</li>
                                    <li><strong>Efficacité :</strong> La dureté mesurée reste la même avant et après le système. Le calcaire est toujours présent dans l'eau.</li>
                                    <li><strong>Avantages :</strong> Pas de sel, pas de drain, installation compacte.</li>
                                    <li><strong>Limites :</strong> Si l'eau stagne (dans le chauffe-eau ou sur la vaisselle), le calcaire reprend sa forme solide et crée des taches. <strong>L'eau ne sera jamais "douce" au toucher.</strong></li>
                                </ul>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <ShieldAlert className="w-10 h-10 text-red-600 mb-4" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Le Piège du Marketing</h4>
                                        <p className="text-slate-600 text-sm italic leading-snug text-justify">
                                            De nombreux fabricants vendent ces systèmes comme des "adoucisseurs" pour profiter du terme, alors qu'ils ne modifient pas la dureté de l'eau. Soyez vigilants.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <BadgeInfo className="w-10 h-10 text-blue-600 mb-4" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Usage Recommandé</h4>
                                        <p className="text-slate-600 text-sm italic leading-snug text-justify">
                                            Un système sans sel peut être utile pour limiter l'entartrage dans les copropriétés où l'installation d'un drain est impossible, mais il ne résoudra pas les problèmes de peau sèche.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Tableau de Comparaison Ultime</h2>
                                <div className="overflow-x-auto my-12">
                                    <table className="w-full border-collapse border border-slate-200 text-center">
                                        <thead>
                                            <tr className="bg-slate-100">
                                                <th className="border p-4 text-left">Caractéristique</th>
                                                <th className="border p-4">Adoucisseur (Sel)</th>
                                                <th className="border p-4">Conditionneur (Sans Sel)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border p-4 font-bold text-left">Retire le calcaire ?</td>
                                                <td className="border p-4 text-green-600 font-bold">OUI</td>
                                                <td className="border p-4 text-red-600 font-bold">NON</td>
                                            </tr>
                                            <tr>
                                                <td className="border p-4 font-bold text-left">Supprime les taches blanches ?</td>
                                                <td className="border p-4 text-green-600 font-bold">TOTALEMENT</td>
                                                <td className="border p-4 text-orange-600 font-bold">PARTIELLEMENT</td>
                                            </tr>
                                            <tr>
                                                <td className="border p-4 font-bold text-left">Effet sur la peau/cheveux ?</td>
                                                <td className="border p-4 text-green-600 font-bold">DOUCEUR RÉELLE</td>
                                                <td className="border p-4 text-slate-400 font-bold">AUCUN EFFET</td>
                                            </tr>
                                            <tr>
                                                <td className="border p-4 font-bold text-left">Coût de maintenance</td>
                                                <td className="border p-4 font-bold">Bas (Sel)</td>
                                                <td className="border p-4 font-bold">Nul (à court terme)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-20 p-10 md:p-20 bg-blue-900 text-white rounded-[4rem] relative overflow-hidden text-center shadow-2xl group">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 scale-125 group-hover:rotate-12 transition-transform duration-700">
                                        <BadgeCheck className="w-96 h-96" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic">Ne faites aucun compromis sur votre confort.</h3>
                                    <p className="text-xl text-blue-100 opacity-90 mb-12 max-w-2xl mx-auto font-light leading-snug">
                                        Si vous exigez une eau vraiment pure et soyeuse, le choix est clair. Laissez nos experts vous montrer la différence réelle d'un système à sel Signature.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-full px-12 h-18 text-xl font-bold shadow-xl shadow-blue-900/50 transition-transform active:scale-95" asChild>
                                            <a href="/contact">Demander mon analyse comparative d'eau</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-snug flex items-start gap-4">
                                    <Info className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                                    <p>
                                        Rappel technique : Pour ceux qui s'inquiètent de la consommation de sodium, l'utilisation de chlorure de potassium dans un adoucisseur classique permet d'obtenir tous les avantages de l'eau douce sans ajouter de sodium à l'eau.
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

export default AdoucisseurSelVsSansSelEfficacite;
