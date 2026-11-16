<?php
/**
 * Breweries — src/pages/SolutionsBrasseries.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'solutions-brasseries',
	'title'           => 'Solutions pour brasseries',
	'seo_title'       => 'Solutions pour Brasseries | Bricareau',
	'seo_description' => "Sublimez le profil de vos bières grâce à une eau parfaitement maîtrisée. Nos solutions de filtration de pointe vous permettent d'ajuster votre profil minéral avec une régularité absolue, tout en optimisant le rendement de vos brassins et en réduisant votre empreinte écologique.",
	'menu_order'      => 42,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "L'effervescence *pure* pour votre brasserie.",
				'text'        => "Sublimez le profil de vos bières grâce à une eau parfaitement maîtrisée. Nos solutions de filtration de pointe vous permettent d'ajuster votre profil minéral avec une régularité absolue, tout en optimisant le rendement de vos brassins et en réduisant votre empreinte écologique.",
				'ctaText'     => 'Planifiez une consultation',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( '2150573931.jpg', "L'effervescence pure pour votre brasserie" ),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'       => "L'INGRÉDIENT LE PLUS CRITIQUE",
				'title'         => 'Sublimez le profil de brassage de vos *bières.*',
				'body'          => "L'eau représente plus de 95% de la composition de votre bière. Elle dicte la performance de vos levures, l'extraction de vos houblons et la clarté du produit fini. Nos solutions de filtration et de traitement d'eau sur mesure pour microbrasseries garantissent un profil minéral constant, une élimination totale du chlore et une pureté bactériologique absolue. Protégez vos cuves, optimisez vos recettes et assurez la répétabilité parfaite de chaque brassin.",
				'ctaText'       => 'En savoir plus',
				'ctaUrl'        => '#brewery-benefits',
				'image'         => $img( '2150573920.jpg', "Systèmes d'eau sur mesure pour brasseries" ),
				'imagePosition' => 'left',
			),
		),
		array(
			'bricareau/accordion-split',
			array(
				'anchor'    => 'brewery-benefits',
				'label'     => "L'INGÉNIERIE DU BRASSAGE",
				'title'     => "Ce que nous apportons à l'excellence de vos brassins.",
				'intro'     => "Pour les maîtres brasseurs, chaque détail moléculaire compte. Notre ingénierie de l'eau permet de calibrer les minéraux, d'éradiquer le chlore et de garantir une pureté microbiologique totale. Donnez à vos recettes la constance et la grandeur qu'elles méritent.",
				'image'     => $img( '5879.png', "Schéma technique de filtration et de profilage d'eau pour brasseries" ),
				'imageSide' => 'left',
				'items'     => array(
					array( 'title' => 'Ajustement du profil minéral', 'text' => "Équilibrez précisément le rapport sulfate/chlorure et la dureté pour accentuer l'amertume tranchante de vos IPA ou la rondeur veloutée de vos stouts. Un contrôle total du pH de votre eau d'empâtage." ),
					array( 'title' => 'Déchloration absolue', 'text' => 'Élimination complète du chlore et des chloramines pour bannir les phénols et les goûts médicaux ou plastiques de vos bières, libérant ainsi des arômes de malt et de houblon d\'une netteté parfaite.' ),
					array( 'title' => 'Stérilité microbiologique', 'text' => "Intégration d'une protection UV-C et d'une ultrafiltration en amont pour éliminer tout risque de contamination par des bactéries sauvages ou des levures indésirables, préservant la stabilité de vos produits." ),
					array( 'title' => 'Préservation des équipements', 'text' => "Adoucissement et déminéralisation ciblés pour empêcher l'entartrage de vos chaudières à vapeur, échangeurs de chaleur à plaques et fermenteurs, réduisant considérablement vos cycles CIP." ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant' => 'icon',
				'label'   => 'NOTRE SERVICE BRASSICOLE',
				'title'   => 'Optimiser & sécuriser vos opérations de *brassage.*',
				'rows'    => array(
					array( 'subtitle' => 'Répétabilité des Recettes', 'title' => "Systèmes d'osmose inverse", 'icon' => 'droplets', 'text' => "Générez une eau de base parfaitement pure grâce à nos systèmes d'osmose inverse, puis réintroduisez avec précision les sels minéraux spécifiques à chaque style de bière, de la Pilsner traditionnelle à la NEIPA moderne.", 'image' => $img( 'UV system installation to kill bacteria.png', "Équipement d'osmose inverse industriel de haute technologie conçu par Bricareau" ) ),
					array( 'subtitle' => 'Ingénierie & Intégration CIP', 'title' => 'Skids de Filtration sur mesure & CIP', 'icon' => 'settings', 'text' => "Nous concevons des stations de traitement compactes qui s'intègrent directement à vos conduites et systèmes de nettoyage en place (CIP). Optimisez l'encombrement au sol tout en réduisant la consommation d'eau et de produits chimiques.", 'image' => $img( '0454.jpg', 'Station modulaire de filtration et skid de traitement pour microbrasseries' ) ),
					array( 'subtitle' => 'Disponibilité & Stabilité', 'title' => 'Audits de Qualité & Support 24/7', 'icon' => 'shield-check', 'text' => "Notre équipe technique et nos ingénieurs experts interviennent en urgence 24/7 pour veiller à la constance de votre eau. De plus, nos contrats d'entretien préventif garantissent la disponibilité permanente de vos lignes de production.", 'image' => $img( '10271.jpg', "Technicien Bricareau effectuant la maintenance préventive d'une station de traitement" ) ),
				),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'label' => 'AVIS CLIENTS',
				'title' => 'La satisfaction de nos maîtres brasseurs.',
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'     => 'OPTIMISATION & PERFORMANCE BRASSICOLE',
				'title'     => 'Garantissez la signature gustative de vos bières, brassin après brassin.',
				'text'      => "Des solutions de filtration et de traitement d'eau sur mesure pour éliminer les chloramines, équilibrer les profils ioniques et écarter tout risque microbiologique. Assurez la réputation et la constance de votre brasserie dès aujourd'hui.",
				'image'     => $img( '2149757160.jpg', 'Technicien inspectant les systèmes de filtration de la brasserie - Solution Bricareau' ),
				'phoneText' => 'Parlez à un expert',
				'ctaText'   => 'Planifiez une consultation gratuite',
				'ctaUrl'    => '/contact-entreprises',
			),
		),
		array(
			'bricareau/case-cards',
			array(
				'label'   => 'CAS DE RÉUSSITE BRASSICOLE',
				'title'   => 'Ressources connexes & Études de cas.',
				'ctaText' => 'Toutes les ressources',
				'ctaUrl'  => '/blog',
				'items'   => array(
					array( 'label' => 'Étude de cas : Microbrasserie', 'title' => "Profilage minéral complet d'une microbrasserie à Montréal.", 'text' => "Découvrez comment notre solution d'osmose inverse couplée à une minéralisation précise a stabilisé le goût des IPA et éliminé les variations saisonnières d'eau.", 'url' => '/blog', 'linkText' => "Lire l'étude de cas" ),
					array( 'label' => 'Étude de cas : Brasserie de Débit', 'title' => 'Déchloration complète et filtration à Sherbrooke.', 'text' => "Élimination absolue de tout composé phénolique et microbiologique grâce à un système d'ultrafiltration industrielle, assurant 50 000 hl/an de pureté.", 'url' => '/blog', 'linkText' => "Lire l'étude de cas" ),
					array( 'label' => 'Étude de cas : Économie Circulaire', 'title' => "Réutilisation d'eau et optimisation CIP pour brasserie verde.", 'text' => "Une solution de filtration innovante permettant de recycler plus de 30% de l'eau de lavage et de rinçage chaud des cuves sans aucun risque sanitaire.", 'url' => '/blog', 'linkText' => "Lire l'étude de cas" ),
				),
			),
		),
	),
);
