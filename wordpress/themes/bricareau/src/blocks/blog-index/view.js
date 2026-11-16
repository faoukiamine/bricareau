/**
 * Category filters of the blog page: shows only the checked categories.
 */
const init = () => {
	const root = document.querySelector( '[data-bricareau-blog]' );
	if ( ! root ) {
		return;
	}
	const filters = [ ...root.querySelectorAll( '[data-blog-filter]' ) ];
	const sections = [ ...root.querySelectorAll( '[data-blog-section]' ) ];
	const reset = root.querySelector( '[data-blog-reset]' );
	const count = root.querySelector( '[data-blog-count]' );

	const apply = () => {
		const checked = filters.filter( ( f ) => f.checked ).map( ( f ) => f.value );
		let total = 0;
		sections.forEach( ( section ) => {
			const visible = ! checked.length || checked.includes( section.dataset.blogSection );
			section.hidden = ! visible;
			total += visible ? Number( section.dataset.blogTotal ) : 0;
		} );
		count.textContent = total;
		reset.hidden = ! checked.length;
	};

	filters.forEach( ( filter ) => filter.addEventListener( 'change', apply ) );
	reset.addEventListener( 'click', () => {
		filters.forEach( ( filter ) => {
			filter.checked = false;
		} );
		apply();
	} );
};

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
