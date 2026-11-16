/**
 * Category selector of the parts catalog.
 */
const init = () => {
	const root = document.querySelector( '[data-bricareau-parts]' );
	if ( ! root ) {
		return;
	}
	const tabs = [ ...root.querySelectorAll( '[data-parts-tab]' ) ];
	tabs.forEach( ( tab ) =>
		tab.addEventListener( 'click', () => {
			tabs.forEach( ( other ) => other.setAttribute( 'aria-selected', other === tab ? 'true' : 'false' ) );
			root.querySelectorAll( '[data-parts-item]' ).forEach( ( item ) => {
				item.hidden = tab.dataset.partsTab !== 'all' && item.dataset.partsItem !== tab.dataset.partsTab;
			} );
		} )
	);
};

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
