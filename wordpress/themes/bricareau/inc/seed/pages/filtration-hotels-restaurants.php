<?php
/**
 * Hotels and restaurants filtration — src/pages/FiltrationHotelsRestaurants.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'filtration-hotels-restaurants',
	'title'           => 'Filtration pour hôtels et restaurants',
	'seo_title'       => 'Filtration d\'eau pour la Restauration | Bricareau',
	'seo_description' => "Dans la restauration, l'eau est votre ingrédient principal et l'alliée silencieuse de vos équipements. De la perfection d'un espresso à l'éclat de votre verrerie, découvrez nos systèmes de filtration dédiés aux professionnels.",
	'menu_order'      => 41,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "*L'excellence de l'eau* au service de la gastronomie.",
				'text'        => "Dans la restauration, l'eau est votre ingrédient principal et l'alliée silencieuse de vos équipements. De la perfection d'un espresso à l'éclat de votre verrerie, découvrez nos systèmes de filtration dédiés aux professionnels.",
				'ctaText'     => 'PLANIFIER UNE CONSULTATION',
				'ctaUrl'      => '/contact-entreprises',
				'phoneButton' => true,
				'image'       => $img( '2151081881.jpg', "L'excellence de l'eau au service de la gastronomie" ),
			),
		),
		array(
			'bricareau/intro-split',
			array(
				'title'      => "*L'eau filtrée* n'est pas un détail, c'est le fondement de la cuisine de votre restaurant.",
				'text'       => "Un calcaire excessif détruit vos fours mixtes professionnels et ternit votre verrerie. Un chlore persistant altère subtilement le goût de votre café et de vos créations culinaires. Bricareau conçoit des systèmes de filtration sur mesure qui protègent vos investissements et subliment l'expérience de vos clients en salle.",
				'image'      => $img( '6633.jpg', "Buffet restaurant - adoucisseur d'eau pour restaurant" ),
				'imageStyle' => 'rounded',
				'ctaText'    => 'Contactez-nous',
				'ctaUrl'     => '/contact',
			),
		),
		array(
			'bricareau/image-gallery',
			array(
				'images' => array(
					$img( '121117.jpg', 'Verres et vaisselle éclatants' ),
					$img( '25380.jpg', "Chef cuisinier en préparation - adoucisseur d'eau pour restaurant" ),
					$img( '2151208276.jpg', 'Légumes vapeur' ),
				),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'variant' => 'media',
				'columns' => '3',
				'title'   => "Là où l'eau fait *toute la différence.*",
				'cards'   => array(
					array( 'title' => 'Café & infusions', 'text' => "Révélez la richesse aromatique de vos grains tout en neutralisant l'amertume liée aux impuretés de l'eau.", 'image' => $img( '411.jpg', "Machines à café et à thé - système d'eau hôtel" ) ),
					array( 'title' => 'Machines à expresso', 'text' => 'Garantissez une extraction parfaite et protégez vos précieuses chaudières contre la menace invisible du tartre.', 'image' => $img( '2148892882.jpg', "Équipement pour machine à expresso - système d'eau hôtel" ) ),
					array( 'title' => 'Boissons en fontaine', 'text' => 'Servez des sodas pétillants et rafraîchissants, totalement libérés des arrière-goûts de chlore ou de métaux.', 'image' => $img( '1730390356.jpg', "Boissons à la fontaine - système d'eau hôtel" ) ),
					array( 'title' => 'Machines à glaçons', 'text' => "Produisez des glaçons cristallins à fonte lente qui n'altèrent jamais la saveur de vos cocktails et breuvages.", 'image' => $img( '468.jpg', "Machines à glaçons - traitement d'eau entreprise" ) ),
					array( 'title' => "L'eau comme ingrédient", 'text' => 'Sublimez vos bouillons, soupes et cuissons avec une eau purifiée qui respecte les saveurs authentiques de vos mets.', 'image' => $img( '121171.jpg', 'Ingrédient Eau' ) ),
					array( 'title' => 'Fours & équipements à vapeur', 'text' => 'Prolongez drastiquement la durée de vie de vos fours combinés en bloquant la corrosion et la calcification à la source.', 'image' => $img( '121188.jpg', "Équipement à vapeur - adoucisseur d'eau pour restaurant" ) ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'variant'  => 'feature',
				'title'    => "Les solutions de filtration d'eau pour les *professionnels de la restauration.*",
				'products' => array(
					array( 'name' => "Filtres d'eau spécialisés", 'text' => 'Systèmes de filtration de précision pour vos machines à espresso et distributeurs de boissons. Révélez les arômes complexes de votre café et offrez des sodas constants.', 'features' => "Protection contre l'entartrage\nProfil aromatique sublimé\nMaintenance réduite de 80%", 'image' => $img( 'PURITY-C-Quell-ST-Advanced.webp', "Filtre Boissons et Café - filtration d'eau commerciale" ), 'url' => '/filtres-eau-machine-cafe' ),
					array( 'name' => "Adoucisseurs d'eau", 'text' => "Adoucisseurs d'eau commerciaux pour des verres étincelants dès la sortie du lave-vaisselle, sans essuyage manuel. Réduisez considérablement vos coûts de détergents.", 'features' => "Zéro trace ni dépôt blanc\n-30% de produits chimiques\nGain de temps en plonge", 'image' => $img( 'Alternating Water Softener.png', "Adoucisseur Commercial - système d'eau hôtel" ), 'url' => '/adoucisseurs-eau-commerciaux' ),
					array( 'name' => "Systèmes d'osmose inverse", 'text' => "Systèmes d'osmose inverse et adoucisseurs pour vos fours mixtes et équipements à vapeur. Évitez les pannes coûteuses causées par la corrosion et le tartre.", 'features' => "Fonctionnement ininterrompu\nCuisson à la vapeur parfaite\nEau purifiée pour les sauces", 'image' => $img( '1218.png', 'Filtre Cuisson et Vapeur' ), 'url' => '/contact-entreprises' ),
				),
			),
		),
		array(
			'bricareau/accordion-split',
			array(
				'label' => 'Rendement sur Investissement',
				'title' => 'Transformez une dépense en *avantage compétitif.*',
				'intro' => "Au-delà de la qualité en tasse et dans l'assiette, nos systèmes de traitement d'eau s'autofinancent rapidement en réduisant drastiquement vos coûts opérationnels en cuisine.",
				'items' => array(
					array( 'title' => "Élimination des achats d'eau embouteillée", 'text' => 'Servez votre propre eau filtrée et gazéifiée en salle, réduisez vos factures d\'approvisionnement et proposez une boisson locale et éco-responsable.', 'image' => $img( '2148018784.jpg', 'Avantage compétitif Bricareau 1' ) ),
					array( 'title' => 'Baisse drastique des frais de maintenance', 'text' => 'Une eau sans calcaire prévient les pannes des machines à café, lave-vaisselles et chaudières, vous faisant économiser des milliers de dollars en réparations.', 'image' => $img( '1219.jpg', 'Avantage compétitif Bricareau 2' ) ),
					array( 'title' => "Sublimation du goût et de l'expérience client", 'text' => "L'eau représentant 98% de votre café, une filtration optimale révèle des arômes complexes, garantit des glaçons cristallins purs et fidélise votre clientèle par un goût constant.", 'image' => $img( '1220.jpg', 'Avantage compétitif Bricareau 3' ) ),
					array( 'title' => "Économies massives sur les produits d'entretien", 'text' => "Une eau adoucie décuple l'efficacité des détergents. Réduisez vos doses de produits chimiques jusqu'à 30% tout en obtenant une verrerie impeccable sans essuyage.", 'image' => $img( '18036672_SIE_2720_1530_21_04_30_SIE_CRM_Dishwasher_Hand_Taking_Out_Wine_Glass_Basket_Motiv_11_0017.webp', 'Avantage compétitif Bricareau 4' ) ),
				),
			),
		),
		array(
			'bricareau/statement',
			array(
				'theme'    => 'dark',
				'title'    => "\"L'excellence d'un établissement se mesure aux détails invisibles. Une eau d'une pureté absolue est le secret qui sublime nos saveurs tout en protégeant nos équipements les plus coûteux.\"",
				'text'     => "C. Louis, Chef Exécutif d'une chaîne de restaurants",
				'textSize' => 'medium',
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant' => 'numbered',
				'title'   => 'Notre démarche sur-mesure pour les *professionnels de la restauration.*',
				'rows'    => array(
					array( 'title' => "Analyse de l'eau", 'text' => 'Tout commence par un audit complet de votre établissement. Nous prélevons des échantillons et analysons la dureté, le chlore, les TDS (Total Dissolved Solids) et la pression de votre réseau. Ce diagnostic précis nous permet de comprendre exactement ce dont votre équipement a besoin.', 'image' => $img( '2148581890.jpg', "Analyse de l'eau" ) ),
					array( 'title' => 'Conception sur mesure', 'text' => "Sur la base de notre analyse, notre équipe technique conçoit une architecture de filtration adaptée à votre volume de service. Que vous ayez besoin d'un simple filtre pour votre machine à espresso ou d'un système d'osmose inverse centralisé pour toute la cuisine.", 'image' => $img( 'PID.webp', "Schéma système - filtration d'eau commerciale" ) ),
					array( 'title' => 'Installation & Service', 'text' => "L'installation est réalisée par nos techniciens certifiés en dehors de vos heures de service pour ne pas perturber votre activité. Ensuite, notre programme d'entretien préventif garantit que vos filtres sont remplacés à temps, sans que vous n'ayez jamais à y penser.", 'image' => $img( '1212.jpg', "Installation - système d'eau hôtel" ) ),
				),
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'     => "L'INGRÉDIENT SECRET DE VOTRE RÉUSSITE",
				'title'     => "Faites de l'eau pure le pilier de votre gastronomie.",
				'text'      => "Sublimez le goût de vos créations culinaires tout en protégeant durablement vos fours mixtes et équipements coûteux. Activez une filtration sur mesure dès aujourd'hui.",
				'image'     => $img( '1996.jpg', "Problématique d'eau dure sur la robinetterie - Solution Bricareau" ),
				'phoneText' => 'Parlez à un expert',
				'ctaText'   => 'Planifiez une consultation',
				'ctaUrl'    => '/consultation',
			),
		),
		array(
			'bricareau/resource-cards',
			array(
				'title'    => 'Nos guides et ressources connexes.',
				'linkText' => "Lire l'article",
				'items'    => array(
					array( 'title' => "L'impact de l'eau sur l'extraction de votre espresso", 'image' => $img( 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop', "Guide Café - filtration d'eau commerciale" ), 'url' => '/pourquoi-une-eau-pure-change-le-gout-du-cafe' ),
					array( 'title' => 'Comment sauver vos fours mixtes de l\'entartrage', 'image' => $img( 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=600&auto=format&fit=crop', 'Guide Cuisson' ), 'url' => '/blog' ),
					array( 'title' => 'Obtenir une verrerie sans trace dès la sortie du lave-vaisselle', 'image' => $img( '121117.jpg', "Guide Plonge - filtration d'eau commerciale" ), 'url' => '/blog' ),
				),
			),
		),
	),
);
