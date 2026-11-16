<?php
/**
 * City pages, English (translation of pages/traitement-eau.php).
 *
 * Template of every /en/water-treatment/<ville>/ page (inc/cities.php): {ville} becomes the city name.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'             => 'water-treatment',
	'title'            => 'Water treatment in {ville}',
	'translation_of'   => 'traitement-eau',
	'breadcrumb_label' => 'Water treatment in {ville}',
	'seo_title'        => 'Water Treatment in {ville} | Bricareau',
	'seo_description'  => 'Water treatment expert in {ville}. Water softeners, reverse osmosis and UV systems. Professional installation and free in-home water analysis.',
	'menu_order'       => 90,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'fade',
				'breadcrumbs' => false,
				'title'       => "The water treatment expert\n*in {ville}*",
				'text'        => "Stop leaving your water quality to chance in {ville}. Bricareau offers a complete range of advanced solutions: high-performance water softeners, reverse osmosis stations, UV disinfection lamps and specialized filters. From thorough analysis to installation by our experts, we permanently eliminate scale, iron, chlorine and bacteria, so every drop in your home is pure.",
				'ctaText'     => 'Book a free consultation',
				'ctaUrl'      => '/consultation',
				'image'       => $img( 'undersink_filtration_header.jpg', 'Home water treatment' ),
			),
		),
		array(
			'bricareau/tile-grid',
			array(
				'variant'    => 'cards',
				'label'      => 'Our solutions in {ville}',
				'labelStyle' => 'text',
				'title'      => "Our *water filtration* solutions\nfor your home in {ville}.",
				'intro'      => 'Discover our advanced systems designed specifically for the home. From the water softener that protects your plumbing to the ultra-pure drinking water station in your kitchen, Bricareau guarantees flawless water at every tap.',
				'ctaLabel'   => 'Not sure what you need?',
				'ctaTitle'   => 'Free in-home water analysis in {ville}',
				'ctaText'    => 'An expert tests your water and recommends the right system, with no commitment.',
				'ctaButton'  => 'Book a consultation',
				'ctaShort'   => 'Free water analysis in {ville}',
				'ctaUrl'     => '/consultation',
				'tiles'      => array(
					array( 'title' => "Water\nsofteners", 'label' => 'Zero scale', 'text' => 'Protect your appliances and enjoy softer laundry and less dry skin.', 'image' => $img( 'Adoucisseur_d_eau.png', 'Water softeners' ), 'url' => '/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire', 'size' => 'tall', 'fit' => 'cover' ),
					array( 'title' => "Specialized whole-house\nwater filters", 'label' => 'Complete protection', 'text' => 'A protective barrier where water enters your home. Remove chlorine, sediment and heavy metals from every tap.', 'image' => $img( 'clack-water-softener.webp', 'Specialized whole-house water filters' ), 'url' => '/systemes-de-filtration-d-eau-specialises-pour-toute-la-maison', 'size' => 'wide', 'fit' => 'cover' ),
					array( 'title' => "Under-sink drinking\nwater stations", 'label' => 'Drinking water', 'text' => '99% pure, crystal-clear water for drinking and cooking.', 'image' => $img( '2237.jpeg', 'Under-sink drinking water stations' ), 'url' => '/stations-d-eau-potables-sous-l-evier-de-la-cuisine', 'size' => 'normal', 'fit' => 'cover-dim' ),
					array( 'title' => "UV disinfection\nsystems", 'label' => 'Sterilization', 'text' => 'Neutralizes 99.9% of bacteria and viruses. Ideal for well water.', 'image' => $img( 'Viqua UV System.png', 'UV disinfection systems' ), 'url' => '/systemes-de-desinfection-uv', 'size' => 'normal', 'fit' => 'contain' ),
					array( 'title' => "Water\nfountains", 'label' => 'Elegance', 'text' => 'Cold, room-temperature or sparkling water, with a built-in design.', 'image' => $img( "Fontaines d'eau.webp", 'Water fountains' ), 'url' => '/fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche', 'size' => 'wide-tablet', 'fit' => 'cover' ),
					array( 'title' => "Replacement\nfilters", 'label' => 'Maintenance', 'text' => 'Cartridges and parts to keep your systems running for years.', 'image' => $img( '2148728698.jpg', 'Replacement filters' ), 'url' => '/filtres-d-eau-de-remplacement', 'size' => 'normal', 'fit' => 'cover' ),
					array( 'title' => "Water\ntesting", 'label' => 'Diagnosis', 'text' => 'Professional analysis to understand and solve your water problems.', 'image' => $img( 'water-test.jpg', 'Water testing' ), 'url' => '/analyses-et-tests-d-eau', 'size' => 'normal', 'fit' => 'cover' ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant'        => 'icon',
				'background'     => 'glow',
				'firstImageSide' => 'left',
				'label'          => 'The Bricareau advantages',
				'labelStyle'     => 'line',
				'title'          => "Why invest in\na *water treatment system?*",
				'rows'           => array(
					array(
						'icon'    => 'wallet',
						'color'   => 'navy',
						'title'   => 'Lasting savings.',
						'bullets' => "Use up to 50% less soap and detergent with softened water.\nExtend the life of your appliances and water heater by preventing scale.",
						'image'   => $img( '19570.jpg', 'Savings - custom water systems' ),
					),
					array(
						'icon'    => 'heart',
						'color'   => 'navy',
						'title'   => 'Health and well-being.',
						'bullets' => "No more dry skin and dull hair after a shower.\nDrinking water free of chlorine, lead and other contaminants for the whole family.",
						'image'   => $img( '1499.jpg', 'Health - Bricareau filtration' ),
					),
					array(
						'icon'    => 'leaf',
						'color'   => 'green',
						'title'   => 'An eco-friendly choice.',
						'bullets' => "Say goodbye to plastic bottles and greatly reduce your household waste.\nSystems designed to be highly efficient and cut water waste.",
						'image'   => $img( '108894.jpg', 'Eco-friendly - water treatment in Québec' ),
					),
				),
			),
		),
		array(
			'bricareau/expert-split',
			array(
				'title'      => 'Your water needs a water expert, *not a guess.*',
				'text'       => "Don't let uncertainty flow from your tap. At Bricareau, we turn every analysis into scientific certainty for your family's health.",
				'ctaText'    => 'Book your water analysis',
				'ctaUrl'     => '/analyses-et-tests-d-eau#water-test',
				'image'      => $img( 'water testing.jpeg', 'Bricareau expert during a thorough water analysis' ),
				'imageSide'  => 'right',
				'badge'      => 'stat',
				'badgeValue' => '25+ years',
				'badgeText'  => 'of combined expertise at your service',
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'label'      => 'The Bricareau experience',
				'labelStyle' => 'text',
				'title'      => "One happy family\n*after another.*",
				'count'      => 6,
			),
		),
		array(
			'bricareau/expert-split',
			array(
				'title'        => "Your custom water solution\n*in a few clicks.*",
				'text'         => 'A few steps are all it takes to transform your home water. Identify your priorities and instantly discover the Bricareau system that fits your situation.',
				'ctaText'      => 'Free 2-minute diagnosis',
				'ctaUrl'       => '/diagnostic',
				'image'        => $img( 'discover_expert.jpg', 'Bricareau expert testing water at home' ),
				'imageSide'    => 'right',
				'badge'        => 'social',
				'badgeText'    => 'Joined by 1,000+ households',
				'badgeSubtext' => 'This month',
			),
		),
	),
);
