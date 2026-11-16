<?php
/**
 * Residential filtration — src/pages/Filtration.tsx.
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

return array(
	'slug'            => 'filtration',
	'title'           => "Filtration d'eau résidentielle",
	'seo_title'       => 'Filtration d\'eau au Québec | Eau Pure et Saine | Bricareau',
	'seo_description' => 'Systèmes de filtration d\'eau haute performance au Québec. Éliminez chlore, plomb et contaminants avec nos solutions sur mesure pour toute la maison ou sous l\'évier.',
	'menu_order'      => 30,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "Filtration d'eau résidentielle\nL'excellence pour votre santé.",
				'text'        => "Ne laissez plus les contaminants couler de vos robinets. Nos systèmes de filtration d'eau avancés constituent un bouclier durable pour votre maison, vous garantissant une eau d'une pureté irréprochable pour toute votre famille au Canada.",
				'ctaText'     => 'Planifiez une consultation gratuite',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( '2149890905.jpg', "Filtration d'eau résidentielle Bricareau" ),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'anchor'   => 'problemes-eau',
				'variant'  => 'problem',
				'columns'  => '4',
				'label'    => 'Diagnostic de Pureté',
				'title'    => "Identifier l'invisible : Pourquoi filtrer votre eau ?",
				'intro'    => "L'eau municipale traverse des kilomètres de tuyauteries vétustes avant d'arriver chez vous. Chaque verre peut contenir des traces de l'imparfait.",
				'linkText' => 'Voir solutions',
				'defaultUrl' => '#solutions',
				'cards'    => array(
					array( 'label' => 'Infrastructure', 'title' => 'Réseaux Vétustes', 'icon' => 'wrench', 'image' => $img( 'Old Pipes.jpg', 'Réseaux Vétustes' ), 'text' => 'Des particules de rouille et de sédiments provenant de tuyauteries municipales centenaires se déposent dans vos verres.' ),
					array( 'label' => 'Sécurité Totale', 'title' => 'Santé & Nouveau-nés', 'icon' => 'shield-check', 'image' => $img( '47A0F39600000578-5222035-image-a-1_1514911887749.jpg', 'Santé & Nouveau-nés' ), 'text' => 'Traces de plomb, micro-plastiques et hormones. Protégez les systèmes immunitaires fragiles de votre famille.' ),
					array( 'label' => 'Confort Gustatif', 'title' => 'Goût de Chlore', 'icon' => 'glass-water', 'image' => $img( 'water-taste.jpg', 'Goût de Chlore' ), 'text' => 'Le chlore est nécessaire pour désinfecter, mais il altère le goût de vos boissons et dessèche votre peau sous la douche.' ),
					array( 'label' => 'Zéro Déchet', 'title' => "L'impact Plastique", 'icon' => 'recycle', 'image' => $img( '20051.jpg', "L'impact Plastique" ), 'text' => "Éliminez définitivement l'achat de 2000+ bouteilles de plastique par an. Une victoire écologique et financière." ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'anchor'  => 'solutions',
				'variant' => 'numbered',
				'rows'    => array(
					array(
						'subtitle' => 'PROTECTION & SANTÉ',
						'title'    => 'Eau filtrée pour toute la maison',
						'text'     => "Les filtres d’eau pour toute la maison sont installés directement sur l’arrivée principale d’eau. Ils filtrent toute l’eau qui circule dans la maison : cuisine, salles de bain, buanderie, robinets extérieurs, etc. Ils sont idéaux pour réduire les sédiments, le sable, certaines odeurs et goûts (comme le chlore) et protéger la plomberie et les appareils.",
						'bullets'  => "Protection de la plomberie : dites adieu au chlore résiduel et aux sédiments qui corrodent vos précieux appareils.\nClarté de l'eau : une eau limpide à chaque robinet, protégeant l'éclat de vos sanitaires et de votre linge.\nPerformance longue durée : une technologie haute fidélité offrant une filtration efficace pendant 5 à 7 ans sans entretien lourd.",
						'image'    => $img( 'teenager-taking-shower-reduce-hangover-effect.jpg', 'Douche sous eau filtrée Bricareau - Protection de la peau et des cheveux' ),
					),
					array(
						'subtitle' => 'EAU PURE À VOLONTÉ',
						'title'    => "Votre source d'eau cristalline, sans compromis.",
						'text'     => "Découvrez comment notre système d'osmose inverse libère votre quotidien du goût de chlore et de la corvée des bouteilles plastique. Une eau légère et saine à portée de main.",
						'bullets'  => "Pureté absolue : élimine 99% des contaminants, métaux lourds et micro-plastiques pour une sécurité totale.\nÉco-conscient : réduisez drastiquement votre empreinte carbone en éliminant les bouteilles jetables.\nSaveurs révélées : sublimez le goût de vos boissons et petits plats avec une eau pure sans aucune impureté.",
						'image'    => $img( 'glass-of-water.jpeg', "Verre d'eau pure provenant d'un système d'osmose inverse Bricareau" ),
					),
					array(
						'subtitle' => 'COMPACT & PUISSANT',
						'title'    => "Systèmes de filtration d'eau sous l'évier",
						'text'     => "Éliminez jusqu'à 99% des pathogènes, du plomb et du fluorure. Notre gamme Cristal Pro est la solution ultime pour une eau de boisson de qualité supérieure directement chez vous.",
						'bullets'  => "Filtration d'élite : un processus rigoureux en 3 étapes qui neutralise les métaux lourds, le chlore et les sédiments invisibles.\nDesign intelligent : ultra-compact conçu pour maximiser votre espace de rangement.\nFinition de luxe : inclut une sélection de robinets au design contemporain s'intégrant parfaitement à votre cuisine.",
						'image'    => $img( 'african-girl-stands-kitchen-drinks-water.jpg', "Enfant buvant de l'eau saine filtrée sous l'évier Bricareau" ),
					),
				),
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'overlay' => 'blue',
				'eyebrow' => "Contrôle de la Qualité D'EAU",
				'title'   => 'Votre eau est notre priorité.',
				'text'    => "Ne laissez plus le doute couler de votre robinet. Demandez votre test d'eau dès aujourd'hui et obtenez un portrait clair de votre eau ainsi que des solutions adaptées à votre foyer.",
				'ctaText' => "Demandez une analyse d'eau",
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( '39677.jpg', "Analyse d'eau en laboratoire - Bricareau" ),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array( 'title' => 'Honnêteté et passion : la signature Bricareau vue par vous.' ),
		),
		array(
			'bricareau/comparison-table',
			array(
				'title'            => "Comparez nos solutions de filtration d'eau",
				'firstColumnLabel' => 'Critères Techniques',
				'columns'          => array(
					array( 'name' => "Filtres d'eau spécialisés", 'image' => $img( "Filtres d'eau spécialisés.webp", "Filtres d'eau spécialisés" ), 'badge' => 'Protection Globale', 'color' => 'blue' ),
					array( 'name' => "Systèmes de filtration sous l'évier", 'image' => $img( 'Triple Stage Filter.jpg', "Systèmes de filtration sous l'évier" ), 'badge' => 'Pureté Dégustation', 'color' => 'emerald' ),
				),
				'rows'             => array(
					array( 'label' => 'Installation', 'values' => "Point d'entrée\nSous l'évier" ),
					array( 'label' => 'Portée de filtration', 'values' => "Toute la maison\nPoint d'utilisation" ),
					array( 'label' => 'Élimine sédiments, chlore et odeurs', 'values' => "oui\noui" ),
					array( 'label' => 'Traitement spécialisé (Fer, Soufre, Manganèse)', 'values' => "oui\nnon" ),
					array( 'label' => 'Élimination plomb, arsenic et métaux lourds', 'values' => "non\noui" ),
					array( 'label' => "Pureté de l'eau (99% sans contaminants)", 'values' => "non\noui" ),
					array( 'label' => 'Rinçage et entretien du média', 'values' => "Automatique\nManuel (Cartouches)" ),
					array( 'label' => 'Changement de membrane périodique', 'values' => "non\noui" ),
					array( 'label' => "Goût d'une eau embouteillée premium", 'values' => "oui\nSupérieur" ),
					array( 'label' => 'Emplacement courant', 'values' => "Salle mécanique\nCuisine" ),
				),
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'     => "AVIS D'EXPERTS D'EAU",
				'title'     => "Démystifiez vos options de filtration d'eau résidentielle.",
				'text'      => "Vous n’êtes pas certain de savoir si vous avez besoin d’un filtre d'eau pour toute la maison, d’un système sous évier ou d’une station d’osmose inverse ? Contactez‑nous pour accompagnement personnalisé pour vous guider vers le système adapté à votre réalité et votre budget.",
				'image'     => $img( '10271.jpg', "Problématique d'eau dure sur la robinetterie - Solution Bricareau" ),
				'phoneText' => 'Parlez à un expert',
				'ctaText'   => 'Planifiez une consultation',
				'ctaUrl'    => '/consultation',
				'avatars'   => $avatars(),
				'rating'    => '4.9/5',
				'caption'   => 'Rejoignez plus de 1,500 familles satisfaites au Québec cette année.',
			),
		),
		array(
			'bricareau/faq',
			array(
				'visibleCount' => 5,
				'items'        => array(
					array( 'question' => "Comment fonctionne l'osmose inverse ?", 'answer' => "L'osmose inverse pousse l'eau à travers une membrane semi-perméable microscopique pour éliminer les impuretés dissoutes, le chlore et les minéraux lourds, produisant une eau d'une pureté exceptionnelle." ),
					array( 'question' => 'Quelle est la différence entre un adoucisseur et un filtre ?', 'answer' => "Un adoucisseur élimine spécifiquement le calcaire (calcium et magnésium), tandis qu'un système de filtration élimine les contaminants, le chlore, les odeurs et les sédiments pour améliorer la qualité de l'eau." ),
					array( 'question' => "À quelle fréquence faut-il changer les filtres sous l'évier ?", 'answer' => "Pour un système sous-évier, les cartouches classiques se changent généralement tous les 6 à 12 mois. La membrane d'osmose inverse peut durer 2 à 3 ans selon la qualité de votre eau d'entrée." ),
					array( 'question' => 'Les filtres sous-évier éliminent-il les bactéries ?', 'answer' => "Les systèmes d'osmose inverse et certains filtres spécialisés à ultrafiltration sont extrêmement efficaces contre les particules microscopiques, mais pour une protection bactériologique totale, nous recommandons un système UV en complément." ),
					array( 'question' => "Est-ce que l'installation d'un filtre sous-évier réduit la pression d'eau ?", 'answer' => "Nos systèmes modernes sont conçus pour minimiser l'impact sur la pression. Les systèmes d'osmose inverse utilisent souvent un réservoir de stockage pour garantir un débit constant à votre robinet dédié." ),
					array( 'question' => 'Pourquoi choisir un filtre spécialisé pour le fer ou le soufre ?', 'answer' => "Les filtres standards ne peuvent pas traiter les fortes concentrations de fer (taches jaunes/rouges) ou de soufre (odeur d'œufs pourris). Nos filtres spécialisés utilisent des médias spécifiques pour neutraliser ces problèmes à la source." ),
				),
			),
		),
		array(
			'bricareau/resource-cards',
			array(
				'title'    => 'Ressources',
				'linkText' => 'Lire',
				'items'    => array(
					array( 'title' => "Filtre sous évier : l'alternative simple aux pichets filtrants", 'image' => $img( '2150495122.jpg', "Filtre sous évier - Guide pratique Bricareau" ), 'url' => '/filtre-sous-evier-lalternative-simple-aux-pichets-filtrants' ),
					array( 'title' => 'Eau embouteillée : les dangers méconnus pour votre santé au quotidien', 'image' => $img( '258.jpg', 'Eau embouteillée - Guide pratique Bricareau' ), 'url' => '/eau-embouteillee-les-dangers-meconnus-pour-votre-sante-au-quotidien' ),
					array( 'title' => "Nos systèmes de filtration d'eau sous évier : La solution ultime", 'image' => $img( 'Triple Stage Filter.jpg', 'Systèmes sous évier - Guide pratique Bricareau' ), 'url' => '/stations-d-eau-potables-sous-l-evier-de-la-cuisine' ),
				),
			),
		),
	),
);
