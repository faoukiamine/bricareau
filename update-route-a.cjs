const fs = require('fs');

function replaceInFile(file, search, replace) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.split(search).join(replace);
  fs.writeFileSync(file, content, 'utf8');
}

const files = [
  'src/App.tsx',
  'src/pages/NotFound.tsx',
  'src/pages/HotellerieRestauration.tsx',
  'src/pages/B.tsx',
  'src/pages/Adoucisseurs-deau.tsx',
  'src/data/testimonials.ts',
  'src/data/navigation.ts',
  'src/components/Products_Array.tsx',
  'src/components/Footer.tsx',
];

for (const file of files) {
  try {
    replaceInFile(file, '"/A"', '"/adoucisseurs-d-eau"');
    replaceInFile(file, "'/A'", "'/adoucisseurs-d-eau'");
    replaceInFile(file, '"/A"', '"/adoucisseurs-d-eau"'); // catch any trailing space variants
    console.log('Updated:', file);
  } catch (e) {
    console.log('Skip:', file, e.message);
  }
}
console.log('Done');
