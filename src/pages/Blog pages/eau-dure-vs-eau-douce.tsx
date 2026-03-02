import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, AlertCircle, Droplets, Sparkles, Home, Heart, Zap, Wrench, ArrowRight } from "lucide-react";

const EauDureVsDouce = () => {
    useEffect(() => {
        document.title = "Eau dure vs Eau douce : Guide complet Bricareau | Reconnaître et Régler le Problème";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez la différence entre l'eau dure et l'eau douce. Apprenez à identifier les signes de calcaire dans votre maison et trouvez la solution d'adoucissement idéale.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-snug">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-blue-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"
                            alt="Eau pure et rafraîchissante"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-6 tracking-widest uppercase backdrop-blur-sm">
                            Guide Pratique de la Maison
                        </span>
                        <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                            <span className="font-bold">Eau dure</span> <span className="text-blue-400 font-bold">vs</span> <span className="font-bold">Eau douce</span>
                        </h1>
                        <p className="text-[20px] leading-snug text-slate-300 font-light mb-10 text-justify max-w-xl mx-auto italic">
                            Élucider le mystère du calcaire, protéger votre foyer et transformer votre bien-être quotidien par une eau parfaitement équilibrée.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 font-bold" asChild>
                                <a href="/tests-eau">Tester la dureté de mon eau</a>
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
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 text-justify">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    L'eau est l'essence même de notre foyer. Pourtant, sous son aspect incolore et limpide, elle cache des caractéristiques chimiques qui influencent drastiquement votre confort, votre santé et la pérennité de vos installations. La question n'est pas seulement de savoir si l'eau est propre, mais si elle est « dure » ou « douce ».
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Dans de nombreuses régions du Québec et du Canada, la « dureté » de l'eau est un fait de la vie quotidienne. Mais qu'est-ce que cela signifie réellement sur le plan moléculaire ? Et pourquoi devriez-vous vous en soucier ? Ce guide complet explore les fondements scientifiques de la dureté de l'eau, les manifestations concrètes dans votre maison, et les solutions définitives pour passer d'une eau agressive à une eau protectrice.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. La science derrière l'eau dure</h2>
                                <p>
                                    Sur le plan technique, la <strong>dureté de l'eau</strong> correspond à la concentration de minéraux dissous, principalement le calcium et le magnésium. L'eau de pluie est naturellement douce, mais en s'infiltrant dans le sol pour atteindre les nappes phréatiques, elle traverse des couches de roches calcaires ou de craie. Sa nature légèrement acide lui permet de dissoudre ces minéraux, se chargeant ainsi en ions calcium (Ca²⁺) et magnésium (Mg²⁺).
                                </p>
                                <p>
                                    Plus le sol est riche en calcaire (calcite ou dolomite), plus l'eau sera dure. Elle devient alors une solution concentrée de minéraux qui, bien que bénéfiques pour la consommation alimentaire à petite dose, deviennent un cauchemar technique lorsqu'ils chauffent ou s'évaporent. C'est à ce moment que le calcaire se transforme en <strong>tartre</strong>, une formation cristalline solide et tenace.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-20 mb-8 tracking-tight uppercase tracking-widest text-sm text-blue-600">Tableau de Mesure</h2>
                                <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 my-10 shadow-sm relative overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-slate-100 text-slate-900 uppercase font-bold tracking-tight">
                                            <tr>
                                                <th className="p-6">Classification</th>
                                                <th className="p-6">Grains par Gallon (gpg)</th>
                                                <th className="p-6">Milligrammes par Litre (mg/L / ppm)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200">
                                            <tr>
                                                <td className="p-6">Douce</td>
                                                <td className="p-6 font-medium text-blue-600">0 - 1.0</td>
                                                <td className="p-6">0 - 17.1</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6">Moyennement Dure</td>
                                                <td className="p-6 font-medium text-amber-600">3.5 - 7.0</td>
                                                <td className="p-6">60 - 120</td>
                                            </tr>
                                            <tr>
                                                <td className="p-6">Dure / Très Dure</td>
                                                <td className="p-6 font-medium text-red-600">7.0 - 10.5+</td>
                                                <td className="p-6">120 - 180+</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-20 mb-8 tracking-tight text-center lg:text-left">2. Reconnaître les signes : Votre maison vous parle</h2>
                                <p className="text-center md:text-left mb-12">
                                    L'eau dure laisse une trace indélébile partout où elle passe. Si vous observez l'un des signes suivants, il est fort probable que vous viviez avec une eau excessivement minéralisée.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-slate-900 font-bold">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                <Home className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h4>Dépôts blanchâtres sur la robinetterie</h4>
                                        </div>
                                        <p className="text-slate-600 text-[16px] leading-snug">
                                            Ce voile calcaire ou ces croûtes blanches autour des aérateurs et des bases de robinets sont le résultat direct de l'évaporation de l'eau dure.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-slate-900 font-bold">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                <Heart className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h4>Peau sèche et cheveux ternes</h4>
                                        </div>
                                        <p className="text-slate-600 text-[16px] leading-snug">
                                            Les minéraux réagissent avec le savon pour former un résidu insoluble (savon calcaire) qui se dépose sur la peau, causant démangeaisons, rougeurs et perte d'éclat capillaire.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-slate-900 font-bold">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                <Zap className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h4>Factures d'énergie en hausse</h4>
                                        </div>
                                        <p className="text-slate-600 text-[16px] leading-snug">
                                            Un seul millimètre de calcaire sur l'élément chauffant de votre réservoir d'eau chaude peut augmenter votre consommation électrique de 10 à 15 % par an.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-slate-900 font-bold">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                <Wrench className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h4>Appareils électroménagers fatigués</h4>
                                        </div>
                                        <p className="text-slate-600 text-[16px] leading-snug">
                                            Le calcaire obstrue les pompes, les valves et les tuyaux internes de vos lave-vaisselle et laveuses, provoquant des pannes prématurées coûteuses.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. L'Eau Douce : Le luxe quotidien accessible</h2>
                                <p>
                                    L'installation d'un adoucisseur d'eau transforme radicalement votre relation avec votre environnement domestique. Considérez l'eau douce non pas comme un luxe, mais comme une technologie d'optimisation de votre maison.
                                </p>
                                <p>
                                    <strong>Nettoyage facilité :</strong> Finies les heures passées à frotter les parois de douche. L'eau douce ne laisse aucun résidu minéral. Vos vitres, miroirs et carrelages brillent instantanément.
                                </p>
                                <p>
                                    <strong>Efficacité des produits :</strong> Le savon et le détergent moussent beaucoup plus dans l'eau douce. Vous pouvez réduire votre consommation de produits de nettoyage de 50 à 75 %, réalisant ainsi des économies substantielles.
                                </p>
                                <p>
                                    <strong>Protection des textiles :</strong> Vos vêtements restent souples et les couleurs éclatantes plus longtemps. L'eau dure rend les fibres cassantes et ternit le linge. L'eau douce préserve la qualité de vos draps et de vos vêtements favoris.
                                </p>

                                <div className="my-16 bg-blue-900 text-white rounded-[2rem] p-10 md:p-16 relative shadow-2xl overflow-hidden">
                                    <div className="absolute top-0 right-0 p-12 opacity-10">
                                        <Sparkles className="w-48 h-48" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-8 italic tracking-tighter">Prêt pour la transformation ?</h3>
                                    <p className="text-xl text-blue-100 opacity-80 mb-12 font-light leading-snug max-w-2xl text-justify">
                                        Un adoucisseur d'eau Bricareau est un investissement qui s'autofinance par les économies d'énergie et de produits d'entretien, tout en protégeant vos électroménagers pour les 20 prochaines années.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-full px-12 h-16 text-lg font-bold" asChild>
                                            <a href="/adoucisseur-eau-residentiel">Découvrir nos solutions</a>
                                        </Button>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">4. Comment régler le problème une fois pour toutes</h2>
                                <p>
                                    Si votre diagnostic confirme une eau dure, la solution technologique de référence est l'<strong>échange d'ions</strong>. Ce processus biomoléculaire consiste à faire circuler l'eau dure à travers un lit de résine spéciale chargée d'ions sodium ou potassium. Les ions calcium et magnésium, responsables du calcaire, sont capturés par la résine et remplacés par des ions doux.
                                </p>
                                <p>
                                    Chez Bricareau, nos adoucisseurs de nouvelle génération utilisent des contrôleurs intelligents qui calculent précisément vos besoins, minimisant la consommation de sel et d'eau de régénération. C'est la garantie d'une efficacité maximale avec un impact environnemental réduit.
                                </p>

                                <div className="mt-20 p-10 bg-slate-50 rounded-3xl border border-slate-100 relative shadow-inner">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                        <AlertCircle className="w-6 h-6 text-blue-600" />
                                        Le Conseil de l'Expert
                                    </h3>
                                    <p className="text-slate-600 leading-snug italic text-justify">
                                        « Ne vous contentez pas de solutions temporaires comme les filtres magnétiques ou électroniques passifs qui ne retirent pas physiquement les minéraux dureté. Pour une protection réelle de votre chauffe-eau et une peau réellement plus douce, seul l'échange d'ions offre un résultat garanti et mesurable. »
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

export default EauDureVsDouce;
