<?php
/**
 * Unsubscribe, English (translation of pages/desabonnement.php).
 *
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'            => 'unsubscribe',
	'title'           => 'Unsubscribe',
	'translation_of'  => 'desabonnement',
	'seo_title'       => 'Unsubscribe | Bricareau Water Treatment',
	'seo_description' => 'Manage your communication preferences with Bricareau. Quick and simple unsubscribe form.',
	'menu_order'      => 92,
	'blocks'          => array(
		array(
			'bricareau/page-title',
			array(
				'title' => '*Unsubscribe*',
				'note'  => "We're sorry to see you go. Help us improve by telling us why you're leaving.",
			),
		),
		array( 'bricareau/form-section', array( 'formId' => $form( 'desabonnement-en' ) ) ),
	),
);
