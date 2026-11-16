<?php
/**
 * Testimonials, English (translation of pages/temoignages.php). Reviews are shown as written.
 */

return array(
	'slug'            => 'testimonials',
	'title'           => 'Testimonials',
	'translation_of'  => 'temoignages',
	'seo_title'       => 'Customer Testimonials & Reviews | Bricareau',
	'seo_description' => 'Find out why our customers in Québec trust us. Read verified reviews of our water treatment and softener services.',
	'menu_order'      => 76,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout' => 'centered',
				'title'  => 'Customer *testimonials*',
				'text'   => "See what our customers say about their experience with Bricareau. Their satisfaction is our greatest pride.",
				'rating' => '4.9/5 (based on more than 200 reviews)',
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'title' => "_Excellence as seen by_\n*our satisfied customers.*",
				'count' => 69,
			),
		),
		array(
			'bricareau/cta-band',
			array(
				'theme'         => 'light',
				'title'         => 'Join our satisfied customers',
				'text'          => 'Find out how we can improve your water quality.',
				'ctaText'       => 'Free water analysis',
				'ctaUrl'        => '/analyses-et-tests-d-eau',
				'secondaryText' => 'Call us: 1 855 264 9328',
				'secondaryUrl'  => 'tel:18552649328',
			),
		),
	),
);
