<?php
/**
 * FAQ, English (translation of pages/faq.php; questions are the English FAQ posts).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'frequently-asked-questions',
	'title'           => 'FAQ',
	'translation_of'  => 'faq',
	'seo_title'       => 'Frequently Asked Questions (FAQ) - Water Treatment | Bricareau',
	'seo_description' => 'All your questions about softening, filtration, water testing and maintaining your water treatment systems in Québec. Expert answers.',
	'menu_order'      => 71,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout' => 'split',
				'title'  => "Frequently asked questions:\n*get clear answers.*",
				'text'   => 'Below are the answers to the most common questions about water treatment. Search for the topics that interest you or sort by category to quickly find the information you need.',
				'image'  => $img( 'Foire aux Questions.jpg', 'Bricareau support and frequently asked questions - answers to your water treatment needs' ),
			),
		),
		array( 'bricareau/faq-library', array() ),
		array(
			'bricareau/cta-band',
			array(
				'label'         => 'NEED HELP?',
				'title'         => "Didn't find\n*the answer to your question?*",
				'text'          => 'Our experts are available to discuss your water treatment project and answer all your technical or business questions.',
				'ctaText'       => 'Talk to an expert',
				'ctaUrl'        => 'tel:18552649328',
				'secondaryText' => 'Book a consultation',
				'secondaryUrl'  => '/consultation',
			),
		),
	),
);
