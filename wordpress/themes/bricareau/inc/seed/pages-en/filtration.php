<?php
/**
 * Residential filtration, English (translation of pages/filtration.php).
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

return array(
	'slug'            => 'residential-water-filtration',
	'title'           => 'Residential water filtration',
	'translation_of'  => 'filtration',
	'seo_title'       => 'Water Filtration in Québec | Pure, Healthy Water | Bricareau',
	'seo_description' => 'High-performance water filtration systems in Québec. Remove chlorine, lead and contaminants with our custom whole-house or under-sink solutions.',
	'menu_order'      => 30,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "Residential water filtration:\nexcellence for your health.",
				'text'        => "Don't let contaminants flow from your taps. Our advanced water filtration systems are a lasting shield for your home, giving your whole family perfectly pure water, anywhere in Canada.",
				'ctaText'     => 'Book a free consultation',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( '2149890905.jpg', 'Bricareau residential water filtration' ),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'anchor'     => 'problemes-eau',
				'variant'    => 'problem',
				'columns'    => '4',
				'label'      => 'Purity diagnosis',
				'title'      => 'Spotting the invisible: why filter your water?',
				'intro'      => 'City water travels through kilometres of ageing pipes before it reaches your home. Every glass can carry traces of those flaws.',
				'linkText'   => 'See solutions',
				'defaultUrl' => '#solutions',
				'cards'      => array(
					array( 'label' => 'Infrastructure', 'title' => 'Ageing networks', 'icon' => 'wrench', 'image' => $img( 'Old Pipes.jpg', 'Ageing networks' ), 'text' => 'Rust particles and sediment from century-old city pipes end up in your glass.' ),
					array( 'label' => 'Complete safety', 'title' => 'Health & newborns', 'icon' => 'shield-check', 'image' => $img( '47A0F39600000578-5222035-image-a-1_1514911887749.jpg', 'Health & newborns' ), 'text' => "Traces of lead, microplastics and hormones. Protect your family's fragile immune systems." ),
					array( 'label' => 'Better taste', 'title' => 'Chlorine taste', 'icon' => 'glass-water', 'image' => $img( 'water-taste.jpg', 'Chlorine taste' ), 'text' => 'Chlorine is needed for disinfection, but it spoils the taste of your drinks and dries out your skin in the shower.' ),
					array( 'label' => 'Zero waste', 'title' => 'Plastic impact', 'icon' => 'recycle', 'image' => $img( '20051.jpg', 'Plastic impact' ), 'text' => 'Stop buying 2,000+ plastic bottles a year for good. A win for the environment and your wallet.' ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'anchor'  => 'solutions',
				'variant' => 'numbered',
				'rows'    => array(
					array(
						'subtitle' => 'PROTECTION & HEALTH',
						'title'    => 'Filtered water for the whole house',
						'text'     => 'Whole-house water filters are installed directly on the main water supply. They filter all the water flowing through the house: kitchen, bathrooms, laundry room, outdoor taps and more. They are ideal for reducing sediment, sand and some odours and tastes (such as chlorine), and for protecting plumbing and appliances.',
						'bullets'  => "Plumbing protection: say goodbye to residual chlorine and sediment that corrode your valuable appliances.\nWater clarity: clear water at every tap, protecting the shine of your fixtures and your laundry.\nLong-lasting performance: high-fidelity technology providing effective filtration for 5 to 7 years without heavy maintenance.",
						'image'    => $img( 'teenager-taking-shower-reduce-hangover-effect.jpg', 'Shower with Bricareau filtered water - protecting skin and hair' ),
					),
					array(
						'subtitle' => 'PURE WATER ON DEMAND',
						'title'    => 'Your source of crystal-clear water, without compromise.',
						'text'     => 'See how our reverse osmosis system frees your daily life from chlorine taste and the chore of plastic bottles. Light, healthy water at your fingertips.',
						'bullets'  => "Absolute purity: removes 99% of contaminants, heavy metals and microplastics for complete safety.\nEco-conscious: drastically reduce your carbon footprint by eliminating disposable bottles.\nFlavours revealed: enhance the taste of your drinks and dishes with pure water free of any impurity.",
						'image'    => $img( 'glass-of-water.jpeg', 'Glass of pure water from a Bricareau reverse osmosis system' ),
					),
					array(
						'subtitle' => 'COMPACT & POWERFUL',
						'title'    => 'Under-sink water filtration systems',
						'text'     => 'Remove up to 99% of pathogens, lead and fluoride. Our Cristal Pro range is the ultimate solution for superior-quality drinking water at home.',
						'bullets'  => "Elite filtration: a rigorous 3-stage process that neutralizes heavy metals, chlorine and invisible sediment.\nSmart design: ultra-compact to maximize your storage space.\nLuxury finish: includes a selection of contemporary faucets that blend perfectly into your kitchen.",
						'image'    => $img( 'african-girl-stands-kitchen-drinks-water.jpg', 'Child drinking healthy water from a Bricareau under-sink filter' ),
					),
				),
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'overlay' => 'blue',
				'eyebrow' => 'Water quality control',
				'title'   => 'Your water is our priority.',
				'text'    => "Don't let doubt flow from your tap. Request your water test today and get a clear picture of your water, along with solutions suited to your home.",
				'ctaText' => 'Request a water analysis',
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( '39677.jpg', 'Laboratory water analysis - Bricareau' ),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array( 'title' => 'Honesty and passion: the Bricareau signature, in your words.' ),
		),
		array(
			'bricareau/comparison-table',
			array(
				'title'            => 'Compare our water filtration solutions',
				'firstColumnLabel' => 'Technical criteria',
				'columns'          => array(
					array( 'name' => 'Specialized water filters', 'image' => $img( "Filtres d'eau spécialisés.webp", 'Specialized water filters' ), 'badge' => 'Whole-home protection', 'color' => 'blue' ),
					array( 'name' => 'Under-sink filtration systems', 'image' => $img( 'Triple Stage Filter.jpg', 'Under-sink filtration systems' ), 'badge' => 'Drinking purity', 'color' => 'emerald' ),
				),
				'rows'             => array(
					array( 'label' => 'Installation', 'values' => "Point of entry\nUnder the sink" ),
					array( 'label' => 'Filtration scope', 'values' => "Whole house\nPoint of use" ),
					array( 'label' => 'Removes sediment, chlorine and odours', 'values' => "yes\nyes" ),
					array( 'label' => 'Specialized treatment (iron, sulphur, manganese)', 'values' => "yes\nno" ),
					array( 'label' => 'Removes lead, arsenic and heavy metals', 'values' => "no\nyes" ),
					array( 'label' => 'Water purity (99% contaminant-free)', 'values' => "no\nyes" ),
					array( 'label' => 'Media rinsing and maintenance', 'values' => "Automatic\nManual (cartridges)" ),
					array( 'label' => 'Periodic membrane replacement', 'values' => "no\nyes" ),
					array( 'label' => 'Taste of premium bottled water', 'values' => "yes\nSuperior" ),
					array( 'label' => 'Usual location', 'values' => "Mechanical room\nKitchen" ),
				),
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'     => 'WATER EXPERT ADVICE',
				'title'     => 'Demystify your residential water filtration options.',
				'text'      => "Not sure whether you need a whole-house water filter, an under-sink system or a reverse osmosis station? Contact us for personalized guidance toward the system that fits your situation and your budget.",
				'image'     => $img( '10271.jpg', 'Hard water problems on fixtures - Bricareau solution' ),
				'phoneText' => 'Talk to an expert',
				'ctaText'   => 'Book a consultation',
				'ctaUrl'    => '/consultation',
				'avatars'   => $avatars(),
				'rating'    => '4.9/5',
				'caption'   => 'Join more than 1,500 satisfied families in Québec this year.',
			),
		),
		array(
			'bricareau/faq',
			array(
				'visibleCount' => 5,
				'items'        => array(
					array( 'question' => 'How does reverse osmosis work?', 'answer' => 'Reverse osmosis pushes water through a microscopic semi-permeable membrane to remove dissolved impurities, chlorine and heavy minerals, producing exceptionally pure water.' ),
					array( 'question' => 'What is the difference between a softener and a filter?', 'answer' => 'A softener specifically removes scale (calcium and magnesium), while a filtration system removes contaminants, chlorine, odours and sediment to improve water quality.' ),
					array( 'question' => 'How often should under-sink filters be changed?', 'answer' => 'For an under-sink system, standard cartridges are usually changed every 6 to 12 months. The reverse osmosis membrane can last 2 to 3 years depending on your incoming water quality.' ),
					array( 'question' => 'Do under-sink filters remove bacteria?', 'answer' => 'Reverse osmosis systems and some specialized ultrafiltration filters are extremely effective against microscopic particles, but for complete bacteriological protection, we recommend adding a UV system.' ),
					array( 'question' => 'Does installing an under-sink filter reduce water pressure?', 'answer' => 'Our modern systems are designed to minimize the impact on pressure. Reverse osmosis systems often use a storage tank to guarantee a steady flow at your dedicated faucet.' ),
					array( 'question' => 'Why choose a specialized filter for iron or sulphur?', 'answer' => 'Standard filters cannot treat high concentrations of iron (yellow/red stains) or sulphur (rotten egg smell). Our specialized filters use specific media to neutralize these problems at the source.' ),
				),
			),
		),
		array(
			'bricareau/resource-cards',
			array(
				'title'    => 'Resources',
				'linkText' => 'Read',
				'items'    => array(
					array( 'title' => 'Under-sink filters: the simple alternative to filter pitchers', 'image' => $img( '2150495122.jpg', 'Under-sink filter - Bricareau practical guide' ), 'url' => '/filtre-sous-evier-lalternative-simple-aux-pichets-filtrants' ),
					array( 'title' => 'Bottled water: the hidden dangers to your everyday health', 'image' => $img( '258.jpg', 'Bottled water - Bricareau practical guide' ), 'url' => '/eau-embouteillee-les-dangers-meconnus-pour-votre-sante-au-quotidien' ),
					array( 'title' => 'Our under-sink water filtration systems: the ultimate solution', 'image' => $img( 'Triple Stage Filter.jpg', 'Under-sink systems - Bricareau practical guide' ), 'url' => '/stations-d-eau-potables-sous-l-evier-de-la-cuisine' ),
				),
			),
		),
	),
);
