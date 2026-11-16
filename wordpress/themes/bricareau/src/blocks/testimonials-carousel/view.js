/**
 * One-card-per-slide carousel with dots and 5 s autoplay.
 */
const DOT_ON = [ 'w-8', 'bg-blue-600' ];
const DOT_OFF = [ 'w-2', 'bg-gray-200', 'hover:bg-gray-300' ];

function initCarousel( root ) {
	const track = root.querySelector( '[data-carousel-track]' );
	const dots = root.querySelectorAll( '[data-carousel-dot]' );
	const total = track ? track.children.length : 0;
	if ( total < 2 ) {
		return;
	}
	let current = 0;
	let timer;

	const show = ( index ) => {
		current = ( index + total ) % total;
		track.style.transform = `translateX(-${ current * 100 }%)`;
		dots.forEach( ( dot, i ) => {
			dot.classList.remove( ...( i === current ? DOT_OFF : DOT_ON ) );
			dot.classList.add( ...( i === current ? DOT_ON : DOT_OFF ) );
		} );
	};
	const restart = () => {
		clearInterval( timer );
		timer = setInterval( () => show( current + 1 ), 5000 );
	};

	root.querySelector( '[data-carousel-prev]' )?.addEventListener( 'click', () => show( current - 1 ) );
	root.querySelector( '[data-carousel-next]' )?.addEventListener( 'click', () => show( current + 1 ) );
	dots.forEach( ( dot ) => dot.addEventListener( 'click', () => show( Number( dot.dataset.carouselDot ) ) ) );

	if ( ! window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches ) {
		restart();
	}
}

const init = () => document.querySelectorAll( '[data-bricareau-carousel]' ).forEach( initCarousel );
if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
