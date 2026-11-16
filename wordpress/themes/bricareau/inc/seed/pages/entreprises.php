<?php
/**
 * Businesses hub — src/pages/Entreprises.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'entreprises',
	'title'           => 'Entreprises',
	'seo_title'       => 'Solutions d\'Eau pour Entreprises et Bureaux au Québec | Bricareau',
	'seo_description' => 'Optimisez le bien-être de vos employés avec nos solutions d\'hydratation premium au Québec. Refroidisseurs sans bouteille, eau pétillante et machines à glaçons pour bureaux.',
	'menu_order'      => 48,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'split',
				'label'       => 'Solutions Hydratation Business',
				'title'       => "L'excellence de l'eau pour vos collaborateurs.",
				'text'        => "Transformez votre espace de travail avec nos systèmes d'hydratation haut de gamme. Pureté, design et durabilité pour une culture d'entreprise saine.",
				'ctaText'     => 'Découvrir nos solutions',
				'ctaUrl'      => '#solutions',
				'phoneButton' => true,
				'image'       => $img( 'Hero-Entreprise.jpg', 'Solutions Hydratation Business Bricareau' ),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'variant' => 'icon-centered',
				'cards'   => array(
					array( 'icon' => 'heart-pulse', 'title' => 'Bien-être des Employés', 'text' => 'Une hydratation saine augmente la concentration et la productivité de vos équipes au quotidien.' ),
					array( 'icon' => 'leaf', 'title' => 'Engagement Écologique', 'text' => 'Éliminez des milliers de bouteilles plastique à usage unique chaque année pour votre entreprise.' ),
					array( 'icon' => 'shield-check', 'title' => 'Service 5 Étoiles', 'text' => 'Maintenance préventive, changements de filtres proactifs et support technique prioritaire.' ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'   => 'solutions',
				'variant'  => 'simple',
				'title'    => "_Variété & Qualité_\n*Le Choix des Professionnels.*",
				'intro'    => "Des solutions adaptées à chaque recoin de votre entreprise : de l'accueil vip à la salle de repos des employés.",
				'linkText' => 'En savoir plus',
				'products' => array(
					array( 'name' => 'Refroidisseurs Haute Performance', 'image' => $img( '774f43e9-1fd4-49ec-86f5-7c8e51bcbd81-removebg-preview.png', 'Refroidisseurs Haute Performance' ), 'url' => '/contact', 'text' => 'Eau froide, tempérée et chaude à volonté. Sans bouteille, reliés directement à votre réseau.' ),
					array( 'name' => 'Eau Pétillante & Saveurs', 'image' => $img( 'C-Tap-Under-Counter-1-1-1.webp', 'Eau Pétillante & Saveurs' ), 'url' => '/contact', 'text' => "Ajoutez une touche de luxe à votre bureau avec nos distributeurs d'eau pétillante filtrée." ),
					array( 'name' => 'Machines à Glaçons', 'image' => $img( 'Manitowoc-NEO-120V-42-Air-Cooled-Countertop-Chewing-Ice-Nugget-Ice-Maker-and-20-lbs_-Bin-with-Lever-Dispensing-CNP0202A-161L_1100x971.jpg', 'Machines à Glaçons' ), 'url' => '/contact', 'text' => 'Production de glace pure et abondante pour vos cafétérias et événements corporatifs.' ),
					array( 'name' => 'Solutions Café Premium', 'image' => $img( 'vki-eccellenza-touch-keurigcollection-matrix.full.webp', 'Solutions Café Premium' ), 'url' => '/contact', 'text' => 'Une eau parfaitement filtrée pour sublimer les arômes de vos cafés préférés.' ),
				),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'title'         => "Plus qu'une machine\n*Une Expérience d'Accueil.*",
				'body'          => "Chaque détail compte pour l'image de votre marque. Nos fontaines au design moderne et épuré s'intègrent parfaitement dans vos salles d'attente, halls d'entrée et bureaux de direction.",
				'bullets'       => "Installation soignée et discrète\nMaintenance préventive quadrimestrielle\nTechnologie sans contact (options capteurs)\nGlace & café en complément",
				'ctaText'       => 'Essayer nos fontaines gratuitement',
				'ctaUrl'        => '/contact-entreprises',
				'image'         => $img( '20230add-4ce5-4ae6-a6dc-1f9a2c3aeb7b.jpg', "Expérience d'hydratation urbaine Bricareau" ),
				'imagePosition' => 'left',
				'cardTitle'     => '10k+',
				'cardText'      => 'Entreprises satisfaites au Québec',
			),
		),
		array(
			'bricareau/cta-band',
			array(
				'title'   => 'Zéro Plastique. *Impact Maximal.*',
				'text'    => 'Un seul refroidisseur Bricareau élimine en moyenne 2 500 bouteilles de plastique par an. Rejoignez le mouvement vers un bureau sans déchets.',
				'ctaText' => 'Calculer votre impact',
				'ctaUrl'  => '/faq',
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'anchor'    => 'petillante',
				'title'     => "L'Effervescence Chic\n*Le luxe au quotidien.*",
				'body'      => 'Remplacez les boissons sucrées par une eau pétillante fraîche, micro-filtrée et ajustable selon les goûts. Une solution élégante pour vos salles de conférences et bureaux de direction.',
				'bullets'   => "Système sous-comptoir ultra discret et épuré\nEau plate, fraîche et pétillante en un seul geste\nOption d'ajout de saveurs naturelles\nDesign minimaliste s'intégrant parfaitement au décor",
				'ctaText'   => 'Personnaliser votre fontaine',
				'ctaUrl'    => '/contact',
				'image'     => $img( 'Gallery_Extra_I-Tap_Images_4-1.png', 'Collaboration au bureau' ),
				'cardIcon'  => 'sparkles',
				'cardText'  => 'Customisation totale du niveau de bulles.',
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'anchor'        => 'glacons',
				'title'         => "La Glace Pure Pro\n*À la demande au bureau.*",
				'body'          => 'Offrez à vos équipes une glace croustillante, cristalline et sans odeur. Idéale pour les réceptions d\'affaires, les cafétérias ou simplement pour rafraîchir une journée de travail dynamique.',
				'bullets'       => "Technologie Nugget : une glace plus tendre, facile à croquer et qui préserve parfaitement les arômes de vos boissons préférées.\nHygiène Totale : circuit d'eaux micro-filtrées garantissant une glace d'une pureté absolue, 100% sécuritaire pour vos employés.",
				'ctaText'       => 'Découvrir les modèles',
				'ctaUrl'        => '/contact',
				'image'         => $img( 'Manitowoc-NEO-120V-42-Air-Cooled-Countertop-Chewing-Ice-Nugget-Ice-Maker-and-20-lbs_-Bin-with-Lever-Dispensing-CNP0202A-161L_1100x971.jpg', "Machine à glaçons Manitowoc - adoucisseur d'eau pour restaurant" ),
				'imagePosition' => 'left',
				'cardIcon'      => 'snowflake',
				'cardTitle'     => 'Production 24/7',
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array( 'title' => "Qualité inégalée.\n*Service inoubliable.*" ),
		),
		array(
			'bricareau/navy-cta',
			array(
				'title'     => "Modernisez votre bureau\n*Réinventez la pause eau.*",
				'text'      => "Nos consultants sont spécialisés dans l'aménagement d'espaces d'hydratation haute performance. Profitez d'un essai gratuit de 7 jours pour votre équipe.",
				'image'     => $img( '20230add-4ce5-4ae6-a6dc-1f9a2c3aeb7b.jpg', 'Hydratation premium au bureau' ),
				'phoneText' => 'Parler à un conseiller',
				'ctaText'   => 'Demander un essai gratuit',
				'ctaUrl'    => '/contact',
			),
		),
	),
);
