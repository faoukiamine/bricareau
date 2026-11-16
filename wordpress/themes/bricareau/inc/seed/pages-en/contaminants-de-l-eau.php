<?php
/**
 * Water contaminants, English (translation of pages/contaminants-de-l-eau.php; data in data/en/contaminants.json).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'water-contaminants',
	'title'           => 'Water contaminants',
	'translation_of'  => 'contaminants-de-l-eau',
	'seo_title'       => 'Water Contaminants | Bricareau',
	'seo_description' => 'Learn about the most common pollutants in Québec drinking water and how our systems can protect you from them.',
	'menu_order'      => 72,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'  => 'product',
				'label'   => 'Water quality',
				'title'   => "_Understanding_\nwater contaminants",
				'text'    => 'Learn about the most common pollutants in Québec drinking water and how our systems can protect you from them.',
				'ctaText' => 'Explore the contaminants',
				'ctaUrl'  => '#explorez',
				'image'   => $img( 'Turbide-Water.webp', 'Water contaminants' ),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'anchor'      => 'explorez',
				'variant'     => 'icon-centered',
				'accentStyle' => 'green',
				'title'       => "Why test and filter\n*the water in your home?*",
				'intro'       => 'The water that flows from your taps, whether from a private well or a municipal network, travels a long way before it reaches you. Along the way, it can pick up a range of unwanted elements. Understanding what is in your water is the first step toward truly healthy, safe hydration for your family.',
				'cards'       => array(
					array( 'icon' => 'droplets', 'title' => 'Invisible to the naked eye', 'text' => 'Perfectly clear water can hide dissolved minerals, chemicals or imperceptible micro-organisms.' ),
					array( 'icon' => 'heart-pulse', 'title' => 'Impact on health', 'text' => "Some pollutants, such as lead or bacteria, build up or act quickly, affecting your family's well-being." ),
					array( 'icon' => 'shield-check', 'title' => 'Strict standards', 'text' => 'Health Canada sets strict limits (MACs) to ensure that distributed water remains safe to drink.' ),
				),
			),
		),
		array( 'bricareau/contaminants-guide', array() ),
	),
);
