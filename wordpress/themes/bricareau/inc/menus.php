<?php
/**
 * Header and footer menus, managed in Apparence > Menus.
 *
 * Menu structure:
 * - "Menu principal": top-level items are the header tabs. A tab whose items have
 *   their own sub-items shows them as cards with images (like "Ce que nous faisons");
 *   otherwise its items are split into two columns. An item ticked "Encadré promo"
 *   becomes the image box on the right (its description is the text).
 * - "Pied de page : colonnes": top-level items are column titles, their sub-items the links.
 * - "Pied de page : liens du bas" and "Réseaux sociaux": flat lists (social icons
 *   are chosen from the link's address).
 *
 * While a location has no menu, the defaults of inc/navigation.php are shown.
 */

defined( 'ABSPATH' ) || exit;

const BRICAREAU_MENUS = array(
	'header'       => 'Menu principal (en-tête)',
	'footer'       => 'Pied de page : colonnes',
	'footer-legal' => 'Pied de page : liens du bas',
	'social'       => 'Réseaux sociaux',
);

add_action( 'after_setup_theme', fn() => register_nav_menus( BRICAREAU_MENUS ) );

/**
 * Items of the menu assigned to a location, nested, or null when none is assigned.
 *
 * @return array<int, array{title: string, url: string, description: string, image: string, promo: bool, cta: string, children: array}>|null
 */
function bricareau_menu_tree( $location ) {
	$locations = get_nav_menu_locations();
	if ( empty( $locations[ $location ] ) ) {
		return null;
	}
	$items = wp_get_nav_menu_items( $locations[ $location ] );
	if ( ! $items ) {
		return null;
	}

	$nodes = array();
	foreach ( $items as $item ) {
		$image                 = (int) get_post_meta( $item->ID, '_bricareau_menu_image', true );
		$nodes[ $item->ID ]    = array(
			// Raw label and description: the filtered ones would curl apostrophes.
			'title'       => bricareau_menu_item_label( $item ),
			'url'         => $item->url,
			'description' => trim( (string) $item->post_content ),
			'image'       => $image ? (string) wp_get_attachment_image_url( $image, 'large' ) : '',
			'promo'       => (bool) get_post_meta( $item->ID, '_bricareau_menu_promo', true ),
			'cta'         => (string) get_post_meta( $item->ID, '_bricareau_menu_cta', true ),
			'parent'      => (int) $item->menu_item_parent,
			'children'    => array(),
		);
	}
	// wp_get_nav_menu_items() returns items in menu order, so appending keeps that order.
	$tree = array();
	foreach ( array_reverse( array_keys( $nodes ), true ) as $id ) {
		$parent = $nodes[ $id ]['parent'];
		if ( $parent && isset( $nodes[ $parent ] ) ) {
			array_unshift( $nodes[ $parent ]['children'], $nodes[ $id ] );
			unset( $nodes[ $id ] );
		}
	}
	foreach ( $nodes as $node ) {
		$tree[] = $node;
	}
	return $tree;
}

/**
 * Unfiltered label of a menu item. A page item whose label matches the page title
 * stores no label of its own, so the page's raw title is used then.
 */
function bricareau_menu_item_label( $item ) {
	if ( '' !== $item->post_title ) {
		return $item->post_title;
	}
	$object = 'post_type' === $item->type ? get_post( (int) $item->object_id ) : null;
	return $object ? $object->post_title : $item->title;
}

/**
 * Header mega-menu, in the shape the site-header block renders.
 */
function bricareau_header_menu() {
	$tree = bricareau_menu_tree( 'header' );
	if ( null === $tree ) {
		return bricareau_default_header_menu();
	}

	$link = fn( $node ) => array( 'title' => $node['title'], 'description' => $node['description'], 'href' => $node['url'] );

	return array_map(
		function ( $tab ) use ( $link ) {
			$promo   = current( array_filter( $tab['children'], fn( $child ) => $child['promo'] ) );
			$entries = array_values( array_filter( $tab['children'], fn( $child ) => ! $child['promo'] ) );
			$menu    = array( 'name' => $tab['title'] );

			if ( array_filter( $entries, fn( $entry ) => $entry['children'] ) ) {
				$menu['type']  = 'cards';
				$menu['cards'] = array_map(
					fn( $card ) => array(
						'title' => $card['title'],
						'image' => $card['image'],
						'href'  => $card['url'],
						'links' => array_map( $link, $card['children'] ),
					),
					$entries
				);
			} else {
				$menu['type']   = 'groups';
				$menu['groups'] = $entries ? array_chunk( array_map( $link, $entries ), (int) ceil( count( $entries ) / 2 ) ) : array();
			}

			if ( $promo ) {
				$menu['promo'] = array(
					'title'    => $promo['title'],
					'subtitle' => $promo['description'],
					'image'    => $promo['image'],
					'link'     => $promo['url'],
					'cta'      => $promo['cta'],
				);
			}
			return $menu;
		},
		$tree
	);
}

function bricareau_footer_columns() {
	$tree = bricareau_menu_tree( 'footer' );
	if ( null === $tree ) {
		return bricareau_default_footer_columns();
	}
	return array_map(
		fn( $column ) => array(
			'title' => $column['title'],
			'href'  => $column['url'],
			'links' => array_map( fn( $child ) => array( $child['title'], $child['url'] ), $column['children'] ),
		),
		$tree
	);
}

function bricareau_footer_legal_links() {
	$tree = bricareau_menu_tree( 'footer-legal' );
	return null === $tree ? bricareau_default_footer_legal_links() : array_map( fn( $item ) => array( $item['title'], $item['url'] ), $tree );
}

function bricareau_social_links() {
	$tree = bricareau_menu_tree( 'social' );
	if ( null === $tree ) {
		return bricareau_default_social_links();
	}
	$icons = array(
		'facebook.'  => 'facebook',
		'x.com'      => 'twitter',
		'twitter.'   => 'twitter',
		'youtube.'   => 'youtube',
		'instagram.' => 'instagram',
		'linkedin.'  => 'linkedin',
	);
	return array_map(
		function ( $item ) use ( $icons ) {
			$host = (string) wp_parse_url( $item['url'], PHP_URL_HOST );
			$icon = 'arrow-right';
			foreach ( $icons as $needle => $name ) {
				if ( str_contains( $host, $needle ) ) {
					$icon = $name;
					break;
				}
			}
			return array( $icon, $item['title'], $item['url'] );
		},
		$tree
	);
}

/*
 * Extra fields on each item in Apparence > Menus: image, promo box and button text.
 */

add_action(
	'wp_nav_menu_item_custom_fields',
	function ( $item_id ) {
		$image = (int) get_post_meta( $item_id, '_bricareau_menu_image', true );
		$src   = $image ? wp_get_attachment_image_url( $image, 'thumbnail' ) : '';
		?>
		<div class="bricareau-menu-fields description-wide" style="margin:8px 0;padding:8px 0;border-top:1px solid #eee">
			<p class="description" style="margin-bottom:6px">Image : carte du menu (sous-éléments de « Ce que nous faisons ») ou encadré promo.</p>
			<input type="hidden" class="bricareau-menu-image-id" name="bricareau_menu_image[<?php echo (int) $item_id; ?>]" value="<?php echo $image ? (int) $image : ''; ?>">
			<img class="bricareau-menu-image-preview" src="<?php echo esc_url( $src ); ?>" alt="" style="max-width:120px;height:auto;display:<?php echo $src ? 'block' : 'none'; ?>;margin-bottom:6px">
			<button type="button" class="button bricareau-menu-image-select">Choisir une image</button>
			<button type="button" class="button-link bricareau-menu-image-remove" style="margin-left:8px;display:<?php echo $src ? 'inline' : 'none'; ?>">Retirer</button>
			<p style="margin-top:10px">
				<label><input type="checkbox" name="bricareau_menu_promo[<?php echo (int) $item_id; ?>]" value="1" <?php checked( (bool) get_post_meta( $item_id, '_bricareau_menu_promo', true ) ); ?>> Encadré promo (à droite du menu déroulant ; la description sert de texte)</label>
			</p>
			<p>
				<label>Texte du bouton de l'encadré promo<br>
					<input type="text" class="widefat" name="bricareau_menu_cta[<?php echo (int) $item_id; ?>]" value="<?php echo esc_attr( get_post_meta( $item_id, '_bricareau_menu_cta', true ) ); ?>">
				</label>
			</p>
		</div>
		<?php
	}
);

add_action(
	'wp_update_nav_menu_item',
	function ( $menu_id, $item_id ) {
		// The Menus screen has already checked its nonce; other callers (seed) don't post these fields.
		if ( ! current_user_can( 'edit_theme_options' ) || ! isset( $_POST['bricareau_menu_image'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification
			return;
		}
		$image = absint( wp_unslash( $_POST['bricareau_menu_image'][ $item_id ] ?? 0 ) ); // phpcs:ignore WordPress.Security.NonceVerification
		$promo = ! empty( $_POST['bricareau_menu_promo'][ $item_id ] ); // phpcs:ignore WordPress.Security.NonceVerification
		$cta   = sanitize_text_field( wp_unslash( $_POST['bricareau_menu_cta'][ $item_id ] ?? '' ) ); // phpcs:ignore WordPress.Security.NonceVerification

		$image ? update_post_meta( $item_id, '_bricareau_menu_image', $image ) : delete_post_meta( $item_id, '_bricareau_menu_image' );
		$promo ? update_post_meta( $item_id, '_bricareau_menu_promo', 1 ) : delete_post_meta( $item_id, '_bricareau_menu_promo' );
		'' !== $cta ? update_post_meta( $item_id, '_bricareau_menu_cta', $cta ) : delete_post_meta( $item_id, '_bricareau_menu_cta' );
	},
	10,
	2
);

// Descriptions are shown under the mega-menu links, so keep their field visible.
add_filter(
	'get_user_option_managenav-menuscolumnshidden',
	fn( $hidden ) => is_array( $hidden ) ? array_values( array_diff( $hidden, array( 'description' ) ) ) : $hidden
);

add_action(
	'admin_enqueue_scripts',
	function ( $hook ) {
		if ( 'nav-menus.php' !== $hook ) {
			return;
		}
		wp_enqueue_media();
		wp_add_inline_script(
			'nav-menu',
			"jQuery( function ( $ ) {
				$( document ).on( 'click', '.bricareau-menu-image-select', function () {
					var box = $( this ).closest( '.bricareau-menu-fields' );
					var frame = wp.media( { title: 'Image du menu', multiple: false, library: { type: 'image' } } );
					frame.on( 'select', function () {
						var image = frame.state().get( 'selection' ).first().toJSON();
						var size = image.sizes && image.sizes.thumbnail ? image.sizes.thumbnail : image;
						box.find( '.bricareau-menu-image-id' ).val( image.id ).trigger( 'change' );
						box.find( '.bricareau-menu-image-preview' ).attr( 'src', size.url ).show();
						box.find( '.bricareau-menu-image-remove' ).show();
					} );
					frame.open();
					// Show the existing images rather than the upload tab.
					frame.content.mode( 'browse' );
				} );
				$( document ).on( 'click', '.bricareau-menu-image-remove', function () {
					var box = $( this ).closest( '.bricareau-menu-fields' );
					box.find( '.bricareau-menu-image-id' ).val( '' ).trigger( 'change' );
					box.find( '.bricareau-menu-image-preview' ).hide();
					$( this ).hide();
				} );
			} );"
		);
	}
);
