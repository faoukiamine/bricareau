<?php
/**
 * `wp bricareau seed`: imports pages migrated from the React site.
 *
 * Each page is described in inc/seed/pages/<slug>.php (content copied from
 * the matching src/pages/*.tsx). Images are read from the React project's
 * src/assets folder (mounted at BRICAREAU_SEED_ASSETS by docker-compose) and
 * uploaded to the media library once.
 *
 * Safe to re-run: images and testimonials are imported once, and existing
 * pages are left alone unless --force is passed.
 */

defined( 'ABSPATH' ) || exit;

if ( ! defined( 'BRICAREAU_SEED_ASSETS' ) ) {
	// The theme zip from bin/package.sh bundles its images; in Docker they are mounted.
	$bricareau_bundled_assets = BRICAREAU_DIR . '/seed-assets';
	define( 'BRICAREAU_SEED_ASSETS', getenv( 'BRICAREAU_SEED_ASSETS' ) ?: ( is_dir( $bricareau_bundled_assets ) ? $bricareau_bundled_assets : '/srv/bricareau-assets' ) );
}

class Bricareau_Seed_Command {

	/** @var array<string, array{id: int, url: string, alt: string}> */
	private $images = array();

	/** @var array<string, int> Seeded Fluent Forms ids, keyed by slug. */
	private $forms = array();

	/** @var bool Whether Polylang is active with the French and English languages. */
	private $languages = false;

	/**
	 * Imports the migrated pages and blog articles, their images and the testimonials.
	 *
	 * ## OPTIONS
	 *
	 * [--force]
	 * : Rebuild what already exists (overwrites edits made in the admin); limited to the parts named by --only.
	 *
	 * [--only=<slugs>]
	 * : Comma-separated page files (inc/seed/pages/<name>.php) to import, "articles" for the blog posts,
	 * "menus", "forms" or "seo" (default: all); "en" for the English pages and posts, "en/<name>" for
	 * one English page, "en/articles" for the English posts. With --force, only these parts are rebuilt.
	 *
	 * ## EXAMPLES
	 *
	 *     wp bricareau seed
	 *     wp bricareau seed --only=durabilite,carrieres --force
	 */
	public function seed( $args, $assoc_args ) {
		require_once ABSPATH . 'wp-admin/includes/file.php';
		require_once ABSPATH . 'wp-admin/includes/media.php';
		require_once ABSPATH . 'wp-admin/includes/image.php';

		// Updates use the theme zip without images: images already imported are reused from the
		// media library, only an image never imported needs this folder.
		if ( ! is_dir( BRICAREAU_SEED_ASSETS ) ) {
			WP_CLI::warning( 'Dossier des images absent (' . BRICAREAU_SEED_ASSETS . ') : seules les images déjà dans la médiathèque seront utilisées.' );
		}

		global $wp_rewrite;
		$wp_rewrite->set_permalink_structure( '/%postname%/' );
		$wp_rewrite->set_category_base( 'blog/categorie' );
		flush_rewrite_rules();

		$only  = empty( $assoc_args['only'] ) ? array() : array_map( 'trim', explode( ',', $assoc_args['only'] ) );
		$force = ! empty( $assoc_args['force'] );
		// --force only rebuilds what --only names (everything when --only is absent).
		$rebuild = fn( $part ) => $force && ( ! $only || in_array( $part, $only, true ) );

		$this->languages = $this->setup_languages();
		$this->import_testimonials();
		$this->import_faqs();
		if ( $this->languages ) {
			$this->import_faqs( 'en' );
		}
		$this->allow_svg_import();

		// Missing forms are always created: pages need their ids.
		if ( class_exists( 'FluentForm\\App\\Services\\Form\\FormService' ) ) {
			require_once __DIR__ . '/seed/forms.php';
			$this->forms = ( new Bricareau_Form_Seeder() )->seed( $rebuild( 'forms' ), $this->languages );
		} else {
			WP_CLI::warning( "Fluent Forms n'est pas activé : les blocs « Formulaire » resteront vides (wp plugin install fluentform --activate)." );
		}

		foreach ( glob( BRICAREAU_DIR . '/inc/seed/pages/*.php' ) as $file ) {
			$slug = basename( $file, '.php' );
			if ( $only && ! in_array( $slug, $only, true ) ) {
				continue;
			}
			$this->import_page( $slug, $file, $force, $this->languages ? 'fr' : '' );
		}

		// English pages (inc/seed/pages-en/<name>.php), linked to their French page.
		// --only=en imports all of them, --only=en/<name> one of them.
		if ( $this->languages ) {
			foreach ( glob( BRICAREAU_DIR . '/inc/seed/pages-en/*.php' ) as $file ) {
				$slug = basename( $file, '.php' );
				if ( $only && ! array_intersect( array( 'en', 'en/' . $slug ), $only ) ) {
					continue;
				}
				$this->import_page( $slug, $file, $force && ( ! $only || array_intersect( array( 'en', 'en/' . $slug ), $only ) ), 'en' );
			}
		}

		if ( ! $only || in_array( 'articles', $only, true ) ) {
			$this->import_articles( $force );
		}
		// English posts (data/en/articles.json), each linked to its French post.
		if ( $this->languages && ( ! $only || array_intersect( array( 'en', 'en/articles' ), $only ) ) ) {
			$this->import_articles( $force, 'en' );
		}

		if ( ! $only || in_array( 'menus', $only, true ) ) {
			$this->import_menus( $force );
		}

		$this->remove_default_content();

		// Polylang caches each language's home page: refresh it once the English pages exist.
		if ( $this->languages ) {
			PLL()->model->clean_languages_cache();
		}

		if ( defined( 'WPSEO_VERSION' ) ) {
			$counts = bricareau_copy_seo_to_yoast( $rebuild( 'seo' ) );
			WP_CLI::log( "SEO : {$counts['titles']} titres et {$counts['descriptions']} descriptions copiés dans Yoast." );
		}

		WP_CLI::success( 'Import terminé : ' . home_url( '/' ) );
	}

	/**
	 * The English posts alone (`--only=en/articles`), for Tools > Articles anglais (inc/import.php).
	 * Returns false without Polylang.
	 */
	public function import_english_articles() {
		if ( ! function_exists( 'pll_set_post_language' ) ) {
			return false;
		}
		require_once ABSPATH . 'wp-admin/includes/file.php';
		require_once ABSPATH . 'wp-admin/includes/media.php';
		require_once ABSPATH . 'wp-admin/includes/image.php';
		$this->import_articles( false, 'en' );
		return true;
	}

	/**
	 * Uploads an image to the media library (once) and returns the block image attribute.
	 *
	 * @param string $file Path relative to src/assets, or an https:// URL to download.
	 * @param string $alt  Alternative text.
	 */
	private function image( $file, $alt = '' ) {
		if ( isset( $this->images[ $file ] ) ) {
			// Same file, its own alternative text (an English page reuses the French page's images).
			return array_merge( $this->images[ $file ], array( 'alt' => $alt ) );
		}

		$remote = str_starts_with( $file, 'https://' );
		// "theme:" files ship with the theme itself (menu images).
		$path     = str_starts_with( $file, 'theme:' ) ? BRICAREAU_DIR . '/' . substr( $file, 6 ) : BRICAREAU_SEED_ASSETS . '/' . $file;
		$existing = get_posts(
			array(
				'post_type'   => 'attachment',
				'post_status' => 'inherit',
				'meta_key'    => '_bricareau_source',
				'meta_value'  => $file,
				'fields'      => 'ids',
				'numberposts' => 1,
			)
		);

		if ( $existing ) {
			$id = $existing[0];
		} elseif ( ! $remote && ! file_exists( $path ) ) {
			WP_CLI::warning( "Image introuvable : $file" );
			return array();
		} else {
			if ( $remote ) {
				$tmp  = download_url( $file );
				$name = sanitize_file_name( basename( wp_parse_url( $file, PHP_URL_PATH ) ) ) . '.jpg';
				if ( is_wp_error( $tmp ) ) {
					WP_CLI::warning( "$file : " . $tmp->get_error_message() );
					return array();
				}
			} else {
				$tmp  = wp_tempnam( $file );
				$name = sanitize_file_name( basename( $file ) );
				copy( $path, $tmp );
			}
			// Prefixed slug: an attachment named faq would otherwise take the URL of the /faq/ page.
			$id = media_handle_sideload( array( 'name' => $name, 'tmp_name' => $tmp ), 0, null, array( 'post_name' => 'media-' . sanitize_title( pathinfo( $name, PATHINFO_FILENAME ) ) ) );
			if ( is_wp_error( $id ) ) {
				WP_CLI::warning( "$file : " . $id->get_error_message() );
				return array();
			}
			update_post_meta( $id, '_bricareau_source', $file );
			update_post_meta( $id, '_wp_attachment_image_alt', $alt );
			WP_CLI::log( "  image importée : $file" );
		}

		$this->images[ $file ] = array(
			'id'  => (int) $id,
			'url' => wp_get_attachment_url( $id ),
			'alt' => $alt,
		);
		return $this->images[ $file ];
	}

	/**
	 * With Polylang: French (default, at the site root) and English (under /en/); content
	 * without a language becomes French. Testimonials and FAQs are shared by both languages.
	 */
	private function setup_languages() {
		if ( ! function_exists( 'PLL' ) || ! isset( PLL()->model ) ) {
			return false;
		}
		$model = PLL()->model;
		foreach ( array( array( 'fr_CA', 'fr', 'Français', 0 ), array( 'en_CA', 'en', 'English', 1 ) ) as [ $locale, $slug, $name, $order ] ) {
			if ( ! $model->get_language( $slug ) ) {
				$added = $model->add_language( array( 'locale' => $locale, 'slug' => $slug, 'name' => $name, 'term_group' => $order, 'flag' => 'ca' ) );
				if ( is_wp_error( $added ) ) {
					WP_CLI::warning( "Langue $slug : " . $added->get_error_message() );
					return false;
				}
				WP_CLI::log( "Langue ajoutée : $name ($locale)." );
			}
		}
		$default = $model->get_default_language();
		if ( ! $default || 'fr' !== $default->slug ) {
			$model->update_default_lang( 'fr' );
		}
		// The English home page is /en/ (not /en/home/); FAQs have a version per language.
		$options = PLL()->options;
		$options->set( 'redirect_lang', true );
		$options->set( 'post_types', array_values( array_unique( array_merge( (array) $options['post_types'], array( BRICAREAU_FAQ_TYPE ) ) ) ) );
		$options->set( 'taxonomies', array_values( array_unique( array_merge( (array) $options['taxonomies'], array( BRICAREAU_FAQ_TAXONOMY ) ) ) ) );
		$options->save();
		$model->set_language_in_mass( $model->get_language( 'fr' ) );
		return true;
	}

	private function import_page( $slug, $file, $force, $lang = '' ) {
		$img  = fn( $name, $alt = '' ) => $this->image( $name, $alt );
		$form = fn( $slug ) => (string) ( $this->forms[ $slug ] ?? '' );
		// The five expert photos shown in every navy call-to-action (ExpertAvatars.tsx).
		$avatars = fn() => array_map(
			fn( $file ) => $this->image( $file, 'Expert Bricareau' ),
			array( '7a5891c6-037d-4bf9-9800-3fd63de7ad37.jpg', 'a010b2c1-2354-47f6-954e-689f7c64e7a5.jpg', '4a6a1e15-c532-4f23-ae71-5fad72ebf176.jpg', '4ccc1173-1991-4bf6-988c-9e9e57f314d3.jpg', 'e5a7b4ba-77df-44dd-b824-80ded58a9125.jpg' )
		);
		$page = require $file;

		$existing = get_page_by_path( $page['slug'], OBJECT, 'page' );
		if ( $existing && ! $force ) {
			WP_CLI::log( "Page « {$page['title']} » déjà présente, ignorée (--force pour reconstruire)." );
			return;
		}

		$content = implode(
			"\n\n",
			array_map(
				// A string is raw block markup (long text in core blocks).
				fn( $block ) => is_string( $block ) ? $block : serialize_block(
					array(
						'blockName'    => $block[0],
						'attrs'        => $block[1],
						'innerBlocks'  => array(),
						'innerHTML'    => '',
						'innerContent' => array(),
					)
				),
				$page['blocks']
			)
		);

		$postarr = array(
			'post_type'    => 'page',
			'post_status'  => 'publish',
			'post_title'   => $page['title'],
			'post_name'    => $page['slug'],
			'post_content' => $content,
			'menu_order'   => $page['menu_order'] ?? 0,
			'meta_input'   => array_filter(
				array(
					'bricareau_seo_title'        => $page['seo_title'] ?? '',
					'bricareau_seo_description'  => $page['seo_description'] ?? '',
					'bricareau_breadcrumb_label' => $page['breadcrumb_label'] ?? '',
				)
			),
		);

		if ( $existing ) {
			$postarr['ID'] = $existing->ID;
			$id            = wp_update_post( wp_slash( $postarr ), true );
		} else {
			$id = wp_insert_post( wp_slash( $postarr ), true );
		}

		if ( is_wp_error( $id ) ) {
			WP_CLI::warning( "{$page['slug']} : " . $id->get_error_message() );
			return;
		}

		if ( $lang ) {
			pll_set_post_language( $id, $lang );
			$source = empty( $page['translation_of'] ) ? null : get_page_by_path( $page['translation_of'] );
			if ( $source ) {
				pll_save_post_translations( array_merge( pll_get_post_translations( $source->ID ), array( $lang => $id ) ) );
			}
		}
		// The English home page is the translation of the French one: Polylang serves it at /en/.
		if ( ! empty( $page['front'] ) && 'en' !== $lang ) {
			update_option( 'show_on_front', 'page' );
			update_option( 'page_on_front', $id );
		}
		WP_CLI::log( "Page « {$page['title']} » enregistrée : " . get_permalink( $id ) );
	}

	/**
	 * Imports data/articles.json (from bin/extract-content.mjs) as posts. Article slugs are
	 * top-level URLs, like the React routes; category pages live under /blog/categorie/.
	 * English (data/en/articles.json): posts and categories in English, each linked to the
	 * French one named by its `translation_of`.
	 */
	private function import_articles( $force, $lang = '' ) {
		$english = 'en' === $lang;
		$data    = json_decode( file_get_contents( BRICAREAU_DIR . ( $english ? '/data/en/articles.json' : '/data/articles.json' ) ), true );
		$terms   = array();
		foreach ( $data['categories'] as $category ) {
			$term = term_exists( $category['id'], 'category' ) ?: wp_insert_term( $category['title'], 'category', array( 'slug' => $category['id'] ) );
			if ( is_wp_error( $term ) ) {
				WP_CLI::warning( "{$category['id']} : " . $term->get_error_message() );
				continue;
			}
			$terms[ $category['id'] ] = (int) $term['term_id'];
			if ( $english ) {
				pll_set_term_language( $terms[ $category['id'] ], 'en' );
				$source = get_term_by( 'slug', $category['translation_of'], 'category' );
				if ( $source ) {
					pll_save_term_translations( array( 'fr' => $source->term_id, 'en' => $terms[ $category['id'] ] ) );
				}
			}
		}

		foreach ( $data['articles'] as $order => $article ) {
			$existing = get_page_by_path( $article['slug'], OBJECT, 'post' );
			if ( $existing && ! $force ) {
				continue;
			}
			$hero    = $this->image( $article['hero_image'], $article['title'] );
			$card    = $this->image( $article['image'], $article['title'] );
			$postarr = array(
				'post_type'     => 'post',
				'post_status'   => 'publish',
				'post_title'    => $article['title'],
				'post_name'     => $article['slug'],
				'post_excerpt'  => $article['excerpt'],
				'post_content'  => $article['content'],
				// The date shown on every article of the React site.
				'post_date'     => '2026-03-20 09:00:00',
				'menu_order'    => $order,
				'meta_input'    => array(
					'bricareau_seo_title'       => $article['seo_title'],
					'bricareau_seo_description' => $article['seo_description'] ?: $article['excerpt'],
					'bricareau_read_time'       => $article['read_time'],
					'bricareau_hero_image'      => ( $hero['id'] ?? 0 ) !== ( $card['id'] ?? 0 ) ? ( $hero['id'] ?? 0 ) : 0,
				),
			);
			if ( $existing ) {
				$postarr['ID'] = $existing->ID;
			}
			$id = wp_insert_post( wp_slash( $postarr ), true );
			if ( is_wp_error( $id ) ) {
				WP_CLI::warning( "{$article['slug']} : " . $id->get_error_message() );
				continue;
			}
			// Language first: Polylang swaps a category for its translation in the post's language.
			if ( $english ) {
				pll_set_post_language( $id, 'en' );
				$source = get_page_by_path( $article['translation_of'], OBJECT, 'post' );
				if ( $source ) {
					pll_save_post_translations( array( 'fr' => $source->ID, 'en' => $id ) );
				}
			}
			wp_set_post_categories( $id, array_values( array_intersect_key( $terms, array_flip( $article['categories'] ) ) ) );
			if ( ! empty( $card['id'] ) ) {
				set_post_thumbnail( $id, $card['id'] );
			}
		}
		WP_CLI::log( count( $data['articles'] ) . ( $english ? ' articles anglais traités.' : ' articles traités.' ) );
	}

	/**
	 * Lets the import upload the SVG product images of the React site
	 * (only for this CLI run; regular users still cannot upload SVG).
	 */
	private function allow_svg_import() {
		add_filter( 'upload_mimes', fn( $mimes ) => $mimes + array( 'svg' => 'image/svg+xml' ) );
		add_filter(
			'wp_check_filetype_and_ext',
			function ( $data, $file, $filename ) {
				if ( str_ends_with( strtolower( $filename ), '.svg' ) ) {
					return array( 'ext' => 'svg', 'type' => 'image/svg+xml', 'proper_filename' => $filename );
				}
				return $data;
			},
			10,
			3
		);
	}

	/**
	 * Creates the header and footer menus from the defaults of inc/navigation.php and
	 * assigns them. A location that already has a menu is left alone unless --force.
	 */
	private function import_menus( $force ) {
		$header = array();
		foreach ( bricareau_default_header_menu() as $tab ) {
			$children = array();
			if ( 'cards' === $tab['type'] ) {
				foreach ( $tab['cards'] as $card ) {
					$children[] = array(
						'title'    => $card['title'],
						'url'      => $card['href'],
						'image'    => 'theme:assets/images/menu/' . basename( $card['image'] ),
						'children' => array_map( fn( $link ) => array( 'title' => $link['title'], 'url' => $link['href'], 'description' => $link['description'] ), $card['links'] ),
					);
				}
			} else {
				foreach ( array_merge( ...$tab['groups'] ) as $link ) {
					$children[] = array( 'title' => $link['title'], 'url' => $link['href'], 'description' => $link['description'] );
				}
			}
			if ( ! empty( $tab['promo'] ) ) {
				$children[] = array(
					'title'       => $tab['promo']['title'],
					'url'         => $tab['promo']['link'],
					'description' => $tab['promo']['subtitle'],
					'image'       => 'theme:assets/images/menu/' . basename( $tab['promo']['image'] ),
					'promo'       => true,
					'cta'         => $tab['promo']['cta'],
				);
			}
			$header[] = array( 'title' => $tab['name'], 'url' => '#', 'children' => $children );
		}

		$menus = array(
			'header'       => $header,
			'footer'       => array_map(
				fn( $column ) => array(
					'title'    => $column['title'],
					'url'      => $column['href'],
					'children' => array_map( fn( $link ) => array( 'title' => $link[0], 'url' => $link[1] ), $column['links'] ),
				),
				bricareau_default_footer_columns()
			),
			'footer-legal' => array_map( fn( $link ) => array( 'title' => $link[0], 'url' => $link[1] ), bricareau_default_footer_legal_links() ),
			'social'       => array_map( fn( $link ) => array( 'title' => $link[1], 'url' => $link[2] ), bricareau_default_social_links() ),
		);

		$locations = get_nav_menu_locations();
		foreach ( $menus as $location => $items ) {
			if ( ! empty( $locations[ $location ] ) && wp_get_nav_menu_object( $locations[ $location ] ) && ! $force ) {
				continue;
			}
			$name     = BRICAREAU_MENUS[ $location ];
			$existing = wp_get_nav_menu_object( $name );
			if ( $existing ) {
				wp_delete_nav_menu( $existing->term_id );
			}
			$menu_id = wp_create_nav_menu( $name );
			if ( is_wp_error( $menu_id ) ) {
				WP_CLI::warning( "$name : " . $menu_id->get_error_message() );
				continue;
			}
			$position = 0;
			$this->add_menu_items( $menu_id, $items, 0, $position );
			$locations[ $location ] = $menu_id;
			WP_CLI::log( "Menu « $name » créé." );
		}
		set_theme_mod( 'nav_menu_locations', $locations );
	}

	/**
	 * Adds items (and their children) to a menu. Paths of imported pages become page
	 * items, so the menu follows a page if its address changes; others stay custom links.
	 */
	private function add_menu_items( $menu_id, $items, $parent, &$position ) {
		foreach ( $items as $item ) {
			$args = array(
				'menu-item-title'       => $item['title'],
				'menu-item-description' => $item['description'] ?? '',
				'menu-item-status'      => 'publish',
				'menu-item-parent-id'   => $parent,
				'menu-item-position'    => ++$position,
			);
			$page = str_starts_with( $item['url'], '/' ) && ! str_contains( $item['url'], '?' ) && '/' !== $item['url']
				? get_page_by_path( trim( $item['url'], '/' ), OBJECT, 'page' )
				: null;
			if ( $page ) {
				$args += array( 'menu-item-type' => 'post_type', 'menu-item-object' => 'page', 'menu-item-object-id' => $page->ID );
			} else {
				$args += array( 'menu-item-type' => 'custom', 'menu-item-url' => $item['url'] );
			}

			$id = wp_update_nav_menu_item( $menu_id, 0, $args );
			if ( is_wp_error( $id ) ) {
				WP_CLI::warning( "{$item['title']} : " . $id->get_error_message() );
				continue;
			}
			if ( ! empty( $item['image'] ) ) {
				$image = $this->image( $item['image'], $item['title'] );
				if ( ! empty( $image['id'] ) ) {
					update_post_meta( $id, '_bricareau_menu_image', $image['id'] );
				}
			}
			if ( ! empty( $item['promo'] ) ) {
				update_post_meta( $id, '_bricareau_menu_promo', 1 );
				update_post_meta( $id, '_bricareau_menu_cta', $item['cta'] );
			}
			if ( ! empty( $item['children'] ) ) {
				$this->add_menu_items( $menu_id, $item['children'], $id, $position );
			}
		}
	}

	/**
	 * Sends WordPress's sample page and first post to the trash on a fresh install.
	 */
	private function remove_default_content() {
		foreach ( array( array( 'sample-page', 'page' ), array( 'hello-world', 'post' ) ) as [ $slug, $type ] ) {
			$post = get_page_by_path( $slug, OBJECT, $type );
			if ( $post && 'publish' === $post->post_status ) {
				wp_trash_post( $post->ID );
			}
		}
	}

	/**
	 * FAQs from data/faqs.json, once. English (data/en/faqs.json, same order) is imported
	 * once too, each category and question linked to its French one.
	 */
	private function import_faqs( $lang = '' ) {
		$english = 'en' === $lang;
		$all     = get_posts( array( 'post_type' => BRICAREAU_FAQ_TYPE, 'post_status' => array( 'publish', 'draft' ), 'numberposts' => -1, 'fields' => 'ids', 'lang' => '' ) );
		if ( $english ) {
			// FAQs imported before the post type was translated have no language yet: they are French.
			foreach ( $all as $id ) {
				if ( ! pll_get_post_language( $id ) ) {
					pll_set_post_language( $id, 'fr' );
				}
			}
			foreach ( get_terms( array( 'taxonomy' => BRICAREAU_FAQ_TAXONOMY, 'hide_empty' => false, 'fields' => 'ids', 'lang' => '' ) ) as $term_id ) {
				if ( ! pll_get_term_language( $term_id ) ) {
					pll_set_term_language( $term_id, 'fr' );
				}
			}
			$all = array_filter( $all, fn( $id ) => 'en' === pll_get_post_language( $id ) );
		}
		if ( $all ) {
			return;
		}
		$total = 0;
		foreach ( json_decode( file_get_contents( BRICAREAU_DIR . ( $english ? '/data/en/faqs.json' : '/data/faqs.json' ) ), true ) as $position => $category ) {
			$slug = $english ? $category['id'] . '-en' : $category['id'];
			$term = term_exists( $slug, BRICAREAU_FAQ_TAXONOMY ) ?: wp_insert_term( $category['title'], BRICAREAU_FAQ_TAXONOMY, array( 'slug' => $slug ) );
			update_term_meta( $term['term_id'], 'bricareau_order', $position );
			$source = $english ? get_term_by( 'slug', $category['id'], BRICAREAU_FAQ_TAXONOMY ) : null;
			if ( $english ) {
				pll_set_term_language( (int) $term['term_id'], 'en' );
				if ( $source ) {
					pll_save_term_translations( array( 'fr' => $source->term_id, 'en' => (int) $term['term_id'] ) );
				}
			}
			$french = $source ? get_posts( array( 'post_type' => BRICAREAU_FAQ_TYPE, 'numberposts' => -1, 'orderby' => 'menu_order', 'order' => 'ASC', 'lang' => 'fr', 'fields' => 'ids', 'tax_query' => array( array( 'taxonomy' => BRICAREAU_FAQ_TAXONOMY, 'terms' => $source->term_id ) ) ) ) : array(); // phpcs:ignore WordPress.DB.SlowDBQuery
			foreach ( $category['items'] as $order => $item ) {
				$html = '<p>' . esc_html( $item['a'] ) . '</p>';
				$id   = wp_insert_post(
					wp_slash(
						array(
							'post_type'    => BRICAREAU_FAQ_TYPE,
							'post_status'  => 'publish',
							'post_title'   => $item['q'],
							'post_content' => serialize_block(
								array(
									'blockName'    => 'core/paragraph',
									'attrs'        => array(),
									'innerBlocks'  => array(),
									'innerHTML'    => $html,
									'innerContent' => array( $html ),
								)
							),
							'menu_order'   => $order,
						)
					)
				);
				// Language first: Polylang swaps a category for its translation in the post's language.
				if ( $english ) {
					pll_set_post_language( $id, 'en' );
				}
				wp_set_object_terms( $id, (int) $term['term_id'], BRICAREAU_FAQ_TAXONOMY );
				if ( $english ) {
					if ( isset( $french[ $order ] ) ) {
						pll_save_post_translations( array( 'fr' => $french[ $order ], 'en' => $id ) );
					}
				}
				++$total;
			}
		}
		WP_CLI::log( $english ? "$total questions de FAQ importées en anglais." : "$total questions de FAQ importées." );
	}

	private function import_testimonials() {
		$count = wp_count_posts( BRICAREAU_TESTIMONIAL_TYPE );
		if ( ( $count->publish ?? 0 ) + ( $count->draft ?? 0 ) > 0 ) {
			return;
		}

		$testimonials = json_decode( file_get_contents( BRICAREAU_DIR . '/data/testimonials.json' ), true );
		foreach ( $testimonials as $order => $testimonial ) {
			$html = '<p>' . esc_html( $testimonial['text'] ) . '</p>';
			wp_insert_post(
				array(
					'post_type'    => BRICAREAU_TESTIMONIAL_TYPE,
					'post_status'  => 'publish',
					'post_title'   => $testimonial['name'],
					'post_content' => serialize_block(
						array(
							'blockName'    => 'core/paragraph',
							'attrs'        => array(),
							'innerBlocks'  => array(),
							'innerHTML'    => $html,
							'innerContent' => array( $html ),
						)
					),
					'menu_order'   => $order,
					'meta_input'   => array( 'bricareau_rating' => (int) $testimonial['rating'] ),
				)
			);
		}
		WP_CLI::log( count( $testimonials ) . ' témoignages importés.' );
	}
}

if ( defined( 'WP_CLI' ) && WP_CLI ) {
	WP_CLI::add_command( 'bricareau', 'Bricareau_Seed_Command' );
}
