<?php
/**
 * Services — src/pages/Services-de-traitement-eau.tsx (also /service, redirected in inc/blog.php).
 *
 * @var callable $img  fn( string $asset, string $alt ): array
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'            => 'services-de-traitement-eau',
	'title'           => "Services de traitement d'eau",
	'seo_title'       => 'Services & Entretien Bricareau | Expertise en Traitement d\'Eau',
	'seo_description' => 'Bénéficiez d\'une maintenance experte pour vos adoucisseurs et systèmes de filtration au Québec. Mise en service, dépannage et contrats d\'entretien Bricareau.',
	'menu_order'      => 74,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'     => 'product',
				'title'      => "*Expertise & sérénité,* des services dédiés à votre tranquillité.",
				'text'       => "Bricareau s'engage à vos côtés pour simplifier le suivi, l'entretien et la performance de vos installations d'eau, partout au Québec.",
				'ctaText'    => 'Planifier un service',
				'ctaUrl'     => '#contact-form',
				'image'      => $img( 'SERVICES.jpg', 'Services Bricareau - Expertise technique' ),
				'trustItems' => array(
					array( 'icon' => 'clock', 'label' => 'Intervention sous 24h', 'value' => 'Urgences prioritaires' ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant' => 'numbered',
				'label'   => 'SÉRÉNITÉ',
				'title'   => 'Une expertise complète *pour votre eau*',
				'intro'   => "De l'installation à la maintenance préventive, nos techniciens certifiés assurent la pérennité de vos équipements de traitement d'eau à travers tout le Québec.",
				'rows'    => array(
					array( 'title' => 'Mise en service certifiée', 'text' => "L'installation par un expert certifié garantit la validité de votre garantie et la performance optimale de votre système dès le premier jour.", 'bullets' => "Calibration précise\nTests d'étanchéité\nFormation utilisateur", 'image' => $img( 'cae3c0a4-5b4d-4b0e-8bc3-3550a714f7bb.jpg', 'Expertise technique certifiée Bricareau' ) ),
					array( 'title' => 'Entretien préventif durable', 'text' => 'Un système bien entretenu dure deux fois plus longtemps. Nos techniciens réalisent un diagnostic complet et le nettoyage de vos composants.', 'bullets' => "Nettoyage résine\nVérification vannes\nLivraison consommables", 'image' => $img( 'Water-Softener-installation.jpg', "Entretien de système d'eau" ) ),
					array( 'title' => 'Dépannage expert 24/7', 'text' => "Votre système montre des signes de fatigue ? Nous intervenons sur toutes les marques du marché pour restaurer la qualité de votre eau.", 'bullets' => "Diagnostic rapide\nPièces d'origine\nRéparation garantie", 'image' => $img( 'SERVICES.jpg', 'Dépannage expert Bricareau' ) ),
					array( 'title' => "Analyses d'eau expertes", 'text' => 'Évaluez la qualité de votre eau avec des tests certifiés et recevez un diagnostic complet sous 48h pour une solution sur mesure.', 'bullets' => "Tests certifiés\nRapport détaillé\nSolutions sur-mesure", 'image' => $img( 'test-laboratoire-diligence-inspection-750x500.jpg', 'Analyses de laboratoire certifiées - expert en eau' ) ),
				),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'title'         => "Bricareau Care\n*Contrats d'entretien All-Inclusive.*",
				'body'          => 'Ne vous souciez plus jamais de la qualité de votre eau. Nos plans d\'entretien annuels assurent un suivi proactif de vos équipements pour une tranquillité totale.',
				'bullets'       => "Garantie étendue pièces & Main d'oeuvre\nDépannage prioritaire sous 24h\nAnalyses d'eau incluses\nSuivi par un technicien dédié",
				'ctaText'       => 'Parlez avec un conseiller',
				'ctaUrl'        => 'tel:18552649328',
				'image'         => $img( 'cae3c0a4-5b4d-4b0e-8bc3-3550a714f7bb.jpg', 'Service Bricareau Care' ),
				'imagePosition' => 'left',
				'cardTitle'     => '+25 Ans',
				'cardText'      => 'de service',
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'  => 'PERFORMANCE',
				'title'    => "Performance & Protection\n*Une maintenance d'élite pour vos systèmes d'eau.*",
				'body'     => "Optimisez la performance et la longévité de vos adoucisseurs et filtres d'eau partout au Québec. Un entretien régulier par nos techniciens certifiés assure une élimination efficace du calcaire et des contaminants, protège vos installations de plomberie et garantit une eau d'une qualité exceptionnelle pour toute votre famille.",
				'bullets'  => "Valves & Contrôleurs : expertise multimarques (Fleck, Clack, Autotrol).\nRebed : changement des résines et médias filtrants haute qualité.\nNettoyage et Désinfection : traitement antibactérien des réservoirs de sel.\nOptimisation Éco : réglages fins pour minimiser les rejets d'eau et la consommation de sel.",
				'ctaText'  => 'Planifiez un service',
				'ctaUrl'   => '#contact-form',
				'image'    => $img( 'Water-Softener-installation.jpg', "Maintenance adoucisseur d'eau Bricareau" ),
				'cardText' => '"Une valve bien réglée peut économiser jusqu\'à 30% de sel par an."',
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'       => 'PURITÉ',
				'title'         => "Pureté & Santé\n*Savourez une eau d'une pureté exceptionnelle.*",
				'body'          => "Assurez la pureté cristalline de votre eau potable municipale ou de puits. Le remplacement périodique des membranes et des filtres de votre système d'osmose inverse est essentiel pour éliminer 99% des contaminants et garantir une hygiène irréprochable.",
				'bullets'       => "Filtres d'eau de haute qualité : remplacement semestriel pour protéger la membrane.\nMembranes TFC : tests de pureté et remplacement tous les 2-3 ans.\nBiofilm & Hygiène : désinfection complète du réservoir de stockage.\nAnalyse de TDS : vérification instantanée de l'efficacité de filtration.",
				'ctaText'       => 'Réservez votre entretien',
				'ctaUrl'        => '#contact-form',
				'image'         => $img( 'RO service.png', "Maintenance système d'osmose inverse - traitement d'eau Québec" ),
				'imagePosition' => 'left',
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow' => 'ANALYSE',
				'title'   => "Diagnostic & Précision\n*Révélez ce que votre eau vous cache.*",
				'body'    => "L'apparence cristalline de votre eau ne garantit pas sa pureté. Bricareau déploie des protocoles d'analyse scientifique pour identifier les contaminants invisibles qui impactent votre santé et vos installations. Du calcaire aux métaux lourds, notre diagnostic cible la racine de vos problèmes d'eau pour déployer la solution de traitement parfaitement adaptée.",
				'bullets' => "Analyse certifiée des minéraux et bactéries\nScan des métaux lourds\nRapport d'analyse détaillé",
				'ctaText' => 'Voir toutes les analyses',
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( 'step-diagnostic.png', "Diagnostic digital d'eau Bricareau" ),
			),
		),
		array(
			'bricareau/form-section',
			array(
				'anchor'          => 'contact-form',
				'layout'          => 'contact',
				'formId'          => $form( 'contact' ),
				'title'           => 'Formulaire de demande',
				'intro'           => 'Réponse technique sous 15 minutes.',
				'asideItems'      => array(
					array( 'icon' => 'phone-call', 'title' => 'Appel sans frais', 'value' => '1-855-264-9328', 'sub' => 'SUPPORT' ),
					array( 'icon' => 'calendar', 'title' => 'Disponibilités', 'value' => 'Lun - Ven : 8h00 - 18h00', 'sub' => 'SUPPORT' ),
					array( 'icon' => 'map-pin', 'title' => "Zone d'intervention", 'value' => 'Partout au Grand Montréal et ses environs', 'sub' => 'Périmètre de 300km' ),
				),
				'panelTitle'      => "Besoin d'aide immédiate?",
				'panelText'       => 'Nos techniciens sont prêts à répondre à vos questions techniques complexes dès maintenant.',
				'panelButtonText' => 'Appelez un technicien',
				'panelButtonUrl'  => 'tel:18552649328',
			),
		),
	),
);
