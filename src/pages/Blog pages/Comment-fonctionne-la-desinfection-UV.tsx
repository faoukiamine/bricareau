import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import uvImage from "@/assets/lampe-uv-fonctionnement.png";

const FonctionnementDesinfectionUV = () => {
    useEffect(() => {
        document.title = "Comment fonctionne la désinfection UV ? | Guide complet | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Comprendre la science de la désinfection UV pour l'eau. Guide complet sur les rayons ultraviolets, la neutralisation des bactéries et la protection de votre eau potable au Québec.");
        }
    }, []);

    const tocItems = [
        { id: "section-1", title: "Une solution efficace et écologique" },
        { id: "section-2", title: "Le fonctionnement d'un système UV" },
        { id: "section-3", title: "Une efficacité prouvée contre les pathogènes" },
        { id: "section-4", title: "Conditions optimales et entretien" },
        { id: "section-5", title: "Un choix écologique et durable" },
        { id: "section-6", title: "Investir dans la fiabilité de votre eau" }
    ];

    return (
        <BlogLayout
            title="Comment fonctionne la désinfection UV ?"
            headerImage={uvImage}
            tocItems={tocItems}
        >
            {/* Section 1 */}
            <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Une solution efficace et écologique</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                La désinfection par ultraviolet (UV) est aujourd'hui l'une des solutions les plus efficaces, écologiques et sécuritaires pour garantir une eau potable de qualité au Québec. Contrairement aux méthodes chimiques, elle ne nécessite aucun ajout de chlore, de sel ou d'agent désinfectant, ce qui en fait une technologie respectueuse à la fois de l'environnement et de la santé. Très prisée pour le traitement de l'eau des puits résidentiels, elle neutralise rapidement les bactéries, virus et micro-organismes pathogènes qui peuvent compromettre la qualité de l'eau, tout en préservant son goût et sa composition naturelle. Cette approche moderne apporte une tranquillité d'esprit aux familles souhaitant consommer une eau pure et fiable au quotidien.
            </p>

            {/* Section 2 */}
            <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Le fonctionnement d'un système UV</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Le fonctionnement d'un système UV repose sur un principe simple : la lumière ultraviolette, émise à une longueur d'onde précise (généralement autour de 254 nanomètres), agit directement sur l'ADN des micro-organismes. En pénétrant leurs cellules, cette lumière empêche leur reproduction et les rend inoffensifs. L'eau traverse une chambre en acier inoxydable dans laquelle se trouve une lampe UV protégée par un manchon de quartz transparent. En quelques fractions de seconde, tous les agents microbiens présents sont exposés au rayonnement ultraviolet et détruits avant que l'eau ne soit distribuée dans la maison. Il s'agit d'une méthode instantanée et sans résidus, parfaitement adaptée pour le traitement complet des installations domestiques.
            </p>

            {/* Section 3 */}
            <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Une efficacité prouvée contre les pathogènes</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                La grande force du système UV réside dans sa capacité à éliminer efficacement la majorité des pathogènes connus, notamment les bactéries comme E. coli, la salmonelle ou encore la giardia, souvent responsables de troubles gastro-intestinaux. Elle est particulièrement recommandée pour les résidences alimentées par un puits, où la qualité de l'eau peut fluctuer selon les saisons et les conditions du terrain. Contrairement au chlore, la désinfection UV ne génère ni goût ni odeur désagréable, et elle n'altère pas la minéralité naturelle de l'eau. Cela en fait une solution idéale pour les foyers souhaitant combiner sécurité sanitaire et confort gustatif. De plus, elle s'intègre facilement à d'autres systèmes de filtration, comme les filtres à sédiments ou au charbon actif, pour offrir une protection complète.
            </p>

            {/* Section 4 */}
            <h2 id="section-4" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Conditions optimales et entretien</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Cependant, pour fonctionner de manière optimale, l'eau doit d'abord être claire et exempte de particules en suspension. Les sédiments, le fer ou le manganèse peuvent réduire la transmission de la lumière UV et diminuer son efficacité. C'est pourquoi un système UV s'accompagne presque toujours d'un préfiltrage, assurant que la lumière atteigne pleinement les micro-organismes à traiter. L'entretien est simple : il suffit généralement de remplacer la lampe une fois par an et de nettoyer périodiquement le manchon de quartz. Ces gestes d'entretien garantissent une performance constante et une désinfection uniforme, avec une consommation électrique minimale équivalente à celle d'une simple ampoule domestique.
            </p>

            {/* Section 5 */}
            <h2 id="section-5" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Un choix écologique et durable</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Sur le plan écologique, la désinfection UV représente une technologie propre et durable. Elle ne produit aucun sous-produit chimique, ne rejette rien dans l'environnement et ne modifie pas l'équilibre biologique de l'eau. Elle consomme très peu d'énergie et ne nécessite aucun additif, ce qui en fait une solution responsable par rapport aux traitements chimiques traditionnels. De plus, les systèmes de désinfection UV modernes sont conçus pour durer : ils utilisent des matériaux résistants à la corrosion et une technologie de contrôle automatique qui assure un fonctionnement continu et sécuritaire. Plusieurs modèles sont même dotés d'indicateurs lumineux ou d'alarmes pour signaler la fin de vie de la lampe, garantissant une eau toujours désinfectée.
            </p>

            {/* Section 6 */}
            <h2 id="section-6" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Investir dans la fiabilité de votre eau</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Pour les particuliers québécois, adopter un système UV, c'est investir dans la fiabilité et la sécurité de l'eau potable à long terme. Que l'eau provienne d'un puits artésien, d'un puits de surface ou d'une source alternative, cette technologie assure une barrière constante contre les bactéries et virus sans ajout de produits chimiques. En la combinant à un système de filtration adapté, on obtient une eau pure, claire et douce, directement au robinet. Les professionnels du traitement d'eau offrent un accompagnement complet : diagnostic, installation, entretien et remplacement annuel des lampes. En choisissant la désinfection UV, vous optez pour une solution moderne, économique et respectueuse de votre santé comme de l'environnement — un choix intelligent pour profiter d'une eau véritablement propre, jour après jour.
            </p>
        </BlogLayout>
    );
};

export default FonctionnementDesinfectionUV;
