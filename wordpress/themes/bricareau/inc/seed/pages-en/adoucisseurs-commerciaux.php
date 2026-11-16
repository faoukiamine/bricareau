<?php
/**
 * Commercial water softeners, English (translation of pages/adoucisseurs-commerciaux.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

$solve = 'Free expert advice for this solution';

return array(
	'slug'            => 'commercial-water-softeners',
	'title'           => 'Commercial water softeners',
	'translation_of'  => 'adoucisseurs-eau-commerciaux',
	'seo_title'       => 'Commercial Water Softeners | Business Solutions | Bricareau',
	'seo_description' => 'Boost the performance of your hotel or restaurant with our commercial water softeners in Québec. Protection for professional equipment and superior guest comfort. Bricareau expertise.',
	'menu_order'      => 45,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => '*The excellence of soft water,* the signature of fine hotels & restaurants.',
				'text'        => 'Elevate your service and protect your professional equipment with our premium commercial water softeners. Our water treatment and scale protection expertise is designed for the standards of hotels and restaurants, for an unmatched guest experience.',
				'ctaText'     => 'Book a free consultation',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( '640320.jpg', 'Soft water excellence for hotels and restaurants' ),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'variant'       => 'impact',
				'label'         => 'OPERATIONAL IMPACT',
				'title'         => '*Scale*, the silent enemy of fine hospitality.',
				'intro'         => 'More than a simple deposit, scale is a silent enemy of your profitability and your brand image. It dulls the shine of your service and shortens the life of your critical equipment.',
				'metaLabel'     => 'Impact:',
				'solutionLabel' => 'Solve this problem',
				'linkText'      => $solve,
				'defaultUrl'    => '/consultation',
				'cards'         => array(
					array( 'title' => 'Professional equipment', 'label' => 'Maintenance', 'meta' => 'Critical breakdowns', 'color' => 'amber', 'image' => $img( '2149646223.jpg', 'Professional equipment' ), 'text' => 'Protect your combi ovens, commercial dishwashers and ice machines from costly breakdowns caused by scale build-up.' ),
					array( 'title' => 'Tableware', 'label' => 'Brand image', 'meta' => 'Dull glassware', 'color' => 'rose', 'image' => $img( '7655.jpg', 'Tableware' ), 'text' => 'Say goodbye to white marks on glasses and cutlery. Guarantee a sparkling presentation without excessive hand polishing.' ),
					array( 'title' => 'Room linens', 'label' => 'Guest comfort', 'meta' => 'Rough fibres', 'color' => 'emerald', 'image' => $img( 'd3f1.jpg', 'Room linens' ), 'text' => 'Keep sheets soft and towels fluffy. Reduce fibre wear caused by aggressive minerals.' ),
					array( 'title' => 'Professional supplies', 'label' => 'Optimization', 'meta' => '+40% budget', 'color' => 'cyan', 'image' => $img( '2149345543.jpg', 'Professional supplies' ), 'text' => 'Hard water cancels out your professional detergents, forcing you to overuse cleaning products.' ),
					array( 'title' => 'Energy bill', 'label' => 'Efficiency', 'meta' => '+15% in costs', 'color' => 'indigo', 'image' => $img( 'detartrage-chauffe-eau-electrique.jpg', 'Energy bill' ), 'text' => 'Scale insulates your heating elements. A thin layer is enough to drive up your gas and electricity bills.' ),
					array( 'title' => 'Barista service', 'label' => 'Culinary art', 'meta' => 'Altered aromas', 'color' => 'amber', 'image' => $img( 'jura-x10-dark-inox.jpg', 'Barista service' ), 'text' => 'Coffee is 98% water. Hard water spoils precious aromas and clogs the internal parts of your espresso machines.' ),
				),
			),
		),
		array(
			'bricareau/accordion-split',
			array(
				'label' => 'WELL-BEING ENGINEERING',
				'title' => 'Benefits of *soft water*',
				'image' => $img( '2148003850.jpg', 'Benefits of softened water for health and operational efficiency' ),
				'items' => array(
					array( 'title' => 'Comfort & hospitality', 'text' => 'Give your guests a spa-worthy sensory experience. Soft water keeps skin hydrated and hair shiny in the shower, instantly reinforcing the sense of well-being and luxury in your rooms.' ),
					array( 'title' => 'Professional equipment protection', 'text' => 'Scale is the invisible enemy of your profitability, building up in your commercial water heaters, dishwashers and steam ovens. Our solutions neutralize scale at the source, extending the life of your critical assets and avoiding unplanned service interruptions.' ),
					array( 'title' => 'Flawless tableware', 'text' => 'Get sparkling glassware and silverware effortlessly. By removing water hardness, you eliminate stubborn white marks, reduce hand-polishing time and impress your guests at first glance.' ),
					array( 'title' => 'Profitability & sustainability', 'text' => 'The investment pays off quickly through better energy efficiency and a massive reduction (up to 40%) in detergent and cleaning product use. A choice that is good for your finances and for the planet.' ),
				),
			),
		),
		array(
			'bricareau/expert-split',
			array(
				'title'      => '*Scale-fighting expertise* dedicated to hotels & restaurants.',
				'text'       => "Our commercial water softeners are calibrated to neutralize hardness while protecting your professional installations. The perfect balance between resource savings and operational performance.\n\nComplete comfort for your guests, Bricareau excellence for your hotel. Every installation is a mark of quality. Our technicians optimize the setup of your systems for maximum equipment efficiency and flawless water quality every day.",
				'ctaText'    => 'Request a free consultation.',
				'ctaUrl'     => '/consultation',
				'image'      => $img( '4211.jpg', 'Professional installation of a Bricareau water softener' ),
				'imageSide'  => 'right',
				'badge'      => 'stat',
				'badgeValue' => 'Certified',
				'badgeText'  => 'commitment',
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array( 'title' => "Silky water.\n*Complete comfort.*" ),
		),
		array(
			'bricareau/image-cta',
			array(
				'overlay' => 'dark',
				'eyebrow' => 'Water quality control',
				'title'   => '*Hard* water? Health risk? Stay ahead.',
				'text'    => 'In restaurants and hotels, every detail counts. Keep your establishment compliant, protect your kitchen and laundry equipment, and offer your guests flawless water with our certified water analyses.',
				'ctaText' => 'Request a water analysis',
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( '2151812357.jpg', 'Professional water analysis to detect scale and chlorine' ),
			),
		),
		array(
			'bricareau/faq',
			array(
				'visibleCount' => 5,
				'items'        => array(
					array( 'question' => 'Why is a softener essential for a hotel or restaurant?', 'answer' => 'Beyond guest comfort, it is an operational necessity. Hard water scales up your coffee machines, steam ovens and dishwashers, increasing maintenance costs and shortening the life of your expensive professional equipment.' ),
					array( 'question' => 'What real savings can we expect?', 'answer' => 'An establishment can reduce its use of detergents and cleaning products by up to 40%. In addition, scale-free water heaters save 15% to 25% in energy.' ),
					array( 'question' => 'Does installation disrupt service?', 'answer' => 'Our teams schedule installation during your quiet hours to minimize the impact. Once installed, the system runs on its own with minimal maintenance.' ),
					array( 'question' => 'Does the softener affect shower water pressure?', 'answer' => 'Not at all. Our high-flow commercial models are sized for peak demand, ensuring optimal pressure even at full occupancy.' ),
					array( 'question' => 'Does it meet health and safety standards?', 'answer' => 'Yes, our systems meet the strictest industry standards. Softened water also makes hygiene standards easier to meet by eliminating scale, a breeding ground for bacteria.' ),
					array( 'question' => 'How long do your systems last?', 'answer' => 'Built for heavy use, our commercial softeners last 15 to 20 years on average with regular maintenance.' ),
				),
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'     => 'TAKE CONTROL OF YOUR WATER',
				'title'     => "Elevate your guests' experience with the signature of *soft water*.",
				'text'      => 'From the flawless shine of your glassware to the incomparable softness of your linens, elevate every detail of your hospitality. Protect your critical equipment (steam ovens, coffee machines, boilers) for the long term while guaranteeing 5-star comfort.',
				'image'     => $img( 'close-up-handsom-man-taking-bath.jpg', 'Sparkling hotel tableware thanks to Bricareau soft water' ),
				'phoneText' => 'Talk to an expert',
				'ctaText'   => 'Book a consultation',
				'ctaUrl'    => '/consultation',
			),
		),
		array(
			'bricareau/resource-cards',
			array(
				'title'    => 'Resources',
				'linkText' => 'Read',
				'items'    => array(
					array( 'title' => 'Salt-free vs salt-based softeners: the technical truth', 'image' => $img( 'avantages conditionneurs sans sel.jpg', 'Salt-free vs salt-based softeners - Bricareau expertise' ), 'url' => '/adoucisseur-sans-sel-vs-avec-sel-verite-technique' ),
					array( 'title' => 'How to set the hardness on your softener', 'image' => $img( '2149186343.jpg', 'How to set the hardness on your softener - Bricareau expertise' ), 'url' => '/comment-regler-durete-adoucisseur-eau' ),
					array( 'title' => 'Water softeners and septic tanks: compatible or not?', 'image' => $img( 'Cover-Image.webp', 'Water softener and septic tank - Bricareau expertise' ), 'url' => '/adoucisseur-deau-et-fosse-septique-mythes-et-realites' ),
				),
			),
		),
	),
);
