<?php
/**
 * Section header + 3-column cards: "numbered" (large 01. 02. on bordered
 * cards) or "icon-columns" (bordered columns with an icon).
 *
 * @var array $attributes
 */

$cards       = array_values( array_filter( $attributes['cards'] ?? array(), 'is_array' ) );
$variant     = $attributes['variant'] ?? 'numbered';
$numbered    = 'numbered' === $variant;
$centered    = 'left' !== ( $attributes['align'] ?? 'center' );
$background  = $attributes['background'] ?? 'white';
$backgrounds = array(
	'white' => 'py-32 bg-white relative overflow-hidden',
	'light' => 'py-32 bg-slate-50 relative overflow-hidden',
	'glow'  => 'py-32 bg-white relative overflow-hidden border-t border-slate-100',
);
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => $backgrounds[ $background ] ?? $backgrounds['white'] ) );
$columns = 4 === count( $cards ) ? 'lg:grid-cols-4' : 'lg:grid-cols-3';
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<?php if ( 'swiss' === $variant && ( ! empty( $attributes['backgroundImage']['id'] ) || ! empty( $attributes['backgroundImage']['url'] ) ) ) : ?>
		<div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
			<?php echo bricareau_image( $attributes['backgroundImage'], 'w-full h-full object-cover opacity-50 grayscale mix-blend-multiply', array( 'alt' => '', 'sizes' => '100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			<div class="absolute inset-0 bg-white/85"></div>
			<div class="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white opacity-90"></div>
		</div>
	<?php endif; ?>
	<?php if ( 'glow' === $background ) : ?>
		<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none"></div>
	<?php endif; ?>
	<div class="container mx-auto px-6 relative z-10 <?php echo $numbered ? '' : 'max-w-7xl'; ?>"><div class="<?php echo $numbered ? 'max-w-7xl mx-auto' : ''; ?>">
		<?php
		echo bricareau_section_header( // phpcs:ignore WordPress.Security.EscapeOutput
			$attributes,
			array(
				'centered'    => $centered,
				'class'       => $centered ? 'mb-20 space-y-4' : 'mb-16 space-y-8 max-w-3xl',
				'title_class' => 'text-3xl lg:text-5xl font-bold text-[#18448F] leading-tight',
				'intro_class' => 'text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-lg',
			)
		);
		?>

		<?php if ( 'icon-centered' === $variant ) : ?>
			<div class="grid md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
				<?php foreach ( $cards as $card ) : ?>
					<div class="flex flex-col items-center">
						<span class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-[#18448F]"><?php echo bricareau_icon( $card['icon'] ?? '', 'w-8 h-8' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
						<h3 class="text-xl font-bold text-slate-900 mb-3"><?php echo esc_html( $card['title'] ?? '' ); ?></h3>
						<p class="text-slate-600 leading-relaxed"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
		<?php elseif ( 'steps' === $variant ) : ?>
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
				<div class="absolute top-1/2 left-0 w-full h-px bg-slate-200 hidden md:block -translate-y-1/2"></div>
				<?php foreach ( $cards as $i => $card ) : ?>
					<div class="relative flex flex-col items-center text-center space-y-4 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
						<span class="w-16 h-16 rounded-3xl bg-[#18448F] text-white flex items-center justify-center shadow-lg shadow-[#18448F]/20 group-hover:rotate-6 transition-transform"><?php echo bricareau_icon( $card['icon'] ?? '', 'w-8 h-8' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
						<div class="space-y-2">
							<span class="text-[10px] font-black text-[#18448F] uppercase tracking-[0.2em]"><?php echo esc_html( sprintf( '%02d', $i + 1 ) ); ?></span>
							<h4 class="font-bold text-[#18448F] text-base mb-1"><?php echo esc_html( $card['title'] ?? '' ); ?></h4>
							<p class="text-slate-500 text-xs leading-relaxed font-light"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		<?php elseif ( $numbered ) : ?>
			<div class="grid grid-cols-1 md:grid-cols-2 <?php echo esc_attr( $columns ); ?> gap-8">
				<?php foreach ( $cards as $i => $card ) : ?>
					<div class="group flex flex-col gap-8 items-start p-10 lg:p-12 border border-slate-200/60 hover:bg-slate-50/50 transition-colors duration-500 rounded-3xl h-full">
						<div class="text-5xl md:text-6xl font-light text-[#18448F]/20 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8CC63F] group-hover:to-blue-500 transition-all duration-500 tracking-tighter mb-4"><?php echo esc_html( sprintf( '%02d.', $i + 1 ) ); ?></div>
						<div class="flex-1 space-y-4 pt-2">
							<h3 class="text-3xl font-semibold text-slate-900 group-hover:text-[#18448F] transition-colors duration-300 tracking-tight"><?php echo esc_html( $card['title'] ?? '' ); ?></h3>
							<p class="text-slate-500 text-lg md:text-xl leading-relaxed font-light"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		<?php elseif ( 'icon-list' === $variant ) : ?>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
				<?php foreach ( $cards as $i => $card ) : ?>
					<div class="group flex items-start gap-10">
						<div class="relative flex-shrink-0">
							<span class="w-16 h-16 flex items-center justify-center text-blue-600"><?php echo bricareau_icon( $card['icon'] ?? '', 'w-14 h-14 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700', array( 'stroke-width' => 1 ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
							<span class="absolute -top-6 -left-6 text-6xl font-black text-blue-100/40 group-hover:text-blue-200/50 transition-colors duration-700 select-none"><?php echo esc_html( sprintf( '%02d', $i + 1 ) ); ?></span>
						</div>
						<div class="space-y-4">
							<div class="flex items-center gap-4">
								<h3 class="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-500"><?php echo esc_html( $card['title'] ?? '' ); ?></h3>
								<span class="h-px w-0 group-hover:w-12 bg-blue-600/30 transition-all duration-700"></span>
							</div>
							<p class="text-[16px] md:text-[18px] lg:text-[20px] leading-snug font-light text-slate-500 opacity-80 group-hover:opacity-100 transition-opacity duration-500 max-w-lg"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		<?php elseif ( 'swiss' === $variant ) : ?>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
				<?php foreach ( $cards as $card ) : ?>
					<div class="group relative p-10 border-b border-r border-slate-200 bg-white/40 backdrop-blur-sm hover:bg-white transition-all duration-500 flex flex-col h-full overflow-hidden">
						<span class="w-12 h-12 mb-10 flex items-center justify-center text-slate-800 group-hover:text-blue-600 transition-colors duration-300"><?php echo bricareau_icon( $card['icon'] ?? '', 'h-7 w-7', array( 'stroke-width' => 1.5 ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
						<div class="flex flex-col flex-grow mt-auto">
							<h3 class="text-lg font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors"><?php echo esc_html( $card['title'] ?? '' ); ?></h3>
							<p class="font-normal leading-relaxed text-slate-500 text-[14px]"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
						</div>
						<span class="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500 ease-out"></span>
					</div>
				<?php endforeach; ?>
			</div>
		<?php else : ?>
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-0 border-y sm:border-y-0 sm:border-x border-slate-200">
				<?php foreach ( $cards as $card ) : ?>
					<div class="group p-10 border-b sm:border-b-0 border-slate-200 last:border-b-0 sm:border-r sm:last:border-r-0 hover:bg-slate-50 transition-colors duration-500">
						<?php echo bricareau_icon( $card['icon'] ?? '', 'w-8 h-8 text-slate-300 mb-6 group-hover:text-blue-600 transition-colors' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						<h3 class="text-xl font-bold mb-4 tracking-tight text-slate-900"><?php echo esc_html( $card['title'] ?? '' ); ?></h3>
						<p class="text-slate-500 text-sm font-light leading-relaxed"><?php echo esc_html( $card['text'] ?? '' ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>
	</div></div>
</section>
