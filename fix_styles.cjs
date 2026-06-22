const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Hp/Desktop/bricareau/src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace translation
    content = content.replace(/lg:-translate-x-1\/2/g, '');

    // Replace via-white/80 with via-white/40
    content = content.replace(/via-white\/80/g, 'via-white/40');

    fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Done");
