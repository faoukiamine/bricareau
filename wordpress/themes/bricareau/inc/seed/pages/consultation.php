<?php
/**
 * Consultation — src/pages/page-consultation.tsx (requests are emailed, see inc/requests.php).
 *
 * @var callable $img  fn( string $asset, string $alt ): array
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'            => 'consultation',
	'title'           => 'Consultation',
	'seo_title'       => "Consultation Gratuite sur l'Eau au Québec | Bricareau",
	'seo_description' => "Obtenez une évaluation gratuite de la qualité de votre eau. Planifiez une consultation téléphonique sans engagement pour trouver la solution de traitement idéale.",
	'menu_order'      => 60,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'    => 'product',
				'label'     => 'Service Technique en ligne',
				'liveLabel' => true,
				'title'     => "Prenez le contrôle de *la qualité*\nde votre eau.",
				'text'      => "Organisez une consultation téléphonique gratuite avec l'un de nos experts d'eau. Nous analyserons vos besoins, répondrons à vos questions et vous guiderons vers la meilleure solution d'adoucissement ou de filtration, sans aucune vente à pression.",
				'ctaText'   => "Commencer l'évaluation",
				'ctaUrl'    => '#consultation-form',
				'image'     => $img( '8786.jpg', "Consultation gratuite sur l'eau" ),
			),
		),
		array(
			'bricareau/form-section',
			array(
				'anchor'      => 'consultation-form',
				'layout'      => 'benefits',
				'formId'      => $form( 'consultation' ),
				'asideText'   => 'Remplissez le formulaire à droite pour choisir le moment idéal. Nos experts vous contacteront pour une évaluation complète et sans engagement de vos besoins.',
				'asideItems'  => array(
					array( 'icon' => 'phone', 'title' => 'Appel de conseil', 'value' => '15 min avec un expert certifié' ),
					array( 'icon' => 'shield-check', 'title' => 'Zéro Engagement', 'value' => 'Conseils 100% impartiaux' ),
					array( 'icon' => 'award', 'title' => 'Professionnels certifiés', 'value' => "Le meilleur de l'industrie" ),
					array( 'icon' => 'star', 'title' => 'Satisfaction', 'value' => 'Plus de 20,000 foyers' ),
				),
				'quote'       => "Une approche humaine et technique qui a totalement changé notre vision du traitement de l'eau. Simple, efficace et sans aucune pression.",
				'quoteAuthor' => 'Marc-Antoine D.',
				'quoteRole'   => 'Client Privé • Montréal',
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'variant'    => 'steps',
				'background' => 'light',
				'title'      => "Le parcours de\n*votre consultation*",
				'accentStyle' => 'green',
				'intro'      => 'Simple, transparent et professionnel. Voici comment nous préparons votre solution.',
				'cards'      => array(
					array( 'icon' => 'smartphone', 'title' => 'Réservation Rapide', 'text' => 'Choisissez votre créneau en 30 secondes.' ),
					array( 'icon' => 'user-check', 'title' => "Validation d'expert", 'text' => "Nous analysons votre demande avant l'appel." ),
					array( 'icon' => 'phone', 'title' => 'Analyse de votre besoin', 'text' => '15 min pour comprendre votre eau.' ),
					array( 'icon' => 'clock', 'title' => 'Rapport Dédié', 'text' => 'Recevez votre solution personnalisée.' ),
				),
			),
		),
		array(
			'bricareau/faq',
			array(
				'title'        => "Comment se déroule\n*notre consultation ?*",
				'intro'        => "Voici les questions les plus fréquentes concernant notre processus d'évaluation gratuite.",
				'headerAlign'  => 'center',
				'headerBar'    => false,
				'visibleCount' => 4,
				'items'        => array(
					array( 'question' => 'Combien de temps dure la consultation téléphonique ?', 'answer' => 'La consultation dure généralement entre 15 et 30 minutes, selon vos questions et la complexité de votre situation.' ),
					array( 'question' => 'La consultation est-elle vraiment sans obligation d\'achat ?', 'answer' => 'Absolument. Notre objectif premier est de vous informer et d\'évaluer vos besoins. Vous êtes totalement libre de vos décisions suite à cet appel.' ),
					array( 'question' => "Quelles informations dois-je préparer avant l'appel ?", 'answer' => "Il est utile de savoir si vous êtes sur l'eau de la ville ou sur un puits, le nombre de personnes résidant dans la maison, et quels sont les problèmes d'eau que vous avez remarqués (goût, odeur, calcaire, etc.)." ),
					array( 'question' => 'Un technicien devra-t-il se déplacer chez moi ?', 'answer' => "Dans la majorité des cas, nous pouvons faire une excellente pré-évaluation par téléphone. Si une analyse d'eau plus poussée ou une vérification de plomberie est nécessaire, nous pourrons planifier un déplacement." ),
					array( 'question' => 'Est-ce que je serai en contact avec un vendeur à pression ?', 'answer' => 'Non. Chez Bricareau, vous parlerez avec un expert conseiller technique. Notre approche est éducative et consultative, sans aucune pression de vente.' ),
					array( 'question' => 'Puis-je reporter ou annuler mon rendez-vous téléphonique ?', 'answer' => 'Oui, bien sûr. Si vous avez un empêchement, envoyez-nous simplement un courriel ou appelez-nous pour replanifier à votre convenance.' ),
				),
			),
		),
	),
);
