<?php
/**
 * Bricareau theme bootstrap.
 */

defined( 'ABSPATH' ) || exit;

define( 'BRICAREAU_VERSION', '1.0.2' );
define( 'BRICAREAU_DIR', get_template_directory() );
define( 'BRICAREAU_URI', get_template_directory_uri() );

require_once BRICAREAU_DIR . '/inc/icons.php';
require_once BRICAREAU_DIR . '/inc/helpers.php';
require_once BRICAREAU_DIR . '/inc/i18n.php';
require_once BRICAREAU_DIR . '/inc/navigation.php';
require_once BRICAREAU_DIR . '/inc/menus.php';
require_once BRICAREAU_DIR . '/inc/seo.php';
require_once BRICAREAU_DIR . '/inc/testimonials.php';
require_once BRICAREAU_DIR . '/inc/blocks.php';
require_once BRICAREAU_DIR . '/inc/requests.php';
require_once BRICAREAU_DIR . '/inc/blog.php';
require_once BRICAREAU_DIR . '/inc/faqs.php';
require_once BRICAREAU_DIR . '/inc/performance.php';
require_once BRICAREAU_DIR . '/inc/tracking.php';
require_once BRICAREAU_DIR . '/inc/whatsapp.php';
require_once BRICAREAU_DIR . '/inc/tawk.php';
require_once BRICAREAU_DIR . '/inc/emails.php';
require_once BRICAREAU_DIR . '/inc/appointments.php';
require_once BRICAREAU_DIR . '/inc/import.php';

if ( defined( 'WP_CLI' ) && WP_CLI ) {
	require_once BRICAREAU_DIR . '/inc/seed.php';
}

add_action(
	'after_setup_theme',
	function () {
		add_theme_support( 'wp-block-styles' );
		add_theme_support( 'editor-styles' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'responsive-embeds' );
		add_editor_style( 'build/style.css' );
	}
);

add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_style(
			'bricareau',
			BRICAREAU_URI . '/build/style.css',
			array(),
			bricareau_asset_version( 'build/style.css' )
		);
	}
);

/**
 * Cache-busting version for a theme file: its mtime, or the theme version.
 */
function bricareau_asset_version( $relative_path ) {
	$file = BRICAREAU_DIR . '/' . $relative_path;
	return file_exists( $file ) ? (string) filemtime( $file ) : BRICAREAU_VERSION;
}

add_action(
	'init',
	function () {
		foreach ( array( 'bricareau_seo_title', 'bricareau_seo_description', 'bricareau_breadcrumb_label' ) as $key ) {
			register_post_meta(
				'page',
				$key,
				array(
					'type'          => 'string',
					'single'        => true,
					'show_in_rest'  => true,
					'auth_callback' => fn() => current_user_can( 'edit_pages' ),
				)
			);
		}
	}
);

