<?php
/**
 * Offices & Businesses hub, English (translation of pages/bureaux.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'             => 'water-treatment-solutions-for-offices-and-businesses',
	'title'            => 'Water solutions for offices',
	'translation_of'   => 'solutions-de-traitement-d-eau-pour-offices-et-bureaux',
	'breadcrumb_label' => 'Offices & Businesses',
	'seo_title'        => 'Water Solutions for Offices | Bricareau',
	'seo_description'  => 'Plumbed-in water fountains and central filtration systems for offices and businesses: pure water on tap, no bottles to manage. Free corporate consultation.',
	'menu_order'       => 21,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'split',
				'breadcrumbs' => false,
				'title'       => "*Water excellence*\nfor your teams.",
				'text'        => "Boost your team's well-being with premium, eco-friendly hydration solutions, without the hassle of bottle deliveries.",
				'ctaText'     => 'Free corporate consultation',
				'ctaUrl'      => '/consultation',
				'image'       => $img( 'Hero-Entreprise.jpg', 'Office and corporate solutions' ),
			),
		),
		array(
			'bricareau/intro-split',
			array(
				'title'      => "*Premium hydration,*\ndesigned for business.",
				'text'       => '"A well-hydrated employee is a focused and productive employee, every day." Get rid of water jug deliveries and offer pure, filtered water straight from your water line, for your team\'s comfort.',
				'image'      => $img( '8456.jpg', 'Hydration without compromise' ),
				'imageStyle' => 'rounded',
				'features'   => array(
					array( 'icon' => 'users', 'color' => 'navy', 'title' => 'Team well-being', 'text' => 'Improve quality of life at work with pure water available at all times.' ),
					array( 'icon' => 'trending-up', 'color' => 'green', 'title' => 'Performance', 'text' => 'Keep your people focused throughout the day.' ),
				),
				'badgeIcon'  => 'leaf',
				'badgeLabel' => 'CSR commitment',
				'badgeTitle' => 'Zero plastic',
			),
		),
		array(
			'bricareau/tile-grid',
			array(
				'variant' => 'light',
				'title'   => "Our *corporate* water solutions\nfor your workplace.",
				'intro'   => 'From modern fountains to central systems for office towers, we offer advanced purification technology built for business requirements.',
				'tiles'   => array(
					array( 'label' => 'Cold & hot water', 'title' => "Modern water\nfountains", 'text' => 'No more bottle logistics. Our plumbed-in fountains provide continuously filtered water for your shared spaces.', 'image' => $img( '20230add-4ce5-4ae6-a6dc-1f9a2c3aeb7b.jpg', 'Modern water fountains' ), 'url' => '/fontaines-et-refroidisseurs-d-eau-modernes-pour-entreprises' ),
					array( 'label' => 'High capacity', 'title' => "Central filtration\nsystems", 'text' => 'For office towers and large complexes, we install central filtration systems sized for high volumes.', 'image' => $img( 'LZS8WSSP-PF.webp', 'Central filtration systems' ), 'url' => '/systemes-de-filtration-d-eau-centralises' ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant'        => 'icon',
				'background'     => 'white',
				'firstImageSide' => 'left',
				'label'          => 'Business advantages',
				'labelStyle'     => 'pill',
				'title'          => "Why choose our solutions\n*for your offices?*",
				'rows'           => array(
					array(
						'icon'    => 'shield-check',
						'color'   => 'navy',
						'title'   => 'Simply perfect water.',
						'bullets' => "Removes 99.9% of impurities, chlorine and heavy metals.\nA premium tasting experience, ideal for coffee and tea at the office.",
						'image'   => $img( 'Pause-eau.jpg', 'Water break at the office' ),
					),
					array(
						'icon'    => 'leaf',
						'color'   => 'green',
						'title'   => 'Environment and CSR.',
						'bullets' => "Eliminate disposable plastic bottles and cups completely.\nA concrete step to improve your company's carbon footprint.",
						'image'   => $img( '2228.jpg', 'Environment and CSR - business water treatment' ),
					),
				),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'label'      => 'They trust us',
				'labelStyle' => 'text',
				'title'      => "The choice of\n*leading companies.*",
				'count'      => 6,
				'offset'     => 6,
			),
		),
		array(
			'bricareau/expert-split',
			array(
				'title'      => 'Expertise for business, *performance in every drop of water.*',
				'text'       => "Ensure your employees' well-being and the longevity of your facilities. At Bricareau, we turn every water quality analysis into a strategic lever for workplace quality of life and your organization's operational excellence.",
				'ctaText'    => 'Request a corporate consultation',
				'ctaUrl'     => '/consultation',
				'image'      => $img( '4428cdd0-67df-4075-b0ba-d69247eb98dc.jpg', 'Bricareau expert at a business' ),
				'imageSide'  => 'left',
				'badge'      => 'stat',
				'badgeValue' => '25+ years',
				'badgeText'  => 'of combined expertise at your service',
			),
		),
	),
);
