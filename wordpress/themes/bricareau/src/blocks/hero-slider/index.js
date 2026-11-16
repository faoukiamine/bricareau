import { registerBlockType } from '@wordpress/blocks';
import { ServerRenderedEdit } from '../../shared/controls';
import metadata from './block.json';

const panels = [
	{
		title: 'Diapositives',
		list: {
			key: 'slides',
			newItem: { label: '', title: '', description: '', image: {} },
			itemLabel: ( slide, i ) => `${ i + 1 }. ${ ( slide.title || 'Diapositive' ).replace( /\*/g, '' ).split( '\n' )[ 0 ] }`,
			fields: [
				{ key: 'label', label: 'Onglet (ex. Résidentiel)', help: "Affiché au-dessus du titre et dans l'onglet en bas de la bannière." },
				{ key: 'title', label: 'Titre', type: 'title' },
				{ key: 'description', label: 'Texte', type: 'textarea' },
				{ key: 'image', label: 'Image de fond', type: 'image', focal: true },
			],
		},
	},
	{
		title: 'Bouton',
		fields: [
			{ key: 'ctaText', label: 'Texte du bouton' },
			{ key: 'ctaUrl', label: 'Lien du bouton', type: 'url' },
			{ key: 'phoneButton', label: 'Ajouter le bouton téléphone', type: 'toggle' },
			{ key: 'interval', label: 'Durée par diapositive (secondes)', type: 'number', min: 3, max: 15 },
		],
	},
	{
		title: 'Chiffres clés',
		list: {
			key: 'stats',
			newItem: { value: '', label: '' },
			itemLabel: ( stat, i ) => `${ i + 1 }. ${ stat.value || 'Chiffre' }`,
			fields: [
				{ key: 'value', label: 'Valeur (ex. 25+)' },
				{ key: 'label', label: 'Libellé', type: 'textarea', help: 'Entrée = retour à la ligne.' },
			],
		},
	},
];

registerBlockType( metadata.name, {
	edit: ( props ) => <ServerRenderedEdit { ...props } panels={ panels } />,
	save: () => null,
} );
