/**
 * Hero slider: auto-advances, swaps the state classes rendered by render.php,
 * fills the active tab's progress bar and changes slide on swipe.
 */
const IMAGE_ON = [ 'opacity-100' ];
const IMAGE_OFF = [ 'opacity-0' ];
const SLIDE_ON = [ 'opacity-100', 'translate-y-0', 'pointer-events-auto', 'z-10' ];
const SLIDE_OFF = [ 'opacity-0', 'translate-y-4', 'pointer-events-none', 'z-0', 'invisible' ];
const TAB_ON = [ 'text-white' ];
const TAB_OFF = [ 'text-white/60', 'hover:text-white' ];
const NUMBER_ON = [ 'text-[#B5E07A]' ];
const NUMBER_OFF = [ 'text-white/60' ];

function toggle( el, active, on, off ) {
	el.classList.remove( ...( active ? off : on ) );
	el.classList.add( ...( active ? on : off ) );
}

function initSlider( root ) {
	const slides = root.querySelectorAll( '[data-slide]' );
	if ( slides.length < 2 ) {
		return;
	}
	const images = root.querySelectorAll( '[data-slide-image]' );
	const tabs = root.querySelectorAll( '[data-slide-dot]' );
	const interval = Number( root.dataset.interval ) || 6000;
	const animate = ! window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;
	let current = 0;
	let timer;

	// Active bar grows over the slide's duration (full at once without animation).
	const fill = ( bar, active ) => {
		bar.style.transition = 'none';
		bar.style.width = active && ! animate ? '100%' : '0';
		bar.classList.remove( 'w-full', 'w-0' );
		if ( active && animate ) {
			bar.getBoundingClientRect();
			bar.style.transition = `width ${ interval }ms linear`;
			bar.style.width = '100%';
		}
	};

	const show = ( index ) => {
		current = ( index + slides.length ) % slides.length;
		slides.forEach( ( el, i ) => {
			toggle( el, i === current, SLIDE_ON, SLIDE_OFF );
			el.toggleAttribute( 'aria-hidden', i !== current );
		} );
		images.forEach( ( el, i ) => toggle( el, i === current, IMAGE_ON, IMAGE_OFF ) );
		tabs.forEach( ( tab, i ) => {
			const active = i === current;
			toggle( tab, active, TAB_ON, TAB_OFF );
			tab.setAttribute( 'aria-current', active ? 'true' : 'false' );
			const number = tab.querySelector( '[data-tab-number]' );
			if ( number ) {
				toggle( number, active, NUMBER_ON, NUMBER_OFF );
			}
			const bar = tab.querySelector( '[data-slide-progress]' );
			if ( bar ) {
				fill( bar, active );
			}
		} );
	};

	const restart = () => {
		if ( ! animate ) {
			return;
		}
		clearInterval( timer );
		timer = setInterval( () => show( current + 1 ), interval );
	};

	const go = ( index ) => {
		show( index );
		restart();
	};

	tabs.forEach( ( tab ) => tab.addEventListener( 'click', () => go( Number( tab.dataset.slideDot ) ) ) );

	// Horizontal swipe changes slide.
	let startX = null;
	let startY = 0;
	root.addEventListener( 'touchstart', ( event ) => {
		startX = event.touches[ 0 ].clientX;
		startY = event.touches[ 0 ].clientY;
	}, { passive: true } );
	root.addEventListener( 'touchend', ( event ) => {
		if ( null === startX ) {
			return;
		}
		const dx = event.changedTouches[ 0 ].clientX - startX;
		const dy = event.changedTouches[ 0 ].clientY - startY;
		startX = null;
		if ( Math.abs( dx ) > 50 && Math.abs( dx ) > Math.abs( dy ) ) {
			go( current + ( dx < 0 ? 1 : -1 ) );
		}
	}, { passive: true } );

	show( 0 );
	restart();
}

const init = () => document.querySelectorAll( '[data-bricareau-slider]' ).forEach( initSlider );
if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
