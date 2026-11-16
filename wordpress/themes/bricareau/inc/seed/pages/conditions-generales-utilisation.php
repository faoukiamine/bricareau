<?php
/**
 * Terms of use — src/pages/Conditions-Generales-Utilisation.tsx (text in data/legal/).
 */

return array(
	'slug'            => 'conditions-generales-utilisation',
	'title'           => "Conditions générales d'utilisation",
	'seo_title'       => "Conditions Générales d'Utilisation | Bricareau Water Specialist",
	'seo_description' => "Consultez les conditions générales d'utilisation du site Bricareau.com. Informations sur nos services de traitement d'eau au Québec et modalités d'utilisation.",
	'menu_order'      => 91,
	'blocks'          => array(
		array(
			'bricareau/page-title',
			array(
				'title'    => "CONDITIONS GÉNÉRALES D'*UTILISATION*",
				'subtitle' => 'Bricareau Water Specialist',
				'meta'     => 'Dernière mise à jour : 24 mars 2026',
				'note'     => 'Site web : www.bricareau.com',
			),
		),
		'<!-- wp:group {"className":"bricareau-prose"} -->' . "\n" . '<div class="wp-block-group bricareau-prose">' . file_get_contents( BRICAREAU_DIR . '/data/legal/conditions-generales-utilisation.html' ) . '</div>' . "\n" . '<!-- /wp:group -->',
	),
);
