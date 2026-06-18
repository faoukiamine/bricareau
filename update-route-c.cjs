const fs = require('fs');

const NEW_ROUTE = '/Stations-d-eau-potables-sous-l-evier-de-la-cuisine';

function replaceInFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.split('"/C"').join(`"${NEW_ROUTE}"`);
  content = content.split("'/C'").join(`'${NEW_ROUTE}'`);
  fs.writeFileSync(file, content, 'utf8');
}

const files = [
  'src/App.tsx',
  'src/pages/Systemes-de-filtration-deau-specialises.tsx',
  'src/pages/Filtration.tsx',
  'src/data/testimonials.ts',
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
console.log('Done');
