<?php
/**
 * Contaminant glossary and Health Canada tables (ContaminantsEau.tsx). The reference
 * data comes from data/contaminants.json.
 *
 * @var array $attributes
 */

$data     = json_decode( file_get_contents( bricareau_data_file( 'contaminants.json' ) ), true );
$icons    = array( 'Bug' => 'bug', 'ShieldAlert' => 'shield-alert', 'Factory' => 'factory', 'Leaf' => 'leaf', 'Atom' => 'atom', 'Beaker' => 'beaker', 'Droplets' => 'droplets', 'FlaskConical' => 'flask-conical', 'Pill' => 'pill', 'Radiation' => 'radiation' );
$icon_of  = fn( $name ) => $icons[ $name ] ?? 'droplets';
$heads    = array( __( 'Contaminant', 'bricareau' ), __( 'Recommandation', 'bricareau' ), __( 'Sources Courantes', 'bricareau' ), __( 'Considérations Santé', 'bricareau' ) );
$tabs     = array( 'micro' => __( 'Microbiologiques', 'bricareau' ), 'chimiques' => __( 'Chimiques', 'bricareau' ), 'radio' => __( 'Radiologiques', 'bricareau' ) );
$wrapper  = bricareau_block_wrapper( $attributes );
$sub      = 'text-slate-600 max-w-2xl mx-auto text-lg';
$h2       = 'mb-4 font-bold text-[#18448F]';
?>
<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?> data-bricareau-contaminants>
	<section class="py-20 bg-slate-50 border-t border-slate-200">
		<div class="container mx-auto px-4 md:px-6 max-w-7xl">
			<div class="text-center mb-12 max-w-3xl mx-auto">
				<h2 class="<?php echo esc_attr( $h2 ); ?>"><span class="block"><?php esc_html_e( 'Guide des principaux', 'bricareau' ); ?></span><span class="block text-[#8CC63F]"><?php esc_html_e( 'contaminants de l\'eau', 'bricareau' ); ?></span></h2>
				<p class="<?php echo esc_attr( $sub ); ?>"><?php esc_html_e( 'Explorez les polluants les plus fréquents, classés par catégorie, pour comprendre leur origine et leur impact.', 'bricareau' ); ?></p>
			</div>
			<div class="relative bg-slate-900 rounded-[2rem] lg:rounded-[3rem] p-6 md:p-8 lg:p-12 overflow-hidden shadow-2xl mt-12 w-full">
				<div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
					<div class="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-[#18448F]/40 blur-[100px] rounded-full mix-blend-screen"></div>
					<div class="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-[#8CC63F]/20 blur-[120px] rounded-full mix-blend-screen"></div>
				</div>
				<div class="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
					<div class="flex lg:flex-col gap-3 overflow-x-auto w-full lg:w-1/3 pb-4 lg:pb-0 [scrollbar-width:none] snap-x" role="tablist">
						<?php foreach ( $data['glossary'] as $i => $cat ) : ?>
							<button type="button" role="tab" data-glossary-tab="<?php echo (int) $i; ?>" aria-selected="<?php echo 0 === $i ? 'true' : 'false'; ?>" class="group/tab flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 min-w-[240px] lg:min-w-0 text-left border snap-start border-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200 aria-selected:bg-white/10 aria-selected:border-white/20 aria-selected:text-white">
								<span class="p-3 rounded-xl transition-all duration-300 shrink-0 bg-white/5 group-aria-selected/tab:bg-[#8CC63F] group-aria-selected/tab:text-slate-900"><?php echo bricareau_icon( $icon_of( $cat['icon'] ), 'w-5 h-5' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
								<span class="font-bold text-sm leading-tight flex-1"><?php echo esc_html( $cat['category'] ); ?></span>
							</button>
						<?php endforeach; ?>
					</div>
					<div class="flex-1 w-full bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
						<?php foreach ( $data['glossary'] as $i => $cat ) : ?>
							<div data-glossary-panel="<?php echo (int) $i; ?>" <?php echo 0 === $i ? '' : 'hidden'; ?>>
								<div class="flex flex-wrap items-center gap-4 mb-8 relative z-10">
									<h3 class="text-2xl md:text-3xl font-black text-white"><?php echo esc_html( $cat['category'] ); ?></h3>
									<span class="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-bold border border-white/10"><?php echo esc_html( sprintf( /* translators: %d: number of items */ __( '%d éléments', 'bricareau' ), count( $cat['items'] ) ) ); ?></span>
								</div>
								<div class="grid sm:grid-cols-2 gap-4 relative z-10">
									<?php foreach ( $cat['items'] as $n => $item ) : ?>
										<div <?php echo $n >= 6 ? 'hidden data-glossary-extra' : ''; ?> class="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 p-5 rounded-2xl transition-all duration-300 group [&[hidden]]:hidden">
											<h4 class="text-lg font-bold text-[#8CC63F] mb-2 group-hover:text-white transition-colors"><?php echo esc_html( $item['name'] ); ?></h4>
											<p class="text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors"><?php echo esc_html( $item['desc'] ); ?></p>
										</div>
									<?php endforeach; ?>
								</div>
								<?php if ( count( $cat['items'] ) > 6 ) : ?>
									<div class="mt-8 text-center relative z-10"><button type="button" data-glossary-more class="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#8CC63F] hover:text-slate-900 transition-all text-sm font-bold"><?php echo esc_html( sprintf( /* translators: %d: number of pollutants */ __( 'Voir les %d autres polluants', 'bricareau' ), count( $cat['items'] ) - 6 ) ); ?></button></div>
								<?php endif; ?>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-24 bg-white relative border-t border-slate-200">
		<div class="container mx-auto px-6 max-w-7xl">
			<div class="text-center mb-12">
				<h2 class="<?php echo esc_attr( $h2 ); ?>"><span class="block"><?php esc_html_e( 'Recommandations de', 'bricareau' ); ?></span><span class="block text-[#8CC63F]"><?php esc_html_e( 'Santé Canada', 'bricareau' ); ?></span></h2>
				<p class="<?php echo esc_attr( $sub ); ?>"><?php esc_html_e( 'Consultez la liste complète des recommandations pour la qualité de l\'eau potable au Canada, incluant les paramètres microbiologiques, chimiques et radiologiques.', 'bricareau' ); ?></p>
			</div>
			<div class="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8 bg-slate-100 rounded-md p-1" role="tablist">
				<?php foreach ( array_values( $tabs ) as $i => $label ) : ?>
					<button type="button" role="tab" data-table-tab="<?php echo (int) $i; ?>" aria-selected="<?php echo 0 === $i ? 'true' : 'false'; ?>" class="rounded-sm px-3 py-1.5 text-sm font-medium text-slate-500 aria-selected:bg-white aria-selected:text-slate-900 aria-selected:shadow-sm"><?php echo esc_html( $label ); ?></button>
				<?php endforeach; ?>
			</div>
			<?php foreach ( array_keys( $tabs ) as $i => $key ) : ?>
				<div data-table-panel="<?php echo (int) $i; ?>" <?php echo 0 === $i ? '' : 'hidden'; ?> class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
					<?php if ( 'chimiques' === $key ) : ?>
						<div class="mb-4 p-4 bg-blue-50 text-blue-800 text-sm rounded-lg border border-blue-100"><strong><?php esc_html_e( 'Note :', 'bricareau' ); ?></strong> <?php esc_html_e( 'Les paramètres chimiques incluent les Concentrations Maximales Acceptables (CMA) et les Objectifs d\'Ordre Esthétique (OE).', 'bricareau' ); ?></div>
					<?php endif; ?>
					<div class="overflow-x-auto <?php echo 'chimiques' === $key ? 'max-h-[600px] overflow-y-auto' : ''; ?>">
						<table class="w-full text-left text-base">
							<thead class="<?php echo 'chimiques' === $key ? 'sticky top-0 bg-white shadow-sm z-10' : ''; ?>">
								<tr class="border-b border-slate-200 text-sm text-slate-500">
									<?php foreach ( 'chimiques' === $key ? array( __( 'Type', 'bricareau' ), __( 'Contaminant', 'bricareau' ), __( 'CMA (mg/L)', 'bricareau' ), __( 'OE (mg/L)', 'bricareau' ) ) : $heads as $head ) : ?>
										<th class="h-12 px-4 font-medium"><?php echo esc_html( $head ); ?></th>
									<?php endforeach; ?>
								</tr>
							</thead>
							<tbody>
								<?php foreach ( $data[ $key ] as $row ) : ?>
									<tr class="border-b border-slate-100">
										<?php if ( 'chimiques' === $key ) : ?>
											<td class="p-4 align-top font-mono text-sm text-slate-500"><?php echo esc_html( $row['type'] ?? '' ); ?></td>
											<td class="p-4 align-top font-semibold"><?php echo esc_html( $row['contaminant'] ?? '' ); ?></td>
											<td class="p-4 align-top"><?php echo esc_html( $row['cma'] ?? '' ); ?></td>
											<td class="p-4 align-top text-slate-600"><?php echo esc_html( $row['oe'] ?? '' ); ?></td>
										<?php else : ?>
											<td class="p-4 align-top font-semibold min-w-[200px]"><?php echo esc_html( $row['contaminant'] ?? '' ); ?></td>
											<td class="p-4 align-top"><?php echo esc_html( $row['recommandation'] ?? '' ); ?></td>
											<td class="p-4 align-top text-slate-600"><?php echo esc_html( $row['sources'] ?? '' ); ?></td>
											<td class="p-4 align-top text-slate-600"><?php echo esc_html( $row['sante'] ?? '' ); ?></td>
										<?php endif; ?>
									</tr>
								<?php endforeach; ?>
							</tbody>
						</table>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	</section>
</div>
