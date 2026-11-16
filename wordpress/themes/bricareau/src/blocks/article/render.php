<?php
/**
 * Single article (BlogLayout.tsx): hero, post content, table of contents built
 * from the H2s, call to action, share links and recommended articles.
 *
 * @var array $attributes
 */

$post = get_post();
if ( ! $post || 'post' !== $post->post_type ) {
	echo '<p class="p-8 text-center text-slate-500">' . esc_html__( 'L’article s’affichera ici.', 'bricareau' ) . '</p>';
	return;
}

$content = apply_filters( 'the_content', $post->post_content );
$toc     = bricareau_article_toc( $content );
$title   = get_the_title( $post );
$hero    = (int) get_post_meta( $post->ID, 'bricareau_hero_image', true ) ?: get_post_thumbnail_id( $post );
$image   = array( 'id' => $hero, 'alt' => $title );
$url     = rawurlencode( get_permalink( $post ) );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'bg-[#f5f5f5] flex flex-col' ) );
$shares  = array(
	array( 'https://www.facebook.com/sharer/sharer.php?u=' . $url, 'bg-[#1877F2]', 'facebook', 'Facebook' ),
	array( 'https://twitter.com/intent/tweet?url=' . $url, 'bg-[#1DA1F2]', 'twitter', 'X (Twitter)' ),
	array( 'https://www.linkedin.com/sharing/share-offsite/?url=' . $url, 'bg-[#0A66C2]', 'linkedin', 'LinkedIn' ),
);
?>
<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?> data-bricareau-article>
	<div class="w-full min-h-[450px] lg:h-[700px] relative flex flex-col lg:flex-row overflow-hidden bg-white lg:bg-[#1a3a5c]">
		<div class="absolute right-0 top-0 z-[1] hidden h-full w-3/5 lg:block">
			<?php echo bricareau_image( $image, 'w-full h-full object-cover', array( 'loading' => 'eager', 'fetchpriority' => 'high', 'sizes' => '60vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		</div>
		<div class="absolute inset-0 z-[2] hidden lg:block">
			<svg class="w-full h-full" viewBox="0 0 640 290" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<defs>
					<linearGradient id="gradPanel" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0c2340"/><stop offset="50%" stop-color="#1a3a5c"/><stop offset="100%" stop-color="#2563a0"/></linearGradient>
					<linearGradient id="gradPetal" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1a3a5c"/><stop offset="100%" stop-color="#3b82c4"/></linearGradient>
					<linearGradient id="gradAccent" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#163050"/><stop offset="100%" stop-color="#0c2340"/></linearGradient>
					<linearGradient id="gradCorner" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a3a5c"/><stop offset="100%" stop-color="#3b82c4" stop-opacity="0.4"/></linearGradient>
				</defs>
				<path d="M269.7 85.95C260.8 58.45 254.75 29.7 251.75 0H0v290.5h287.25c-23.65-32.95-37.6-73.35-37.6-117 0-31.4 7.2-61.1 20.05-87.55Z" fill="url(#gradPanel)"/>
				<path d="M269.7 85.95c-12.85 26.45-20.05 56.15-20.05 87.55 0 43.65 13.95 84.05 37.6 117h128.2C347.85 239.45 296.3 168.3 269.7 85.95Z" fill="url(#gradPetal)"/>
				<path d="M349.35 0h-97.6c3 29.7 9.05 58.45 17.95 85.95C287.15 50 315 20.05 349.35 0Z" fill="url(#gradAccent)"/>
				<path d="M640 107.15V0h-88.45c40.9 23.85 72.55 61.8 88.45 107.15Z" fill="url(#gradCorner)" opacity="0.4"/>
				<path d="M640 290.5v-50.65c-6.4 18.2-15.3 35.25-26.35 50.65H640Z" fill="url(#gradCorner)" opacity="0.3"/>
			</svg>
		</div>
		<div class="lg:hidden relative h-[250px] sm:h-[350px] w-full">
			<?php echo bricareau_image( $image, 'w-full h-full object-cover', array( 'loading' => 'eager', 'sizes' => '100vw' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		</div>
		<div class="relative lg:absolute lg:inset-0 z-10 flex items-center bg-white lg:bg-transparent py-12 lg:py-0 lg:pt-24 h-full">
			<div class="container mx-auto px-4 md:px-6 w-full">
				<?php // In the text column, above the title: placed over the hero it would cover long titles. ?>
				<div class="bricareau-breadcrumbs-dark max-w-[30rem]"><?php echo bricareau_breadcrumbs( 'mb-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
				<div class="max-w-xl">
					<h1 class="italic text-slate-900 lg:text-white leading-tight mb-6 tracking-tight"><?php echo esc_html( $title ); ?></h1>
					<div class="flex items-center flex-wrap gap-4 text-[11px] text-slate-400 lg:text-white/50 uppercase tracking-[0.15em]">
						<span><?php echo esc_html( get_the_date( 'F j — Y', $post ) ); ?></span>
						<span class="w-px h-3 bg-slate-200 lg:bg-white/25"></span>
						<span><?php esc_html_e( 'Par Bricareau', 'bricareau' ); ?></span>
						<span class="w-px h-3 bg-slate-200 lg:bg-white/25"></span>
						<span class="flex items-center gap-2"><?php echo bricareau_icon( 'clock', 'w-3.5 h-3.5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><?php echo esc_html( bricareau_read_time( $post ) ); ?></span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container mx-auto px-4 md:px-6 relative z-10">
		<article class="bg-white px-8 py-16 md:px-12 lg:px-16 md:py-24 shadow-sm">
			<div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
				<div class="bricareau-article-body w-full lg:w-3/4 text-[15px] leading-relaxed font-light"><?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
				<?php if ( $toc ) : ?>
					<div class="w-full lg:w-1/4 hidden lg:block">
						<div class="sticky top-24 pt-8 border-t-2 border-black">
							<h4 class="text-black uppercase tracking-[0.1em] mb-6"><?php esc_html_e( 'Dans cet article', 'bricareau' ); ?></h4>
							<ul class="space-y-4 text-sm text-gray-500 font-light">
								<?php foreach ( $toc as $item ) : ?>
									<li><a href="#<?php echo esc_attr( $item['id'] ); ?>" data-toc-link class="transition-colors block leading-tight hover:text-blue-600"><?php echo esc_html( $item['title'] ); ?></a></li>
								<?php endforeach; ?>
							</ul>
						</div>
					</div>
				<?php endif; ?>
			</div>

			<div class="mt-20 bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden flex flex-col items-center text-center">
				<div class="absolute top-0 right-0 p-8 opacity-10"><?php echo bricareau_icon( 'waves', 'w-48 h-48' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
				<div class="absolute bottom-0 left-0 p-8 opacity-10"><?php echo bricareau_icon( 'droplets', 'w-32 h-32' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
				<h3 class="md:text-3xl mb-4 relative z-10 text-white"><?php esc_html_e( 'Prêt à retrouver une eau limpide ?', 'bricareau' ); ?></h3>
				<p class="text-blue-100 mb-8 max-w-2xl relative z-10 text-[15px]"><?php esc_html_e( 'Ne laissez pas l\'eau de mauvaise qualité gâcher votre quotidien. Nos experts sont là pour vous proposer des solutions sur mesure et durables.', 'bricareau' ); ?></p>
				<div class="flex flex-col sm:flex-row gap-4 relative z-10">
					<a href="<?php echo bricareau_url( '/analyses-et-tests-d-eau' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-50 rounded-full px-8 h-12 font-bold shadow-sm"><?php esc_html_e( 'Demander une analyse d\'eau', 'bricareau' ); ?></a>
					<a href="<?php echo esc_url( BRICAREAU_PHONE_HREF ); ?>" class="inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white/10 rounded-full px-8 h-12 font-bold bg-white/10 backdrop-blur-sm"><?php echo bricareau_icon( 'phone', 'w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><?php esc_html_e( 'Appeler au 1-855-264-9328', 'bricareau' ); ?></a>
				</div>
			</div>

			<div class="mt-20 pt-8 border-t border-gray-100 flex items-center justify-end gap-4 text-gray-400">
				<span class="text-[10px] font-bold tracking-[0.15em] uppercase"><?php esc_html_e( 'Partager l\'article', 'bricareau' ); ?></span>
				<?php foreach ( $shares as [ $href, $color, $icon, $label ] ) : ?>
					<a href="<?php echo esc_url( $href ); ?>" target="_blank" rel="noopener" aria-label="<?php echo esc_attr( sprintf( /* translators: %s: social network */ __( 'Partager sur %s', 'bricareau' ), $label ) ); ?>" class="w-8 h-8 rounded-full <?php echo esc_attr( $color ); ?> text-white flex items-center justify-center hover:opacity-90 transition-opacity"><?php echo bricareau_icon( $icon, 'w-3.5 h-3.5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></a>
				<?php endforeach; ?>
			</div>
		</article>

		<div class="mt-8 mb-16 w-full">
			<h3 class="tracking-tight text-black mb-8 px-4"><?php esc_html_e( 'Articles Recommandés', 'bricareau' ); ?></h3>
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 px-4 py-2">
				<?php foreach ( bricareau_related_articles( $post ) as $related ) : ?>
					<a href="<?php echo esc_url( get_permalink( $related ) ); ?>" class="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
						<div class="h-56 overflow-hidden"><?php echo bricareau_article_image( $related, 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-110', '(min-width: 1024px) 33vw, 50vw' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
						<div class="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
							<h4 class="mb-4 group-hover:text-blue-600 transition-colors tracking-tight text-slate-900 mt-2"><?php echo esc_html( get_the_title( $related ) ); ?></h4>
							<div class="mt-auto flex items-center justify-between">
								<span class="w-9 h-9 rounded-full border border-blue-600 flex items-center justify-center text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white"><?php echo bricareau_icon( 'arrow-right', 'h-4 w-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
								<span class="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium"><?php echo bricareau_icon( 'clock', 'w-3 h-3' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><?php echo esc_html( bricareau_read_time( $related ) ); ?></span>
							</div>
						</div>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</div>
