<?php
/**
 * Model comparison table. On mobile one model column is shown at a time
 * (arrows switch it, view.js); on desktop all columns are visible.
 *
 * Cell values: "oui" → check, "non" → faded cross, empty → nothing, else text.
 *
 * @var array $attributes
 */

$columns = array_values( array_filter( $attributes['columns'] ?? array(), 'is_array' ) );
$rows    = array_values( array_filter( $attributes['rows'] ?? array(), 'is_array' ) );
$pill    = 'pill' === ( $attributes['valueStyle'] ?? 'pill' );
$wrapper = bricareau_block_wrapper(
	$attributes,
	array(
		'class'                       => 'py-24 relative overflow-hidden ' . ( 'light' === ( $attributes['background'] ?? 'white' ) ? 'bg-gray-50' : 'bg-white' ),
		'data-bricareau-comparison'  => '',
	)
);
$cell_visibility = fn( $i ) => 0 === $i ? 'table-cell' : 'hidden lg:table-cell';
// Many models: tighter cells so the whole table fits on desktop.
$compact  = count( $columns ) > 6;
$th_class = $compact ? 'p-2 min-w-[90px]' : 'p-4 md:p-6 min-w-[180px]';
$td_class = $compact ? 'p-3' : 'p-6 md:p-10';

$render_value = static function ( $value ) use ( $pill ) {
	$value = trim( (string) $value );
	$lower = mb_strtolower( $value );
	if ( in_array( $lower, array( 'oui', 'yes', '✓', 'true' ), true ) ) {
		return bricareau_icon( 'circle-check', 'h-5 w-5 md:h-6 md:w-6 text-blue-600 mx-auto' );
	}
	if ( in_array( $lower, array( 'non', 'no', '✗', 'false' ), true ) ) {
		return '<span class="block h-5 w-5 md:h-6 md:w-6 mx-auto opacity-10">' . bricareau_icon( 'x', 'h-5 w-5 md:h-6 md:w-6' ) . '</span>';
	}
	if ( '' === $value || '-' === $value ) {
		return '';
	}
	return $pill
		? '<span class="text-blue-600 font-bold bg-blue-50/50 px-2 py-1 rounded-full text-[9px] md:text-[10px] uppercase shadow-sm whitespace-nowrap">' . esc_html( $value ) . '</span>'
		: esc_html( $value );
};
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-4">
		<?php echo bricareau_section_header( $attributes, array( 'class' => 'mb-16' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>

		<?php if ( count( $columns ) > 1 ) : ?>
			<div class="lg:hidden flex items-center justify-end gap-3 mb-8">
				<button type="button" data-col-prev class="w-10 h-10 rounded-full border border-blue-100 flex items-center justify-center text-[#18448F] hover:bg-[#18448F] hover:text-white transition-all shadow-sm disabled:opacity-40" aria-label="<?php esc_attr_e( 'Modèle précédent', 'bricareau' ); ?>" disabled><?php echo bricareau_icon( 'chevron-left', 'h-5 w-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></button>
				<div class="flex gap-1.5 px-2">
					<?php foreach ( $columns as $i => $column ) : ?>
						<span data-col-dot="<?php echo esc_attr( $i ); ?>" class="h-1.5 rounded-full transition-all duration-300 <?php echo 0 === $i ? 'w-6 bg-blue-600' : 'w-1.5 bg-blue-100'; ?>"></span>
					<?php endforeach; ?>
				</div>
				<button type="button" data-col-next class="w-10 h-10 rounded-full border border-blue-100 flex items-center justify-center text-[#18448F] hover:bg-[#18448F] hover:text-white transition-all shadow-sm disabled:opacity-40" aria-label="<?php esc_attr_e( 'Modèle suivant', 'bricareau' ); ?>"><?php echo bricareau_icon( 'chevron-right', 'h-5 w-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></button>
			</div>
		<?php endif; ?>

		<div class="overflow-x-auto xl:overflow-visible pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
			<table class="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-2xl relative">
				<thead>
					<tr class="bg-slate-50">
						<th class="p-6 md:p-10 text-left text-blue-900/40 font-black uppercase tracking-widest text-[10px] sticky left-0 bg-slate-50 z-30 border-r border-slate-100 min-w-[160px] md:min-w-[200px]"><?php echo esc_html( $attributes['firstColumnLabel'] ?? '' ); ?></th>
						<?php foreach ( $columns as $i => $column ) : ?>
							<th data-col="<?php echo esc_attr( $i ); ?>" class="text-center <?php echo esc_attr( $th_class . ' ' . $cell_visibility( $i ) ); ?>">
								<div class="flex flex-col items-center gap-6">
									<?php if ( ! empty( $column['image']['url'] ) || ! empty( $column['image']['id'] ) || ! empty( $column['badge'] ) ) : ?>
										<div class="relative group/img">
											<?php if ( ! empty( $column['badge'] ) ) : ?>
												<span class="absolute -top-3 <?php echo $compact ? 'left-1/2 -translate-x-1/2' : '-right-10'; ?> z-20 text-white text-[8px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full shadow-2xl whitespace-nowrap <?php echo esc_attr( bricareau_color_class( $column['color'] ?? 'navy' ) ); ?>"><?php echo esc_html( $column['badge'] ); ?></span>
											<?php endif; ?>
											<?php echo bricareau_image( $column['image'] ?? array(), 'w-[120px] md:w-[140px] h-[100px] md:h-[120px] object-contain mx-auto mix-blend-multiply relative z-10 transition-transform duration-700 group-hover/img:scale-110', array( 'alt' => $column['name'] ?? '', 'sizes' => '140px' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
										</div>
									<?php endif; ?>
									<span class="font-bold text-[#18448F] <?php echo $compact ? 'text-[10px] md:text-[12px] uppercase tracking-wider leading-tight' : 'text-sm md:text-lg'; ?>"><?php echo esc_html( $column['name'] ?? '' ); ?></span>
								</div>
							</th>
						<?php endforeach; ?>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-100">
					<?php foreach ( $rows as $row ) : ?>
						<?php $values = preg_split( '/\r\n|\r|\n/', (string) ( $row['values'] ?? '' ) ); ?>
						<tr class="hover:bg-blue-50/30 transition-colors group">
							<td class="p-6 md:p-10 font-bold text-[#18448F] bg-white sticky left-0 z-30 border-r border-slate-50 text-[12px] md:text-sm italic"><?php echo esc_html( $row['label'] ?? '' ); ?></td>
							<?php foreach ( $columns as $i => $column ) : ?>
								<td data-col="<?php echo esc_attr( $i ); ?>" class="text-center text-[13px] md:text-sm font-light leading-relaxed text-slate-600 <?php echo esc_attr( $td_class . ' ' . $cell_visibility( $i ) ); ?>"><?php echo $render_value( $values[ $i ] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></td>
							<?php endforeach; ?>
						</tr>
					<?php endforeach; ?>
				</tbody>
			</table>
		</div>
	</div>
</section>
