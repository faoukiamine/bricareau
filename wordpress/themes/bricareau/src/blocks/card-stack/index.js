import { registerServerBlock, headerFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: [ ...headerFields(), { key: 'interval', label: 'Rotation (secondes)', type: 'number', min: 2, max: 15 } ] },
	{
		title: 'Avantages',
		list: {
			key: 'items',
			newItem: { title: '', text: '', image: {} },
			itemLabel: ( it, i ) => `${ i + 1 }. ${ it.title || 'Avantage' }`,
			fields: [
				{ key: 'title', label: 'Titre' },
				{ key: 'text', label: 'Texte', type: 'textarea' },
				{ key: 'image', label: 'Photo', type: 'image', focal: true },
			],
		},
	},
] );
