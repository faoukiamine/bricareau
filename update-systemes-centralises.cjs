const fs = require('fs');

const OLD_ROUTE = '/systemes-centralises';
const NEW_ROUTE = '/systemes-de-filtration-d-eau-centralises';

function replaceInFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  const initialContent = content;
  content = content.split(`"${OLD_ROUTE}"`).join(`"${NEW_ROUTE}"`);
  content = content.split(`'${OLD_ROUTE}'`).join(`'${NEW_ROUTE}'`);
  content = content.split(`href="${OLD_ROUTE}"`).join(`href="${NEW_ROUTE}"`);
  content = content.split(`https://www.bricareau.ca${OLD_ROUTE}<`).join(`https://www.bricareau.ca${NEW_ROUTE}<`);
  content = content.split(`https://bricareau.com${OLD_ROUTE}`).join(`https://bricareau.com${NEW_ROUTE}`);
  
  if (content !== initialContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
  }
}

const files = [
  'src/App.tsx',
  'src/pages/Bureau.tsx',
  'src/pages/SystemesCentralises.tsx',
  'src/data/navigation.ts',
  'src/components/Footer.tsx',
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
