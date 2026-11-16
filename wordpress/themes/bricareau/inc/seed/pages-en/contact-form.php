<?php
/**
 * Service request, English (translation of pages/contact-form.php).
 *
 * @var callable $img  fn( string $asset, string $alt ): array
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'             => 'service-request',
	'title'            => 'Contact us',
	'translation_of'   => 'contact-form',
	'breadcrumb_label' => 'Contact us',
	'seo_title'        => 'Contact Bricareau | Water Service & Support in Québec',
	'seo_description'  => 'Installation, repair or filter change: send us a message or call (855) 264-9328. Our technicians serve Greater Montréal and surrounding areas.',
	'menu_order'       => 62,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'     => 'wash',
				'heroHeight' => '850',
				'label'      => 'Technical support online • Response time < 15 min',
				'liveLabel'  => true,
				'title'      => "*How can we*\nhelp you?",
				'text'       => 'Need an installation, a repair or a simple filter change? Our experts serve Greater Montréal and surrounding areas.',
				'image'      => $img( '126171.jpg', 'Bricareau customer service' ),
			),
		),
		array(
			'bricareau/form-section',
			array(
				'anchor'          => 'contact-form',
				'layout'          => 'contact',
				'formId'          => $form( 'contact-en' ),
				'title'           => 'Send us a message',
				'intro'           => "We'll get back to you as soon as possible.",
				'watermark'       => 'SUPPORT',
				'asideItems'      => array(
					array( 'icon' => 'phone-call', 'title' => 'Toll-free', 'value' => '(855) 264-9328', 'sub' => '24/7 priority line' ),
					array( 'icon' => 'calendar', 'title' => 'Hours', 'value' => 'Mon - Fri: 8:00 a.m. - 6:00 p.m.', 'sub' => 'Fast in-home service' ),
					array( 'icon' => 'map-pin', 'title' => 'Service area', 'value' => 'Greater Montréal & surroundings', 'sub' => '300 km radius (local area)' ),
				),
				'panelTitle'      => 'Need help right away?',
				'panelText'       => 'Our technicians are ready to answer your complex technical questions now.',
				'panelButtonText' => 'Call a technician',
				'panelButtonUrl'  => 'tel:18552649328',
			),
		),
	),
);
