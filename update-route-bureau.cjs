const fs = require('fs');

const OLD = '/bureau';
const NEW = '/solutions-de-traitement-d-eau-pour-offices-et-bureaux';

function replaceInFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.split(`"${OLD}"`).join(`"${NEW}"`);
  content = content.split(`'${OLD}'`).join(`'${NEW}'`);
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
console.log('Done');
