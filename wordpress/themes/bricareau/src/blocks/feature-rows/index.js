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
					{ label: 'Numéroté (01., 02.…)', value: 'numbered' },
					{ label: 'Icône + puces', value: 'icon' },
					{ label: 'Valeurs (grand titre fin)', value: 'values' },
				],
			},
			{
				key: 'background',
				label: 'Fond',
				type: 'select',
				options: [
					{ label: 'Gris clair', value: 'light' },
					{ label: 'Blanc', value: 'white' },
					{ label: 'Blanc avec halo bleu', value: 'glow' },
				],
			},
			{
				key: 'firstImageSide',
				label: 'Image de la 1re rangée',
				type: 'select',
				options: [
					{ label: 'À droite', value: 'right' },
					{ label: 'À gauche', value: 'left' },
				],
			},
		],
	},
	{
		title: 'Rangées',
		list: {
			key: 'rows',
			newItem: { title: '', subtitle: '', text: '', bullets: '', image: {}, gallery: [], icon: '', color: 'navy' },
			itemLabel: ( row, i ) => `${ i + 1 }. ${ ( row.title || 'Rangée' ).replace( /\*/g, '' ).split( '\n' )[ 0 ] }`,
			fields: [
				{ key: 'title', label: 'Titre', type: 'title' },
				{ key: 'subtitle', label: 'Sous-titre (italique)' },
				{ key: 'text', label: 'Texte', type: 'rich' },
				{ key: 'bullets', label: 'Puces', type: 'lines' },
				{ key: 'image', label: 'Image', type: 'image', focal: true },
				{ key: 'gallery', label: 'Galerie (remplace l’image, 6 photos max.)', type: 'images' },
				{ key: 'icon', label: 'Icône (style « Icône + puces »)', type: 'icon' },
				{
					key: 'color',
					label: 'Couleur',
					type: 'select',
					options: [
						{ label: 'Bleu', value: 'navy' },
						{ label: 'Vert', value: 'green' },
					],
				},
			],
		},
	},
] );
