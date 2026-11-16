<?php
/**
 * Full-width background image with a call to action on the right.
 *
 * @var array $attributes
 */

$dark    = 'light' !== ( $attributes['overlay'] ?? 'dark' );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'relative overflow-hidden min-h-[50vh] md:min-h-screen lg:min-h-[80vh] flex items-center py-16 md:py-32' ) );
$accent  = bricareau_accent_class( $attributes['accentStyle'] ?? 'green' ) . ' font-bold';

if ( 'banner' === ( $attributes['layout'] ?? 'right' ) ) :
	$banner = bricareau_block_wrapper( $attributes, array( 'class' => 'relative lg:h-[800px] flex flex-col lg:flex-row items-stretch overflow-hidden bg-white' ) );
	?>
<section <?php echo $banner; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="lg:hidden w-full bg-slate-50"><?php echo bricareau_image( $attributes['image'] ?? array(), 'w-full h-auto object-contain', array( 'sizes' => '100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
	<div class="hidden lg:block absolute inset-0 z-0">
		<?php echo bricareau_image( $attributes['image'] ?? array(), 'w-full h-full object-cover', array( 'sizes' => '100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		<div class="absolute inset-0 bg-gradient-to-r <?php echo 'blue' === ( $attributes['overlay'] ?? 'dark' ) ? 'from-blue-900/90 to-[#18448F]/20 mix-blend-multiply' : 'from-black/50 to-transparent'; ?>"></div>
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent"></div>
	</div>
	<div class="container mx-auto px-4 relative z-10 flex items-center py-12 lg:py-0">
		<div class="max-w-2xl text-slate-900 lg:text-white">
			<?php if ( ! empty( $attributes['eyebrow'] ) ) : ?>
				<span class="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-8 block"><?php echo esc_html( $attributes['eyebrow'] ); ?></span>
			<?php endif; ?>
			<h2 class="mb-8 heading-pro-max text-left text-[#18448F] lg:text-white"><?php echo bricareau_format_title( $attributes['title'] ?? '', 'italic font-bold font-serif' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h2>
			<p class="text-[16px] md:text-[18px] lg:text-[20px] leading-snug font-light text-black lg:text-white/95 mb-8 max-w-xl text-justify lg:text-left"><?php echo esc_html( $attributes['text'] ?? '' ); ?></p>
			<?php echo bricareau_button( $attributes['ctaText'] ?? '', $attributes['ctaUrl'] ?? '', array( 'container_class' => 'w-full sm:w-auto', 'class' => 'h-16 px-12 text-xs tracking-widest' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		</div>
	</div>
</section>
	<?php
	return;
endif;
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="absolute inset-0 z-0">
		<?php echo bricareau_image( $attributes['image'] ?? array(), 'w-full h-full object-cover object-center', array( 'sizes' => '100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		<div class="absolute inset-0 bg-gradient-to-r from-transparent <?php echo $dark ? 'via-slate-900/60 to-slate-900/95' : 'via-white/40 to-white/95'; ?>"></div>
	</div>

	<div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 relative z-10">
		<div class="md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-7 space-y-8 lg:space-y-10 text-center lg:text-left md:px-0 lg:pl-12">
			<h2 class="text-[40px] md:text-[50px] leading-[1.1] md:leading-[55px] font-sans tracking-tight <?php echo 'light' === ( $attributes['titleWeight'] ?? 'bold' ) ? 'font-light' : 'font-bold'; ?> <?php echo $dark ? 'text-white' : 'text-[#18448F]'; ?>">
				<?php echo bricareau_format_title( $attributes['title'] ?? '', $accent, 'br' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			</h2>
			<?php if ( ! empty( $attributes['text'] ) ) : ?>
				<p class="text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed <?php echo $dark ? 'text-slate-300' : 'text-slate-600'; ?>"><?php echo esc_html( $attributes['text'] ); ?></p>
			<?php endif; ?>
			<?php if ( ! empty( $attributes['ctaText'] ) ) : ?>
				<div class="flex justify-center lg:justify-start">
					<?php
					echo bricareau_button( // phpcs:ignore WordPress.Security.EscapeOutput
						$attributes['ctaText'],
						$attributes['ctaUrl'] ?? '',
						array(
							'variant' => $dark ? 'white' : 'primary',
							'class'   => 'h-16 px-12 text-xs tracking-widest ' . ( $dark ? 'shadow-[0_0_40px_rgba(255,255,255,0.2)]' : 'shadow-xl' ),
						)
					);
					?>
				</div>
			<?php endif; ?>
		</div>
	</div>
</section>
