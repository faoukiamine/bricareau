<?php
/**
 * Replacement parts — src/pages/Pieces.tsx (catalog in data/parts.json).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

$categories = array_map(
	fn( $category ) => array(
		'name'  => $category['name'],
		'items' => array_map(
			fn( $part ) => array(
				'name'  => $part['name'],
				'image' => empty( $part['image'] ) ? array() : $img( $part['image'], $part['name'] . ' - Bricareau' ),
			),
			$category['items']
		),
	),
	json_decode( file_get_contents( BRICAREAU_DIR . '/data/parts.json' ), true )
);

return array(
	'slug'            => 'pieces',
	'title'           => 'Pièces de remplacement',
	'seo_title'       => 'Pièces de Remplacement | Filtres et Composantes d\'Origine au Québec | Bricareau',
	'seo_description' => 'Besoin de filtres, membranes ou cartouches pour votre système d\'eau ? Trouvez les pièces de remplacement certifiées chez Bricareau. Expédition rapide partout au Québec.',
	'menu_order'      => 77,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "Maintenez la performance.\n*Pièces de Remplacement*",
				'text'        => "Trouvez les composantes d'origine nécessaires pour assurer la pérennité et l'efficacité de vos systèmes de traitement d'eau. Une sélection rigoureuse pour une tranquillité d'esprit totale.",
				'ctaText'     => 'Parler à un expert',
				'ctaUrl'      => '/contact',
				'phoneButton' => true,
				'image'       => $img( '2148976317.jpg', 'Pièces de Remplacement Bricareau' ),
				'trustItems'  => array(
					array( 'icon' => 'clock', 'label' => 'Stock', 'value' => 'Expédition 24/48h' ),
					array( 'icon' => 'shield-check', 'label' => 'Origine', 'value' => 'Pièces Certifiées' ),
					array( 'icon' => 'truck', 'label' => 'Expédition', 'value' => 'Partout au Canada' ),
				),
			),
		),
		array(
			'bricareau/parts-catalog',
			array(
				'label'      => 'SÉLECTION',
				'title'      => "Explorez nos composantes d'origine.",
				'intro'      => 'Filtres, membranes, vannes et accessoires parfaitement compatibles avec vos systèmes. Qualité certifiée pour un rendement optimal.',
				'headerAlign' => 'left',
				'helpText'   => "Besoin d'aide pour identifier une pièce ?",
				'helpButton' => 'Envoyer une photo',
				'helpUrl'    => '/contact-form',
				'categories' => $categories,
			),
		),
		array(
			'bricareau/cta-band',
			array(
				'label'         => 'SUPPORT',
				'title'         => 'Ne perdez pas de temps, parlez à un technicien.',
				'text'          => 'Identifier la bonne pièce peut être complexe. Nos experts sont formés pour vous donner la référence exacte en quelques minutes. Un service gratuit pour vous assurer la bonne commande du premier coup.',
				'ctaText'       => '1-855-264-9328',
				'ctaUrl'        => 'tel:18552649328',
				'secondaryText' => 'Prendre rendez-vous',
				'secondaryUrl'  => '/services-de-traitement-eau#contact-form',
			),
		),
		array(
			'bricareau/statement',
			array(
				'theme' => 'white',
				'title' => "Zone d'intervention",
				'text'  => 'Nous livrons vos pièces partout au Canada. Pour les installations, nos techniciens mobiles se déplacent chez vous au Grand Montréal et un périmètre de 300km avec tout l\'équipement nécessaire.',
				'textSize' => 'medium',
			),
		),
	),
);
