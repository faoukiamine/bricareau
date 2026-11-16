<?php
/**
 * Where form requests are emailed: one address managed in Réglages > Demandes du site.
 *
 * Seeded Fluent Forms notifications send to the {bricareau_requests_email} smartcode,
 * so changing the setting updates every form at once.
 */

defined( 'ABSPATH' ) || exit;

function bricareau_requests_email() {
	return get_option( 'bricareau_requests_email' ) ?: get_option( 'admin_email' );
}

add_filter( 'fluentform/shortcode_parser_callback_bricareau_requests_email', fn() => bricareau_requests_email() );

// Clients receive these emails: no plugin credit in the footer.
add_filter( 'fluentform/email_template_footer_credit', '__return_empty_string' );

// These forms send email, so keep bots out (both are off by default in Fluent Forms).
add_filter( 'fluentform/honeypot_status', '__return_true' );
add_filter( 'fluentform/token_based_spam_protection_status', '__return_true' );

/**
 * Keeps the valid addresses of a comma-separated list.
 */
function bricareau_sanitize_email_list( $value ) {
	$emails = array_filter( array_map( 'sanitize_email', explode( ',', (string) $value ) ), 'is_email' );
	return implode( ',', $emails );
}

add_action(
	'admin_init',
	function () {
		register_setting(
			'bricareau_requests',
			'bricareau_requests_email',
			array(
				'type'              => 'string',
				'sanitize_callback' => 'bricareau_sanitize_email_list',
				'default'           => '',
			)
		);
		register_setting(
			'bricareau_requests',
			'bricareau_email_footer',
			array(
				'type'              => 'array',
				'sanitize_callback' => 'bricareau_sanitize_email_footer',
				'default'           => array(),
			)
		);
	}
);

/**
 * Contact details shown at the bottom of every form email (inc/emails.php). Empty fields
 * are left out; {annee} in the copyright line becomes the current year.
 */
function bricareau_email_footer_defaults() {
	return array(
		'phone'     => BRICAREAU_PHONE_DISPLAY,
		'email'     => 'info@bricareau.com',
		'website'   => wp_parse_url( home_url(), PHP_URL_HOST ),
		'address'   => '',
		'copyright' => '© {annee} Bricareau Water Specialist. Tous droits réservés.',
	);
}

function bricareau_email_footer() {
	return array_merge( bricareau_email_footer_defaults(), array_filter( (array) get_option( 'bricareau_email_footer', array() ), 'is_string' ) );
}

function bricareau_sanitize_email_footer( $value ) {
	$value = (array) $value;
	$clean = array();
	foreach ( array_keys( bricareau_email_footer_defaults() ) as $key ) {
		$clean[ $key ] = 'email' === $key ? sanitize_email( $value[ $key ] ?? '' ) : sanitize_text_field( $value[ $key ] ?? '' );
	}
	return $clean;
}

add_action(
	'admin_menu',
	function () {
		add_options_page( 'Demandes du site', 'Demandes du site', 'manage_options', 'bricareau-demandes', 'bricareau_requests_page' );
	}
);

function bricareau_requests_page() {
	$sent = isset( $_GET['bricareau_test'] ) ? sanitize_key( $_GET['bricareau_test'] ) : ''; // phpcs:ignore WordPress.Security.NonceVerification
	?>
	<div class="wrap">
		<h1>Demandes du site</h1>
		<?php if ( 'ok' === $sent ) : ?>
			<div class="notice notice-success"><p>Courriel de test remis au serveur d'envoi. Vérifiez la boîte de réception (et les indésirables).</p></div>
		<?php elseif ( 'fail' === $sent ) : ?>
			<div class="notice notice-error"><p>L'envoi a échoué : le site ne peut pas envoyer de courriels. Configurez une extension SMTP.</p></div>
		<?php endif; ?>
		<form method="post" action="options.php">
			<?php settings_fields( 'bricareau_requests' ); ?>
			<table class="form-table" role="presentation">
				<tr>
					<th scope="row"><label for="bricareau_requests_email">Courriel de réception</label></th>
					<td>
						<input name="bricareau_requests_email" id="bricareau_requests_email" type="text" class="regular-text" value="<?php echo esc_attr( get_option( 'bricareau_requests_email' ) ); ?>" placeholder="<?php echo esc_attr( get_option( 'admin_email' ) ); ?>">
						<p class="description">Reçoit les demandes de tous les formulaires (consultation, contact, test d'eau). Séparez plusieurs adresses par une virgule. Vide : le courriel d'administration du site est utilisé.</p>
					</td>
				</tr>
			</table>
			<h2>Pied de page des courriels</h2>
			<p>Coordonnées affichées au bas de tous les courriels envoyés par les formulaires. Laissez un champ vide pour le retirer.</p>
			<?php
			$footer = bricareau_email_footer();
			$fields = array(
				'phone'     => array( 'Téléphone', '' ),
				'email'     => array( 'Courriel', '' ),
				'website'   => array( 'Site web', '' ),
				'address'   => array( 'Adresse', 'Ex. 123, rue Principale, Ville (Québec) H1A 1A1' ),
				'copyright' => array( 'Mention de copyright', '{annee} est remplacé par l’année en cours. Le texte par défaut est traduit dans les courriels anglais.' ),
			);
			?>
			<table class="form-table" role="presentation">
				<?php foreach ( $fields as $key => [ $label, $help ] ) : ?>
					<tr>
						<th scope="row"><label for="bricareau_email_footer_<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $label ); ?></label></th>
						<td>
							<input name="bricareau_email_footer[<?php echo esc_attr( $key ); ?>]" id="bricareau_email_footer_<?php echo esc_attr( $key ); ?>" type="text" class="regular-text" value="<?php echo esc_attr( $footer[ $key ] ); ?>">
							<?php if ( $help ) : ?>
								<p class="description"><?php echo esc_html( $help ); ?></p>
							<?php endif; ?>
						</td>
					</tr>
				<?php endforeach; ?>
			</table>
			<?php do_action( 'bricareau_requests_settings' ); ?>
			<?php submit_button(); ?>
		</form>
		<hr>
		<h2>Vérifier l'envoi</h2>
		<p>Envoie un message à <strong><?php echo esc_html( bricareau_requests_email() ); ?></strong>. Enregistrez d'abord toute modification de l'adresse.</p>
		<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
			<input type="hidden" name="action" value="bricareau_test_email">
			<?php wp_nonce_field( 'bricareau_test_email' ); ?>
			<?php submit_button( 'Envoyer un courriel de test', 'secondary' ); ?>
		</form>
		<p>Toutes les demandes restent aussi enregistrées dans <a href="<?php echo esc_url( admin_url( 'admin.php?page=fluent_forms_all_entries' ) ); ?>">Fluent Forms &gt; Entrées</a>, même si un courriel n'arrive pas.</p>
	</div>
	<?php
}

add_action(
	'admin_post_bricareau_test_email',
	function () {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( 'Accès refusé.', 403 );
		}
		check_admin_referer( 'bricareau_test_email' );
		$body = bricareau_email_open( 'Test', 'Courriel de test' )
			. '<p style="margin:0 0 14px;font:15px/1.6 Arial,Helvetica,sans-serif;color:#475569;">Ce courriel confirme que le site peut envoyer les demandes à cette adresse.</p>'
			. bricareau_email_close();
		$sent = wp_mail( array_map( 'trim', explode( ',', bricareau_requests_email() ) ), 'Test : demandes du site Bricareau', $body, array( 'Content-Type: text/html; charset=UTF-8' ) );
		wp_safe_redirect( add_query_arg( array( 'page' => 'bricareau-demandes', 'bricareau_test' => $sent ? 'ok' : 'fail' ), admin_url( 'options-general.php' ) ) );
		exit;
	}
);
