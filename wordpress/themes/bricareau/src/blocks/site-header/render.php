<?php
/**
 * Site header: transparent over the hero, navy once the page scrolls
 * (view.js toggles .is-scrolled on the wrapper; styles use group-[.is-scrolled]/header).
 */

$menu    = bricareau_header_menu();
$wrapper = bricareau_block_wrapper( $attributes,
	array(
		'class'                 => 'group/header',
		'data-bricareau-header' => '',
	)
);

// "HÔTELLERIE ET RESTAURATION" -> "HÔTELLERIE ET" / "RESTAURATION", as on the React site (also " AND " in English).
$card_title = static function ( $title ) {
	if ( ! preg_match( '/^(.+? (?:ET|AND)) (.+)$/u', $title, $parts ) ) {
		return esc_html( $title );
	}
	return '<span class="block">' . esc_html( $parts[1] ) . '</span><span class="block">' . esc_html( $parts[2] ) . '</span>';
};

$panel_id = static fn( $index ) => 'bricareau-megamenu-' . $index;
?>
<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<header class="bricareau-header fixed top-0 z-50 w-full transition-all duration-500 bg-transparent py-3 group-[.is-scrolled]/header:bg-[#18448F] group-[.is-scrolled]/header:shadow-lg group-[.is-scrolled]/header:py-0">
		<div class="container mx-auto px-4 md:px-6">
			<div class="flex h-20 items-center justify-between gap-4">

				<a href="<?php echo esc_url( bricareau_home_url() ); ?>" class="flex items-center flex-shrink-0">
					<img
						src="<?php echo esc_url( BRICAREAU_URI . '/assets/images/logo.webp' ); ?>"
						class="h-10 md:h-12 w-auto object-contain transition-all duration-500 group-[.is-scrolled]/header:brightness-0 group-[.is-scrolled]/header:invert"
						alt="Bricareau Water Specialist"
						width="277" height="144"
					>
				</a>

				<nav class="hidden lg:flex items-center gap-8 flex-1 justify-center" aria-label="<?php esc_attr_e( 'Menu principal', 'bricareau' ); ?>">
					<?php foreach ( $menu as $index => $item ) : ?>
						<div class="relative px-2 py-6" data-menu-item="<?php echo esc_attr( $index ); ?>">
							<button
								type="button"
								class="text-[13px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors text-[#18448F] hover:text-[#18448F]/80 group-[.is-scrolled]/header:text-white group-[.is-scrolled]/header:hover:text-white/80 aria-expanded:opacity-70"
								aria-expanded="false"
								aria-controls="<?php echo esc_attr( $panel_id( $index ) ); ?>"
							>
								<?php echo esc_html( $item['name'] ); ?>
								<?php echo bricareau_icon( 'chevron-down', 'w-4 h-4 transition-transform' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
							</button>
						</div>
					<?php endforeach; ?>
				</nav>

				<div class="hidden lg:flex items-center gap-8">
					<?php echo bricareau_language_switcher( 'text-[#18448F] group-[.is-scrolled]/header:text-white' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					<a href="<?php echo esc_attr( BRICAREAU_PHONE_HREF ); ?>" class="text-[13px] font-bold flex items-center gap-2 group transition-colors text-[#18448F] group-[.is-scrolled]/header:text-white">
						<span class="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-[#18448F]/10 group-hover:bg-[#18448F]/20 group-[.is-scrolled]/header:bg-white/10">
							<?php echo bricareau_icon( 'phone', 'w-4 h-4', array( 'stroke-width' => 2.5 ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						</span>
						<?php echo esc_html( BRICAREAU_PHONE_DISPLAY ); ?>
					</a>

					<div class="flex items-center gap-6">
						<div class="relative inline-block group">
							<div class="absolute inset-0 border rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px] border-[#18448F] group-[.is-scrolled]/header:border-white"></div>
							<a href="<?php echo bricareau_url( '/consultation' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" data-cta class="relative inline-flex items-center justify-center rounded-[2rem] h-12 px-8 font-black uppercase tracking-widest text-[10px] transition-all bg-[#18448F] text-white hover:bg-white hover:text-[#18448F] group-[.is-scrolled]/header:bg-transparent group-[.is-scrolled]/header:border-2 group-[.is-scrolled]/header:border-white group-[.is-scrolled]/header:hover:bg-white group-[.is-scrolled]/header:hover:text-[#18448F]"><?php esc_html_e( 'Contactez-nous', 'bricareau' ); ?></a>
						</div>
						<div class="relative inline-block group">
							<div class="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
							<a href="<?php echo bricareau_url( '/contact-form' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" data-cta class="relative inline-flex items-center justify-center rounded-[2rem] h-12 px-8 font-black uppercase tracking-widest text-[10px] transition-all bg-[#18448F] text-white hover:bg-white hover:text-[#18448F] group-[.is-scrolled]/header:bg-white group-[.is-scrolled]/header:text-[#18448F] group-[.is-scrolled]/header:hover:bg-[#18448F] group-[.is-scrolled]/header:hover:text-white"><?php esc_html_e( 'Demandez un service', 'bricareau' ); ?></a>
						</div>
					</div>
				</div>

				<button type="button" class="lg:hidden p-2 transition-colors text-[#18448F] group-[.is-scrolled]/header:text-white" data-mobile-toggle aria-expanded="false" aria-controls="bricareau-mobile-menu" aria-label="<?php esc_attr_e( 'Menu', 'bricareau' ); ?>">
					<span data-icon-open><?php echo bricareau_icon( 'menu', 'w-7 h-7' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
					<span data-icon-close class="hidden"><?php echo bricareau_icon( 'x', 'w-7 h-7' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
				</button>
			</div>
		</div>

		<?php foreach ( $menu as $index => $item ) : ?>
			<div
				id="<?php echo esc_attr( $panel_id( $index ) ); ?>"
				data-megamenu="<?php echo esc_attr( $index ); ?>"
				class="hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl z-50 animate-in slide-in-from-top-4 duration-300"
			>
				<div class="container mx-auto px-4 md:px-6 py-16 flex gap-12">
					<div class="hidden xl:flex flex-col items-center justify-center w-12 border-r border-gray-100 self-stretch mr-12">
						<div class="whitespace-nowrap -rotate-90 origin-center">
							<span class="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em]"><?php echo esc_html( mb_strtoupper( $item['name'] ) ); ?></span>
						</div>
					</div>

					<?php if ( 'cards' === $item['type'] ) : ?>
						<div class="flex-1 space-y-12" data-cards>
							<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
								<?php foreach ( $item['cards'] as $c => $card ) : ?>
									<a
										href="<?php echo bricareau_url( $card['href'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?>"
										data-card="<?php echo esc_attr( $c ); ?>"
										data-active="<?php echo 0 === $c ? 'true' : 'false'; ?>"
										class="group/card block bg-white shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden border-2 border-transparent data-[active=true]:border-[#18448F] data-[active=true]:shadow-lg"
									>
										<div class="aspect-video overflow-hidden relative">
											<img src="<?php echo esc_url( $card['image'] ); ?>" alt="" loading="lazy" class="w-full h-full object-cover group-hover/card:scale-110 transition-transform [transition-duration:2s]">
											<div class="absolute inset-0 bg-transparent group-hover/card:bg-blue-600/10 transition-colors duration-500"></div>
										</div>
										<div class="py-3 px-5 md:py-3.5 md:px-6 flex items-center justify-between border-t border-gray-50">
											<span class="text-[11px] font-black text-slate-900 uppercase tracking-widest leading-tight"><?php echo $card_title( $card['title'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
											<span class="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 border-gray-200 text-[#18448F] group-hover/card:bg-[#18448F] group-hover/card:text-white group-data-[active=true]/card:bg-[#18448F] group-data-[active=true]/card:text-white group-data-[active=true]/card:border-[#18448F]">
												<?php echo bricareau_icon( 'arrow-right', 'w-5 h-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
											</span>
										</div>
									</a>
								<?php endforeach; ?>
							</div>

							<div class="pt-8 border-t border-gray-100 min-h-[140px] flex items-center">
								<?php foreach ( $item['cards'] as $c => $card ) : ?>
									<div data-card-links="<?php echo esc_attr( $c ); ?>" class="<?php echo 0 === $c ? 'grid' : 'hidden'; ?> grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 w-full animate-in fade-in slide-in-from-bottom-2 duration-500">
										<?php foreach ( $card['links'] as $link ) : ?>
											<a href="<?php echo bricareau_url( $link['href'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="group block space-y-2">
												<span class="flex items-center gap-2">
													<span class="text-[10px] font-black text-slate-900 group-hover:text-[#18448F] transition-colors uppercase tracking-widest"><?php echo esc_html( $link['title'] ); ?></span>
													<?php echo bricareau_icon( 'arrow-right', 'w-3 h-3 text-[#18448F] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
												</span>
												<span class="block text-[11px] text-slate-500 font-medium leading-relaxed"><?php echo esc_html( $link['description'] ); ?></span>
											</a>
										<?php endforeach; ?>
									</div>
								<?php endforeach; ?>
							</div>
						</div>
					<?php else : ?>
						<div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 pr-12">
							<?php foreach ( $item['groups'] as $group ) : ?>
								<div class="space-y-10 border-r last:border-0 border-gray-50">
									<?php foreach ( $group as $link ) : ?>
										<a href="<?php echo bricareau_url( $link['href'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="group block space-y-3 pr-8">
											<span class="flex items-center gap-3">
												<span class="text-sm font-black text-slate-900 group-hover:text-[#18448F] transition-colors uppercase tracking-tight"><?php echo esc_html( $link['title'] ); ?></span>
												<?php echo bricareau_icon( 'arrow-right', 'w-3 h-3 text-[#18448F] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
											</span>
											<span class="block text-[13px] text-slate-500 font-light leading-relaxed max-w-[340px]"><?php echo esc_html( $link['description'] ); ?></span>
										</a>
									<?php endforeach; ?>
								</div>
							<?php endforeach; ?>
						</div>

						<?php if ( ! empty( $item['promo'] ) ) : ?>
							<div class="hidden lg:flex flex-col justify-center w-[450px] rounded-sm p-10 relative overflow-hidden group/promo">
								<div class="absolute inset-0 w-full h-full pointer-events-none group-hover/promo:scale-110 transition-transform duration-1000">
									<img src="<?php echo esc_url( $item['promo']['image'] ); ?>" alt="" loading="lazy" class="w-full h-full object-cover">
									<div class="absolute inset-0 bg-gradient-to-r from-[#18448F]/95 to-[#18448F]/40"></div>
								</div>
								<div class="relative z-10 space-y-6 max-w-[280px]">
									<p class="text-xl font-black text-white leading-tight tracking-tight"><?php echo esc_html( $item['promo']['title'] ); ?></p>
									<p class="text-[13px] text-white/80 font-light leading-relaxed"><?php echo esc_html( $item['promo']['subtitle'] ); ?></p>
									<a href="<?php echo bricareau_url( $item['promo']['link'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-widest pt-4 transition-colors">
										<?php echo esc_html( $item['promo']['cta'] ); ?>
										<span class="w-8 h-8 shrink-0 rounded-full border border-white/30 flex items-center justify-center bg-white/10 group-hover/promo:bg-white group-hover/promo:text-[#18448F] transition-all">
											<?php echo bricareau_icon( 'arrow-right', 'w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
										</span>
									</a>
								</div>
							</div>
						<?php endif; ?>
					<?php endif; ?>
				</div>
			</div>
		<?php endforeach; ?>

		<div id="bricareau-mobile-menu" data-mobile-menu class="hidden lg:hidden fixed inset-0 top-20 bg-white z-[100] overflow-y-auto animate-in slide-in-from-right duration-300">
			<div class="p-6 space-y-8">
				<?php echo bricareau_language_switcher( 'text-[#18448F] text-sm' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<?php foreach ( $menu as $index => $item ) : ?>
					<?php
					// Cards keep their sub-links, shown under a toggle.
					$links = 'cards' === $item['type']
						? array_map( fn( $card ) => array( $card['title'], $card['href'], $card['links'] ), $item['cards'] )
						: array_map( fn( $link ) => array( $link['title'], $link['href'], array() ), array_merge( ...$item['groups'] ) );
					?>
					<div class="space-y-4">
						<div class="text-xs font-black text-slate-400 uppercase tracking-widest"><?php echo esc_html( $item['name'] ); ?></div>
						<div class="grid grid-cols-1 <?php echo 'cards' === $item['type'] ? 'gap-1' : 'sm:grid-cols-2 gap-4'; ?>">
							<?php foreach ( $links as $l => [ $title, $href, $children ] ) : ?>
								<?php if ( $children ) : ?>
									<?php $submenu_id = 'bricareau-mobile-submenu-' . $index . '-' . $l; ?>
									<div data-mobile-submenu>
										<div class="flex items-center justify-between gap-4">
											<a href="<?php echo bricareau_url( $href ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="flex-1 py-2 text-sm font-bold text-slate-800 hover:text-[#18448F]"><?php echo esc_html( $title ); ?></a>
											<button type="button" class="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-[#18448F] bg-[#18448F]/5 aria-expanded:bg-[#18448F] aria-expanded:text-white transition-colors" aria-expanded="false" aria-controls="<?php echo esc_attr( $submenu_id ); ?>" aria-label="<?php echo esc_attr( sprintf( /* translators: %s: menu item */ __( 'Sous-menu %s', 'bricareau' ), $title ) ); ?>">
												<?php echo bricareau_icon( 'chevron-down', 'w-4 h-4 transition-transform' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
											</button>
										</div>
										<div id="<?php echo esc_attr( $submenu_id ); ?>" class="hidden pl-4 ml-1 my-2 border-l-2 border-[#18448F]/15 space-y-1">
											<?php foreach ( $children as $child ) : ?>
												<a href="<?php echo bricareau_url( $child['href'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="block py-2 text-[13px] font-semibold text-slate-600 hover:text-[#18448F]"><?php echo esc_html( $child['title'] ); ?></a>
											<?php endforeach; ?>
										</div>
									</div>
								<?php else : ?>
									<a href="<?php echo bricareau_url( $href ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="text-sm font-bold text-slate-800 hover:text-[#18448F] flex items-center justify-between group">
										<span><?php echo esc_html( $title ); ?></span>
										<?php echo bricareau_icon( 'chevron-right', 'w-4 h-4 opacity-0 group-hover:opacity-100 transition-all' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
									</a>
								<?php endif; ?>
							<?php endforeach; ?>
						</div>
					</div>
				<?php endforeach; ?>
				<div class="pt-8 border-t border-gray-100 space-y-6">
					<?php echo bricareau_button( __( 'Contactez-nous', 'bricareau' ), '/consultation', array( 'container_class' => 'w-full', 'full' => true, 'class' => 'h-14 px-12 text-[11px] tracking-widest' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					<a href="<?php echo esc_attr( BRICAREAU_PHONE_HREF ); ?>" class="flex items-center justify-center gap-2 font-black text-slate-800 py-4">
						<?php echo bricareau_icon( 'phone', 'w-5 h-5 text-[#18448F]', array( 'stroke-width' => 2.5 ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						<?php echo esc_html( BRICAREAU_PHONE_DISPLAY ); ?>
					</a>
				</div>
			</div>
		</div>
	</header>
	<div class="bricareau-header-spacer transition-all duration-500 h-0 group-[.is-scrolled]/header:h-[80px]"></div>
</div>
