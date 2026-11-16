<?php
/**
 * FAQ — src/pages/FAQ.tsx. The questions are managed in the "FAQ" admin menu.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'faq',
	'title'           => 'FAQ',
	'seo_title'       => "Foire aux Questions (FAQ) - Traitement d'Eau | Bricareau",
	'seo_description' => 'Toutes vos questions sur l\'adoucissement, la filtration, les tests d\'eau et l\'entretien de vos systèmes de traitement d\'eau au Québec. Réponses d\'experts.',
	'menu_order'      => 71,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout' => 'split',
				'title'  => "Foire aux questions,\n*obtenez des réponses claires.*",
				'text'   => 'Vous trouverez ci-dessous les réponses aux questions les plus fréquentes sur le traitement de l\'eau. Recherchez les sujets qui vous intéressent ou triez par catégorie pour trouver rapidement l\'information dont vous avez besoin.',
				'image'  => $img( 'Foire aux Questions.jpg', "Support et Foire aux questions Bricareau - Réponses à vos besoins en traitement d'eau" ),
			),
		),
		array( 'bricareau/faq-library', array() ),
		array(
			'bricareau/cta-band',
			array(
				'label'         => "BESOIN D'ASSISTANCE ?",
				'title'         => "Vous n'avez pas trouvé\n*la réponse à votre question ?*",
				'text'          => 'Nos experts sont disponibles pour discuter de votre projet de traitement d\'eau et répondre à toutes vos interrogations techniques ou commerciales.',
				'ctaText'       => 'Parlez à un expert',
				'ctaUrl'        => 'tel:18552649328',
				'secondaryText' => 'Planifiez une consultation',
				'secondaryUrl'  => '/consultation',
			),
		),
	),
);
