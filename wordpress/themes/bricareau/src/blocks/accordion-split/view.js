/**
 * Keeps one row open and shows the image of the open row.
 */
const init = () => {
	document.querySelectorAll( '[data-bricareau-accordion-split]' ).forEach( ( root ) => {
		const rows = [ ...root.querySelectorAll( 'details' ) ];
		const images = [ ...root.querySelectorAll( '[data-accordion-image]' ) ];
		rows.forEach( ( row, index ) =>
			row.addEventListener( 'toggle', () => {
				if ( ! row.open ) {
					return;
				}
				rows.forEach( ( other ) => {
					if ( other !== row ) {
						other.open = false;
					}
				} );
				images.forEach( ( image, i ) => {
					image.classList.toggle( 'opacity-100', i === index );
					image.classList.toggle( 'opacity-0', i !== index );
				} );
			} )
		);
	} );
};

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
