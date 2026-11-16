<?php
/**
 * Tools > Articles anglais: imports the English posts (data/en/articles.json) from the admin,
 * like `wp bricareau seed --only=en/articles` on a host without WP-CLI. Posts already present
 * are left alone, so the button can be clicked again safely.
 */

defined( 'ABSPATH' ) || exit;

add_action(
	'admin_menu',
	function () {
		add_management_page( 'Articles anglais', 'Articles anglais', 'manage_options', 'bricareau-articles-en', 'bricareau_import_page' );
	}
);

/** Number of posts in English (0 without Polylang). */
function bricareau_english_post_count() {
	if ( ! function_exists( 'pll_get_post_language' ) ) {
		return 0;
	}
	return count( get_posts( array( 'post_type' => 'post', 'post_status' => 'any', 'numberposts' => -1, 'fields' => 'ids', 'lang' => 'en' ) ) );
}

function bricareau_import_page() {
	$data  = json_decode( file_get_contents( BRICAREAU_DIR . '/data/en/articles.json' ), true );
	$total = count( $data['articles'] ?? array() );
	$log   = get_transient( 'bricareau_import_log' );
	delete_transient( 'bricareau_import_log' );
	?>
	<div class="wrap">
		<h1>Articles anglais</h1>
		<?php if ( false !== $log ) : ?>
			<div class="notice notice-<?php echo $log['ok'] ? 'success' : 'error'; ?>">
				<?php foreach ( $log['messages'] as $message ) : ?>
					<p><?php echo esc_html( $message ); ?></p>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>
		<?php if ( ! function_exists( 'pll_get_post_language' ) ) : ?>
			<div class="notice notice-error"><p>Polylang n'est pas activé : activez-le avant d'importer les articles anglais.</p></div>
		<?php endif; ?>
		<p>Crée la version anglaise des articles du blogue (<?php echo (int) $total; ?> articles et leurs catégories), chacune liée à son article français. Les articles anglais déjà présents ne sont pas modifiés.</p>
		<p>Articles anglais sur le site : <strong><?php echo (int) bricareau_english_post_count(); ?> / <?php echo (int) $total; ?></strong></p>
		<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
			<input type="hidden" name="action" value="bricareau_import_english_articles">
			<?php wp_nonce_field( 'bricareau_import_english_articles' ); ?>
			<?php submit_button( 'Importer les articles anglais' ); ?>
		</form>
	</div>
	<?php
}

add_action(
	'admin_post_bricareau_import_english_articles',
	function () {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( 'Accès refusé.', 403 );
		}
		check_admin_referer( 'bricareau_import_english_articles' );
		if ( function_exists( 'set_time_limit' ) ) {
			set_time_limit( 300 );
		}

		// The seeder reports through WP_CLI: outside the CLI, collect its messages for the page.
		if ( ! class_exists( 'WP_CLI' ) ) {
			class WP_CLI {
				public static $messages = array();
				public static function log( $message ) {
					self::$messages[] = $message;
				}
				public static function warning( $message ) {
					self::$messages[] = 'Avertissement : ' . $message;
				}
				public static function success( $message ) {
					self::$messages[] = $message;
				}
			}
		}
		require_once BRICAREAU_DIR . '/inc/seed.php';

		$ok = ( new Bricareau_Seed_Command() )->import_english_articles();
		if ( $ok && defined( 'WPSEO_VERSION' ) ) {
			// Fills only empty Yoast fields: the new posts get their SEO title and description.
			bricareau_copy_seo_to_yoast();
		}
		$messages = isset( WP_CLI::$messages ) ? WP_CLI::$messages : array();
		if ( ! $ok ) {
			$messages[] = "Polylang n'est pas activé : aucun article importé.";
		}
		set_transient( 'bricareau_import_log', array( 'ok' => $ok, 'messages' => $messages ), 300 );
		wp_safe_redirect( admin_url( 'tools.php?page=bricareau-articles-en' ) );
		exit;
	}
);
