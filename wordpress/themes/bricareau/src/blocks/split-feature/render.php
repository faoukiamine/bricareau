<?php
/**
 * Two-column section: copy + CTA on one side, image with an overlapping
 * info card on the other.
 *
 * @var array $attributes
 */

$image_left = 'left' === ( $attributes['imagePosition'] ?? 'right' );
$light_bg   = 'light' === ( $attributes['background'] ?? 'light' );
$mirrored   = ! empty( $attributes['cardMirrored'] );

$wrapper = bricareau_block_wrapper( $attributes,
	array( 'class' => 'py-16 lg:py-24 relative border-t border-slate-200 overflow-hidden ' . ( $light_bg ? 'bg-[#F8FAFC]' : 'bg-white' ) )
);

// Below lg the card overlaps the bottom of the image inside the screen; from lg
// it sits on the outer corner of the image. It contrasts with the section.
$card_classes = implode(
	' ',
	array(
		'relative z-20 -mt-12 mx-4 sm:max-w-sm p-6 lg:p-8 shadow-xl lg:absolute lg:-bottom-6 lg:mt-0 lg:mx-0 lg:max-w-xs',
		$image_left ? 'sm:ml-auto lg:-right-12' : 'sm:mr-auto lg:-left-12',
		$light_bg ? 'bg-white' : 'bg-[#F8FAFC]',
		$mirrored ? 'border-l-4 lg:border-l-0 lg:border-r-4 border-[#8CC63F] lg:text-right' : 'border-l-4 border-[#8CC63F]',
	)
);
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-4 lg:px-8 max-w-7xl">
		<div class="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-20">

			<div class="w-full lg:w-1/2 flex flex-col justify-center lg:py-8 order-2 <?php echo $image_left ? 'lg:order-2' : 'lg:order-1'; ?>">
				<?php if ( ! empty( $attributes['eyebrow'] ) ) : ?>
					<div class="mb-8"><?php echo bricareau_eyebrow( $attributes['eyebrow'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
				<?php endif; ?>

				<?php if ( ! empty( $attributes['title'] ) ) : ?>
					<h2 class="heading-pro-max mb-8 font-bold text-[#18448F]">
						<?php echo bricareau_format_title( $attributes['title'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					</h2>
				<?php endif; ?>

				<?php if ( ! empty( $attributes['body'] ) ) : ?>
					<p class="text-lg text-slate-600 leading-relaxed mb-10"><?php echo bricareau_nl2br( $attributes['body'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?></p>
				<?php endif; ?>

				<?php if ( ! empty( $attributes['bullets'] ) ) : ?>
					<ul class="space-y-3 mb-10">
						<?php foreach ( bricareau_lines( $attributes['bullets'] ) as $bullet ) : ?>
							<li class="flex items-start gap-3 text-base text-slate-600"><?php echo bricareau_icon( 'circle-check-big', 'w-5 h-5 text-[#8CC63F] shrink-0 mt-0.5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><span><?php echo esc_html( $bullet ); ?></span></li>
						<?php endforeach; ?>
					</ul>
				<?php endif; ?>

				<?php if ( ! empty( $attributes['ctaText'] ) ) : ?>
					<div class="mt-2">
						<?php
						echo bricareau_button( // phpcs:ignore WordPress.Security.EscapeOutput
							$attributes['ctaText'],
							$attributes['ctaUrl'] ?? '',
							array( 'icon' => empty( $attributes['ctaArrow'] ) ? '' : 'arrow-right' )
						);
						?>
					</div>
				<?php endif; ?>
			</div>

			<div class="w-full lg:w-1/2 relative lg:min-h-[400px] order-1 <?php echo $image_left ? 'lg:order-1' : 'lg:order-2'; ?>">
				<div class="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-auto lg:absolute lg:inset-0 z-10 shadow-md">
					<?php
					echo bricareau_image( // phpcs:ignore WordPress.Security.EscapeOutput
						$attributes['image'] ?? array(),
						'absolute inset-0 w-full h-full object-cover rounded-none',
						array_filter(
							array(
								'title' => $attributes['imageTitle'] ?? '',
								'sizes' => '(min-width: 1024px) 50vw, 100vw',
							)
						)
					);
					?>
				</div>

				<?php if ( ! empty( $attributes['cardTitle'] ) || ! empty( $attributes['cardText'] ) ) : ?>
					<div class="<?php echo esc_attr( $card_classes ); ?>">
						<div class="flex items-start gap-4 <?php echo $mirrored ? 'lg:flex-row-reverse' : ''; ?>">
							<?php echo bricareau_icon( $attributes['cardIcon'] ?? '', 'w-8 h-8 text-[#18448F] shrink-0' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
							<div>
								<h4 class="text-[#18448F] font-bold text-lg mb-1"><?php echo esc_html( $attributes['cardTitle'] ?? '' ); ?></h4>
								<p class="text-slate-500 text-sm leading-snug"><?php echo esc_html( $attributes['cardText'] ?? '' ); ?></p>
							</div>
						</div>
					</div>
				<?php endif; ?>
			</div>

		</div>
	</div>
</section>
