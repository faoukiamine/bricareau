<?php
/**
 * Key figure + rotating testimonial, fed by the "Témoignages" post type.
 *
 * @var array $attributes
 */

$selected     = ! empty( $attributes['manual'] ) ? bricareau_get_testimonials_by_ids( $attributes['selectedIds'] ?? array() ) : array();
// With nothing picked yet, the block keeps showing the automatic list rather than an empty section.
$testimonials = $selected ?: bricareau_get_testimonials( $attributes['count'] ?? 8 );
$interval     = max( 3, (int) ( $attributes['interval'] ?? 6 ) );

$wrapper = bricareau_block_wrapper( $attributes,
	array(
		'class'                       => 'py-24 bg-white relative border-b border-slate-200',
		'data-bricareau-testimonials' => '',
		'data-interval'               => $interval * 1000,
	)
);
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-4 max-w-7xl">
		<div class="text-center mb-16">
			<?php if ( ! empty( $attributes['eyebrow'] ) ) : ?>
				<div class="mb-4"><?php echo bricareau_eyebrow( $attributes['eyebrow'], true ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
			<?php endif; ?>
			<?php if ( ! empty( $attributes['title'] ) ) : ?>
				<h2 class="heading-pro-max font-bold text-[#18448F]"><?php echo bricareau_format_title( $attributes['title'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h2>
			<?php endif; ?>
		</div>

		<div class="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
			<div class="lg:w-1/3 py-16 lg:py-24 lg:pr-16 flex flex-col justify-center">
				<p class="text-6xl font-bold text-[#18448F] mb-4"><?php echo esc_html( $attributes['statValue'] ?? '' ); ?></p>
				<p class="text-xl font-bold text-slate-800 mb-4"><?php echo esc_html( $attributes['statLabel'] ?? '' ); ?></p>
				<p class="text-slate-500"><?php echo esc_html( $attributes['statText'] ?? '' ); ?></p>
			</div>

			<div class="lg:w-2/3 py-16 lg:py-24 lg:pl-16 flex flex-col justify-center relative">
				<?php if ( ! $testimonials ) : ?>
					<p class="text-slate-500"><?php esc_html_e( 'Aucun témoignage publié pour le moment.', 'bricareau' ); ?></p>
				<?php else : ?>
					<div class="grid" aria-live="polite">
						<?php foreach ( $testimonials as $i => $testimonial ) : ?>
							<div data-testimonial="<?php echo esc_attr( $i ); ?>" class="col-start-1 row-start-1 transition-opacity duration-500 <?php echo 0 === $i ? 'opacity-100' : 'opacity-0 invisible'; ?>">
								<div class="mb-6 flex gap-1" role="img" aria-label="<?php echo esc_attr( sprintf( /* translators: %d: rating */ __( '%d sur 5', 'bricareau' ), $testimonial['rating'] ) ); ?>">
									<?php for ( $s = 0; $s < $testimonial['rating']; $s++ ) : ?>
										<?php echo bricareau_icon( 'star', 'w-5 h-5 text-[#8CC63F]', array( 'fill' => true ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
									<?php endfor; ?>
								</div>
								<blockquote class="text-3xl text-[#18448F] font-medium leading-relaxed mb-8">« <?php echo esc_html( $testimonial['text'] ); ?> »</blockquote>
							</div>
						<?php endforeach; ?>
					</div>

					<div class="flex items-center justify-between">
						<div class="grid">
							<?php foreach ( $testimonials as $i => $testimonial ) : ?>
								<p data-testimonial="<?php echo esc_attr( $i ); ?>" class="col-start-1 row-start-1 font-bold text-[#18448F] uppercase tracking-wider text-sm transition-opacity duration-500 <?php echo 0 === $i ? 'opacity-100' : 'opacity-0 invisible'; ?>"><?php echo esc_html( $testimonial['name'] ); ?></p>
							<?php endforeach; ?>
						</div>
						<?php if ( count( $testimonials ) > 1 ) : ?>
							<div class="flex gap-2">
								<button type="button" data-testimonial-prev class="w-10 h-10 rounded-none border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-[#18448F]" aria-label="<?php esc_attr_e( 'Témoignage précédent', 'bricareau' ); ?>">
									<?php echo bricareau_icon( 'chevron-right', 'w-5 h-5 rotate-180' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								</button>
								<button type="button" data-testimonial-next class="w-10 h-10 rounded-none bg-[#18448F] flex items-center justify-center hover:bg-[#18448F]/90 text-white" aria-label="<?php esc_attr_e( 'Témoignage suivant', 'bricareau' ); ?>">
									<?php echo bricareau_icon( 'chevron-right', 'w-5 h-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								</button>
							</div>
						<?php endif; ?>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>
