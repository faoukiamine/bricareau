<?php
/**
 * Privacy policy, English (translation of pages/politique-de-confidentialite.php; text in data/legal/en/).
 */

return array(
	'slug'            => 'privacy-policy',
	'title'           => 'Privacy policy',
	'translation_of'  => 'politique-de-confidentialite',
	'seo_title'       => 'Privacy Policy | Bricareau Water Specialist',
	'seo_description' => 'Read our privacy policy to understand how Bricareau protects your personal information in accordance with Québec\'s Law 25.',
	'menu_order'      => 90,
	'blocks'          => array(
		array(
			'bricareau/page-title',
			array(
				'title'    => 'Privacy *policy*',
				'subtitle' => 'Bricareau Water Specialist',
				'meta'     => 'Last updated: March 24, 2026',
				'note'     => 'In accordance with Law 25 (Québec) and the Personal Information Protection and Electronic Documents Act (PIPEDA)',
			),
		),
		'<!-- wp:group {"className":"bricareau-prose"} -->' . "\n" . '<div class="wp-block-group bricareau-prose">' . file_get_contents( BRICAREAU_DIR . '/data/legal/en/privacy-policy.html' ) . '</div>' . "\n" . '<!-- /wp:group -->',
	),
);
