<?php
/**
 * Stations d'eau potable sous l'évier — src/pages/Systemes-de-filtration-deau-sous-l-evier.tsx.
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

$cristal1  = $img( 'Single Stage Filter.jpg', 'Cristal Pro I' );
$cristal2  = $img( 'Double Stage Filter.jpg', 'Cristal Pro II' );
$cristal3  = $img( 'Triple Stage Filter.jpg', 'Cristal Pro III' );
$vectapure = $img( 'V3604RO.jpg', 'Vectapure NX' );
$essentiel = $img( "Solutions d'eau potable.webp", 'Série Essentiel' );
$serenite  = $img( '67acea99-c085-4df5-b21f-e840244a30db.jpg', 'Sérénité Direct-Flow' );
$drink     = $img( 'reasons-to-drink-more-water.jpg', "Verre d'eau pure" );

$faq = array(
	array( "Qu'est-ce qu'un système d'osmose inverse sous évier ?", "C'est un système de purification d'eau compact installé directement sous votre évier de cuisine. Il utilise une technologie de filtration à plusieurs étapes, incluant une membrane semi-perméable, pour fournir une eau d'une pureté exceptionnelle directement à un robinet dédié." ),
	array( "Quels sont les principaux avantages d'un système d'osmose inverse ?", "Le principal avantage est la suppression de 99 % des contaminants (plomb, chlore, fluorure, arsenic, nitrates, etc.). Cela améliore considérablement le goût, l'odeur et la sécurité de votre eau pour boire et cuisiner, tout en éliminant le besoin d'acheter de l'eau en bouteille." ),
	array( "Est-ce difficile à installer sous un évier de cuisine ?", "Bien que l'installation puisse être réalisée par un bon bricoleur, nous recommandons une installation professionnelle par nos techniciens certifiés Bricareau. Cela garantit une étanchéité parfaite, un raccordement conforme au drain et une pression optimale du réservoir." ),
	array( 'Combien de place le système prend-il dans mon armoire ?', "Nos systèmes modernes sont conçus pour être compacts. L'unité de filtration mesure généralement environ 15-18 pouces de hauteur, et le réservoir de stockage occupe une place similaire à celle d'un grand panier à pharmacie. Il reste généralement assez d'espace pour vos produits ménagers." ),
	array( "L'osmose inverse élimine-t-elle les minéraux essentiels ?", "L'osmose inverse est si efficace qu'elle retire presque tout, y compris les minéraux. C'est pourquoi nos systèmes haut de gamme incluent une cartouche de reminéralisation qui réintroduit du calcium et du magnésium, équilibrant le pH pour une eau alcaline plus saine." ),
	array( 'Est-ce que le système nécessite un robinet séparé ?', "Oui, la plupart des installations incluent un petit robinet design dédié à l'eau purifiée. Cela permet de préserver vos filtres en utilisant l'eau standard pour la vaisselle et l'eau osmosée uniquement pour la consommation et la cuisson. Des robinets « 3-en-1 » sont aussi disponibles en option." ),
	array( 'À quelle fréquence faut-il remplacer les filtres ?', "Les pré-filtres (sédiments et charbon) doivent généralement être changés tous les 6 à 12 mois pour protéger la membrane. La membrane d'osmose inverse elle-même dure généralement entre 2 et 4 ans, selon votre consommation et la dureté de votre eau." ),
	array( 'Peut-on connecter le système à un réfrigérateur ou une machine à glaçons ?', 'Absolument ! Nous pouvons installer une ligne de dérivation pour alimenter votre réfrigérateur en eau osmosée. Vous obtiendrez ainsi des glaçons cristallins et de l\'eau fraîche purifiée directement de votre distributeur de porte.' ),
	array( "L'eau osmosée est-elle meilleure que l'eau en bouteille ?", "Dans la majorité des cas, oui. L'eau osmosée à domicile est souvent plus fraîche et subit moins de risques de contamination par le plastique des bouteilles. De plus, c'est une solution beaucoup plus écologique et économique à long terme." ),
	array( "Quelle est la différence entre un filtre à charbon simple et l'osmose inverse ?", "Un filtre à charbon simple réduit principalement le goût de chlore et les odeurs. L'osmose inverse va beaucoup plus loin en éliminant les solides dissous, les métaux lourds, les virus et les bactéries que le charbon seul ne peut pas arrêter." ),
	array( 'Le système fait-il du bruit pendant son fonctionnement ?', "Le système est pratiquement silencieux. Vous pourriez entendre un léger sifflement ou un gargouillis très discret pendant qu'il remplit le réservoir ou évacue les impuretés, mais cela s'arrête dès que le réservoir est plein." ),
	array( 'Comment savoir si mes filtres doivent être changés ?', "Une baisse notable du débit au robinet dédié ou un changement subtil du goût sont des indicateurs. Chez Bricareau, nous proposons également des tests de conductivité (TDS) lors de nos visites d'entretien pour mesurer précisément l'efficacité de la membrane." ),
	array( "L'osmose inverse retire-t-elle le calcaire ?", "Oui, elle est extrêmement efficace pour retirer les minéraux de dureté (calcium/magnésium). Cependant, si votre eau est extrêmement dure, nous recommandons un adoucisseur en amont pour éviter que la membrane de l'osmose ne s'encrasse trop rapidement." ),
	array( "Est-ce que le système gaspille beaucoup d'eau ?", "L'osmose inverse nécessite un flux d'eau pour rincer les impuretés de la membrane (eau de rejet). Nos systèmes récents sont optimisés pour être très efficaces, avec des ratios de rejet très bas comparés aux anciens modèles des années 90." ),
	array( 'Quelle est la durée de vie globale du système ?', "Avec un entretien régulier et des changements de filtres planifiés, un système d'osmose inverse de qualité Bricareau peut facilement durer 15 à 20 ans. C'est un investissement durable pour la santé de votre famille." ),
	array( "Quels sont les avantages d'un système de filtration sous l'évier ?", "Il offre une eau de qualité embouteillée directement à votre robinet, élimine le goût et l'odeur de chlore, retire les métaux lourds et réduit drastiquement vos dépenses ainsi que votre empreinte plastique." ),
	array( "Quelle est la différence entre un filtre à cartouche standard et l'osmose inverse ?", "Un filtre standard réduit principalement le chlore et les sédiments. L'osmose inverse va plus loin en éliminant jusqu'à 99 % de tous les contaminants dissous grâce à une membrane semi-perméable ultra-fine." ),
	array( "Quels problèmes d'eau les systèmes sous évier peuvent-ils résoudre ?", 'Ils sont particulièrement efficaces contre le chlore, les sédiments, le plomb, le mercure, les résidus de pesticides, et les microplastiques, garantissant une eau saine pour boire et cuisiner.' ),
	array( "Le système prend-il beaucoup de place sous l'évier ?", "Nos systèmes modernes sont très compacts. Ils occupent généralement moins de 25 % de l'espace de votre armoire sous l'évier, vous laissant de la place pour vos autres articles ménagers." ),
	array( "Puis-je l'utiliser pour mon réfrigérateur et ma machine à glaçons ?", 'Absolument ! Nous pouvons raccorder votre système de filtration à votre frigo pour que vous profitiez d\'une eau fraîche et de glaçons cristallins, sans aucun goût indésirable.' ),
);

return array(
	'slug'             => 'stations-d-eau-potables-sous-l-evier-de-la-cuisine',
	'title'            => "Systèmes de filtration d'eau sous l'évier",
	'breadcrumb_label' => "Stations d'eau potable sous l'évier",
	'seo_title'        => "Systèmes de filtration d'eau sous l'évier | Osmose inverse | Bricareau",
	'seo_description' => "Une eau potable d'une qualité exceptionnelle directement de votre robinet. Nos systèmes de filtration sous l'évier et d'osmose inverse éliminent 99 % des contaminants au Québec.",
	'menu_order'       => 33,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "*La pureté de l'eau* sous l'évier,\n*l'excellence* dans chaque goutte.",
				'text'        => "Profitez d'une eau potable d'une qualité exceptionnelle directement de votre robinet. Nos systèmes de filtration sous comptoir et d'ultrafiltration éliminent 99% des contaminants pour la santé de votre famille.",
				'ctaText'     => 'Planifiez une consultation gratuite',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( 'boire-eau-robinet.jpg', "Boire l'eau du robinet" ),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'variant'    => 'media',
				'columns'    => '2',
				'label'      => "L'invisible dans votre verre",
				'title'      => "L'eau de source sans les\nnanoparticules plastique.",
				'intro'      => "Le chlore n'est que la pointe de l'iceberg. Votre eau municipale peut abriter des micro-polluants invisibles qui s'accumulent silencieusement dans votre organisme.",
				'linkText'   => 'La Barrière',
				'defaultUrl' => '#nos-produits',
				'cards'      => array(
					array( 'title' => "PFAS « Polluants Éternels »", 'meta' => 'Hautement Persistant', 'label' => 'Risque Santé', 'text' => "Utilisés dans l'industrie, ils ne se dégradent jamais. L'osmose inverse est l'une des rares barrières physiques certifiées pour les bloquer.", 'image' => $img( 'PFAS.jpg.jpg', 'PFAS' ) ),
					array( 'title' => 'Micro-plastiques', 'meta' => 'Omniprésent', 'label' => 'Environnement', 'text' => 'Des milliers de fragments par litre. Nos membranes de 0.0001 micron garantissent une eau sans résidus plastiques pour toute la famille.', 'image' => $img( '2148214464.jpg', 'Micro-plastiques' ) ),
					array( 'title' => 'Fluorure & Chlore', 'meta' => 'Goût & Équilibre', 'label' => 'Pureté Goût', 'text' => "Indispensables au traitement, mais désagréables en bouche. Retrouvez la pureté d'une eau de source minérale sans les additifs chimiques.", 'image' => $img( '2147807855.jpg', 'Fluorure et chlore' ) ),
					array( 'title' => 'Résidus Médicinaux', 'meta' => 'Invisible', 'label' => 'Protection Enfant', 'text' => "Trace d'hormones et d'antibiotiques traversant les filtres standards. Offrez à vos enfants une eau débarrassée de toute substance étrangère.", 'image' => $img( 'eau_medicaments.png', 'Résidus médicinaux' ) ),
				),
			),
		),
		array(
			'bricareau/intro-split',
			array(
				'layout'     => 'image-left',
				'title'      => "L'eau de source,\n*sans* la bouteille de plastique.",
				'text'       => "Ne faites plus aucun compromis. Transformez votre robinet en une source de pureté gastronomique. Nos systèmes filtrent l'indésirable pour ne laisser couler que l'essentiel : une eau fraîche, saine et libérée des contraintes du plastique.",
				'image'      => $img( 'pure-spring-water.png', 'Eau de source pure Bricareau' ),
				'badgeIcon'  => 'droplets',
				'badgeLabel' => 'Pureté Absolue',
				'badgeTitle' => 'Zéro Chlore, 100% Vie',
				'ctaText'    => "Passer à l'eau pure dès aujourd'hui",
				'ctaUrl'     => '#nos-produits',
				'features'   => array(
					array( 'icon' => 'anvil', 'color' => 'navy', 'label' => 'Gastronomie', 'title' => 'Goût & Odeur', 'text' => "Redécouvrez l'arôme pur de vos cafés et thés, libéré des saveurs chimiques de l'eau de ville." ),
					array( 'icon' => 'shield-check', 'color' => 'green', 'label' => 'Protection', 'title' => 'Zéro Plomb', 'text' => 'Une barrière physique impénétrable contre les résidus métalliques des canalisations anciennes.' ),
					array( 'icon' => 'microscope', 'color' => 'green', 'label' => 'Science', 'title' => 'Ultrafiltration', 'text' => 'Technologie 0.01 micron bloquant 99.9% des micro-organismes sans aucun ajout chimique.' ),
					array( 'icon' => 'leaf', 'color' => 'green', 'label' => 'Écologie', 'title' => 'Zéro Déchet', 'text' => 'Évitez 2000 bouteilles plastiques par an. Économisez pour vous et préservez pour la planète.' ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'     => 'nos-produits',
				'variant'    => 'catalog',
				'background' => 'light',
				'label'      => 'La Gamme Bricareau Pure',
				'title'      => "Nos systèmes de filtration d'eau *sous évier.*",
				'intro'      => "Découvrez nos solutions de pointe, de la filtration compacte sous évier aux systèmes d'osmose inverse haute performance sans réservoir.",
				'products'   => array(
					array( 'name' => 'Cristal Pro I', 'badge' => 'Sédiments', 'color' => 'blue', 'image' => $cristal1, 'url' => '/contact', 'text' => 'La première ligne de défense pour votre eau. Ce filtre à sédiments haute performance élimine efficacement le sable, la rouille et les particules en suspension.', 'features' => "Filtration sédiments 5µ\nÉlimine sable et rouille\nInstallation ultra-simple" ),
					array( 'name' => 'Cristal Pro II', 'badge' => 'Duo Pur', 'color' => 'emerald', 'image' => $cristal2, 'url' => '/contact', 'text' => 'La combinaison parfaite pour une eau saine. Ce système duo associe la filtration des sédiments à un filtre charbon actif premium, éliminant chlore et goûts désagréables.', 'features' => "Duo Sédiments + Charbon\nÉlimine le goût de chlore\nCartouches haute capacité" ),
					array( 'name' => 'Cristal Pro III', 'badge' => 'Ultrafiltration', 'color' => 'amber', 'image' => $cristal3, 'url' => '/contact', 'text' => "La technologie d'ultrafiltration avancée. Ce système offre une purification microscopique supérieure, filtrant virus et bactéries tout en conservant les minéraux.", 'features' => "Ultrafiltration 0.01 micron\nBarrière microbiologique\nConserve les minéraux" ),
					array( 'name' => 'Vectapure NX', 'badge' => 'Série NX', 'color' => 'blue', 'image' => $vectapure, 'url' => '/contact', 'text' => 'Un système à 4 étapes éprouvé, ultra-compact et efficace pour les budgets maîtrisés. Idéal pour les appartements et petits espaces.', 'features' => "4 étapes de filtration\nMembrane 75 GPD\nChangement de filtres rapide" ),
					array( 'name' => 'Série Essentiel', 'badge' => 'Populaire', 'color' => 'emerald', 'image' => $essentiel, 'url' => '/contact', 'text' => 'Notre best-seller à 6 étapes avec polissage final pour une eau d\'une douceur incomparable. Le choix numéro 1 des familles québécoises.', 'features' => "6 étapes complètes\nProduction 75 GPD\nEau minérale balancée" ),
					array( 'name' => 'Sérénité Direct-Flow', 'badge' => 'Vitesse XXL', 'color' => 'amber', 'image' => $serenite, 'url' => '/contact', 'text' => 'Débit instantané 600 GPD. Pas de réservoir encombrant, eau fraîche en continu à volonté. Technologie Direct-Flow sans stagnation.', 'features' => "5 étapes Direct-Flow\n600 GPD (2L/min)\nFormat ultra-compact" ),
				),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'anchor'      => 'purification-systems',
				'variant'     => 'icon-list',
				'label'       => "L'excellence d'une eau santé au quotidien",
				'labelStyle'  => 'pill',
				'title'       => "Pourquoi installer l'un de nos\n*systèmes de purification d'eau sous l'évier* de votre cuisine ?",
				'accentStyle' => 'green',
				'intro'       => "_Une technologie de pointe pour une eau d'une pureté exceptionnelle tout en offrant une protection permanente pour votre foyer._",
				'cards'       => array(
					array( 'icon' => 'shield-check', 'title' => 'Sécurité maximale', 'text' => 'Élimine 99% des virus, bactéries et contaminants chimiques.' ),
					array( 'icon' => 'droplets', 'title' => 'Goût incomparable', 'text' => "Retrouvez le vrai goût de l'eau, limpide et rafraîchissante." ),
					array( 'icon' => 'glass-water', 'title' => 'Eau pure 24/7', 'text' => 'Accès instantané à une eau de meilleure qualité.' ),
					array( 'icon' => 'circle-dollar-sign', 'title' => 'Économies', 'text' => "Éliminez l'achat de bouteilles d'eau plastique." ),
					array( 'icon' => 'leaf', 'title' => 'Zéro Plastique', 'text' => 'Dites définitivement adieu au plastique. Une seule cartouche préserve la planète de milliers de bouteilles jetables.' ),
					array( 'icon' => 'filter', 'title' => 'Design compact', 'text' => "L'élégance de la discrétion. Une intégration fluide sous votre comptoir qui préserve l'esthétique de votre cuisine." ),
				),
			),
		),
		array(
			'bricareau/image-banner',
			array(
				'overlay' => 'soft',
				'eyebrow' => 'Engagement Certifié',
				'title'   => "Offrez à votre famille la qualité d'une eau pure de qualité minérale.",
				'text'    => "Profitez d'une installation propre, durable et optimisée par nos experts. Optez pour la tranquillité d'esprit avec une intégration technique signée Bricareau Water Specialist.",
				'image'   => $img( 'Reverse Osmosis Installation.jpg', "Installation professionnelle d'un système d'osmose inverse" ),
			),
		),
		array(
			'bricareau/comparison-table',
			array(
				'title'            => "_Comparez nos solutions_\nde filtration d'eau potable",
				'firstColumnLabel' => 'Critères techniques',
				'columns'          => array(
					array( 'name' => 'Cristal Pro I', 'image' => $cristal1, 'badge' => 'Sédiments', 'color' => 'blue' ),
					array( 'name' => 'Cristal Pro II', 'image' => $cristal2, 'badge' => 'Duo Pur', 'color' => 'emerald' ),
					array( 'name' => 'Cristal Pro III', 'image' => $cristal3, 'badge' => 'Ultrafiltration', 'color' => 'amber' ),
					array( 'name' => 'Vectapure NX', 'image' => $vectapure, 'badge' => 'Osmose NX', 'color' => 'blue' ),
					array( 'name' => 'Série Essentiel', 'image' => $essentiel, 'badge' => 'Osmose 6E', 'color' => 'emerald' ),
					array( 'name' => 'Sérénité Direct', 'image' => $serenite, 'badge' => '600 GPD', 'color' => 'amber' ),
				),
				'rows'             => array(
					array( 'label' => "Installation sous l'évier", 'values' => "oui\noui\noui\noui\noui\noui" ),
					array( 'label' => 'Technologie de pointe', 'values' => "Filtration\nFiltration\nUltrafiltration\nOsmose Inverse\nOsmose Inverse\nOsmose Inverse" ),
					array( 'label' => "Nombre d'étapes", 'values' => "1 étape\n2 étapes\n3 étapes\n4 étapes\n6 étapes\n5 étapes" ),
					array( 'label' => 'Élimination sédiments', 'values' => "oui\noui\noui\noui\noui\noui" ),
					array( 'label' => 'Élimination Chlore / Goût', 'values' => "non\noui\noui\noui\noui\noui" ),
					array( 'label' => 'Retrait COV / Pesticides', 'values' => "non\noui\noui\noui\noui\noui" ),
					array( 'label' => 'Ultrafiltration (0.01µ)', 'values' => "non\nnon\noui\nnon\nnon\nnon" ),
					array( 'label' => 'Osmose Inverse (0.0001µ)', 'values' => "non\nnon\nnon\noui\noui\noui" ),
					array( 'label' => 'Bactéries / Virus', 'values' => "non\nnon\n99.9%\n99.9%\n99.9%\n99.9%" ),
					array( 'label' => 'Maintien des minéraux', 'values' => "oui\noui\noui\nNon\nNon\nNon" ),
					array( 'label' => 'Reminéralisation (Alcalin)', 'values' => "non\nnon\nnon\nOption\noui\nOption" ),
					array( 'label' => "Aucun rejet d'eau au drain", 'values' => "oui\noui\noui\nnon\nnon\nnon" ),
					array( 'label' => 'Production (GPD)', 'values' => "Débit Direct\nDébit Direct\nDébit Direct\n75 GPD\n75 GPD\n600 GPD" ),
				),
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'layout'  => 'banner',
				'eyebrow' => "Contrôle de la qualité d'eau",
				'title'   => "_La vérité dans chaque_\n*goutte d'eau.*",
				'text'    => 'Pourquoi deviner quand vous pouvez vérifier ? Un test d\'eau simple pour une protection durable de l\'eau de votre foyer.',
				'ctaText' => "Demandez une analyse d'eau",
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( 'leaky-faucet-with-dripping-water-drop-conservation-concept.jpg', 'Analyse d\'eau à domicile' ),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'framed' => false,
				'title'  => "L'eau de source,\n*sans* la bouteille de plastique.",
				'count'  => 6,
				'offset' => 2,
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'   => 'Le sommet de la pureté à la maison',
				'title'   => "Redéfinissez votre standard\n*de pureté d'eau.*",
				'text'    => "Pourquoi vous contenter d'une eau ordinaire quand vous pouvez offrir à votre foyer une source de pureté incomparable ? L'osmose inverse élimine les impuretés invisibles pour ne laisser que l'essentiel : une eau cristalline, un goût exceptionnel et une tranquillité d'esprit totale. Faites le choix de la technologie la plus avancée pour votre santé et votre confort.",
				'image'   => $drink,
				'avatars' => $avatars(),
			),
		),
		array(
			'bricareau/faq',
			array( 'items' => array_map( fn( $qa ) => array( 'question' => $qa[0], 'answer' => $qa[1] ), $faq ) ),
		),
		array(
			'bricareau/resource-cards',
			array(
				'background' => 'white',
				'items'      => array(
					array( 'title' => "Eau du puits au Québec : quand installer un système d'osmose inverse", 'image' => $img( '31794.jpg', 'Eau de puits' ), 'url' => '/eau-du-puits-au-quebec-quand-installer-un-systeme-dosmose-inverse' ),
					array( 'title' => "Comment l'osmose inverse protège votre famille des contaminants invisibles", 'image' => $img( '2148354772.jpg', 'Osmose inverse' ), 'url' => '/comment-losmose-inverse-protege-votre-famille-des-contaminants-invisibles' ),
					array( 'title' => 'Osmose inverse : la technologie derrière une eau 100 % pure', 'image' => $drink, 'url' => '/osmose-inverse-la-technologie-derriere-une-eau-100-pure' ),
				),
			),
		),
	),
);
