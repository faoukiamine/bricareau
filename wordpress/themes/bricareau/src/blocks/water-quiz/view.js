/**
 * Water diagnostic steps and recommendations (WaterDiagnosticQuiz.tsx).
 */
const init = () => {
	const root = document.querySelector( '[data-bricareau-quiz]' );
	if ( ! root ) {
		return;
	}
	// Rules, labels and answer texts in the page language (render.php).
	const { rules, labels, answers } = JSON.parse( root.dataset.quiz );
	const shown = ( value ) => answers[ value ] || value;
	const steps = [ ...root.querySelectorAll( '[data-quiz-step]' ) ];
	const results = root.querySelector( '[data-quiz-results]' );
	let current = 0;

	const dots = ( level ) =>
		root.querySelectorAll( '[data-quiz-dot]' ).forEach( ( dot ) => {
			dot.toggleAttribute( 'data-active', Number( dot.dataset.quizDot ) <= level );
		} );

	const answer = ( name ) => root.querySelector( `input[name="${ name }"]:checked` )?.value || '';
	const signs = () => [ ...root.querySelectorAll( '[data-quiz-sign]:checked' ) ].map( ( box ) => box.value );

	const recommendations = () => {
		const selected = signs();
		const recs = rules.filter( ( [ triggers ] ) => triggers.some( ( sign ) => selected.includes( sign ) ) ).map( ( [ , title, desc, link ] ) => ( {
			title: title || ( answer( 'source' ) === 'Municipal' ? labels.softenerCity : labels.softenerWell ),
			desc,
			link,
		} ) );
		return recs.length ? recs : [ { title: labels.customTitle, desc: labels.customDesc, link: labels.customLink } ];
	};

	const setField = ( name, value ) => {
		const field = root.querySelector( `.bricareau-form input[name="${ name }"]` );
		if ( field ) {
			field.value = value;
		}
	};

	const show = ( index ) => {
		current = index;
		steps.forEach( ( step, i ) => {
			step.hidden = i !== index;
		} );
		dots( index < 4 ? 1 : index < 8 ? 2 : 3 );
		root.querySelector( '#quiz-container' ).scrollIntoView( { behavior: 'smooth', block: 'start' } );
		if ( index === steps.length - 1 ) {
			setField(
				'reponses',
				[
					[ labels.status, shown( answer( 'occupancy' ) ) ],
					[ labels.residence, shown( answer( 'residence' ) ) ],
					[ labels.source, shown( answer( 'source' ) ) ],
					[ labels.household, shown( answer( 'household' ) ) ],
					[ labels.symptoms, signs().map( shown ).join( ', ' ) || labels.none ],
				]
					.map( ( [ label, value ] ) => label + labels.colon + value )
					.join( ' | ' )
			);
			setField( 'recommandations', recommendations().map( ( rec ) => rec.title ).join( ', ' ) );
		}
	};

	root.addEventListener( 'click', ( event ) => {
		if ( event.target.closest( '[data-quiz-next]' ) ) {
			show( current + 1 );
		} else if ( event.target.closest( '[data-quiz-prev]' ) ) {
			show( current - 1 );
		}
	} );
	root.addEventListener( 'change', ( event ) => {
		if ( event.target.matches( '[data-quiz-answer]' ) ) {
			event.target.closest( '[data-quiz-step]' ).querySelector( '[data-quiz-next]' ).disabled = false;
		}
	} );

	const showResults = () => {
		steps.forEach( ( step ) => {
			step.hidden = true;
		} );
		const list = root.querySelector( '[data-quiz-recs]' );
		list.textContent = '';
		recommendations().forEach( ( rec ) => {
			const card = document.createElement( 'div' );
			card.className = 'bg-slate-50 rounded-3xl p-6 border-2 border-transparent hover:border-blue-100 transition-all';
			const title = document.createElement( 'h4' );
			title.className = 'text-lg font-bold text-slate-900 mb-2';
			title.textContent = rec.title;
			const desc = document.createElement( 'p' );
			desc.className = 'text-slate-500 text-sm font-light mb-4 line-clamp-2';
			desc.textContent = rec.desc;
			const link = document.createElement( 'a' );
			link.className = 'text-[#18448F] font-bold text-xs';
			link.href = rec.link;
			link.textContent = labels.product;
			card.append( title, desc, link );
			list.append( card );
		} );
		results.hidden = false;
		dots( 3 );
		root.querySelector( '#quiz-container' ).scrollIntoView( { behavior: 'smooth', block: 'start' } );
	};

	// Fluent Forms replaces the form with its success message after a valid submission.
	const form = root.querySelector( '.bricareau-form' );
	const observer = new MutationObserver( () => {
		if ( form.querySelector( '.ff-message-success' ) ) {
			observer.disconnect();
			showResults();
		}
	} );
	observer.observe( form, { childList: true, subtree: true } );
};

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
