<?php
/**
 * Portfolio mosaic: header on the left/right row, then a 4-photo bento.
 *
 * @var array $attributes
 */

$images  = array_values( array_filter( $attributes['images'] ?? array(), 'is_array' ) );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'py-24 bg-white relative overflow-hidden' ) );
$slots   = array(
	array( 'sm:col-span-2 md:col-span-6 md:row-span-2 aspect-[4/3] lg:aspect-auto', 'object-center' ),
	array( 'sm:col-span-1 md:col-span-3 md:row-span-1 aspect-[4/3] lg:aspect-auto', 'object-center' ),
	array( 'sm:col-span-1 md:col-span-3 md:row-span-1 aspect-[4/3] lg:aspect-auto', 'object-right' ),
	array( 'sm:col-span-1 md:col-span-3 md:row-span-1 aspect-[4/3] lg:aspect-auto', 'object-left' ),
);
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
			<div>
				<?php if ( ! empty( $attributes['label'] ) ) : ?>
					<div class="mb-6"><?php echo bricareau_label( $attributes['label'], $attributes['labelStyle'] ?? 'pill' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
				<?php endif; ?>
				<h2 class="heading-pro-max tracking-tight leading-[1.1] font-bold text-[#18448F]"><?php echo bricareau_format_title( $attributes['title'] ?? '', bricareau_accent_class( $attributes['accentStyle'] ?? 'green' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h2>
			</div>
			<?php if ( ! empty( $attributes['intro'] ) ) : ?>
				<p class="max-w-md pb-2 font-light text-slate-600 text-[20px] leading-7"><?php echo esc_html( $attributes['intro'] ); ?></p>
			<?php endif; ?>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 md:grid-rows-2 gap-4 lg:gap-6 lg:h-[650px]">
			<?php foreach ( array_slice( $images, 0, 4 ) as $i => $image ) : ?>
				<?php if ( 2 === $i ) : ?>
					<div class="hidden md:block md:col-span-3 md:row-span-1"></div>
				<?php endif; ?>
				<div class="relative group overflow-hidden rounded-[2rem] shadow-sm <?php echo esc_attr( $slots[ $i ][0] ); ?>">
					<div class="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
					<?php echo bricareau_image( $image, 'absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ' . $slots[ $i ][1], array( 'sizes' => 0 === $i ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
