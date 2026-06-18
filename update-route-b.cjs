const fs = require('fs');

const NEW_ROUTE = '/Systemes-de-filtration-d-eau-specialises-pour-toute-la-maison';

function replaceInFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.split('"/B"').join(`"${NEW_ROUTE}"`);
  content = content.split("'/B'").join(`'${NEW_ROUTE}'`);
  fs.writeFileSync(file, content, 'utf8');
}

const files = [
  'src/App.tsx',
  'src/data/testimonials.ts',
  'src/data/navigation.ts',
  'src/components/Products_Array.tsx',
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
console.log('Done');
