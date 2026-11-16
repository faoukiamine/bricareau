<?php
/**
 * Tawk.to live chat, set in Réglages > Demandes du site > Clavardage (Tawk.to).
 *
 * Tawk loads a third-party script that sets cookies, so it respects the cookie banner
 * (Law 25) and stays off the critical path:
 * - consent "accepted": the widget loads 3 s after the page (and right after a visitor
 *   clicks "Accepter tout", via the "bricareau:consent" event from site-footer view.js);
 * - otherwise: a lightweight chat button of our own, same place as the Tawk bubble;
 *   clicking it is an explicit request to chat, so it loads Tawk and opens the chat.
 * The chat pushes "chat_opened" and "chat_started" to the dataLayer (GTM).
 */

defined( 'ABSPATH' ) || exit;

function bricareau_tawk_defaults() {
	return array(
		'property'  => '',
		'widget_fr' => '',
		'widget_en' => '',
		'enabled'   => '1',
	);
}

function bricareau_tawk_settings() {
	return array_merge( bricareau_tawk_defaults(), array_filter( (array) get_option( 'bricareau_tawk', array() ), 'is_string' ) );
}

/** Embed URL for the page language (English widget when set, else the French one), or ''. */
function bricareau_tawk_src() {
	$settings = bricareau_tawk_settings();
	$widget   = 'en' === bricareau_lang() && '' !== $settings['widget_en'] ? $settings['widget_en'] : $settings['widget_fr'];
	if ( ! $settings['enabled'] || '' === $settings['property'] || '' === $widget ) {
		return '';
	}
	return 'https://embed.tawk.to/' . rawurlencode( $settings['property'] ) . '/' . rawurlencode( $widget );
}

function bricareau_tawk_active() {
	return ! is_admin() && '' !== bricareau_tawk_src();
}

/** A Tawk ID (letters and digits), or '' for anything else. */
function bricareau_tawk_sanitize_id( $value ) {
	$value = trim( (string) $value );
	return preg_match( '/^[A-Za-z0-9]+$/', $value ) ? $value : '';
}

add_action(
	'wp_footer',
	function () {
		if ( ! bricareau_tawk_active() ) {
			return;
		}
		$label  = __( 'Clavarder avec nous', 'bricareau' );
		$bubble = __( 'Clavarder en direct', 'bricareau' );
		?>
<button type="button" data-tawk-launch aria-label="<?php echo esc_attr( $label ); ?>" class="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-[90] w-14 h-14 rounded-full bg-[#18448F] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:scale-105 hover:bg-[#123570] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18448F]">
	<?php echo bricareau_icon( 'message-square', 'w-6 h-6' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
</button>
<?php // Desktop label left of the chat bubble (ours or Tawk's), like the WhatsApp one; it stays once Tawk has loaded. ?>
<div data-tawk-bubble class="hidden fixed right-24 bottom-8 z-[90] items-center gap-2 bg-white text-slate-800 text-sm font-semibold rounded-full shadow-lg pl-1.5 pr-1.5 py-1.5">
	<button type="button" data-tawk-bubble-open class="pl-2.5 pr-1 py-0.5 hover:text-[#18448F]"><?php echo esc_html( $bubble ); ?></button>
	<button type="button" data-tawk-bubble-close class="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100" aria-label="<?php esc_attr_e( 'Fermer', 'bricareau' ); ?>"><?php echo bricareau_icon( 'x', 'w-3.5 h-3.5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></button>
</div>
<script>
(function () {
	var src = <?php echo wp_json_encode( bricareau_tawk_src() ); ?>;
	var launcher = document.querySelector('[data-tawk-launch]');
	var requested = false;
	var loaded = false;

	function push(event) {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({ event: event, page_path: window.location.pathname });
	}

	function load(open) {
		requested = requested || open;
		if (loaded) {
			if (open && window.Tawk_API && window.Tawk_API.maximize) {
				window.Tawk_API.maximize();
			}
			return;
		}
		loaded = true;
		window.Tawk_API = window.Tawk_API || {};
		window.Tawk_LoadStart = new Date();
		window.Tawk_API.onLoad = function () {
			if (launcher) {
				launcher.remove();
			}
			// Tawk reports onLoad before its chat window can open: wait a moment.
			if (requested) {
				setTimeout(function () { window.Tawk_API.maximize(); }, 800);
			}
		};
		window.Tawk_API.onChatMaximized = function () { push('chat_opened'); };
		window.Tawk_API.onChatStarted = function () { push('chat_started'); };
		var script = document.createElement('script');
		script.async = true;
		script.src = src;
		script.charset = 'UTF-8';
		script.setAttribute('crossorigin', '*');
		document.body.appendChild(script);
	}

	function accepted() {
		try {
			var at = Number(localStorage.getItem('cookieConsentAt'));
			return localStorage.getItem('cookieConsent') === 'accepted' && !(at && Date.now() - at > 31536000000);
		} catch (e) {
			return false;
		}
	}

	// Label bubble: desktop only (lg:flex), after 3 s, closable for the session.
	var bubble = document.querySelector('[data-tawk-bubble]');
	var bubbleClosed = false;
	try { bubbleClosed = sessionStorage.getItem('tawkBubbleClosed') === '1'; } catch (e) {}
	if (bubble && !bubbleClosed) {
		setTimeout(function () { bubble.classList.add('lg:flex'); }, 3000);
		bubble.querySelector('[data-tawk-bubble-open]').addEventListener('click', function () { load(true); });
		bubble.querySelector('[data-tawk-bubble-close]').addEventListener('click', function () {
			bubble.classList.remove('lg:flex');
			try { sessionStorage.setItem('tawkBubbleClosed', '1'); } catch (e) {}
		});
	}

	if (launcher) {
		launcher.addEventListener('click', function () {
			launcher.setAttribute('aria-busy', 'true');
			load(true);
		});
	}
	if (accepted()) {
		setTimeout(function () { load(false); }, 3000);
	}
	document.addEventListener('bricareau:consent', function (event) {
		if (event.detail === 'accepted') {
			load(false);
		}
	});
})();
</script>
		<?php
	},
	20
);

add_action(
	'admin_init',
	function () {
		register_setting(
			'bricareau_requests',
			'bricareau_tawk',
			array(
				'type'              => 'array',
				'sanitize_callback' => function ( $value ) {
					$value = (array) $value;
					return array(
						'property'  => bricareau_tawk_sanitize_id( $value['property'] ?? '' ),
						'widget_fr' => bricareau_tawk_sanitize_id( $value['widget_fr'] ?? '' ),
						'widget_en' => bricareau_tawk_sanitize_id( $value['widget_en'] ?? '' ),
						'enabled'   => empty( $value['enabled'] ) ? '0' : '1',
					);
				},
				'default'           => bricareau_tawk_defaults(),
			)
		);
	}
);

add_action(
	'bricareau_requests_settings',
	function () {
		$settings = bricareau_tawk_settings();
		$fields   = array(
			'property'  => array( 'ID de la propriété', 'Dans le code d’intégration Tawk : https://embed.tawk.to/<strong>ID-PROPRIÉTÉ</strong>/ID-WIDGET' ),
			'widget_fr' => array( 'ID du widget (français)', 'La dernière partie de l’adresse du code d’intégration, souvent « default ».' ),
			'widget_en' => array( 'ID du widget (anglais)', 'Optionnel : un 2e widget configuré en anglais pour les pages /en/. Vide : le widget français est utilisé partout.' ),
		);
		?>
		<h2>Clavardage (Tawk.to)</h2>
		<p>Bulle de clavardage en bas à droite de toutes les pages. Tawk se charge automatiquement pour les visiteurs qui ont accepté les témoins ; pour les autres, un bouton léger charge le clavardage seulement quand on clique dessus (Loi 25).</p>
		<table class="form-table" role="presentation">
			<?php foreach ( $fields as $key => [ $label, $help ] ) : ?>
				<tr>
					<th scope="row"><label for="bricareau_tawk_<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $label ); ?></label></th>
					<td>
						<input name="bricareau_tawk[<?php echo esc_attr( $key ); ?>]" id="bricareau_tawk_<?php echo esc_attr( $key ); ?>" type="text" class="regular-text code" value="<?php echo esc_attr( $settings[ $key ] ); ?>">
						<p class="description"><?php echo wp_kses( $help, array( 'strong' => array() ) ); ?></p>
					</td>
				</tr>
			<?php endforeach; ?>
			<tr>
				<th scope="row">Affichage</th>
				<td><label><input name="bricareau_tawk[enabled]" type="checkbox" value="1" <?php checked( $settings['enabled'], '1' ); ?>> Afficher le clavardage sur le site</label></td>
			</tr>
		</table>
		<?php
	}
);
