<?php
/**
 * Services, English (translation of pages/services-de-traitement-eau.php).
 *
 * @var callable $img  fn( string $asset, string $alt ): array
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'            => 'water-treatment-services',
	'title'           => 'Water treatment services',
	'translation_of'  => 'services-de-traitement-eau',
	'seo_title'       => 'Bricareau Services & Maintenance | Water Treatment Expertise',
	'seo_description' => 'Get expert maintenance for your water softeners and filtration systems in Québec. Commissioning, repairs and Bricareau maintenance plans.',
	'menu_order'      => 74,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'     => 'product',
				'title'      => '*Expertise & peace of mind:* services dedicated to your comfort.',
				'text'       => 'Bricareau is by your side to make the follow-up, maintenance and performance of your water installations easy, anywhere in Québec.',
				'ctaText'    => 'Book a service',
				'ctaUrl'     => '#contact-form',
				'image'      => $img( 'SERVICES.jpg', 'Bricareau services - technical expertise' ),
				'trustItems' => array(
					array( 'icon' => 'clock', 'label' => 'Service within 24 h', 'value' => 'Priority emergencies' ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant' => 'numbered',
				'label'   => 'PEACE OF MIND',
				'title'   => 'Complete expertise *for your water*',
				'intro'   => 'From installation to preventive maintenance, our certified technicians keep your water treatment equipment running for years, throughout Québec.',
				'rows'    => array(
					array( 'title' => 'Certified commissioning', 'text' => 'Installation by a certified expert keeps your warranty valid and your system performing at its best from day one.', 'bullets' => "Precise calibration\nLeak tests\nUser training", 'image' => $img( 'cae3c0a4-5b4d-4b0e-8bc3-3550a714f7bb.jpg', 'Certified Bricareau technical expertise' ) ),
					array( 'title' => 'Lasting preventive maintenance', 'text' => 'A well-maintained system lasts twice as long. Our technicians perform a complete diagnosis and clean your components.', 'bullets' => "Resin cleaning\nValve check\nSupplies delivered", 'image' => $img( 'Water-Softener-installation.jpg', 'Water system maintenance' ) ),
					array( 'title' => '24/7 expert repairs', 'text' => 'Is your system showing signs of wear? We service every brand on the market to restore your water quality.', 'bullets' => "Fast diagnosis\nOriginal parts\nGuaranteed repairs", 'image' => $img( 'SERVICES.jpg', 'Bricareau expert repairs' ) ),
					array( 'title' => 'Expert water analysis', 'text' => 'Assess your water quality with certified tests and receive a complete diagnosis within 48 hours for a custom solution.', 'bullets' => "Certified tests\nDetailed report\nCustom solutions", 'image' => $img( 'test-laboratoire-diligence-inspection-750x500.jpg', 'Certified laboratory analysis - water expert' ) ),
				),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'title'         => "Bricareau Care\n*All-inclusive maintenance plans.*",
				'body'          => 'Never worry about your water quality again. Our annual maintenance plans provide proactive follow-up of your equipment for complete peace of mind.',
				'bullets'       => "Extended parts & labour warranty\nPriority repairs within 24 h\nWater analyses included\nFollow-up by a dedicated technician",
				'ctaText'       => 'Talk to an advisor',
				'ctaUrl'        => 'tel:18552649328',
				'image'         => $img( 'cae3c0a4-5b4d-4b0e-8bc3-3550a714f7bb.jpg', 'Bricareau Care service' ),
				'imagePosition' => 'left',
				'cardTitle'     => '25+ years',
				'cardText'      => 'of service',
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'  => 'PERFORMANCE',
				'title'    => "Performance & protection\n*Top-tier maintenance for your water systems.*",
				'body'     => 'Optimize the performance and longevity of your water softeners and filters anywhere in Québec. Regular maintenance by our certified technicians ensures effective removal of scale and contaminants, protects your plumbing and guarantees exceptional water quality for your whole family.',
				'bullets'  => "Valves & controllers: multi-brand expertise (Fleck, Clack, Autotrol).\nRebed: replacement of high-quality resins and filter media.\nCleaning and disinfection: antibacterial treatment of brine tanks.\nEco optimization: fine-tuning to minimize water discharge and salt use.",
				'ctaText'  => 'Book a service',
				'ctaUrl'   => '#contact-form',
				'image'    => $img( 'Water-Softener-installation.jpg', 'Bricareau water softener maintenance' ),
				'cardText' => '"A well-adjusted valve can save up to 30% of salt per year."',
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'       => 'PURITY',
				'title'         => "Purity & health\n*Enjoy exceptionally pure water.*",
				'body'          => 'Keep your city or well drinking water crystal clear. Regular replacement of the membranes and filters in your reverse osmosis system is essential to remove 99% of contaminants and ensure flawless hygiene.',
				'bullets'       => "High-quality water filters: replaced twice a year to protect the membrane.\nTFC membranes: purity tests and replacement every 2-3 years.\nBiofilm & hygiene: complete disinfection of the storage tank.\nTDS analysis: instant check of filtration efficiency.",
				'ctaText'       => 'Book your maintenance',
				'ctaUrl'        => '#contact-form',
				'image'         => $img( 'RO service.png', 'Reverse osmosis system maintenance - water treatment in Québec' ),
				'imagePosition' => 'left',
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow' => 'ANALYSIS',
				'title'   => "Diagnosis & precision\n*Reveal what your water is hiding.*",
				'body'    => 'Crystal-clear water is not necessarily pure. Bricareau uses scientific analysis protocols to identify the invisible contaminants that affect your health and your installations. From scale to heavy metals, our diagnosis targets the root of your water problems so we can install the treatment solution that fits perfectly.',
				'bullets' => "Certified analysis of minerals and bacteria\nHeavy metals scan\nDetailed analysis report",
				'ctaText' => 'See all analyses',
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( 'step-diagnostic.png', 'Bricareau digital water diagnosis' ),
			),
		),
		array(
			'bricareau/form-section',
			array(
				'anchor'          => 'contact-form',
				'layout'          => 'contact',
				'formId'          => $form( 'contact-en' ),
				'title'           => 'Request form',
				'intro'           => 'Technical answer within 15 minutes.',
				'asideItems'      => array(
					array( 'icon' => 'phone-call', 'title' => 'Toll-free', 'value' => '1-855-264-9328', 'sub' => 'SUPPORT' ),
					array( 'icon' => 'calendar', 'title' => 'Hours', 'value' => 'Mon - Fri: 8:00 a.m. - 6:00 p.m.', 'sub' => 'SUPPORT' ),
					array( 'icon' => 'map-pin', 'title' => 'Service area', 'value' => 'Throughout Greater Montréal and surroundings', 'sub' => '300 km radius' ),
				),
				'panelTitle'      => 'Need help right away?',
				'panelText'       => 'Our technicians are ready to answer your complex technical questions now.',
				'panelButtonText' => 'Call a technician',
				'panelButtonUrl'  => 'tel:18552649328',
			),
		),
	),
);
