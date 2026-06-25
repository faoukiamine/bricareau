const fs = require('fs');
const file = 'c:/Users/Hp/Desktop/bricareau/src/pages/Adoucisseurs-deau.tsx';
const content = fs.readFileSync(file, 'utf8');

const marker0 = content.indexOf('id="aeo-adoucisseur"');
const idx0 = content.lastIndexOf('<section', marker0);
const idx1 = content.indexOf('{/* 2. Diagnostic Impact - Bento Grid */}');
const idx2 = content.indexOf('{/* 4. Selection Guide: The Bridge - Copied from Adoucisseur-eau-municipal */}');

if (idx0 !== -1 && idx1 !== -1 && idx2 !== -1) {
    const beforeAEO = content.substring(0, idx0);
    const blockAEO = content.substring(idx0, idx1);
    const blockDiagnostic = content.substring(idx1, idx2);
    const afterDiagnostic = content.substring(idx2);

    const newContent = beforeAEO + blockDiagnostic + blockAEO + afterDiagnostic;

    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Successfully swapped!');
} else {
    console.log('Markers not found', idx0, idx1, idx2);
}
