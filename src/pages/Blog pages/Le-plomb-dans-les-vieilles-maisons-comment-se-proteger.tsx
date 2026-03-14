import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import heroImg from "@/assets/plomb-canalisation-tuyau-eau.avif";
export { heroImg };

const PlombVieillesMaisonsProteger = () => {
    useEffect(() => {
        document.title = "Le plomb dans les vieilles maisons : Comment se protéger ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez comment identifier, analyser et éliminer le plomb dans l'eau de votre vieille maison grâce à des méthodes efficaces et des systèmes de filtration adaptés.");
        }
    }, []);

    const tocItems = [
        { id: "section-1", title: "Un ennemi invisible dans vos canalisations" },
        { id: "section-2", title: "Des conséquences sérieuses sur la santé" },
        { id: "section-3", title: "Identifier la source de contamination" },
        { id: "section-4", title: "Les solutions pour éliminer le plomb" },
        { id: "section-5", title: "Les habitudes de prévention au quotidien" },
        { id: "section-6", title: "L'accompagnement par des experts qualifiés" }
    ];

    return (
        <BlogLayout
            title="Le plomb dans les vieilles maisons : Comment se protéger?"
            headerImage={heroImg}
            tocItems={tocItems}
        >
            {/* Section 1 */}
            <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Un ennemi invisible dans vos canalisations</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Le plomb reste un ennemi invisible dans de nombreuses vieilles maisons du Québec, particulièrement celles construites avant les années 1980. À cette époque, les conduites de service, les soudures et parfois même les robinets contenaient ce métal lourd aujourd’hui reconnu pour ses effets nocifs sur la santé. Lorsque l’eau potable circule dans d’anciennes canalisations en plomb, de petites quantités du métal peuvent s’y dissoudre, surtout si l’eau est légèrement acide ou stagnante. Ce phénomène est d’autant plus préoccupant qu’il n’altère ni le goût ni l’odeur de l’eau, rendant la contamination indétectable sans analyse.
            </p>

            {/* Section 2 */}
            <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Des conséquences sérieuses sur la santé</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Les conséquences sur la santé sont sérieuses : le plomb s’accumule dans l’organisme et affecte le développement du système nerveux, particulièrement chez les enfants et les femmes enceintes. Même de faibles concentrations peuvent nuire à la mémoire, à la concentration ou à la croissance. Chez l’adulte, il peut provoquer de la fatigue, une hausse de la pression artérielle et des troubles rénaux. C’est pourquoi les autorités de santé publique recommandent vivement de vérifier la présence de plomb dans l’eau des bâtiments anciens et de mettre en place des mesures correctives dès que les résultats dépassent les seuils admissibles.
            </p>

            {/* Section 3 */}
            <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Identifier la source de contamination</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                La première étape pour se protéger consiste donc à identifier la source de contamination. Si votre maison date d’avant 1980, il y a de fortes chances que les conduites d’entrée d’eau soient en plomb. Vous pouvez en vérifier la nature en grattant délicatement la surface du tuyau : une couleur gris métallique et une texture molle indiquent bien la présence de plomb. L’analyse de l’eau par un laboratoire accrédité demeure cependant la méthode la plus fiable pour confirmer la teneur réelle. Au Québec, il est possible de faire appel à des entreprises de traitement d’eau professionnelles qui se chargent du prélèvement et de l’analyse selon les normes gouvernementales.
            </p>

            {/* Section 4 */}
            <h2 id="section-4" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Les solutions pour éliminer le plomb</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Si du plomb est détecté, plusieurs solutions existent. Le remplacement complet de la conduite en plomb est la mesure la plus définitive, mais elle peut représenter un investissement important, surtout pour les maisons anciennes. En attendant ou en complément des travaux, l’installation d’un système de traitement certifié, comme un filtre à osmose inverse ou un système à charbon actif spécialisé, permet d’éliminer efficacement le plomb à la source d’utilisation, par exemple au robinet de la cuisine. Ces dispositifs doivent être choisis et entretenus selon les recommandations du fabricant pour garantir leur efficacité continue.
            </p>

            {/* Section 5 */}
            <h2 id="section-5" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">Les habitudes de prévention au quotidien</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Certaines habitudes peuvent également réduire considérablement l’exposition. Il est recommandé de laisser couler l’eau froide pendant quelques minutes avant de la consommer, surtout le matin, afin d’évacuer l’eau qui a stagné dans les tuyaux pendant la nuit. De plus, il ne faut jamais utiliser l’eau chaude du robinet pour la cuisson ou les préparations pour nourrissons, car la chaleur augmente la solubilité du plomb. Un entretien régulier de la plomberie, le nettoyage périodique des aérateurs de robinets et la vérification des joints ajoutent une couche de prévention supplémentaire pour assurer une eau plus saine.
            </p>

            {/* Section 6 */}
            <h2 id="section-6" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">L'accompagnement par des experts qualifiés</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
                Faire appel à un expert en traitement d’eau est la meilleure façon de garantir une action efficace et durable. Chez les spécialistes du domaine, comme Bricareau, chaque intervention débute par un audit complet du réseau domestique, suivi de recommandations adaptées : analyse précise, choix du système de filtration le mieux adapté, installation professionnelle et entretien annuel. Grâce à ces services, vous pouvez non seulement protéger la santé de votre famille, mais aussi augmenter la valeur et la sécurité de votre propriété. Une eau pure et sans plomb est à portée de main : il suffit d’adopter les bons réflexes et de s’entourer d’experts qualifiés pour boire, cuisiner et vivre en toute confiance.
            </p>
        </BlogLayout>
    );
};

export default PlombVieillesMaisonsProteger;
