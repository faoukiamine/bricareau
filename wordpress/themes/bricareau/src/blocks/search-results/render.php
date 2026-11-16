<?php
/**
 * Search results (Search.tsx): pages and articles matching the search.
 *
 * @var array $attributes
 */

global $wp_query;
$query   = get_search_query();
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'bg-gray-50 pt-32 pb-24' ) );
?>
<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-6 max-w-5xl">
		<div class="mb-12">
			<div class="flex items-center gap-2 text-sm text-gray-500 mb-4"><a href="<?php echo esc_url( bricareau_home_url() ); ?>" class="hover:text-blue-600"><?php esc_html_e( 'Accueil', 'bricareau' ); ?></a><?php echo bricareau_icon( 'chevron-right', 'h-4 w-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><span><?php esc_html_e( 'Recherche', 'bricareau' ); ?></span></div>
			<h1 class="text-3xl md:text-5xl font-bold text-[#18448F] mb-4"><?php esc_html_e( 'Résultats de recherche', 'bricareau' ); ?></h1>
			<p class="text-lg text-gray-600"><?php echo esc_html( sprintf( /* translators: 1: number of results, 2: search terms */ _n( '%1$d résultat pour « %2$s »', '%1$d résultats pour « %2$s »', (int) $wp_query->found_posts, 'bricareau' ), (int) $wp_query->found_posts, $query ) ); ?></p>
			<form role="search" method="get" action="<?php echo esc_url( bricareau_home_url() ); ?>" class="mt-6 flex gap-3">
				<label class="sr-only" for="bricareau-search"><?php esc_html_e( 'Rechercher', 'bricareau' ); ?></label>
				<input id="bricareau-search" type="search" name="s" value="<?php echo esc_attr( $query ); ?>" placeholder="<?php esc_attr_e( 'Rechercher', 'bricareau' ); ?>" class="flex-1 h-12 rounded-lg border border-gray-200 px-4 bg-white">
				<button type="submit" class="h-12 w-12 rounded-lg bg-[#18448F] text-white inline-flex items-center justify-center" aria-label="<?php esc_attr_e( 'Rechercher', 'bricareau' ); ?>"><?php echo bricareau_icon( 'search', 'w-5 h-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></button>
			</form>
		</div>
		<?php if ( have_posts() ) : ?>
			<div class="space-y-4">
				<?php
				while ( have_posts() ) :
					the_post();
					?>
					<a href="<?php the_permalink(); ?>" class="block bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group">
						<h2 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors tracking-normal leading-snug"><?php the_title(); ?></h2>
						<p class="text-base text-gray-600 line-clamp-2"><?php echo esc_html( get_post_meta( get_the_ID(), 'bricareau_seo_description', true ) ?: wp_strip_all_tags( get_the_excerpt() ) ); ?></p>
					</a>
				<?php endwhile; ?>
			</div>
			<div class="mt-8 flex justify-center gap-4 text-sm font-medium text-[#18448F]"><?php echo paginate_links( array( 'prev_text' => __( 'Précédent', 'bricareau' ), 'next_text' => __( 'Suivant', 'bricareau' ) ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
		<?php else : ?>
			<div class="text-center py-16 bg-white rounded-3xl border border-gray-100">
				<?php echo bricareau_icon( 'search', 'w-12 h-12 mx-auto mb-4 text-gray-300' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<h3 class="text-slate-900 mb-2"><?php esc_html_e( 'Aucun résultat trouvé', 'bricareau' ); ?></h3>
				<p class="text-base text-gray-600 mb-6"><?php esc_html_e( 'Nous n\'avons rien trouvé correspondant à votre recherche. Essayez avec d\'autres mots-clés ou parcourez nos catégories.', 'bricareau' ); ?></p>
				<div class="flex flex-wrap gap-4 justify-center">
					<a href="<?php echo bricareau_url( '/blog' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="inline-flex items-center h-12 px-6 rounded-full bg-[#18448F] text-white font-bold text-sm"><?php esc_html_e( 'Voir le blog', 'bricareau' ); ?></a>
					<a href="<?php echo bricareau_url( '/contact' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="inline-flex items-center h-12 px-6 rounded-full border border-[#18448F] text-[#18448F] font-bold text-sm"><?php esc_html_e( 'Nous contacter', 'bricareau' ); ?></a>
				</div>
			</div>
		<?php endif; ?>
	</div>
</div>
