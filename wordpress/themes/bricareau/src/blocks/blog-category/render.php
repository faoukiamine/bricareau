<?php
/**
 * Category archive (BlogCategory.tsx): hero and a grid with a "load more" button.
 *
 * @var array $attributes
 */

$term = get_queried_object();
if ( ! $term instanceof WP_Term ) {
	echo '<p class="p-8 text-center text-slate-500">' . esc_html__( 'Les articles de la catégorie s’afficheront ici.', 'bricareau' ) . '</p>';
	return;
}

$posts   = get_posts( array( 'category' => $term->term_id, 'numberposts' => -1, 'orderby' => 'menu_order date', 'order' => 'ASC' ) );
$visible = 6;
$wrapper = bricareau_block_wrapper( $attributes );
?>
<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?> data-bricareau-category data-step="<?php echo (int) $visible; ?>">
	<div class="relative lg:h-[600px] flex flex-col lg:items-center overflow-hidden bg-white pt-20 lg:pt-0">
		<div class="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
			<div class="container mx-auto px-6 max-w-7xl pointer-events-auto text-left"><?php echo bricareau_breadcrumbs(); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
		</div>
		<div class="container mx-auto px-6 h-full flex items-center">
			<div class="max-w-3xl py-12 lg:py-0 w-full text-left">
				<h1 class="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic text-slate-900 mb-6 tracking-tight"><?php echo esc_html( $term->name ); ?></h1>
				<div class="w-24 h-1.5 bg-blue-600 rounded-full mb-6"></div>
				<p class="text-slate-600 max-w-3xl"><?php echo esc_html( sprintf( /* translators: %s: category name */ __( 'Découvrez tous nos articles et guides complets concernant %s.', 'bricareau' ), mb_strtolower( $term->name ) ) ); ?></p>
			</div>
		</div>
	</div>
	<div class="bg-slate-50 py-24">
		<div class="container mx-auto px-6">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
				<?php foreach ( $posts as $i => $post ) : ?>
					<a href="<?php echo esc_url( get_permalink( $post ) ); ?>" data-category-card <?php echo $i >= $visible ? 'hidden' : ''; ?> class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col [&[hidden]]:hidden">
						<div class="relative h-64 overflow-hidden">
							<?php echo bricareau_article_image( $post, 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-110', '(min-width: 1024px) 33vw, 50vw' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
							<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
							<?php echo bricareau_read_time_badge( $post ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						</div>
						<div class="p-8 flex flex-col flex-1">
							<h3 class="text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"><?php echo esc_html( get_the_title( $post ) ); ?></h3>
							<p class="text-slate-600 mb-6 flex-1 text-sm font-light leading-[19px]"><?php echo esc_html( get_the_excerpt( $post ) ); ?></p>
							<div class="mt-auto flex justify-end"><span class="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white"><?php echo bricareau_icon( 'arrow-right', 'h-5 w-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span></div>
						</div>
					</a>
				<?php endforeach; ?>
			</div>
			<?php if ( count( $posts ) > $visible ) : ?>
				<div class="flex justify-center"><button type="button" data-category-more class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 h-14 rounded-full shadow-lg hover:shadow-xl transition-all"><?php esc_html_e( 'Charger plus d\'articles', 'bricareau' ); ?></button></div>
			<?php endif; ?>
		</div>
	</div>
</div>
