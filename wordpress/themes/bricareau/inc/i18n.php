<?php
/**
 * French / English site (Polylang).
 *
 * French is the default language, at the site root; English pages live under /en/
 * and are linked to their French page by Polylang. Theme texts are written in French
 * and translated in languages/en_CA.l10n.php (WordPress loads it when the page is in
 * English). Every internal link goes through bricareau_url(), which sends it to the
 * page in the current language when a translation exists: page contents, menus and
 * templates can keep their French paths.
 */

add_action( 'after_setup_theme', static fn() => load_theme_textdomain( 'bricareau', BRICAREAU_DIR . '/languages' ) );

/** Current language slug ("fr" or "en"); "fr" without Polylang. */
function bricareau_lang() {
	return function_exists( 'pll_current_language' ) ? ( pll_current_language() ?: bricareau_default_lang() ) : 'fr';
}

function bricareau_default_lang() {
	return function_exists( 'pll_default_language' ) ? ( pll_default_language() ?: 'fr' ) : 'fr';
}

/**
 * A theme data file (data/<name>) in the page language: data/en/<name> on English
 * pages when it exists.
 */
function bricareau_data_file( $name ) {
	$lang       = bricareau_lang();
	$translated = BRICAREAU_DIR . '/data/' . $lang . '/' . $name;
	return bricareau_default_lang() !== $lang && file_exists( $translated ) ? $translated : BRICAREAU_DIR . '/data/' . $name;
}

/**
 * Runs $callback with the theme texts in English (emails of the English forms). The theme's
 * own translation file is loaded directly: switch_to_locale() needs a WordPress language
 * pack for en_CA, which is usually not installed.
 */
function bricareau_in_english( callable $callback ) {
	if ( 'en_CA' === determine_locale() ) {
		return $callback();
	}
	unload_textdomain( 'bricareau', true );
	load_textdomain( 'bricareau', BRICAREAU_DIR . '/languages/en_CA.mo', 'en_CA' );
	try {
		return $callback();
	} finally {
		unload_textdomain( 'bricareau', true );
		load_theme_textdomain( 'bricareau', BRICAREAU_DIR . '/languages' );
	}
}

/** Home page of the current language. */
function bricareau_home_url() {
	return function_exists( 'pll_home_url' ) ? pll_home_url() : home_url( '/' );
}

/**
 * A site URL (path or absolute) in the current language: the translated page or post
 * when there is one, the given URL otherwise. Query string and #anchor are kept.
 */
function bricareau_translate_url( $url ) {
	static $cache = array();
	$lang = bricareau_lang();
	if ( ! function_exists( 'pll_get_post' ) || bricareau_default_lang() === $lang ) {
		return $url;
	}
	if ( isset( $cache[ $lang ][ $url ] ) ) {
		return $cache[ $lang ][ $url ];
	}

	$parts = wp_parse_url( $url );
	// The stored address: on English pages Polylang adds /en to home_url().
	$home  = wp_parse_url( get_option( 'home' ) );
	if ( false === $parts || ( isset( $parts['host'] ) && $parts['host'] !== ( $home['host'] ?? '' ) ) ) {
		return $cache[ $lang ][ $url ] = $url;
	}
	$path   = trim( substr( $parts['path'] ?? '/', strlen( rtrim( $home['path'] ?? '', '/' ) ) ), '/' );
	$suffix = ( isset( $parts['query'] ) ? '?' . $parts['query'] : '' ) . ( isset( $parts['fragment'] ) ? '#' . $parts['fragment'] : '' );

	if ( '' === $path ) {
		$translated = pll_home_url( $lang );
	} else {
		$post       = get_page_by_path( $path, OBJECT, array( 'page', 'post' ) );
		$id         = $post ? pll_get_post( $post->ID, $lang ) : 0;
		$translated = $id ? get_permalink( $id ) : '';
	}
	if ( ! $translated ) {
		return $cache[ $lang ][ $url ] = $url;
	}
	// A bare "#anchor" stays on the page; other suffixes follow the translated URL.
	return $cache[ $lang ][ $url ] = $translated . $suffix;
}

/**
 * The page in the default language that a translated page belongs to (itself in French).
 */
function bricareau_source_post( $post ) {
	if ( ! $post || ! function_exists( 'pll_get_post' ) ) {
		return $post;
	}
	$source = pll_get_post( $post->ID, bricareau_default_lang() );
	return $source ? get_post( $source ) : $post;
}

/**
 * FR / EN switch: links to the same page in the other language (its home page
 * when the page is not translated yet). Empty without Polylang.
 *
 * @param string $class Extra classes on the wrapper.
 */
function bricareau_language_switcher( $class = '' ) {
	if ( ! function_exists( 'pll_the_languages' ) ) {
		return '';
	}
	$languages = pll_the_languages(
		array(
			'raw'                    => 1,
			'hide_if_no_translation' => 0,
			'hide_if_empty'          => 0,
		)
	);
	if ( count( (array) $languages ) < 2 ) {
		return '';
	}
	$links = array();
	foreach ( $languages as $language ) {
		$links[] = $language['current_lang']
			? sprintf( '<span aria-current="true" class="opacity-100">%s</span>', esc_html( strtoupper( $language['slug'] ) ) )
			: sprintf( '<a href="%1$s" hreflang="%2$s" lang="%2$s" class="opacity-60 hover:opacity-100 transition-opacity" title="%3$s">%4$s</a>', esc_url( $language['url'] ), esc_attr( $language['locale'] ? str_replace( '_', '-', $language['locale'] ) : $language['slug'] ), esc_attr( $language['name'] ), esc_html( strtoupper( $language['slug'] ) ) );
	}
	return '<nav class="flex items-center gap-2 text-[12px] font-black tracking-widest ' . esc_attr( $class ) . '" aria-label="' . esc_attr__( 'Langue', 'bricareau' ) . '">' . implode( '<span class="opacity-40" aria-hidden="true">|</span>', $links ) . '</nav>';
}

/**
 * Bricareau blocks take their French default texts from block.json when a page leaves an
 * attribute unset ("Voir toutes les questions"…). On a translated page, those defaults
 * are translated like the theme texts (languages/en_CA.l10n.php).
 */
add_filter(
	'render_block_data',
	static function ( $block ) {
		if ( ! str_starts_with( (string) ( $block['blockName'] ?? '' ), 'bricareau/' ) || bricareau_default_lang() === bricareau_lang() ) {
			return $block;
		}
		$type = WP_Block_Type_Registry::get_instance()->get_registered( $block['blockName'] );
		foreach ( (array) ( $type->attributes ?? array() ) as $name => $attribute ) {
			$default = $attribute['default'] ?? null;
			if ( ! isset( $block['attrs'][ $name ] ) && is_string( $default ) && '' !== $default ) {
				$block['attrs'][ $name ] = translate( $default, 'bricareau' ); // phpcs:ignore WordPress.WP.I18n -- defaults listed in the translation file.
			}
		}
		return $block;
	}
);
