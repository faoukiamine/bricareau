/**
 * Rendez-vous calendar (admin). Data comes from inc/appointments.php
 * (window.bricareauAppointments); month, week and day views, details panel on click.
 */
( function () {
	const root = document.getElementById( 'bricareau-appointments' );
	const data = window.bricareauAppointments;
	if ( ! root || ! data ) {
		return;
	}

	const DAYS = [ 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.' ];
	const MONTHS = [ 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre' ];
	const MAX_IN_DAY = 3;

	const iso = ( d ) => `${ d.getFullYear() }-${ String( d.getMonth() + 1 ).padStart( 2, '0' ) }-${ String( d.getDate() ).padStart( 2, '0' ) }`;
	const parse = ( s ) => {
		const [ y, m, d ] = s.split( '-' ).map( Number );
		return new Date( y, m - 1, d );
	};
	const addDays = ( d, n ) => new Date( d.getFullYear(), d.getMonth(), d.getDate() + n );
	const monday = ( d ) => addDays( d, -( ( d.getDay() + 6 ) % 7 ) );
	const el = ( tag, attrs = {}, ...children ) => {
		const node = document.createElement( tag );
		Object.entries( attrs ).forEach( ( [ k, v ] ) => {
			if ( k === 'class' ) {
				node.className = v;
			} else if ( k.startsWith( 'on' ) ) {
				node.addEventListener( k.slice( 2 ), v );
			} else if ( v !== false && v !== null && v !== undefined ) {
				node.setAttribute( k, v );
			}
		} );
		children.flat().forEach( ( c ) => c !== null && c !== undefined && node.append( c ) );
		return node;
	};

	const byDate = {};
	const slots = {};
	data.appointments.forEach( ( a ) => {
		( byDate[ a.date ] = byDate[ a.date ] || [] ).push( a );
		if ( a.time ) {
			const key = `${ a.date } ${ a.time }`;
			slots[ key ] = ( slots[ key ] || 0 ) + 1;
		}
	} );
	const conflict = ( a ) => a.time && slots[ `${ a.date } ${ a.time }` ] > 1;

	const state = { view: 'month', cursor: parse( data.today ), selected: null };
	try {
		state.view = localStorage.getItem( 'bricareauCalView' ) || 'month';
	} catch ( e ) {}

	function chip( a ) {
		return el(
			'button',
			{
				type: 'button',
				class: 'bricareau-cal__event' + ( a.unread ? ' is-unread' : '' ) + ( conflict( a ) ? ' is-conflict' : '' ) + ( state.selected === a ? ' is-selected' : '' ),
				style: `--event:${ a.color }`,
				title: `${ a.time ? a.time + ' · ' : '' }${ a.name } (${ a.label })${ conflict( a ) ? ' · même créneau qu’un autre rendez-vous' : '' }`,
				onclick: () => {
					state.selected = a;
					render();
				},
			},
			a.time ? el( 'span', { class: 'bricareau-cal__time' }, a.time ) : null,
			el( 'span', { class: 'bricareau-cal__name' }, a.name )
		);
	}

	function monthView() {
		const first = new Date( state.cursor.getFullYear(), state.cursor.getMonth(), 1 );
		const start = monday( first );
		const grid = el( 'div', { class: 'bricareau-cal__grid', role: 'grid' }, DAYS.map( ( d ) => el( 'div', { class: 'bricareau-cal__dow', role: 'columnheader' }, d ) ) );
		for ( let i = 0; i < 42; i++ ) {
			const day = addDays( start, i );
			if ( i === 35 && day.getMonth() !== first.getMonth() ) {
				break;
			}
			const key = iso( day );
			const events = byDate[ key ] || [];
			const extra = events.length - MAX_IN_DAY;
			grid.append(
				el(
					'div',
					{ class: 'bricareau-cal__day' + ( day.getMonth() !== first.getMonth() ? ' is-outside' : '' ) + ( key === data.today ? ' is-today' : '' ), role: 'gridcell' },
					el( 'button', { type: 'button', class: 'bricareau-cal__date', title: 'Voir la journée', onclick: () => openDay( day ) }, String( day.getDate() ) ),
					events.slice( 0, extra > 0 ? MAX_IN_DAY - 1 : MAX_IN_DAY ).map( chip ),
					extra > 0
						? el(
								'button',
								{
									type: 'button',
									class: 'bricareau-cal__more',
									onclick: () => openDay( day ),
								},
								`+ ${ extra + 1 } autres`
						  )
						: null
				)
			);
		}
		return grid;
	}

	function weekView() {
		const start = monday( state.cursor );
		const days = [ ...Array( 7 ) ].map( ( _, i ) => addDays( start, i ) );
		const times = new Set();
		days.forEach( ( d ) => ( byDate[ iso( d ) ] || [] ).forEach( ( a ) => times.add( a.time || '' ) ) );
		for ( let h = 9; h <= 18; h++ ) {
			times.add( `${ String( h ).padStart( 2, '0' ) }:00` );
		}
		const rows = [ ...times ].sort();
		const grid = el(
			'div',
			{ class: 'bricareau-cal__week', role: 'grid' },
			el( 'div', { class: 'bricareau-cal__dow' } ),
			days.map( ( d ) => el( 'div', { class: 'bricareau-cal__dow' + ( iso( d ) === data.today ? ' is-today' : '' ), role: 'columnheader' }, `${ DAYS[ ( d.getDay() + 6 ) % 7 ] } ${ d.getDate() }` ) )
		);
		rows.forEach( ( t ) => {
			grid.append( el( 'div', { class: 'bricareau-cal__hour' }, t || 'Sans heure' ) );
			days.forEach( ( d ) => grid.append( el( 'div', { class: 'bricareau-cal__slot', role: 'gridcell' }, ( byDate[ iso( d ) ] || [] ).filter( ( a ) => ( a.time || '' ) === t ).map( chip ) ) ) );
		} );
		return grid;
	}

	function openDay( day ) {
		state.view = 'day';
		state.cursor = day;
		render();
	}

	// One column of hours; each appointment shows its time, name, form, phone and city.
	function dayView() {
		const key = iso( state.cursor );
		const events = byDate[ key ] || [];
		const times = new Set( events.map( ( a ) => a.time || '' ) );
		for ( let h = 9; h <= 18; h++ ) {
			times.add( `${ String( h ).padStart( 2, '0' ) }:00` );
		}
		const card = ( a ) =>
			el(
				'button',
				{
					type: 'button',
					class: 'bricareau-cal__card' + ( a.unread ? ' is-unread' : '' ) + ( conflict( a ) ? ' is-conflict' : '' ) + ( state.selected === a ? ' is-selected' : '' ),
					style: `--event:${ a.color }`,
					onclick: () => {
						state.selected = a;
						render();
					},
				},
				el( 'span', { class: 'bricareau-cal__card-name' }, a.name ),
				el( 'span', { class: 'bricareau-cal__card-meta' }, [ a.label, a.phone, a.city ].filter( Boolean ).join( ' · ' ) ),
				conflict( a ) ? el( 'span', { class: 'bricareau-cal__card-warning' }, 'Même créneau qu’un autre rendez-vous' ) : null
			);
		const grid = el( 'div', { class: 'bricareau-cal__day-view', role: 'grid' } );
		[ ...times ].sort().forEach( ( t ) => {
			grid.append(
				el( 'div', { class: 'bricareau-cal__hour' }, t || 'Sans heure' ),
				el( 'div', { class: 'bricareau-cal__slot', role: 'gridcell' }, events.filter( ( a ) => ( a.time || '' ) === t ).map( card ) )
			);
		} );
		return el( 'div', {}, events.length ? null : el( 'p', { class: 'bricareau-cal__empty' }, 'Aucun rendez-vous ce jour-là.' ), grid );
	}

	function title() {
		if ( state.view === 'month' ) {
			return `${ MONTHS[ state.cursor.getMonth() ] } ${ state.cursor.getFullYear() }`;
		}
		if ( state.view === 'day' ) {
			const d = state.cursor;
			return `${ DAYS[ ( d.getDay() + 6 ) % 7 ] } ${ d.getDate() } ${ MONTHS[ d.getMonth() ] } ${ d.getFullYear() }`;
		}
		const start = monday( state.cursor );
		const end = addDays( start, 6 );
		return `${ start.getDate() } ${ MONTHS[ start.getMonth() ] } – ${ end.getDate() } ${ MONTHS[ end.getMonth() ] } ${ end.getFullYear() }`;
	}

	function move( step ) {
		const c = state.cursor;
		if ( state.view === 'month' ) {
			state.cursor = new Date( c.getFullYear(), c.getMonth() + step, 1 );
		} else {
			state.cursor = addDays( c, ( state.view === 'week' ? 7 : 1 ) * step );
		}
		render();
	}

	function details() {
		const a = state.selected;
		if ( ! a ) {
			return el( 'aside', { class: 'bricareau-cal__panel is-empty' }, el( 'p', {}, 'Cliquez sur un rendez-vous pour voir ses détails.' ) );
		}
		const row = ( label, value ) => ( value ? el( 'div', { class: 'bricareau-cal__row' }, el( 'dt', {}, label ), el( 'dd', {}, value ) ) : null );
		const date = parse( a.date );
		return el(
			'aside',
			{ class: 'bricareau-cal__panel', style: `--event:${ a.color }` },
			el( 'p', { class: 'bricareau-cal__kind' }, a.label ),
			el( 'h2', {}, a.name ),
			el( 'p', { class: 'bricareau-cal__when' }, `${ DAYS[ ( date.getDay() + 6 ) % 7 ] } ${ date.getDate() } ${ MONTHS[ date.getMonth() ] } ${ date.getFullYear() }${ a.time ? ' à ' + a.time : '' }` ),
			conflict( a ) ? el( 'p', { class: 'bricareau-cal__warning' }, 'Un autre rendez-vous est prévu au même créneau.' ) : null,
			el( 'dl', {}, row( 'Téléphone', a.phone ), row( 'Courriel', a.email ), row( 'Adresse', a.address ), row( 'Trousses', a.details ) ),
			el( 'p', {}, el( 'a', { class: 'button button-primary', href: a.url }, 'Ouvrir la demande' ) )
		);
	}

	function render() {
		try {
			localStorage.setItem( 'bricareauCalView', state.view );
		} catch ( e ) {}
		const toggle = ( view, label ) => el( 'button', { type: 'button', class: 'button' + ( state.view === view ? ' button-primary' : '' ), 'aria-pressed': String( state.view === view ), onclick: () => { state.view = view; render(); } }, label );
		const empty = ! data.appointments.length;
		const parts = [
			el(
				'div',
				{ class: 'bricareau-cal__toolbar' },
				el( 'div', { class: 'bricareau-cal__nav' },
					el( 'button', { type: 'button', class: 'button', 'aria-label': 'Précédent', onclick: () => move( -1 ) }, '‹' ),
					el( 'button', { type: 'button', class: 'button', onclick: () => { state.cursor = parse( data.today ); render(); } }, 'Aujourd’hui' ),
					el( 'button', { type: 'button', class: 'button', 'aria-label': 'Suivant', onclick: () => move( 1 ) }, '›' ),
					el( 'h2', { class: 'bricareau-cal__title' }, title() )
				),
				el( 'div', { class: 'bricareau-cal__views' }, toggle( 'month', 'Mois' ), toggle( 'week', 'Semaine' ), toggle( 'day', 'Jour' ) )
			),
			el( 'div', { class: 'bricareau-cal__legend' },
				data.forms.map( ( f ) => el( 'span', { style: `--event:${ f.color }` }, f.label ) ),
				el( 'span', { class: 'is-conflict' }, 'Même créneau' ),
				el( 'span', { class: 'is-unread' }, 'Non lue (en gras)' )
			),
			empty ? el( 'p', { class: 'bricareau-cal__empty' }, 'Aucun rendez-vous pour l’instant. Les demandes de consultation et de test d’eau avec une date apparaîtront ici.' ) : null,
			el( 'div', { class: 'bricareau-cal__body' }, { month: monthView, week: weekView, day: dayView }[ state.view ](), details() ),
		];
		root.replaceChildren( ...parts.filter( Boolean ) );
	}

	render();
} )();
