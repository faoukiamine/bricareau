/**
 * Mobile/tablet: show one model column at a time.
 */
function initComparison( root ) {
	const prev = root.querySelector( '[data-col-prev]' );
	const next = root.querySelector( '[data-col-next]' );
	const dots = root.querySelectorAll( '[data-col-dot]' );
	const total = dots.length;
	if ( total < 2 ) {
		return;
	}
	let current = 0;

	const show = ( index ) => {
		current = Math.max( 0, Math.min( total - 1, index ) );
		root.querySelectorAll( '[data-col]' ).forEach( ( cell ) => {
			const active = Number( cell.dataset.col ) === current;
			cell.classList.toggle( 'hidden', ! active );
			cell.classList.toggle( 'table-cell', active );
			cell.classList.toggle( 'lg:table-cell', ! active );
		} );
		dots.forEach( ( dot, i ) => {
			dot.classList.toggle( 'w-6', i === current );
			dot.classList.toggle( 'bg-blue-600', i === current );
			dot.classList.toggle( 'w-1.5', i !== current );
			dot.classList.toggle( 'bg-blue-100', i !== current );
		} );
		prev.disabled = current === 0;
		next.disabled = current === total - 1;
	};

	prev.addEventListener( 'click', () => show( current - 1 ) );
	next.addEventListener( 'click', () => show( current + 1 ) );
}

const init = () => document.querySelectorAll( '[data-bricareau-comparison]' ).forEach( initComparison );
if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
