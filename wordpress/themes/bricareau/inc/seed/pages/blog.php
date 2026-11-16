<?php
/**
 * Blog — src/pages/Blog.tsx. The articles themselves are posts (see import_articles in seed.php).
 *
 * @var callable $img fn( string $asset, string $alt ): array
 */

return array(
	'slug'             => 'blog',
	'title'            => 'Blog',
	'seo_title'        => "Blog & Ressources sur le Traitement d'Eau | Bricareau",
	'seo_description'  => "Découvrez nos articles, guides et conseils d'experts pour améliorer la qualité de votre eau au Québec. Tout sur l'adoucissement, la filtration et les tests d'eau.",
	'menu_order'       => 70,
	'blocks'           => array(
		array(
			'bricareau/page-hero',
			array(
				'layout' => 'split',
				'title'  => "Articles &\n*Ressources*",
				'text'   => "Découvrez nos derniers articles, guides et conseils d'experts pour une eau de meilleure qualité au quotidien.",
				'image'  => $img( 'wave-banner.jpg', "Articles et Ressources Bricareau - Conseils d'experts en traitement d'eau" ),
			),
		),
		array( 'bricareau/blog-index', array() ),
		array(
			'bricareau/cta-band',
			array(
				'label'         => 'PRÊT À TRANSFORMER VOTRE EAU ?',
				'title'         => "Obtenez des conseils\n*personnalisés d'un expert.*",
				'text'          => "Nos experts sont disponibles pour une consultation gratuite afin de discuter de vos besoins en traitement d'eau résidentiel ou commercial.",
				'ctaText'       => 'Planifier ma visite',
				'ctaUrl'        => '/contact',
				'secondaryText' => '1 (855) 264-9328',
				'secondaryUrl'  => 'tel:18552649328',
			),
		),
	),
);
