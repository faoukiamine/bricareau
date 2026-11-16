/**
 * Header behaviour: scrolled state, mega-menus (hover + click + Escape),
 * card hover in "Ce que nous faisons", mobile menu.
 */
const CLOSE_DELAY = 300;

function initHeader( root ) {
	const header = root.querySelector( '.bricareau-header' );
	const items = root.querySelectorAll( '[data-menu-item]' );
	const panels = root.querySelectorAll( '[data-megamenu]' );
	let closeTimer;

	// Scrolled state. Over a dark hero ([data-header-dark]) the header uses the scrolled
	// colours from the top, on a transparent background (.is-on-dark, see main.css).
	const onDark = !! document.querySelector( '[data-header-dark]' );
	const onScroll = () => {
		const scrolled = window.scrollY > 50;
		root.classList.toggle( 'is-scrolled', scrolled || onDark );
		root.classList.toggle( 'is-on-dark', onDark && ! scrolled );
	};
	window.addEventListener( 'scroll', onScroll, { passive: true } );
	onScroll();

	// Mega-menus.
	const resetCards = ( panel ) => {
		const cards = panel.querySelector( '[data-cards]' );
		if ( cards ) {
			activateCard( cards, '0' );
		}
	};

	const open = ( index ) => {
		clearTimeout( closeTimer );
		panels.forEach( ( panel ) => {
			const isTarget = panel.dataset.megamenu === index;
			if ( isTarget && panel.classList.contains( 'hidden' ) ) {
				resetCards( panel );
			}
			panel.classList.toggle( 'hidden', ! isTarget );
		} );
		items.forEach( ( item ) => {
			const isTarget = item.dataset.menuItem === index;
			const button = item.querySelector( 'button' );
			button.setAttribute( 'aria-expanded', String( isTarget ) );
			button.querySelector( 'svg' )?.classList.toggle( 'rotate-180', isTarget );
		} );
	};

	const close = () => {
		panels.forEach( ( panel ) => panel.classList.add( 'hidden' ) );
		items.forEach( ( item ) => {
			const button = item.querySelector( 'button' );
			button.setAttribute( 'aria-expanded', 'false' );
			button.querySelector( 'svg' )?.classList.remove( 'rotate-180' );
		} );
	};

	const scheduleClose = () => {
		clearTimeout( closeTimer );
		closeTimer = setTimeout( close, CLOSE_DELAY );
	};

	items.forEach( ( item ) => {
		const index = item.dataset.menuItem;
		item.addEventListener( 'mouseenter', () => open( index ) );
		item.addEventListener( 'mouseleave', scheduleClose );
		item.querySelector( 'button' ).addEventListener( 'click', ( event ) => {
			const expanded = event.currentTarget.getAttribute( 'aria-expanded' ) === 'true';
			if ( expanded ) {
				close();
			} else {
				open( index );
			}
		} );
	} );

	panels.forEach( ( panel ) => {
		panel.addEventListener( 'mouseenter', () => clearTimeout( closeTimer ) );
		panel.addEventListener( 'mouseleave', scheduleClose );
	} );

	document.addEventListener( 'mousedown', ( event ) => {
		if ( ! header.contains( event.target ) ) {
			close();
		}
	} );
	document.addEventListener( 'keydown', ( event ) => {
		if ( event.key === 'Escape' ) {
			close();
		}
	} );

	// Card hover swaps the list of links below the cards.
	function activateCard( container, index ) {
		container.querySelectorAll( '[data-card]' ).forEach( ( card ) => {
			card.dataset.active = String( card.dataset.card === index );
		} );
		container.querySelectorAll( '[data-card-links]' ).forEach( ( links ) => {
			const isTarget = links.dataset.cardLinks === index;
			links.classList.toggle( 'hidden', ! isTarget );
			links.classList.toggle( 'grid', isTarget );
		} );
	}

	root.querySelectorAll( '[data-cards]' ).forEach( ( container ) => {
		container.querySelectorAll( '[data-card]' ).forEach( ( card ) => {
			card.addEventListener( 'mouseenter', () => activateCard( container, card.dataset.card ) );
			card.addEventListener( 'focus', () => activateCard( container, card.dataset.card ) );
		} );
	} );

	// Mobile menu.
	const toggle = root.querySelector( '[data-mobile-toggle]' );
	const mobileMenu = root.querySelector( '[data-mobile-menu]' );
	toggle?.addEventListener( 'click', () => {
		const isOpen = mobileMenu.classList.toggle( 'hidden' ) === false;
		toggle.setAttribute( 'aria-expanded', String( isOpen ) );
		toggle.querySelector( '[data-icon-open]' ).classList.toggle( 'hidden', isOpen );
		toggle.querySelector( '[data-icon-close]' ).classList.toggle( 'hidden', ! isOpen );
	} );

	// Mobile sub-menus (the links under each card).
	root.querySelectorAll( '[data-mobile-submenu] button' ).forEach( ( button ) => {
		button.addEventListener( 'click', () => {
			const isOpen = button.getAttribute( 'aria-expanded' ) !== 'true';
			button.setAttribute( 'aria-expanded', String( isOpen ) );
			button.querySelector( 'svg' )?.classList.toggle( 'rotate-180', isOpen );
			document.getElementById( button.getAttribute( 'aria-controls' ) ).classList.toggle( 'hidden', ! isOpen );
		} );
	} );
}

const init = () => document.querySelectorAll( '[data-bricareau-header]' ).forEach( initHeader );
if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
