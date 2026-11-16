<?php
/**
 * Bureaux & Entreprises hub — src/pages/Bureau.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'             => 'solutions-de-traitement-d-eau-pour-offices-et-bureaux',
	'title'            => "Solutions d'eau pour bureaux",
	'breadcrumb_label' => 'Bureaux & Entreprises',
	'seo_title'        => "Solutions d'eau pour Bureaux | Bricareau",
	'menu_order'       => 21,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'split',
				'breadcrumbs' => false,
				'title'       => "*L'excellence de l'eau,*\nau service de vos équipes.",
				'text'        => "Optimisez le bien-être de vos équipes avec des solutions d'hydratation premium, écologiques et sans logistique encombrante.",
				'ctaText'     => 'Consultation corporative gratuite',
				'ctaUrl'      => '/consultation',
				'image'       => $img( 'Hero-Entreprise.jpg', 'Solutions Bureaux & Corporatives' ),
			),
		),
		array(
			'bricareau/intro-split',
			array(
				'title'      => "*L'hydratation premium,*\npensée pour l'entreprise.",
				'text'       => "« Un collaborateur bien hydraté est un collaborateur concentré et performant au quotidien. » Éliminez la logistique des bonbonnes d'eau et offrez une eau filtrée, pure, directement depuis votre réseau, pour le plus grand confort de vos équipes.",
				'image'      => $img( '8456.jpg', 'Une hydratation sans compromis' ),
				'imageStyle' => 'rounded',
				'features'   => array(
					array( 'icon' => 'users', 'color' => 'navy', 'title' => 'Bien-être Équipe', 'text' => 'Renforcez la qualité de vie au travail grâce à une eau pure, disponible à volonté.' ),
					array( 'icon' => 'trending-up', 'color' => 'green', 'title' => 'Performance', 'text' => 'Maintenez le focus de vos talents tout au long de la journée.' ),
				),
				'badgeIcon'  => 'leaf',
				'badgeLabel' => 'Engagement RSE',
				'badgeTitle' => 'Zéro Plastique',
			),
		),
		array(
			'bricareau/tile-grid',
			array(
				'variant' => 'light',
				'title'   => "Nos solutions d'eau *corporatives*\npour vos locaux.",
				'intro'   => 'Des fontaines modernes aux systèmes centralisés pour tours de bureaux, nous offrons une technologie de purification avancée adaptée aux exigences des entreprises.',
				'tiles'   => array(
					array( 'label' => 'Eau fraîche & chaude', 'title' => "Fontaines d'eau\nmodernes", 'text' => 'Éliminez la logistique des bouteilles. Nos fontaines branchées au réseau offrent une eau filtrée en continu pour vos espaces collaboratifs.', 'image' => $img( '20230add-4ce5-4ae6-a6dc-1f9a2c3aeb7b.jpg', "Fontaines d'eau modernes" ), 'url' => '/fontaines-et-refroidisseurs-d-eau-modernes-pour-entreprises' ),
					array( 'label' => 'Haute capacité', 'title' => "Systèmes de filtration\ncentralisés", 'text' => 'Pour les tours de bureaux et grands complexes, nous installons des systèmes de filtration centralisés dimensionnés pour de grands volumes.', 'image' => $img( 'LZS8WSSP-PF.webp', 'Systèmes de filtration centralisés' ), 'url' => '/systemes-de-filtration-d-eau-centralises' ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant'        => 'icon',
				'background'     => 'white',
				'firstImageSide' => 'left',
				'label'          => 'Avantages Corporatifs',
				'labelStyle'     => 'pill',
				'title'          => "Pourquoi adopter nos solutions\n*pour vos bureaux ?*",
				'rows'           => array(
					array(
						'icon'    => 'shield-check',
						'color'   => 'navy',
						'title'   => "L'eau parfaite, tout simplement.",
						'bullets' => "Élimination de 99.9% des impuretés, du chlore et des métaux lourds.\nUne expérience de dégustation premium, idéale pour le café et le thé au bureau.",
						'image'   => $img( 'Pause-eau.jpg', "Pause eau au bureau" ),
					),
					array(
						'icon'    => 'leaf',
						'color'   => 'green',
						'title'   => 'Écologie et RSE.',
						'bullets' => "Supprimez totalement l'utilisation de bouteilles et de verres en plastique jetables.\nUne démarche concrète pour améliorer le bilan carbone de votre entreprise.",
						'image'   => $img( '2228.jpg', "Écologie et RSE - traitement d'eau entreprise" ),
					),
				),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'label'      => 'Ils nous font confiance',
				'labelStyle' => 'text',
				'title'      => "Le choix des\n*entreprises leaders.*",
				'count'      => 6,
				'offset'     => 6,
			),
		),
		array(
			'bricareau/expert-split',
			array(
				'title'      => "L'expertise au service du corporatif, *la performance dans chaque goutte d'eau.*",
				'text'       => "Garantissez le bien-être de vos collaborateurs et la longévité de vos infrastructures. Chez Bricareau, nous transformons chaque analyse de la qualité d'eau en un levier stratégique pour la qualité de vie au travail et l'excellence opérationnelle de votre organisation.",
				'ctaText'    => 'Demandez une consultation corporative',
				'ctaUrl'     => '/consultation',
				'image'      => $img( '4428cdd0-67df-4075-b0ba-d69247eb98dc.jpg', 'Expert Bricareau en entreprise' ),
				'imageSide'  => 'left',
				'badge'      => 'stat',
				'badgeValue' => '+25 ans',
				'badgeText'  => "d'expertise cumulée à votre service",
			),
		),
	),
);
