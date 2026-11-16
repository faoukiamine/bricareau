<?php
/**
 * Industrial hub — src/pages/Industriel.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'industriel',
	'title'           => 'Industriel',
	'seo_title'       => 'Solutions Industrielles | Bricareau',
	'seo_description' => "Que ce soit pour la production de vapeur, le refroidissement ou les processus de fabrication, nous offrons une gamme complète d'équipements pour garantir une meilleure qualité de l'eau industrielle.",
	'menu_order'      => 47,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'  => 'split',
				'title'   => "La puissance de l'eau, *optimisée pour vos procédés.*",
				'text'    => "Que ce soit pour la production de vapeur, le refroidissement ou les processus de fabrication, nous offrons une gamme complète d'équipements pour garantir une meilleure qualité de l'eau industrielle.",
				'ctaText' => 'Demandez une consultation',
				'ctaUrl'  => '/consultation',
				'image'   => $img( '2127.webp', 'Solutions Industrielles Bricareau' ),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'title'   => "Traitement de *l'eau industriel.*",
				'body'    => "L'optimisation des performances industrielles passe inévitablement par un traitement de l'eau rigoureusement adapté. Notre expertise reconnue nous permet de concevoir et de déployer des solutions sur mesure qui répondent aux normes les plus exigeantes de votre secteur d'activité, tout en réduisant de manière drastique votre empreinte écologique.",
				'bullets' => "Normes Industrielles : des solutions conçues pour résister aux environnements les plus rigoureux.\nProtection Continue : garantissez la longévité de vos chaudières et tours de refroidissement.",
				'image'   => $img( "Filtres d'eau industriels.jpg", 'Ingénierie Bricareau' ),
			),
		),
		array(
			'bricareau/tile-grid',
			array(
				'variant' => 'light',
				'title'   => "Toutes nos solutions *pour l'industrie.*",
				'intro'   => "Une gamme exhaustive d'équipements de traitement, dimensionnée pour répondre aux débits massifs et aux exigences chimiques des procédés industriels.",
				'tiles'   => array(
					array( 'label' => 'SÉPARATION', 'title' => 'Filtration sur média spécialisé', 'image' => $img( 'Commercial-Water-Softener.webp', 'Filtration sur média spécialisé' ), 'url' => '/filtration-industrielle' ),
					array( 'label' => 'CONDITIONNEMENT', 'title' => "Adoucissement de l'eau industrielle", 'image' => $img( 'adoucissement-industriel.jpg', "Adoucissement de l'eau industrielle" ), 'url' => '/contact-entreprises' ),
					array( 'label' => 'TRAITEMENT', 'title' => 'Systèmes de dosage chimique', 'image' => $img( 'Pulsafeeder dosing group.jpg', 'Systèmes de dosage chimique' ), 'url' => '/contact-entreprises' ),
					array( 'label' => 'PURIFICATION', 'title' => 'Osmose inverse et déminéralisation', 'image' => $img( 'jpg100.jpg', 'Osmose inverse et déminéralisation' ), 'url' => '/contact-entreprises' ),
					array( 'label' => 'HAUTE PURETÉ', 'title' => "Déminéralisation & Déionisation de l'eau", 'image' => $img( 'DI-Water-System.jpg', "Déminéralisation & Déionisation de l'eau" ), 'url' => '/contact-entreprises' ),
					array( 'label' => 'STÉRILISATION', 'title' => 'Désinfection par ultraviolets', 'image' => $img( 'Aquaviva-Cannes-480x355.png', 'Désinfection par ultraviolets' ), 'url' => '/contact-entreprises' ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant' => 'icon',
				'title'   => 'Des avantages concrets, *pour votre productivité.*',
				'rows'    => array(
					array( 'icon' => 'chart-line', 'title' => 'Rendement Supérieur.', 'text' => "Diminution des coûts opérationnels par l'amélioration du rendement global.", 'bullets' => 'Fiabilisation et optimisation des cycles thermiques de vos procédés.', 'image' => $img( 'skids-sur-mesure.jpg', 'Rendement et Énergie - désinfection UV industrielle' ) ),
					array( 'icon' => 'clock', 'title' => 'Longévité des Équipements.', 'text' => "Prévention totale contre l'entartrage et la corrosion, prolongeant drastiquement la vie de vos installations.", 'bullets' => "Diminution des temps d'arrêt pour une maintenance prédictive et maîtrisée.", 'image' => $img( '2126.webp', 'Durée de vie des équipements - traitement des eaux procédés' ) ),
				),
			),
		),
		array(
			'bricareau/case-cards',
			array(
				'label' => 'RESSOURCES CONNEXES',
				'title' => 'Études de cas *& Réalisations.*',
				'items' => array(
					array( 'label' => 'Microbrasserie', 'title' => "Profilage minéral complet d'une microbrasserie à Montréal.", 'text' => "Découvrez comment notre solution d'osmose inverse couplée à une minéralisation précise a stabilisé le goût des IPA.", 'url' => '/solutions-brasseries', 'linkText' => "Lire l'étude de cas" ),
					array( 'label' => 'Brasserie de débit', 'title' => 'Déchloration complète et filtration à Sherbrooke.', 'text' => "Élimination absolue de tout composé phénolique et microbiologique grâce à un système d'ultrafiltration industrielle.", 'url' => '/solutions-brasseries', 'linkText' => "Lire l'étude de cas" ),
					array( 'label' => 'Économie circulaire', 'title' => "Réutilisation d'eau et optimisation CIP.", 'text' => "Une solution de filtration innovante permettant de recycler plus de 30% de l'eau de lavage et de rinçage chaud des cuves.", 'url' => '/solutions-brasseries', 'linkText' => "Lire l'étude de cas" ),
				),
			),
		),
	),
);
