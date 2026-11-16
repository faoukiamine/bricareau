import { registerServerBlock, headerFields } from '../../shared/controls';
import metadata from './block.json';

const forms = window.bricareauEditor?.forms || [];

registerServerBlock( metadata, [
	{
		title: 'Formulaire',
		fields: [
			{
				key: 'formId',
				label: 'Formulaire Fluent Forms',
				type: 'select',
				options: [ { label: '— Choisir —', value: '' }, ...forms.map( ( f ) => ( { label: f.title, value: String( f.id ) } ) ) ],
				help: 'Les formulaires et leurs réponses se gèrent dans le menu « Fluent Forms ». L’adresse qui reçoit les demandes : Réglages > Demandes du site.',
			},
			{
				key: 'layout',
				label: 'Mise en page',
				type: 'select',
				options: [
					{ label: 'Formulaire seul', value: 'stacked' },
					{ label: 'Avantages à côté (consultation)', value: 'benefits' },
					{ label: 'Coordonnées à côté (contact)', value: 'contact' },
					{ label: 'Coordonnées à côté, sans chevaucher la bannière', value: 'contact-plain' },
				],
			},
		],
	},
	{ title: 'En-tête de section', fields: headerFields() },
	{
		title: 'Colonne de côté',
		fields: [
			{ key: 'asideText', label: 'Texte (avantages)', type: 'textarea' },
			{ key: 'quote', label: 'Citation (avantages)', type: 'textarea' },
			{ key: 'quoteAuthor', label: 'Auteur de la citation' },
			{ key: 'quoteRole', label: 'Précision sur l’auteur' },
			{ key: 'panelTitle', label: 'Encadré bleu : titre (contact)' },
			{ key: 'panelText', label: 'Encadré bleu : texte', type: 'textarea' },
			{ key: 'panelButtonText', label: 'Encadré bleu : bouton' },
			{ key: 'panelButtonUrl', label: 'Encadré bleu : lien', type: 'url' },
			{ key: 'watermark', label: 'Mot en filigrane (contact)' },
		],
	},
	{
		title: 'Éléments de la colonne',
		list: {
			key: 'asideItems',
			newItem: { icon: 'award', title: '', value: '', sub: '' },
			itemLabel: ( it, i ) => `${ i + 1 }. ${ it.title || 'Élément' }`,
			fields: [
				{ key: 'icon', label: 'Icône', type: 'icon' },
				{ key: 'title', label: 'Titre' },
				{ key: 'value', label: 'Texte' },
				{ key: 'sub', label: 'Petit texte (contact)' },
			],
		},
	},
] );
