<?php
/**
 * Related blog articles, or large link cards with text and a button ("contact").
 *
 * @var array $attributes
 */

$items   = array_values( array_filter( $attributes['items'] ?? array(), 'is_array' ) );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'py-24 border-t border-slate-100 ' . ( 'white' === ( $attributes['background'] ?? 'light' ) ? 'bg-white' : 'bg-gray-50' ) ) );

if ( 'contact' === ( $attributes['variant'] ?? 'articles' ) ) :
	$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'py-24 bg-white relative overflow-hidden' ) );
	?>
	<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
		<?php if ( ! empty( $attributes['watermark'] ) ) : ?>
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
				<span class="text-[15rem] md:text-[25rem] font-bold text-slate-100/40 opacity-30 leading-none"><?php echo esc_html( $attributes['watermark'] ); ?></span>
			</div>
		<?php endif; ?>
		<div class="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<?php foreach ( $items as $item ) : ?>
					<a href="<?php echo bricareau_url( $item['url'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="flex flex-col h-full group bg-white border border-slate-100 rounded-[2.5rem] p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] hover:border-blue-200 hover:-translate-y-2">
						<div class="overflow-hidden mb-8 rounded-3xl aspect-[16/10] bg-slate-50 relative">
							<?php echo bricareau_image( $item['image'] ?? array(), 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000', array( 'sizes' => '(min-width: 1024px) 33vw, 100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						</div>
						<?php if ( ! empty( $item['badge'] ) ) : ?>
							<?php echo bricareau_live_badge( $item['badge'], 'mb-3 !px-3 !py-1 !tracking-wider' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						<?php endif; ?>
						<h3 class="mb-4 text-xl font-bold text-[#18448F] group-hover:text-blue-600 transition-colors"><?php echo esc_html( $item['title'] ?? '' ); ?></h3>
						<p class="text-base lg:text-lg mb-8 flex-grow text-slate-500 leading-relaxed font-light"><?php echo esc_html( $item['text'] ?? '' ); ?></p>
						<span class="relative inline-block self-start">
							<span class="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px]"></span>
							<span class="relative inline-flex items-center justify-center h-[3.25rem] px-8 bg-[#18448F] rounded-[2rem] text-white text-[11px] font-black uppercase tracking-[0.1em]"><?php echo esc_html( $item['buttonText'] ?? '' ); ?><?php echo bricareau_icon( 'chevron-right', 'w-4 h-4 ml-2' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
						</span>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
	<?php
	return;
endif;
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-6">
		<?php echo bricareau_section_header( $attributes, array( 'class' => 'mb-16' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		<div class="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-12 px-1 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
			<?php foreach ( $items as $item ) : ?>
				<a href="<?php echo bricareau_url( $item['url'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="min-w-[75vw] md:min-w-[45vw] lg:min-w-0 snap-center bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full">
					<div class="h-56 overflow-hidden">
						<?php echo bricareau_image( $item['image'] ?? array(), 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-110', array( 'sizes' => '(min-width: 1024px) 33vw, 75vw', 'alt' => $item['title'] ?? '' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					</div>
					<div class="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
						<h3 class="mb-4 group-hover:text-blue-600 transition-colors tracking-tight font-medium text-base leading-6 text-[#0F1729]"><?php echo esc_html( $item['title'] ?? '' ); ?></h3>
						<span class="mt-auto text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm"><?php echo esc_html( $attributes['linkText'] ?? '' ); ?> <?php echo bricareau_icon( 'chevron-right', 'h-4 w-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
					</div>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>
