<?php
/**
 * Breweries, English (translation of pages/solutions-brasseries.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'brewery-water-solutions',
	'title'           => 'Brewery solutions',
	'translation_of'  => 'solutions-brasseries',
	'seo_title'       => 'Brewery Water Solutions | Bricareau',
	'seo_description' => 'Perfect your beer profiles with fully controlled water. Our advanced filtration solutions let you adjust your mineral profile with absolute consistency, while improving brewhouse yield and reducing your environmental footprint.',
	'menu_order'      => 42,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => '*Pure* sparkle for your brewery.',
				'text'        => 'Perfect your beer profiles with fully controlled water. Our advanced filtration solutions let you adjust your mineral profile with absolute consistency, while improving brewhouse yield and reducing your environmental footprint.',
				'ctaText'     => 'Book a consultation',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( '2150573931.jpg', 'Pure sparkle for your brewery' ),
			),
		),
		array(
			'bricareau/split-feature',
			array(
				'eyebrow'       => 'THE MOST CRITICAL INGREDIENT',
				'title'         => 'Perfect the brewing profile of your *beers.*',
				'body'          => 'Water makes up more than 95% of your beer. It drives yeast performance, hop extraction and the clarity of the finished product. Our custom water filtration and treatment solutions for microbreweries guarantee a consistent mineral profile, complete chlorine removal and absolute bacteriological purity. Protect your tanks, optimize your recipes and ensure perfect repeatability from batch to batch.',
				'ctaText'       => 'Learn more',
				'ctaUrl'        => '#brewery-benefits',
				'image'         => $img( '2150573920.jpg', 'Custom water systems for breweries' ),
				'imagePosition' => 'left',
			),
		),
		array(
			'bricareau/accordion-split',
			array(
				'anchor'    => 'brewery-benefits',
				'label'     => 'BREWING ENGINEERING',
				'title'     => 'What we bring to the excellence of your brews.',
				'intro'     => 'For master brewers, every molecular detail matters. Our water engineering lets you calibrate minerals, eliminate chlorine and guarantee complete microbiological purity. Give your recipes the consistency and greatness they deserve.',
				'image'     => $img( '5879.png', 'Technical diagram of water filtration and profiling for breweries' ),
				'imageSide' => 'left',
				'items'     => array(
					array( 'title' => 'Mineral profile adjustment', 'text' => 'Precisely balance the sulphate/chloride ratio and hardness to sharpen the bitterness of your IPAs or the velvety roundness of your stouts. Full control over the pH of your mash water.' ),
					array( 'title' => 'Complete dechlorination', 'text' => 'Complete removal of chlorine and chloramines to banish phenols and medicinal or plastic off-flavours from your beers, revealing perfectly clean malt and hop aromas.' ),
					array( 'title' => 'Microbiological sterility', 'text' => 'Upstream UV-C protection and ultrafiltration to eliminate any risk of contamination by wild bacteria or unwanted yeast, keeping your products stable.' ),
					array( 'title' => 'Equipment protection', 'text' => 'Targeted softening and demineralization to prevent scale in your steam boilers, plate heat exchangers and fermenters, greatly reducing your CIP cycles.' ),
				),
			),
		),
		array(
			'bricareau/feature-rows',
			array(
				'variant' => 'icon',
				'label'   => 'OUR BREWING SERVICE',
				'title'   => 'Optimize & secure your *brewing* operations.',
				'rows'    => array(
					array( 'subtitle' => 'Recipe repeatability', 'title' => 'Reverse osmosis systems', 'icon' => 'droplets', 'text' => 'Produce perfectly pure base water with our reverse osmosis systems, then precisely add back the mineral salts specific to each beer style, from traditional Pilsner to modern NEIPA.', 'image' => $img( 'UV system installation to kill bacteria.png', 'High-tech industrial reverse osmosis equipment designed by Bricareau' ) ),
					array( 'subtitle' => 'Engineering & CIP integration', 'title' => 'Custom filtration skids & CIP', 'icon' => 'settings', 'text' => 'We design compact treatment stations that connect directly to your lines and clean-in-place (CIP) systems. Save floor space while reducing water and chemical consumption.', 'image' => $img( '0454.jpg', 'Modular filtration station and treatment skid for microbreweries' ) ),
					array( 'subtitle' => 'Availability & stability', 'title' => 'Quality audits & 24/7 support', 'icon' => 'shield-check', 'text' => 'Our technical team and expert engineers respond to emergencies 24/7 to keep your water consistent. Our preventive maintenance contracts also keep your production lines available at all times.', 'image' => $img( '10271.jpg', 'Bricareau technician performing preventive maintenance on a treatment station' ) ),
				),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'label' => 'CLIENT REVIEWS',
				'title' => 'Our master brewers are satisfied.',
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'     => 'BREWING OPTIMIZATION & PERFORMANCE',
				'title'     => 'Guarantee the signature taste of your beers, batch after batch.',
				'text'      => 'Custom water filtration and treatment solutions to remove chloramines, balance ionic profiles and rule out any microbiological risk. Secure your brewery\'s reputation and consistency today.',
				'image'     => $img( '2149757160.jpg', 'Technician inspecting brewery filtration systems - Bricareau solution' ),
				'phoneText' => 'Talk to an expert',
				'ctaText'   => 'Book a free consultation',
				'ctaUrl'    => '/contact-entreprises',
			),
		),
		array(
			'bricareau/case-cards',
			array(
				'label'   => 'BREWING SUCCESS STORIES',
				'title'   => 'Related resources & case studies.',
				'ctaText' => 'All resources',
				'ctaUrl'  => '/blog',
				'items'   => array(
					array( 'label' => 'Case study: microbrewery', 'title' => 'Complete mineral profiling for a Montréal microbrewery.', 'text' => 'See how our reverse osmosis solution, paired with precise remineralization, stabilized the taste of their IPAs and eliminated seasonal water variations.', 'url' => '/blog', 'linkText' => 'Read the case study' ),
					array( 'label' => 'Case study: brewpub', 'title' => 'Complete dechlorination and filtration in Sherbrooke.', 'text' => 'Total removal of phenolic and microbiological compounds with an industrial ultrafiltration system, ensuring purity for 50,000 hl/year.', 'url' => '/blog', 'linkText' => 'Read the case study' ),
					array( 'label' => 'Case study: circular economy', 'title' => 'Water reuse and CIP optimization for a green brewery.', 'text' => 'An innovative filtration solution that recycles more than 30% of the hot wash and rinse water from the tanks with no health risk.', 'url' => '/blog', 'linkText' => 'Read the case study' ),
				),
			),
		),
	),
);
