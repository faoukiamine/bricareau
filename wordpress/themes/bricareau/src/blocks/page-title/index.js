import { registerServerBlock } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{
		title: 'Texte',
		fields: [
			{ key: 'title', label: 'Titre (H1)', type: 'title' },
			{ key: 'subtitle', label: 'Sous-titre' },
			{ key: 'meta', label: 'Petite ligne (date de mise à jour)' },
			{ key: 'note', label: 'Note en italique', type: 'textarea' },
		],
	},
] );
