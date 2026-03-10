const fs = require('fs');
let code = fs.readFileSync('src/data/blogCategories.ts', 'utf8');

const prefixMatch = code.match(/export const categories = \[\r?\n/);
if (!prefixMatch) throw new Error("Could not find start of categories array");
const prefixEnd = prefixMatch.index + prefixMatch[0].length;
const prefix = code.slice(0, prefixEnd);

const suffixMatch = code.match(/\r?\n\];\r?\n?$/);
if (!suffixMatch) throw new Error("Could not find end of categories array");
const suffixStart = suffixMatch.index;
const suffix = code.slice(suffixStart);

const middle = code.slice(prefixEnd, suffixStart);

// Since the file is well formatted, we can match each top-level object.
// A top-level object starts with `    {` and ends with `    }`
// We can use a regex or split by `\n    },\n`
const categoryBlocks = middle.split(/\r?\n    \},\r?\n/);

const blocks = categoryBlocks.map((block, i) => {
    let str = block;
    if (i !== categoryBlocks.length - 1) str = str + '\n    }';
    return str;
});

const categoriesWithTitles = blocks.map(block => {
    const titleMatch = block.match(/title:\s*"([^"]+)"/);
    if (!titleMatch) throw new Error("Could not find title in block: " + block.slice(0, 50));

    // Custom clean up for sorting
    let sortName = titleMatch[1].toLowerCase();
    sortName = sortName.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove accents

    return {
        title: sortName,
        originalTitle: titleMatch[1],
        content: block
    };
});

categoriesWithTitles.sort((a, b) => a.title.localeCompare(b.title));

const newMiddle = categoriesWithTitles.map(c => c.content).join(',\n');

fs.writeFileSync('src/data/blogCategories.ts', prefix + newMiddle + suffix);

console.log("Sorted categories:");
categoriesWithTitles.forEach(c => console.log(c.originalTitle));
