<?php
/**
 * Unsubscribe confirmation — src/pages/DesabonnementSucces.tsx.
 */

return array(
	'slug'             => 'desabonnement-succes',
	'title'            => 'Désabonnement confirmé',
	'seo_title'        => "Désabonnement confirmé | Bricareau",
	'menu_order'       => 93,
	'blocks'           => array(
		array(
			'bricareau/page-title',
			array(
				'title' => "C'est fait !\n*Vous nous manquerez.*",
				'note'  => 'Votre désabonnement a été confirmé avec succès. Vous ne recevrez plus nos courriels promotionnels, mais nous espérons vous revoir bientôt !',
			),
		),
		array(
			'bricareau/cta-band',
			array(
				'theme'         => 'light',
				'title'         => 'Restez en contact différemment',
				'text'          => 'Suivez nos conseils et nos projets au quotidien !',
				'ctaText'       => "Retour à l'accueil",
				'ctaUrl'        => '/',
				'secondaryText' => 'Facebook',
				'secondaryUrl'  => 'https://www.facebook.com/bricareauwaterspecialist',
			),
		),
	),
);
