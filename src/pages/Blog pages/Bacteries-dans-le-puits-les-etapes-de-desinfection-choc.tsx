import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import heroImg from "@/assets/puits.jpg";

const BacteriesPuitsDesinfectionChoc = () => {
    useEffect(() => {
        document.title = "Bactéries dans le puits : Les étapes de désinfection choc | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Votre analyse d'eau révèle des bactéries ? Découvrez les étapes cruciales d'une désinfection choc efficace pour retrouver une eau potable et sécuritaire.");
        }
    }, []);

    const tocItems = [
        { id: "section-1", title: "Causes de contamination bactérienne" },
        { id: "section-2", title: "Importance de l'inspection préliminaire" },
        { id: "section-3", title: "Préparation et injection du chlore" },
        { id: "section-4", title: "Temps de contact et rinçage du réseau" },
        { id: "section-5", title: "Analyses de contrôle et solutions permanentes" },
        { id: "section-6", title: "Prévention et entretien durable" }
    ];

    return (
        <BlogLayout
            title="Bactéries dans le puits : Les étapes de désinfection choc"
            headerImage={heroImg}
            tocItems={tocItems}
        >
            {/* Section 1 */}
            <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Causes de contamination bactérienne</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                La présence de bactéries dans un puits est un problème courant au Québec, souvent causé par les infiltrations d’eau de surface, les fissures dans le tubage ou encore une tête de puits mal scellée. Lorsqu’une analyse révèle des coliformes totaux ou la présence d’E. coli, il faut agir rapidement pour éviter tout risque pour la santé. La désinfection choc est alors la solution recommandée : elle consiste à injecter une solution chlorée dans le puits et le système de distribution afin d’éliminer toutes les bactéries présentes et de rétablir une eau potable et sécuritaire.
            </p>

            {/* Section 2 */}
            <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Importance de l'inspection préliminaire</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Avant toute intervention, il est essentiel d’identifer la source de la contamination. Un professionnel vérifiera l’état du couvercle, des joints, du drainage environnant et des installations septiques avoisinantes. Cette inspection préliminaire garantit que la désinfection ne sera pas qu’un correctif temporaire mais une solution durable, car traiter sans corriger la cause reviendrait à recommencer quelques semaines plus tard. Une fois les sources possibles éliminées, la désinfection peut être effectuée efficacement.
            </p>

            {/* Section 3 */}
            <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Préparation et injection du chlore</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                La préparation du puits est une étape cruciale. Il faut interrompre le système de pompage, nettoyer la tête du puits et calculer le volume d’eau à traiter pour déterminer la quantité adéquate de chlore. Une solution trop faible serait inefficace, alors qu’une concentration excessive pourrait endommager les composantes du système. Une fois le mélange prêt, le technicien introduit la solution dans le puits puis la fait circuler dans tout le réseau domestique, incluant les robinets, le chauffe-eau et les conduites, afn que le désinfectant atteigne toutes les zones contaminées.
            </p>

            {/* Section 4 */}
            <h2 id="section-4" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Temps de contact et rinçage du réseau</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Le produit doit ensuite agir pendant plusieurs heures, souvent entre 12 et 24, durant lesquelles il est interdit de consommer ou d’utiliser l’eau. Après cette période de contact, le puits est rincé en profondeur jusqu’à disparition complète de l’odeur de chlore. Cette phase de rinçage est essentielle pour éviter tout goût résiduel et protéger la plomberie. L’eau chlorée évacuée doit être dispersée dans une zone appropriée, loin des végétaux et des fosses septiques, pour éviter un impact sur l’environnement.
            </p>

            {/* Section 5 */}
            <h2 id="section-5" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Analyses de contrôle et solutions permanentes</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Une fois le rinçage terminé, des analyses de contrôle doivent être effectuées à intervalles de quelques jours pour confirmer le succès du traitement. Si les tests révèlent encore la présence de bactéries, d’autres mesures peuvent s’imposer : inspection approfondie, nettoyage du tubage ou installation d’un système de traitement permanent comme un filtre UV. Ces dispositifs assurent une protection continue contre les micro-organismes et sécurisent la consommation d’eau au quotidien.
            </p>

            {/* Section 6 */}
            <h2 id="section-6" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Prévention et entretien durable</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Enfin, prévenir vaut toujours mieux que guérir. Un entretien régulier du puits, le respect d’une zone dégagée sans contaminants autour, et une analyse annuelle de l’eau sont des garanties de longévité et de tranquillité d’esprit. La désinfection choc n’est pas qu’une solution d’urgence, elle rappelle l’importance d’un suivi rigoureux et d’une attention continue à la qualité de l’eau. En confiant cette tâche à des experts du traitement d’eau, vous assurez à votre famille une ressource pure, sécuritaire et durable.
            </p>
        </BlogLayout>
    );
};

export default BacteriesPuitsDesinfectionChoc;
