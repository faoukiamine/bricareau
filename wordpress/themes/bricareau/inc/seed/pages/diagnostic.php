<?php
/**
 * Online diagnostic — src/pages/Diagnostic.tsx. Answers are emailed through the "diagnostic" form.
 *
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'            => 'diagnostic',
	'title'           => 'Diagnostic',
	'seo_title'       => 'Diagnostic en Ligne | Évaluez votre Eau au Québec | Bricareau',
	'seo_description' => "Utilisez notre outil de diagnostic en ligne pour identifier les problèmes de votre eau : calcaire, fer, soufre ou odeurs. Solution personnalisée instantanée.",
	'menu_order'      => 73,
	'blocks'          => array(
		array(
			'bricareau/page-title',
			array(
				'title' => "Découvrez la *solution parfaite*\npour votre eau.",
				'note'  => "Quelques questions rapides pour transformer la qualité de votre quotidien. Obtenez votre prescription d'eau personnalisée en moins de 2 minutes.",
				'titleStyle' => 'solid',
			),
		),
		array( 'bricareau/water-quiz', array( 'formId' => $form( 'diagnostic' ) ) ),
	),
);
