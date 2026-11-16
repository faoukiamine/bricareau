<?php
/**
 * Articles by category with filters (Blog.tsx). Each category shows three articles,
 * first as a large card on every other row, and links to its category page.
 *
 * @var array $attributes
 */

$terms = get_categories( array( 'hide_empty' => true, 'exclude' => (int) get_option( 'default_category' ) ) );
$seen  = array();
$rows  = array();
foreach ( $terms as $term ) {
	$posts = array_values(
		array_filter(
			get_posts( array( 'category' => $term->term_id, 'numberposts' => -1, 'orderby' => 'menu_order date', 'order' => 'ASC' ) ),
			fn( $post ) => ! isset( $seen[ $post->ID ] )
		)
	);
	foreach ( $posts as $post ) {
		$seen[ $post->ID ] = true;
	}
	if ( $posts ) {
		$rows[] = array( 'term' => $term, 'posts' => $posts );
	}
}
$total   = count( $seen );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'pt-20 pb-24 bg-white min-h-[50vh]' ) );
$link    = 'group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col';
$zoom    = 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105';
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?> data-bricareau-blog>
	<div class="container mx-auto px-6 max-w-5xl">
		<p class="font-bold text-slate-900 mb-8 border-b border-slate-900 pb-4"><span data-blog-count><?php echo (int) $total; ?></span> <?php esc_html_e( 'articles trouvés', 'bricareau' ); ?></p>

		<details class="mb-12 group/filters">
			<summary class="flex items-center gap-3 text-sm font-medium py-2 text-slate-600 w-fit cursor-pointer list-none [&::-webkit-details-marker]:hidden">
				<?php echo bricareau_icon( 'chevron-down', 'w-4 h-4 transition-transform group-open/filters:rotate-180' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<span class="flex items-center gap-2"><?php echo bricareau_icon( 'sliders-horizontal', 'w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?> <?php esc_html_e( 'Filtres', 'bricareau' ); ?></span>
			</summary>
			<div class="pt-6 pb-6 border-b border-slate-100">
				<div class="flex flex-wrap gap-x-8 gap-y-4">
					<?php foreach ( $rows as $row ) : ?>
						<label class="flex items-center gap-3 cursor-pointer">
							<input type="checkbox" value="<?php echo esc_attr( $row['term']->slug ); ?>" data-blog-filter class="w-5 h-5 accent-[#18448F]">
							<span class="text-[15px] text-slate-700 font-medium"><?php echo esc_html( $row['term']->name ); ?></span>
						</label>
					<?php endforeach; ?>
				</div>
				<button type="button" data-blog-reset hidden class="mt-6 text-[#18448F] text-sm font-medium hover:underline underline-offset-4"><?php esc_html_e( 'Réinitialiser', 'bricareau' ); ?></button>
			</div>
		</details>

		<div class="space-y-24">
			<?php
			foreach ( $rows as $index => $row ) :
				$shown     = array_slice( $row['posts'], 0 === $index ? 1 : 0, 3 );
				$staggered = 0 === $index % 2 && count( $shown ) >= 3;
				?>
				<div id="<?php echo esc_attr( $row['term']->slug ); ?>" data-blog-section="<?php echo esc_attr( $row['term']->slug ); ?>" data-blog-total="<?php echo count( get_posts( array( 'category' => $row['term']->term_id, 'numberposts' => -1, 'fields' => 'ids' ) ) ); ?>" class="pt-8">
					<div class="text-left mb-12">
						<div class="flex items-center justify-between mb-8">
							<h2 class="text-slate-900"><span class="font-normal leading-[1.1] block"><?php echo esc_html( $row['term']->name ); ?></span></h2>
							<a href="<?php echo esc_url( get_category_link( $row['term'] ) ); ?>" class="text-xs font-black text-[#18448F] uppercase tracking-widest flex items-center gap-2 hover:text-[#8CC63F] transition-colors shrink-0"><?php esc_html_e( 'Tout voir', 'bricareau' ); ?> <?php echo bricareau_icon( 'chevron-right', 'w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></a>
						</div>
						<div class="w-20 h-1 bg-[#18448F]"></div>
					</div>

					<?php if ( $staggered ) : ?>
						<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
							<div class="lg:col-span-8">
								<a href="<?php echo esc_url( get_permalink( $shown[0] ) ); ?>" class="<?php echo esc_attr( $link ); ?> h-full">
									<div class="relative aspect-[16/9] overflow-hidden"><?php echo bricareau_article_image( $shown[0], $zoom, '(min-width: 1024px) 660px, 100vw' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><?php echo bricareau_read_time_badge( $shown[0] ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
									<div class="p-8 flex flex-col flex-1">
										<h3 class="md:text-3xl text-slate-900 mb-4 group-hover:text-[#18448F] transition-colors font-medium"><?php echo esc_html( get_the_title( $shown[0] ) ); ?></h3>
										<p class="text-slate-600 text-base font-light mb-6 flex-1"><?php echo esc_html( get_the_excerpt( $shown[0] ) ); ?></p>
										<div class="flex justify-end"><span class="w-10 h-10 rounded-full border border-[#18448F] flex items-center justify-center text-[#18448F] transition-all group-hover:bg-[#18448F] group-hover:text-white"><?php echo bricareau_icon( 'arrow-right', 'h-5 w-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span></div>
									</div>
								</a>
							</div>
							<div class="lg:col-span-4 flex flex-col gap-8">
								<?php foreach ( array_slice( $shown, 1, 2 ) as $post ) : ?>
									<a href="<?php echo esc_url( get_permalink( $post ) ); ?>" class="<?php echo esc_attr( $link ); ?> flex-1">
										<div class="relative aspect-[16/10] overflow-hidden"><?php echo bricareau_article_image( $post, $zoom, '(min-width: 1024px) 320px, 100vw' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
										<div class="p-6">
											<div class="flex items-center gap-2 text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-widest"><?php echo bricareau_icon( 'clock', 'w-3.5 h-3.5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><span><?php echo esc_html( bricareau_read_time( $post ) ); ?></span></div>
											<h3 class="text-slate-900 mb-2 group-hover:text-[#18448F] transition-colors font-medium text-lg leading-snug"><?php echo esc_html( get_the_title( $post ) ); ?></h3>
										</div>
									</a>
								<?php endforeach; ?>
							</div>
						</div>
					<?php else : ?>
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<?php foreach ( $shown as $post ) : ?>
								<a href="<?php echo esc_url( get_permalink( $post ) ); ?>" class="<?php echo esc_attr( $link ); ?>">
									<div class="relative aspect-[16/10] overflow-hidden"><?php echo bricareau_article_image( $post, $zoom, '(min-width: 1024px) 320px, 50vw' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
									<div class="p-6">
										<div class="flex items-center gap-2 text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-widest"><?php echo bricareau_icon( 'clock', 'w-3.5 h-3.5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><span><?php echo esc_html( bricareau_read_time( $post ) ); ?></span></div>
										<h3 class="text-slate-900 mb-3 group-hover:text-[#18448F] transition-colors font-medium text-lg leading-snug"><?php echo esc_html( get_the_title( $post ) ); ?></h3>
										<p class="text-slate-600 text-sm font-light leading-[19px] line-clamp-2"><?php echo esc_html( get_the_excerpt( $post ) ); ?></p>
									</div>
								</a>
							<?php endforeach; ?>
						</div>
					<?php endif; ?>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
