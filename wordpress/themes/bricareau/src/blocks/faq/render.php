<?php
/**
 * FAQ accordion (native <details>); questions past "visibleCount" are hidden
 * until the "see all" button is clicked (view.js).
 *
 * @var array $attributes
 */

$items   = array_values( array_filter( $attributes['items'] ?? array(), fn( $item ) => is_array( $item ) && '' !== trim( $item['question'] ?? '' ) ) );
$visible = max( 1, (int) ( $attributes['visibleCount'] ?? 6 ) );
$wrapper = bricareau_block_wrapper( $attributes, array( 'class' => 'py-24 bg-white border-t border-slate-100', 'data-bricareau-faq' => '' ) );
?>
<section <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput ?>>
	<div class="container mx-auto px-6">
		<?php echo bricareau_section_header( $attributes, array( 'class' => 'mb-16', 'title_class' => 'heading-pro-max font-bold text-[#18448F]' ) ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		<div class="max-w-4xl mx-auto">
			<?php foreach ( $items as $i => $item ) : ?>
				<details class="group border-b border-slate-200 <?php echo $i >= $visible ? 'hidden' : ''; ?>" <?php echo $i >= $visible ? 'data-faq-extra' : ''; ?>>
					<summary class="flex items-center justify-between gap-4 cursor-pointer list-none py-6 text-left text-base font-medium leading-6 text-slate-800 [&::-webkit-details-marker]:hidden">
						<span><?php echo esc_html( $item['question'] ); ?></span>
						<?php echo bricareau_icon( 'chevron-down', 'w-4 h-4 shrink-0 transition-transform duration-200 group-open:rotate-180' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					</summary>
					<div class="pb-6 space-y-4">
						<?php foreach ( bricareau_paragraphs( $item['answer'] ?? '' ) as $paragraph ) : ?>
							<p class="text-base font-light leading-6 text-gray-600 text-justify"><?php echo $paragraph; // phpcs:ignore WordPress.Security.EscapeOutput ?></p>
						<?php endforeach; ?>
					</div>
				</details>
			<?php endforeach; ?>

			<?php if ( count( $items ) > $visible ) : ?>
				<div class="mt-12 text-center">
					<div class="relative inline-block group">
						<div class="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
						<button type="button" data-faq-toggle data-more="<?php echo esc_attr( $attributes['moreText'] ?? '' ); ?>" data-less="<?php echo esc_attr( $attributes['lessText'] ?? '' ); ?>" class="relative inline-flex items-center justify-center border border-[#18448F] rounded-[2rem] font-black uppercase transition-all bg-[#18448F] text-white hover:bg-transparent hover:text-[#18448F] h-16 px-12 text-xs tracking-widest"><?php echo esc_html( $attributes['moreText'] ?? '' ); ?></button>
					</div>
				</div>
			<?php endif; ?>
		</div>
	</div>
</section>
<?php
// FAQPage structured data for search engines.
$schema = array(
	'@context'   => 'https://schema.org',
	'@type'      => 'FAQPage',
	'mainEntity' => array_map(
		fn( $item ) => array(
			'@type'          => 'Question',
			'name'           => $item['question'],
			'acceptedAnswer' => array( '@type' => 'Answer', 'text' => wp_strip_all_tags( str_replace( '**', '', $item['answer'] ?? '' ) ) ),
		),
		$items
	),
);
if ( $items && ! is_admin() && ! ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
	echo '<script type="application/ld+json">' . wp_json_encode( $schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES ) . '</script>';
}
