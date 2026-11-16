<?php
/**
 * Replacement parts by category, with a selector (Pieces.tsx).
 *
 * @var array $attributes
 */

$categories = array_values( array_filter( $attributes['categories'] ?? array(), 'is_array' ) );
$wrapper    = bricareau_block_wrapper( $attributes, array( 'class' => 'py-24 bg-white relative overflow-hidden scroll-mt-24' ) );
$tab        = 'flex items-center gap-3 w-full text-left rounded-2xl px-5 py-4 text-sm font-bold transition-all text-slate-500 hover:bg-slate-50 aria-selected:bg-[#18448F] aria-selected:text-white aria-selected:shadow-lg';
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?> data-bricareau-parts>
	<div class="container mx-auto px-6">
		<div class="flex flex-col lg:flex-row gap-12">
			<aside class="lg:w-1/4 space-y-8">
				<div>
					<p class="text-[10px] font-black uppercase tracking-[0.2em] text-[#18448F] mb-1"><?php esc_html_e( 'Sélecteur', 'bricareau' ); ?></p>
					<p class="text-2xl font-bold text-slate-900 mb-4"><?php esc_html_e( 'Catégories', 'bricareau' ); ?></p>
					<div class="space-y-1" role="tablist">
						<button type="button" role="tab" aria-selected="true" data-parts-tab="all" class="<?php echo esc_attr( $tab ); ?>"><?php echo bricareau_icon( 'package', 'w-4 h-4 shrink-0' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><?php esc_html_e( 'Inventaire Complet', 'bricareau' ); ?></button>
						<?php foreach ( $categories as $i => $category ) : ?>
							<button type="button" role="tab" aria-selected="false" data-parts-tab="<?php echo (int) $i; ?>" class="<?php echo esc_attr( $tab ); ?>"><?php echo esc_html( $category['name'] ?? '' ); ?></button>
						<?php endforeach; ?>
					</div>
				</div>
				<?php if ( ! empty( $attributes['helpText'] ) ) : ?>
					<div class="bg-[#18448F] p-8 rounded-[2.5rem] shadow-2xl">
						<?php echo bricareau_icon( 'message-square', 'w-10 h-10 text-blue-300 mb-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						<p class="text-base text-white font-bold leading-tight mb-4"><?php echo esc_html( $attributes['helpText'] ); ?></p>
						<a href="<?php echo bricareau_url( $attributes['helpUrl'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="text-blue-300 font-black uppercase text-xs tracking-widest hover:text-white inline-flex items-center"><?php echo esc_html( $attributes['helpButton'] ?? '' ); ?><?php echo bricareau_icon( 'arrow-right', 'ml-2 w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></a>
					</div>
				<?php endif; ?>
			</aside>
			<div class="lg:w-3/4">
				<?php echo bricareau_section_header( $attributes, array( 'centered' => false, 'class' => 'mb-10' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
					<?php foreach ( $categories as $i => $category ) : ?>
						<?php foreach ( array_filter( $category['items'] ?? array(), 'is_array' ) as $part ) : ?>
							<div data-parts-item="<?php echo (int) $i; ?>" class="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all p-6 flex flex-col group [&[hidden]]:hidden">
								<span class="self-start mb-4 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-600"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span><?php esc_html_e( 'En Stock', 'bricareau' ); ?></span>
								<div class="h-40 flex items-center justify-center mb-6">
									<?php if ( ! empty( $part['image'] ) ) : ?>
										<?php echo bricareau_image( $part['image'], 'max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105', array( 'sizes' => '240px', 'alt' => ( $part['name'] ?? '' ) . ' - Bricareau' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
									<?php else : ?>
										<?php echo bricareau_icon( 'package', 'w-16 h-16 text-slate-200' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
									<?php endif; ?>
								</div>
								<h3 class="text-base font-bold text-slate-900 tracking-normal leading-snug flex-1"><?php echo esc_html( $part['name'] ?? '' ); ?></h3>
							</div>
						<?php endforeach; ?>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
</section>
