/**
 * "Cartes uniformes" on phones: the dot under the swipe row follows the card in view.
 */
const ACTIVE = [ 'w-[18px]', 'bg-[#18448F]' ];
const IDLE = [ 'w-1.5', 'bg-slate-300' ];

const init = () => {
	document.querySelectorAll( '[data-tile-rail]' ).forEach( ( rail ) => {
		const dots = [ ...rail.parentElement.querySelectorAll( '[data-tile-dot]' ) ];
		if ( ! dots.length ) {
			return;
		}
		const cards = [ ...rail.children ].slice( 0, dots.length );

		const update = () => {
			const atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2;
			let active = 0;
			cards.forEach( ( card, i ) => {
				if ( card.offsetLeft - rail.offsetLeft <= rail.scrollLeft + card.offsetWidth / 2 ) {
					active = i;
				}
			} );
			if ( atEnd ) {
				active = dots.length - 1;
			}
			dots.forEach( ( dot, i ) => {
				dot.classList.remove( ...( i === active ? IDLE : ACTIVE ) );
				dot.classList.add( ...( i === active ? ACTIVE : IDLE ) );
			} );
		};

		let frame = 0;
		rail.addEventListener(
			'scroll',
			() => {
				cancelAnimationFrame( frame );
				frame = requestAnimationFrame( update );
			},
			{ passive: true }
		);
	} );
};

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
