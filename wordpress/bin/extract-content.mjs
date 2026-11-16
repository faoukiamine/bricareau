#!/usr/bin/env node
// Renders the React blog articles and legal pages to native WordPress block markup, into
// themes/bricareau/data/ (articles.json, legal/*.html). Re-run only if the React copy changes;
// images become "asset:<file>" and are swapped for media library URLs by `wp bricareau seed`.
import { build } from 'esbuild';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const src = join(root, 'src');
const out = join(root, 'wordpress/themes/bricareau/data');
const require = createRequire(join(root, 'package.json'));

const app = readFileSync(join(src, 'App.tsx'), 'utf8');
const imports = [...app.matchAll(/import (\w+) from "\.\/pages\/(Blog pages\/[^"]+)"/g)].map((m) => ({ name: m[1], file: m[2] }));
const routes = Object.fromEntries([...app.matchAll(/<Route path="([^"]+)" element=\{<(\w+)/g)].map((m) => [m[2], m[1]]));
const legal = { 'politique-de-confidentialite': 'Politique-de-Confidentialite', 'conditions-generales-utilisation': 'Conditions-Generales-Utilisation' };

const entry = `
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { categories } from '@/data/blogCategories';
import { faqCategories } from '@/data/faqs';
import { microBiologiques, chimiques, radiologiques } from '@/data/contaminants';
${imports.map((a, i) => `import A${i} from ${JSON.stringify('@/pages/' + a.file)};`).join('\n')}
${Object.values(legal).map((f, i) => `import L${i} from ${JSON.stringify('@/pages/' + f)};`).join('\n')}
const render = (C) => renderToStaticMarkup(React.createElement(MemoryRouter, null, React.createElement(C)));
export const articles = [${imports.map((a, i) => `{ file: ${JSON.stringify(a.file)}, name: ${JSON.stringify(a.name)}, render: () => render(A${i}) }`).join(',')}];
export const legal = [${Object.keys(legal).map((k, i) => `{ slug: ${JSON.stringify(k)}, render: () => render(L${i}) }`).join(',')}];
export { categories, faqCategories, microBiologiques, chimiques, radiologiques };
`;

const stub = `import React from 'react';
export default function Stub(props) {
  globalThis.__layout = props;
  return React.createElement(React.Fragment, null, props.children);
}`;
const empty = `export default function Empty() { return null; }`;

const result = await build({
	stdin: { contents: entry, resolveDir: src, loader: 'tsx' },
	bundle: true,
	write: false,
	format: 'cjs',
	platform: 'node',
	jsx: 'automatic',
	external: ['react', 'react-dom', 'react-dom/server', 'react-router-dom'],
	plugins: [
		{
			name: 'bricareau',
			setup(b) {
				b.onResolve({ filter: /^@\/components\/BlogLayout$/ }, () => ({ path: 'layout', namespace: 'stub' }));
				b.onResolve({ filter: /^@\/components\/(Header|Footer|GlobalBreadcrumbs)$/ }, () => ({ path: 'empty', namespace: 'stub' }));
				b.onLoad({ filter: /^layout$/, namespace: 'stub' }, () => ({ contents: stub, loader: 'jsx', resolveDir: root }));
				b.onLoad({ filter: /^empty$/, namespace: 'stub' }, () => ({ contents: empty, loader: 'js' }));
				b.onResolve({ filter: /^@\/assets\// }, (a) => ({ path: a.path.slice('@/assets/'.length), namespace: 'asset' }));
				b.onLoad({ filter: /.*/, namespace: 'asset' }, (a) => ({ contents: `export default ${JSON.stringify('asset:' + a.path)}`, loader: 'js' }));
				b.onResolve({ filter: /^@\// }, (a) => b.resolve('./' + a.path.slice(2), { resolveDir: src, kind: a.kind }));
			},
		},
	],
});
const mod = { exports: {} };
// Server rendering warns about MemoryRouter's useLayoutEffect, which is harmless here.
console.error = () => {};
new Function('module', 'exports', 'require', result.outputFiles[0].text)(mod, mod.exports, require);
const { articles, legal: legalPages, categories } = mod.exports;

/* ---- minimal parser for renderToStaticMarkup output ---- */
const VOID = new Set(['br', 'hr', 'img', 'input']);
function parse(html) {
	const rootNode = { tag: '#root', attrs: {}, children: [] };
	const stack = [rootNode];
	for (const m of html.matchAll(/<(\/?)([a-zA-Z0-9]+)((?:\s+[^\s=>]+(?:="[^"]*")?)*)\s*(\/?)>|([^<]+)/g)) {
		const top = stack[stack.length - 1];
		if (m[5] !== undefined) {
			top.children.push({ text: m[5] });
		} else if (m[1]) {
			stack.pop();
		} else {
			const attrs = Object.fromEntries([...m[3].matchAll(/([^\s=]+)(?:="([^"]*)")?/g)].map((a) => [a[1], a[2] ?? '']));
			const node = { tag: m[2].toLowerCase(), attrs, children: [] };
			top.children.push(node);
			if (!VOID.has(node.tag) && !m[4]) stack.push(node);
		}
	}
	return rootNode;
}

const INLINE = new Set(['a', 'strong', 'b', 'em', 'i', 'span', 'br', 'sub', 'sup', 'u', 'small', 'code']);
const isInline = (n) => n.text !== undefined || INLINE.has(n.tag);
const report = { dropped: {}, images: new Set() };

// Keeps the emphasis that the React pages set through classes.
function emphasis(n, html) {
	const cls = n.attrs.class || '';
	let out = /\buppercase\b/.test(cls) ? html.replace(/(^|>)([^<]*)/g, (_, a, t) => a + t.toUpperCase()) : html;
	if (/\bfont-(bold|semibold|black)\b/.test(cls) && out.trim()) out = `<strong>${out}</strong>`;
	if (/(^|\s)italic\b/.test(cls) && out.trim()) out = `<em>${out}</em>`;
	return out;
}
function inline(n) {
	if (n.text !== undefined) return n.text;
	if (n.tag === 'svg') return '';
	const inner = emphasis(n, n.children.map(inline).join(''));
	if (n.tag === 'br') return '<br>';
	if (n.tag === 'a') return `<a href="${n.attrs.href ?? '#'}">${inner}</a>`;
	if (n.tag === 'b' || n.tag === 'strong') return `<strong>${inner}</strong>`;
	if (n.tag === 'i' || n.tag === 'em') return `<em>${inner}</em>`;
	if (['sub', 'sup', 'code'].includes(n.tag)) return `<${n.tag}>${inner}</${n.tag}>`;
	return inner;
}
const paragraph = (html) => (html.trim() ? `<!-- wp:paragraph -->\n<p>${html.trim()}</p>\n<!-- /wp:paragraph -->` : '');

function list(n) {
	const items = n.children.filter((c) => c.tag === 'li').map((li) => {
		const nested = li.children.filter((c) => c.tag === 'ul' || c.tag === 'ol').map(list).join('\n');
		const text = li.children.filter((c) => c.tag !== 'ul' && c.tag !== 'ol').map(inlineDeep).join('').trim();
		return `<!-- wp:list-item -->\n<li>${text}${nested}</li>\n<!-- /wp:list-item -->`;
	});
	const ordered = n.tag === 'ol';
	return `<!-- wp:list${ordered ? ' {"ordered":true}' : ''} -->\n<${n.tag} class="wp-block-list">${items.join('\n')}</${n.tag}>\n<!-- /wp:list -->`;
}
// Block wrappers inside a list item or a table cell collapse to their text.
function inlineDeep(n) {
	if (isInline(n)) return inline(n);
	if (n.tag === 'svg') return '';
	return n.children.map(inlineDeep).join(' ');
}
function table(n) {
	const rows = (sec) => sec.children.filter((c) => c.tag === 'tr').map((tr) => `<tr>${tr.children.filter((c) => c.tag === 'td' || c.tag === 'th').map((c) => `<${c.tag}>${c.children.map(inlineDeep).join('')}</${c.tag}>`).join('')}</tr>`).join('');
	const head = n.children.find((c) => c.tag === 'thead');
	const bodies = n.children.filter((c) => c.tag === 'tbody');
	return `<!-- wp:table -->\n<figure class="wp-block-table"><table>${head ? `<thead>${rows(head)}</thead>` : ''}<tbody>${bodies.map(rows).join('')}</tbody></table></figure>\n<!-- /wp:table -->`;
}
function blocks(nodes) {
	const output = [];
	let run = [];
	const flush = () => {
		if (run.length) output.push(paragraph(run.map(inline).join('')));
		run = [];
	};
	for (const n of nodes) {
		if (isInline(n)) {
			run.push(n);
			continue;
		}
		flush();
		if (/^h[1-6]$/.test(n.tag)) {
			const level = +n.tag[1];
			const text = n.children.map(inlineDeep).join('');
			const id = n.attrs.id ? ` id="${n.attrs.id}"` : '';
			output.push(`<!-- wp:heading${level === 2 ? '' : ` {"level":${level}}`} -->\n<${n.tag} class="wp-block-heading"${id}>${text}</${n.tag}>\n<!-- /wp:heading -->`);
		} else if (n.tag === 'p') {
			output.push(paragraph(emphasis(n, n.children.map(inlineDeep).join(''))));
		} else if (n.tag === 'ul' || n.tag === 'ol') {
			output.push(list(n));
		} else if (n.tag === 'hr') {
			output.push('<!-- wp:separator -->\n<hr class="wp-block-separator has-alpha-channel-opacity"/>\n<!-- /wp:separator -->');
		} else if (n.tag === 'img') {
			report.images.add(n.attrs.src);
			output.push(`<!-- wp:image -->\n<figure class="wp-block-image"><img src="${n.attrs.src}" alt="${n.attrs.alt ?? ''}"/></figure>\n<!-- /wp:image -->`);
		} else if (n.tag === 'blockquote') {
			output.push(`<!-- wp:quote -->\n<blockquote class="wp-block-quote">${blocks(n.children)}</blockquote>\n<!-- /wp:quote -->`);
		} else if (n.tag === 'table') {
			output.push(table(n));
		} else if (n.tag === 'svg') {
			continue;
		} else {
			if (!['div', 'section', 'article', 'main', 'aside', 'figure', 'nav', 'header', 'footer', 'figcaption'].includes(n.tag)) report.dropped[n.tag] = (report.dropped[n.tag] || 0) + 1;
			output.push(blocks(n.children));
		}
	}
	flush();
	return output.filter(Boolean).join('\n\n');
}
const find = (n, test) => {
	if (n.children) for (const c of n.children) {
		if (c.tag && test(c)) return c;
		const r = c.children && find(c, test);
		if (r) return r;
	}
	return null;
};
const slugOf = (name) => (routes[name] || '').replace(/^\//, '');

const byHref = new Map();
for (const cat of categories) for (const p of cat.products) {
	const e = byHref.get(p.href) || { ...p, categories: [] };
	e.categories.push(cat.id);
	byHref.set(p.href, e);
}

const output = [];
for (const a of articles) {
	globalThis.__layout = null;
	const html = a.render();
	const layout = globalThis.__layout;
	const source = readFileSync(join(src, 'pages', a.file + '.tsx'), 'utf8');
	const seoTitle = source.match(/document\.title\s*=\s*["'`]([^"'`]+)/)?.[1] ?? '';
	const seoDescription = source.match(/name="description"[\s\S]*?setAttribute\("content",\s*"((?:[^"\\]|\\.)*)"/)?.[1] ?? '';
	const slug = slugOf(a.name);
	const meta = byHref.get('/' + slug);
	output.push({
		slug,
		title: layout.title,
		seo_title: seoTitle,
		seo_description: seoDescription,
		excerpt: meta?.desc ?? '',
		read_time: meta?.readTime ?? '',
		categories: meta?.categories ?? [],
		image: String(meta?.image ?? layout.headerImage).replace(/^asset:/, ''),
		hero_image: String(layout.headerImage).replace(/^asset:/, ''),
		content: blocks(parse(html).children),
	});
}
// Same order as src/data/blogCategories.ts.
const order = [...byHref.keys()];
output.sort((a, b) => order.indexOf('/' + a.slug) - order.indexOf('/' + b.slug));
writeFileSync(join(out, 'articles.json'), JSON.stringify({ categories: categories.map((c) => ({ id: c.id, title: c.title })), articles: output }, null, '\t') + '\n');

mkdirSync(join(out, 'legal'), { recursive: true });
for (const l of legalPages) {
	const tree = parse(l.render());
	const body = find(tree, (n) => (n.attrs.class || '').includes('space-y-8') && (n.attrs.class || '').includes('text-[15px]'));
	writeFileSync(join(out, 'legal', l.slug + '.html'), blocks(body.children) + '\n');
}

writeFileSync(join(out, 'faqs.json'), JSON.stringify(mod.exports.faqCategories, null, '\t') + '\n');

// The glossary is declared inside the page, with lucide components as icons.
const page = readFileSync(join(src, 'pages/ContaminantsEau.tsx'), 'utf8');
const glossary = new Function(`return ${page.match(/const glossaryData = (\[[\s\S]*?\n\]);/)[1].replace(/icon:\s*(\w+)/g, 'icon: "$1"')}`)();
const clean = (rows) => rows.map((row) => Object.fromEntries(Object.entries(row).map(([k, v]) => [k, String(v).replace(/\s+/g, ' ').trim()])));
writeFileSync(join(out, 'contaminants.json'), JSON.stringify({ glossary, micro: clean(mod.exports.microBiologiques), chimiques: clean(mod.exports.chimiques), radio: clean(mod.exports.radiologiques) }, null, '\t') + '\n');

// Parts catalog: the categories array of Pieces.tsx, with its image imports resolved to file names.
const pieces = readFileSync(join(src, 'pages/Pieces.tsx'), 'utf8');
const files = Object.fromEntries([...pieces.matchAll(/import (\w+) from "@\/assets\/([^"]+)"/g)].map((m) => [m[1], m[2]]));
const parts = new Function(...Object.keys(files), `return ${pieces.match(/const partCategories = (\[[\s\S]*?\n\s*\]);/)[1].replace(/icon:\s*\w+,?/g, '')}`)(...Object.values(files));
writeFileSync(join(out, 'parts.json'), JSON.stringify(parts, null, '\t') + '\n');

const unmatched = output.filter((a) => !a.categories.length).map((a) => a.slug);
console.log(output.length, 'articles;', 'no category:', unmatched, '; unknown tags:', report.dropped, '; inline images:', [...report.images]);
for (const a of output) if (!a.slug || !a.seo_description || !a.content) console.log('INCOMPLETE', a.slug, !!a.seo_description, a.title);
