import { registerServerBlock, ACCENT_STYLES } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{
		title: 'Texte',
		fields: [
			{ key: 'title', label: 'Titre', type: 'title' },
			{ key: 'accentStyle', label: 'Style du texte en *accent*', type: 'select', options: ACCENT_STYLES },
			{ key: 'text', label: 'Texte', type: 'textarea' },
			{ key: 'chips', label: 'Pastilles', type: 'lines', help: 'Une par ligne : « Nom | Valeur » (ex. E. Coli | 99.99%).' },
			{ key: 'ctaText', label: 'Texte du bouton' },
			{ key: 'ctaUrl', label: 'Lien du bouton', type: 'url' },
		],
	},
	{
		title: 'Fond et encart',
		fields: [
			{ key: 'image', label: 'Image de fond', type: 'image', focal: true },
			{ key: 'cardIcon', label: 'Encart : icône', type: 'icon' },
			{ key: 'cardTitle', label: 'Encart : titre' },
			{ key: 'cardText', label: 'Encart : texte', type: 'textarea' },
		],
	},
] );
