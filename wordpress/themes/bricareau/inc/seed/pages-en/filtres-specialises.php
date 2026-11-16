<?php
/**
 * Specialized whole-house water filters, English (translation of pages/filtres-specialises.php).
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

$filter   = $img( "Filtres d'eau spécialisés.webp", 'Bricareau specialized water filter' );
$softener = $img( "Adoucisseurs d'eau.webp", 'Bricareau water softener' );
$symptom  = 'This symptom affects not only the taste of your water, but can also damage your equipment over time.';

$faq = array(
	array( 'How do I get rid of the rotten egg smell in my water?', 'This smell comes from hydrogen sulphide gas. Our Outdoor HE system and our air-oxidation filters are designed to neutralize this gas without chemicals, leaving your water fresh and odourless.' ),
	array( 'My water leaves rust stains. Which filter should I choose?', 'Orange stains mean there is iron in your water. The Bricareau Iron-Cleer system is our best-performing solution. It oxidizes and captures ferric and ferrous iron, protecting your sinks and laundry.' ),
	array( 'Is arsenic in water dangerous?', 'Yes, arsenic is an odourless, colourless contaminant linked to serious health problems. Our Select Plus system uses a certified specific media to reduce arsenic to safe levels according to public health standards.' ),
	array( 'Why are my copper fixtures turning green?', 'It is a sign of acidic water (low pH) eating away at your pipes. The Medallist series has a neutralizer that raises the water\'s pH, protecting your plumbing and preventing leaks.' ),
	array( 'What are tannins and how are they treated?', 'Tannins come from organic matter and give water a yellowish or brownish colour (tea-coloured water). The Select Plus Connect system uses a specific anion exchange resin to remove this colour and clarify the water.' ),
	array( 'My water tastes of chlorine, even though I have a well?', 'If you use a chlorination system for disinfection, excess chlorine can be unpleasant. Our HE Municipal system and our activated carbon filters remove chlorine taste and odour for healthier water.' ),
	array( 'What is the difference between iron and manganese?', 'Iron causes rust stains, while manganese produces black stains and oily deposits. Our Gold Series is specially designed to treat both heavy metals at the same time.' ),
	array( 'Is a sediment filter enough for cloudy water?', 'A sediment filter removes physical particles (sand, soil). However, if the cloudiness comes from microscopic particles, a multimedia filter or a Bricareau HE Connect system will be more effective.' ),
	array( 'Do specialized filters need a lot of maintenance?', 'Most of our systems are fully automatic and run periodic cleaning cycles. Annual professional maintenance is recommended to optimize performance and longevity.' ),
	array( 'How long do filter media last?', 'Depending on your water quality and consumption, specialized filter media (such as for iron or sulphur) usually last 5 to 10 years before they need replacing.' ),
	array( 'Can one system solve all my problems?', 'Some combined systems can treat several minerals, but for complex cases (iron + arsenic + acidity), a combination of two specialized units is often the most durable and effective solution.' ),
	array( 'Can I drink the water after iron filtration?', 'Yes. Iron filtration improves not only the look of the water but also its taste. For complete purity, we often recommend adding a reverse osmosis system at the point of use.' ),
	array( 'How do I know which system suits my well?', 'A complete water analysis is the essential first step. It lets us measure the exact level of each contaminant and configure the Bricareau system that fits your needs perfectly.' ),
	array( 'Does the filtration system affect water pressure?', 'Our systems are sized to maintain optimal flow. With our high-performance control valves, pressure loss is negligible even when several fixtures run at once.' ),
	array( 'Are Bricareau systems covered by a warranty?', 'Absolutely. Bricareau offers one of the best warranties in the industry on tanks, valves and electronics, for peace of mind for many years.' ),
);

return array(
	'slug'             => 'specialized-whole-house-water-filtration-systems',
	'title'            => 'Specialized water filtration systems',
	'translation_of'   => 'systemes-de-filtration-d-eau-specialises-pour-toute-la-maison',
	'breadcrumb_label' => 'Specialized water filters',
	'seo_title'        => 'Well Water Filters in Québec | Iron, Sulphur and Manganese | Bricareau',
	'seo_description'  => 'Québec well water filtration expertise. Remove iron, sulphur and manganese with our specialized systems. Free in-home water analysis.',
	'menu_order'       => 32,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "Protect your health\nwith *outstanding* water filtration.",
				'text'        => "Don't let contaminants flow from your taps. Our advanced water filtration systems are a lasting shield for your home, giving your whole family perfectly pure water, anywhere in Canada.",
				'ctaText'     => 'Book a free consultation',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( '2149890905.jpg', 'Water filtration' ),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'anchor'     => 'problemes-eau',
				'variant'    => 'problem',
				'columns'    => '4',
				'label'      => 'Purity diagnosis',
				'title'      => "Spotting the invisible:\nwhy *filter your water?*",
				'intro'      => 'City water travels through kilometres of ageing pipes before it reaches your home. Every glass can carry traces of those flaws.',
				'defaultUrl' => '#specialized-filters',
				'cards'      => array(
					array( 'title' => 'Ageing networks', 'label' => 'Infrastructure', 'icon' => 'wrench', 'color' => 'amber', 'text' => 'Rust particles and sediment from century-old city pipes end up in your glass.', 'image' => $img( 'Old Pipes.jpg', 'Old pipes' ) ),
					array( 'title' => 'Health & newborns', 'label' => 'Complete safety', 'icon' => 'shield-check', 'color' => 'pink', 'text' => "Traces of lead, microplastics and hormones. Protect your family's fragile immune systems.", 'image' => $img( '47A0F39600000578-5222035-image-a-1_1514911887749.jpg', 'Newborn' ) ),
					array( 'title' => 'Chlorine taste', 'label' => 'Better taste', 'icon' => 'glass-water', 'color' => 'blue', 'text' => 'Chlorine is needed for disinfection, but it spoils the taste of your drinks and dries out your skin in the shower.', 'image' => $img( 'water-taste.jpg', 'Water taste' ) ),
					array( 'title' => 'Plastic impact', 'label' => 'Zero waste', 'icon' => 'recycle', 'color' => 'emerald', 'text' => 'Stop buying 2,000+ plastic bottles a year for good. A win for the environment and your wallet.', 'image' => $img( '20051.jpg', 'Plastic bottles' ) ),
				),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'variant'       => 'diagnostic',
				'label'         => 'Automatic diagnosis',
				'title'         => "Which *water problem*\ndo you live with every day?",
				'metaLabel'     => 'Identified cause:',
				'solutionLabel' => 'Bricareau solution',
				'cards'         => array(
					array( 'title' => 'Sand & sediment', 'meta' => 'Cloudy water', 'solution' => 'Vortex Filtration', 'text' => $symptom, 'image' => $img( 'Turbide-Water.webp', 'Cloudy water' ) ),
					array( 'title' => 'Rust stains', 'meta' => 'Excess ferric/ferrous iron', 'solution' => 'Iron Shield', 'text' => $symptom, 'image' => $img( '5a4674e7-575d-4cd9-b1f2-32522f8a7072.jpg', 'Rust stains' ) ),
					array( 'title' => 'Acidic water (low pH)', 'meta' => 'Copper corrosion', 'solution' => 'Zen-pH Neutralizer', 'text' => $symptom, 'image' => $img( 'Corrosive-Water.webp', 'Corrosive water' ) ),
					array( 'title' => 'Rotten egg smell', 'meta' => 'Hydrogen sulphide gas', 'solution' => 'Sulphur Shield', 'text' => $symptom, 'image' => $img( 'Water_Smells_Like_Rotten_Eggs_1400x.webp', 'Rotten egg smell' ) ),
					array( 'title' => 'Black stains', 'meta' => 'Manganese', 'solution' => 'Oxy-pure Series', 'text' => $symptom, 'image' => $img( '1255.webp', 'Black stains' ) ),
					array( 'title' => 'Tea-coloured water', 'meta' => 'Organic tannins', 'solution' => 'Tann-Ex System', 'text' => $symptom, 'image' => $img( 'problemes-deau-tanin.jpg', 'Water coloured by tannins' ) ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'       => 'specialized-filters',
				'variant'      => 'simple',
				'background'   => 'light',
				'headerAlign'  => 'left',
				'headerBar'    => true,
				'labelStyle'   => 'pill',
				'title'        => "_Our specialized_\nwater filters",
				'intro'        => 'Discover our full range of specialized filters, designed for the unique challenges of municipal water and private artesian or surface wells. Whether you face stubborn iron stains, unpleasant sulphur odours, corrosive acidic water or invisible contaminants such as arsenic, our systems offer a targeted, high-performance solution. Every unit uses advanced technology for maximum filtration while protecting your plumbing and appliances. By choosing one of our Vortex, Iron Shield, Zen-pH or other solutions, you get lasting peace of mind and flawless water quality for your whole family. Our experts guide you through diagnosis and installation so that every drop from your tap is pure, safe and clear.',
				'products'     => array(
					array( 'name' => 'Vortex water filter', 'text' => 'Designed for water containing sediment.', 'image' => $filter, 'url' => '/contact' ),
					array( 'name' => 'Zen-pH water filter', 'text' => 'Designed to neutralize acidic water.', 'image' => $filter, 'url' => '/contact' ),
					array( 'name' => 'ChlorStop water filter', 'text' => 'Designed for water containing chlorine.', 'image' => $filter, 'url' => '/contact' ),
					array( 'name' => 'Iron Shield water filter', 'text' => 'Designed for water containing iron.', 'image' => $filter, 'url' => '/contact' ),
					array( 'name' => 'Oxy-pure water filter', 'text' => 'Designed for water containing iron and manganese.', 'image' => $filter, 'url' => '/contact' ),
					array( 'name' => 'Sulphur Shield water filter', 'text' => 'Designed for water containing hydrogen sulphide.', 'image' => $filter, 'url' => '/contact' ),
					array( 'name' => 'Zero-As water filter', 'text' => 'Designed for water containing arsenic.', 'image' => $filter, 'url' => '/contact' ),
					array( 'name' => 'Tann-Ex water filter', 'text' => 'Designed for water containing tannins.', 'image' => $softener, 'url' => '/contact' ),
				),
				'bannerTitle'  => 'Not sure which filter to choose?',
				'bannerText'   => 'Let our water experts diagnose your water for free.',
				'bannerButton' => 'Start the free diagnosis',
				'bannerUrl'    => '/diagnostic',
			),
		),
		array(
			'bricareau/before-after',
			array(
				'label'      => 'Real results',
				'labelStyle' => 'pill-soft',
				'title'      => "_Before / After:_\nThe Bricareau transformation",
				'intro'      => "Don't just take our word for it. See the immediate impact of our systems on the quality, clarity and safety of your well water.",
				'ctaText'    => 'Get my custom solution',
				'ctaUrl'     => '/consultation',
				'items'      => array(
					array( 'code' => 'Fe', 'color' => 'orange', 'title' => 'Iron & manganese', 'subtitle' => 'No more stains or metallic taste', 'before' => $img( 'Cuvette de toilette avec taches de fer.png', 'Iron-rich well water before treatment' ), 'beforeCaption' => 'Iron-rich water and rust deposits', 'after' => $img( 'Cuvette de toilette sans taches de fer.jpg', 'Pure water after Bricareau treatment' ), 'afterCaption' => 'Shine restored, porcelain like new!' ),
					array( 'code' => 'H2O', 'color' => 'blue', 'title' => 'Cloudiness & algae', 'subtitle' => 'Multi-stage filtration for clear water', 'before' => $img( 'Turbide-Water.webp', 'Cloudy well water before filtration' ), 'beforeCaption' => 'Cloudy water, suspended particles', 'after' => $img( 'Eau cristalline.jpg', 'Pure Bricareau water' ), 'afterCaption' => '100% clear, odourless water' ),
				),
			),
		),
		array(
			'bricareau/card-stack',
			array(
				'label' => 'Bricareau excellence',
				'title' => "Why choose our\nwater filtration systems?",
				'intro' => 'More than a simple filtration system: advanced protection for your health and lasting comfort for your whole family.',
				'items' => array(
					array( 'title' => 'Zero odour', 'text' => 'Say goodbye to rotten egg smells (sulphur) and chlorine taste for fresh water.', 'image' => $img( 'reasons-to-drink-more-water.jpg', 'Odourless water' ) ),
					array( 'title' => 'Complete protection', 'text' => 'Stop iron and corrosive minerals from staining your sinks and destroying your plumbing.', 'image' => $img( 'premium_bathroom_protection_1774493901305.png', 'Protected bathroom' ) ),
					array( 'title' => 'Crystal-clear water', 'text' => 'Remove sediment and cloudiness for professional-grade clarity throughout your home.', 'image' => $img( '5846952.jpg', 'Crystal-clear water' ) ),
					array( 'title' => 'Lasting comfort', 'text' => 'Enjoy unmatched everyday well-being with exceptional water.', 'image' => $img( '71luIOvIQuL._AC_SL1500_.jpg', 'Comfort' ) ),
				),
			),
		),
		array(
			'bricareau/comparison-table',
			array(
				'background'       => 'light',
				'title'            => "_Compare our specialized_\nwater filters",
				'firstColumnLabel' => 'Models',
				'columns'          => array(
					array( 'name' => 'Vortex' ),
					array( 'name' => 'Zen-pH' ),
					array( 'name' => 'ChlorStop' ),
					array( 'name' => 'Iron Shield', 'badge' => 'Popular', 'color' => 'blue' ),
					array( 'name' => 'Oxy-pure' ),
					array( 'name' => 'Sulphur Shield' ),
					array( 'name' => 'Zero-As' ),
					array( 'name' => 'Tann-Ex' ),
					array( 'name' => 'Serenity Pure', 'badge' => 'Premium', 'color' => 'blue' ),
				),
				'rows'             => array(
					array( 'label' => 'Iron removal (rust stains)', 'values' => "no\nno\nno\nMaximum\nMaximum\nPartial\nno\nno\nComplete" ),
					array( 'label' => 'Sulphur smell (rotten eggs)', 'values' => "no\nno\nno\nMedium\nMedium\nMaximum\nno\nno\nPartial" ),
					array( 'label' => 'Manganese (black stains)', 'values' => "no\nno\nno\nPartial\nMaximum\nPartial\nno\nno\nComplete" ),
					array( 'label' => 'Acidity (pH correction / blue water)', 'values' => "no\nMaximum\nno\nno\nno\nno\nno\nno\nno" ),
					array( 'label' => 'Sediment, sand & cloudiness', 'values' => "Complete\nPartial\nPartial\nPartial\nPartial\nPartial\nPartial\nPartial\nComplete" ),
					array( 'label' => 'Arsenic & heavy metals', 'values' => "no\nno\nno\nno\nno\nno\nMaximum\nno\nComplete" ),
					array( 'label' => 'Tannins & colour (tea-coloured water)', 'values' => "no\nno\nno\nno\nno\nno\nno\nMaximum\nPartial" ),
					array( 'label' => 'Chlorine taste & odour', 'values' => "no\nno\nMaximum\nno\nno\nno\nno\nno\nComplete" ),
					array( 'label' => 'Maintenance', 'values' => "Minimal\nMedium\nLow\nLow\nMedium\nLow\nMedium\nMedium\nHigh" ),
				),
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'layout'  => 'banner',
				'overlay' => 'blue',
				'eyebrow' => 'Water quality control',
				'title'   => "_Excellence starts_\n*with perfect water.*",
				'text'    => 'True luxury is never having to worry about what you consume. Enjoy the peace of mind of water analyzed by experts, for a home where everything shines, effortlessly and without compromise.',
				'ctaText' => 'Request a water analysis',
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( '342800.jpg', 'Well water analysis in a laboratory' ),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'framed' => false,
				'title'  => "Drink your tap water *without worry*\nThey made the switch with us.",
				'count'  => 6,
				'offset' => 1,
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'variant'  => 'simple',
				'title'    => 'Discover related products',
				'intro'    => 'Get even more from your water treatment with our complementary solutions.',
				'products' => array(
					array( 'name' => 'Water softeners', 'text' => 'Remove scale for soft skin, bright laundry and lasting protection of your installations.', 'image' => $softener, 'url' => '/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire' ),
					array( 'name' => 'UV disinfection systems', 'text' => 'Used to sterilize water against bacteria, viruses, coliforms, E. coli, Cryptosporidium and more.', 'image' => $img( 'VH200-F10-265x300.jpg', 'VH200 UV system' ), 'url' => '/systemes-de-desinfection-uv' ),
					array( 'name' => 'Drinking water stations', 'text' => 'Mineral-quality water right at your sink, for pure hydration without plastic waste.', 'image' => $img( "Solutions d'eau potable.webp", 'Drinking water station' ), 'url' => '/stations-d-eau-potables-sous-l-evier-de-la-cuisine' ),
				),
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'   => 'Filtration excellence',
				'title'   => "From problem water\n*to a source of purity.*",
				'text'    => 'Ready to get rid of iron, sulphur or chlorine in your home for good? Get help from a specialist to choose the equipment that fits your situation. Request your free consultation today and rediscover healthy water at every tap.',
				'image'   => $img( '5846952.jpg', 'Crystal-clear water' ),
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
				'title' => 'Resources',
				'items' => array(
					array( 'title' => 'Well water filtration: a complete guide', 'image' => $img( '5846952.jpg', 'Crystal-clear water' ), 'url' => '/blog/categorie/eau-de-puits' ),
					array( 'title' => 'Why water analysis matters', 'image' => $img( '2149186343.jpg', 'Water analysis' ), 'url' => '/les-nitrates-dans-leau-de-puits-dangers-et-solutions' ),
					array( 'title' => 'Iron and sulphur water', 'image' => $img( 'Cover-Image.webp', 'Iron-rich water' ), 'url' => '/fer-ferreux-vs-fer-ferrique-quelle-difference-pour-le-filtre' ),
				),
			),
		),
	),
);
