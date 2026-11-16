import { registerBlockType } from '@wordpress/blocks';
import { ServerRenderedEdit } from '../../shared/controls';
import metadata from './block.json';

const panels = [
	{
		title: 'Texte',
		fields: [
			{ key: 'eyebrow', label: 'Surtitre' },
			{ key: 'title', label: 'Titre', type: 'title' },
			{ key: 'body', label: 'Paragraphe', type: 'textarea' },
			{ key: 'bullets', label: 'Liste à puces (une ligne par puce)', type: 'lines' },
		],
	},
	{
		title: 'Bouton',
		fields: [
			{ key: 'ctaText', label: 'Texte du bouton' },
			{ key: 'ctaUrl', label: 'Lien du bouton', type: 'url' },
			{ key: 'ctaArrow', label: 'Flèche après le texte', type: 'toggle' },
		],
	},
	{
		title: 'Image',
		fields: [
			{ key: 'image', label: 'Image', type: 'image', focal: true },
			{ key: 'imageTitle', label: "Titre de l'image (infobulle)" },
			{
				key: 'imagePosition',
				label: "Position de l'image",
				type: 'select',
				options: [
					{ label: 'À droite', value: 'right' },
					{ label: 'À gauche', value: 'left' },
				],
			},
			{
				key: 'background',
				label: 'Fond de la section',
				type: 'select',
				options: [
					{ label: 'Gris clair', value: 'light' },
					{ label: 'Blanc', value: 'white' },
				],
			},
		],
	},
	{
		title: 'Encart sur l’image',
		fields: [
			{ key: 'cardIcon', label: 'Icône', type: 'icon' },
			{ key: 'cardTitle', label: 'Titre' },
			{ key: 'cardText', label: 'Texte', type: 'textarea' },
			{ key: 'cardMirrored', label: 'Aligner le texte à droite', type: 'toggle' },
		],
	},
];

registerBlockType( metadata.name, {
	edit: ( props ) => <ServerRenderedEdit { ...props } panels={ panels } />,
	save: () => null,
} );
