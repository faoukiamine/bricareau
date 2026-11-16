/**
 * FAQ: "see all / see less" toggle for the questions past the visible count.
 */
function initFaq( root ) {
	const button = root.querySelector( '[data-faq-toggle]' );
	if ( ! button ) {
		return;
	}
	let expanded = false;
	button.addEventListener( 'click', () => {
		expanded = ! expanded;
		root.querySelectorAll( '[data-faq-extra]' ).forEach( ( el ) => el.classList.toggle( 'hidden', ! expanded ) );
		button.textContent = expanded ? button.dataset.less : button.dataset.more;
	} );
}

const init = () => document.querySelectorAll( '[data-bricareau-faq]' ).forEach( initFaq );
if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
