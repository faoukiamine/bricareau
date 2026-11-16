<?php
/**
 * Photo with narrative + bottle / money savings simulator (view.js).
 *
 * @var array $attributes
 */

$price   = (float) str_replace( ',', '.', (string) ( $attributes['bottlePrice'] ?? '0.35' ) );
$wrapper = bricareau_block_wrapper(
	$attributes,
	array(
		'class'                     => 'py-32 bg-white relative overflow-hidden',
		'data-bricareau-calculator' => '',
		'data-adult'                => (int) ( $attributes['adultBottles'] ?? 4 ),
		'data-child'                => (int) ( $attributes['childBottles'] ?? 2 ),
		'data-price'                => $price,
	)
);
$counter = static function ( $key, $label, $value ) {
	return '<div class="bg-slate-50/50 rounded-[2rem] p-4 border border-slate-100/80">'
		. '<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center mb-3">' . esc_html( $label ) . '</p>'
		. '<div class="flex items-center justify-between bg-white rounded-2xl p-1 shadow-sm border border-slate-100">'
		. '<button type="button" data-step="' . esc_attr( $key ) . '" data-delta="-1" class="w-8 h-8 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#18448F] transition-colors" aria-label="' . esc_attr__( 'Moins', 'bricareau' ) . '">' . bricareau_icon( 'minus', 'w-4 h-4' ) . '</button>'
		. '<span class="text-xl font-bold text-slate-900" data-value="' . esc_attr( $key ) . '">' . (int) $value . '</span>'
		. '<button type="button" data-step="' . esc_attr( $key ) . '" data-delta="1" class="w-8 h-8 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#18448F] transition-colors" aria-label="' . esc_attr__( 'Plus', 'bricareau' ) . '">' . bricareau_icon( 'plus', 'w-4 h-4' ) . '</button>'
		. '</div></div>';
};
$bottles = ( 2 * (int) ( $attributes['adultBottles'] ?? 4 ) + (int) ( $attributes['childBottles'] ?? 2 ) ) * 365;
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-6 relative z-10 mb-20">
		<?php echo bricareau_section_header( $attributes, array( 'class' => '' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
	</div>
	<div class="flex flex-col lg:flex-row items-stretch border-y border-slate-100 min-h-[650px] lg:min-h-[800px]">
		<div class="w-full lg:w-1/2 relative group overflow-hidden flex flex-col bg-slate-50">
			<div class="relative lg:absolute lg:inset-0 h-[450px] md:h-[600px] lg:h-full overflow-hidden">
				<?php echo bricareau_image( $attributes['image'] ?? array(), 'w-full h-full object-cover transition-transform [transition-duration:3s] group-hover:scale-105', array( 'sizes' => '(min-width: 1024px) 50vw, 100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent hidden lg:block"></div>
			</div>
			<div class="relative lg:absolute lg:bottom-12 lg:left-12 lg:right-12 z-20 p-8 lg:p-0">
				<div class="max-w-xl space-y-6">
					<?php if ( ! empty( $attributes['imageBadge'] ) ) : ?>
						<span class="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-widest"><?php echo bricareau_icon( 'star', 'w-4 h-4 text-yellow-400', array( 'fill' => true ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?><?php echo esc_html( $attributes['imageBadge'] ); ?></span>
					<?php endif; ?>
					<h3 class="text-3xl lg:text-4xl font-bold text-[#18448F] lg:text-white tracking-tight"><?php echo esc_html( $attributes['imageTitle'] ?? '' ); ?></h3>
					<p class="text-slate-700 lg:text-white text-[18px] lg:text-[20px] leading-relaxed italic border-l-2 border-blue-500 pl-6 text-justify lg:text-left"><?php echo esc_html( $attributes['imageText'] ?? '' ); ?></p>
				</div>
			</div>
		</div>

		<div class="w-full lg:w-1/2 flex items-center">
			<div class="w-full max-w-[700px] px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-0">
				<div class="relative bg-white p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
					<div class="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-20 -mt-20 blur-3xl opacity-60"></div>
					<div class="relative z-10 flex flex-col">
						<div class="flex items-center gap-4 mb-8">
							<span class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8CC63F] to-[#7BB52E] flex items-center justify-center text-white shadow-lg shadow-[#8CC63F]/30"><?php echo bricareau_icon( 'leaf', 'w-6 h-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
							<div>
								<p class="text-xl font-semibold text-slate-900 tracking-tight leading-none mb-1.5"><?php echo esc_html( $attributes['calcTitle'] ?? '' ); ?></p>
								<p class="text-[#18448F] text-[10px] font-black uppercase tracking-widest leading-none"><?php echo esc_html( $attributes['calcSubtitle'] ?? '' ); ?></p>
							</div>
						</div>
						<div class="space-y-4 mb-8">
							<div class="grid grid-cols-2 gap-4">
								<?php echo $counter( 'adults', __( 'Adultes', 'bricareau' ), 2 ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								<?php echo $counter( 'children', __( 'Enfants', 'bricareau' ), 1 ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
							</div>
							<div class="flex p-1 bg-slate-100/50 rounded-2xl border border-slate-200/50">
								<?php foreach ( array( 1, 5, 10 ) as $years ) : ?>
									<button type="button" data-years="<?php echo esc_attr( $years ); ?>" class="flex-1 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 <?php echo 1 === $years ? 'bg-white text-[#18448F] shadow-sm' : 'text-slate-400 hover:text-slate-600'; ?>"><?php echo esc_html( $years . ( 1 === $years ? ' AN' : ' ANS' ) ); ?></button>
								<?php endforeach; ?>
							</div>
						</div>
						<div class="space-y-3">
							<div class="p-6 rounded-[2.5rem] bg-[#8CC63F] border border-[#7BB52E] flex items-center justify-between shadow-xl shadow-[#8CC63F]/30">
								<div>
									<span class="text-[10px] font-black text-white/90 uppercase tracking-widest block mb-1"><?php esc_html_e( 'Plastique Évité', 'bricareau' ); ?></span>
									<span class="flex items-baseline gap-2"><span class="text-4xl font-black text-white tracking-tighter tabular-nums" data-result="bottles"><?php echo esc_html( number_format_i18n( $bottles ) ); ?></span><span class="text-white/70 text-[10px] font-bold uppercase"><?php esc_html_e( 'Unités', 'bricareau' ); ?></span></span>
								</div>
								<span class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border border-white/30 text-white"><?php echo bricareau_icon( 'recycle', 'w-6 h-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
							</div>
							<div class="p-6 rounded-[2.5rem] bg-[#18448F] flex items-center justify-between shadow-xl shadow-[#18448F]/20">
								<div>
									<span class="text-[10px] font-black text-blue-100 uppercase tracking-widest block mb-1"><?php esc_html_e( 'Économies Nettes', 'bricareau' ); ?></span>
									<span class="flex items-baseline gap-1"><span class="text-4xl font-black text-white tracking-tighter tabular-nums" data-result="money"><?php echo esc_html( number_format_i18n( round( $bottles * $price ) ) ); ?></span><span class="text-white font-bold text-2xl tracking-tighter">$</span></span>
								</div>
								<span class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border border-white/30 text-white"><?php echo bricareau_icon( 'piggy-bank', 'w-6 h-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
							</div>
							<?php if ( ! empty( $attributes['note'] ) ) : ?>
								<p class="pt-2 text-center italic font-light text-slate-600 text-[18px] leading-6"><?php echo esc_html( $attributes['note'] ); ?></p>
							<?php endif; ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
