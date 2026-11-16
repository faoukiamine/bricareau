<?php
/**
 * Navy call-to-action: label, title, text, phone + consultation buttons and
 * expert avatars (the "PREMIUM CTA" of the product pages).
 *
 * @var array $attributes
 */

$avatars = array_slice( array_filter( $attributes['avatars'] ?? array(), 'is_array' ), 0, 6 );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'relative py-32 flex items-center overflow-hidden bg-[#18448F]' ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 translate-x-1/4"></div>
	<div class="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-400/10 to-transparent -skew-x-12 -translate-x-1/4"></div>
	<div class="absolute inset-0 z-0 opacity-40">
		<?php echo bricareau_image( $attributes['image'] ?? array(), 'w-full h-full object-cover grayscale brightness-150', array( 'sizes' => '100vw', 'alt' => '' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		<div class="absolute inset-0 bg-[#18448F]/10 backdrop-blur-sm"></div>
	</div>

	<div class="container mx-auto px-6 relative z-10">
		<div class="max-w-5xl mx-auto text-center space-y-12">
			<div class="space-y-6">
				<?php if ( ! empty( $attributes['label'] ) ) : ?>
					<span class="inline-block px-4 py-1.5 bg-white text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em]"><?php echo esc_html( $attributes['label'] ); ?></span>
				<?php endif; ?>
				<h2 class="font-light leading-tight lg:leading-[52px] text-white">
					<?php echo bricareau_format_title( $attributes['title'] ?? '', 'text-white italic font-bold font-serif', 'br' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				</h2>
				<?php foreach ( bricareau_paragraphs( $attributes['text'] ?? '', 'text-white font-bold border-b border-white' ) as $paragraph ) : ?>
					<p class="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed"><?php echo $paragraph; // phpcs:ignore WordPress.Security.EscapeOutput ?></p>
				<?php endforeach; ?>
			</div>

			<div class="flex flex-col sm:flex-row gap-8 justify-center items-center pt-4">
				<?php if ( ! empty( $attributes['phoneText'] ) ) : ?>
					<?php echo bricareau_button( $attributes['phoneText'], BRICAREAU_PHONE_HREF, array( 'variant' => 'white-on-dark', 'icon_before' => 'phone', 'container_class' => 'w-full sm:w-auto', 'class' => 'h-16 px-12 text-xs tracking-widest' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<?php endif; ?>
				<?php echo bricareau_button( $attributes['ctaText'] ?? '', $attributes['ctaUrl'] ?? '', array( 'variant' => 'outline-white', 'container_class' => 'w-full sm:w-auto', 'class' => 'h-16 px-12 text-xs tracking-widest' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			</div>

			<?php if ( $avatars || ! empty( $attributes['caption'] ) ) : ?>
				<div class="pt-8 flex flex-col items-center gap-4">
					<?php if ( $avatars ) : ?>
						<div class="flex -space-x-4">
							<?php foreach ( $avatars as $avatar ) : ?>
								<span class="w-12 h-12 rounded-full border-4 border-[#18448F] bg-blue-400 overflow-hidden shadow-xl"><?php echo bricareau_image( $avatar, 'w-full h-full object-cover object-top', array( 'sizes' => '48px' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
							<?php endforeach; ?>
							<?php if ( ! empty( $attributes['rating'] ) ) : ?>
								<span class="w-12 h-12 rounded-full border-4 border-[#18448F] bg-white flex items-center justify-center text-blue-900 font-bold text-xs shadow-xl"><?php echo esc_html( $attributes['rating'] ); ?></span>
							<?php endif; ?>
						</div>
					<?php endif; ?>
					<?php foreach ( bricareau_paragraphs( $attributes['caption'] ?? '', 'text-white font-medium' ) as $paragraph ) : ?>
						<p class="text-blue-200/60 text-sm font-medium"><?php echo $paragraph; // phpcs:ignore WordPress.Security.EscapeOutput ?></p>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
		</div>
	</div>
</section>
