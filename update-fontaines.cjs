const fs = require('fs');

const OLD_ROUTE = '/fontaines';
const NEW_ROUTE = '/fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche';

function replaceInFile(file, customReplacements = null) {
  let content = fs.readFileSync(file, 'utf8');
  const initialContent = content;

  if (customReplacements) {
    for (const [search, replace] of Object.entries(customReplacements)) {
      content = content.split(search).join(replace);
    }
  } else {
    // Specifically search for exact path match to avoid matching partials like /fontaines-deau-modernes
    content = content.split(`"${OLD_ROUTE}"`).join(`"${NEW_ROUTE}"`);
    content = content.split(`'${OLD_ROUTE}'`).join(`'${NEW_ROUTE}'`);
    content = content.split(`href="${OLD_ROUTE}"`).join(`href="${NEW_ROUTE}"`);
    content = content.split(`https://www.bricareau.ca${OLD_ROUTE}<`).join(`https://www.bricareau.ca${NEW_ROUTE}<`); // for sitemap
  }
  
  if (content !== initialContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
  }
}

// 1. Update the import and route specifically in App.tsx
try {
  replaceInFile('src/App.tsx', {
    'import Fontaines from "./pages/Fontaines";': 'import Fontaines from "./pages/fontaines-d-eau-residentielles";',
    [`<Route path="${OLD_ROUTE}"`]: `<Route path="${NEW_ROUTE}"`
  });
} catch (e) {}

// 2. Update routes in other potential files
const files = [
  'src/data/navigation.ts',
  'src/data/productIndex.ts',
  'src/data/testimonials.ts',
  'src/components/Footer.tsx',
  'src/pages/residentiel.tsx',
  'public/sitemap.xml'
];

for (const file of files) {
  try {
    if (fs.existsSync(file)) {
      replaceInFile(file);
    }
  } catch (e) {
    console.log('Skip:', file, e.message);
  }
}
console.log('Update done');
