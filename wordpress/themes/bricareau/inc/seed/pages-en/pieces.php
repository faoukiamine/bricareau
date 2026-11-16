<?php
/**
 * Replacement parts, English (translation of pages/pieces.php; catalog in data/en/parts.json).
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
	json_decode( file_get_contents( BRICAREAU_DIR . '/data/en/parts.json' ), true )
);

return array(
	'slug'            => 'replacement-parts',
	'title'           => 'Replacement parts',
	'translation_of'  => 'pieces',
	'seo_title'       => 'Replacement Parts | Original Filters and Components in Québec | Bricareau',
	'seo_description' => 'Need filters, membranes or cartridges for your water system? Find certified replacement parts at Bricareau. Fast shipping across Québec.',
	'menu_order'      => 77,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "Keep performance up.\n*Replacement parts*",
				'text'        => 'Find the original components you need to keep your water treatment systems running efficiently for years. A careful selection for complete peace of mind.',
				'ctaText'     => 'Talk to an expert',
				'ctaUrl'      => '/contact',
				'phoneButton' => true,
				'image'       => $img( '2148976317.jpg', 'Bricareau replacement parts' ),
				'trustItems'  => array(
					array( 'icon' => 'clock', 'label' => 'Stock', 'value' => 'Ships in 24/48 h' ),
					array( 'icon' => 'shield-check', 'label' => 'Origin', 'value' => 'Certified parts' ),
					array( 'icon' => 'truck', 'label' => 'Shipping', 'value' => 'Across Canada' ),
				),
			),
		),
		array(
			'bricareau/parts-catalog',
			array(
				'label'       => 'SELECTION',
				'title'       => 'Explore our original components.',
				'intro'       => 'Filters, membranes, valves and accessories fully compatible with your systems. Certified quality for optimal performance.',
				'headerAlign' => 'left',
				'helpText'    => 'Need help identifying a part?',
				'helpButton'  => 'Send a photo',
				'helpUrl'     => '/contact-form',
				'categories'  => $categories,
			),
		),
		array(
			'bricareau/cta-band',
			array(
				'label'         => 'SUPPORT',
				'title'         => "Don't waste time: talk to a technician.",
				'text'          => 'Identifying the right part can be complicated. Our experts are trained to give you the exact reference in minutes. A free service to make sure you order the right part the first time.',
				'ctaText'       => '1-855-264-9328',
				'ctaUrl'        => 'tel:18552649328',
				'secondaryText' => 'Book an appointment',
				'secondaryUrl'  => '/services-de-traitement-eau#contact-form',
			),
		),
		array(
			'bricareau/statement',
			array(
				'theme'    => 'white',
				'title'    => 'Service area',
				'text'     => 'We ship your parts anywhere in Canada. For installations, our mobile technicians come to you in Greater Montréal and within a 300 km radius, with all the necessary equipment.',
				'textSize' => 'medium',
			),
		),
	),
);
