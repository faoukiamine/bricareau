<?php
/**
 * Blog, English (translation of pages/blog.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'water-treatment-blog',
	'title'           => 'Blog',
	'translation_of'  => 'blog',
	'seo_title'       => 'Water Treatment Blog & Resources | Bricareau',
	'seo_description' => 'Read our articles, guides and expert advice to improve your water quality in Québec. Everything about softening, filtration and water testing.',
	'menu_order'      => 70,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout' => 'split',
				'title'  => "Articles &\n*resources*",
				'text'   => 'Read our latest articles, guides and expert advice for better water every day.',
				'image'  => $img( 'wave-banner.jpg', 'Bricareau articles and resources - expert water treatment advice' ),
			),
		),
		array( 'bricareau/blog-index', array() ),
		array(
			'bricareau/cta-band',
			array(
				'label'         => 'READY TO TRANSFORM YOUR WATER?',
				'title'         => "Get personalized advice\n*from an expert.*",
				'text'          => 'Our experts are available for a free consultation to discuss your residential or commercial water treatment needs.',
				'ctaText'       => 'Book my visit',
				'ctaUrl'        => '/contact',
				'secondaryText' => '1 (855) 264-9328',
				'secondaryUrl'  => 'tel:18552649328',
			),
		),
	),
);
