<?php
/**
 * Products: "feature" (detailed cards with features), "simple" (image + name
 * + text), "catalog" (horizontal carousel). Optional help banner / CTA below.
 *
 * @var array $attributes
 */

$variant  = $attributes['variant'] ?? 'simple';
$products = array_values( array_filter( $attributes['products'] ?? array(), 'is_array' ) );
$light    = 'light' === ( $attributes['background'] ?? 'white' );
$wrapper  = bricareau_block_wrapper(
	$attributes,
	array(
		'class'                    => 'relative overflow-hidden ' . ( 'simple' === $variant ? 'py-24 ' : 'py-24 lg:py-32 ' ) . ( $light ? 'bg-slate-50' : 'bg-white' ),
		'data-bricareau-scroller' => 'catalog' === $variant ? '' : null,
	)
);
$name_html = fn( $p ) => bricareau_nl2br( $p['name'] ?? '' );
$product_img = fn( $p, $class ) => bricareau_image( $p['image'] ?? array(), $class, array( 'alt' => str_replace( "\n", ' ', $p['name'] ?? '' ), 'sizes' => '(min-width: 1024px) 33vw, 100vw' ) );
$arrow = bricareau_icon( 'arrow-right', 'h-6 w-6 transform group-hover:translate-x-1 transition-transform' );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-6 relative z-10">
		<?php echo bricareau_section_header( $attributes, array( 'class' => 'mb-16 lg:mb-20', 'max_width' => 'max-w-5xl' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>

		<?php if ( 'promo' === $variant ) : ?>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
				<?php foreach ( $products as $product ) : ?>
					<div class="flex flex-col rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-xl transition-shadow group">
						<div class="relative h-48 overflow-hidden"><?php echo $product_img( $product, 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
						<div class="p-6 pb-3 space-y-2">
							<h3 class="text-xl font-semibold tracking-tight leading-snug text-slate-900 group-hover:text-[#18448F] transition-colors"><?php echo $name_html( $product ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h3>
							<p class="text-sm text-slate-500"><?php echo esc_html( $product['text'] ?? '' ); ?></p>
						</div>
						<div class="p-6 pt-3 space-y-4 flex flex-col flex-1">
							<?php if ( ! empty( $product['badge'] ) ) : ?>
								<div class="flex items-center gap-2 text-sm text-slate-500"><?php echo bricareau_icon( 'clock', 'h-4 w-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><span><?php echo esc_html( $product['badge'] ); ?></span></div>
							<?php endif; ?>
							<ul class="space-y-2 flex-1">
								<?php foreach ( bricareau_lines( $product['features'] ?? '' ) as $feature ) : ?>
									<li class="flex items-start gap-2 text-sm text-slate-700"><?php echo bricareau_icon( 'circle-check', 'h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><span><?php echo esc_html( $feature ); ?></span></li>
								<?php endforeach; ?>
							</ul>
							<a href="<?php echo bricareau_url( $product['url'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="w-full inline-flex items-center justify-center gap-2 h-10 rounded-lg bg-[#18448F] hover:bg-[#18448F]/90 text-white text-sm font-medium"><?php echo esc_html( $attributes['linkText'] ?? '' ); ?><?php echo bricareau_icon( 'arrow-right', 'h-4 w-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></a>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		<?php elseif ( 'catalog' === $variant ) : ?>
			<div class="w-full max-w-7xl relative group/scroller px-4 lg:px-12 mb-16 mx-auto">
				<button type="button" data-scroll-prev class="absolute left-0 lg:-left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 hover:bg-[#18448F] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110" aria-label="<?php esc_attr_e( 'Précédent', 'bricareau' ); ?>"><?php echo bricareau_icon( 'chevron-left', 'w-5 h-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></button>
				<button type="button" data-scroll-next class="absolute right-0 lg:-right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 hover:bg-[#18448F] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110" aria-label="<?php esc_attr_e( 'Suivant', 'bricareau' ); ?>"><?php echo bricareau_icon( 'chevron-right', 'w-5 h-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></button>
				<div data-scroll-track class="flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
					<?php foreach ( $products as $p ) : ?>
						<a href="<?php echo bricareau_url( ( $p['url'] ?? '' ) ?: '/contact' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="w-[300px] md:w-[350px] lg:w-[calc((100%-3rem)/3)] shrink-0 group bg-white rounded-[3rem] p-8 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_45px_100px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2 flex flex-col snap-start">
							<div class="w-full aspect-square bg-slate-50/50 rounded-[2.5rem] mb-8 overflow-hidden relative p-8 flex items-center justify-center">
								<?php echo $product_img( $p, 'max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform [transition-duration:2s]' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								<?php if ( ! empty( $p['badge'] ) ) : ?>
									<span class="absolute top-4 right-4 px-4 py-1.5 rounded-full shadow-lg text-[9px] font-black uppercase tracking-[0.2em] text-white italic <?php echo esc_attr( bricareau_color_class( $p['color'] ?? 'blue' ) ); ?>"><?php echo esc_html( $p['badge'] ); ?></span>
								<?php endif; ?>
							</div>
							<div class="flex-grow space-y-4">
								<h3 class="text-2xl font-bold text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors"><?php echo $name_html( $p ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h3>
								<p class="text-slate-500 font-light text-sm leading-relaxed text-justify mb-6"><?php echo esc_html( $p['text'] ?? '' ); ?></p>
								<?php $features = bricareau_lines( $p['features'] ?? '' ); ?>
								<?php if ( $features ) : ?>
									<div class="space-y-3 pt-4 border-t border-slate-50">
										<?php foreach ( $features as $f ) : ?>
											<div class="flex items-center gap-3"><?php echo bricareau_icon( 'circle-check', 'w-4 h-4 text-emerald-500 shrink-0' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><span class="text-xs font-medium text-slate-600"><?php echo esc_html( $f ); ?></span></div>
										<?php endforeach; ?>
									</div>
								<?php endif; ?>
							</div>
							<div class="mt-10 pt-8 border-t border-slate-50 flex items-center <?php echo empty( $attributes['linkText'] ) ? 'justify-end' : 'justify-between'; ?>">
								<?php if ( ! empty( $attributes['linkText'] ) ) : ?>
									<span class="inline-flex items-center gap-2 text-[10px] font-black text-slate-800 uppercase tracking-widest group-hover:text-blue-600 transition-colors"><?php echo esc_html( $attributes['linkText'] ); ?> <?php echo bricareau_icon( 'arrow-right', 'w-3.5 h-3.5 text-blue-600' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
								<?php else : ?>
									<span class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500"><?php echo bricareau_icon( 'arrow-right', 'w-5 h-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
								<?php endif; ?>
							</div>
						</a>
					<?php endforeach; ?>
				</div>
			</div>

		<?php elseif ( 'feature' === $variant ) : ?>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<?php foreach ( $products as $p ) : ?>
					<a href="<?php echo bricareau_url( ( $p['url'] ?? '' ) ?: '/contact' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="group relative bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.15)] transition-all duration-700 hover:-translate-y-4 flex flex-col h-full">
						<div class="relative h-80 overflow-hidden bg-slate-50/30 flex items-center justify-center p-12">
							<?php if ( ! empty( $p['recommended'] ) ) : ?>
								<span class="absolute top-8 right-8 z-20 inline-block px-4 py-1.5 bg-[#18448F] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-blue-500/30 animate-pulse"><?php echo esc_html( $attributes['recommendedLabel'] ?? '' ); ?></span>
							<?php endif; ?>
							<?php echo $product_img( $p, 'max-h-full object-contain group-hover:scale-110 transition-transform duration-1000 mix-blend-multiply relative z-10' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
							<div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.05)_0%,_transparent_70%)] group-hover:scale-150 transition-transform duration-1000"></div>
						</div>
						<div class="p-10 space-y-6 flex flex-col flex-grow relative">
							<h3 class="text-2xl font-bold text-[#18448F] text-center group-hover:text-blue-600 transition-colors"><?php echo $name_html( $p ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h3>
							<p class="text-slate-500 text-sm leading-relaxed text-center italic font-light px-4"><?php echo esc_html( $p['text'] ?? '' ); ?></p>
							<div class="space-y-4 pt-4 border-t border-slate-50">
								<?php foreach ( bricareau_lines( $p['features'] ?? '' ) as $f ) : ?>
									<div class="flex items-center gap-4">
										<span class="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-500 text-blue-600 group-hover:text-white"><?php echo bricareau_icon( 'circle-check', 'w-3.5 h-3.5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
										<span class="text-sm text-slate-600 font-medium group-hover:text-[#18448F] transition-colors"><?php echo esc_html( $f ); ?></span>
									</div>
								<?php endforeach; ?>
							</div>
							<div class="pt-8 mt-auto flex items-center justify-between">
								<div class="flex flex-col">
									<span class="text-[10px] font-black uppercase tracking-widest text-[#18448F]/40 group-hover:text-blue-600 transition-colors"><?php echo esc_html( $attributes['footerLabel'] ?? '' ); ?></span>
									<span class="text-[10px] font-bold text-slate-400 group-hover:text-slate-600 transition-colors"><?php echo esc_html( $attributes['footerText'] ?? '' ); ?></span>
								</div>
								<span class="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-500"><?php echo bricareau_icon( 'arrow-right', 'h-6 w-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
							</div>
						</div>
					</a>
				<?php endforeach; ?>
			</div>

		<?php else : ?>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
				<?php foreach ( $products as $p ) : ?>
					<a href="<?php echo bricareau_url( ( $p['url'] ?? '' ) ?: '/contact' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
						<div class="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
							<?php echo $product_img( $p, 'max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						</div>
						<div class="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-[#18448F] transition-colors">
							<h3 class="text-[20px] font-bold text-slate-900 leading-[24px] tracking-tight text-center group-hover:text-[#18448F] transition-colors duration-500"><?php echo $name_html( $p ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h3>
							<p class="text-[16px] md:text-[18px] lg:text-[20px] leading-snug font-light text-slate-500 flex-grow text-left lg:text-justify"><?php echo bricareau_nl2br( $p['text'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></p>
							<span class="inline-flex items-center gap-2 text-[#18448F] font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"><?php echo esc_html( $attributes['linkText'] ?? '' ); ?><?php echo $arrow; // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
						</div>
					</a>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>

		<?php if ( ! empty( $attributes['bannerTitle'] ) ) : ?>
			<div class="mt-20 p-8 rounded-[2.5rem] bg-[#18448F] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
				<div class="flex items-center gap-6">
					<span class="w-16 h-16 shrink-0 rounded-2xl bg-indigo-950 flex items-center justify-center text-white shadow-xl shadow-indigo-950/20"><?php echo bricareau_icon( 'circle-check', 'w-8 h-8' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
					<div class="text-left">
						<p class="text-white font-bold text-xl"><?php echo esc_html( $attributes['bannerTitle'] ); ?></p>
						<p class="text-blue-100/80 font-light text-sm"><?php echo esc_html( $attributes['bannerText'] ?? '' ); ?></p>
					</div>
				</div>
				<?php echo bricareau_button( $attributes['bannerButton'] ?? '', $attributes['bannerUrl'] ?? '', array( 'variant' => 'white', 'container_class' => 'w-full sm:w-auto', 'class' => 'h-16 px-12 text-xs tracking-widest' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			</div>
		<?php endif; ?>

		<?php if ( ! empty( $attributes['ctaTitle'] ) ) : ?>
			<div class="max-w-3xl mx-auto flex flex-col justify-center items-center text-center space-y-6 mt-16">
				<p class="text-xl md:text-2xl font-medium text-slate-800 leading-snug"><?php echo esc_html( $attributes['ctaTitle'] ); ?></p>
				<?php if ( ! empty( $attributes['ctaText'] ) ) : ?>
					<p class="text-slate-500 text-sm md:text-base font-light leading-relaxed"><?php echo esc_html( $attributes['ctaText'] ); ?></p>
				<?php endif; ?>
				<?php echo bricareau_button( $attributes['ctaButton'] ?? '', $attributes['ctaUrl'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			</div>
		<?php endif; ?>
	</div>
</section>
