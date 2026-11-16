<?php
/**
 * Full-height centered statement (Notre vision, Notre engagement, Notre mission…).
 *
 * @var array $attributes
 */

$theme     = $attributes['theme'] ?? 'dark';
$dark      = 'dark' === $theme;
$editorial = 'editorial' === ( $attributes['titleStyle'] ?? 'bold' );
$items     = array_filter( $attributes['items'] ?? array(), 'is_array' );

$section_classes = array(
	'dark'  => 'relative min-h-screen py-32 flex items-center bg-slate-900 overflow-hidden',
	'light' => 'relative min-h-screen py-32 flex items-center bg-[#F0F7FF] overflow-hidden',
	'white' => 'relative min-h-screen py-40 flex items-center bg-white overflow-hidden',
);
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => $section_classes[ $theme ] ?? $section_classes['dark'] ) );

if ( $editorial ) {
	$title_class = 'font-light text-slate-900 tracking-tighter max-w-5xl mx-auto text-[32px] md:text-[48px] leading-tight md:leading-[48px]';
	$bold_class  = 'font-bold text-[#18448F]';
} else {
	$title_class = 'heading-pro-max font-bold mb-12 ' . ( $dark ? 'text-white' : 'text-[#18448F]' );
	$bold_class  = 'font-bold';
}
$text_class = ( $dark ? 'text-slate-300' : 'text-slate-700' ) . ( 'medium' === ( $attributes['textSize'] ?? 'large' ) ? ' text-xl md:text-2xl' : ' text-xl md:text-3xl' );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<?php if ( 'dark' === $theme ) : ?>
		<div class="absolute inset-0 z-0 pointer-events-none">
			<div class="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#8CC63F]/40 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite]"></div>
			<div class="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-[#18448F]/30 rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite_reverse]"></div>
		</div>
	<?php elseif ( 'light' === $theme ) : ?>
		<div class="absolute inset-0 z-0 pointer-events-none">
			<div class="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#8CC63F]/20 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite]"></div>
			<div class="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-[#18448F]/10 rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite_reverse]"></div>
		</div>
	<?php endif; ?>

	<div class="relative z-10 container mx-auto px-6">
		<div class="text-center <?php echo $items ? 'mb-24' : ''; ?>">
			<?php if ( ! empty( $attributes['label'] ) ) : ?>
				<div class="mb-10"><?php echo bricareau_label( $attributes['label'], $attributes['labelStyle'] ?? 'pill', true ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
			<?php endif; ?>

			<?php if ( ! empty( $attributes['title'] ) ) : ?>
				<h2 class="<?php echo esc_attr( $title_class ); ?>">
					<?php echo bricareau_format_title( $attributes['title'], bricareau_accent_class( $attributes['accentStyle'] ?? 'gradient' ), $editorial ? 'br' : 'block', $bold_class ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				</h2>
			<?php endif; ?>

			<?php $paragraphs = bricareau_paragraphs( $attributes['text'] ?? '', 'font-bold' ); ?>
			<?php if ( $paragraphs ) : ?>
				<div class="max-w-4xl mx-auto space-y-6">
					<?php foreach ( $paragraphs as $paragraph ) : ?>
						<p class="font-light leading-relaxed <?php echo esc_attr( $text_class ); ?>"><?php echo $paragraph; // phpcs:ignore WordPress.Security.EscapeOutput ?></p>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
		</div>

		<?php if ( $items ) : ?>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 max-w-7xl mx-auto text-center lg:text-left">
				<?php foreach ( $items as $item ) : ?>
					<div class="space-y-6">
						<div class="mx-auto lg:mx-0 w-16 h-16 rounded-full flex items-center justify-center <?php echo $dark ? 'bg-white/10' : 'bg-[#18448F]/10'; ?>">
							<?php echo bricareau_icon( $item['icon'] ?? '', 'w-8 h-8 text-[#8CC63F]', array( 'stroke-width' => 1.5 ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						</div>
						<h3 class="text-2xl font-bold <?php echo $dark ? 'text-white' : 'text-[#18448F]'; ?>"><?php echo esc_html( $item['title'] ?? '' ); ?></h3>
						<p class="leading-relaxed font-light <?php echo $dark ? 'text-slate-400' : 'text-slate-500'; ?>"><?php echo esc_html( $item['text'] ?? '' ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>
	</div>
</section>
