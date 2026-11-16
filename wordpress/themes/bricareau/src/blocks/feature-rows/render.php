<?php
/**
 * Section header + alternating image/text rows.
 *
 * Variants: "numbered" (01. 02. …, check-list bullets), "icon" (round icon,
 * dot bullets), "values" (large light title, dot bullets).
 *
 * @var array $attributes
 */

$variant    = $attributes['variant'] ?? 'numbered';
$background = $attributes['background'] ?? 'light';
$rows       = array_values( array_filter( $attributes['rows'] ?? array(), 'is_array' ) );
$first_left = 'left' === ( $attributes['firstImageSide'] ?? 'right' );

$backgrounds = array(
	'light' => 'py-32 bg-slate-50 relative overflow-hidden',
	'white' => 'py-32 bg-white relative overflow-hidden',
	'glow'  => 'py-32 bg-white relative overflow-hidden border-t border-slate-100',
);
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => $backgrounds[ $background ] ?? $backgrounds['light'] ) );

$colors = array(
	'navy'  => array( 'dot' => 'bg-[#18448F]', 'icon_bg' => 'bg-blue-50', 'icon' => 'text-blue-600', 'overlay' => 'bg-[#18448F]/10', 'overlay_strong' => 'bg-[#18448F]/20', 'accent' => 'font-bold text-[#18448F]' ),
	'green' => array( 'dot' => 'bg-[#8CC63F]', 'icon_bg' => 'bg-[#8CC63F]/10', 'icon' => 'text-[#8CC63F]', 'overlay' => 'bg-[#8CC63F]/10', 'overlay_strong' => 'bg-[#8CC63F]/20', 'accent' => 'font-bold text-[#8CC63F]' ),
);

// Bento layout for up to 6 gallery images in a 3×3 grid.
$bento = array( 'col-span-2 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-1', 'col-span-1 row-span-1', 'col-span-1 row-span-1', 'col-span-1 row-span-1' );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<?php if ( 'glow' === $background ) : ?>
		<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none"></div>
	<?php endif; ?>

	<div class="container mx-auto px-6 relative z-10">
		<?php echo bricareau_section_header( $attributes, array( 'class' => 'icon' === $variant ? 'mb-32' : 'mb-24' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
	</div>

	<div class="max-w-7xl mx-auto relative z-10 <?php echo 'icon' === $variant ? 'space-y-32 lg:space-y-40' : 'space-y-32'; ?>">
		<?php foreach ( $rows as $i => $row ) : ?>
			<?php
			$color       = $colors[ $row['color'] ?? 'navy' ] ?? $colors['navy'];
			$image_left  = ( 0 === $i % 2 ) === $first_left;
			$gallery     = array_slice( array_filter( $row['gallery'] ?? array(), 'is_array' ), 0, 6 );
			$bullets     = bricareau_lines( $row['bullets'] ?? '' );
			$row_classes = 'flex items-center px-6 ' . ( 'icon' === $variant ? 'gap-8 lg:gap-24 flex-col-reverse ' : 'gap-16 flex-col ' ) . ( $image_left ? 'lg:flex-row-reverse' : 'lg:flex-row' );
			?>
			<div class="<?php echo esc_attr( $row_classes ); ?>">
				<div class="lg:w-1/2 w-full <?php echo 'numbered' === $variant ? 'space-y-6' : 'space-y-8'; ?>">
					<?php if ( 'numbered' === $variant ) : ?>
						<div class="text-5xl md:text-6xl font-light text-[#18448F]/20 mb-2"><?php echo esc_html( sprintf( '%02d.', $i + 1 ) ); ?></div>
						<div class="flex flex-col gap-1">
							<h3 class="text-2xl lg:text-3xl font-bold text-[#18448F] leading-tight"><?php echo bricareau_format_title( $row['title'] ?? '', 'text-[#8CC63F]', 'br' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h3>
							<?php if ( ! empty( $row['subtitle'] ) ) : ?>
								<p class="text-[#18448F] font-light italic text-xl"><?php echo esc_html( $row['subtitle'] ); ?></p>
							<?php endif; ?>
						</div>
					<?php elseif ( 'icon' === $variant ) : ?>
						<div class="flex items-center gap-6">
							<?php if ( ! empty( $row['icon'] ) ) : ?>
								<div class="w-16 h-16 rounded-full flex items-center justify-center shrink-0 <?php echo esc_attr( $color['icon_bg'] ); ?>">
									<?php echo bricareau_icon( $row['icon'], 'w-8 h-8 ' . $color['icon'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								</div>
							<?php endif; ?>
							<h3 class="text-3xl font-medium tracking-tight text-slate-900"><?php echo bricareau_format_title( $row['title'] ?? '', 'text-[#8CC63F]', 'br' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h3>
						</div>
					<?php else : ?>
						<h3 class="text-3xl lg:text-5xl font-light text-slate-900 leading-tight"><?php echo bricareau_format_title( $row['title'] ?? '', $color['accent'], 'br' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></h3>
					<?php endif; ?>

					<?php foreach ( bricareau_paragraphs( $row['text'] ?? '', 'text-slate-900 font-medium' ) as $paragraph ) : ?>
						<p class="text-slate-500 text-lg leading-relaxed font-light"><?php echo $paragraph; // phpcs:ignore WordPress.Security.EscapeOutput ?></p>
					<?php endforeach; ?>

					<?php if ( $bullets && 'numbered' === $variant ) : ?>
						<ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
							<?php foreach ( $bullets as $bullet ) : ?>
								<li class="flex items-center gap-3">
									<?php echo bricareau_icon( 'circle-check', 'w-5 h-5 text-[#8CC63F] shrink-0' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
									<span class="text-slate-700 font-medium"><?php echo bricareau_inline( $bullet, 'text-[#8CC63F]', 'font-bold' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
								</li>
							<?php endforeach; ?>
						</ul>
					<?php elseif ( $bullets ) : ?>
						<ul class="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
							<?php foreach ( $bullets as $bullet ) : ?>
								<li class="flex items-start gap-4">
									<span class="rounded-full shrink-0 <?php echo 'values' === $variant ? 'w-2 h-2 mt-2' : 'w-1.5 h-1.5 mt-3'; ?> <?php echo esc_attr( $color['dot'] ); ?>"></span>
									<span><?php echo bricareau_inline( $bullet, 'text-[#8CC63F]', 'text-slate-900 font-medium' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
								</li>
							<?php endforeach; ?>
						</ul>
					<?php endif; ?>
				</div>

				<?php if ( $gallery ) : ?>
					<div class="lg:w-1/2 w-full aspect-square md:aspect-video lg:aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl">
						<div class="w-full h-full grid grid-cols-3 grid-rows-3 gap-2">
							<?php foreach ( $gallery as $g => $image ) : ?>
								<div class="relative overflow-hidden rounded-xl group/item shadow-sm hover:shadow-md transition-shadow <?php echo esc_attr( $bento[ $g ] ); ?>">
									<div class="absolute inset-0 bg-[#18448F]/20 mix-blend-multiply z-10 group-hover/item:opacity-0 transition-opacity duration-500"></div>
									<?php echo bricareau_image( $image, 'w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700', array( 'sizes' => '(min-width: 1024px) 25vw, 50vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
								</div>
							<?php endforeach; ?>
						</div>
					</div>
				<?php elseif ( 'icon' === $variant ) : ?>
					<div class="lg:w-1/2 w-full lg:min-h-[400px] relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
						<?php echo bricareau_image( $row['image'] ?? array(), 'absolute inset-0 w-full h-full object-cover', array( 'sizes' => '(min-width: 1024px) 50vw, 100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					</div>
				<?php else : ?>
					<div class="lg:w-1/2 w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl group">
						<div class="absolute inset-0 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700 <?php echo esc_attr( 'values' === $variant ? $color['overlay_strong'] : $color['overlay'] ); ?>"></div>
						<?php echo bricareau_image( $row['image'] ?? array(), 'absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000', array( 'sizes' => '(min-width: 1024px) 50vw, 100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					</div>
				<?php endif; ?>
			</div>
		<?php endforeach; ?>
	</div>
</section>
