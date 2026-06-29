const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/Adoucisseurs-deau.tsx',
  'src/pages/Systemes-de-filtration-deau-specialises.tsx',
  'src/pages/Systemes-de-filtration-deau-sous-l-evier.tsx',
  'src/pages/Systemes-de-desinfection-UV.tsx',
  'src/pages/fontaines-d-eau-residentielles.tsx'
];

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Find the 'Découvrir les produits associés' section
  const keyword = 'Découvrir les produits associés';
  const keywordIdx = content.indexOf(keyword);
  
  if (keywordIdx === -1) {
    console.log(`[SKIP] ${file} - 'Découvrir les produits associés' not found.`);
    return;
  }

  // Traverse back to find the starting <section
  let startIdx = content.lastIndexOf('<section', keywordIdx);
  
  // See if there's a comment right before it
  const beforeSection = content.substring(0, startIdx);
  const commentIdx = beforeSection.lastIndexOf('{/* Section Associated Products */}');
  if (commentIdx !== -1 && (startIdx - commentIdx) < 100) {
      startIdx = commentIdx;
  }

  // Find the matching </section>
  let endIdx = content.indexOf('</section>', keywordIdx);
  if (endIdx === -1) {
    console.log(`[ERROR] ${file} - closing </section> not found for associated products.`);
    return;
  }
  endIdx += '</section>'.length;
  
  // Extract the section
  const sectionContent = content.substring(startIdx, endIdx) + '\n\n';
  
  // Remove the section from original content
  content = content.substring(0, startIdx) + content.substring(endIdx);
  
  // Find the 'Ressources' section
  const resKeyword = '>Ressources</span>';
  let resKeywordIdx = content.indexOf(resKeyword);
  if (resKeywordIdx === -1) {
      console.log(`[ERROR] ${file} - 'Ressources' section not found.`);
      return;
  }
  
  // Traverse back to find the starting <section of Ressources
  let resStartIdx = content.lastIndexOf('<section', resKeywordIdx);
  
  // Insert the associated products section right before the Ressources section
  content = content.substring(0, resStartIdx) + sectionContent + content.substring(resStartIdx);
  
  // Write back to file
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`[SUCCESS] ${file} - Moved associated products before ressources.`);
});
