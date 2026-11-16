<?php
/**
 * Rendering helpers shared by the blocks and template parts.
 */

defined( 'ABSPATH' ) || exit;

/**
 * Accent styles editors can pick for the *accent* part of titles.
 */
function bricareau_accent_class( $style = 'green' ) {
	$styles = array(
		'green'        => 'text-[#8CC63F]',
		'green-italic' => 'text-[#8CC63F] italic',
		'gradient'     => 'text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] to-blue-500 italic font-light',
		'serif'        => 'italic font-serif text-[#8CC63F]',
	);
	return $styles[ $style ] ?? $styles['green'];
}

/**
 * Inline markup used in editor text fields: **bold**, *accent* and _italic light_.
 *
 * @param string $text         Raw single-line text.
 * @param string $accent_class Classes for *accent* spans.
 * @param string $bold_class   Classes for **bold** spans.
 */
function bricareau_inline( $text, $accent_class = 'text-[#8CC63F]', $bold_class = 'font-bold text-slate-900' ) {
	$html = esc_html( $text );
	$html = preg_replace( '/\*\*(.+?)\*\*/u', '<strong class="' . esc_attr( $bold_class ) . '">$1</strong>', $html );
	$html = preg_replace( '/\*(.+?)\*/u', '<span class="' . esc_attr( $accent_class ) . '">$1</span>', $html );
	return preg_replace( '/(?<![\p{L}\p{N}])_(.+?)_(?![\p{L}\p{N}])/u', '<span class="italic font-light">$1</span>', $html );
}

/**
 * Formats an editor-entered title.
 *
 * Each line of $text is one line of the title, and text wrapped in *asterisks*
 * gets the accent colour, e.g. "Votre eau de robinet\n*mérite mieux.*".
 *
 * @param string $text         Raw title.
 * @param string $accent_class Classes for *accent* spans.
 * @param string $line_mode    'block' wraps each line in a block span, 'br' joins lines with <br>.
 * @param string $bold_class   Classes for **bold** spans.
 */
function bricareau_format_title( $text, $accent_class = 'text-[#8CC63F]', $line_mode = 'block', $bold_class = 'font-bold' ) {
	$lines = preg_split( '/\r\n|\r|\n/', trim( (string) $text ) );
	$html  = array();

	foreach ( $lines as $line ) {
		$line   = bricareau_inline( $line, $accent_class, $bold_class );
		$html[] = 'block' === $line_mode ? '<span class="block">' . $line . '</span>' : $line;
	}

	return implode( 'block' === $line_mode ? '' : '<br>', $html );
}

/**
 * Paragraphs from a text field: blank lines separate paragraphs, **bold** and
 * *accent* markup is supported.
 *
 * @return string[] One HTML string per paragraph (without <p>).
 */
function bricareau_paragraphs( $text, $bold_class = 'font-bold text-slate-900', $accent_class = 'text-[#8CC63F]' ) {
	$blocks = preg_split( '/\n\s*\n/', trim( (string) $text ) );
	return array_map(
		fn( $block ) => implode( '<br>', array_map( fn( $line ) => bricareau_inline( $line, $accent_class, $bold_class ), preg_split( '/\r\n|\r|\n/', $block ) ) ),
		array_filter( $blocks, fn( $block ) => '' !== trim( $block ) )
	);
}

/**
 * Lines of a textarea as an array (empty lines dropped).
 */
function bricareau_lines( $text ) {
	return array_values( array_filter( array_map( 'trim', preg_split( '/\r\n|\r|\n/', (string) $text ) ) ) );
}

/**
 * Small section label above titles.
 *
 * Styles: 'pill' (navy), 'pill-outline', 'pill-outline-green', 'pill-soft',
 * 'line' (thin black line + tiny caps), 'line-green' (green line + navy caps), 'text'.
 */
function bricareau_label( $text, $style = 'pill', $centered = false ) {
	if ( '' === trim( (string) $text ) ) {
		return '';
	}
	$text = esc_html( $text );

	switch ( $style ) {
		case 'line':
			$line = '<span class="w-12 h-[1px] bg-slate-900"></span>';
			return sprintf(
				'<div class="inline-flex items-center gap-4 %s">%s<span class="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">%s</span>%s</div>',
				$centered ? 'justify-center' : '',
				$line,
				$text,
				$centered ? $line : ''
			);
		case 'line-green':
			return bricareau_eyebrow( html_entity_decode( $text, ENT_QUOTES ), $centered );
		case 'text':
			return '<span class="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">' . $text . '</span>';
		case 'pill-outline':
			return '<span class="inline-block py-1 px-4 border border-[#18448F]/20 rounded-full text-[#18448F] font-bold tracking-[0.2em] uppercase text-xs">' . $text . '</span>';
		case 'pill-outline-green':
			return '<span class="inline-block py-1 px-4 border border-[#8CC63F] rounded-full text-[#8CC63F] font-bold tracking-[0.2em] uppercase text-xs">' . $text . '</span>';
		case 'pill-soft':
			return '<span class="inline-block py-1.5 px-4 bg-slate-50 rounded-full text-[#18448F] font-bold tracking-[0.2em] uppercase text-xs w-fit border border-slate-200 shadow-sm">' . $text . '</span>';
		default:
			return '<span class="inline-block py-1 px-4 bg-[#18448F] text-white rounded-full font-bold tracking-[0.2em] uppercase text-xs w-fit">' . $text . '</span>';
	}
}

/**
 * Label style choices for the editor (value => label).
 */
function bricareau_label_styles() {
	return array(
		'pill'               => 'Pastille bleue',
		'pill-outline'       => 'Pastille contour bleu',
		'pill-outline-green' => 'Pastille contour vert',
		'pill-soft'          => 'Pastille grise',
		'line'               => 'Trait noir + petites capitales',
		'line-green'         => 'Trait vert',
		'text'               => 'Petites capitales',
	);
}

/**
 * Escapes multi-line text, turning line breaks into <br>.
 */
function bricareau_nl2br( $text ) {
	return nl2br( esc_html( trim( (string) $text ) ), false );
}

/**
 * Media library addresses are saved in full in block settings (e.g. http://localhost:8888/wp-content/uploads/…).
 * This points them at the current site's uploads folder, so a page keeps working after the site moves.
 */
function bricareau_current_upload_url( $url ) {
	$position = strpos( (string) $url, '/wp-content/uploads/' );
	if ( false === $position || ! preg_match( '#^https?://#', $url ) ) {
		return $url;
	}
	return wp_get_upload_dir()['baseurl'] . '/' . substr( $url, $position + strlen( '/wp-content/uploads/' ) );
}

/**
 * Resolves a link entered as a site path ("/consultation") or a full URL.
 */
function bricareau_url( $url ) {
	$url = bricareau_current_upload_url( trim( (string) $url ) );
	if ( '' === $url ) {
		return '#';
	}
	if ( str_starts_with( $url, '/' ) && ! str_starts_with( $url, '//' ) ) {
		$url = home_url( $url );
	}
	// On the English site, site links lead to the English page when there is one.
	return esc_url( bricareau_translate_url( $url ) );
}

/**
 * Green pill with a pulsing dot ("En ligne").
 */
function bricareau_live_badge( $text, $class = '' ) {
	return sprintf(
		'<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-green-50 border-green-100 text-green-600 text-[10px] font-black uppercase tracking-[0.2em] w-fit %2$s"><span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>%1$s</div>',
		esc_html( $text ),
		esc_attr( $class )
	);
}

/**
 * The site's offset-border pill button (ProMaxButton in the React app).
 *
 * @param string $text  Label.
 * @param string $url   Site path or URL.
 * @param array  $args  'variant' (primary|outline|white|outline-white), 'class' (extra
 *                      classes on the button), 'icon' (icon slug appended to the label).
 */
function bricareau_button( $text, $url, $args = array() ) {
	if ( '' === trim( (string) $text ) ) {
		return '';
	}

	$variants = array(
		'primary'       => array( 'bg-[#18448F] text-white border-[#18448F] hover:bg-transparent hover:text-[#18448F]', 'border-[#18448F]' ),
		'outline'       => array( 'bg-transparent text-[#18448F] border-2 border-[#18448F] hover:bg-[#18448F] hover:text-white', 'border-[#18448F]' ),
		'white'         => array( 'bg-white text-[#18448F] border-white hover:bg-[#18448F] hover:text-white hover:border-[#18448F]', 'border-[#18448F]' ),
		'outline-white' => array( 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#18448F]', 'border-white' ),
		'white-outline' => array( 'bg-white text-[#18448F] border-slate-200 hover:bg-[#18448F] hover:text-white hover:border-[#18448F]', 'border-slate-200' ),
		'green'         => array( 'bg-[#8CC63F] text-[#0d2a5c] border-[#8CC63F] hover:bg-transparent hover:text-[#8CC63F]', 'border-[#8CC63F]' ),
		'white-on-dark' => array( 'bg-white text-[#18448F] border-white hover:bg-blue-600 hover:text-white hover:border-blue-600', 'border-white' ),
	);
	$variant  = $variants[ $args['variant'] ?? 'primary' ] ?? $variants['primary'];
	$size     = $args['class'] ?? 'h-[3.25rem] px-8 text-[11px] tracking-[0.1em]';
	$icon     = empty( $args['icon'] ) ? '' : bricareau_icon( $args['icon'], 'w-4 h-4 ml-2' );
	$before   = empty( $args['icon_before'] ) ? '' : bricareau_icon( $args['icon_before'], 'w-4 h-4 mr-2' );
	// Full width on phones only, unless 'full' keeps it full width at every size.
	$width    = empty( $args['full'] ) ? 'w-full sm:w-auto' : 'w-full';

	return sprintf(
		'<div class="relative inline-block group %5$s"><div class="absolute inset-0 border %1$s rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div><a href="%2$s" data-cta class="relative inline-flex %7$s items-center justify-center border rounded-[2rem] font-black uppercase transition-all %3$s %6$s">%4$s</a></div>',
		esc_attr( $variant[1] ),
		bricareau_url( $url ),
		esc_attr( $variant[0] ),
		$before . esc_html( $text ) . $icon,
		esc_attr( $args['container_class'] ?? '' ),
		esc_attr( $size ),
		$width
	);
}

/**
 * Renders an image attribute ({id, url, alt}) from the media library, with srcset.
 */
function bricareau_image( $image, $class = '', $extra = array() ) {
	$image = is_array( $image ) ? $image : array();
	$attrs = array_merge( array( 'class' => $class, 'loading' => 'lazy', 'decoding' => 'async' ), $extra );
	// Focal point chosen in the editor (ImageControl with `focal`): keeps that spot visible when cropped.
	if ( isset( $image['focal']['x'], $image['focal']['y'] ) ) {
		$position       = sprintf( 'object-position:%s%% %s%%', round( 100 * (float) $image['focal']['x'], 2 ), round( 100 * (float) $image['focal']['y'], 2 ) );
		$attrs['style'] = trim( ( $attrs['style'] ?? '' ) . ';' . $position, ';' );
	}

	if ( ! empty( $image['id'] ) && wp_attachment_is_image( $image['id'] ) ) {
		if ( isset( $image['alt'] ) && '' !== $image['alt'] ) {
			$attrs['alt'] = $image['alt'];
		}
		return wp_get_attachment_image( (int) $image['id'], 'full', false, $attrs );
	}

	if ( empty( $image['url'] ) ) {
		return '';
	}

	$attrs['src'] = bricareau_current_upload_url( $image['url'] );
	$attrs['alt'] = $image['alt'] ?? '';
	$html         = '<img';
	foreach ( $attrs as $name => $value ) {
		$html .= sprintf( ' %s="%s"', esc_attr( $name ), 'src' === $name ? esc_url( $value ) : esc_attr( $value ) );
	}
	return $html . '>';
}

/**
 * The small "accent line + label" eyebrow above section titles.
 *
 * @param string $text     Label.
 * @param bool   $centered Lines on both sides when true.
 * @param string $color    Label colour classes.
 */
function bricareau_eyebrow( $text, $centered = false, $color = 'text-[#18448F]' ) {
	if ( '' === trim( (string) $text ) ) {
		return '';
	}
	$line = '<div class="w-12 h-0.5 bg-[#8CC63F]"></div>';
	return sprintf(
		'<div class="flex items-center gap-4 %1$s">%2$s<span class="%3$s text-xs font-bold uppercase tracking-[0.15em] leading-none">%4$s</span>%5$s</div>',
		$centered ? 'justify-center' : '',
		$line,
		esc_attr( $color ),
		esc_html( $text ),
		$centered ? $line : ''
	);
}

/**
 * Standard section header from the shared attributes
 * (label, labelStyle, title, accentStyle, intro).
 *
 * @param array $a    Block attributes.
 * @param array $args 'centered' (bool), 'class' (wrapper), 'title_class', 'intro_class', 'title_tag'.
 */
function bricareau_section_header( $a, $args = array() ) {
	$label = $a['label'] ?? '';
	$title = $a['title'] ?? '';
	$intro = $a['intro'] ?? '';
	if ( '' === trim( $label . $title . $intro ) ) {
		return '';
	}

	$centered    = $args['centered'] ?? ( 'left' !== ( $a['headerAlign'] ?? 'center' ) );
	$title_class = $args['title_class'] ?? 'heading-pro-max font-bold text-[#18448F]';
	$intro_class = $args['intro_class'] ?? 'text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl';
	$tag         = $args['title_tag'] ?? 'h2';

	$html = '<div class="' . esc_attr( ( $args['class'] ?? 'mb-24' ) . ( $centered ? ' text-center mx-auto ' . ( $args['max_width'] ?? 'max-w-4xl' ) : '' ) ) . '">';
	if ( '' !== trim( $label ) ) {
		$html .= '<div class="mb-6">' . bricareau_label( $label, $a['labelStyle'] ?? 'pill', $centered ) . '</div>';
	}
	if ( '' !== trim( $title ) ) {
		$html .= sprintf( '<%1$s class="%2$s">%3$s</%1$s>', $tag, esc_attr( $title_class ), bricareau_format_title( $title, bricareau_accent_class( $a['accentStyle'] ?? 'green' ) ) );
	}
	if ( ! empty( $a['headerBar'] ) ) {
		$html .= '<div class="w-24 h-1 bg-blue-600 mt-8' . ( $centered ? ' mx-auto' : '' ) . '"></div>';
	}
	foreach ( bricareau_paragraphs( $intro ) as $i => $paragraph ) {
		$html .= '<p class="' . esc_attr( $intro_class . ( $centered ? ' mx-auto' : '' ) . ( 0 === $i ? ' mt-8' : ' mt-4' ) ) . '">' . $paragraph . '</p>';
	}
	return $html . '</div>';
}


/**
 * get_block_wrapper_attributes() plus the block's HTML anchor as id (WordPress
 * does not add it for server-rendered blocks), so "#section" links work.
 */
function bricareau_block_wrapper( $attributes, $extra = array() ) {
	if ( ! empty( $attributes['anchor'] ) ) {
		$extra['id'] = $attributes['anchor'];
	}
	return get_block_wrapper_attributes( array_filter( $extra, fn( $value ) => null !== $value ) );
}

/**
 * Accent colours editors can pick for dots, badges and icons. Every class is
 * written out in full so Tailwind generates it.
 *
 * @param string $color Colour slug.
 * @param string $kind  'bg', 'text', 'soft' (light background + text) or 'gradient'.
 */
function bricareau_color_class( $color, $kind = 'bg' ) {
	$map = array(
		'navy'    => array( 'bg' => 'bg-[#18448F]', 'text' => 'text-[#18448F]', 'soft' => 'bg-blue-50 text-[#18448F]', 'gradient' => 'from-blue-600 to-[#18448F]' ),
		'blue'    => array( 'bg' => 'bg-blue-600', 'text' => 'text-blue-600', 'soft' => 'bg-blue-50 text-blue-600', 'gradient' => 'from-blue-400 to-indigo-600' ),
		'green'   => array( 'bg' => 'bg-[#8CC63F]', 'text' => 'text-[#8CC63F]', 'soft' => 'bg-[#8CC63F]/10 text-[#8CC63F]', 'gradient' => 'from-[#8CC63F] to-green-600' ),
		'emerald' => array( 'bg' => 'bg-emerald-600', 'text' => 'text-emerald-600', 'soft' => 'bg-emerald-50 text-emerald-700', 'gradient' => 'from-emerald-500 to-teal-700' ),
		'amber'   => array( 'bg' => 'bg-amber-500', 'text' => 'text-amber-500', 'soft' => 'bg-amber-50 text-amber-700', 'gradient' => 'from-amber-400 to-orange-600' ),
		'orange'  => array( 'bg' => 'bg-orange-500', 'text' => 'text-orange-600', 'soft' => 'bg-orange-100 text-orange-600', 'gradient' => 'from-orange-400 to-red-700' ),
		'rose'    => array( 'bg' => 'bg-rose-500', 'text' => 'text-rose-500', 'soft' => 'bg-rose-50 text-rose-600', 'gradient' => 'from-red-500 to-rose-700' ),
		'pink'    => array( 'bg' => 'bg-pink-500', 'text' => 'text-pink-500', 'soft' => 'bg-pink-50 text-pink-600', 'gradient' => 'from-pink-400 to-rose-600' ),
		'cyan'    => array( 'bg' => 'bg-cyan-500', 'text' => 'text-cyan-600', 'soft' => 'bg-cyan-50 text-cyan-700', 'gradient' => 'from-blue-400 to-cyan-600' ),
		'indigo'  => array( 'bg' => 'bg-indigo-500', 'text' => 'text-indigo-500', 'soft' => 'bg-indigo-50 text-indigo-700', 'gradient' => 'from-purple-500 to-indigo-700' ),
		'slate'   => array( 'bg' => 'bg-slate-700', 'text' => 'text-slate-700', 'soft' => 'bg-slate-100 text-slate-700', 'gradient' => 'from-slate-400 to-slate-700' ),
		'red'     => array( 'bg' => 'bg-red-500', 'text' => 'text-red-500', 'soft' => 'bg-red-50 text-red-600', 'gradient' => 'from-red-500 to-rose-700' ),
	);
	$entry = $map[ $color ] ?? $map['navy'];
	return $entry[ $kind ] ?? $entry['bg'];
}

/**
 * The phone button shown next to CTAs (white pill with phone icon).
 */
function bricareau_phone_button( $args = array() ) {
	return bricareau_button(
		$args['text'] ?? '1-855-264-9328',
		BRICAREAU_PHONE_HREF,
		array_merge(
			array(
				'variant' => 'white-outline',
				'icon_before' => 'phone',
			),
			$args
		)
	);
}
