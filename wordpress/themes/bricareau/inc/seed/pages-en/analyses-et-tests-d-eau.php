<?php
/**
 * Water analysis & testing, English (translation of pages/analyses-et-tests-d-eau.php).
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $form    fn( string $slug ): string Fluent Forms id.
 * @var callable $avatars fn(): array
 */

$faq = array(
	array( 'What is a physico-chemical water analysis?', 'A physico-chemical analysis measures non-living parameters such as hardness, pH, iron, manganese, nitrates and dissolved solids. It shows how your water looks and tastes and how it affects your plumbing.' ),
	array( 'What is a microbiological analysis?', 'This analysis looks for living organisms such as coliform bacteria and E. coli. These micro-organisms can cause immediate health problems, and their absence is essential for water to be declared safe to drink.' ),
	array( 'Why test water that looks clear and has no smell?', 'Several dangerous contaminants, such as arsenic, lead or nitrates, have no colour, smell or taste. Only a professional laboratory analysis can confirm that your water is truly safe.' ),
	array( 'How often should I have my well water tested?', 'Québec health authorities recommend testing the microbiological quality of your well water at least twice a year (spring and fall) and doing a complete physico-chemical analysis every two years.' ),
	array( 'Which parameters matter most in Québec?', 'For residential wells, the priorities are bacteria, nitrates, iron, manganese, hardness and, in some regions, arsenic and radon.' ),
	array( 'How should I take the sample for the laboratory?', 'For a microbiological test, use a sterile bottle supplied by the laboratory and follow a careful tap disinfection procedure so the results are not skewed.' ),
	array( 'What is the difference between a home test and a laboratory analysis?', 'A home test gives instant results on minerals and hardness. An accredited laboratory analysis is needed to certify microbiological safety and detect complex chemical contaminants.' ),
	array( 'What does total coliforms in my report mean?', 'It means your well is vulnerable to surface water seeping in. Not all coliforms cause disease, but their presence suggests that disinfection treatment is needed.' ),
	array( 'Can acidic water damage my home?', 'Absolutely. A pH below 6.5 is considered corrosive. It can attack your copper pipes, causing pinhole leaks and releasing heavy metals into your drinking water.' ),
	array( 'What if the results say my water is not safe to drink?', "Don't panic. Our experts will review your report and recommend the right system (UV for bacteria, softener for hardness or a specialized filter) to make your water perfectly safe." ),
);

return array(
	'slug'             => 'water-analysis-and-testing',
	'title'            => 'Water analysis & testing',
	'translation_of'   => 'analyses-et-tests-d-eau',
	'breadcrumb_label' => 'Water analysis & testing',
	'seo_title'        => 'Water Testing and Analysis in Québec | Montréal, North Shore & South Shore | Bricareau',
	'seo_description'  => 'Get a complete, accurate water analysis in Québec. Certified laboratory tests for wells and city water in Montréal, Laval, the South Shore and the North Shore.',
	'menu_order'       => 31,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'fadeStop'    => '33',
				'title'       => "*Professional* water analysis\n& laboratory testing",
				'text'        => 'Need a water analysis in the Montréal area? Whether for a yearly check, a mortgage transaction or a quality concern, Bricareau offers complete laboratory tests throughout Greater Montréal, Laval and the surrounding regions.',
				'ctaText'     => 'Book a water test',
				'ctaUrl'      => '#water-test',
				'phoneButton' => true,
				'image'       => $img( 'r0_0_4896_3264_w1200_h678_fmax.jpg', 'Water analysis' ),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'anchor'     => 'scenarios-analyse',
				'variant'    => 'panels',
				'label'      => 'Prevention guide',
				'title'      => "When should you\n*test your water?*",
				'intro'      => 'What you cannot see is often the most dangerous. Find the situation that applies to you to choose the right laboratory test.',
				'linkText'   => 'Book this test',
				'defaultUrl' => '#water-test',
				'cards'      => array(
					array( 'title' => 'Real estate transaction', 'label' => 'Legal validity', 'color' => 'blue', 'text' => 'Required for mortgages and notaries. Certified drinking water certificate.', 'image' => $img( '2148895486.jpg', 'Real estate transaction' ) ),
					array( 'title' => 'Newborns & health', 'label' => 'Optimal safety', 'color' => 'pink', 'text' => "Checks nitrates and bacteria for infants' sensitive stomachs.", 'image' => $img( 'When-Can-Babies-Have-Water.jpg', 'Baby and water' ) ),
					array( 'title' => 'Suspicious taste or smell', 'label' => 'Better taste', 'color' => 'amber', 'text' => 'A rotten egg or metallic taste hides complex chemical realities.', 'image' => $img( 'water-taste.jpg', 'Water taste' ) ),
					array( 'title' => 'Acidity & corrosion', 'label' => 'Plumbing savings', 'color' => 'cyan', 'text' => 'Blue/green stains on your sinks? Your plumbing may be dissolving.', 'image' => $img( 'corrosive-water-problems-Low-pH.jpg', 'Corrosive water' ) ),
					array( 'title' => 'After a storm/flood', 'label' => 'Peace of mind', 'color' => 'slate', 'text' => 'Heavy rain can contaminate shallow wells. A quick test is a must.', 'image' => $img( 'eau trouble turbide.avif', 'Cloudy water' ) ),
					array( 'title' => 'Yearly follow-up (wells)', 'label' => 'Health compliance', 'color' => 'emerald', 'text' => 'Québec health authorities recommend a microbiological analysis every 6 months.', 'image' => $img( '2148597980.jpg', 'Well water analysis' ) ),
				),
			),
		),
		array(
			'bricareau/plan-cards',
			array(
				'label'         => 'Side-by-side comparison',
				'title'         => "Which *test kit*\nshould you choose for your water?",
				'intro'         => 'Solutions to fit your needs, from a basic bacteria check to a complete assessment for total peace of mind.',
				'featuredLabel' => 'Recommended',
				'plans'         => array(
					array( 'subtitle' => 'Basic safety', 'title' => 'Microbiological test', 'text' => 'The essentials to confirm there are no harmful bacteria.', 'items' => "Total coliforms\nAtypical colonies\nE. coli\nEnterococci" ),
					array( 'subtitle' => 'Water appearance', 'title' => 'Physico-chemical test Type I', 'text' => 'Ideal for finding the causes of stains, odours and tastes.', 'items' => "Alkalinity\nCalcium\nChloride\nConductivity\nColour\nHardness\nIron\nMagnesium\nManganese\npH\nSodium\nTannin-lignin\nTurbidity" ),
					array( 'subtitle' => 'Health', 'title' => 'Physico-chemical test Type II', 'text' => 'Detects heavy metals and dangerous invisible contaminants.', 'items' => "Fluorides\nNitrites-nitrates\nSulphates\nAntimony\nArsenic\nBarium\nBoron\nCadmium\nChromium\nCopper\nLead\nSelenium\nUranium" ),
					array( 'subtitle' => 'Complete protection', 'title' => 'Complete assessment', 'text' => 'The most thorough analysis for complete peace of mind.', 'items' => "Microbiological analysis\nAppearance parameters\nHeavy metals\nHealth contaminants\n+ All previous parameters", 'featured' => true, 'note' => '360° analysis for well water' ),
				),
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'   => 'Understand before you act',
				'title'   => "Not sure about\n*your water quality?*",
				'text'    => 'Book a professional water analysis and receive a clear report with recommendations. A specialist will contact you to discuss the results and, if needed, suggest a treatment plan suited to your home.',
				'image'   => $img( 'glass-of-water.jpeg', 'Glass of pure water' ),
				'avatars' => $avatars(),
			),
		),
		array(
			'bricareau/faq',
			array( 'items' => array_map( fn( $qa ) => array( 'question' => $qa[0], 'answer' => $qa[1] ), $faq ) ),
		),
		array(
			'bricareau/form-section',
			array(
				'anchor' => 'water-test',
				'title'  => 'Book your *water test.*',
				'intro'  => 'Fill in the form to schedule the collection of your water sample.',
				'formId' => $form( 'test-eau-en' ),
			),
		),
	),
);
