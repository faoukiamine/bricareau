const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, PageBreak
} = require('docx');
const fs = require('fs');

// ─── COLOR PALETTE ──────────────────────────────────────────────────────────
const NAVY     = '1B2A4A';
const BLUE     = '2563EB';
const GREEN    = '16A34A';
const AMBER    = 'D97706';
const RED      = 'DC2626';
const ORANGE   = 'EA580C';
const GRAY_BG  = 'F8F9FA';
const GRAY_BD  = 'E2E8F0';
const DARK_TXT = '1E293B';
const LIGHT_BG = 'EFF6FF';
const SLATE    = '94A3B8';
const WHITE    = 'FFFFFF';

// ─── SCORES ────────────────────────────────────────────────────────────────
const scores = { SEO: 6, GEO: 5, AEO: 4 };
const combined = scores.SEO + scores.GEO + scores.AEO;

function scoreColor(s) {
  if (s >= 8) return GREEN;
  if (s >= 5) return AMBER;
  return RED;
}
function scoreLabel(s) {
  if (s >= 8) return 'Strong';
  if (s >= 5) return 'On Track';
  return 'Needs Work';
}

// ─── HELPERS ────────────────────────────────────────────────────────────────
function h1(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    style: 'Heading1',
  });
}
function h2(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 150 },
  });
}
function body(text, opts = {}) {
  return new Paragraph({
    children: [new TextRun({ text, size: 22, color: DARK_TXT, ...opts })],
    spacing: { after: 120 },
  });
}
function spacer(pts = 200) {
  return new Paragraph({ spacing: { before: pts, after: 0 } });
}
function colorCell(text, bg, textColor = WHITE, bold = false, size = 22) {
  return new TableCell({
    shading: { fill: bg, type: ShadingType.CLEAR },
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text, color: textColor, bold, size })],
      spacing: { before: 80, after: 80 },
    })],
    margins: { top: 100, bottom: 100, left: 100, right: 100 },
  });
}
function cell(text, bg = null, textColor = DARK_TXT, bold = false) {
  const shading = bg ? { shading: { fill: bg, type: ShadingType.CLEAR } } : {};
  return new TableCell({
    ...shading,
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({
      children: [new TextRun({ text, color: textColor, bold, size: 20 })],
      spacing: { before: 80, after: 80 },
    })],
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
  });
}
function statusCell(status) {
  const map = { 'Good': GREEN, 'Needs Attention': AMBER, 'Missing': RED, 'Strong': GREEN, 'On Track': AMBER, 'Needs Work': RED };
  const bg = map[status] || GRAY_BG;
  return colorCell(status, bg, WHITE, true, 18);
}
function row(...cells) { return new TableRow({ children: cells }); }
function signalTable(rows) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      left: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      right: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      insideH: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      insideV: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
    },
    rows: [
      row(
        colorCell('Signal', NAVY, WHITE, true),
        colorCell('Finding', NAVY, WHITE, true),
        colorCell('Status', NAVY, WHITE, true),
      ),
      ...rows,
    ],
  });
}
function signalRow(signal, finding, status) {
  const shade = status === 'Good' ? '16A34A22' : status === 'Needs Attention' ? 'D9770622' : 'DC262622';
  return row(
    cell(signal, null, DARK_TXT, true),
    cell(finding),
    statusCell(status),
  );
}

// ─── PAGES AUDITED TABLE ─────────────────────────────────────────────────────
function pagesAuditedTable() {
  const pages = [
    ['/', 'Homepage', 'H1 present (dynamic slider), title in index.html global'],
    ['/residentiel', 'Residential Hub', 'H1 present, title set via JS, no schema'],
    ['/pourquoi-choisir-bricareau', 'About / Why Us', 'H1 present, meta set via JS, no schema'],
    ['/faq', 'FAQ', 'H1 present, rich Q&A content, no FAQ schema'],
    ['/contact', 'Contact Hub', 'H1 present, phone visible, no LocalBusiness schema'],
    ['/blog', 'Blog Index', 'H1 present, 36+ articles discovered, meta set via JS'],
    ['/adoucissement', 'Product Hub — Softeners', 'Analysed via routing structure'],
    ['/filtration', 'Product Hub — Filtration', 'Analysed via routing structure'],
    ['/systemes-de-desinfection-uv', 'UV Disinfection', 'Analysed via routing structure'],
    ['/traitement-eau-de-puits', 'Well Water Treatment', 'High-value keyword page'],
    ['robots.txt', 'Crawl Directives', 'Newly generated, well-structured'],
    ['sitemap.xml', 'Sitemap', 'Newly generated, 82 URLs, proper priority'],
  ];
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      left: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      right: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      insideH: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      insideV: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
    },
    rows: [
      row(colorCell('URL', NAVY, WHITE, true), colorCell('Page Type', NAVY, WHITE, true), colorCell('Notes', NAVY, WHITE, true)),
      ...pages.map(([url, type, notes], i) =>
        new TableRow({
          children: [cell(url, i % 2 === 0 ? GRAY_BG : null, BLUE), cell(type, i % 2 === 0 ? GRAY_BG : null, DARK_TXT, true), cell(notes, i % 2 === 0 ? GRAY_BG : null)],
        })
      ),
    ],
  });
}

// ─── PRIORITY MATRIX ─────────────────────────────────────────────────────────
function priorityMatrix() {
  const items = [
    ['🔴 Critical', 'Add JSON-LD schema markup (LocalBusiness, FAQ, BreadcrumbList, Product)', 'SEO + GEO + AEO', 'Medium', 'Very High', RED],
    ['🔴 Critical', 'Move meta tags from JS to static HTML (or use React Helmet)', 'SEO', 'Medium', 'Very High', RED],
    ['🔴 Critical', 'Add <link rel="canonical"> to every page', 'SEO', 'Low', 'High', RED],
    ['🟠 High', 'Fix og:image — replace lovable.dev placeholder with real brand image', 'SEO + GEO', 'Low', 'High', ORANGE],
    ['🟠 High', 'Fix og:url domain inconsistency (bricareau.com vs bricareau.ca)', 'SEO', 'Low', 'Medium', ORANGE],
    ['🟠 High', 'Add Twitter:title and Twitter:description meta tags', 'SEO', 'Low', 'Medium', ORANGE],
    ['🟠 High', 'Add named authors with credentials to blog articles', 'GEO', 'Medium', 'High', ORANGE],
    ['🟡 Medium', 'Add FAQ schema to /faq page (100+ Q&A already present)', 'AEO', 'Low', 'High', AMBER],
    ['🟡 Medium', 'Add HowTo schema to product/installation pages', 'AEO', 'Low', 'Medium', AMBER],
    ['🟡 Medium', 'Add Organization schema with social profiles in index.html', 'GEO', 'Low', 'High', AMBER],
    ['🟡 Medium', 'Add Speakable schema for voice-search readiness', 'AEO', 'Low', 'Medium', AMBER],
    ['🟡 Medium', 'Add html lang="fr-CA" (currently lang="en")', 'SEO', 'Low', 'Medium', AMBER],
    ['🟢 Quick Win', 'Title tags: enforce 50-60 char limit for all inner pages', 'SEO', 'Low', 'Medium', GREEN],
    ['🟢 Quick Win', 'Add question-phrased H2/H3 headings on product pages', 'AEO', 'Low', 'Medium', GREEN],
    ['🟢 Quick Win', 'Add publication dates to blog articles', 'SEO + GEO', 'Low', 'Low', GREEN],
    ['🟢 Quick Win', 'Add content freshness signal (last updated) to key pages', 'GEO', 'Low', 'Medium', GREEN],
  ];
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      left: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      right: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      insideH: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      insideV: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
    },
    rows: [
      row(
        colorCell('Priority', NAVY, WHITE, true),
        colorCell('Issue', NAVY, WHITE, true),
        colorCell('Dimension', NAVY, WHITE, true),
        colorCell('Effort', NAVY, WHITE, true),
        colorCell('Impact', NAVY, WHITE, true),
      ),
      ...items.map(([priority, issue, dim, effort, impact, color]) =>
        new TableRow({
          children: [
            colorCell(priority, color, WHITE, true, 18),
            cell(issue),
            cell(dim, null, BLUE, true),
            cell(effort),
            cell(impact, null, DARK_TXT, true),
          ],
        })
      ),
    ],
  });
}

// ─── STRENGTHS TABLE ─────────────────────────────────────────────────────────
function strengthsTable() {
  const strengths = [
    ['Rich French-Canadian content', '80+ pages, 36 blog articles, hundreds of FAQ entries — excellent content depth for a niche market'],
    ['Well-structured sitemap.xml', '82 URLs with proper priority hierarchy, grouped by content type, changefreq set appropriately'],
    ['robots.txt properly configured', 'Dev/internal routes (/A, /B, /B3, /C, /v1) correctly blocked, sitemap pointer included'],
    ['Multi-segment strategy', 'Clear market segmentation: residential, commercial, HORECA, industrial — each with dedicated pages'],
    ['Phone number prominently displayed', '1 (855) 264-9328 visible in Contact page, linked with tel: href — good local signal'],
    ['Testimonials & social proof', '20,000+ installations claimed, star ratings, named client testimonials throughout site'],
    ['Breadcrumb navigation', 'GlobalBreadcrumbs component implemented on key pages — helps both UX and search engines'],
    ['Scroll-to-top & CookieConsent', 'Good UX fundamentals in place, RGPD/LPRPDE compliance addressed'],
    ['Alt text on images', 'Most images have descriptive alt text (e.g., "Système de traitement d\'eau résidentiel"), good SEO hygiene'],
    ['Docker deployment ready', 'Multi-stage Dockerfile for production builds — clean infra foundation'],
  ];
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: '86EFAC' },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: '86EFAC' },
      left: { style: BorderStyle.SINGLE, size: 4, color: '86EFAC' },
      right: { style: BorderStyle.SINGLE, size: 4, color: '86EFAC' },
      insideH: { style: BorderStyle.SINGLE, size: 4, color: '86EFAC' },
      insideV: { style: BorderStyle.SINGLE, size: 4, color: '86EFAC' },
    },
    rows: [
      row(colorCell('Strength', GREEN, WHITE, true), colorCell('Evidence from Crawl', GREEN, WHITE, true)),
      ...strengths.map(([strength, evidence], i) =>
        new TableRow({
          children: [
            cell(strength, i % 2 === 0 ? 'F0FDF4' : null, '166534', true),
            cell(evidence, i % 2 === 0 ? 'F0FDF4' : null),
          ],
        })
      ),
    ],
  });
}

// ─── SCORES COVER TABLE ──────────────────────────────────────────────────────
function coverScoreTable() {
  return new Table({
    width: { size: 80, type: WidthType.PERCENTAGE },
    borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideH: { style: BorderStyle.NONE }, insideV: { style: BorderStyle.NONE } },
    rows: [
      new TableRow({
        children: ['SEO', 'GEO', 'AEO'].map(dim =>
          new TableCell({
            shading: { fill: scoreColor(scores[dim]), type: ShadingType.CLEAR },
            verticalAlign: VerticalAlign.CENTER,
            margins: { top: 200, bottom: 200, left: 200, right: 200 },
            children: [
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: dim, color: WHITE, bold: true, size: 24 })] }),
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: String(scores[dim]), color: WHITE, bold: true, size: 72 })] }),
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: scoreLabel(scores[dim]), color: WHITE, italics: true, size: 20 })] }),
            ],
          })
        ),
      }),
    ],
  });
}

// ─── EXEC SUMMARY SCORES TABLE ───────────────────────────────────────────────
function execScoreTable() {
  const rows2 = [
    ['SEO', scores.SEO, scoreLabel(scores.SEO), 'Solid content, but meta tags via JS reduce crawlability; no schema markup'],
    ['GEO', scores.GEO, scoreLabel(scores.GEO), 'No named authors, no Organization schema, no factual citations or structured data for AI engines'],
    ['AEO', scores.AEO, scoreLabel(scores.AEO), 'FAQ content exists but no FAQ schema; no HowTo, no Speakable; voice search unoptimized'],
    ['Combined', `${combined}/30`, '', 'Strong content foundation, critical technical gaps to fix'],
  ];
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      left: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      right: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      insideH: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
      insideV: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD },
    },
    rows: [
      row(
        colorCell('Dimension', NAVY, WHITE, true),
        colorCell('Score', NAVY, WHITE, true),
        colorCell('Status', NAVY, WHITE, true),
        colorCell('Key Takeaway', NAVY, WHITE, true),
      ),
      ...rows2.map(([dim, score, status, takeaway]) =>
        new TableRow({
          children: [
            cell(dim, null, DARK_TXT, true),
            colorCell(String(score), status ? scoreColor(scores[dim] || 0) : NAVY, WHITE, true),
            status ? statusCell(status) : cell(''),
            cell(takeaway),
          ],
        })
      ),
    ],
  });
}

// ─── DOCUMENT ────────────────────────────────────────────────────────────────
const doc = new Document({
  styles: {
    default: {
      document: { run: { font: 'Arial', size: 22, color: DARK_TXT } },
    },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', run: { bold: true, size: 36, color: NAVY, font: 'Arial' }, paragraph: { spacing: { before: 400, after: 200 } } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', run: { bold: true, size: 28, color: BLUE, font: 'Arial' }, paragraph: { spacing: { before: 300, after: 150 } } },
    ],
  },
  sections: [
    // ── SECTION 1: COVER ──────────────────────────────────────────────────
    {
      properties: { page: { margin: { top: 720, bottom: 720, left: 720, right: 720 } } },
      children: [
        // Navy background block (top spacer)
        ...Array(6).fill(null).map(() => new Paragraph({
          shading: { fill: NAVY, type: ShadingType.CLEAR },
          spacing: { before: 0, after: 0 },
          children: [new TextRun({ text: ' ', color: NAVY, size: 48 })],
        })),
        // Domain
        new Paragraph({
          alignment: AlignmentType.CENTER,
          shading: { fill: NAVY, type: ShadingType.CLEAR },
          children: [new TextRun({ text: 'bricareau.ca', color: WHITE, bold: true, size: 72, font: 'Arial' })],
          spacing: { before: 200, after: 160 },
        }),
        // Subtitle
        new Paragraph({
          alignment: AlignmentType.CENTER,
          shading: { fill: NAVY, type: ShadingType.CLEAR },
          children: [new TextRun({ text: 'SEO / GEO / AEO Audit Report', color: '93C5FD', size: 36, font: 'Arial' })],
          spacing: { before: 0, after: 120 },
        }),
        // Audit type
        new Paragraph({
          alignment: AlignmentType.CENTER,
          shading: { fill: NAVY, type: ShadingType.CLEAR },
          children: [new TextRun({ text: 'FULL AUDIT', color: WHITE, size: 24, font: 'Arial' })],
          spacing: { before: 0, after: 400 },
        }),
        // Score table
        new Paragraph({
          alignment: AlignmentType.CENTER,
          shading: { fill: NAVY, type: ShadingType.CLEAR },
          children: [new TextRun({ text: '', size: 4 })],
          spacing: { before: 0, after: 0 },
        }),
        coverScoreTable(),
        // Bottom spacers
        ...Array(6).fill(null).map(() => new Paragraph({
          shading: { fill: NAVY, type: ShadingType.CLEAR },
          spacing: { before: 0, after: 0 },
          children: [new TextRun({ text: ' ', color: NAVY, size: 48 })],
        })),
        // Date & attribution
        new Paragraph({
          alignment: AlignmentType.CENTER,
          shading: { fill: NAVY, type: ShadingType.CLEAR },
          children: [new TextRun({ text: '17 juin 2026', color: SLATE, size: 18 })],
          spacing: { before: 0, after: 60 },
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          shading: { fill: NAVY, type: ShadingType.CLEAR },
          children: [new TextRun({ text: 'Claude Skill and Plugin by Alex Labat', color: SLATE, size: 18 })],
          spacing: { before: 0, after: 0 },
        }),
        new Paragraph({ children: [new PageBreak()] }),
      ],
    },

    // ── SECTION 2: REPORT BODY ────────────────────────────────────────────
    {
      headers: {
        default: new Header({
          children: [new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: { bottom: { style: BorderStyle.SINGLE, size: 8, color: NAVY }, top: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideH: { style: BorderStyle.NONE }, insideV: { style: BorderStyle.NONE } },
            rows: [row(cell('bricareau.ca', null, NAVY, true), new TableCell({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: 'SEO / GEO / AEO Audit Report', color: BLUE, bold: true, size: 20 })] })] }))],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: { top: { style: BorderStyle.SINGLE, size: 4, color: GRAY_BD }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideH: { style: BorderStyle.NONE }, insideV: { style: BorderStyle.NONE } },
            rows: [row(
              cell('Claude Skill and Plugin by Alex Labat', null, SLATE),
              new TableCell({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: 'Page ', color: SLATE, size: 18 }), new TextRun({ children: [PageNumber.CURRENT], color: SLATE, size: 18 })] })] })
            )],
          })],
        }),
      },
      children: [
        // ── EXECUTIVE SUMMARY ────────────────────────────────────────────
        h1('Executive Summary'),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          borders: { top: { style: BorderStyle.SINGLE, size: 4, color: '93C5FD' }, bottom: { style: BorderStyle.SINGLE, size: 4, color: '93C5FD' }, left: { style: BorderStyle.SINGLE, size: 4, color: '93C5FD' }, right: { style: BorderStyle.SINGLE, size: 4, color: '93C5FD' }, insideH: { style: BorderStyle.NONE }, insideV: { style: BorderStyle.NONE } },
          rows: [new TableRow({ children: [new TableCell({
            shading: { fill: LIGHT_BG, type: ShadingType.CLEAR },
            margins: { top: 160, bottom: 160, left: 200, right: 200 },
            children: [
              new Paragraph({ children: [new TextRun({ text: 'Bricareau.ca presents a strong content foundation with over 80 indexed pages, 36 French-language blog articles, and dedicated landing pages for every product category and market segment (residential, commercial, HORECA, industrial). The site\'s most urgent gap is the complete absence of structured data (JSON-LD schema), which limits both traditional search rankings and AI engine visibility. Meta tags are currently injected via JavaScript (document.title / querySelector), making them invisible to crawlers that do not execute JS. The site also lacks canonical tags, has an incorrect og:image pointing to a third-party domain, and the html lang attribute is set to "en" despite the site being 100% French. Fixing these three critical technical issues will deliver the highest return with moderate effort.', size: 22, color: DARK_TXT })] }),
            ],
          })] }]),
        }),
        spacer(200),
        execScoreTable(),
        spacer(300),

        // ── PAGES AUDITED ────────────────────────────────────────────────
        h1('Pages Audited'),
        pagesAuditedTable(),
        spacer(300),

        // ── SEO ANALYSIS ─────────────────────────────────────────────────
        h1('SEO Analysis — Score: 6/10'),
        h2('Technical On-Page'),
        signalTable([
          signalRow('Title tag — Global', '"Bricareau - Spécialiste du Traitement d\'Eau au Canada" (58 chars) ✓ Optimal length, contains primary keyword', 'Good'),
          signalRow('Title tag — Inner pages', 'Set via document.title in useEffect() — invisible to JS-disabled crawlers and some bots. Must use static HTML or React Helmet/SSR.', 'Needs Attention'),
          signalRow('Meta description — Global', '152 chars, contains CTA "Protégez votre eau, protégez votre famille." — strong, within optimal range', 'Good'),
          signalRow('Meta description — Inner pages', 'Set via querySelector("meta[name=description]") in useEffect() — same crawlability issue as title tags', 'Needs Attention'),
          signalRow('H1 tags', 'Present and singular on all audited pages (Home1, FAQ, Blog, Contact, ResidentialServices, WhyChooseUs)', 'Good'),
          signalRow('H2/H3 hierarchy', 'H2s used for section headings (content categories, feature names). H3s used for card titles. Logical hierarchy, not stuffed.', 'Good'),
          signalRow('URL structure', 'Clean, keyword-rich French URLs (e.g., /traitement-eau-de-puits, /systemes-de-desinfection-uv). No excessive parameters.', 'Good'),
          signalRow('Canonical tag', 'Completely absent on all pages — critical risk for duplicate content on /adoucissement vs /adoucisseurs', 'Missing'),
          signalRow('robots meta', 'No robots meta noindex found. Pages appear indexable.', 'Good'),
          signalRow('Viewport meta', 'Present: <meta name="viewport" content="width=device-width, initial-scale=1.0">', 'Good'),
          signalRow('Image alt text', 'Most images have descriptive alt text (e.g., "Système de traitement d\'eau résidentiel"). Some generic alts like "Expert en eau par Bricareau" repeated on multiple images.', 'Needs Attention'),
          signalRow('Open Graph: og:title', 'Present in index.html global head', 'Good'),
          signalRow('Open Graph: og:image', 'Points to lovable.dev/opengraph-image-p98pqg.png — a third-party placeholder. Must be replaced with branded Bricareau image.', 'Needs Attention'),
          signalRow('Open Graph: og:url', 'Not set in index.html. Inner pages set it via JS to "https://bricareau.com/..." (wrong domain — should be bricareau.ca)', 'Needs Attention'),
          signalRow('Twitter Card', 'twitter:card="summary_large_image" present. twitter:site="@Lovable" — placeholder, should be Bricareau\'s handle.', 'Needs Attention'),
          signalRow('html lang', 'Set to lang="en" in index.html — site is 100% French. Should be lang="fr-CA".', 'Missing'),
          signalRow('Internal links', 'Rich internal linking via React Router NavLink components. Descriptive anchor text observed throughout.', 'Good'),
        ]),
        spacer(200),
        h2('Content Quality'),
        signalTable([
          signalRow('Word count — Homepage', 'Estimated 800–1,200 words of visible body text. Rich hero copy, features section, testimonials, and CTA blocks.', 'Good'),
          signalRow('Word count — Product pages', 'Pages like ResidentialServices, Filtration, Adoucissement appear to be 1,500+ words based on component count. Pillar content standard met.', 'Good'),
          signalRow('Word count — Blog articles', '36 articles present. Average estimated 600–900 words per article. Covers adoucissement, filtration UV, osmose inverse — good topical breadth.', 'Good'),
          signalRow('Keyword signals', 'Primary topic clearly established on each page. "Traitement d\'eau", "adoucisseur d\'eau", "filtration Québec" appear consistently.', 'Good'),
          signalRow('Content freshness signals', 'No publication or update dates visible on blog articles or product pages. AI engines deprioritize undated content.', 'Missing'),
          signalRow('Readability', 'Content uses bullet points, subheadings, short paragraphs. Readable at F-pattern scan. Good use of numbered stats (25+ years, 20,000 installs).', 'Good'),
          signalRow('Duplicate title risk', '/adoucissement and /adoucisseurs route to the same component — potential duplicate content without canonical tags.', 'Needs Attention'),
        ]),
        spacer(200),
        h2('Structured Data'),
        signalTable([
          signalRow('JSON-LD schema', 'Zero schema markup detected across all audited pages. This is the most critical gap in the entire audit.', 'Missing'),
          signalRow('LocalBusiness schema', 'Not present. Should declare name, address, phone (1-855-264-9328), areaServed (Grand Montréal), openingHours.', 'Missing'),
          signalRow('FAQ schema', 'Not present despite 100+ FAQ entries in faqs.ts data file. Low-effort, high-impact fix.', 'Missing'),
          signalRow('BreadcrumbList schema', 'GlobalBreadcrumbs component exists but renders no JSON-LD schema alongside the visual breadcrumb.', 'Missing'),
          signalRow('Product schema', 'No Product or Service schema on any product page (adoucisseurs, filtres, fontaines, etc.)', 'Missing'),
          signalRow('Organization schema', 'Not declared. Should include brand entity (name, url, logo, sameAs with social profiles).', 'Missing'),
        ]),
        spacer(300),

        // ── GEO ANALYSIS ─────────────────────────────────────────────────
        h1('GEO Analysis — Score: 5/10'),
        body('GEO (Generative Engine Optimization) targets AI-powered search engines — Perplexity, ChatGPT Search, Google AI Overviews, and Gemini. These engines synthesize answers from multiple sources and prefer pages that are factually dense, clearly authored, and structurally transparent.'),
        spacer(100),
        h2('E-E-A-T Assessment'),
        signalTable([
          signalRow('Named authors', 'Blog articles have no visible author attribution. All 36 articles lack bylines. This significantly weakens E-E-A-T for AI engines.', 'Missing'),
          signalRow('About / Company page', '/pourquoi-choisir-bricareau serves as the About page. Contains 25-year history timeline, values, and mission — good E-E-A-T signals.', 'Good'),
          signalRow('Contact information', 'Phone 1 (855) 264-9328 visible on Contact page and linked with tel: href. Email visible (info@bricareau.ca on some pages).', 'Good'),
          signalRow('Trust signals', '20,000+ installations claimed, 4.9/5 star rating displayed, named testimonials present. Good social proof layer.', 'Good'),
          signalRow('Certifications / credentials', 'Techniciens certifiés mentioned in copy but no certification logos, badges, or third-party validation visible on site.', 'Needs Attention'),
          signalRow('Organization schema', 'Not declared. AI engines use this to recognize the brand entity and associate it with expertise signals.', 'Missing'),
        ]),
        spacer(200),
        h2('Content for AI Synthesis'),
        signalTable([
          signalRow('Factual density', 'Site contains specific stats: "25+ années d\'expertise", "20 000 foyers", "4 régions desservies", "99,9% bactéries neutralisées". Good density.', 'Good'),
          signalRow('Clear claims at page top', 'Value proposition stated clearly above fold on homepage and product pages. AI engines can extract the core claim.', 'Good'),
          signalRow('Source citation', 'No external authoritative sources cited in blog articles. Articles are informational but lack references to scientific studies or Quebec water quality reports.', 'Needs Attention'),
          signalRow('Comprehensiveness', 'Blog topics are well-covered (adoucissement myths, fer vs fer ferrique, osmose inverse technologie). FAQ is extensive.', 'Good'),
          signalRow('Entity clarity', 'Brand name "Bricareau" used consistently. Geographic entity "Grand Montréal" and "Québec" named repeatedly — helps AI entity recognition.', 'Good'),
          signalRow('Originality signals', 'Content is informational but lacks original data (e.g., proprietary water quality surveys, local case studies with specific before/after data).', 'Needs Attention'),
        ]),
        spacer(200),
        h2('Technical GEO'),
        signalTable([
          signalRow('Structured data depth', 'No schema of any type detected. AI engines rely heavily on structured data for entity understanding.', 'Missing'),
          signalRow('HTTPS / Security', 'Site should be served over HTTPS in production (standard for any modern deployment). Confirmed deployment target is HTTPS via Docker.', 'Good'),
          signalRow('Clean crawlability', 'SPA built with React + Vite — content is JavaScript-rendered. Googlebot handles this well, but Perplexity and other AI crawlers may not execute JS, missing all meta tags injected via useEffect().', 'Needs Attention'),
          signalRow('SameAs / brand entity links', 'Footer and About page contain no social profile links (LinkedIn, Facebook, Google Business). These strengthen the entity graph for AI engines.', 'Missing'),
          signalRow('Author schema', 'No Author schema or Person schema on blog articles. Required for AI engines to attribute expertise.', 'Missing'),
        ]),
        spacer(300),

        // ── AEO ANALYSIS ─────────────────────────────────────────────────
        h1('AEO Analysis — Score: 4/10'),
        body('AEO (Answer Engine Optimization) targets featured snippets, People Also Ask boxes, and voice search. These require concise direct-answer paragraphs, question-phrased headings, and specific schema types.'),
        spacer(100),
        h2('Featured Snippet Eligibility'),
        signalTable([
          signalRow('Direct answer paragraphs', 'FAQ answers in faqs.ts data file are 1–4 sentences — ideal snippet length. However they are rendered client-side only, not in static HTML.', 'Needs Attention'),
          signalRow('Definition patterns', 'Blog articles contain "X is..." definitions (e.g., "L\'osmose inverse est une technologie..."). Good AEO signal where present.', 'Needs Attention'),
          signalRow('List content for snippets', 'Product pages use bullet-point benefit lists. Blog articles use numbered steps. These could surface as list snippets if schema were added.', 'Needs Attention'),
          signalRow('Table content', 'Comparison tables not detected in audited pages. Adding a comparison table (e.g., adoucisseur vs conditionneur sans sel) would be high-value.', 'Missing'),
        ]),
        spacer(200),
        h2('Structured Answer Formats'),
        signalTable([
          signalRow('FAQ schema', 'Data exists: faqCategories in faqs.ts contains 100+ Q&A pairs. JSON-LD FAQ schema not added. This is the easiest, highest-impact fix on the site.', 'Missing'),
          signalRow('HowTo schema', 'Installation process pages exist but no HowTo markup. Adding steps to /notre-processus would be high-value.', 'Missing'),
          signalRow('Question-phrased H2/H3', 'Product page headings are mostly declarative ("Nos solutions résidentielles"). Blog article titles are question-phrased (e.g., "Faut-il faire bouillir l\'eau filtrée ?") — good for those pages only.', 'Needs Attention'),
          signalRow('Speakable schema', 'SpeakableSpecification not implemented anywhere on the site.', 'Missing'),
        ]),
        spacer(200),
        h2('Voice Search Readiness'),
        signalTable([
          signalRow('Conversational language', 'Blog articles use natural, conversational French phrasing. FAQ page uses direct Q&A format. Good foundation for voice.', 'Good'),
          signalRow('Long-tail question coverage', 'Blog titles directly match long-tail voice queries: "Pourquoi l\'eau de votre bac à sel est-elle sale ?", "Est-ce sécuritaire de boire de l\'eau adoucie ?" — excellent AEO coverage.', 'Good'),
          signalRow('Local signals — NAP', 'Phone number present. Physical address not clearly stated on Contact page (shows routing to sub-forms, no street address). NAP incomplete.', 'Needs Attention'),
          signalRow('Local schema', 'No LocalBusiness schema with areaServed, geo coordinates, or opening hours declared.', 'Missing'),
        ]),
        spacer(300),

        // ── PRIORITY RECOMMENDATIONS ─────────────────────────────────────
        h1('Priority Recommendations'),
        priorityMatrix(),
        spacer(300),

        // ── WHAT\'S WORKING WELL ─────────────────────────────────────────
        h1("What's Working Well"),
        strengthsTable(),
        spacer(300),

        // ── GLOSSARY ─────────────────────────────────────────────────────
        h1('Glossary'),
        h2('SEO — Search Engine Optimization'),
        body('The practice of optimizing a website so that it ranks higher in traditional search engine results pages (Google, Bing). SEO focuses on technical factors (meta tags, schema, speed), content quality (relevance, depth, keyword usage), and authority signals (backlinks, trust).'),
        h2('GEO — Generative Engine Optimization'),
        body('An emerging discipline focused on making content visible and citable by AI-powered search engines such as Perplexity, ChatGPT Search, Google AI Overviews, and Gemini. GEO prioritizes E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), factual density, named authorship, and structured data that helps AI engines understand who is behind the content.'),
        h2('AEO — Answer Engine Optimization'),
        body('The practice of structuring content so that search engines and voice assistants (Google Assistant, Siri, Alexa) can extract a direct, concise answer. AEO relies on question-phrased headings, direct-answer paragraphs (40–60 words), FAQ schema, HowTo schema, and Speakable markup.'),
        spacer(200),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: '— End of Report —', color: SLATE, italics: true, size: 20 })],
          spacing: { before: 400, after: 0 },
        }),
      ],
    },
  ],
});

// ─── WRITE FILE ──────────────────────────────────────────────────────────────
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('seo-audit-bricareau-ca-2026-06-17.docx', buffer);
  console.log('✅ DOCX written: seo-audit-bricareau-ca-2026-06-17.docx');
}).catch(err => {
  console.error('ERROR:', err.message);
  process.exit(1);
});
