<?php
/**
 * Floating WhatsApp button (bottom right, above the Tawk chat when it is on; bubble on its left), set in Réglages > Demandes du site.
 *
 * A plain wa.me link: no third-party script and no cookie, so no consent is needed.
 * The pre-filled message names the current page in its language. Clicks push the
 * "whatsapp_click" dataLayer event (inc/tracking.php).
 */

defined( 'ABSPATH' ) || exit;

function bricareau_whatsapp_defaults() {
	return array(
		'number'  => '',
		'enabled' => '1',
	);
}

function bricareau_whatsapp_settings() {
	return array_merge( bricareau_whatsapp_defaults(), array_filter( (array) get_option( 'bricareau_whatsapp', array() ), 'is_string' ) );
}

/** Digits only, international format (e.g. 15145550000), or '' when not set. */
function bricareau_whatsapp_number() {
	$digits = preg_replace( '/\D+/', '', bricareau_whatsapp_settings()['number'] );
	return strlen( $digits ) >= 8 ? $digits : '';
}

function bricareau_whatsapp_url() {
	$topic   = is_singular() && ! is_front_page() ? html_entity_decode( wp_strip_all_tags( get_the_title() ), ENT_QUOTES, 'UTF-8' ) : '';
	$message = $topic
		/* translators: %s: title of the page the visitor is on */
		? sprintf( __( "Bonjour Bricareau, j'aimerais de l'information sur : %s", 'bricareau' ), $topic )
		: __( "Bonjour Bricareau, j'aimerais de l'information sur vos solutions de traitement d'eau.", 'bricareau' );
	return 'https://wa.me/' . bricareau_whatsapp_number() . '?text=' . rawurlencode( $message );
}

add_action(
	'wp_footer',
	function () {
		if ( is_admin() || ! bricareau_whatsapp_number() || ! bricareau_whatsapp_settings()['enabled'] ) {
			return;
		}
		$label = __( 'Écrivez-nous sur WhatsApp', 'bricareau' );
		?>
<div class="bricareau-whatsapp fixed right-4 sm:right-6 z-[90] flex flex-row-reverse items-center gap-3 <?php echo bricareau_tawk_active() ? 'bottom-[5.5rem] sm:bottom-[6.5rem]' : 'bottom-4 sm:bottom-6'; ?>">
	<a href="<?php echo esc_url( bricareau_whatsapp_url() ); ?>" target="_blank" rel="noopener" data-whatsapp data-cta-location="whatsapp-button" aria-label="<?php echo esc_attr( $label ); ?>" class="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:scale-105 hover:bg-[#1ebe5b] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]">
		<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.19 4.23-9.42 9.43-9.42 2.52 0 4.88.98 6.66 2.76a9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.42-9.42 9.42zm8.02-17.44A11.27 11.27 0 0 0 12.05.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.95 1.52 5.66L.62 23.25l5.64-1.48a11.3 11.3 0 0 0 5.78 1.47h.01c6.25 0 11.33-5.08 11.34-11.33 0-3.03-1.18-5.87-3.32-8.01z"/></svg>
	</a>
	<div data-whatsapp-bubble class="hidden items-center gap-2 bg-white text-slate-800 text-sm font-semibold rounded-full shadow-lg pl-4 pr-1.5 py-1.5">
		<?php echo esc_html( $label ); ?>
		<button type="button" data-whatsapp-bubble-close class="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100" aria-label="<?php esc_attr_e( 'Fermer', 'bricareau' ); ?>"><?php echo bricareau_icon( 'x', 'w-3.5 h-3.5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></button>
	</div>
</div>
<script>
(function () {
	var bubble = document.querySelector('[data-whatsapp-bubble]');
	var closed = false;
	try { closed = sessionStorage.getItem('whatsappBubbleClosed') === '1'; } catch (e) {}
	if (!bubble || closed) { return; }
	// Desktop only: lg:flex shows it from 1024 px (a [hidden] attribute would not win over it).
	setTimeout(function () { bubble.classList.add('lg:flex'); }, 3000);
	bubble.querySelector('[data-whatsapp-bubble-close]').addEventListener('click', function () {
		bubble.classList.remove('lg:flex');
		try { sessionStorage.setItem('whatsappBubbleClosed', '1'); } catch (e) {}
	});
})();
</script>
		<?php
	}
);

add_action(
	'admin_init',
	function () {
		register_setting(
			'bricareau_requests',
			'bricareau_whatsapp',
			array(
				'type'              => 'array',
				'sanitize_callback' => function ( $value ) {
					$value = (array) $value;
					return array(
						'number'  => sanitize_text_field( $value['number'] ?? '' ),
						'enabled' => empty( $value['enabled'] ) ? '0' : '1',
					);
				},
				'default'           => bricareau_whatsapp_defaults(),
			)
		);
	}
);

add_action(
	'bricareau_requests_settings',
	function () {
		$settings = bricareau_whatsapp_settings();
		?>
		<h2>WhatsApp</h2>
		<p>Bouton rond en bas à droite de toutes les pages. Il ouvre une conversation WhatsApp avec un message prérempli qui nomme la page consultée.</p>
		<table class="form-table" role="presentation">
			<tr>
				<th scope="row"><label for="bricareau_whatsapp_number">Numéro WhatsApp</label></th>
				<td>
					<input name="bricareau_whatsapp[number]" id="bricareau_whatsapp_number" type="text" class="regular-text" value="<?php echo esc_attr( $settings['number'] ); ?>" placeholder="+1 514 555 0000">
					<p class="description">Format international avec l'indicatif du pays (+1 au Canada). Vide : le bouton n'est pas affiché.</p>
				</td>
			</tr>
			<tr>
				<th scope="row">Affichage</th>
				<td><label><input name="bricareau_whatsapp[enabled]" type="checkbox" value="1" <?php checked( $settings['enabled'], '1' ); ?>> Afficher le bouton WhatsApp sur le site</label></td>
			</tr>
		</table>
		<?php
	}
);
