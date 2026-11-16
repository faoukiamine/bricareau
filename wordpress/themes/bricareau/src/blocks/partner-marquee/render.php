<?php
/**
 * Scrolling ribbon of client names. The list is rendered twice so the
 * marquee animation (translateX -50%) loops seamlessly.
 *
 * @var array $attributes
 */

$partners = array_values( array_filter( array_map( 'trim', preg_split( '/\r\n|\r|\n/', $attributes['partners'] ?? '' ) ) ) );
if ( ! $partners ) {
	return;
}

$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'bg-[#18448F] py-10 overflow-hidden' ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="w-full relative">
		<div class="flex w-max animate-marquee gap-16">
			<?php foreach ( array( false, true ) as $duplicate ) : ?>
				<div class="flex gap-16 items-center px-8" <?php echo $duplicate ? 'aria-hidden="true"' : ''; ?>>
					<?php foreach ( $partners as $i => $partner ) : ?>
						<span
							class="text-blue-200/50 font-bold text-xl italic whitespace-nowrap cursor-default animate-logo-light-up"
							style="animation-delay: <?php echo esc_attr( ( $i * 1.25 ) - 6.5 ); ?>s"
						><?php echo esc_html( $partner ); ?></span>
					<?php endforeach; ?>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
