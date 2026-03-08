import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import eauOdeurImg from "@/assets/eau-odeur-oeufs-pourris.png";

const PourquoiEauSentOeufsPourris = () => {
    useEffect(() => {
        document.title = "Pourquoi mon eau sent l'odeur des œufs pourris ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Comprenez les causes de l'odeur de soufre dans votre eau et découvrez les solutions efficaces pour l'éliminer. Guide complet par Bricareau.");
        }
    }, []);

    const tocItems = [
        { id: "section-1", title: "Pourquoi mon eau sent-elle les œufs pourris ?" },
        { id: "section-2", title: "L'origine de cette odeur désagréable" },
        { id: "section-3", title: "Identifier la véritable cause" },
        { id: "section-4", title: "Le rôle du chauffe-eau" },
        { id: "section-5", title: "Quand le problème vient du puits" },
        { id: "section-6", title: "Les risques d'ignorer le problème" },
        { id: "section-7", title: "Comment résoudre le problème durablement" },
        { id: "section-8", title: "Prévenir le retour de l'odeur" },
        { id: "section-9", title: "Quand faire appel à un professionnel ?" },
        { id: "section-10", title: "Une eau saine… et sans odeur !" }
    ];

    return (
        <BlogLayout
            title="Pourquoi mon eau sent l'odeur des œufs pourris ?"
            headerImage={eauOdeurImg}
            tocItems={tocItems}
        >
            {/* Section 1 */}
            <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">1. Pourquoi mon eau sent-elle les œufs pourris ?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Il n'y a rien de plus désagréable que d'ouvrir le robinet et de sentir cette odeur typique d'œufs pourris. Si vous vivez au Québec et que votre eau dégage cette senteur, sachez que vous n'êtes pas seul. Ce phénomène est assez courant dans les régions où l'eau provient de puits, mais il peut aussi toucher les réseaux municipaux. Chez <strong>Bricareau</strong>, on rencontre ce problème chaque semaine chez nos clients, et heureusement, il existe des solutions simples et efficaces pour y remédier.
            </p>

            {/* Section 2 */}
            <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">2. L'origine de cette odeur désagréable</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                L'odeur d'œuf pourri dans l'eau provient le plus souvent du <strong>sulfure d'hydrogène (H₂S)</strong>, un gaz produit par des bactéries anaérobies qui se développent dans des environnements pauvres en oxygène. Ces micro-organismes transforment les sulfates naturellement présents dans l'eau en sulfures, donnant cette odeur caractéristique.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                Selon la source d'eau, deux scénarios sont possibles :
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li>Si l'odeur se trouve <strong>uniquement dans l'eau chaude</strong>, le problème vient souvent du <strong>chauffe-eau</strong>.</li>
                <li>Si l'odeur est présente dans <strong>toute l'installation</strong>, elle provient plutôt de la <strong>source d'eau elle-même</strong> (puits, nappe phréatique, réseau vétuste, etc.).</li>
            </ul>

            {/* Section 3 */}
            <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">3. Identifier la véritable cause du problème</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                Avant d'agir, il est essentiel de diagnostiquer correctement la source du gaz sulfuré. Voici un protocole en trois étapes :
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li><strong>Identifier l'origine :</strong> On compare l'eau froide et l'eau chaude pour déterminer si le chauffe-eau est en cause.</li>
                <li><strong>Effectuer un test de sulfures :</strong> Une analyse d'eau rapide permet de mesurer le taux de H₂S et de détecter la présence de bactéries sulfato-réductrices.</li>
                <li><strong>Inspecter le système de plomberie :</strong> Certains matériaux ou anodes internes peuvent accélérer la production de sulfures.</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Cette méthode simple assure un diagnostic fiable et évite de remplacer inutilement un appareil ou un traitement inefficace.
            </p>

            {/* Section 4 */}
            <h2 id="section-4" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">4. Le rôle du chauffe-eau dans la formation d'odeurs</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Le chauffe-eau électrique ou au gaz peut parfois devenir une mini-usine à odeurs. À cause de la chaleur et du manque d'oxygène, des bactéries peuvent s'y développer. Le métal de l'anode, souvent en <strong>magnésium</strong>, réagit avec les sulfates dissous dans l'eau pour créer du sulfure d'hydrogène.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Une solution rapide consiste à <strong>remplacer l'anode de magnésium par une anode en aluminium-zinc</strong>. Cette simple modification réduit drastiquement la formation de sulfures sans altérer la qualité ni la durabilité du chauffe-eau. Dans les cas plus sévères, un <strong>nettoyage désinfectant et la vidange complète du réservoir</strong> peuvent être nécessaires.
            </p>

            {/* Section 5 */}
            <h2 id="section-5" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">5. Quand le problème vient du puits</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Si vous êtes propriétaire d'un puits privé, l'odeur d'œuf pourri peut venir directement de la <strong>source souterraine</strong>. Dans ce cas, le sulfure d'hydrogène se forme naturellement à cause de réactions chimiques entre les minéraux et la matière organique présente dans le sol.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                Voici les solutions les plus courantes :
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li><strong>Aération de l'eau :</strong> L'ajout d'un système d'aération dissipe le gaz sulfuré avant qu'il n'entre dans le réseau domestique.</li>
                <li><strong>Filtration au charbon activé :</strong> Ce procédé retient efficacement les gaz et les impuretés responsables de l'odeur.</li>
                <li><strong>Osmose inversée ou traitement au chlore :</strong> Ces méthodes plus avancées éliminent à la fois les bactéries et les sulfures présents.</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Nos experts peuvent analyser votre eau gratuitement et recommander la technologie la mieux adaptée à votre situation, que vous soyez en zone rurale ou semi-urbaine.
            </p>

            {/* Section 6 */}
            <h2 id="section-6" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">6. Les risques d'ignorer le problème</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Si l'odeur d'œuf pourri n'est pas systématiquement dangereuse pour la santé, elle reste un <strong>indicateur d'une eau déséquilibrée</strong>. Le sulfure d'hydrogène peut endommager la tuyauterie, corroder le métal et tacher la vaisselle, les tissus ou les appareils ménagers.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                De plus, une forte concentration de sulfures peut masquer la présence d'autres contaminants. Ignorer cette situation, c'est donc <strong>prendre le risque de détériorer votre installation</strong> et d'altérer la qualité de votre eau potable.
            </p>

            {/* Section 7 */}
            <h2 id="section-7" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">7. Comment résoudre le problème durablement</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                Un bon traitement commence par une <strong>analyse complète et personnalisée</strong>. Une équipe spécialisée se déplace pour prélever des échantillons, identifier les causes précises et recommander la solution adaptée à vos besoins et à votre budget.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                Les traitements courants comprennent :
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li>Des <strong>systèmes d'aération</strong> sur mesure pour neutraliser les gaz sulfurés.</li>
                <li>Des <strong>filtres catalytiques ou au charbon actif</strong> pour purifier l'eau à la source.</li>
                <li>Des <strong>désinfections par injection de chlore ou de peroxyde</strong> pour éliminer les bactéries responsables.</li>
                <li>Un <strong>entretien régulier</strong> pour éviter le retour des odeurs et assurer la performance du système.</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Chaque installation est garantie et accompagnée d'un suivi technique après mise en service.
            </p>

            {/* Section 8 */}
            <h2 id="section-8" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">8. Prévenir le retour de l'odeur d'œuf pourri</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                Une fois l'eau traitée, il est important d'adopter de bons réflexes pour éviter le retour du problème :
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li>Faire <strong>analyser l'eau une fois par an</strong>, surtout si vous utilisez un puits.</li>
                <li>Entretenir régulièrement votre <strong>chauffe-eau et vos équipements de filtration</strong>.</li>
                <li>Éviter l'utilisation de produits chimiques non adaptés qui peuvent perturber l'équilibre biologique de votre système.</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Des plans d'entretien personnalisés permettent de vous libérer de ces tâches techniques et de garantir une eau toujours propre, claire et sans odeur.
            </p>

            {/* Section 9 */}
            <h2 id="section-9" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">9. Quand faut-il faire appel à un professionnel ?</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                Il peut être tentant d'essayer des solutions maison (vinaigre, désinfectants, nettoyages ponctuels), mais sans diagnostic précis, ces tentatives restent souvent temporaires.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 text-justify">
                Faites appel à un professionnel dès que :
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li>L'odeur est persistante même après plusieurs nettoyages.</li>
                <li>L'eau a un goût métallique ou piquant.</li>
                <li>Vous remarquez des taches ou dépôts sur vos robinets ou appareils.</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Les techniciens certifiés sont équipés pour intervenir rapidement et disposent des outils nécessaires pour <strong>rétablir la qualité de votre eau dès la première visite</strong>.
            </p>

            {/* Section 10 */}
            <h2 id="section-10" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">10. Une eau saine… et sans odeur !</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Une eau qui sent l'œuf pourri n'est jamais une fatalité. En identifiant rapidement la cause et en appliquant le bon traitement, vous pouvez retrouver une eau agréable, sécuritaire et inodore.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Contactez-nous dès aujourd'hui pour obtenir <strong>une consultation gratuite</strong> et découvrir la solution la mieux adaptée à votre maison. Une eau claire, propre et sans odeur — c'est ce que nous vous promettons.
            </p>
        </BlogLayout>
    );
};

export default PourquoiEauSentOeufsPourris;
