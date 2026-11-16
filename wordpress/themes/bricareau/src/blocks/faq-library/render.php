<?php
/**
 * Searchable FAQ (FAQ.tsx): filters, search and one grid per category, five questions
 * shown until "show more" or a search. Questions are managed in the "FAQ" admin menu.
 *
 * @var array $attributes
 */

$groups  = bricareau_get_faqs();
$total   = array_sum( array_map( fn( $group ) => count( $group['items'] ), $groups ) );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'pt-20 pb-24 bg-white min-h-[50vh]' ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?> data-bricareau-faq-library data-labels="<?php echo esc_attr( wp_json_encode( array( 'more' => __( 'Afficher plus de questions', 'bricareau' ), 'less' => __( 'Afficher moins de questions', 'bricareau' ), 'readMore' => __( 'Lire la suite', 'bricareau' ), 'readLess' => __( 'Lire moins', 'bricareau' ) ) ) ); ?>">
	<div class="container mx-auto px-6 max-w-5xl">
		<div class="relative mb-4">
			<label class="sr-only" for="bricareau-faq-search"><?php esc_html_e( 'Rechercher une question', 'bricareau' ); ?></label>
			<input id="bricareau-faq-search" type="search" data-faq-search placeholder="<?php esc_attr_e( 'Rechercher une question', 'bricareau' ); ?>" class="w-full text-2xl md:text-4xl text-slate-900 border-b-2 border-slate-300 pb-4 pt-2 pr-16 outline-none focus:border-[#18448F] transition-colors font-light bg-transparent">
			<span class="absolute right-0 top-2 bottom-4 w-12 md:w-16 flex items-center justify-center bg-[#18448F] text-white pointer-events-none"><?php echo bricareau_icon( 'search', 'w-5 h-5 md:w-6 md:h-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
		</div>
		<p class="font-bold text-slate-900 mb-8 border-b border-slate-900 pb-4"><span data-faq-count><?php echo (int) $total; ?></span> <?php esc_html_e( 'résultats trouvés', 'bricareau' ); ?></p>

		<details class="mb-12 group/filters">
			<summary class="flex items-center gap-3 text-sm font-medium py-2 text-slate-600 w-fit cursor-pointer list-none [&::-webkit-details-marker]:hidden">
				<?php echo bricareau_icon( 'chevron-down', 'w-4 h-4 transition-transform group-open/filters:rotate-180' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<span class="flex items-center gap-2"><?php echo bricareau_icon( 'sliders-horizontal', 'w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?> <?php esc_html_e( 'Filtres', 'bricareau' ); ?></span>
			</summary>
			<div class="pt-6 pb-6 border-b border-slate-100">
				<div class="flex flex-wrap gap-x-8 gap-y-4">
					<?php foreach ( $groups as $group ) : ?>
						<label class="flex items-center gap-3 cursor-pointer">
							<input type="checkbox" value="<?php echo esc_attr( $group['id'] ); ?>" data-faq-filter class="w-5 h-5 accent-[#18448F]">
							<span class="text-[15px] text-slate-700 font-medium"><?php echo esc_html( $group['title'] ); ?></span>
						</label>
					<?php endforeach; ?>
				</div>
				<button type="button" data-faq-reset hidden class="mt-6 text-[#18448F] text-sm font-medium hover:underline underline-offset-4"><?php esc_html_e( 'Réinitialiser', 'bricareau' ); ?></button>
			</div>
		</details>

		<p data-faq-empty hidden class="text-center py-24 text-slate-500 bg-slate-50 rounded-3xl border border-dashed border-slate-200"><?php esc_html_e( 'Aucune question ne correspond à votre recherche.', 'bricareau' ); ?></p>

		<div class="space-y-24">
			<?php foreach ( $groups as $group ) : ?>
				<div id="<?php echo esc_attr( $group['id'] ); ?>" data-faq-group="<?php echo esc_attr( $group['id'] ); ?>" class="scroll-mt-24">
					<div class="text-left mb-12">
						<h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4"><?php echo esc_html( $group['title'] ); ?></h2>
						<div class="w-20 h-1 bg-[#18448F]"></div>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<?php foreach ( $group['items'] as $i => $item ) : ?>
							<div data-faq-card <?php echo $i >= 5 ? 'hidden' : ''; ?> data-extra="<?php echo $i >= 5 ? '1' : '0'; ?>" class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col [&[hidden]]:hidden">
								<h3 class="text-lg font-bold text-slate-900 mb-3 leading-snug"><?php echo esc_html( $item['q'] ); ?></h3>
								<div data-faq-answer class="text-base text-slate-700 font-light leading-relaxed mb-6 flex-grow <?php echo mb_strlen( $item['a'] ) > 180 ? 'line-clamp-4' : ''; ?>"><?php echo esc_html( $item['a'] ); ?></div>
								<?php if ( mb_strlen( $item['a'] ) > 180 ) : ?>
									<button type="button" data-faq-expand class="text-[#18448F] text-[15px] font-medium hover:underline self-start mt-auto underline-offset-4"><?php esc_html_e( 'Lire la suite', 'bricareau' ); ?></button>
								<?php endif; ?>
							</div>
						<?php endforeach; ?>
					</div>
					<?php if ( count( $group['items'] ) > 5 ) : ?>
						<div class="mt-8"><button type="button" data-faq-more class="relative inline-flex items-center justify-center h-[3.25rem] px-8 bg-[#18448F] text-white rounded-[2rem] text-[11px] font-black uppercase tracking-[0.1em]"><?php esc_html_e( 'Afficher plus de questions', 'bricareau' ); ?></button></div>
					<?php endif; ?>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
