import { registerServerBlock, LABEL_STYLES, ACCENT_STYLES } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{
		title: 'Texte',
		fields: [
			{ key: 'label', label: 'Surtitre' },
			{ key: 'labelStyle', label: 'Style du surtitre', type: 'select', options: LABEL_STYLES },
			{ key: 'title', label: 'Titre', type: 'title', help: 'Une ligne par ligne. *texte* = accent, **texte** = gras bleu (style éditorial).' },
			{ key: 'accentStyle', label: 'Style du texte en *accent*', type: 'select', options: ACCENT_STYLES },
			{ key: 'text', label: 'Paragraphes', type: 'rich' },
		],
	},
	{
		title: 'Apparence',
		fields: [
			{
				key: 'theme',
				label: 'Fond',
				type: 'select',
				options: [
					{ label: 'Sombre', value: 'dark' },
					{ label: 'Bleu clair', value: 'light' },
					{ label: 'Blanc', value: 'white' },
				],
			},
			{
				key: 'textSize',
				label: 'Taille des paragraphes',
				type: 'select',
				options: [
					{ label: 'Grande', value: 'large' },
					{ label: 'Moyenne', value: 'medium' },
				],
			},
			{
				key: 'titleStyle',
				label: 'Style du titre',
				type: 'select',
				options: [
					{ label: 'Gras', value: 'bold' },
					{ label: 'Éditorial (fin, mots en gras)', value: 'editorial' },
				],
			},
		],
	},
	{
		title: 'Engagements (optionnel)',
		list: {
			key: 'items',
			newItem: { icon: 'award', title: '', text: '' },
			itemLabel: ( item, i ) => `${ i + 1 }. ${ item.title || 'Engagement' }`,
			fields: [
				{ key: 'icon', label: 'Icône', type: 'icon' },
				{ key: 'title', label: 'Titre' },
				{ key: 'text', label: 'Texte', type: 'textarea' },
			],
		},
	},
] );
