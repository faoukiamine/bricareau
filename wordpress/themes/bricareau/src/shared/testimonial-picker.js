import { Button, Spinner, TextControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { decodeEntities } from '@wordpress/html-entities';

const ENDPOINT = '/wp/v2/bricareau_temoignage';

const toOption = ( post ) => ( {
	id: post.id,
	name: decodeEntities( post.title.rendered ),
	text: decodeEntities( post.content.rendered.replace( /<[^>]+>/g, ' ' ).replace( /\s+/g, ' ' ).trim() ),
} );

const REVIEW_TEXT = {
	color: '#757575',
	fontSize: 12,
	lineHeight: 1.4,
	marginTop: 2,
	overflowWrap: 'anywhere',
	display: '-webkit-box',
	WebkitBoxOrient: 'vertical',
	WebkitLineClamp: 4,
	overflow: 'hidden',
};

const fetchOptions = ( query ) =>
	apiFetch( { path: `${ ENDPOINT }?_fields=id,title,content&${ query }` } ).then( ( posts ) => posts.map( toOption ) );

/**
 * Finds testimonials by name or text, and keeps the picked ones in the order they should appear.
 */
export default function TestimonialPicker( { value = [], onChange } ) {
	const [ search, setSearch ] = useState( '' );
	const [ results, setResults ] = useState( [] );
	const [ searching, setSearching ] = useState( false );
	const [ known, setKnown ] = useState( {} );

	const remember = ( options ) =>
		setKnown( ( current ) => ( { ...current, ...Object.fromEntries( options.map( ( option ) => [ option.id, option ] ) ) } ) );

	// Names of the testimonials already saved in the block.
	const missing = value.filter( ( id ) => ! known[ id ] );
	useEffect( () => {
		if ( missing.length ) {
			fetchOptions( `include=${ missing.join( ',' ) }&per_page=${ missing.length }` ).then( remember ).catch( () => {} );
		}
	}, [ missing.join( ',' ) ] );

	useEffect( () => {
		const term = search.trim();
		if ( term.length < 2 ) {
			setResults( [] );
			setSearching( false );
			return undefined;
		}
		let cancelled = false;
		setSearching( true );
		const timer = setTimeout( () => {
			fetchOptions( `search=${ encodeURIComponent( term ) }&per_page=10` )
				.then( ( options ) => {
					if ( ! cancelled ) {
						remember( options );
						setResults( options );
					}
				} )
				.catch( () => ! cancelled && setResults( [] ) )
				.finally( () => ! cancelled && setSearching( false ) );
		}, 300 );
		return () => {
			cancelled = true;
			clearTimeout( timer );
		};
	}, [ search ] );

	const move = ( index, offset ) => {
		const next = [ ...value ];
		next.splice( index + offset, 0, next.splice( index, 1 )[ 0 ] );
		onChange( next );
	};

	const available = results.filter( ( option ) => ! value.includes( option.id ) );

	return (
		<div className="bricareau-testimonial-picker" style={ { minWidth: 0 } }>
			<TextControl
				label="Rechercher un avis"
				help="Par nom du client ou par mot du texte."
				value={ search }
				onChange={ setSearch }
				autoComplete="off"
				__nextHasNoMarginBottom
			/>
			{ searching && <Spinner /> }
			{ ! searching && search.trim().length >= 2 && ! available.length && (
				<p style={ { color: '#757575', margin: '8px 0' } }>Aucun autre avis trouvé.</p>
			) }
			{ available.map( ( option ) => (
				<div key={ option.id } style={ { display: 'flex', gap: 8, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid #eee' } }>
					<div style={ { flex: 1, minWidth: 0 } }>
						<strong>{ option.name }</strong>
						<div style={ REVIEW_TEXT } title={ option.text }>{ option.text }</div>
					</div>
					<Button variant="secondary" size="small" onClick={ () => onChange( [ ...value, option.id ] ) }>
						Ajouter
					</Button>
				</div>
			) ) }

			<p style={ { fontWeight: 600, margin: '16px 0 8px' } }>Avis affichés ({ value.length })</p>
			{ ! value.length && <p style={ { color: '#757575' } }>Aucun avis choisi : le bloc affiche la liste automatique.</p> }
			{ value.map( ( id, index ) => (
				<div key={ id } style={ { display: 'flex', gap: 4, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid #eee' } }>
					<div style={ { flex: 1, minWidth: 0 } }>
						<strong>{ known[ id ]?.name || `Avis n° ${ id }` }</strong>
						{ known[ id ]?.text && <div style={ REVIEW_TEXT } title={ known[ id ].text }>{ known[ id ].text }</div> }
					</div>
					<Button icon="arrow-up-alt2" label="Monter" size="small" disabled={ index === 0 } onClick={ () => move( index, -1 ) } />
					<Button icon="arrow-down-alt2" label="Descendre" size="small" disabled={ index === value.length - 1 } onClick={ () => move( index, 1 ) } />
					<Button icon="no-alt" label="Retirer" size="small" isDestructive onClick={ () => onChange( value.filter( ( other ) => other !== id ) ) } />
				</div>
			) ) }
		</div>
	);
}
