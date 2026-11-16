import { registerServerBlock, headerFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête', fields: [ ...headerFields(), { key: 'interval', label: 'Durée par étape (secondes)', type: 'number', min: 3, max: 15 } ] },
	{
		title: 'Étapes',
		list: {
			key: 'steps',
			newItem: { icon: 'droplets', title: '', text: '', image: {} },
			itemLabel: ( s, i ) => `${ i + 1 }. ${ s.title || 'Étape' }`,
			fields: [
				{ key: 'icon', label: 'Icône', type: 'icon' },
				{ key: 'title', label: 'Titre' },
				{ key: 'text', label: 'Texte', type: 'textarea' },
				{ key: 'image', label: 'Image dans le cercle', type: 'image', focal: true },
			],
		},
	},
] );
