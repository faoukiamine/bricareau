import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import TestimonialsSection from "@/components/TestimonialsSection";

// Villes cibles SEO (Toutes les régions du Québec)
const villesApprouvees = [
    "rive-nord", "rive-sud", "laurentides", "lanaudiere", "monteregie", "estrie", "outaouais", "mauricie", "gaspesie", "cote-nord",
    "montreal", "laval", "longueuil", "brossard", "saint-lambert", "verdun", "lasalle", "anjou", "montreal-nord", "saint-leonard", "cote-saint-luc", "dollard-des-ormeaux", "pointe-claire", "kirkland", "beaconsfield", "dorval", "lachine", "mont-royal", "westmount", "outremont",
    "blainville", "boisbriand", "bois-des-filion", "deux-montagnes", "lorraine", "mirabel", "rosemere", "sainte-therese", "saint-eustache", "terrebonne", "mascouche", "repentigny", "l-assomption", "joliette", "rawdon", "saint-jerome", "sainte-agathe-des-monts", "sainte-adele", "mont-tremblant", "saint-sauveur", "lachute", "argenteuil",
    "saint-bruno-de-montarville", "saint-hubert", "greenfield-park", "boucherville", "varennes", "sainte-julie", "mcmasterville", "beloeil", "saint-basile-le-grand", "chambly", "carignan", "chateauguay", "salaberry-de-valleyfield", "vaudreuil-dorion", "beauharnois", "sorel-tracy", "saint-jean-sur-richelieu", "granby", "saint-hyacinthe", "huntingdon",
    "quebec", "levis", "sainte-foy", "beauport", "charlesbourg", "loretteville", "l-ancienne-lorette", "sillery", "cap-rouge", "val-belair", "donnacona", "saint-raymond", "portneuf",
    "sherbrooke", "magog", "lac-megantic", "coaticook", "windsor", "asbestos", "val-des-sources", "bromptonville", "waterville",
    "gatineau", "hull", "aylmer", "buckingham", "masson-angers", "cantley", "chelsea", "pontiac", "maniwaki",
    "saguenay", "chicoutimi", "jonquiere", "la-baie", "alma", "saint-felicien", "roberval", "dolbeau-mistassini", "metabetchouan-lac-a-la-croix",
    "trois-rivieres", "shawinigan", "grand-mere", "la-tuque", "drummondville", "victoriaville", "plessisville", "becancour", "nicolet",
    "rimouski", "riviere-du-loup", "matane", "amqui", "mont-joli", "temiscouata-sur-le-lac", "pohenegamook", "cabano",
    "gaspe", "perce", "chandler", "new-carlisle", "bonaventure", "sainte-anne-des-monts", "murdochville", "les-iles-de-la-madeleine", "cap-aux-meules",
    "sept-iles", "baie-comeau", "port-cartier", "havre-saint-pierre", "natashquan", "forestville", "tadoussac",
    "rouyn-noranda", "val-d-or", "amos", "la-sarre", "malartic", "senneterre", "ville-marie",
    "chibougamau", "chapais", "lebel-sur-quevillon", "matagami", "radisson", "chisasibi", "kuujjuaq"
];

const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const formatVilleName = (ville: string) => {
    return ville.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const TraitementEauVille = () => {
    const { ville } = useParams<{ ville: string }>();
    const normalizedVille = ville ? removeAccents(ville.toLowerCase().trim()).replace(/%20| |'/g, '-') : '';
    const villeFormatted = normalizedVille ? formatVilleName(normalizedVille) : '';

    useEffect(() => {
        if (villeFormatted) {
            document.title = `Traitement d'eau à ${villeFormatted} | Bricareau Spécialiste`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute("content", `Expert en traitement d'eau à ${villeFormatted}. Adoucisseurs, osmose inverse et systèmes UV. Installation professionnelle et analyse d'eau gratuite à domicile.`);
            }
        }
    }, [villeFormatted]);

    if (!normalizedVille || !villesApprouvees.includes(normalizedVille)) {
        return (
            <div className="min-h-screen pt-40 pb-20 bg-slate-50 text-center font-sans">
                <Header />
                <h1 className="text-3xl font-bold text-slate-900 mb-6">Service indisponible pour "{ville}"</h1>
                <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                    Nous n'avons pas encore de page dédiée pour cette ville, mais nous desservons probablement votre région !
                </p>
                <Link to="/consultation" className="inline-flex h-14 items-center justify-center rounded-full bg-[#18448F] px-8 text-sm font-bold text-white shadow-lg">
                    Demander une consultation
                </Link>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-slate-900 font-sans">
            <Header />
            <main>
                <section className="pt-32 pb-16 bg-[#18448F] text-white">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <span className="inline-block px-4 py-1.5 bg-[#8CC63F] text-white rounded-full text-xs font-black uppercase tracking-widest mb-6">
                            SERVICE LOCAL
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            L'expert du traitement d'eau à {villeFormatted}
                        </h1>
                        <p className="text-xl text-blue-100 font-light mb-8 leading-relaxed">
                            Bricareau Spécialiste de l'Eau intervient directement chez vous à {villeFormatted} pour résoudre vos problèmes de calcaire, de fer, ou de bactéries avec des solutions de filtration sur-mesure.
                        </p>
                        <Link 
                            to="/consultation" 
                            className="inline-flex h-14 items-center justify-center rounded-full bg-[#8CC63F] px-8 text-sm font-bold text-white shadow-lg hover:bg-[#7ab133] transition-colors"
                        >
                            Obtenir une analyse d'eau gratuite
                        </Link>
                    </div>
                </section>

                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <h2 className="text-3xl font-bold text-center text-[#18448F] mb-16">
                            Nos solutions les plus populaires à {villeFormatted}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Adoucisseurs d'eau</h3>
                                <p className="text-slate-600 mb-6">Éliminez le calcaire pour protéger votre plomberie et retrouver une peau douce.</p>
                                <Link to="/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire" className="text-blue-600 font-bold hover:underline">En savoir plus &rarr;</Link>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Osmose Inverse</h3>
                                <p className="text-slate-600 mb-6">Purifiez votre eau potable et dites adieu aux bouteilles en plastique grâce à nos systèmes sous évier.</p>
                                <Link to="/Stations-d-eau-potables-sous-l-evier-de-la-cuisine" className="text-blue-600 font-bold hover:underline">En savoir plus &rarr;</Link>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Systèmes UV & Puits</h3>
                                <p className="text-slate-600 mb-6">Sécurisez votre eau de puits contre les bactéries et les contaminants nocifs comme le fer ou le manganèse.</p>
                                <Link to="/systemes-de-desinfection-uv" className="text-blue-600 font-bold hover:underline">En savoir plus &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <TestimonialsSection />
                <ConsultationFormSection />
            </main>
            <Footer />
        </div>
    );
};

export default TraitementEauVille;
