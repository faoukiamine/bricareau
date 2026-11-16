<?php
/**
 * Residential hub, English (translation of pages/residentiel.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'             => 'residential-water-softening-filtration-and-purification-solutions',
	'title'            => 'Residential water solutions',
	'translation_of'   => 'solutions-d-adoucissement-de-filtration-et-de-purification-d-eau-residentielles',
	'breadcrumb_label' => 'Residential',
	'seo_title'        => 'Residential Water Solutions | Bricareau',
	'seo_description'  => 'Water softeners, whole-house filters, under-sink drinking water stations, UV disinfection and water testing for homes in Québec. Free consultation.',
	'menu_order'       => 20,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'split',
				'breadcrumbs' => false,
				'title'       => "The excellence of *perfect water*\nat the heart of your home.",
				'text'        => 'Turn your home water into a crystal-clear, healthy and protective resource. More than 20,000 families in Québec trust us.',
				'ctaText'     => 'Book a free consultation',
				'ctaUrl'      => '/consultation',
				'image'       => $img( '23568974.png', 'Residential excellence - water expert' ),
			),
		),
		array(
			'bricareau/intro-split',
			array(
				'label'      => 'The heart of the home',
				'labelStyle' => 'line',
				'title'      => "*Your family's*\n*well-being* comes first.",
				'text'       => "Water is the heart of your home. Whether for drinking, cooking or bathing, its purity directly affects your daily comfort and the health of the people you love. Don't leave your water quality to chance.",
				'image'      => $img( '1713.jpg', "Your family's well-being - water treatment in Québec" ),
				'imageStyle' => 'offset',
			),
		),
		array(
			'bricareau/tile-grid',
			array(
				'variant' => 'dark',
				'title'   => "Our *water filtration* solutions\nfor your home.",
				'intro'   => 'Discover our advanced systems designed for the home. From the softener that protects your plumbing to the ultra-pure drinking water station for your kitchen, Bricareau guarantees flawless quality at every tap.',
				'tiles'   => array(
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
						'color'   => 'green',
						'title'   => 'Lasting savings.',
						'bullets' => "Use up to 50% less soap and detergent with softened water.\nExtend the life of your appliances and water heater by preventing scale.",
						'image'   => $img( 'Untitled23.png', 'Savings - custom water systems' ),
					),
					array(
						'icon'    => 'heart',
						'color'   => 'navy',
						'title'   => 'Health and well-being.',
						'bullets' => "No more dry skin and dull hair after a shower.\nDrinking water free of chlorine, lead and other contaminants for the whole family.",
						'image'   => $img( 'kid-playing-bathtub.jpg', 'Health - Bricareau filtration' ),
					),
					array(
						'icon'    => 'leaf',
						'color'   => 'green',
						'title'   => 'An eco-friendly choice.',
						'bullets' => "Say goodbye to plastic bottles and greatly reduce your household waste.\nSystems designed to be highly efficient and reduce water waste.",
						'image'   => $img( "Fontaines d'eau.webp", 'Eco-friendly - water treatment in Québec' ),
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
				'imageSide'  => 'left',
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
