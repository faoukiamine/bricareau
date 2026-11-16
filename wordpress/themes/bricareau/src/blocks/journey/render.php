<?php
/**
 * "Parcours" section: a large circle (image + step icons on its edge) on the
 * left and the active step on the right. view.js rotates the steps.
 *
 * @var array $attributes
 */

$steps   = array_values( array_filter( $attributes['steps'] ?? array(), 'is_array' ) );
$wrapper = bricareau_block_wrapper(
	$attributes,
	array(
		'class'                  => 'pt-24 lg:pt-32 pb-16 lg:pb-32 bg-white relative overflow-hidden',
		'data-bricareau-journey' => '',
		'data-interval'          => max( 3, (int) ( $attributes['interval'] ?? 5 ) ) * 1000,
	)
);
$count   = max( 1, count( $steps ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="w-full relative z-0 mt-12 lg:mt-0">
		<div class="w-full lg:w-1/2 lg:absolute lg:left-0 lg:top-[-215px] xl:top-[-340px] 2xl:top-[-385px] relative flex justify-center lg:justify-start z-0 pointer-events-none">
			<div class="relative w-[340px] h-[340px] md:w-[600px] md:h-[600px] lg:w-[835px] lg:h-[835px] xl:w-[980px] xl:h-[980px] 2xl:w-[1080px] 2xl:h-[1080px] lg:-translate-x-1/3 xl:-translate-x-1/4 shrink-0 pointer-events-auto">
				<div class="absolute inset-4 rounded-full border-[2px] border-slate-100"></div>
				<svg class="absolute inset-0 w-full h-full -rotate-[135deg] pointer-events-none" viewBox="0 0 100 100" aria-hidden="true">
					<circle cx="50" cy="50" r="48" fill="none" stroke="#18448F" stroke-width="1" stroke-dasharray="301" stroke-dashoffset="220" opacity="0.8"></circle>
					<circle cx="50" cy="50" r="48" fill="none" stroke="#18448F" stroke-width="2" stroke-dasharray="301" stroke-dashoffset="250"></circle>
				</svg>
				<div class="absolute inset-8 rounded-full overflow-hidden shadow-2xl bg-slate-50">
					<?php foreach ( $steps as $i => $step ) : ?>
						<?php echo bricareau_image( $step['image'] ?? array(), 'absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ' . ( 0 === $i ? 'opacity-100' : 'opacity-0' ), array( 'data-journey-image' => $i, 'alt' => $step['title'] ?? '', 'sizes' => '(min-width: 1024px) 1080px, 600px' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					<?php endforeach; ?>
				</div>
				<?php foreach ( $steps as $i => $step ) : ?>
					<?php
					// Icons spread along the lower-right edge of the circle (-5° to 70°).
					$angle = deg2rad( -5 + ( $count > 1 ? $i * 75 / ( $count - 1 ) : 0 ) );
					$x     = 50 + 50 * cos( $angle );
					$y     = 50 + 50 * sin( $angle );
					?>
					<button
						type="button"
						data-journey-dot="<?php echo esc_attr( $i ); ?>"
						class="absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 z-10 border-[3px] shadow-lg -translate-x-1/2 -translate-y-1/2 <?php echo 0 === $i ? 'bg-[#18448F] text-white border-white scale-110' : 'bg-white text-[#18448F] border-[#18448F] hover:bg-blue-50'; ?>"
						style="left: <?php echo esc_attr( round( $x, 2 ) ); ?>%; top: <?php echo esc_attr( round( $y, 2 ) ); ?>%;"
						aria-label="<?php echo esc_attr( $step['title'] ?? '' ); ?>"
					><?php echo bricareau_icon( $step['icon'] ?? '', 'w-5 h-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></button>
				<?php endforeach; ?>
			</div>
		</div>

		<div class="container mx-auto px-6 relative z-10 pointer-events-none">
			<div class="w-full lg:w-1/2 lg:ml-auto space-y-12 lg:space-y-20 lg:pl-8 lg:pr-12 xl:pr-24 max-w-3xl mt-12 lg:mt-0 pointer-events-auto">
				<?php echo bricareau_section_header( $attributes, array( 'centered' => false, 'class' => 'text-center lg:text-left', 'title_class' => 'heading-pro-max font-bold text-[#18448F] mb-4', 'intro_class' => 'text-[16px] md:text-[18px] lg:text-[20px] leading-snug font-light text-slate-600 max-w-3xl' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<div class="space-y-8">
					<div class="grid">
						<?php foreach ( $steps as $i => $step ) : ?>
							<div data-journey-step="<?php echo esc_attr( $i ); ?>" class="col-start-1 row-start-1 space-y-8 transition-opacity duration-500 <?php echo 0 === $i ? 'opacity-100' : 'opacity-0 invisible'; ?>">
								<div class="flex items-center gap-4">
									<span class="w-14 h-14 rounded-full bg-[#18448F] flex items-center justify-center text-white shadow-lg shrink-0"><?php echo bricareau_icon( $step['icon'] ?? '', 'w-6 h-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
									<h3 class="text-3xl lg:text-4xl font-bold text-[#18448F] leading-tight"><?php echo esc_html( $step['title'] ?? '' ); ?></h3>
								</div>
								<p class="text-slate-600 text-lg leading-relaxed text-justify"><?php echo esc_html( $step['text'] ?? '' ); ?></p>
							</div>
						<?php endforeach; ?>
					</div>
					<div class="flex gap-3 pt-8 border-t border-slate-100">
						<?php foreach ( $steps as $i => $step ) : ?>
							<button type="button" data-journey-bullet="<?php echo esc_attr( $i ); ?>" class="w-3 h-3 rounded-full transition-all duration-300 <?php echo 0 === $i ? 'bg-[#18448F] scale-125 ring-4 ring-blue-100' : 'bg-slate-300 hover:bg-slate-400'; ?>" aria-label="<?php echo esc_attr( sprintf( /* translators: %d: step number */ __( 'Étape %d', 'bricareau' ), $i + 1 ) ); ?>"></button>
						<?php endforeach; ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
