const fs = require('fs');
const files = [
  'src/components/Products_Array.tsx',
  'src/data/navigation.ts',
  'src/data/testimonials.ts',
  'src/pages/A.tsx',
  'src/pages/AdoucisseurEauCommercial.tsx',
  'src/pages/B3.tsx',
  'src/pages/NotFound.tsx',
  'src/pages/Solutions.tsx'
];
const replacements = {
  'Ã©': 'é',
  'Ã¨': 'è',
  'Ã ': 'à',
  'Ã¢': 'â',
  'Ãª': 'ê',
  'Ã®': 'î',
  'Ã´': 'ô',
  'Ã»': 'û',
  'Ã§': 'ç',
  'Ã€': 'À',
  'Ã‰': 'É',
  'Ãˆ': 'È',
  'ÃŠ': 'Ê',
  'Â«': '«',
  'Â»': '»',
  'â€™': '’',
  'Å“': 'œ',
  'Ã¯': 'ï'
};
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  for (const [bad, good] of Object.entries(replacements)) {
    content = content.split(bad).join(good);
  }
  // catch any remaining Ã which was mostly likely à
  content = content.split('Ã').join('à');
  fs.writeFileSync(file, content, 'utf8');
}
console.log('Fixed encoding');
