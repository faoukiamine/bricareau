<?php
/**
 * 404 page (NotFound.tsx).
 *
 * @var array $attributes
 */

$cards   = array(
	array( 'factory', __( 'Industrie', 'bricareau' ), __( 'Traitements à haut débit pour les infrastructures industrielles complexes.', 'bricareau' ), '/industriel' ),
	array( 'building-2', __( 'Résidentiel', 'bricareau' ), __( "Solutions d'adoucissement et de filtration pour le confort de l'habitat.", 'bricareau' ), '/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire' ),
	array( 'wrench', __( 'Maintenance', 'bricareau' ), __( "Services d'entretien périodique et pièces détachées d'origine.", 'bricareau' ), '/services-de-traitement-eau' ),
);
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'bg-[#f8f9ff] pt-24 pb-12 px-6' ) );
?>
<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="max-w-7xl mx-auto w-full">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
			<div class="lg:col-span-6 space-y-8 order-2 lg:order-1">
				<div class="space-y-4">
					<span class="text-xs uppercase tracking-[0.2em] text-[#4059aa] font-bold inline-block border-l-4 border-[#004ac6] pl-4"><?php esc_html_e( 'Erreur 404', 'bricareau' ); ?></span>
					<h1 class="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic text-[#0d1c2e] mb-6 tracking-tight"><?php esc_html_e( 'Page introuvable', 'bricareau' ); ?> <span class="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg"><?php esc_html_e( 'dans le circuit', 'bricareau' ); ?></span>.</h1>
					<p class="text-lg text-[#434655] leading-relaxed max-w-xl"><?php esc_html_e( 'Il semble que le flux d\'information ait été interrompu. Cette page a peut-être été filtrée lors d\'une mise à jour technique ou déplacée vers un nouveau circuit.', 'bricareau' ); ?></p>
				</div>
				<div class="flex flex-col sm:flex-row gap-4">
					<a href="<?php echo esc_url( bricareau_home_url() ); ?>" class="bg-gradient-to-br from-[#004ac6] to-[#18448F] text-white px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"><?php echo bricareau_icon( 'home', 'h-5 w-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><?php esc_html_e( 'Retourner à la source (Accueil)', 'bricareau' ); ?></a>
					<a href="<?php echo bricareau_url( '/contact' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="bg-[#dce9ff] text-[#264191] px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider flex items-center justify-center hover:bg-[#d5e3fc] transition-colors"><?php esc_html_e( 'Consulter l\'aide technique', 'bricareau' ); ?></a>
				</div>
			</div>
			<div class="lg:col-span-6 order-1 lg:order-2 relative">
				<div class="relative z-10 rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] shadow-2xl outline outline-1 outline-[#c3c6d7]/15">
					<img class="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700" src="<?php echo esc_url( get_theme_file_uri( 'assets/404.png' ) ); ?>" alt="<?php esc_attr_e( 'Système de filtration d\'eau industriel', 'bricareau' ); ?>">
					<div class="absolute top-10 left-10 p-4 bg-white/80 backdrop-blur-md rounded-lg outline outline-1 outline-[#c3c6d7]/15">
						<div class="flex items-center gap-3">
							<?php echo bricareau_icon( 'alert-circle', 'text-[#004ac6] h-6 w-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
							<div>
								<p class="text-[10px] uppercase tracking-widest text-[#4059aa] font-bold"><?php esc_html_e( 'État du Flux', 'bricareau' ); ?></p>
								<p class="text-sm font-bold text-[#004ac6]"><?php esc_html_e( 'Interruption Détectée', 'bricareau' ); ?></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
			<?php foreach ( $cards as [ $icon, $title, $text, $url ] ) : ?>
				<a class="bg-[#eff4ff] p-8 rounded-2xl hover:bg-[#d5e3fc] transition-colors group" href="<?php echo bricareau_url( $url ); // phpcs:ignore WordPress.Security.EscapeOutput ?>">
					<?php echo bricareau_icon( $icon, 'text-[#004ac6] mb-4 h-8 w-8' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					<h3 class="text-xl font-bold mb-2 text-[#0d1c2e]"><?php echo esc_html( $title ); ?></h3>
					<p class="text-sm text-[#434655]"><?php echo esc_html( $text ); ?></p>
					<div class="mt-6 flex items-center gap-2 text-[#004ac6] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity"><?php esc_html_e( 'Explorer', 'bricareau' ); ?> <?php echo bricareau_icon( 'arrow-right', 'h-4 w-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></div>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</div>
