import { registerServerBlock, headerFields, headerLayoutFields, COLORS } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: [ ...headerFields(), ...headerLayoutFields ] },
	{
		title: 'Comparaisons',
		list: {
			key: 'items',
			newItem: { code: '', color: 'orange', title: '', subtitle: '', before: {}, beforeCaption: '', after: {}, afterCaption: '' },
			itemLabel: ( it, i ) => `${ i + 1 }. ${ it.title || 'Comparaison' }`,
			fields: [
				{ key: 'code', label: 'Symbole (ex. Fe, H2O)' },
				{ key: 'color', label: 'Couleur du symbole', type: 'select', options: COLORS },
				{ key: 'title', label: 'Titre' },
				{ key: 'subtitle', label: 'Sous-titre' },
				{ key: 'before', label: 'Image « avant »', type: 'image', focal: true },
				{ key: 'beforeCaption', label: 'Légende « avant »' },
				{ key: 'after', label: 'Image « après »', type: 'image', focal: true },
				{ key: 'afterCaption', label: 'Légende « après »' },
			],
		},
	},
	{
		title: 'Bouton',
		fields: [
			{ key: 'ctaText', label: 'Texte du bouton' },
			{ key: 'ctaUrl', label: 'Lien du bouton', type: 'url' },
		],
	},
] );
