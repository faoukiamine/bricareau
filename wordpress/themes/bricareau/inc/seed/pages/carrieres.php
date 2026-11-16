<?php
/**
 * Carrières — src/pages/Carrieres.tsx.
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'       => 'carrieres',
	'title'      => 'Carrières',
	'seo_title'  => 'Carrières | Bricareau',
	'menu_order' => 13,
	'blocks'     => array(
		array(
			'bricareau/page-hero',
			array(
				'fadeStop'   => '33',
				'label'      => 'Rejoignez-nous',
				'labelStyle' => 'pill',
				'title'      => "Faites de l’eau\n*votre mission !*",
				'text'       => "Mettez votre talent au service d'une cause essentielle. Intégrez une entreprise québécoise dynamique où chaque rôle a un impact direct sur la santé de nos clients et la préservation de notre environnement.",
				'ctaText'    => 'Découvrir nos avantages',
				'ctaUrl'     => '#nos-piliers',
				'image'      => $img( '2148192458.jpg', 'Carrières Bricareau' ),
			),
		),
		array(
			'bricareau/statement',
			array(
				'anchor' => 'notre-mission',
				'theme'  => 'light',
				'label'  => "Notre Mission de l'employeur",
				'title'  => "L'excellence par\n*l'humain.*",
				'text'   => "Chez Bricareau, nous savons que notre technologie de pointe n'est rien sans le talent des hommes et des femmes qui la conçoivent, l'installent et la soutiennent.\n\nNous offrons bien plus qu'un emploi : nous offrons une carrière stimulante, des défis techniques constants et la fierté de participer activement à la protection de la santé et de l'environnement.",
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'anchor'     => 'nos-piliers',
				'variant'    => 'numbered',
				'background' => 'light',
				'label'      => 'Pourquoi Bricareau ?',
				'title'      => "Votre carrière,\n*notre priorité.*",
				'intro'      => "En tant que leader dans le traitement de l'eau au Québec, Bricareau se spécialise dans l'installation de systèmes de filtration avancés, d'adoucisseurs d'eau et de purificateurs. Nous recrutons des professionnels engagés pour offrir une eau pure et sécuritaire aux secteurs résidentiel, commercial et industriel.",
				'rows'       => array(
					array(
						'title' => 'Impact Environnemental',
						'text'  => 'Donnez du sens à votre travail. Chaque système que vous installez ou vendez contribue directement à réduire la pollution plastique et à améliorer la santé des Québécois.',
						'image' => $img( '2232.jpg', "Impact Environnemental - analyse d'eau professionnelle" ),
					),
					array(
						'title' => 'Développement Continu',
						'color' => 'green',
						'text'  => "L'ingénierie évolue, nous aussi. Nous investissons massivement dans la formation continue de nos équipes pour maintenir notre standard d'expertise au plus haut niveau.",
						'image' => $img( '2243.jpg', "Développement Continu - systèmes d'eau sur mesure" ),
					),
					array(
						'title' => "Équipe d'Experts",
						'text'  => "Évoluez aux côtés des meilleurs. Notre culture d'entreprise valorise le mentorat, le partage de connaissances et la rigueur technique dans un environnement convivial.",
						'image' => $img( '2148826999.jpg', "Équipe d'Experts - expert en eau" ),
					),
				),
			),
		),
		array(
			'bricareau/job-list',
			array(
				'label' => 'Emplois',
				'title' => "Nos offres d'emploi",
				'intro' => 'Découvrez nos postes ouverts et faites le premier pas vers une carrière florissante.',
				'jobs'  => array(
					array( 'title' => "Technicien en traitement de l'eau", 'department' => 'Installation & Service', 'type' => 'Temps plein', 'location' => 'Montréal & Environs', 'experience' => '2-5 ans', 'url' => '/contact' ),
					array( 'title' => 'Conseiller aux ventes techniques', 'department' => 'Ventes Commerciales', 'type' => 'Temps plein', 'location' => 'Hybride', 'experience' => '3+ ans', 'url' => '/contact' ),
				),
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'overlay' => 'dark',
				'title'   => "Rejoignez\n*l'aventure.*",
				'text'    => 'Vous ne trouvez pas de poste correspondant à votre profil mais vous partagez notre vision de l’excellence ? Envoyez-nous votre candidature spontanée.',
				'ctaText' => 'Envoyer mon CV',
				'ctaUrl'  => '/contact',
				'image'   => $img( '2149008937.jpg', 'Candidature Bricareau' ),
			),
		),
	),
);
