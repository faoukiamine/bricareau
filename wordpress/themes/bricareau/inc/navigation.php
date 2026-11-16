<?php
/**
 * Default header mega-menu and footer links, ported from src/data/navigation.ts and
 * src/components/Footer.tsx of the React site. `wp bricareau seed` turns them into
 * WordPress menus (inc/menus.php); they are only shown while no menu is assigned.
 */

defined( 'ABSPATH' ) || exit;

const BRICAREAU_PHONE_DISPLAY = '(855) 264-9328';
const BRICAREAU_PHONE_HREF    = 'tel:18552649328';

function bricareau_default_header_menu() {
	$img = BRICAREAU_URI . '/assets/images/menu/';

	return array(
		array(
			'name'   => __( 'Qui sommes-nous ?', 'bricareau' ),
			'type'   => 'groups',
			'groups' => array(
				array(
					array( 'title' => __( 'Notre compagnie', 'bricareau' ), 'description' => __( 'Découvrez notre histoire, notre vision et pourquoi nous sommes la référence au Québec ?', 'bricareau' ), 'href' => '/pourquoi-choisir-bricareau' ),
					array( 'title' => __( 'Notre processus', 'bricareau' ), 'description' => __( "De l'analyse à l'installation, explorez notre méthodologie d'ingénierie étape par étape.", 'bricareau' ), 'href' => '/notre-processus' ),
				),
				array(
					array( 'title' => __( 'Durabilité', 'bricareau' ), 'description' => __( "Découvrez nos engagements écologiques et notre mission pour réduire l'empreinte plastique.", 'bricareau' ), 'href' => '/durabilite' ),
					array( 'title' => __( 'Carrières', 'bricareau' ), 'description' => __( "Rejoignez une équipe d'experts passionnés par l'innovation et l'excellence environnementale.", 'bricareau' ), 'href' => '/carrieres' ),
				),
			),
			'promo'  => array(
				'title'    => __( 'Prêt à aimer votre eau?', 'bricareau' ),
				'subtitle' => __( "Communiquez dès aujourd’hui avec l'un de nos experts en eau ou appelez-nous au 855-264-9328.", 'bricareau' ),
				'image'    => $img . 'promo-qui-sommes-nous.jpg',
				'link'     => '/contact-form',
				'cta'      => __( 'CONTACTEZ-NOUS', 'bricareau' ),
			),
		),
		array(
			'name'  => __( 'Ce que nous faisons', 'bricareau' ),
			'type'  => 'cards',
			'cards' => array(
				array(
					'title' => __( 'RÉSIDENTIEL', 'bricareau' ),
					'image' => $img . 'residentiel.jpg',
					'href'  => '/solutions-d-adoucissement-de-filtration-et-de-purification-d-eau-residentielles',
					'links' => array(
						array( 'title' => __( "Analyses & Tests d'eau", 'bricareau' ), 'description' => __( 'Analysez et purifiez : une barrière infaillible contre les contaminants pour la sécurité de votre famille.', 'bricareau' ), 'href' => '/analyses-et-tests-d-eau?ref=residentiel' ),
						array( 'title' => __( "Adoucisseurs d'eau Résidentiels", 'bricareau' ), 'description' => __( 'Éliminez le calcaire pour protéger vos électroménagers et retrouver une peau douce.', 'bricareau' ), 'href' => '/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire' ),
						array( 'title' => __( "Filtres d'eau spécialisés pour toute la maison", 'bricareau' ), 'description' => __( 'Des solutions sur mesure pour neutraliser le fer, le soufre et les sédiments tenaces.', 'bricareau' ), 'href' => '/systemes-de-filtration-d-eau-specialises-pour-toute-la-maison' ),
						array( 'title' => __( "Systèmes de filtration d'eau sous évier", 'bricareau' ), 'description' => __( 'Une eau de qualité bouteille directement à votre robinet, sans les déchets plastiques.', 'bricareau' ), 'href' => '/stations-d-eau-potables-sous-l-evier-de-la-cuisine' ),
						array( 'title' => __( 'Systèmes de désinfection UV', 'bricareau' ), 'description' => __( "Stérilisez votre eau sans produits chimiques pour une tranquillité d'esprit absolue.", 'bricareau' ), 'href' => '/systemes-de-desinfection-uv' ),
						array( 'title' => __( "Fontaines et refroidisseurs d'eau", 'bricareau' ), 'description' => __( "L'hydratation parfaite à portée de main avec nos distributeurs élégants et performants.", 'bricareau' ), 'href' => '/fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche' ),
						array( 'title' => __( "Filtres d'eau de remplacement", 'bricareau' ), 'description' => __( "Cartouches d'origine certifiées pour maintenir l'excellence de votre filtration.", 'bricareau' ), 'href' => '/filtres-d-eau-de-remplacement' ),
					),
				),
				array(
					'title' => __( 'BUREAUX & ENTREPRISES', 'bricareau' ),
					'image' => $img . 'bureaux.jpg',
					'href'  => '/solutions-de-traitement-d-eau-pour-offices-et-bureaux',
					'links' => array(
						array( 'title' => __( "Fontaines d'eau modernes", 'bricareau' ), 'description' => __( 'Design épuré et eau pure à volonté pour revitaliser vos équipes sans logistique de bouteilles.', 'bricareau' ), 'href' => '/fontaines-et-refroidisseurs-d-eau-modernes-pour-entreprises' ),
						array( 'title' => __( "Systèmes de traitement d'eau centralisés", 'bricareau' ), 'description' => __( 'Ingénierie sur mesure pour alimenter en eau pure des étages entiers de bureaux.', 'bricareau' ), 'href' => '/systemes-de-filtration-d-eau-centralises' ),
					),
				),
				array(
					'title' => __( 'HÔTELLERIE ET RESTAURATION', 'bricareau' ),
					'image' => $img . 'hotellerie.jpg',
					'href'  => '/solutions-de-traitement-et-filtration-d-eau-pour-hotels-et-restaurants',
					'links' => array(
						array( 'title' => __( "Adoucisseur d'eau commercial", 'bricareau' ), 'description' => __( 'Éradiquez le tartre pour prolonger la vie de vos équipements de cuisine et de buanderie.', 'bricareau' ), 'href' => '/adoucisseurs-eau-commerciaux' ),
						array( 'title' => __( "Filtration d'eau", 'bricareau' ), 'description' => __( "Une qualité irréprochable de l'accueil jusqu'aux chambres pour sublimer l'expérience client.", 'bricareau' ), 'href' => '/filtration-hotels-restaurants' ),
						array( 'title' => __( 'Solutions pour Brasseries', 'bricareau' ), 'description' => __( "L'eau parfaite, fondation d'une bière exceptionnelle et d'un processus de brassage constant.", 'bricareau' ), 'href' => '/solutions-brasseries' ),
						array( 'title' => __( 'Filtres pour Machines à Café', 'bricareau' ), 'description' => __( 'Révélez chaque arôme de vos grains et protégez vos machines espresso des pannes coûteuses.', 'bricareau' ), 'href' => '/filtres-eau-machine-cafe' ),
					),
				),
			),
		),
		array(
			'name'   => __( 'Ressources', 'bricareau' ),
			'type'   => 'groups',
			'groups' => array(
				array(
					array( 'title' => __( "Analyses & Tests d'eau", 'bricareau' ), 'description' => __( "Réservez votre audit de qualité d'eau et obtenez un rapport détaillé de nos ingénieurs.", 'bricareau' ), 'href' => '/analyses-et-tests-d-eau?ref=ressources' ),
					array( 'title' => __( 'Nos Services', 'bricareau' ), 'description' => __( "Installation premium, entretien préventif et dépannage d'urgence par nos techniciens.", 'bricareau' ), 'href' => '/services-de-traitement-eau' ),
					array( 'title' => __( 'Diagnostic', 'bricareau' ), 'description' => __( 'Identifiez le système parfait pour votre besoin grâce à notre outil interactif en ligne.', 'bricareau' ), 'href' => '/diagnostic' ),
				),
				array(
					array( 'title' => __( "Contaminants de l'eau", 'bricareau' ), 'description' => __( "Découvrez les principaux polluants de l'eau et comment nos systèmes vous en protègent.", 'bricareau' ), 'href' => '/contaminants-de-l-eau' ),
					array( 'title' => __( 'Blog', 'bricareau' ), 'description' => __( "Guides pratiques, conseils d'experts et actualités pour tout savoir sur l'eau pure.", 'bricareau' ), 'href' => '/blog' ),
					array( 'title' => __( 'FAQ', 'bricareau' ), 'description' => __( 'Des réponses claires et rapides aux questions courantes sur nos technologies.', 'bricareau' ), 'href' => '/faq' ),
				),
			),
			'promo'  => array(
				'title'    => __( "Analyse d'eau", 'bricareau' ),
				'subtitle' => __( 'Une eau parfaite commence par une analyse rigoureuse.', 'bricareau' ),
				'image'    => $img . 'promo-ressources.jpg',
				'link'     => '/analyses-et-tests-d-eau',
				'cta'      => __( "APPRENEZ-EN DAVANTAGE SUR LES TESTS D'EAU", 'bricareau' ),
			),
		),
	);
}

function bricareau_default_footer_columns() {
	return array(
		array(
			'title' => __( 'Résidentiel', 'bricareau' ),
			'href'  => '/solutions-d-adoucissement-de-filtration-et-de-purification-d-eau-residentielles',
			'links' => array(
				array( __( "Analyses & Tests d'eau", 'bricareau' ), '/analyses-et-tests-d-eau' ),
				array( __( "Adoucisseurs d'eau Résidentiels", 'bricareau' ), '/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire' ),
				array( __( "Filtres d'eau spécialisés", 'bricareau' ), '/systemes-de-filtration-d-eau-specialises-pour-toute-la-maison' ),
				array( __( 'Filtres de remplacement', 'bricareau' ), '/filtres-d-eau-de-remplacement' ),
				array( __( 'Systèmes de filtration sous évier', 'bricareau' ), '/stations-d-eau-potables-sous-l-evier-de-la-cuisine' ),
				array( __( 'Systèmes de désinfection UV', 'bricareau' ), '/systemes-de-desinfection-uv' ),
				array( __( 'Fontaines et refroidisseurs', 'bricareau' ), '/fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche' ),
			),
		),
		array(
			'title' => __( 'BUREAUX & ENTREPRISES', 'bricareau' ),
			'href'  => '/solutions-de-traitement-d-eau-pour-offices-et-bureaux',
			'links' => array(
				array( __( "Fontaines d'eau modernes", 'bricareau' ), '/fontaines-et-refroidisseurs-d-eau-modernes-pour-entreprises' ),
				array( __( "Systèmes de traitement d'eau centralisés", 'bricareau' ), '/systemes-de-filtration-d-eau-centralises' ),
			),
		),
		array(
			'title' => __( 'Hôtellerie et restauration', 'bricareau' ),
			'href'  => '/solutions-de-traitement-et-filtration-d-eau-pour-hotels-et-restaurants',
			'links' => array(
				array( __( "Adoucisseur d'eau commercial", 'bricareau' ), '/adoucisseurs-eau-commerciaux' ),
				array( __( "Filtration d'eau pour hôtels et restaurants", 'bricareau' ), '/filtration-hotels-restaurants' ),
				array( __( 'Solutions pour Brasseries', 'bricareau' ), '/solutions-brasseries' ),
				array( __( 'Filtres pour Machines à Café', 'bricareau' ), '/filtres-eau-machine-cafe' ),
			),
		),
	);
}

function bricareau_default_social_links() {
	return array(
		array( 'facebook', 'Facebook', 'https://www.facebook.com/bricareauwaterspecialist' ),
		array( 'twitter', 'Twitter', 'https://x.com/Bricareau' ),
		array( 'youtube', 'Youtube', 'http://www.youtube.com/bricareau' ),
		array( 'instagram', 'Instagram', 'http://www.instagram.com/bricareau' ),
	);
}

function bricareau_default_footer_legal_links() {
	return array(
		array( __( 'FAQ', 'bricareau' ), '/faq' ),
		array( __( 'Contact', 'bricareau' ), '/contact' ),
		array( __( 'Politique de confidentialité', 'bricareau' ), '/politique-de-confidentialite' ),
		array( __( "Conditions d'utilisation", 'bricareau' ), '/conditions-generales-utilisation' ),
	);
}

/**
 * Breadcrumb parents, ported from src/utils/breadcrumbLabels.ts (lowercase
 * slugs, as WordPress stores them). A parent without a slug is a menu group
 * shown as plain text.
 *
 * @return array<string, array{label: string, slug: ?string}>
 */
function bricareau_breadcrumb_parents() {
	$groups = array(
		'qui-sommes-nous'     => array( 'label' => 'Qui sommes-nous ?', 'slug' => null ),
		'ce-que-nous-faisons' => array( 'label' => 'Ce que nous faisons', 'slug' => null ),
		'ressources'          => array( 'label' => 'Ressources', 'slug' => null ),
		'residentiel'         => array( 'label' => 'Résidentiel', 'slug' => 'solutions-d-adoucissement-de-filtration-et-de-purification-d-eau-residentielles' ),
		'bureaux'             => array( 'label' => 'Bureaux & Entreprises', 'slug' => 'solutions-de-traitement-d-eau-pour-offices-et-bureaux' ),
		'hotellerie'          => array( 'label' => 'Hôtellerie et restauration', 'slug' => 'solutions-de-traitement-et-filtration-d-eau-pour-hotels-et-restaurants' ),
	);

	$parents = array(
		'pourquoi-choisir-bricareau' => 'qui-sommes-nous',
		'notre-processus'            => 'qui-sommes-nous',
		'durabilite'                 => 'qui-sommes-nous',
		'carrieres'                  => 'qui-sommes-nous',
		$groups['residentiel']['slug'] => 'ce-que-nous-faisons',
		$groups['bureaux']['slug']     => 'ce-que-nous-faisons',
		$groups['hotellerie']['slug']  => 'ce-que-nous-faisons',
		'adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire'     => 'residentiel',
		'systemes-de-filtration-d-eau-specialises-pour-toute-la-maison'  => 'residentiel',
		'filtres-d-eau-de-remplacement'                                  => 'residentiel',
		'stations-d-eau-potables-sous-l-evier-de-la-cuisine'             => 'residentiel',
		'fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche'         => 'residentiel',
		'systemes-de-desinfection-uv'                                    => 'residentiel',
		'fontaines-et-refroidisseurs-d-eau-modernes-pour-entreprises'    => 'bureaux',
		'systemes-de-filtration-d-eau-centralises'                       => 'bureaux',
		'filtration-hotels-restaurants'                                  => 'hotellerie',
		'solutions-brasseries'                                           => 'hotellerie',
		'filtres-eau-machine-cafe'                                       => 'hotellerie',
		'adoucisseurs-eau-commerciaux'                                   => 'hotellerie',
		'analyses-et-tests-d-eau'                                        => 'ressources',
		'services-de-traitement-eau'                                     => 'ressources',
		'contaminants-de-l-eau'                                          => 'ressources',
		'faq'                                                            => 'ressources',
		'blog'                                                           => 'ressources',
		'diagnostic'                                                     => 'ressources',
		'filtration'                                                     => 'residentiel',
		'pieces'                                                         => 'ressources',
		'entreprises'                                                    => 'ce-que-nous-faisons',
		'industriel'                                                     => 'ce-que-nous-faisons',
		'filtration-industrielle'                                        => 'ce-que-nous-faisons',
	);

	$result = array();
	foreach ( $parents as $slug => $group ) {
		$result[ $slug ] = $groups[ $group ];
	}
	// Segment hubs sit under "Ce que nous faisons".
	foreach ( array( 'residentiel', 'bureaux', 'hotellerie' ) as $hub ) {
		$result[ $groups[ $hub ]['slug'] ] = $groups['ce-que-nous-faisons'];
	}
	return $result;
}

/**
 * Breadcrumb trail for the current page: [ [label, url|null], ... ] without "Accueil".
 */
function bricareau_breadcrumb_trail( $post = null ) {
	$blog = array(
		array( __( 'Ressources', 'bricareau' ), null ),
		array( __( 'Blog', 'bricareau' ), bricareau_translate_url( home_url( '/blog/' ) ) ),
	);

	if ( is_category() ) {
		return array_merge( $blog, array( array( single_cat_title( '', false ), null ) ) );
	}

	$post    = get_post( $post );
	$parents = bricareau_breadcrumb_parents();
	$trail   = 'post' === get_post_type( $post ) ? $blog : array();

	if ( ! $post ) {
		return $trail;
	}

	// Parents are keyed by the French slugs: an English page follows its French page,
	// and each parent is shown with its English title and link when it is translated.
	$slug = bricareau_source_post( $post )->post_name;
	$seen = array();
	while ( isset( $parents[ $slug ] ) && ! isset( $seen[ $slug ] ) ) {
		$seen[ $slug ] = true;
		$parent        = $parents[ $slug ];
		$label         = __( $parent['label'], 'bricareau' ); // phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText -- labels listed in bricareau_breadcrumb_parents().
		$url           = null;
		if ( $parent['slug'] ) {
			$url  = bricareau_translate_url( home_url( '/' . $parent['slug'] . '/' ) );
			$page = get_page_by_path( $parent['slug'] );
			$page = $page && function_exists( 'pll_get_post' ) ? pll_get_post( $page->ID ) : 0;
			$label = $page && ! get_post_meta( $page, 'bricareau_breadcrumb_label', true ) ? get_the_title( $page ) : $label;
		}
		array_unshift( $trail, array( $label, $url ) );
		if ( ! $parent['slug'] ) {
			break;
		}
		$slug = $parent['slug'];
	}

	$label   = get_post_meta( $post->ID, 'bricareau_breadcrumb_label', true ) ?: get_the_title( $post );
	$trail[] = array( $label, null );
	return $trail;
}

/**
 * Breadcrumb HTML (desktop only, like GlobalBreadcrumbs in the React app).
 *
 * @param string $spacing Classes placing the trail: by default it clears the fixed header.
 */
function bricareau_breadcrumbs( $spacing = 'mt-[90px] mb-6' ) {
	$items = array( '<a href="' . esc_url( bricareau_home_url() ) . '" class="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors">' . bricareau_icon( 'home', 'w-3.5 h-3.5 mr-1' ) . esc_html__( 'Accueil', 'bricareau' ) . '</a>' );
	$trail = bricareau_breadcrumb_trail();
	$last  = count( $trail ) - 1;

	foreach ( $trail as $i => [ $label, $url ] ) {
		if ( $url && $i !== $last ) {
			$items[] = '<a href="' . esc_url( $url ) . '" class="text-slate-600 hover:text-blue-600 transition-colors">' . esc_html( $label ) . '</a>';
		} else {
			$items[] = '<span class="font-medium line-clamp-1 max-w-[200px] md:max-w-md ' . ( $i === $last ? 'text-slate-900' : 'text-slate-500' ) . '"' . ( $i === $last ? ' aria-current="page"' : '' ) . '>' . esc_html( $label ) . '</span>';
		}
	}

	$separator = '<span class="text-slate-300" aria-hidden="true">' . bricareau_icon( 'chevron-right', 'w-3.5 h-3.5' ) . '</span>';
	return '<nav aria-label="' . esc_attr__( "Fil d'Ariane", 'bricareau' ) . '" class="hidden xl:block ' . esc_attr( $spacing ) . ' relative z-20"><div class="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">' . implode( $separator, $items ) . '</div></nav>';
}
