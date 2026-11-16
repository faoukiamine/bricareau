<?php
/**
 * Google Tag Manager, set in Réglages > Suivi (Google Tag Manager).
 *
 * Google Consent Mode v2: every storage type starts "denied" and becomes "granted" only
 * once the visitor clicks "Accepter tout" in the cookie banner (site-footer view.js,
 * localStorage key "cookieConsent"), as Québec's Law 25 requires. Tags in GTM then
 * respect that consent without extra setup; the banner also pushes a
 * "cookie_consent_update" event for triggers, sent forms push "form_submit" and
 * call-to-action clicks push "cta_click", "phone_click", "email_click" or "whatsapp_click".
 */

defined( 'ABSPATH' ) || exit;

/**
 * Container ID (GTM-XXXXXXX), or '' when not set. A BRICAREAU_GTM_ID constant in
 * wp-config.php takes precedence over the setting.
 */
function bricareau_gtm_id() {
	$id = defined( 'BRICAREAU_GTM_ID' ) ? BRICAREAU_GTM_ID : get_option( 'bricareau_gtm_id', '' );
	return bricareau_sanitize_gtm_id( $id );
}

function bricareau_sanitize_gtm_id( $value ) {
	$value = strtoupper( trim( (string) $value ) );
	return preg_match( '/^GTM-[A-Z0-9]{4,12}$/', $value ) ? $value : '';
}

/**
 * Whether this request loads the container: never in the admin or a preview, and not
 * for administrators when "Exclure les administrateurs" is checked.
 */
function bricareau_gtm_enabled() {
	if ( ! bricareau_gtm_id() || is_admin() || is_preview() || is_customize_preview() ) {
		return false;
	}
	return ! ( get_option( 'bricareau_gtm_exclude_admins', '1' ) && current_user_can( 'manage_options' ) );
}

add_action(
	'wp_head',
	function () {
		if ( ! bricareau_gtm_enabled() ) {
			return;
		}
		$id = bricareau_gtm_id();
		?>
<!-- Google Tag Manager (consent mode v2) -->
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
	ad_storage: 'denied',
	ad_user_data: 'denied',
	ad_personalization: 'denied',
	analytics_storage: 'denied',
	functionality_storage: 'granted',
	security_storage: 'granted',
	wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
try {
	var bricareauConsent = localStorage.getItem('cookieConsent');
	var bricareauConsentAt = Number(localStorage.getItem('cookieConsentAt'));
	// A choice older than 12 months no longer counts (the banner asks again).
	if (bricareauConsentAt && Date.now() - bricareauConsentAt > 31536000000) {
		bricareauConsent = null;
	}
	if (bricareauConsent === 'accepted') {
		gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted' });
	}
	if (bricareauConsent) {
		dataLayer.push({ cookie_consent: bricareauConsent });
	}
} catch (e) {}
dataLayer.push({ site_language: <?php echo wp_json_encode( bricareau_lang() ); ?> });
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',<?php echo wp_json_encode( $id ); ?>);
</script>
<!-- End Google Tag Manager -->
		<?php
	},
	1
);

add_action(
	'wp_body_open',
	function () {
		if ( ! bricareau_gtm_enabled() ) {
			return;
		}
		printf(
			'<noscript><iframe src="%s" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>',
			esc_url( 'https://www.googletagmanager.com/ns.html?id=' . bricareau_gtm_id() )
		);
	}
);

/**
 * "form_submit" dataLayer event after a Fluent Forms form is sent successfully (its
 * jQuery "fluentform_submission_success" event), with no personal data:
 * form_id, form_name (seed slug, e.g. "consultation-en"), form_type and form_language.
 */
function bricareau_gtm_form_types() {
	return array(
		'consultation'        => 'lead',
		'test-eau'            => 'lead',
		'contact'             => 'lead',
		'contact-residentiel' => 'lead',
		'contact-entreprises' => 'lead',
		'etude-technique'     => 'lead',
		'diagnostic'          => 'quiz',
		'infolettre'          => 'newsletter',
		'desabonnement'       => 'unsubscribe',
	);
}

add_action(
	'wp_footer',
	function () {
		if ( ! bricareau_gtm_enabled() || ! defined( 'FLUENTFORM' ) ) {
			return;
		}
		$types = bricareau_gtm_form_types();
		$forms = array();
		foreach ( (array) get_option( 'bricareau_seeded_forms', array() ) as $slug => $id ) {
			$base = preg_replace( '/-en$/', '', $slug );
			$forms[ (int) $id ] = array(
				'form_name'     => $slug,
				'form_type'     => $types[ $base ] ?? 'other',
				'form_language' => str_ends_with( $slug, '-en' ) ? 'en' : 'fr',
			);
		}
		?>
<script>
(function () {
	var forms = <?php echo wp_json_encode( (object) $forms ); ?>;
	function onSuccess(event, data) {
		var form = data && data.form ? (data.form[0] || data.form) : null;
		var id = form && form.getAttribute ? parseInt(form.getAttribute('data-form_id'), 10) : 0;
		var info = forms[id] || { form_name: 'form-' + id, form_type: 'other', form_language: document.documentElement.lang.slice(0, 2) };
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: 'form_submit',
			form_id: id,
			form_name: info.form_name,
			form_type: info.form_type,
			form_language: info.form_language,
			page_path: window.location.pathname
		});
	}
	if (window.jQuery) {
		window.jQuery(document.body).on('fluentform_submission_success', onSuccess);
	}
})();
</script>
		<?php
	},
	100
);

/**
 * Click events for the calls to action, with no personal data:
 * - "phone_click" / "email_click" / "whatsapp_click": tel:, mailto: and wa.me links;
 * - "cta_click": theme buttons (bricareau_button() and the header buttons carry data-cta)
 *   and any link to a conversion page (bricareau_gtm_conversion_slugs()).
 * Each event has link_text, link_url, cta_location (the block it sits in, e.g.
 * "page-hero", "site-header") and page_path.
 */
function bricareau_gtm_conversion_slugs() {
	return array(
		'consultation', 'contact-form', 'contact', 'contact-residentiel', 'contact-entreprises', 'diagnostic',
		'free-consultation', 'service-request', 'contact-us', 'residential-contact', 'business-contact', 'water-diagnosis',
	);
}

add_action(
	'wp_footer',
	function () {
		if ( ! bricareau_gtm_enabled() ) {
			return;
		}
		?>
<script>
(function () {
	var conversion = <?php echo wp_json_encode( bricareau_gtm_conversion_slugs() ); ?>;
	function location(el) {
		if (el.dataset.ctaLocation) {
			return el.dataset.ctaLocation;
		}
		var block = el.closest('[class*="wp-block-bricareau-"]');
		var match = block && block.className.match(/wp-block-bricareau-([a-z0-9-]+)/);
		return match ? match[1] : (el.closest('header') ? 'site-header' : el.closest('footer') ? 'site-footer' : 'content');
	}
	function isConversion(link) {
		if (link.origin !== window.location.origin) {
			return false;
		}
		var parts = link.pathname.replace(/\/+$/, '').split('/');
		return conversion.indexOf(parts[parts.length - 1]) !== -1;
	}
	document.addEventListener('click', function (event) {
		var link = event.target.closest && event.target.closest('a[href]');
		if (!link) {
			return;
		}
		var href = link.getAttribute('href');
		var name = /^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href) ? 'whatsapp_click'
			: href.indexOf('tel:') === 0 ? 'phone_click'
			: href.indexOf('mailto:') === 0 ? 'email_click'
			: (link.hasAttribute('data-cta') || isConversion(link)) ? 'cta_click' : '';
		if (!name) {
			return;
		}
		// A card link is named by its heading; textContent keeps the source case (not the CSS uppercase).
		var heading = link.querySelector('h2, h3, h4, strong');
		var text = link.getAttribute('aria-label') || (heading || link).textContent || '';
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: name,
			link_text: text.replace(/\s+/g, ' ').trim().slice(0, 100),
			link_url: name === 'cta_click' ? link.pathname + link.hash : href.split('?')[0],
			cta_location: location(link),
			page_path: window.location.pathname
		});
	}, true);
})();
</script>
		<?php
	},
	100
);

// GTM loads early: let the browser open the connection right away.
add_filter(
	'wp_resource_hints',
	function ( $urls, $relation ) {
		if ( 'preconnect' === $relation && bricareau_gtm_enabled() ) {
			$urls[] = 'https://www.googletagmanager.com';
		}
		return $urls;
	},
	10,
	2
);

add_action(
	'admin_init',
	function () {
		register_setting(
			'bricareau_tracking',
			'bricareau_gtm_id',
			array(
				'type'              => 'string',
				'sanitize_callback' => function ( $value ) {
					$clean = bricareau_sanitize_gtm_id( $value );
					if ( '' !== trim( (string) $value ) && '' === $clean ) {
						add_settings_error( 'bricareau_gtm_id', 'invalid', 'Identifiant invalide : il doit avoir la forme GTM-XXXXXXX.' );
						return get_option( 'bricareau_gtm_id', '' );
					}
					return $clean;
				},
				'default'           => '',
			)
		);
		register_setting(
			'bricareau_tracking',
			'bricareau_gtm_exclude_admins',
			array(
				'type'              => 'string',
				'sanitize_callback' => fn( $value ) => $value ? '1' : '0',
				'default'           => '1',
			)
		);
	}
);

add_action(
	'admin_menu',
	function () {
		add_options_page( 'Suivi (Google Tag Manager)', 'Suivi (GTM)', 'manage_options', 'bricareau-suivi', 'bricareau_tracking_page' );
	}
);

function bricareau_tracking_page() {
	$locked = defined( 'BRICAREAU_GTM_ID' );
	?>
	<div class="wrap">
		<h1>Suivi (Google Tag Manager)</h1>
		<?php settings_errors( 'bricareau_gtm_id' ); ?>
		<form method="post" action="options.php">
			<?php settings_fields( 'bricareau_tracking' ); ?>
			<table class="form-table" role="presentation">
				<tr>
					<th scope="row"><label for="bricareau_gtm_id">ID du conteneur</label></th>
					<td>
						<input name="bricareau_gtm_id" id="bricareau_gtm_id" type="text" class="regular-text code" value="<?php echo esc_attr( $locked ? BRICAREAU_GTM_ID : get_option( 'bricareau_gtm_id', '' ) ); ?>" placeholder="GTM-XXXXXXX" <?php disabled( $locked ); ?>>
						<p class="description">
							<?php if ( $locked ) : ?>
								Défini par la constante BRICAREAU_GTM_ID dans wp-config.php.
							<?php else : ?>
								Dans Google Tag Manager : Administration &gt; Installer Google Tag Manager. Vide : aucun code de suivi n'est ajouté.
							<?php endif; ?>
						</p>
					</td>
				</tr>
				<tr>
					<th scope="row">Administrateurs</th>
					<td>
						<label><input name="bricareau_gtm_exclude_admins" type="checkbox" value="1" <?php checked( get_option( 'bricareau_gtm_exclude_admins', '1' ) ); ?>> Ne pas charger GTM pour les administrateurs connectés (évite de fausser les statistiques)</label>
					</td>
				</tr>
			</table>
			<?php submit_button(); ?>
		</form>
		<hr>
		<h2>Consentement (Loi 25)</h2>
		<p>Le mode de consentement Google v2 est activé : les témoins d'analyse et de publicité sont refusés par défaut et ne sont activés qu'après un clic sur « Accepter tout » dans le bandeau de témoins du site.</p>
		<p>Dans GTM, utilisez des balises Google (GA4, Google Ads) : elles respectent ce consentement automatiquement. Pour les autres balises, ajoutez une condition sur l'événement <code>cookie_consent_update</code> ou la variable <code>cookie_consent</code> (<code>accepted</code> / <code>declined</code>).</p>
		<p>Statut : <?php echo bricareau_gtm_id() ? '<strong>actif</strong> (' . esc_html( bricareau_gtm_id() ) . ')' : '<strong>inactif</strong>'; ?></p>
	</div>
	<?php
}
