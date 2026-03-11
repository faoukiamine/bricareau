const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

function findTsxFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            findTsxFiles(filePath, fileList);
        } else if (file.endsWith('.tsx')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const tsxFiles = findTsxFiles(pagesDir);
const allFaqs = [];

for (const file of tsxFiles) {
    const content = fs.readFileSync(file, 'utf8');
    // Look for \{ q: "...", a: "..." \} or similar multiline structures
    // A robust regex is tricky with arbitrary formatting, so we'll look for blocks that have 'q:' and 'a:' properties
    const regex = /\{\s*q\s*:\s*(["'])(.+?)\1,\s*a\s*:\s*(["'])([\s\S]+?)\3\s*\}/g;

    let match;
    while ((match = regex.exec(content)) !== null) {
        const question = match[2];
        const answer = match[4];

        // Clean up answer if it has newlines or multiple spaces within the string
        const cleanAnswer = answer.replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();

        // Store with filename without path
        allFaqs.push({
            fileName: path.basename(file, '.tsx'),
            q: question,
            a: cleanAnswer
        });
    }
}

fs.writeFileSync('faqs.json', JSON.stringify(allFaqs, null, 2));
console.log(`Extracted ${allFaqs.length} FAQs to faqs.json`);
