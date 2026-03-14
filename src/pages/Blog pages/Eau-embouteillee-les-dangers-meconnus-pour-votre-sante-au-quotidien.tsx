import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import heroImg from "@/assets/258.jpg";
export { heroImg };

const EauEmbouteilleeDangers = () => {
    useEffect(() => {
        document.title = "Eau embouteillée : les dangers méconnus pour votre santé au quotidien | Bricareau";
    }, []);

    const tocItems = [
        { id: "illusion-purete", title: "L'illusion de la pureté par le marketing" },
        { id: "plastiques-bpa", title: "La menace du plastique et des composés chimiques" },
        { id: "microplastiques", title: "Le danger invisible : les microplastiques" },
        { id: "cout-environnemental", title: "Un coût environnemental majeur" },
        { id: "impact-economique", title: "Impact économique sur votre famille" },
        { id: "solution-durable", title: "Opter pour une solution durable à domicile" }
    ];

    return (
        <BlogLayout
            title="Eau embouteillée : les dangers méconnus pour votre santé au quotidien"
            headerImage={heroImg}
            tocItems={tocItems}
        >
            <section id="illusion-purete" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>L'illusion de la pureté par le marketing</h2>
                <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    L’eau embouteillée occupe une place importante dans le quotidien de nombreuses familles québécoises, souvent perçue comme une option plus « pure » et sécuritaire que l’eau du robinet. Pourtant, derrière son image de fraîcheur et de propreté, se cachent plusieurs réalités moins reluisantes pour la santé et l’environnement. De plus en plus d’études démontrent que les eaux embouteillées contiennent, dans bien des cas, des résidus chimiques, des microplastiques et des polluants comparables à ceux présents dans l’eau municipale. Dans un contexte où la santé et la durabilité sont au cœur des préoccupations, comprendre les véritables enjeux liés à la consommation d’eau embouteillée devient essentiel pour faire un choix éclairé.
                </p>
            </section>

            <section id="plastiques-bpa" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>La menace du plastique et des composés chimiques</h2>
                <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    Contrairement à ce que suggèrent les campagnes marketing, l’eau embouteillée n’est pas systématiquement plus pure que l’eau du robinet. Au Québec, l’eau municipale est soumise à des contrôles sanitaires rigoureux et réguliers, souvent plus fréquents que ceux exigés pour l’eau embouteillée. Cette dernière peut provenir d’une source naturelle, mais aussi du réseau public filtré puis reconditionné dans des bouteilles en plastique. Or, le plastique utilisé – principalement du PET – peut libérer des composés chimiques comme le bisphénol A (BPA) ou d’autres perturbateurs endocriniens lorsque l’eau est exposée à la chaleur ou à la lumière. Ces substances peuvent interférer avec le système hormonal et présentent des risques plus élevés pour les femmes enceintes, les enfants et les personnes sensibles.
                </p>
            </section>

            <section id="microplastiques" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>Le danger invisible : les microplastiques</h2>
                <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    L’un des problèmes les plus préoccupants reste la présence de microplastiques dans l’eau embouteillée. Selon plusieurs analyses indépendantes, une grande proportion des bouteilles testées contiennent des particules microscopiques issues de la dégradation du plastique. Ces fragments invisibles peuvent pénétrer dans le corps humain et s’accumuler dans certains organes, entraînant à long terme des effets encore mal connus sur la santé. De plus, certaines marques contiennent des traces de métaux lourds, de chlore, de résidus pharmaceutiques ou de substances utilisées pour la désinfection. Ce constat remet sérieusement en question la réputation de « pureté » souvent associée à l’eau en bouteille et souligne la nécessité d’envisager des solutions de traitement d’eau plus fiables et durables à domicile.
                </p>
            </section>

            <section id="cout-environnemental" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>Un coût environnemental majeur</h2>
                <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    Outre les effets potentiels sur la santé, la consommation d’eau embouteillée a un coût environnemental majeur. Au Québec comme ailleurs, des millions de bouteilles en plastique sont utilisées chaque jour, et seule une fraction d’entre elles est réellement recyclée. Le reste finit dans les dépotoirs ou les cours d’eau, contribuant à la pollution plastique mondiale. La fabrication, le transport et la distribution de ces bouteilles requièrent aussi une grande quantité d’énergie, d’eau et de combustibles fossiles. Ainsi, choisir une eau embouteillée en pensant protéger sa santé revient souvent à générer un impact environnemental négatif notable. Face à cela, les systèmes de traitement d’eau résidentiels – tels que l’osmose inverse ou les filtres à charbon actif – offrent une solution beaucoup plus écologique et économique.
                </p>
            </section>

            <section id="impact-economique" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>Impact économique sur votre famille</h2>
                <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    Sur le plan économique, la différence entre l’eau embouteillée et l’eau filtrée à la maison est considérable. Pour une famille moyenne, les dépenses liées à l’achat d’eau en bouteille peuvent représenter plusieurs centaines de dollars par an, sans compter le transport et le recyclage. En comparaison, un système de traitement d’eau moderne, une fois installé, ne demande que très peu d’entretien et permet de fournir une eau pure, fraîche et sans contaminants directement au robinet. Les systèmes comme l’osmose inverse résidentiel filtrent jusqu’à 99 % des impuretés, y compris les nitrates, le plomb, le chlore, les microplastiques et certains virus. Ils garantissent une eau plus saine tout en éliminant la dépendance au plastique à usage unique, un geste concret pour la planète et pour la santé des ménages québécois.
                </p>
            </section>

            <section id="solution-durable" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>Opter pour une solution durable à domicile</h2>
                <p className="text-lg leading-relaxed text-gray-700 text-justify">
                    En définitive, choisir un système de traitement d’eau à la maison plutôt que l’eau embouteillée, c’est opter pour une solution à la fois écologique, économique et durable. Vous bénéficiez d’une eau pure et sécuritaire pour toute la famille, sans craindre la migration de composés plastiques ou les contaminants invisibles. Au Québec, des professionnels du traitement d’eau proposent des services complets : analyse de l’eau, installation d’un système d’osmose inverse ou d’un filtre adapté, et entretien régulier pour une performance optimale. En investissant dans un système de purification domestique, vous remplacez l’incertitude des bouteilles plastiques par la certitude d’une eau saine, claire et respectueuse de votre santé comme de l’environnement.
                </p>
            </section>
        </BlogLayout>
    );
};

export default EauEmbouteilleeDangers;
