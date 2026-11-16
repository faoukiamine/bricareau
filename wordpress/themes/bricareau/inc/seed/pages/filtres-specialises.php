<?php
/**
 * Filtres d'eau spécialisés — src/pages/Systemes-de-filtration-deau-specialises.tsx.
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

$filter   = $img( "Filtres d'eau spécialisés.webp", "Filtre d'eau spécialisé Bricareau" );
$softener = $img( "Adoucisseurs d'eau.webp", "Adoucisseur d'eau Bricareau" );
$symptom  = "Ce symptôme affecte non seulement le goût de votre eau, mais peut également endommager vos équipements sur le long terme.";

$faq = array(
	array( "Comment éliminer l'odeur d'œufs pourris dans mon eau ?", "Cette odeur est causée par le gaz sulfure d'hydrogène. Notre système Outdoor HE ou nos filtres à air à oxydation sont conçus pour neutraliser ce gaz sans produits chimiques, rendant votre eau fraîche et inodore." ),
	array( 'Mon eau laisse des taches de rouille, quel filtre choisir ?', 'Les taches orangées indiquent la présence de fer. Le système Bricareau Iron-Cleer est notre solution la plus performante. Il oxyde et capture le fer ferrique et ferreux, protégeant ainsi vos éviers et votre linge.' ),
	array( "L'arsenic dans l'eau est-il dangereux ?", "Oui, l'arsenic est un contaminant inodore et incolore lié à des problèmes de santé graves. Notre système Select Plus utilise un média spécifique certifié pour réduire l'arsenic à des niveaux sécuritaires selon les normes de santé publique." ),
	array( 'Pourquoi ma robinetterie de cuivre devient-elle verte ?', "C'est le signe d'une eau acide (pH bas) qui ronge votre tuyauterie. La série Medallist est équipée d'un neutraliseur qui remonte le pH de l'eau, protégeant ainsi l'intégrité de votre plomberie et évitant les fuites." ),
	array( "Qu'est-ce que le tanin et comment le traiter ?", "Les tanins proviennent de matières organiques et donnent à l'eau une couleur jaunâtre ou brunâtre (eau de thé). Le système Select Plus Connect utilise une résine d'échange d'anions spécifique pour éliminer cette coloration et clarifier l'eau." ),
	array( "Mon eau a un goût de chlore, même si j'ai un puits ?", "Si vous utilisez un système de chloration pour la désinfection, l'excès de chlore peut être désagréable. Notre système HE Municipal ou nos filtres au charbon actif éliminent le goût et l'odeur de chlore pour une eau plus saine." ),
	array( 'Quelle est la différence entre le fer et le manganèse ?', 'Le fer cause des taches rouille, tandis que le manganèse produit des taches noires et des dépôts huileux. Notre série Gold Series est spécialement conçue pour traiter ces deux métaux lourds simultanément.' ),
	array( 'Le filtre à sédiments est-il suffisant pour une eau trouble ?', 'Un filtre à sédiments retire les particules physiques (sable, terre). Cependant, si la turbidité est causée par des particules microscopiques, un filtre multimédia ou un système Bricareau HE Connect sera plus efficace.' ),
	array( "Les filtres spécialisés nécessitent-ils beaucoup d'entretien ?", 'La plupart de nos systèmes sont entièrement automatiques et effectuent des cycles de nettoyage périodiques. Un entretien annuel professionnel est recommandé pour optimiser les performances et la longévité.' ),
	array( 'Quelle est la durée de vie des médias filtrants ?', 'Selon la qualité de votre eau et votre consommation, les médias filtrants spécialisés (comme pour le fer ou le soufre) durent généralement entre 5 et 10 ans avant de nécessiter un remplacement.' ),
	array( 'Un seul système peut-il régler tous mes problèmes ?', 'Certains systèmes mixtes peuvent traiter plusieurs minéraux, mais pour des cas complexes (fer + arsenic + acide), une combinaison de deux unités spécialisées est souvent la solution la plus durable et efficace.' ),
	array( "Puis-je boire l'eau après la filtration du fer ?", "Oui, la filtration du fer améliore non seulement l'aspect esthétique de l'eau mais aussi son goût. Pour une pureté absolue, nous recommandons souvent d'ajouter un système d'osmose inverse au point de consommation." ),
	array( 'Comment savoir quel système convient à mon puits ?', "Une analyse d'eau complète est la première étape essentielle. Elle nous permet de mesurer précisément les niveaux de chaque contaminant et de configurer le système Bricareau parfaitement adapté à vos besoins." ),
	array( "Le système de filtration affecte-t-il la pression d'eau ?", 'Nos systèmes sont dimensionnés pour maintenir un débit optimal. Grâce à nos vannes de contrôle haute performance, la perte de pression est négligeable même lors d\'utilisations simultanées dans la maison.' ),
	array( 'Les systèmes Bricareau sont-ils garantis ?', "Absolument. Bricareau offre l'une des meilleures garanties de l'industrie sur les réservoirs, les vannes et l'électronique, vous assurant une tranquillité d'esprit pour de nombreuses années." ),
);

return array(
	'slug'             => 'systemes-de-filtration-d-eau-specialises-pour-toute-la-maison',
	'title'            => "Systèmes de filtration d'eau spécialisés",
	'breadcrumb_label' => "Filtres d'eau spécialisés",
	'seo_title'        => "Filtre d'Eau de Puits Québec | Fer, Soufre et Manganèse | Bricareau",
	'seo_description' => "Expertise québécoise en filtration d'eau de puits. Éliminez le fer, le soufre et le manganèse avec nos systèmes spécialisés. Analyse d'eau gratuite à domicile.",
	'menu_order'       => 32,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "Protégez votre santé\navec une filtration d'eau *d'excellence.*",
				'text'        => 'Ne laissez plus les contaminants couler de vos robinets. Nos systèmes de filtration d\'eau avancés constituent un bouclier durable pour votre maison, vous garantissant une eau d\'une pureté irréprochable pour toute votre famille au Canada.',
				'ctaText'     => 'Planifiez une consultation gratuite',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( '2149890905.jpg', "Filtration d'eau" ),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'anchor'     => 'problemes-eau',
				'variant'    => 'problem',
				'columns'    => '4',
				'label'      => 'Diagnostic de Pureté',
				'title'      => "Identifier l'invisible :\nPourquoi *filtrer votre eau ?*",
				'intro'      => "L'eau municipale traverse des kilomètres de tuyauteries vétustes avant d'arriver chez vous. Chaque verre peut contenir des traces de l'imparfait.",
				'defaultUrl' => '#specialized-filters',
				'cards'      => array(
					array( 'title' => 'Réseaux Vétustes', 'label' => 'Infrastructure', 'icon' => 'wrench', 'color' => 'amber', 'text' => 'Des particules de rouille et de sédiments provenant de tuyauteries municipales centenaires se déposent dans vos verres.', 'image' => $img( 'Old Pipes.jpg', 'Vieilles tuyauteries' ) ),
					array( 'title' => 'Santé & Nouveau-nés', 'label' => 'Sécurité Totale', 'icon' => 'shield-check', 'color' => 'pink', 'text' => 'Traces de plomb, micro-plastiques et hormones. Protégez les systèmes immunitaires fragiles de votre famille.', 'image' => $img( '47A0F39600000578-5222035-image-a-1_1514911887749.jpg', 'Nouveau-né' ) ),
					array( 'title' => 'Goût de Chlore', 'label' => 'Confort Gustatif', 'icon' => 'glass-water', 'color' => 'blue', 'text' => 'Le chlore est nécessaire pour désinfecter, mais il altère le goût de vos boissons et dessèche votre peau sous la douche.', 'image' => $img( 'water-taste.jpg', "Goût de l'eau" ) ),
					array( 'title' => "L'impact Plastique", 'label' => 'Zéro Déchet', 'icon' => 'recycle', 'color' => 'emerald', 'text' => "Éliminez définitivement l'achat de 2000+ bouteilles de plastique par an. Une victoire écologique et financière.", 'image' => $img( '20051.jpg', 'Bouteilles de plastique' ) ),
				),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'variant'       => 'diagnostic',
				'label'         => 'Diagnostic automatique',
				'title'         => "Quel *problème d'eau*\nvivez-vous au quotidien ?",
				'metaLabel'     => 'Cause identifiée :',
				'solutionLabel' => 'Solution Bricareau',
				'cards'         => array(
					array( 'title' => 'Sable & Sédiments', 'meta' => 'Eaux turbides', 'solution' => 'Vortex Filtration', 'text' => $symptom, 'image' => $img( 'Turbide-Water.webp', 'Eau turbide' ) ),
					array( 'title' => 'Taches de Rouille', 'meta' => 'Excès de fer ferrique/ferreux', 'solution' => 'Iron Shield', 'text' => $symptom, 'image' => $img( '5a4674e7-575d-4cd9-b1f2-32522f8a7072.jpg', 'Taches de rouille' ) ),
					array( 'title' => 'Eau Acide (pH bas)', 'meta' => 'Corrosion du cuivre', 'solution' => 'Zen-pH Neutralizer', 'text' => $symptom, 'image' => $img( 'Corrosive-Water.webp', 'Eau corrosive' ) ),
					array( 'title' => "Odeur d'œufs pourris", 'meta' => "Gaz sulfure d'hydrogène", 'solution' => 'Sulphur Shield', 'text' => $symptom, 'image' => $img( 'Water_Smells_Like_Rotten_Eggs_1400x.webp', "Odeur d'œufs pourris" ) ),
					array( 'title' => 'Taches Noires', 'meta' => 'Présence de Manganèse', 'solution' => 'Oxy-pure Series', 'text' => $symptom, 'image' => $img( '1255.webp', 'Taches noires' ) ),
					array( 'title' => 'Eau de thé / Colorée', 'meta' => 'Tanins organiques', 'solution' => 'Tann-Ex System', 'text' => $symptom, 'image' => $img( 'problemes-deau-tanin.jpg', 'Eau colorée par les tanins' ) ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'       => 'specialized-filters',
				'variant'      => 'simple',
				'background'   => 'light',
				'headerAlign'  => 'left',
				'headerBar'    => true,
				'labelStyle'   => 'pill',
				'title'        => "_Nos filtres d'eau_\nspécialisés",
				'intro'        => "Découvrez notre gamme complète de filtres spécialisés, conçus pour répondre aux défis uniques du réseau d'eau municipale et des puits privés artésiens ou de surface. Que vous fassiez face à des taches de fer tenaces, des odeurs de soufre incommodantes, une eau acide corrosive ou la présence de contaminants invisibles comme l'arsenic, nos systèmes offrent une solution ciblée et performante. Chaque unité est dotée d'une technologie de pointe pour assurer une filtration maximale tout en préservant l'intégrité de votre plomberie et de vos appareils électroménagers. En investissant dans l'une de nos solutions Vortex, Iron Shield, Zen-pH, ou autres, vous choisissez une tranquillité d'esprit durable et une qualité d'eau irréprochable pour toute votre famille. Nos experts vous accompagnent dans le diagnostic et l'installation pour garantir que chaque goutte d'eau qui coule de votre robinet soit pure, sûre et limpide.",
				'products'     => array(
					array( 'name' => "Filtre d'eau Vortex", 'text' => "Spécialisé pour l'eau contenant des sédiments.", 'image' => $filter, 'url' => '/contact' ),
					array( 'name' => "Filtre d'eau Zen-pH", 'text' => "Spécialisé pour neutraliser l'eau acide.", 'image' => $filter, 'url' => '/contact' ),
					array( 'name' => "Filtre d'eau ChlorStop", 'text' => "Spécialisé pour l'eau contenant du chlore.", 'image' => $filter, 'url' => '/contact' ),
					array( 'name' => "Filtre d'eau Iron Shield", 'text' => "Spécialisé pour l'eau contenant du fer.", 'image' => $filter, 'url' => '/contact' ),
					array( 'name' => "Filtre d'eau Oxy-pure", 'text' => "Spécialisé pour l'eau contenant du fer et du manganèse.", 'image' => $filter, 'url' => '/contact' ),
					array( 'name' => "Filtre d'eau Sulphur Shield", 'text' => "Spécialisé pour l'eau contenant du sulfure d'hydrogène.", 'image' => $filter, 'url' => '/contact' ),
					array( 'name' => "Filtre d'eau Zéro-As", 'text' => "Spécialisé pour l'eau contenant de l'arsenic.", 'image' => $filter, 'url' => '/contact' ),
					array( 'name' => "Filtre d'eau Tann-Ex", 'text' => "Spécialisé pour l'eau contenant du tanin.", 'image' => $softener, 'url' => '/contact' ),
				),
				'bannerTitle'  => 'Vous ne savez pas quel filtre choisir ?',
				'bannerText'   => "Laissez nos experts d'eau faire un diagnostic de votre eau gratuitement.",
				'bannerButton' => 'Démarrer le diagnostic gratuit',
				'bannerUrl'    => '/diagnostic',
			),
		),
		array(
			'bricareau/before-after',
			array(
				'label'      => 'Résultats concrets',
				'labelStyle' => 'pill-soft',
				'title'      => "_Avant / Après :_\nLa Transformation Bricareau",
				'intro'      => "Ne vous contentez pas de nous croire sur parole. Visualisez l'impact immédiat de nos systèmes sur la qualité, la clarté et la sécurité de votre eau de puits.",
				'ctaText'    => 'Obtenir ma solution sur mesure',
				'ctaUrl'     => '/consultation',
				'items'      => array(
					array( 'code' => 'Fe', 'color' => 'orange', 'title' => 'Fer & Manganèse', 'subtitle' => 'Élimination des taches et du goût métallique', 'before' => $img( 'Cuvette de toilette avec taches de fer.png', 'Eau de puits ferreuse avant traitement' ), 'beforeCaption' => 'Eau ferreuse et dépôts de rouille', 'after' => $img( 'Cuvette de toilette sans taches de fer.jpg', 'Eau pure après traitement Bricareau' ), 'afterCaption' => 'Éclat retrouvé, porcelaine comme neuve !' ),
					array( 'code' => 'H2O', 'color' => 'blue', 'title' => 'Turbidité & Algues', 'subtitle' => 'Filtration multi-niveaux pour une eau limpide', 'before' => $img( 'Turbide-Water.webp', 'Eau de puits trouble avant filtration' ), 'beforeCaption' => 'Eau trouble, particules en suspension', 'after' => $img( 'Eau cristalline.jpg', 'Eau pure Bricareau' ), 'afterCaption' => 'Eau 100% limpide et inodore' ),
				),
			),
		),
		array(
			'bricareau/card-stack',
			array(
				'label' => "L'excellence Bricareau",
				'title' => "Pourquoi choisir nos\nsystèmes de filtration d'eau ?",
				'intro' => 'Plus qu\'un simple système de filtration, c\'est une protection avancée pour votre santé et un confort durable pour toute votre famille.',
				'items' => array(
					array( 'title' => 'Zéro odeur', 'text' => "Dites adieu aux odeurs d'œufs pourris (soufre) et au goût de chlore pour une eau fraîche.", 'image' => $img( 'reasons-to-drink-more-water.jpg', 'Eau sans odeur' ) ),
					array( 'title' => 'Protection totale', 'text' => 'Empêchez le fer et les minéraux corrosifs de tacher vos éviers et de détruire votre plomberie.', 'image' => $img( 'premium_bathroom_protection_1774493901305.png', 'Salle de bain protégée' ) ),
					array( 'title' => 'Eau cristalline', 'text' => "Éliminez les sédiments et la turbidité pour une eau d'une clarté professionnelle partout chez vous.", 'image' => $img( '5846952.jpg', 'Eau cristalline' ) ),
					array( 'title' => 'Confort durable', 'text' => 'Savourez un bien-être quotidien inégalé grâce à une eau exceptionnelle.', 'image' => $img( '71luIOvIQuL._AC_SL1500_.jpg', 'Confort' ) ),
				),
			),
		),
		array(
			'bricareau/comparison-table',
			array(
				'background'       => 'light',
				'title'            => "_Comparez nos filtres d'eau_\nspécialisés",
				'firstColumnLabel' => 'Modèles',
				'columns'          => array(
					array( 'name' => 'Vortex' ),
					array( 'name' => 'Zen-pH' ),
					array( 'name' => 'ChlorStop' ),
					array( 'name' => 'Iron Shield', 'badge' => 'Populaire', 'color' => 'blue' ),
					array( 'name' => 'Oxy-pure' ),
					array( 'name' => 'Sulphur Shield' ),
					array( 'name' => 'Zéro-As' ),
					array( 'name' => 'Tann-Ex' ),
					array( 'name' => 'Sérénité Pure', 'badge' => 'Premium', 'color' => 'blue' ),
				),
				'rows'             => array(
					array( 'label' => 'Élimination du Fer (Taches rouille)', 'values' => "non\nnon\nnon\nMaximale\nMaximale\nPartielle\nnon\nnon\nTotale" ),
					array( 'label' => 'Odeur de Soufre (Œufs pourris)', 'values' => "non\nnon\nnon\nMoyenne\nMoyenne\nMaximale\nnon\nnon\nPartielle" ),
					array( 'label' => 'Manganèse (Taches noires)', 'values' => "non\nnon\nnon\nPartielle\nMaximale\nPartielle\nnon\nnon\nTotale" ),
					array( 'label' => 'Acidité (Correction pH / Eau bleue)', 'values' => "non\nMaximale\nnon\nnon\nnon\nnon\nnon\nnon\nnon" ),
					array( 'label' => 'Sédiments, Sable & Turbidité', 'values' => "Totale\nPartielle\nPartielle\nPartielle\nPartielle\nPartielle\nPartielle\nPartielle\nTotale" ),
					array( 'label' => 'Arsenic & Métaux Lourds', 'values' => "non\nnon\nnon\nnon\nnon\nnon\nMaximale\nnon\nTotale" ),
					array( 'label' => 'Tanins & Coloration (Eau de thé)', 'values' => "non\nnon\nnon\nnon\nnon\nnon\nnon\nMaximale\nPartielle" ),
					array( 'label' => 'Goût & Odeur de Chlore', 'values' => "non\nnon\nMaximale\nnon\nnon\nnon\nnon\nnon\nTotale" ),
					array( 'label' => 'Entretien / Maintenance', 'values' => "Minimal\nMoyen\nBas\nBas\nMoyen\nBas\nMoyen\nMoyen\nÉlevé" ),
				),
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'layout'  => 'banner',
				'overlay' => 'blue',
				'eyebrow' => "Contrôle de la qualité d'eau",
				'title'   => "_L'excellence commence_\n*par une eau parfaite.*",
				'text'    => "Le luxe, c'est de ne pas avoir à se soucier de la qualité de ce que l'on consomme. Offrez-vous la sérénité d'une eau analysée par des experts, pour une maison où tout brille, sans effort et sans compromis.",
				'ctaText' => "Demandez une analyse d'eau",
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( '342800.jpg', "Analyse d'eau de puits en laboratoire" ),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'framed' => false,
				'title'  => "Buvez l'eau de votre robinet *sans crainte*\nIls ont fait le saut avec nous.",
				'count'  => 6,
				'offset' => 1,
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'variant'  => 'simple',
				'title'    => 'Découvrez les produits associés',
				'intro'    => "Optimisez votre expérience de traitement d'eau avec nos solutions complémentaires.",
				'products' => array(
					array( 'name' => "Adoucisseurs d'eau", 'text' => 'Éliminez le calcaire pour une peau douce, un linge éclatant et une protection durable de vos installations.', 'image' => $softener, 'url' => '/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire' ),
					array( 'name' => 'Systèmes de désinfection UV', 'text' => "Utilisés pour la stérilisation contre les bactéries, les virus, les coliformes, l'E.Coli, le Cryptosporidium,...", 'image' => $img( 'VH200-F10-265x300.jpg', 'Système UV VH200' ), 'url' => '/systemes-de-desinfection-uv' ),
					array( 'name' => "Stations d'eau potable", 'text' => "Une eau de qualité minérale directement à votre évier, pour une hydratation pure et sans déchets plastiques.", 'image' => $img( "Solutions d'eau potable.webp", "Station d'eau potable" ), 'url' => '/stations-d-eau-potables-sous-l-evier-de-la-cuisine' ),
				),
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'   => "L'excellence en filtration",
				'title'   => "Passez d'une eau problématique\n*à une source de pureté.*",
				'text'    => "Prêt à éliminer définitivement le fer, le soufre ou le chlore de votre foyer ? Profitez de l'accompagnement d'un spécialiste pour choisir l'équipement parfaitement adapté à votre réalité. Demandez votre consultation gratuite dès aujourd'hui et redécouvrez le plaisir d'une eau saine à chaque robinet.",
				'image'   => $img( '5846952.jpg', 'Eau cristalline' ),
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
				'items' => array(
					array( 'title' => "Filtration d'eau de puits : guide complet", 'image' => $img( '5846952.jpg', 'Eau cristalline' ), 'url' => '/blog/categorie/eau-de-puits' ),
					array( 'title' => "L'importance de l'analyse d'eau", 'image' => $img( '2149186343.jpg', "Analyse d'eau" ), 'url' => '/les-nitrates-dans-leau-de-puits-dangers-et-solutions' ),
					array( 'title' => 'Eaux ferrugineuses et soufrées', 'image' => $img( 'Cover-Image.webp', 'Eaux ferrugineuses' ), 'url' => '/fer-ferreux-vs-fer-ferrique-quelle-difference-pour-le-filtre' ),
				),
			),
		),
	),
);
