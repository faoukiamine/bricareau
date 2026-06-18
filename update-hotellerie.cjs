const fs = require('fs');

const OLD_ROUTE = '/hotellerie-restauration';
const NEW_ROUTE = '/solutions-de-traitement-et-filtration-pour-hotels-et-restaurants';

function replaceInFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.split(`"${OLD_ROUTE}"`).join(`"${NEW_ROUTE}"`);
  content = content.split(`'${OLD_ROUTE}'`).join(`'${NEW_ROUTE}'`);
  fs.writeFileSync(file, content, 'utf8');
}

const files = [
  'src/App.tsx',
  'src/pages/Home1.tsx',
  'src/data/navigation.ts',
];

for (const file of files) {
  try {
    replaceInFile(file);
    console.log('Updated:', file);
  } catch (e) {
    console.log('Skip:', file, e.message);
  }
}
console.log('Update src done');
