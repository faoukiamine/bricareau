/**
 * Testimonial carousel: auto-rotates; prev/next buttons restart the timer.
 */
function initTestimonials( root ) {
	// Each testimonial has two parts (quote, name) sharing the same index.
	const parts = root.querySelectorAll( '[data-testimonial]' );
	const total = new Set( [ ...parts ].map( ( el ) => el.dataset.testimonial ) ).size;
	if ( total < 2 ) {
		return;
	}
	const interval = Number( root.dataset.interval ) || 6000;
	let current = 0;
	let timer;

	const show = ( index ) => {
		current = ( index + total ) % total;
		parts.forEach( ( el ) => {
			const active = Number( el.dataset.testimonial ) === current;
			el.classList.toggle( 'opacity-100', active );
			el.classList.toggle( 'opacity-0', ! active );
			el.classList.toggle( 'invisible', ! active );
		} );
	};

	const restart = () => {
		clearInterval( timer );
		timer = setInterval( () => show( current + 1 ), interval );
	};

	root.querySelector( '[data-testimonial-prev]' )?.addEventListener( 'click', () => {
		show( current - 1 );
		restart();
	} );
	root.querySelector( '[data-testimonial-next]' )?.addEventListener( 'click', () => {
		show( current + 1 );
		restart();
	} );

	if ( ! window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches ) {
		restart();
	}
}

const init = () => document.querySelectorAll( '[data-bricareau-testimonials]' ).forEach( initTestimonials );
if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
