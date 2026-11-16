<?php
/**
 * Branded layout for every Fluent Forms email: white header with the logo, a green label,
 * the title and its short green underline, then the notification's own message, and a
 * navy footer with the contact details (same look as the site's section titles and footer).
 *
 * Emails use Arial, tables and inline styles so Gmail, Outlook and Apple Mail render them alike.
 * bricareau_email_open() / bricareau_email_close() also wrap the theme's own emails (test email).
 */


/**
 * Label and title of an email: notifications sent to the visitor (address taken from a
 * form field) are confirmations, the others are requests for Bricareau.
 */
function bricareau_email_heading( $form, $notification ) {
	$slug = bricareau_email_form_slug( $form );
	if ( 'field' !== ( $notification['sendTo']['type'] ?? '' ) ) {
		return array( __( 'Formulaire du site', 'bricareau' ), $form->title ?? '' );
	}
	// Confirmations that are not "request received", keyed by seeded form (inc/seed/forms.php).
	$titles = array(
		'diagnostic'    => __( 'Votre diagnostic de l’eau', 'bricareau' ),
		'desabonnement' => __( 'Demande de désabonnement reçue', 'bricareau' ),
		'infolettre'    => __( 'Bienvenue dans l’infolettre', 'bricareau' ),
	);
	return array( __( 'Confirmation', 'bricareau' ), $titles[ preg_replace( '/-en$/', '', (string) $slug ) ] ?? __( 'Nous avons bien reçu votre demande', 'bricareau' ) );
}

/** Seeded slug of a form (inc/seed/forms.php), "-en" for the English copies. */
function bricareau_email_form_slug( $form ) {
	return array_search( (int) ( $form->id ?? 0 ), array_map( 'intval', get_option( 'bricareau_seeded_forms', array() ) ), true );
}

/** Builds part of a form email in the form's language (English forms end in "-en"). */
function bricareau_email_in_language( $form, callable $build ) {
	$english = str_ends_with( (string) bricareau_email_form_slug( $form ), '-en' );
	return $english ? bricareau_in_english( fn() => $build( 'en' ) ) : $build( bricareau_default_lang() );
}

/** Opening of the email layout, up to the start of the message. */
function bricareau_email_open( $label, $title, $lang = null ) {
	$lang = $lang ?: bricareau_lang();
	$home = function_exists( 'pll_home_url' ) ? pll_home_url( $lang ) : home_url( '/' );
	ob_start();
	?>
<!DOCTYPE html>
<html lang="<?php echo esc_attr( $lang ); ?>">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="x-apple-disable-message-reformatting">
	<title><?php echo esc_html( $title ); ?></title>
</head>
<body style="margin:0;padding:0;background:#f8fafc;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;">
	<tr>
		<td align="center" style="padding:28px 12px;">
			<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;">
				<tr>
					<td style="padding:28px 36px 0;">
						<a href="<?php echo esc_url( $home ); ?>"><img src="<?php echo esc_url( BRICAREAU_URI . '/assets/images/logo-email.png' ); ?>" alt="Bricareau Water Specialist" width="92" height="48" style="display:block;border:0;"></a>
					</td>
				</tr>
				<tr>
					<td style="padding:26px 36px 32px;">
						<p style="margin:0 0 8px;font:bold 11px/1 Arial,Helvetica,sans-serif;letter-spacing:2px;text-transform:uppercase;color:#8CC63F;"><?php echo esc_html( $label ); ?></p>
						<h1 style="margin:0;font:bold 24px/1.3 Arial,Helvetica,sans-serif;color:#18448F;"><?php echo esc_html( $title ); ?></h1>
						<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:14px 0 22px;"><tr><td width="32" height="3" style="width:32px;height:3px;background:#8CC63F;font-size:0;line-height:0;">&nbsp;</td></tr></table>
						<div class="bricareau-email-body">
	<?php
	return ob_get_clean();
}

/** End of the email layout: closes the message and adds the navy footer. */
function bricareau_email_close() {
	// Settings > Demandes du site (inc/requests.php); the default copyright is translated.
	$footer  = bricareau_email_footer();
	$details = array_filter( array( $footer['phone'], $footer['email'], $footer['website'] ) );
	$notice  = str_replace( '{annee}', wp_date( 'Y' ), __( $footer['copyright'], 'bricareau' ) ); // phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText -- default text in the translation file.
	ob_start();
	?>
						</div>
					</td>
				</tr>
				<tr>
					<td style="background:#18448F;padding:22px 36px;border-radius:0 0 6px 6px;">
						<?php if ( $details || $footer['address'] ) : ?>
							<p style="margin:0;font:12px/1.8 Arial,Helvetica,sans-serif;color:#d1dbea;">
								<?php echo esc_html( implode( ' · ', $details ) ); ?>
								<?php if ( $footer['address'] ) : ?>
									<br><?php echo esc_html( $footer['address'] ); ?>
								<?php endif; ?>
							</p>
						<?php endif; ?>
						<?php if ( $notice ) : ?>
							<p style="margin:10px 0 0;font:11px/1.5 Arial,Helvetica,sans-serif;color:#a3b4d1;"><?php echo esc_html( $notice ); ?></p>
						<?php endif; ?>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
</body>
</html>
	<?php
	return ob_get_clean();
}

add_filter(
	'fluentform/email_header',
	static fn( $header, $form, $notification ) => bricareau_email_in_language(
		$form,
		static fn( $lang ) => bricareau_email_open( ...array_merge( bricareau_email_heading( $form, $notification ), array( $lang ) ) )
	),
	10,
	3
);
add_filter(
	'fluentform/email_footer',
	static fn( $footer, $form ) => bricareau_email_in_language( $form, static fn() => bricareau_email_close() ),
	10,
	2
);

// Replaces Fluent Forms' default stylesheet (it targets its own layout); inlined by the plugin.
add_filter(
	'fluentform/email_styles',
	static fn() => '
		.bricareau-email-body, .bricareau-email-body p { font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.6; color: #475569; }
		.bricareau-email-body p { margin: 0 0 14px; }
		.bricareau-email-body a { color: #18448F; }
		.bricareau-email-body strong { color: #0f172a; }
	'
);

// {all_data}: label / value rows instead of the plugin's grey stacked table.
add_filter(
	'fluentform/all_data_shortcode_html',
	static function ( $html, $fields, $labels, $response ) {
		$rows = '';
		foreach ( $labels as $key => $label ) {
			$value = $response->user_inputs[ $key ] ?? '';
			if ( '' === $value || is_array( $value ) || is_object( $value ) ) {
				continue;
			}
			// Same trust as the plugin's own table: admin-set labels, values sanitized on submission.
			$rows .= '<tr>'
				. '<th align="left" valign="top" style="width:38%;padding:9px 12px 9px 0;border-bottom:1px solid #eef2f7;font:13px/1.5 Arial,Helvetica,sans-serif;color:#64748b;font-weight:normal;">' . $label . '</th>'
				. '<td valign="top" style="padding:9px 0;border-bottom:1px solid #eef2f7;font:bold 14px/1.5 Arial,Helvetica,sans-serif;color:#0f172a;word-break:break-word;overflow-wrap:anywhere;">' . $value . '</td>'
				. '</tr>';
		}
		return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin:0 0 14px;">' . $rows . '</table>';
	},
	10,
	4
);

// Consent fields ("Consentement légal"): the plugin's French translation lacks these two words.
add_filter(
	'gettext_fluentform',
	static fn( $translation, $text ) => array(
		'Accepted' => 'Accepté',
		'Declined' => 'Refusé',
	)[ $text ] ?? $translation,
	10,
	2
);
