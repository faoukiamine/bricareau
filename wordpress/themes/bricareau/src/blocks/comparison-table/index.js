import { registerServerBlock, headerFields, headerLayoutFields, COLORS } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: [ ...headerFields(), ...headerLayoutFields ] },
	{
		title: 'Tableau',
		fields: [
			{ key: 'firstColumnLabel', label: 'Titre de la 1re colonne' },
			{
				key: 'valueStyle',
				label: 'Style des valeurs',
				type: 'select',
				options: [
					{ label: 'Pastilles', value: 'pill' },
					{ label: 'Texte simple', value: 'plain' },
				],
			},
			{
				key: 'background',
				label: 'Fond',
				type: 'select',
				options: [
					{ label: 'Blanc', value: 'white' },
					{ label: 'Gris clair', value: 'light' },
				],
			},
		],
	},
	{
		title: 'Colonnes (modèles)',
		list: {
			key: 'columns',
			newItem: { name: '', image: {}, badge: '', color: 'navy' },
			itemLabel: ( c, i ) => `${ i + 1 }. ${ c.name || 'Modèle' }`,
			fields: [
				{ key: 'name', label: 'Nom' },
				{ key: 'image', label: 'Image', type: 'image' },
				{ key: 'badge', label: 'Badge' },
				{ key: 'color', label: 'Couleur du badge', type: 'select', options: COLORS },
			],
		},
	},
	{
		title: 'Lignes (critères)',
		list: {
			key: 'rows',
			newItem: { label: '', values: '' },
			itemLabel: ( r, i ) => `${ i + 1 }. ${ r.label || 'Critère' }`,
			fields: [
				{ key: 'label', label: 'Critère' },
				{
					key: 'values',
					label: 'Valeurs',
					type: 'textarea',
					help: 'Une ligne par colonne, dans l’ordre. « oui » = coche, « non » = croix, sinon texte.',
				},
			],
		},
	},
] );
