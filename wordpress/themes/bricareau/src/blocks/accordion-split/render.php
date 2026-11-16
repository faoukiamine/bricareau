<?php
/**
 * Native <details> accordion beside an image; a row with its own image swaps it when opened.
 *
 * @var array $attributes
 */

$items   = array_values( array_filter( $attributes['items'] ?? array(), 'is_array' ) );
$left    = 'left' === ( $attributes['imageSide'] ?? 'right' );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'py-24 bg-white overflow-hidden' ) );
$sizes   = array( 'sizes' => '(min-width: 1024px) 50vw, 100vw' );
$images  = array_values( array_filter( array_map( fn( $item ) => $item['image'] ?? array(), $items ), fn( $image ) => ! empty( $image['id'] ) || ! empty( $image['url'] ) ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?> data-bricareau-accordion-split>
	<div class="container mx-auto px-6">
		<div class="grid lg:grid-cols-2 gap-16 items-center">
			<div class="<?php echo $left ? 'lg:order-2' : ''; ?>">
				<?php echo bricareau_section_header( $attributes, array( 'centered' => false, 'class' => 'mb-10' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<?php foreach ( $items as $i => $item ) : ?>
					<details class="group border-b border-slate-200" data-index="<?php echo (int) $i; ?>" <?php echo 0 === $i ? 'open' : ''; ?>>
						<summary class="flex items-center justify-between gap-4 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-lg font-bold text-slate-900 group-open:text-[#18448F]">
							<span><?php echo esc_html( $item['title'] ?? '' ); ?></span>
							<?php echo bricareau_icon( 'chevron-down', 'w-5 h-5 shrink-0 transition-transform group-open:rotate-180' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						</summary>
						<p class="pb-6 text-[15px] leading-relaxed text-slate-600 text-justify"><?php echo esc_html( $item['text'] ?? '' ); ?></p>
					</details>
				<?php endforeach; ?>
			</div>
			<div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/10] lg:aspect-square <?php echo $left ? 'lg:order-1' : ''; ?>">
				<?php if ( $images ) : ?>
					<?php foreach ( $images as $i => $image ) : ?>
						<div data-accordion-image="<?php echo (int) $i; ?>" class="absolute inset-0 transition-opacity duration-500 <?php echo 0 === $i ? 'opacity-100' : 'opacity-0'; ?>"><?php echo bricareau_image( $image, 'w-full h-full object-cover', $sizes ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
					<?php endforeach; ?>
				<?php else : ?>
					<?php echo bricareau_image( $attributes['image'] ?? array(), 'w-full h-full object-cover', $sizes ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>
