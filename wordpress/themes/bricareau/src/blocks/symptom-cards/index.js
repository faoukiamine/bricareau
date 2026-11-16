import { registerServerBlock, headerFields, headerLayoutFields, COLORS } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: [ ...headerFields(), ...headerLayoutFields ] },
	{
		title: 'Apparence',
		fields: [
			{
				key: 'variant',
				label: 'Style des cartes',
				type: 'select',
				options: [
					{ label: 'Impact (texte au survol + voile bleu)', value: 'impact' },
					{ label: 'Problème (icône en couleur)', value: 'problem' },
					{ label: 'Diagnostic (cause → solution)', value: 'diagnostic' },
					{ label: 'Menace (image en haut)', value: 'media' },
					{ label: 'Panneaux dépliables', value: 'panels' },
				],
			},
			{
				key: 'columns',
				label: 'Colonnes',
				type: 'select',
				options: [
					{ label: '2', value: '2' },
					{ label: '3', value: '3' },
					{ label: '4', value: '4' },
				],
			},
			{ key: 'metaLabel', label: 'Préfixe de la ligne « détail » (ex. Impact :, Cause identifiée :)' },
			{ key: 'solutionLabel', label: 'Libellé « solution » (style Diagnostic)' },
			{ key: 'alertBadge', label: 'Pastille en haut des cartes (style Diagnostic)' },
			{ key: 'overlayLabel', label: 'Voile : petit texte (style Impact)' },
			{ key: 'overlayTitle', label: 'Voile : titre (style Impact)' },
			{ key: 'linkText', label: 'Texte du lien (styles Menace / Panneaux)' },
			{ key: 'defaultUrl', label: 'Lien par défaut des cartes', type: 'url' },
		],
	},
	{
		title: 'Cartes',
		list: {
			key: 'cards',
			newItem: { label: '', title: '', text: '', meta: '', solution: '', image: {}, icon: '', color: 'navy', url: '' },
			itemLabel: ( card, i ) => `${ i + 1 }. ${ card.title || 'Carte' }`,
			fields: [
				{ key: 'title', label: 'Titre' },
				{ key: 'label', label: 'Petit libellé (badge)' },
				{ key: 'text', label: 'Texte', type: 'textarea' },
				{ key: 'meta', label: 'Détail (impact, cause, menace…)' },
				{ key: 'solution', label: 'Solution (style Diagnostic)' },
				{ key: 'image', label: 'Image', type: 'image', focal: true },
				{ key: 'icon', label: 'Icône', type: 'icon' },
				{ key: 'color', label: 'Couleur', type: 'select', options: COLORS },
				{ key: 'url', label: 'Lien (sinon lien par défaut)', type: 'url' },
			],
		},
	},
] );
