<?php
/**
 * Diagnosis, English (translation of pages/diagnostic.php).
 *
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'            => 'water-diagnosis',
	'title'           => 'Diagnosis',
	'translation_of'  => 'diagnostic',
	'seo_title'       => 'Online Diagnosis | Assess Your Water in Québec | Bricareau',
	'seo_description' => 'Use our online diagnostic tool to identify your water problems: scale, iron, sulphur or odours. Instant personalized solution.',
	'menu_order'      => 73,
	'blocks'          => array(
		array(
			'bricareau/page-title',
			array(
				'title'      => "Find the *perfect solution*\nfor your water.",
				'note'       => 'A few quick questions to transform your daily water quality. Get your personalized water prescription in under 2 minutes.',
				'titleStyle' => 'solid',
			),
		),
		array( 'bricareau/water-quiz', array( 'formId' => $form( 'diagnostic-en' ) ) ),
	),
);
