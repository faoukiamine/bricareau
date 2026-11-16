<?php
/**
 * Replacement filters, English (translation of pages/filtres-de-remplacement.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'             => 'replacement-water-filters',
	'title'            => 'Replacement filters',
	'translation_of'   => 'filtres-d-eau-de-remplacement',
	'breadcrumb_label' => 'Replacement filters',
	'seo_title'        => 'Replacement Water Filters in Québec | Cartridges and Media | Bricareau',
	'seo_description'  => 'Wide selection of replacement filters in Québec: sediment, activated carbon, reverse osmosis membranes and anti-scale cartridges. Keep your water pure.',
	'menu_order'       => 36,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "Replacement\nfilter cartridges",
				'text'        => 'Easily find the right replacement water filter for your residential, commercial or industrial filtration system.',
				'ctaText'     => 'Find my filter',
				'ctaUrl'      => '#solutions-catalog',
				'phoneButton' => true,
				'image'       => $img( 'Big-Blue-Filter-Housing-banner.webp', 'Filter housings' ),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'    => 'solutions-catalog',
				'variant'   => 'catalog',
				'title'     => "Replacement filters:\n*purity preserved*, day after day.",
				'intro'     => 'Easily identify the filter that fits your system for optimal performance.',
				'linkText'  => 'Request a price',
				'products'  => array(
					array( 'name' => 'Sediment filters', 'image' => $img( 'Polypropylene.svg', 'Sediment filter' ), 'url' => '/contact-form', 'text' => 'Effectively removes sand, dust, rust and suspended particles. Protects your household equipment and keeps your water clear from the moment it enters your home.' ),
					array( 'name' => 'String-wound filters', 'image' => $img( 'String Wound Cartridge Filters.png', 'String-wound filter' ), 'url' => '/contact-form', 'text' => 'Designed for depth filtration with high dirt-holding capacity. Ideal for water loaded with fine sediment or for industrial applications.' ),
					array( 'name' => 'Pleated paper filters', 'image' => $img( 'Pleated Water Filters.png', 'Pleated filter' ), 'url' => '/contact-form', 'text' => 'Offers maximum filtration surface for optimal water flow. Washable and reusable, they are an economical way to capture coarse sediment.' ),
					array( 'name' => 'Granular activated carbon filters', 'image' => $img( 'gac water filters.png', 'Granular activated carbon filter' ), 'url' => '/contact-form', 'text' => 'Removes chlorine, bad tastes and unpleasant odours from water. Ideal for improving the taste of drinking water at the tap.' ),
					array( 'name' => 'Carbon block filters', 'image' => $img( 'cbc water filters.png', 'Carbon block filter' ), 'url' => '/contact-form', 'text' => 'Advanced compression technology with a dual action: fine sediment filtration and maximum absorption of chlorine, organic compounds and pesticide residues.' ),
					array( 'name' => 'Anti-scale filters', 'image' => $img( 'Water Softening Filters.png', 'Anti-scale filter' ), 'url' => '/contact-form', 'text' => 'Actively prevents scale and lime deposits on your appliances\' heating elements. Ideal for extending the life of your equipment.' ),
					array( 'name' => 'Deionization filters', 'image' => $img( 'deionized water filters.png', 'Deionization filter' ), 'url' => '/contact-form', 'text' => 'Produces absolutely pure water with no dissolved minerals (zero TDS). Essential for laboratories, aquariums and high-precision industrial applications.' ),
					array( 'name' => 'Inline filters', 'image' => $img( 'inline water filters.png', 'Inline filter' ), 'url' => '/contact-form', 'text' => 'Compact, ready-to-use cartridges, perfect for fridges, coffee machines and under-sink reverse osmosis systems. Quick and easy to install.' ),
				),
				'ctaTitle'  => 'Need help choosing the right filter?',
				'ctaText'   => 'Our water treatment experts are here to guide you to the exact model for your equipment.',
				'ctaButton' => 'Talk to an expert',
				'ctaUrl'    => '/contact',
			),
		),
	),
);
