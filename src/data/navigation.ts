import promoImage2 from "@/assets/30759.jpg";
import promoImage3 from "@/assets/woman-and-kid-drink-glass-water.jpg";
import promoImage4 from "@/assets/bureau-megamenu.jpg";
import promoImage from "@/assets/industrial_hero_pro_max.png";

import ultravioletImg from "@/assets/uv system light_12838859.png";
import watertestImg from "@/assets/Water-test_15395190.png";
import wholehousefiltericonImg from "@/assets/Whole house Water Filter.png";
import pointofusefiltericonImg from "@/assets/reverse osmosis system_11062146.png";
import undersinkfiltericonImg from "@/assets/water-filter_8782563.png";
import replacementfiltericonImg from "@/assets/Filter cartridges_4257091.png";
import saltfreeiconImg from "@/assets/water-tap_4497397.png";
import portablefiltericonImg from "@/assets/mobile-home_3764879.png";
import WatersoftenericonImg from "@/assets/water-softener.png";
import icemakericonImg from "@/assets/ice-maker_18310650.png";
import waterdispensericonImg from "@/assets/water-dispenser_7714494.png";
import drinkingwaterfountainiconImg from "@/assets/drinking_14127403.png";
import faqiconImg from "@/assets/faq_4481080.png";
import videoiconImg from "@/assets/video-camera_8062951.png";
import blogiconImg from "@/assets/blog_10045827.png";
import documenticonImg from "@/assets/documentation_17862483.png";
import contacticonImg from "@/assets/telephone_3095610.png";
import serviceiconImg from "@/assets/services_5062832.png";
import pfasImg from "@/assets/PFAS.jpg.jpg";

export interface MegamenuCard {
  customIcon?: string;
  svgIcon?: React.ReactNode; 
  title: string;
  description?: string;
  href: string;
  image?: string; 
  links?: { title: string; description: string; href: string }[];
}

export interface MenuItem {
  name: string;
  href?: string;
  hasMegamenu: boolean;
  megamenuCards?: MegamenuCard[];
  megamenuGroups?: {
    items: { title: string; description: string; href: string }[];
  }[];
  items?: { name: string; href: string }[]; // Simple dropdown items
  promo?: {
    title: string;
    subtitle?: string;
    image: string;
    link: string;
    cta?: string;
  };
}

// THE NEW MAIN MENU STRUCTURE (BASED ON BLUEDROP)
export const mainNavMenuItems: MenuItem[] = [
    {
        name: "Ce que nous faisons",
        hasMegamenu: true,
        megamenuCards: [
            {
                title: "RÉSIDENTIEL",
                image: promoImage3,
                href: "/residentiel",
                links: [
                    { 
                        title: "Analyses & Tests d'eau", 
                        description: "Systèmes de désinfection d'eau pour protéger votre famille contre les contaminants nocifs.", 
                        href: "/tests-eau" 
                    }, 
                    { 
                        title: "Adoucisseurs d'eau Résidentiels", 
                        description: "Solutions avancées d'adoucissement d'eau.", 
                        href: "/A" 
                    },
                    { 
                        title: "Filtres d'eau spécialisés", 
                        description: "Systèmes de filtration d'eau haute performance pour besoins spécifiques.", 
                        href: "/B" 
                    },
                    { 
                        title: "Systèmes de filtration d'eau sous évier", 
                        description: "Stations d'eau potable ultra-pure pour un confort quotidien.", 
                        href: "/C" 
                    },
                    { 
                        title: "Systèmes de désinfection UV", 
                        description: "Systèmes de désinfection d'eau pour protéger votre famille contre les contaminants nocifs.", 
                        href: "/systemes-de-desinfection-uv" 
                    },
                    { 
                        title: "Fontaines et refroidisseurs d'eau", 
                        description: "Systèmes de désinfection d'eau pour protéger votre famille contre les contaminants nocifs.", 
                        href: "/fontaines" 
                    }
                ]
            },
            {
                title: "BUREAU",
                image: promoImage4, 
                href: "/bureau",
                links: [
                    { 
                        title: "Fontaines d'Eau Modernes", 
                        description: "Éliminez la logistique des bouteilles avec nos fontaines branchées.", 
                        href: "/fontaines-deau-modernes" 
                    },
                    { 
                        title: "Solutions Eau Pétillante", 
                        description: "Fraîcheur et effervescence à la demande pour vos espaces communs.", 
                        href: "/solutions-eau-petillante" 
                    },
                    { 
                        title: "Systèmes Centralisés", 
                        description: "Gestion intelligente de l'eau pour les tours de bureaux et complexes.", 
                        href: "/systemes-centralises" 
                    }
                ]
            },
            {
                title: "HÔTELLERIE ET RESTAURATION",
                image: promoImage2,
                href: "/hotellerie-restauration",
                links: [
                    { 
                        title: "Adoucisseur d'eau commercial", 
                        description: "Protection antitartre pour vos équipements.", 
                        href: "/adoucisseurs-eau-commerciaux" 
                    }, 
                    { 
                        title: "Filtration d'eau", 
                        description: "Qualité pure pour votre établissement.", 
                        href: "/filtration" 
                    },
                    { 
                        title: "Solutions pour Brasseries", 
                        description: "Expertise brassicole et eau pure.", 
                        href: "/solutions-brasseries" 
                    },
                    { 
                        title: "Filtres pour Machines à Café", 
                        description: "Extraction parfaite et protection antitartre.", 
                        href: "/filtres-eau-machine-cafe" 
                    }
                ]
            },
            {
                title: "COMMERCIAL & INDUSTRIEL",
                image: promoImage,
                href: "/industriel",
                links: [
                    { 
                        title: "Systèmes de filtration industriels", 
                        description: "Protection haute performance pour vos réseaux.", 
                        href: "/filtration-industrielle" 
                    },
                    { 
                        title: "Adoucisseurs d'eau industriel", 
                        description: "Neutralisez le calcaire à grande échelle.", 
                        href: "/adoucisseurs-eau-industriel" 
                    },
                    { 
                        title: "Systèmes d'osmose inverse", 
                        description: "Purification critique pour vos process.", 
                        href: "/osmose-inverse-industrielle" 
                    },
                    { 
                        title: "Systèmes de désinfection UV à haut débit", 
                        description: "Biosécurité microbiologique à haut débit.", 
                        href: "/desinfection-uv-industrielle" 
                    }
                ]
            }
        ],
        megamenuGroups: []
    },
    {
        name: "Qui sommes-nous ?",
        hasMegamenu: true,
        megamenuGroups: [
            {
                items: [
                     { 
                        title: "Notre compagnie", 
                        description: "Découvrez pourquoi nous sommes le partenaire leader en filtration d'eau au Québec.", 
                        href: "/pourquoi-choisir-bricareau" 
                    },
                    { 
                        title: "Notre processus", 
                        description: "Découvrez comment nos experts peuvent vous aider à trouver la solution qui vous convient.", 
                        href: "/notre-processus" 
                    }
                ]
            },
            {
                items: [
                    { 
                        title: "Carrières", 
                        description: "Rejoignez une équipe passionnée et participez à l'avenir du traitement d'eau.", 
                        href: "/carrieres" 
                    }
                ]
            }
        ],
        promo: {
            title: "Découvrez la différence Bricareau Water",
            subtitle: "Nous préférons travailler en nous basant sur tous les faits. Pour commencer, planifiez une analyse d'eau complète.",
            image: watertestImg,
            link: "/tests-eau",
            cta: "PLANIFIEZ UN TEST D'EAU"
        }
    },
    {
        name: "Ressources",
        hasMegamenu: true,
        megamenuGroups: [
            {
                items: [
                    { 
                        title: "Tests d'eau", 
                        description: "Planifiez une analyse complète de votre eau pour garantir sa pureté et sa sécurité.", 
                        href: "/tests-eau" 
                    },
                    { 
                        title: "Nos Services", 
                        description: "Découvrez notre gamme complète de services d'installation et d'entretien.", 
                        href: "/services-de-traitement-eau" 
                    },
                    { 
                        title: "Diagnostic", 
                        description: "Utilisez notre outil d'autodiagnostic pour identifier rapidement les solutions adaptées à vos besoins.", 
                        href: "/diagnostic" 
                    },
                                    ]
            },
            {
                items: [
                    { 
                        title: "Blog", 
                        description: "Restez informé des nouveautés dans le monde de l'eau.", 
                        href: "/blog" 
                    },
                    { 
                        title: "FAQ", 
                        description: "Trouvez rapidement des réponses aux questions les plus fréquemment posées sur nos produits et services.", 
                        href: "/faq" 
                    },
                    { 
                        title: "Durabilité", 
                        description: "Découvrez comment nous fournissons des systèmes de filtration d'eau économiques, efficaces et durables.", 
                        href: "/durabilite" 
                    },
                    
                ]
            }
        ],

        promo: {
            title: "Analyse d'eau",
            subtitle: "Une eau parfaite commence par une analyse rigoureuse.",
            image: promoImage2,
            link: "/tests-eau",
            cta: "APPRENEZ-EN DAVANTAGE SUR LES TESTS D'EAU"
        }
    }
];

export const productMenuItems: MenuItem[] = [
  {
    name: "Adoucissement d'eau",
    href: "/adoucissement",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: WatersoftenericonImg,
        title: "Adoucisseurs d'eau",
        description: "Éliminez le calcaire, protégez vos électroménagers et profitez d'une peau et de cheveux plus sains avec une eau parfaitement douce.",
        href: "/A"
      },
      {
        customIcon: saltfreeiconImg,
        title: "Conditionneurs d'eau sans sel",
        description: "La solution antitartre écologique : prévenez l'accumulation de calcaire sans sel, sans rejet d'eau et sans entretien.",
        href: "/conditionneurs-sans-sel"
      },
      {
        customIcon: portablefiltericonImg,
        title: "Adoucisseurs d'eau portables",
        description: "La solution flexible pour une eau douce sans installation permanente. Idéal pour les VR et résidences secondaires.",
        href: "/adoucisseurs-portables"
      },
      {
        customIcon: WatersoftenericonImg,
        title: "Adoucisseurs d'eau commerciaux",
        description: "Solutions haute performance pour entreprises, hôtels et industries. Protection maximale des équipements.",
        href: "/adoucisseurs-eau-commerciaux"
      },
    ],
    promo: {
      title: "Une eau parfaite commence par une analyse rigoureuse.",
      image: promoImage2,
      link: "/tests-eau"
    }
  },
  {
    name: "Filtration d'eau",
    href: "/filtration",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: wholehousefiltericonImg,
        title: "Filtres d'eau pour toute la maison",
        description: "Protection complète de votre maison avec une filtration centralisée pour toute l'eau.",
        href: "/filtres-deau-pour-toute-la-maison"
      },
      {
        customIcon: pointofusefiltericonImg,
        title: "Stations d'eau potable",
        description: "Profitez d'une eau pure et saine directement de votre robinet avec nos systèmes de filtration avancés.",
        href: "/systeme-de-filtration-deau-potable"
      },
      {
        customIcon: pointofusefiltericonImg,
        title: "Filtration d'eau Potable",
        description: "Découvrez nos solutions de filtration par osmose inverse pour une pureté inégalée.",
        href: "/filtration-eau-potable"
      },
      {
        customIcon: undersinkfiltericonImg,
        title: "Systèmes de filtration d'eau sous-évier",
        description: "Solutions compactes et efficaces pour une filtration optimale directement sous votre évier.",
        href: "/systemes-de-filtration-deau-sous-evier"
      },
      {
        customIcon: replacementfiltericonImg,
        title: "Cartouches filtrantes de remplacement",
        description: "Maintenez la performance optimale de vos systèmes avec nos cartouches de qualité.",
        href: "/filtres-de-remplacement"
      },
    ],
    promo: {
      title: "Protégez votre famille des contaminants invisibles qui peuvent avoir des effets à long terme",
      image: promoImage3,
      link: "/tests-eau"
    }
  },
  {
    name: "Traitement de l'eau de puits",
    href: "/traitement-eau-de-puits",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: watertestImg,
        title: "Analyses & Tests d'eau",
        description: "Tests complets pour identifier les contaminants et problèmes de qualité de votre eau de puits.",
        href: "/tests-eau"
      },
      {
        customIcon: wholehousefiltericonImg,
        title: "Systèmes de filtration d'eau spécialisés",
        description: "Nos systèmes de filtration d’eau spécialisés pour toute la maison est la solution abordable et durable pour obtenir une eau de meilleure qualité à chaque robinet de votre maison.",
        href: "/filtres-deau"
      },
      {
        customIcon: WatersoftenericonImg,
        title: "Adoucisseurs d'eau de puits",
        description: "Dites adieu aux problèmes de calcaire ! Nos adoucisseurs d’eau traitent durablement l’eau contre ses méfaits pour vous faire bénéficier d’une eau douce toute l’année.",
        href: "/adoucisseurs-eau-de-puits"
      },
      {
        customIcon: ultravioletImg,
        title: "Systèmes de désinfection UV",
        description: "Les systèmes de désinfection de l’eau à rayons ultraviolet stérilisent l’approvisionnement en eau de votre maison contre les micro-organismes nuisibles.",
        href: "/systemes-de-desinfection-uv"
      },
    ],
    promo: {
      title: "Des tests d'eau précis pour une tranquillité d'esprit totale.",
      image: promoImage4,
      link: "/tests-eau"
    }
  },
  {
    name: "Fontaines & distributeurs d'eau",
    href: "/fontaines",
    hasMegamenu: false,
    megamenuCards: [
      {
        customIcon: drinkingwaterfountainiconImg,
        title: "Distributeurs d'eau de comptoir",
        description: "Solutions tout-en-un offrant eau froide, chaude et glace dans un seul appareil.",
        href: "/fontaines"
      },
      {
        customIcon: waterdispensericonImg,
        title: "Refroidisseurs d'eau sans bouteille",
        description: "Eau fraîche et filtrée à la demande pour votre bureau ou votre maison.",
        href: "/fontaines"
      },
      {
        customIcon: icemakericonImg,
        title: "Machines à glaçons",
        description: "Glace propre et abondante pour toutes vos occasions et besoins quotidiens.",
        href: "/fontaines"
      },
    ],
    promo: {
      title: "Profitez d'une eau pure et revitalisante au quotidien",
      image: promoImage,
      link: "/systeme-de-filtration-deau-potable"
    }
  },
  {
    name: "Support",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: replacementfiltericonImg,
        title: "Pièces",
        description: "Commandez des pièces de rechange originales pour vos équipements.",
        href: "/pieces"
      },
      {
        customIcon: faqiconImg,
        title: "Quiz",
        description: "Trouvez le système de filtration d'eau parfait pour vos besoins en répondant à quelques questions simples.",
        href: "/diagnostic"
      },
      {
        customIcon: serviceiconImg,
        title: "Service",
        description: "Planifiez un entretien ou une réparation avec nos techniciens certifiés.",
        href: "/service"
      },
      {
        customIcon: faqiconImg,
        title: "FAQ",
        description: "Trouvez rapidement des réponses aux questions les plus fréquemment posées sur nos produits.",
        href: "/faq"
      },
      {
        customIcon: blogiconImg,
        title: "Blog",
        description: "Conseils, actualités et informations sur le traitement de l'eau et nos solutions.",
        href: "/blog"
      },
      {
        customIcon: contacticonImg,
        title: "Contact",
        description: "Contactez notre équipe d'experts pour toute question ou demande d'information.",
        href: "/contact"
      },
    ],
    promo: {
      title: "Nous sommes là pour vous aider",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600\u0026auto=format\u0026fit=crop",
      link: "/contact"
    }
  },
];

export const commercialProductMenuItems: MenuItem[] = [
  {
    name: "Systèmes Industriels",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: WatersoftenericonImg,
        title: "Adoucisseurs Twin CI",
        description: "Systèmes duplex haute performance pour une eau douce continue 24/7 sans perte de pression.",
        href: "/commercial-industriel#expertise"
      },
      {
        customIcon: pointofusefiltericonImg,
        title: "Osmose Inverse Industrielle",
        description: "Filtration moléculaire haute capacité pour laboratoires et processus de fabrication critiques.",
        href: "/commercial-industriel#expertise"
      },
      {
        customIcon: wholehousefiltericonImg,
        title: "Filtration Média Spécialisée",
        description: "Solutions sur mesure pour sédiments, fer, soufre et déionisation des eaux de procédé.",
        href: "/commercial-industriel#expertise"
      },
      {
        customIcon: ultravioletImg,
        title: "Stérilisation UV Pro",
        description: "Désinfection microbiologique par rayons UV pour garantir une eau exempte de bactéries.",
        href: "/commercial-industriel#expertise"
      },
    ],
    promo: {
      title: "Optimisation des coûts de maintenance industrielle.",
      image: promoImage4,
      link: "/contact"
    }
  },
  {
    name: "Expertise & Support",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: watertestImg,
        title: "Analyses de Laboratoire",
        description: "Diagnostics certifiés et audits de qualité d'eau pour tous les secteurs industriels.",
        href: "/tests-eau"
      },
      {
        customIcon: serviceiconImg,
        title: "Ingénierie de Déploiement",
        description: "Accompagnement complet de la conception à l'installation de vos systèmes complexes.",
        href: "/contact"
      },
      {
        customIcon: documenticonImg,
        title: "Cahier Technique & Devis",
        description: "Demandez une étude personnalisée et des spécifications techniques pour votre projet.",
        href: "/contact"
      },
      {
        customIcon: blogiconImg,
        title: "Études de Cas Pro",
        description: "Découvrez nos réalisations et l'impact de nos solutions sur la performance industrielle.",
        href: "/blog"
      },
    ],
    promo: {
      title: "Support Technique Prioritaire 24/7 pour les Entreprises.",
      image: promoImage,
      link: "/service"
    }
  },
  {
     name: "Secteurs",
     href: "/commercial-industriel#secteurs",
     hasMegamenu: false
  },
  {
    name: "Ressources B2B",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: faqiconImg,
        title: "FAQ Industrielle",
        description: "Questions techniques sur les débits, la conformité et les exigences d'installation.",
        href: "/faq"
      },
      {
        customIcon: contacticonImg,
        title: "Expert Conseil",
        description: "Parlez directement à un ingénieur spécialisé dans le traitement d'eau.",
        href: "/contact"
      },
    ],
    promo: {
      title: "Consultez le centre de documentation technique.",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=600&auto=format&fit=crop",
      link: "/guides"
    }
  },
];

export const entreprisesProductMenuItems: MenuItem[] = [
  {
    name: "Fontaines d'Eau Modernes",
    href: "/fontaines-deau-modernes",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: waterdispensericonImg,
        title: "Fontaines Sans Bouteille",
        description: "Reliées au réseau, filtration intégrée pour une eau fraîche continue au bureau sans logistique de bouteilles.",
        href: "/fontaines-deau-modernes"
      },
      {
        customIcon: drinkingwaterfountainiconImg,
        title: "Distributeurs Haute Capacité",
        description: "Solutions pour usines, cafétérias et grands lieux publics avec filtration UV optionnelle.",
        href: "/fontaines-deau-modernes"
      },
    ],
    promo: {
      title: "Essai gratuit de 7 jours en entreprise au Québec.",
      image: promoImage3,
      link: "/contact"
    }
  },
  {
    name: "Solutions Eau Pétillante",
    href: "/solutions-eau-petillante",
    hasMegamenu: false
  },
  {
    name: "Machines à glace",
    href: "/machines-a-glace-entreprises",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: icemakericonImg,
        title: "Unités de Production de Glace",
        description: "Systèmes de glaçons haute performance pour vos réceptions d'affaires et salles de repos.",
        href: "/machines-a-glace-entreprises"
      },
    ],
    promo: {
      title: "Une glace pure, une image de marque soignée.",
      image: promoImage4,
      link: "/machines-a-glace-entreprises"
    }
  },
  {
     name: "Machines à café",
     href: "/machines-a-cafe-entreprises",
     hasMegamenu: false
  },
  {
    name: "Ressources",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: blogiconImg,
        title: "Blog & Bien-être",
        description: "Conseils pour transformer l'hydratation en moteur de productivité au bureau.",
        href: "/blog"
      },
      {
        customIcon: faqiconImg,
        title: "FAQ Support Pro",
        description: "Tout ce qu'il faut savoir sur l'entretien et la conformité de vos fontaines.",
        href: "/faq"
      },
    ],
    promo: {
      title: "Découvrez notre centre de ressources Business.",
      image: promoImage2,
      link: "/guides"
    }
  },
  {
    name: "Soutien",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: contacticonImg,
        title: "Équipe Expert Conseil",
        description: "Parlez à un conseiller spécialisé dans les solutions d'eau pour entreprises.",
        href: "/contact"
      },
      {
        customIcon: serviceiconImg,
        title: "Installation & Maintenance",
        description: "Planifiez votre entretien proactif ou demandez une réparation urgente.",
        href: "/service"
      },
    ],
    promo: {
      title: "Service Gants Blancs : Votre satisfaction est notre priorité.",
      image: promoImage,
      link: "/contact"
    }
  },
];
