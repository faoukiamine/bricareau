/**
 * Glossary categories, "see more" and the Health Canada table tabs.
 */
const tabs = ( root, tabAttr, panelAttr, onChange ) => {
	const buttons = [ ...root.querySelectorAll( `[${ tabAttr }]` ) ];
	const panels = [ ...root.querySelectorAll( `[${ panelAttr }]` ) ];
	buttons.forEach( ( button, index ) =>
		button.addEventListener( 'click', () => {
			buttons.forEach( ( b, i ) => b.setAttribute( 'aria-selected', i === index ? 'true' : 'false' ) );
			panels.forEach( ( panel, i ) => {
				panel.hidden = i !== index;
			} );
			if ( onChange ) {
				onChange( panels[ index ] );
			}
		} )
	);
};

const init = () => {
	const root = document.querySelector( '[data-bricareau-contaminants]' );
	if ( ! root ) {
		return;
	}
	tabs( root, 'data-glossary-tab', 'data-glossary-panel' );
	tabs( root, 'data-table-tab', 'data-table-panel' );
	root.querySelectorAll( '[data-glossary-more]' ).forEach( ( button ) =>
		button.addEventListener( 'click', () => {
			button.closest( '[data-glossary-panel]' ).querySelectorAll( '[data-glossary-extra]' ).forEach( ( card ) => {
				card.hidden = false;
			} );
			button.parentElement.hidden = true;
		} )
	);
};

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
