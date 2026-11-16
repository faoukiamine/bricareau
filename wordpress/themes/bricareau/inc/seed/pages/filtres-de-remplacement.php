<?php
/**
 * Filtres de remplacement — src/pages/Filtres-de-remplacement.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'             => 'filtres-d-eau-de-remplacement',
	'title'            => 'Filtres de remplacement',
	'breadcrumb_label' => 'Filtres de remplacement',
	'seo_title'        => "Filtres de remplacement d'eau au Québec | Cartouches et Médias | Bricareau",
	'seo_description' => "Large sélection de filtres de remplacement au Québec : sédiments, charbon actif, membrane osmose inverse et cartouches anti-calcaire. Maintenez la pureté de votre eau.",
	'menu_order'       => 36,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "Cartouches filtrantes\nde remplacement",
				'text'        => "Trouvez facilement le filtre d'eau de remplacement idéal pour votre système de filtration résidentiel, commercial ou industriel.",
				'ctaText'     => 'Trouver mon filtre',
				'ctaUrl'      => '#solutions-catalog',
				'phoneButton' => true,
				'image'       => $img( 'Big-Blue-Filter-Housing-banner.webp', 'Boîtiers de filtres' ),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'    => 'solutions-catalog',
				'variant'   => 'catalog',
				'title'     => "Filtres de remplacement :\n*La pureté préservée*, jour après jour.",
				'intro'     => 'Identifiez facilement le filtre compatible avec votre système pour garantir une performance optimale.',
				'linkText'  => 'Demander un prix',
				'products'  => array(
					array( 'name' => 'Filtres à sédiments', 'image' => $img( 'Polypropylene.svg', 'Filtre à sédiments' ), 'url' => '/contact-form', 'text' => 'Élimine efficacement le sable, la poussière, la rouille et les particules en suspension. Protège vos équipements ménagers et préserve la clarté de votre eau dès son entrée.' ),
					array( 'name' => 'Filtres à bobine', 'image' => $img( 'String Wound Cartridge Filters.png', 'Filtre à bobine' ), 'url' => '/contact-form', 'text' => 'Conçu pour une filtration en profondeur avec une grande capacité de rétention des impuretés. Idéal pour les eaux chargées en sédiments fins ou pour des applications industrielles.' ),
					array( 'name' => 'Filtres à papier plissé', 'image' => $img( 'Pleated Water Filters.png', 'Filtre plissé' ), 'url' => '/contact-form', 'text' => "Offre une surface de filtration maximale pour un débit d'eau optimal. Lavables et réutilisables, ils constituent une solution économique pour capturer les sédiments grossiers." ),
					array( 'name' => 'Filtres à charbon actif granulé', 'image' => $img( 'gac water filters.png', 'Filtre au charbon actif granulé' ), 'url' => '/contact-form', 'text' => "Élimine le chlore, les mauvais goûts et les odeurs désagréables de l'eau. Idéal pour améliorer la qualité gustative de l'eau potable au robinet." ),
					array( 'name' => 'Filtres à charbon actif en bloc', 'image' => $img( 'cbc water filters.png', 'Filtre au charbon actif en bloc' ), 'url' => '/contact-form', 'text' => 'Technologie de compression avancée offrant une double action : filtration fine des sédiments et absorption maximale du chlore, des composés organiques et des résidus de pesticides.' ),
					array( 'name' => 'Filtres anti calcaire', 'image' => $img( 'Water Softening Filters.png', 'Filtre anticalcaire' ), 'url' => '/contact-form', 'text' => 'Prévient activement la formation de tartre et de dépôts calcaires sur les éléments chauffants de vos appareils. Idéal pour prolonger la durée de vie de vos équipements.' ),
					array( 'name' => 'Filtres de déionisation', 'image' => $img( 'deionized water filters.png', 'Filtre de déionisation' ), 'url' => '/contact-form', 'text' => "Produit une eau d'une pureté absolue sans aucun minéral dissous (zéro TDS). Indispensable pour les laboratoires, l'aquariophilie et les applications industrielles de haute précision." ),
					array( 'name' => 'Filtres inline', 'image' => $img( 'inline water filters.png', 'Filtre inline' ), 'url' => '/contact-form', 'text' => 'Cartouches compactes prêtes à l\'emploi, parfaites pour les réfrigérateurs, les machines à café et les systèmes d\'osmose inverse sous évier. Installation simple et rapide.' ),
				),
				'ctaTitle'  => "Besoin d'aide pour choisir le bon filtre ?",
				'ctaText'   => 'Nos experts en traitement d\'eau sont à votre disposition pour vous guider vers le modèle exact adapté à votre équipement.',
				'ctaButton' => 'Consulter un expert',
				'ctaUrl'    => '/contact',
			),
		),
	),
);
