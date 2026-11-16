<?php
/**
 * "Témoignages" content type: the title is the client's name, the content is the
 * review text, and the rating (1–5) is stored in post meta.
 */

defined( 'ABSPATH' ) || exit;

const BRICAREAU_TESTIMONIAL_TYPE = 'bricareau_temoignage';

add_action(
	'init',
	function () {
		register_post_type(
			BRICAREAU_TESTIMONIAL_TYPE,
			array(
				'labels'             => array(
					'name'          => 'Témoignages',
					'singular_name' => 'Témoignage',
					'add_new_item'  => 'Ajouter un témoignage',
					'edit_item'     => 'Modifier le témoignage',
					'all_items'     => 'Tous les témoignages',
				),
				'public'             => false,
				'show_ui'            => true,
				'show_in_rest'       => true,
				'menu_icon'          => 'dashicons-format-quote',
				'menu_position'      => 21,
				'supports'           => array( 'title', 'editor', 'page-attributes' ),
				'template'           => array( array( 'core/paragraph', array( 'placeholder' => 'Texte du témoignage…' ) ) ),
				'template_lock'      => 'all',
			)
		);

		register_post_meta(
			BRICAREAU_TESTIMONIAL_TYPE,
			'bricareau_rating',
			array(
				'type'              => 'integer',
				'single'            => true,
				'default'           => 5,
				'show_in_rest'      => true,
				'sanitize_callback' => fn( $value ) => max( 1, min( 5, (int) $value ) ),
				'auth_callback'     => fn() => current_user_can( 'edit_posts' ),
			)
		);
	}
);

add_filter(
	'enter_title_here',
	fn( $text, $post ) => BRICAREAU_TESTIMONIAL_TYPE === $post->post_type ? 'Nom du client (ex. Jean-François B.)' : $text,
	10,
	2
);

add_action(
	'add_meta_boxes_' . BRICAREAU_TESTIMONIAL_TYPE,
	function () {
		add_meta_box(
			'bricareau-rating',
			'Note',
			function ( $post ) {
				$rating = (int) get_post_meta( $post->ID, 'bricareau_rating', true ) ?: 5;
				wp_nonce_field( 'bricareau_rating', 'bricareau_rating_nonce' );
				echo '<select name="bricareau_rating" style="width:100%">';
				for ( $i = 5; $i >= 1; $i-- ) {
					printf( '<option value="%1$d" %2$s>%3$s</option>', $i, selected( $rating, $i, false ), esc_html( str_repeat( '★', $i ) ) );
				}
				echo '</select>';
			},
			null,
			'side'
		);
	}
);

add_action(
	'save_post_' . BRICAREAU_TESTIMONIAL_TYPE,
	function ( $post_id ) {
		if ( ! isset( $_POST['bricareau_rating_nonce'] ) || ! wp_verify_nonce( sanitize_key( $_POST['bricareau_rating_nonce'] ), 'bricareau_rating' ) ) {
			return;
		}
		if ( ! current_user_can( 'edit_post', $post_id ) || ! isset( $_POST['bricareau_rating'] ) ) {
			return;
		}
		update_post_meta( $post_id, 'bricareau_rating', (int) $_POST['bricareau_rating'] );
	}
);

/**
 * Published testimonials, in the order set in the admin ("Ordre" field).
 *
 * @return array<int, array{name: string, rating: int, text: string}>
 */
function bricareau_get_testimonials( $limit = 8 ) {
	$posts = get_posts(
		array(
			'post_type'      => BRICAREAU_TESTIMONIAL_TYPE,
			'posts_per_page' => max( 1, (int) $limit ),
			'orderby'        => array( 'menu_order' => 'ASC', 'date' => 'DESC' ),
		)
	);

	return array_map( 'bricareau_format_testimonial', $posts );
}

/**
 * Published testimonials picked by hand, in the given order. Deleted or unpublished ones are skipped.
 *
 * @param int[] $ids Testimonial post ids.
 * @return array<int, array{name: string, rating: int, text: string}>
 */
function bricareau_get_testimonials_by_ids( $ids ) {
	$ids = array_filter( array_map( 'absint', (array) $ids ) );
	if ( ! $ids ) {
		return array();
	}

	$posts = get_posts(
		array(
			'post_type'      => BRICAREAU_TESTIMONIAL_TYPE,
			'post__in'       => $ids,
			'orderby'        => 'post__in',
			'posts_per_page' => count( $ids ),
		)
	);

	return array_map( 'bricareau_format_testimonial', $posts );
}

function bricareau_format_testimonial( $post ) {
	return array(
		'name'   => get_the_title( $post ),
		'rating' => (int) get_post_meta( $post->ID, 'bricareau_rating', true ) ?: 5,
		'text'   => trim( wp_strip_all_tags( $post->post_content ) ),
	);
}
