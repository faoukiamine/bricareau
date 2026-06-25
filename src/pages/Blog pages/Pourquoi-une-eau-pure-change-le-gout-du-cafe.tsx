import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import heroImg from "@/assets/19533.jpg";

const EauPureGoutCafe = () => {
    useEffect(() => {
        document.title = "Pourquoi une eau pure change le goût du café ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrir pourquoi l'utilisation d'une eau pure, filtrée et équilibrée est le secret pour révéler tout l'arôme de votre café, protéger votre machine et vivre une expérience gustative raffinée.");
        }
    }, []);

    const tocItems = [
        { id: "section-1", title: "Le secret d'une extraction aromatique réussie" },
        { id: "section-2", title: "L'impact des minéraux et du chlore sur la saveur" },
        { id: "section-3", title: "Rétablir l'équilibre avec un système de traitement adapté" },
        { id: "section-4", title: "Protéger ses appareils et prolonger leur durée de vie" },
        { id: "section-5", title: "Une différence gustative saisissante au quotidien" },
        { id: "section-6", title: "Un geste de bien-être pour les amateurs de café" }
    ];

    return (
        <BlogLayout
            title="Pourquoi une eau pure change le goût du café?"
            headerImage={heroImg}
            tocItems={tocItems}
        >
            {/* Section 1 */}
            <h2 id="section-1" className="text-black mt-16 mb-6 scroll-mt-24">Le secret d'une extraction aromatique réussie</h2>
            <p className="text-gray-700 mb-6 text-justify">
                L’eau représente environ 98 % d’une tasse de café, et pourtant, beaucoup de gens sous-estiment son influence décisive sur le goût et l’arôme de leur boisson. Au Québec, où la qualité de l’eau varie considérablement d’une région à l’autre, le café que vous préparez à la maison dépend autant de votre machine que de ce qui coule de votre robinet. Une eau pure et bien équilibrée n’altère pas les arômes naturels du café ; elle les révèle. À l’inverse, une eau trop dure, trop chlorée ou contenant des métaux dissous peut produire une boisson amère, fade ou au goût métallique. Pour les amateurs de café, investir dans un système de traitement d’eau adapté, c’est bien plus qu’une question de santé : c’est le secret d’une expérience gustative raffinée.
            </p>

            {/* Section 2 */}
            <h2 id="section-2" className="text-black mt-16 mb-6 scroll-mt-24">L'impact des minéraux et du chlore sur la saveur</h2>
            <p className="text-gray-700 mb-6 text-justify">
                L’eau dure, riche en calcium et en magnésium, perturbe l’extraction des composés aromatiques du café. Ces minéraux réagissent avec les huiles naturelles des grains, modifiant la texture et la complexité du breuvage. Une eau trop douce, à l’inverse, manque de structure et produit un café plat, sans relief. Les spécialistes recommandent donc une eau équilibrée, ni trop minéralisée ni trop pure, avec un pH neutre et une très faible teneur en chlore ou en fer. Au Québec, ces paramètres sont rarement stables, particulièrement pour les foyers alimentés par un puits privé ou situés dans des secteurs où les conduites sont anciennes.
            </p>

            {/* Section 3 */}
            <h2 id="section-3" className="text-black mt-16 mb-6 scroll-mt-24">Rétablir l'équilibre avec un système de traitement adapté</h2>
            <p className="text-gray-700 mb-6 text-justify">
                C’est là qu’intervient le rôle essentiel d’un système de traitement d’eau résidentiel. Un appareil de filtration ou d’osmose inverse permet de retirer les particules indésirables, les contaminants chimiques et les excès de minéraux, puis de rétablir une composition idéale pour la préparation du café. Un bon système ne se contente pas d’adoucir l’eau : il ajuste aussi son équilibre pour favoriser une extraction parfaite des saveurs. Les résultats sont immédiats : un café plus clair, plus aromatique et plus constant d’une tasse à l’autre. Ce même principe s’applique également à la théière, à la bouilloire ou à la machine à espresso professionnelle, souvent sensibles aux dépôts minéraux.
            </p>

            {/* Section 4 */}
            <h2 id="section-4" className="text-black mt-16 mb-6 scroll-mt-24">Protéger ses appareils et prolonger leur durée de vie</h2>
            <p className="text-gray-700 mb-6 text-justify">
                Dans la cuisine, une eau pure ne profite pas qu’aux papilles. Elle préserve aussi la durabilité de vos appareils. Le calcaire et les minéraux présents dans l’eau dure s’accumulent rapidement dans les circuits internes, formant une couche blanche qui réduit la performance et augmente la consommation d’énergie. Avec le temps, cela peut abîmer les résistances, obstruer les buses et rendre les entretiens plus coûteux. En installant un système de filtration ou de traitement adapté, vous protégez votre investissement tout en maintenant la constance du goût, tasse après tasse. C’est une solution simple et écologique : moins d’entretien, moins de produits nettoyants et une plus grande longévité de vos équipements.
            </p>

            {/* Section 5 */}
            <h2 id="section-5" className="text-black mt-16 mb-6 scroll-mt-24">Une différence gustative saisissante au quotidien</h2>
            <p className="text-gray-700 mb-6 text-justify">
                Les amateurs de café filtré, de presse française ou d’espresso savent à quel point chaque détail compte. Entre deux cafés identiques, l’un fait avec une eau du robinet chlorée et l’autre avec une eau pure filtrée, la différence est saisissante. La première tasse semblera rude, avec une amertume accrue ; la seconde révélera les notes florales, fruitées ou chocolatées que le torréfacteur a voulu transmettre. C’est une question de respect du café, mais aussi de plaisir quotidien. Tester la qualité de son eau et la corriger grâce à un professionnel du traitement d’eau, c’est s’assurer que chaque gorgée reflète toute la richesse du grain.
            </p>

            {/* Section 6 */}
            <h2 id="section-6" className="text-black mt-16 mb-6 scroll-mt-24">Un geste de bien-être pour les amateurs de café</h2>
            <p className="text-gray-700 mb-6 text-justify">
                Choisir une eau pure pour préparer son café, c’est donc bien plus qu’un raffinement de passionné : c’est un geste de bien-être, de performance et de durabilité. Pour les particuliers québécois, installer un système de filtration adapté signifie dire adieu aux goûts indésirables, protéger la machine et savourer le café tel qu’il a été pensé. Chez Bricareau, nous aidons chaque foyer à trouver la solution idéale selon sa source d’eau, qu’il s’agisse d’un puits, d’un réseau municipal ou d’une eau naturellement dure. Offrez-vous le vrai goût du café : celui que seule une eau pure peut révéler.
            </p>
        </BlogLayout>
    );
};

export default EauPureGoutCafe;
