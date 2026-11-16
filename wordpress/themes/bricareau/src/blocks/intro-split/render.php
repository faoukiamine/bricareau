<?php
/**
 * Editorial intro: label, title, text and optional mini features on the left,
 * image (with optional floating badge) on the right.
 *
 * @var array $attributes
 */

$features = array_filter( $attributes['features'] ?? array(), 'is_array' );
$offset   = 'rounded' !== ( $attributes['imageStyle'] ?? 'offset' );
$wrapper  = bricareau_block_wrapper( $attributes, array( 'class' => 'relative py-24 md:py-32 bg-white overflow-hidden' ) );

if ( 'image-left' === ( $attributes['layout'] ?? 'text-left' ) ) :
	?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
	<div class="container mx-auto px-6 relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-x-24 lg:gap-y-8 items-start">
			<div class="lg:col-span-7 lg:col-start-6 space-y-8">
				<?php if ( ! empty( $attributes['label'] ) ) : ?>
					<?php echo bricareau_label( $attributes['label'], $attributes['labelStyle'] ?? 'line' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<?php endif; ?>
				<h2 class="heading-pro-max text-left !leading-[1.1] font-bold text-[#18448F]"><?php echo bricareau_format_title( $attributes['title'] ?? '', bricareau_accent_class( $attributes['accentStyle'] ?? 'green' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h2>
				<?php foreach ( bricareau_paragraphs( $attributes['text'] ?? '' ) as $paragraph ) : ?>
					<p class="text-[16px] md:text-[18px] lg:text-[20px] leading-snug font-light text-slate-500 max-w-2xl text-justify"><?php echo $paragraph; // phpcs:ignore WordPress.Security.EscapeOutput ?></p>
				<?php endforeach; ?>
			</div>
			<div class="lg:col-span-5 lg:row-start-1 lg:row-span-2 relative group mt-8 lg:mt-0">
				<div class="absolute -inset-4 bg-slate-100 rounded-[4rem] group-hover:bg-cyan-50 transition-colors duration-700 -rotate-2"></div>
				<div class="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl border border-white/50">
					<?php echo bricareau_image( $attributes['image'] ?? array(), 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000', array( 'sizes' => '(min-width: 1024px) 40vw, 100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					<?php if ( ! empty( $attributes['badgeTitle'] ) ) : ?>
						<div class="absolute bottom-6 left-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl group-hover:-translate-y-2 transition-all duration-500">
							<div class="flex items-center gap-3">
								<span class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200"><?php echo bricareau_icon( ( $attributes['badgeIcon'] ?? '' ) ?: 'droplets', 'w-5 h-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
								<div>
									<p class="text-[9px] font-black uppercase tracking-widest text-[#164E63]"><?php echo esc_html( $attributes['badgeLabel'] ?? '' ); ?></p>
									<p class="text-base font-bold text-[#18448F]"><?php echo esc_html( $attributes['badgeTitle'] ); ?></p>
								</div>
							</div>
						</div>
					<?php endif; ?>
				</div>
			</div>
			<div class="lg:col-span-7 lg:col-start-6 space-y-12 mt-8 lg:mt-0">
				<?php if ( $features ) : ?>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
						<?php foreach ( $features as $feature ) : ?>
							<div class="group/item flex flex-col gap-4 p-6 bg-slate-50/50 rounded-3xl border border-transparent hover:border-cyan-100 hover:bg-white hover:shadow-xl transition-all duration-500">
								<div class="flex items-center gap-4">
									<span class="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 group-hover/item:scale-110 transition-transform <?php echo 'green' === ( $feature['color'] ?? 'navy' ) ? 'text-emerald-600' : 'text-cyan-600'; ?>"><?php echo bricareau_icon( $feature['icon'] ?? '', 'w-5 h-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
									<div>
										<p class="text-[10px] font-black text-cyan-600 uppercase tracking-widest"><?php echo esc_html( $feature['label'] ?? '' ); ?></p>
										<h3 class="text-lg font-bold text-[#164E63]"><?php echo esc_html( $feature['title'] ?? '' ); ?></h3>
									</div>
								</div>
								<p class="text-slate-500 text-sm leading-relaxed font-light text-justify"><?php echo esc_html( $feature['text'] ?? '' ); ?></p>
							</div>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
				<?php if ( ! empty( $attributes['ctaText'] ) ) : ?>
					<div class="pt-8"><?php echo bricareau_button( $attributes['ctaText'], $attributes['ctaUrl'] ?? '', array( 'icon' => 'chevron-right', 'class' => 'h-16 px-12 text-xs tracking-widest' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>
	<?php
	return;
endif;
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-6 max-w-7xl">
		<div class="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
			<div class="w-full lg:w-1/2 space-y-10">
				<?php if ( ! empty( $attributes['label'] ) ) : ?>
					<?php echo bricareau_label( $attributes['label'], $attributes['labelStyle'] ?? 'line' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<?php endif; ?>
				<h2 class="text-[32px] md:text-[48px] leading-tight md:leading-[52px] font-bold text-[#18448F]">
					<?php echo bricareau_format_title( $attributes['title'] ?? '', bricareau_accent_class( $attributes['accentStyle'] ?? 'green' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				</h2>
				<?php foreach ( bricareau_paragraphs( $attributes['text'] ?? '' ) as $paragraph ) : ?>
					<p class="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-lg"><?php echo $paragraph; // phpcs:ignore WordPress.Security.EscapeOutput ?></p>
				<?php endforeach; ?>

				<?php if ( $features ) : ?>
					<div class="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
						<?php foreach ( $features as $feature ) : ?>
							<?php $green = 'green' === ( $feature['color'] ?? 'navy' ); ?>
							<div class="space-y-3">
								<div class="w-12 h-12 rounded-2xl flex items-center justify-center <?php echo $green ? 'bg-[#8CC63F]/10' : 'bg-blue-50'; ?>">
									<?php echo bricareau_icon( $feature['icon'] ?? '', 'w-6 h-6 ' . ( $green ? 'text-[#8CC63F]' : 'text-blue-600' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								</div>
								<h3 class="font-bold text-slate-900 uppercase tracking-tight text-sm"><?php echo esc_html( $feature['title'] ?? '' ); ?></h3>
								<p class="text-slate-500 text-sm leading-relaxed"><?php echo esc_html( $feature['text'] ?? '' ); ?></p>
							</div>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
			</div>

			<div class="w-full lg:w-1/2 relative">
				<?php if ( $offset ) : ?>
					<div class="aspect-[4/3] md:min-h-[400px] w-full max-w-2xl mx-auto relative group overflow-hidden rounded-2xl">
						<div class="absolute inset-0 bg-slate-100 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 rounded-2xl"></div>
						<?php echo bricareau_image( $attributes['image'] ?? array(), 'absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-1000 hover:scale-105 rounded-2xl', array( 'sizes' => '(min-width: 1024px) 50vw, 100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					</div>
				<?php else : ?>
					<div class="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
						<?php echo bricareau_image( $attributes['image'] ?? array(), 'absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105', array( 'sizes' => '(min-width: 1024px) 50vw, 100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						<div class="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
					</div>
				<?php endif; ?>

				<?php if ( ! empty( $attributes['badgeTitle'] ) ) : ?>
					<div class="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-3xl shadow-xl hidden md:block border border-slate-50">
						<div class="flex items-center gap-4">
							<?php if ( ! empty( $attributes['badgeIcon'] ) ) : ?>
								<div class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
									<?php echo bricareau_icon( $attributes['badgeIcon'], 'w-6 h-6 text-[#8CC63F]' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								</div>
							<?php endif; ?>
							<div>
								<p class="text-[10px] font-black text-slate-400 uppercase tracking-widest"><?php echo esc_html( $attributes['badgeLabel'] ?? '' ); ?></p>
								<p class="font-bold text-slate-900 text-base"><?php echo esc_html( $attributes['badgeTitle'] ); ?></p>
							</div>
						</div>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>
