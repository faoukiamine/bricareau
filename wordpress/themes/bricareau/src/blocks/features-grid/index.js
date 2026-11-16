import { registerBlockType } from '@wordpress/blocks';
import { ServerRenderedEdit } from '../../shared/controls';
import metadata from './block.json';

const panels = [
	{
		title: 'En-tête',
		fields: [
			{ key: 'eyebrow', label: 'Surtitre' },
			{ key: 'title', label: 'Titre', type: 'title' },
			{ key: 'intro', label: 'Introduction', type: 'textarea' },
		],
	},
	{
		title: 'Avantages',
		list: {
			key: 'features',
			newItem: { icon: 'shield-check', title: '', description: '' },
			itemLabel: ( feature, i ) => `${ i + 1 }. ${ feature.title || 'Avantage' }`,
			fields: [
				{ key: 'icon', label: 'Icône', type: 'icon' },
				{ key: 'title', label: 'Titre' },
				{ key: 'description', label: 'Description', type: 'textarea' },
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
];

registerBlockType( metadata.name, {
	edit: ( props ) => <ServerRenderedEdit { ...props } panels={ panels } />,
	save: () => null,
} );
