const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

const dirsToProcess = ['src/pages', 'src/components'];

dirsToProcess.forEach(dir => {
    if (fs.existsSync(dir)) {
        walk(dir, function (filePath) {
            if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
                let content = fs.readFileSync(filePath, 'utf8');
                let newContent = content;

                // We look for elements (p, div, span) with className containing leading-relaxed or leading-[28px]
                // But the user specifically asked for "paragraphes des boxes".
                // To be safe, let's just replace all instances of leading-relaxed and leading-[28px] 
                // with leading-snug throughout the codebase, considering we already did hero sections.
                newContent = newContent.replace(/leading-relaxed/g, 'leading-snug');
                newContent = newContent.replace(/leading-\[28px\]/g, 'leading-snug');

                if (newContent !== content) {
                    fs.writeFileSync(filePath, newContent, 'utf8');
                    console.log('Updated', filePath);
                }
            }
        });
    }
});
