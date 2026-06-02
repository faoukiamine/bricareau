const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Find the first h1
    const h1Regex = /<h1([^>]*)>([\s\S]*?)<\/h1>/i;
    const match = content.match(h1Regex);
    
    if (!match) return false;

    const [fullH1, attributes, innerContent] = match;

    // Skip if already has the specific styles
    if (attributes.includes('font-light') && innerContent.includes('font-bold not-italic')) {
        return false;
    }

    // Extract existing text color
    let textColorClass = 'text-white';
    if (attributes.includes('text-[#18448F]')) textColorClass = 'text-[#18448F]';
    else if (attributes.includes('text-slate-900')) textColorClass = 'text-slate-900';
    else if (attributes.includes('text-gray-900')) textColorClass = 'text-gray-900';
    else if (attributes.includes('text-[#0d1c2e]')) textColorClass = 'text-[#0d1c2e]';
    else if (attributes.includes('text-[#1a5a8a]')) textColorClass = 'text-[#1a5a8a]';
    else if (attributes.includes('text-blue-900')) textColorClass = 'text-blue-900';
    else if (attributes.includes('text-slate-800')) textColorClass = 'text-slate-800';

    // New wrapper classes matching 'Une performance inégalée'
    const newAttributes = ` className="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic ${textColorClass} mb-6 tracking-tight"`;

    let newInnerContent = innerContent;
    
    // Handle dynamic curly braces {t('...')}
    // If the entire content is an expression like {t('title')} we can't easily parse it.
    // We'll just wrap it if it has no span.
    
    if (!newInnerContent.includes('<span')) {
        // Try to highlight the last meaningful word
        // Split keeping delimiters
        const words = newInnerContent.split(/([\s,.'\u2019]+)/);
        
        let targetWordIndex = -1;
        for (let i = words.length - 1; i >= 0; i--) {
            const w = words[i];
            if (!w.match(/^[\s,.'\u2019]+$/) && w.length > 3 && !w.includes('<') && !w.includes('>') && !w.includes('{') && !w.includes('}')) {
                targetWordIndex = i;
                break;
            }
        }
        
        if (targetWordIndex !== -1) {
            words[targetWordIndex] = `<span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg">${words[targetWordIndex]}</span>`;
            newInnerContent = words.join('');
        }
    } else {
        // If it already has a span, update the span's className to the accent style
        const spanRegex = /<span\s+className=["'][^"']*["']\s*>/i;
        if (spanRegex.test(newInnerContent)) {
            newInnerContent = newInnerContent.replace(spanRegex, `<span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg">`);
        } else {
            // Span without className
            newInnerContent = newInnerContent.replace(/<span\s*>/i, `<span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg">`);
        }
    }

    const newH1 = `<h1${newAttributes}>\n    ${newInnerContent.trim()}\n</h1>`;

    const newContent = content.replace(fullH1, newH1);
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    let updatedCount = 0;
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            updatedCount += walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            if (processFile(fullPath)) {
                console.log(`Updated ${file}`);
                updatedCount++;
            }
        }
    }
    return updatedCount;
}

const count = walkDir(pagesDir);
console.log(`Total files updated: ${count}`);
