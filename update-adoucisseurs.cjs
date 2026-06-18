const fs = require('fs');

const OLD_ROUTE = '/adoucisseurs-d-eau';
const NEW_ROUTE = '/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire';

function replaceInFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  const initialContent = content;
  content = content.split(`"${OLD_ROUTE}"`).join(`"${NEW_ROUTE}"`);
  content = content.split(`'${OLD_ROUTE}'`).join(`'${NEW_ROUTE}'`);
  // also handle href="..." just in case
  content = content.split(`href="${OLD_ROUTE}"`).join(`href="${NEW_ROUTE}"`);
  content = content.split(`https://www.bricareau.ca${OLD_ROUTE}`).join(`https://www.bricareau.ca${NEW_ROUTE}`);
  
  if (content !== initialContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
  }
}

const files = [
  'src/App.tsx',
  'src/pages/NotFound.tsx',
  'src/pages/HotellerieRestauration.tsx',
  'src/pages/Systemes-de-filtration-deau-specialises.tsx',
  'src/pages/Adoucisseurs-deau.tsx',
  'src/data/testimonials.ts',
  'src/data/navigation.ts',
  'src/components/Products_Array.tsx',
  'src/components/Footer.tsx',
  'public/sitemap.xml',
  'src/pages/residentiel.tsx' // just in case
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
