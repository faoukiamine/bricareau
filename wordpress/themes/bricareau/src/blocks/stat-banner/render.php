<?php
/**
 * Header + large photo with a key-figure card and a CTA on the right.
 *
 * @var array $attributes
 */

$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'py-24 lg:py-40 bg-white relative overflow-hidden' ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/60 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
	<div class="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-50/60 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 z-0"></div>
	<div class="container mx-auto px-6 relative z-10">
		<?php echo bricareau_section_header( $attributes, array( 'class' => 'mb-16 space-y-4' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		<div class="relative w-full max-w-7xl mx-auto h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100">
			<?php echo bricareau_image( $attributes['image'] ?? array(), 'absolute inset-0 w-full h-full object-cover transition-transform [transition-duration:10s] hover:scale-105', array( 'sizes' => '100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			<div class="absolute inset-0 bg-slate-900/30"></div>
			<div class="h-full relative z-10 flex flex-col justify-center items-end p-6 lg:p-16">
				<div class="w-full max-w-[220px] lg:max-w-[300px] flex flex-col gap-4 lg:gap-6">
					<div class="rounded-[1.5rem] lg:rounded-[2rem] bg-gradient-to-br from-[#8CC63F] to-green-600 p-4 lg:p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-xl shadow-[#8CC63F]/30">
						<?php echo bricareau_icon( $attributes['statIcon'] ?? 'recycle', 'w-6 h-6 lg:w-8 lg:h-8 text-white/80 mb-2 lg:mb-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						<span class="text-3xl lg:text-5xl font-black text-white leading-none tracking-tighter mb-1 lg:mb-2 group-hover:scale-110 transition-transform duration-500"><?php echo esc_html( $attributes['statValue'] ?? '' ); ?></span>
						<span class="w-8 lg:w-10 h-1 bg-white/30 rounded-full my-2 lg:my-3"></span>
						<span class="text-[9px] lg:text-xs font-bold text-emerald-50 uppercase tracking-[0.2em] leading-relaxed"><?php echo bricareau_nl2br( $attributes['statLabel'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
					</div>
					<?php echo bricareau_button( $attributes['ctaText'] ?? '', $attributes['ctaUrl'] ?? '', array( 'variant' => 'white', 'icon' => 'arrow-right', 'container_class' => 'w-full', 'full' => true, 'class' => 'h-12 lg:h-14 px-2 text-[9px] lg:text-xs tracking-widest' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				</div>
			</div>
		</div>
	</div>
</section>
