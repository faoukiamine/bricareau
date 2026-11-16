/**
 * Sidebar controls shared by the Bricareau blocks.
 *
 * Every block renders on the server (render.php); the editor shows that output
 * through ServerSideRender and edits the attributes from the sidebar.
 */
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	BaseControl,
	Button,
	Flex,
	FocalPointPicker,
	PanelBody,
	SelectControl,
	TextControl,
	TextareaControl,
	ToggleControl,
	RangeControl,
	Placeholder,
	Spinner,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import { registerBlockType } from '@wordpress/blocks';

const TITLE_HELP =
	'Une ligne par ligne du titre. Entourez un mot de *astérisques* pour le mettre en vert.';

/**
 * Media library picker. With `focal`, a focal point picker sets which part of
 * the image stays visible when it is cropped (stored as image.focal {x, y}).
 */
export function ImageControl( { label, value, onChange, focal = false } ) {
	const image = value || {};
	return (
		<BaseControl label={ label } __nextHasNoMarginBottom>
			<MediaUploadCheck>
				<MediaUpload
					allowedTypes={ [ 'image' ] }
					value={ image.id }
					onSelect={ ( media ) =>
						onChange( { id: media.id, url: media.url, alt: media.alt || '' } )
					}
					render={ ( { open } ) => (
						<div>
							{ image.url && focal && (
								<FocalPointPicker
									label="Point focal"
									help="Cliquez sur la partie de l’image à garder visible, sur tous les écrans."
									url={ image.url }
									value={ image.focal || { x: 0.5, y: 0.5 } }
									onChange={ ( point ) => onChange( { ...image, focal: point } ) }
									__nextHasNoMarginBottom
								/>
							) }
							{ image.url && ! focal && (
								<img
									src={ image.url }
									alt=""
									style={ { width: '100%', height: 'auto', marginBottom: 8, display: 'block' } }
								/>
							) }
							<Flex justify="flex-start">
								<Button variant="secondary" onClick={ open }>
									{ image.url ? 'Remplacer' : 'Choisir une image' }
								</Button>
								{ image.url && (
									<Button variant="tertiary" isDestructive onClick={ () => onChange( {} ) }>
										Retirer
									</Button>
								) }
							</Flex>
						</div>
					) }
				/>
			</MediaUploadCheck>
		</BaseControl>
	);
}

export function GalleryControl( { label, value, onChange } ) {
	const images = Array.isArray( value ) ? value : [];
	return (
		<BaseControl label={ label } __nextHasNoMarginBottom>
			<MediaUploadCheck>
				<MediaUpload
					allowedTypes={ [ 'image' ] }
					multiple
					gallery
					value={ images.map( ( image ) => image.id ).filter( Boolean ) }
					onSelect={ ( media ) =>
						onChange( media.map( ( item ) => ( { id: item.id, url: item.url, alt: item.alt || '' } ) ) )
					}
					render={ ( { open } ) => (
						<div>
							<div style={ { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4, marginBottom: 8 } }>
								{ images.map( ( image, i ) => (
									<img key={ i } src={ image.url } alt="" style={ { width: '100%', aspectRatio: '1', objectFit: 'cover' } } />
								) ) }
							</div>
							<Flex justify="flex-start">
								<Button variant="secondary" onClick={ open }>
									{ images.length ? 'Modifier la galerie' : 'Créer une galerie' }
								</Button>
								{ images.length > 0 && (
									<Button variant="tertiary" isDestructive onClick={ () => onChange( [] ) }>
										Vider
									</Button>
								) }
							</Flex>
						</div>
					) }
				/>
			</MediaUploadCheck>
		</BaseControl>
	);
}

export function IconControl( { label = 'Icône', value, onChange } ) {
	const icons = window.bricareauEditor?.icons || [];
	return (
		<SelectControl
			label={ label }
			value={ value }
			options={ [ { label: '— Aucune —', value: '' }, ...icons.map( ( icon ) => ( { label: icon, value: icon } ) ) ] }
			onChange={ onChange }
			__nextHasNoMarginBottom
		/>
	);
}

/** Label styles, kept in sync with bricareau_label_styles() in inc/helpers.php. */
export const LABEL_STYLES = [
	{ label: 'Pastille bleue', value: 'pill' },
	{ label: 'Pastille contour bleu', value: 'pill-outline' },
	{ label: 'Pastille contour vert', value: 'pill-outline-green' },
	{ label: 'Pastille grise', value: 'pill-soft' },
	{ label: 'Trait noir + petites capitales', value: 'line' },
	{ label: 'Trait vert', value: 'line-green' },
	{ label: 'Petites capitales', value: 'text' },
];

/** Accent styles, kept in sync with bricareau_accent_class() in inc/helpers.php. */
export const ACCENT_STYLES = [
	{ label: 'Vert', value: 'green' },
	{ label: 'Vert italique', value: 'green-italic' },
	{ label: 'Dégradé vert-bleu italique', value: 'gradient' },
	{ label: 'Vert italique serif', value: 'serif' },
];

/**
 * One field of an object: `{ key, label, type }` where type is text, textarea,
 * title, rich, lines, image, images, icon, url, toggle, number, select, or
 * custom (`component` receives value and onChange).
 */
export function Field( { field, value, onChange } ) {
	const props = { label: field.label, value: value ?? '', onChange, __nextHasNoMarginBottom: true };
	switch ( field.type ) {
		case 'custom':
			return <field.component value={ value } onChange={ onChange } />;
		case 'textarea':
			return <TextareaControl { ...props } help={ field.help } />;
		case 'rich':
			return (
				<TextareaControl
					{ ...props }
					rows={ 5 }
					help={ field.help || 'Ligne vide = nouveau paragraphe. **texte** = gras, *texte* = vert.' }
				/>
			);
		case 'lines':
			return <TextareaControl { ...props } rows={ 4 } help={ field.help || 'Un élément par ligne. **Libellé :** en gras possible.' } />;
		case 'images':
			return <GalleryControl label={ field.label } value={ value } onChange={ onChange } />;
		case 'title':
			return <TextareaControl { ...props } rows={ 3 } help={ field.help || TITLE_HELP } />;
		case 'image':
			return <ImageControl label={ field.label } value={ value } onChange={ onChange } focal={ !! field.focal } />;
		case 'icon':
			return <IconControl label={ field.label } value={ value } onChange={ onChange } />;
		case 'url':
			return <TextControl { ...props } help={ field.help || 'Chemin du site (ex. /consultation) ou URL complète.' } />;
		case 'toggle':
			return <ToggleControl label={ field.label } checked={ !! value } onChange={ onChange } __nextHasNoMarginBottom />;
		case 'number':
			return (
				<RangeControl
					label={ field.label }
					value={ value }
					onChange={ onChange }
					min={ field.min ?? 1 }
					max={ field.max ?? 20 }
					__nextHasNoMarginBottom
				/>
			);
		case 'select':
			return <SelectControl { ...props } options={ field.options } help={ field.help } />;
		default:
			return <TextControl { ...props } help={ field.help } />;
	}
}

/**
 * Renders a list of Fields bound to block attributes. A field's optional
 * `showIf( attributes )` hides it when it does not apply.
 */
export function Fields( { fields, attributes, setAttributes } ) {
	return (
		<div style={ { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 16 } }>
			{ fields.filter( ( field ) => ! field.showIf || field.showIf( attributes ) ).map( ( field ) => (
				<Field
					key={ field.key }
					field={ field }
					value={ attributes[ field.key ] }
					onChange={ ( value ) => setAttributes( { [ field.key ]: value } ) }
				/>
			) ) }
		</div>
	);
}

/**
 * Editable list of objects (slides, features, regions…): add, remove, reorder.
 */
export function ListControl( { items = [], onChange, fields, newItem, itemLabel } ) {
	const update = ( index, key, value ) =>
		onChange( items.map( ( item, i ) => ( i === index ? { ...item, [ key ]: value } : item ) ) );
	const move = ( index, delta ) => {
		const next = [ ...items ];
		const [ item ] = next.splice( index, 1 );
		next.splice( index + delta, 0, item );
		onChange( next );
	};

	return (
		<div>
			{ items.map( ( item, index ) => (
				<PanelBody
					key={ index }
					title={ itemLabel( item, index ) }
					initialOpen={ false }
				>
					<div style={ { display: 'grid', gap: 16 } }>
						{ fields.map( ( field ) => (
							<Field
								key={ field.key }
								field={ field }
								value={ item[ field.key ] }
								onChange={ ( value ) => update( index, field.key, value ) }
							/>
						) ) }
						<Flex justify="flex-start" wrap>
							<Button size="small" variant="secondary" disabled={ index === 0 } onClick={ () => move( index, -1 ) }>
								↑ Monter
							</Button>
							<Button size="small" variant="secondary" disabled={ index === items.length - 1 } onClick={ () => move( index, 1 ) }>
								↓ Descendre
							</Button>
							<Button size="small" variant="tertiary" isDestructive onClick={ () => onChange( items.filter( ( _, i ) => i !== index ) ) }>
								Supprimer
							</Button>
						</Flex>
					</div>
				</PanelBody>
			) ) }
			<div style={ { padding: 16 } }>
				<Button variant="primary" onClick={ () => onChange( [ ...items, { ...newItem } ] ) }>
					Ajouter
				</Button>
			</div>
		</div>
	);
}

function LoadingPreview() {
	return (
		<Placeholder>
			<Spinner />
		</Placeholder>
	);
}

/**
 * Standard edit component: sidebar panels + server-rendered preview.
 *
 * @param {Object}   props
 * @param {string}   props.name          Block name.
 * @param {Object}   props.attributes
 * @param {Function} props.setAttributes
 * @param {Array}    props.panels        [{ title, fields? , list? }] where list is
 *                                       { key, fields, newItem, itemLabel }.
 */
export function ServerRenderedEdit( { name, attributes, setAttributes, panels } ) {
	const blockProps = useBlockProps();
	return (
		<>
			<InspectorControls>
				{ panels.map( ( panel, index ) => (
					<PanelBody key={ panel.title } title={ panel.title } initialOpen={ index === 0 }>
						{ panel.fields && (
							<Fields fields={ panel.fields } attributes={ attributes } setAttributes={ setAttributes } />
						) }
						{ panel.list && (
							<ListControl
								items={ attributes[ panel.list.key ] }
								onChange={ ( value ) => setAttributes( { [ panel.list.key ]: value } ) }
								fields={ panel.list.fields }
								newItem={ panel.list.newItem }
								itemLabel={ panel.list.itemLabel }
							/>
						) }
					</PanelBody>
				) ) }
			</InspectorControls>
			<div { ...blockProps }>
				<ServerSideRender
					block={ name }
					attributes={ attributes }
					httpMethod="POST"
					LoadingResponsePlaceholder={ LoadingPreview }
				/>
			</div>
		</>
	);
}

/**
 * Registers a server-rendered block whose editor is the sidebar `panels`.
 */
export function registerServerBlock( metadata, panels = [] ) {
	registerBlockType( metadata.name, {
		edit: ( props ) => <ServerRenderedEdit { ...props } panels={ panels } />,
		save: () => null,
	} );
}

/** Common header panel fields (label, label style, title, accent, intro). */
export const headerFields = ( extra = [] ) => [
	{ key: 'label', label: 'Surtitre' },
	{ key: 'labelStyle', label: 'Style du surtitre', type: 'select', options: LABEL_STYLES },
	{ key: 'title', label: 'Titre', type: 'title' },
	{ key: 'accentStyle', label: 'Style du texte en *accent*', type: 'select', options: ACCENT_STYLES },
	{ key: 'intro', label: 'Introduction', type: 'rich' },
	...extra,
];

/** Colours, kept in sync with bricareau_color_class() in inc/helpers.php. */
export const COLORS = [
	{ label: 'Bleu Bricareau', value: 'navy' },
	{ label: 'Bleu', value: 'blue' },
	{ label: 'Vert Bricareau', value: 'green' },
	{ label: 'Émeraude', value: 'emerald' },
	{ label: 'Ambre', value: 'amber' },
	{ label: 'Orange', value: 'orange' },
	{ label: 'Rose', value: 'rose' },
	{ label: 'Rose clair', value: 'pink' },
	{ label: 'Cyan', value: 'cyan' },
	{ label: 'Indigo', value: 'indigo' },
	{ label: 'Ardoise', value: 'slate' },
	{ label: 'Rouge', value: 'red' },
];

/** Header alignment + underline bar (blocks declaring headerAlign/headerBar). */
export const headerLayoutFields = [
	{
		key: 'headerAlign',
		label: "Alignement de l'en-tête",
		type: 'select',
		options: [
			{ label: 'Centré', value: 'center' },
			{ label: 'À gauche', value: 'left' },
		],
	},
	{ key: 'headerBar', label: 'Barre bleue sous le titre', type: 'toggle' },
];
