import { registerServerBlock, LABEL_STYLES, ACCENT_STYLES } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{
		title: 'Texte',
		fields: [
			{ key: 'label', label: 'Surtitre' },
			{ key: 'labelStyle', label: 'Style du surtitre', type: 'select', options: LABEL_STYLES },
			{ key: 'liveLabel', label: 'Surtitre « en ligne » (point vert animé)', type: 'toggle' },
			{ key: 'title', label: 'Titre (H1)', type: 'title' },
			{ key: 'accentStyle', label: 'Style du texte en *accent*', type: 'select', options: ACCENT_STYLES },
			{ key: 'text', label: 'Texte', type: 'textarea' },
		],
	},
	{
		title: 'Bouton',
		fields: [
			{ key: 'ctaText', label: 'Texte du bouton' },
			{ key: 'ctaUrl', label: 'Lien du bouton', type: 'url', help: 'Chemin (/consultation), URL, ou ancre d’une section de la page (#notre-vision).' },
			{ key: 'phoneButton', label: 'Ajouter le bouton téléphone', type: 'toggle' },
			{ key: 'rating', label: 'Note (5 étoiles)', help: 'Ex. « 4,9/5 par +20 000 familles ». Affichée dans une carte sur l’image (sous le texte sans image).' },
		],
	},
	{
		title: 'Image et mise en page',
		fields: [
			{ key: 'image', label: 'Image', type: 'image', focal: true },
			{
				key: 'layout',
				label: 'Mise en page',
				type: 'select',
				options: [
					{ label: 'Texte et image côte à côte', value: 'split' },
					{ label: 'Texte et image côte à côte (pages produits)', value: 'product' },
					{ label: 'Texte et image côte à côte (ancien fondu)', value: 'fade' },
					{ label: 'Texte et image côte à côte (contact)', value: 'wash' },
					{ label: 'Texte centré sans image (contact)', value: 'centered' },
				],
				help: 'Avec une image, toutes les mises en page affichent le texte à gauche et l’image à droite (au-dessus du texte sur mobile).',
			},
			{
				key: 'heroHeight',
				label: 'Hauteur minimale sur ordinateur (texte centré)',
				help: 'La bannière occupe toujours au moins la hauteur de l’écran.',
				type: 'select',
				options: [
					{ label: '600 px', value: '600' },
					{ label: '700 px', value: '700' },
					{ label: '800 px', value: '800' },
					{ label: '850 px', value: '850' },
				],
			},
			{ key: 'breadcrumbs', label: "Afficher le fil d'Ariane", type: 'toggle' },
		],
	},
	{
		title: 'Atouts sous les boutons (optionnel)',
		list: {
			key: 'trustItems',
			newItem: { icon: 'award', label: '', value: '' },
			itemLabel: ( it, i ) => `${ i + 1 }. ${ it.value || 'Atout' }`,
			fields: [
				{ key: 'icon', label: 'Icône', type: 'icon' },
				{ key: 'label', label: 'Petit libellé' },
				{ key: 'value', label: 'Texte' },
			],
		},
	},
] );
