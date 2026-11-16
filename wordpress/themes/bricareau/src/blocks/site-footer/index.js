import { registerServerBlock } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{
		title: 'Bas de page',
		fields: [
			{
				key: 'copyright',
				label: 'Mention de copyright',
				type: 'textarea',
				help: '{annee} est remplacé par l’année en cours.',
			},
		],
	},
] );
