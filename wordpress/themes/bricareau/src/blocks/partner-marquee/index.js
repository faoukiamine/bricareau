import { registerBlockType } from '@wordpress/blocks';
import { ServerRenderedEdit } from '../../shared/controls';
import metadata from './block.json';

const panels = [
	{
		title: 'Clients',
		fields: [
			{ key: 'partners', label: 'Noms (un par ligne)', type: 'textarea' },
		],
	},
];

registerBlockType( metadata.name, {
	edit: ( props ) => <ServerRenderedEdit { ...props } panels={ panels } />,
	save: () => null,
} );
