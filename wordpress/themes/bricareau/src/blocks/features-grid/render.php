<?php
/**
 * Centered heading + grid of icon features + CTA.
 *
 * @var array $attributes
 */

$features = array_filter( $attributes['features'] ?? array(), 'is_array' );
$wrapper  = bricareau_block_wrapper( $attributes, array( 'class' => 'py-24 bg-white relative border-b border-slate-200' ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-4 max-w-6xl">
		<div class="text-center mb-16">
			<?php if ( ! empty( $attributes['eyebrow'] ) ) : ?>
				<span class="text-[#18448F] text-xs font-bold uppercase tracking-[0.15em] mb-4 block"><?php echo esc_html( $attributes['eyebrow'] ); ?></span>
			<?php endif; ?>
			<?php if ( ! empty( $attributes['title'] ) ) : ?>
				<h2 class="heading-pro-max text-[#18448F] mb-6"><?php echo bricareau_format_title( $attributes['title'], 'text-[#8CC63F]', 'br' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h2>
			<?php endif; ?>
			<?php if ( ! empty( $attributes['intro'] ) ) : ?>
				<p class="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto"><?php echo bricareau_nl2br( $attributes['intro'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?></p>
			<?php endif; ?>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<?php foreach ( $features as $feature ) : ?>
				<div class="pl-6 border-l-4 border-[#18448F] hover:border-[#8CC63F] transition-colors py-2 bg-white">
					<?php echo bricareau_icon( $feature['icon'] ?? '', 'w-8 h-8 text-[#18448F] mb-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					<h3 class="text-lg font-bold text-[#18448F] mb-2"><?php echo esc_html( $feature['title'] ?? '' ); ?></h3>
					<p class="text-slate-600 text-sm leading-relaxed"><?php echo esc_html( $feature['description'] ?? '' ); ?></p>
				</div>
			<?php endforeach; ?>
		</div>

		<?php if ( ! empty( $attributes['ctaText'] ) ) : ?>
			<div class="text-center mt-16">
				<?php echo bricareau_button( $attributes['ctaText'], $attributes['ctaUrl'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			</div>
		<?php endif; ?>
	</div>
</section>
