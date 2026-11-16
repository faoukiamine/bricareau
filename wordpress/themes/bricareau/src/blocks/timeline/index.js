import { registerServerBlock, headerFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: headerFields() },
	{
		title: 'Étapes',
		list: {
			key: 'items',
			newItem: { label: '', title: '', text: '' },
			itemLabel: ( item, i ) => `${ i + 1 }. ${ item.title || 'Étape' }`,
			fields: [
				{ key: 'label', label: 'Période (ex. Les Fondations)' },
				{ key: 'title', label: 'Titre' },
				{ key: 'text', label: 'Texte', type: 'textarea' },
			],
		},
	},
] );
