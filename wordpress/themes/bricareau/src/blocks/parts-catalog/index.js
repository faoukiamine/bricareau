import { registerServerBlock, headerFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{
		title: 'En-tête de section',
		fields: [
			...headerFields(),
			{ key: 'helpText', label: 'Encadré d’aide : texte' },
			{ key: 'helpButton', label: 'Encadré d’aide : lien' },
			{ key: 'helpUrl', label: 'Encadré d’aide : adresse', type: 'url' },
		],
	},
	{
		title: 'Catégories',
		list: {
			key: 'categories',
			newItem: { name: '', items: [] },
			itemLabel: ( it, i ) => `${ i + 1 }. ${ it.name || 'Catégorie' }`,
			fields: [ { key: 'name', label: 'Nom' } ],
		},
	},
] );
