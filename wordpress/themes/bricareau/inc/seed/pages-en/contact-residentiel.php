<?php
/**
 * Residential contact, English (translation of pages/contact-residentiel.php).
 *
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'            => 'residential-contact',
	'title'           => 'Residential contact',
	'translation_of'  => 'contact-residentiel',
	'seo_title'       => 'Residential Contact | Home Water Solutions in Québec | Bricareau',
	'seo_description' => 'Need a water softener or a filtration system? Contact Bricareau for a free in-home water analysis anywhere in Québec.',
	'menu_order'      => 63,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'     => 'centered',
				'heroHeight' => '700',
				'title'      => 'Contact us for *residential* water treatment solutions',
				'text'       => 'Want fresher, better-tasting water at home? Fill in the form to be contacted by our expert and get water solutions tailored to your needs.',
			),
		),
		array( 'bricareau/form-section', array( 'formId' => $form( 'contact-residentiel-en' ) ) ),
	),
);
