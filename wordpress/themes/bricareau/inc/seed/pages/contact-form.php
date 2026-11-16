<?php
/**
 * Service request — src/pages/Page-contact.tsx (requests are emailed, see inc/requests.php).
 *
 * @var callable $img  fn( string $asset, string $alt ): array
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'             => 'contact-form',
	'title'            => 'Contactez-nous',
	'breadcrumb_label' => 'Contactez-nous',
	'seo_title'        => "Contactez Bricareau | Service & Support d'Eau au Québec",
	'menu_order'       => 62,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'     => 'wash',
				'heroHeight' => '850',
				'label'      => 'Support Technique en ligne • Temps de réponse < 15 min',
				'liveLabel'  => true,
				'title'      => "*Comment pouvons-nous*\nvous aider ?",
				'text'       => "Besoin d'une installation, d'une réparation ou d'un simple changement de filtres ? Nos experts interviennent partout au Grand Montréal et ses environs.",
				'image'      => $img( '126171.jpg', 'Service client Bricareau' ),
			),
		),
		array(
			'bricareau/form-section',
			array(
				'anchor'          => 'contact-form',
				'layout'          => 'contact',
				'formId'          => $form( 'contact' ),
				'title'           => 'Envoyez-nous un message',
				'intro'           => 'Nous vous répondrons dans les plus brefs délais.',
				'watermark'       => 'SUPPORT',
				'asideItems'      => array(
					array( 'icon' => 'phone-call', 'title' => 'Appel sans frais', 'value' => '(855) 264-9328', 'sub' => 'Ligne prioritaire 24/7' ),
					array( 'icon' => 'calendar', 'title' => 'Disponibilités', 'value' => 'Lun - Ven : 8h00 - 18h00', 'sub' => 'Service à domicile rapide' ),
					array( 'icon' => 'map-pin', 'title' => "Zone d'intervention", 'value' => 'Grand Montréal & Environs', 'sub' => 'Périmètre de 300km (Rayon Local)' ),
				),
				'panelTitle'      => "Besoin d'aide immédiate?",
				'panelText'       => 'Nos techniciens sont prêts à répondre à vos questions techniques complexes dès maintenant.',
				'panelButtonText' => 'Appelez un technicien',
				'panelButtonUrl'  => 'tel:18552649328',
			),
		),
	),
);
