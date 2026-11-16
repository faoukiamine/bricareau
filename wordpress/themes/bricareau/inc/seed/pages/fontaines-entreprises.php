<?php
/**
 * Office water coolers — src/pages/FontainesDeauModernes.tsx.
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

return array(
	'slug'            => 'fontaines-et-refroidisseurs-d-eau-modernes-pour-entreprises',
	'title'           => "Fontaines et refroidisseurs d'eau pour entreprises",
	'seo_title'       => 'Fontaines d\'Eau de Bureau Modernes | Bricareau',
	'seo_description' => 'Offrez à vos collaborateurs une eau filtrée d\'exception, fraîche, chaude ou pétillante, directement raccordée à votre réseau. Une solution écologique, économique et sans logistique de bonbonnes.',
	'menu_order'      => 43,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => 'Optez pour *une hydratation* intelligente et durable.',
				'text'        => 'Offrez à vos collaborateurs une eau filtrée d\'exception, fraîche, chaude ou pétillante, directement raccordée à votre réseau. Une solution écologique, économique et sans logistique de bonbonnes.',
				'ctaText'     => 'OBTENIR MON ESSAI GRATUIT',
				'ctaUrl'      => '/contact-entreprises',
				'phoneButton' => true,
				'image'       => $img( '2118.jpg', 'Optez pour une hydratation intelligente et durable' ),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow' => "L'EXCELLENCE DE L'EAU À LA SOURCE",
				'title'   => 'Engagé à fournir des solutions de fontaines à eau de *haute qualité.*',
				'body'    => "Nos fontaines à eau sont conçues pour améliorer le bien-être de vos collaborateurs et de vos clients. Grâce à nos technologies de filtration d'eau avancées, profitez d'une eau d'une pureté absolue, d'un goût incomparable et d'une fraîcheur constante à chaque tasse.",
				'ctaText' => 'En savoir plus',
				'ctaUrl'  => '#solutions-catalog',
				'image'   => $img( '6115.jpg', "L'excellence de l'eau à la source" ),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'anchor'  => 'office-benefits',
				'variant' => 'numbered',
				'label'   => 'VALEUR AJOUTÉE',
				'title'   => "Élevez le standard d'hydratation de vos bureaux.",
				'cards'   => array(
					array( 'title' => 'Pureté absolue', 'text' => 'Une filtration avancée au charbon actif combinée à une désinfection UV-C de pointe pour éliminer 99,99% des contaminants microbiologiques et offrir une eau pure.' ),
					array( 'title' => 'Température idéale', 'text' => "De l'eau glacée intensément rafraîchissante, de l'eau tiède équilibrée, ou de l'eau chaude instantanée à température optimale pour vos thés et cafés." ),
					array( 'title' => 'Design élégant', 'text' => "Des lignes contemporaines épurées, des finitions en inox brossé et une esthétique prestigieuse qui s'intègrent parfaitement dans vos locaux modernes." ),
					array( 'title' => 'Économies durables', 'text' => "Réduisez vos coûts d'hydratation jusqu'à 70% par rapport à l'achat et à la logistique complexe des bonbonnes ou bouteilles d'eau en plastique." ),
				),
			),
		),
		array(
			'bricareau/statement',
			array(
				'theme'    => 'light',
				'text'     => "\"Bien plus qu'un simple point d'eau, nos fontaines réseau redéfinissent l'expérience d'hydratation au bureau en éliminant définitivement les bouteilles plastiques de vos locaux. Grâce à une technologie de filtration de pointe, elles garantissent une eau d'une pureté absolue, débarrassée du chlore, des microplastiques et des contaminants microbiologiques. Investir dans une hydratation d'exception est un levier majeur pour la santé de vos collaborateurs et l'image écoresponsable de votre entreprise.\"",
				'textSize' => 'large',
			),
		),
		array(
			'bricareau/image-gallery',
			array(
				'images' => array(
					$img( '2539.jpg', "Solutions d'hydratation écologiques et design pour le bureau Bricareau" ),
					$img( '1jp5k.png', "Remplissage d'une bouteille d'eau filtrée pure" ),
					$img( '4rlkbv4rlkbv4rlk.png', "Remplissage d'une bouteille d'eau filtrée pure" ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'    => 'solutions-catalog',
				'variant'   => 'catalog',
				'title'     => "Une *polyvalence totale*, peu importe l'environnement",
				'linkText'  => 'Voir les détails',
				'products'  => array(
					array( 'name' => 'Bluedrop Ice', 'image' => $img( 'A12_no_bg.png', 'Bluedrop Ice' ), 'url' => '/contact-entreprises', 'text' => "La fontaine avec machine à glaçons intégrée Bluedrop Ice vous propose de l'eau filtrée et des glaçons purs au gré de vos envies. Son système de filtration en 5 étapes offre une barrière de protection totale et vous rafraîchit en continu. Cette plateforme d'hydratation tout-en-un s'intègre aussi bien dans les réceptions que dans les cafétérias." ),
					array( 'name' => 'Ravello', 'image' => $img( 'A8_no_bg.png', 'Ravello' ), 'url' => '/contact-entreprises', 'text' => "La fontaine à eau Bluedrop Ravello vous propose de l'eau filtrée plate, gazeuse, à température ambiante et chaude pour votre bureau. Grâce à ses dimensions incroyablement compactes, elle s'intègre harmonieusement à tous les environnements vous offrant toute l'eau dont vous avez besoin et répondant à vos besoins d'hydratation avec élégance et praticité." ),
					array( 'name' => 'B3', 'image' => $img( 'A9_no_bg.png', 'B3' ), 'url' => '/contact-entreprises', 'text' => "La fontaine à eau de bureau Bluedrop B3 fournit de l'eau chaude et froide filtrée à la demande. Son système de filtration intégré en 3 étapes garantit un approvisionnement continu en eau savoureuse pour votre bureau. Disponible en version sur pied (B4) et à poser (B3), elle offre un design élégant et moderne qui s'intègre à tous les environnements." ),
					array( 'name' => 'B4', 'image' => $img( 'A13_no_bg.png', 'B4' ), 'url' => '/contact-entreprises', 'text' => 'La fontaine à eau de bureau Bluedrop B4 fournit de l\'eau chaude et froide filtrée à la demande. Son système de filtration intégré en 3 étapes garantit un approvisionnement continu en eau savoureuse pour votre bureau. Disponible en version sur pied ou à poser, elle offre un design élégant et moderne qui s\'intègre à tous les environnements. Grâce à son débit rapide et à la stérilisation automatique du réservoir, s\'hydrater n\'a jamais été aussi simple.' ),
					array( 'name' => 'B4', 'image' => $img( 'A7_no_bg.png', 'B4' ), 'url' => '/contact-entreprises', 'text' => 'La fontaine à eau de bureau Bluedrop B4 fournit de l\'eau chaude et froide filtrée à la demande. Son système de filtration intégré en 3 étapes garantit un approvisionnement continu en eau savoureuse pour votre bureau. Disponible en version sur pied ou à poser, elle offre un design élégant et moderne qui s\'intègre à tous les environnements. Grâce à son débit rapide et à la stérilisation automatique du réservoir, s\'hydrater n\'a jamais été aussi simple.' ),
				),
				'ctaTitle'  => "Besoin d'aide pour trouver le système qui vous convient ?",
				'ctaButton' => 'Demandez une consultation',
				'ctaUrl'    => '/consultation',
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'label' => 'ILS NOUS FONT CONFIANCE',
				'title' => 'Le choix des *entreprises leaders.*',
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'     => 'VITALITÉ & PERFORMANCE AU BUREAU',
				'title'     => "Offrez le meilleur de l'hydratation à votre entreprise.",
				'text'      => "Des fontaines réseau ultra-modernes au design d'exception et sans bonbonne. Activez le bien-être au travail dès aujourd'hui.",
				'image'     => $img( 'water-dispenser in office.jpg', "Fontaine d'eau moderne installée en entreprise - Solution Bricareau" ),
				'phoneText' => 'Parlez à un conseiller pro',
				'avatars'   => $avatars(),
				'rating'    => '4.9/5',
				'caption'   => 'Déjà adopté par plus de 350 entreprises de premier plan au Québec.',
			),
		),
	),
);
