<?php
/**
 * Testimonials — src/pages/Temoignages.tsx.
 */

return array(
	'slug'            => 'temoignages',
	'title'           => 'Témoignages',
	'seo_title'       => 'Témoignages Clients & Avis Bricareau | Satisfaction Garantie',
	'seo_description' => "Découvrez pourquoi nos clients au Québec nous font confiance. Lisez les avis certifiés sur nos services de traitement d'eau et adoucisseurs.",
	'menu_order'      => 76,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout' => 'centered',
				'title'  => '*Témoignages* Clients',
				'text'   => 'Découvrez ce que nos clients disent de leur expérience avec Bricareau. Leur satisfaction est notre plus grande fierté.',
				'rating' => '4.9/5 (Basé sur plus de 200 avis)',
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'title' => "_L'excellence vue par_\n*nos clients satisfaits.*",
				'count' => 69,
			),
		),
		array(
			'bricareau/cta-band',
			array(
				'theme'         => 'light',
				'title'         => 'Rejoignez nos clients satisfaits',
				'text'          => "Découvrez comment nous pouvons améliorer la qualité de votre eau.",
				'ctaText'       => "Analyse d'eau gratuite",
				'ctaUrl'        => '/analyses-et-tests-d-eau',
				'secondaryText' => 'Appelez-nous : 1 855 264 9328',
				'secondaryUrl'  => 'tel:18552649328',
			),
		),
	),
);
