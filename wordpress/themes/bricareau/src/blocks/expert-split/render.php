<?php
/**
 * 50/50 section: full-height image with a floating badge, and a text column
 * with a CTA (ExpertTrustSection / WaterDiagnosis in the React app).
 *
 * @var array $attributes
 */

$image_right = 'right' === ( $attributes['imageSide'] ?? 'left' );
$badge       = $attributes['badge'] ?? 'stat';
$wrapper     = bricareau_block_wrapper( $attributes, array( 'class' => 'bg-white relative overflow-hidden border-y border-slate-100' ) );
$dots        = str_repeat( '<div class="w-2 h-2 rounded-full bg-blue-600"></div>', 9 );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="flex flex-col items-stretch min-h-[500px] lg:min-h-[750px] <?php echo $image_right ? 'lg:flex-row-reverse' : 'lg:flex-row'; ?>">
		<div class="w-full lg:w-1/2 relative group overflow-hidden aspect-[4/3] md:aspect-[16/10] lg:aspect-auto">
			<?php echo bricareau_image( $attributes['image'] ?? array(), 'absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105', array( 'sizes' => '(min-width: 1024px) 50vw, 100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>

			<?php if ( 'stat' === $badge && ! empty( $attributes['badgeValue'] ) ) : ?>
				<div class="absolute top-6 right-6 lg:top-10 lg:right-10 bg-white/90 backdrop-blur-md p-4 lg:p-6 rounded-3xl shadow-xl border border-white/50 max-w-[200px] z-20">
					<div class="text-2xl lg:text-3xl font-bold text-blue-600 mb-1"><?php echo esc_html( $attributes['badgeValue'] ); ?></div>
					<div class="text-sm font-semibold text-slate-900 leading-tight"><?php echo esc_html( $attributes['badgeText'] ?? '' ); ?></div>
				</div>
				<div class="absolute top-10 left-10 grid grid-cols-3 gap-2 opacity-20 z-10"><?php echo $dots; // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
			<?php elseif ( 'social' === $badge && ! empty( $attributes['badgeText'] ) ) : ?>
				<div class="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:w-80 bg-white/90 backdrop-blur-xl p-4 md:p-6 rounded-3xl shadow-xl border border-white/50 z-20">
					<div class="flex items-center gap-4">
						<div class="flex -space-x-3">
							<?php for ( $i = 0; $i < 3; $i++ ) : ?>
								<div class="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-600"><?php echo bricareau_icon( 'users', 'w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
							<?php endfor; ?>
						</div>
						<div class="flex-1">
							<div class="text-sm font-bold text-slate-900"><?php echo esc_html( $attributes['badgeText'] ); ?></div>
							<div class="text-xs text-slate-500"><?php echo esc_html( $attributes['badgeSubtext'] ?? '' ); ?></div>
						</div>
					</div>
				</div>
				<div class="absolute top-10 right-10 grid grid-cols-3 gap-2 opacity-20 z-10"><?php echo $dots; // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
			<?php endif; ?>
		</div>

		<div class="w-full lg:w-1/2 flex items-center justify-center <?php echo $image_right ? 'lg:justify-end' : 'lg:justify-start'; ?>">
			<div class="w-full max-w-[640px] px-6 py-20 lg:py-32 <?php echo $image_right ? 'lg:pr-12 xl:pr-24' : 'lg:pl-12 xl:pl-24'; ?>">
				<div class="space-y-12">
					<div class="space-y-6">
						<h2 class="text-[32px] md:text-[48px] leading-tight md:leading-[52px] font-bold tracking-tight text-[#18448F]">
							<?php echo bricareau_format_title( $attributes['title'] ?? '', bricareau_accent_class( $attributes['accentStyle'] ?? 'green' ), 'br' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						</h2>
						<?php if ( ! empty( $attributes['text'] ) ) : ?>
							<p class="max-w-xl text-left lg:text-justify font-light text-slate-500 text-xl leading-relaxed"><?php echo esc_html( $attributes['text'] ); ?></p>
						<?php endif; ?>
					</div>
					<?php if ( ! empty( $attributes['ctaText'] ) ) : ?>
						<div class="pt-6">
							<?php echo bricareau_button( $attributes['ctaText'], $attributes['ctaUrl'] ?? '', array( 'icon' => 'arrow-right', 'class' => 'h-16 px-12 text-xs tracking-widest gap-3' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
</section>
