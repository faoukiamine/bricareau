<?php
/**
 * Fontaines et refroidisseurs d'eau — src/pages/fontaines-d-eau-residentielles.tsx.
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

$drink = $img( 'reasons-to-drink-more-water.jpg', "Verre d'eau pure" );

return array(
	'slug'             => 'fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche',
	'title'            => "Fontaines et refroidisseurs d'eau",
	'breadcrumb_label' => "Fontaines et refroidisseurs d'eau",
	'seo_title'        => "Fontaines d'Eau et Refroidisseurs | Solutions de Pureté au Québec | Bricareau",
	'seo_description' => "Découvrez notre gamme de fontaines d'eau sans bouteille et refroidisseurs pour maison ou bureau au Québec. Technologie de filtration avancée pour une eau pure.",
	'menu_order'       => 35,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'fadeStop'    => '33',
				'title'       => "Nos fontaines d'eau, l'art de\n*l'eau pure.*",
				'text'        => "Élevez votre expérience d'hydratation avec nos refroidisseurs d'eau haute performance. Un design élégant allié à une pureté absolue pour votre maison ou votre bureau.",
				'ctaText'     => 'Planifiez une consultation',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( "Fontaines d'eau.webp", "Fontaines d'eau Bricareau" ),
				'trustItems'  => array(
					array( 'icon' => 'zap', 'label' => 'Technologie', 'value' => 'Filtration Double' ),
					array( 'icon' => 'award', 'label' => 'Pureté', 'value' => 'Certifié NSF/ANSI' ),
					array( 'icon' => 'leaf', 'label' => 'Éco-Conçu', 'value' => 'Zéro Bouteilles' ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'    => 'models',
				'variant'   => 'catalog',
				'label'     => 'Pureté à domicile',
				'title'     => "L'hydratation pure à la maison,\n*l'eau fraîche* à la portée de vos mains.",
				'intro'     => "Bricareau redéfinit votre expérience d'hydratation quotidienne avec des solutions d'eau fraîche haut de gamme. Offrez à votre famille le luxe d'une eau d'une pureté exceptionnelle, toujours à la température idéale.",
				'linkText'  => 'Voir les détails',
				'products'  => array(
					array( 'name' => "Distributeur d'eau de comptoir - Avalanche", 'image' => $img( 'nouveau-distributeur-comptoir.png', 'Distributeur de comptoir Avalanche' ), 'url' => '/consultation', 'text' => "L'Avalanche est conçu pour s'intégrer harmonieusement sur n'importe quel comptoir. Ce distributeur d'eau allie un design compact à une technologie de refroidissement performante, fournissant une eau pure et rafraîchissante au quotidien." ),
					array( 'name' => "Fontaine d'eau sans bouteille - Aspen", 'image' => $img( 'Aspen_PF1.png', 'Fontaine Aspen' ), 'url' => '/consultation', 'text' => "Dotée d'un design épuré, la fontaine Aspen offre une distribution d'eau continue sans bouteille. Sa construction robuste et son système de filtration avancé garantissent une hydratation saine pour toute la famille." ),
					array( 'name' => "Fontaine d'eau sans bouteille - Glacier", 'image' => $img( 'distributeur-2-removebg-preview.png', 'Fontaine Glacier' ), 'url' => '/consultation', 'text' => "Le modèle Glacier se distingue par son élégance classique et sa fiabilité. Profitez d'une eau limpide à la température de votre choix, grâce à un système conçu pour allier durabilité et efficacité énergétique." ),
					array( 'name' => "Fontaine d'eau sans bouteille - Nordic", 'image' => $img( 'distributeur-3-removebg-preview.png', 'Fontaine Nordic' ), 'url' => '/consultation', 'text' => 'Inspiré par la pureté scandinave, le refroidisseur Nordic combine un style minimaliste et une ingénierie de pointe. Parfait pour tout espace de vie, il assure une eau toujours fraîche et au goût irréprochable.' ),
					array( 'name' => "Fontaine d'eau sans bouteille - Crystal Pro", 'image' => $img( 'distributeur-4-removebg-preview.png', 'Fontaine Crystal Pro' ), 'url' => '/consultation', 'text' => "Le Crystal Pro représente l'excellence en matière d'hydratation. Il allie une esthétique moderne haut de gamme à une filtration de qualité supérieure, s'intégrant parfaitement dans les intérieurs contemporains." ),
				),
				'ctaTitle'  => "Besoin d'aide pour trouver le système qui vous convient ?",
				'ctaButton' => 'Demandez une consultation',
				'ctaUrl'    => '/consultation',
			),
		),
		array(
			'bricareau/savings-calculator',
			array(
				'label'        => 'Technologie & responsabilité',
				'title'        => "Plus qu'une fontaine d'eau,\nun choix *intelligent & responsable.*",
				'intro'        => "Alliez performance technologique, responsabilité écologique et économies domestiques pour un quotidien sans compromis. Dépassons ensemble les standards de l'hydratation classique.",
				'image'        => $img( '2112.png', "L'expérience d'eau pure Bricareau" ),
				'imageTitle'   => 'Art de Vivre',
				'imageText'    => "Une pureté incomparable qui s'intègre harmonieusement à votre quotidien. Découvrez l'équilibre parfait entre esthétique et santé, où chaque gorgée est une signature de qualité.",
				'bottlePrice'  => '0.3464',
				'note'         => 'Éliminez le plastique, valorisez votre santé.',
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'framed' => false,
				'title'  => "L’eau *que vous méritez,*\nle service que vous n'oublierez pas.",
				'count'  => 5,
				'offset' => 4,
			),
		),
		array(
			'bricareau/image-gallery',
			array(
				'label'  => 'Notre portfolio',
				'title'  => "Intégration\nparfaite & élégante.",
				'intro'  => "Découvrez comment nos fontaines et refroidisseurs d'eau s'intègrent harmonieusement dans tous les espaces, alliant esthétique moderne et fonctionnalité.",
				'images' => array(
					$img( '2113.jpg', 'Fontaine de comptoir Bricareau' ),
					$img( '2114.png', "Robinet d'eau pure" ),
					$img( '2115.jpg', 'Art de vivre Bricareau' ),
					$img( '2116.jpg', 'Eau fraîche et pure' ),
				),
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'   => 'L’hydratation supérieure à portée de main',
				'title'   => "Sublimez votre quotidien avec l'excellence\n*de nos fontaines d'eau.*",
				'text'    => 'Dites adieu aux bouteilles de plastique encombrantes et profitez d\'une source d\'eau pure, fraîche ou chaude, instantanément. Que ce soit pour votre foyer ou votre espace de travail, nos distributeurs allient design moderne et filtration de pointe pour une hydratation saine et écologique.',
				'image'   => $img( '83658.jpg', "Fontaine d'eau" ),
				'avatars' => $avatars(),
			),
		),
		array(
			'bricareau/stat-banner',
			array(
				'label'     => 'Notre impact écologique',
				'title'     => "Vers un monde\n*sans bouteilles en plastique.*",
				'intro'     => "Notre gamme offre une eau saine, fraîche et délicieuse, pour les professionnels et les particuliers. Ensemble, transformons notre consommation d'eau en un acte durable.",
				'image'     => $img( '2117.jpg', 'Bureau écoresponsable' ),
				'statValue' => '-2920',
				'statLabel' => "Bouteilles évitées par an\npour un couple",
				'ctaText'   => 'Planifiez votre impact',
				'ctaUrl'    => '/consultation',
			),
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
