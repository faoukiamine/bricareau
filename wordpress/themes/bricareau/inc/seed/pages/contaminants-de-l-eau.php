<?php
/**
 * Water contaminants — src/pages/ContaminantsEau.tsx (data in data/contaminants.json).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'            => 'contaminants-de-l-eau',
	'title'           => "Contaminants de l'eau",
	'seo_title'       => "Les contaminants de l'eau | Bricareau",
	'seo_description' => "Découvrez les polluants les plus fréquents dans l'eau potable au Québec et comment nos systèmes peuvent vous en protéger.",
	'menu_order'      => 72,
	'blocks'          => array(
		array(
			'bricareau/page-hero',
			array(
				'layout'  => 'product',
				'label'   => "Qualité de l'eau",
				'title'   => "_Comprendre les_\ncontaminants de l'eau",
				'text'    => "Découvrez les polluants les plus fréquents dans l'eau potable au Québec et comment nos systèmes peuvent vous en protéger.",
				'ctaText' => 'Explorez les contaminants',
				'ctaUrl'  => '#explorez',
				'image'   => $img( 'Turbide-Water.webp', "Les contaminants de l'eau" ),
			),
		),
		array(
			'bricareau/card-grid',
			array(
				'anchor'      => 'explorez',
				'variant'     => 'icon-centered',
				'accentStyle' => 'green',
				'title'       => "Pourquoi analyser et filtrer\n*l'eau de votre résidence ?*",
				'intro'       => 'L\'eau qui coule de vos robinets, qu\'elle provienne d\'un puits privé ou d\'un réseau municipal, parcourt un long trajet avant d\'arriver chez vous. Tout au long de ce cheminement, elle peut se charger en divers éléments indésirables. Comprendre ce qui compose votre eau est la première étape vers une hydratation véritablement saine et sécuritaire pour votre famille.',
				'cards'       => array(
					array( 'icon' => 'droplets', 'title' => "Invisibles à l'œil nu", 'text' => 'Une eau parfaitement claire peut cacher des minéraux dissous, des produits chimiques ou des micro-organismes imperceptibles.' ),
					array( 'icon' => 'heart-pulse', 'title' => 'Impact sur la santé', 'text' => "Certains polluants comme le plomb ou les bactéries s'accumulent ou agissent rapidement, affectant le bien-être de votre famille." ),
					array( 'icon' => 'shield-check', 'title' => 'Normes rigoureuses', 'text' => "Santé Canada établit des limites strictes (CMA) pour garantir que l'eau distribuée reste sécuritaire à la consommation." ),
				),
			),
		),
		array( 'bricareau/contaminants-guide', array() ),
	),
);
