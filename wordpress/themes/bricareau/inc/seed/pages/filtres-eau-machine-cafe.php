<?php
/**
 * Coffee machine filters — src/pages/FiltreEauMachineCafe.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'filtres-eau-machine-cafe',
	'title'           => 'Filtres pour machines à café',
	'seo_title'       => 'Filtres d\'eau pour Machines à Café | Bricareau',
	'seo_description' => 'Protégez vos équipements de haute précision et révélez le véritable profil aromatique de vos grains avec nos systèmes de filtration.',
	'menu_order'      => 44,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "*L'eau pure,* l'âme de votre café.",
				'text'        => 'Protégez vos équipements de haute précision et révélez le véritable profil aromatique de vos grains avec nos systèmes de filtration.',
				'ctaText'     => 'Explorez nos filtres',
				'ctaUrl'      => '#explore-filters',
				'phoneButton' => true,
				'image'       => $img( '4319.jpg', "Solutions de Filtration Café - traitement d'eau Québec" ),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'   => 'explore-filters',
				'variant'  => 'simple',
				'title'    => 'Le café est 98% eau, choisissez le *bon filtre.*',
				'intro'    => 'Nous proposons une gamme équilibrée de filtres adaptés à votre eau et à vos besoins de performance.',
				'products' => array(
					array( 'name' => 'PURITY C Quell ST', 'image' => $img( 'PURITY-C-Quell-ST-Advanced.webp', 'PURITY C Quell ST' ), 'text' => "Le filtre classique pour espresso, idéal pour les eaux à dureté carbonatée élevée. Équilibre parfait des minéraux." ),
					array( 'name' => 'PURITY C Steam', 'image' => $img( 'PURITY-C-Steam-Advanced.webp', 'PURITY C Steam' ), 'text' => "Conçu pour la minéralisation et l'élimination des odeurs. Idéal pour les cafés de spécialité." ),
					array( 'name' => 'PURITY HCHF', 'image' => $img( 'PURITY-HCHF-Design-Center.webp', 'PURITY HCHF' ), 'text' => 'Filtre à charbon actif pour une eau sans chlore. Recommandé pour les machines à café automatiques.' ),
					array( 'name' => 'PURITY C1100 XtraSafe', 'image' => $img( 'PURITY-C1100-XtraSafe.webp', 'PURITY C1100 XtraSafe' ), 'text' => 'Haute capacité pour les grands établissements. Protection maximale contre le tartre pour un débit continu.' ),
					array( 'name' => 'PURITY C1000 AC', 'image' => $img( 'PURITY-C1000-AC.webp', 'PURITY C1000 AC' ), 'text' => 'Spécialement conçu pour les fours vapeur et les machines à haute demande. Évite les dépôts de calcaire tenaces.' ),
					array( 'name' => 'PURITY C-Finest', 'image' => $img( 'PURITY-C-Finest.png.webp', 'PURITY C-Finest' ), 'text' => 'Spécialement conçu pour les fours vapeur et les machines à haute demande. Évite les dépôts de calcaire tenaces.' ),
				),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'title'   => 'Le bon filtre fait toute la *différence*',
				'body'    => 'Que vous dirigiez un petit café ou un grand service de restauration à haut volume, nos filtres garantissent la constance de chaque tasse tout en prolongeant la durée de vie de vos machines.',
				'ctaText' => 'DEMANDEZ UNE SOUMISSION',
				'ctaUrl'  => '/contact-entreprises',
				'image'   => $img( '14331.jpg', "Le bon filtre fait toute la différence - analyse d'eau professionnelle" ),
			),
		),
	),
);
