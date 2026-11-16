<?php
/**
 * Dark section over an image: title, text, chip list, CTA and a highlighted card.
 *
 * @var array $attributes
 */

$chips   = array_map( fn( $line ) => array_map( 'trim', explode( '|', $line, 2 ) ), bricareau_lines( $attributes['chips'] ?? '' ) );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'relative py-32 flex items-center overflow-hidden bg-slate-950' ) );
$card    = static function ( $attributes, $extra_class ) {
	if ( empty( $attributes['cardTitle'] ) ) {
		return '';
	}
	return '<div class="relative p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[4rem] bg-gradient-to-br from-blue-600/20 to-indigo-900/30 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group ' . esc_attr( $extra_class ) . '">'
		. '<div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px]"></div>'
		. '<div class="relative z-10 space-y-8 text-center lg:text-left">'
		. '<div class="w-16 h-16 lg:w-20 lg:h-20 rounded-3xl bg-blue-600 flex items-center justify-center mx-auto lg:mx-0 rotate-3 group-hover:rotate-6 transition-transform duration-700 shadow-2xl text-white">' . bricareau_icon( $attributes['cardIcon'] ?? 'shield-check', 'w-8 h-8 lg:w-10 lg:h-10' ) . '</div>'
		. '<div><p class="text-3xl lg:text-5xl font-black text-white tracking-tighter mb-2 italic uppercase">' . esc_html( $attributes['cardTitle'] ) . '</p>'
		. '<p class="text-blue-100/60 font-light leading-relaxed text-sm lg:text-lg italic">' . esc_html( $attributes['cardText'] ?? '' ) . '</p></div>'
		. '</div></div>';
};
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="absolute inset-0 z-0">
		<?php echo bricareau_image( $attributes['image'] ?? array(), 'w-full h-full object-cover opacity-40', array( 'sizes' => '100vw', 'alt' => '' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		<div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
	</div>
	<div class="container mx-auto px-6 relative z-10">
		<div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
			<div class="space-y-10">
				<div class="space-y-6">
					<h2 class="font-light leading-tight lg:leading-[52px] text-white">
						<?php echo bricareau_format_title( $attributes['title'] ?? '', bricareau_accent_class( $attributes['accentStyle'] ?? 'green' ) . ' font-bold font-serif not-italic', 'br' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					</h2>
					<p class="text-lg text-slate-300 font-light leading-relaxed max-w-xl text-justify lg:text-left"><?php echo esc_html( $attributes['text'] ?? '' ); ?></p>
				</div>
				<?php if ( $chips ) : ?>
					<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
						<?php foreach ( $chips as $chip ) : ?>
							<div class="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500">
								<span class="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
								<span>
									<span class="block text-[12px] font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wider"><?php echo esc_html( $chip[0] ); ?></span>
									<?php if ( ! empty( $chip[1] ) ) : ?>
										<span class="block text-[9px] font-black tracking-widest text-blue-400/60 uppercase"><?php echo esc_html( $chip[1] ); ?></span>
									<?php endif; ?>
								</span>
							</div>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
				<?php echo $card( $attributes, 'lg:hidden' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<?php if ( ! empty( $attributes['ctaText'] ) ) : ?>
					<div class="pt-6 border-t border-white/10"><?php echo bricareau_button( $attributes['ctaText'], $attributes['ctaUrl'] ?? '', array( 'class' => 'h-16 px-12 text-xs tracking-widest' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
				<?php endif; ?>
			</div>
			<div class="hidden lg:block lg:pl-12"><?php echo $card( $attributes, '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
		</div>
	</div>
</section>
