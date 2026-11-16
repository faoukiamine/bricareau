<?php
/**
 * Industrial filtration, English (translation of pages/filtration-industrielle.php).
 *
 * @var callable $img  fn( string $asset, string $alt ): array
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'            => 'industrial-water-filtration',
	'title'           => 'Industrial filtration',
	'translation_of'  => 'filtration-industrielle',
	'seo_title'       => 'Industrial Water Filters | Multimedia, Carbon, Catalytic | Bricareau',
	'seo_description' => 'Discover our industrial filtration solutions: multimedia, activated carbon, catalytic and greensand filters for ultra-pure process water.',
	'menu_order'      => 46,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => 'Filtration excellence, the shield of your industrial operations.',
				'text'        => 'Protect your critical equipment and guarantee flawless process water with our heavy-duty industrial filtration systems: multimedia, activated carbon, catalytic and greensand.',
				'ctaText'     => 'Book a free consultation',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( "Filtres d'eau industriels.jpg", 'Bricareau industrial water filters' ),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'variant' => 'swiss',
				'label'   => 'The cost of doing nothing',
				'title'   => 'Raw water: the silent destroyer of your operations.',
				'intro'   => 'At industrial scale, water is never "just water". Loaded with sediment, dissolved metals and chemicals, it gets into your production lines and causes irreversible damage if it is not treated with engineering precision.',
				'cards'   => array(
					array( 'icon' => 'droplets', 'title' => 'RO fouling', 'text' => 'Premature destruction of reverse osmosis membranes.' ),
					array( 'icon' => 'alert-circle', 'title' => 'Corrosion', 'text' => 'Accelerated wear of boilers and piping.' ),
					array( 'icon' => 'trending-up', 'title' => 'Extra costs', 'text' => 'Lower thermal efficiency and energy losses.' ),
					array( 'icon' => 'clock', 'title' => 'Shutdowns', 'text' => 'Unplanned downtime and emergency maintenance.' ),
				),
			),
		),
		array(
			'bricareau/statement',
			array(
				'theme'    => 'dark',
				'label'    => 'The real financial impact.',
				'title'    => "Equipment lifespan -60%\nMaintenance costs +45%",
				'text'     => '"Investing in proper pre-treatment is not an expense. It is the life insurance of your production line."',
				'textSize' => 'medium',
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'variant' => 'swiss',
				'label'   => 'PRECISION ENGINEERING',
				'title'   => 'The vital infrastructure of your operations.',
				'intro'   => 'Poorly filtered water fouls reverse osmosis membranes, corrodes boilers and causes costly production shutdowns. Our filters secure your processes 100%.',
				'cards'   => array(
					array( 'icon' => 'waves', 'title' => 'High flow rates', 'text' => 'Skids designed to treat hundreds of cubic metres per hour without critical pressure loss.' ),
					array( 'icon' => 'shield-check', 'title' => 'RO protection', 'text' => 'An impenetrable barrier against particles and chlorine to extend the life of your reverse osmosis membranes.' ),
					array( 'icon' => 'layers', 'title' => 'Specialized filtration', 'text' => 'Iron, manganese, H2S or ultra-fine sediment: we use the exact catalyst for your problem.' ),
					array( 'icon' => 'cog', 'title' => 'Automation', 'text' => 'Smart PLC valves for backwashing triggered by differential pressure or timer.' ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'       => 'technologies',
				'variant'      => 'simple',
				'label'        => 'INDUSTRIAL RANGE',
				'title'        => 'Our advanced technologies for every application.',
				'intro'        => 'Bricareau designs and assembles industrial filtration skids using the best media on the market. Whether clarifying surface water or neutralizing heavy metals from deep wells, our systems are built for extreme endurance.',
				'products'     => array(
					array( 'name' => 'Multimedia filters', 'image' => $img( '7kbp.png', 'Multimedia filters' ), 'text' => 'The ultimate solution for turbidity and sediment. Layers of anthracite, quartz sand and garnet provide depth filtration down to 10 microns, with a bed that holds dirt throughout its volume, not just on the surface.' ),
					array( 'name' => 'Activated carbon (GAC)', 'image' => $img( 'Industrial Water Softeners.png', 'Activated carbon (GAC)' ), 'text' => 'Essential for chemical adsorption. These towers remove free chlorine, chloramines, pesticides and VOCs. Indispensable to protect reverse osmosis membranes from oxidative chemical damage.' ),
					array( 'name' => 'Catalytic filters', 'image' => $img( 'filtre-catalytique-new.jpg', 'Catalytic filters' ), 'text' => 'Using advanced media (Katalox Light, Pyrolox), these filters act as a powerful catalyst to oxidize and remove very high levels of iron, manganese and hydrogen sulphide (H2S), often without continuous chemical dosing.' ),
					array( 'name' => 'Multi-cartridge filters', 'image' => $img( 'IMG_FILTRE_QFINOX.jpg', 'Multi-cartridge filters' ), 'text' => 'High-capacity filtration systems using multiple cartridges to effectively capture fine particles. Stainless steel design, ideal for final polishing or reverse osmosis pre-treatment.' ),
					array( 'name' => 'Birm filters', 'image' => $img( 'filtre-catalytique-new.jpg', 'Birm filters' ), 'text' => 'An economical, highly effective filter media for reducing iron and manganese. Birm acts as an insoluble catalyst that speeds up the reaction between dissolved oxygen and iron, requiring only a simple backwash with no chemicals.' ),
					array( 'name' => 'Custom water filtration skids', 'image' => $img( 'skids-sur-mesure-nobg.png', 'Custom water filtration skids' ), 'text' => 'Design and assembly of complete skid-mounted systems tailored to your specifications. All components integrated (tanks, valves, piping, automation) for plug-and-play installation.' ),
				),
				'bannerTitle'  => 'Need help sizing your system?',
				'bannerText'   => 'Our engineers help you choose the advanced technology that fits the specific needs of your process water.',
				'bannerButton' => 'ENGINEERING STUDY',
				'bannerUrl'    => '#etude-technique',
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'variant'    => 'steps',
				'background' => 'light',
				'label'      => 'OUR EXPERTISE',
				'title'      => 'The Bricareau process, from analysis to operation.',
				'intro'      => "We don't sell simple filters; we design complete solutions. Discover our step-by-step engineering approach to secure your investment.",
				'cards'      => array(
					array( 'icon' => 'activity', 'title' => 'Audit & analysis', 'text' => 'Complete assessment of your raw water, critical flow rates and space constraints. We leave nothing to chance.' ),
					array( 'icon' => 'layers', 'title' => 'Custom engineering', 'text' => 'System design, valve sizing and precise selection of filter media to target exactly your contaminants.' ),
					array( 'icon' => 'cog', 'title' => 'Fabrication & integration', 'text' => 'Careful skid assembly in our workshops, followed by on-site installation scheduled to minimize production downtime.' ),
					array( 'icon' => 'shield-check', 'title' => 'Support & maintenance', 'text' => 'Performance monitoring, supply of consumables and preventive service for maximum equipment longevity.' ),
				),
			),
		),
		array(
			'bricareau/form-section',
			array(
				'anchor'     => 'etude-technique',
				'layout'     => 'contact-plain',
				'formId'     => $form( 'etude-technique-en' ),
				'title'      => 'Request your engineering study.',
				'intro'      => 'Our engineers analyze your parameters (flow rate, pressure, water quality) to size an industrial filtration system perfectly suited to your plant.',
				'asideItems' => array(
					array( 'icon' => 'phone', 'title' => 'Industrial support', 'value' => '1-855-264-9328', 'sub' => 'ENGINEERING DIVISION' ),
					array( 'icon' => 'mail', 'title' => 'Technical email', 'value' => 'industriel@bricareau.ca', 'sub' => 'ENGINEERING DIVISION' ),
				),
			),
		),
		array(
			'bricareau/faq',
			array(
				'title' => "_Technical expertise_\nFrequently asked questions",
				'items' => array(
					array( 'question' => 'What is the difference between a sand filter and a multimedia filter?', 'answer' => 'A simple sand filter catches particles on the surface. A multimedia filter uses several layers (anthracite, sand, garnet) of different densities, trapping particles throughout the depth of the bed. This triples the holding capacity and allows finer filtration (down to 10 microns).' ),
					array( 'question' => 'Why do iron and manganese require a catalytic or greensand filter?', 'answer' => 'Iron and manganese dissolved in water are invisible and pass through conventional filters. Catalytic media or greensand act as oxidizers or catalysts: they turn dissolved iron into solid particles that are trapped in the filter bed, then flushed out during backwash.' ),
					array( 'question' => 'Is an activated carbon filter necessary for an industrial application?', 'answer' => 'If your process water must be free of chlorine (which seriously damages reverse osmosis membranes), chloramines or volatile organic compounds (VOCs) that affect taste in the food industry, activated carbon is the only viable technology to absorb them effectively.' ),
					array( 'question' => 'How is maintenance of these industrial systems handled?', 'answer' => 'Our systems have automated control valves (PLC or electronic) that run backwash cycles based on the volume of water treated or the pressure difference (delta-P), ensuring continuous operation with minimal supervision.' ),
				),
			),
		),
	),
);
