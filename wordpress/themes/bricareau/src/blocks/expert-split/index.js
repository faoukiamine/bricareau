import { registerServerBlock, ACCENT_STYLES } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{
		title: 'Texte',
		fields: [
			{ key: 'title', label: 'Titre', type: 'title' },
			{ key: 'accentStyle', label: 'Style du texte en *accent*', type: 'select', options: ACCENT_STYLES },
			{ key: 'text', label: 'Texte', type: 'textarea' },
			{ key: 'ctaText', label: 'Texte du bouton' },
			{ key: 'ctaUrl', label: 'Lien du bouton', type: 'url' },
		],
	},
	{
		title: 'Image et badge',
		fields: [
			{ key: 'image', label: 'Image', type: 'image', focal: true },
			{
				key: 'imageSide',
				label: "Côté de l'image",
				type: 'select',
				options: [
					{ label: 'À gauche', value: 'left' },
					{ label: 'À droite', value: 'right' },
				],
			},
			{
				key: 'badge',
				label: 'Badge flottant',
				type: 'select',
				options: [
					{ label: 'Chiffre (ex. +25 ans)', value: 'stat' },
					{ label: 'Clients (pastilles + texte)', value: 'social' },
					{ label: 'Aucun', value: 'none' },
				],
			},
			{ key: 'badgeValue', label: 'Badge : chiffre' },
			{ key: 'badgeText', label: 'Badge : texte' },
			{ key: 'badgeSubtext', label: 'Badge : sous-texte' },
		],
	},
] );
