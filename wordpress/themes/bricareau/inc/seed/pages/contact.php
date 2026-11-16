<?php
/**
 * Contact hub — src/pages/Contact.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'contact',
	'title'           => 'Contact',
	'seo_title'       => "Contactez Bricareau | Service Client Traitement d'Eau au Québec",
	'seo_description' => "Besoin d'aide pour votre eau ? Contactez l'équipe Bricareau par téléphone, courriel ou via notre formulaire. Experts en traitement d'eau à votre service partout au Québec.",
	'menu_order'      => 61,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'  => 'wash',
				'title'   => "*Contactez-nous.*\nNotre équipe est à votre écoute.",
				'text'    => "Nous sommes là pour répondre à toutes vos questions sur le traitement de l'eau. Que ce soit pour un conseil technique ou une demande de soumission, nos experts vous accompagnent avec transparence.",
				'ctaText' => 'Appelez au 1 855 264 9328',
				'ctaUrl'  => 'tel:18552649328',
				'rating'  => 'Note de 4.9/5 par +20 000 familles au Québec',
				'image'   => $img( '118022.jpg', 'Contact Bricareau' ),
			),
		),
		array(
			'bricareau/resource-cards',
			array(
				'variant'   => 'contact',
				'watermark' => 'SUPPORT',
				'items'     => array(
					array(
						'title'      => 'Foire aux questions',
						'text'       => "Vous n'avez pas envie de nous contacter, ou vous pensez que nous avons déjà répondu à votre question ? Consultez notre FAQ exhaustive.",
						'buttonText' => 'Consultez la FAQ',
						'url'        => '/faq',
						'image'      => $img( 'FAQ.jpg', 'Foire aux questions - filtration Bricareau' ),
					),
					array(
						'title'      => 'Demande de consultation',
						'text'       => "Pour obtenir une soumission personnalisée ou discuter d'un projet d'installation, nos experts sont à votre entière disposition.",
						'buttonText' => 'Planifiez une consultation',
						'url'        => '/consultation',
						'image'      => $img( '40-AdobeStock_365603381.jpeg', "Consultation gratuite - analyse d'eau professionnelle" ),
					),
					array(
						'title'      => 'Support client & Entretien',
						'text'       => "Déjà client Bricareau ? Besoin d'aide technique ou de planifier un entretien de routine par nos techniciens certifiés.",
						'badge'      => 'En ligne : Réponse < 15 min',
						'buttonText' => 'Écrivez-nous',
						'url'        => '/contact-form',
						'image'      => $img( 'SERVICES.jpg', 'Support client & Entretien - expert en eau' ),
					),
				),
			),
		),
	),
);
