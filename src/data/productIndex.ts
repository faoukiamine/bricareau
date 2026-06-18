export interface ProductIndexItem {
  name: string;
  keywords: string[];
  description: string;
  href: string;
  category: string;
}

export const productIndex: ProductIndexItem[] = [
  {
    name: "Vectapure NX",
    keywords: ["vectapure", "nx", "osmose inverse", "purification", "eau potable", "4 étapes", "station d'eau"],
    description: "Système d'osmose inverse à 4 étapes, compact et efficace pour une eau pure au quotidien.",
    href: "/filtration",
    category: "Stations d'eau potable"
  },
  {
    name: "Sérénité Direct-Flow",
    keywords: ["sérénité", "direct-flow", "sans réservoir", "osmose inverse", "600 GPD", "débit continu"],
    description: "Système de purification d'eau haute performance sans réservoir pour un débit instantané.",
    href: "/filtration",
    category: "Stations d'eau potable"
  },
  {
    name: "Essentiel",
    keywords: ["essentiel", "6 étapes", "osmose inverse", "populaire", "douceur", "famille"],
    description: "Notre système d'osmose inverse à 6 étapes avec polissage final pour une eau d'une douceur incomparable.",
    href: "/filtration",
    category: "Stations d'eau potable"
  },
  {
    name: "Kinetico K5",
    keywords: ["kinetico", "k5", "purification", "premium", "eau potable", "v3604"],
    description: "Distributeur d'eau potable de pointe offrant une protection personnalisable contre une multitude de contaminants.",
    href: "/filtration",
    category: "Stations d'eau potable"
  },
  {
    name: "Adoucisseur Signature",
    keywords: ["signature", "adoucisseur", "résidentiel", "calcaire", "eau douce", "haute efficacité"],
    description: "Solution performante pour l'élimination du calcaire et la protection de vos installations.",
    href: "/adoucisseur-eau-residentiel",
    category: "Adoucisseurs d'eau"
  },
  {
    name: "Conditionneur sans sel",
    keywords: ["sans sel", "écologique", "antitartre", "entretien minimal", "conditionneur"],
    description: "Prévenez le tartre sans sel et sans produits chimiques avec notre technologie écologique.",
    href: "/conditionneurs-sans-sel",
    category: "Solutions écologiques"
  },
  {
    name: "Stérilisateur UV",
    keywords: ["uv", "ultraviolet", "bactéries", "virus", "désinfection", "stérilisation", "eau de puits", "viqua"],
    description: "Éliminez 99.9% des micro-organismes nocifs avec notre technologie de désinfection par rayons UV.",
    href: "/systemes-de-desinfection-uv",
    category: "Eau de puits"
  },
  {
    name: "Filtre Haute Efficacité",
    keywords: ["haute efficacité", "HE", "filtrage", "sédiments", "chlore", "goût", "odeur"],
    description: "Filtration supérieure pour toute la maison réduisant le chlore, les sédiments et les odeurs.",
    href: "/filtration",
    category: "Filtration"
  },
  {
    name: "Analyse d'eau",
    keywords: ["analyse", "test", "laboratoire", "qualité", "dureté", "fer", "soufre", "manganèse", "arsenic", "bactéries", "coliformes", "eau de puits", "potabilité"],
    description: "Service professionnel d'analyse de votre eau pour identifier les contaminants et solutions adaptées.",
    href: "/Analyses-et-Tests-d-eau",
    category: "Services"
  },
  {
    name: "Refroidisseur d'eau",
    keywords: ["refroidisseur", "fontaine", "eau froide", "eau chaude", "bureau", "entreprise", "sans bouteille"],
    description: "Solutions d'hydratation élégantes et performantes pour les environnements corporatifs.",
    href: "/entreprises",
    category: "Entreprises"
  },
  {
    name: "Machine à café",
    keywords: ["café", "espresso", "latte", "bureau", "entreprise", "premium", "machine"],
    description: "Des machines à café haut de gamme pour transformer la pause café en expérience premium.",
    href: "/entreprises",
    category: "Entreprises"
  },
  {
    name: "Reverse Osmosis",
    keywords: ["ro", "reverse osmosis", "osmose inverse", "filtration moléculaire", "eau pure"],
    description: "La technologie de filtration la plus avancée pour une pureté d'eau inégalée.",
    href: "/filtration",
    category: "Stations d'eau potable"
  },
  {
    name: "Adoucisseur d'eau portable",
    keywords: ["portable", "VR", "camping", "bateau", "nomade", "petit adoucisseur", "résidence saisonnière", "chalet"],
    description: "Solution compacte idéale pour VR, bateaux et résidences saisonnières. Protège vos petits électroménagers partout où vous allez.",
    href: "/adoucisseurs-portables",
    category: "Adoucisseur"
  },
  {
    name: "Conditionneur d'eau sans sel (Technologie TAC)",
    keywords: ["sans sel", "écologique", "TAC", "cristallisation", "anti-tartre", "anti-calcaire", "zéro rejet", "zéro électricité", "fosse septique"],
    description: "Neutralisez le calcaire de manière écologique sans sel ni électricité. Préserve les minéraux essentiels tout en protégeant votre plomberie.",
    href: "/conditionneurs-sans-sel",
    category: "Filtration"
  },
  {
    name: "VH200-F10",
    keywords: ["vh200", "f10", "uv", "viqua", "bactéries", "préfiltration", "toute la maison"],
    description: "Système de désinfection UV avec préfiltration intégrée. Idéal pour éliminer les bactéries et la turbidité. Débit 9 gpm.",
    href: "/systemes-de-desinfection-uv",
    category: "Désinfection UV"
  },
  {
    name: "VH410-F20",
    keywords: ["vh410", "f20", "uv", "viqua", "famille", "haute capacité", "bactéries"],
    description: "Le choix des familles pour la désinfection UV. Haute capacité avec préfiltration intégrée. Débit 18 gpm.",
    href: "/systemes-de-desinfection-uv",
    category: "Désinfection UV"
  },
  {
    name: "Arros 15-IHS10",
    keywords: ["arros", "ihs10", "viqua", "nouveau", "uv", "désinfection", "compact"],
    description: "Nouveau système de traitement d'eau UV compact pour toute la maison. Efficace contre bactéries et virus. Débit 15 gpm.",
    href: "/systemes-de-desinfection-uv",
    category: "Désinfection UV"
  },
  {
    name: "Série Sentinelle",
    keywords: ["sentinelle", "adoucisseur", "précision", "compact", "économie de sel"],
    description: "Adoucisseur d'eau précis et compact, idéal pour éradiquer le calcaire sans complexité inutile.",
    href: "/adoucisseur-sentinelle",
    category: "Adoucisseurs d'eau"
  },
  {
    name: "Série Sérénité",
    keywords: ["sérénité", "hybride", "chlore", "calcaire", "peau douce", "odeur"],
    description: "Solution hybride traitant à la fois le calcaire et le chlore pour une peau et des cheveux en pleine santé.",
    href: "/adoucisseur-eau-residentiel",
    category: "Adoucisseurs d'eau"
  },
  {
    name: "Série Infiniti",
    keywords: ["infiniti", "double bouteille", "alterné", "non-stop", "famille nombreuse"],
    description: "Adoucisseur à double bouteille alternée pour une eau douce garantie 24h/24, sans interruption.",
    href: "/adoucisseur-eau-residentiel",
    category: "Adoucisseurs d'eau"
  },
  {
    name: "Filtre Vortex",
    keywords: ["vortex", "sédiments", "sable", "rouille", "particules", "préfiltration"],
    description: "Protection supérieure de toute la maison contre les sédiments, le sable et les particules de rouille.",
    href: "/filtration",
    category: "Filtration"
  },
  {
    name: "Filtre ChlorStop",
    keywords: ["chlorstop", "chlore", "goût", "odeur", "piscine", "charbon actif"],
    description: "Solution d'élite pour éliminer le goût et l'odeur de chlore de votre eau municipale.",
    href: "/filtration",
    category: "Filtration"
  },
  {
    name: "Filtre Iron Shield",
    keywords: ["iron shield", "fer", "taches", "rouille", "soufre", "bouclier"],
    description: "Élimine efficacement le fer et les taches brunes qui altèrent vos installations sanitaires.",
    href: "/filtration",
    category: "Filtration"
  },
  {
    name: "Modèle 'Élite Hydra' (Glace Pépite)",
    keywords: ["glace", "pépite", "nugget", "entreprises", "bureau", "distributeur", "ice machine", "chewblet"],
    description: "Distributeur d'eau et de glace pépite 'Chewblet' pour entreprises. Design élégant pour salles de conférence.",
    href: "/entreprises",
    category: "Entreprises"
  },
  {
    name: "Modèle 'Atlas Cube'",
    keywords: ["glace", "cube", "restauration", "bar", "restaurant", "sous-comptoir", "encastrable"],
    description: "Machine à glace sous-comptoir haute capacité pour la restauration. Produit des cubes cristallins parfaits.",
    href: "/entreprises",
    category: "Entreprises"
  },
  {
    name: "Modèle 'Zenith Bin'",
    keywords: ["glace", "industriel", "hôtel", "sport", "haute performance", "production massive"],
    description: "Unité de production de glace haute performance pour environnements intensifs (hôtels, complexes sportifs).",
    href: "/entreprises",
    category: "Entreprises"
  },
  {
    name: "Elysium PRO Desktop",
    keywords: ["refroidisseur", "fontaine", "bureau", "compact", "comptoir", "UV", "sans bouteille"],
    description: "Refroidisseur d'eau compact pour bureaux. Filtration Charbon + UV pour une eau pure sans bouteille.",
    href: "/entreprises",
    category: "Entreprises"
  },
  {
    name: "Elysium TOWER Max",
    keywords: ["fontaine", "tour", "tour d'eau", "cafétéria", "espace commun", "haute capacité", "sans bouteille"],
    description: "Fontaine d'eau tour haute capacité pour espaces communs. Élimine la logistique des bouteilles d'eau.",
    href: "/entreprises",
    category: "Entreprises"
  },
  {
    name: "Industrial Hydrator 500",
    keywords: ["refroidisseur", "industriel", "usine", "entrepôt", "robuste", "chantier", "hydratation"],
    description: "Refroidisseur d'eau robuste pour usines et entrepôts. Conçu pour les environnements exigeants.",
    href: "/entreprises",
    category: "Entreprises"
  }
];
