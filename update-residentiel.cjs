const fs = require('fs');

const NEW_ROUTE = '/solutions-d-adoucissement-de-filtration-et-de-purification-d-eau-residentielles';

function replaceInFile(file, replacements) {
  let content = fs.readFileSync(file, 'utf8');
  for (const [search, replace] of Object.entries(replacements)) {
    content = content.split(search).join(replace);
  }
  fs.writeFileSync(file, content, 'utf8');
}

replaceInFile('src/App.tsx', {
  'import ResidentialServices from "./pages/ResidentialServices";': 'import ResidentialServices from "./pages/residentiel";',
  '<Route path="/residentiel" element={<ResidentialServices />} />': `<Route path="${NEW_ROUTE}" element={<ResidentialServices />} />`
});

replaceInFile('src/pages/Home1.tsx', {
  '"/residentiel"': `"${NEW_ROUTE}"`
});

replaceInFile('src/data/navigation.ts', {
  '"/residentiel"': `"${NEW_ROUTE}"`
});

replaceInFile('public/sitemap.xml', {
  'https://www.bricareau.ca/residentiel': `https://www.bricareau.ca${NEW_ROUTE}`
});

console.log('Update done');
