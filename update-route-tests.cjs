const fs = require('fs');

function replaceInFile(file, searches) {
  let content = fs.readFileSync(file, 'utf8');
  for (const [search, replace] of searches) {
    content = content.split(search).join(replace);
  }
  fs.writeFileSync(file, content, 'utf8');
}

const replacements = [
  ['/tests-eau#water-test', '/Analyses-et-Tests-d-eau#water-test'],
  ['"/tests-eau"', '"/Analyses-et-Tests-d-eau"'],
  ["'/tests-eau'", "'/Analyses-et-Tests-d-eau'"],
  ['/tests-eau"', '/Analyses-et-Tests-d-eau"'],  // href="..." variants
  ["tests-eau\": \"", "Analyses-et-Tests-d-eau\": \""], // breadcrumbLabels key
  ["\"tests-eau\":", "\"Analyses-et-Tests-d-eau\":"], // breadcrumbLabels key
];

const files = [
  'src/App.tsx',
  'src/utils/breadcrumbLabels.ts',
  'src/pages/Tests-Eau.tsx',
  'src/pages/Temoignages.tsx',
  'src/pages/Systemes-de-desinfection-UV.tsx',
  'src/pages/Services-de-traitement-eau.tsx',
  'src/pages/OurProcess.tsx',
  'src/pages/Filtration.tsx',
  'src/pages/C.tsx',
  'src/pages/B.tsx',
  'src/pages/Adoucisseurs-deau.tsx',
  'src/data/productIndex.ts',
  'src/data/navigation.ts',
  'src/components/Footer.tsx',
  'src/components/ExpertTrustSection.tsx',
  'src/components/ChatWidget.tsx',
  'src/components/BlogLayout.tsx',
];

for (const file of files) {
  try {
    replaceInFile(file, replacements);
    console.log('Updated:', file);
  } catch (e) {
    console.log('Skip:', file, e.message);
  }
}
console.log('Done');
