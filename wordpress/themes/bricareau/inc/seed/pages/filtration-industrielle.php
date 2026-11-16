<?php
/**
 * Industrial filtration — src/pages/FiltrationIndustrielle.tsx. The study request is the "etude-technique" form.
 *
 * @var callable $img  fn( string $asset, string $alt ): array
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'            => 'filtration-industrielle',
	'title'           => 'Filtration industrielle',
	'seo_title'       => 'Filtres d\'eau industriels | Multimédia, Charbon, Catalytique | Bricareau',
	'seo_description' => 'Découvrez nos solutions de filtration industrielle : filtres multimédias, à charbon actif, catalytiques et à sable vert pour une eau de process ultra-pure.',
	'menu_order'      => 46,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "L'excellence de la filtration, le bouclier de vos opérations industrielles.",
				'text'        => "Protégez vos équipements critiques et garantissez une eau de process irréprochable avec nos systèmes de filtration industriels lourds : Multimédia, Charbon Actif, Catalytique et Sable Vert.",
				'ctaText'     => 'Planifiez une consultation gratuite',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( "Filtres d'eau industriels.jpg", "Filtres d'eau industriels Bricareau" ),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'variant'    => 'swiss',
				'label'      => "Le coût de l'inaction",
				'title'      => "L'eau brute : le destructeur silencieux de vos opérations.",
				'intro'      => "À l'échelle industrielle, l'eau n'est jamais \"juste de l'eau\". Chargée de sédiments, métaux dissous et produits chimiques, elle s'infiltre dans vos chaînes de production et provoque des dommages irréversibles si elle n'est pas traitée avec une précision d'ingénierie.",
				'cards'      => array(
					array( 'icon' => 'droplets', 'title' => 'Colmatage RO', 'text' => "Destruction prématurée des membranes d'osmose inverse." ),
					array( 'icon' => 'alert-circle', 'title' => 'Corrosion', 'text' => 'Dégradation accélérée des chaudières et tuyauteries.' ),
					array( 'icon' => 'trending-up', 'title' => 'Surcoûts', 'text' => "Baisse d'efficacité thermique et pertes énergétiques." ),
					array( 'icon' => 'clock', 'title' => 'Arrêts', 'text' => "Temps d'arrêt non planifiés et maintenance d'urgence." ),
				),
			),
		),
		array(
			'bricareau/statement',
			array(
				'theme'    => 'dark',
				'label'    => "L'impact financier réel.",
				'title'    => "Durée de vie des équipements -60 %\nCoûts de maintenance +45 %",
				'text'     => "\"Investir dans un pré-traitement adéquat n'est pas une dépense. C'est l'assurance vie de votre chaîne de production.\"",
				'textSize' => 'medium',
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'variant' => 'swiss',
				'label'   => 'INGÉNIERIE DE PRÉCISION',
				'title'   => "L'infrastructure vitale de vos opérations.",
				'intro'   => "Une eau mal filtrée entraîne l'encrassement des membranes d'osmose inverse, la corrosion des chaudières et des arrêts de production coûteux. Nos filtres sécurisent vos processus à 100%.",
				'cards'   => array(
					array( 'icon' => 'waves', 'title' => 'Débits Massifs', 'text' => 'Des skids conçus pour traiter des centaines de mètres cubes par heure sans perte de charge critique.' ),
					array( 'icon' => 'shield-check', 'title' => 'Protection RO', 'text' => "Une barrière impénétrable contre les particules et le chlore pour prolonger la vie de vos membranes d'osmose." ),
					array( 'icon' => 'layers', 'title' => 'Filtration Spécialisée', 'text' => 'Fer, manganèse, H2S ou sédiments ultra-fins : nous utilisons le catalyseur exact pour votre problématique.' ),
					array( 'icon' => 'cog', 'title' => 'Automatisation', 'text' => 'Vannes PLC intelligentes pour des lavages à contre-courant déclenchés par pression différentielle ou minuterie.' ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'       => 'technologies',
				'variant'      => 'simple',
				'label'        => 'GAMME INDUSTRIELLE',
				'title'        => 'Nos technologies de pointe pour chaque application.',
				'intro'        => "Bricareau conçoit et assemble des skids de filtration industriels exploitant les meilleurs médias du marché. Qu'il s'agisse de clarifier l'eau de surface ou de neutraliser des métaux lourds provenant de forages profonds, nos systèmes sont conçus pour l'endurance extrême.",
				'products'     => array(
					array( 'name' => 'Filtres Multimédias', 'image' => $img( '7kbp.png', 'Filtres Multimédias' ), 'text' => "La solution ultime pour la turbidité et les sédiments. L'utilisation superposée d'Anthracite, de Sable de quartz et de Grenat permet une filtration en profondeur jusqu'à 10 microns, avec un lit qui retient la saleté sur tout son volume, et pas seulement en surface." ),
					array( 'name' => 'Charbon Actif (GAC)', 'image' => $img( 'Industrial Water Softeners.png', 'Charbon Actif (GAC)' ), 'text' => "Essentiel pour l'adsorption chimique. Ces tours éliminent le chlore libre, les chloramines, pesticides et COV. Indispensable pour protéger les membranes d'osmose inverse de la dégradation chimique oxydative." ),
					array( 'name' => 'Filtres Catalytiques', 'image' => $img( 'filtre-catalytique-new.jpg', 'Filtres Catalytiques' ), 'text' => "Utilisant des médias avancés (Katalox Light, Pyrolox), ces filtres agissent comme un puissant catalyseur pour oxyder et éliminer des niveaux très élevés de Fer, de Manganèse et de Sulfure d'Hydrogène (H2S), sans forcément recourir à des produits chimiques en continu." ),
					array( 'name' => 'Filtres multi-cartouches', 'image' => $img( 'IMG_FILTRE_QFINOX.jpg', 'Filtres multi-cartouches' ), 'text' => "Systèmes de filtration haute capacité utilisant de multiples cartouches pour retenir efficacement les particules fines. Conception en acier inoxydable, idéale pour un polissage final ou en pré-traitement d'osmose inverse." ),
					array( 'name' => 'Filtres Birm', 'image' => $img( 'filtre-catalytique-new.jpg', 'Filtres Birm' ), 'text' => "Média filtrant économique et très efficace pour la réduction du fer et du manganèse. Le Birm agit comme un catalyseur insoluble pour accélérer la réaction entre l'oxygène dissous et le fer, ne nécessitant qu'un simple lavage à contre-courant sans produits chimiques." ),
					array( 'name' => "Skids de filtration d'eau sur mesure", 'image' => $img( 'skids-sur-mesure-nobg.png', "Skids de filtration d'eau sur mesure" ), 'text' => "Conception et assemblage de systèmes complets sur châssis (skids) parfaitement adaptés à votre cahier des charges. Intégration de tous les éléments (réservoirs, vannes, tuyauterie, automatisation) pour une installation 'plug-and-play'." ),
				),
				'bannerTitle'  => "Besoin d'aide pour dimensionner votre système ?",
				'bannerText'   => "Nos ingénieurs vous accompagnent pour choisir la technologie de pointe adaptée aux besoins spécifiques de votre eau de process.",
				'bannerButton' => 'ÉTUDE TECHNIQUE',
				'bannerUrl'    => '#etude-technique',
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'variant' => 'steps',
				'background' => 'light',
				'label'   => 'NOTRE EXPERTISE',
				'title'   => "Le processus Bricareau, de l'analyse à l'exploitation.",
				'intro'   => 'Nous ne vendons pas de simples filtres, nous concevons des solutions complètes. Découvrez notre approche d\'ingénierie étape par étape pour sécuriser votre investissement.',
				'cards'   => array(
					array( 'icon' => 'activity', 'title' => 'Audit & Analyse', 'text' => "Évaluation complète de votre eau brute, de vos débits critiques et de vos contraintes d'espace. Nous ne laissons aucune place au hasard." ),
					array( 'icon' => 'layers', 'title' => 'Ingénierie Sur-Mesure', 'text' => 'Conception du système, dimensionnement des vannes et sélection précise des médias filtrants pour cibler exactement vos contaminants.' ),
					array( 'icon' => 'cog', 'title' => 'Fabrication & Intégration', 'text' => "Assemblage rigoureux des skids dans nos ateliers, suivi d'une installation sur votre site planifiée pour minimiser les arrêts de production." ),
					array( 'icon' => 'shield-check', 'title' => 'Support & Maintenance', 'text' => 'Surveillance des performances, fourniture de consommables et interventions préventives pour garantir une longévité maximale des équipements.' ),
				),
			),
		),
		array(
			'bricareau/form-section',
			array(
				'anchor'     => 'etude-technique',
				'layout'     => 'contact-plain',
				'formId'     => $form( 'etude-technique' ),
				'title'      => 'Demandez votre étude technique.',
				'intro'      => 'Nos ingénieurs analysent vos paramètres (débit, pression, qualité d\'eau) pour dimensionner un système de filtration industriel parfaitement adapté à votre usine.',
				'asideItems' => array(
					array( 'icon' => 'phone', 'title' => 'Support Industriel', 'value' => '1-855-264-9328', 'sub' => 'DIVISION INGÉNIERIE' ),
					array( 'icon' => 'mail', 'title' => 'Email Technique', 'value' => 'industriel@bricareau.ca', 'sub' => 'DIVISION INGÉNIERIE' ),
				),
			),
		),
		array(
			'bricareau/faq',
			array(
				'title' => "_Expertise technique_\nFoire aux questions",
				'items' => array(
					array( 'question' => 'Quelle est la différence entre un filtre à sable et un filtre multimédia ?', 'answer' => "Un filtre à sable simple retient les particules en surface. Un filtre multimédia utilise plusieurs couches (Anthracite, Sable, Grenat) de densités différentes, permettant de piéger les particules sur toute la profondeur du lit. Cela triple la capacité de rétention et permet une filtration plus fine (jusqu'à 10 microns)." ),
					array( 'question' => 'Pourquoi le fer et le manganèse nécessitent-ils un filtre catalytique ou à sable vert ?', 'answer' => "Le fer et le manganèse dissous dans l'eau sont invisibles et traversent les filtres classiques. Les médias catalytiques ou le sable vert agissent comme des oxydants ou des catalyseurs : ils transforment le fer dissous en particules solides qui sont ensuite piégées dans le lit filtrant, puis expulsées lors du lavage à contre-courant." ),
					array( 'question' => 'Le filtre à charbon actif est-il nécessaire pour une application industrielle ?', 'answer' => "Si votre eau de process nécessite d'être exempte de chlore (qui endommage gravement les membranes d'osmose inverse), de chloramines ou de composés organiques volatils (COV) qui altèrent le goût dans l'industrie alimentaire, le charbon actif est la seule technologie viable pour les absorber efficacement." ),
					array( 'question' => 'Comment est gérée la maintenance de ces systèmes industriels ?', 'answer' => "Nos systèmes sont équipés de vannes de contrôle automatisées (PLC ou électroniques) qui gèrent les cycles de lavage à contre-courant (backwash) en fonction du volume d'eau traité ou de la différence de pression (Delta-P), garantissant un fonctionnement continu avec une supervision minimale." ),
				),
			),
		),
	),
);
