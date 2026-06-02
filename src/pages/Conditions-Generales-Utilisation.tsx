import React, { useEffect } from "react";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";

const ConditionsGeneralesUtilisation = () => {
    useEffect(() => {
        document.title = "Conditions Générales d'Utilisation | Bricareau Water Specialist";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Consultez les conditions générales d'utilisation du site Bricareau.com. Informations sur nos services de traitement d'eau au Québec et modalités d'utilisation.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Conditions Générales d'Utilisation - Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Modalités d'accès et d'utilisation du portail Bricareau pour vos solutions d'eau résidentielles.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/conditions-generales-utilisation");
    }, []);
    return (
        <div className="min-h-screen bg-white text-[#1a3a5a]">
            <Header />
            <main>
                <div className="container mx-auto px-4 py-6">
                    <GlobalBreadcrumbs />
                </div>

                <div className="container mx-auto px-4 py-12 max-w-4xl font-sans">
                    <div className="text-center mb-10">
                        <h1 className="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic text-[#1a5a8a] mb-6 tracking-tight">
    CONDITIONS GÉNÉRALES D'<span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg">UTILISATION</span>
</h1>
                        <p className="text-xl font-bold text-[#1a5a8a]">Bricareau Water Specialist</p>
                        <p className="text-sm text-gray-500 mt-2">Dernière mise à jour : 24 mars 2026</p>
                        <p className="text-xs text-gray-500 mt-1">Site web : [www.bricareau.com]</p>
                    </div>

                    <div className="space-y-8 text-[15px] leading-relaxed border-t border-gray-200 pt-8">
                        {/* Préambule */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">Préambule</h2>
                            <p className="mb-4">
                                Les présentes Conditions générales d'utilisation (ci-après « CGU ») régissent l'accès et l'utilisation du site web de Bricareau Water Specialist (ci-après « le Site »), accessible à l'adresse [www.bricareau.ca].
                            </p>
                            <p className="mb-4">
                                En accédant au Site et en naviguant sur celui-ci, vous reconnaissez avoir lu, compris et accepté sans réserve les présentes CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Site.
                            </p>
                            <p>
                                Bricareau Water Specialist se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le Site. Il vous appartient de consulter régulièrement les CGU pour vous tenir informé des changements.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 1 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">1. Identification de l'exploitant du site</h2>
                            <p className="mb-4">Le Site est exploité par :</p>
                            <div className="pl-4 space-y-1 mb-4 text-[#1a3a5a]">
                                <p><span className="font-bold">Nom commercial :</span> Bricareau Water Specialist</p>
                                <p>Province : Québec, Canada</p>
                                <p>Courriel : info@bricareau.com</p>
                                <p>Téléphone : 1 855 264 9328</p>
                                <p>Site web : www.bricareau.com</p>
                            </div>
                            <p>
                                Bricareau Water Specialist est une entreprise spécialisée dans la vente, l'installation et l'entretien de systèmes de traitement de l'eau résidentielle dans la province de Québec, notamment les adoucisseurs d'eau, les systèmes de filtration, les systèmes d'osmose inverse et les systèmes de traitement sous l'évier.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">2. Accès au site</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">2.1 Conditions d'accès</h3>
                                    <p>L'accès au Site est gratuit et ouvert à toute personne disposant d'une connexion Internet. Bricareau Water Specialist ne garantit pas la disponibilité continue et ininterrompue du Site et se réserve le droit de le suspendre temporairement pour des raisons de maintenance, de mise à jour ou pour tout autre motif technique.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">2.2 Équipement requis</h3>
                                    <p>L'utilisation du Site requiert un équipement informatique (ordinateur, tablette, téléphone intelligent) doté d'un navigateur web récent et d'une connexion Internet. Les frais liés à l'accès au réseau Internet sont à la charge exclusive de l'utilisateur.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">2.3 Restrictions d'accès</h3>
                                    <p>Bricareau Water Specialist se réserve le droit de restreindre, suspendre ou mettre fin à l'accès au Site, en tout ou en partie, sans préavis, notamment en cas d'utilisation frauduleuse, abusive ou contraire aux présentes CGU.</p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">3. Services offerts sur le site</h2>
                            <p className="mb-4">Le Site permet aux visiteurs d'obtenir des informations sur les services suivants :</p>
                            <ul className="list-disc pl-8 space-y-1 mb-4">
                                <li>Systèmes d'adoucissement de l'eau résidentielle</li>
                                <li>Systèmes de filtration de l'eau (sous-évier, toute-maison)</li>
                                <li>Systèmes d'osmose inverse</li>
                                <li>Traitement des problèmes de qualité d'eau (fer, manganèse, arsenic, PFAS, dureté, etc.)</li>
                                <li>Tests d'eau</li>
                                <li>Installation, entretien et réparation de systèmes de traitement de l'eau</li>
                                <li>Vente de produits et consommables liés au traitement de l'eau</li>
                            </ul>
                            <p>
                                Les informations présentées sur le Site ont un caractère purement informatif et ne constituent pas une offre contractuelle ferme. Les prix, disponibilités et caractéristiques des produits et services peuvent être modifiés sans préavis.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">4. Utilisation acceptable du site</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">4.1 Utilisations autorisées</h3>
                                    <p className="mb-2">Le Site est mis à disposition des utilisateurs à des fins personnelles et non commerciales. Vous êtes autorisé à :</p>
                                    <ul className="list-disc pl-8 space-y-1">
                                        <li>Consulter et naviguer librement sur le Site</li>
                                        <li>Soumettre des formulaires de contact ou de demande d'information</li>
                                        <li>Prendre rendez-vous pour un test d'eau</li>
                                        <li>Télécharger des documents mis à disposition par Bricareau Water Specialist à des fins d'information personnelle</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">4.2 Utilisations interdites</h3>
                                    <p className="mb-2">Il vous est strictement interdit d'utiliser le Site pour :</p>
                                    <ul className="list-disc pl-8 space-y-1">
                                        <li>Transmettre des contenus illégaux, diffamatoires, obscènes, menaçants ou portant atteinte à la vie privée d'autrui</li>
                                        <li>Tenter d'accéder de manière non autorisée aux systèmes informatiques du Site</li>
                                        <li>Introduire des virus, logiciels malveillants, chevaux de Troie ou tout code susceptible de perturber le fonctionnement du Site</li>
                                        <li>Effectuer des opérations d'extraction automatisée de données (scraping, moissonnage) sans autorisation écrite préalable</li>
                                        <li>Utiliser le Site à des fins commerciales, publicitaires ou promotionnelles sans consentement écrit</li>
                                        <li>Usurper l'identité d'une autre personne ou entité</li>
                                        <li>Contourner les mesures de sécurité techniques mises en place sur le Site</li>
                                        <li>Reproduire, copier, vendre ou revendre tout ou partie du contenu du Site sans autorisation</li>
                                    </ul>
                                    <p className="mt-4 font-bold text-red-700">Toute violation de ces interdictions pourra entraîner des poursuites judiciaires et/ou une réclamation en dommages-intérêts.</p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">5. Propriété intellectuelle</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">5.1 Contenu du site</h3>
                                    <p>L'ensemble du contenu présent sur le Site, notamment les textes, articles de blogue, images, photographies, logos, graphiques, vidéos, icônes, mises en page, données et logiciels, est la propriété exclusive de Bricareau Water Specialist ou de ses concédants de licence, et est protégé par les lois canadiennes et québécoises sur le droit d'auteur, les marques de commerce et la propriété intellectuelle.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">5.2 Utilisation autorisée</h3>
                                    <p>Toute reproduction, représentation, modification, publication, adaptation ou exploitation, totale ou partielle, du contenu du Site, par quelque procédé que ce soit, est strictement interdite sans l'autorisation écrite préalable de Bricareau Water Specialist, sauf dans les cas expressément prévus par la loi (ex. : citation à des fins d'information ou d'enseignement).</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">5.3 Marques de commerce</h3>
                                    <p>Les noms, logos et marques de commerce de Bricareau Water Specialist figurant sur le Site sont des marques déposées ou des marques de commerce appartenant à Bricareau Water Specialist. Toute utilisation non autorisée de ces marques est formellement interdite.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">5.4 Contenus tiers</h3>
                                    <p>Certains contenus affichés sur le Site peuvent être fournis par des tiers (partenaires, fabricants, fournisseurs). Ces contenus demeurent la propriété de leurs auteurs respectifs. Bricareau Water Specialist ne saurait être tenu responsable de l'exactitude ou de la légalité de ces contenus tiers.</p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">6. Formulaires et demandes en ligne</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">6.1 Formulaire de contact et test d'eau</h3>
                                    <p className="mb-2">Le Site propose des formulaires permettant aux visiteurs de nous contacter, de demander une soumission ou de s'inscrire à notre offre de test d'eau gratuit à domicile. En soumettant un formulaire, vous vous engagez à :</p>
                                    <ul className="list-disc pl-8 space-y-1">
                                        <li>Fournir des informations exactes, complètes et à jour</li>
                                        <li>Ne pas soumettre de fausses demandes ou usurper l'identité d'un tiers</li>
                                        <li>Accepter d'être contacté par notre équipe dans les meilleurs délais suivant votre demande</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">6.2 Absence d'obligation contractuelle</h3>
                                    <p>La soumission d'un formulaire ou d'une demande en ligne ne constitue pas un contrat de vente ou de service. Aucune obligation commerciale ne naît entre Bricareau Water Specialist et l'utilisateur avant la signature d'un contrat écrit ou la confirmation expresse d'une commande.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">6.3 Traitement des données</h3>
                                    <p>Les renseignements personnels collectés via les formulaires sont traités conformément à notre Politique de confidentialité, disponible sur le Site.</p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">7. Exactitude des informations</h2>
                            <p className="mb-4">Bricareau Water Specialist s'efforce de maintenir les informations publiées sur le Site à jour et exactes. Cependant, nous ne garantissons pas l'exhaustivité, l'exactitude ou la pertinence des informations présentées.</p>
                            <p className="mb-4 text-gray-700 italic">Les informations relatives aux produits, services, prix et disponibilités sont fournies à titre indicatif et peuvent être modifiées sans préavis. Bricareau Water Specialist décline toute responsabilité en cas d'erreur ou d'omission dans le contenu du Site.</p>
                            <p>Les conseils et recommandations fournis sur le Site en matière de traitement de l'eau ont un caractère général et informatif. Ils ne remplacent pas une analyse professionnelle de la qualité de votre eau par l'un de nos techniciens spécialisés.</p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">8. Liens hypertextes</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">8.1 Liens vers des sites tiers</h3>
                                    <p className="mb-4">Le Site peut contenir des liens hypertextes vers des sites web tiers (partenaires, fournisseurs, organismes gouvernementaux, associations professionnelles). Ces liens sont fournis à titre indicatif et pour votre commodité.</p>
                                    <p>Bricareau Water Specialist n'exerce aucun contrôle sur le contenu des sites tiers et décline toute responsabilité quant à leur contenu, leur disponibilité, leurs pratiques en matière de confidentialité ou les dommages pouvant résulter de leur utilisation. L'existence d'un lien vers un site tiers ne constitue pas une approbation ou une recommandation de ce site.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">8.2 Liens vers notre site</h3>
                                    <p>Tout lien hypertexte pointant vers le Site doit faire l'objet d'une autorisation préalable et écrite de Bricareau Water Specialist. Les liens en cadre (frames) reproduisant le Site dans un autre environnement sont strictement interdits sans autorisation.</p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 9 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">9. Responsabilité et limitation de responsabilité</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">9.1 Responsabilité de Bricareau Water Specialist</h3>
                                    <p>Bricareau Water Specialist met tout en œuvre pour assurer un accès de qualité au Site. Toutefois, nous ne pouvons garantir que le Site sera exempt d'erreurs, de virus ou d'autres éléments nuisibles, ni que les serveurs qui le rendent accessible sont sécurisés à 100 %.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">9.2 Exclusion de responsabilité</h3>
                                    <p className="mb-2">Dans les limites permises par la législation applicable, Bricareau Water Specialist ne pourra être tenu responsable de :</p>
                                    <ul className="list-disc pl-8 space-y-1">
                                        <li>Toute interruption ou indisponibilité du Site, quelle qu'en soit la cause</li>
                                        <li>Tout dommage direct ou indirect résultant de l'utilisation ou de l'impossibilité d'utiliser le Site</li>
                                        <li>Toute perte ou corruption de données lors de la navigation sur le Site</li>
                                        <li>L'exactitude des informations fournies par des tiers ou des partenaires</li>
                                        <li>Tout préjudice résultant d'une décision prise sur la base des informations publiées sur le Site</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">9.3 Responsabilité de l'utilisateur</h3>
                                    <p>L'utilisateur est seul responsable de l'utilisation qu'il fait du Site et s'engage à indemniser Bricareau Water Specialist pour tout préjudice résultant d'une utilisation contraire aux présentes CGU ou à la législation applicable.</p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 10 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">10. Protection des renseignements personnels</h2>
                            <p className="mb-4">
                                La collecte et le traitement des renseignements personnels effectués dans le cadre de l'utilisation du Site sont régis par notre Politique de confidentialité, intégrée aux présentes CGU par référence et disponible à l'adresse [www.bricareau.ca/politique-de-confidentialite].
                            </p>
                            <p>
                                La Politique de confidentialité décrit notamment les types de renseignements collectés, les finalités du traitement, les droits des utilisateurs et les mesures de sécurité mises en place, conformément à la Loi 25 (Québec) et à la LPRPDE.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 11 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">11. Témoins (cookies)</h2>
                            <p>
                                Le Site utilise des témoins (cookies) et des technologies similaires pour améliorer l'expérience de navigation, analyser l'audience du Site et personnaliser les communications. La gestion des cookies est détaillée dans notre Politique de confidentialité.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 12 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">12. Droit applicable et juridiction compétente</h2>
                            <p>
                                Les présentes CGU sont régies et interprétées conformément aux lois de la province de Québec et aux lois fédérales du Canada qui s'y appliquent. Tout litige relatif à l'utilisation du Site sera soumis à la compétence exclusive des tribunaux du district judiciaire où se situe le siège social de Bricareau Water Specialist, au Québec.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 13 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">13. Mineurs</h2>
                            <p>
                                L'utilisation du Site est réservée aux personnes majeures selon la loi de leur province ou territoire de résidence. Bricareau Water Specialist ne collecte pas sciemment de données auprès de mineurs sans autorisation parentale.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 14 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">14. Intégralité de l'accord</h2>
                            <p>
                                Les présentes CGU constituent l'intégralité de l'accord entre l'utilisateur et Bricareau Water Specialist concernant l'utilisation du Site. Si une disposition des présentes CGU est jugée invalide par un tribunal, les autres dispositions demeurent pleinement en vigueur.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 15 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">15. Contact</h2>
                            <p>
                                Pour toute question ou demande d'information concernant le Site ou les présentes CGU, vous pouvez nous contacter à l'adresse suivante : info@bricareau.com.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Signature */}
                        <section>
                            <p className="font-bold tracking-widest text-[#1a5a8a] text-center mt-12">— Bricareau Water Specialist —</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ConditionsGeneralesUtilisation;
