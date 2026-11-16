<?php
/**
 * Testimonial cards carousel (TestimonialsSection in the React app).
 *
 * @var array $attributes
 */

$offset       = max( 0, (int) ( $attributes['offset'] ?? 0 ) );
$selected     = ! empty( $attributes['manual'] ) ? bricareau_get_testimonials_by_ids( $attributes['selectedIds'] ?? array() ) : array();
// With nothing picked yet, the block keeps showing the automatic list rather than an empty section.
$testimonials = $selected ?: array_slice( bricareau_get_testimonials( $offset + max( 1, (int) ( $attributes['count'] ?? 6 ) ) ), $offset );
$wrapper      = bricareau_block_wrapper( $attributes,
	array(
		'class'                    => ! empty( $attributes['framed'] ) ? 'bg-slate-50 py-32 border-y border-gray-100' : 'bg-white',
		'data-bricareau-carousel'  => '',
	)
);
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="py-20 bg-white overflow-hidden">
	<div class="container mx-auto px-4 max-w-6xl">
		<?php echo bricareau_section_header( $attributes, array( 'class' => 'mb-16 space-y-3', 'max_width' => 'max-w-6xl' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>

		<?php if ( $testimonials ) : ?>
			<div class="relative max-w-5xl mx-auto px-0 md:px-4">
				<div class="overflow-hidden">
					<div class="flex transition-transform duration-700 ease-out" data-carousel-track>
						<?php foreach ( $testimonials as $testimonial ) : ?>
							<div class="flex-[0_0_100%] min-w-0 px-2 md:px-4">
								<figure class="bg-white p-6 md:p-14 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-start text-left h-full">
									<div class="text-blue-600 mb-8"><?php echo bricareau_icon( 'quote', 'w-12 h-12 md:w-14 md:h-14', array( 'stroke-width' => 1 ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
									<blockquote class="mb-12 font-light text-slate-600 text-[20px] leading-[28px]">« <?php echo esc_html( $testimonial['text'] ); ?> »</blockquote>
									<figcaption class="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-auto">
										<span class="text-gray-900 text-[18px] md:text-[22px] font-medium"><?php echo esc_html( $testimonial['name'] ); ?></span>
										<span class="flex gap-1.5" role="img" aria-label="<?php echo esc_attr( sprintf( /* translators: %d: rating */ __( '%d sur 5', 'bricareau' ), $testimonial['rating'] ) ); ?>">
											<?php for ( $s = 0; $s < $testimonial['rating']; $s++ ) : ?>
												<?php echo bricareau_icon( 'star', 'h-5 w-5 text-[#FBBF24]', array( 'fill' => true ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
											<?php endfor; ?>
										</span>
									</figcaption>
								</figure>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
			</div>

			<?php if ( count( $testimonials ) > 1 ) : ?>
				<div class="flex items-center justify-center gap-6 mt-12">
					<button type="button" class="p-2 text-gray-400 hover:text-[#3FA9F5] transition-colors" data-carousel-prev aria-label="<?php esc_attr_e( 'Précédent', 'bricareau' ); ?>"><?php echo bricareau_icon( 'chevron-left', 'h-6 w-6', array( 'stroke-width' => 1.5 ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?></button>
					<div class="flex items-center gap-3">
						<?php foreach ( $testimonials as $i => $testimonial ) : ?>
							<button type="button" data-carousel-dot="<?php echo esc_attr( $i ); ?>" class="transition-all duration-300 rounded-full h-2 <?php echo 0 === $i ? 'w-8 bg-blue-600' : 'w-2 bg-gray-200 hover:bg-gray-300'; ?>" aria-label="<?php echo esc_attr( sprintf( /* translators: %d: testimonial number */ __( 'Aller au témoignage %d', 'bricareau' ), $i + 1 ) ); ?>"></button>
						<?php endforeach; ?>
					</div>
					<button type="button" class="p-2 text-gray-400 hover:text-[#3FA9F5] transition-colors" data-carousel-next aria-label="<?php esc_attr_e( 'Suivant', 'bricareau' ); ?>"><?php echo bricareau_icon( 'chevron-right', 'h-6 w-6', array( 'stroke-width' => 1.5 ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?></button>
				</div>
			<?php endif; ?>
		<?php endif; ?>
	</div>
	</div>
</section>
