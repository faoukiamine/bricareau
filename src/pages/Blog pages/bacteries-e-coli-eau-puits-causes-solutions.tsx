import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import bacteriesEColiImg from "@/assets/coliform_bacteria.jpg";

const BacteriesEColiPuits = () => {
    useEffect(() => {
        document.title = "Bactéries E. coli dans l'eau de puits : Causes et Solutions | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Votre test d'eau révèle des bactéries E. coli ou coliformes ? Découvrez les causes de contamination fécale et les solutions immédiates de désinfection par UV.");
        }
    }, []);

    const tocItems = [
        {
            "id": "section-1",
            "title": "Qu'est-ce que l'E. coli et comment est-elle arrivée là ?"
        },
        {
            "id": "section-2",
            "title": "Les risques pour la santé"
        },
        {
            "id": "section-3",
            "title": "Analyse d'eau : Quand et comment tester ?"
        },
        {
            "id": "section-4",
            "title": "Votre test est positif : Les 3 étapes d'urgence"
        },
        {
            "id": "section-5",
            "title": "Les solutions permanentes"
        },
        {
            "id": "section-6",
            "title": "Prévention : Protéger votre puits"
        },
        {
            "id": "section-7",
            "title": "Conclusion"
        }
    ];

    return (
        <BlogLayout
            title="Bactéries E. coli dans l'eau de puits : causes et solutions"
            headerImage={bacteriesEColiImg}
            tocItems={tocItems}
        >
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Pour des milliers de familles québécoises, posséder un puits artésien ou un puits de surface est synonyme d'indépendance et de pureté. On imagine une eau filtrée par les profondeurs du bouclier canadien, fraîche et intouchable. Pourtant, chaque année, des centaines d'avis de « bouillir l'eau » sont émis dans les zones rurales du Québec, de la Beauce aux Laurentides.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Le coupable ? La bactérie <strong>Escherichia coli (E. coli)</strong>.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Sa présence dans votre eau n'est pas seulement un désagrément technique : c'est un signal d'alarme environnemental et sanitaire. Que faire si votre dernier rapport d'analyse indique une contamination ? Comment protéger vos enfants et vos aînés ? Et surtout, comment s'assurer que cela ne se reproduise plus jamais ?
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Voici tout ce que vous devez savoir pour reprendre le contrôle de votre eau.
            </p>

            <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Qu'est-ce que l'E. coli et comment est-elle arrivée là ?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                E. coli est une bactérie qui vit normalement dans les intestins des humains et des animaux à sang chaud. En soi, la plupart des souches sont inoffensives, mais leur présence dans un puits est ce qu'on appelle un « indicateur de contamination fécale ».
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Le chemin de la contamination</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                Si E. coli est dans votre puits, cela signifie que des matières fécales (humaines ou animales) ont trouvé un chemin jusqu'à votre source d'eau potable. Au Québec, les causes les plus fréquentes sont :
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li><strong>Le ruissellement de surface :</strong> Lors de la fonte des neiges ou de pluies torrentielles (de plus en plus fréquentes avec les changements climatiques), l'eau lave les champs fertilisés au fumier ou les excréments d'animaux sauvages et s'infiltre dans un puits mal scellé.</li>
                <li><strong>Une fosse septique défectueuse :</strong> Si votre système de traitement des eaux usées (ou celui d'un voisin) est trop vieux ou brisé, les eaux vannes peuvent contaminer la nappe phréatique.</li>
                <li><strong>Une mauvaise étanchéité du puits :</strong> Un couvercle fissuré, un tubage (casing) rouillé ou un scellement inadéquat au niveau du sol (collerette de bentonite absente) permet aux bactéries d'entrer directement.</li>
            </ul>

            <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Les risques pour la santé : Pourquoi faut-il prendre cela au sérieux ?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Au Québec, les autorités de santé publique sont catégoriques : la présence d'une seule bactérie E. coli dans 100 ml d'eau rend celle-ci impropre à la consommation.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Les symptômes</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                L'ingestion d'eau contaminée peut provoquer une gastro-entérite sévère :
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li>Crampes abdominales violentes.</li>
                <li>Diarrhée (souvent aqueuse ou sanglante).</li>
                <li>Nausées et vomissements.</li>
                <li>Fièvre légère.</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Pour la majorité des adultes en bonne santé, les symptômes disparaissent en une semaine. Cependant, pour les jeunes enfants, les personnes âgées et les personnes immunodéprimées, cela peut dégénérer en syndrome hémolytique et urémique (SHU), une complication grave pouvant mener à une insuffisance rénale.
            </p>

            <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Analyse d'eau : Quand et comment tester ?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Contrairement aux villes, le gouvernement du Québec ne teste pas l'eau des puits privés. C'est la responsabilité du propriétaire.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Les fréquences recommandées par le MELCCFP :</h3>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li><strong>Deux fois par année :</strong> Idéalement au printemps (après la fonte) et à l'automne (période de pluies abondantes).</li>
                <li><strong>Après des travaux :</strong> Si vous avez fait réparer votre pompe ou creuser le sol à proximité.</li>
                <li><strong>Si vous notez un changement :</strong> Une odeur, un goût différent ou une turbidité (eau trouble) soudaine.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Comment procéder ?</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Ne vous fiez pas aux tests de quincaillerie pour les bactéries. Vous devez récupérer une bouteille stérile auprès d'un laboratoire accrédité par le ministère de l'Environnement. Suivez les consignes de prélèvement à la lettre (se laver les mains, ne pas toucher l'intérieur du bouchon) et rapportez l'échantillon au laboratoire dans les 24 heures en le gardant au frais.
            </p>

            <h2 id="section-4" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Votre test est positif : Les 3 étapes d'urgence</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Si le laboratoire vous appelle pour confirmer la présence d'E. coli, ne paniquez pas, mais agissez immédiatement.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Étape 1 : L'avis de bouillir l'eau</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Portez l'eau à une ébullition à gros bouillons pendant au moins une minute complète. Cela tue instantanément les bactéries. Utilisez cette eau pour boire, brosser les dents, laver les fruits et légumes et préparer les biberons. Pour la douche, l'eau est sécuritaire tant que vous ne l'avalez pas (attention aux jeunes enfants).
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Étape 2 : La désinfection par chloration-choc</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                C'est le traitement classique pour "stériliser" votre puits.
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li>On introduit une quantité précise de chlore (souvent de l'eau de Javel sans parfum) dans le puits.</li>
                <li>On fait circuler l'eau dans tous les robinets de la maison jusqu'à sentir l'odeur de chlore.</li>
                <li>On laisse reposer 12 à 24 heures sans utiliser l'eau.</li>
                <li>On rince le système en laissant couler l'eau (par le boyau d'arrosage, pas dans la fosse septique pour ne pas tuer les "bonnes" bactéries de celle-ci) jusqu'à ce que l'odeur disparaisse.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Étape 3 : Le test de suivi</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Attendez une semaine après la disparition de l'odeur de chlore pour refaire un test d'eau. Si E. coli est toujours présent, votre puits a un problème structurel ou une source de contamination permanente.
            </p>

            <h2 id="section-5" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Les solutions permanentes : En finir avec la contamination</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Si votre puits est vulnérable, la chloration ne sera qu'un pansement. Vous avez besoin d'une barrière de protection continue.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Le système de purification par rayons UV (La solution favorite au Québec)</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                C'est le "gardien" de votre maison. L'eau passe dans une chambre en acier inoxydable où elle est exposée à une lumière ultraviolette intense qui détruit l'ADN des bactéries, les rendant inoffensives.
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li><strong>Avantage :</strong> Pas de produits chimiques, pas de goût de chlore.</li>
                <li><strong>Condition :</strong> L'eau doit être claire (pas de fer ni de turbidité) pour que les rayons UV puissent pénétrer. Un pré-filtre est donc obligatoire.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">La chloration automatique</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Une pompe doseuse injecte une petite quantité de chlore chaque fois que la pompe du puits s'active. C'est très efficace mais nécessite un entretien régulier et un filtre au charbon pour retirer le goût de chlore au robinet.
            </p>

            <h2 id="section-6" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Prévention : Protéger votre puits contre le climat québécois</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                Au Québec, la configuration du terrain est cruciale.
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li><strong>La pente :</strong> Le sol autour de votre puits doit former un monticule pour que l'eau de pluie s'éloigne du puits plutôt que de s'y accumuler.</li>
                <li><strong>Le couvercle :</strong> Assurez-vous d'avoir un couvercle de puits scellé et muni d'un évent avec grillage fin (pour empêcher les insectes d'y entrer).</li>
                <li><strong>La zone de protection :</strong> Ne stockez pas de fumier, de pesticides ou de sel de déglaçage à moins de 30 mètres de votre puits.</li>
            </ul>

            <h2 id="section-7" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Conclusion</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Détecter des E. coli dans son puits est une expérience stressante, mais c'est aussi l'opportunité de sécuriser votre approvisionnement pour les années à venir. En tant que propriétaire québécois, la vigilance est votre meilleure alliée. Un test régulier coûte environ 50 $ à 100 $, un investissement minime pour la tranquillité d'esprit de savoir que chaque verre d'eau que vous servez à votre famille est pur.
            </p>
        </BlogLayout>
    );
};

export default BacteriesEColiPuits;
