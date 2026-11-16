<?php
/**
 * Notre compagnie — src/pages/Pourquoi-choisir-bricareau.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'             => 'pourquoi-choisir-bricareau',
	'title'            => 'Pourquoi choisir Bricareau',
	'breadcrumb_label' => 'Notre compagnie',
	'seo_title'        => "Pourquoi Choisir Bricareau | L'Excellence en Traitement d'Eau",
	'menu_order'       => 10,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'fadeStop'    => '50',
				'label'       => 'La Référence Québécoise',
				'labelStyle'  => 'pill-soft',
				'title'       => "25 ans d'excellence,\n*votre eau est notre métier.*",
				'accentStyle' => 'green-italic',
				'text'        => "Forts de 25 années d'expertise dans le traitement de l'eau, nous concevons des systèmes de filtration d'eau répondant aux standards de qualité les plus exigeants. Notre savoir-faire technique assure à votre foyer ou votre entreprise une eau pure, saine et sécuritaire en tout temps.",
				'ctaText'     => 'Découvrir notre vision',
				'ctaUrl'      => '#notre-vision',
				'image'       => $img( '10341859.jpg', 'Eau Pure Bricareau' ),
			),
		),
		array(
			'bricareau/timeline',
			array(
				'anchor'     => 'notre-histoire',
				'label'      => 'Notre Histoire',
				'labelStyle' => 'pill-outline',
				'title'      => "Plus de 25 ans\n*d'engagement.*",
				'items'      => array(
					array( 'label' => 'Les Fondations', 'title' => "L'obsession de la qualité", 'text' => "Bricareau est né d'un constat simple : la qualité de l'eau municipale et de puits n'était pas à la hauteur des besoins en santé et en confort des familles. Nous avons commencé avec une mission claire : sourcer les meilleures technologies de filtration mondiales." ),
					array( 'label' => "L'Expansion", 'title' => 'Expertise Multi-Sectorielle', 'text' => "Face à la demande croissante, nous avons étendu notre expertise au secteur industriel et commercial, développant des solutions d'ingénierie sur-mesure capables de répondre aux réalités complexes de l'eau au Québec." ),
					array( 'label' => "Aujourd'hui", 'title' => 'La Référence Québécoise', 'text' => "Avec plus de 20 000 foyers et entreprises protégés, Bricareau est devenu l'incontournable du traitement de l'eau. Une équipe de maîtres techniciens dédiés et une réputation bâtie sur la confiance absolue de nos clients." ),
				),
			),
		),
		array(
			'bricareau/statement',
			array(
				'anchor'     => 'notre-vision',
				'theme'      => 'dark',
				'label'      => 'Notre Vision',
				'labelStyle' => 'pill-outline-green',
				'title'      => "Redéfinir le\n*standard de pureté.*",
				'text'       => "Nous croyons que chaque foyer et entreprise québécoise mérite un accès inconditionnel à une eau parfaite, alliant santé humaine et préservation écologique. L'eau n'est pas qu'une ressource, c'est le fondement de notre avenir.",
			),
		),
		array(
			'bricareau/statement',
			array(
				'anchor'      => 'notre-mission',
				'theme'       => 'white',
				'titleStyle'  => 'editorial',
				'label'       => 'Notre Mission',
				'labelStyle'  => 'pill-outline',
				'title'       => "Protéger la santé des **foyers** et optimiser la performance des **entreprises** en offrant des solutions d'eau d'une *pureté absolue*.",
				'accentStyle' => 'serif',
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'anchor'     => 'nos-valeurs',
				'variant'    => 'values',
				'background' => 'light',
				'label'      => 'Nos Valeurs Fondamentales',
				'labelStyle' => 'pill-outline-green',
				'rows'       => array(
					array(
						'title'   => "Utiliser de nouvelles\n*technologies au quotidien*",
						'color'   => 'green',
						'bullets' => implode(
							"\n",
							array(
								"Nous maximisons nos efforts en recherche et développement pour offrir des solutions de purification d'eau toujours plus performantes et durables.",
								"Nous jumelons plus de 25 ans d'expertise avec des méthodologies d'ingénierie de pointe pour garantir à nos clients une eau d'une pureté absolue.",
								"Nous nous engageons à sourcer les meilleures technologies de filtration et de purification d'eau mondiales pour vous offrir des procédés optimaux, sans jamais sacrifier la qualité de votre eau.",
							)
						),
						'image'   => $img( '2119.jpg', 'Technologies de pointe - expert en eau' ),
					),
					array(
						'title'   => "Être une entreprise\n*socialement responsable*",
						'color'   => 'navy',
						'bullets' => implode(
							"\n",
							array(
								"Nous faisons preuve d'une transparence totale et d'une honnêteté rigoureuse dans tous nos diagnostics hydriques.",
								"Nous attachons une importance vitale à l'environnement, en concevant des systèmes qui réduisent le gaspillage et éliminent la dépendance aux plastiques à usage unique.",
								'Nous plaçons la santé et le bien-être des familles et des entreprises au centre de toutes nos prises de décision.',
								"Nous établissons des normes d'éthique et de rendement extrêmement élevées, car nous considérons l'accès à une eau saine comme fondamental.",
							)
						),
						'image'   => $img( '2120.jpg', "Entreprise socialement responsable - traitement d'eau Québec" ),
					),
				),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'anchor'  => 'pourquoi-reference',
				'variant' => 'numbered',
				'title'   => 'Pourquoi nous sommes *la référence au Québec ?*',
				'cards'   => array(
					array( 'title' => 'Expertise technique avancée', 'text' => 'Nous procédons à une analyse physico-chimique rigoureuse de votre eau afin de concevoir un système de traitement entièrement sur mesure, garantissant une efficacité et une fiabilité de pointe.' ),
					array( 'title' => 'Installation de qualité supérieure', 'text' => "Nos techniciens spécialisés assurent une exécution impeccable de chaque projet. L'installation est conçue pour optimiser l'espace tout en respectant scrupuleusement les normes de l'industrie et l'intégrité de votre propriété." ),
					array( 'title' => 'Service client dédié', 'text' => "Nous nous engageons à offrir un suivi technique continu. Notre équipe assure un service après-vente rapide, une maintenance rigoureuse et vous fait bénéficier de garanties solides sur l'ensemble de nos équipements." ),
				),
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'overlay'     => 'dark',
				'titleWeight' => 'light',
				'title'       => "*L'Excellence*\nn'attend pas.",
				'text'    => "Passez à l'étape supérieure et ne faites plus aucun compromis sur la qualité de votre eau. Échangez avec nos spécialistes d'eau pour analyser vos besoins et entamer votre transition vers une eau filtrée, pure et saine.",
				'ctaText' => 'Contactez-nous',
				'ctaUrl'  => '/consultation',
				'image'   => $img( '2230.jpg', 'Excellence Bricareau' ),
			),
		),
	),
);
