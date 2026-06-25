import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import heroImg from "@/assets/UV-system.jpg";

const FrequenceEntretienSystemeUV = () => {
    useEffect(() => {
        document.title = "Quelle fréquence d’entretien pour un système UV domestique ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrir la fréquence d'entretien idéale pour votre système UV domestique : remplacement de lampe, nettoyage du quartz et entretien des préfiltres.");
        }
    }, []);

    const tocItems = [
        { id: "section-1", title: "L'importance d'un entretien régulier" },
        { id: "section-2", title: "Le remplacement annuel de la lampe UV" },
        { id: "section-3", title: "Entretien et nettoyage du manchon de quartz" },
        { id: "section-4", title: "La maintenance cruciale des préfiltres" },
        { id: "section-5", title: "Reconnaître les signes de besoin d'entretien" },
        { id: "section-6", title: "Un investissement dans la santé et la durabilité" }
    ];

    return (
        <BlogLayout
            title="Quelle fréquence d’entretien pour un système UV domestique ?"
            headerImage={heroImg}
            tocItems={tocItems}
        >
            {/* Section 1 */}
            <h2 id="section-1" className="text-black mt-16 mb-6 scroll-mt-24">L'importance d'un entretien régulier</h2>
            <p className="text-gray-700 mb-6 text-justify">
                Le système de traitement d’eau par ultraviolet (UV) est l’une des solutions les plus fiables pour garantir une eau potable exempte de bactéries, virus et micro-organismes. De plus en plus de foyers québécois y ont recours, notamment dans les zones rurales où l’eau provient d’un puits privé. Cependant, contrairement à l’idée reçue qu’un système UV « fonctionne tout seul », il exige un entretien régulier pour conserver son efficacité optimale. Un appareil négligé perd rapidement de sa puissance de désinfection, exposant votre famille à des risques sanitaires évitables. Comprendre la fréquence d’entretien et les gestes à adopter est donc essentiel pour assurer une eau toujours pure et sécuritaire.
            </p>

            {/* Section 2 */}
            <h2 id="section-2" className="text-black mt-16 mb-6 scroll-mt-24">Le remplacement annuel de la lampe UV</h2>
            <p className="text-gray-700 mb-6 text-justify">
                L’entretien le plus important d’un système UV concerne le remplacement de la lampe. Celle-ci ne brûle pas comme une ampoule traditionnelle, mais son intensité diminue graduellement au fil du temps. Même si la lampe continue de s’allumer, elle perd en efficacité après environ 9 000 heures d’utilisation, soit un an en usage continu. Elle doit donc être remplacée chaque année, sans attendre qu’elle cesse complètement de fonctionner. Cette régularité garantit que la dose d’UV émise reste suffisante pour neutraliser les micro-organismes. De nombreux fabricants recommandent aussi de nettoyer le manchon de quartz lors de ce remplacement pour éviter que la poussière ou le calcaire n’affecte la transmission lumineuse.
            </p>

            {/* Section 3 */}
            <h2 id="section-3" className="text-black mt-16 mb-6 scroll-mt-24">Entretien et nettoyage du manchon de quartz</h2>
            <p className="text-gray-700 mb-6 text-justify">
                Le manchon de quartz, justement, est un autre élément crucial du système. Ce tube transparent, qui protège la lampe UV du contact direct avec l’eau, peut se couvrir de dépôts minéraux ou de film organique, spécialement dans les régions où l’eau est dure. Un nettoyage soigneux tous les trois à six mois est recommandé, selon la qualité de l’eau locale. Le nettoyage se fait à l’aide d’un chiffon doux et d’une solution non abrasive pour ne pas rayer la surface. Une accumulation même légère de calcaire peut réduire considérablement l’efficacité du faisceau lumineux et donc la capacité de désinfection. Dans certaines situations, notamment après un avis de contamination, il peut être judicieux de remplacer complètement le manchon.
            </p>

            {/* Section 4 */}
            <h2 id="section-4" className="text-black mt-16 mb-6 scroll-mt-24">La maintenance cruciale des préfiltres</h2>
            <p className="text-gray-700 mb-6 text-justify">
                Outre la lampe et le manchon, l’entretien du préfiltre est fondamental. Le système UV ne peut détruire efficacement que les micro-organismes présents dans une eau claire et exempte de particules. Si le préfiltre – généralement un modèle à sédiments de 5 microns – n’est pas remplacé à temps, la turbidité augmente et les rayons ultraviolets ne peuvent plus atteindre les bactéries de façon uniforme. En règle générale, le filtre à sédiments doit être changé tous les trois à six mois, ou plus souvent si l’eau contient beaucoup de fer, de manganèse ou d’autres impuretés naturelles. Ce simple geste de prévention prolonge la durée de vie du système UV et améliore la qualité globale de votre eau.
            </p>

            {/* Section 5 */}
            <h2 id="section-5" className="text-black mt-16 mb-6 scroll-mt-24">Reconnaître les signes de besoin d'entretien</h2>
            <p className="text-gray-700 mb-6 text-justify">
                Certains signes peuvent indiquer qu’un entretien est nécessaire avant la date prévue : diminution du débit d’eau, témoin lumineux d’alerte sur l’unité UV, odeur inhabituelle ou changement de goût dans l’eau. Dans ces cas, il est préférable d’arrêter l’appareil et de faire appel à un professionnel du traitement d’eau. Celui-ci pourra effectuer un diagnostic complet, vérifier le bon fonctionnement du ballast électronique et tester la puissance réelle du rayonnement ultraviolet. Un entretien annuel réalisé par un technicien qualifié garantit la sécurité, tout en assurant la conformité du système selon les normes de Santé Canada et les recommandations du fabricant.
            </p>

            {/* Section 6 */}
            <h2 id="section-6" className="text-black mt-16 mb-6 scroll-mt-24">Un investissement dans la santé et la durabilité</h2>
            <p className="text-gray-700 mb-6 text-justify">
                En définitive, un système UV domestique bien entretenu est l’un des moyens les plus simples, économiques et écologiques d’obtenir une eau potable sûre. Le remplacement de la lampe une fois par an, le nettoyage du manchon de quartz tous les quelques mois et l’entretien des filtres constituent les trois piliers d’un fonctionnement optimal. Un suivi régulier par un expert en traitement d’eau permet de prolonger la durée de vie de votre installation et d’éviter les pannes inattendues. Pour les foyers québécois, investir dans l’entretien de leur système UV, c’est investir dans la santé, la tranquillité d’esprit et la qualité de l’eau au quotidien — des valeurs au cœur d’une maison bien protégée.
            </p>
        </BlogLayout>
    );
};

export default FrequenceEntretienSystemeUV;
