<?php
/**
 * Unsubscribe confirmed, English (translation of pages/desabonnement-succes.php).
 */

return array(
	'slug'           => 'unsubscribe-confirmed',
	'title'          => 'Unsubscribe confirmed',
	'translation_of' => 'desabonnement-succes',
	'seo_title'      => 'Unsubscribe confirmed | Bricareau',
	'menu_order'     => 93,
	'blocks'         => array(
		array(
			'bricareau/page-title',
			array(
				'title' => "Done!\n*We'll miss you.*",
				'note'  => "Your unsubscribe request has been confirmed. You will no longer receive our promotional emails, but we hope to see you again soon!",
			),
		),
		array(
			'bricareau/cta-band',
			array(
				'theme'         => 'light',
				'title'         => 'Stay in touch another way',
				'text'          => 'Follow our tips and projects every day!',
				'ctaText'       => 'Back to home',
				'ctaUrl'        => '/',
				'secondaryText' => 'Facebook',
				'secondaryUrl'  => 'https://www.facebook.com/bricareauwaterspecialist',
			),
		),
	),
);
