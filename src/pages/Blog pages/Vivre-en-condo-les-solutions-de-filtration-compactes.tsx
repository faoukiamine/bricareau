import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import heroImg from "@/assets/hero-image.jpg";

const VivreCondoFiltrationCompacte = () => {
    useEffect(() => {
        document.title = "Vivre en condo : Les solutions de filtration compactes | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez comment les solutions de filtration compactes, comme les filtres sous évier, offrent une eau saine et pure en condo sans travaux majeurs.");
        }
    }, []);

    const tocItems = [
        { id: "section-1", title: "La qualité de l'eau en milieu urbain" },
        { id: "section-2", title: "Filtres sous évier : discrets et performants" },
        { id: "section-3", title: "Une installation rapide et sans tracas" },
        { id: "section-4", title: "Les options de comptoir pour locataires et nomades" },
        { id: "section-5", title: "L'émergence des systèmes centralisés compacts" },
        { id: "section-6", title: "Choisir la solution idéale pour son condo" }
    ];

    return (
        <BlogLayout
            title="Vivre en condo : Les solutions de filtration compactes"
            headerImage={heroImg}
            tocItems={tocItems}
        >
            {/* Section 1 */}
            <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">La qualité de l'eau en milieu urbain</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Vivre en condo offre confort, modernité et praticité, mais lorsqu’il s’agit de la qualité de l’eau, plusieurs résidents découvrent qu’ils n’ont pas le même contrôle qu’en maison. L’eau fournie par les réseaux municipaux québécois est généralement potable, mais elle peut contenir du chlore, des sédiments, du calcaire ou même des traces de contaminants qui altèrent son goût et sa pureté. Dans un environnement de copropriété, installer un système de traitement complet est souvent impossible faute d’espace ou d’accès à la tuyauterie principale. C’est pourquoi les solutions de filtration compactes gagnent en popularité : elles offrent une eau plus saine et plus agréable à consommer, sans grands travaux ni engagement structurel.
            </p>

            {/* Section 2 */}
            <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Filtres sous évier : discrets et performants</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Les systèmes de filtration compacts pour condos se déclinent en plusieurs modèles selon le besoin et l’espace disponible. Les filtres sous évier en sont un excellent exemple : discrets, faciles à installer et très efficaces, ils permettent d’éliminer le chlore, les pesticides, les résidus de plomb ou les microplastiques. Certains modèles à cartouches multiples combinent différentes technologies – charbon actif, microfiltration ou membranes sélectives – pour offrir une eau d’une grande pureté directement au robinet de la cuisine. Pour ceux qui souhaitent aller plus loin, les systèmes d’osmose inverse constituent une solution haut de gamme. Ils capturent jusqu’à 99 % des contaminants, y compris les nitrates, métaux lourds et virus, le tout dans un format compact qui s’intègre parfaitement sous un comptoir.
            </p>

            {/* Section 3 */}
            <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Une installation rapide et sans tracas</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                L’installation d’un système compact ne demande pas de gros aménagements : elle peut être réalisée en une heure par un technicien certifié. Ce type d’équipement convient parfaitement aux copropriétaires qui ne veulent ni modifier la plomberie commune ni entreprendre de travaux permanents. L’entretien est minimal : remplacer les cartouches filtrantes tous les 6 à 12 mois selon la consommation suffit à maintenir la performance. C’est une approche simple, moderne et pensée pour le mode de vie urbain où chaque minute et chaque mètre carré comptent.
            </p>

            {/* Section 4 */}
            <h2 id="section-4" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Les options de comptoir pour locataires et nomades</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Outre les filtres sous évier, d’autres options compactes existent également, comme les filtres de comptoir haute performance. Cette solution sans installation convient aux locataires ou copropriétaires qui ne souhaitent pas toucher à la tuyauterie. Certaines unités de comptoir utilisent la même technologie que les systèmes professionnels, tout en occupant l’espace d’une simple cafetière. Ce type d’appareil convient parfaitement à un mode de vie flexible, et son coût initial est souvent amorti sur les économies réalisées à long terme, notamment en réduisant l’achat d’eau embouteillée. L’impact écologique est également positif : moins de plastique à usage unique, moins de transport, et donc une empreinte environnementale nettement réduite.
            </p>

            {/* Section 5 */}
            <h2 id="section-5" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">L'émergence des systèmes centralisés compacts</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Il faut aussi mentionner les systèmes centralisés compacts, de plus en plus recherchés dans les immeubles récents. Certains condos neufs installent désormais des unités de traitement de l’eau à même la conduite principale du logement. Ce type d’installation traite toute l’eau, non seulement pour la consommation, mais aussi pour le bain, la douche et le lave-linge. Les résidents profitent ainsi d’une eau filtrée, plus douce pour la peau et les appareils, sans avoir à gérer plusieurs filtres séparés. Ces technologies modernes, combinant filtration et adoucissement dans un boîtier de taille réduite, s’adaptent parfaitement aux besoins des milieux urbains où optimisation et efficacité sont de mise.
            </p>

            {/* Section 6 */}
            <h2 id="section-6" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Choisir la solution idéale pour son condo</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Choisir la bonne solution de filtration pour un condo dépend principalement de trois éléments : la qualité de l’eau, l’espace disponible et le niveau de performance recherché. Une évaluation rapide par l’un de nos techniciens en traitement d’eau permet de recommander l’équipement le mieux adapté, tout en respectant les règlements de copropriété. Que ce soit pour améliorer le goût de l’eau, réduire les impuretés ou éliminer les contaminants, les technologies actuelles offrent des systèmes discrets, esthétiques et durables. En adoptant une solution de filtration compacte, vous faites le choix d’un confort supérieur et d’une tranquillité d’esprit au quotidien, tout en valorisant votre unité de condo. Une petite installation, mais un grand pas vers une eau saine, pure et sans compromis.
            </p>
        </BlogLayout>
    );
};

export default VivreCondoFiltrationCompacte;
