import { registerServerBlock, headerFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: headerFields() },
	{
		title: 'Photo et chiffre',
		fields: [
			{ key: 'image', label: 'Image', type: 'image', focal: true },
			{ key: 'statIcon', label: 'Icône', type: 'icon' },
			{ key: 'statValue', label: 'Chiffre' },
			{ key: 'statLabel', label: 'Libellé', type: 'textarea' },
			{ key: 'ctaText', label: 'Texte du bouton' },
			{ key: 'ctaUrl', label: 'Lien du bouton', type: 'url' },
		],
	},
] );
