import { registerServerBlock, headerFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: headerFields() },
	{
		title: 'Apparence',
		fields: [
			{
				key: 'variant',
				label: 'Style des cartes',
				type: 'select',
				options: [
					{ label: 'Cartes numérotées (01., 02.…)', value: 'numbered' },
					{ label: 'Colonnes avec icône', value: 'icon-columns' },
					{ label: 'Liste numérotée avec icône (2 colonnes)', value: 'icon-list' },
					{ label: 'Grille à bordures (4 colonnes)', value: 'swiss' },
					{ label: 'Étapes avec icône (4 colonnes)', value: 'steps' },
					{ label: 'Icônes centrées sans cadre (3 colonnes)', value: 'icon-centered' },
				],
			},
			{
				key: 'align',
				label: "Alignement de l'en-tête",
				type: 'select',
				options: [
					{ label: 'Centré', value: 'center' },
					{ label: 'À gauche', value: 'left' },
				],
			},
			{
				key: 'background',
				label: 'Fond',
				type: 'select',
				options: [
					{ label: 'Blanc', value: 'white' },
					{ label: 'Gris clair', value: 'light' },
					{ label: 'Blanc avec halo bleu', value: 'glow' },
				],
			},
			{ key: 'backgroundImage', label: 'Image de fond discrète (grille à bordures)', type: 'image', focal: true },
		],
	},
	{
		title: 'Cartes',
		list: {
			key: 'cards',
			newItem: { icon: '', title: '', text: '' },
			itemLabel: ( card, i ) => `${ i + 1 }. ${ card.title || 'Carte' }`,
			fields: [
				{ key: 'icon', label: 'Icône (colonnes)', type: 'icon' },
				{ key: 'title', label: 'Titre' },
				{ key: 'text', label: 'Texte', type: 'textarea' },
			],
		},
	},
] );
