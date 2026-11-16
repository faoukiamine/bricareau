<?php
/**
 * Coffee machine filters, English (translation of pages/filtres-eau-machine-cafe.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'coffee-machine-water-filters',
	'title'           => 'Coffee machine filters',
	'translation_of'  => 'filtres-eau-machine-cafe',
	'seo_title'       => 'Water Filters for Coffee Machines | Bricareau',
	'seo_description' => 'Protect your high-precision equipment and reveal the true aroma profile of your beans with our filtration systems.',
	'menu_order'      => 44,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => '*Pure water,* the soul of your coffee.',
				'text'        => 'Protect your high-precision equipment and reveal the true aroma profile of your beans with our filtration systems.',
				'ctaText'     => 'Explore our filters',
				'ctaUrl'      => '#explore-filters',
				'phoneButton' => true,
				'image'       => $img( '4319.jpg', 'Coffee filtration solutions - water treatment in Québec' ),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'   => 'explore-filters',
				'variant'  => 'simple',
				'title'    => 'Coffee is 98% water: choose the *right filter.*',
				'intro'    => 'We offer a balanced range of filters suited to your water and your performance needs.',
				'products' => array(
					array( 'name' => 'PURITY C Quell ST', 'image' => $img( 'PURITY-C-Quell-ST-Advanced.webp', 'PURITY C Quell ST' ), 'text' => 'The classic espresso filter, ideal for water with high carbonate hardness. A perfect mineral balance.' ),
					array( 'name' => 'PURITY C Steam', 'image' => $img( 'PURITY-C-Steam-Advanced.webp', 'PURITY C Steam' ), 'text' => 'Designed for mineralization and odour removal. Ideal for specialty coffee.' ),
					array( 'name' => 'PURITY HCHF', 'image' => $img( 'PURITY-HCHF-Design-Center.webp', 'PURITY HCHF' ), 'text' => 'Activated carbon filter for chlorine-free water. Recommended for automatic coffee machines.' ),
					array( 'name' => 'PURITY C1100 XtraSafe', 'image' => $img( 'PURITY-C1100-XtraSafe.webp', 'PURITY C1100 XtraSafe' ), 'text' => 'High capacity for large establishments. Maximum scale protection for continuous flow.' ),
					array( 'name' => 'PURITY C1000 AC', 'image' => $img( 'PURITY-C1000-AC.webp', 'PURITY C1000 AC' ), 'text' => 'Designed for steam ovens and high-demand machines. Prevents stubborn scale deposits.' ),
					array( 'name' => 'PURITY C-Finest', 'image' => $img( 'PURITY-C-Finest.png.webp', 'PURITY C-Finest' ), 'text' => 'Designed for steam ovens and high-demand machines. Prevents stubborn scale deposits.' ),
				),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'title'   => 'The right filter makes all the *difference*',
				'body'    => 'Whether you run a small café or a large high-volume food service, our filters guarantee consistency in every cup while extending the life of your machines.',
				'ctaText' => 'REQUEST A QUOTE',
				'ctaUrl'  => '/contact-entreprises',
				'image'   => $img( '14331.jpg', 'The right filter makes all the difference - professional water analysis' ),
			),
		),
	),
);
