import { registerBlockType } from '@wordpress/blocks';
import { ServerRenderedEdit } from '../../shared/controls';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: ( props ) => <ServerRenderedEdit { ...props } panels={ [] } />,
	save: () => null,
} );
