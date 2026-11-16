<?php
/**
 * Central filtration systems, English (translation of pages/systemes-centralises.php).
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

return array(
	'slug'            => 'central-water-filtration-systems',
	'title'           => 'Central water filtration systems',
	'translation_of'  => 'systemes-de-filtration-d-eau-centralises',
	'seo_title'       => 'Central Filtration Systems for Buildings | Bricareau',
	'seo_description' => "Protect all of your building's installations with top-tier central commercial and industrial filtration. A custom solution to remove scale, chlorine and contaminants.",
	'menu_order'      => 40,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => '*Central* water filtration solutions for buildings.',
				'text'        => "Protect all of your building's installations with top-tier central commercial and industrial filtration. A custom solution to remove scale, chlorine and contaminants.",
				'ctaText'     => 'REQUEST A CUSTOM STUDY',
				'ctaUrl'      => '/contact-entreprises',
				'phoneButton' => true,
				'image'       => $img( '2148836794.jpg', 'Central water filtration solutions for buildings' ),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'   => 'DURABILITY & ASSET VALUE',
				'title'     => 'Committed to delivering *high-quality* solutions.',
				'body'      => "Water is the lifeblood of your infrastructure. Uncontrolled water quality exposes your installations to critical risks (corrosion, scale, bacterial growth), compromising their integrity and generating significant extra costs.\n\nTo meet these challenges, Bricareau deploys custom water treatment programs that protect your assets and ensure health compliance. We develop complete, innovative engineering strategies.\n\nBricareau is a partner that truly cares about the health and efficiency of your building.",
				'ctaText'   => 'Book a consultation',
				'ctaUrl'    => '/consultation',
				'image'     => $img( '2152006094.jpg', 'Commercial buildings' ),
				'cardTitle' => 'Commercial buildings',
			),
		),
		array(
			'bricareau/accordion-split',
			array(
				'anchor'    => 'campus-benefits',
				'label'     => 'INFRASTRUCTURE ENGINEERING',
				'title'     => "What we bring to your campus's performance.",
				'imageSide' => 'right',
				'image'     => $img( '70609919.jpg', 'Technical diagram and central filtration infrastructure' ),
				'items'     => array(
					array( 'title' => 'Pipe protection', 'text' => 'Complete removal of scale and sediment to protect your entire piping network and prevent premature scaling of your real estate assets.' ),
					array( 'title' => 'Energy savings', 'text' => 'Clean heat exchangers and water heaters use up to 30% less energy, greatly reducing your energy bills and carbon footprint.' ),
					array( 'title' => 'Better user experience', 'text' => 'Provide exceptional water, free of unpleasant tastes and odours, improving the daily experience of your residents or employees.' ),
					array( 'title' => 'Predictive maintenance', 'text' => 'Continuous monitoring of your water treatment systems to anticipate part replacements and filter maintenance. Minimize downtime and extend the life of your equipment with proactive maintenance.' ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant' => 'icon',
				'label'   => 'OUR COMPLETE SERVICE',
				'title'   => 'Enhancing & securing your infrastructure.',
				'rows'    => array(
					array( 'subtitle' => 'Eco-friendly refilling', 'title' => 'Automatic water bottle filling stations', 'icon' => 'droplets', 'text' => 'Add our smart automatic filling stations. A robust, hygienic touchless solution, ideal for cutting single-use plastic and offering your users high-flow chilled, purified water.', 'image' => $img( 'elkayv2-LZS8WSLK_image_vignette.webp', 'Elkay automatic bottle filling station installed by Bricareau' ) ),
					array( 'subtitle' => 'Design & planning', 'title' => 'Engineering & custom solutions', 'icon' => 'settings', 'text' => 'We design modular central filtration stations that fit neatly into your mechanical rooms, saving floor space while maximizing overall performance.', 'image' => $img( '7kbp.png', 'Modular central filtration station designed by Bricareau' ) ),
					array( 'subtitle' => 'Availability & uptime', 'title' => 'Maintenance & technical support', 'icon' => 'shield-check', 'text' => 'Our 24/7 technical support and custom preventive maintenance contracts ensure the continuity of your operations and the longevity of your water infrastructure.', 'image' => $img( '144d1310-23fc-4cbd-92df-81d17d7a393c.jpg', 'Industrial reverse osmosis equipment and Bricareau technical support' ) ),
				),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'label' => 'CLIENT REVIEWS',
				'title' => 'Our partners are satisfied.',
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'     => 'INFRASTRUCTURE PROTECTION & PERFORMANCE',
				'title'     => 'Guarantee excellent water throughout your building.',
				'text'      => 'Custom central filtration solutions to protect your pipes, preserve your thermal equipment and ensure complete health compliance across your entire network. Secure the longevity of your installations today.',
				'image'     => $img( '2149394950.jpg', 'Technician inspecting building filtration systems - Bricareau solution' ),
				'phoneText' => 'Talk to a consulting engineer',
				'ctaText'   => 'Request an engineering study',
				'ctaUrl'    => '/contact-entreprises',
				'avatars'   => $avatars(),
				'rating'    => '4.9/5',
				'caption'   => 'Already chosen by more than 180 property managers and large sites in Québec.',
			),
		),
		array(
			'bricareau/case-cards',
			array(
				'label'   => 'SUCCESS STORIES',
				'title'   => 'Related resources & case studies.',
				'ctaText' => 'All resources',
				'ctaUrl'  => '/blog',
				'items'   => array(
					array( 'label' => 'Case study: campus', 'title' => 'Filtration and treatment for an entire university campus in Québec City.', 'text' => 'See how our central filters cut maintenance costs by 35% while providing absolutely pure water to 15,000 students.', 'url' => '/blog', 'linkText' => 'Read the case study' ),
					array( 'label' => 'Case study: hospital', 'title' => 'Health compliance and ultra-pure treatment for a hospital.', 'text' => 'A sterile solution with industrial UV-C disinfection to guarantee complete microbiological compliance at critical points of care.', 'url' => '/blog', 'linkText' => 'Read the case study' ),
					array( 'label' => 'Case study: hotel', 'title' => 'Better guest experience and scale protection for a 5-star hotel.', 'text' => 'Soft, protective water for all wellness facilities, preserving high-end fixtures and spa systems.', 'url' => '/blog', 'linkText' => 'Read the case study' ),
				),
			),
		),
	),
);
