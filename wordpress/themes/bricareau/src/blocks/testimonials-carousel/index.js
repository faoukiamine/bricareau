import { registerServerBlock, headerFields } from '../../shared/controls';
import metadata from './block.json';
import TestimonialPicker from '../../shared/testimonial-picker';

const automatic = ( attributes ) => ! attributes.manual;

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: headerFields() },
	{
		title: 'Avis',
		fields: [
			{
				key: 'manual',
				label: 'Choisir les avis manuellement',
				type: 'toggle',
			},
			{
				key: 'selectedIds',
				type: 'custom',
				component: TestimonialPicker,
				showIf: ( attributes ) => attributes.manual,
			},
			{
				key: 'count',
				showIf: automatic,
				label: "Nombre d'avis",
				type: 'number',
				min: 1,
				max: 20,
				help: 'Les avis se gèrent dans le menu « Témoignages ».',
			},
			{ key: 'offset', label: 'Ignorer les N premiers avis', type: 'number', min: 0, max: 60, showIf: automatic },
			{ key: 'framed', label: 'Bande grise autour', type: 'toggle' },
		],
	},
] );
