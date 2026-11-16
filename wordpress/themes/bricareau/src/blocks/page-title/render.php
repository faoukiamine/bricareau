<?php
/**
 * Breadcrumbs and a centered title, above long text pages (legal pages).
 *
 * @var array $attributes
 */

$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'bg-white text-center' ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-4 py-6 text-left"><?php echo bricareau_breadcrumbs(); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
	<div class="container mx-auto px-4 pt-12 max-w-4xl">
		<h1 class="<?php echo 'solid' === ( $attributes['titleStyle'] ?? '' ) ? 'text-[40px] lg:text-[50px] leading-[45px] lg:leading-[55px] font-bold text-[#18448F]' : 'text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-light italic text-[#1a5a8a]'; ?> font-sans mb-6 tracking-tight"><?php echo bricareau_format_title( $attributes['title'] ?? '', bricareau_accent_class( 'green' ) . ' font-bold not-italic drop-shadow-lg', 'br' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h1>
		<?php if ( ! empty( $attributes['subtitle'] ) ) : ?>
			<p class="text-xl font-bold text-[#1a5a8a]"><?php echo esc_html( $attributes['subtitle'] ); ?></p>
		<?php endif; ?>
		<?php if ( ! empty( $attributes['meta'] ) ) : ?>
			<p class="text-sm text-gray-500 mt-2"><?php echo esc_html( $attributes['meta'] ); ?></p>
		<?php endif; ?>
		<?php if ( ! empty( $attributes['note'] ) ) : ?>
			<p class="text-xs text-gray-500 italic mt-1 max-w-2xl mx-auto"><?php echo esc_html( $attributes['note'] ); ?></p>
		<?php endif; ?>
	</div>
</section>
