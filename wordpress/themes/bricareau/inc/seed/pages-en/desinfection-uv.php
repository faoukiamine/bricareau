<?php
/**
 * UV disinfection systems, English (translation of pages/desinfection-uv.php).
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $avatars fn(): array
 */

$vh200   = $img( 'VH200-F10-265x300.jpg', 'VH200-F10 UV system' );
$vh410   = $img( 'VH410-F20-200x300.jpg', 'VH410-F20 UV system' );
$arros   = $img( '500x500_V-Arros-15-IHS-10_straight-1-300x300.jpg', 'Arros 15-IHS10 UV system' );
$sterile = $img( '1254.webp', 'Sterile water under UV light' );
$storm   = $img( 'pourquoi-est-ce-que-les-orages-produisent-des-eclairs-et-du-tonnerree28089-1-1690x1200.jpg', 'Thunderstorm' );

$faq = array(
	array( 'What is a UV disinfection system?', 'It is a device that uses ultraviolet light (UV-C) to neutralize harmful micro-organisms in water. By penetrating the DNA of bacteria and viruses, UV rays stop them from reproducing and causing disease.' ),
	array( 'Which contaminants is UV effective against?', 'UV systems eliminate 99.99% of micro-organisms, including bacteria such as E. coli, viruses, and chlorine-resistant parasites such as Giardia and Cryptosporidium.' ),
	array( 'Does well water always need a UV system?', 'Wells are vulnerable to surface water seeping in after heavy rain or snowmelt. A UV system provides a permanent safety barrier against sudden changes in your water\'s microbiological quality.' ),
	array( 'What are the advantages of UV over chlorine?', 'UV needs no chemicals, does not change the taste or smell of water and creates no toxic by-products. It is the most eco-friendly and healthiest disinfection method.' ),
	array( 'Why do I need a UV system if I have a softener?', 'A softener removes minerals (scale), but not bacteria or viruses. The UV system is the final protection that ensures the water you drink contains no living micro-organisms.' ),
	array( 'How often should the UV lamp be changed?', 'The UV lamp must be replaced every 12 months (about 9,000 hours). Even if it still lights up, its germicidal intensity drops sharply after a year and no longer guarantees disinfection.' ),
	array( 'What is the quartz sleeve and how is it maintained?', 'The quartz sleeve is the clear tube that protects the lamp from the water. It must be cleaned regularly to stay clear. If it gets scaled or cloudy (from hard water), UV rays can no longer pass through to disinfect the water.' ),
	array( 'Is pre-filtration needed before UV?', 'Yes, it is crucial to install a 5-micron sediment filter upstream. Suspended particles can create shadows where bacteria "hide" from the UV light.' ),
	array( 'Does the UV system work during a power outage?', 'No, the lamp turns off without electricity. During an outage, do not drink the water unless you boil it. Our systems often include alarms that warn you when the lamp stops.' ),
	array( 'Does UV use a lot of electricity?', 'No, a standard residential system uses about as much energy as a 40 to 60 watt light bulb. It is a very economical solution for 24/7 protection.' ),
	array( 'Can a UV system be installed on a city water supply?', 'Even though city water is treated, old infrastructure or water main breaks can let bacteria in. A home UV system is extra insurance for your peace of mind.' ),
	array( 'How do I know my UV system is working properly?', 'Our smart controllers show the number of days left before the lamp change and sound a visual and audible alarm if the lamp or system fails.' ),
	array( 'Does the heat of the lamp affect the water?', 'If water does not flow for several hours, the water inside the stainless steel chamber can get lukewarm. Just let the water run for a few seconds to get cool water again.' ),
	array( 'What warranty comes with Bricareau UV systems?', 'Our systems carry a robust warranty on the stainless steel treatment chamber (often 10 years) and on the electrical and electronic components.' ),
	array( 'Should I have my water tested after installation?', 'Yes, we always recommend a professional bacteriological test after installation and initial disinfection of the plumbing, to confirm the whole home network is safe.' ),
);

return array(
	'slug'             => 'uv-disinfection-systems',
	'title'            => 'UV disinfection systems',
	'translation_of'   => 'systemes-de-desinfection-uv',
	'breadcrumb_label' => 'UV disinfection systems',
	'seo_title'        => 'UV Disinfection Systems in Québec | Water Sterilizers | Bricareau',
	'seo_description'  => 'Eliminate 99.99% of bacteria and viruses from your well water in Québec. Our certified UV disinfection systems deliver 100% safe water without chemicals.',
	'menu_order'       => 34,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'      => 'product',
				'title'       => "UV disinfection systems:\n*zero chemicals, 100% protection.*",
				'text'        => 'Eliminate 99.99% of bacteria, viruses and cysts from your well or city water without any chemical additives. Ensure complete microbiological purity for your family\'s safety at every tap.',
				'ctaText'     => 'Book a free consultation',
				'ctaUrl'      => '/consultation',
				'phoneButton' => true,
				'image'       => $img( 'african-girl-stands-kitchen-drinks-water.jpg', 'Girl drinking water in the kitchen' ),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'variant'         => 'swiss',
				'align'           => 'left',
				'background'      => 'white',
				'backgroundImage' => $sterile,
				'title'           => "_Why choose_\nUV disinfection?",
				'intro'           => 'Precision engineering designed to eliminate 99.99% of micro-organisms without any chemical additives.',
				'cards'           => array(
					array( 'icon' => 'leaf', 'title' => '100% natural', 'text' => 'Physical purification with no chemical additives. The water\'s minerals are fully preserved.' ),
					array( 'icon' => 'zap', 'title' => 'Instant action', 'text' => 'Pathogens are eliminated immediately as water passes through the UV-C chamber.' ),
					array( 'icon' => 'award', 'title' => 'Clinical quality', 'text' => 'Lab-proven effectiveness: complete neutralization of micro-organism DNA.' ),
					array( 'icon' => 'shield', 'title' => 'Zero tolerance', 'text' => 'A certified, impassable barrier against bacteria, viruses and parasitic cysts.' ),
					array( 'icon' => 'cup-soda', 'title' => 'Unchanged taste', 'text' => 'With no chlorine compounds, water keeps its true taste and fresh purity.' ),
					array( 'icon' => 'shield-check', 'title' => 'Zero harmful substances', 'text' => 'No storage or handling of toxic substances required. Complete safety.' ),
					array( 'icon' => 'activity', 'title' => 'High efficiency', 'text' => 'Works passively 24/7, using about as much energy as a simple LED bulb.' ),
					array( 'icon' => 'wrench', 'title' => 'Low maintenance', 'text' => 'Simple upkeep: replace the ultraviolet lamp just once a year.' ),
				),
			),
		),
		array(
			'bricareau/dark-feature',
			array(
				'title'     => "Eliminate the invisible:\n*99.99% protection.*",
				'text'      => 'Your water can look crystal clear and still carry harmful micro-organisms. Our UV-C rays target contaminants at their core and make them harmless in a fraction of a second, without chemicals.',
				'chips'     => "E. coli | 99.99%\nGiardia | 99.99%\nSalmonella | 99.99%\nLegionella | 99.99%\nHepatitis A | 99.99%\nCryptosporidium | 99.99%",
				'ctaText'   => 'Assess my water safety',
				'ctaUrl'    => '/consultation',
				'image'     => $storm,
				'cardTitle' => 'Active barrier',
				'cardText'  => '"Certified UV-C power to guarantee safe water in every litre, protecting your family from invisible threats."',
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'variant'       => 'diagnostic',
				'label'         => 'Safety diagnosis',
				'title'         => "Which *invisible threats*\n*are getting into* your water?",
				'metaLabel'     => 'Risk:',
				'solutionLabel' => 'Recommended solution',
				'alertBadge'    => 'Health alert',
				'cards'         => array(
					array( 'title' => 'Positive coliform test', 'meta' => 'Bacteria getting in', 'solution' => 'Select UV sterilizer', 'color' => 'red', 'image' => $img( 'Legionella-Monitoring.webp', 'Microbiological analysis' ), 'text' => 'A positive test reveals bacterial contamination. Immediate UV treatment is essential to prevent serious infections in your family.' ),
					array( 'title' => 'Enteric viruses', 'meta' => 'Groundwater contamination', 'solution' => 'High-performance UV', 'color' => 'red', 'image' => $img( 'virus entérique.jpg', 'Enteric viruses' ), 'text' => 'These microscopic pathogens often get through standard filters. Only a precise dose of UV-C light can permanently destroy their DNA.' ),
					array( 'title' => 'Cysts & parasites', 'meta' => 'Giardia & Cryptosporidium', 'solution' => '1-micron filtration + UV', 'color' => 'red', 'image' => $sterile, 'text' => 'Highly resistant to city chlorine, these parasites cause digestive illness. Our UV systems neutralize them naturally.' ),
					array( 'title' => 'After storms / snowmelt', 'meta' => 'Surface runoff', 'solution' => 'UV-IHS system', 'color' => 'red', 'image' => $storm, 'text' => 'Heavy rain often carries pollutants into groundwater. Active UV protection keeps your water safe in any weather.' ),
					array( 'title' => 'Shallow wells', 'meta' => 'High exposure', 'solution' => 'Bricareau VH series', 'color' => 'red', 'image' => $img( 'puits de surface.jpg', 'Shallow well' ), 'text' => 'Shallow wells are directly exposed to outside contaminants. UV disinfection acts as an impassable shield for your home.' ),
					array( 'title' => 'Boil-water advisory', 'meta' => 'Proactive prevention', 'solution' => 'Bricareau 24/7 protection', 'color' => 'red', 'image' => $img( 'Avis_debullition.png', 'Boil-water advisory' ), 'text' => 'Stop depending on late municipal alerts. With a Bricareau UV system, you get pure water 24/7 without boiling a single drop.' ),
				),
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'anchor'      => 'systemes-uv',
				'variant'     => 'simple',
				'headerAlign' => 'left',
				'headerBar'   => true,
				'title'       => "_Our UV_\ndisinfection systems",
				'intro'       => 'UV technology is the ideal choice for consumers who want protection against microbiological contaminants, including bacteria (E. coli, fecal coliforms, etc.), viruses and protozoa (Cryptosporidium, Giardia, etc.) that can resist chlorine. Unlike chemical treatments, UV does not change the taste, smell or physico-chemical composition of water. Our point-of-entry (POE) UV units are installed on the main supply line, before the water is distributed throughout the home.',
				'products'    => array(
					array( 'name' => 'VH200-F10', 'image' => $vh200, 'url' => '/contact', 'text' => "Whole-house UV with built-in pre-filtration\nIdeal for: bacteria, cloudiness.\nFlow: 9 gpm." ),
					array( 'name' => 'VH410-F20', 'image' => $vh410, 'url' => '/contact', 'text' => "Whole-house UV with built-in pre-filtration\nIdeal for: bacteria, cloudy water.\nFlow: 18 gpm." ),
					array( 'name' => 'Arros 15-IHS10', 'image' => $arros, 'url' => '/contact', 'text' => "Whole-house UV water treatment system\nIdeal for: bacteria, cloudiness.\nFlow: 15 gpm." ),
				),
			),
		),
		array(
			'bricareau/image-banner',
			array(
				'overlay' => 'soft',
				'eyebrow' => 'Flawless microbiological protection',
				'title'   => 'The power of UV light for perfectly healthy water',
				'text'    => 'Enjoy complete peace of mind with our ultraviolet (UV) disinfection systems. Designed to effectively eliminate bacteria, viruses and other harmful micro-organisms, our systems guarantee healthy water for your whole family without changing its taste or natural minerals.',
				'image'   => $img( 'UV system installation to kill bacteria.png', 'Expert installation of a Bricareau UV disinfection system' ),
			),
		),
		array(
			'bricareau/comparison-table',
			array(
				'title'            => "_Compare our UV_\nsterilization systems",
				'firstColumnLabel' => 'Model',
				'columns'          => array(
					array( 'name' => 'VH200-F10', 'image' => $vh200 ),
					array( 'name' => 'VH410-F20', 'image' => $vh410, 'badge' => "Families' choice", 'color' => 'blue' ),
					array( 'name' => 'Arros 15-IHS10', 'image' => $arros, 'badge' => 'New', 'color' => 'emerald' ),
				),
				'rows'             => array(
					array( 'label' => 'Eliminates 99.99% of viruses', 'values' => "yes\nyes\nyes" ),
					array( 'label' => 'Destroys bacteria', 'values' => "yes\nyes\nyes" ),
					array( 'label' => 'Neutralizes cysts', 'values' => "yes\nyes\nyes" ),
					array( 'label' => 'Lamp replacement alarm', 'values' => "yes\nyes\nyes" ),
					array( 'label' => 'UV intensity sensor', 'values' => "\n\nyes" ),
					array( 'label' => 'Lifetime warranty on the chamber', 'values' => "yes\nyes\nyes" ),
				),
			),
		),
		array(
			'bricareau/image-cta',
			array(
				'layout'  => 'banner',
				'eyebrow' => 'Water quality control',
				'title'   => "_Accurate water tests_\n*for complete peace of mind.*",
				'text'    => "Don't guess about your water quality. Our in-depth analyses identify bacteria, minerals and chemical contaminants to give you complete peace of mind.",
				'ctaText' => 'Request a water analysis',
				'ctaUrl'  => '/analyses-et-tests-d-eau',
				'image'   => $img( 'Legionella-Monitoring.webp', 'Microbiological analysis' ),
			),
		),
		array(
			'bricareau/testimonials-carousel',
			array(
				'framed' => false,
				'title'  => 'Zero bacteria, *100% peace of mind.*',
				'count'  => 6,
				'offset' => 3,
			),
		),
		array(
			'bricareau/product-grid',
			array(
				'variant'  => 'simple',
				'title'    => 'Discover related products.',
				'intro'    => 'Get even more from your water treatment with our complementary solutions.',
				'products' => array(
					array( 'name' => 'Specialized water filtration systems', 'text' => 'Our specialized filters are designed to target and effectively remove the specific contaminants in your well water.', 'image' => $img( "Filtres d'eau spécialisés.webp", 'Specialized water filter' ), 'url' => '/systemes-de-filtration-d-eau-specialises-pour-toute-la-maison' ),
					array( 'name' => 'Water softeners', 'text' => 'Remove scale for soft skin, bright laundry and lasting protection of your installations.', 'image' => $img( "Adoucisseurs d'eau.webp", 'Water softener' ), 'url' => '/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire' ),
					array( 'name' => 'Drinking water stations', 'text' => 'Mineral-quality water right at your sink, for pure hydration without plastic waste.', 'image' => $img( "Solutions d'eau potable.webp", 'Drinking water station' ), 'url' => '/stations-d-eau-potables-sous-l-evier-de-la-cuisine' ),
				),
			),
		),
		array(
			'bricareau/faq',
			array( 'items' => array_map( fn( $qa ) => array( 'question' => $qa[0], 'answer' => $qa[1] ), $faq ) ),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'   => 'The ultimate protection against bacteria',
				'title'   => "Eliminate 99.99% of viruses and bacteria\n*with UV sterilization.*",
				'text'    => "Don't compromise on your family's safety. Our ultraviolet disinfection systems instantly neutralize harmful micro-organisms, without adding chemicals.",
				'image'   => $sterile,
				'avatars' => $avatars(),
			),
		),
		array(
			'bricareau/resource-cards',
			array(
				'title' => 'Resources',
				'items' => array(
					array( 'title' => 'Water softeners and septic tanks: compatible or not?', 'image' => $img( 'Cover-Image.webp', 'Softener and septic tank' ), 'url' => '/adoucisseur-deau-et-fosse-septique-mythes-et-realites' ),
					array( 'title' => 'Salt-free vs salt-based softeners: the technical truth', 'image' => $img( 'avantages conditionneurs sans sel.jpg', 'Salt-free conditioner' ), 'url' => '/adoucisseur-sans-sel-vs-avec-sel-verite-technique' ),
					array( 'title' => 'How to set the hardness on your softener', 'image' => $img( '2149186343.jpg', 'Hardness setting' ), 'url' => '/comment-regler-durete-adoucisseur-eau' ),
				),
			),
		),
	),
);
