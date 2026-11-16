<?php
/**
 * A Fluent Forms form in a card.
 *
 * "stacked": section header above the card.
 * "benefits": text, benefits and a quote beside the card, overlapping the hero.
 * "contact": contact details beside a card that holds the title and intro.
 *
 * @var array $attributes
 */

$form_id = (int) ( $attributes['formId'] ?? 0 );
$layout  = $attributes['layout'] ?? 'stacked';
$items   = array_values( array_filter( $attributes['asideItems'] ?? array(), 'is_array' ) );

ob_start();
if ( ! $form_id ) :
	?>
	<p class="text-slate-500 text-center text-base"><?php esc_html_e( 'Choisissez un formulaire dans les réglages du bloc.', 'bricareau' ); ?></p>
	<?php
elseif ( ! shortcode_exists( 'fluentform' ) ) :
	?>
	<p class="text-slate-500 text-center text-base"><?php esc_html_e( 'L\'extension Fluent Forms doit être activée pour afficher ce formulaire.', 'bricareau' ); ?></p>
	<?php
else :
	echo do_shortcode( '[fluentform id="' . $form_id . '"]' ); // phpcs:ignore WordPress.Security.EscapeOutput
endif;
$form = ob_get_clean();

if ( 'benefits' === $layout ) :
	$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'relative flow-root bg-white pb-16 scroll-mt-32' ) );
	?>
	<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
		<div class="container mx-auto px-4 lg:px-6 -mt-24 lg:-mt-40 relative z-40">
			<div class="flex flex-col-reverse lg:flex-row items-start gap-16 lg:gap-24">
				<div class="w-full lg:w-4/12 space-y-12 lg:pt-56">
					<?php if ( ! empty( $attributes['asideText'] ) ) : ?>
						<p class="text-lg font-light leading-relaxed text-slate-600 max-w-xl text-left"><?php echo esc_html( $attributes['asideText'] ); ?></p>
					<?php endif; ?>
					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
						<?php foreach ( $items as $item ) : ?>
							<div class="flex flex-col gap-3 group">
								<span class="w-10 h-10 rounded-xl bg-[#18448F]/10 flex items-center justify-center text-[#18448F] group-hover:bg-[#18448F] group-hover:text-white transition-all duration-500"><?php echo bricareau_icon( $item['icon'] ?? '', 'w-5 h-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
								<div>
									<h4 class="font-bold text-[#18448F] text-sm uppercase tracking-wider"><?php echo esc_html( $item['title'] ?? '' ); ?></h4>
									<p class="text-slate-500 text-xs font-light"><?php echo esc_html( $item['value'] ?? '' ); ?></p>
								</div>
							</div>
						<?php endforeach; ?>
					</div>
					<?php if ( ! empty( $attributes['quote'] ) ) : ?>
						<div class="pt-12 border-t border-slate-100">
							<?php echo bricareau_icon( 'quote', 'w-10 h-10 text-[#18448F] mb-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
							<p class="text-xl font-light italic text-slate-500 leading-relaxed mb-6">"<?php echo esc_html( $attributes['quote'] ); ?>"</p>
							<p class="font-bold text-[#18448F] text-sm uppercase"><?php echo esc_html( $attributes['quoteAuthor'] ?? '' ); ?></p>
							<p class="text-slate-400 text-[10px] uppercase font-bold tracking-widest"><?php echo esc_html( $attributes['quoteRole'] ?? '' ); ?></p>
						</div>
					<?php endif; ?>
				</div>
				<div class="w-full lg:w-8/12">
					<div class="bricareau-form bg-white p-6 md:p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_22px_70px_4px_rgba(0,0,0,0.08)] border border-slate-50 relative overflow-hidden">
						<div class="absolute top-0 left-0 w-2 h-full bg-[#18448F]"></div>
						<?php echo $form; // phpcs:ignore WordPress.Security.EscapeOutput ?>
					</div>
				</div>
			</div>
		</div>
	</section>
	<?php
elseif ( 'contact' === $layout || 'contact-plain' === $layout ) :
	$plain   = 'contact-plain' === $layout;
	$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => ( $plain ? 'py-24' : 'py-20 lg:pb-0' ) . ' bg-slate-50 relative scroll-mt-32 overflow-x-clip' ) );
	?>
	<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
		<?php if ( ! empty( $attributes['watermark'] ) ) : ?>
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[22rem] font-black text-slate-200/10 select-none pointer-events-none tracking-tighter z-0 uppercase"><?php echo esc_html( $attributes['watermark'] ); ?></div>
		<?php endif; ?>
		<div class="container mx-auto px-6 relative z-40 <?php echo $plain ? '' : 'lg:-mt-32'; ?>">
			<div class="flex flex-col-reverse lg:flex-row items-start lg:items-stretch gap-16 lg:gap-20">
				<div class="lg:w-1/3 w-full flex flex-col justify-end space-y-6 <?php echo $plain ? '' : 'lg:pb-32'; ?>">
					<?php foreach ( $items as $item ) : ?>
						<div class="flex flex-col bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-sm border border-slate-100 w-full group hover:shadow-xl transition-all duration-500">
							<div class="flex items-center gap-4">
								<span class="w-12 h-12 shrink-0 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 group-hover:rotate-3 transition-all"><?php echo bricareau_icon( $item['icon'] ?? '', 'w-6 h-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
								<div class="text-left">
									<h4 class="font-bold text-slate-900 text-sm tracking-tight"><?php echo esc_html( $item['title'] ?? '' ); ?></h4>
									<p class="text-lg font-bold leading-none text-blue-600"><?php echo esc_html( $item['value'] ?? '' ); ?></p>
									<p class="text-[10px] uppercase font-black tracking-widest text-slate-400 mt-1 opacity-60"><?php echo esc_html( $item['sub'] ?? '' ); ?></p>
								</div>
							</div>
						</div>
					<?php endforeach; ?>
					<?php if ( ! empty( $attributes['panelTitle'] ) ) : ?>
						<div class="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-200">
							<h4 class="font-bold text-lg mb-2"><?php echo esc_html( $attributes['panelTitle'] ); ?></h4>
							<p class="text-white/80 text-sm font-light mb-6"><?php echo esc_html( $attributes['panelText'] ?? '' ); ?></p>
							<?php if ( ! empty( $attributes['panelButtonText'] ) ) : ?>
								<a href="<?php echo bricareau_url( $attributes['panelButtonUrl'] ?? '' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="w-full inline-flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-blue-600 h-12 font-bold text-sm transition-colors"><?php echo bricareau_icon( 'phone', 'w-4 h-4 mr-2' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><?php echo esc_html( $attributes['panelButtonText'] ); ?></a>
							<?php endif; ?>
						</div>
					<?php endif; ?>
				</div>
				<div class="lg:w-2/3 w-full <?php echo $plain ? '' : 'lg:pb-32'; ?>">
					<div class="bricareau-form bg-white p-8 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
						<?php if ( ! empty( $attributes['title'] ) ) : ?>
							<div class="mb-10 border-b border-slate-100 pb-6">
								<h3 class="text-2xl font-bold text-slate-900"><?php echo esc_html( $attributes['title'] ); ?></h3>
								<p class="text-slate-500 font-light mt-1"><?php echo esc_html( $attributes['intro'] ?? '' ); ?></p>
							</div>
						<?php endif; ?>
						<?php echo $form; // phpcs:ignore WordPress.Security.EscapeOutput ?>
					</div>
				</div>
			</div>
		</div>
	</section>
	<?php
else :
	$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'py-24 bg-white border-t border-gray-100 scroll-mt-24 overflow-hidden' ) );
	?>
	<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
		<div class="container mx-auto px-4">
			<?php echo bricareau_section_header( $attributes, array( 'class' => 'mb-16' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			<div class="max-w-3xl mx-auto w-full">
				<div class="bricareau-form bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-2xl">
					<?php echo $form; // phpcs:ignore WordPress.Security.EscapeOutput ?>
				</div>
			</div>
		</div>
	</section>
	<?php
endif;
