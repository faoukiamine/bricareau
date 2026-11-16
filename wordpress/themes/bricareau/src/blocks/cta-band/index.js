import { registerServerBlock } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{
		title: 'Texte',
		fields: [
			{
				key: 'theme',
				label: 'Fond',
				type: 'select',
				options: [
					{ label: 'Bleu', value: 'navy' },
					{ label: 'Gris clair', value: 'light' },
				],
			},
			{ key: 'label', label: 'Surtitre' },
			{ key: 'title', label: 'Titre', type: 'title' },
			{ key: 'text', label: 'Texte', type: 'textarea' },
		],
	},
	{
		title: 'Boutons',
		fields: [
			{ key: 'ctaText', label: 'Bouton principal' },
			{ key: 'ctaUrl', label: 'Lien du bouton principal', type: 'url' },
			{ key: 'secondaryText', label: 'Bouton secondaire' },
			{ key: 'secondaryUrl', label: 'Lien du bouton secondaire', type: 'url' },
		],
	},
] );
