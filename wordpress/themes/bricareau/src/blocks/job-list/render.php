<?php
/**
 * Open positions list.
 *
 * @var array $attributes
 */

$jobs    = array_filter( $attributes['jobs'] ?? array(), 'is_array' );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'py-24 bg-white border-t border-slate-200' ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-6">
		<?php echo bricareau_section_header( $attributes, array( 'class' => 'max-w-3xl mb-16', 'title_class' => 'text-4xl md:text-5xl font-bold text-[#18448F] tracking-tight', 'intro_class' => 'text-lg text-slate-600 font-light leading-relaxed' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>

		<div class="max-w-4xl mx-auto space-y-6">
			<?php if ( ! $jobs ) : ?>
				<p class="text-center text-slate-500"><?php esc_html_e( 'Aucun poste ouvert pour le moment.', 'bricareau' ); ?></p>
			<?php endif; ?>
			<?php foreach ( $jobs as $job ) : ?>
				<div class="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-[#8CC63F] hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between group">
					<div class="mb-6 md:mb-0">
						<div class="flex items-center gap-3 mb-3">
							<?php if ( ! empty( $job['department'] ) ) : ?>
								<span class="text-sm font-medium text-[#18448F] bg-[#18448F]/5 px-3 py-1 rounded-full"><?php echo esc_html( $job['department'] ); ?></span>
							<?php endif; ?>
							<?php if ( ! empty( $job['type'] ) ) : ?>
								<span class="text-sm font-medium text-[#8CC63F] bg-[#8CC63F]/10 px-3 py-1 rounded-full"><?php echo esc_html( $job['type'] ); ?></span>
							<?php endif; ?>
						</div>
						<h3 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#18448F] transition-colors"><?php echo esc_html( $job['title'] ?? '' ); ?></h3>
						<div class="flex flex-wrap items-center gap-6 text-slate-500 font-light">
							<?php if ( ! empty( $job['location'] ) ) : ?>
								<span class="flex items-center gap-2"><?php echo bricareau_icon( 'map-pin', 'w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><?php echo esc_html( $job['location'] ); ?></span>
							<?php endif; ?>
							<?php if ( ! empty( $job['experience'] ) ) : ?>
								<span class="flex items-center gap-2"><?php echo bricareau_icon( 'briefcase', 'w-4 h-4' ); // phpcs:ignore WordPress.Security.EscapeOutput ?><?php echo esc_html( $job['experience'] ); ?></span>
							<?php endif; ?>
						</div>
					</div>
					<div>
						<?php echo bricareau_button( $attributes['buttonText'] ?? __( 'Postuler', 'bricareau' ), $job['url'] ?? '/contact', array( 'icon' => 'arrow-right', 'container_class' => 'w-full sm:w-auto', 'class' => 'h-14 px-10 text-xs tracking-widest' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
