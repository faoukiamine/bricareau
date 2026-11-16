<?php
/**
 * Homepage hero (immersive): full-bleed cross-fading photos under a navy gradient,
 * white text, CTA + call button, slide tabs with a progress bar, key figures.
 * Phones and tablets: the photo has its own area at the top (cropped around the slide's
 * focal point) and fades into navy; the text starts on the fade, below the faces. From lg: text on
 * the left over a horizontal gradient, tabs and figures along the bottom.
 *
 * @var array $attributes
 */

$slides   = array_values( array_filter( $attributes['slides'] ?? array(), 'is_array' ) );
$stats    = $attributes['stats'] ?? array();
$count    = count( $slides );
$interval = max( 3, (int) ( $attributes['interval'] ?? 6 ) );

$wrapper = bricareau_block_wrapper( $attributes,
	array(
		'class'                 => 'relative overflow-hidden bg-[#0d2a5c] text-white lg:min-h-[max(100svh,760px)] flex flex-col',
		'data-bricareau-slider' => '',
		'data-header-dark'      => '',
		'data-interval'         => $interval * 1000,
	)
);

$button_size = 'h-[3.25rem] px-5 sm:px-8 text-[11px] tracking-[0.06em] sm:tracking-[0.1em]';
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="relative h-[58svh] min-h-[360px] sm:h-[60svh] lg:absolute lg:inset-0 lg:h-full lg:min-h-0">
		<?php foreach ( $slides as $i => $slide ) : ?>
			<?php
			echo bricareau_image( // phpcs:ignore WordPress.Security.EscapeOutput
				$slide['image'] ?? array(),
				'absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ' . ( 0 === $i ? 'opacity-100' : 'opacity-0' ),
				array(
					'data-slide-image' => $i,
					'loading'          => 0 === $i ? 'eager' : 'lazy',
					'fetchpriority'    => 0 === $i ? 'high' : 'auto',
					'sizes'            => '100vw',
				)
			);
			?>
		<?php endforeach; ?>
		<div class="absolute inset-0 lg:hidden bg-[linear-gradient(180deg,rgba(13,42,92,0.55)_0%,rgba(13,42,92,0)_25%,rgba(13,42,92,0)_55%,rgba(13,42,92,0.7)_80%,#0d2a5c_100%)]"></div>
	</div>
	<div class="absolute inset-0 hidden lg:block bg-[linear-gradient(90deg,rgba(13,42,92,0.95)_0%,rgba(13,42,92,0.82)_34%,rgba(13,42,92,0.15)_62%,rgba(13,42,92,0)_100%)]"></div>
	<div class="absolute inset-x-0 top-0 h-40 hidden lg:block bg-gradient-to-b from-[#0d2a5c]/60 to-transparent"></div>
	<div class="absolute inset-x-0 bottom-0 h-60 hidden lg:block bg-gradient-to-b from-[#0d2a5c]/0 to-[#0d2a5c]/90"></div>

	<div class="relative z-10 container mx-auto px-6 flex-1 flex flex-col justify-end lg:justify-between -mt-24 sm:-mt-32 pb-8 lg:mt-0 lg:pt-36 lg:pb-10">
		<div class="max-w-2xl lg:max-w-3xl">
			<div class="grid">
				<?php foreach ( $slides as $i => $slide ) : ?>
					<div
						data-slide="<?php echo esc_attr( $i ); ?>"
						class="col-start-1 row-start-1 transition-all duration-700 ease-in-out flex flex-col justify-end <?php echo 0 === $i ? 'opacity-100 translate-y-0 pointer-events-auto z-10' : 'opacity-0 translate-y-4 pointer-events-none z-0 invisible'; ?>"
						<?php echo 0 === $i ? '' : 'aria-hidden="true"'; ?>
					>
						<?php if ( ! empty( $slide['label'] ) ) : ?>
							<span class="text-xs lg:text-[13px] font-bold uppercase tracking-[0.14em] text-[#B5E07A] mb-3 lg:mb-5"><?php echo esc_html( $slide['label'] ); ?></span>
						<?php endif; ?>
						<?php $tag = 0 === $i ? 'h1' : 'p'; ?>
						<<?php echo $tag; ?> class="text-[34px] leading-[40px] sm:text-5xl sm:leading-[1.1] lg:text-[64px] lg:leading-[68px] font-sans font-bold text-white mb-4 lg:mb-6 tracking-tight">
							<?php echo bricareau_format_title( $slide['title'] ?? '', 'text-[#8CC63F] font-sans font-bold', 'br' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						</<?php echo $tag; ?>>
						<?php if ( ! empty( $slide['description'] ) ) : ?>
							<p class="text-[#dbe4f3] text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-xl line-clamp-3 lg:line-clamp-none"><?php echo esc_html( $slide['description'] ); ?></p>
						<?php endif; ?>
					</div>
				<?php endforeach; ?>
			</div>

			<?php if ( ! empty( $attributes['ctaText'] ) || ! empty( $attributes['phoneButton'] ) ) : ?>
				<div class="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mt-6 lg:mt-8">
					<?php echo bricareau_button( $attributes['ctaText'] ?? '', $attributes['ctaUrl'] ?? '', array( 'variant' => 'green', 'container_class' => 'w-full sm:w-auto', 'class' => $button_size ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					<?php
					if ( ! empty( $attributes['phoneButton'] ) ) {
						echo bricareau_phone_button( array( 'variant' => 'outline-white', 'text' => BRICAREAU_PHONE_DISPLAY, 'container_class' => 'w-full sm:w-auto', 'class' => $button_size ) ); // phpcs:ignore WordPress.Security.EscapeOutput
					}
					?>
				</div>
			<?php endif; ?>
		</div>

		<?php if ( $count > 1 || $stats ) : ?>
			<div class="mt-8 lg:mt-12 flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12">
				<?php if ( $count > 1 ) : ?>
					<div class="flex-1 grid gap-3 lg:gap-6" style="grid-template-columns: repeat(<?php echo (int) $count; ?>, minmax(0, 1fr));">
						<?php foreach ( $slides as $i => $slide ) : ?>
							<button
								type="button"
								data-slide-dot="<?php echo esc_attr( $i ); ?>"
								class="w-full text-left flex flex-col gap-1.5 lg:gap-2.5 pt-2 transition-colors <?php echo 0 === $i ? 'text-white' : 'text-white/60 hover:text-white'; ?>"
								aria-label="<?php echo esc_attr( sprintf( /* translators: %d: slide number */ __( 'Aller à la diapositive %d', 'bricareau' ), $i + 1 ) ); ?>"
							>
								<span data-tab-number class="text-[11px] lg:text-xs font-bold <?php echo 0 === $i ? 'text-[#B5E07A]' : 'text-white/60'; ?>"><?php echo esc_html( sprintf( '%02d', $i + 1 ) ); ?></span>
								<?php if ( ! empty( $slide['label'] ) ) : ?>
									<span class="text-xs sm:text-sm lg:text-base font-bold leading-tight"><?php echo esc_html( $slide['label'] ); ?></span>
								<?php endif; ?>
								<span class="relative block w-full h-[3px] mt-auto bg-white/25 overflow-hidden"><span data-slide-progress class="absolute inset-y-0 left-0 bg-white <?php echo 0 === $i ? 'w-full' : 'w-0'; ?>"></span></span>
							</button>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>

				<?php if ( $stats ) : ?>
					<div class="grid grid-cols-3 lg:flex gap-2 lg:gap-3">
						<?php foreach ( $stats as $stat ) : ?>
							<div class="px-3 py-2 lg:px-[18px] lg:py-3 rounded-2xl bg-white/10 border border-white/25 backdrop-blur-sm flex flex-col gap-0.5">
								<span class="text-lg lg:text-[22px] font-bold leading-tight"><?php echo esc_html( $stat['value'] ?? '' ); ?></span>
								<span class="text-[11px] lg:text-xs leading-snug text-[#dbe4f3]"><?php echo bricareau_nl2br( $stat['label'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
							</div>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
			</div>
		<?php endif; ?>
	</div>
</section>
