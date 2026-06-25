const fs = require('fs');
const sitemapPath = 'c:/Users/Hp/Desktop/bricareau/public/sitemap.xml';
let xml = fs.readFileSync(sitemapPath, 'utf8');

const cities = [
    'rive-nord', 'rive-sud', 'laurentides', 'lanaudiere', 'monteregie', 'estrie', 'outaouais', 'mauricie', 'gaspesie', 'cote-nord',
    'montreal', 'laval', 'longueuil', 'brossard', 'saint-lambert', 'verdun', 'lasalle', 'anjou', 'montreal-nord', 'saint-leonard', 'cote-saint-luc', 'dollard-des-ormeaux', 'pointe-claire', 'kirkland', 'beaconsfield', 'dorval', 'lachine', 'mont-royal', 'westmount', 'outremont',
    'blainville', 'boisbriand', 'bois-des-filion', 'deux-montagnes', 'lorraine', 'mirabel', 'rosemere', 'sainte-therese', 'saint-eustache', 'terrebonne', 'mascouche', 'repentigny', 'l-assomption', 'joliette', 'rawdon', 'saint-jerome', 'sainte-agathe-des-monts', 'sainte-adele', 'mont-tremblant', 'saint-sauveur', 'lachute', 'argenteuil',
    'saint-bruno-de-montarville', 'saint-hubert', 'greenfield-park', 'boucherville', 'varennes', 'sainte-julie', 'mcmasterville', 'beloeil', 'saint-basile-le-grand', 'chambly', 'carignan', 'chateauguay', 'salaberry-de-valleyfield', 'vaudreuil-dorion', 'beauharnois', 'sorel-tracy', 'saint-jean-sur-richelieu', 'granby', 'saint-hyacinthe', 'huntingdon',
    'quebec', 'levis', 'sainte-foy', 'beauport', 'charlesbourg', 'loretteville', 'l-ancienne-lorette', 'sillery', 'cap-rouge', 'val-belair', 'donnacona', 'saint-raymond', 'portneuf',
    'sherbrooke', 'magog', 'lac-megantic', 'coaticook', 'windsor', 'asbestos', 'val-des-sources', 'bromptonville', 'waterville',
    'gatineau', 'hull', 'aylmer', 'buckingham', 'masson-angers', 'cantley', 'chelsea', 'pontiac', 'maniwaki',
    'saguenay', 'chicoutimi', 'jonquiere', 'la-baie', 'alma', 'saint-felicien', 'roberval', 'dolbeau-mistassini', 'metabetchouan-lac-a-la-croix',
    'trois-rivieres', 'shawinigan', 'grand-mere', 'la-tuque', 'drummondville', 'victoriaville', 'plessisville', 'becancour', 'nicolet',
    'rimouski', 'riviere-du-loup', 'matane', 'amqui', 'mont-joli', 'temiscouata-sur-le-lac', 'pohenegamook', 'cabano',
    'gaspe', 'perce', 'chandler', 'new-carlisle', 'bonaventure', 'sainte-anne-des-monts', 'murdochville', 'les-iles-de-la-madeleine', 'cap-aux-meules',
    'sept-iles', 'baie-comeau', 'port-cartier', 'havre-saint-pierre', 'natashquan', 'forestville', 'tadoussac',
    'rouyn-noranda', 'val-d-or', 'amos', 'la-sarre', 'malartic', 'senneterre', 'ville-marie',
    'chibougamau', 'chapais', 'lebel-sur-quevillon', 'matagami', 'radisson', 'chisasibi', 'kuujjuaq'
];

let newUrls = `  <!-- ================================================ -->\n  <!--  PAGES DE VILLES (SEO LOCAL)                     -->\n  <!-- ================================================ -->\n\n`;

for (const city of cities) {
    newUrls += `  <url>\n    <loc>https://www.bricareau.ca/traitement-eau/${city}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n\n`;
}

xml = xml.replace('</urlset>', newUrls + '</urlset>');
fs.writeFileSync(sitemapPath, xml);
console.log('Sitemap updated with ' + cities.length + ' cities.');
