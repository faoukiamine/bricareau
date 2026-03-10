import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import heroImg from "@/assets/24835.jpg";

const VraiCoutEauEmbouteillee = () => {
    useEffect(() => {
        document.title = "Le vrai coût de l'eau embouteillée : Calculez vos économies | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez pourquoi abandonner l'eau embouteillée au profit d'un système de traitement d'eau domestique est un choix pratique, économique et écologique pour votre famille.");
        }
    }, []);

    const tocItems = [
        { id: "section-1", title: "Une dépense discrète et surprenante" },
        { id: "section-2", title: "Le décalage économique avec un système de filtration" },
        { id: "section-3", title: "Une empreinte écologique considérable" },
        { id: "section-4", title: "L’autonomie grâce aux nouvelles technologies" },
        { id: "section-5", title: "Finis les oublis et le transport pesant !" },
        { id: "section-6", title: "Un investissement rentable et libérateur" }
    ];

    return (
        <BlogLayout
            title="Le vrai coût de l'eau embouteillée : Calculez vos économies"
            headerImage={heroImg}
            tocItems={tocItems}
        >
            {/* Section 1 */}
            <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Une dépense discrète et surprenante</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                L’eau embouteillée est devenue pour beaucoup une habitude quotidienne, perçue comme une solution pratique et plus pure que celle du robinet. Pourtant, son coût réel – financier et environnemental – mérite réflexion. Si l’on additionne les bouteilles achetées pour la maison, le travail et les sorties, une famille québécoise peut consommer plusieurs centaines, voire des milliers de litres d’eau en plastique par an. Chaque bouteille de 500 ml vendue entre 0,50 $ et 1,50 $ finit par représenter une dépense annuelle surprenante. Selon les calculs de nombreux consommateurs consciencieux, une famille de quatre personnes qui boit chacun deux bouteilles par jour dépense entre 1 500 $ et 2 000 $ par année uniquement en eau embouteillée.
            </p>

            {/* Section 2 */}
            <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Le décalage économique avec un système de filtration</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Ce chiffre prend tout son sens lorsqu’on le compare au coût d’un système domestique de filtration ou de traitement d’eau. Une solution de traitement complète, incluant un filtre au charbon, un adoucisseur et un système d’ultrafiltration, représente un investissement initial, mais son coût d’exploitation annuel ne dépasse rarement quelques dizaines de dollars, soit le prix du remplacement des cartouches ou de l’entretien. En d’autres termes, dès la première année, un foyer peut déjà réduire ses dépenses de plus de 80 %. Au bout de cinq ans, les économies cumulées dépassent plusieurs milliers de dollars – tout en éliminant les tracas de transport, de recyclage et de stockage que causent les caisses d’eau embouteillée.
            </p>

            {/* Section 3 */}
            <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Une empreinte écologique considérable</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Au-delà du coût, l’eau embouteillée soulève une autre question majeure : son empreinte écologique. L’industrie du plastique produit des milliards de bouteilles chaque année, dont une part importante finit dans les sites d’enfouissement ou les milieux aquatiques. Même si certaines entreprises mettent en avant le recyclage, le transport, la production et le traitement des déchets engendrent une forte consommation énergétique. À l’inverse, un système de traitement d’eau à la maison réduit considérablement votre empreinte carbone. En buvant une eau locale, purifiée sur place, vous éliminez l’emballage et réduisez le besoin de transport – un geste à la fois économique et écologique.
            </p>

            {/* Section 4 */}
            <h2 id="section-4" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">L’autonomie grâce aux nouvelles technologies</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Ce virage vers l’autonomie en eau est favorisé par des technologies de plus en plus performantes et abordables. Les systèmes modernes de filtration, de l’osmose inverse aux filtres au charbon actif, permettent d’obtenir une eau potable d’une qualité comparable, voire supérieure à celle des grandes marques d’eau embouteillée. De plus, les appareils sont compacts, faciles d’entretien et s’intègrent discrètement sous l’évier ou dans la salle mécanique. Certains modèles offrent même une analyse en temps réel, rassurant les utilisateurs sur la qualité de l’eau consommée. Ainsi, plutôt que de payer pour un produit éphémère et polluant, les ménages peuvent investir dans une solution durable qui valorise leur confort à long terme.
            </p>

            {/* Section 5 */}
            <h2 id="section-5" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Finis les oublis et le transport pesant !</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Il faut aussi considérer la commodité : l’eau traitée à domicile est disponible à volonté, sans dépendre d’approvisionnements ni d’emballages jetables. Fini les oublis au supermarché, le transport encombrant ou la recherche de bacs de recyclage pleins. En plus d’un meilleur goût, cette autonomie contribue à développer une culture de responsabilité et de bien-être. Pour une entreprise spécialisée en traitement d’eau, accompagner les familles dans cette transition, c’est offrir plus qu’un service : c’est proposer un mode de vie pratique, économique et durable. Le calculateur d’économies devient alors un outil concret pour visualiser les avantages financiers et écologiques du changement.
            </p>

            {/* Section 6 */}
            <h2 id="section-6" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Un investissement rentable et libérateur</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                L’eau embouteillée, autrefois symbole de pureté, devient aujourd’hui un luxe inutile dès qu’on réalise l’impact cumulatif de sa consommation. En choisissant d’investir dans un système de traitement d’eau domestique, les particuliers québécois font un choix intelligent, durable et économique. Le calcul est simple : moins de dépenses annuelles, moins de déchets plastiques et plus de liberté. En quelques mois, l’investissement initial se transforme en économies tangibles et en satisfaction quotidienne. Chez Bricareau, nous aidons chaque foyer à évaluer ses besoins, calculer ses économies et profiter d’une eau pure, directement du robinet – sans compromis sur la qualité, la sécurité ni le goût.
            </p>
        </BlogLayout>
    );
};

export default VraiCoutEauEmbouteillee;
