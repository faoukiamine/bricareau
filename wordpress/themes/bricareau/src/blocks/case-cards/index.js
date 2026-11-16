import { registerServerBlock, headerFields, headerLayoutFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{
		title: 'En-tête de section',
		fields: [ ...headerFields(), ...headerLayoutFields, { key: 'ctaText', label: 'Lien « tout voir »' }, { key: 'ctaUrl', label: 'Adresse du lien', type: 'url' } ],
	},
	{
		title: 'Cartes',
		list: {
			key: 'items',
			newItem: { label: '', title: '', text: '', url: '', linkText: '' },
			itemLabel: ( it, i ) => `${ i + 1 }. ${ it.title || 'Carte' }`,
			fields: [
				{ key: 'label', label: 'Étiquette' },
				{ key: 'title', label: 'Titre' },
				{ key: 'text', label: 'Texte', type: 'textarea' },
				{ key: 'url', label: 'Lien', type: 'url' },
				{ key: 'linkText', label: 'Texte du lien' },
			],
		},
	},
] );
