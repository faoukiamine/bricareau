<?php
/**
 * Navy call-to-action band with two buttons.
 *
 * @var array $attributes
 */

if ( 'light' === ( $attributes['theme'] ?? 'navy' ) ) :
	$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'py-12 md:py-16 bg-slate-50' ) );
	?>
	<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
		<div class="container mx-auto px-4">
			<div class="max-w-3xl mx-auto text-center space-y-6">
				<h2 class="text-slate-900"><?php echo bricareau_format_title( $attributes['title'] ?? '', 'text-[#8CC63F]', 'br' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h2>
				<p class="text-base md:text-lg text-slate-500"><?php echo esc_html( $attributes['text'] ?? '' ); ?></p>
				<div class="flex flex-col sm:flex-row gap-6 justify-center pt-2">
					<?php
					echo bricareau_button( $attributes['ctaText'] ?? '', $attributes['ctaUrl'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput
					echo bricareau_button( $attributes['secondaryText'] ?? '', $attributes['secondaryUrl'] ?? '', array( 'variant' => 'white-outline' ) ); // phpcs:ignore WordPress.Security.EscapeOutput
					?>
				</div>
			</div>
		</div>
	</section>
	<?php
	return;
endif;

$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'relative py-32 flex items-center overflow-hidden bg-[#18448F]' ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 translate-x-1/4"></div>
	<div class="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/10 to-transparent -skew-x-12 -translate-x-1/4"></div>
	<div class="container mx-auto px-6 relative z-10">
		<div class="max-w-5xl mx-auto text-center space-y-12">
			<div class="space-y-6">
				<?php if ( ! empty( $attributes['label'] ) ) : ?>
					<span class="inline-block px-4 py-1.5 bg-white text-[#18448F] rounded-full text-[10px] font-black uppercase tracking-[0.4em]"><?php echo esc_html( $attributes['label'] ); ?></span>
				<?php endif; ?>
				<h2 class="font-light block leading-tight lg:leading-[52px] text-white text-3xl md:text-5xl"><?php echo bricareau_format_title( $attributes['title'] ?? '', 'text-white italic font-bold font-serif', 'br' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h2>
				<?php if ( ! empty( $attributes['text'] ) ) : ?>
					<p class="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed"><?php echo esc_html( $attributes['text'] ); ?></p>
				<?php endif; ?>
			</div>
			<div class="flex flex-col sm:flex-row gap-8 justify-center items-center pt-4">
				<?php
				echo bricareau_button( $attributes['ctaText'] ?? '', $attributes['ctaUrl'] ?? '', array( 'variant' => 'white-on-dark', 'container_class' => 'w-full sm:w-auto', 'class' => 'h-16 px-12 text-xs tracking-widest' ) ); // phpcs:ignore WordPress.Security.EscapeOutput
				echo bricareau_button( $attributes['secondaryText'] ?? '', $attributes['secondaryUrl'] ?? '', array( 'variant' => 'outline-white', 'container_class' => 'w-full sm:w-auto', 'class' => 'h-16 px-12 text-xs tracking-widest' ) ); // phpcs:ignore WordPress.Security.EscapeOutput
				?>
			</div>
		</div>
	</div>
</section>
