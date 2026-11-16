/**
 * FAQ search, category filters, "read more" and "show more".
 */
const init = () => {
	const root = document.querySelector( '[data-bricareau-faq-library]' );
	if ( ! root ) {
		return;
	}
	const labels = JSON.parse( root.dataset.labels || '{}' );
	const search = root.querySelector( '[data-faq-search]' );
	const filters = [ ...root.querySelectorAll( '[data-faq-filter]' ) ];
	const groups = [ ...root.querySelectorAll( '[data-faq-group]' ) ];
	const reset = root.querySelector( '[data-faq-reset]' );
	const expanded = new Set();

	const apply = () => {
		const query = search.value.trim().toLowerCase();
		const checked = filters.filter( ( f ) => f.checked ).map( ( f ) => f.value );
		const filtering = query.length > 0 || checked.length > 0;
		let total = 0;

		groups.forEach( ( group ) => {
			const allowed = ! checked.length || checked.includes( group.dataset.faqGroup );
			const cards = [ ...group.querySelectorAll( '[data-faq-card]' ) ];
			let shown = 0;
			cards.forEach( ( card ) => {
				const matches = allowed && card.textContent.toLowerCase().includes( query );
				const collapsed = ! filtering && card.dataset.extra === '1' && ! expanded.has( group.dataset.faqGroup );
				card.hidden = ! matches || collapsed;
				total += matches ? 1 : 0;
				shown += matches ? 1 : 0;
			} );
			group.hidden = ! shown;
			const more = group.querySelector( '[data-faq-more]' );
			if ( more ) {
				more.parentElement.hidden = filtering;
				more.textContent = expanded.has( group.dataset.faqGroup ) ? labels.less : labels.more;
			}
		} );
		root.querySelector( '[data-faq-count]' ).textContent = total;
		root.querySelector( '[data-faq-empty]' ).hidden = total > 0;
		reset.hidden = ! checked.length;
	};

	search.addEventListener( 'input', apply );
	filters.forEach( ( filter ) => filter.addEventListener( 'change', apply ) );
	reset.addEventListener( 'click', () => {
		filters.forEach( ( filter ) => {
			filter.checked = false;
		} );
		apply();
	} );
	root.addEventListener( 'click', ( event ) => {
		const more = event.target.closest( '[data-faq-more]' );
		if ( more ) {
			const id = more.closest( '[data-faq-group]' ).dataset.faqGroup;
			if ( expanded.has( id ) ) {
				expanded.delete( id );
			} else {
				expanded.add( id );
			}
			apply();
		}
		const expand = event.target.closest( '[data-faq-expand]' );
		if ( expand ) {
			const clamped = expand.parentElement.querySelector( '[data-faq-answer]' ).classList.toggle( 'line-clamp-4' );
			expand.textContent = clamped ? labels.readMore : labels.readLess;
		}
	} );
};

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
