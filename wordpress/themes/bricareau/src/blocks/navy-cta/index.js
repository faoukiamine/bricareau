import { registerServerBlock } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{
		title: 'Texte',
		fields: [
			{ key: 'label', label: 'Pastille' },
			{ key: 'title', label: 'Titre', type: 'title', help: 'Ligne 1 fine, *texte* = italique gras.' },
			{ key: 'text', label: 'Texte', type: 'rich' },
		],
	},
	{
		title: 'Boutons',
		fields: [
			{ key: 'phoneText', label: 'Bouton téléphone (vide = masqué)' },
			{ key: 'ctaText', label: 'Second bouton' },
			{ key: 'ctaUrl', label: 'Lien du second bouton', type: 'url' },
		],
	},
	{
		title: 'Fond et experts',
		fields: [
			{ key: 'image', label: 'Image de fond', type: 'image', focal: true },
			{ key: 'avatars', label: 'Photos des experts', type: 'images' },
			{ key: 'rating', label: 'Note affichée' },
			{ key: 'caption', label: 'Phrase sous les photos', type: 'rich' },
		],
	},
] );
