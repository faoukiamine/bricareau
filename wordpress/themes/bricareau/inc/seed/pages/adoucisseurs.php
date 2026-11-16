<?php
/**
 * Adoucisseurs d'eau résidentiels — src/pages/Adoucisseurs-deau.tsx.
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

$faq = array(
	array( "Pourquoi installer un adoucisseur si l'eau est déjà traitée par la municipalité ?", "L'eau municipale est traitée pour être potable, pas pour être douce. Elle contient souvent beaucoup de calcaire qui endommage vos appareils, ternit votre robinetterie et assèche votre peau." ),
	array( "L'eau adoucie a-t-elle un goût salé ?", "Non. La quantité de sodium échangée contre le calcaire est minime et indétectable au goût pour la majorité des gens. C'est bien moins de sel que dans une simple tranche de pain blanc." ),
	array( "L'adoucisseur nécessite-t-il beaucoup d'entretien ?", "Très peu. Il suffit d'ajouter du sel régulièrement et de procéder à un nettoyage annuel de la résine avec un produit spécialisé que nous fournissons. Nos techniciens peuvent également s'en charger lors d'une visite de routine." ),
	array( "Est-ce que l'adoucisseur enlève le chlore de l'eau de ville ?", "Un adoucisseur standard enlève uniquement le calcaire. Pour le chlore, nous recommandons nos modèles hybrides (comme la série Sérénité avec charbon) qui filtrent aussi le chlore et les mauvaises odeurs." ),
	array( 'Combien de sel un adoucisseur consomme-t-il par an ?', 'Cela dépend de votre consommation d\'eau et de la dureté initiale, mais en moyenne pour une famille de 4 personnes, nos modèles haute efficacité consomment environ 6 à 8 sacs de sel par an.' ),
	array( "L'adoucisseur augmente-t-il ma facture d'eau ?", 'Très peu. La régénération utilise un volume d\'eau négligeable par rapport à votre consommation totale. En revanche, il protège votre chauffe-eau et le rend plus efficace, réduisant votre facture énergétique.' ),
	array( "Puis-je boire l'eau adoucie ?", "Oui, elle est parfaitement potable. Cependant, pour les personnes suivant un régime strict sans sel ou pour le goût le plus pur (thé, café), nous recommandons d'ajouter un système d'osmose inverse sous l'évier." ),
	array( "Puis-je installer l'adoucisseur moi-même ?", 'Bien que possible pour un bricoleur averti, nous recommandons fortement une installation professionnelle pour garantir le bon réglage de la dureté, l\'étanchéité et le respect des normes de plomberie locales.' ),
	array( "Quelle est la différence entre un adoucisseur et un filtre ?", 'Un filtre retire des sédiments ou des contaminants (chlore, plomb). Un adoucisseur retire spécifiquement le calcaire (dureté) pour protéger votre tuyauterie et adoucir votre eau.' ),
	array( "Quelle est la durée de vie d'un adoucisseur d'eau Bricareau ?", "Avec un entretien minimal, nos systèmes sont conçus pour durer de 15 à 20 ans. La résine de haute qualité à l'intérieur peut durer plus de 15 ans avant de nécessiter un remplacement." ),
	array( "L'adoucisseur fait-il du bruit ?", "Il fonctionne silencieusement la plupart du temps. Vous n'entendrez un léger bruit d'eau que pendant la régénération, qui est programmée généralement la nuit (par exemple à 2h du matin) pour ne pas vous déranger." ),
	array( "Est-ce que l'eau adoucie est bonne pour les plantes ?", "Il est préférable d'arroser les plantes intérieures avec de l'eau non adoucie car le sodium peut s'accumuler dans le terreau. Nous installons souvent un robinet de dérivation pour l'arrosage extérieur." ),
	array( 'Que se passe-t-il en cas de panne de courant ?', "Nos vannes électroniques conservent leur programmation en mémoire pendant 48 heures ou plus. Une fois le courant rétabli, l'adoucisseur reprend son cycle normal sans perdre vos réglages." ),
	array( 'Dois-je utiliser un type de sel spécifique ?', 'Nous recommandons du sel en pastilles de haute pureté pour éviter les résidus insolubles dans le bac. Certains sels contiennent aussi des nettoyants à résine pour maintenir l\'efficacité du système.' ),
	array( 'Comment savoir si mon adoucisseur fonctionne correctement ?', "Vous remarquerez immédiatement la différence : votre savon moussera beaucoup plus, votre peau sera plus douce après la douche et il n'y aura plus de nouvelles traces de calcaire sur vos parois de douche." ),
	array( 'Un adoucisseur est-il compatible avec une fosse septique ?', "Oui, tout à fait. Les eaux de régénération rejetées sont sans danger et n'affectent pas le fonctionnement biologique d'une fosse septique standard correctement dimensionnée." ),
	array( "Est-ce que l'adoucisseur réduit la pression d'eau ?", "Non. Nos systèmes sont conçus « High Flow » (haut débit) pour ne causer aucune perte de pression perceptible dans votre maison, même lorsque vous prenez une douche et utilisez la laveuse en même temps." ),
);

$sentinel = $img( 'Sentinelle Water Softener.png', "Adoucisseur d'eau série Sentinelle" );
$serenity = $img( 'Serenity Water Softener.png', "Adoucisseur d'eau série Sérénité" );
$infiniti = $img( 'Alternating Water Softener.png', "Adoucisseur d'eau série Infiniti" );
$brochure = $img( 'brochure-freshpoint-fr.pdf', 'Brochure série Sentinelle' );

return array(
	'slug'             => 'adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire',
	'title'            => "Adoucisseurs d'eau résidentiels",
	'breadcrumb_label' => "Adoucisseurs d'eau résidentiels",
	'seo_title'        => "Adoucisseur d'eau au Québec | Éliminez le Calcaire | Bricareau",
	'seo_description' => "Protégez votre maison du calcaire avec nos adoucisseurs d'eau haute efficacité au Québec. Peau douce, linge éclatant et protection durable de vos appareils. Expertise Bricareau.",
	'menu_order'       => 30,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "Finis le calcaire et l'eau dure\u{00A0}:\noffrez-vous le confort d'une *eau douce.*",
				'text'        => "Redécouvrez l'expérience d'une eau soyeuse qui préserve votre peau, vos cheveux et vos investissements. Une technologie de pointe pour une protection durable de votre foyer.",
				'ctaText'     => 'Planifiez une consultation gratuite',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( 'young-nude-woman-taking-relaxing-foamy-bath.jpeg', 'Bain moussant avec une eau adoucie' ),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'variant'   => 'impact',
				'label'     => "Diagnostic l'eau dure",
				'title'     => "L'impact silencieux du\n*calcaire* sur votre vie.",
				'intro'     => "Le calcaire n'est pas qu'un dépôt blanc ; c'est un agent d'érosion invisible qui dégrade votre confort, votre santé et vos finances au quotidien.",
				'metaLabel' => 'Impact :',
				'cards'     => array(
					array( 'title' => 'Énergie & Coût', 'label' => 'Impact Financier', 'meta' => '+25% Facture', 'color' => 'amber', 'text' => "Le tartre isole vos résistances, forçant vos appareils à consommer massivement plus d'électricité pour chauffer l'eau.", 'image' => $img( 'compteur.avif', 'Compteur électrique' ) ),
					array( 'title' => 'Peau & Dermatite', 'label' => 'Soin Personnel', 'meta' => 'Irritations', 'color' => 'rose', 'text' => "L'eau dure assèche l'épiderme et peut aggraver l'eczéma. Retrouvez une peau soyeuse et des cheveux éclatants.", 'image' => $img( '2149561614.jpg', "Peau irritée par l'eau dure" ) ),
					array( 'title' => 'Électroménagers', 'label' => 'Protection Actifs', 'meta' => 'Vie /2', 'color' => 'emerald', 'text' => 'Réduisez drastiquement la fréquence de remplacement de votre chauffe-eau, lave-linge et lave-vaisselle.', 'image' => $img( '2148386945.jpg', 'Électroménagers' ) ),
					array( 'title' => 'Entretien Ménager', 'label' => 'Confort', 'meta' => 'Double effort', 'color' => 'cyan', 'text' => 'Dites adieu aux traces de tartre sur la robinetterie et aux voiles blanchâtres sur votre vaisselle étincelante.', 'image' => $img( '2147916568.jpg', 'Entretien ménager' ) ),
					array( 'title' => 'Textiles & Linge', 'label' => 'Linge Doux', 'meta' => 'Usure Précoce', 'color' => 'indigo', 'text' => 'Les fibres deviennent rêches et les couleurs ternissent. Protégez la douceur de vos vêtements préférés.', 'image' => $img( '2149117085.jpg', 'Linge' ) ),
					array( 'title' => 'Consommation', 'label' => 'Économie', 'meta' => 'Savon x2', 'color' => 'amber', 'text' => "L'eau dure nécessite jusqu'à 50% de détergents et savons en plus pour obtenir une mousse efficace.", 'image' => $img( '23981.jpg', 'Consommation de savon' ) ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'variant'     => 'feature',
				'label'       => "Guide d'expertise résidentielle",
				'title'       => "*L'expertise anticalcaire*\nadaptée à votre réseau domestique.",
				'intro'       => "Nos adoucisseurs d'eau résidentiels sont spécifiquement calibrés pour neutraliser la dureté de l'eau tout en préservant l'intégrité de vos installations. Une synergie parfaite entre **économie de ressources** et **confort absolu**.",
				'footerLabel' => 'Performance',
				'footerText'  => 'Certifiée CSA/NSF',
				'products'    => array(
					array( 'name' => "Adoucisseur d'eau de la série\nSentinelle", 'text' => "Votre priorité est d'éradiquer le calcaire avec une précision chirurgicale, sans complexité inutile.", 'features' => "Protection des électros\nFormat compact intelligent\nÉconomie de sel optimisée", 'image' => $sentinel, 'url' => $brochure['url'] ?? '/contact' ),
					array( 'name' => "Adoucisseur d'eau de la série\nSérénité", 'text' => "Vous cherchez l'eau parfaite pour la peau, les cheveux et la consommation, en éliminant aussi le chlore.", 'features' => "Hybride : Calcaire & Chlore\nDouceur dermatologique\nÉlimine odeurs et goûts", 'image' => $serenity, 'url' => '/contact', 'recommended' => true ),
					array( 'name' => "Adoucisseur d'eau de la série\nInfiniti", 'text' => 'Grandes familles ou besoins critiques : vous refusez toute interruption de douceur, 24h/24.', 'features' => "Double bouteille alternée\nEau douce non-stop\nPerformance industrielle", 'image' => $infiniti, 'url' => '/contact' ),
				),
			),
		),
		array(
			'bricareau/journey',
			array(
				'label' => 'Le parcours Bricareau',
				'title' => "Une transition fluide 360° vers une *eau douce d'exception.*",
				'intro' => "Le Parcours Bricareau : une expertise d'élite, depuis votre première analyse jusqu'à la douceur éternelle de votre eau.",
				'steps' => array(
					array( 'icon' => 'droplets', 'title' => 'Qualité supérieure', 'text' => "Offrez à votre corps le luxe qu'il mérite avec une eau soyeuse qui préserve l'hydratation naturelle de votre épiderme. Dès la première utilisation, vous ressentirez une différence notable : une peau moins irritée, des cheveux plus brillants et une sensation de bien-être pur à chaque douche quotidienne.", 'image' => $img( '2150084031.jpg', 'Eau douce' ) ),
					array( 'icon' => 'shield-check', 'title' => 'Protection totale', 'text' => "Le calcaire est l'ennemi invisible de votre maison, s'accumulant dans vos tuyaux et obstruant vos résistances. Nos solutions neutralisent les minéraux durs à la source, protégeant ainsi durablement votre chauffe-eau, votre lave-vaisselle et toute votre robinetterie contre la corrosion et les dépôts de tartre coûteux.", 'image' => $img( 'beautiful-shot-modern-house-kitchen.jpg', 'Cuisine moderne' ) ),
					array( 'icon' => 'shirt', 'title' => 'Linge plus doux', 'text' => 'Redécouvrez la texture originelle de vos textiles préférés sans avoir recours à des produits chimiques agressifs. En éliminant la dureté de l\'eau, les fibres de vos vêtements restent souples, les couleurs demeurent éclatantes plus longtemps et votre linge ressort de la machine avec une fraîcheur et une douceur incomparables.', 'image' => $img( '2151468669.jpg', 'Linge doux' ) ),
					array( 'icon' => 'circle-dollar-sign', 'title' => 'Économies garanties', 'text' => "L'investissement dans un adoucisseur se rentabilise rapidement grâce à une efficacité énergétique accrue de vos appareils de chauffage. En plus de réduire vos factures d'électricité, vous consommerez jusqu'à 50% de savon et de détergent en moins pour un résultat de nettoyage supérieur, tout en évitant des réparations de plomberie imprévues.", 'image' => $img( '9194.jpg', 'Cuisine' ) ),
				),
			),
		),
		array(
			'bricareau/comparison-table',
			array(
				'label'            => 'Analyse comparative',
				'title'            => "Identifiez la performance\noptimale pour votre foyer.",
				'headerAlign'      => 'center',
				'headerBar'        => false,
				'firstColumnLabel' => 'Critères techniques',
				'valueStyle'       => 'plain',
				'columns'          => array(
					array( 'name' => 'Série Sentinelle', 'image' => $sentinel, 'badge' => 'Précision Économique', 'color' => 'navy' ),
					array( 'name' => 'Série Sérénité', 'image' => $serenity, 'badge' => 'Hybride Ultime', 'color' => 'navy' ),
					array( 'name' => 'Série Infiniti', 'image' => $infiniti, 'badge' => 'Puissance 24h/24', 'color' => 'orange' ),
				),
				'rows'             => array(
					array( 'label' => 'Cible principale', 'values' => "Dureté (Calcaire)\nDureté + Chlore + Goût\nDureté (Haute Capacité)" ),
					array( 'label' => 'Technologie de Vanne', 'values' => "Électronique Volumétrique\nDouble Régulation Luxe\nAlternance Hydrométrique" ),
					array( 'label' => 'Média Filtrant', 'values' => "Résine Haute Capacité\nRésine + Charbon KDF\nRésine Premium X2" ),
					array( 'label' => 'Garantie Structurelle', 'values' => "10 ans\nÀ Vie (Limitée)\nÀ Vie (Limitée)" ),
					array( 'label' => 'Économie de Sel', 'values' => "Standard\nOptimisée (+30%)\nMaximale (Contrôle Continu)" ),
				),
			),
		),
		array(
			'bricareau/image-banner',
			array(
				'eyebrow' => 'Engagement Certifié',
				'title'   => "L'excellence Bricareau s'installe chez vous.",
				'text'    => 'Chaque installation est une signature de qualité. Nos techniciens assurent une meilleure mise en place de vos systèmes, garantissant performance et esthétique.',
				'image'   => $img( 'WaterSoftenerInstallation.jpg', "Installation professionnelle d'un adoucisseur d'eau Bricareau" ),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'framed' => false,
				'title'  => "_Une eau soyeuse._\nUn confort absolu.",
				'count'  => 5,
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
				'image'   => $img( '2147800429.jpg', "Analyse d'eau à domicile pour détecter le calcaire et le chlore" ),
			),
		),
		array(
			'bricareau/faq',
			array( 'items' => array_map( fn( $qa ) => array( 'question' => $qa[0], 'answer' => $qa[1] ), $faq ) ),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'   => 'Prenez le contrôle de votre eau',
				'title'   => "Libérez votre foyer\n*du calcaire.*",
				'text'    => "Une protection intégrale pour votre plomberie et vos électroménagers.\nActivez **la protection ultime** dès aujourd'hui.",
				'image'   => $img( 'Hard Water-Faucet.jpg', "Problématique d'eau dure sur la robinetterie" ),
				'avatars' => $avatars(),
			),
		),
		array(
			'bricareau/resource-cards',
			array(
				'items' => array(
					array( 'title' => 'Adoucisseur sans sel vs avec sel : la vérité technique', 'image' => $img( 'avantages conditionneurs sans sel.jpg', 'Conditionneur sans sel' ), 'url' => '/adoucisseur-sans-sel-vs-avec-sel-verite-technique' ),
					array( 'title' => 'Comment régler la dureté de votre adoucisseur ?', 'image' => $img( '2149186343.jpg', 'Réglage de la dureté' ), 'url' => '/comment-regler-durete-adoucisseur-eau' ),
					array( 'title' => "Adoucisseur d'eau et fosse septique : compatible ou non ?", 'image' => $img( 'Cover-Image.webp', 'Adoucisseur et fosse septique' ), 'url' => '/adoucisseur-deau-et-fosse-septique-mythes-et-realites' ),
				),
			),
		),
	),
);
