<?php
/**
 * Contact hub, English (translation of pages/contact.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'contact-us',
	'title'           => 'Contact',
	'translation_of'  => 'contact',
	'seo_title'       => 'Contact Bricareau | Water Treatment Customer Service in Québec',
	'seo_description' => 'Need help with your water? Contact the Bricareau team by phone, email or through our form. Water treatment experts at your service across Québec.',
	'menu_order'      => 61,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'  => 'wash',
				'title'   => "*Contact us.*\nOur team is here to help.",
				'text'    => "We're here to answer all your water treatment questions. Whether you need technical advice or a quote, our experts guide you with transparency.",
				'ctaText' => 'Call 1 855 264 9328',
				'ctaUrl'  => 'tel:18552649328',
				'rating'  => 'Rated 4.9/5 by 20,000+ families in Québec',
				'image'   => $img( '118022.jpg', 'Contact Bricareau' ),
			),
		),
		array(
			'bricareau/resource-cards',
			array(
				'variant'   => 'contact',
				'watermark' => 'SUPPORT',
				'items'     => array(
					array(
						'title'      => 'Frequently asked questions',
						'text'       => "Prefer not to contact us, or think we've already answered your question? Browse our complete FAQ.",
						'buttonText' => 'Browse the FAQ',
						'url'        => '/faq',
						'image'      => $img( 'FAQ.jpg', 'Frequently asked questions - Bricareau filtration' ),
					),
					array(
						'title'      => 'Consultation request',
						'text'       => 'For a custom quote or to discuss an installation project, our experts are here for you.',
						'buttonText' => 'Book a consultation',
						'url'        => '/consultation',
						'image'      => $img( '40-AdobeStock_365603381.jpeg', 'Free consultation - professional water analysis' ),
					),
					array(
						'title'      => 'Customer support & maintenance',
						'text'       => 'Already a Bricareau customer? Get technical help or schedule routine maintenance by our certified technicians.',
						'badge'      => 'Online: reply in < 15 min',
						'buttonText' => 'Write to us',
						'url'        => '/contact-form',
						'image'      => $img( 'SERVICES.jpg', 'Customer support & maintenance - water expert' ),
					),
				),
			),
		),
	),
);
