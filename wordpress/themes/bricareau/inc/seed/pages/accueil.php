<?php
/**
 * Homepage — src/pages/Home.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'      => 'accueil',
	'title'     => 'Accueil',
	'front'     => true,
	'seo_title' => "Bricareau | Spécialiste du traitement de l'eau au Québec",
	'blocks'    => array(
		array(
			'bricareau/hero-slider',
			array(
				'slides'  => array(
					array(
						'label'       => 'Résidentiel',
						'title'       => "Une eau *saine et pure,*\npour votre foyer.",
						'description' => "Protégez votre famille et vos appareils électroménagers avec nos systèmes de filtration d'eau et d'adoucissement résidentiels sur-mesure.",
						'image'       => array_merge( $img( 'family-preparing-dinner-together.jpg', 'Famille préparant le souper avec une eau pure' ), array( 'focal' => array( 'x' => 0.85, 'y' => 0.3 ) ) ),
					),
					array(
						'label'       => 'Bureaux',
						'title'       => "Une hydratation *premium,*\npour vos équipes de travail.",
						'description' => "Améliorez le bien-être au bureau avec des fontaines d'eau purifiée sans bouteille, économiques et écologiques.",
						'image'       => array_merge( $img( '2148496250.jpg', "Équipe de bureau profitant d'une eau filtrée" ), array( 'focal' => array( 'x' => 0.55, 'y' => 0.3 ) ) ),
					),
					array(
						'label'       => 'Hôtellerie et restauration',
						'title'       => "L'excellence *cristalline,*\npour la gastronomie.",
						'description' => "Une eau parfaite pour révéler le goût de vos cafés, protéger vos fours à vapeur et offrir des glaçons impeccables grâce à nos systèmes de traitement d'eau.",
						'image'       => array_merge( $img( 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000', 'Salle de restaurant' ), array( 'focal' => array( 'x' => 0.7, 'y' => 0.55 ) ) ),
					),
				),
				'ctaText' => 'Planifiez une consultation gratuite',
				'ctaUrl'  => '/consultation',
				'stats'   => array(
					array( 'value' => '25+', 'label' => "Années d'expertise\nen traitement d'eau" ),
					array( 'value' => '4', 'label' => "Régions desservies\nautour de Montréal" ),
					array( 'value' => '100%', 'label' => "Solutions adaptées,\njamais génériques" ),
				),
			),
		),
		array(
			'bricareau/partner-marquee',
			array(
				'partners' => implode(
					"\n",
					array(
						'Coréalis Pharma', 'Productions Zinda', 'Ils Pharma', 'Google', 'Kinton Ramen',
						'Marriott', 'IKEA', 'Les peintres multicouleurs', 'Imprimerie Stampa Media',
						'UPS', 'Biovantek', 'Garderie les poussins du monde', 'Calo',
						"Fous de l'Ile Kombucha", 'Garderie les petits carillons', 'Fromagerie Marie-Kadé',
						'Gestion & Construction Métropolitain', 'Gestion immobilière Wilkar',
						'Geep Canada', 'Injectik', 'Investment ERES', 'I3 Biomedical', 'Kruger',
						'Institut des communications graphiques',
					)
				),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'       => 'Solutions Résidentielles',
				'title'         => "Votre eau de robinet\n*mérite mieux.*",
				'body'          => 'Votre bien-être commence par la qualité de votre eau. Fini les désagréments liés au calcaire, au chlore ou au fer qui abîment votre plomberie, vos électroménagers et assèchent votre peau et vos cheveux. Bricareau analyse votre eau avec précision et conçoit un système sur mesure pour garantir une pureté absolue à toute votre famille.',
				'ctaText'       => 'Découvrir nos solutions',
				'ctaUrl'        => '/solutions-d-adoucissement-de-filtration-et-de-purification-d-eau-residentielles',
				'image'         => $img( '21425.png', "Système de traitement d'eau résidentiel" ),
				'imageTitle'    => "Traitement d'eau Québec par Bricareau",
				'imagePosition' => 'right',
				'background'    => 'light',
				'cardIcon'      => 'droplets',
				'cardTitle'     => 'Expertise Garantie',
				'cardText'      => "Analyse d'eau sur mesure et installation par nos techniciens certifiés.",
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'       => 'Bureaux & Commerces',
				'title'         => "L'eau filtrée, un investissement\n*rentable* pour votre entreprise.",
				'body'          => "Offrez à vos collaborateurs une eau de boisson pure et revitalisante. En remplaçant l'achat récurrent de bouteilles ou de bonbonnes par nos fontaines filtrantes sur réseau, vous réalisez des économies drastiques, éliminez la gestion des stocks et améliorez le bien-être quotidien au travail.",
				'ctaText'       => 'Nos solutions pour bureaux',
				'ctaUrl'        => '/solutions-de-traitement-d-eau-pour-offices-et-bureaux',
				'image'         => $img( 'bureau-megamenu.jpg', "Système de traitement d'eau pour bureaux" ),
				'imageTitle'    => "Analyse d'eau professionnelle par Bricareau",
				'imagePosition' => 'left',
				'background'    => 'white',
				'cardIcon'      => 'trending-up',
				'cardTitle'     => 'Rentabilité',
				'cardText'      => "Éliminez l'achat et le stockage de bouteilles plastiques.",
				'cardMirrored'  => true,
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'       => 'Hôtels & Restaurants',
				'title'         => "Parce que *l'expérience*\nde vos clients passe aussi par l'eau.",
				'body'          => "Dans l'hôtellerie et la restauration, l'eau intervient à chaque étape — cuisine, glace, linge, vaisselle, douches. Une eau mal traitée se traduit par des coûts cachés, des équipements fragilisés et une qualité de service en dessous de vos standards.",
				'ctaText'       => "Découvrir l'offre HORECA",
				'ctaUrl'        => '/solutions-de-traitement-et-filtration-d-eau-pour-hotels-et-restaurants',
				'image'         => $img( '522.jpg', "Système de traitement d'eau HORECA" ),
				'imageTitle'    => 'Expert en eau par Bricareau',
				'imagePosition' => 'right',
				'background'    => 'light',
				'cardIcon'      => 'award',
				'cardTitle'     => 'Qualité Supérieure',
				'cardText'      => 'Protégez vos équipements et sublimez le goût de vos préparations.',
			),
		),
		array(
			'bricareau/features-grid',
			array(
				'eyebrow'  => 'Notre Expertise',
				'title'    => 'Découvrez la différence *Bricareau*',
				'intro'    => "Découvrez une fusion unique entre technologie de pointe et expertise humaine. Nous concevons des écosystèmes hydriques intelligents pour protéger votre santé et garantir une pureté absolue à chaque goutte, pour aujourd'hui et pour demain.",
				'features' => array(
					array( 'icon' => 'shield-check', 'title' => 'Fournisseur de confiance', 'description' => 'Plus de 20 000 foyers canadiens nous font confiance chaque jour pour garantir la pureté de leur eau grâce à nos solutions éprouvées.' ),
					array( 'icon' => 'settings', 'title' => 'Solutions multiples', 'description' => 'Du simple système résidentiel aux grandes installations industrielles, nous concevons des solutions sur mesure qui répondent parfaitement à vos besoins.' ),
					array( 'icon' => 'team', 'title' => 'Équipe hautement qualifiée', 'description' => 'Nos techniciens certifiés mettent leur expertise à votre service pour vous garantir une installation impeccable et des équipements performants.' ),
					array( 'icon' => 'support-agent', 'title' => 'Support Premium & Réactif', 'description' => "Profitez d'une tranquillité d'esprit absolue grâce à notre assistance ultra-réactive et nos programmes d'entretien préventif." ),
					array( 'icon' => 'trending-up', 'title' => 'Rentable', 'description' => "Rentabilisez votre investissement grâce à nos équipements haute performance, spécialement conçus pour réduire vos coûts d'entretien et votre facture énergétique." ),
					array( 'icon' => 'leaf', 'title' => 'Engagement écologique', 'description' => "Nous intégrons des systèmes éco-responsables de nouvelle génération pour préserver les ressources hydriques et minimiser l'empreinte écologique." ),
				),
				'ctaText'  => 'Pourquoi nous choisir ?',
				'ctaUrl'   => '/pourquoi-choisir-bricareau',
			),
		),
		array(
			'bricareau/testimonials',
			array(
				'eyebrow'   => 'La Parole à Nos Clients',
				'title'     => "L'excellence reconnue par\n*ceux qui nous font* confiance.",
				'statValue' => '+20 000',
				'statLabel' => 'Installations réussies',
				'statText'  => 'Des foyers et entreprises nous font confiance au quotidien pour leur eau.',
				'count'     => 8,
			),
		),
		array(
			'bricareau/service-area',
			array(
				'eyebrow'         => 'Territoire',
				'title'           => "Partout où vous avez besoin d'une *eau filtrée de meilleure qualité.*",
				'intro'           => "Nos équipes couvrent l'ensemble de la région métropolitaine pour des installations, de la maintenance et des dépannages rapides.",
				'backgroundImage' => $img( 'montreal_dark_map.png' ),
				'regions'         => array(
					array( 'name' => 'Ile de Montréal', 'description' => 'Intervention rapide en milieu urbain' ),
					array( 'name' => 'Rive-Nord', 'description' => 'Laval, Terrebonne, Blainville' ),
					array( 'name' => 'Rive-Sud', 'description' => 'Longueuil, Brossard, Boucherville' ),
					array( 'name' => 'Laurentides', 'description' => 'Saint-Jérôme et ses environs' ),
					array( 'name' => 'Lanaudière', 'description' => 'Repentigny, Mascouche' ),
					array( 'name' => 'Montérégie', 'description' => 'Vaudreuil, Saint-Hyacinthe' ),
				),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'       => 'Consultation Gratuite',
				'title'         => "Laissez-nous vous aider\nà trouver *la solution adaptée.*",
				'body'          => 'Fini les doutes sur la qualité de votre eau. Obtenez un diagnostic sur-mesure et découvrez le système de traitement parfait pour vos besoins.',
				'ctaText'       => 'Nous joindre',
				'ctaUrl'        => '/consultation',
				'image'         => $img( 'water testing.jpeg', "Analyse d'eau" ),
				'imageTitle'    => "Systèmes d'eau sur mesure par Bricareau",
				'imagePosition' => 'left',
				'background'    => 'white',
				'cardIcon'      => 'phone',
				'cardTitle'     => 'Assistance Experte',
				'cardText'      => 'Diagnostic sur mesure avec un technicien qualifié.',
			),
		),
	),
);
