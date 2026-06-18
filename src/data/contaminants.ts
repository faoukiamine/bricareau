// Données extraites de Santé Canada

export const microBiologiques = [
    {
        "contaminant": "Coliformes totaux (2020)",
        "recommandation": "CMA d'aucun microorganisme détectable par 100 mL d'eau à la sortie d'une usine de traitement et dans l'eau souterraine non-désinfectée à sa sortie du puits",
        "sources": "Matières fécales humaines et animales; naturellement présents dans l'eau, les sols et la végétation",
        "sante": "Les coliformes totaux ne sont pas utilisés comme indicateurs des effets possibles sur la santé des microorganismes pathogènes; ils sont utilisés comme outil pour déterminer l'efficacité du système de traitement de l'eau et pour indiquer les changements de qualité de l'eau dans le réseau de distribution."
    },
    {
        "contaminant": "Escherichia coli (E. coli) (2020)",
        "recommandation": "CMA : Aucun microorganisme détectable par 100 mL",
        "sources": "Matières fécales humaines et animales",
        "sante": "E. coli est un indicateur de contamination fécale qui est utilisé comme outil pour vérifier la qualité de l'eau potable. Sa détection indique une contamination fécale récente et que des micro-organismes capables de provoquer des maladies gastro-intestinales peuvent également être présents. Les agents pathogènes présents dans les matières fécales humaines et animales constituent le plus grand danger immédiat pour la santé publique."
    },
    {
        "contaminant": "Protozoaires entériques : Giardia et Cryptosporidium (2019)       Parlons d'eau - Les protozoaires entériques (Giardia et Cryptosporidium) dans l'eau potable",
        "recommandation": "Objectif de traitement :       Élimination et (ou) inactivation d'au moins 3 log des kystes et des oocystes",
        "sources": "Matières fécales humaines et animales",
        "sante": "Giardia et Cryptosporidium sont généralement associés à des troubles gastro-intestinaux (nausées, vomissements, diarrhée). Les effets moins courants sur la santé varient. Les infections de Giardia peuvent inclure des dérangements gastro-intestinaux de longue durée, des malaises et des troubles de l'absorption. Chez les individus immuno-déficients, Les infections de Cryptosporidium peuvent avoir des effets à l'extérieur du tractus gastrointestinal, notamment dans les poumons, dans l'oreille moyenne et dans le pancréas."
    },
    {
        "contaminant": "Turbidité (2012)",
        "recommandation": "Limites de traitement de l'eau issue des unités ou des filtres individuels :                filtration conventionnelle ou directe : ≤ 0,3 UTNTableau 1 note de bas de page 1         filtration lente sur sable et filtration à diatomées ≤ 1,0 UTNTableau 1 note de bas de page 2         filtration sur membrane ≤ 0,1 UTNTableau 1 note de bas de page 3",
        "sources": "Particules d'origine naturelle :                Matières inorganiques : argile, limon, précipités métalliques         Matières organiques : débris végétaux et animaux décomposés, microorganismes",
        "sante": "Les particules peuvent héberger des microorganismes qu'elles protègent de la désinfection et piéger des métaux lourds et des biocides; une turbidité élevée ou changeante de l'eau filtrée peut indiquer un problème dans le procédé de traitement de l'eau et la possibilité d'un risque accru d'agents pathogènes dans l'eau traitée."
    },
    {
        "contaminant": "Virus entériques (2019)       Parlons d'eau – Les virus entériques dans l'eau potable",
        "recommandation": "Objectif de traitement :       Réduction (c.-à-d. élimination ou inactivation) d'au moins 4 log",
        "sources": "Matières fécales humaines",
        "sante": "Généralement associés à des troubles gastro-intestinaux (nausées, vomissements, diarrhée); les effets moins courants sur la santé peuvent inclure des symptômes respiratoires, des infections du système nerveux central, des infections hépatiques et des syndromes musculaires."
    }
];

export const chimiques = [
    {
        "type": "P",
        "contaminant": "Acide (4-chloro-2-méthylphénoxy) acétique (MCPA) (2022)",
        "cma": "0,35",
        "oe": "Aucune"
    },
    {
        "type": "P",
        "contaminant": "Acide 2,4-dichloro       phénoxyacétique (2,4-D) (2022)",
        "cma": "0,1",
        "oe": "Aucune"
    },
    {
        "type": "SPD",
        "contaminant": "Acides haloacétiques - totaux (AHA) Tableau 2 note de bas de page 3(2008)",
        "cma": "0,08       ALARA",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Acide nitrilotriacétique (NTA) (1990)",
        "cma": "0,4",
        "oe": "Aucune"
    },
    {
        "type": "T",
        "contaminant": "Aluminium (2021)       Parlons d'eau : L'aluminium dans l'eau potable",
        "cma": "2,9",
        "oe": "VOR : 0,1"
    },
    {
        "type": "I",
        "contaminant": "Amiante (1989, 2005)       L'amiante dans l'eau potable",
        "cma": "Aucune",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Ammoniac (2013)",
        "cma": "Aucune",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Antimoine (2024)       Parlons d'eau: l'antimoine dans l'eau potable",
        "cma": "0,006",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Argent (1986, 2005)",
        "cma": "Aucune",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Arsenic (2006)       L'arsenic dans l'eau potable",
        "cma": "0,010       ALARA",
        "oe": "Aucune"
    },
    {
        "type": "P",
        "contaminant": "Atrazine (1993)",
        "cma": "0,005",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Baryum (2020)       Parlons d'eau – le baryum dans l'eau potable",
        "cma": "2,0",
        "oe": ""
    },
    {
        "type": "O",
        "contaminant": "Benzène (2009)",
        "cma": "0.005",
        "oe": "Aucune"
    },
    {
        "type": "O",
        "contaminant": "Benzo[a]pyrène (2016)",
        "cma": "0,000 04",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Bore (2023)",
        "cma": "5",
        "oe": "Aucune"
    },
    {
        "type": "SPD",
        "contaminant": "Bromate (2018)",
        "cma": "0,01",
        "oe": "Aucune"
    },
    {
        "type": "P",
        "contaminant": "Bromoxynil (2022)",
        "cma": "0,03",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Cadmium (2020)       Le point sur le cadmium dans l'eau potable",
        "cma": "0,007",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Calcium (2025)       (Dans : Paramètres opérationnels)",
        "cma": "Aucune",
        "oe": "Aucune"
    },
    {
        "type": "D",
        "contaminant": "Chloramines (2020)       Parlons d'eau - les chloramines dans l'eau potable",
        "cma": "Aucune",
        "oe": "Aucune"
    },
    {
        "type": "SPD",
        "contaminant": "Chlorate (2008)",
        "cma": "1",
        "oe": "Aucune"
    },
    {
        "type": "D",
        "contaminant": "Chlore (2009)",
        "cma": "Aucune",
        "oe": ""
    },
    {
        "type": "SPD",
        "contaminant": "Chlorite (2008)",
        "cma": "1",
        "oe": "Aucune"
    },
    {
        "type": "P",
        "contaminant": "Chlorpyrifos (1986)",
        "cma": "0,09",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Chlorure (2025)       (Dans : Paramètres opérationnels)",
        "cma": "Aucune",
        "oe": "OE : ≤ 250"
    },
    {
        "type": "O",
        "contaminant": "Chlorure de vinyle (2013)",
        "cma": "0,002 ALARA",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Chrome (2018)",
        "cma": "0,05",
        "oe": "Aucune"
    },
    {
        "type": "T",
        "contaminant": "Couleur (1979, 2005)",
        "cma": "Aucune",
        "oe": "OE : ≤ 15 UCV"
    },
    {
        "type": "I",
        "contaminant": "Cuivre (2019)       Parlons d'eau - Le cuivre dans l'eau potable",
        "cma": "2",
        "oe": "OE : 1"
    },
    {
        "type": "I",
        "contaminant": "Cyanure (1979,1991)",
        "cma": "0,2",
        "oe": "Aucune"
    },
    {
        "type": "P",
        "contaminant": "Dicamba (2022)",
        "cma": "0,11",
        "oe": "Aucune"
    },
    {
        "type": "O",
        "contaminant": "1,4-DichlorobenzeneTableau 2 note de bas de page 2 (1987)",
        "cma": "0,005",
        "oe": "OE : ≤ 0,001"
    },
    {
        "type": "O",
        "contaminant": "1,2-Dichloroéthane (2014)",
        "cma": "0,005",
        "oe": "Aucune"
    },
    {
        "type": "O",
        "contaminant": "Dichlorométhane (2011)",
        "cma": "0,05",
        "oe": "Aucune"
    },
    {
        "type": "P",
        "contaminant": "Diméthoate et l'ométhoate (2022)",
        "cma": "0,02",
        "oe": "Aucune"
    },
    {
        "type": "O",
        "contaminant": "1,4-Dioxane (2021)       Parlons d'eau – Le 1,4-dioxane dans l'eau potable",
        "cma": "0,050",
        "oe": "Aucune"
    },
    {
        "type": "D",
        "contaminant": "Dioxyde de chlore (2008)",
        "cma": "Aucune",
        "oe": "Aucune"
    },
    {
        "type": "P",
        "contaminant": "Diquat (2022)",
        "cma": "0,05",
        "oe": "Aucune"
    },
    {
        "type": "T",
        "contaminant": "Dureté (2025)       (Dans : Paramètres opérationnels)",
        "cma": "Aucune",
        "oe": "Aucune"
    },
    {
        "type": "O",
        "contaminant": "Éther de méthyle et de tert-butyle (MTBE) (2006)",
        "cma": "Aucune",
        "oe": "OE : ≤ 0,015"
    },
    {
        "type": "O",
        "contaminant": "Éthylbenzène (2014)",
        "cma": "0,14",
        "oe": "OE : ≤ 0,0016"
    },
    {
        "type": "I",
        "contaminant": "Fer (2024)",
        "cma": "Aucune",
        "oe": "OE : ≤ 0,1"
    },
    {
        "type": "I",
        "contaminant": "Fluorure (2010)",
        "cma": "1,5",
        "oe": "Aucune"
    },
    {
        "type": "SPD",
        "contaminant": "Formaldéhyde (1997)",
        "cma": "Aucune",
        "oe": "Aucune"
    },
    {
        "type": "P",
        "contaminant": "Glyphosate (1987, 2005)",
        "cma": "0,28",
        "oe": "Aucune"
    },
    {
        "type": "A",
        "contaminant": "Goût (1979, 2005)",
        "cma": "Aucune",
        "oe": "Dépourvue d'un goût désagréable"
    },
    {
        "type": "I",
        "contaminant": "Magnésium (2025)       (Dans : Paramètres opérationnels)",
        "cma": "Aucune",
        "oe": "Aucune"
    },
    {
        "type": "P",
        "contaminant": "Malathion (2023)",
        "cma": "0,29",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Manganèse (2019)       Parlons d'eau - Le manganèse dans l'eau potable",
        "cma": "0,12",
        "oe": "OE : ≤ 0,02"
    },
    {
        "type": "A",
        "contaminant": "Matières dissoutes totales (MDT) (2025)       (Dans : Paramètres opérationnels)",
        "cma": "Aucune",
        "oe": "OE : ≤ 500"
    },
    {
        "type": "I",
        "contaminant": "Mercure (1986)",
        "cma": "0,001",
        "oe": "Aucune"
    },
    {
        "type": "P",
        "contaminant": "Métribuzine (2021)",
        "cma": "0,08",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Nitrate (2013)",
        "cma": "45 sous forme de nitrate;       10 sous forme d'azote",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Nitrite (2013)",
        "cma": "3 sous forme de nitrite; 1 sous forme d'azote",
        "oe": "Aucune"
    },
    {
        "type": "SPD",
        "contaminant": "N-Nitroso- diméthylamine (NDMA) (2010)",
        "cma": "0,000 04",
        "oe": "Aucune"
    },
    {
        "type": "A",
        "contaminant": "Odeur (1979, 2005)",
        "cma": "Aucune",
        "oe": "Dépourvue d'une odeur désagréable"
    },
    {
        "type": "O",
        "contaminant": "Pentachlorophénol (1987, 2005)",
        "cma": "0,06",
        "oe": "OE: ≤ 0,03"
    },
    {
        "type": "T",
        "contaminant": "pH (2015)",
        "cma": "Aucune/td>",
        "oe": "7,0-10,5Tableau 2 note de bas de page 4"
    },
    {
        "type": "I",
        "contaminant": "Plomb (2019)       Parlons d'eau - Le plomb dans l'eau potable       Eau potable : qu'en est-il du plomb?",
        "cma": "0,005       ALARA",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Sélénium (2014)",
        "cma": "0,05",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Sodium (1979)",
        "cma": "Aucune",
        "oe": "OE: ≤ 200"
    },
    {
        "type": "I",
        "contaminant": "Strontium (2019)       Parlons d'eau - Le strontium dans l'eau potable",
        "cma": "7,0",
        "oe": "Aucune"
    },
    {
        "type": "O",
        "contaminant": "Substances perfluoroalkylées et polyfluoroalkylées (PFAS) (2024)       Parlons d'eau : Substances perfluoroalkyliques et polyfluoroalkyliques (SPFA) dans l'eau potable",
        "cma": "Aucune",
        "oe": "Objectif:       0,00003       ALARA"
    },
    {
        "type": "I",
        "contaminant": "Sulfates (2025)       (Dans : Paramètres opérationnels)",
        "cma": "Aucune",
        "oe": "OE: ≤ 500"
    },
    {
        "type": "I",
        "contaminant": "Sulfure (1992)",
        "cma": "Aucune",
        "oe": "OE ≤ 0,05"
    },
    {
        "type": "I",
        "contaminant": "Sulfure d'hydrogène (2025)       (Dans : Paramètres opérationnels)",
        "cma": "ucune",
        "oe": "OE ≤ 0,05"
    },
    {
        "type": "O",
        "contaminant": "Tétrachloroéthylène (2015)",
        "cma": "0,01",
        "oe": "Aucune"
    },
    {
        "type": "O",
        "contaminant": "Tétrachlorure de carbone (2010)",
        "cma": "0,002",
        "oe": "Aucune"
    },
    {
        "type": "O",
        "contaminant": "Toluène (2014)",
        "cma": "0,06",
        "oe": "OE: 0,024"
    },
    {
        "type": "O",
        "contaminant": "Toxines cyanobactériennes - Microcystines-LR (2017)",
        "cma": "0,0015",
        "oe": "Aucune"
    },
    {
        "type": "O",
        "contaminant": "Trichloroéthylène (2005)",
        "cma": "0,005",
        "oe": "Aucune"
    },
    {
        "type": "O",
        "contaminant": "Trichloro-2,4,6 phénol (1987, 2005)",
        "cma": "0,005",
        "oe": "OE: ≤ 0,002"
    },
    {
        "type": "SPD",
        "contaminant": "TrihalométhanesTableau 2 note de bas de page 3 (THM) (2006)",
        "cma": "0,1",
        "oe": "Aucune"
    },
    {
        "type": "I",
        "contaminant": "Uranium (2019)       Parlons d'eau : L'uranium dans l'eau potable",
        "cma": "0,02",
        "oe": "Aucune"
    },
    {
        "type": "O",
        "contaminant": "Xylènes (totaux) (2014)",
        "cma": "0,09",
        "oe": "OE : 0,02"
    },
    {
        "type": "I",
        "contaminant": "Zinc (1979, 2005)",
        "cma": "Aucune",
        "oe": "OE : ≤ 5,0"
    }
];

export const radiologiques = [
    {
        "contaminant": "Plomb-210 (2025)",
        "recommandation": "0,2",
        "sources": "D'origine naturelle (chaîne de désintégration de l'uranium)",
        "sante": "Du point de vue de la santé, l'objectif principal des mesures prises pour gérer l'exposition du public aux rayonnements ionisants consiste à réduire le risque de cancer attribuable."
    },
    {
        "contaminant": "Radium-226 (2025)",
        "recommandation": "0,5",
        "sources": "D'origine naturelle (chaîne de désintégration de l'uranium)",
        "sante": "Du point de vue de la santé, l'objectif principal des mesures prises pour gérer l'exposition du public aux rayonnements ionisants consiste à réduire le risque de cancer attribuable."
    },
    {
        "contaminant": "Radium-228 (2025)",
        "recommandation": "0.2",
        "sources": "D'origine naturelle (chaîne de désintégration du thorium)",
        "sante": "Du point de vue de la santé, l'objectif principal des mesures prises pour gérer l'exposition du public aux rayonnements ionisants consiste à réduire le risque de cancer attribuable."
    }
];
