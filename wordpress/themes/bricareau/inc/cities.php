<?php
/**
 * City pages: /traitement-eau/<ville>/ (TraitementEauVille.tsx on the develop branch), and
 * /en/water-treatment/<ville>/ in English.
 *
 * One WordPress page per language, "traitement-eau" (inc/seed/pages/traitement-eau.php) and its
 * Polylang translation "water-treatment" (inc/seed/pages-en/), is the template of every city:
 * {ville} in its blocks, SEO title and description becomes the city name. Only the cities of
 * bricareau_cities() have a page; another slug is a 404.
 *
 * /traitement-eau/ alone sends the visitor to their city, found from their IP address on the
 * server (bricareau_visitor_city()), or to the default city when it is not in the list.
 */

defined( 'ABSPATH' ) || exit;

// Slug of the template page in each language.
const BRICAREAU_CITY_PAGES = array(
	'fr' => 'traitement-eau',
	'en' => 'water-treatment',
);

// City used when the visitor's IP address gives no listed city (local IP, outside Québec…).
const BRICAREAU_DEFAULT_CITY = 'montreal';

/**
 * Cities with a page, slug => display name. Slugs are lowercase without accents, like
 * sanitize_title() makes them; a city missing from $names gets its slug capitalised.
 *
 * @return array<string, string>
 */
function bricareau_cities() {
	static $cities = null;
	if ( null !== $cities ) {
		return $cities;
	}

	$slugs = array(
		// Régions.
		'rive-nord', 'rive-sud', 'laurentides', 'lanaudiere', 'monteregie', 'estrie', 'outaouais', 'mauricie', 'gaspesie', 'cote-nord',
		// Montréal, Laval, Longueuil et l'Ouest-de-l'Île.
		'montreal', 'laval', 'longueuil', 'brossard', 'saint-lambert', 'verdun', 'lasalle', 'lachine', 'anjou', 'montreal-nord', 'saint-leonard',
		'cote-saint-luc', 'saint-laurent', 'dollard-des-ormeaux', 'pierrefonds', 'pointe-claire', 'kirkland', 'beaconsfield', 'dorval', 'baie-d-urfe',
		'ile-perrot', 'pincourt', 'sainte-anne-de-bellevue', 'senneville', 'ile-bizard', 'mont-royal', 'westmount', 'outremont', 'cote-des-neiges',
		'ahuntsic-cartierville', 'fabreville', 'laval-sur-le-lac', 'sainte-dorothee', 'le-vieux-longueuil', 'saint-hubert', 'greenfield-park',
		// Rive-Nord, Laurentides et Lanaudière.
		'blainville', 'boisbriand', 'bois-des-filion', 'deux-montagnes', 'lorraine', 'mirabel', 'rosemere', 'sainte-therese', 'saint-eustache',
		'terrebonne', 'mascouche', 'repentigny', 'l-assomption', 'lavaltrie', 'epiphanie', 'joliette', 'rawdon', 'saint-jerome',
		'sainte-agathe-des-monts', 'sainte-adele', 'sainte-sophie', 'mont-tremblant', 'saint-sauveur', 'lachute', 'argenteuil',
		'sainte-marthe-sur-le-lac', 'pointe-calumet', 'saint-joseph-du-lac', 'oka', 'saint-benoit', 'saint-augustin', 'saint-colomban',
		'sainte-anne-des-plaines', 'saint-janvier', 'saint-lin-laurentides', 'prevost', 'piedmont', 'sainte-anne-des-lacs', 'lachenaie',
		'charlemagne', 'saint-canut', 'saint-sulpice', 'sainte-julienne', 'saint-calixte', 'lanoraie', 'berthierville', 'saint-hippolyte',
		// Rive-Sud et Montérégie.
		'saint-bruno-de-montarville', 'saint-bruno-montarville', 'boucherville', 'varennes', 'sainte-julie', 'mcmasterville', 'beloeil',
		'saint-basile-le-grand', 'chambly', 'carignan', 'chateauguay', 'salaberry-de-valleyfield', 'vaudreuil-dorion', 'beauharnois',
		'sorel-tracy', 'saint-jean-sur-richelieu', 'granby', 'saint-hyacinthe', 'huntingdon', 'candiac', 'saint-constant', 'saint-philippe',
		'saint-remi', 'saint-michel', 'saint-mathieu', 'delson', 'sainte-catherine', 'kahnawake', 'saint-lazare', 'mercier', 'les-cedres',
		'notre-dame-de-l-ile-perrot', 'vercheres', 'contrecoeur',
		// Québec et environs.
		'quebec', 'levis', 'sainte-foy', 'beauport', 'charlesbourg', 'loretteville', 'l-ancienne-lorette', 'sillery', 'cap-rouge', 'val-belair',
		'donnacona', 'saint-raymond', 'portneuf',
		// Estrie.
		'sherbrooke', 'magog', 'lac-megantic', 'coaticook', 'windsor', 'asbestos', 'val-des-sources', 'bromptonville', 'waterville',
		// Outaouais.
		'gatineau', 'hull', 'aylmer', 'buckingham', 'masson-angers', 'cantley', 'chelsea', 'pontiac', 'maniwaki',
		// Saguenay–Lac-Saint-Jean.
		'saguenay', 'chicoutimi', 'jonquiere', 'la-baie', 'alma', 'saint-felicien', 'roberval', 'dolbeau-mistassini', 'metabetchouan-lac-a-la-croix',
		// Mauricie et Centre-du-Québec.
		'trois-rivieres', 'shawinigan', 'grand-mere', 'la-tuque', 'drummondville', 'victoriaville', 'plessisville', 'becancour', 'nicolet',
		// Bas-Saint-Laurent et Gaspésie.
		'rimouski', 'riviere-du-loup', 'matane', 'amqui', 'mont-joli', 'temiscouata-sur-le-lac', 'pohenegamook', 'cabano', 'gaspe', 'perce',
		'chandler', 'new-carlisle', 'bonaventure', 'sainte-anne-des-monts', 'murdochville', 'les-iles-de-la-madeleine', 'cap-aux-meules',
		// Côte-Nord.
		'sept-iles', 'baie-comeau', 'port-cartier', 'havre-saint-pierre', 'natashquan', 'forestville', 'tadoussac',
		// Abitibi-Témiscamingue et Nord-du-Québec.
		'rouyn-noranda', 'val-d-or', 'amos', 'la-sarre', 'malartic', 'senneterre', 'ville-marie', 'chibougamau', 'chapais', 'lebel-sur-quevillon',
		'matagami', 'radisson', 'chisasibi', 'kuujjuaq',
	);

	// Names the capitalised slug gets wrong (accents, apostrophes, spaces).
	$names = array(
		'lanaudiere'                   => 'Lanaudière',
		'monteregie'                   => 'Montérégie',
		'gaspesie'                     => 'Gaspésie',
		'cote-nord'                    => 'Côte-Nord',
		'montreal'                     => 'Montréal',
		'montreal-nord'                => 'Montréal-Nord',
		'saint-leonard'                => 'Saint-Léonard',
		'lasalle'                      => 'LaSalle',
		'cote-saint-luc'               => 'Côte-Saint-Luc',
		'cote-des-neiges'              => 'Côte-des-Neiges',
		'baie-d-urfe'                  => "Baie-d'Urfé",
		'ile-perrot'                   => 'Île-Perrot',
		'ile-bizard'                   => 'Île-Bizard',
		'sainte-dorothee'              => 'Sainte-Dorothée',
		'le-vieux-longueuil'           => 'Le Vieux-Longueuil',
		'greenfield-park'              => 'Greenfield Park',
		'rosemere'                     => 'Rosemère',
		'sainte-therese'               => 'Sainte-Thérèse',
		'l-assomption'                 => "L'Assomption",
		'epiphanie'                    => "L'Épiphanie",
		'saint-jerome'                 => 'Saint-Jérôme',
		'sainte-adele'                 => 'Sainte-Adèle',
		'saint-benoit'                 => 'Saint-Benoît',
		'prevost'                      => 'Prévost',
		'mcmasterville'                => 'McMasterville',
		'chateauguay'                  => 'Châteauguay',
		'saint-remi'                   => 'Saint-Rémi',
		'les-cedres'                   => 'Les Cèdres',
		'notre-dame-de-l-ile-perrot'   => "Notre-Dame-de-l'Île-Perrot",
		'vercheres'                    => 'Verchères',
		'contrecoeur'                  => 'Contrecœur',
		'quebec'                       => 'Québec',
		'levis'                        => 'Lévis',
		'l-ancienne-lorette'           => "L'Ancienne-Lorette",
		'val-belair'                   => 'Val-Bélair',
		'lac-megantic'                 => 'Lac-Mégantic',
		'jonquiere'                    => 'Jonquière',
		'la-baie'                      => 'La Baie',
		'saint-felicien'               => 'Saint-Félicien',
		'metabetchouan-lac-a-la-croix' => 'Métabetchouan–Lac-à-la-Croix',
		'trois-rivieres'               => 'Trois-Rivières',
		'grand-mere'                   => 'Grand-Mère',
		'la-tuque'                     => 'La Tuque',
		'becancour'                    => 'Bécancour',
		'riviere-du-loup'              => 'Rivière-du-Loup',
		'temiscouata-sur-le-lac'       => 'Témiscouata-sur-le-Lac',
		'pohenegamook'                 => 'Pohénégamook',
		'gaspe'                        => 'Gaspé',
		'perce'                        => 'Percé',
		'new-carlisle'                 => 'New Carlisle',
		'les-iles-de-la-madeleine'     => 'Les Îles-de-la-Madeleine',
		'sept-iles'                    => 'Sept-Îles',
		'val-d-or'                     => "Val-d'Or",
		'la-sarre'                     => 'La Sarre',
		'lebel-sur-quevillon'          => 'Lebel-sur-Quévillon',
	);

	$cities = array();
	foreach ( $slugs as $slug ) {
		$cities[ $slug ] = $names[ $slug ] ?? bricareau_city_name_from_slug( $slug );
	}
	return $cities;
}

/**
 * "saint-joseph-du-lac" -> "Saint-Joseph-du-Lac": each word capitalised except the
 * particles inside the name.
 */
function bricareau_city_name_from_slug( $slug ) {
	$particles = array( 'de', 'du', 'des', 'la', 'le', 'les', 'sur', 'aux', 'en' );
	$words     = explode( '-', $slug );
	foreach ( $words as $i => $word ) {
		$words[ $i ] = $i > 0 && in_array( $word, $particles, true ) ? $word : ucfirst( $word );
	}
	return implode( '-', $words );
}

/**
 * Listed city slug matching a name or slug ("Saint-Jérôme", "saint jerome"), or ''.
 */
function bricareau_city_slug( $name ) {
	$slug = sanitize_title( str_replace( "'", '-', (string) $name ) );
	return isset( bricareau_cities()[ $slug ] ) ? $slug : '';
}

/**
 * City of the page being shown: array{slug, name}, or null outside a city page.
 */
function bricareau_current_city() {
	$slug = (string) get_query_var( 'bricareau_ville' );
	if ( '' === $slug || ! isset( bricareau_cities()[ $slug ] ) ) {
		return null;
	}
	return array( 'slug' => $slug, 'name' => bricareau_cities()[ $slug ] );
}

/**
 * Path of the template page in a language (the current one by default): "traitement-eau",
 * "en/water-treatment". Polylang puts the other languages in a folder.
 */
function bricareau_city_base( $lang = null ) {
	$lang = $lang ?? bricareau_lang();
	if ( ! isset( BRICAREAU_CITY_PAGES[ $lang ] ) || bricareau_default_lang() === $lang ) {
		return BRICAREAU_CITY_PAGES[ bricareau_default_lang() ] ?? BRICAREAU_CITY_PAGES['fr'];
	}
	return $lang . '/' . BRICAREAU_CITY_PAGES[ $lang ];
}

function bricareau_city_url( $slug, $lang = null ) {
	// The stored address: on English pages Polylang adds /en to home_url().
	return trailingslashit( get_option( 'home' ) ) . bricareau_city_base( $lang ) . '/' . $slug . '/';
}

/**
 * Published template pages, keyed by language.
 *
 * @return array<string, WP_Post>
 */
function bricareau_city_template_pages() {
	$pages = array();
	foreach ( BRICAREAU_CITY_PAGES as $lang => $slug ) {
		$page = get_page_by_path( $slug );
		if ( $page && 'publish' === $page->post_status ) {
			$pages[ $lang ] = $page;
		}
	}
	return $pages;
}

/**
 * Replaces {ville} with the current city name. $escape: the text is HTML.
 */
function bricareau_city_text( $text, $escape = false ) {
	$city = bricareau_current_city();
	if ( ! $city || ! is_string( $text ) || ! str_contains( $text, '{ville}' ) ) {
		return $text;
	}
	return str_replace( '{ville}', $escape ? esc_html( $city['name'] ) : $city['name'], $text );
}

/**
 * The visitor's IP address. Behind Cloudflare or a proxy, the address it forwards. A spoofed
 * header only changes which city page the visitor lands on.
 */
function bricareau_visitor_ip() {
	$candidates = array(
		$_SERVER['HTTP_CF_CONNECTING_IP'] ?? '', // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
		explode( ',', $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '' )[0], // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
		$_SERVER['REMOTE_ADDR'] ?? '', // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
	);
	foreach ( $candidates as $ip ) {
		$ip = trim( $ip );
		if ( filter_var( $ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE ) ) {
			return $ip;
		}
	}
	return '';
}

/**
 * Listed city slug of the visitor, found from their IP address, or ''.
 *
 * Uses the city header of the server or CDN when there is one (Cloudflare "Add visitor
 * location headers", GeoIP module), otherwise asks ipinfo.io (token in the
 * BRICAREAU_IPINFO_TOKEN constant of wp-config.php; without it, ipinfo's small anonymous
 * quota). Lookups are cached per IP for a week.
 */
function bricareau_visitor_city() {
	$header_city = $_SERVER['HTTP_CF_IPCITY'] ?? $_SERVER['GEOIP_CITY'] ?? ''; // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
	$header_reg  = $_SERVER['HTTP_CF_REGION_CODE'] ?? $_SERVER['GEOIP_REGION'] ?? 'QC'; // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
	if ( '' !== $header_city ) {
		return 'QC' === strtoupper( $header_reg ) ? bricareau_city_slug( $header_city ) : '';
	}

	$ip = bricareau_visitor_ip();
	if ( '' === $ip ) {
		return '';
	}
	$key    = 'bricareau_geo_' . md5( $ip );
	$cached = get_transient( $key );
	if ( false !== $cached ) {
		return $cached;
	}

	$url      = 'https://ipinfo.io/' . rawurlencode( $ip ) . '/json' . ( defined( 'BRICAREAU_IPINFO_TOKEN' ) ? '?token=' . rawurlencode( BRICAREAU_IPINFO_TOKEN ) : '' );
	$response = wp_remote_get( $url, array( 'timeout' => 2 ) );
	if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {
		// Not cached: a quota or network error should not stick for a week.
		return '';
	}
	$data = json_decode( wp_remote_retrieve_body( $response ), true );
	// Several listed names also exist outside Québec (Windsor, Kirkland, Granby…).
	$slug = is_array( $data ) && 'CA' === ( $data['country'] ?? '' ) && in_array( $data['region'] ?? '', array( 'Quebec', 'Québec' ), true )
		? bricareau_city_slug( $data['city'] ?? '' )
		: '';
	set_transient( $key, $slug, WEEK_IN_SECONDS );
	return $slug;
}

add_action(
	'init',
	function () {
		foreach ( BRICAREAU_CITY_PAGES as $lang => $slug ) {
			$base = 'fr' === $lang ? $slug : $lang . '/' . $slug;
			add_rewrite_rule( '^' . $base . '/([^/]+)/?$', 'index.php?pagename=' . $slug . '&bricareau_ville=$matches[1]' . ( 'fr' === $lang ? '' : '&lang=' . $lang ), 'top' );
		}
		// Existing sites get the rules once, without a trip to Réglages > Permaliens.
		$version = implode( ',', BRICAREAU_CITY_PAGES );
		if ( get_option( 'bricareau_city_rewrite' ) !== $version ) {
			flush_rewrite_rules( false );
			update_option( 'bricareau_city_rewrite', $version );
		}
	}
);

add_filter(
	'query_vars',
	function ( $vars ) {
		$vars[] = 'bricareau_ville';
		return $vars;
	}
);

add_action(
	'template_redirect',
	function () {
		if ( ! is_page( array_values( BRICAREAU_CITY_PAGES ) ) ) {
			return;
		}
		$requested = (string) get_query_var( 'bricareau_ville' );

		// /traitement-eau/, /en/water-treatment/: the visitor's city. Never cached, the answer depends on the visitor.
		if ( '' === $requested ) {
			nocache_headers();
			wp_safe_redirect( bricareau_city_url( bricareau_visitor_city() ?: BRICAREAU_DEFAULT_CITY ), 302 );
			exit;
		}

		if ( bricareau_current_city() ) {
			return;
		}
		// "Saint-Jérôme", "saint jerome"… -> its page.
		$slug = bricareau_city_slug( rawurldecode( $requested ) );
		if ( $slug ) {
			wp_safe_redirect( bricareau_city_url( $slug ), 301 );
			exit;
		}
		global $wp_query;
		$wp_query->set_404();
		status_header( 404 );
		nocache_headers();
	}
);

// {ville} in the blocks of the template page.
add_filter(
	'render_block',
	fn( $html, $block ) => str_starts_with( (string) ( $block['blockName'] ?? '' ), 'bricareau/' ) ? bricareau_city_text( $html, true ) : $html,
	10,
	2
);

// {ville} in the title and description, with or without Yoast.
add_filter( 'pre_get_document_title', 'bricareau_city_text', 20 );
add_filter(
	'document_title_parts',
	function ( $parts ) {
		return array_map( 'bricareau_city_text', $parts );
	}
);
foreach ( array( 'wpseo_title', 'wpseo_metadesc', 'wpseo_opengraph_title', 'wpseo_opengraph_desc', 'wpseo_twitter_title', 'wpseo_twitter_description' ) as $bricareau_filter ) {
	add_filter( $bricareau_filter, 'bricareau_city_text' );
}

// Each city page is its own canonical URL.
$bricareau_city_canonical = function ( $url ) {
	$city = bricareau_current_city();
	return $city ? bricareau_city_url( $city['slug'] ) : $url;
};
add_filter( 'get_canonical_url', $bricareau_city_canonical );
add_filter( 'wpseo_canonical', $bricareau_city_canonical );
add_filter( 'wpseo_opengraph_url', $bricareau_city_canonical );

// FR / EN switch and hreflang links: the same city in the other language.
add_filter(
	'pll_translation_url',
	function ( $url, $lang ) {
		$city = bricareau_current_city();
		return $city && isset( BRICAREAU_CITY_PAGES[ $lang ] ) ? bricareau_city_url( $city['slug'], $lang ) : $url;
	},
	10,
	2
);

// Yoast schema (JSON-LD): the city name and URL instead of the template page's.
add_filter(
	'wpseo_schema_graph',
	function ( $graph ) {
		$city = bricareau_current_city();
		if ( ! $city ) {
			return $graph;
		}
		$permalink = get_permalink( get_queried_object_id() );
		$url       = bricareau_city_url( $city['slug'] );
		array_walk_recursive(
			$graph,
			function ( &$value ) use ( $permalink, $url ) {
				if ( ! is_string( $value ) ) {
					return;
				}
				if ( str_starts_with( $value, $permalink ) ) {
					$value = $url . substr( $value, strlen( $permalink ) );
				}
				$value = bricareau_city_text( $value );
			}
		);
		return $graph;
	}
);

// Yoast sitemap: the city pages of every language (villes-sitemap.xml) instead of the template
// pages, which only redirect.
add_filter(
	'wpseo_exclude_from_sitemap_by_post_ids',
	fn( $ids ) => array_merge( (array) $ids, wp_list_pluck( bricareau_city_template_pages(), 'ID' ) )
);

add_action(
	'init',
	function () {
		global $wpseo_sitemaps;
		if ( ! $wpseo_sitemaps instanceof WPSEO_Sitemaps ) {
			return;
		}
		$wpseo_sitemaps->register_sitemap(
			'villes',
			function () {
				global $wpseo_sitemaps;
				$pages = bricareau_city_template_pages();
				if ( ! $pages ) {
					$wpseo_sitemaps->bad_sitemap = true;
					return;
				}
				$urls = '';
				foreach ( $pages as $lang => $page ) {
					$modified = get_post_modified_time( 'c', true, $page );
					foreach ( array_keys( bricareau_cities() ) as $slug ) {
						$urls .= '<url><loc>' . esc_url( bricareau_city_url( $slug, $lang ) ) . '</loc><lastmod>' . esc_html( $modified ) . '</lastmod></url>' . "\n";
					}
				}
				$wpseo_sitemaps->set_sitemap( '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n" . $urls . '</urlset>' );
			}
		);
	}
);

add_filter(
	'wpseo_sitemap_index',
	function ( $xml ) {
		$pages = bricareau_city_template_pages();
		if ( ! $pages ) {
			return $xml;
		}
		$modified = max( array_map( fn( $page ) => get_post_modified_time( 'U', true, $page ), $pages ) );
		return $xml . '<sitemap><loc>' . esc_url( home_url( '/villes-sitemap.xml' ) ) . '</loc><lastmod>' . esc_html( gmdate( 'c', $modified ) ) . '</lastmod></sitemap>' . "\n";
	}
);
