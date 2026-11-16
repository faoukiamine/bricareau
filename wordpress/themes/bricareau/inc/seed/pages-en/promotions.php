<?php
/**
 * Promotions, English (translation of pages/promotions.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

$terms = array(
	'Promotions cannot be combined with other offers unless otherwise stated.',
	'Offers are valid for new customers and may be subject to specific conditions.',
	'Prices and promotions are subject to change without notice.',
	'Professional installation is required for some products.',
	'Contact us for more details on eligibility conditions.',
);

return array(
	'slug'            => 'special-offers',
	'title'           => 'Promotions',
	'translation_of'  => 'promotions',
	'seo_title'       => 'Promotions and Special Offers | Bricareau Water Treatment',
	'seo_description' => 'Save on your water treatment system in Québec. Discover our exclusive promotions on water softeners and filters. Limited-time offers!',
	'menu_order'      => 75,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'     => 'centered',
				'heroHeight' => '800',
				'label'      => 'Exclusive offers',
				'labelStyle' => 'pill-soft',
				'title'      => '*Our current* **promotions.**',
				'text'       => 'Take advantage of our exceptional offers on water treatment systems to transform your daily life.',
				'image'      => $img( '27651.jpg', 'Bricareau promotions - exceptional water treatment offers' ),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'variant'  => 'promo',
				'linkText' => 'Claim the offer',
				'products' => array(
					array(
						'name'     => 'Water softener special offer',
						'text'     => 'Save up to $500 on the installation of a residential water softener',
						'badge'    => 'Valid until March 31, 2026',
						'image'    => $img( 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop', 'Water softener special offer - Bricareau exclusive' ),
						'features' => "Professional installation included\n5-year extended warranty\nFirst year of maintenance free",
						'url'      => '/contact',
					),
					array(
						'name'     => 'Complete water filtration system',
						'text'     => 'Get 20% off our whole-house filtration systems',
						'badge'    => 'Valid until April 15, 2026',
						'image'    => $img( '10341859.jpg', 'Complete water filtration system - Bricareau exclusive' ),
						'features' => "Complete water filtration\nReplacement cartridges included\nFree consultation",
						'url'      => '/contact',
					),
					array(
						'name'     => 'Referral program',
						'text'     => 'Receive $100 for every referred customer who buys a water softening or filtration system',
						'badge'    => 'Ongoing',
						'image'    => $img( 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop', 'Referral program - Bricareau exclusive' ),
						'features' => "Credit applied to your account\nNo limit on referrals\nCumulative bonuses available",
						'url'      => '/contact',
					),
				),
			),
		),
		'<!-- wp:group {"className":"bricareau-prose"} -->' . "\n" . '<div class="wp-block-group bricareau-prose"><!-- wp:heading {"level":3} -->' . "\n" . '<h3 class="wp-block-heading">Terms and conditions</h3>' . "\n" . '<!-- /wp:heading -->' . "\n\n" . '<!-- wp:list -->' . "\n" . '<ul class="wp-block-list">' . implode( "\n", array_map( fn( $term ) => '<!-- wp:list-item -->' . "\n" . '<li>' . esc_html( $term ) . '</li>' . "\n" . '<!-- /wp:list-item -->', $terms ) ) . '</ul>' . "\n" . '<!-- /wp:list --></div>' . "\n" . '<!-- /wp:group -->',
	),
);
