<?php
/**
 * Site footer. The newsletter signup is the seeded "infolettre" Fluent Forms form.
 */

$heading_class = "mb-6 text-white font-bold text-base uppercase tracking-wider relative after:content-[''] after:block after:w-8 after:h-1 after:bg-[#8CC63F] after:mt-3";
$wrapper       = bricareau_block_wrapper( $attributes, array( 'class' => 'bg-[#18448F] text-white py-12 md:py-16' ) );
?>
<footer <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-4">
		<?php // Tablets (md to xl): brand row, menu columns row, newsletter row. Desktop: 12 columns, brand 3, menus 2 each, newsletter 3 (room for the email field). ?>
		<div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-12 gap-x-8 gap-y-8 md:gap-y-10 xl:gap-y-8 mb-12">
			<div class="space-y-4 md:col-span-3 md:flex md:items-start md:gap-10 md:space-y-0 xl:col-span-3 xl:block xl:space-y-4">
				<img
					src="<?php echo esc_url( BRICAREAU_URI . '/assets/images/logo.webp' ); ?>"
					class="h-10 md:h-12 w-auto shrink-0 brightness-0 invert"
					alt="<?php esc_attr_e( "Bricareau Water Specialist - Spécialiste du traitement d'eau au Canada", 'bricareau' ); ?>"
					loading="lazy" width="277" height="144"
				>
				<p class="text-sm text-white/80 leading-relaxed"><?php esc_html_e( "Bricareau est votre expert en traitement d'eau et filtration au Québec depuis plus de 20 ans. Que ce soit pour l'installation d'un adoucisseur d'eau, d'un système d'osmose inverse, de la filtration de l'eau de puits ou de la désinfection UV, nous offrons des solutions complètes adaptées aux besoins résidentiels, commerciaux et industriels. Faites confiance à nos spécialistes certifiés pour une eau pure, saine et de qualité supérieure partout au Québec.", 'bricareau' ); ?></p>
			</div>

			<?php foreach ( bricareau_footer_columns() as $column ) : ?>
				<div class="xl:col-span-2">
					<h3 class="<?php echo esc_attr( $heading_class ); ?>">
						<a href="<?php echo bricareau_url( $column['href'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="hover:text-white/80 transition-colors"><?php echo esc_html( $column['title'] ); ?></a>
					</h3>
					<ul class="space-y-2 text-sm">
						<?php foreach ( $column['links'] as [ $label, $href ] ) : ?>
							<li><a href="<?php echo bricareau_url( $href ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="text-white/80 hover:text-white transition-colors"><?php echo esc_html( $label ); ?></a></li>
						<?php endforeach; ?>
					</ul>
				</div>
			<?php endforeach; ?>

			<div class="md:col-span-3 md:grid md:grid-cols-2 md:gap-x-10 md:items-center md:pt-10 md:border-t md:border-white/10 xl:col-span-3 xl:block xl:pt-0 xl:border-0">
				<div>
					<h3 class="<?php echo esc_attr( $heading_class ); ?>"><?php esc_html_e( 'Restez informé', 'bricareau' ); ?></h3>
					<p class="text-sm text-white/80 mb-6 md:mb-0 xl:mb-6 leading-relaxed [&_br]:hidden"><?php echo wp_kses( __( 'Inscrivez-vous à notre infolettre pour recevoir des<br class="hidden xl:block"> conseils et offres exclusives', 'bricareau' ), array( 'br' => array( 'class' => true ) ) ); ?></p>
				</div>
				<div>
					<?php
					$forms      = get_option( 'bricareau_seeded_forms', array() );
					$newsletter = (int) ( 'en' === bricareau_lang() && ! empty( $forms['infolettre-en'] ) ? $forms['infolettre-en'] : ( $forms['infolettre'] ?? 0 ) );
					?>
					<?php if ( $newsletter && shortcode_exists( 'fluentform' ) ) : ?>
						<div class="bricareau-newsletter"><?php echo do_shortcode( '[fluentform id="' . $newsletter . '"]' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
					<?php endif; ?>
					<p class="text-[11px] text-white/50 leading-tight mt-4"><?php esc_html_e( "En m'inscrivant, j'accepte la", 'bricareau' ); ?> <a href="<?php echo bricareau_url( '/politique-de-confidentialite' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="underline hover:text-white"><?php esc_html_e( 'politique de confidentialité', 'bricareau' ); ?></a>.</p>
				</div>
			</div>
		</div>

		<div class="border-t border-white/20 pt-8 mb-8">
			<div class="flex flex-col xl:flex-row justify-between items-center gap-6">
				<div class="flex gap-4">
					<?php foreach ( bricareau_social_links() as [ $icon, $label, $href ] ) : ?>
						<a href="<?php echo esc_url( $href ); ?>" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="<?php echo esc_attr( $label ); ?>">
							<?php echo bricareau_icon( $icon, 'h-5 w-5 text-white' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						</a>
					<?php endforeach; ?>
				</div>
				<div class="flex flex-wrap justify-center gap-6 text-sm text-white/80">
					<?php foreach ( bricareau_footer_legal_links() as [ $label, $href ] ) : ?>
						<a href="<?php echo bricareau_url( $href ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="hover:text-white transition-colors"><?php echo esc_html( $label ); ?></a>
					<?php endforeach; ?>
					<a href="<?php echo bricareau_url( '/desabonnement' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="hover:text-white transition-colors underline decoration-white/30 underline-offset-4"><?php esc_html_e( 'se désabonner', 'bricareau' ); ?></a>
				</div>
			</div>
		</div>

		<div class="text-center">
			<p class="text-sm text-white/70"><?php echo esc_html( str_replace( '{annee}', wp_date( 'Y' ), __( $attributes['copyright'] ?? '', 'bricareau' ) /* phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText -- the default text is in the translation file. */ ) ); ?></p>
			<button type="button" data-cookie-manage class="mt-2 text-xs text-white/60 hover:text-white underline decoration-white/30 underline-offset-4 transition-colors"><?php esc_html_e( 'Gérer mes témoins', 'bricareau' ); ?></button>
		</div>
	</div>
</footer>

<div data-cookie-consent hidden class="fixed bottom-0 left-0 sm:bottom-4 sm:left-4 z-[9999] p-4 w-full sm:max-w-[800px]" role="dialog" aria-label="<?php esc_attr_e( 'Témoins', 'bricareau' ); ?>">
	<div class="bg-white/95 backdrop-blur-md w-full rounded-2xl shadow-2xl overflow-hidden border border-slate-200/50 p-5 md:p-6 relative">
		<div class="flex flex-col md:flex-row items-center md:items-start gap-5">
			<span class="hidden md:flex w-12 h-12 bg-[#18448F]/10 text-[#18448F] rounded-full items-center justify-center shrink-0"><?php echo bricareau_icon( 'shield-check', 'w-6 h-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
			<div class="flex-1 text-center md:text-left space-y-2">
				<p class="text-xl font-medium text-slate-900"><?php esc_html_e( 'Nous respectons votre vie privée', 'bricareau' ); ?></p>
				<p class="text-slate-600 text-[15px] leading-snug max-w-2xl"><?php esc_html_e( "Nous utilisons des témoins pour améliorer votre expérience de navigation, diffuser des publicités ou des contenus personnalisés et analyser notre trafic. En cliquant sur Tout accepter, vous consentez à l'utilisation de nos témoins.", 'bricareau' ); ?> <a href="<?php echo bricareau_url( '/politique-de-confidentialite' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="text-[#18448F] hover:underline font-medium inline-block"><?php esc_html_e( 'En savoir plus', 'bricareau' ); ?></a>.</p>
			</div>
			<div class="flex flex-row md:flex-col lg:flex-row gap-2 w-full md:w-auto shrink-0 self-center">
				<button type="button" data-cookie-choice="accepted" class="flex-1 md:w-32 bg-[#18448F] hover:bg-[#18448F]/90 text-white h-11 text-sm font-semibold rounded-lg transition-all"><?php esc_html_e( 'Accepter tout', 'bricareau' ); ?></button>
				<button type="button" data-cookie-choice="declined" class="flex-1 md:w-32 border border-slate-200 text-slate-800 hover:bg-slate-50 h-11 text-sm font-semibold rounded-lg transition-all"><?php esc_html_e( 'Refuser tout', 'bricareau' ); ?></button>
			</div>
		</div>
		<button type="button" data-cookie-close class="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 transition-colors" aria-label="<?php esc_attr_e( 'Fermer', 'bricareau' ); ?>"><?php echo bricareau_icon( 'x', 'w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></button>
	</div>
</div>
