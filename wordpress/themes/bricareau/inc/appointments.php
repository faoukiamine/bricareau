<?php
/**
 * Back-office appointment calendar: the dates and times chosen in the "Demande de
 * consultation" and "Planifier un test d'eau" forms (Fluent Forms entries), shown on a
 * month / week calendar (Rendez-vous menu) and in a dashboard widget.
 *
 * Read-only: entries are still managed in Fluent Forms > Entrées; each appointment links
 * to its entry. Visible to users who can see Fluent Forms entries.
 */

/** Forms with an appointment (seeded slugs, see inc/seed/forms.php), with their colour. */
function bricareau_appointment_forms() {
	$ids   = get_option( 'bricareau_seeded_forms', array() );
	$forms = array(
		'consultation' => array( 'label' => 'Consultation', 'color' => '#18448F' ),
		'test-eau'     => array( 'label' => "Test d'eau", 'color' => '#5f9a1c' ),
	);
	// The English copies of the forms ("<slug>-en") share the label and colour.
	foreach ( array_keys( $forms ) as $slug ) {
		$forms[ $slug . '-en' ] = $forms[ $slug ];
	}
	foreach ( $forms as $slug => $form ) {
		if ( empty( $ids[ $slug ] ) ) {
			unset( $forms[ $slug ] );
			continue;
		}
		$forms[ $slug ]['id'] = (int) $ids[ $slug ];
	}
	return $forms;
}

function bricareau_can_view_appointments() {
	if ( current_user_can( 'manage_options' ) ) {
		return true;
	}
	return class_exists( '\FluentForm\App\Modules\Acl\Acl' ) && \FluentForm\App\Modules\Acl\Acl::hasPermission( 'fluentform_entries_viewer' );
}

/**
 * Appointments from the form entries (trash and spam left out), sorted by date and time.
 *
 * @param string $from Optional first day (Y-m-d).
 */
function bricareau_get_appointments( $from = '' ) {
	global $wpdb;
	$forms = bricareau_appointment_forms();
	if ( ! $forms ) {
		return array();
	}
	$by_id = array_column( array_map( fn( $slug, $form ) => $form + array( 'slug' => $slug ), array_keys( $forms ), $forms ), null, 'id' );
	$ids   = implode( ',', array_map( 'intval', array_keys( $by_id ) ) );
	$rows  = $wpdb->get_results( "SELECT id, form_id, status, response FROM {$wpdb->prefix}fluentform_submissions WHERE form_id IN ($ids) AND status NOT IN ('trashed', 'spam')" ); // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared -- integer ids.

	$appointments = array();
	foreach ( $rows as $row ) {
		$data = json_decode( $row->response, true ) ?: array();
		$time = strtotime( (string) ( $data['appointment_date'] ?? '' ) );
		if ( ! $time ) {
			continue;
		}
		$date = gmdate( 'Y-m-d', $time );
		if ( $from && $date < $from ) {
			continue;
		}
		$form           = $by_id[ (int) $row->form_id ];
		$kits           = $data['water_test_kits'] ?? array();
		$appointments[] = array(
			'id'      => (int) $row->id,
			'form'    => $form['slug'],
			'label'   => $form['label'],
			'color'   => $form['color'],
			'date'    => $date,
			'time'    => preg_match( '/^\d{1,2}:\d{2}$/', (string) ( $data['appointment_time'] ?? '' ) ) ? $data['appointment_time'] : '',
			'name'    => trim( ( $data['prenom'] ?? '' ) . ' ' . ( $data['nom'] ?? '' ) ) ?: 'Sans nom',
			'phone'   => (string) ( $data['phone'] ?? '' ),
			'email'   => (string) ( $data['email'] ?? '' ),
			'city'    => (string) ( $data['ville'] ?? '' ),
			'address' => trim( implode( ', ', array_filter( array( $data['address'] ?? '', $data['ville'] ?? '', $data['code_postal'] ?? '' ) ) ) ),
			'details' => is_array( $kits ) ? implode( ', ', $kits ) : (string) $kits,
			'unread'  => 'unread' === $row->status,
			'url'     => admin_url( 'admin.php?page=fluent_forms&form_id=' . $row->form_id . '&route=entries#/entries/' . $row->id ),
		);
	}
	usort( $appointments, fn( $a, $b ) => strcmp( $a['date'] . $a['time'], $b['date'] . $b['time'] ) );
	return $appointments;
}

add_action(
	'admin_menu',
	static function () {
		if ( ! bricareau_can_view_appointments() ) {
			return;
		}
		// Capability "read": access is checked above (admins or Fluent Forms entry viewers).
		add_menu_page( 'Rendez-vous', 'Rendez-vous', 'read', 'bricareau-rendez-vous', 'bricareau_appointments_page', 'dashicons-calendar-alt', 26 );
	}
);

add_action(
	'admin_enqueue_scripts',
	static function ( $hook ) {
		if ( 'toplevel_page_bricareau-rendez-vous' !== $hook ) {
			return;
		}
		$version = BRICAREAU_VERSION;
		wp_enqueue_style( 'bricareau-appointments', BRICAREAU_URI . '/assets/admin/appointments.css', array(), $version );
		wp_enqueue_script( 'bricareau-appointments', BRICAREAU_URI . '/assets/admin/appointments.js', array(), $version, true );
		wp_add_inline_script(
			'bricareau-appointments',
			'window.bricareauAppointments = ' . wp_json_encode(
				array(
					'appointments' => bricareau_get_appointments(),
					'forms'        => array_values( array_column( bricareau_appointment_forms(), null, 'label' ) ),
					'today'        => wp_date( 'Y-m-d' ),
				)
			) . ';',
			'before'
		);
	}
);

function bricareau_appointments_page() {
	if ( ! bricareau_can_view_appointments() ) {
		wp_die( 'Accès refusé.', 403 );
	}
	?>
	<div class="wrap">
		<h1>Rendez-vous</h1>
		<p class="description">Dates et heures choisies dans les formulaires « Demande de consultation » et « Planifier un test d'eau ». Cliquez sur un rendez-vous pour voir la demande.</p>
		<div id="bricareau-appointments" class="bricareau-cal"><p>Chargement du calendrier…</p></div>
	</div>
	<?php
}

add_action(
	'wp_dashboard_setup',
	static function () {
		if ( ! bricareau_can_view_appointments() ) {
			return;
		}
		wp_add_dashboard_widget( 'bricareau_appointments', 'Prochains rendez-vous', 'bricareau_appointments_widget' );
	}
);

function bricareau_appointments_widget() {
	$upcoming = array_slice( bricareau_get_appointments( wp_date( 'Y-m-d' ) ), 0, 8 );
	if ( ! $upcoming ) {
		echo '<p>Aucun rendez-vous à venir.</p>';
	} else {
		echo '<ul style="margin:0">';
		foreach ( $upcoming as $appointment ) {
			printf(
				'<li style="display:flex;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px solid #f0f0f1;margin:0"><span style="flex:none;width:8px;height:8px;border-radius:50%%;background:%1$s"></span><span style="flex:none;min-width:118px;font-variant-numeric:tabular-nums">%2$s</span><a href="%3$s" style="%4$s">%5$s</a><span style="color:#646970">%6$s</span></li>',
				esc_attr( $appointment['color'] ),
				esc_html( wp_date( 'D j M', strtotime( $appointment['date'] . ' 12:00' ) ) . ( $appointment['time'] ? ' · ' . $appointment['time'] : '' ) ),
				esc_url( $appointment['url'] ),
				$appointment['unread'] ? 'font-weight:600' : '',
				esc_html( $appointment['name'] ),
				esc_html( $appointment['label'] )
			);
		}
		echo '</ul>';
	}
	printf( '<p style="margin:12px 0 0"><a href="%s" class="button">Ouvrir le calendrier</a></p>', esc_url( admin_url( 'admin.php?page=bricareau-rendez-vous' ) ) );
}
