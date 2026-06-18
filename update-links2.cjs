const fs = require('fs');

function replaceInFile(file, replacements) {
  let content = fs.readFileSync(file, 'utf8');
  for (const [search, replace] of Object.entries(replacements)) {
    content = content.split(search).join(replace);
  }
  fs.writeFileSync(file, content, 'utf8');
}

const deadLinks = {
  '"/residentiel"': '"/hotellerie-restauration"',
  '"/commercial-industriel"': '"/industriel"',
  '"/adoucisseurs-eau-commerciaux"': '"/A"',
  '"/adoucisseurs-eau-industriel"': '"/industriel"',
  '"/osmose-inverse-industrielle"': '"/industriel"',
  '"/desinfection-uv-industrielle"': '"/systemes-de-desinfection-uv"',
  '"/refroidisseurs-eau-entreprises"': '"/entreprises"',
  '"/systeme-de-filtration-deau-potable"': '"/filtration"',
  '"/filtre-eau-haute-efficacite"': '"/filtration"',
  '"/filtration-eau-potable"': '"/filtration"',
};

const singleQuoteDead = {
  "'/residentiel'": "'/hotellerie-restauration'",
  "'/commercial-industriel'": "'/industriel'",
  "'/adoucisseurs-eau-commerciaux'": "'/A'",
  "'/adoucisseurs-eau-industriel'": "'/industriel'",
  "'/osmose-inverse-industrielle'": "'/industriel'",
  "'/desinfection-uv-industrielle'": "'/systemes-de-desinfection-uv'",
  "'/refroidisseurs-eau-entreprises'": "'/entreprises'",
  "'/systeme-de-filtration-deau-potable'": "'/filtration'",
  "'/filtre-eau-haute-efficacite'": "'/filtration'",
  "'/filtration-eau-potable'": "'/filtration'",
};

const filesToUpdate = [
  'src/data/navigation.ts',
  'src/data/testimonials.ts',
  'src/data/productIndex.ts',
  'src/components/Footer.tsx',
  'src/components/ChatWidget.tsx',
  'src/components/Products_Array.tsx',
  'src/pages/Filtration.tsx',
  'src/pages/Entreprises.tsx',
  'src/pages/HotellerieRestauration.tsx',
  'src/pages/B.tsx',
  'src/pages/B3.tsx',
  'src/pages/A.tsx',
  'src/pages/C.tsx',
];

for (const file of filesToUpdate) {
  try {
    replaceInFile(file, { ...deadLinks, ...singleQuoteDead });
    console.log('Updated:', file);
  } catch (e) {
    // file may not exist, skip
  }
}

console.log('Done');
