import { registerServerBlock } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{
		title: 'Bannière',
		fields: [
			{ key: 'eyebrow', label: 'Surtitre' },
			{ key: 'title', label: 'Titre' },
			{ key: 'text', label: 'Texte', type: 'textarea' },
			{ key: 'image', label: 'Image', type: 'image', focal: true },
			{
				key: 'overlay',
				label: 'Dégradé bleu',
				type: 'select',
				options: [
					{ label: 'Prononcé', value: 'strong' },
					{ label: 'Léger', value: 'soft' },
				],
			},
		],
	},
] );
