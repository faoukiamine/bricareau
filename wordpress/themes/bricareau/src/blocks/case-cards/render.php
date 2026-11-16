<?php
/**
 * Text cards with a label, title and link (case studies).
 *
 * @var array $attributes
 */

$items   = array_values( array_filter( $attributes['items'] ?? array(), 'is_array' ) );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'py-24 bg-slate-50 border-t border-slate-100' ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-6">
		<?php echo bricareau_section_header( $attributes, array( 'class' => 'mb-10' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		<?php if ( ! empty( $attributes['ctaText'] ) ) : ?>
			<div class="flex justify-end mb-8"><a href="<?php echo bricareau_url( $attributes['ctaUrl'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="text-xs font-black text-[#18448F] uppercase tracking-widest flex items-center gap-2 hover:text-[#8CC63F] transition-colors"><?php echo esc_html( $attributes['ctaText'] ); ?><?php echo bricareau_icon( 'arrow-right', 'w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></a></div>
		<?php endif; ?>
		<div class="grid md:grid-cols-3 gap-8">
			<?php foreach ( $items as $item ) : ?>
				<div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col">
					<span class="text-[10px] font-black uppercase tracking-[0.2em] text-[#8CC63F] mb-4"><?php echo esc_html( $item['label'] ?? '' ); ?></span>
					<h4 class="text-lg font-bold text-slate-900 mb-3 leading-snug"><?php echo esc_html( $item['title'] ?? '' ); ?></h4>
					<p class="text-sm text-slate-500 leading-relaxed mb-6 flex-1"><?php echo esc_html( $item['text'] ?? '' ); ?></p>
					<a href="<?php echo bricareau_url( $item['url'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="text-[#18448F] font-bold text-sm flex items-center gap-1 hover:underline"><?php echo esc_html( $item['linkText'] ?? '' ); ?><?php echo bricareau_icon( 'chevron-right', 'w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></a>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
