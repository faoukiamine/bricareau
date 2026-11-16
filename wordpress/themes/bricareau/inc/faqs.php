<?php
/**
 * FAQ entries ("FAQ" menu in the admin), shown by the bricareau/faq-library block.
 */

defined( 'ABSPATH' ) || exit;

const BRICAREAU_FAQ_TYPE     = 'bricareau_faq';
const BRICAREAU_FAQ_TAXONOMY = 'bricareau_faq_cat';

add_action(
	'init',
	function () {
		register_post_type(
			BRICAREAU_FAQ_TYPE,
			array(
				'labels'       => array(
					'name'          => 'FAQ',
					'singular_name' => 'Question',
					'add_new_item'  => 'Ajouter une question',
					'edit_item'     => 'Modifier la question',
				),
				'public'       => false,
				'show_ui'      => true,
				'show_in_rest' => true,
				'menu_icon'    => 'dashicons-editor-help',
				'supports'     => array( 'title', 'editor', 'page-attributes' ),
			)
		);
		register_taxonomy(
			BRICAREAU_FAQ_TAXONOMY,
			BRICAREAU_FAQ_TYPE,
			array(
				'labels'       => array( 'name' => 'Catégories', 'singular_name' => 'Catégorie' ),
				'public'       => false,
				'show_ui'      => true,
				'show_in_rest' => true,
				'hierarchical' => true,
			)
		);
	}
);

/**
 * @return array<int, array{id: string, title: string, items: array<int, array{q: string, a: string}>}>
 */
function bricareau_get_faqs() {
	$groups = array();
	// Questions in the page language (Polylang); all of them without Polylang.
	$lang   = function_exists( 'pll_current_language' ) ? array( 'lang' => bricareau_lang() ) : array();
	$terms  = get_terms( array( 'taxonomy' => BRICAREAU_FAQ_TAXONOMY, 'hide_empty' => true, 'orderby' => 'term_order' ) + $lang );
	foreach ( is_array( $terms ) ? $terms : array() as $term ) {
		$posts    = get_posts(
			array(
				'post_type'   => BRICAREAU_FAQ_TYPE,
				'numberposts' => -1,
				'orderby'     => 'menu_order',
				'order'       => 'ASC',
				'tax_query'   => array( array( 'taxonomy' => BRICAREAU_FAQ_TAXONOMY, 'terms' => $term->term_id ) ), // phpcs:ignore WordPress.DB.SlowDBQuery
			) + $lang
		);
		$groups[] = array(
			'id'    => $term->slug,
			'title' => $term->name,
			'order' => (int) get_term_meta( $term->term_id, 'bricareau_order', true ),
			'items' => array_map( fn( $post ) => array( 'q' => get_the_title( $post ), 'a' => wp_strip_all_tags( $post->post_content ) ), $posts ),
		);
	}
	usort( $groups, fn( $a, $b ) => $a['order'] <=> $b['order'] );
	return $groups;
}
