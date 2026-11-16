<?php
/**
 * Bento grid of linked tiles.
 *
 * "dark": 3 columns, image under a dark gradient, text revealed on hover.
 * "light": 2 large tiles, image fading to white under the text.
 *
 * @var array $attributes
 */

$tiles    = array_values( array_filter( $attributes['tiles'] ?? array(), 'is_array' ) );
$light    = 'light' === ( $attributes['variant'] ?? 'dark' );
$centered = 'left' !== ( $attributes['align'] ?? 'center' );
$plain    = 'plain' === ( $attributes['textStyle'] ?? 'caps' );
$wrapper  = bricareau_block_wrapper( $attributes, array( 'class' => 'relative py-24 bg-slate-50 border-t border-slate-100' ) );

$sizes = array(
	'normal'      => '',
	'tall'        => 'md:col-span-2 lg:col-span-1 lg:row-span-2',
	'wide'        => 'md:col-span-2',
	'wide-tablet' => 'md:col-span-2 lg:col-span-1',
);
$fits  = array(
	'cover'     => 'object-cover',
	'cover-dim' => 'object-cover opacity-50',
	'contain'   => 'object-contain p-10 opacity-80',
);
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-6 max-w-7xl">
		<?php
		echo bricareau_section_header( // phpcs:ignore WordPress.Security.EscapeOutput
			$attributes,
			array(
				'centered'    => $centered,
				'class'       => 'mb-16',
				'title_class' => 'text-[32px] md:text-[48px] leading-tight md:leading-[52px] font-bold tracking-tight text-[#18448F]',
				'intro_class' => 'text-slate-500 text-lg font-light leading-relaxed' . ( $centered ? ' max-w-3xl' : ' text-justify' ),
			)
		);
		?>

		<?php if ( $light ) : ?>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[400px] md:auto-rows-[480px] lg:auto-rows-[600px]">
				<?php foreach ( $tiles as $i => $tile ) : ?>
					<a href="<?php echo bricareau_url( $tile['url'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col justify-end p-8 lg:p-12">
						<div class="absolute inset-0 overflow-hidden rounded-[2rem]">
							<?php echo bricareau_image( $tile['image'] ?? array(), 'w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-105', array( 'sizes' => '(min-width: 768px) 50vw, 100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
							<div class="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
						</div>
						<div class="relative z-10 space-y-4 mt-auto">
							<span class="text-[10px] font-black uppercase tracking-widest <?php echo 0 === $i % 2 ? 'text-[#8CC63F]' : 'text-blue-600'; ?>"><?php echo esc_html( $tile['label'] ?? '' ); ?></span>
							<h3 class="text-2xl lg:text-3xl font-bold text-slate-900 uppercase tracking-tight"><?php echo bricareau_nl2br( $tile['title'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h3>
							<p class="text-slate-500 text-sm font-light leading-relaxed"><?php echo esc_html( $tile['text'] ?? '' ); ?></p>
						</div>
					</a>
				<?php endforeach; ?>
			</div>
		<?php else : ?>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
				<?php foreach ( $tiles as $tile ) : ?>
					<a href="<?php echo bricareau_url( $tile['url'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="group relative rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 <?php echo esc_attr( $sizes[ $tile['size'] ?? 'normal' ] ?? '' ); ?>">
						<div class="absolute inset-0 bg-slate-900">
							<?php echo bricareau_image( $tile['image'] ?? array(), 'w-full h-full transition-transform duration-700 group-hover:scale-105 ' . ( $fits[ $tile['fit'] ?? 'cover' ] ?? 'object-cover' ), array( 'sizes' => '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
							<div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
						</div>
						<?php if ( $plain ) : ?>
							<div class="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
								<span class="block text-[#8CC63F] text-sm font-bold tracking-wider uppercase mb-3"><?php echo esc_html( $tile['label'] ?? '' ); ?></span>
								<h3 class="text-2xl font-bold text-white mb-3 leading-tight"><?php echo bricareau_nl2br( $tile['title'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h3>
								<p class="text-slate-300 text-base font-light leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[150px] transition-all duration-500 overflow-hidden"><?php echo esc_html( $tile['text'] ?? '' ); ?></p>
							</div>
						<?php else : ?>
							<div class="relative z-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
								<div class="flex justify-between items-start mb-4">
									<span class="text-[10px] font-black text-blue-400 uppercase tracking-widest"><?php echo esc_html( $tile['label'] ?? '' ); ?></span>
									<span class="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0 border border-white/20 text-white">
										<?php echo bricareau_icon( 'arrow-right', 'w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
									</span>
								</div>
								<h3 class="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-3 leading-tight"><?php echo bricareau_nl2br( $tile['title'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h3>
								<p class="text-slate-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500"><?php echo esc_html( $tile['text'] ?? '' ); ?></p>
							</div>
						<?php endif; ?>
					</a>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>
	</div>
</section>
