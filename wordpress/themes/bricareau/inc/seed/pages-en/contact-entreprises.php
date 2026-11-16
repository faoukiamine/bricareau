<?php
/**
 * Business contact, English (translation of pages/contact-entreprises.php).
 *
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'            => 'business-contact',
	'title'           => 'Business contact',
	'translation_of'  => 'contact-entreprises',
	'seo_title'       => 'Business Contact | Office Water Solutions in Québec | Bricareau',
	'seo_description' => 'Contact our experts for water fountains and water treatment for businesses in Québec. Free analysis and professional service.',
	'menu_order'      => 64,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'     => 'centered',
				'heroHeight' => '700',
				'title'      => 'Contact us for *office* water solutions',
				'text'       => 'Want fresher, better-tasting water at work? Fill in the form to be contacted by our expert and get practical water fountain solutions tailored to your business.',
			),
		),
		array( 'bricareau/form-section', array( 'formId' => $form( 'contact-entreprises-en' ) ) ),
	),
);
