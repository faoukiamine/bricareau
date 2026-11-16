<?php
/**
 * Hospitality & Restaurants hub, English (translation of pages/hotellerie.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'             => 'water-treatment-and-filtration-solutions-for-hotels-and-restaurants',
	'title'            => 'Hospitality & Restaurants',
	'translation_of'   => 'solutions-de-traitement-et-filtration-d-eau-pour-hotels-et-restaurants',
	'breadcrumb_label' => 'Hospitality and restaurants',
	'seo_title'        => 'Hospitality & Restaurants | Bricareau',
	'seo_description'  => 'Water softening and filtration for hotels, restaurants, cafés and breweries: protect your equipment, improve taste and cut costs. Free consultation.',
	'menu_order'       => 22,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'split',
				'breadcrumbs' => false,
				'title'       => "*Pure* excellence\nat the finest tables.",
				'text'        => "Enhance your guests' experience and streamline your operations with smart water solutions designed for the demands of the hospitality industry.",
				'ctaText'     => 'Book a free consultation',
				'ctaUrl'      => '/consultation',
				'image'       => $img( '2151949236.jpg', 'Hospitality excellence' ),
			),
		),
		array(
			'bricareau/intro-split',
			array(
				'label'      => 'The essence of service',
				'labelStyle' => 'line',
				'title'      => "The art of hospitality\nleaves nothing *to chance.*",
				'text'       => 'In fine dining and luxury hospitality, every detail shapes the experience. Your water quality is not just a utility: it is the silent signature of your refinement and the guardian of your excellence.',
				'image'      => $img( '2121.png', 'Excellent service - hotel water system' ),
				'imageStyle' => 'offset',
			),
		),
		array(
			'bricareau/tile-grid',
			array(
				'variant'   => 'dark',
				'textStyle' => 'plain',
				'align'     => 'left',
				'title'     => "Our water filtration solutions\nfor *hospitality and restaurant* professionals.",
				'intro'     => 'Discover our advanced **water treatment and softening** systems, custom designed for the **hospitality sector (hotels, restaurants, cafés)**. From scale protection for your professional espresso machines to fine-dining filtration for your kitchens, Bricareau guarantees flawless water quality. Extend the life of your equipment, bring out the flavours of your dishes and offer your guests purified water worthy of your standards.',
				'tiles'     => array(
					array( 'title' => "Water\nsoftening", 'label' => 'Complete protection', 'text' => 'Protect your costly investments and get sparkling glassware without a single spot.', 'image' => $img( '15952_50060.jpg', 'Water softening' ), 'url' => '/adoucisseurs-eau-commerciaux', 'size' => 'tall', 'fit' => 'cover' ),
					array( 'title' => "Water\nfiltration", 'label' => 'Taste excellence', 'text' => 'Crystal-clear water with no taste or odour, to bring out the true flavour of your creations and delight your guests.', 'image' => $img( '1494014028920430592_8e1000580b747b8dac3a78e0855f0394-removebg-preview.png', 'Commercial water filtration' ), 'url' => '/filtration-hotels-restaurants', 'size' => 'wide', 'fit' => 'contain' ),
					array( 'title' => "Brewery\nspace", 'label' => 'Premium service', 'text' => 'The elegance of custom filtered water, still or lightly sparkling. A smooth, refined service experience, completely free of bottles.', 'image' => $img( '2122.jpg', 'Brewery space' ), 'url' => '/solutions-brasseries', 'size' => 'normal', 'fit' => 'cover' ),
					array( 'title' => "The art\nof coffee", 'label' => 'Barista precision', 'text' => "The baristas' secret water to reveal the most subtle aromas of your beans.", 'image' => $img( 'PURITY-C-Quell-ST-Advanced.webp', 'Coffee machine filter' ), 'url' => '/filtres-eau-machine-cafe', 'size' => 'normal', 'fit' => 'contain' ),
				),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'variant'     => 'icon-columns',
				'align'       => 'left',
				'background'  => 'glow',
				'label'       => 'Our signature',
				'labelStyle'  => 'line',
				'title'       => "High standards,\nno *compromise.*",
				'accentStyle' => 'green',
				'intro'       => 'We know the challenges of high-volume service: peak periods, strict hygiene standards and zero tolerance for breakdowns.',
				'cards'       => array(
					array( 'icon' => 'shield-check', 'title' => 'HACCP standards', 'text' => 'We ensure full compliance with the strictest health requirements. Every system is designed to eliminate bacteriological risk, guaranteeing flawless hygiene and secure daily operations.' ),
					array( 'icon' => 'timer', 'title' => 'Continuous performance', 'text' => 'Our equipment is engineered to handle the busiest peaks. It keeps a constant flow and optimal pressure, for smooth, uninterrupted service even at rush hour.' ),
					array( 'icon' => 'hand-platter', 'title' => 'White-glove service', 'text' => 'Get tailored support with our proactive maintenance service. Our technicians step in discreetly before any issue arises, so your installations are always available.' ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant'        => 'icon',
				'background'     => 'white',
				'firstImageSide' => 'left',
				'label'          => 'Strategic investment',
				'labelStyle'     => 'line',
				'title'          => "The 3 pillars\nof *profitability.*",
				'intro'          => "Pure water isn't just about hygiene. Our systems make a difference at every level of your establishment, from lower costs to higher revenue.",
				'rows'           => array(
					array(
						'icon'    => 'wallet',
						'color'   => 'green',
						'title'   => 'Full control of costs.',
						'bullets' => implode(
							"\n",
							array(
								'**Equipment longevity:** Protection against scale and corrosion (ovens, espresso machines, dishwashers). No more premature replacements.',
								'**Product savings:** 30% to 50% less detergent, since soft water lathers better.',
								'**Energy efficiency:** Your machines work without an insulating layer of scale, lowering your energy bills.',
								'**Operational efficiency:** Fewer spots on glassware means less time spent polishing and rewashing.',
							)
						),
						'image'   => $img( '2226.jpeg', 'Mechanical room - business water treatment' ),
					),
					array(
						'icon'    => 'utensils',
						'color'   => 'navy',
						'title'   => 'Excellence that drives revenue.',
						'bullets' => implode(
							"\n",
							array(
								'**Flavour:** Neutral, chlorine-free water that brings out your teas, coffees and dishes.',
								'**Perfect presentation:** Crystal-clear ice and sparkling glassware for a flawless first impression.',
								'**New margins:** Turn water into revenue with filtered water bottled on site under your own brand.',
							)
						),
						'image'   => $img( '167206.jpg', 'Perfect coffee - restaurant water softener' ),
					),
					array(
						'icon'    => 'leaf',
						'color'   => 'green',
						'title'   => 'A reputation built on commitment.',
						'bullets' => implode(
							"\n",
							array(
								'**Environmental commitment:** No more dependence on single-use plastic bottles, thanks to on-site systems.',
								'**Reputation:** Overall satisfaction (taste, cleanliness, ecology) brings better online reviews and loyal guests.',
							)
						),
						'image'   => $img( '132626.jpg', 'Luxury glassware - business water treatment' ),
					),
				),
			),
		),
		array(
			'bricareau/expert-split',
			array(
				'title'      => 'A free consultation to *boost your profitability.*',
				'text'       => 'Find out how our water filtration systems can lower your operating costs, eliminate single-use plastics and extend the life of your equipment while reducing maintenance.',
				'ctaText'    => 'Make my business more profitable',
				'ctaUrl'     => '/consultation',
				'image'      => $img( '7860.jpg', 'Hospitality profitability' ),
				'imageSide'  => 'right',
				'badge'      => 'stat',
				'badgeValue' => '25+ years',
				'badgeText'  => 'of combined expertise at your service',
			),
		),
	),
);
