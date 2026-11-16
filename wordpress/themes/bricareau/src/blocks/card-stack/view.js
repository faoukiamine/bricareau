/**
 * Card stack: the "order" array lists card indexes from bottom to top; the
 * top card rotates to the bottom every interval, clicks bring a card to top.
 */
const POSITIONS = [
	'-rotate-[16deg] -translate-x-20 translate-y-16 z-0 scale-90 opacity-60',
	'-rotate-[8deg] -translate-x-10 translate-y-8 z-10 scale-95 opacity-80',
	'-rotate-[2deg] translate-x-0 translate-y-0 z-20 scale-100 opacity-95',
	'rotate-[12deg] translate-x-16 -translate-y-10 z-30 scale-105 opacity-100 shadow-[20px_50px_100px_-20px_rgba(30,58,138,0.3)]',
];
const ALL = [ ...new Set( POSITIONS.join( ' ' ).split( ' ' ) ) ];

function initStack( root ) {
	const cards = [ ...root.querySelectorAll( '[data-stack-card]' ) ];
	const items = [ ...root.querySelectorAll( '[data-stack-item]' ) ];
	if ( ! cards.length ) {
		return;
	}
	let order = cards.map( ( _, i ) => i );
	let timer;

	const render = () => {
		const offset = POSITIONS.length - order.length;
		order.forEach( ( cardIndex, position ) => {
			const card = cards[ cardIndex ];
			card.classList.remove( ...ALL );
			card.classList.add( ...POSITIONS[ Math.max( 0, position + offset ) ].split( ' ' ) );
		} );
		const top = order[ order.length - 1 ];
		items.forEach( ( item, i ) => {
			const active = i === top;
			item.classList.toggle( 'scale-110', active );
			item.classList.toggle( 'opacity-60', ! active );
			item.classList.toggle( 'scale-95', ! active );
			item.querySelector( '[data-stack-dot]' )?.classList.toggle( 'scale-150', active );
		} );
	};
	const bringToTop = ( index ) => {
		order = [ ...order.filter( ( i ) => i !== index ), index ];
		render();
	};
	const restart = () => {
		clearInterval( timer );
		timer = setInterval( () => bringToTop( order[ 0 ] ), Number( root.dataset.interval ) || 3000 );
	};

	[ ...cards, ...items ].forEach( ( el ) =>
		el.addEventListener( 'click', () => {
			bringToTop( Number( el.dataset.stackCard ?? el.dataset.stackItem ) );
			restart();
		} )
	);

	render();
	if ( ! window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches ) {
		restart();
	}
}

const init = () => document.querySelectorAll( '[data-bricareau-cardstack]' ).forEach( initStack );
if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
