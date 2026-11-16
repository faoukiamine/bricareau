<?php
/**
 * SEO titles and descriptions.
 *
 * With Yoast SEO active (recommended), it outputs everything and the titles and
 * descriptions are edited in each page's Yoast box; `wp bricareau seo-yoast` copies
 * the imported values there. Without it, the theme prints them from its own fields
 * (bricareau_seo_title / bricareau_seo_description, filled by the import).
 */

defined( 'ABSPATH' ) || exit;

const BRICAREAU_DEFAULT_DESCRIPTION = "Protégez votre eau, protégez votre famille. Plus de 20000 foyers canadiens font confiance à Bricareau pour le traitement d'eau résidentiel, commercial et industriel.";

// Pages kept out of search engines, as in the React site's robots.txt.
// French and English slugs.
const BRICAREAU_NOINDEX_PAGES = array( 'desabonnement', 'desabonnement-succes', 'unsubscribe', 'unsubscribe-confirmed' );

function bricareau_seo_plugin_active() {
	return defined( 'WPSEO_VERSION' ) || defined( 'RANK_MATH_VERSION' );
}

add_filter(
	'pre_get_document_title',
	function ( $title ) {
		if ( ! bricareau_seo_plugin_active() && is_singular() ) {
			$custom = get_post_meta( get_queried_object_id(), 'bricareau_seo_title', true );
			if ( $custom ) {
				return $custom;
			}
		}
		return $title;
	}
);

add_action(
	'wp_head',
	function () {
		if ( bricareau_seo_plugin_active() ) {
			return;
		}
		$description = is_singular() ? get_post_meta( get_queried_object_id(), 'bricareau_seo_description', true ) : '';
		$description = bricareau_city_text( $description ?: BRICAREAU_DEFAULT_DESCRIPTION );
		printf( '<meta name="description" content="%s">' . "\n", esc_attr( $description ) );
		printf( '<meta property="og:title" content="%s">' . "\n", esc_attr( wp_get_document_title() ) );
		printf( '<meta property="og:description" content="%s">' . "\n", esc_attr( $description ) );
		echo '<meta property="og:type" content="website">' . "\n";
		if ( is_singular() ) {
			printf( '<meta property="og:url" content="%s">' . "\n", esc_url( wp_get_canonical_url() ?: get_permalink() ) );
		}
	},
	1
);

add_filter(
	'wp_robots',
	function ( $robots ) {
		if ( is_page( BRICAREAU_NOINDEX_PAGES ) ) {
			$robots['noindex'] = true;
		}
		return $robots;
	}
);

/**
 * Copies the theme's titles and descriptions into Yoast SEO and sets its templates
 * for archives, search and 404 to the React site's titles.
 *
 * @param bool $force Overwrite values already set in Yoast.
 * @return array{titles: int, descriptions: int, skipped: int}
 */
function bricareau_copy_seo_to_yoast( $force = false ) {
	$counts = array( 'titles' => 0, 'descriptions' => 0, 'skipped' => 0 );
	$posts  = get_posts(
		array(
			'post_type'   => array( 'page', 'post' ),
			'post_status' => 'any',
			'numberposts' => -1,
			'fields'      => 'ids',
		)
	);

	foreach ( $posts as $id ) {
		// Yoast replaces %%variables%%; a literal %% in a title must not be read as one.
		$title       = str_replace( '%%', '%', (string) get_post_meta( $id, 'bricareau_seo_title', true ) );
		$description = (string) get_post_meta( $id, 'bricareau_seo_description', true );
		// Pages without their own description showed the site-wide one; keep that.
		if ( '' === $description && 'page' === get_post_type( $id ) ) {
			$description = BRICAREAU_DEFAULT_DESCRIPTION;
		}

		foreach ( array( '_yoast_wpseo_title' => $title, '_yoast_wpseo_metadesc' => $description ) as $key => $value ) {
			if ( '' === $value ) {
				continue;
			}
			if ( '' !== (string) get_post_meta( $id, $key, true ) && ! $force ) {
				++$counts['skipped'];
				continue;
			}
			update_post_meta( $id, $key, $value );
			++$counts[ '_yoast_wpseo_title' === $key ? 'titles' : 'descriptions' ];
		}

		if ( in_array( get_post_field( 'post_name', $id ), BRICAREAU_NOINDEX_PAGES, true ) ) {
			update_post_meta( $id, '_yoast_wpseo_meta-robots-noindex', '1' );
		}
	}

	// Applied once (Yoast ships its own defaults); afterwards they are edited in Yoast > Réglages.
	if ( class_exists( 'WPSEO_Options' ) && ( $force || ! get_option( 'bricareau_yoast_configured' ) ) ) {
		$templates = array(
			'title-tax-category'    => '%%term_title%% - Articles de Blog | Bricareau',
			'metadesc-tax-category' => 'Découvrez tous nos articles et guides complets concernant %%term_title%%.',
			'title-search-wpseo'    => 'Résultats de recherche pour "%%searchphrase%%" - Bricareau',
			'title-404-wpseo'       => "Page Introuvable | Bricareau Traitement d'Eau",
			// The site has no author or date archives worth indexing.
			'disable-author'        => true,
			'disable-date'          => true,
			'company_or_person'     => 'company',
			'company_name'          => 'Bricareau Water Specialist',
		);
		foreach ( $templates as $key => $value ) {
			WPSEO_Options::set( $key, $value );
		}
		update_option( 'bricareau_yoast_configured', 1, false );
	}
	return $counts;
}

if ( defined( 'WP_CLI' ) && WP_CLI ) {
	/**
	 * Copies the imported SEO titles and descriptions into Yoast SEO.
	 *
	 * ## OPTIONS
	 *
	 * [--force]
	 * : Overwrite titles and descriptions already edited in Yoast.
	 */
	WP_CLI::add_command(
		'bricareau seo-yoast',
		function ( $args, $assoc_args ) {
			if ( ! defined( 'WPSEO_VERSION' ) ) {
				WP_CLI::error( "Yoast SEO n'est pas activé (wp plugin install wordpress-seo --activate)." );
			}
			$counts = bricareau_copy_seo_to_yoast( ! empty( $assoc_args['force'] ) );
			WP_CLI::success( "{$counts['titles']} titres et {$counts['descriptions']} descriptions copiés dans Yoast ({$counts['skipped']} valeurs déjà modifiées conservées)." );
		}
	);
}
