const fs = require('fs');

const OLD_ROUTE = '/filtres-de-remplacement';
const NEW_ROUTE = '/filtres-d-eau-de-remplacement';

function replaceInFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.split(OLD_ROUTE).join(NEW_ROUTE);
  fs.writeFileSync(file, content, 'utf8');
}

const files = [
  'src/App.tsx',
  'src/pages/residentiel.tsx',
  'src/pages/Filtres-de-remplacement.tsx',
  'src/data/navigation.ts',
  'src/components/Footer.tsx',
];

for (const file of files) {
  try {
    replaceInFile(file);
    console.log('Updated:', file);
  } catch (e) {
    console.log('Skip:', file, e.message);
  }
}
console.log('Update done');
