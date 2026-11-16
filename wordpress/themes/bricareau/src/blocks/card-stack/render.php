<?php
/**
 * Rotating stack of photo cards (left) synced with a list of benefits (right).
 *
 * @var array $attributes
 */

$items   = array_values( array_filter( $attributes['items'] ?? array(), 'is_array' ) );
$wrapper = bricareau_block_wrapper(
	$attributes,
	array(
		'class'                    => 'py-32 bg-[#f8fafc] relative overflow-hidden',
		'data-bricareau-cardstack' => '',
		'data-interval'            => max( 2, (int) ( $attributes['interval'] ?? 3 ) ) * 1000,
	)
);
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-40"></div>
	<div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-40"></div>
	<div class="container mx-auto px-6 relative z-10">
		<?php echo bricareau_section_header( $attributes, array( 'class' => 'mb-32' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
			<div class="lg:col-span-7 relative h-[450px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
				<div class="relative w-full max-w-[340px] lg:max-w-[450px] aspect-[3/4]">
					<?php foreach ( $items as $i => $item ) : ?>
						<button type="button" data-stack-card="<?php echo esc_attr( $i ); ?>" class="bricareau-stack-card absolute inset-0 bg-white rounded-[2.5rem] p-4 border border-slate-100 cursor-pointer transition-all duration-700 ease-out" aria-label="<?php echo esc_attr( $item['title'] ?? '' ); ?>">
							<span class="block w-full h-full rounded-[1.8rem] overflow-hidden relative group">
								<?php echo bricareau_image( $item['image'] ?? array(), 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-110', array( 'sizes' => '450px', 'alt' => $item['title'] ?? '' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								<span class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8 text-white font-bold text-xl"><?php echo esc_html( $item['title'] ?? '' ); ?></span>
							</span>
						</button>
					<?php endforeach; ?>
				</div>
			</div>
			<div class="lg:col-span-5 space-y-16">
				<?php foreach ( $items as $i => $item ) : ?>
					<button type="button" data-stack-item="<?php echo esc_attr( $i ); ?>" class="block w-full text-left group transition-all duration-500 opacity-60 scale-95 hover:opacity-100">
						<span class="flex items-start gap-8">
							<span class="pt-2"><span data-stack-dot class="block w-2.5 h-2.5 rounded-full bg-[#18448F] shadow-[0_0_15px_rgba(61,106,171,0.4)] transition-all"></span></span>
							<span class="space-y-4 block">
								<span class="block text-2xl font-bold text-[#18448F] transition-all duration-500"><?php echo esc_html( $item['title'] ?? '' ); ?></span>
								<span class="block text-[16px] md:text-[18px] lg:text-[20px] leading-snug font-light text-slate-500 text-justify max-w-md"><?php echo esc_html( $item['text'] ?? '' ); ?></span>
							</span>
						</span>
					</button>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>
