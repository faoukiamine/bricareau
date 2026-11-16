<?php
/**
 * Vertical timeline; items alternate left/right of a center line on desktop.
 *
 * @var array $attributes
 */

$items   = array_values( array_filter( $attributes['items'] ?? array(), 'is_array' ) );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'py-32 bg-[#F8FAFC] relative' ) );
$dot     = 'hidden md:block absolute top-0 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)] ring-4 ring-blue-100';
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<?php echo bricareau_section_header( $attributes, array( 'class' => 'mb-24 space-y-6', 'title_class' => 'text-3xl lg:text-5xl font-bold text-[#18448F] leading-tight' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>

			<div class="relative space-y-24 mb-16">
				<?php foreach ( $items as $i => $item ) : ?>
					<?php $left = 0 === $i % 2; ?>
					<div class="relative <?php echo $left ? 'md:w-1/2 md:pr-16 md:ml-0 md:text-right' : 'md:w-1/2 md:pl-16 md:ml-auto'; ?>">
						<div class="<?php echo esc_attr( $dot . ( $left ? ' -right-[9px]' : ' -left-[9px]' ) ); ?>"></div>
						<div class="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2"><?php echo esc_html( $item['label'] ?? '' ); ?></div>
						<h3 class="text-3xl font-semibold text-slate-900 mb-4"><?php echo esc_html( $item['title'] ?? '' ); ?></h3>
						<p class="text-slate-500 text-lg font-light leading-relaxed"><?php echo esc_html( $item['text'] ?? '' ); ?></p>
					</div>
				<?php endforeach; ?>
				<div class="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-[1px] w-0.5 bg-gradient-to-b from-blue-600 via-[#8CC63F] to-transparent"></div>
			</div>
		</div>
	</div>
</section>
