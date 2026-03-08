import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import tachesOrangeImg from "@/assets/taches-orange-evier.png";

const TachesOrangeDansLevier = () => {
    useEffect(() => {
        document.title = "Taches orange dans l'évier : Le guide complet pour éliminer le fer de votre eau | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez comment éliminer définitivement les taches orange de votre évier. Guide expert sur le fer dans l'eau : causes, tests et solutions de filtration professionnelles au Québec.");
        }
    }, []);

    const tocItems = [
        {
            "id": "section-1",
            "title": "Comprendre l'origine des taches de fer"
        },
        {
            "id": "section-2",
            "title": "Pourquoi le problème est si courant au Québec"
        },
        {
            "id": "section-3",
            "title": "Les signes révélateurs d'une eau ferreuse"
        },
        {
            "id": "section-4",
            "title": "Faire analyser son eau"
        },
        {
            "id": "section-5",
            "title": "Les solutions pour éliminer le fer"
        },
        {
            "id": "section-6",
            "title": "Entretien et prévention"
        },
        {
            "id": "section-7",
            "title": "Astuce pour nettoyer les taches existantes"
        },
        {
            "id": "section-8",
            "title": "L'importance de faire appel à un professionnel"
        },
        {
            "id": "section-9",
            "title": "Conclusion"
        }
    ];

    return (
        <BlogLayout
            title="Taches orange dans l'évier : Le guide complet pour éliminer le fer"
            headerImage={tachesOrangeImg}
            tocItems={tocItems}
        >
            {/* Introduction */}
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Vous avez remarqué des taches orange ou brunâtres dans votre évier, votre baignoire ou autour de vos robinets ? Ces marques tenaces sont souvent le signe d'un excès de fer dans l'eau. Bien que ce problème soit courant dans plusieurs régions du Québec, surtout en milieu rural où l'eau provient d'un puits privé, il n'en demeure pas moins frustrant et inesthétique. Heureusement, il existe des solutions efficaces et durables pour y remédier. Ce guide complet vous aidera à comprendre les causes de ce phénomène et les meilleures façons d'y mettre fin.
            </p>

            {/* Section 1 */}
            <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Comprendre l'origine des taches de fer</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Le fer est un élément naturellement présent dans le sol et les roches. Lorsque l'eau souterraine circule à travers ces couches géologiques, elle dissout une partie du fer, ce qui explique sa présence dans de nombreux puits résidentiels. En soi, le fer n'est pas nocif pour la santé aux concentrations typiques retrouvées dans l'eau potable, mais il provoque plusieurs désagréments domestiques.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                Il existe deux formes principales de fer dans l'eau :
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li><strong>Le fer ferreux (Fe2+)</strong>, dissous et invisible à l'œil nu. L'eau semble claire au robinet, mais le fer s'oxyde en contact avec l'air et forme des dépôts orangés.</li>
                <li><strong>Le fer ferrique (Fe3+)</strong>, déjà oxydé. Il est visible sous forme de particules solides, donnant à l'eau un aspect trouble ou brunâtre.</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Ces deux types de fer entraînent des taches sur la porcelaine, la vaisselle et les tissus, tout en laissant un goût métallique désagréable à l'eau.
            </p>

            {/* Section 2 */}
            <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Pourquoi le problème est si courant au Québec</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                De nombreuses régions du Québec comptent sur des nappes phréatiques riches en minéraux. Dans la province, plusieurs résidences — notamment en Montérégie, en Estrie, au Saguenay—Lac-Saint-Jean ou encore dans Lanaudière — sont alimentées par des puits privés. Ces puits n'ont pas toujours de système de traitement adapté, ce qui permet au fer et au manganèse (autre métal souvent associé) de s'accumuler.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Les municipalités utilisant de l'eau de surface ont parfois moins de problèmes de fer, car l'eau est déjà oxygénée et traitée avant distribution. Cependant, même en ville, des conduites en acier peuvent relâcher des particules de rouille qui finissent dans les robinets.
            </p>

            {/* Section 3 */}
            <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Les signes révélateurs d'une eau ferreuse</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                Avant de songer à corriger le problème, il est essentiel d'en confirmer la cause. Voici quelques signes typiques :
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li>Taches orange ou brunâtres sur les lavabos, baignoires et cuvettes.</li>
                <li>Dépôts durs semblables à de la rouille sur la robinetterie.</li>
                <li>Eau au goût métallique ou au léger goût de sang.</li>
                <li>Linge blanc qui jaunit après le lavage.</li>
                <li>Accumulation de boue ferrique dans le chauffe-eau ou la pompe à pression.</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Ces indices indiquent qu'il est temps d'analyser votre eau pour mesurer la concentration de fer.
            </p>

            {/* Section 4 */}
            <h2 id="section-4" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Faire analyser son eau : une étape cruciale</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Un test d'eau effectué par un laboratoire certifié au Québec permet de connaître non seulement la concentration de fer, mais aussi le pH, la dureté et la présence d'autres minéraux comme le manganèse ou le soufre. Ces paramètres influencent le choix du bon système de traitement.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                La norme québécoise recommande une teneur maximale en fer d'environ <strong>0,3 mg/L</strong> pour éviter les taches et le goût indésirable. Si votre test révèle une valeur supérieure, un traitement spécifique s'impose.
            </p>

            {/* Section 5 */}
            <h2 id="section-5" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Les solutions pour éliminer le fer dans l'eau</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Il n'existe pas de solution universelle, car chaque situation d'eau est unique. Voici les principales technologies utilisées au Québec.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Les adoucisseurs d'eau (échange d'ions)</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Idéals si le fer est présent sous forme ferreuse et en faible concentration (moins de 2 mg/L). En remplaçant les ions calcium, magnésium et fer par du sodium, l'adoucisseur retient ces éléments sur une résine spéciale. Cependant, pour des niveaux élevés ou du fer ferrique, cette méthode devient inefficace et risque d'encrasser la résine.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Les filtres à oxydation (aération, Greensand ou Birm)</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Ces systèmes transforment le fer dissous en particules solides avant de les filtrer. Ils requièrent souvent l'ajout d'un agent oxydant comme du chlore, du permanganate de potassium ou simplement de l'air injecté. Ces dispositifs sont très efficaces au Québec, particulièrement dans les zones rurales.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Les systèmes de filtration catalytique</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Basés sur des médias comme le Filox ou le Katalox Light, ils combinent oxydation et filtration dans un même appareil. Leur durabilité et leur efficacité à traiter des concentrations élevées en font un choix populaire pour les exploitations agricoles et les résidences avec puits artésiens.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. L'osmose inverse</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Utilisée surtout pour la consommation et la cuisine, cette technologie permet d'éliminer presque tous les contaminants, y compris le fer dissous. Elle est toutefois mieux adaptée à un point d'utilisation (robinet de cuisine) qu'à l'ensemble de la maison.
            </p>

            {/* Section 6 */}
            <h2 id="section-6" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Entretien et prévention</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                Même après l'installation d'un système de traitement, un entretien régulier demeure essentiel.
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li>Régénérez la résine de l'adoucisseur selon les recommandations du fabricant.</li>
                <li>Nettoyez les filtres ou remplacez le média filtrant au besoin.</li>
                <li>Surveillez la pression de l'eau pour éviter que les dépôts de fer s'accumulent dans les canalisations.</li>
                <li>Faites analyser votre eau une fois par an pour vérifier la performance du traitement.</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Un entretien préventif évite bien des réparations coûteuses et prolonge la durée de vie de votre système.
            </p>

            {/* Section 7 */}
            <h2 id="section-7" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Astuce pour nettoyer les taches existantes</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                En attendant d'éliminer le fer à la source, il est possible de nettoyer les taches déjà présentes :
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li>Utilisez un mélange de vinaigre blanc et de bicarbonate de soude, laissez agir quelques minutes, puis frottez doucement.</li>
                <li>Évitez les produits contenant du chlore sur la porcelaine, car ils peuvent accentuer la coloration.</li>
                <li>Pour les taches tenaces, des nettoyants acides doux formulés pour enlever la rouille peuvent être utilisés, mais toujours avec des gants et une bonne ventilation.</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Ces méthodes constituent des solutions temporaires en attendant un traitement d'eau adéquat.
            </p>

            {/* Section 8 */}
            <h2 id="section-8" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">L'importance de faire appel à un professionnel</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Chaque source d'eau est différente. Un spécialiste en traitement d'eau saura évaluer la composition chimique de votre eau et recommander le système adapté à vos besoins précis. Les entrepreneurs qualifiés au Québec connaissent bien les particularités régionales des nappes phréatiques et peuvent vous offrir une installation conforme aux normes locales.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Faire appel à un professionnel certifié, c'est garantir une eau claire, sans taches ni goût métallique, tout en protégeant vos installations et vos appareils ménagers.
            </p>

            {/* Section 9 */}
            <h2 id="section-9" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Conclusion</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Les taches orange dans l'évier ne sont pas une fatalité. Elles révèlent simplement la présence de fer — un problème courant mais tout à fait maîtrisable grâce à un diagnostic précis et à un traitement adéquat. En investissant dans un système de purification fiable, vous éviterez des heures de nettoyage et prolongerez la durée de vos équipements.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Notre mission : vous offrir une eau limpide, sans taches ni odeur, pour un confort durable jour après jour.
            </p>
        </BlogLayout>
    );
};

export default TachesOrangeDansLevier;
