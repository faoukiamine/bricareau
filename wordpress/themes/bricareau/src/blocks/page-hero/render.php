<?php
/**
 * Page hero (top of the inner pages).
 *
 * Layouts with an image ("fade", "split", "product", "wash") share the light editorial
 * design: text on the left, photo in a rounded frame on the right (above the text on
 * phones and tablets), optional rating card over the photo.
 * "centered": centered text on a soft gradient, no image (contact forms).
 *
 * @var array $attributes
 */

$layout = $attributes['layout'] ?? 'fade';
$trust  = array_filter( $attributes['trustItems'] ?? array(), 'is_array' );
$accent = bricareau_accent_class( $attributes['accentStyle'] ?? 'green' ) . ' font-bold';
$badge  = '';
if ( ! empty( $attributes['label'] ) ) {
	$badge = empty( $attributes['liveLabel'] ) ? bricareau_label( $attributes['label'], $attributes['labelStyle'] ?? 'pill-soft' ) : bricareau_live_badge( $attributes['label'] );
}

if ( 'centered' === $layout ) :
	// Always at least the visible screen height; heroHeight is a minimum on desktop.
	$heights = array(
		'600' => 'lg:min-h-[max(100svh,600px)]',
		'700' => 'lg:min-h-[max(100svh,700px)]',
		'800' => 'lg:min-h-[max(100svh,800px)]',
		'850' => 'lg:min-h-[max(100svh,850px)]',
	);
	$height  = $heights[ $attributes['heroHeight'] ?? '800' ] ?? $heights['800'];
	$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'relative min-h-svh ' . $height . ' pt-24 pb-12 ' . ( '850' === ( $attributes['heroHeight'] ?? '' ) ? 'lg:pt-32 lg:pb-0' : 'lg:py-0' ) . ' flex flex-col justify-center lg:items-center overflow-hidden bg-gradient-to-br from-[#18448F]/10 via-white to-[#8CC63F]/10' ) );
	?>
	<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
		<?php if ( ! empty( $attributes['breadcrumbs'] ) ) : ?>
			<div class="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
				<div class="container mx-auto px-4 lg:px-6 pointer-events-auto"><?php echo bricareau_breadcrumbs(); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
			</div>
		<?php endif; ?>
		<div class="container relative z-20 mx-auto px-4 flex items-center">
			<div class="max-w-3xl mx-auto text-center py-12 lg:py-0 w-full space-y-6">
				<?php if ( $badge ) : ?>
					<div class="flex justify-center"><?php echo $badge; // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
				<?php endif; ?>
				<h1 class="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic text-[#18448F] mb-6 tracking-tight"><?php echo bricareau_format_title( $attributes['title'] ?? '', bricareau_accent_class( $attributes['accentStyle'] ?? 'green' ) . ' font-bold not-italic drop-shadow-lg', 'none' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h1>
				<?php if ( ! empty( $attributes['text'] ) ) : ?>
					<p class="text-slate-500 font-light text-center max-w-xl mx-auto"><?php echo esc_html( $attributes['text'] ); ?></p>
				<?php endif; ?>
				<?php if ( ! empty( $attributes['rating'] ) ) : ?>
					<div class="flex flex-wrap items-center justify-center gap-2 text-slate-500 text-sm font-light">
						<span class="flex"><?php echo str_repeat( bricareau_icon( 'star', 'w-6 h-6 fill-yellow-400 text-yellow-400' ), 5 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
						<span><?php echo esc_html( $attributes['rating'] ); ?></span>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</section>
	<?php
	return;
endif;

$image     = $attributes['image'] ?? array();
$has_image = ! empty( $image['id'] ) || ! empty( $image['url'] );
$cta_url   = (string) ( $attributes['ctaUrl'] ?? '' );
$buttons   = 'h-[3.25rem] px-5 sm:px-8 text-[11px] tracking-[0.06em] sm:tracking-[0.1em]';
$wrapper   = bricareau_block_wrapper( $attributes, array( 'class' => 'relative bg-white overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-20 border-b border-slate-200' ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-4 sm:px-6 grid gap-10 lg:gap-16 items-center <?php echo $has_image ? 'lg:grid-cols-2' : ''; ?>">
		<?php if ( $has_image ) : ?>
			<div class="relative order-first lg:order-last">
				<div class="relative overflow-hidden rounded-3xl lg:rounded-[2rem] h-[36svh] min-h-[240px] max-h-[440px] lg:h-[min(72svh,640px)] lg:min-h-[480px] lg:max-h-none bg-slate-100">
					<?php echo bricareau_image( $image, 'absolute inset-0 w-full h-full object-cover object-center', array( 'loading' => 'eager', 'fetchpriority' => 'high', 'sizes' => '(min-width: 1024px) 50vw, 100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				</div>
				<?php if ( ! empty( $attributes['rating'] ) ) : ?>
					<div class="absolute left-4 -bottom-6 lg:-left-7 lg:bottom-9 max-w-[85%] lg:max-w-xs bg-white rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.14)] px-4 py-3 lg:px-5 lg:py-4 flex items-center gap-3">
						<span class="flex shrink-0"><?php echo str_repeat( bricareau_icon( 'star', 'w-3.5 h-3.5 fill-amber-400 text-amber-400' ), 5 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
						<span class="text-xs lg:text-sm font-semibold text-[#18448F] leading-snug"><?php echo esc_html( $attributes['rating'] ); ?></span>
					</div>
				<?php endif; ?>
			</div>
		<?php endif; ?>

		<div class="<?php echo $has_image ? ( empty( $attributes['rating'] ) ? '' : 'pt-4 lg:pt-0' ) : 'max-w-3xl'; ?>">
			<?php if ( ! empty( $attributes['breadcrumbs'] ) ) : ?>
				<?php echo bricareau_breadcrumbs( 'mb-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			<?php endif; ?>
			<?php if ( $badge ) : ?>
				<div class="mb-5 lg:mb-6"><?php echo $badge; // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
			<?php endif; ?>
			<h1 class="text-[30px] leading-[36px] sm:text-[40px] sm:leading-[46px] lg:text-[42px] lg:leading-[50px] xl:text-[48px] xl:leading-[56px] font-sans font-bold text-[#18448F] tracking-tight mb-4 lg:mb-6">
				<?php echo bricareau_format_title( $attributes['title'] ?? '', $accent, 'br' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			</h1>
			<?php if ( ! empty( $attributes['text'] ) ) : ?>
				<p class="text-slate-600 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-xl"><?php echo esc_html( $attributes['text'] ); ?></p>
			<?php endif; ?>

			<?php if ( ! empty( $attributes['ctaText'] ) || ! empty( $attributes['phoneButton'] ) ) : ?>
				<div class="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mt-6 lg:mt-8">
					<?php
					echo bricareau_button( $attributes['ctaText'] ?? '', $cta_url, array( 'icon_before' => str_starts_with( $cta_url, 'tel:' ) ? 'phone' : '', 'container_class' => 'w-full sm:w-auto', 'class' => $buttons ) ); // phpcs:ignore WordPress.Security.EscapeOutput
					if ( ! empty( $attributes['phoneButton'] ) ) {
						echo bricareau_phone_button( array( 'variant' => 'outline', 'text' => BRICAREAU_PHONE_DISPLAY, 'container_class' => 'w-full sm:w-auto', 'class' => $buttons ) ); // phpcs:ignore WordPress.Security.EscapeOutput
					}
					?>
				</div>
			<?php endif; ?>

			<?php if ( ! empty( $attributes['rating'] ) && ! $has_image ) : ?>
				<div class="flex flex-wrap items-center gap-2 mt-6 text-slate-500 text-sm font-light">
					<span class="flex"><?php echo str_repeat( bricareau_icon( 'star', 'w-3.5 h-3.5 fill-amber-400 text-amber-400' ), 5 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
					<span><?php echo esc_html( $attributes['rating'] ); ?></span>
				</div>
			<?php endif; ?>

			<?php if ( $trust ) : ?>
				<div class="pt-8 grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl">
					<?php foreach ( $trust as $item ) : ?>
						<div class="bg-slate-50 p-2 sm:p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-4">
							<span class="w-10 h-10 bg-[#18448F]/10 rounded-full flex items-center justify-center text-[#18448F] shrink-0"><?php echo bricareau_icon( $item['icon'] ?? '', 'w-5 h-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
							<span class="min-w-0">
								<span class="block text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1"><?php echo esc_html( $item['label'] ?? '' ); ?></span>
								<span class="block text-[11px] sm:text-sm font-bold text-[#18448F] leading-tight"><?php echo esc_html( $item['value'] ?? '' ); ?></span>
							</span>
						</div>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
		</div>
	</div>
</section>
