import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import heroImg from "@/assets/4219.jpg";
export { heroImg };

const EauDeVilleBesoinFiltration = () => {
    useEffect(() => {
        document.title = "Pourquoi même l'eau de ville a besoin d'être filtrée ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrir pourquoi l'eau de ville, bien que potable, nécessite souvent une filtration pour éliminer le chlore, les métaux lourds et améliorer son goût.");
        }
    }, []);

    const tocItems = [
        { id: "section-1", title: "Un parcours qui peut altérer la qualité de l'eau" },
        { id: "section-2", title: "Les limites de la désinfection chimique" },
        { id: "section-3", title: "L'usure des infrastructures et les métaux lourds" },
        { id: "section-4", title: "Une amélioration sensorielle et pratique" },
        { id: "section-5", title: "Un choix de vie écologique et responsable" },
        { id: "section-6", title: "La tranquillité d'esprit d'une installation sécuritaire" }
    ];

    return (
        <BlogLayout
            title="Pourquoi même l'eau de ville a besoin d'être filtrée?"
            headerImage={heroImg}
            tocItems={tocItems}
        >
            {/* Section 1 */}
            <h2 id="section-1" className="text-black mt-16 mb-6 scroll-mt-24">Un parcours qui peut altérer la qualité de l'eau</h2>
            <p className="text-gray-700 mb-6 text-justify">
                Beaucoup de Québécois pensent qu’une fois raccordée au réseau municipal, leur maison bénéficie d’une eau parfaitement pure et sans risque. Cependant, même l’eau de ville, bien qu’elle respecte les normes de santé publique, n’est pas toujours exempte d’impuretés. Avant d’arriver à vos robinets, elle parcourt de longs conduits et traverse différentes étapes de traitement et de distribution qui peuvent altérer sa qualité. Ce parcours peut introduire des résidus comme le chlore, les métaux dissous ou des particules issues des vieilles canalisations. Filtrer son eau à domicile n’est donc pas un luxe, mais un moyen simple d’assurer une qualité constante, de protéger sa santé et de rehausser son confort au quotidien.
            </p>

            {/* Section 2 */}
            <h2 id="section-2" className="text-black mt-16 mb-6 scroll-mt-24">Les limites de la désinfection chimique</h2>
            <p className="text-gray-700 mb-6 text-justify">
                L’eau municipale est traitée pour éliminer les microorganismes pathogènes et les contaminants majeurs, mais son traitement repose souvent sur des désinfectants chimiques comme le chlore ou la chloramine. Si ces agents sont efficaces contre les bactéries, ils laissent parfois un goût ou une odeur désagréable et peuvent être irritants pour certaines personnes sensibles. De plus, lorsqu’ils réagissent avec des matières organiques naturellement présentes dans l’eau, ils forment des sous-produits de désinfection, comme les trihalométhanes, dont la consommation prolongée est déconseillée. La filtration à domicile, avec un système à charbon actif ou un filtre multi-étages, permet d’éliminer ces résidus tout en préservant les minéraux essentiels, offrant ainsi une eau plus pure et agréable à boire.
            </p>

            {/* Section 3 */}
            <h2 id="section-3" className="text-black mt-16 mb-6 scroll-mt-24">L'usure des infrastructures et les métaux lourds</h2>
            <p className="text-gray-700 mb-6 text-justify">
                Même si elle est surveillée quotidiennement par les autorités municipales, l’eau de ville peut voir sa qualité varier selon les infrastructures locales. Les conduites d’eau, parfois âgées de plusieurs décennies, peuvent relâcher des particules de cuivre, de fer, voire de plomb dans les vieilles habitations. Ces métaux lourds, même en très faible concentration, peuvent s’accumuler dans l’organisme sur le long terme et poser un risque pour la santé, particulièrement chez les enfants. L’installation d’un filtre adapté au point d’entrée ou au point d’utilisation (comme un robinet ou un système sous l’évier) agit comme une barrière supplémentaire contre ces contaminants invisibles. Elle garantit que l’eau consommée au quotidien est exempte de résidus indésirables et conserve toute sa fraîcheur.
            </p>

            {/* Section 4 */}
            <h2 id="section-4" className="text-black mt-16 mb-6 scroll-mt-24">Une amélioration sensorielle et pratique</h2>
            <p className="text-gray-700 mb-6 text-justify">
                Filtrer son eau de ville, c’est aussi une question de goût et de confort. Beaucoup de consommateurs notent la différence dès le premier verre : une eau filtrée est plus claire, plus douce et plus agréable, tant pour boire que pour cuisiner ou préparer le café. Sans le goût du chlore, les aliments retrouvent leurs saveurs naturelles et les appareils ménagers, tels que les bouilloires et les machines à café, restent exempts de dépôts calcaires. Cette amélioration sensorielle s’accompagne d’un bénéfice pratique : en optimisant la qualité de l’eau, on réduit l’encrassement des appareils et on prolonge leur durée de vie, ce qui représente une économie à long terme.
            </p>

            {/* Section 5 */}
            <h2 id="section-5" className="text-black mt-16 mb-6 scroll-mt-24">Un choix de vie écologique et responsable</h2>
            <p className="text-gray-700 mb-6 text-justify">
                Sur le plan environnemental, la filtration domestique réduit également la dépendance à l’eau embouteillée. Au Québec, des milliers de bouteilles de plastique finissent chaque jour dans les sites d’enfouissement ou les cours d’eau, malgré le recyclage. En optant pour un système de filtration résidentiel, vous contribuez à diminuer les déchets plastiques tout en économisant sur le coût de l’eau achetée. C’est un geste à la fois écologique et économique, qui s’inscrit parfaitement dans une démarche durable. De plus, les filtres de qualité certifiés remplissent des standards rigoureux et nécessitent peu d’entretien, rendant cette solution pratique et accessible à tous les foyers.
            </p>

            {/* Section 6 */}
            <h2 id="section-6" className="text-black mt-16 mb-6 scroll-mt-24">La tranquillité d'esprit d'une installation sécuritaire</h2>
            <p className="text-gray-700 mb-6 text-justify">
                En définitive, même l’eau de ville nécessite une filtration complémentaire si l’on souhaite atteindre un niveau de qualité optimal. Une eau claire, sans goût de chlore ni traces métalliques, procure non seulement une meilleure expérience de consommation, mais également une tranquillité d’esprit. Bricareau offre des systèmes performants, adaptés à la qualité locale de l’eau et aux besoins de chaque ménage. Faire installer un filtre, c’est investir dans la santé de votre famille, la durabilité de votre maison et le respect de l’environnement. Car une eau filtrée, c’est plus qu’un confort : c’est la certitude de boire une eau aussi pure qu’elle devrait naturellement l’être.
            </p>
        </BlogLayout>
    );
};

export default EauDeVilleBesoinFiltration;
