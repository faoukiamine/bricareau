<?php
/**
 * Homepage, English (translation of pages/accueil.php).
 *
 * Links keep the French paths: bricareau_url() sends them to the English pages.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'home',
	'title'           => 'Home',
	'translation_of'  => 'accueil',
	'front'           => true,
	'seo_title'       => 'Bricareau | Water Treatment Specialist in Québec',
	'seo_description' => 'Water softeners, filtration, UV disinfection and drinking water fountains for homes, offices, hotels and restaurants in Greater Montréal. Free consultation.',
	'blocks'          => array(
		array(
			'bricareau/hero-slider',
			array(
				'slides'  => array(
					array(
						'label'       => 'Residential',
						'title'       => "Pure, *healthy water*\nfor your home.",
						'description' => 'Protect your family and your appliances with custom residential water filtration and softening systems.',
						'image'       => array_merge( $img( 'family-preparing-dinner-together.jpg', 'Family preparing dinner with pure water' ), array( 'focal' => array( 'x' => 0.85, 'y' => 0.3 ) ) ),
					),
					array(
						'label'       => 'Offices',
						'title'       => "*Premium* hydration\nfor your teams.",
						'description' => 'Improve well-being at the office with bottle-free purified water fountains that are cost-effective and eco-friendly.',
						'image'       => array_merge( $img( '2148496250.jpg', 'Office team enjoying filtered water' ), array( 'focal' => array( 'x' => 0.55, 'y' => 0.3 ) ) ),
					),
					array(
						'label'       => 'Hotels and restaurants',
						'title'       => "*Crystal-clear* excellence\nfor fine dining.",
						'description' => 'Perfect water to bring out the taste of your coffee, protect your steam ovens and serve flawless ice, thanks to our water treatment systems.',
						'image'       => array_merge( $img( 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000', 'Restaurant dining room' ), array( 'focal' => array( 'x' => 0.7, 'y' => 0.55 ) ) ),
					),
				),
				'ctaText' => 'Book a free consultation',
				'ctaUrl'  => '/consultation',
				'stats'   => array(
					array( 'value' => '25+', 'label' => "Years of expertise\nin water treatment" ),
					array( 'value' => '4', 'label' => "Regions served\naround Montréal" ),
					array( 'value' => '100%', 'label' => "Tailored solutions,\nnever generic" ),
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
				'eyebrow'       => 'Residential Solutions',
				'title'         => "Your tap water\n*deserves better.*",
				'body'          => 'Your well-being starts with the quality of your water. Say goodbye to the hassles of scale, chlorine and iron that damage your plumbing and appliances and dry out your skin and hair. Bricareau analyzes your water precisely and designs a custom system to guarantee pure water for your whole family.',
				'ctaText'       => 'Discover our solutions',
				'ctaUrl'        => '/solutions-d-adoucissement-de-filtration-et-de-purification-d-eau-residentielles',
				'image'         => $img( '21425.png', 'Residential water treatment system' ),
				'imageTitle'    => 'Water treatment in Québec by Bricareau',
				'imagePosition' => 'right',
				'background'    => 'light',
				'cardIcon'      => 'droplets',
				'cardTitle'     => 'Guaranteed expertise',
				'cardText'      => 'Custom water analysis and installation by our certified technicians.',
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'       => 'Offices & Businesses',
				'title'         => "Filtered water, a *profitable*\ninvestment for your business.",
				'body'          => 'Give your team pure, refreshing drinking water. By replacing the recurring purchase of bottles and jugs with our plumbed-in filtration fountains, you save significantly, eliminate stock management and improve everyday well-being at work.',
				'ctaText'       => 'Our office solutions',
				'ctaUrl'        => '/solutions-de-traitement-d-eau-pour-offices-et-bureaux',
				'image'         => $img( 'bureau-megamenu.jpg', 'Water treatment system for offices' ),
				'imageTitle'    => 'Professional water analysis by Bricareau',
				'imagePosition' => 'left',
				'background'    => 'white',
				'cardIcon'      => 'trending-up',
				'cardTitle'     => 'Cost savings',
				'cardText'      => 'Stop buying and storing plastic bottles.',
				'cardMirrored'  => true,
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'       => 'Hotels & Restaurants',
				'title'         => "Because your guests'\n*experience* also depends on water.",
				'body'          => 'In hotels and restaurants, water is involved at every step: cooking, ice, laundry, dishes, showers. Poorly treated water leads to hidden costs, worn-out equipment and service quality below your standards.',
				'ctaText'       => 'Discover our hospitality offer',
				'ctaUrl'        => '/solutions-de-traitement-et-filtration-d-eau-pour-hotels-et-restaurants',
				'image'         => $img( '522.jpg', 'Water treatment system for hotels and restaurants' ),
				'imageTitle'    => 'Water expert by Bricareau',
				'imagePosition' => 'right',
				'background'    => 'light',
				'cardIcon'      => 'award',
				'cardTitle'     => 'Superior quality',
				'cardText'      => 'Protect your equipment and enhance the taste of your dishes and drinks.',
			),
		),
		array(
			'bricareau/features-grid',
			array(
				'eyebrow'  => 'Our Expertise',
				'title'    => 'Discover the *Bricareau* difference',
				'intro'    => 'Experience a unique blend of advanced technology and human expertise. We design smart water systems that protect your health and guarantee purity in every drop, today and tomorrow.',
				'features' => array(
					array( 'icon' => 'shield-check', 'title' => 'Trusted provider', 'description' => 'More than 20,000 Canadian households trust us every day to keep their water pure with our proven solutions.' ),
					array( 'icon' => 'settings', 'title' => 'Many solutions', 'description' => 'From simple residential systems to large industrial installations, we design custom solutions that fit your needs perfectly.' ),
					array( 'icon' => 'team', 'title' => 'Highly qualified team', 'description' => 'Our certified technicians put their expertise to work for you, for flawless installation and high-performance equipment.' ),
					array( 'icon' => 'support-agent', 'title' => 'Responsive premium support', 'description' => 'Enjoy complete peace of mind with our fast support and preventive maintenance programs.' ),
					array( 'icon' => 'trending-up', 'title' => 'Cost-effective', 'description' => 'Get a return on your investment with high-performance equipment designed to cut maintenance costs and energy bills.' ),
					array( 'icon' => 'leaf', 'title' => 'Environmental commitment', 'description' => 'We use next-generation eco-friendly systems to preserve water resources and reduce our environmental footprint.' ),
				),
				'ctaText'  => 'Why choose us?',
				'ctaUrl'   => '/pourquoi-choisir-bricareau',
			),
		),
		array(
			'bricareau/testimonials',
			array(
				'eyebrow'   => 'What Our Clients Say',
				'title'     => "Excellence recognized by\n*those who* trust us.",
				'statValue' => '20,000+',
				'statLabel' => 'Successful installations',
				'statText'  => 'Homes and businesses trust us with their water every day.',
				'count'     => 8,
			),
		),
		array(
			'bricareau/service-area',
			array(
				'eyebrow'         => 'Service Area',
				'title'           => 'Wherever you need *better filtered water.*',
				'intro'           => 'Our teams cover the entire metropolitan area for fast installations, maintenance and repairs.',
				'backgroundImage' => $img( 'montreal_dark_map.png' ),
				'regions'         => array(
					array( 'name' => 'Island of Montréal', 'description' => 'Fast service in the city' ),
					array( 'name' => 'North Shore', 'description' => 'Laval, Terrebonne, Blainville' ),
					array( 'name' => 'South Shore', 'description' => 'Longueuil, Brossard, Boucherville' ),
					array( 'name' => 'Laurentians', 'description' => 'Saint-Jérôme and surroundings' ),
					array( 'name' => 'Lanaudière', 'description' => 'Repentigny, Mascouche' ),
					array( 'name' => 'Montérégie', 'description' => 'Vaudreuil, Saint-Hyacinthe' ),
				),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'       => 'Free Consultation',
				'title'         => "Let us help you\nfind *the right solution.*",
				'body'          => 'No more doubts about your water quality. Get a custom diagnosis and discover the perfect treatment system for your needs.',
				'ctaText'       => 'Contact us',
				'ctaUrl'        => '/consultation',
				'image'         => $img( 'water testing.jpeg', 'Water analysis' ),
				'imageTitle'    => 'Custom water systems by Bricareau',
				'imagePosition' => 'left',
				'background'    => 'white',
				'cardIcon'      => 'phone',
				'cardTitle'     => 'Expert support',
				'cardText'      => 'Custom diagnosis with a qualified technician.',
			),
		),
	),
);
