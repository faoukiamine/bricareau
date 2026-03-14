import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import heroImg from "@/assets/eau-fer-manganèse.jpg";

const FerFerreuxVsFerFerrique = () => {
    useEffect(() => {
        document.title = "Fer ferreux vs Fer ferrique : Quelle différence pour le filtre ? | Bricareau";
    }, []);

    const tocItems = [
        { id: "introduction", title: "Le problème du fer dans l'eau" },
        { id: "fer-ferreux", title: "Le fer ferreux : invisible mais bien présent" },
        { id: "fer-ferrique", title: "Le fer ferrique : des particules visibles" },
        { id: "traitement", title: "Traiter efficacement le fer ferreux" },
        { id: "analyse", title: "L'importance de l'analyse d'eau" },
        { id: "conclusion", title: "Une solution sur mesure pour votre confort" }
    ];

    return (
        <BlogLayout
            title="Fer ferreux vs Fer ferrique : Quelle différence pour le filtre ?"
            headerImage={heroImg}
            tocItems={tocItems}
        >
            <section id="introduction" className="mb-12">
                <h2 className="text-slate-900 mb-6" style={{ }}>Le problème du fer dans l'eau</h2>
                <p className="text-gray-700 text-justify">
                    Le fer dans l'eau des puits privés est un problème courant au Québec, particulièrement dans les régions au sol riche en minéraux. Il se manifeste souvent par une coloration jaunâtre, un goût métallique désagréable et des taches brun-orange sur la vaisselle, les appareils sanitaires ou le linge. Cependant, peu de gens savent qu'il existe deux types distincts de fer dans l'eau : le fer ferreux (Fe²⁺) et le fer ferrique (Fe³⁺). Cette différence n'est pas simplement chimique : elle influence directement le choix et l'efficacité du système de filtration. Pour obtenir une eau claire, sans odeur et sans dépôts, il est donc crucial de comprendre la distinction entre ces deux formes et d'adapter le traitement en conséquence.
                </p>
            </section>

            <section id="fer-ferreux" className="mb-12">
                <h2 className="text-slate-900 mb-6" style={{ }}>Le fer ferreux : invisible mais bien présent</h2>
                <p className="text-gray-700 text-justify">
                    Le fer ferreux, aussi appelé « fer dissous », est invisible à l'œil nu. Présent sous forme soluble, il passe sans difficulté à travers les filtres mécaniques classiques car il est complètement dissous dans l'eau. Ce type de fer ne se révèle généralement qu'après avoir été exposé à l'air : lors de l'oxydation, il se transforme alors en fer ferrique et forme ces particules brunâtres caractéristiques qui tachent les surfaces. Une eau de puits peut ainsi sembler limpide à la sortie du robinet, puis se troubler quelques minutes plus tard dans un verre ou un réservoir. Le fer ferreux est souvent associé à un pH faible et à des conditions réductrices typiques des nappes phréatiques profondes.
                </p>
            </section>

            <section id="fer-ferrique" className="mb-12">
                <h2 className="text-slate-900 mb-6" style={{ }}>Le fer ferrique : des particules visibles</h2>
                <p className="text-gray-700 text-justify">
                    Le fer ferrique, quant à lui, est déjà oxydé. Il se présente sous forme de particules solides que l'on peut voir à l'œil nu. Ce fer précipité rend l'eau trouble, parfois brunâtre, et se dépose facilement sur les surfaces. Contrairement au fer ferreux, il peut être éliminé plus simplement par filtration mécanique, à l'aide d'un filtre à sédiments, d'un filtre à média catalytique ou d'un système spécialisé comme le Birm ou le Filox. Ces solutions capturent efficacement les particules en suspension et retiennent le fer ferrique avant qu'il ne parvienne dans la plomberie ou les appareils ménagers. Toutefois, sans un diagnostic adéquat, utiliser le mauvais type de filtre peut s'avérer inefficace et engendrer des coûts inutiles.
                </p>
            </section>

            <section id="traitement" className="mb-12">
                <h2 className="text-slate-900 mb-6" style={{ }}>Traiter efficacement le fer ferreux</h2>
                <p className="text-gray-700 text-justify">
                    Pour traiter correctement le fer ferreux, il est nécessaire d'ajouter une étape d'oxydation préalable. Ce processus consiste à convertir le fer soluble en fer insoluble pour qu'il devienne filtrable. L'oxydation peut se faire à l'air, au chlore, au peroxyde d'hydrogène, ou encore en utilisant un média catalytique comme le Greensand ou le Katalox Light, qui accélèrent la réaction chimique. Une fois le fer oxydé, un filtre de rétention mécanique final termine le travail en éliminant complètement les particules. C'est une combinaison particulièrement efficace dans les régions où le fer ferreux est présent en grande quantité, et elle permet d'obtenir une eau claire et sans dépôt, tout en limitant les nécessités d'entretien.
                </p>
            </section>

            <section id="analyse" className="mb-12">
                <h2 className="text-slate-900 mb-6" style={{ }}>L'importance de l'analyse d'eau</h2>
                <p className="text-gray-700 text-justify">
                    Faire analyser votre eau demeure la première étape avant de choisir une solution. Un rapport d’analyse permettra de connaître non seulement la concentration totale de fer, mais aussi son état chimique, le pH, la dureté et la présence éventuelle de manganèse ou de soufre, qui influencent également le traitement. Une entreprise spécialisée en traitement d'eau pourra ensuite recommander un système adapté : filtre catalytique, oxydation à air libre, traitement au chlore, ou encore combinaison avec un adoucisseur si le fer s'accompagne de minéraux durs. Dans certains cas, un dispositif d'entretien automatique permettra de régénérer le média filtrant selon la fréquence optimale, prolongeant ainsi l'efficacité du système sans intervention constante du propriétaire.
                </p>
            </section>

            <section id="conclusion" className="mb-12">
                <h2 className="text-slate-900 mb-6" style={{ }}>Une solution sur mesure pour votre confort</h2>
                <p className="text-gray-700 text-justify">
                    En définitive, la différence entre fer ferreux et fer ferrique est loin d'être anodine : elle détermine le type de filtration, la complexité de l'installation et la qualité finale de l'eau que vous consommez. Une mauvaise identification du type de fer peut rendre votre filtre complètement inefficace, tandis qu'un diagnostic précis permet de mettre en place une solution sur mesure, performante et durable. Investir dans un système de filtration adapté, c'est préserver la durabilité de votre plomberie, la performance de vos appareils et le confort de votre famille. En confiant l'analyse et l'installation à des experts du traitement d'eau, vous vous assurez une eau claire, sans goût métallique et exempte de taches, jour après jour.
                </p>
            </section>
        </BlogLayout>
    );
};

export default FerFerreuxVsFerFerrique;
