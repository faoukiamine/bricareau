<?php
/**
 * Large rounded photo with a blue gradient, eyebrow, title and text.
 *
 * @var array $attributes
 */

$strong  = 'soft' !== ( $attributes['overlay'] ?? 'strong' );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'bg-white relative overflow-hidden py-12 lg:py-24' ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-6 relative">
		<div class="rounded-none lg:rounded-[3rem] overflow-hidden shadow-none lg:shadow-2xl border-0 lg:border border-white/20 group relative -mx-6 lg:mx-0">
			<?php echo bricareau_image( $attributes['image'] ?? array(), 'w-full h-[450px] md:h-[550px] lg:h-[650px] object-cover group-hover:scale-105 transition-transform [transition-duration:3000ms] brightness-[1.1] contrast-[1.05]', array( 'sizes' => '100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			<div class="absolute inset-0 bg-gradient-to-r p-8 md:p-12 lg:p-20 flex items-center <?php echo $strong ? 'from-[#18448F]/90 via-[#18448F]/60' : 'from-[#18448F]/70 via-[#18448F]/30'; ?> to-transparent">
				<div class="max-w-xl">
					<?php if ( ! empty( $attributes['eyebrow'] ) ) : ?>
						<div class="flex items-center gap-3 text-blue-200 font-bold text-xs tracking-widest uppercase mb-6"><?php echo bricareau_icon( 'circle-check', 'w-5 h-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><?php echo esc_html( $attributes['eyebrow'] ); ?></div>
					<?php endif; ?>
					<h3 class="text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight"><?php echo esc_html( $attributes['title'] ?? '' ); ?></h3>
					<p class="text-blue-50 text-lg lg:text-xl mb-10 text-justify"><?php echo esc_html( $attributes['text'] ?? '' ); ?></p>
				</div>
			</div>
		</div>
	</div>
</section>
