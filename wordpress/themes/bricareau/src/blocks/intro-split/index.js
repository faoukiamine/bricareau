import { registerServerBlock, LABEL_STYLES, ACCENT_STYLES } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{
		title: 'Texte',
		fields: [
			{ key: 'label', label: 'Surtitre' },
			{ key: 'labelStyle', label: 'Style du surtitre', type: 'select', options: LABEL_STYLES },
			{ key: 'title', label: 'Titre', type: 'title' },
			{ key: 'accentStyle', label: 'Style du texte en *accent*', type: 'select', options: ACCENT_STYLES },
			{ key: 'text', label: 'Paragraphe', type: 'rich' },
			{ key: 'ctaText', label: 'Texte du bouton (mise en page « image à gauche »)' },
			{ key: 'ctaUrl', label: 'Lien du bouton', type: 'url' },
		],
	},
	{
		title: 'Image',
		fields: [
			{ key: 'image', label: 'Image', type: 'image', focal: true },
			{
				key: 'layout',
				label: 'Mise en page',
				type: 'select',
				options: [
					{ label: 'Texte à gauche, image à droite', value: 'text-left' },
					{ label: 'Image haute à gauche, atouts en cartes', value: 'image-left' },
				],
			},
			{
				key: 'imageStyle',
				label: "Style de l'image",
				type: 'select',
				options: [
					{ label: 'Décalée sur fond gris', value: 'offset' },
					{ label: 'Arrondie avec ombre', value: 'rounded' },
				],
			},
			{ key: 'badgeIcon', label: 'Badge : icône', type: 'icon' },
			{ key: 'badgeLabel', label: 'Badge : petit libellé' },
			{ key: 'badgeTitle', label: 'Badge : texte' },
		],
	},
	{
		title: 'Atouts (optionnel)',
		list: {
			key: 'features',
			newItem: { icon: 'users', title: '', text: '', color: 'navy' },
			itemLabel: ( item, i ) => `${ i + 1 }. ${ item.title || 'Atout' }`,
			fields: [
				{ key: 'icon', label: 'Icône', type: 'icon' },
				{ key: 'label', label: 'Petit libellé (image à gauche)' },
				{ key: 'title', label: 'Titre' },
				{ key: 'text', label: 'Texte', type: 'textarea' },
				{
					key: 'color',
					label: 'Couleur',
					type: 'select',
					options: [
						{ label: 'Bleu', value: 'navy' },
						{ label: 'Vert', value: 'green' },
					],
				},
			],
		},
	},
] );
