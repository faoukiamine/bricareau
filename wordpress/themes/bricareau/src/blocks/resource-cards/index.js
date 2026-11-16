import { registerServerBlock, headerFields, headerLayoutFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{
		title: 'En-tête de section',
		fields: [
			...headerFields(),
			...headerLayoutFields,
			{
				key: 'variant',
				label: 'Style des cartes',
				type: 'select',
				options: [
					{ label: 'Articles', value: 'articles' },
					{ label: 'Grandes cartes avec texte et bouton (contact)', value: 'contact' },
				],
			},
			{ key: 'watermark', label: 'Mot en filigrane (grandes cartes)' },
			{ key: 'linkText', label: 'Texte du lien' },
			{
				key: 'background',
				label: 'Fond',
				type: 'select',
				options: [
					{ label: 'Gris clair', value: 'light' },
					{ label: 'Blanc', value: 'white' },
				],
			},
		],
	},
	{
		title: 'Articles',
		list: {
			key: 'items',
			newItem: { title: '', image: {}, url: '' },
			itemLabel: ( it, i ) => `${ i + 1 }. ${ it.title || 'Article' }`,
			fields: [
				{ key: 'title', label: 'Titre' },
				{ key: 'image', label: 'Image', type: 'image', focal: true },
				{ key: 'url', label: 'Lien', type: 'url' },
				{ key: 'text', label: 'Texte (grandes cartes)', type: 'textarea' },
				{ key: 'badge', label: 'Pastille « en ligne » (grandes cartes)' },
				{ key: 'buttonText', label: 'Bouton (grandes cartes)' },
			],
		},
	},
] );
