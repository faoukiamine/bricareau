/**
 * Bottles avoided = (adults × adult bottles/day + children × child bottles/day) × 365 × years.
 */
function initCalculator( root ) {
	const state = { adults: 2, children: 1, years: 1 };
	const perAdult = Number( root.dataset.adult ) || 4;
	const perChild = Number( root.dataset.child ) || 2;
	const price = Number( root.dataset.price ) || 0.35;
	const format = ( n ) => n.toLocaleString( 'fr-CA' );

	const render = () => {
		const bottles = ( state.adults * perAdult + state.children * perChild ) * 365 * state.years;
		root.querySelector( '[data-result="bottles"]' ).textContent = format( bottles );
		root.querySelector( '[data-result="money"]' ).textContent = format( Math.round( bottles * price ) );
		root.querySelectorAll( '[data-value]' ).forEach( ( el ) => {
			el.textContent = state[ el.dataset.value ];
		} );
		root.querySelectorAll( '[data-years]' ).forEach( ( el ) => {
			const active = Number( el.dataset.years ) === state.years;
			el.classList.toggle( 'bg-white', active );
			el.classList.toggle( 'text-[#18448F]', active );
			el.classList.toggle( 'shadow-sm', active );
			el.classList.toggle( 'text-slate-400', ! active );
		} );
	};

	root.querySelectorAll( '[data-step]' ).forEach( ( el ) =>
		el.addEventListener( 'click', () => {
			const key = el.dataset.step;
			state[ key ] = Math.max( 0, Math.min( 10, state[ key ] + Number( el.dataset.delta ) ) );
			render();
		} )
	);
	root.querySelectorAll( '[data-years]' ).forEach( ( el ) =>
		el.addEventListener( 'click', () => {
			state.years = Number( el.dataset.years );
			render();
		} )
	);
	render();
}

const init = () => document.querySelectorAll( '[data-bricareau-calculator]' ).forEach( initCalculator );
if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
