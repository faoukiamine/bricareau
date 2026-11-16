/**
 * "Load more" button of the category pages.
 */
const init = () => {
	const root = document.querySelector( '[data-bricareau-category]' );
	const button = root && root.querySelector( '[data-category-more]' );
	if ( ! button ) {
		return;
	}
	button.addEventListener( 'click', () => {
		const hidden = [ ...root.querySelectorAll( '[data-category-card][hidden]' ) ];
		hidden.slice( 0, Number( root.dataset.step ) ).forEach( ( card ) => {
			card.hidden = false;
		} );
		if ( hidden.length <= Number( root.dataset.step ) ) {
			button.hidden = true;
		}
	} );
};

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
