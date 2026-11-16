<?php
/**
 * Sustainability, English (translation of pages/durabilite.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'sustainability',
	'title'           => 'Sustainability',
	'translation_of'  => 'durabilite',
	'seo_title'       => 'Sustainability | Bricareau',
	'seo_description' => 'Bricareau water filtration systems end your dependence on plastic bottles: less waste, less CO2 and exceptional water for homes and businesses.',
	'menu_order'      => 12,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'fadeStop' => '33',
				'title'    => 'A lasting commitment *to you and the environment.*',
				'text'     => 'Because sustainability is at the heart of what we do, our water filtration systems are designed to combine performance and respect for the environment. At home or at work, Bricareau ends your dependence on plastic bottles and gives you exceptional water, protecting everyone\'s health and the future of our planet.',
				'ctaText'  => 'Discover our commitment',
				'ctaUrl'   => '#notre-engagement',
				'image'    => $img( '2233.jpg', 'Bricareau sustainability' ),
			),
		),
		array(
			'bricareau/statement',
			array(
				'anchor' => 'notre-engagement',
				'theme'  => 'dark',
				'label'  => 'Our commitment',
				'title'  => "Redefining the\n*environmental standard.*",
				'text'   => "In the face of the environmental emergency, every decision counts. Preserving our natural resources and drastically reducing our environmental footprint is no longer optional: it is a shared responsibility.\n\nThat is the vision behind Bricareau. We rethought the water cycle to eliminate single-use plastics for good, designing cutting-edge purification systems that deliver unmatched purity straight from your tap.",
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'anchor'     => 'nos-piliers',
				'variant'    => 'numbered',
				'background' => 'light',
				'label'      => 'A greener future',
				'title'      => "Why choose\n*sustainable treatment?*",
				'rows'       => array(
					array(
						'title' => 'Reduce waste',
						'text'  => 'Making a single water bottle wastes about three litres of water, plus a considerable amount of energy. All of that waste can be avoided by choosing our filtration solutions.',
						'image' => $img( 'bouteilles-plastiques.jpg', 'Reduce waste - Bricareau filtration' ),
					),
					array(
						'title' => 'Less CO₂',
						'color' => 'green',
						'text'  => 'Producing single-use bottles is not only wasteful: transporting and distributing them also creates an unnecessary carbon footprint.',
						'image' => $img( '2229.jpg', 'Less CO2 - Bricareau filtration' ),
					),
					array(
						'title' => 'Healthy lifestyle',
						'text'  => 'By choosing our sustainable solutions, you set a real example of sustainable living. Discover how simple and convenient filtered water is.',
						'image' => $img( '2234.jpg', 'Healthy lifestyle - professional water analysis' ),
					),
				),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'label'      => 'Client reviews',
				'labelStyle' => 'pill',
				'title'      => "A sustainable commitment\n*rewarded.*",
				'count'      => 6,
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'overlay'     => 'dark',
				'titleWeight' => 'light',
				'title'       => "*Join*\nthe movement.",
				'text'        => 'Join the thousands of Quebecers who have said no to plastic bottles. Our sustainability experts are here to advise you on the best water management practices.',
				'ctaText'     => 'Go sustainable',
				'ctaUrl'      => '/consultation',
				'image'       => $img( '2232.jpg', 'Bricareau sustainability' ),
			),
		),
	),
);
