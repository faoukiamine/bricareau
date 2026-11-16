<?php
/**
 * Consultation, English (translation of pages/consultation.php).
 *
 * @var callable $img  fn( string $asset, string $alt ): array
 * @var callable $form fn( string $slug ): string
 */

return array(
	'slug'            => 'free-consultation',
	'title'           => 'Consultation',
	'translation_of'  => 'consultation',
	'seo_title'       => 'Free Water Consultation in Québec | Bricareau',
	'seo_description' => 'Get a free assessment of your water quality. Book a no-obligation phone consultation to find the right treatment solution.',
	'menu_order'      => 60,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'    => 'product',
				'label'     => 'Technical service online',
				'liveLabel' => true,
				'title'     => "Take control of\nyour *water quality.*",
				'text'      => 'Book a free phone consultation with one of our water experts. We will assess your needs, answer your questions and guide you to the best softening or filtration solution, with no sales pressure.',
				'ctaText'   => 'Start the assessment',
				'ctaUrl'    => '#consultation-form',
				'image'     => $img( '8786.jpg', 'Free water consultation' ),
			),
		),
		array(
			'bricareau/form-section',
			array(
				'anchor'      => 'consultation-form',
				'layout'      => 'benefits',
				'formId'      => $form( 'consultation-en' ),
				'asideText'   => 'Fill in the form on the right to choose the best time. Our experts will contact you for a complete, no-obligation assessment of your needs.',
				'asideItems'  => array(
					array( 'icon' => 'phone', 'title' => 'Advice call', 'value' => '15 min with a certified expert' ),
					array( 'icon' => 'shield-check', 'title' => 'No obligation', 'value' => '100% impartial advice' ),
					array( 'icon' => 'award', 'title' => 'Certified professionals', 'value' => 'The best in the industry' ),
					array( 'icon' => 'star', 'title' => 'Satisfaction', 'value' => 'More than 20,000 homes' ),
				),
				'quote'       => 'A human and technical approach that completely changed how we see water treatment. Simple, effective and no pressure at all.',
				'quoteAuthor' => 'Marc-Antoine D.',
				'quoteRole'   => 'Private client • Montréal',
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'variant'     => 'steps',
				'background'  => 'light',
				'title'       => "How your\n*consultation works*",
				'accentStyle' => 'green',
				'intro'       => "Simple, transparent and professional. Here's how we prepare your solution.",
				'cards'       => array(
					array( 'icon' => 'smartphone', 'title' => 'Quick booking', 'text' => 'Choose your time slot in 30 seconds.' ),
					array( 'icon' => 'user-check', 'title' => 'Expert review', 'text' => 'We review your request before the call.' ),
					array( 'icon' => 'phone', 'title' => 'Needs assessment', 'text' => '15 minutes to understand your water.' ),
					array( 'icon' => 'clock', 'title' => 'Dedicated report', 'text' => 'Receive your custom solution.' ),
				),
			),
		),
		array(
			'bricareau/faq',
			array(
				'title'        => "How does\n*our consultation work?*",
				'intro'        => 'Here are the most common questions about our free assessment process.',
				'headerAlign'  => 'center',
				'headerBar'    => false,
				'visibleCount' => 4,
				'items'        => array(
					array( 'question' => 'How long does the phone consultation last?', 'answer' => 'The consultation usually lasts 15 to 30 minutes, depending on your questions and how complex your situation is.' ),
					array( 'question' => 'Is the consultation really free of any obligation?', 'answer' => 'Absolutely. Our first goal is to inform you and assess your needs. You are completely free to decide what to do after the call.' ),
					array( 'question' => 'What information should I prepare before the call?', 'answer' => "It helps to know whether you're on city water or a well, how many people live in the home, and which water problems you've noticed (taste, odour, scale, etc.)." ),
					array( 'question' => 'Will a technician need to come to my home?', 'answer' => 'In most cases, we can do an excellent pre-assessment by phone. If a more detailed water analysis or a plumbing check is needed, we can schedule a visit.' ),
					array( 'question' => 'Will I be talking to a high-pressure salesperson?', 'answer' => "No. At Bricareau, you'll speak with a technical advisor. Our approach is educational and consultative, with no sales pressure." ),
					array( 'question' => 'Can I reschedule or cancel my phone appointment?', 'answer' => 'Yes, of course. If something comes up, just email or call us to reschedule at a time that suits you.' ),
				),
			),
		),
	),
);
