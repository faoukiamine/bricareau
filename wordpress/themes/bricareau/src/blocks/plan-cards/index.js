import { registerServerBlock, headerFields, headerLayoutFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: [ ...headerFields(), ...headerLayoutFields, { key: 'featuredLabel', label: 'Badge de la carte mise en avant' } ] },
	{
		title: 'Forfaits',
		list: {
			key: 'plans',
			newItem: { subtitle: '', title: '', text: '', items: '', featured: false, note: '' },
			itemLabel: ( p, i ) => `${ i + 1 }. ${ p.title || 'Forfait' }`,
			fields: [
				{ key: 'subtitle', label: 'Sur-titre' },
				{ key: 'title', label: 'Titre' },
				{ key: 'text', label: 'Description', type: 'textarea' },
				{ key: 'items', label: 'Éléments inclus', type: 'lines' },
				{ key: 'note', label: 'Note en bas de carte' },
				{ key: 'featured', label: 'Mettre en avant (carte sombre)', type: 'toggle' },
			],
		},
	},
] );
