import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import { Button } from "@/components/ui/button";

const CalcaireElectromenagers = () => {
    useEffect(() => {
        document.title = "Le Calcaire : Le Tueur Silencieux de vos Électroménagers au Québec | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez comment le calcaire réduit la durée de vie de vos électroménagers au Québec et comment un adoucisseur d'eau peut vous faire économiser des milliers de dollars.");
        }
    }, []);

    const tocItems = [
        { id: "section-1", title: "Qu'est-ce que l'eau dure au Québec ?" },
        { id: "section-2", title: "Le Chauffe-eau : La victime numéro un" },
        { id: "section-3", title: "Le Lave-vaisselle : Adieu la brillance" },
        { id: "section-4", title: "La Laveuse à linge : Fibres et moteurs en péril" },
        { id: "section-5", title: "Les petits électroménagers : Les oubliés" },
        { id: "section-6", title: "L'impact financier réel" },
        { id: "section-7", title: "La solution : L'adoucisseur" },
        { id: "conclusion", title: "Conclusion" }
    ];

    return (
        <BlogLayout 
            title="Le Tueur Silencieux de vos Électroménagers : Comment le Calcaire Gruge votre Budget au Québec" 
            headerImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop"
            tocItems={tocItems}
        >
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Au Québec, nous avons la chance d'avoir une eau abondante et généralement de grande qualité. Pourtant, selon que vous habitiez en Estrie, en Montérégie, dans le Bas-Saint-Laurent ou même dans certains secteurs de l'Île de Montréal, un ennemi invisible s'infiltre dans votre plomberie : <strong>le calcaire</strong>.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Si vous remarquez des taches blanches sur votre vaisselle ou si votre chauffe-eau semble peiner à fournir de l'eau chaude, vous faites face à de l'eau dure. Mais au-delà de l'esthétique, quel est l'impact réel sur vos investissements ? Comment le calcaire réduit-il la durée de vie de vos précieux électroménagers ?
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 italic font-medium">
                Plongée au cœur d'un problème qui coûte des milliers de dollars aux ménages québécois chaque année.
            </p>

            <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">1. Qu'est-ce que l'eau dure au Québec ?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Bien que nous utilisions souvent le terme "calcaire", les experts parlent de <strong>dureté de l'eau</strong>. Elle se mesure par la concentration de minéraux dissous, principalement le calcium et le magnésium.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Au Québec, on mesure souvent cette dureté en Grains par Gallon (gpg) ou en parties par million (ppm).
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li><strong>Eau douce :</strong> 0 à 3 gpg</li>
                <li><strong>Eau dure :</strong> 7 à 10.5 gpg</li>
                <li><strong>Eau très dure :</strong> Plus de 10.5 gpg</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Dans plusieurs régions de la province, notamment là où l'eau provient de puits artésiens ou de nappes phréatiques riches en minéraux, il n'est pas rare de dépasser les 10 grains. C'est ici que les problèmes commencent pour vos appareils.
            </p>

            <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">2. Le Chauffe-eau : La victime numéro un</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Au Québec, le chauffe-eau électrique est la norme. C'est aussi l'appareil le plus vulnérable au calcaire. Lorsque l'eau est chauffée, les minéraux de calcium se cristallisent et se déposent au fond du réservoir et sur les éléments chauffants.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
                <strong>L'entartrage des éléments :</strong> Le calcaire forme une gangue solide autour de la résistance. Pour chauffer l'eau, l'élément doit d'abord chauffer cette couche de roche. Résultat ? Une surchauffe de la pièce qui finit par griller prématurément.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                <strong>La perte d'espace et de rendement :</strong> Avec les années, des pouces de sédiments s'accumulent au fond du réservoir, réduisant la capacité réelle d'eau chaude disponible pour votre douche.
            </p>
            <p className="text-lg leading-relaxed text-red-600 mb-6 font-bold">
                Conséquence : Un chauffe-eau qui devrait durer 10 à 12 ans peut rendre l'âme en moins de 6 ans dans une zone d'eau dure (10+ gpg).
            </p>

            <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">3. Le Lave-vaisselle : Adieu la brillance</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Le calcaire ne se contente pas de laisser des taches blanches sur vos verres. Il s'accumule dans les minuscules buses des bras d'aspersion.
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li><strong>Pression réduite :</strong> Si les trous sont bouchés, l'eau ne circule plus correctement, et votre vaisselle ressort sale.</li>
                <li><strong>Usure de la pompe :</strong> La pompe de circulation doit forcer davantage pour pousser l'eau à travers des conduits rétrécis par le tartre, ce qui mène à un bris moteur coûteux.</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Un lave-vaisselle exposé à une eau de 10 gpg voit sa durée de vie réduite de 30 % à 50 %.
            </p>

            <h2 id="section-4" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">4. La Laveuse à linge : Fibres et moteurs en péril</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                La machine à laver subit le même sort que le chauffe-eau, car elle utilise souvent de l'eau chaude ou tiède, favorisant la précipitation du calcaire.
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li><strong>La résistance interne :</strong> Sur les modèles modernes certifiés Energy Star, le tartre fausse les capteurs de température, prolongeant les cycles de lavage inutilement.</li>
                <li><strong>Les joints d'étanchéité :</strong> Le calcaire est abrasif. En se déposant sur les joints en caoutchouc du tambour, il provoque des micro-fissures qui mènent éventuellement à des fuites d'eau.</li>
            </ul>

            <h2 id="section-5" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">5. Les petits électroménagers : Les "oubliés" du calcaire</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Cafetières espresso, bouilloires, fers à repasser... Ces appareils sont souvent les premiers à succomber. Une machine espresso de qualité peut coûter plus de 1 000 $. Utiliser une eau de puits dure sans filtration ou adoucisseur dans ces appareils est une condamnation à mort. Les conduits internes, pas plus larges qu'une paille, se bouchent en quelques mois, rendant l'appareil irréparable.
            </p>

            <h2 id="section-6" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">6. L'impact financier réel (Le calcul québécois)</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Voyons l'impact sur votre portefeuille sur une période de 10 ans pour une maison moyenne au Québec avec une eau dure (10 gpg) sans adoucisseur :
            </p>

            <div className="overflow-x-auto mb-8 border border-gray-200 rounded-lg">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="p-4 font-bold text-gray-900">Appareil</th>
                            <th className="p-4 font-bold text-gray-900">Vie normale</th>
                            <th className="p-4 font-bold text-gray-900 text-red-600">Avec eau dure</th>
                            <th className="p-4 font-bold text-gray-900 text-right">Remplacement</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        <tr>
                            <td className="p-4 text-gray-700">Chauffe-eau</td>
                            <td className="p-4 text-gray-600">10-12 ans</td>
                            <td className="p-4 text-red-600 font-bold">6 ans</td>
                            <td className="p-4 text-gray-700 text-right">800 $ - 1 200 $</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-gray-700">Lave-vaisselle</td>
                            <td className="p-4 text-gray-600">9 ans</td>
                            <td className="p-4 text-red-600 font-bold">5 ans</td>
                            <td className="p-4 text-gray-700 text-right">700 $ - 1 100 $</td>
                        </tr>
                        <tr>
                            <td className="p-4 text-gray-700">Laveuse</td>
                            <td className="p-4 text-gray-600">11 ans</td>
                            <td className="p-4 text-red-600 font-bold">7 ans</td>
                            <td className="p-4 text-gray-700 text-right">900 $ - 1 400 $</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                <strong>Total des pertes : ~ 2 500 $ + Énergie.</strong> À cela s'ajoute une augmentation de 15 % à 25 % de votre facture d'Hydro-Québec pour le chauffage de l'eau, car un élément entartré consomme beaucoup plus pour le même résultat.
            </p>

            <h2 id="section-7" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">7. La solution : L'adoucisseur d'eau</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                La seule façon d'arrêter ce processus de dégradation est de retirer physiquement le calcium et le magnésium de l'eau avant qu'elle n'entre dans vos appareils.
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li><strong>Élimination totale du tartre :</strong> En remplaçant les ions de dureté par des ions de sodium (à un niveau infime), l'eau devient incapable de former des dépôts solides.</li>
                <li><strong>Nettoyage passif :</strong> L'eau douce aide à dissoudre graduellement certains dépôts de calcaire existants dans vos tuyaux.</li>
                <li><strong>Réduction des produits chimiques :</strong> Vous utiliserez 50 % moins de savon, ce qui prolonge aussi la vie des composants internes.</li>
            </ul>

            <h2 id="conclusion" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Conclusion : Prévenir plutôt que remplacer</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Au Québec, la dureté de l'eau varie d'une municipalité à l'autre. Ne laissez pas le calcaire dicter la durée de vie de vos électroménagers. Un adoucisseur d'eau bien calibré est un investissement qui se rentabilise non seulement par la longévité de vos appareils, mais aussi par la tranquillité d'esprit de ne plus avoir à frotter, détartrer et réparer prématurément.
            </p>

            <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">Protégez votre budget dès aujourd'hui</h3>
                <p className="text-lg text-blue-800 mb-8 max-w-2xl mx-auto">
                    Ne laissez pas le calcaire silencieux saboter votre demeure. Demandez une analyse d'eau gratuite pour connaître votre taux de dureté exact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-6 text-lg" asChild>
                        <a href="/tests-eau">Analyse d'eau gratuite</a>
                    </Button>
                    <Button variant="outline" className="border-blue-200 text-blue-800 hover:bg-white rounded-lg px-8 py-6 text-lg" asChild>
                        <a href="/contact">Parler à un expert</a>
                    </Button>
                </div>
            </div>
        </BlogLayout>
    );
};

export default CalcaireElectromenagers;
