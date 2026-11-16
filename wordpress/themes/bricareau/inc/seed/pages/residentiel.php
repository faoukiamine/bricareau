<?php
/**
 * Résidentiel hub — src/pages/residentiel.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'             => 'solutions-d-adoucissement-de-filtration-et-de-purification-d-eau-residentielles',
	'title'            => "Solutions d'eau résidentielles",
	'breadcrumb_label' => 'Résidentiel',
	'seo_title'        => "Solutions d'eau résidentielles | Bricareau",
	'menu_order'       => 20,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'split',
				'breadcrumbs' => false,
				'title'       => "L'excellence d'*une eau parfaite,*\nau cœur de votre foyer.",
				'text'        => "Transformez l'eau de votre maison en une ressource cristalline, saine et protectrice. Plus de 20 000 familles au Québec nous font confiance.",
				'ctaText'     => 'Planifiez une consultation gratuite',
				'ctaUrl'      => '/consultation',
				'image'       => $img( '23568974.png', 'Résidentiel Excellence - expert en eau' ),
			),
		),
		array(
			'bricareau/intro-split',
			array(
				'label'      => "L'essence du foyer",
				'labelStyle' => 'line',
				'title'      => "*Le bien-être de*\n*votre famille* avant tout.",
				'text'       => "L'eau est le cœur de votre foyer. Que ce soit pour boire, cuisiner, ou vous laver, sa pureté a un impact direct sur votre confort quotidien et la santé de ceux que vous aimez. Ne laissez plus la qualité de votre eau au hasard.",
				'image'      => $img( '1713.jpg', "Le bien-être de votre famille - traitement d'eau Québec" ),
				'imageStyle' => 'offset',
			),
		),
		array(
			'bricareau/tile-grid',
			array(
				'variant' => 'dark',
				'title'   => "Nos solutions de *filtration d'eau*\npour votre résidence.",
				'intro'   => "Découvrez nos systèmes avancés conçus spécifiquement pour la maison. De l'adoucisseur protégeant votre plomberie à la station d'eau potable ultra-pure pour votre cuisine, Bricareau garantit une qualité irréprochable à chaque robinet.",
				'tiles'   => array(
					array( 'title' => "Adoucisseurs\nd'eau", 'label' => 'Zéro calcaire', 'text' => "Protégez vos électroménagers et profitez d'un linge plus doux et d'une peau moins asséchée.", 'image' => $img( 'Adoucisseur_d_eau.png', "Adoucisseurs d'eau" ), 'url' => '/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire', 'size' => 'tall', 'fit' => 'cover' ),
					array( 'title' => "Filtres d'eau spécialisés\npour toute la maison", 'label' => 'Sécurité globale', 'text' => "Une barrière protectrice dès l'entrée d'eau. Éliminez chlore, sédiments et métaux lourds de chaque robinet.", 'image' => $img( 'clack-water-softener.webp', "Filtres d'eau spécialisés pour toute la maison" ), 'url' => '/systemes-de-filtration-d-eau-specialises-pour-toute-la-maison', 'size' => 'wide', 'fit' => 'cover' ),
					array( 'title' => "Stations d'eau potable\nsous l'évier", 'label' => 'Eau potable', 'text' => 'Une eau cristalline à 99% pure pour la boisson et la cuisine.', 'image' => $img( '2237.jpeg', "Stations d'eau potable sous l'évier" ), 'url' => '/stations-d-eau-potables-sous-l-evier-de-la-cuisine', 'size' => 'normal', 'fit' => 'cover-dim' ),
					array( 'title' => "Systèmes de désinfection\nUV", 'label' => 'Stérilisation', 'text' => "Neutralise 99,9% des bactéries et virus. Idéal pour l'eau de puits.", 'image' => $img( 'Viqua UV System.png', 'Systèmes de désinfection UV' ), 'url' => '/systemes-de-desinfection-uv', 'size' => 'normal', 'fit' => 'contain' ),
					array( 'title' => "Fontaines\nd'Eau", 'label' => 'Élégance', 'text' => 'Eau fraîche, tempérée ou pétillante, avec un design intégré.', 'image' => $img( "Fontaines d'eau.webp", "Fontaines d'eau" ), 'url' => '/fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche', 'size' => 'wide-tablet', 'fit' => 'cover' ),
					array( 'title' => "Filtres de\nRemplacement", 'label' => 'Maintenance', 'text' => 'Cartouches et pièces pour assurer la longévité de vos systèmes.', 'image' => $img( '2148728698.jpg', 'Filtres de remplacement' ), 'url' => '/filtres-d-eau-de-remplacement', 'size' => 'normal', 'fit' => 'cover' ),
					array( 'title' => "Tests\nd'Eau", 'label' => 'Diagnostic', 'text' => "Analyse professionnelle pour comprendre et résoudre vos problèmes d'eau.", 'image' => $img( 'water-test.jpg', "Tests d'eau" ), 'url' => '/analyses-et-tests-d-eau', 'size' => 'normal', 'fit' => 'cover' ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant'        => 'icon',
				'background'     => 'glow',
				'firstImageSide' => 'left',
				'label'          => 'Les avantages Bricareau',
				'labelStyle'     => 'line',
				'title'          => "Pourquoi investir dans\nun *système de traitement d'eau ?*",
				'rows'           => array(
					array(
						'icon'    => 'wallet',
						'color'   => 'green',
						'title'   => 'Des économies durables.',
						'bullets' => "Réduisez l'utilisation de savons et détergents jusqu'à 50% grâce à une eau adoucie.\nAllongez la durée de vie de vos électroménagers et chauffe-eau en empêchant le tartre.",
						'image'   => $img( 'Untitled23.png', "Économies - systèmes d'eau sur mesure" ),
					),
					array(
						'icon'    => 'heart',
						'color'   => 'navy',
						'title'   => 'Santé et bien-être.',
						'bullets' => "Fini la peau sèche et les cheveux ternes après la douche.\nUne eau de boisson sans chlore, plomb, et autres contaminants pour toute la famille.",
						'image'   => $img( 'kid-playing-bathtub.jpg', 'Santé - filtration Bricareau' ),
					),
					array(
						'icon'    => 'leaf',
						'color'   => 'green',
						'title'   => 'Un choix écologique.',
						'bullets' => "Dites adieu aux bouteilles en plastique et réduisez considérablement vos déchets domestiques.\nDes systèmes conçus pour être ultra-efficaces et réduire le gaspillage d'eau.",
						'image'   => $img( "Fontaines d'eau.webp", "Écologie - traitement d'eau Québec" ),
					),
				),
			),
		),
		array(
			'bricareau/expert-split',
			array(
				'title'      => "Votre eau a besoin d'un expert d'eau, *pas un doute.*",
				'text'       => 'Ne laissez pas l’incertitude couler de votre robinet. Chez Bricareau, nous transformons chaque analyse en une certitude scientifique pour la santé de votre foyer.',
				'ctaText'    => "Réservez votre analyse d'eau",
				'ctaUrl'     => '/analyses-et-tests-d-eau#water-test',
				'image'      => $img( 'water testing.jpeg', "Expert Bricareau lors d'une analyse d'eau rigoureuse" ),
				'imageSide'  => 'left',
				'badge'      => 'stat',
				'badgeValue' => '+25 ans',
				'badgeText'  => "d'expertise cumulée à votre service",
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'label'      => "L'expérience Bricareau",
				'labelStyle' => 'text',
				'title'      => "Une famille satisfaite\n*après l'autre.*",
				'count'      => 6,
			),
		),
		array(
			'bricareau/expert-split',
			array(
				'title'        => "Votre solution d'eau personnalisée\n*en quelques clics.*",
				'text'         => "Quelques étapes suffisent pour transformer l'eau de votre foyer. Identifiez vos priorités et découvrez instantanément le système Bricareau adapté à votre réalité.",
				'ctaText'      => 'Diagnostic gratuit en 2 min',
				'ctaUrl'       => '/diagnostic',
				'image'        => $img( 'discover_expert.jpg', "Expert Bricareau effectuant une analyse d'eau à domicile" ),
				'imageSide'    => 'right',
				'badge'        => 'social',
				'badgeText'    => 'Rejoint par +1000 foyers',
				'badgeSubtext' => 'Ce mois-ci',
			),
		),
	),
);
