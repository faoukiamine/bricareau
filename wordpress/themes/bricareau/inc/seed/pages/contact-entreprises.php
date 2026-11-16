<?php
/**
 * Business contact — src/pages/ContactEntreprises.tsx.
 *
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'             => 'contact-entreprises',
	'title'            => 'Contact Entreprises',
	'seo_title'        => "Contact Entreprises | Solutions d'Eau de Bureau au Québec | Bricareau",
	'seo_description'  => "Contactez nos experts pour des solutions de fontaines à eau et traitement d'eau pour entreprise au Québec. Analyse gratuite et service professionnel.",
	'menu_order'       => 64,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'     => 'centered',
				'heroHeight' => '700',
				'title'      => "Contactez-nous pour des solutions de l'eau de *bureau*",
				'text'       => "Vous souhaitez une eau plus fraîche et plus savoureuse sur votre lieu de travail ? Remplissez le formulaire pour être contacté par notre expert et obtenir des solutions pratiques de fontaines à eau adaptées aux besoins de votre entreprise.",
			),
		),
		array( 'bricareau/form-section', array( 'formId' => $form( 'contact-entreprises' ) ) ),
	),
);
