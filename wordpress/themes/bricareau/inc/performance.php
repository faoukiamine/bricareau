<?php
/**
 * Front-end weight: nothing here changes how pages look.
 *
 * - No emoji script/styles (the site uses its own SVG icons).
 * - jQuery (only needed by the Fluent Forms submission script) moves to the end of the
 *   page without jQuery Migrate, so it no longer blocks the first render.
 * - New image sizes are generated as WebP (lighter than JPEG/PNG); existing images get
 *   theirs with `wp media regenerate`.
 *
 * Page caching itself is done by the host and Cloudflare (see README.md, Performance).
 */

remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'wp_enqueue_scripts', 'wp_enqueue_emoji_styles' );
add_filter( 'emoji_svg_url', '__return_false' );

add_action(
	'wp_default_scripts',
	static function ( $scripts ) {
		if ( is_admin() || ! isset( $scripts->registered['jquery'] ) ) {
			return;
		}
		$scripts->registered['jquery']->deps = array_diff( $scripts->registered['jquery']->deps, array( 'jquery-migrate' ) );
		foreach ( array( 'jquery', 'jquery-core' ) as $handle ) {
			$scripts->add_data( $handle, 'group', 1 );
		}
	}
);

add_filter(
	'image_editor_output_format',
	static function ( $formats ) {
		$formats['image/jpeg'] = 'image/webp';
		$formats['image/png']  = 'image/webp';
		return $formats;
	}
);
