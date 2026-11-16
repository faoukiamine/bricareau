<?php
/**
 * Our process, English (translation of pages/notre-processus.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'our-process',
	'title'           => 'Our process',
	'translation_of'  => 'notre-processus',
	'seo_title'       => 'Our Method | Bricareau',
	'seo_description' => 'A rigorous four-step process: water quality analysis, custom solution, professional installation and regular maintenance.',
	'menu_order'      => 11,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'fadeStop' => '33',
				'title'    => "Our expert know-how\n*for absolutely perfect water.*",
				'text'     => 'Discover a rigorous four-step process. From water quality analysis to regular maintenance and follow-up, we leave nothing to chance to make your water perfect.',
				'ctaText'  => 'Discover the steps',
				'ctaUrl'   => '#les-etapes',
				'image'    => $img( '2241.jpg', 'Our process - custom water systems' ),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'anchor'     => 'les-etapes',
				'variant'    => 'numbered',
				'background' => 'light',
				'label'      => 'Our process',
				'title'      => "The rigour of\n*our method.*",
				'intro'      => 'Discover our expert approach to **water treatment**. From **water quality analysis** to the installation of **water softeners** and **reverse osmosis filtration** systems, our process thoroughly removes scale, iron and contaminants. Give your home, business or plant **pure, softened water** for complete comfort, better performance and optimal protection of your installations.',
				'rows'       => array(
					array(
						'title'    => 'Water quality analysis',
						'subtitle' => 'The foundation of all perfection.',
						'text'     => 'We carry out a complete analysis of your water. Our diagnostic protocols precisely identify contaminants and mineral and microbiological profiles. These precise results let us design a treatment solution perfectly suited to your water.',
						'bullets'  => "Mineral profile\nMetal spectrometry\nMicrobiological profile\nTDS analysis",
						'image'    => $img( '2240.jpg', 'Water quality analysis' ),
					),
					array(
						'title'    => 'Tailored solutions',
						'subtitle' => 'Science serving custom design.',
						'text'     => 'Every drop counts. Our technical experts design a filtration setup calibrated for your unique water profile, selecting advanced technologies for maximum durability.',
						'bullets'  => "Custom design\nAdvanced materials\nSmart ecosystem\nAbsolute performance",
						'image'    => $img( 'water_system_blueprint_render_1778902045750.png', 'Tailored solutions' ),
					),
					array(
						'title'    => 'Professional installation',
						'subtitle' => 'Excellence in every detail of the installation.',
						'text'     => 'Our certified technicians carry out the installation with absolute rigour. From mechanical integration to electronic calibration, every component is tested to guarantee flawless performance.',
						'bullets'  => "Hassle-free installation\nInstrument calibration\nCustom settings\nTesting and commissioning",
						'gallery'  => array(
							$img( '2235.jpg', 'Professional installation' ),
							$img( '2236.jpeg', 'Bricareau installation' ),
							$img( '2240.jpeg', 'Bricareau installation' ),
							$img( '2237.jpeg', 'Bricareau installation' ),
							$img( '2239.jpeg', 'Bricareau installation' ),
							$img( '2238.jpeg', 'Bricareau installation' ),
						),
					),
					array(
						'title'    => 'Regular maintenance and follow-up',
						'subtitle' => 'Unshakeable peace of mind.',
						'text'     => 'Excellence needs upkeep. Our commitment goes well beyond installation, with a proactive maintenance program that keeps your system running at its best, day after day.',
						'bullets'  => "Maintenance program\nControl analyses\nPreventive replacement\nPriority support",
						'image'    => $img( 'cae3c0a4-5b4d-4b0e-8bc3-3550a714f7bb.jpg', 'Regular maintenance and follow-up' ),
					),
				),
			),
		),
		array(
			'bricareau/statement',
			array(
				'anchor'   => 'nos-engagements',
				'theme'    => 'dark',
				'textSize' => 'medium',
				'label'    => 'The Bricareau standard',
				'title'    => "Redefining the\n*standard of quality.*",
				'text'     => "Clear promises that redefine the standards of Québec's water treatment industry.",
				'items'    => array(
					array( 'icon' => 'clock', 'title' => 'Fast response', 'text' => 'Service within 48 hours. Your comfort cannot wait, and our teams are ready to act quickly.' ),
					array( 'icon' => 'award', 'title' => 'Full warranty', 'text' => 'Complete coverage on our systems. No compromise on your long-term peace of mind.' ),
					array( 'icon' => 'crown', 'title' => 'Premium components', 'text' => 'We carefully select high-end materials to guarantee unmatched durability.' ),
					array( 'icon' => 'leaf', 'title' => 'Eco-responsibility', 'text' => 'Our solutions are carefully calibrated to minimize water and energy waste every day.' ),
				),
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'overlay' => 'light',
				'title'   => "Move to the ultimate\n*standard of purity.*",
				'text'    => 'Ask our technical experts for an in-depth, personalized diagnosis of your water quality. Absolute expertise for your peace of mind.',
				'ctaText' => 'Book a water analysis',
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( '2148858959.jpg', 'Contact Bricareau' ),
			),
		),
	),
);
