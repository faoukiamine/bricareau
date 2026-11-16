<?php
/**
 * Hotel and restaurant filtration, English (translation of pages/filtration-hotels-restaurants.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'water-filtration-for-hotels-and-restaurants',
	'title'           => 'Filtration for hotels and restaurants',
	'translation_of'  => 'filtration-hotels-restaurants',
	'seo_title'       => 'Water Filtration for Restaurants | Bricareau',
	'seo_description' => 'In food service, water is your main ingredient and the silent ally of your equipment. From the perfect espresso to sparkling glassware, discover our filtration systems for professionals.',
	'menu_order'      => 41,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => '*Water excellence* for fine dining.',
				'text'        => 'In food service, water is your main ingredient and the silent ally of your equipment. From the perfect espresso to sparkling glassware, discover our filtration systems for professionals.',
				'ctaText'     => 'BOOK A CONSULTATION',
				'ctaUrl'      => '/contact-entreprises',
				'phoneButton' => true,
				'image'       => $img( '2151081881.jpg', 'Water excellence for fine dining' ),
			),
		),
		array(
			'bricareau/intro-split',
			array(
				'title'      => "*Filtered water* isn't a detail: it is the foundation of your restaurant's kitchen.",
				'text'       => 'Excess scale destroys your professional combi ovens and dulls your glassware. Lingering chlorine subtly changes the taste of your coffee and culinary creations. Bricareau designs custom filtration systems that protect your investments and elevate your guests\' experience in the dining room.',
				'image'      => $img( '6633.jpg', 'Restaurant buffet - restaurant water softener' ),
				'imageStyle' => 'rounded',
				'ctaText'    => 'Contact us',
				'ctaUrl'     => '/contact',
			),
		),
		array(
			'bricareau/image-gallery',
			array(
				'images' => array(
					$img( '121117.jpg', 'Sparkling glasses and dishes' ),
					$img( '25380.jpg', 'Chef preparing food - restaurant water softener' ),
					$img( '2151208276.jpg', 'Steamed vegetables' ),
				),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'variant' => 'media',
				'columns' => '3',
				'title'   => 'Where water makes *all the difference.*',
				'cards'   => array(
					array( 'title' => 'Coffee & infusions', 'text' => 'Bring out the rich aroma of your beans while neutralizing the bitterness caused by water impurities.', 'image' => $img( '411.jpg', 'Coffee and tea machines - hotel water system' ) ),
					array( 'title' => 'Espresso machines', 'text' => 'Ensure perfect extraction and protect your valuable boilers from the invisible threat of scale.', 'image' => $img( '2148892882.jpg', 'Espresso machine equipment - hotel water system' ) ),
					array( 'title' => 'Fountain drinks', 'text' => 'Serve sparkling, refreshing sodas, completely free of chlorine or metallic aftertastes.', 'image' => $img( '1730390356.jpg', 'Fountain drinks - hotel water system' ) ),
					array( 'title' => 'Ice machines', 'text' => 'Make crystal-clear, slow-melting ice that never changes the flavour of your cocktails and drinks.', 'image' => $img( '468.jpg', 'Ice machines - business water treatment' ) ),
					array( 'title' => 'Water as an ingredient', 'text' => 'Enhance your stocks, soups and cooking with purified water that respects the true flavours of your dishes.', 'image' => $img( '121171.jpg', 'Water as an ingredient' ) ),
					array( 'title' => 'Ovens & steam equipment', 'text' => 'Greatly extend the life of your combi ovens by stopping corrosion and scale at the source.', 'image' => $img( '121188.jpg', 'Steam equipment - restaurant water softener' ) ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'variant'  => 'feature',
				'title'    => 'Water filtration solutions for *food service professionals.*',
				'products' => array(
					array( 'name' => 'Specialized water filters', 'text' => 'Precision filtration systems for your espresso machines and drink dispensers. Bring out the complex aromas of your coffee and serve consistent sodas.', 'features' => "Scale protection\nEnhanced aroma profile\n80% less maintenance", 'image' => $img( 'PURITY-C-Quell-ST-Advanced.webp', 'Drinks and coffee filter - commercial water filtration' ), 'url' => '/filtres-eau-machine-cafe' ),
					array( 'name' => 'Water softeners', 'text' => 'Commercial water softeners for sparkling glasses straight out of the dishwasher, without hand drying. Greatly reduce your detergent costs.', 'features' => "No spots or white film\n30% fewer chemicals\nTime saved at the dish station", 'image' => $img( 'Alternating Water Softener.png', 'Commercial softener - hotel water system' ), 'url' => '/adoucisseurs-eau-commerciaux' ),
					array( 'name' => 'Reverse osmosis systems', 'text' => 'Reverse osmosis systems and softeners for your combi ovens and steam equipment. Avoid costly breakdowns caused by corrosion and scale.', 'features' => "Uninterrupted operation\nPerfect steam cooking\nPurified water for sauces", 'image' => $img( '1218.png', 'Cooking and steam filter' ), 'url' => '/contact-entreprises' ),
				),
			),
		),
		array(
			'bricareau/accordion-split',
			array(
				'label' => 'Return on investment',
				'title' => 'Turn an expense into a *competitive advantage.*',
				'intro' => 'Beyond quality in the cup and on the plate, our water treatment systems quickly pay for themselves by drastically cutting your kitchen operating costs.',
				'items' => array(
					array( 'title' => 'No more bottled water purchases', 'text' => 'Serve your own filtered and sparkling water in the dining room, cut your supply bills and offer a local, eco-friendly drink.', 'image' => $img( '2148018784.jpg', 'Bricareau competitive advantage 1' ) ),
					array( 'title' => 'Much lower maintenance costs', 'text' => 'Scale-free water prevents breakdowns of coffee machines, dishwashers and boilers, saving you thousands of dollars in repairs.', 'image' => $img( '1219.jpg', 'Bricareau competitive advantage 2' ) ),
					array( 'title' => 'Better taste and guest experience', 'text' => 'Since water makes up 98% of your coffee, optimal filtration brings out complex aromas, guarantees pure crystal-clear ice and builds loyalty through consistent taste.', 'image' => $img( '1220.jpg', 'Bricareau competitive advantage 3' ) ),
					array( 'title' => 'Big savings on cleaning products', 'text' => 'Softened water makes detergents far more effective. Use up to 30% fewer chemicals while getting spotless glassware without drying.', 'image' => $img( '18036672_SIE_2720_1530_21_04_30_SIE_CRM_Dishwasher_Hand_Taking_Out_Wine_Glass_Basket_Motiv_11_0017.webp', 'Bricareau competitive advantage 4' ) ),
				),
			),
		),
		array(
			'bricareau/statement',
			array(
				'theme'    => 'dark',
				'title'    => '"The excellence of an establishment is measured by invisible details. Absolutely pure water is the secret that enhances our flavours while protecting our most expensive equipment."',
				'text'     => 'C. Louis, Executive Chef of a restaurant chain',
				'textSize' => 'medium',
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant' => 'numbered',
				'title'   => 'Our custom approach for *food service professionals.*',
				'rows'    => array(
					array( 'title' => 'Water analysis', 'text' => 'It all starts with a complete audit of your establishment. We take samples and analyze hardness, chlorine, TDS (total dissolved solids) and the pressure of your network. This precise diagnosis tells us exactly what your equipment needs.', 'image' => $img( '2148581890.jpg', 'Water analysis' ) ),
					array( 'title' => 'Custom design', 'text' => 'Based on our analysis, our technical team designs a filtration setup suited to your service volume, whether you need a simple filter for your espresso machine or a central reverse osmosis system for the whole kitchen.', 'image' => $img( 'PID.webp', 'System diagram - commercial water filtration' ) ),
					array( 'title' => 'Installation & service', 'text' => 'Installation is done by our certified technicians outside your service hours so your business is not disrupted. Then our preventive maintenance program makes sure your filters are replaced on time, without you ever having to think about it.', 'image' => $img( '1212.jpg', 'Installation - hotel water system' ) ),
				),
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'     => 'THE SECRET INGREDIENT OF YOUR SUCCESS',
				'title'     => 'Make pure water the foundation of your cuisine.',
				'text'      => 'Enhance the taste of your culinary creations while protecting your combi ovens and expensive equipment for the long term. Get custom filtration today.',
				'image'     => $img( '1996.jpg', 'Hard water problems on fixtures - Bricareau solution' ),
				'phoneText' => 'Talk to an expert',
				'ctaText'   => 'Book a consultation',
				'ctaUrl'    => '/consultation',
			),
		),
		array(
			'bricareau/resource-cards',
			array(
				'title'    => 'Our related guides and resources.',
				'linkText' => 'Read the article',
				'items'    => array(
					array( 'title' => 'How water affects your espresso extraction', 'image' => $img( 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop', 'Coffee guide - commercial water filtration' ), 'url' => '/pourquoi-une-eau-pure-change-le-gout-du-cafe' ),
					array( 'title' => 'How to save your combi ovens from scale', 'image' => $img( 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=600&auto=format&fit=crop', 'Cooking guide' ), 'url' => '/blog' ),
					array( 'title' => 'Spot-free glassware straight out of the dishwasher', 'image' => $img( '121117.jpg', 'Dish station guide - commercial water filtration' ), 'url' => '/blog' ),
				),
			),
		),
	),
);
