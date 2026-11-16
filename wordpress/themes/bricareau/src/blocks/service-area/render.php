<?php
/**
 * Served regions as cards over a faint map background.
 *
 * @var array $attributes
 */

$regions = array_filter( $attributes['regions'] ?? array(), 'is_array' );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'relative py-24 bg-white overflow-hidden border-b border-slate-200' ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<?php if ( ! empty( $attributes['backgroundImage']['url'] ) || ! empty( $attributes['backgroundImage']['id'] ) ) : ?>
		<div class="absolute inset-0 opacity-[0.03] pointer-events-none">
			<?php echo bricareau_image( $attributes['backgroundImage'], 'w-full h-full object-cover invert', array( 'alt' => '' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		</div>
	<?php endif; ?>

	<div class="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
		<div class="text-center max-w-3xl mx-auto mb-16">
			<?php if ( ! empty( $attributes['eyebrow'] ) ) : ?>
				<div class="mb-6"><?php echo bricareau_eyebrow( $attributes['eyebrow'], true, 'text-[#8CC63F]' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
			<?php endif; ?>
			<?php if ( ! empty( $attributes['title'] ) ) : ?>
				<h2 class="text-4xl md:text-5xl font-bold mb-6 text-[#18448F]"><?php echo bricareau_format_title( $attributes['title'], 'text-[#8CC63F]', 'br' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h2>
			<?php endif; ?>
			<?php if ( ! empty( $attributes['intro'] ) ) : ?>
				<p class="text-slate-500 text-lg"><?php echo esc_html( $attributes['intro'] ); ?></p>
			<?php endif; ?>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<?php foreach ( $regions as $region ) : ?>
				<div class="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#18448F]/20 hover:-translate-y-1 transition-all duration-300 group cursor-default flex items-start gap-4">
					<div class="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-[#8CC63F]/10 flex items-center justify-center shrink-0 transition-colors">
						<?php echo bricareau_icon( 'map-pin', 'w-6 h-6 text-[#18448F] group-hover:text-[#8CC63F] transition-colors' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					</div>
					<div>
						<h3 class="font-bold text-[#18448F] text-lg mb-1"><?php echo esc_html( $region['name'] ?? '' ); ?></h3>
						<p class="text-slate-500 text-sm"><?php echo esc_html( $region['description'] ?? '' ); ?></p>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
