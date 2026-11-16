<?php
/**
 * Promotions — src/pages/Promotions.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

$terms = array(
	"Les promotions ne peuvent être combinées avec d'autres offres sauf indication contraire.",
	'Les offres sont valides pour les nouveaux clients et peuvent être soumises à des conditions spécifiques.',
	'Les prix et promotions sont sujets à changement sans préavis.',
	'Installation professionnelle requise pour certains produits.',
	"Contactez-nous pour plus de détails sur les conditions d'éligibilité.",
);

return array(
	'slug'            => 'promotions',
	'title'           => 'Promotions',
	'seo_title'       => "Promotions et Offres Spéciales | Traitement d'Eau Bricareau",
	'seo_description' => "Économisez sur votre système de traitement d'eau au Québec. Découvrez nos promotions exclusives sur les adoucisseurs et filtres à eau. Offres à durée limitée !",
	'menu_order'      => 75,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'     => 'centered',
				'heroHeight' => '800',
				'label'      => 'Offres Exclusives',
				'labelStyle' => 'pill-soft',
				'title'      => "*Nos Promotions* **en Cours.**",
				'text'       => "Profitez de nos offres exceptionnelles sur nos systèmes de traitement d'eau pour transformer votre quotidien.",
				'image'      => $img( '27651.jpg', "Nos Promotions Bricareau - Offres exceptionnelles sur le traitement d'eau" ),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'variant'  => 'promo',
				'linkText' => "Profiter de l'offre",
				'products' => array(
					array(
						'name'     => "Offre Spéciale Adoucisseur d'eau",
						'text'     => "Économisez jusqu'à 500$ sur l'installation d'un adoucisseur d'eau résidentiel",
						'badge'    => "Valide jusqu'au 31 mars 2026",
						'image'    => $img( 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop', "Offre Spéciale Adoucisseur d'eau - Offre exclusive Bricareau" ),
						'features' => "Installation professionnelle incluse\nGarantie prolongée de 5 ans\nPremière année d'entretien gratuit",
						'url'      => '/contact',
					),
					array(
						'name'     => "Système de Filtration d'eau Complet",
						'text'     => 'Profitez de 20% de rabais sur nos systèmes de filtration pour toute la maison',
						'badge'    => "Valide jusqu'au 15 avril 2026",
						'image'    => $img( '10341859.jpg', "Système de Filtration d'eau Complet - Offre exclusive Bricareau" ),
						'features' => "Filtration complète de l'eau\nCartouches de remplacement incluses\nConsultation gratuite",
						'url'      => '/contact',
					),
					array(
						'name'     => 'Programme de Référence',
						'text'     => "Recevez 100$ pour chaque client référé qui achète un système d'adoucissement ou de filtration d'eau",
						'badge'    => "Valide jusqu'au Permanent",
						'image'    => $img( 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop', 'Programme de Référence - Offre exclusive Bricareau' ),
						'features' => "Crédit applicable sur votre compte\nAucune limite de références\nBonus cumulatifs disponibles",
						'url'      => '/contact',
					),
				),
			),
		),
		'<!-- wp:group {"className":"bricareau-prose"} -->' . "\n" . '<div class="wp-block-group bricareau-prose"><!-- wp:heading {"level":3} -->' . "\n" . '<h3 class="wp-block-heading">Conditions générales</h3>' . "\n" . '<!-- /wp:heading -->' . "\n\n" . '<!-- wp:list -->' . "\n" . '<ul class="wp-block-list">' . implode( "\n", array_map( fn( $term ) => '<!-- wp:list-item -->' . "\n" . '<li>' . esc_html( $term ) . '</li>' . "\n" . '<!-- /wp:list-item -->', $terms ) ) . '</ul>' . "\n" . '<!-- /wp:list --></div>' . "\n" . '<!-- /wp:group -->',
	),
);
