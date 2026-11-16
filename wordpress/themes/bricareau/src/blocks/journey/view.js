/**
 * Journey: auto-advances through the steps; icons and bullets select a step.
 */
const DOT_ON = [ 'bg-[#18448F]', 'text-white', 'border-white', 'scale-110' ];
const DOT_OFF = [ 'bg-white', 'text-[#18448F]', 'border-[#18448F]', 'hover:bg-blue-50' ];
const BULLET_ON = [ 'bg-[#18448F]', 'scale-125', 'ring-4', 'ring-blue-100' ];
const BULLET_OFF = [ 'bg-slate-300', 'hover:bg-slate-400' ];

function swap( el, active, on, off ) {
	el.classList.remove( ...( active ? off : on ) );
	el.classList.add( ...( active ? on : off ) );
}

function initJourney( root ) {
	const steps = root.querySelectorAll( '[data-journey-step]' );
	if ( steps.length < 2 ) {
		return;
	}
	let current = 0;
	let timer;

	const show = ( index ) => {
		current = ( index + steps.length ) % steps.length;
		steps.forEach( ( el, i ) => {
			el.classList.toggle( 'opacity-100', i === current );
			el.classList.toggle( 'opacity-0', i !== current );
			el.classList.toggle( 'invisible', i !== current );
		} );
		root.querySelectorAll( '[data-journey-image]' ).forEach( ( el, i ) => {
			el.classList.toggle( 'opacity-100', i === current );
			el.classList.toggle( 'opacity-0', i !== current );
		} );
		root.querySelectorAll( '[data-journey-dot]' ).forEach( ( el, i ) => swap( el, i === current, DOT_ON, DOT_OFF ) );
		root.querySelectorAll( '[data-journey-bullet]' ).forEach( ( el, i ) => swap( el, i === current, BULLET_ON, BULLET_OFF ) );
	};
	const restart = () => {
		clearInterval( timer );
		timer = setInterval( () => show( current + 1 ), Number( root.dataset.interval ) || 5000 );
	};

	root.querySelectorAll( '[data-journey-dot], [data-journey-bullet]' ).forEach( ( el ) =>
		el.addEventListener( 'click', () => {
			show( Number( el.dataset.journeyDot ?? el.dataset.journeyBullet ) );
			restart();
		} )
	);

	if ( ! window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches ) {
		restart();
	}
}

const init = () => document.querySelectorAll( '[data-bricareau-journey]' ).forEach( initJourney );
if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
