import { registerServerBlock, ACCENT_STYLES } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{
		title: 'Texte',
		fields: [
			{ key: 'eyebrow', label: 'Surtitre (mise en page bannière)' },
			{ key: 'title', label: 'Titre', type: 'title' },
			{ key: 'accentStyle', label: 'Style du texte en *accent*', type: 'select', options: ACCENT_STYLES },
			{
				key: 'titleWeight',
				label: 'Graisse du titre',
				type: 'select',
				options: [
					{ label: 'Gras', value: 'bold' },
					{ label: 'Fin (accent en gras)', value: 'light' },
				],
			},
			{ key: 'text', label: 'Texte', type: 'textarea' },
			{ key: 'ctaText', label: 'Texte du bouton' },
			{ key: 'ctaUrl', label: 'Lien du bouton', type: 'url' },
		],
	},
	{
		title: 'Image',
		fields: [
			{ key: 'image', label: 'Image de fond', type: 'image', focal: true },
			{
				key: 'layout',
				label: 'Mise en page',
				type: 'select',
				options: [
					{ label: 'Texte à droite', value: 'right' },
					{ label: 'Bannière, texte à gauche (analyse d’eau)', value: 'banner' },
				],
			},
			{
				key: 'overlay',
				label: 'Voile',
				type: 'select',
				options: [
					{ label: 'Sombre (texte blanc)', value: 'dark' },
					{ label: 'Clair (texte bleu)', value: 'light' },
					{ label: 'Bleu (bannière)', value: 'blue' },
				],
			},
		],
	},
] );
