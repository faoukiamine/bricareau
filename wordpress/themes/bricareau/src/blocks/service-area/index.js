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
			{ key: 'backgroundImage', label: 'Carte en arrière-plan', type: 'image', focal: true },
		],
	},
	{
		title: 'Régions',
		list: {
			key: 'regions',
			newItem: { name: '', description: '' },
			itemLabel: ( region, i ) => `${ i + 1 }. ${ region.name || 'Région' }`,
			fields: [
				{ key: 'name', label: 'Nom' },
				{ key: 'description', label: 'Description' },
			],
		},
	},
];

registerBlockType( metadata.name, {
	edit: ( props ) => <ServerRenderedEdit { ...props } panels={ panels } />,
	save: () => null,
} );
