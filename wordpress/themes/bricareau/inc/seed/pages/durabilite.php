<?php
/**
 * Durabilité — src/pages/Durabilite.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'       => 'durabilite',
	'title'      => 'Durabilité',
	'seo_title'  => 'Durabilité | Bricareau',
	'menu_order' => 12,
	'blocks'     => array(
		array(
			'bricareau/page-hero',
			array(
				'fadeStop' => '33',
				'title'    => "L'engagement durable *pour vous et l'environnement.*",
				'text'     => "Parce que la durabilité est au cœur de notre démarche, nos systèmes de filtration d'eau sont conçus pour allier performance et respect de l'écologie. Pour votre domicile comme pour votre entreprise, Bricareau élimine votre dépendance aux bouteilles en plastique et vous offre une eau d'une qualité exceptionnelle, protégeant durablement la santé de tous et l'avenir de notre planète.",
				'ctaText'  => 'Découvrir notre engagement',
				'ctaUrl'   => '#notre-engagement',
				'image'    => $img( '2233.jpg', 'Durabilité Bricareau' ),
			),
		),
		array(
			'bricareau/statement',
			array(
				'anchor' => 'notre-engagement',
				'theme'  => 'dark',
				'label'  => 'Notre Engagement',
				'title'  => "Redéfinir le\n*standard écologique.*",
				'text'   => "Face à l'urgence environnementale, chaque décision compte. Préserver nos ressources naturelles et réduire drastiquement notre empreinte écologique n'est plus une option, mais une responsabilité collective absolue.\n\nC'est avec cette vision que Bricareau a vu le jour. Nous avons repensé le cycle de l'eau pour éradiquer définitivement les plastiques à usage unique, en concevant des systèmes de purification d'avant-garde qui garantissent une eau d'une pureté inégalée, directement à votre robinet.",
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'anchor'     => 'nos-piliers',
				'variant'    => 'numbered',
				'background' => 'light',
				'label'      => 'Un Futur Plus Vert',
				'title'      => "Pourquoi choisir\n*le traitement durable ?*",
				'rows'       => array(
					array(
						'title' => 'Réduire le gaspillage',
						'text'  => "La fabrication d'une seule bouteille d'eau nécessite environ trois litres d'eau gaspillée, plus une quantité considérable d'énergie. Autant de gaspillage qu'il est possible d'éviter en optant pour nos solutions de filtration.",
						'image' => $img( 'bouteilles-plastiques.jpg', 'Réduire le gaspillage - filtration Bricareau' ),
					),
					array(
						'title' => 'Moins de CO₂',
						'color' => 'green',
						'text'  => 'Non seulement la production de bouteilles à usage unique engendre un gaspillage considérable, mais le transport et la distribution génèrent également une empreinte carbone inutile.',
						'image' => $img( '2229.jpg', 'Moins de CO2 - filtration Bricareau' ),
					),
					array(
						'title' => 'Mode de vie sain',
						'text'  => "En optant pour nos solutions durables, vous donnez un véritable modèle en matière de développement durable. Découvrez à quel point l'utilisation d'eau filtrée est simple et pratique.",
						'image' => $img( '2234.jpg', "Mode de vie sain - analyse d'eau professionnelle" ),
					),
				),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'label'      => 'Avis Clients',
				'labelStyle' => 'pill',
				'title'      => "L'engagement durable\n*récompensé.*",
				'count'      => 6,
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'overlay'     => 'dark',
				'titleWeight' => 'light',
				'title'       => "*Rejoignez*\nle mouvement.",
				'text'    => "Rejoignez les milliers de Québécois qui ont dit non aux bouteilles en plastique. Nos experts en durabilité sont à votre disposition pour vous conseiller sur les meilleures pratiques de gestion de l'eau.",
				'ctaText' => 'Passer au durable',
				'ctaUrl'  => '/consultation',
				'image'   => $img( '2232.jpg', 'Durabilité Bricareau' ),
			),
		),
	),
);
