<?php
/**
 * Systèmes de désinfection UV — src/pages/Systemes-de-desinfection-UV.tsx.
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

$vh200   = $img( 'VH200-F10-265x300.jpg', 'Système UV VH200-F10' );
$vh410   = $img( 'VH410-F20-200x300.jpg', 'Système UV VH410-F20' );
$arros   = $img( '500x500_V-Arros-15-IHS-10_straight-1-300x300.jpg', 'Système UV Arros 15-IHS10' );
$sterile = $img( '1254.webp', 'Eau stérile sous rayon UV' );
$storm   = $img( 'pourquoi-est-ce-que-les-orages-produisent-des-eclairs-et-du-tonnerree28089-1-1690x1200.jpg', 'Orage' );

$faq = array(
	array( "Qu'est-ce qu'un système de désinfection UV ?", "C'est un dispositif qui utilise la lumière ultraviolette (UV-C) pour neutraliser les micro-organismes nocifs dans l'eau. En pénétrant l'ADN des bactéries et virus, les rayons UV les empêchent de se reproduire et de causer des maladies." ),
	array( 'Contre quels types de contaminants les UV sont-ils efficaces ?', 'Les systèmes UV éliminent 99,99 % des micro-organismes, y compris les bactéries comme E. coli, les virus, et les parasites résistants au chlore comme Giardia et Cryptosporidium.' ),
	array( "L'eau de puits nécessite-t-elle toujours un système UV ?", "Les puits sont vulnérables aux infiltrations de surface après de fortes pluies ou la fonte des neiges. Un système UV offre une barrière de sécurité permanente contre les variations soudaines de la qualité microbiologique de votre eau." ),
	array( 'Quels sont les avantages des UV par rapport au chlore ?', "Les UV ne nécessitent aucun produit chimique, ne changent pas le goût ou l'odeur de l'eau, et ne créent pas de sous-produits toxiques. C'est la méthode de désinfection la plus écologique et la plus saine." ),
	array( "Pourquoi ai-je besoin d'un système UV si j'ai un adoucisseur ?", "Un adoucisseur élimine les minéraux (calcaire), mais n'élimine pas les bactéries ou les virus. Le système UV est la protection finale qui assure que l'eau que vous buvez ne contient aucun micro-organisme vivant." ),
	array( 'À quelle fréquence faut-il changer la lampe UV ?', "La lampe UV doit être remplacée tous les 12 mois (environ 9 000 heures). Même si elle s'allume encore, son intensité germicide diminue drastiquement après un an et ne garantit plus la désinfection." ),
	array( "Qu'est-ce que le fourreau de quartz et comment l'entretenir ?", "Le fourreau de quartz est le tube transparent qui protège la lampe de l'eau. Il doit être nettoyé régulièrement pour rester limpide. S'il est entartré ou opaque (à cause du calcaire), les rayons UV ne peuvent plus traverser pour désinfecter l'eau." ),
	array( "Une filtration préalable est-elle nécessaire avant l'UV ?", "Oui, il est crucial d'installer un filtre à sédiments de 5 microns en amont. Les particules en suspension peuvent créer des zones d'ombre où les bactéries se « cachent » du rayonnement UV." ),
	array( 'Le système UV fonctionne-t-il lors d\'une panne de courant ?', "Non, la lampe s'éteint sans électricité. En cas de panne, il ne faut pas consommer l'eau ou alors il faut la faire bouillir. Nos systèmes sont souvent équipés d'alarmes pour avertir de l'arrêt de la lampe." ),
	array( "L'UV consomme-t-il beaucoup d'électricité ?", "Non, un système résidentiel standard consomme à peu près autant d'énergie qu'une ampoule de 40 à 60 watts. C'est une solution très économique pour une protection 24h/24." ),
	array( "Peut-on installer un système UV sur l'entrée d'eau de la ville ?", "Bien que l'eau municipale soit traitée, de vieilles infrastructures ou des bris d'aqueduc peuvent introduire des bactéries. Un système UV domestique sert d'assurance supplémentaire pour votre tranquillité d'esprit." ),
	array( 'Comment savoir si mon système UV fonctionne correctement ?', 'Nos contrôleurs intelligents affichent le nombre de jours restants avant le changement de lampe et émettent une alarme sonore et visuelle en cas de défaillance de la lampe ou du système.' ),
	array( "La chaleur de la lampe affecte-t-elle l'eau ?", "Si l'eau ne circule pas pendant plusieurs heures, l'eau à l'intérieur de la chambre d'acier inoxydable peut devenir tiède. Il suffit de laisser couler l'eau quelques secondes pour retrouver une eau fraîche." ),
	array( 'Quelle est la garantie sur les systèmes UV Bricareau ?', 'Nos systèmes sont couverts par une garantie robuste sur la chambre de traitement en acier inoxydable (souvent 10 ans) et sur les composantes électriques et électroniques.' ),
	array( "Dois-je faire tester mon eau après l'installation ?", 'Oui, nous recommandons toujours un test bactériologique professionnel après l\'installation et une désinfection initiale de la tuyauterie pour confirmer que tout le réseau domestique est sain.' ),
);

return array(
	'slug'             => 'systemes-de-desinfection-uv',
	'title'            => 'Systèmes de désinfection UV',
	'breadcrumb_label' => 'Systèmes de désinfection UV',
	'seo_title'        => "Systèmes de Désinfection UV au Québec | Stérilisateur d'Eau | Bricareau",
	'seo_description' => "Éliminez 99,99% des bactéries et virus de votre eau de puits au Québec. Nos systèmes de désinfection UV certifiés offrent une eau 100% sécuritaire sans produits chimiques.",
	'menu_order'       => 34,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "Systèmes de désinfection UV,\n*zéro produit chimique, 100% de protection.*",
				'text'        => 'Éliminez 99,99% des bactéries, virus et kystes de votre eau de puits ou municipale sans aucun additif chimique. Assurez une pureté microbiologique totale pour la sécurité de votre famille à chaque robinet.',
				'ctaText'     => 'Planifiez une consultation gratuite',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( 'african-girl-stands-kitchen-drinks-water.jpg', "Jeune fille buvant de l'eau dans la cuisine" ),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'variant'         => 'swiss',
				'align'           => 'left',
				'background'      => 'white',
				'backgroundImage' => $sterile,
				'title'           => "_Pourquoi la_\nDésinfection UV ?",
				'intro'           => "Une ingénierie de précision paramétrée pour éradiquer 99,99% des micro-organismes sans aucun additif chimique.",
				'cards'           => array(
					array( 'icon' => 'leaf', 'title' => '100% Naturel', 'text' => "Purification physique sans additifs chimiques. La minéralité de l'eau est intégralement préservée." ),
					array( 'icon' => 'zap', 'title' => 'Action Instantanée', 'text' => 'Éradication immédiate des pathogènes lors du passage à travers le sas de rayonnement UV-C.' ),
					array( 'icon' => 'award', 'title' => 'Qualité Clinique', 'text' => "Efficacité prouvée en laboratoire : neutralisation totale de l'ADN des micro-organismes." ),
					array( 'icon' => 'shield', 'title' => 'Tolérance Zéro', 'text' => 'Barrière infranchissable certifiée contre les bactéries, virus et kystes parasitoïdes exclus.' ),
					array( 'icon' => 'cup-soda', 'title' => 'Goût Inaltéré', 'text' => "Sans composés chlorés, l'eau conserve son intégrité gustative et sa fraîcheur pure." ),
					array( 'icon' => 'shield-check', 'title' => 'Zéro Particule Nocive', 'text' => "Aucun stockage, aucune manipulation de substances toxiques n'est requise. Sécurité intégrale." ),
					array( 'icon' => 'activity', 'title' => 'Haut Rendement', 'text' => "Fonctionnement passif 24h/24 dont la consommation énergétique équivaut à celle d'une simple ampoule LED." ),
					array( 'icon' => 'wrench', 'title' => 'Maintenance Réduite', 'text' => "Cycle d'entretien optimisé : remplacement unique de la lampe ultraviolette une fois par annuité." ),
				),
			),
		),
		array(
			'bricareau/dark-feature',
			array(
				'title'     => "Éliminez l'invisible :\n*Protection contre 99,99%.*",
				'text'      => 'Votre eau peut sembler cristalline tout en abritant des micro-organismes nocifs. Nos rayons UV-C ciblent le cœur des contaminants pour les rendre inoffensifs en une fraction de seconde, sans produits chimiques.',
				'chips'     => "E. Coli | 99.99%\nGiardia | 99.99%\nSalmonelle | 99.99%\nLégionelle | 99.99%\nHépatite A | 99.99%\nCryptosporidium | 99.99%",
				'ctaText'   => 'Évaluer la sécurité de mon eau',
				'ctaUrl'    => '/consultation',
				'image'     => $storm,
				'cardTitle' => 'Barrière active',
				'cardText'  => '« Une puissance de rayonnement UV-C certifiée pour garantir une eau sécuritaire à chaque litre consommé, protégeant votre famille des menaces invisibles. »',
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'variant'       => 'diagnostic',
				'label'         => 'Diagnostic de sécurité',
				'title'         => "Quelles *menaces invisibles*\n*s'infiltrent* dans votre eau ?",
				'metaLabel'     => 'Risque :',
				'solutionLabel' => 'Solution Recommandée',
				'alertBadge'    => 'Alerte Sanitaire',
				'cards'         => array(
					array( 'title' => 'Test Coliformes Positif', 'meta' => 'Infiltration de bactéries', 'solution' => 'Stérilisateur UV Select', 'color' => 'red', 'image' => $img( 'Legionella-Monitoring.webp', 'Analyse microbiologique' ), 'text' => "Un test positif révèle une contamination bactériologique. L'éradication immédiate par UV est essentielle pour prévenir les risques d'infections sévères pour votre famille." ),
					array( 'title' => 'Virus Entériques', 'meta' => 'Contamination des nappes', 'solution' => 'UV Haute-Performance', 'color' => 'red', 'image' => $img( 'virus entérique.jpg', 'Virus entériques' ), 'text' => "Ces pathogènes microscopiques traversent souvent les filtres standards. Seule une dose précise de lumière UV-C peut détruire leur ADN de façon permanente." ),
					array( 'title' => 'Kystes & Parasites', 'meta' => 'Giardia & Cryptosporidium', 'solution' => 'Filtration 1 Micron + UV', 'color' => 'red', 'image' => $sterile, 'text' => 'Extrêmement résistants au chlore municipal, ces parasites provoquent des maladies digestives. Nos systèmes UV les neutralisent de façon naturelle.' ),
					array( 'title' => 'Post-Orage / Fontes', 'meta' => 'Ruissellement de surface', 'solution' => 'Système UV-IHS', 'color' => 'red', 'image' => $storm, 'text' => 'Les fortes pluies entraînent souvent des polluants vers les nappes phréatiques. Une protection UV active garantit une eau sûre face à toutes les intempéries.' ),
					array( 'title' => 'Puits de Surface', 'meta' => 'Forte vulnérabilité externe', 'solution' => 'Série VH Bricareau', 'color' => 'red', 'image' => $img( 'puits de surface.jpg', 'Puits de surface' ), 'text' => 'Peu profonds, ces puits sont directement exposés aux contaminants extérieurs. La désinfection UV agit comme un bouclier infranchissable pour votre foyer.' ),
					array( 'title' => "Avis d'Ébullition", 'meta' => 'Prévention proactive', 'solution' => 'Protection 24/7 Bricareau', 'color' => 'red', 'image' => $img( 'Avis_debullition.png', "Avis d'ébullition" ), 'text' => 'Ne dépendez plus des alertes municipales tardives. Avec un système UV Bricareau, vous bénéficiez d\'une eau pure 24h/24, sans faire bouillir une seule goutte.' ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'      => 'systemes-uv',
				'variant'     => 'simple',
				'headerAlign' => 'left',
				'headerBar'   => true,
				'title'       => "_Nos systèmes de_\ndésinfection UV",
				'intro'       => "La technologie UV est le choix idéal pour les consommateurs qui cherchent à se protéger contre les contaminants microbiologiques, notamment les bactéries (E.coli, coliformes fécaux, etc.), les virus et les protozoaires (cryptosporidium, giardia, etc.) qui peuvent être résistants au chlore. Contrairement aux traitements chimiques, les UV ne modifient pas le goût, l’odeur ou la composition physico-chimique de l’eau. Nos dispositifs UV mis en place sur le point d’entrée (POE) sont installés avant que l’eau ne soit distribuée dans les foyers, au niveau de la conduite d’alimentation principale, avant qu’elle ne circule dans l’ensemble du réseau domestique.",
				'products'    => array(
					array( 'name' => 'VH200-F10', 'image' => $vh200, 'url' => '/contact', 'text' => "Préfiltration UV intégrée pour toute la maison\nIdéal pour : bactéries, turbidité/opacité.\nDébit : 9 gpm." ),
					array( 'name' => 'VH410-F20', 'image' => $vh410, 'url' => '/contact', 'text' => "Préfiltration UV intégrée pour toute la maison\nIdéal pour : bactéries, turbidité/eau trouble.\nDébit : 18 gpm." ),
					array( 'name' => 'Arros 15-IHS10', 'image' => $arros, 'url' => '/contact', 'text' => "Système de traitement d'eau UV pour toute la maison\nIdéal pour : bactéries, turbidité/opacité.\nDébit : 15 gpm." ),
				),
			),
		),
		array(
			'bricareau/image-banner',
			array(
				'overlay' => 'soft',
				'eyebrow' => 'Une protection microbiologique sans faille',
				'title'   => 'La puissance de la lumière UV pour une eau parfaitement saine',
				'text'    => "Adoptez la tranquillité d'esprit absolue avec nos systèmes de désinfection par rayons ultraviolets (UV). Conçus pour éliminer efficacement les bactéries, virus et autres micro-organismes nocifs, nos systèmes garantissent une eau saine pour toute votre famille, sans altérer le goût ni la minéralisation naturelle.",
				'image'   => $img( 'UV system installation to kill bacteria.png', "Installation experte d'un système de désinfection UV Bricareau" ),
			),
		),
		array(
			'bricareau/comparison-table',
			array(
				'title'            => "_Comparez nos systèmes_\nde stérilisation UV",
				'firstColumnLabel' => 'Modèle',
				'columns'          => array(
					array( 'name' => 'VH200-F10', 'image' => $vh200 ),
					array( 'name' => 'VH410-F20', 'image' => $vh410, 'badge' => 'Choix des Familles', 'color' => 'blue' ),
					array( 'name' => 'Arros 15-IHS10', 'image' => $arros, 'badge' => 'Nouveau', 'color' => 'emerald' ),
				),
				'rows'             => array(
					array( 'label' => 'Élimination 99.99% des virus', 'values' => "oui\noui\noui" ),
					array( 'label' => 'Destruction des bactéries', 'values' => "oui\noui\noui" ),
					array( 'label' => 'Neutralisation des kystes', 'values' => "oui\noui\noui" ),
					array( 'label' => 'Alarme de remplacement de lampe', 'values' => "oui\noui\noui" ),
					array( 'label' => "Capteur d'intensité UV", 'values' => "\n\noui" ),
					array( 'label' => 'Garantie à vie sur la chambre', 'values' => "oui\noui\noui" ),
				),
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'layout'  => 'banner',
				'eyebrow' => "Contrôle de la qualité d'eau",
				'title'   => "_Des tests d'eau précis_\n*pour une tranquillité d'esprit totale.*",
				'text'    => "Ne devinez pas la qualité de votre eau. Nos analyses approfondies identifient les bactéries, les minéraux et les contaminants chimiques pour vous offrir une tranquillité d'esprit totale.",
				'ctaText' => "Demandez une analyse d'eau",
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( 'Legionella-Monitoring.webp', 'Analyse microbiologique' ),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'framed' => false,
				'title'  => 'Zéro bactérie, *100 % sérénité.*',
				'count'  => 6,
				'offset' => 3,
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'variant'  => 'simple',
				'title'    => 'Découvrez les produits associés.',
				'intro'    => "Optimisez votre expérience de traitement d'eau avec nos solutions complémentaires.",
				'products' => array(
					array( 'name' => "Systèmes de filtration d'eau spécialisés", 'text' => "Nos filtres spécialisés sont conçus pour cibler et éliminer efficacement les contaminants spécifiques de votre eau de puits.", 'image' => $img( "Filtres d'eau spécialisés.webp", "Filtre d'eau spécialisé" ), 'url' => '/systemes-de-filtration-d-eau-specialises-pour-toute-la-maison' ),
					array( 'name' => "Adoucisseurs d'eau", 'text' => 'Éliminez le calcaire pour une peau douce, un linge éclatant et une protection durable de vos installations.', 'image' => $img( "Adoucisseurs d'eau.webp", "Adoucisseur d'eau" ), 'url' => '/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire' ),
					array( 'name' => "Stations d'eau potable", 'text' => 'Une eau de qualité minérale directement à votre évier, pour une hydratation pure et sans déchets plastiques.', 'image' => $img( "Solutions d'eau potable.webp", "Station d'eau potable" ), 'url' => '/stations-d-eau-potables-sous-l-evier-de-la-cuisine' ),
				),
			),
		),
		array(
			'bricareau/faq',
			array( 'items' => array_map( fn( $qa ) => array( 'question' => $qa[0], 'answer' => $qa[1] ), $faq ) ),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'   => 'La protection ultime contre les bactéries',
				'title'   => "Éliminez 99,99 % des virus et des bactéries\n*avec la stérilisation UV.*",
				'text'    => 'Ne faites aucun compromis sur la sécurité de votre famille. Nos systèmes de désinfection ultraviolette neutralisent instantanément les micro-organismes nocifs, sans ajout de produits chimiques.',
				'image'   => $sterile,
				'avatars' => $avatars(),
			),
		),
		array(
			'bricareau/resource-cards',
			array(
				'items' => array(
					array( 'title' => "Adoucisseur d'eau et fosse septique : compatible ou non ?", 'image' => $img( 'Cover-Image.webp', 'Adoucisseur et fosse septique' ), 'url' => '/adoucisseur-deau-et-fosse-septique-mythes-et-realites' ),
					array( 'title' => 'Adoucisseur sans sel vs avec sel : la vérité technique', 'image' => $img( 'avantages conditionneurs sans sel.jpg', 'Conditionneur sans sel' ), 'url' => '/adoucisseur-sans-sel-vs-avec-sel-verite-technique' ),
					array( 'title' => 'Comment régler la dureté de votre adoucisseur ?', 'image' => $img( '2149186343.jpg', 'Réglage de la dureté' ), 'url' => '/comment-regler-durete-adoucisseur-eau' ),
				),
			),
		),
	),
);
