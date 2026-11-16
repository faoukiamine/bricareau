import { registerBlockType } from '@wordpress/blocks';
import { ServerRenderedEdit } from '../../shared/controls';
import TestimonialPicker from '../../shared/testimonial-picker';
import metadata from './block.json';

const panels = [
	{
		title: 'En-tête',
		fields: [
			{ key: 'eyebrow', label: 'Surtitre' },
			{ key: 'title', label: 'Titre', type: 'title' },
		],
	},
	{
		title: 'Chiffre clé',
		fields: [
			{ key: 'statValue', label: 'Valeur' },
			{ key: 'statLabel', label: 'Libellé' },
			{ key: 'statText', label: 'Texte', type: 'textarea' },
		],
	},
	{
		title: 'Carrousel',
		fields: [
			{ key: 'manual', label: 'Choisir les témoignages manuellement', type: 'toggle' },
			{
				key: 'selectedIds',
				type: 'custom',
				component: TestimonialPicker,
				showIf: ( attributes ) => attributes.manual,
			},
			{
				key: 'count',
				showIf: ( attributes ) => ! attributes.manual,
				label: 'Nombre de témoignages',
				type: 'number',
				min: 1,
				max: 30,
				help: 'Les témoignages se gèrent dans le menu « Témoignages » (ordre via le champ « Ordre »).',
			},
			{ key: 'interval', label: 'Durée par témoignage (secondes)', type: 'number', min: 3, max: 15 },
		],
	},
];

registerBlockType( metadata.name, {
	edit: ( props ) => <ServerRenderedEdit { ...props } panels={ panels } />,
	save: () => null,
} );
