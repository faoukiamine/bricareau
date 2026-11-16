<?php
/**
 * Fluent Forms created by `wp bricareau seed` (rebuilt from the React forms).
 *
 * Fields are cloned from Fluent Forms' own default element definitions, so the
 * forms stay fully editable in its drag-and-drop editor afterwards. Multi-step
 * forms need Fluent Forms Pro, so steps are rendered as sections on one page.
 */

defined( 'ABSPATH' ) || exit;

class Bricareau_Form_Seeder {

	/** @var array Fluent Forms default elements, flattened by element name. */
	private $defaults = array();

	/** @var array French => English texts while the English forms are seeded (inc/seed/forms-en.php). */
	private $dict = array();

	public function __construct() {
		$groups         = fluentformLoadFile( 'Services/FormBuilder/DefaultElements.php' );
		$this->defaults = array_merge( $groups['general'], $groups['advanced'], $groups['container'] );
	}

	/**
	 * Creates each form once (or rewrites it with $force; entries are kept) and
	 * returns their ids keyed by slug. An existing form only gets the visitor
	 * confirmation email when it has none yet; nothing else of it is changed.
	 *
	 * @return array<string, int>
	 */
	public function seed( $force = false, $english = false ) {
		$ids         = get_option( 'bricareau_seeded_forms', array() );
		$definitions = $this->definitions();
		// English copies ("<slug>-en") for the English pages.
		if ( $english ) {
			$this->dict = require __DIR__ . '/forms-en.php';
			foreach ( $definitions as $slug => $definition ) {
				$definitions[ $slug . '-en' ] = $this->translate( $definition );
			}
		}

		foreach ( $definitions as $slug => $definition ) {
			$this->dict = str_ends_with( $slug, '-en' ) ? require __DIR__ . '/forms-en.php' : array();
			$exists = ! empty( $ids[ $slug ] ) && \FluentForm\App\Models\Form::find( $ids[ $slug ] );
			if ( $exists && ! $force ) {
				$this->add_missing_acknowledgement( (int) $ids[ $slug ], $definition );
				continue;
			}
			$ids[ $slug ] = $this->save( $definition, $exists ? (int) $ids[ $slug ] : 0 );
			WP_CLI::log( "Formulaire « {$definition['title']} » enregistré (ID {$ids[ $slug ]})." );
		}

		$this->dict = array();
		update_option( 'bricareau_seeded_forms', $ids, false );
		return $ids;
	}

	/** Text in the language being seeded. */
	private function t( $text ) {
		return $this->dict[ $text ] ?? $text;
	}

	/** Replaces every French text of a definition that has an English version. */
	private function translate( $definition ) {
		array_walk_recursive(
			$definition,
			function ( &$value ) {
				if ( is_string( $value ) && isset( $this->dict[ $value ] ) ) {
					$value = $this->dict[ $value ];
				}
			}
		);
		return $definition;
	}

	private function save( $definition, $id ) {
		if ( ! $id ) {
			$form = ( new \FluentForm\App\Services\Form\FormService() )->store(
				array(
					'predefined' => 'blank_form',
					'title'      => $definition['title'],
				)
			);
			$id   = (int) $form->id;
		}

		$fields = json_decode( \FluentForm\App\Models\Form::find( $id )->form_fields, true );
		unset( $fields['stepsWrapper'] );
		$fields['fields']                                        = $definition['fields'];
		$fields['submitButton']['settings']['button_ui']['text'] = $definition['submit'];
		$fields['submitButton']['settings']['background_color']  = '#18448F';

		\FluentForm\App\Models\Form::where( 'id', $id )->update(
			array(
				'title'       => $definition['title'],
				'form_fields' => wp_json_encode( $fields ),
			)
		);

		$settings = \FluentForm\App\Models\FormMeta::retrieve( 'formSettings', $id );
		if ( is_array( $settings ) ) {
			$settings['confirmation']['messageToShow'] = $definition['confirmation'];
			$settings['confirmation']['redirectTo']    = 'samePage';
			\FluentForm\App\Models\FormMeta::persist( $id, 'formSettings', $settings );
		}

		$this->save_notifications( $id, $definition );

		return $id;
	}

	/**
	 * Emails each request to the address set in Réglages > Demandes du site and,
	 * when the form defines an acknowledgement, confirms receipt to the visitor.
	 * Both remain editable in the form's Email Notifications settings.
	 */
	private function save_notifications( $id, $definition ) {
		\FluentForm\App\Models\FormMeta::where( 'form_id', $id )->where( 'meta_key', 'notifications' )->delete();

		$notifications = array();
		if ( ! empty( $definition['notify'] ) ) {
			$notifications[] = $this->notification(
				$this->t( 'Demande envoyée à Bricareau' ),
				array( 'type' => 'email', 'email' => '{bricareau_requests_email}', 'field' => 'email' ),
				$definition['subject'] ?? $definition['title'] . ( $this->dict ? ': ' : ' : ' ) . '{inputs.prenom} {inputs.nom}',
				$definition['message'] ?? '<p>{all_data}</p><p>' . $this->t( 'Envoyé depuis : {embed_post.permalink}' ) . '</p>',
				'{inputs.email}'
			);
		}
		if ( ! empty( $definition['acknowledge'] ) ) {
			$notifications[] = $this->acknowledgement( $definition );
		}

		foreach ( $notifications as $notification ) {
			$this->insert_notification( $id, $notification );
		}
	}

	/** Confirmation sent to the address the visitor typed in the form's "email" field. */
	private function acknowledgement( $definition ) {
		$message = str_replace( '{unsubscribe_url}', esc_url( home_url( '/desabonnement/' ) ), $definition['ack_message'] ?? $definition['confirmation'] );
		return $this->notification(
			$this->t( 'Accusé de réception au client' ),
			array( 'type' => 'field', 'email' => '', 'field' => 'email' ),
			$definition['ack_subject'] ?? $this->t( 'Bricareau : nous avons bien reçu votre demande' ),
			$message . '<p>' . sprintf( $this->t( 'Pour toute question : %s' ), BRICAREAU_PHONE_DISPLAY ) . '</p>'
		);
	}

	private function add_missing_acknowledgement( $id, $definition ) {
		if ( empty( $definition['acknowledge'] ) ) {
			return;
		}
		$existing = \FluentForm\App\Models\FormMeta::where( 'form_id', $id )->where( 'meta_key', 'notifications' )->pluck( 'value' );
		foreach ( $existing as $value ) {
			if ( 'field' === ( json_decode( $value, true )['sendTo']['type'] ?? '' ) ) {
				return;
			}
		}
		$this->insert_notification( $id, $this->acknowledgement( $definition ) );
		WP_CLI::log( "Formulaire « {$definition['title']} » : courriel de confirmation au client ajouté." );
	}

	private function insert_notification( $id, $notification ) {
		\FluentForm\App\Models\FormMeta::insert(
			array(
				'form_id'  => $id,
				'meta_key' => 'notifications',
				'value'    => wp_json_encode( $notification ),
			)
		);
	}

	private function notification( $name, $send_to, $subject, $message, $reply_to = '' ) {
		$send_to['routing'] = array( array( 'email' => null, 'field' => null, 'operator' => '=', 'value' => null ) );
		return array(
			'name'           => $name,
			'sendTo'         => $send_to,
			'fromName'       => 'Bricareau',
			'fromEmail'      => '',
			'replyTo'        => $reply_to,
			'bcc'            => '',
			'subject'        => $subject,
			'message'        => $message,
			'conditionals'   => array( 'status' => false, 'type' => 'all', 'conditions' => array( array( 'field' => null, 'operator' => '=', 'value' => null ) ) ),
			'enabled'        => true,
			'email_template' => '',
		);
	}

	/**
	 * Clones a default element and applies overrides (deep merge).
	 */
	private function field( $element, $overrides ) {
		$field              = array_replace_recursive( $this->defaults[ $element ], $overrides );
		$field['uniqElKey'] = 'el_' . wp_generate_password( 12, false );
		unset( $field['index'] );
		return $field;
	}

	private function text( $name, $label, $required = true, $type = 'text', $value = '' ) {
		$element = 'email' === $type ? 'input_email' : 'input_text';
		return $this->field(
			$element,
			array(
				'attributes' => array( 'name' => $name, 'type' => $type, 'value' => $value, 'placeholder' => '' ),
				'settings'   => array(
					'label'             => $label,
					'admin_field_label' => $label,
					'validation_rules'  => array( 'required' => array( 'value' => $required, 'message' => 'Ce champ est requis.' ) ),
				),
			)
		);
	}

	private function message( $label ) {
		return $this->field(
			'textarea',
			array(
				'attributes' => array( 'name' => 'message', 'placeholder' => '', 'rows' => 5 ),
				'settings'   => array( 'label' => $label, 'admin_field_label' => $label ),
			)
		);
	}

	private function hidden( $name ) {
		return $this->field(
			'input_hidden',
			array(
				'attributes' => array( 'name' => $name, 'value' => '' ),
				'settings'   => array( 'admin_field_label' => ucfirst( $name ) ),
			)
		);
	}

	private function options( $values ) {
		return array_map( fn( $value ) => array( 'label' => $value, 'value' => $value, 'calc_value' => '', 'image' => '' ), $values );
	}

	private function choice( $element, $name, $label, $values, $required = true, $admin_label = '' ) {
		$field = $this->field(
			$element,
			array(
				'attributes' => array( 'name' => $name ),
				'settings'   => array(
					'label'             => $label,
					'admin_field_label' => $admin_label ?: $label,
					'validation_rules'  => array( 'required' => array( 'value' => $required, 'message' => 'Veuillez faire un choix.' ) ),
				),
			)
		);
		$field['settings']['advanced_options'] = $this->options( $values );
		if ( 'select' === $element ) {
			$field['settings']['placeholder'] = 'Sélectionnez une option';
		}
		return $field;
	}

	/**
	 * Heading that groups the fields below it.
	 */
	private function section( $label ) {
		return $this->field( 'section_break', array( 'settings' => array( 'label' => $label, 'description' => '' ) ) );
	}

	/**
	 * Side-by-side fields (one column each).
	 */
	private function columns( ...$fields ) {
		$container            = $this->defaults[ 'container_' . count( $fields ) . '_col' ];
		$container['columns'] = array_map( fn( $field ) => array( 'width' => '', 'left' => '', 'fields' => array( $field ) ), $fields );
		$container['uniqElKey'] = 'el_' . wp_generate_password( 12, false );
		unset( $container['index'] );
		return $container;
	}

	private function consent_fields( $marketing = true ) {
		return array_merge( $this->legal_consent(), $marketing ? array( $this->choice( 'input_checkbox', 'marketing_consent', '', array( 'Je souhaite recevoir les prochaines communications de Bricareau. (Vous pouvez vous désabonner à tout moment.)' ), false, 'Consentement marketing' ) ) : array() );
	}

	private function legal_consent() {
		return array(
			$this->field(
				'terms_and_condition',
				array(
					'attributes' => array( 'name' => 'legal_consent' ),
					'settings'   => array(
						'tnc_html'          => 'En cochant cette case ou en utilisant le site web Bricareau.com, vous reconnaissez avoir lu les <a href="/conditions-generales-utilisation" target="_blank" rel="noopener">Conditions générales</a> et la <a href="/politique-de-confidentialite" target="_blank" rel="noopener">Politique de confidentialité</a>, les comprendre et accepter d\'y être lié.',
						'admin_field_label' => 'Consentement légal',
						'validation_rules'  => array( 'required' => array( 'value' => true, 'message' => 'Vous devez accepter les conditions.' ) ),
					),
				)
			),
		);
	}

	/**
	 * Form definitions, keyed by slug (used by page definitions through $form()).
	 */
	private function definitions() {
		$date = fn() => $this->field(
			'input_date',
			array(
				'attributes' => array( 'name' => 'appointment_date' ),
				'settings'   => array(
					'label'             => 'Choisir une date',
					'admin_field_label' => 'Date du rendez-vous',
					'date_format'       => 'Y-m-d',
					'is_time_enabled'   => false,
					// Next 7 days, no Sundays (same rule as the React forms).
					'date_config'       => '{ minDate: "today", maxDate: new Date().fp_incr(7), disable: [ function (date) { return date.getDay() === 0; } ] }',
					'validation_rules'  => array( 'required' => array( 'value' => true, 'message' => 'Veuillez choisir une date.' ) ),
				),
			)
		);

		$identity = fn() => array(
			$this->columns( $this->text( 'prenom', 'Prénom' ), $this->text( 'nom', 'Nom' ) ),
			$this->columns( $this->text( 'email', 'Courriel', true, 'email' ), $this->text( 'phone', 'Téléphone', true, 'tel' ) ),
		);
		$address  = fn() => array(
			$this->text( 'address', 'Adresse' ),
			$this->columns( $this->text( 'ville', 'Ville' ), $this->text( 'province', 'Province', true, 'text', 'Québec' ), $this->text( 'code_postal', 'Code postal' ) ),
		);

		return array(
			'test-eau'             => array(
				'title'        => "Planifier un test d'eau",
				'submit'       => 'Planifier mon test',
				'notify'       => true,
				'acknowledge'  => true,
				'confirmation' => "<p><strong>Demande reçue!</strong></p><p>Merci de nous avoir contactés pour votre test d'eau. Un expert de Bricareau confirmera votre rendez-vous sous peu.</p>",
				'fields'       => array_merge(
					array( $this->section( 'Vos coordonnées' ) ),
					$identity(),
					$address(),
					array(
						$this->section( "Vos trousses d'analyse" ),
						$this->choice( 'input_checkbox', 'water_test_kits', "Choisir vos trousses d'analyse", array( 'Analyse microbiologique', 'Analyse physico-chimique Type I', 'Analyse physico-chimique Type II', 'Bilan complet' ) ),
						$this->section( 'Votre rendez-vous' ),
						$date(),
						$this->choice( 'input_radio', 'appointment_time', 'Choisir une heure', array( '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00' ) ),
					),
					$this->consent_fields()
				),
			),
			'consultation'         => array(
				'title'        => 'Demande de consultation',
				'submit'       => 'Confirmer RDV',
				'notify'       => true,
				'acknowledge'  => true,
				'confirmation' => '<p><strong>Demande reçue!</strong></p><p>Merci de nous avoir contactés. Un expert de Bricareau confirmera votre rendez-vous sous peu.</p>',
				'fields'       => array_merge(
					array( $this->section( 'Vos informations' ) ),
					$identity(),
					$address(),
					array(
						$this->section( 'Votre disponibilité' ),
						$date(),
						$this->choice( 'input_radio', 'appointment_time', 'Choisir une heure', array( '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00' ) ),
					),
					$this->consent_fields()
				),
			),
			'contact'              => array(
				'title'        => 'Demande de service',
				'submit'       => 'Envoyer le message',
				'notify'       => true,
				'acknowledge'  => true,
				'confirmation' => '<p><strong>Demande reçue!</strong></p><p>Merci de votre confiance. Un expert de Bricareau vous contactera sous peu.</p>',
				'fields'       => array_merge(
					$identity(),
					array(
						$this->choice( 'select', 'interest', 'Service requis', array( "Analyse d'eau", 'Entretien & Maintenance', 'Installation & Mise en service', "Réparations d'urgence", 'Demande de soumission' ) ),
						$this->message( 'Détails de votre demande' ),
					),
					$this->consent_fields( false )
				),
			),
			'contact-residentiel'  => array(
				'title'        => 'Contact résidentiel',
				'submit'       => 'Envoyez',
				'notify'       => true,
				'acknowledge'  => true,
				'confirmation' => '<p><strong>Message envoyé!</strong></p><p>Nous vous contacterons bientôt.</p>',
				'fields'       => array_merge(
					$identity(),
					array(
						$this->choice( 'select', 'reason', 'Raison de la consultation', array( "Analyse d'eau", "Adoucisseur d'eau", "Filtre d'eau", "Station d'eau potable", "Fontaine d'eau", 'Entretien', 'Réparation', 'Livraison de sel', 'Autres' ) ),
						$this->message( 'Informations complémentaires/commentaires' ),
					),
					$this->consent_fields()
				),
			),
			'contact-entreprises'  => array(
				'title'        => 'Contact entreprises',
				'submit'       => 'Envoyez',
				'notify'       => true,
				'acknowledge'  => true,
				'confirmation' => '<p><strong>Message envoyé!</strong></p><p>Nous vous contacterons bientôt.</p>',
				'fields'       => array_merge(
					array(
						$this->columns( $this->text( 'prenom', 'Prénom' ), $this->text( 'nom', 'Nom' ) ),
						$this->text( 'company', 'Entreprise' ),
						$this->columns( $this->text( 'email', 'Courriel', true, 'email' ), $this->text( 'phone', 'Téléphone', true, 'tel' ) ),
						$this->choice( 'select', 'reason', 'Raison de la consultation', array( "Analyse d'eau", "Nouvelle installation d'une station d'eau potable", "Nouvelle installation d'une fontaine d'eau", 'Entretien', 'Réparation', 'Autres' ) ),
						$this->message( 'Informations complémentaires/commentaires' ),
					),
					$this->consent_fields()
				),
			),
			// Last step of the quiz: bricareau/water-quiz fills the hidden fields.
			'diagnostic'           => array(
				'title'        => "Diagnostic de l'eau",
				'submit'       => 'Obtenir mon rapport',
				'notify'       => true,
				'acknowledge'  => true,
				'ack_subject'  => "Bricareau : votre diagnostic de l'eau",
				'ack_message'  => "<p>Bonjour {inputs.prenom},</p><p>Merci d'avoir répondu à notre diagnostic de l'eau. Selon vos réponses, voici les solutions que nous vous recommandons : <strong>{inputs.recommandations}</strong>.</p><p>Un expert de Bricareau peut confirmer ces recommandations par une analyse de votre eau.</p>",
				'confirmation' => '<p><strong>Votre rapport est prêt.</strong></p>',
				'fields'       => array_merge(
					$identity(),
					array(
						$this->hidden( 'reponses' ),
						$this->hidden( 'recommandations' ),
					),
					$this->consent_fields()
				),
			),
			'etude-technique'      => array(
				'title'        => 'Étude technique industrielle',
				'submit'       => 'Soumettre la demande',
				'notify'       => true,
				'acknowledge'  => true,
				'subject'      => 'Étude technique : {inputs.nom}',
				'confirmation' => '<p><strong>Demande reçue!</strong></p><p>Nos ingénieurs vous contacteront sous peu.</p>',
				'fields'       => array_merge(
					array(
						$this->columns( $this->text( 'nom', 'Nom Complet' ), $this->text( 'company', 'Entreprise / Usine' ) ),
						$this->columns( $this->text( 'phone', 'Téléphone Direct', true, 'tel' ), $this->text( 'email', 'Email Professionnel', true, 'email' ) ),
						$this->choice( 'select', 'filter_type', 'Type de filtration (Si connu)', array( 'Filtre Multimédia', 'Filtre à Charbon Actif', 'Filtre Catalytique / Sable Vert', 'Étude Complète (Incertain)' ) ),
						$this->message( 'Paramètres techniques (Débit requis, Problématique)' ),
					),
					$this->consent_fields( false )
				),
			),
			'desabonnement'        => array(
				'title'        => 'Demande de désabonnement',
				'submit'       => 'Confirmer le désabonnement',
				'notify'       => true,
				'subject'      => 'Demande de désabonnement : {inputs.email}',
				'acknowledge'  => true,
				'ack_subject'  => 'Bricareau : votre demande de désabonnement',
				'confirmation' => "<p><strong>Demande traitée.</strong></p><p>Si votre adresse est dans notre liste, elle en sera retirée. Vous ne recevrez plus nos courriels promotionnels.</p>",
				'fields'       => array(
					$this->choice( 'input_radio', 'reason', 'Pourquoi souhaitez-vous vous désabonner ?', array( 'Je reçois trop de courriels', "Le contenu n'est plus pertinent", 'Je ne me suis jamais abonné', "J'ai trouvé une autre solution", 'Autre (veuillez préciser)' ) ),
					$this->message( 'Précisions' ),
					$this->text( 'email', 'Votre adresse courriel', true, 'email' ),
				),
			),
			// Footer signup: kept in Fluent Forms > Entries; only the subscriber gets an email.
			'infolettre'           => array(
				'title'        => 'Infolettre',
				'submit'       => "S'inscrire",
				'acknowledge'  => true,
				'ack_subject'  => "Bienvenue dans l'infolettre Bricareau",
				'ack_message'  => "<p><strong>Merci de votre inscription!</strong></p><p>Vous recevrez nos conseils sur le traitement de l'eau et nos offres exclusives. Vous pouvez vous désabonner à tout moment sur <a href=\"{unsubscribe_url}\">notre page de désabonnement</a>.</p>",
				'confirmation' => '<p>Votre inscription a été enregistrée avec succès !</p>',
				'fields'       => array(
					$this->field(
						'input_email',
						array(
							'attributes' => array( 'name' => 'email', 'type' => 'email', 'placeholder' => 'Votre email' ),
							'settings'   => array(
								'label'             => '',
								'admin_field_label' => 'Courriel',
								'validation_rules'  => array(
									'required' => array( 'value' => true, 'message' => 'Veuillez entrer une adresse courriel valide.' ),
									'email'    => array( 'value' => true, 'message' => 'Veuillez entrer une adresse courriel valide.' ),
								),
							),
						)
					),
				),
			),
		);
	}
}
