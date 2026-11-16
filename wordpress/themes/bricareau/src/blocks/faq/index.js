import { registerServerBlock, headerFields, headerLayoutFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: [ ...headerFields(), ...headerLayoutFields ] },
	{
		title: 'Affichage',
		fields: [
			{ key: 'visibleCount', label: 'Questions visibles avant « Voir toutes »', type: 'number', min: 1, max: 30 },
			{ key: 'moreText', label: 'Bouton « voir plus »' },
			{ key: 'lessText', label: 'Bouton « voir moins »' },
		],
	},
	{
		title: 'Questions',
		list: {
			key: 'items',
			newItem: { question: '', answer: '' },
			itemLabel: ( it, i ) => `${ i + 1 }. ${ it.question || 'Question' }`,
			fields: [
				{ key: 'question', label: 'Question' },
				{ key: 'answer', label: 'Réponse', type: 'rich' },
			],
		},
	},
] );
