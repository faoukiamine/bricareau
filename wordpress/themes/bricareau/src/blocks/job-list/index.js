import { registerServerBlock, headerFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: headerFields( [ { key: 'buttonText', label: 'Texte du bouton' } ] ) },
	{
		title: 'Postes',
		list: {
			key: 'jobs',
			newItem: { title: '', department: '', type: 'Temps plein', location: '', experience: '', url: '/contact' },
			itemLabel: ( job, i ) => `${ i + 1 }. ${ job.title || 'Poste' }`,
			fields: [
				{ key: 'title', label: 'Titre du poste' },
				{ key: 'department', label: 'Département' },
				{ key: 'type', label: 'Type (ex. Temps plein)' },
				{ key: 'location', label: 'Lieu' },
				{ key: 'experience', label: 'Expérience' },
				{ key: 'url', label: 'Lien « Postuler »', type: 'url' },
			],
		},
	},
] );
