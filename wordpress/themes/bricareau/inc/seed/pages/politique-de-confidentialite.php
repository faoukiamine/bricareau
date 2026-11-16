<?php
/**
 * Privacy policy — src/pages/Politique-de-Confidentialite.tsx (text in data/legal/).
 */

return array(
	'slug'            => 'politique-de-confidentialite',
	'title'           => 'Politique de confidentialité',
	'seo_title'       => 'Politique de Confidentialité | Bricareau Water Specialist',
	'seo_description' => 'Consultez notre politique de confidentialité pour comprendre comment Bricareau protège vos renseignements personnels conformément à la Loi 25 au Québec.',
	'menu_order'      => 90,
	'blocks'          => array(
		array(
			'bricareau/page-title',
			array(
				'title'    => 'Politique de *confidentialité*',
				'subtitle' => 'Bricareau Water Specialist',
				'meta'     => 'Dernière mise à jour : 24 mars 2026',
				'note'     => 'Conformément à la Loi 25 (Québec) et à la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE)',
			),
		),
		'<!-- wp:group {"className":"bricareau-prose"} -->' . "\n" . '<div class="wp-block-group bricareau-prose">' . file_get_contents( BRICAREAU_DIR . '/data/legal/politique-de-confidentialite.html' ) . '</div>' . "\n" . '<!-- /wp:group -->',
	),
);
