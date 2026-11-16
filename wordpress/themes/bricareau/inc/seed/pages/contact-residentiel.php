<?php
/**
 * Residential contact — src/pages/ContactResidentiel.tsx.
 *
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'             => 'contact-residentiel',
	'title'            => 'Contact Résidentiel',
	'seo_title'        => "Contact Résidentiel | Solutions d'Eau pour la Maison au Québec | Bricareau",
	'seo_description'  => "Besoin d'un adoucisseur ou d'un système de filtration ? Contactez Bricareau pour une analyse d'eau gratuite à domicile partout au Québec.",
	'menu_order'       => 63,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'     => 'centered',
				'heroHeight' => '700',
				'title'      => "Contactez-nous pour des solutions de traitement d'eau *résidentiel*",
				'text'       => "Vous souhaitez une eau plus fraîche et plus savoureuse à votre domicile ? Remplissez le formulaire pour être contacté par notre expert et obtenir des solutions d'eau adaptées à vos besoins spécifiques.",
			),
		),
		array( 'bricareau/form-section', array( 'formId' => $form( 'contact-residentiel' ) ) ),
	),
);
