const fs = require('fs');

function replaceInFile(file, replacements) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [search, replace] of Object.entries(replacements)) {
        content = content.split(search).join(replace);
    }
    fs.writeFileSync(file, content, 'utf8');
}

replaceInFile('src/data/testimonials.ts', {
    '"/filtres-deau"': '"/filtration"',
    '"/filtres-deau-pour-toute-la-maison"': '"/filtration"'
});

replaceInFile('src/data/productIndex.ts', {
    '"/machines-a-cafe-entreprises"': '"/entreprises"',
    '"/filtres-deau-pour-toute-la-maison"': '"/filtration"',
    '"/machines-a-glace-entreprises"': '"/entreprises"'
});

replaceInFile('src/data/navigation.ts', {
    '"/filtres-deau-pour-toute-la-maison"': '"/filtration"',
    '"/filtres-deau"': '"/filtration"',
    '"/guides"': '"/faq"',
    '"/machines-a-glace-entreprises"': '"/entreprises"',
    '"/machines-a-cafe-entreprises"': '"/entreprises"'
});

replaceInFile('src/pages/Entreprises.tsx', {
    '"/guides"': '"/faq"'
});

replaceInFile('src/pages/Filtration.tsx', {
    '"/filtres-deau-pour-toute-la-maison"': '"/filtration"'
});

replaceInFile('src/components/Products_Array.tsx', {
    '"/filtres-deau"': '"/filtration"'
});

replaceInFile('src/components/ChatWidget.tsx', {
    '"/solutions"': '"/"'
});

console.log('Links updated');
