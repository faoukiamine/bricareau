<?php
/**
 * Commercial softeners — src/pages/AdoucisseurEauCommercial.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

$solve = 'Expertise gratuite pour cette solution';

return array(
	'slug'            => 'adoucisseurs-eau-commerciaux',
	'title'           => "Adoucisseurs d'eau commerciaux",
	'seo_title'       => 'Adoucisseur d\'eau commercial | Solutions pour Entreprises | Bricareau',
	'seo_description' => 'Optimisez la performance de votre hôtel ou restaurant avec nos adoucisseurs d\'eau commerciaux au Québec. Protection des équipements pro et confort client supérieur. Expertise Bricareau.',
	'menu_order'      => 45,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "*L'excellence de l'eau douce,* la signature de prestige des Hôtels & Restaurants.",
				'text'        => "Sublimez votre service et protégez vos équipements professionnels grâce à nos adoucisseurs d'eau commerciaux haut de gamme. Notre expertise en traitement de l'eau et protection anticalcaire est spécialement conçue pour les standards des hôtels et des restaurants, garantissant une expérience client inégalée.",
				'ctaText'     => 'Planifiez une consultation gratuite',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( '640320.jpg', "L'excellence de l'eau douce pour hôtels et restaurants" ),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'variant'       => 'impact',
				'label'         => 'IMPACT OPÉRATIONNEL',
				'title'         => "Le *calcaire*, l'ennemi silencieux de votre art de recevoir.",
				'intro'         => "Plus qu'un simple dépôt, le calcaire est un ennemi silencieux de votre rentabilité et de votre image de marque. Il altère la brillance de votre service et réduit la durée de vie de vos équipements critiques.",
				'metaLabel'     => 'Impact :',
				'solutionLabel' => 'Résoudre ce problème',
				'linkText'      => $solve,
				'defaultUrl'    => '/consultation',
				'cards'         => array(
					array( 'title' => 'Équipements Pro', 'label' => 'Maintenance', 'meta' => 'Pannes Critiques', 'color' => 'amber', 'image' => $img( '2149646223.jpg', 'Équipements Pro' ), 'text' => 'Protégez vos fours combinés, lave-vaisselle industriels et machines à glace des pannes coûteuses liées à l\'accumulation de calcaire.' ),
					array( 'title' => 'Art de la Table', 'label' => 'Image de Marque', 'meta' => 'Verrerie ternie', 'color' => 'rose', 'image' => $img( '7655.jpg', 'Art de la Table' ), 'text' => 'Dites adieu aux traces blanches sur les verres et les couverts. Garantissez une présentation étincelante sans polissage manuel excessif.' ),
					array( 'title' => 'Linge de Chambre', 'label' => 'Confort Client', 'meta' => 'Fibres Rêches', 'color' => 'emerald', 'image' => $img( 'd3f1.jpg', 'Linge de Chambre' ), 'text' => "Préservez la douceur des draps et le gonflant des serviettes. Réduisez l'usure des fibres causée par les minéraux agressifs." ),
					array( 'title' => 'Consommables Pro', 'label' => 'Optimisation', 'meta' => '+40% Budget', 'color' => 'cyan', 'image' => $img( '2149345543.jpg', 'Consommables Pro' ), 'text' => "L'eau dure neutralise l'efficacité de vos détergents professionnels, vous obligeant à une surconsommation de produits de nettoyage." ),
					array( 'title' => 'Facture Énergétique', 'label' => 'Efficacité', 'meta' => '+15% de Coûts', 'color' => 'indigo', 'image' => $img( 'detartrage-chauffe-eau-electrique.jpg', 'Facture Énergétique' ), 'text' => 'Le tartre agit comme un isolant thermique sur vos résistances. Une fine couche suffit pour faire grimper vos factures de gaz et d\'électricité.' ),
					array( 'title' => 'Service Barista', 'label' => 'Art Culinaire', 'meta' => 'Arômes Altérés', 'color' => 'amber', 'image' => $img( 'jura-x10-dark-inox.jpg', 'Service Barista' ), 'text' => 'Le café est composé à 98% d\'eau. Une eau dure dénature les arômes précieux et obstrue les composants internes de vos machines expresso.' ),
				),
			),
		),
		array(
			'bricareau/accordion-split',
			array(
				'label' => "L'INGÉNIERIE DU BIEN-ÊTRE",
				'title' => "Avantages de *l'eau douce*",
				'image' => $img( '2148003850.jpg', "Bienfaits de l'eau adoucie sur la santé et l'efficacité opérationnelle" ),
				'items' => array(
					array( 'title' => 'Confort & Hospitalité', 'text' => "Offrez à vos clients une expérience sensorielle digne d'un spa. L'eau douce préserve l'hydratation de la peau et l'éclat des cheveux sous la douche, renforçant immédiatement le sentiment de bien-être et de luxe au sein de vos chambres." ),
					array( 'title' => 'Protection des Équipements Pro', 'text' => "Le calcaire est l'ennemi invisible de votre rentabilité, s'accumulant dans vos chauffe-eau industriels, lave-vaisselle et fours à vapeur. Nos solutions neutralisent le tartre à la source, prolongeant la vie de vos actifs critiques et évitant les arrêts de service imprévus." ),
					array( 'title' => 'Art de la Table Impeccable', 'text' => "Garantissez une verrerie et une argenterie étincelantes sans effort. En éliminant la dureté de l'eau, vous supprimez les traces blanches tenaces, réduisez le temps de polissage manuel et éblouissez vos convives dès le premier coup d'œil." ),
					array( 'title' => 'Rentabilité & Durabilité', 'text' => "L'investissement se rentabilise rapidement par une efficacité énergétique accrue et une réduction massive (jusqu'à 40%) de la consommation de détergents et produits de nettoyage. Un choix à la fois économique pour vos finances et écologique pour la planète." ),
				),
			),
		),
		array(
			'bricareau/expert-split',
			array(
				'title'      => "*L'expertise anticalcaire* dédiée aux Hôtels & Restaurants.",
				'text'       => "Nos adoucisseurs d'eau commerciaux sont spécifiquement calibrés pour neutraliser la dureté tout en préservant l'intégrité de vos installations professionnelles. Une synergie parfaite entre économie de ressources et performance opérationnelle.\n\nLe confort absolu pour vos hôtes, l’excellence Bricareau pour votre hôtel. Chaque installation est une signature de qualité. Nos techniciens optimisent le déploiement de vos systèmes pour garantir un rendement maximal de vos équipements et une qualité d'eau irréprochable au quotidien.",
				'ctaText'    => 'Demandez une consultation gratuite.',
				'ctaUrl'     => '/consultation',
				'image'      => $img( '4211.jpg', "Installation professionnelle d'un adoucisseur d'eau Bricareau" ),
				'imageSide'  => 'right',
				'badge'      => 'stat',
				'badgeValue' => 'Engagement',
				'badgeText'  => 'Certifié',
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array( 'title' => "Une eau soyeuse.\n*Un confort absolu.*" ),
		),
		array(
			'bricareau/image-cta',
			array(
				'overlay' => 'dark',
				'eyebrow' => "Contrôle de la Qualité D'EAU",
				'title'   => 'Eau *calcaire* ? Risque sanitaire ? Prenez les devants.',
				'text'    => "En restauration et en hôtellerie, chaque détail compte. Assurez la conformité de votre établissement, protégez vos équipements de cuisine et de blanchisserie, et offrez une eau irréprochable à vos hôtes grâce à nos analyses d'eau certifiées.",
				'ctaText' => "Demandez une analyse d'eau",
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( '2151812357.jpg', "Analyse d'eau professionnelle pour détecter le calcaire et le chlore" ),
			),
		),
		array(
			'bricareau/faq',
			array(
				'visibleCount' => 5,
				'items'        => array(
					array( 'question' => 'Pourquoi un adoucisseur est-il indispensable pour un hôtel ou un restaurant ?', 'answer' => "Au-delà du confort client, c'est une nécessité opérationnelle. L'eau dure entartre vos machines à café, fours vapeur et lave-vaisselle, augmentant vos coûts de maintenance et raccourcissant la durée de vie de vos équipements professionnels coûteux." ),
					array( 'question' => 'Quelles économies réelles peut-on espérer ?', 'answer' => "Un établissement peut réduire sa consommation de détergents et produits de nettoyage jusqu'à 40%. De plus, l'absence de tartre dans les chauffe-eau permet une économie d'énergie de 15% à 25%." ),
					array( 'question' => "L'installation perturbe-t-elle le service ?", 'answer' => "Nos équipes planifient l'installation durant vos heures creuses pour minimiser l'impact. Une fois installé, le système fonctionne de manière autonome avec une maintenance minimale." ),
					array( 'question' => "L'adoucisseur affecte-t-il la pression d'eau pour les douches ?", 'answer' => "Absolument pas. Nos modèles commerciaux 'High Flow' sont dimensionnés pour répondre aux pics de demande, garantissant une pression optimale même en pleine occupation." ),
					array( 'question' => 'Est-ce compatible avec les normes de santé et sécurité ?', 'answer' => "Oui, nos systèmes répondent aux normes les plus strictes de l'industrie. L'eau adoucie facilite également le respect des standards d'hygiène en éliminant les nids à bactéries que constitue le tartre." ),
					array( 'question' => 'Quelle est la durée de vie de vos systèmes ?', 'answer' => 'Conçus pour un usage intensif, nos adoucisseurs commerciaux ont une durée de vie moyenne de 15 à 20 ans avec un entretien régulier.' ),
				),
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'     => 'PRENEZ LE CONTRÔLE DE VOTRE EAU',
				'title'     => "Sublimez l'expérience de vos hôtes par la signature de *l'eau douce*.",
				'text'      => 'De la brillance irréprochable de votre verrerie à la douceur incomparable de votre linge, élevez chaque détail de votre accueil. Préservez durablement vos équipements critiques (fours vapeur, machines à café, chaudières) tout en garantissant un confort 5 étoiles.',
				'image'     => $img( 'close-up-handsom-man-taking-bath.jpg', "L'excellence de la vaisselle étincelante en hôtellerie grâce à l'eau douce Bricareau" ),
				'phoneText' => 'Parlez à un expert',
				'ctaText'   => 'Planifiez une consultation',
				'ctaUrl'    => '/consultation',
			),
		),
		array(
			'bricareau/resource-cards',
			array(
				'title'    => 'Ressources',
				'linkText' => 'Lire',
				'items'    => array(
					array( 'title' => 'Adoucisseur sans sel vs avec sel : la vérité technique', 'image' => $img( 'avantages conditionneurs sans sel.jpg', 'Adoucisseur sans sel vs avec sel - Expertise Bricareau' ), 'url' => '/adoucisseur-sans-sel-vs-avec-sel-verite-technique' ),
					array( 'title' => 'Comment régler la dureté de votre adoucisseur ?', 'image' => $img( '2149186343.jpg', 'Comment régler la dureté de votre adoucisseur ? - Expertise Bricareau' ), 'url' => '/comment-regler-durete-adoucisseur-eau' ),
					array( 'title' => "Adoucisseur d'eau et fosse septique : compatible ou non ?", 'image' => $img( 'Cover-Image.webp', "Adoucisseur d'eau et fosse septique - Expertise Bricareau" ), 'url' => '/adoucisseur-deau-et-fosse-septique-mythes-et-realites' ),
				),
			),
		),
	),
);
