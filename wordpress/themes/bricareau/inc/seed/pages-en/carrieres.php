<?php
/**
 * Careers, English (translation of pages/carrieres.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'careers',
	'title'           => 'Careers',
	'translation_of'  => 'carrieres',
	'seo_title'       => 'Careers | Bricareau',
	'seo_description' => 'Join Bricareau, a Québec water treatment leader: water treatment technicians, technical sales advisors and more. See our open positions.',
	'menu_order'      => 13,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'fadeStop'   => '33',
				'label'      => 'Join us',
				'labelStyle' => 'pill',
				'title'      => "Make water\n*your mission!*",
				'text'       => 'Put your talent to work for an essential cause. Join a dynamic Québec company where every role has a direct impact on our clients\' health and the protection of our environment.',
				'ctaText'    => 'Discover our benefits',
				'ctaUrl'     => '#nos-piliers',
				'image'      => $img( '2148192458.jpg', 'Careers at Bricareau' ),
			),
		),
		array(
			'bricareau/statement',
			array(
				'anchor' => 'notre-mission',
				'theme'  => 'light',
				'label'  => 'Our mission as an employer',
				'title'  => "Excellence through\n*people.*",
				'text'   => "At Bricareau, we know that our advanced technology is nothing without the talent of the men and women who design, install and support it.\n\nWe offer much more than a job: a stimulating career, constant technical challenges and the pride of actively helping protect health and the environment.",
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'anchor'     => 'nos-piliers',
				'variant'    => 'numbered',
				'background' => 'light',
				'label'      => 'Why Bricareau?',
				'title'      => "Your career,\n*our priority.*",
				'intro'      => 'As a water treatment leader in Québec, Bricareau specializes in installing advanced filtration systems, water softeners and purifiers. We recruit committed professionals to deliver pure, safe water to the residential, commercial and industrial sectors.',
				'rows'       => array(
					array(
						'title' => 'Environmental impact',
						'text'  => 'Give meaning to your work. Every system you install or sell directly helps reduce plastic pollution and improve the health of Quebecers.',
						'image' => $img( '2232.jpg', 'Environmental impact - professional water analysis' ),
					),
					array(
						'title' => 'Continuous development',
						'color' => 'green',
						'text'  => 'Engineering evolves, and so do we. We invest heavily in ongoing training for our teams to keep our expertise at the highest level.',
						'image' => $img( '2243.jpg', 'Continuous development - custom water systems' ),
					),
					array(
						'title' => 'A team of experts',
						'text'  => 'Grow alongside the best. Our company culture values mentoring, knowledge sharing and technical rigour in a friendly environment.',
						'image' => $img( '2148826999.jpg', 'A team of experts - water expert' ),
					),
				),
			),
		),
		array(
			'bricareau/job-list',
			array(
				'label'      => 'Jobs',
				'title'      => 'Our job openings',
				'intro'      => 'See our open positions and take the first step toward a rewarding career.',
				'buttonText' => 'Apply',
				'jobs'       => array(
					array( 'title' => 'Water treatment technician', 'department' => 'Installation & service', 'type' => 'Full time', 'location' => 'Montréal & surroundings', 'experience' => '2-5 years', 'url' => '/contact' ),
					array( 'title' => 'Technical sales advisor', 'department' => 'Commercial sales', 'type' => 'Full time', 'location' => 'Hybrid', 'experience' => '3+ years', 'url' => '/contact' ),
				),
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'overlay' => 'dark',
				'title'   => "Join\n*the adventure.*",
				'text'    => "Can't find a position that matches your profile but share our vision of excellence? Send us your application anyway.",
				'ctaText' => 'Send my resume',
				'ctaUrl'  => '/contact',
				'image'   => $img( '2149008937.jpg', 'Apply to Bricareau' ),
			),
		),
	),
);
