const fs = require('fs');
const faqs = JSON.parse(fs.readFileSync('faqs.json', 'utf8'));

const categoriesMap = {
    'adoucissement': {
        title: "Adoucissement de l'eau",
        files: ['Adoucissement', 'Adoucisseur-eau-municipal']
    },
    'eau-de-puits': {
        title: "Traitement de l'eau de puits",
        files: ['EauDePuits', 'Adoucisseurs-eau-de-puits', 'Filtres-deau-de-puits']
    },
    'filtration-maison': {
        title: "Filtration pour toute la maison",
        files: ['Filtres-deau-pour-toute-la-maison', 'Filtre-eau-haute-efficacite']
    },
    'filtration-potable': {
        title: "Eau potable & Osmose Inverse",
        files: ['Filtration', 'Systeme-de-filtration-deau-potable', 'Systemes-de-filtration-deau-sous-evier']
    },
    'desinfection-uv': {
        title: "Désinfection UV",
        files: ['Systemes-de-desinfection-UV']
    },
    'analyses-eau': {
        title: "Analyses d'eau",
        files: ['Tests-Eau']
    },
    'consultation': {
        title: "Consultation & Processus",
        files: ['page-consultation']
    }
};

const categorizedFaqs = [];

for (const [id, cat] of Object.entries(categoriesMap)) {
    const qs = faqs.filter(f => cat.files.includes(f.fileName)).map(f => ({
        q: f.q,
        a: f.a
    }));

    if (qs.length > 0) {
        categorizedFaqs.push({
            id,
            title: cat.title,
            items: qs
        });
    }
}

const tsContent = `export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = ${JSON.stringify(categorizedFaqs, null, 2)};
`;

fs.writeFileSync('src/data/faqs.ts', tsContent);
console.log("src/data/faqs.ts created successfully!");
