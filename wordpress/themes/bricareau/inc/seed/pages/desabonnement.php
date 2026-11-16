<?php
/**
 * Unsubscribe — src/pages/Desabonnement.tsx. Requests go to the address of Réglages > Demandes du site.
 *
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'            => 'desabonnement',
	'title'           => 'Désabonnement',
	'seo_title'       => "Désabonnement | Bricareau Traitement d'Eau",
	'seo_description' => 'Gérez vos préférences de communication avec Bricareau. Formulaire de désabonnement rapide et simple.',
	'menu_order'      => 92,
	'blocks'          => array(
		array(
			'bricareau/page-title',
			array(
				'title' => '*Désabonnement*',
				'note'  => 'Nous sommes désolés de vous voir partir. Aidez-nous à nous améliorer en nous indiquant la raison de votre départ.',
			),
		),
		array( 'bricareau/form-section', array( 'formId' => $form( 'desabonnement' ) ) ),
	),
);
