<?php
/**
 * Terms of use, English (translation of pages/conditions-generales-utilisation.php; text in data/legal/en/).
 */

return array(
	'slug'            => 'terms-of-use',
	'title'           => 'Terms of use',
	'translation_of'  => 'conditions-generales-utilisation',
	'seo_title'       => 'Terms of Use | Bricareau Water Specialist',
	'seo_description' => 'Read the terms of use of the Bricareau.com website: information about our water treatment services in Québec and how the site may be used.',
	'menu_order'      => 91,
	'blocks'          => array(
		array(
			'bricareau/page-title',
			array(
				'title'    => 'TERMS OF *USE*',
				'subtitle' => 'Bricareau Water Specialist',
				'meta'     => 'Last updated: March 24, 2026',
				'note'     => 'Website: www.bricareau.com',
			),
		),
		'<!-- wp:group {"className":"bricareau-prose"} -->' . "\n" . '<div class="wp-block-group bricareau-prose">' . file_get_contents( BRICAREAU_DIR . '/data/legal/en/terms-of-use.html' ) . '</div>' . "\n" . '<!-- /wp:group -->',
	),
);
