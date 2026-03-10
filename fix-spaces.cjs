const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
let count = 0;
const regex = /[\x0B\x0C\xA0\u0085\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/g;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.match(regex)) {
        content = content.replace(regex, ' ');
        fs.writeFileSync(file, content, 'utf8');
        count++;
    }
});

console.log('Fixed ' + count + ' files');
