/**
 * Catalog carousel arrows: scroll by one card, wrapping around at the ends.
 */
function initScroller( root ) {
	const track = root.querySelector( '[data-scroll-track]' );
	if ( ! track ) {
		return;
	}
	const step = () => ( track.firstElementChild?.clientWidth || 340 ) + 24;
	root.querySelector( '[data-scroll-prev]' )?.addEventListener( 'click', () => {
		if ( track.scrollLeft <= 15 ) {
			track.scrollTo( { left: track.scrollWidth - track.clientWidth, behavior: 'smooth' } );
		} else {
			track.scrollBy( { left: -step(), behavior: 'smooth' } );
		}
	} );
	root.querySelector( '[data-scroll-next]' )?.addEventListener( 'click', () => {
		if ( track.scrollLeft >= track.scrollWidth - track.clientWidth - 15 ) {
			track.scrollTo( { left: 0, behavior: 'smooth' } );
		} else {
			track.scrollBy( { left: step(), behavior: 'smooth' } );
		}
	} );
}

const init = () => document.querySelectorAll( '[data-bricareau-scroller]' ).forEach( initScroller );
if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
