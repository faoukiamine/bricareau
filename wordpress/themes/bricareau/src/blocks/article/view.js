/**
 * Highlights the section being read in the table of contents (BlogLayout.tsx).
 */
const init = () => {
	const links = [ ...document.querySelectorAll( '[data-toc-link]' ) ];
	if ( ! links.length || ! ( 'IntersectionObserver' in window ) ) {
		return;
	}
	const observer = new IntersectionObserver(
		( entries ) => {
			entries.forEach( ( entry ) => {
				if ( entry.isIntersecting ) {
					links.forEach( ( link ) => {
						const active = link.getAttribute( 'href' ) === `#${ entry.target.id }`;
						link.classList.toggle( 'text-blue-600', active );
						link.classList.toggle( 'font-bold', active );
					} );
				}
			} );
		},
		{ rootMargin: '-100px 0px -70% 0px', threshold: 0 }
	);
	document.querySelectorAll( '[data-bricareau-article] h2[id]' ).forEach( ( heading ) => observer.observe( heading ) );
};

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
