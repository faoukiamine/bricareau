import { registerServerBlock, headerFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: headerFields() },
	{
		title: 'Photo',
		fields: [
			{ key: 'image', label: 'Image', type: 'image', focal: true },
			{ key: 'imageBadge', label: 'Badge' },
			{ key: 'imageTitle', label: 'Titre' },
			{ key: 'imageText', label: 'Texte', type: 'textarea' },
		],
	},
	{
		title: 'Simulateur',
		fields: [
			{ key: 'calcTitle', label: 'Titre' },
			{ key: 'calcSubtitle', label: 'Sous-titre' },
			{ key: 'adultBottles', label: 'Bouteilles par adulte et par jour', type: 'number', min: 1, max: 10 },
			{ key: 'childBottles', label: 'Bouteilles par enfant et par jour', type: 'number', min: 1, max: 10 },
			{ key: 'bottlePrice', label: 'Prix moyen d’une bouteille ($, taxes incluses)' },
			{ key: 'note', label: 'Phrase sous les résultats' },
		],
	},
] );
