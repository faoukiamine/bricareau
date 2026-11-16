import { registerServerBlock, headerFields, headerLayoutFields, COLORS } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: [ ...headerFields(), ...headerLayoutFields ] },
	{
		title: 'Apparence',
		fields: [
			{
				key: 'variant',
				label: 'Style',
				type: 'select',
				options: [
					{ label: 'Cartes détaillées (caractéristiques)', value: 'feature' },
					{ label: 'Cartes simples', value: 'simple' },
					{ label: 'Carrousel catalogue', value: 'catalog' },
					{ label: 'Promotions', value: 'promo' },
				],
			},
			{
				key: 'background',
				label: 'Fond',
				type: 'select',
				options: [
					{ label: 'Blanc', value: 'white' },
					{ label: 'Gris clair', value: 'light' },
				],
			},
			{ key: 'linkText', label: 'Texte du lien des cartes (vide = flèche seule)' },
			{ key: 'recommendedLabel', label: 'Texte du badge « recommandé »' },
			{ key: 'footerLabel', label: 'Pied de carte : libellé (cartes détaillées)' },
			{ key: 'footerText', label: 'Pied de carte : texte (cartes détaillées)' },
		],
	},
	{
		title: 'Produits',
		list: {
			key: 'products',
			newItem: { name: '', text: '', features: '', image: {}, url: '', badge: '', color: 'blue', recommended: false },
			itemLabel: ( p, i ) => `${ i + 1 }. ${ ( p.name || 'Produit' ).split( '\n' ).join( ' ' ) }`,
			fields: [
				{ key: 'name', label: 'Nom', type: 'textarea', help: 'Entrée = retour à la ligne.' },
				{ key: 'text', label: 'Description', type: 'textarea' },
				{ key: 'features', label: 'Caractéristiques', type: 'lines' },
				{ key: 'image', label: 'Image', type: 'image' },
				{ key: 'url', label: 'Lien', type: 'url' },
				{ key: 'badge', label: 'Badge (carrousel)' },
				{ key: 'color', label: 'Couleur du badge', type: 'select', options: COLORS },
				{ key: 'recommended', label: 'Recommandé', type: 'toggle' },
			],
		},
	},
	{
		title: 'Bandeau d’aide (optionnel)',
		fields: [
			{ key: 'bannerTitle', label: 'Bandeau bleu : titre' },
			{ key: 'bannerText', label: 'Bandeau bleu : texte' },
			{ key: 'bannerButton', label: 'Bandeau bleu : bouton' },
			{ key: 'bannerUrl', label: 'Bandeau bleu : lien', type: 'url' },
			{ key: 'ctaTitle', label: 'Appel centré : titre' },
			{ key: 'ctaText', label: 'Appel centré : texte', type: 'textarea' },
			{ key: 'ctaButton', label: 'Appel centré : bouton' },
			{ key: 'ctaUrl', label: 'Appel centré : lien', type: 'url' },
		],
	},
] );
