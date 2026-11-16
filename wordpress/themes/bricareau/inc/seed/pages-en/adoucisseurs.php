<?php
/**
 * Residential water softeners, English (translation of pages/adoucisseurs.php).
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

$faq = array(
	array( 'Why install a softener if the city already treats the water?', 'Municipal water is treated to be drinkable, not to be soft. It often contains a lot of scale-forming minerals that damage your appliances, dull your fixtures and dry out your skin.' ),
	array( 'Does softened water taste salty?', 'No. The amount of sodium exchanged for the hardness minerals is tiny and most people cannot taste it. It is far less salt than in a single slice of white bread.' ),
	array( 'Does a softener need a lot of maintenance?', 'Very little. Just add salt regularly and clean the resin once a year with a specialized product we supply. Our technicians can also do it during a routine visit.' ),
	array( 'Does a softener remove chlorine from city water?', 'A standard softener only removes hardness. For chlorine, we recommend our hybrid models (such as the Serenity series with carbon), which also filter chlorine and bad odours.' ),
	array( 'How much salt does a softener use per year?', 'It depends on your water use and the initial hardness, but on average, for a family of four, our high-efficiency models use about 6 to 8 bags of salt per year.' ),
	array( 'Will a softener increase my water bill?', 'Very little. Regeneration uses a negligible amount of water compared to your total consumption. On the other hand, it protects your water heater and makes it more efficient, lowering your energy bill.' ),
	array( 'Can I drink softened water?', 'Yes, it is perfectly safe to drink. However, for people on a strict low-sodium diet or for the purest taste (tea, coffee), we recommend adding an under-sink reverse osmosis system.' ),
	array( 'Can I install the softener myself?', 'It is possible for an experienced DIYer, but we strongly recommend professional installation to ensure the right hardness setting, watertight connections and compliance with local plumbing codes.' ),
	array( 'What is the difference between a softener and a filter?', 'A filter removes sediment or contaminants (chlorine, lead). A softener specifically removes hardness (scale) to protect your pipes and soften your water.' ),
	array( 'How long does a Bricareau water softener last?', 'With minimal maintenance, our systems are designed to last 15 to 20 years. The high-quality resin inside can last more than 15 years before it needs replacing.' ),
	array( 'Is a softener noisy?', 'It runs silently most of the time. You will only hear a slight sound of water during regeneration, which is usually scheduled at night (for example at 2 a.m.) so it does not disturb you.' ),
	array( 'Is softened water good for plants?', 'It is better to water indoor plants with unsoftened water, because sodium can build up in the potting soil. We often install a bypass tap for outdoor watering.' ),
	array( 'What happens during a power outage?', 'Our electronic valves keep their programming in memory for 48 hours or more. Once power is back, the softener resumes its normal cycle without losing your settings.' ),
	array( 'Do I need a specific type of salt?', 'We recommend high-purity salt pellets to avoid insoluble residue in the brine tank. Some salts also contain resin cleaners to keep the system efficient.' ),
	array( 'How do I know my softener is working properly?', 'You will notice the difference right away: your soap will lather much more, your skin will feel softer after a shower and no new scale marks will appear on your shower walls.' ),
	array( 'Is a softener compatible with a septic tank?', 'Yes, absolutely. The regeneration water is harmless and does not affect the biological process of a properly sized standard septic tank.' ),
	array( 'Does a softener reduce water pressure?', 'No. Our systems are designed for high flow, so they cause no noticeable pressure loss in your home, even when you shower and run the washing machine at the same time.' ),
);

$sentinel = $img( 'Sentinelle Water Softener.png', 'Sentinel series water softener' );
$serenity = $img( 'Serenity Water Softener.png', 'Serenity series water softener' );
$infiniti = $img( 'Alternating Water Softener.png', 'Infiniti series water softener' );
$brochure = $img( 'brochure-freshpoint-fr.pdf', 'Sentinel series brochure' );

return array(
	'slug'             => 'residential-water-softeners-for-scale-free-water',
	'title'            => 'Residential water softeners',
	'translation_of'   => 'adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire',
	'breadcrumb_label' => 'Residential water softeners',
	'seo_title'        => 'Water Softeners in Québec | Eliminate Hard Water Scale | Bricareau',
	'seo_description'  => 'Protect your home from scale with our high-efficiency water softeners in Québec. Softer skin, brighter laundry and lasting protection for your appliances. Bricareau expertise.',
	'menu_order'       => 30,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "No more scale and hard water:\nenjoy the comfort of *soft water.*",
				'text'        => 'Rediscover silky water that protects your skin, your hair and your investments. Advanced technology for lasting protection of your home.',
				'ctaText'     => 'Book a free consultation',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( 'young-nude-woman-taking-relaxing-foamy-bath.jpeg', 'Bubble bath with softened water' ),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'variant'   => 'impact',
				'label'     => 'Hard water diagnosis',
				'title'     => "The silent impact of\n*scale* on your life.",
				'intro'     => "Scale isn't just a white deposit; it's an invisible erosion agent that wears down your comfort, your health and your finances every day.",
				'metaLabel' => 'Impact:',
				'cards'     => array(
					array( 'title' => 'Energy & cost', 'label' => 'Financial impact', 'meta' => '+25% on your bill', 'color' => 'amber', 'text' => 'Scale insulates heating elements, forcing your appliances to use much more electricity to heat water.', 'image' => $img( 'compteur.avif', 'Electricity meter' ) ),
					array( 'title' => 'Skin & dermatitis', 'label' => 'Personal care', 'meta' => 'Irritation', 'color' => 'rose', 'text' => 'Hard water dries out the skin and can make eczema worse. Get back silky skin and shiny hair.', 'image' => $img( '2149561614.jpg', 'Skin irritated by hard water' ) ),
					array( 'title' => 'Appliances', 'label' => 'Asset protection', 'meta' => 'Lifespan /2', 'color' => 'emerald', 'text' => 'Greatly reduce how often you replace your water heater, washing machine and dishwasher.', 'image' => $img( '2148386945.jpg', 'Appliances' ) ),
					array( 'title' => 'Housekeeping', 'label' => 'Comfort', 'meta' => 'Twice the effort', 'color' => 'cyan', 'text' => 'Say goodbye to scale marks on your fixtures and white film on your dishes.', 'image' => $img( '2147916568.jpg', 'Housekeeping' ) ),
					array( 'title' => 'Fabrics & laundry', 'label' => 'Soft laundry', 'meta' => 'Early wear', 'color' => 'indigo', 'text' => 'Fibres turn rough and colours fade. Keep your favourite clothes soft.', 'image' => $img( '2149117085.jpg', 'Laundry' ) ),
					array( 'title' => 'Consumption', 'label' => 'Savings', 'meta' => 'Soap x2', 'color' => 'amber', 'text' => 'Hard water needs up to 50% more detergent and soap to produce a good lather.', 'image' => $img( '23981.jpg', 'Soap consumption' ) ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'variant'     => 'feature',
				'label'       => 'Residential expertise guide',
				'title'       => "*Scale-fighting expertise*\nmatched to your home plumbing.",
				'intro'       => 'Our residential water softeners are calibrated to neutralize water hardness while protecting your installations. The perfect balance between **resource savings** and **complete comfort**.',
				'footerLabel' => 'Performance',
				'footerText'  => 'CSA/NSF certified',
				'products'    => array(
					array( 'name' => "Water softener\nSentinel series", 'text' => 'Your priority is to eliminate scale with surgical precision, without unnecessary complexity.', 'features' => "Appliance protection\nSmart compact format\nOptimized salt savings", 'image' => $sentinel, 'url' => $brochure['url'] ?? '/contact' ),
					array( 'name' => "Water softener\nSerenity series", 'text' => 'You want perfect water for your skin, your hair and drinking, while also removing chlorine.', 'features' => "Hybrid: scale & chlorine\nGentle on skin\nRemoves odours and tastes", 'image' => $serenity, 'url' => '/contact', 'recommended' => true ),
					array( 'name' => "Water softener\nInfiniti series", 'text' => 'Large families or critical needs: you want soft water without interruption, 24/7.', 'features' => "Twin alternating tanks\nNon-stop soft water\nIndustrial-grade performance", 'image' => $infiniti, 'url' => '/contact' ),
				),
			),
		),
		array(
			'bricareau/journey',
			array(
				'label' => 'The Bricareau journey',
				'title' => 'A smooth, 360° transition to *exceptional soft water.*',
				'intro' => 'The Bricareau journey: top-level expertise, from your first analysis to lasting soft water.',
				'steps' => array(
					array( 'icon' => 'droplets', 'title' => 'Superior quality', 'text' => 'Give your body the luxury it deserves with silky water that preserves your skin\'s natural moisture. From the first use, you will feel a clear difference: less irritated skin, shinier hair and a sense of well-being in every shower.', 'image' => $img( '2150084031.jpg', 'Soft water' ) ),
					array( 'icon' => 'shield-check', 'title' => 'Complete protection', 'text' => 'Scale is the invisible enemy of your home, building up in your pipes and clogging heating elements. Our solutions neutralize hard minerals at the source, protecting your water heater, dishwasher and all your fixtures from corrosion and costly scale deposits.', 'image' => $img( 'beautiful-shot-modern-house-kitchen.jpg', 'Modern kitchen' ) ),
					array( 'icon' => 'shirt', 'title' => 'Softer laundry', 'text' => 'Rediscover the original texture of your favourite fabrics without harsh chemicals. Without hard water, fibres stay supple, colours stay bright longer and your laundry comes out of the machine incomparably fresh and soft.', 'image' => $img( '2151468669.jpg', 'Soft laundry' ) ),
					array( 'icon' => 'circle-dollar-sign', 'title' => 'Guaranteed savings', 'text' => 'A softener quickly pays for itself through better energy efficiency of your heating appliances. Besides lower electricity bills, you will use up to 50% less soap and detergent for better cleaning results, while avoiding unexpected plumbing repairs.', 'image' => $img( '9194.jpg', 'Kitchen' ) ),
				),
			),
		),
		array(
			'bricareau/comparison-table',
			array(
				'label'            => 'Side-by-side comparison',
				'title'            => "Find the best\nperformance for your home.",
				'headerAlign'      => 'center',
				'headerBar'        => false,
				'firstColumnLabel' => 'Technical criteria',
				'valueStyle'       => 'plain',
				'columns'          => array(
					array( 'name' => 'Sentinel series', 'image' => $sentinel, 'badge' => 'Cost-effective precision', 'color' => 'navy' ),
					array( 'name' => 'Serenity series', 'image' => $serenity, 'badge' => 'Ultimate hybrid', 'color' => 'navy' ),
					array( 'name' => 'Infiniti series', 'image' => $infiniti, 'badge' => '24/7 power', 'color' => 'orange' ),
				),
				'rows'             => array(
					array( 'label' => 'Main target', 'values' => "Hardness (scale)\nHardness + chlorine + taste\nHardness (high capacity)" ),
					array( 'label' => 'Valve technology', 'values' => "Electronic, metered\nDeluxe dual control\nAlternating, metered" ),
					array( 'label' => 'Filter media', 'values' => "High-capacity resin\nResin + KDF carbon\nPremium resin x2" ),
					array( 'label' => 'Structural warranty', 'values' => "10 years\nLifetime (limited)\nLifetime (limited)" ),
					array( 'label' => 'Salt savings', 'values' => "Standard\nOptimized (+30%)\nMaximum (continuous control)" ),
				),
			),
		),
		array(
			'bricareau/image-banner',
			array(
				'eyebrow' => 'Certified commitment',
				'title'   => 'Bricareau excellence in your home.',
				'text'    => 'Every installation is a mark of quality. Our technicians set up your systems carefully, for performance and a clean look.',
				'image'   => $img( 'WaterSoftenerInstallation.jpg', 'Professional installation of a Bricareau water softener' ),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'framed' => false,
				'title'  => "_Silky water._\nComplete comfort.",
				'count'  => 5,
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'layout'  => 'banner',
				'eyebrow' => 'Water quality control',
				'title'   => "_Accurate water tests_\n*for complete peace of mind.*",
				'text'    => "Don't guess about your water quality. Our in-depth analyses identify bacteria, minerals and chemical contaminants to give you complete peace of mind.",
				'ctaText' => 'Request a water analysis',
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( '2147800429.jpg', 'In-home water analysis to detect scale and chlorine' ),
			),
		),
		array(
			'bricareau/faq',
			array( 'items' => array_map( fn( $qa ) => array( 'question' => $qa[0], 'answer' => $qa[1] ), $faq ) ),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'   => 'Take control of your water',
				'title'   => "Free your home\n*from scale.*",
				'text'    => "Complete protection for your plumbing and appliances.\nActivate **the ultimate protection** today.",
				'image'   => $img( 'Hard Water-Faucet.jpg', 'Hard water problems on a faucet' ),
				'avatars' => $avatars(),
			),
		),
		array(
			'bricareau/resource-cards',
			array(
				'title' => 'Resources',
				'items' => array(
					array( 'title' => 'Salt-free vs salt-based softeners: the technical truth', 'image' => $img( 'avantages conditionneurs sans sel.jpg', 'Salt-free conditioner' ), 'url' => '/adoucisseur-sans-sel-vs-avec-sel-verite-technique' ),
					array( 'title' => 'How to set the hardness on your softener', 'image' => $img( '2149186343.jpg', 'Hardness setting' ), 'url' => '/comment-regler-durete-adoucisseur-eau' ),
					array( 'title' => 'Water softeners and septic tanks: compatible or not?', 'image' => $img( 'Cover-Image.webp', 'Softener and septic tank' ), 'url' => '/adoucisseur-deau-et-fosse-septique-mythes-et-realites' ),
				),
			),
		),
	),
);
