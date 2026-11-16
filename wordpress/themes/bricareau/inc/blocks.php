<?php
/**
 * Registers the theme's custom blocks (built by `npm run build` into build/blocks/).
 */

defined( 'ABSPATH' ) || exit;

add_action(
	'init',
	function () {
		foreach ( glob( BRICAREAU_DIR . '/build/blocks/*/block.json' ) as $metadata ) {
			register_block_type( dirname( $metadata ) );
		}
	}
);

add_filter(
	'block_categories_all',
	function ( $categories ) {
		array_unshift(
			$categories,
			array(
				'slug'  => 'bricareau',
				'title' => 'Bricareau',
			)
		);
		return $categories;
	}
);

// Data the block editor controls need (icon picker choices).
add_action(
	'enqueue_block_editor_assets',
	function () {
		$forms = array();
		if ( class_exists( 'FluentForm\\App\\Models\\Form' ) ) {
			foreach ( \FluentForm\App\Models\Form::select( array( 'id', 'title' ) )->orderBy( 'id', 'DESC' )->get() as $form ) {
				$forms[] = array( 'id' => (int) $form->id, 'title' => $form->title );
			}
		}
		wp_add_inline_script(
			'wp-blocks',
			'window.bricareauEditor = ' . wp_json_encode(
				array(
					'icons' => bricareau_icon_choices(),
					'forms' => $forms,
				)
			) . ';',
			'before'
		);
	}
);
