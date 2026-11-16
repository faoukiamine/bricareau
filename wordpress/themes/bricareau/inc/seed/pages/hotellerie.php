<?php
/**
 * Hôtellerie & Restauration hub — src/pages/HotellerieRestauration.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'             => 'solutions-de-traitement-et-filtration-d-eau-pour-hotels-et-restaurants',
	'title'            => 'Hôtellerie & Restauration',
	'breadcrumb_label' => 'Hôtellerie et restauration',
	'seo_title'        => 'Hôtellerie & Restauration | Bricareau',
	'menu_order'       => 22,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'split',
				'breadcrumbs' => false,
				'title'       => "L'excellence *pure,*\nà la table des plus grands.",
				'text'        => "Sublimez l'expérience de vos convives et optimisez vos opérations avec des solutions d'eau intelligentes conçues pour l'exigence du milieu HORECA.",
				'ctaText'     => 'Planifiez une consultation gratuite',
				'ctaUrl'      => '/consultation',
				'image'       => $img( '2151949236.jpg', 'Horeca Excellence' ),
			),
		),
		array(
			'bricareau/intro-split',
			array(
				'label'      => "L'essence du service",
				'labelStyle' => 'line',
				'title'      => "L'art de l'hospitalité\nne laisse rien *au hasard.*",
				'text'       => "Dans l'univers de la haute gastronomie et de l'hôtellerie de prestige, chaque détail définit l'expérience. La qualité de votre eau n'est pas une simple commodité : c'est la signature silencieuse de votre raffinement et le protecteur de votre excellence.",
				'image'      => $img( '2121.png', "Service d'excellence - système d'eau hôtel" ),
				'imageStyle' => 'offset',
			),
		),
		array(
			'bricareau/tile-grid',
			array(
				'variant'   => 'dark',
				'textStyle' => 'plain',
				'align'     => 'left',
				'title'   => "Nos solutions de filtration d'eau\npour les professionnels de *l'hôtellerie et la restauration.*",
				'intro'   => "Découvrez nos systèmes avancés de **traitement et d'adoucissement d'eau** conçus sur mesure pour le secteur **HORECA (Hôtellerie, Restauration, Cafés)**. De la protection anticalcaire de vos machines à espresso professionnelles jusqu'à la filtration gastronomique pour vos cuisines étoilées, Bricareau garantit une qualité d'eau irréprochable. Préservez la durée de vie de votre équipement CHR, sublimez les arômes de vos préparations culinaires et offrez à votre clientèle une eau purifiée au service exclusif de l'excellence.",
				'tiles'   => array(
					array( 'title' => "Adoucissement\nd'eau", 'label' => 'Protection absolue', 'text' => 'Protégez vos investissements onéreux et garantissez une verrerie étincelante, sans la moindre trace.', 'image' => $img( '15952_50060.jpg', "Adoucissement d'eau" ), 'url' => '/adoucisseurs-eau-commerciaux', 'size' => 'tall', 'fit' => 'cover' ),
					array( 'title' => "Filtration\nd'eau", 'label' => 'Excellence gustative', 'text' => 'Une eau cristalline, sans goût ni odeur, pour sublimer la saveur authentique de vos créations culinaires et surprendre vos convives.', 'image' => $img( '1494014028920430592_8e1000580b747b8dac3a78e0855f0394-removebg-preview.png', "Filtration d'eau commerciale" ), 'url' => '/filtration-hotels-restaurants', 'size' => 'wide', 'fit' => 'contain' ),
					array( 'title' => "Espace\nBrasserie", 'label' => 'Service prestige', 'text' => "L'élégance d'une eau filtrée sur mesure, plate ou finement pétillante. Une expérience de service fluide, raffinée et totalement libérée de la contrainte des bouteilles.", 'image' => $img( '2122.jpg', 'Espace Brasserie' ), 'url' => '/solutions-brasseries', 'size' => 'normal', 'fit' => 'cover' ),
					array( 'title' => "L'Art\ndu Café", 'label' => 'Précision barista', 'text' => "L'eau secrète des baristas pour révéler les arômes les plus subtils de vos grains.", 'image' => $img( 'PURITY-C-Quell-ST-Advanced.webp', 'Filtre pour machine à café' ), 'url' => '/filtres-eau-machine-cafe', 'size' => 'normal', 'fit' => 'contain' ),
				),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'variant'    => 'icon-columns',
				'align'      => 'left',
				'background' => 'glow',
				'label'      => 'Notre signature',
				'labelStyle' => 'line',
				'title'      => "L'Exigence\nsans *compromis.*",
				'accentStyle' => 'green',
				'intro'      => "Nous maîtrisons les défis des très grands services : pics de fréquentation, normes d'hygiène rigoureuses et tolérance zéro pour les pannes.",
				'cards'      => array(
					array( 'icon' => 'shield-check', 'title' => 'Normes HACCP', 'text' => 'Nous assurons une conformité absolue aux exigences sanitaires les plus strictes. Chaque système est pensé pour éliminer tout risque bactériologique, garantissant une hygiène irréprochable et sécurisant vos opérations quotidiennes.' ),
					array( 'icon' => 'timer', 'title' => 'Performance Continue', 'text' => "Nos équipements sont ingénierés pour absorber les pics de fréquentation les plus intenses. Ils maintiennent un débit constant et une pression optimale, vous assurant un service fluide et ininterrompu, même aux heures d'affluence." ),
					array( 'icon' => 'hand-platter', 'title' => 'Gants Blancs', 'text' => "Bénéficiez d'un accompagnement sur mesure avec notre service de maintenance proactive. Nos techniciens interviennent en toute discrétion avant la moindre anomalie, vous garantissant une disponibilité totale de vos installations." ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant'        => 'icon',
				'background'     => 'white',
				'firstImageSide' => 'left',
				'label'          => 'Investissement stratégique',
				'labelStyle'     => 'line',
				'title'          => "Les 3 piliers\nde la *rentabilité.*",
				'intro'          => "L'eau pure n'est pas qu'une question d'hygiène. L'impact de nos systèmes se fait sentir à tous les niveaux de votre établissement, de la réduction des coûts jusqu'à l'augmentation de votre chiffre d'affaires.",
				'rows'           => array(
					array(
						'icon'    => 'wallet',
						'color'   => 'green',
						'title'   => 'Maîtrise absolue des coûts.',
						'bullets' => implode(
							"\n",
							array(
								"**Longévité de l'équipement :** Protection contre l'entartrage et la corrosion (fours, machines à espresso, lave-vaisselle). Fini les remplacements prématurés.",
								"**Économies de produits :** Réduction de 30% à 50% de l'utilisation de détergents grâce à une eau douce qui mousse mieux.",
								"**Efficacité énergétique :** Vos machines fonctionnent sans la barrière thermique du calcaire, réduisant vos factures d'énergie.",
								'**Efficacité opérationnelle :** Moins de traces sur la verrerie équivaut à moins de temps passé à polir et relaver.',
							)
						),
						'image'   => $img( '2226.jpeg', "Salle technique - traitement d'eau entreprise" ),
					),
					array(
						'icon'    => 'utensils',
						'color'   => 'navy',
						'title'   => "L'excellence au service des revenus.",
						'bullets' => implode(
							"\n",
							array(
								'**Révélation des saveurs :** Une eau neutre sans chlore qui sublime vos thés, cafés et créations culinaires.',
								'**Esthétique parfaite :** Des glaçons cristallins et une verrerie étincelante pour une première impression irréprochable.',
								"**Nouvelles marges :** Transformez l'eau en source de revenus avec une offre d'eau filtrée embouteillée sur place à votre marque.",
							)
						),
						'image'   => $img( '167206.jpg', "Café parfait - adoucisseur d'eau pour restaurant" ),
					),
					array(
						'icon'    => 'leaf',
						'color'   => 'green',
						'title'   => "Une réputation bâtie sur l'engagement.",
						'bullets' => implode(
							"\n",
							array(
								'**Engagement écologique :** Élimination de la dépendance aux bouteilles en plastique à usage unique grâce aux systèmes sur place.',
								'**Réputation :** La satisfaction globale (goût, propreté, écologie) génère de meilleurs avis en ligne et fidélise votre clientèle.',
							)
						),
						'image'   => $img( '132626.jpg', "Verrerie de luxe - traitement d'eau entreprise" ),
					),
				),
			),
		),
		array(
			'bricareau/expert-split',
			array(
				'title'      => "Une consultation gratuite pour *optimiser votre rentabilité.*",
				'text'       => "Découvrez comment nos systèmes de filtration d'eau peuvent réduire vos coûts opérationnels, éliminer les plastiques à usage unique et prolonger la durée de vie de vos équipements et réduire leur entretien.",
				'ctaText'    => 'Rentabiliser mon business',
				'ctaUrl'     => '/consultation',
				'image'      => $img( '7860.jpg', 'Rentabilité HORECA' ),
				'imageSide'  => 'right',
				'badge'      => 'stat',
				'badgeValue' => '+25 ans',
				'badgeText'  => "d'expertise cumulée à votre service",
			),
		),
	),
);
