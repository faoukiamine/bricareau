<?php
/**
 * Illustrated cards describing problems / symptoms.
 *
 * Variants: impact (text on hover + blue overlay CTA), problem (coloured icon),
 * diagnostic (cause → solution), media (image on top), panels (expanding panels).
 *
 * @var array $attributes
 */

$variant = $attributes['variant'] ?? 'impact';
$cards   = array_values( array_filter( $attributes['cards'] ?? array(), 'is_array' ) );
$default = $attributes['defaultUrl'] ?? '/consultation';
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'relative overflow-hidden ' . ( 'impact' === $variant ? 'py-24 lg:py-32 bg-slate-50/50' : ( 'media' === $variant ? 'py-32 bg-white' : 'py-24 bg-white' ) ) ) );
$columns = array(
	'2' => 'grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto',
	'3' => 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
	'4' => 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
);
$grid = $columns[ $attributes['columns'] ?? '3' ] ?? $columns['3'];
$url  = fn( $card ) => bricareau_url( ( $card['url'] ?? '' ) ?: $default );
$img  = fn( $card, $class ) => bricareau_image( $card['image'] ?? array(), $class, array( 'alt' => $card['title'] ?? '', 'sizes' => '(min-width: 1024px) 33vw, 100vw' ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<?php if ( 'impact' === $variant ) : ?>
		<div class="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(37,99,235,0.05)_0%,_transparent_50%)] pointer-events-none"></div>
	<?php endif; ?>
	<div class="container mx-auto px-6 relative z-10">
		<?php echo bricareau_section_header( $attributes, array( 'class' => 'impact' === $variant || 'media' === $variant ? 'mb-24' : 'mb-16 lg:mb-20' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>

		<?php if ( 'panels' === $variant ) : ?>
			<div class="bricareau-panels flex flex-col lg:flex-row h-auto lg:h-[500px] gap-4 w-full">
				<?php foreach ( $cards as $card ) : ?>
					<a href="<?php echo $url( $card ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="bricareau-panel group relative flex-1 rounded-[2.5rem] overflow-hidden bg-slate-900 min-h-[250px] lg:min-h-0 border border-transparent hover:border-white/20 shadow-lg">
						<div class="absolute inset-0 z-0">
							<?php echo $img( $card, 'w-full h-full object-cover transition-transform duration-1000 mix-blend-overlay opacity-60 group-hover:scale-110' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
							<div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
						</div>
						<div class="relative z-10 p-8 h-full flex flex-col justify-end">
							<div class="bricareau-panel-reveal flex items-center gap-3 mb-3">
								<span class="w-3 h-3 rounded-full <?php echo esc_attr( bricareau_color_class( $card['color'] ?? 'navy' ) ); ?> shadow-[0_0_15px_rgba(255,255,255,0.5)]"></span>
								<span class="text-[10px] font-black uppercase tracking-[0.2em] text-white"><?php echo esc_html( $card['label'] ?? '' ); ?></span>
							</div>
							<h3 class="text-xl md:text-2xl font-bold text-white mb-2"><?php echo esc_html( $card['title'] ?? '' ); ?></h3>
							<div class="bricareau-panel-reveal">
								<p class="text-sm text-slate-300 leading-relaxed mt-2 opacity-90"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
								<?php if ( ! empty( $attributes['linkText'] ) ) : ?>
									<span class="mt-4 flex items-center gap-2 text-[#8CC63F] font-bold text-[10px] uppercase tracking-widest"><?php echo esc_html( $attributes['linkText'] ); ?> <?php echo bricareau_icon( 'arrow-right', 'w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
								<?php endif; ?>
							</div>
						</div>
					</a>
				<?php endforeach; ?>
			</div>

		<?php else : ?>
			<div class="grid <?php echo esc_attr( $grid ); ?>">
				<?php foreach ( $cards as $card ) : ?>
					<?php if ( 'impact' === $variant ) : ?>
						<a href="<?php echo $url( $card ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="group relative h-[420px] rounded-[3rem] overflow-hidden border border-white bg-white/40 backdrop-blur-xl shadow-sm transition-all duration-700 hover:shadow-2xl hover:shadow-blue-200/50 hover:border-blue-200 hover:-translate-y-2">
							<div class="absolute inset-0 z-0">
								<?php echo $img( $card, 'w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								<div class="absolute inset-0 bg-gradient-to-br from-white via-white/40 to-transparent"></div>
							</div>
							<div class="relative z-10 p-10 h-full flex flex-col justify-between">
								<div class="space-y-4">
									<div class="flex items-center gap-3">
										<span class="w-3 h-3 rounded-full shadow-lg <?php echo esc_attr( bricareau_color_class( $card['color'] ?? 'navy' ) ); ?>"></span>
										<span class="text-[10px] font-black uppercase tracking-wider text-slate-500 group-hover:text-blue-600 transition-colors"><?php echo esc_html( $card['label'] ?? '' ); ?></span>
									</div>
									<h3 class="text-3xl font-medium text-[#18448F] leading-[1.1] transition-all duration-500 group-hover:translate-x-2"><?php echo esc_html( $card['title'] ?? '' ); ?></h3>
									<p class="text-slate-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-4 group-hover:translate-y-0 text-justify"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
								</div>
								<div class="space-y-4">
									<div class="h-px w-12 bg-blue-200 group-hover:w-full transition-all duration-700"></div>
									<div class="text-xs font-light text-slate-600 group-hover:text-blue-800 transition-all italic"><?php echo esc_html( $attributes['metaLabel'] ?? '' ); ?> <span class="font-bold"><?php echo esc_html( $card['meta'] ?? '' ); ?></span></div>
								</div>
							</div>
							<div class="absolute inset-0 bg-blue-600/95 z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-8 space-y-6 translate-y-full group-hover:translate-y-0 text-center">
								<div>
									<p class="text-white/80 text-xs font-black uppercase tracking-widest mb-2 italic"><?php echo esc_html( $attributes['overlayLabel'] ?? '' ); ?></p>
									<p class="text-white text-2xl font-bold leading-tight px-6"><?php echo esc_html( $attributes['overlayTitle'] ?? '' ); ?></p>
								</div>
								<span class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/20 group-hover:rotate-45 transition-transform duration-700"><?php echo bricareau_icon( 'arrow-right', 'w-6 h-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
							</div>
						</a>

					<?php elseif ( 'problem' === $variant ) : ?>
						<a href="<?php echo $url( $card ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="group relative h-[500px] rounded-[3rem] overflow-hidden border border-slate-100 bg-slate-50/50 shadow-sm transition-all duration-700 hover:shadow-2xl hover:shadow-blue-200/50 hover:border-blue-100 hover:-translate-y-3">
							<div class="absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform [transition-duration:2000ms]">
								<?php echo $img( $card, 'w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-opacity' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								<div class="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
							</div>
							<div class="relative z-10 p-10 flex flex-col h-full">
								<div class="space-y-6">
									<div class="flex items-center justify-between">
										<span class="w-14 h-14 rounded-2xl text-white flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12 <?php echo esc_attr( bricareau_color_class( $card['color'] ?? 'navy' ) ); ?>"><?php echo bricareau_icon( $card['icon'] ?? '', 'w-6 h-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
										<span class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-colors"><?php echo esc_html( $card['label'] ?? '' ); ?></span>
									</div>
									<h3 class="text-3xl font-bold text-slate-800 leading-[1.1] transition-all duration-500 group-hover:text-blue-700"><?php echo esc_html( $card['title'] ?? '' ); ?></h3>
									<p class="text-sm leading-relaxed text-slate-600 opacity-80 group-hover:opacity-100 transition-all"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
								</div>
							</div>
							<div class="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
						</a>

					<?php elseif ( 'diagnostic' === $variant ) : ?>
						<a href="<?php echo $url( $card ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="group relative h-[420px] rounded-[3.5rem] overflow-hidden border border-white/40 bg-white/5 backdrop-blur-md transition-all duration-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(30,58,138,0.15)] hover:-translate-y-3">
							<div class="absolute inset-0 z-0">
								<?php echo $img( $card, 'w-full h-full object-cover transition-transform [transition-duration:2s] group-hover:scale-110 opacity-40 group-hover:opacity-60 grayscale-[0.5] group-hover:grayscale-0' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								<div class="absolute inset-0 bg-gradient-to-b from-white/95 via-white/40 to-blue-50/40"></div>
							</div>
							<div class="relative z-10 p-10 h-full flex flex-col">
								<?php if ( ! empty( $attributes['alertBadge'] ) ) : ?>
									<div class="flex justify-end items-start mb-8">
										<span class="bg-blue-600/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-200/50 text-[9px] font-black uppercase tracking-widest text-blue-700"><?php echo esc_html( $attributes['alertBadge'] ); ?></span>
									</div>
								<?php endif; ?>
								<div class="flex-grow space-y-4">
									<div class="flex items-center gap-2">
										<span class="w-2 h-2 rounded-full animate-pulse <?php echo esc_attr( bricareau_color_class( $card['color'] ?? 'navy' ) ); ?>"></span>
										<span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 italic"><?php echo esc_html( trim( ( $attributes['metaLabel'] ?? '' ) . ' ' . ( $card['meta'] ?? '' ) ) ); ?></span>
									</div>
									<h3 class="text-3xl font-medium text-[#18448F] leading-[1.1] tracking-tight"><?php echo esc_html( $card['title'] ?? '' ); ?></h3>
									<p class="text-sm font-light text-slate-600 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
								</div>
								<div class="mt-auto pt-6 border-t border-blue-100/50 flex items-center justify-between">
									<div class="space-y-1">
										<span class="text-[10px] uppercase font-bold text-slate-400"><?php echo esc_html( $attributes['solutionLabel'] ?? '' ); ?></span>
										<p class="text-sm font-black text-[#18448F]"><?php echo esc_html( $card['solution'] ?? '' ); ?></p>
									</div>
									<span class="w-10 h-10 rounded-full bg-[#18448F] text-white flex items-center justify-center shadow-lg shadow-[#18448F]/20 transition-all duration-500 group-hover:translate-x-2"><?php echo bricareau_icon( 'arrow-right', 'w-5 h-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
								</div>
							</div>
							<div class="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform [transition-duration:1.5s] ease-in-out pointer-events-none"></div>
						</a>

					<?php else : ?>
						<div class="group relative bg-[#F8FAFC] rounded-[2.5rem] p-4 border border-slate-100/50 hover:bg-white transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(30,58,138,0.1)] overflow-hidden">
							<div class="relative h-64 overflow-hidden rounded-[2rem] mb-8">
								<?php echo $img( $card, 'w-full h-full object-cover transition-transform [transition-duration:3000ms] group-hover:scale-110' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								<div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<?php if ( ! empty( $card['label'] ) ) : ?>
									<span class="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-sm text-[10px] font-black text-slate-900 uppercase tracking-widest"><?php echo esc_html( $card['label'] ); ?></span>
								<?php endif; ?>
							</div>
							<div class="px-4 pb-4 space-y-4">
								<div class="space-y-1">
									<span class="text-[10px] font-black text-[#8CC63F] uppercase tracking-widest"><?php echo esc_html( $card['meta'] ?? '' ); ?></span>
									<h3 class="text-xl font-bold text-[#18448F] leading-tight group-hover:text-blue-600 transition-colors"><?php echo esc_html( $card['title'] ?? '' ); ?></h3>
								</div>
								<p class="text-slate-500 text-sm leading-relaxed font-light text-justify"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
								<?php if ( ! empty( $attributes['linkText'] ) ) : ?>
									<a href="<?php echo $url( $card ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="pt-4 inline-flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all"><?php echo esc_html( $attributes['linkText'] ); ?> <?php echo bricareau_icon( 'arrow-right', 'w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></a>
								<?php endif; ?>
							</div>
						</div>
					<?php endif; ?>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>
	</div>
</section>
