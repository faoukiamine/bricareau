<?php
/**
 * Under-sink drinking water stations, English (translation of pages/sous-evier.php).
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

$cristal1  = $img( 'Single Stage Filter.jpg', 'Cristal Pro I' );
$cristal2  = $img( 'Double Stage Filter.jpg', 'Cristal Pro II' );
$cristal3  = $img( 'Triple Stage Filter.jpg', 'Cristal Pro III' );
$vectapure = $img( 'V3604RO.jpg', 'Vectapure NX' );
$essentiel = $img( "Solutions d'eau potable.webp", 'Essential series' );
$serenite  = $img( '67acea99-c085-4df5-b21f-e840244a30db.jpg', 'Serenity Direct-Flow' );
$drink     = $img( 'reasons-to-drink-more-water.jpg', 'Glass of pure water' );

$faq = array(
	array( 'What is an under-sink reverse osmosis system?', 'It is a compact water purification system installed right under your kitchen sink. It uses multi-stage filtration technology, including a semi-permeable membrane, to deliver exceptionally pure water to a dedicated faucet.' ),
	array( 'What are the main benefits of a reverse osmosis system?', 'The main benefit is removing 99% of contaminants (lead, chlorine, fluoride, arsenic, nitrates, etc.). It greatly improves the taste, smell and safety of your drinking and cooking water, and you no longer need to buy bottled water.' ),
	array( 'Is it hard to install under a kitchen sink?', 'A handy DIYer can do it, but we recommend professional installation by our certified Bricareau technicians. It ensures a perfect seal, a code-compliant drain connection and optimal tank pressure.' ),
	array( 'How much space does the system take in my cabinet?', 'Our modern systems are designed to be compact. The filtration unit is usually about 15-18 inches high, and the storage tank takes up about as much space as a large first-aid basket. There is usually enough room left for your household products.' ),
	array( 'Does reverse osmosis remove essential minerals?', 'Reverse osmosis is so effective that it removes almost everything, including minerals. That is why our premium systems include a remineralization cartridge that adds back calcium and magnesium, balancing the pH for healthier alkaline water.' ),
	array( 'Does the system need a separate faucet?', 'Yes, most installations include a small designer faucet dedicated to purified water. This preserves your filters: regular water for dishes, purified water only for drinking and cooking. "3-in-1" faucets are also available as an option.' ),
	array( 'How often do the filters need replacing?', 'Pre-filters (sediment and carbon) usually need changing every 6 to 12 months to protect the membrane. The reverse osmosis membrane itself usually lasts 2 to 4 years, depending on your consumption and water hardness.' ),
	array( 'Can the system be connected to a fridge or ice maker?', 'Absolutely! We can install a branch line to supply your fridge with purified water. You get crystal-clear ice and fresh purified water straight from your door dispenser.' ),
	array( 'Is reverse osmosis water better than bottled water?', 'In most cases, yes. Home reverse osmosis water is often fresher and carries less risk of contamination from plastic bottles. It is also a far more eco-friendly and economical long-term solution.' ),
	array( 'What is the difference between a simple carbon filter and reverse osmosis?', 'A simple carbon filter mainly reduces chlorine taste and odours. Reverse osmosis goes much further, removing dissolved solids, heavy metals, viruses and bacteria that carbon alone cannot stop.' ),
	array( 'Is the system noisy when running?', 'It is practically silent. You may hear a slight hiss or a very faint gurgle while it fills the tank or flushes impurities, but it stops as soon as the tank is full.' ),
	array( 'How do I know my filters need changing?', 'A noticeable drop in flow at the dedicated faucet or a subtle change in taste are signs. At Bricareau, we also run conductivity (TDS) tests during maintenance visits to measure the membrane\'s efficiency precisely.' ),
	array( 'Does reverse osmosis remove scale?', 'Yes, it is extremely effective at removing hardness minerals (calcium/magnesium). However, if your water is very hard, we recommend a softener upstream so the reverse osmosis membrane does not clog too quickly.' ),
	array( 'Does the system waste a lot of water?', 'Reverse osmosis needs a flow of water to rinse impurities off the membrane (reject water). Our recent systems are optimized to be very efficient, with much lower reject ratios than the older models of the 1990s.' ),
	array( 'What is the overall lifespan of the system?', 'With regular maintenance and planned filter changes, a Bricareau-quality reverse osmosis system can easily last 15 to 20 years. It is a lasting investment in your family\'s health.' ),
	array( 'What are the benefits of an under-sink filtration system?', 'It delivers bottle-quality water straight from your tap, removes chlorine taste and odour, removes heavy metals and drastically cuts your spending and your plastic footprint.' ),
	array( 'What is the difference between a standard cartridge filter and reverse osmosis?', 'A standard filter mainly reduces chlorine and sediment. Reverse osmosis goes further, removing up to 99% of all dissolved contaminants through an ultra-fine semi-permeable membrane.' ),
	array( 'Which water problems can under-sink systems solve?', 'They are particularly effective against chlorine, sediment, lead, mercury, pesticide residues and microplastics, ensuring healthy water for drinking and cooking.' ),
	array( 'Does the system take up a lot of space under the sink?', 'Our modern systems are very compact. They usually use less than 25% of your under-sink cabinet, leaving room for your other household items.' ),
	array( 'Can I use it for my fridge and ice maker?', 'Absolutely! We can connect your filtration system to your fridge so you enjoy fresh water and crystal-clear ice with no unpleasant taste.' ),
);

return array(
	'slug'             => 'under-sink-drinking-water-stations-for-the-kitchen',
	'title'            => 'Under-sink water filtration systems',
	'translation_of'   => 'stations-d-eau-potables-sous-l-evier-de-la-cuisine',
	'breadcrumb_label' => 'Under-sink drinking water stations',
	'seo_title'        => 'Under-Sink Water Filtration Systems | Reverse Osmosis | Bricareau',
	'seo_description'  => 'Exceptional drinking water straight from your tap. Our under-sink filtration and reverse osmosis systems remove 99% of contaminants in Québec.',
	'menu_order'       => 33,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "*Pure water* under the sink,\n*excellence* in every drop.",
				'text'        => 'Enjoy exceptional drinking water straight from your tap. Our under-counter filtration and ultrafiltration systems remove 99% of contaminants for your family\'s health.',
				'ctaText'     => 'Book a free consultation',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( 'boire-eau-robinet.jpg', 'Drinking tap water' ),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'variant'    => 'media',
				'columns'    => '2',
				'label'      => 'The invisible in your glass',
				'title'      => "Spring water without\nplastic nanoparticles.",
				'intro'      => 'Chlorine is only the tip of the iceberg. Your city water can carry invisible micro-pollutants that quietly build up in your body.',
				'linkText'   => 'The barrier',
				'defaultUrl' => '#nos-produits',
				'cards'      => array(
					array( 'title' => 'PFAS "forever chemicals"', 'meta' => 'Highly persistent', 'label' => 'Health risk', 'text' => 'Used in industry, they never break down. Reverse osmosis is one of the few certified physical barriers that block them.', 'image' => $img( 'PFAS.jpg.jpg', 'PFAS' ) ),
					array( 'title' => 'Microplastics', 'meta' => 'Everywhere', 'label' => 'Environment', 'text' => 'Thousands of fragments per litre. Our 0.0001 micron membranes guarantee plastic-free water for the whole family.', 'image' => $img( '2148214464.jpg', 'Microplastics' ) ),
					array( 'title' => 'Fluoride & chlorine', 'meta' => 'Taste & balance', 'label' => 'Pure taste', 'text' => 'Essential for treatment, but unpleasant to drink. Get the purity of mineral spring water without chemical additives.', 'image' => $img( '2147807855.jpg', 'Fluoride and chlorine' ) ),
					array( 'title' => 'Pharmaceutical residues', 'meta' => 'Invisible', 'label' => 'Child protection', 'text' => 'Traces of hormones and antibiotics get through standard filters. Give your children water free of any foreign substance.', 'image' => $img( 'eau_medicaments.png', 'Pharmaceutical residues' ) ),
				),
			),
		),
		array(
			'bricareau/intro-split',
			array(
				'layout'     => 'image-left',
				'title'      => "Spring water,\n*without* the plastic bottle.",
				'text'       => 'No more compromises. Turn your tap into a source of gourmet-grade purity. Our systems filter out the unwanted and let only the essential flow: fresh, healthy water, free from plastic.',
				'image'      => $img( 'pure-spring-water.png', 'Pure Bricareau spring water' ),
				'badgeIcon'  => 'droplets',
				'badgeLabel' => 'Absolute purity',
				'badgeTitle' => 'Zero chlorine, 100% life',
				'ctaText'    => 'Switch to pure water today',
				'ctaUrl'     => '#nos-produits',
				'features'   => array(
					array( 'icon' => 'anvil', 'color' => 'navy', 'label' => 'Gastronomy', 'title' => 'Taste & odour', 'text' => 'Rediscover the pure aroma of your coffees and teas, free from the chemical flavours of city water.' ),
					array( 'icon' => 'shield-check', 'color' => 'green', 'label' => 'Protection', 'title' => 'Zero lead', 'text' => 'An impenetrable physical barrier against metal residues from old pipes.' ),
					array( 'icon' => 'microscope', 'color' => 'green', 'label' => 'Science', 'title' => 'Ultrafiltration', 'text' => '0.01 micron technology blocking 99.9% of micro-organisms without any added chemicals.' ),
					array( 'icon' => 'leaf', 'color' => 'green', 'label' => 'Ecology', 'title' => 'Zero waste', 'text' => 'Avoid 2,000 plastic bottles a year. Save money and protect the planet.' ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'     => 'nos-produits',
				'variant'    => 'catalog',
				'background' => 'light',
				'label'      => 'The Bricareau Pure range',
				'title'      => 'Our *under-sink* water filtration systems.',
				'intro'      => 'Discover our advanced solutions, from compact under-sink filtration to high-performance tankless reverse osmosis systems.',
				'products'   => array(
					array( 'name' => 'Cristal Pro I', 'badge' => 'Sediment', 'color' => 'blue', 'image' => $cristal1, 'url' => '/contact', 'text' => 'The first line of defence for your water. This high-performance sediment filter effectively removes sand, rust and suspended particles.', 'features' => "5µ sediment filtration\nRemoves sand and rust\nVery easy installation" ),
					array( 'name' => 'Cristal Pro II', 'badge' => 'Pure duo', 'color' => 'emerald', 'image' => $cristal2, 'url' => '/contact', 'text' => 'The perfect combination for healthy water. This duo system pairs sediment filtration with a premium activated carbon filter, removing chlorine and unpleasant tastes.', 'features' => "Sediment + carbon duo\nRemoves chlorine taste\nHigh-capacity cartridges" ),
					array( 'name' => 'Cristal Pro III', 'badge' => 'Ultrafiltration', 'color' => 'amber', 'image' => $cristal3, 'url' => '/contact', 'text' => 'Advanced ultrafiltration technology. This system provides superior microscopic purification, filtering viruses and bacteria while keeping minerals.', 'features' => "0.01 micron ultrafiltration\nMicrobiological barrier\nKeeps minerals" ),
					array( 'name' => 'Vectapure NX', 'badge' => 'NX series', 'color' => 'blue', 'image' => $vectapure, 'url' => '/contact', 'text' => 'A proven 4-stage system, ultra-compact and efficient for tighter budgets. Ideal for apartments and small spaces.', 'features' => "4 filtration stages\n75 GPD membrane\nQuick filter changes" ),
					array( 'name' => 'Essential series', 'badge' => 'Popular', 'color' => 'emerald', 'image' => $essentiel, 'url' => '/contact', 'text' => 'Our 6-stage best-seller with final polishing for incomparably smooth water. The number one choice of Québec families.', 'features' => "6 complete stages\n75 GPD production\nBalanced mineral water" ),
					array( 'name' => 'Serenity Direct-Flow', 'badge' => 'XXL speed', 'color' => 'amber', 'image' => $serenite, 'url' => '/contact', 'text' => '600 GPD instant flow. No bulky tank, unlimited fresh water on demand. Direct-Flow technology with no stagnation.', 'features' => "5 Direct-Flow stages\n600 GPD (2 L/min)\nUltra-compact format" ),
				),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'anchor'      => 'purification-systems',
				'variant'     => 'icon-list',
				'label'       => 'Healthy water every day',
				'labelStyle'  => 'pill',
				'title'       => "Why install one of our\n*under-sink water purification systems* in your kitchen?",
				'accentStyle' => 'green',
				'intro'       => '_Advanced technology for exceptionally pure water and permanent protection for your home._',
				'cards'       => array(
					array( 'icon' => 'shield-check', 'title' => 'Maximum safety', 'text' => 'Removes 99% of viruses, bacteria and chemical contaminants.' ),
					array( 'icon' => 'droplets', 'title' => 'Unmatched taste', 'text' => 'Rediscover the true taste of water, clear and refreshing.' ),
					array( 'icon' => 'glass-water', 'title' => 'Pure water 24/7', 'text' => 'Instant access to better-quality water.' ),
					array( 'icon' => 'circle-dollar-sign', 'title' => 'Savings', 'text' => 'Stop buying plastic water bottles.' ),
					array( 'icon' => 'leaf', 'title' => 'Zero plastic', 'text' => 'Say goodbye to plastic for good. A single cartridge saves the planet thousands of disposable bottles.' ),
					array( 'icon' => 'filter', 'title' => 'Compact design', 'text' => 'Elegantly discreet. A seamless fit under your counter that keeps your kitchen looking great.' ),
				),
			),
		),
		array(
			'bricareau/image-banner',
			array(
				'overlay' => 'soft',
				'eyebrow' => 'Certified commitment',
				'title'   => 'Give your family pure, mineral-quality water.',
				'text'    => 'Enjoy a clean, durable installation optimized by our experts. Choose peace of mind with technical integration by Bricareau Water Specialist.',
				'image'   => $img( 'Reverse Osmosis Installation.jpg', 'Professional installation of a reverse osmosis system' ),
			),
		),
		array(
			'bricareau/comparison-table',
			array(
				'title'            => "_Compare our drinking water_\nfiltration solutions",
				'firstColumnLabel' => 'Technical criteria',
				'columns'          => array(
					array( 'name' => 'Cristal Pro I', 'image' => $cristal1, 'badge' => 'Sediment', 'color' => 'blue' ),
					array( 'name' => 'Cristal Pro II', 'image' => $cristal2, 'badge' => 'Pure duo', 'color' => 'emerald' ),
					array( 'name' => 'Cristal Pro III', 'image' => $cristal3, 'badge' => 'Ultrafiltration', 'color' => 'amber' ),
					array( 'name' => 'Vectapure NX', 'image' => $vectapure, 'badge' => 'NX osmosis', 'color' => 'blue' ),
					array( 'name' => 'Essential series', 'image' => $essentiel, 'badge' => '6-stage osmosis', 'color' => 'emerald' ),
					array( 'name' => 'Serenity Direct', 'image' => $serenite, 'badge' => '600 GPD', 'color' => 'amber' ),
				),
				'rows'             => array(
					array( 'label' => 'Under-sink installation', 'values' => "yes\nyes\nyes\nyes\nyes\nyes" ),
					array( 'label' => 'Technology', 'values' => "Filtration\nFiltration\nUltrafiltration\nReverse osmosis\nReverse osmosis\nReverse osmosis" ),
					array( 'label' => 'Number of stages', 'values' => "1 stage\n2 stages\n3 stages\n4 stages\n6 stages\n5 stages" ),
					array( 'label' => 'Sediment removal', 'values' => "yes\nyes\nyes\nyes\nyes\nyes" ),
					array( 'label' => 'Chlorine / taste removal', 'values' => "no\nyes\nyes\nyes\nyes\nyes" ),
					array( 'label' => 'VOC / pesticide removal', 'values' => "no\nyes\nyes\nyes\nyes\nyes" ),
					array( 'label' => 'Ultrafiltration (0.01µ)', 'values' => "no\nno\nyes\nno\nno\nno" ),
					array( 'label' => 'Reverse osmosis (0.0001µ)', 'values' => "no\nno\nno\nyes\nyes\nyes" ),
					array( 'label' => 'Bacteria / viruses', 'values' => "no\nno\n99.9%\n99.9%\n99.9%\n99.9%" ),
					array( 'label' => 'Keeps minerals', 'values' => "yes\nyes\nyes\nNo\nNo\nNo" ),
					array( 'label' => 'Remineralization (alkaline)', 'values' => "no\nno\nno\nOption\nyes\nOption" ),
					array( 'label' => 'No water sent to drain', 'values' => "yes\nyes\nyes\nno\nno\nno" ),
					array( 'label' => 'Production (GPD)', 'values' => "Direct flow\nDirect flow\nDirect flow\n75 GPD\n75 GPD\n600 GPD" ),
				),
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'layout'  => 'banner',
				'eyebrow' => 'Water quality control',
				'title'   => "_The truth in every_\n*drop of water.*",
				'text'    => 'Why guess when you can check? A simple water test for lasting protection of your home\'s water.',
				'ctaText' => 'Request a water analysis',
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( 'leaky-faucet-with-dripping-water-drop-conservation-concept.jpg', 'In-home water analysis' ),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'framed' => false,
				'title'  => "Spring water,\n*without* the plastic bottle.",
				'count'  => 6,
				'offset' => 2,
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'   => 'The peak of purity at home',
				'title'   => "Redefine your standard\n*of water purity.*",
				'text'    => 'Why settle for ordinary water when you can give your home an incomparable source of purity? Reverse osmosis removes invisible impurities and leaves only the essential: crystal-clear water, exceptional taste and complete peace of mind. Choose the most advanced technology for your health and comfort.',
				'image'   => $drink,
				'avatars' => $avatars(),
			),
		),
		array(
			'bricareau/faq',
			array( 'items' => array_map( fn( $qa ) => array( 'question' => $qa[0], 'answer' => $qa[1] ), $faq ) ),
		),
		array(
			'bricareau/resource-cards',
			array(
				'title'      => 'Resources',
				'background' => 'white',
				'items'      => array(
					array( 'title' => 'Well water in Québec: when to install a reverse osmosis system', 'image' => $img( '31794.jpg', 'Well water' ), 'url' => '/eau-du-puits-au-quebec-quand-installer-un-systeme-dosmose-inverse' ),
					array( 'title' => 'How reverse osmosis protects your family from invisible contaminants', 'image' => $img( '2148354772.jpg', 'Reverse osmosis' ), 'url' => '/comment-losmose-inverse-protege-votre-famille-des-contaminants-invisibles' ),
					array( 'title' => 'Reverse osmosis: the technology behind 100% pure water', 'image' => $drink, 'url' => '/osmose-inverse-la-technologie-derriere-une-eau-100-pure' ),
				),
			),
		),
	),
);
