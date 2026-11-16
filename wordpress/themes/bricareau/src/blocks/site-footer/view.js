/**
 * Cookie banner: same storage key and 5 s delay as CookieConsent.tsx. Closing
 * without choosing shows it again on the next page.
 *
 * The choice ("accepted" / "declined", localStorage "cookieConsent") is kept 12 months
 * ("cookieConsentAt"), then the banner asks again. "Gérer mes témoins" in the footer
 * ([data-cookie-manage]) reopens it so the visitor can change or withdraw consent
 * (Law 25). inc/tracking.php reads the same keys before GTM loads.
 */
const CONSENT_KEY = 'cookieConsent';
const CONSENT_DATE_KEY = 'cookieConsentAt';
const MAX_AGE = 365 * 24 * 60 * 60 * 1000;

const storage = {
	get( key ) {
		try {
			return window.localStorage.getItem( key );
		} catch ( error ) {
			return null;
		}
	},
	set( key, value ) {
		try {
			window.localStorage.setItem( key, value );
		} catch ( error ) {
			// Storage unavailable: the choice only lasts for this page.
		}
	},
	remove( key ) {
		try {
			window.localStorage.removeItem( key );
		} catch ( error ) {}
	},
};

/**
 * The visitor's current choice, or null when none is stored or it is older than 12
 * months. A choice saved before the date was recorded starts its 12 months now.
 */
function readChoice() {
	const choice = storage.get( CONSENT_KEY );
	if ( ! choice ) {
		return null;
	}
	const at = Number( storage.get( CONSENT_DATE_KEY ) );
	if ( ! at ) {
		storage.set( CONSENT_DATE_KEY, String( Date.now() ) );
		return choice;
	}
	if ( Date.now() - at > MAX_AGE ) {
		storage.remove( CONSENT_KEY );
		storage.remove( CONSENT_DATE_KEY );
		return null;
	}
	return choice;
}

// Google Analytics / Ads cookies set while consent was granted.
function deleteTrackingCookies() {
	const host = window.location.hostname;
	const domains = [ '', host, '.' + host, '.' + host.split( '.' ).slice( -2 ).join( '.' ) ];
	document.cookie.split( ';' ).forEach( ( cookie ) => {
		const name = cookie.split( '=' )[ 0 ].trim();
		if ( ! /^(_ga|_gid|_gat|_gcl)/.test( name ) ) {
			return;
		}
		domains.forEach( ( domain ) => {
			document.cookie = `${ name }=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/` + ( domain ? `; domain=${ domain }` : '' );
		} );
	} );
}

function saveChoice( choice ) {
	storage.set( CONSENT_KEY, choice );
	storage.set( CONSENT_DATE_KEY, String( Date.now() ) );
	// Google consent mode (inc/tracking.php defines gtag when GTM is set up).
	if ( typeof window.gtag === 'function' ) {
		const state = 'accepted' === choice ? 'granted' : 'denied';
		window.gtag( 'consent', 'update', { ad_storage: state, ad_user_data: state, ad_personalization: state, analytics_storage: state } );
		window.dataLayer.push( { event: 'cookie_consent_update', cookie_consent: choice } );
	}
	if ( 'declined' === choice ) {
		deleteTrackingCookies();
	}
	// Lets other scripts react to the choice (inc/tawk.php loads the chat on "accepted").
	document.dispatchEvent( new CustomEvent( 'bricareau:consent', { detail: choice } ) );
}

function initCookieConsent( banner ) {
	const open = () => {
		banner.hidden = false;
		banner.querySelector( '[data-cookie-choice]' )?.focus();
	};

	if ( ! readChoice() ) {
		setTimeout( () => {
			banner.hidden = false;
		}, 5000 );
	}

	banner.querySelectorAll( '[data-cookie-choice]' ).forEach( ( button ) =>
		button.addEventListener( 'click', () => {
			saveChoice( button.dataset.cookieChoice );
			banner.hidden = true;
		} )
	);
	banner.querySelector( '[data-cookie-close]' )?.addEventListener( 'click', () => {
		banner.hidden = true;
	} );
	document.querySelectorAll( '[data-cookie-manage]' ).forEach( ( link ) =>
		link.addEventListener( 'click', ( event ) => {
			event.preventDefault();
			open();
		} )
	);
}

const init = () => {
	document.querySelectorAll( '[data-cookie-consent]' ).forEach( initCookieConsent );
};
if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
