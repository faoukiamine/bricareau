<?php
/**
 * Industrial hub, English (translation of pages/industriel.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'industrial',
	'title'           => 'Industrial',
	'translation_of'  => 'industriel',
	'seo_title'       => 'Industrial Solutions | Bricareau',
	'seo_description' => 'Whether for steam production, cooling or manufacturing processes, we offer a full range of equipment to ensure better industrial water quality.',
	'menu_order'      => 47,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'  => 'split',
				'title'   => 'The power of water, *optimized for your processes.*',
				'text'    => 'Whether for steam production, cooling or manufacturing processes, we offer a full range of equipment to ensure better industrial water quality.',
				'ctaText' => 'Request a consultation',
				'ctaUrl'  => '/consultation',
				'image'   => $img( '2127.webp', 'Bricareau industrial solutions' ),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'title'   => '*Industrial* water treatment.',
				'body'    => 'Optimizing industrial performance always requires carefully tailored water treatment. Our recognized expertise allows us to design and deploy custom solutions that meet the most demanding standards in your industry, while dramatically reducing your environmental footprint.',
				'bullets' => "Industrial standards: solutions built to withstand the harshest environments.\nContinuous protection: extend the life of your boilers and cooling towers.",
				'image'   => $img( "Filtres d'eau industriels.jpg", 'Bricareau engineering' ),
			),
		),
		array(
			'bricareau/tile-grid',
			array(
				'variant' => 'light',
				'title'   => 'All our solutions *for industry.*',
				'intro'   => 'A complete range of treatment equipment, sized for the high flow rates and chemical requirements of industrial processes.',
				'tiles'   => array(
					array( 'label' => 'SEPARATION', 'title' => 'Specialized media filtration', 'image' => $img( 'Commercial-Water-Softener.webp', 'Specialized media filtration' ), 'url' => '/filtration-industrielle' ),
					array( 'label' => 'CONDITIONING', 'title' => 'Industrial water softening', 'image' => $img( 'adoucissement-industriel.jpg', 'Industrial water softening' ), 'url' => '/contact-entreprises' ),
					array( 'label' => 'TREATMENT', 'title' => 'Chemical dosing systems', 'image' => $img( 'Pulsafeeder dosing group.jpg', 'Chemical dosing systems' ), 'url' => '/contact-entreprises' ),
					array( 'label' => 'PURIFICATION', 'title' => 'Reverse osmosis and demineralization', 'image' => $img( 'jpg100.jpg', 'Reverse osmosis and demineralization' ), 'url' => '/contact-entreprises' ),
					array( 'label' => 'HIGH PURITY', 'title' => 'Water demineralization & deionization', 'image' => $img( 'DI-Water-System.jpg', 'Water demineralization & deionization' ), 'url' => '/contact-entreprises' ),
					array( 'label' => 'STERILIZATION', 'title' => 'Ultraviolet disinfection', 'image' => $img( 'Aquaviva-Cannes-480x355.png', 'Ultraviolet disinfection' ), 'url' => '/contact-entreprises' ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant' => 'icon',
				'title'   => 'Concrete benefits *for your productivity.*',
				'rows'    => array(
					array( 'icon' => 'chart-line', 'title' => 'Higher efficiency.', 'text' => 'Lower operating costs through better overall efficiency.', 'bullets' => 'More reliable, optimized thermal cycles in your processes.', 'image' => $img( 'skids-sur-mesure.jpg', 'Efficiency and energy - industrial UV disinfection' ) ),
					array( 'icon' => 'clock', 'title' => 'Equipment longevity.', 'text' => 'Complete prevention of scale and corrosion, greatly extending the life of your installations.', 'bullets' => 'Less downtime thanks to predictive, planned maintenance.', 'image' => $img( '2126.webp', 'Equipment lifespan - process water treatment' ) ),
				),
			),
		),
		array(
			'bricareau/case-cards',
			array(
				'label' => 'RELATED RESOURCES',
				'title' => 'Case studies *& projects.*',
				'items' => array(
					array( 'label' => 'Microbrewery', 'title' => 'Complete mineral profiling for a Montréal microbrewery.', 'text' => 'See how our reverse osmosis solution, paired with precise remineralization, stabilized the taste of their IPAs.', 'url' => '/solutions-brasseries', 'linkText' => 'Read the case study' ),
					array( 'label' => 'Brewpub', 'title' => 'Complete dechlorination and filtration in Sherbrooke.', 'text' => 'Total removal of phenolic and microbiological compounds with an industrial ultrafiltration system.', 'url' => '/solutions-brasseries', 'linkText' => 'Read the case study' ),
					array( 'label' => 'Circular economy', 'title' => 'Water reuse and CIP optimization.', 'text' => 'An innovative filtration solution that recycles more than 30% of the hot wash and rinse water from the tanks.', 'url' => '/solutions-brasseries', 'linkText' => 'Read the case study' ),
				),
			),
		),
	),
);
