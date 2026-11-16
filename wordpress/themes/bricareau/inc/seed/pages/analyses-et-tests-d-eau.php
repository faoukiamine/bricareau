<?php
/**
 * Analyses & Tests d'eau — src/pages/Tests-Eau.tsx.
 *
 * @var callable $img     fn( string $asset, string $alt ): array
 * @var callable $form    fn( string $slug ): string Fluent Forms id.
 * @var callable $avatars fn(): array
 */

$faq = array(
	array( "Qu'est-ce qu'une analyse physico-chimique de l'eau ?", "Une analyse physico-chimique mesure les paramètres non vivants tels que la dureté, le pH, le fer, le manganèse, les nitrates et les solides dissous. Cela permet d'évaluer l'esthétique de l'eau et son impact sur votre tuyauterie." ),
	array( "Qu'est-ce qu'une analyse microbiologique ?", "Cette analyse recherche la présence d'organismes vivants comme les bactéries coliformes et E. coli. Ces micro-organismes peuvent causer des problèmes de santé immédiats et leur absence est essentielle pour qu'une eau soit déclarée potable." ),
	array( "Pourquoi tester l'eau si elle semble claire et inodore ?", "Plusieurs contaminants dangereux comme l'arsenic, le plomb ou les nitrates sont incolores, inodores et sans goût. Seule une analyse professionnelle en laboratoire peut confirmer la sécurité réelle de votre eau." ),
	array( "À quelle fréquence devrais-je faire analyser mon eau de puits ?", "Santé Québec recommande d'analyser la qualité microbiologique de votre eau de puits au moins deux fois par an (printemps et automne) et d'effectuer une analyse physico-chimique complète tous les deux ans." ),
	array( "Quels sont les paramètres les plus critiques à surveiller au Québec ?", "Pour les puits résidentiels, les priorités sont les bactéries, les nitrates, le fer, le manganèse, la dureté et, dans certaines régions, l'arsenic et le radon." ),
	array( "Comment dois-je prélever l'échantillon pour le laboratoire ?", "Pour un test microbiologique, vous devez utiliser un flacon stérile fourni par le laboratoire et suivre une procédure de désinfection du robinet rigoureuse pour éviter de fausser les résultats." ),
	array( "Quelle est la différence entre un test à domicile et une analyse en laboratoire ?", "Le test à domicile permet d'obtenir des résultats instantanés sur les minéraux et la dureté. L'analyse en laboratoire accrédité est nécessaire pour certifier la potabilité microbiologique et détecter les contaminants chimiques complexes." ),
	array( "Que signifie la présence de coliformes totaux dans mon rapport ?", "Cela indique que votre puits est vulnérable aux infiltrations d'eau de surface. Bien que tous les coliformes ne soient pas pathogènes, leur présence suggère qu'un traitement de désinfection est nécessaire." ),
	array( "Un pH acide peut-il endommager ma résidence ?", "Absolument. Un pH inférieur à 6,5 est considéré comme corrosif. Il peut attaquer vos tuyaux de cuivre, provoquant des fuites « trous d'épingle » et libérant des métaux lourds dans votre eau de boisson." ),
	array( "Que faire si les résultats indiquent une eau non potable ?", "Pas de panique. Nos experts analyseront votre rapport et vous recommanderont le système approprié (UV pour les bactéries, adoucisseur pour la dureté ou filtre spécialisé) pour rendre votre eau parfaitement sûre." ),
);

return array(
	'slug'             => 'analyses-et-tests-d-eau',
	'title'            => "Analyses & tests d'eau",
	'breadcrumb_label' => "Analyses & Tests d'eau",
	'seo_title'        => "Test d'eau et Analyse d'eau au Québec | Montréal, Rive-Nord & Rive-Sud | Bricareau",
	'seo_description' => "Obtenez une analyse d'eau complète et précise au Québec. Tests de laboratoire certifiés pour puits et réseaux municipaux à Montréal, Laval, Rive-Sud et Rive-Nord.",
	'menu_order'       => 31,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'fadeStop'    => '33',
				'title'       => "Analyses d'eau\n& tests de laboratoire *professionnels*",
				'text'        => "Besoin d'une analyse d'eau dans la région métropolitaine ? Que ce soit pour une vérification annuelle, une transaction hypothécaire ou un souci de qualité, Bricareau offre des tests complets de laboratoire partout dans le Grand Montréal, Laval et les couronnes.",
				'ctaText'     => "Planifiez un test d'eau",
				'ctaUrl'      => '#water-test',
				'phoneButton' => true,
				'image'       => $img( 'r0_0_4896_3264_w1200_h678_fmax.jpg', "Analyses d'eau" ),
			),
		),
		array(
			'bricareau/symptom-cards',
			array(
				'anchor'     => 'scenarios-analyse',
				'variant'    => 'panels',
				'label'      => 'Guide de prévention',
				'title'      => "Quand devriez-vous\n*tester votre eau ?*",
				'intro'      => "L'invisible est souvent le plus dangereux. Identifiez la situation qui vous concerne pour choisir le test de laboratoire adéquat.",
				'linkText'   => 'Planifier ce test',
				'defaultUrl' => '#water-test',
				'cards'      => array(
					array( 'title' => 'Transaction Immobilière', 'label' => 'Validité Légale', 'color' => 'blue', 'text' => 'Obligatoire pour les hypothèques et notaires. Certificat de potabilité certifié.', 'image' => $img( '2148895486.jpg', 'Transaction immobilière' ) ),
					array( 'title' => 'Nouveau-né & Santé', 'label' => 'Sécurité Optimale', 'color' => 'pink', 'text' => 'Vérification des nitrates et bactéries pour les estomacs fragiles des nourrissons.', 'image' => $img( 'When-Can-Babies-Have-Water.jpg', 'Bébé et eau' ) ),
					array( 'title' => 'Goût ou Odeur Suspecte', 'label' => 'Confort Gustatif', 'color' => 'amber', 'text' => "L'œuf pourri ou le goût métallique cachent des réalités chimiques complexes.", 'image' => $img( 'water-taste.jpg', "Goût de l'eau" ) ),
					array( 'title' => 'Acidité & Corrosion', 'label' => 'Économie Plomberie', 'color' => 'cyan', 'text' => 'Taches bleues/vertes sur les éviers ? Votre plomberie est peut-être en train de se dissoudre.', 'image' => $img( 'corrosive-water-problems-Low-pH.jpg', 'Eau corrosive' ) ),
					array( 'title' => 'Après un Orage/Crues', 'label' => "Tranquillité d'esprit", 'color' => 'slate', 'text' => "Les fortes pluies peuvent contaminer les puits de surface. Un test rapide s'impose.", 'image' => $img( 'eau trouble turbide.avif', 'Eau trouble' ) ),
					array( 'title' => 'Suivi Annuel (Puits)', 'label' => 'Conformité Santé', 'color' => 'emerald', 'text' => 'Santé Québec recommande une analyse microbiologique tous les 6 mois.', 'image' => $img( '2148597980.jpg', "Analyse d'eau de puits" ) ),
				),
			),
		),
		array(
			'bricareau/plan-cards',
			array(
				'label' => 'Analyse comparative',
				'title' => "Quelle *trousse d'analyse*\nchoisir pour votre eau ?",
				'intro' => 'Des solutions adaptées à vos besoins, de la vérification bactérienne de base au bilan complet pour une tranquillité d\'esprit totale.',
				'plans' => array(
					array( 'subtitle' => 'Sécurité de base', 'title' => 'Test Micro-biologique', 'text' => "L'essentiel pour vérifier l'absence de bactéries nocives.", 'items' => "Coliformes totaux\nColonies atypiques\nE.coli\nEntérocoques" ),
					array( 'subtitle' => "Esthétique de l'eau", 'title' => 'Test Physico-chimique type I', 'text' => "Idéal pour identifier les causes de taches, d'odeurs et de saveurs.", 'items' => "Alcalinité\nCalcium\nChlorure\nConductivité\nCouleur\nDureté\nFer\nMagnésium\nManganèse\npH\nSodium\nTannin-Lignine\nTurbidité" ),
					array( 'subtitle' => 'Santé', 'title' => 'Test Physico-chimique type II', 'text' => 'Détecte les métaux lourds et contaminants invisibles dangereux.', 'items' => "Fluorures\nNitrites-nitrates\nSulfates\nAntimoine\nArsenic\nBaryum\nBore\nCadmium\nChrome\nCuivre\nPlomb\nSélénium\nUranium" ),
					array( 'subtitle' => 'La protection totale', 'title' => 'Bilan Complet', 'text' => "L'analyse la plus exhaustive pour une paix d'esprit absolue.", 'items' => "Analyses Microbiologiques\nParamètres Esthétiques\nMétaux Lourds\nContaminants Santé\n+ Tous les paramètres précédents", 'featured' => true, 'note' => "Analyse 360° pour l'eau de puits" ),
				),
			),
		),
		array(
			'bricareau/navy-cta',
			array(
				'label'   => 'Comprendre pour mieux agir',
				'title'   => "Vous avez un doute\n*sur la qualité de votre eau ?*",
				'text'    => "Planifier une analyse d’eau professionnelle et recevoir un rapport clair avec recommandations. Un spécialiste vous contactera pour discuter des résultats et, au besoin, vous proposer un plan de traitement adapté à votre maison.",
				'image'   => $img( 'glass-of-water.jpeg', "Verre d'eau pure" ),
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
				'title'  => "Planifiez votre *test d'eau.*",
				'intro'  => "Remplissez le formulaire pour planifier le prélèvement de votre échantillon d'eau.",
				'formId' => $form( 'test-eau' ),
			),
		),
	),
);
