import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
    return (
        <div className="min-h-screen bg-white text-[#1a3a5a]">
            <Header />
            <main>
                <div className="container mx-auto px-4 py-6">
                    <GlobalBreadcrumbs />
                </div>

                <div className="container mx-auto px-4 py-12 max-w-4xl font-sans">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold uppercase tracking-wide text-[#1a5a8a] mb-2">
                            Politique de confidentialité
                        </h1>
                        <p className="text-xl font-bold text-[#1a5a8a]">Bricareau Water Specialist</p>
                        <p className="text-sm text-gray-500 mt-2">Dernière mise à jour : 24 mars 2026</p>
                        <p className="text-xs text-gray-500 italic mt-1 max-w-2xl mx-auto">
                            Conformément à la Loi 25 (Québec) et à la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE)
                        </p>
                    </div>

                    <div className="space-y-8 text-[15px] leading-relaxed border-t border-gray-200 pt-8">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">1. Identification du responsable de la protection des renseignements personnels</h2>
                            <p className="mb-4">
                                Bricareau Water Specialist, dont le siège social est situé dans la province de Québec (Canada), est responsable de la protection des renseignements personnels collectés dans le cadre de ses activités commerciales liées au traitement de l'eau résidentielle.
                            </p>
                            <p className="mb-2">Pour toute question relative à la présente politique ou à vos renseignements personnels, vous pouvez communiquer avec:</p>
                            <div className="pl-4 space-y-1">
                                <p className="font-bold">Bricareau Water Specialist</p>
                                <p>Province : Québec, Canada</p>
                                <p>Courriel : info@bricareau.com</p>
                                <p>Téléphone : 1 855 264 9328</p>
                                <p>Site web : www.bricareau.com</p>
                            </div>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">2. Objet de la politique</h2>
                            <p className="mb-4">
                                La présente politique de confidentialité a pour but de vous informer sur la manière dont Bricareau Water Specialist collecte, utilise, conserve, communique et protège vos renseignements personnels, conformément aux obligations découlant de :
                            </p>
                            <ul className="list-disc pl-8 space-y-1 mb-4">
                                <li>La Loi 25 – Loi modernisant des dispositions législatives en matière de protection des renseignements personnels (Québec)</li>
                                <li>La Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE)</li>
                                <li>La Loi sur la protection des renseignements personnels dans le secteur privé (Québec)</li>
                            </ul>
                            <p>
                                En accédant à notre site web ou en utilisant nos services, vous consentez aux pratiques décrites dans la présente politique.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">3. Renseignements personnels collectés</h2>
                            <p className="mb-4">Nous pouvons collecter les renseignements personnels suivants :</p>
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">3.1 Renseignements fournis directement par vous</h3>
                                    <ul className="list-disc pl-8 space-y-1">
                                        <li>Nom et prénom</li>
                                        <li>Adresse postale complète (incluant la municipalité et le code postal)</li>
                                        <li>Numéro de téléphone</li>
                                        <li>Adresse courriel</li>
                                        <li>Informations relatives à votre propriété (type de résidence, source d'eau, problèmes de qualité d'eau)</li>
                                        <li>Renseignements nécessaires à la réalisation d'un test d'eau gratuit ou à la prestation de services</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">3.2 Renseignements collectés automatiquement</h3>
                                    <ul className="list-disc pl-8 space-y-1">
                                        <li>Adresse IP</li>
                                        <li>Type de navigateur et système d'exploitation</li>
                                        <li>Pages visitées, durée de visite et données de navigation</li>
                                        <li>Localisation approximative (région, ville)</li>
                                        <li>Données de performance du site web (via des outils d'analyse comme Google Analytics)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">3.3 Renseignements provenant de tiers</h3>
                                    <ul className="list-disc pl-8 space-y-1">
                                        <li>Données provenant de platformes publicitaires (Google Ads, Facebook/Meta Ads)</li>
                                        <li>Informations partagées via nos formulaires de contact ou de prise de rendez-vous</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">4. Finalités de la collecte</h2>
                            <p className="mb-4">Les renseignements personnels sont collectés uniquement pour les finalités suivantes :</p>
                            <ul className="list-disc pl-8 space-y-1 mb-4">
                                <li>Fournir nos services de traitement de l'eau résidentielle (adoucisseurs, filtration, osmose inverse, etc.)</li>
                                <li>Planifier et réaliser des visites à domicile et des tests d'eau gratuits</li>
                                <li>Communiquer avec vous pour répondre à vos demandes d'information ou de soumission</li>
                                <li>Vous transmettre des informations pertinentes sur nos produits et services (avec votre consentement)</li>
                                <li>Améliorer notre site web et nos services grâce à l'analyse des données de navigation</li>
                                <li>Respecter nos obligations légales et réglementaires</li>
                                <li>Prévenir la fraude et assurer la sécurité de nos systèmes informatiques</li>
                            </ul>
                            <p className="font-medium">
                                Nous ne collectons que les renseignements strictement nécessaires aux fins énoncées ci-dessus, conformément au principe de minimisation des données.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">5. Base juridique du traitement</h2>
                            <p className="mb-4">Le traitement de vos renseignements personnels repose sur l'une ou plusieurs des bases légales suivantes :</p>
                            <ul className="list-disc pl-8 space-y-1 mb-4">
                                <li>Votre consentement exprès, obtenu lors de la soumission d'un formulaire ou de la prise de rendez-vous</li>
                                <li>L'exécution d'un contrat ou de mesures précontractuelles à votre demande</li>
                                <li>Le respect d'une obligation légale applicable à Bricareau Water Specialist</li>
                                <li>La poursuite de nos intérêts légitimes, dans le respect de vos droits fondamentaux</li>
                            </ul>
                            <p className="italic">
                                Conformément à la Loi 25, vous pouvez retirer votre consentement en tout temps, sous réserve de contraintes légales ou contractuelles.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">6. Communication des renseignements personnels</h2>
                            <p className="mb-4 uppercase font-bold text-sm tracking-tight text-[#1a5a8a]">Bricareau Water Specialist ne vend pas vos renseignements personnels.</p>
                            <p className="mb-4">Nous pouvons les partager uniquement dans les situations suivantes :</p>
                            
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">6.1 Prestataires de services</h3>
                                    <p className="mb-2">Nous faisons appel à des tiers de confiance pour des services tels que :</p>
                                    <ul className="list-disc pl-8 space-y-1 mb-2">
                                        <li>Hébergement web et maintenance du site</li>
                                        <li>Envoi de courriels transactionnels et marketing (ex. : Mailchimp, Brevo)</li>
                                        <li>Outils d'analyse web (ex. : Google Analytics, Meta Pixel)</li>
                                        <li>Gestion de la relation client (CRM)</li>
                                    </ul>
                                    <p className="text-sm italic">Ces prestataires sont tenus de respecter la confidentialité de vos données et ne peuvent les utiliser qu'aux fins pour lesquelles elles leur ont été communiquées.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">6.2 Obligations légales</h3>
                                    <p>Nous pouvons divulguer vos renseignements personnels si la loi nous y oblige, dans le cadre d'une procédure judiciaire ou à la demande d'une autorité gouvernementale compétente.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">6.3 Communication hors Québec</h3>
                                    <p>Si des renseignements personnels sont communiqués à l'extérieur du Québec (ex. : serveurs situés aux États-Unis), nous effectuons une évaluation des facteurs relatifs à la vie privée (EFVP) et prenons les mesures contractuelles nécessaires pour assurer une protection équivalente à celle prévue par la loi québécoise.</p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">7. Conservation et destruction des renseignements</h2>
                            <p className="mb-4">
                                Vos renseignements personnels sont conservés uniquement pour la durée nécessaire à l'accomplissement des fins pour lesquelles ils ont été collectés, ou selon les délais imposés par la loi.
                            </p>
                            <p className="mb-4">
                                À l'expiration de la période de conservation, les renseignements personnels sont détruits de manière sécuritaire ou anonymisés de façon à ce qu'il ne soit plus possible de vous identifier.
                            </p>
                            <p className="mb-2">En général, nous appliquons les durées de conservation suivantes :</p>
                            <ul className="list-disc pl-8 space-y-1">
                                <li>Clients actifs : durée de la relation d'affaires plus 3 ans</li>
                                <li>Prospects (formulaires de contact) : 12 mois à compter du dernier contact</li>
                                <li>Données de navigation : 24 mois maximum</li>
                                <li>Données comptables et fiscales : 7 ans, conformément à la législation fiscale canadienne</li>
                            </ul>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">8. Vos droits</h2>
                            <p className="mb-4">Conformément à la Loi 25 et à la LPRPDE, vous disposez des droits suivants concernant vos renseignements personnels :</p>
                            
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">8.1 Droit d'accès</h3>
                                    <p>Vous avez le droit d'obtenir une copie des renseignements personnels que nous détenons à votre sujet.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">8.2 Droit de rectification</h3>
                                    <p>Si vos renseignements sont inexacts, incomplets ou équivoques, vous pouvez demander leur correction.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">8.3 Droit à l'effacement</h3>
                                    <p>Vous pouvez demander la suppression de vos renseignements personnels lorsque leur conservation n'est plus justifiée, sous réserve de nos obligations légales.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">8.4 Droit à la portabilité</h3>
                                    <p>Vous avez le droit de recevoir, dans un format technologique structuré et couramment utilisé, les renseignements personnels que vous nous avez fournis.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">8.5 Droit de retrait du consentement</h3>
                                    <p>Vous pouvez retirer votre consentement à tout moment pour les traitements basés sur celui-ci, sans effet rétroactif.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">8.6 Droit de refus à la prospection commerciale</h3>
                                    <p className="mb-4">
                                        Vous pouvez en tout temps vous désabonner de nos communications marketing en cliquant sur le lien de désabonnement présent dans nos courriels ou en nous contactant directement.
                                    </p>
                                </div>
                            </div>
                            <p className="font-medium mt-6 italic">
                                Pour exercer l'un de ces droits, veuillez nous contacter à l'adresse courriel indiquée à l'article 1 de la présente politique. Nous traiterons votre demande dans un délai de 30 jours.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 9 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">9. Témoins (cookies) et technologies similaires</h2>
                            <p className="mb-4">Notre site web utilise des témoins (cookies) et des technologies similaires pour améliorer votre expérience de navigation et analyser notre trafic.</p>
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">9.1 Types de témoins utilisés</h3>
                                    <ul className="list-disc pl-8 space-y-1 mb-4">
                                        <li><span className="font-bold">Témoins essentiels :</span> nécessaires au bon fonctionnement du site</li>
                                        <li><span className="font-bold">Témoins analytiques :</span> pour comprendre comment les visiteurs utilisent le site (Google Analytics)</li>
                                        <li><span className="font-bold">Témoins publicitaires :</span> pour mesurer l'efficacité de nos campagnes publicitaires (Google Ads, Meta Pixel)</li>
                                        <li><span className="font-bold">Témoins de préférences :</span> pour mémoriser vos choix et paramètres</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-[#1a5a8a] mb-2">9.2 Gestion de votre consentement</h3>
                                    <p className="mb-4">
                                        Lors de votre première visite sur notre site, un bandeau de consentement vous informe de l'utilisation des témoins. Vous pouvez modifier vos préférences à tout moment via les paramètres de votre navigateur ou notre outil de gestion des cookies.
                                    </p>
                                    <p className="text-sm italic">
                                        Pour en savoir plus sur la gestion des cookies, vous pouvez consulter le site de l'Office québécois de la protection des renseignements personnels (OQLF) ou les paramètres d'aide de votre navigateur.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 10 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">10. Sécurité des renseignements personnels</h2>
                            <p className="mb-4">
                                Bricareau Water Specialist met en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos renseignements personnels contre tout accès non autorisé, divulgation, modification ou destruction accidentelle, notamment :
                            </p>
                            <ul className="list-disc pl-8 space-y-1 mb-4">
                                <li>Chiffrement des données en transit (protocole SSL/TLS)</li>
                                <li>Accès restreint aux renseignements personnels sur la base du besoin d'en connaître</li>
                                <li>Mots de passe sécurisés et authentification à deux facteurs pour les systèmes internes</li>
                                <li>Mise à jour régulière de nos systèmes et logiciels</li>
                                <li>Formation de notre personnel sur la protection des renseignements personnels</li>
                            </ul>
                            <p>
                                En cas d'incident de confidentialité (accès, utilisation ou communication non autorisée) susceptible de causer un préjudice sérieux, nous vous en informerons et aviserons la Commission d'accès à l'information (CAI) du Québec, conformément à la Loi 25.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 11 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">11. Décision automatisée</h2>
                            <p className="mb-4">
                                Bricareau Water Specialist peut utiliser des outils d'analyse automatisée (ex. : ciblage publicitaire, personnalisation du contenu web) basés sur vos données de navigation. Ces traitements ne donnent pas lieu à des décisions produisant des effets juridiques significatifs à votre égard.
                            </p>
                            <p>
                                Si nous devions recourir à de telles décisions automatisées, nous vous en informerions préalablement et vous garantirions le droit à une intervention humaine.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 12 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">12. Liens vers des sites tiers</h2>
                            <p>
                                Notre site web peut contenir des liens vers des sites tiers (partenaires, fournisseurs, réseaux sociaux). Bricareau Water Specialist n'est pas responsable des pratiques de confidentialité de ces sites. Nous vous encourageons à consulter leur politique de confidentialité respective.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 13 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">13. Mineurs</h2>
                            <p>
                                Nos services sont destinés aux adultes. Nous ne collectons pas sciemment de renseignements personnels auprès de personnes âgées de moins de 14 ans sans le consentement préalable de leurs parents ou tuteurs légaux. Si vous êtes parent ou tuteur et avez des raisons de croire que votre enfant nous a fourni des renseignements personnels, veuillez nous contacter afin que nous puissions supprimer ces informations.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 14 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">14. Modifications à la politique de confidentialité</h2>
                            <p className="mb-4">
                                Bricareau Water Specialist se réserve le droit de modifier la présente politique de confidentialité en tout temps. Toute modification sera publiée sur notre site web avec indication de la date de mise à jour. Si les modifications sont substantielles, nous vous en informerons par courriel ou par un avis bien visible sur notre site web.
                            </p>
                            <p>
                                Nous vous encourageons à consulter régulièrement cette page pour vous tenir informé de nos pratiques en matière de protection des renseignements personnels.
                            </p>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 15 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">15. Recours et plaintes</h2>
                            <p className="mb-4">
                                Si vous estimez que vos renseignements personnels n'ont pas été traités conformément à la présente politique ou à la législation applicable, vous avez le droit de déposer une plainte auprès de :
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-1">
                                    <p className="font-bold">Commission d'accès à l'information du Québec (CAI)</p>
                                    <p>Site web : <a href="http://www.cai.gouv.qc.ca" className="text-blue-600 underline">www.cai.gouv.qc.ca</a></p>
                                    <p>Téléphone : 1 888 528-7741</p>
                                    <p>Adresse : 525, boul. René-Lévesque Est, bureau 2.36, Québec (Québec) G1R 5S9</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="font-bold">Commissariat à la protection de la vie privée du Canada (CPVP)</p>
                                    <p>Site web : <a href="http://www.priv.gc.ca" className="text-blue-600 underline">www.priv.gc.ca</a></p>
                                    <p>Téléphone : 1 800 282-1376</p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-100" />

                        {/* Section 16 */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a5a8a] mb-4">16. Entrée en vigueur</h2>
                            <p className="mb-4">
                                La présente politique de confidentialité entre en vigueur le <span className="font-bold">24 mars 2026</span> et remplace toute politique antérieure.
                            </p>
                            <p className="italic mb-6">
                                En utilisant notre site web ou nos services, vous reconnaissez avoir lu, compris et accepté les termes de la présente politique de confidentialité.
                            </p>
                            <p className="font-bold tracking-widest text-[#1a5a8a] text-center mt-12">— Bricareau Water Specialist —</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PolitiqueConfidentialite;
