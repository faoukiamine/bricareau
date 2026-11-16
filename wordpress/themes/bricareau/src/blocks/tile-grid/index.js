import { registerServerBlock, headerFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: headerFields() },
	{
		title: 'Apparence',
		fields: [
			{
				key: 'variant',
				label: 'Style',
				type: 'select',
				options: [
					{ label: 'Tuiles sombres (3 colonnes)', value: 'dark' },
					{ label: 'Grandes tuiles claires (2 colonnes)', value: 'light' },
					{ label: 'Cartes uniformes (4 colonnes, glisser sur mobile)', value: 'cards' },
				],
			},
			{
				key: 'textStyle',
				label: 'Texte des tuiles sombres',
				type: 'select',
				options: [
					{ label: 'Titres en majuscules', value: 'caps' },
					{ label: 'Titres normaux, libellé vert', value: 'plain' },
				],
			},
			{
				key: 'align',
				label: "Alignement de l'en-tête",
				type: 'select',
				options: [
					{ label: 'Centré', value: 'center' },
					{ label: 'À gauche', value: 'left' },
				],
			},
		],
	},
	{
		title: "Carte d'appel (style cartes)",
		fields: [
			{ key: 'ctaLabel', label: 'Petit libellé' },
			{ key: 'ctaTitle', label: 'Titre', help: 'Vide = pas de carte.' },
			{ key: 'ctaText', label: 'Texte', type: 'textarea' },
			{ key: 'ctaButton', label: 'Texte du bouton' },
			{ key: 'ctaShort', label: 'Bouton sur mobile', help: 'Remplace la carte sur téléphone. Vide = texte du bouton.' },
			{ key: 'ctaUrl', label: 'Lien', type: 'url' },
		],
	},
	{
		title: 'Tuiles',
		list: {
			key: 'tiles',
			newItem: { label: '', title: '', text: '', url: '', image: {}, size: 'normal', fit: 'cover' },
			itemLabel: ( tile, i ) => `${ i + 1 }. ${ ( tile.title || 'Tuile' ).split( '\n' ).join( ' ' ) }`,
			fields: [
				{ key: 'label', label: 'Petit libellé (ex. ZÉRO CALCAIRE)' },
				{ key: 'title', label: 'Titre', type: 'textarea', help: 'Entrée = retour à la ligne.' },
				{ key: 'text', label: 'Texte (au survol sur les tuiles sombres)', type: 'textarea' },
				{ key: 'url', label: 'Lien', type: 'url' },
				{ key: 'image', label: 'Image', type: 'image', focal: true },
				{
					key: 'size',
					label: 'Taille (style sombre)',
					type: 'select',
					options: [
						{ label: 'Normale', value: 'normal' },
						{ label: 'Haute (2 rangées, pleine largeur sur tablette)', value: 'tall' },
						{ label: 'Large (2 colonnes)', value: 'wide' },
						{ label: 'Large sur tablette seulement', value: 'wide-tablet' },
					],
				},
				{
					key: 'fit',
					label: "Cadrage de l'image",
					type: 'select',
					options: [
						{ label: 'Remplir', value: 'cover' },
						{ label: 'Remplir, atténuée', value: 'cover-dim' },
						{ label: 'Image entière (produit détouré)', value: 'contain' },
					],
				},
			],
		},
	},
] );
