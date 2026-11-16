<?php
/**
 * Office water coolers, English (translation of pages/fontaines-entreprises.php).
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

$b4_text = 'The Bluedrop B4 office water fountain delivers filtered hot and cold water on demand. Its built-in 3-stage filtration system ensures a continuous supply of great-tasting water for your office. Available as a floor-standing or countertop model, its sleek, modern design fits any environment. With its fast flow and automatic tank sterilization, staying hydrated has never been easier.';

return array(
	'slug'            => 'modern-water-fountains-and-coolers-for-businesses',
	'title'           => 'Water fountains and coolers for businesses',
	'translation_of'  => 'fontaines-et-refroidisseurs-d-eau-modernes-pour-entreprises',
	'seo_title'       => 'Modern Office Water Fountains | Bricareau',
	'seo_description' => 'Give your team exceptional filtered water, cold, hot or sparkling, connected directly to your water line. An eco-friendly, economical solution with no water jugs to manage.',
	'menu_order'      => 43,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => 'Choose *smart*, sustainable hydration.',
				'text'        => 'Give your team exceptional filtered water, cold, hot or sparkling, connected directly to your water line. An eco-friendly, economical solution with no water jugs to manage.',
				'ctaText'     => 'GET MY FREE TRIAL',
				'ctaUrl'      => '/contact-entreprises',
				'phoneButton' => true,
				'image'       => $img( '2118.jpg', 'Choose smart, sustainable hydration' ),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow' => 'WATER EXCELLENCE AT THE SOURCE',
				'title'   => 'Committed to delivering *high-quality* water fountain solutions.',
				'body'    => 'Our water fountains are designed to improve the well-being of your employees and clients. With our advanced water filtration technologies, enjoy absolutely pure water, incomparable taste and constant freshness in every cup.',
				'ctaText' => 'Learn more',
				'ctaUrl'  => '#solutions-catalog',
				'image'   => $img( '6115.jpg', 'Water excellence at the source' ),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'anchor'  => 'office-benefits',
				'variant' => 'numbered',
				'label'   => 'ADDED VALUE',
				'title'   => 'Raise the hydration standard in your offices.',
				'cards'   => array(
					array( 'title' => 'Absolute purity', 'text' => 'Advanced activated carbon filtration combined with state-of-the-art UV-C disinfection to remove 99.99% of microbiological contaminants and deliver pure water.' ),
					array( 'title' => 'Ideal temperature', 'text' => 'Intensely refreshing ice-cold water, balanced room-temperature water, or instant hot water at the perfect temperature for your teas and coffees.' ),
					array( 'title' => 'Elegant design', 'text' => 'Clean contemporary lines, brushed stainless steel finishes and a prestigious look that fits perfectly in modern workplaces.' ),
					array( 'title' => 'Lasting savings', 'text' => 'Cut your hydration costs by up to 70% compared with buying and managing plastic water jugs or bottles.' ),
				),
			),
		),
		array(
			'bricareau/statement',
			array(
				'theme'    => 'light',
				'text'     => '"Much more than a simple water point, our plumbed-in fountains redefine hydration at the office by eliminating plastic bottles from your premises for good. With advanced filtration technology, they deliver absolutely pure water, free of chlorine, microplastics and microbiological contaminants. Investing in exceptional hydration is a major lever for your employees\' health and your company\'s eco-friendly image."',
				'textSize' => 'large',
			),
		),
		array(
			'bricareau/image-gallery',
			array(
				'images' => array(
					$img( '2539.jpg', 'Eco-friendly, designer office hydration solutions by Bricareau' ),
					$img( '1jp5k.png', 'Filling a bottle with pure filtered water' ),
					$img( '4rlkbv4rlkbv4rlk.png', 'Filling a bottle with pure filtered water' ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'    => 'solutions-catalog',
				'variant'   => 'catalog',
				'title'     => '*Complete versatility*, whatever the environment',
				'linkText'  => 'See details',
				'products'  => array(
					array( 'name' => 'Bluedrop Ice', 'image' => $img( 'A12_no_bg.png', 'Bluedrop Ice' ), 'url' => '/contact-entreprises', 'text' => 'The Bluedrop Ice fountain with built-in ice maker gives you filtered water and pure ice whenever you want. Its 5-stage filtration system provides complete protection and keeps you refreshed all day. This all-in-one hydration station fits in reception areas as well as cafeterias.' ),
					array( 'name' => 'Ravello', 'image' => $img( 'A8_no_bg.png', 'Ravello' ), 'url' => '/contact-entreprises', 'text' => 'The Bluedrop Ravello fountain offers still, sparkling, room-temperature and hot filtered water for your office. Its remarkably compact size fits any environment, giving you all the water you need with elegance and convenience.' ),
					array( 'name' => 'B3', 'image' => $img( 'A9_no_bg.png', 'B3' ), 'url' => '/contact-entreprises', 'text' => 'The Bluedrop B3 office water fountain delivers filtered hot and cold water on demand. Its built-in 3-stage filtration system ensures a continuous supply of great-tasting water for your office. Available as a floor-standing (B4) or countertop (B3) model, its sleek, modern design fits any environment.' ),
					array( 'name' => 'B4', 'image' => $img( 'A13_no_bg.png', 'B4' ), 'url' => '/contact-entreprises', 'text' => $b4_text ),
					array( 'name' => 'B4', 'image' => $img( 'A7_no_bg.png', 'B4' ), 'url' => '/contact-entreprises', 'text' => $b4_text ),
				),
				'ctaTitle'  => 'Need help finding the right system?',
				'ctaButton' => 'Request a consultation',
				'ctaUrl'    => '/consultation',
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'label' => 'THEY TRUST US',
				'title' => 'The choice of *leading companies.*',
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'     => 'VITALITY & PERFORMANCE AT THE OFFICE',
				'title'     => 'Give your business the best in hydration.',
				'text'      => 'Ultra-modern plumbed-in fountains with exceptional design and no water jugs. Boost well-being at work today.',
				'image'     => $img( 'water-dispenser in office.jpg', 'Modern water fountain installed at a business - Bricareau solution' ),
				'phoneText' => 'Talk to a business advisor',
				'avatars'   => $avatars(),
				'rating'    => '4.9/5',
				'caption'   => 'Already chosen by more than 350 leading companies in Québec.',
			),
		),
	),
);
