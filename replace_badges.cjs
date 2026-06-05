const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const badges = [
  "GUIDE D'EXPERTISE RÉSIDENTIELLE",
  "LE PARCOURS BRICAREAU",
  "ANALYSE COMPARATIVE",
  "Diagnostic de Pureté",
  "DIAGNOSTIC AUTOMATIQUE",
  "L'EXCELLENCE BRICAREAU"
];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  badges.forEach(badge => {
    // Match a span that contains the badge text. We want to replace its background and text color classes.
    // Usually they have bg-blue-600/10 text-blue-600 or bg-blue-100 text-blue-600 or bg-white text-blue-600
    // We'll look for className="..." just before the badge text.
    // Since the exact class string can vary, let's use a regex that matches the span wrapping the badge.
    
    // A regex to find the span before the badge:
    // <span className="[^"]*">\s*BADGE\s*<\/span>
    const regex = new RegExp(`<(span|div) className="([^"]*)">([\\s\\S]*?${badge}[\\s\\S]*?)<\\/\\1>`, 'gi');
    
    content = content.replace(regex, (match, tag, classNames, innerText) => {
      // Replace background and text color
      let newClassNames = classNames
        .replace(/bg-blue-\d+(?:\/\d+)?/g, '')
        .replace(/text-blue-\d+/g, '')
        .replace(/bg-white/g, '') // some might have bg-white
        .replace(/\s+/g, ' ')
        .trim();
      
      newClassNames += ' bg-[#18448F] text-white';
      modified = true;
      return `<${tag} className="${newClassNames}">${innerText}</${tag}>`;
    });
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      replaceInFile(fullPath);
    }
  });
}

walkDir(pagesDir);
