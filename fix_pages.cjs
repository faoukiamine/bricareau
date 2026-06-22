const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Hp/Desktop/bricareau/src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace flex classes
    content = content.replace(/flex-\[0_0_85%\] md:flex-\[0_0_50%\] lg:flex-\[0_0_33\.333%\]/g, 'flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_33.333%]');
    
    // Replace translation
    content = content.replace(/lg:-translate-x-1\/2/g, '');

    // Replace via-white/80 with via-white/40
    content = content.replace(/via-white\/80/g, 'via-white/40');

    // Add breakpoints to embla
    const emblaRegex = /useEmblaCarousel\(\{\s*loop:\s*true,\s*align:\s*'center',\s*slidesToScroll:\s*1\s*\}\)/g;
    const emblaReplacement = `useEmblaCarousel({ 
        loop: true, 
        align: 'center', 
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 1024px)': { slidesToScroll: 2 }
        }
    })`;
    content = content.replace(emblaRegex, emblaReplacement);

    fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Done");
