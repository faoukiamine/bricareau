<?php
/**
 * Water diagnostic (WaterDiagnosticQuiz.tsx). The questions are steps handled by view.js;
 * the last step is a Fluent Forms form, whose hidden fields receive the answers.
 *
 * Answer values stay in French (they are the keys of the rules below); only what is shown
 * is translated. The rules and the summary labels reach view.js already translated.
 *
 * @var array $attributes
 */

$softener = '/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire/';
$filters  = '/systemes-de-filtration-d-eau-specialises-pour-toute-la-maison/';
// [ symptoms that trigger it, title (null: softener, named after the water source), description, link ].
$rules = array(
	array( array( 'Accumulation de tartre', 'Résidus de savon', 'Plats tachetés', 'Linge rêche', 'cheveux secs et ternes', 'Peau sèche et irritée', 'Eau dure' ), null, __( 'Élimine le calcaire et la dureté pour protéger vos tuyaux, vos électroménagers et votre peau.', 'bricareau' ), $softener ),
	array( array( 'Plomb', 'Nitrate', 'Microplastiques', 'PFAS', 'Amer', 'Salé' ), __( "Système d'osmose inverse", 'bricareau' ), __( 'Filtration moléculaire avancée pour éliminer plomb, nitrates et PFAS, garantissant une eau de boisson pure.', 'bricareau' ), '/stations-d-eau-potables-sous-l-evier-de-la-cuisine/' ),
	array( array( 'Chlore (Contaminant)', 'Chlore (Goût/Odeur)', 'Mauvais goût' ), __( 'Filtre spécialisé Chlor Stop', 'bricareau' ), __( 'Élimine le chlore et les mauvais goûts pour une eau rafraîchissante et sans odeur de produits chimiques.', 'bricareau' ), $filters ),
	array( array( 'Arsenic' ), __( 'Filtre spécialisé Zéro-As', 'bricareau' ), __( "Média filtrant haute performance conçu spécifiquement pour l'élimination sécuritaire de l'arsenic.", 'bricareau' ), $filters ),
	array( array( 'Bactéries' ), __( 'Système de désinfection UV', 'bricareau' ), __( 'Désinfection microbiologique totale éliminant bactérie E. coli, virus et kystes sans résidus chimiques.', 'bricareau' ), '/systemes-de-desinfection-uv/' ),
	array( array( 'Métallique', 'Taches de rouille' ), __( 'Filtre spécialisé Iron Shield', 'bricareau' ), __( 'Protection efficace contre le fer et les sédiments métalliques qui tachent la plomberie.', 'bricareau' ), $filters ),
	array( array( "Odeur d'oeuf pourri" ), __( 'Filtre spécialisé Oxy-Pure', 'bricareau' ), __( "Élimine instantanément l'odeur d'oeufs pourris (soufre) par oxydation naturelle.", 'bricareau' ), $filters ),
	array( array( 'Nuageux' ), __( 'Filtre spécialisé Vortex', 'bricareau' ), __( "Clarifie l'eau trouble en éliminant les particules en suspension et sédiments fins.", 'bricareau' ), $filters ),
	array( array( 'Corrosion des tuyaux', 'Taches bleu-vert' ), __( 'Filtre neutralisant Zen-pH', 'bricareau' ), __( "Neutralise l'eau corrosive pour protéger vos tuyaux de cuivre contre l'amincissement et les taches vertes.", 'bricareau' ), $filters ),
);

$form_id  = (int) ( $attributes['formId'] ?? 0 );
$single   = array(
	array( 'occupancy', __( 'Étape 01 — Statut', 'bricareau' ), __( 'Êtes-vous propriétaire ou locataire ?', 'bricareau' ), array( 'Propriétaire', 'Locataire' ), 'md:grid-cols-2 max-w-xl' ),
	array( 'residence', __( 'Étape 02 — Habitat', 'bricareau' ), __( "Quel type d'habitation ?", 'bricareau' ), array( 'Chalet', 'Condo', 'Maison' ), 'sm:grid-cols-3 max-w-2xl' ),
	array( 'source', __( 'Étape 03 — Source', 'bricareau' ), __( "D'où provient votre eau ?", 'bricareau' ), array( 'Municipal', 'Eau de puits' ), 'md:grid-cols-2 max-w-xl' ),
	array( 'household', __( 'Étape 04 — Foyer', 'bricareau' ), __( 'Combien de personnes ?', 'bricareau' ), array( '1 à 2', '3 à 5', '6+' ), 'sm:grid-cols-3 max-w-xl' ),
);
$symptoms = array(
	array( __( 'Accumulation et taches', 'bricareau' ), array( 'Accumulation de tartre', 'Corrosion des tuyaux', 'Linge rêche', 'Plats tachetés', 'Résidus de savon', 'Taches de rouille', 'Taches bleu-vert' ) ),
	array( __( 'Peau et cheveux', 'bricareau' ), array( 'cheveux secs et ternes', 'Peau sèche et irritée' ) ),
	array( __( 'Goût, odeur et aspect', 'bricareau' ), array( 'Amer', 'Chlore (Goût/Odeur)', 'Mauvais goût', 'Métallique', 'Moisisserie', 'Nuageux', "Odeur d'oeuf pourri", 'Salé' ) ),
	array( __( 'Contaminants', 'bricareau' ), array( 'Arsenic', 'Bactéries', 'Chlore (Contaminant)', 'Eau dure', 'Microplastiques', 'Nitrate', 'PFAS', 'Plomb' ) ),
);
$step     = 0;
$kicker   = 'text-[10px] font-black uppercase tracking-[0.2em] text-[#18448F] text-center';
$question = 'text-center text-[24px] leading-[28px] font-medium text-slate-900';
$next     = 'relative w-full sm:w-auto inline-flex items-center justify-center bg-[#18448F] text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed';
$prev     = 'relative w-full sm:w-auto inline-flex items-center justify-center bg-white border border-[#18448F] text-[#18448F] rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs';
$nav      = function ( $first, $required ) use ( $next, $prev ) {
	?>
	<div class="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
		<?php if ( ! $first ) : ?>
			<button type="button" data-quiz-prev class="<?php echo esc_attr( $prev ); ?>"><?php echo bricareau_icon( 'arrow-left', 'w-4 h-4 mr-2' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><?php esc_html_e( 'Précédent', 'bricareau' ); ?></button>
		<?php endif; ?>
		<button type="button" data-quiz-next <?php echo $required ? 'disabled' : ''; ?> class="<?php echo esc_attr( $next ); ?>"><?php esc_html_e( 'Suivant', 'bricareau' ); ?><?php echo bricareau_icon( 'arrow-right', 'ml-2 w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></button>
	</div>
	<?php
};
$wrapper  = bricareau_block_wrapper( $attributes, array( 'class' => 'relative overflow-hidden bg-white pb-20 lg:pb-16 pt-12' ) );
?>
<?php
$quiz_data = array(
	'rules'   => array_map( fn( $rule ) => array( $rule[0], $rule[1], $rule[2], html_entity_decode( bricareau_url( $rule[3] ) ) ), $rules ),
	'labels'  => array(
		'softenerCity' => __( "Adoucisseur d'Eau Municipal", 'bricareau' ),
		'softenerWell' => __( "Adoucisseur d'Eau de Puits", 'bricareau' ),
		'customTitle'  => __( 'Solution Bricareau Sur Mesure', 'bricareau' ),
		'customDesc'   => __( 'Une consultation personnalisée est recommandée pour votre situation.', 'bricareau' ),
		'customLink'   => html_entity_decode( bricareau_url( '/contact/' ) ),
		'product'      => __( 'Voir le produit →', 'bricareau' ),
		'status'       => __( 'Statut', 'bricareau' ),
		'residence'    => __( 'Habitation', 'bricareau' ),
		'source'       => __( 'Source', 'bricareau' ),
		'household'    => __( 'Personnes', 'bricareau' ),
		'symptoms'     => __( 'Symptômes', 'bricareau' ),
		'none'         => __( 'aucun', 'bricareau' ),
		'colon'        => _x( ' : ', 'label separator', 'bricareau' ),
	),
	// Answer values (French keys) => shown text, for the summary sent with the form.
	'answers' => array(),
);
foreach ( array_merge( ...array_map( fn( $question ) => $question[3], $single ), ...array_map( fn( $group ) => $group[1], $symptoms ) ) as $value ) {
	$quiz_data['answers'][ $value ] = __( $value, 'bricareau' ); // phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText -- answers listed above.
}
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?> data-bricareau-quiz data-quiz="<?php echo esc_attr( wp_json_encode( $quiz_data ) ); ?>">
	<div class="w-full max-w-4xl mx-auto px-4 md:px-6" id="quiz-container">
		<div class="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_22px_70px_4px_rgba(0,0,0,0.06)]">
			<div class="pt-10 px-0 sm:px-12 w-full">
				<div class="flex items-center justify-center gap-2 sm:gap-12 mb-8 max-w-xl mx-auto w-full">
					<?php foreach ( array( __( 'Profil', 'bricareau' ), __( 'Évaluation', 'bricareau' ), __( 'Résultats', 'bricareau' ) ) as $i => $label ) : ?>
						<div data-quiz-dot="<?php echo $i + 1; ?>" class="group/dot flex flex-col items-center gap-3 px-2 sm:px-4 text-center" <?php echo 0 === $i ? 'data-active' : ''; ?>>
							<span class="w-2.5 h-2.5 rounded-full bg-slate-200 group-data-[active]/dot:bg-[#18448F] group-data-[active]/dot:ring-4 group-data-[active]/dot:ring-[#18448F]/10 transition-all"></span>
							<span class="text-[8px] sm:text-[9px] font-black uppercase tracking-tight sm:tracking-widest text-slate-300 group-data-[active]/dot:text-[#18448F]"><?php echo esc_html( $label ); ?></span>
						</div>
					<?php endforeach; ?>
				</div>
			</div>

			<div class="py-8 md:py-12 px-4 md:px-12 min-h-[400px]">
				<?php foreach ( $single as [ $name, $eyebrow, $text, $options, $grid ] ) : ?>
					<?php $step++; ?>
					<div data-quiz-step="<?php echo (int) $step; ?>" <?php echo 1 === $step ? '' : 'hidden'; ?> class="space-y-4 py-4">
						<p class="<?php echo esc_attr( $kicker ); ?>"><?php echo esc_html( $eyebrow ); ?></p>
						<h3 class="<?php echo esc_attr( $question ); ?>"><?php echo esc_html( $text ); ?></h3>
						<div class="grid grid-cols-1 <?php echo esc_attr( $grid ); ?> gap-3 mx-auto pt-4">
							<?php foreach ( $options as $option ) : ?>
								<label class="flex items-center justify-center p-8 rounded-[2rem] border-2 cursor-pointer transition-all border-slate-50 bg-slate-50/30 hover:bg-slate-50 has-[:checked]:border-[#18448F] has-[:checked]:bg-[#18448F]/5 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[#18448F]">
									<input type="radio" class="sr-only" name="<?php echo esc_attr( $name ); ?>" value="<?php echo esc_attr( $option ); ?>" data-quiz-answer data-label="<?php echo esc_attr( $text ); ?>">
									<span class="text-xl font-light text-slate-900"><?php echo esc_html( __( $option, 'bricareau' ) ); // phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText ?></span>
								</label>
							<?php endforeach; ?>
						</div>
						<?php $nav( 1 === $step, true ); ?>
					</div>
				<?php endforeach; ?>

				<?php foreach ( $symptoms as [ $title, $options ] ) : ?>
					<?php $step++; ?>
					<div data-quiz-step="<?php echo (int) $step; ?>" hidden class="space-y-8 py-4">
						<div class="text-center max-w-xl mx-auto space-y-2">
							<p class="<?php echo esc_attr( $kicker ); ?>"><?php echo esc_html( sprintf( /* translators: %s: step number */ __( 'Étape %s — Symptômes', 'bricareau' ), sprintf( '%02d', $step ) ) ); ?></p>
							<h3 class="<?php echo esc_attr( $question ); ?>"><?php echo esc_html( $title ); ?></h3>
							<p class="text-slate-500 text-sm font-light"><?php esc_html_e( 'Cochez les éléments observés chez vous.', 'bricareau' ); ?></p>
						</div>
						<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
							<?php foreach ( $options as $option ) : ?>
								<label class="p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 border-slate-50 bg-white hover:bg-slate-50 has-[:checked]:border-[#18448F] has-[:checked]:bg-[#18448F]/5">
									<input type="checkbox" value="<?php echo esc_attr( $option ); ?>" data-quiz-sign class="w-4 h-4 accent-[#18448F]">
									<span class="text-sm font-light text-slate-800 leading-tight"><?php echo esc_html( preg_replace( '/ \(.*\)/', '', __( $option, 'bricareau' ) ) ); // phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText ?></span>
								</label>
							<?php endforeach; ?>
						</div>
						<?php $nav( false, false ); ?>
					</div>
				<?php endforeach; ?>

				<?php $step++; ?>
				<div data-quiz-step="<?php echo (int) $step; ?>" hidden class="flex flex-col gap-8 max-w-xl mx-auto py-4">
					<div class="text-center space-y-2">
						<p class="<?php echo esc_attr( $kicker ); ?>"><?php esc_html_e( 'Résultats', 'bricareau' ); ?></p>
						<h3 class="<?php echo esc_attr( $question ); ?>"><?php esc_html_e( 'Où envoyer votre rapport ?', 'bricareau' ); ?></h3>
					</div>
					<div class="bricareau-form">
						<?php
						if ( $form_id && shortcode_exists( 'fluentform' ) ) {
							echo do_shortcode( '[fluentform id="' . $form_id . '"]' ); // phpcs:ignore WordPress.Security.EscapeOutput
						} else {
							echo '<p class="text-center text-base text-slate-500">' . esc_html__( 'Choisissez un formulaire dans les réglages du bloc.', 'bricareau' ) . '</p>';
						}
						?>
					</div>
					<div class="flex justify-center"><button type="button" data-quiz-prev class="<?php echo esc_attr( $prev ); ?>"><?php echo bricareau_icon( 'arrow-left', 'w-4 h-4 mr-2' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><?php esc_html_e( 'Précédent', 'bricareau' ); ?></button></div>
				</div>

				<div data-quiz-results hidden class="w-full py-4 flex flex-col items-center">
					<div class="text-center mb-8 w-full flex flex-col items-center">
						<?php echo bricareau_icon( 'shield-check', 'w-10 h-10 text-[#18448F] mx-auto mb-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						<h2 class="mb-2 text-[24px] leading-[28px] font-medium text-slate-900"><?php esc_html_e( "Votre rapport d'eau", 'bricareau' ); ?></h2>
						<p class="text-base text-slate-500"><?php esc_html_e( 'Solutions recommandées pour votre foyer.', 'bricareau' ); ?></p>
					</div>
					<div data-quiz-recs class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 w-full"></div>
					<div class="flex flex-col items-center gap-8 pt-6 border-t border-slate-100 w-full">
						<a href="<?php echo bricareau_url( '/contact' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>" class="<?php echo esc_attr( $next ); ?>"><?php esc_html_e( 'Prendre rendez-vous avec un expert', 'bricareau' ); ?></a>
						<a href="<?php echo esc_url( get_permalink() ?: home_url( '/diagnostic/' ) ); ?>" class="<?php echo esc_attr( $prev ); ?>"><?php esc_html_e( 'Relancer le diagnostic', 'bricareau' ); ?></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
