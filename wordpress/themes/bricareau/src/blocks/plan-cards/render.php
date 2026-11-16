<?php
/**
 * Plan / kit cards; the featured one is dark with a badge.
 *
 * @var array $attributes
 */

$plans   = array_values( array_filter( $attributes['plans'] ?? array(), 'is_array' ) );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'py-24 bg-slate-50 relative' ) );
$cols    = 4 === count( $plans ) ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3';
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-6">
		<?php echo bricareau_section_header( $attributes, array( 'class' => 'mb-16 max-w-3xl' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		<div class="grid grid-cols-1 <?php echo esc_attr( $cols ); ?> gap-6 lg:gap-8">
			<?php foreach ( $plans as $plan ) : ?>
				<?php $featured = ! empty( $plan['featured'] ); ?>
				<div class="relative flex flex-col rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-2 border-2 <?php echo $featured ? 'bg-slate-900 shadow-2xl xl:scale-105 border-slate-900 ring-4 ring-blue-600/20 z-10' : 'bg-white shadow-xl hover:shadow-2xl border-slate-100'; ?>">
					<?php if ( $featured && ! empty( $attributes['featuredLabel'] ) ) : ?>
						<span class="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg tracking-wider uppercase whitespace-nowrap"><?php echo esc_html( $attributes['featuredLabel'] ); ?></span>
					<?php endif; ?>
					<div class="mb-6">
						<span class="text-xs font-bold uppercase tracking-widest mb-2 block <?php echo $featured ? 'text-blue-400' : 'text-slate-500'; ?>"><?php echo esc_html( $plan['subtitle'] ?? '' ); ?></span>
						<h3 class="text-2xl mb-4 font-medium <?php echo $featured ? 'text-white' : 'text-blue-600'; ?>"><?php echo esc_html( $plan['title'] ?? '' ); ?></h3>
						<p class="text-sm leading-snug <?php echo $featured ? 'text-slate-400' : 'text-slate-600'; ?>"><?php echo esc_html( $plan['text'] ?? '' ); ?></p>
					</div>
					<div class="flex-grow space-y-3 mb-8 <?php echo $featured ? 'text-slate-300' : 'text-slate-600'; ?>">
						<?php foreach ( bricareau_lines( $plan['items'] ?? '' ) as $item ) : ?>
							<div class="flex items-start gap-3"><?php echo bricareau_icon( 'circle-check', 'w-5 h-5 flex-shrink-0 ' . ( $featured ? 'text-blue-400' : 'text-blue-600' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?><span class="text-sm font-medium"><?php echo esc_html( $item ); ?></span></div>
						<?php endforeach; ?>
						<?php if ( ! empty( $plan['note'] ) ) : ?>
							<div class="text-xs pl-8 italic pt-2 <?php echo $featured ? 'text-blue-400' : 'text-slate-500'; ?>"><?php echo esc_html( $plan['note'] ); ?></div>
						<?php endif; ?>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
