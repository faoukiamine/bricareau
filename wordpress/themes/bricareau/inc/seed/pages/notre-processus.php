<?php
/**
 * Notre processus — src/pages/notre-processus.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'       => 'notre-processus',
	'title'      => 'Notre processus',
	'seo_title'  => 'Notre Méthodologie | Bricareau',
	'menu_order' => 11,
	'blocks'     => array(
		array(
			'bricareau/page-hero',
			array(
				'fadeStop' => '33',
				'title'    => "Notre savoir-faire d'expert\n*pour une eau absolument parfaite.*",
				'text'     => "Découvrez un processus rigoureux en quatre étapes. De l'analyse de la qualité de l'eau à l'entretien et suivi régulier, nous ne laissons aucune place au hasard pour garantir la perfection de votre eau.",
				'ctaText'  => 'Découvrir les étapes',
				'ctaUrl'   => '#les-etapes',
				'image'    => $img( '2241.jpg', "Notre Processus - systèmes d'eau sur mesure" ),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'anchor'     => 'les-etapes',
				'variant'    => 'numbered',
				'background' => 'light',
				'label'      => 'Notre Processus',
				'title'      => "La rigueur de\n*notre méthodologie.*",
				'intro'      => "Découvrez notre approche d'expert en **traitement de l'eau**. De l'**analyse de la qualité de l'eau** à l'installation d'**adoucisseurs d'eau** et de systèmes de **filtration par osmose inverse**, notre processus élimine rigoureusement le calcaire, le fer et les contaminants. Assurez à votre résidence, commerce ou industrie une **eau pure et adoucie** pour un confort absolu, une performance accrue et une protection optimale de vos installations.",
				'rows'       => array(
					array(
						'title'    => "Les analyses de la qualité de l'eau",
						'subtitle' => 'Le fondement de toute perfection.',
						'text'     => 'Nous réalisons une analyse exhaustive de votre eau. Nos protocoles de diagnostic identifient avec précision les contaminants, les profils minéral et microbiologique. Ces résultats précis nous permettent de concevoir une solution de traitement parfaitement adaptée à votre eau.',
						'bullets'  => "Profil minéral\nSpectrométrie des métaux\nProfil microbiologique\nAnalyse TDS",
						'image'    => $img( '2240.jpg', "Les analyses de la qualité de l'eau" ),
					),
					array(
						'title'    => 'Proposition de solutions adaptées',
						'subtitle' => 'La science au service du sur-mesure.',
						'text'     => 'Chaque goutte compte. Nos experts techniques conçoivent une architecture de filtration parfaitement calibrée pour votre profil hydrique unique, sélectionnant des technologies de pointe pour une durabilité maximale.',
						'bullets'  => "Conception sur mesure\nMatériaux de pointe\nÉcosystème intelligent\nPerformance absolue",
						'image'    => $img( 'water_system_blueprint_render_1778902045750.png', 'Proposition de solutions adaptées' ),
					),
					array(
						'title'    => 'Installation professionnelle',
						'subtitle' => "L'excellence dans chaque détail de l'installation.",
						'text'     => "Nos techniciens certifiés orchestrent l'installation avec une rigueur absolue. De l'intégration mécanique à la calibration électronique, chaque composant est testé pour garantir une performance sans faille.",
						'bullets'  => "Installation sans tracas\nCalibration des instruments\nParamétrage personnalisé\nEssais et mise en service",
						'gallery'  => array(
							$img( '2235.jpg', 'Installation professionnelle' ),
							$img( '2236.jpeg', 'Installation Bricareau' ),
							$img( '2240.jpeg', 'Installation Bricareau' ),
							$img( '2237.jpeg', 'Installation Bricareau' ),
							$img( '2239.jpeg', 'Installation Bricareau' ),
							$img( '2238.jpeg', 'Installation Bricareau' ),
						),
					),
					array(
						'title'    => 'Entretien et suivi régulier',
						'subtitle' => "Une tranquillité d'esprit inébranlable.",
						'text'     => "L'excellence s'entretient. Notre engagement s'étend bien au-delà de l'installation, avec un programme de maintenance proactive assurant que votre système opère à son apogée technologique, jour après jour.",
						'bullets'  => "Programme de maintenance\nAnalyses de contrôle\nRemplacement préventif\nAssistance prioritaire",
						'image'    => $img( 'cae3c0a4-5b4d-4b0e-8bc3-3550a714f7bb.jpg', 'Entretien et suivi régulier' ),
					),
				),
			),
		),
		array(
			'bricareau/statement',
			array(
				'anchor'   => 'nos-engagements',
				'theme'    => 'dark',
				'textSize' => 'medium',
				'label'  => "L'Exigence Bricareau",
				'title'  => "Redéfinir le\n*standard de qualité.*",
				'text'   => "Des promesses claires qui redéfinissent les standards de l'industrie du traitement de l'eau au Québec.",
				'items'  => array(
					array( 'icon' => 'clock', 'title' => 'Réactivité absolue', 'text' => 'Intervention sous 48h. Votre confort ne peut attendre, nos équipes sont mobilisées pour agir avec célérité.' ),
					array( 'icon' => 'award', 'title' => 'Garantie intégrale', 'text' => "Une couverture complète sur nos systèmes. Zéro compromis sur votre tranquillité d'esprit à long terme." ),
					array( 'icon' => 'crown', 'title' => 'Composants premium', 'text' => 'Nous sélectionnons rigoureusement des matériaux nobles pour garantir une durabilité inégalée.' ),
					array( 'icon' => 'leaf', 'title' => 'Éco-responsabilité', 'text' => "Nos solutions sont minutieusement calibrées pour minimiser le gaspillage d'eau et d'énergie au quotidien." ),
				),
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'overlay' => 'light',
				'title'   => "Passez à l'ultime\n*standard de pureté.*",
				'text'    => "Sollicitez nos experts techniques pour un diagnostic approfondi et personnalisé de votre qualité d'eau. L'expertise absolue au service de votre sérénité.",
				'ctaText' => "Planifiez une analyse d'eau",
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( '2148858959.jpg', 'Contactez Bricareau' ),
			),
		),
	),
);
