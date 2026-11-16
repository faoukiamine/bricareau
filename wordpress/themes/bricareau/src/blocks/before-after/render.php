<?php
/**
 * Before / after image comparisons.
 *
 * @var array $attributes
 */

$items   = array_values( array_filter( $attributes['items'] ?? array(), 'is_array' ) );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'relative py-32 bg-slate-50 overflow-hidden' ) );
$pill    = 'absolute top-4 left-4 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest';
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-6 relative z-10">
		<?php echo bricareau_section_header( $attributes, array( 'class' => 'mb-24 max-w-3xl' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<?php foreach ( $items as $item ) : ?>
				<div class="group bg-white rounded-[3rem] p-8 lg:p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-700">
					<div class="flex items-center gap-6 mb-12">
						<span class="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-xl font-black <?php echo esc_attr( bricareau_color_class( $item['color'] ?? 'orange', 'soft' ) ); ?>"><?php echo esc_html( $item['code'] ?? '' ); ?></span>
						<div>
							<h3 class="text-2xl font-bold text-[#18448F]"><?php echo esc_html( $item['title'] ?? '' ); ?></h3>
							<p class="text-sm text-slate-500"><?php echo esc_html( $item['subtitle'] ?? '' ); ?></p>
						</div>
					</div>
					<div class="grid grid-cols-2 gap-4 relative">
						<div class="space-y-4">
							<div class="relative aspect-square rounded-[2rem] overflow-hidden">
								<?php echo bricareau_image( $item['before'] ?? array(), 'w-full h-full object-cover', array( 'sizes' => '(min-width: 1024px) 25vw, 50vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								<div class="absolute inset-0 bg-slate-900/20"></div>
								<span class="<?php echo esc_attr( $pill ); ?> bg-red-600"><?php esc_html_e( 'Avant', 'bricareau' ); ?></span>
							</div>
							<p class="text-xs font-medium text-slate-400 text-center"><?php echo esc_html( $item['beforeCaption'] ?? '' ); ?></p>
						</div>
						<div class="space-y-4">
							<div class="relative aspect-square rounded-[2rem] overflow-hidden border-4 border-blue-600/20">
								<?php echo bricareau_image( $item['after'] ?? array(), 'w-full h-full object-cover', array( 'sizes' => '(min-width: 1024px) 25vw, 50vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								<span class="<?php echo esc_attr( $pill ); ?> bg-blue-600"><?php esc_html_e( 'Après', 'bricareau' ); ?></span>
							</div>
							<p class="text-xs font-bold text-blue-600 text-center"><?php echo esc_html( $item['afterCaption'] ?? '' ); ?></p>
						</div>
						<span class="absolute top-[calc(50%-1.5rem)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center z-10 text-blue-600"><?php echo bricareau_icon( 'chevron-right', 'w-6 h-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
					</div>
				</div>
			<?php endforeach; ?>
		</div>

		<?php if ( ! empty( $attributes['ctaText'] ) ) : ?>
			<div class="mt-20 text-center"><?php echo bricareau_button( $attributes['ctaText'], $attributes['ctaUrl'] ?? '', array( 'class' => 'h-16 px-12 text-xs tracking-widest' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
		<?php endif; ?>
	</div>
</section>
