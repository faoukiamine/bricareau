<?php
/**
 * Water fountains and coolers, English (translation of pages/fontaines.php).
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

$drink = $img( 'reasons-to-drink-more-water.jpg', 'Glass of pure water' );

return array(
	'slug'             => 'water-fountains-and-coolers-for-fresh-water',
	'title'            => 'Water fountains and coolers',
	'translation_of'   => 'fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche',
	'breadcrumb_label' => 'Water fountains and coolers',
	'seo_title'        => 'Water Fountains and Coolers | Pure Water Solutions in Québec | Bricareau',
	'seo_description'  => 'Discover our range of bottle-free water fountains and coolers for home or office in Québec. Advanced filtration technology for pure water.',
	'menu_order'       => 35,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'fadeStop'    => '33',
				'title'       => "Our water fountains: the art of\n*pure water.*",
				'text'        => 'Elevate your hydration with our high-performance water coolers. Elegant design combined with absolute purity for your home or office.',
				'ctaText'     => 'Book a consultation',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( "Fontaines d'eau.webp", 'Bricareau water fountains' ),
				'trustItems'  => array(
					array( 'icon' => 'zap', 'label' => 'Technology', 'value' => 'Dual filtration' ),
					array( 'icon' => 'award', 'label' => 'Purity', 'value' => 'NSF/ANSI certified' ),
					array( 'icon' => 'leaf', 'label' => 'Eco-designed', 'value' => 'Zero bottles' ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'    => 'models',
				'variant'   => 'catalog',
				'label'     => 'Purity at home',
				'title'     => "Pure hydration at home,\n*fresh water* at your fingertips.",
				'intro'     => 'Bricareau redefines your everyday hydration with premium fresh water solutions. Give your family the luxury of exceptionally pure water, always at the ideal temperature.',
				'linkText'  => 'See details',
				'products'  => array(
					array( 'name' => 'Countertop water dispenser - Avalanche', 'image' => $img( 'nouveau-distributeur-comptoir.png', 'Avalanche countertop dispenser' ), 'url' => '/consultation', 'text' => 'The Avalanche is designed to fit neatly on any countertop. This dispenser combines a compact design with efficient cooling technology, delivering pure, refreshing water every day.' ),
					array( 'name' => 'Bottle-free water fountain - Aspen', 'image' => $img( 'Aspen_PF1.png', 'Aspen fountain' ), 'url' => '/consultation', 'text' => 'With its clean design, the Aspen fountain delivers continuous water without bottles. Its sturdy build and advanced filtration system ensure healthy hydration for the whole family.' ),
					array( 'name' => 'Bottle-free water fountain - Glacier', 'image' => $img( 'distributeur-2-removebg-preview.png', 'Glacier fountain' ), 'url' => '/consultation', 'text' => 'The Glacier stands out for its classic elegance and reliability. Enjoy clear water at the temperature of your choice, with a system built for durability and energy efficiency.' ),
					array( 'name' => 'Bottle-free water fountain - Nordic', 'image' => $img( 'distributeur-3-removebg-preview.png', 'Nordic fountain' ), 'url' => '/consultation', 'text' => 'Inspired by Scandinavian purity, the Nordic cooler combines minimalist style with advanced engineering. Perfect for any living space, it always delivers fresh, great-tasting water.' ),
					array( 'name' => 'Bottle-free water fountain - Crystal Pro', 'image' => $img( 'distributeur-4-removebg-preview.png', 'Crystal Pro fountain' ), 'url' => '/consultation', 'text' => 'The Crystal Pro represents excellence in hydration. It combines premium modern design with superior filtration and fits perfectly in contemporary interiors.' ),
				),
				'ctaTitle'  => 'Need help finding the right system?',
				'ctaButton' => 'Request a consultation',
				'ctaUrl'    => '/consultation',
			),
		),
		array(
			'bricareau/savings-calculator',
			array(
				'label'       => 'Technology & responsibility',
				'title'       => "More than a water fountain:\na *smart & responsible* choice.",
				'intro'       => 'Combine technological performance, environmental responsibility and household savings for an uncompromising daily life. Let\'s go beyond the standards of conventional hydration together.',
				'image'       => $img( '2112.png', 'The Bricareau pure water experience' ),
				'imageTitle'  => 'Art of living',
				'imageText'   => 'Incomparable purity that fits naturally into your daily life. Discover the perfect balance between looks and health, where every sip is a mark of quality.',
				'bottlePrice' => '0.3464',
				'note'        => 'Eliminate plastic, invest in your health.',
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'framed' => false,
				'title'  => "The water *you deserve,*\nthe service you won't forget.",
				'count'  => 5,
				'offset' => 4,
			),
		),
		array(
			'bricareau/image-gallery',
			array(
				'label'  => 'Our portfolio',
				'title'  => "Perfect, elegant\nintegration.",
				'intro'  => 'See how our water fountains and coolers blend naturally into any space, combining modern design and functionality.',
				'images' => array(
					$img( '2113.jpg', 'Bricareau countertop fountain' ),
					$img( '2114.png', 'Pure water faucet' ),
					$img( '2115.jpg', 'Bricareau lifestyle' ),
					$img( '2116.jpg', 'Fresh, pure water' ),
				),
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'   => 'Superior hydration at your fingertips',
				'title'   => "Elevate your everyday with\n*our outstanding water fountains.*",
				'text'    => 'Say goodbye to bulky plastic bottles and enjoy a source of pure water, cold or hot, instantly. At home or at work, our dispensers combine modern design and advanced filtration for healthy, eco-friendly hydration.',
				'image'   => $img( '83658.jpg', 'Water fountain' ),
				'avatars' => $avatars(),
			),
		),
		array(
			'bricareau/stat-banner',
			array(
				'label'     => 'Our environmental impact',
				'title'     => "Towards a world\n*without plastic bottles.*",
				'intro'     => 'Our range provides healthy, fresh and delicious water for businesses and households. Together, let\'s make our water consumption sustainable.',
				'image'     => $img( '2117.jpg', 'Eco-friendly office' ),
				'statValue' => '-2920',
				'statLabel' => "Bottles avoided per year\nfor a couple",
				'ctaText'   => 'Plan your impact',
				'ctaUrl'    => '/consultation',
			),
		),
		array(
			'bricareau/resource-cards',
			array(
				'title'      => 'Resources',
				'background' => 'white',
				'items'      => array(
					array( 'title' => 'Well water in Québec: when to install a reverse osmosis system', 'image' => $img( '31794.jpg', 'Well water' ), 'url' => '/eau-du-puits-au-quebec-quand-installer-un-systeme-dosmose-inverse' ),
					array( 'title' => 'How reverse osmosis protects your family from invisible contaminants', 'image' => $img( '2148354772.jpg', 'Reverse osmosis' ), 'url' => '/comment-losmose-inverse-protege-votre-famille-des-contaminants-invisibles' ),
					array( 'title' => 'Reverse osmosis: the technology behind 100% pure water', 'image' => $drink, 'url' => '/osmose-inverse-la-technologie-derriere-une-eau-100-pure' ),
				),
			),
		),
	),
);
