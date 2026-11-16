<?php
/**
 * Businesses hub, English (translation of pages/entreprises.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'businesses',
	'title'           => 'Businesses',
	'translation_of'  => 'entreprises',
	'seo_title'       => 'Water Solutions for Businesses and Offices in Québec | Bricareau',
	'seo_description' => "Boost your employees' well-being with our premium hydration solutions in Québec. Bottle-free coolers, sparkling water and ice machines for offices.",
	'menu_order'      => 48,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'split',
				'label'       => 'Business hydration solutions',
				'title'       => 'Water excellence for your team.',
				'text'        => 'Transform your workplace with our premium hydration systems. Purity, design and sustainability for a healthy company culture.',
				'ctaText'     => 'Discover our solutions',
				'ctaUrl'      => '#solutions',
				'phoneButton' => true,
				'image'       => $img( 'Hero-Entreprise.jpg', 'Bricareau business hydration solutions' ),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'variant' => 'icon-centered',
				'cards'   => array(
					array( 'icon' => 'heart-pulse', 'title' => 'Employee well-being', 'text' => 'Healthy hydration boosts your teams\' focus and productivity every day.' ),
					array( 'icon' => 'leaf', 'title' => 'Environmental commitment', 'text' => 'Eliminate thousands of single-use plastic bottles every year for your business.' ),
					array( 'icon' => 'shield-check', 'title' => '5-star service', 'text' => 'Preventive maintenance, proactive filter changes and priority technical support.' ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'   => 'solutions',
				'variant'  => 'simple',
				'title'    => "_Variety & quality_\n*The professionals' choice.*",
				'intro'    => 'Solutions for every corner of your business, from the VIP reception to the staff break room.',
				'linkText' => 'Learn more',
				'products' => array(
					array( 'name' => 'High-performance coolers', 'image' => $img( '774f43e9-1fd4-49ec-86f5-7c8e51bcbd81-removebg-preview.png', 'High-performance coolers' ), 'url' => '/contact', 'text' => 'Cold, room-temperature and hot water on demand. Bottle-free and connected directly to your water line.' ),
					array( 'name' => 'Sparkling & flavoured water', 'image' => $img( 'C-Tap-Under-Counter-1-1-1.webp', 'Sparkling & flavoured water' ), 'url' => '/contact', 'text' => 'Add a touch of luxury to your office with our filtered sparkling water dispensers.' ),
					array( 'name' => 'Ice machines', 'image' => $img( 'Manitowoc-NEO-120V-42-Air-Cooled-Countertop-Chewing-Ice-Nugget-Ice-Maker-and-20-lbs_-Bin-with-Lever-Dispensing-CNP0202A-161L_1100x971.jpg', 'Ice machines' ), 'url' => '/contact', 'text' => 'Plenty of pure ice for your cafeterias and corporate events.' ),
					array( 'name' => 'Premium coffee solutions', 'image' => $img( 'vki-eccellenza-touch-keurigcollection-matrix.full.webp', 'Premium coffee solutions' ), 'url' => '/contact', 'text' => 'Perfectly filtered water to bring out the aromas of your favourite coffees.' ),
				),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'title'         => "More than a machine:\n*a welcome experience.*",
				'body'          => "Every detail counts for your brand image. Our fountains, with their clean, modern design, fit perfectly in your waiting rooms, lobbies and executive offices.",
				'bullets'       => "Careful, discreet installation\nPreventive maintenance every four months\nTouchless technology (sensor options)\nIce & coffee as add-ons",
				'ctaText'       => 'Try our fountains for free',
				'ctaUrl'        => '/contact-entreprises',
				'image'         => $img( '20230add-4ce5-4ae6-a6dc-1f9a2c3aeb7b.jpg', 'Bricareau urban hydration experience' ),
				'imagePosition' => 'left',
				'cardTitle'     => '10k+',
				'cardText'      => 'Satisfied businesses in Québec',
			),
		),
		array(
			'bricareau/cta-band',
			array(
				'title'   => 'Zero plastic. *Maximum impact.*',
				'text'    => 'A single Bricareau cooler eliminates an average of 2,500 plastic bottles a year. Join the move toward a zero-waste office.',
				'ctaText' => 'Calculate your impact',
				'ctaUrl'  => '/faq',
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'anchor'   => 'petillante',
				'title'    => "Chic sparkle:\n*everyday luxury.*",
				'body'     => 'Replace sugary drinks with fresh, micro-filtered sparkling water, adjustable to taste. An elegant solution for your conference rooms and executive offices.',
				'bullets'  => "Ultra-discreet, clean under-counter system\nStill, chilled and sparkling water in a single gesture\nOption to add natural flavours\nMinimalist design that blends perfectly into your decor",
				'ctaText'  => 'Customize your fountain',
				'ctaUrl'   => '/contact',
				'image'    => $img( 'Gallery_Extra_I-Tap_Images_4-1.png', 'Collaboration at the office' ),
				'cardIcon' => 'sparkles',
				'cardText' => 'Fully adjustable carbonation.',
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'anchor'        => 'glacons',
				'title'         => "Pure pro ice\n*on demand at the office.*",
				'body'          => 'Give your teams crunchy, crystal-clear, odourless ice. Ideal for business receptions, cafeterias or simply to refresh a busy workday.',
				'bullets'       => "Nugget technology: softer, easy-to-chew ice that perfectly preserves the aromas of your favourite drinks.\nComplete hygiene: a micro-filtered water circuit for absolutely pure ice, 100% safe for your employees.",
				'ctaText'       => 'Discover the models',
				'ctaUrl'        => '/contact',
				'image'         => $img( 'Manitowoc-NEO-120V-42-Air-Cooled-Countertop-Chewing-Ice-Nugget-Ice-Maker-and-20-lbs_-Bin-with-Lever-Dispensing-CNP0202A-161L_1100x971.jpg', 'Manitowoc ice machine - restaurant water treatment' ),
				'imagePosition' => 'left',
				'cardIcon'      => 'snowflake',
				'cardTitle'     => '24/7 production',
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array( 'title' => "Unmatched quality.\n*Unforgettable service.*" ),
		),
		array(
			'bricareau/navy-cta',
			array(
				'title'     => "Modernize your office:\n*reinvent the water break.*",
				'text'      => 'Our consultants specialize in designing high-performance hydration areas. Enjoy a free 7-day trial for your team.',
				'image'     => $img( '20230add-4ce5-4ae6-a6dc-1f9a2c3aeb7b.jpg', 'Premium hydration at the office' ),
				'phoneText' => 'Talk to an advisor',
				'ctaText'   => 'Request a free trial',
				'ctaUrl'    => '/contact',
			),
		),
	),
);
