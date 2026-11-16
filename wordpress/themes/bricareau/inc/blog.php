<?php
/**
 * Blog helpers: articles are regular posts, grouped by the categories of src/data/blogCategories.ts.
 */

defined( 'ABSPATH' ) || exit;

/**
 * Reading time shown on cards: the imported value, or estimated for new articles.
 */
function bricareau_read_time( $post = null ) {
	$post = get_post( $post );
	$time = get_post_meta( $post->ID, 'bricareau_read_time', true );
	if ( $time ) {
		return $time;
	}
	return max( 1, (int) ceil( str_word_count( wp_strip_all_tags( $post->post_content ) ) / 200 ) ) . ' min';
}

/**
 * Keeps ids on the H2s (adding them to new articles) and returns the table of contents.
 *
 * @param string $content Rendered post content, updated in place.
 * @return array<int, array{id: string, title: string}>
 */
function bricareau_article_toc( &$content ) {
	$toc     = array();
	$content = preg_replace_callback(
		'#<h2([^>]*)>(.*?)</h2>#s',
		function ( $match ) use ( &$toc ) {
			$title = trim( wp_strip_all_tags( $match[2] ) );
			if ( preg_match( '/\sid="([^"]+)"/', $match[1], $id ) ) {
				$anchor = $id[1];
				$attrs  = $match[1];
			} else {
				$anchor = sanitize_title( $title );
				$attrs  = $match[1] . ' id="' . esc_attr( $anchor ) . '"';
			}
			$toc[] = array( 'id' => $anchor, 'title' => html_entity_decode( $title, ENT_QUOTES, 'UTF-8' ) );
			return "<h2$attrs>{$match[2]}</h2>";
		},
		$content
	);
	return $toc;
}

/**
 * Up to $count other articles, same category first, in random order.
 *
 * @return WP_Post[]
 */
function bricareau_related_articles( $post, $count = 3 ) {
	$args    = array( 'post_type' => 'post', 'post_status' => 'publish', 'orderby' => 'rand', 'posts_per_page' => $count, 'post__not_in' => array( $post->ID ), 'ignore_sticky_posts' => true );
	$related = get_posts( $args + array( 'category__in' => wp_get_post_categories( $post->ID ) ) );
	if ( count( $related ) < $count ) {
		$args['posts_per_page'] = $count - count( $related );
		$args['post__not_in']   = array_merge( array( $post->ID ), wp_list_pluck( $related, 'ID' ) );
		$related                = array_merge( $related, get_posts( $args ) );
	}
	return $related;
}

/**
 * Reading-time pill over a card image.
 */
function bricareau_read_time_badge( $post ) {
	return '<span class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">' . bricareau_icon( 'clock', 'w-3.5 h-3.5 text-[#18448F]' ) . '<span class="text-[12px] font-bold text-slate-900">' . esc_html( bricareau_read_time( $post ) ) . '</span></span>';
}

/**
 * Article featured image with its title as the fallback alt text.
 */
function bricareau_article_image( $post, $class, $sizes ) {
	$id = get_post_thumbnail_id( $post );
	if ( ! $id ) {
		return '';
	}
	return bricareau_image( array( 'id' => $id, 'alt' => get_the_title( $post ) ), $class, array( 'sizes' => $sizes ) );
}

// Old URLs of the React site and its sitemap keep working.
add_action(
	'template_redirect',
	function () {
		if ( ! is_404() ) {
			return;
		}
		$path      = trim( (string) wp_parse_url( $_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH ), '/' ); // phpcs:ignore WordPress.Security
		$redirects = array(
			'service'                  => '/services-de-traitement-eau/',
			'tests-eau'                => '/analyses-et-tests-d-eau/',
			'filtres-de-remplacement'  => '/filtres-d-eau-de-remplacement/',
			'bureau'                   => '/solutions-de-traitement-d-eau-pour-offices-et-bureaux/',
			'videos'                   => '/blog/',
			'blog/categorie/filtration' => '/blog/categorie/filtration-eau/',
			'blog/categorie/eau-embouteillee' => '/blog/categorie/ecologie-et-durabilite/',
		);
		if ( isset( $redirects[ $path ] ) ) {
			wp_safe_redirect( home_url( $redirects[ $path ] ), 301 );
			exit;
		}
		if ( 'search' === $path ) {
			$query = isset( $_GET['q'] ) ? sanitize_text_field( wp_unslash( $_GET['q'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification
			wp_safe_redirect( home_url( '/?s=' . rawurlencode( $query ) ), 301 );
			exit;
		}
	}
);

// Favicon of the React site, until a site icon is chosen in the admin.
add_action(
	'wp_head',
	function () {
		if ( ! has_site_icon() ) {
			printf( '<link rel="icon" href="%s">' . "\n", esc_url( get_theme_file_uri( 'assets/favicon.ico' ) ) );
		}
	}
);

// /favicon.ico, which browsers and crawlers request directly: WordPress would redirect it to the
// site icon or its own logo. Only reached when the server passes the request to WordPress.
add_action(
	'do_faviconico',
	function () {
		header( 'Content-Type: image/x-icon' );
		header( 'Cache-Control: public, max-age=604800' );
		readfile( get_theme_file_path( 'assets/favicon.ico' ) );
		exit;
	},
	5
);
