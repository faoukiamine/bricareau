import { registerServerBlock } from '../../shared/controls';
import metadata from './block.json';

const forms = window.bricareauEditor?.forms || [];

registerServerBlock( metadata, [
	{
		title: 'Formulaire final',
		fields: [
			{
				key: 'formId',
				label: 'Formulaire Fluent Forms',
				type: 'select',
				options: [ { label: '— Choisir —', value: '' }, ...forms.map( ( f ) => ( { label: f.title, value: String( f.id ) } ) ) ],
				help: 'Doit contenir les champs cachés « reponses » et « recommandations ».',
			},
		],
	},
] );
