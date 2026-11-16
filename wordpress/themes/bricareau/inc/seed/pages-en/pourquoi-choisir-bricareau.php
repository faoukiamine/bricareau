<?php
/**
 * Our company, English (translation of pages/pourquoi-choisir-bricareau.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'             => 'why-choose-bricareau',
	'title'            => 'Why choose Bricareau',
	'translation_of'   => 'pourquoi-choisir-bricareau',
	'breadcrumb_label' => 'Our company',
	'seo_title'        => 'Why Choose Bricareau | Water Treatment Excellence',
	'seo_description'  => '25 years of water treatment expertise in Québec: custom filtration systems, certified installation and dedicated customer service for homes and businesses.',
	'menu_order'       => 10,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'fadeStop'    => '50',
				'label'       => "Québec's reference",
				'labelStyle'  => 'pill-soft',
				'title'       => "25 years of excellence:\n*water is our business.*",
				'accentStyle' => 'green-italic',
				'text'        => 'With 25 years of water treatment expertise, we design water filtration systems that meet the most demanding quality standards. Our technical know-how gives your home or business pure, healthy and safe water at all times.',
				'ctaText'     => 'Discover our vision',
				'ctaUrl'      => '#notre-vision',
				'image'       => $img( '10341859.jpg', 'Pure Bricareau water' ),
			),
		),
		array(
			'bricareau/timeline',
			array(
				'anchor'     => 'notre-histoire',
				'label'      => 'Our story',
				'labelStyle' => 'pill-outline',
				'title'      => "More than 25 years\n*of commitment.*",
				'items'      => array(
					array( 'label' => 'The foundations', 'title' => 'An obsession with quality', 'text' => "Bricareau was born from a simple observation: the quality of city and well water did not meet families' health and comfort needs. We started with a clear mission: source the best filtration technologies in the world." ),
					array( 'label' => 'Expansion', 'title' => 'Multi-sector expertise', 'text' => "Faced with growing demand, we extended our expertise to the industrial and commercial sectors, developing custom engineering solutions for Québec's complex water realities." ),
					array( 'label' => 'Today', 'title' => "Québec's reference", 'text' => 'With more than 20,000 homes and businesses protected, Bricareau has become the go-to name in water treatment: a team of dedicated master technicians and a reputation built on our clients\' complete trust.' ),
				),
			),
		),
		array(
			'bricareau/statement',
			array(
				'anchor'     => 'notre-vision',
				'theme'      => 'dark',
				'label'      => 'Our vision',
				'labelStyle' => 'pill-outline-green',
				'title'      => "Redefining the\n*standard of purity.*",
				'text'       => 'We believe every home and business in Québec deserves unconditional access to perfect water, combining human health and environmental preservation. Water is not just a resource: it is the foundation of our future.',
			),
		),
		array(
			'bricareau/statement',
			array(
				'anchor'      => 'notre-mission',
				'theme'       => 'white',
				'titleStyle'  => 'editorial',
				'label'       => 'Our mission',
				'labelStyle'  => 'pill-outline',
				'title'       => 'Protect the health of **homes** and optimize the performance of **businesses** by offering water solutions of *absolute purity*.',
				'accentStyle' => 'serif',
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'anchor'     => 'nos-valeurs',
				'variant'    => 'values',
				'background' => 'light',
				'label'      => 'Our core values',
				'labelStyle' => 'pill-outline-green',
				'rows'       => array(
					array(
						'title'   => "Using new\n*technologies every day*",
						'color'   => 'green',
						'bullets' => implode(
							"\n",
							array(
								'We maximize our research and development efforts to offer ever more efficient and durable water purification solutions.',
								'We combine more than 25 years of expertise with advanced engineering methods to give our clients absolutely pure water.',
								'We are committed to sourcing the best water filtration and purification technologies in the world, for optimal processes that never compromise your water quality.',
							)
						),
						'image'   => $img( '2119.jpg', 'Advanced technologies - water expert' ),
					),
					array(
						'title'   => "Being a socially\n*responsible company*",
						'color'   => 'navy',
						'bullets' => implode(
							"\n",
							array(
								'We show complete transparency and strict honesty in all our water diagnoses.',
								'We care deeply about the environment, designing systems that reduce waste and end dependence on single-use plastics.',
								'We put the health and well-being of families and businesses at the centre of every decision.',
								'We set very high ethical and performance standards, because we consider access to healthy water fundamental.',
							)
						),
						'image'   => $img( '2120.jpg', 'Socially responsible company - water treatment in Québec' ),
					),
				),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'anchor'  => 'pourquoi-reference',
				'variant' => 'numbered',
				'title'   => "Why we are *Québec's reference*",
				'cards'   => array(
					array( 'title' => 'Advanced technical expertise', 'text' => 'We carry out a thorough physico-chemical analysis of your water to design a fully custom treatment system with top-level efficiency and reliability.' ),
					array( 'title' => 'Superior installation quality', 'text' => 'Our specialized technicians execute every project flawlessly. Installations are designed to save space while strictly respecting industry standards and the integrity of your property.' ),
					array( 'title' => 'Dedicated customer service', 'text' => 'We are committed to continuous technical follow-up. Our team provides fast after-sales service and thorough maintenance, with solid warranties on all our equipment.' ),
				),
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'overlay'     => 'dark',
				'titleWeight' => 'light',
				'title'       => "*Excellence*\ndoesn't wait.",
				'text'        => 'Take the next step and stop compromising on your water quality. Talk with our water specialists to assess your needs and start your switch to filtered, pure and healthy water.',
				'ctaText'     => 'Contact us',
				'ctaUrl'      => '/consultation',
				'image'       => $img( '2230.jpg', 'Bricareau excellence' ),
			),
		),
	),
);
