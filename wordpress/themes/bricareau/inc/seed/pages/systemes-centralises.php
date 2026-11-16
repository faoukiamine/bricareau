<?php
/**
 * Centralized filtration — src/pages/SystemesCentralises.tsx.
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

return array(
	'slug'            => 'systemes-de-filtration-d-eau-centralises',
	'title'           => "Systèmes de filtration d'eau centralisés",
	'seo_title'       => 'Systèmes de Filtration Centralisés pour Bâtiments | Bricareau',
	'seo_description' => "Protégez l'ensemble des installations de votre bâtiment avec une filtration industrielle et commerciale centralisée de premier ordre. Une solution sur mesure pour éliminer le calcaire, le chlore et les contaminants.",
	'menu_order'      => 40,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "Solutions de filtration d'eau *centralisées* pour bâtiments.",
				'text'        => "Protégez l'ensemble des installations de votre bâtiment avec une filtration industrielle et commerciale centralisée de premier ordre. Une solution sur mesure pour éliminer le calcaire, le chlore et les contaminants.",
				'ctaText'     => 'DEMANDER UNE ÉTUDE SUR MESURE',
				'ctaUrl'      => '/contact-entreprises',
				'phoneButton' => true,
				'image'       => $img( '2148836794.jpg', "Solutions de filtration d'eau centralisées pour bâtiments" ),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'   => 'DURABILITÉ & VALEUR PATRIMONIALE',
				'title'     => 'Engagé à fournir des solutions de *haute qualité.*',
				'body'      => "L'eau est le flux vital de vos infrastructures. Une qualité non maîtrisée expose vos installations à des risques critiques (corrosion, entartrage, prolifération bactérienne), compromettant leur intégrité et générant des surcoûts importants.\n\nPour pallier ces défis, Bricareau déploie des programmes de traitement d'eau sur mesure, garantissant la pérennité de vos actifs et la conformité sanitaire. Nous développons des stratégies d'ingénierie complètes et innovantes.\n\nBricareau, c’est un partenaire qui prend à cœur la santé et l’efficacité de votre bâtiment.",
				'ctaText'   => 'Planifiez une consultation',
				'ctaUrl'    => '/consultation',
				'image'     => $img( '2152006094.jpg', 'Bâtiments commerciaux' ),
				'cardTitle' => 'Bâtiments commerciaux',
			),
		),
		array(
			'bricareau/accordion-split',
			array(
				'anchor'     => 'campus-benefits',
				'label'      => "L'INGÉNIERIE DE L'INFRASTRUCTURE",
				'title'      => 'Ce que nous apportons à la performance de votre campus.',
				'imageSide'  => 'right',
				'image'      => $img( '70609919.jpg', 'Schéma technique et infrastructures de filtration centralisées' ),
				'items'      => array(
					array( 'title' => 'Protection des conduits', 'text' => "Élimination totale du calcaire et des sédiments pour préserver l'ensemble du réseau de tuyauteries et éviter l'entartrage prématuré de vos actifs immobiliers." ),
					array( 'title' => "Économies d'énergie", 'text' => "Des échangeurs de chaleur et chauffe-eau propres consomment jusqu'à 30% d'énergie en moins, réduisant considérablement vos factures énergétiques et l'empreinte carbone." ),
					array( 'title' => 'Expérience usager améliorée', 'text' => "Fournissez une eau de qualité exceptionnelle, exempte de goûts et d'odeurs désagréables, améliorant ainsi l'expérience quotidienne de vos résidents ou employés." ),
					array( 'title' => 'Maintenance prédictive', 'text' => 'Une surveillance continue de vos systèmes de traitement d\'eau pour anticiper les remplacements de pièces et l\'entretien des filtres. Minimisez les temps d\'arrêt et prolongez la durée de vie de vos équipements grâce à une maintenance proactive.' ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant' => 'icon',
				'label'   => 'NOTRE SERVICE GLOBAL',
				'title'   => 'Valoriser & sécuriser vos infrastructures.',
				'rows'    => array(
					array( 'subtitle' => 'Remplissage Écoresponsable', 'title' => "Stations de remplissage d'eau automatiques", 'icon' => 'droplets', 'text' => "Intégrez nos stations de remplissage automatique intelligentes. Une solution robuste et hygiénique à activation sans contact, idéale pour réduire l'usage de plastique à usage unique et offrir une eau réfrigérée et purifiée de grand débit à vos usagers.", 'image' => $img( 'elkayv2-LZS8WSLK_image_vignette.webp', "Station de remplissage automatique de bouteilles d'eau Elkay intégrée par Bricareau" ) ),
					array( 'subtitle' => 'Conception & Planification', 'title' => 'Ingénierie & Solutions sur mesure', 'icon' => 'settings', 'text' => 'Nous concevons des stations de filtration centralisées modulaires s\'intégrant parfaitement dans vos locaux techniques, optimisant l\'encombrement au sol tout en maximisant la performance globale.', 'image' => $img( '7kbp.png', 'Station de filtration centralisée modulaire conçue par Bricareau' ) ),
					array( 'subtitle' => 'Disponibilité & Opérabilité', 'title' => 'Maintenance & Support technique', 'icon' => 'shield-check', 'text' => "Notre assistance technique disponible 24/7 et nos contrats d'entretien préventif sur mesure garantissent la continuité de vos opérations et la longévité de vos infrastructures hydrauliques.", 'image' => $img( '144d1310-23fc-4cbd-92df-81d17d7a393c.jpg', "Équipement d'osmose inverse industriel et support technique Bricareau" ) ),
				),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'label' => 'AVIS CLIENTS',
				'title' => 'La satisfaction de nos partenaires.',
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'     => 'PROTECTION & PERFORMANCE DES INFRASTRUCTURES',
				'title'     => "Garantissez une eau d'excellence à l'échelle de votre bâtiment.",
				'text'      => "Des solutions de filtration centralisées sur mesure pour protéger vos canalisations, préserver vos équipements thermiques et garantir la conformité sanitaire absolue de tout votre réseau. Sécurisez la longévité de vos installations dès aujourd'hui.",
				'image'     => $img( '2149394950.jpg', 'Technicien inspectant les systèmes de filtration du bâtiment - Solution Bricareau' ),
				'phoneText' => 'Parlez à un ingénieur-conseil',
				'ctaText'   => 'Demander une étude technique',
				'ctaUrl'    => '/contact-entreprises',
				'avatars'   => $avatars(),
				'rating'    => '4.9/5',
				'caption'   => "Déjà adopté par plus de 180 gestionnaires immobiliers et sites d'envergure au Québec.",
			),
		),
		array(
			'bricareau/case-cards',
			array(
				'label'   => "CAS D'EXCELLENCE",
				'title'   => 'Ressources connexes & Études de cas.',
				'ctaText' => 'Toutes les ressources',
				'ctaUrl'  => '/blog',
				'items'   => array(
					array( 'label' => 'Étude de cas : Campus', 'title' => "Filtration et traitement d'un campus universitaire complet à Québec.", 'text' => "Découvrez comment nos filtres centralisés ont réduit les coûts de maintenance de 35% tout en assurant une eau d'une pureté absolue pour 15 000 étudiants.", 'url' => '/blog', 'linkText' => "Lire l'étude de cas" ),
					array( 'label' => 'Étude de cas : Hôpital', 'title' => "Conformité sanitaire et traitement ultra-pur d'un centre hospitalier.", 'text' => 'Une solution stérile avec désinfection UV-C industrielle pour garantir la conformité microbiologique absolue aux points de soins critiques.', 'url' => '/blog', 'linkText' => "Lire l'étude de cas" ),
					array( 'label' => 'Étude de cas : Hôtel', 'title' => "Amélioration de l'expérience client et protection anticalcaire pour un hôtel 5 étoiles.", 'text' => "Une eau douce et protectrice pour l'ensemble des installations de bien-être, préservant la robinetterie haut de gamme et les systèmes de spa.", 'url' => '/blog', 'linkText' => "Lire l'étude de cas" ),
				),
			),
		),
	),
);
