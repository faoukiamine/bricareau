import { registerServerBlock, headerFields, headerLayoutFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: [ ...headerFields(), ...headerLayoutFields ] },
	{
		title: 'Image',
		fields: [
			{ key: 'image', label: 'Image', type: 'image', focal: true },
			{
				key: 'imageSide',
				label: 'Côté de l’image',
				type: 'select',
				options: [
					{ label: 'Droite', value: 'right' },
					{ label: 'Gauche', value: 'left' },
				],
			},
		],
	},
	{
		title: 'Lignes',
		list: {
			key: 'items',
			newItem: { title: '', text: '', image: {} },
			itemLabel: ( it, i ) => `${ i + 1 }. ${ it.title || 'Ligne' }`,
			fields: [
				{ key: 'title', label: 'Titre' },
				{ key: 'text', label: 'Texte', type: 'textarea' },
				{ key: 'image', label: 'Image propre à cette ligne (optionnel)', type: 'image', focal: true },
			],
		},
	},
] );
