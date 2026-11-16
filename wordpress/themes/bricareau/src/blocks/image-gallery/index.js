import { registerServerBlock, headerFields } from '../../shared/controls';
import metadata from './block.json';

registerServerBlock( metadata, [
	{ title: 'En-tête de section', fields: headerFields() },
	{ title: 'Photos', fields: [ { key: 'images', label: 'Photos (4 : grande, haut, bas gauche, bas droite)', type: 'images' } ] },
] );
