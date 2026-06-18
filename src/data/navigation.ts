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
import resourcesPromoImg from "@/assets/2151812357.jpg";
import promoQuiSommesNousImg from "@/assets/8786.jpg";
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
        name: "Qui sommes-nous ?",
        hasMegamenu: true,
        megamenuGroups: [
            {
                items: [
                     { 
                        title: "Notre compagnie", 
                        description: "Découvrez notre histoire, notre vision et pourquoi nous sommes la référence au Québec ?", 
                        href: "/pourquoi-choisir-bricareau" 
                    },
                    { 
                        title: "Notre processus", 
                        description: "De l'analyse à  l'installation, explorez notre méthodologie d'ingénierie étape par étape.", 
                        href: "/notre-processus" 
                    }
                ]
            },
            {
                items: [
                    { 
                        title: "Durabilité", 
                        description: "Découvrez nos engagements écologiques et notre mission pour réduire l'empreinte plastique.", 
                        href: "/durabilite" 
                    },
                    { 
                        title: "Carrières", 
                        description: "Rejoignez une équipe d'experts passionnés par l'innovation et l'excellence environnementale.", 
                        href: "/carrieres" 
                    }
                ]
            }
        ],
        promo: {
            title: "Prêt à  aimer votre eau?",
            subtitle: "Communiquez dès aujourd’hui avec l'un de nos experts en eau ou appelez-nous au 855-264-9328.",
            image: promoQuiSommesNousImg,
            link: "/contact-form",
            cta: "CONTACTEZ-NOUS"
        }
    },
    {
        name: "Ce que nous faisons",
        hasMegamenu: true,
        megamenuCards: [
            {
                title: "RÉSIDENTIEL",
                image: promoImage3,
                href: "/solutions-d-adoucissement-de-filtration-et-de-purification-d-eau-residentielles",
                links: [
                    { 
                        title: "Analyses & Tests d'eau", 
                        description: "Analysez et purifiez : une barrière infaillible contre les contaminants pour la sécurité de votre famille.", 
                        href: "/Analyses-et-Tests-d-eau?ref=residentiel" 
                    }, 
                    { 
                        title: "Adoucisseurs d'eau Résidentiels", 
                        description: "Éliminez le calcaire pour protéger vos électroménagers et retrouver une peau douce.", 
                        href: "/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire" 
                    },
                    { 
                        title: "Filtres d'eau spécialisés pour toute la maison", 
                        description: "Des solutions sur mesure pour neutraliser le fer, le soufre et les sédiments tenaces.", 
                        href: "/Systemes-de-filtration-d-eau-specialises-pour-toute-la-maison" 
                    },
                    { 
                        title: "Systèmes de filtration d'eau sous évier", 
                        description: "Une eau de qualité bouteille directement à  votre robinet, sans les déchets plastiques.", 
                        href: "/Stations-d-eau-potables-sous-l-evier-de-la-cuisine" 
                    },
                    { 
                        title: "Systèmes de désinfection UV", 
                        description: "Stérilisez votre eau sans produits chimiques pour une tranquillité d'esprit absolue.", 
                        href: "/systemes-de-desinfection-uv" 
                    },
                    { 
                        title: "Fontaines et refroidisseurs d'eau", 
                        description: "L'hydratation parfaite à  portée de main avec nos distributeurs élégants et performants.", 
                        href: "/fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche" 
                    },
                    { 
                        title: "Filtres d'eau de remplacement", 
                        description: "Cartouches d'origine certifiées pour maintenir l'excellence de votre filtration.", 
                        href: "/filtres-d-eau-de-remplacement" 
                    }
                ]
            },
            {
                title: "BUREAUX & ENTREPRISES",
                image: promoImage4, 
                href: "/solutions-de-traitement-d-eau-pour-offices-et-bureaux",
                links: [
                    { 
                        title: "Fontaines d'eau modernes", 
                        description: "Design épuré et eau pure à  volonté pour revitaliser vos équipes sans logistique de bouteilles.", 
                        href: "/fontaines-et-refroidisseurs-d-eau-modernes-pour-entreprises" 
                    },
                    { 
                        title: "Systèmes de traitement d'eau centralisés", 
                        description: "Ingénierie sur mesure pour alimenter en eau pure des étages entiers de bureaux.", 
                        href: "/systemes-de-filtration-d-eau-centralises" 
                    }
                ]
            },
            {
                title: "HÔTELLERIE ET RESTAURATION",
                image: promoImage2,
                href: "/solutions-de-traitement-et-filtration-d-eau-pour-hotels-et-restaurants",
                links: [
                    { 
                        title: "Adoucisseur d'eau commercial", 
                        description: "Éradiquez le tartre pour prolonger la vie de vos équipements de cuisine et de buanderie.", 
                        href: "/adoucisseurs-eau-commerciaux" 
                    }, 
                    { 
                        title: "Filtration d'eau", 
                        description: "Une qualité irréprochable de l'accueil jusqu'aux chambres pour sublimer l'expérience client.", 
                        href: "/filtration-hotels-restaurants" 
                    },
                    { 
                        title: "Solutions pour Brasseries", 
                        description: "L'eau parfaite, fondation d'une bière exceptionnelle et d'un processus de brassage constant.", 
                        href: "/solutions-brasseries" 
                    },
                    { 
                        title: "Filtres pour Machines à  Café", 
                        description: "Révélez chaque arôme de vos grains et protégez vos machines espresso des pannes coûteuses.", 
                        href: "/filtres-eau-machine-cafe" 
                    }
                ]
            },
            /*{
                title: "COMMERCIAL & INDUSTRIEL",
                image: promoImage,
                href: "/industriel",
                links: [
                    { 
                        title: "Systèmes de filtration industriels", 
                        description: "Architectures de traitement robustes pour répondre aux exigences des hauts débits.", 
                        href: "/filtration-industrielle" 
                    },
                    { 
                        title: "Adoucisseurs d'eau industriel", 
                        description: "Adoucissement continu 24/7 pour sécuriser vos chaudières et tours de refroidissement.", 
                        href: "/industriel" 
                    },
                    { 
                        title: "Systèmes d'osmose inverse", 
                        description: "Purification de grade moléculaire pour vos procédés de fabrication les plus stricts.", 
                        href: "/industriel" 
                    },
                    { 
                        title: "Systèmes de désinfection UV à  haut débit", 
                        description: "Biocontrôle absolu et stérilisation massive pour les applications critiques.", 
                        href: "/systemes-de-desinfection-uv" 
                    }
                ]
            }*/
        ],
        megamenuGroups: []
    },
    {
        name: "Ressources",
        hasMegamenu: true,
        megamenuGroups: [
            {
                items: [
                    { 
                        title: "Analyses & Tests d'eau", 
                        description: "Réservez votre audit de qualité d'eau et obtenez un rapport détaillé de nos ingénieurs.", 
                        href: "/Analyses-et-Tests-d-eau?ref=ressources" 
                    },
                    { 
                        title: "Nos Services", 
                        description: "Installation premium, entretien préventif et dépannage d'urgence par nos techniciens.", 
                        href: "/services-de-traitement-eau" 
                    },
                    { 
                        title: "Diagnostic", 
                        description: "Identifiez le système parfait pour votre besoin grâce à  notre outil interactif en ligne.", 
                        href: "/diagnostic" 
                    },
                                    ]
            },
            {
                items: [
                    { 
                        title: "Blog", 
                        description: "Guides pratiques, conseils d'experts et actualités pour tout savoir sur l'eau pure.", 
                        href: "/blog" 
                    },
                    { 
                        title: "FAQ", 
                        description: "Des réponses claires et rapides aux questions courantes sur nos technologies.", 
                        href: "/faq" 
                    }
                ]
            }
        ],

        promo: {
            title: "Analyse d'eau",
            subtitle: "Une eau parfaite commence par une analyse rigoureuse.",
            image: resourcesPromoImg,
            link: "/Analyses-et-Tests-d-eau",
            cta: "APPRENEZ-EN DAVANTAGE SUR LES TESTS D'EAU"
        }
    }
];

export const productMenuItems: MenuItem[] = [
  {
    name: "Adoucissement d'eau",
    href: "/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: WatersoftenericonImg,
        title: "Adoucisseurs d'eau",
        description: "Éliminez le calcaire, protégez vos électroménagers et profitez d'une peau et de cheveux plus sains avec une eau parfaitement douce.",
        href: "/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire"
      },
      {
        customIcon: saltfreeiconImg,
        title: "Conditionneurs d'eau sans sel",
        description: "La solution antitartre écologique : prévenez l'accumulation de calcaire sans sel, sans rejet d'eau et sans entretien.",
        href: "/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire"
      },
      {
        customIcon: portablefiltericonImg,
        title: "Adoucisseurs d'eau portables",
        description: "La solution flexible pour une eau douce sans installation permanente. Idéal pour les VR et résidences secondaires.",
        href: "/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire"
      },
      {
        customIcon: WatersoftenericonImg,
        title: "Adoucisseurs d'eau commerciaux",
        description: "Solutions haute performance pour entreprises, hôtels et industries. Protection maximale des équipements.",
        href: "/adoucisseurs-d-eau-residentiels-pour-une-eau-sans-calcaire"
      },
    ],
    promo: {
      title: "Une eau parfaite commence par une analyse rigoureuse.",
      image: promoImage2,
      link: "/Analyses-et-Tests-d-eau"
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
        href: "/filtration"
      },
      {
        customIcon: pointofusefiltericonImg,
        title: "Stations d'eau potable",
        description: "Profitez d'une eau pure et saine directement de votre robinet avec nos systèmes de filtration avancés.",
        href: "/filtration"
      },
      {
        customIcon: pointofusefiltericonImg,
        title: "Filtration d'eau Potable",
        description: "Découvrez nos solutions de filtration par osmose inverse pour une pureté inégalée.",
        href: "/filtration"
      },
      {
        customIcon: undersinkfiltericonImg,
        title: "Systèmes de filtration d'eau sous-évier",
        description: "Solutions compactes et efficaces pour une filtration optimale directement sous votre évier.",
        href: "/Stations-d-eau-potables-sous-l-evier-de-la-cuisine"
      },
      {
        customIcon: replacementfiltericonImg,
        title: "Cartouches filtrantes de remplacement",
        description: "Maintenez la performance optimale de vos systèmes avec nos cartouches de qualité.",
        href: "/filtres-d-eau-de-remplacement"
      },
    ],
    promo: {
      title: "Protégez votre famille des contaminants invisibles qui peuvent avoir des effets à  long terme",
      image: promoImage3,
      link: "/Analyses-et-Tests-d-eau"
    }
  },
  {
    name: "Traitement de l'eau de puits",
    href: "/Systemes-de-filtration-d-eau-specialises-pour-toute-la-maison",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: watertestImg,
        title: "Analyses & Tests d'eau",
        description: "Tests complets pour identifier les contaminants et problèmes de qualité de votre eau de puits.",
        href: "/Analyses-et-Tests-d-eau"
      },
      {
        customIcon: wholehousefiltericonImg,
        title: "Systèmes de filtration d'eau spécialisés",
        description: "Nos systèmes de filtration d’eau spécialisés pour toute la maison est la solution abordable et durable pour obtenir une eau de meilleure qualité à  chaque robinet de votre maison.",
        href: "/filtration"
      },
      {
        customIcon: WatersoftenericonImg,
        title: "Adoucisseurs d'eau de puits",
        description: "Dites adieu aux problèmes de calcaire ! Nos adoucisseurs d’eau traitent durablement l’eau contre ses méfaits pour vous faire bénéficier d’une eau douce toute l’année.",
        href: "/Systemes-de-filtration-d-eau-specialises-pour-toute-la-maison"
      },
      {
        customIcon: ultravioletImg,
        title: "Systèmes de désinfection UV",
        description: "Les systèmes de désinfection de l’eau à  rayons ultraviolet stérilisent l’approvisionnement en eau de votre maison contre les micro-organismes nuisibles.",
        href: "/systemes-de-desinfection-uv"
      },
    ],
    promo: {
      title: "Des tests d'eau précis pour une tranquillité d'esprit totale.",
      image: promoImage4,
      link: "/Analyses-et-Tests-d-eau"
    }
  },
  {
    name: "Fontaines & distributeurs d'eau",
    href: "/fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche",
    hasMegamenu: false,
    megamenuCards: [
      {
        customIcon: drinkingwaterfountainiconImg,
        title: "Distributeurs d'eau de comptoir",
        description: "Solutions tout-en-un offrant eau froide, chaude et glace dans un seul appareil.",
        href: "/fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche"
      },
      {
        customIcon: waterdispensericonImg,
        title: "Refroidisseurs d'eau sans bouteille",
        description: "Eau fraîche et filtrée à  la demande pour votre bureau ou votre maison.",
        href: "/fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche"
      },
      {
        customIcon: icemakericonImg,
        title: "Machines à  glaçons",
        description: "Glace propre et abondante pour toutes vos occasions et besoins quotidiens.",
        href: "/fontaines-et-refroidisseurs-d-eau-pour-une-eau-fraiche"
      },
    ],
    promo: {
      title: "Profitez d'une eau pure et revitalisante au quotidien",
      image: promoImage,
      link: "/filtration"
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
        description: "Trouvez le système de filtration d'eau parfait pour vos besoins en répondant à  quelques questions simples.",
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
      title: "Nous sommes là  pour vous aider",
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
        href: "/Analyses-et-Tests-d-eau"
      },
      {
        customIcon: serviceiconImg,
        title: "Ingénierie de Déploiement",
        description: "Accompagnement complet de la conception à  l'installation de vos systèmes complexes.",
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
        description: "Parlez directement à  un ingénieur spécialisé dans le traitement d'eau.",
        href: "/contact"
      },
    ],
    promo: {
      title: "Consultez le centre de documentation technique.",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=600&auto=format&fit=crop",
      link: "/faq"
    }
  },
];

export const entreprisesProductMenuItems: MenuItem[] = [
  {
    name: "Fontaines d'Eau Modernes",
    href: "/fontaines-et-refroidisseurs-d-eau-modernes-pour-entreprises",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: waterdispensericonImg,
        title: "Fontaines Sans Bouteille",
        description: "Reliées au réseau, filtration intégrée pour une eau fraîche continue au bureau sans logistique de bouteilles.",
        href: "/fontaines-et-refroidisseurs-d-eau-modernes-pour-entreprises"
      },
      {
        customIcon: drinkingwaterfountainiconImg,
        title: "Distributeurs Haute Capacité",
        description: "Solutions pour usines, cafétérias et grands lieux publics avec filtration UV optionnelle.",
        href: "/fontaines-et-refroidisseurs-d-eau-modernes-pour-entreprises"
      },
    ],
    promo: {
      title: "Essai gratuit de 7 jours en entreprise au Québec.",
      image: promoImage3,
      link: "/contact"
    }
  },
  {
    name: "Machines à  glace",
    href: "/entreprises",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: icemakericonImg,
        title: "Unités de Production de Glace",
        description: "Systèmes de glaçons haute performance pour vos réceptions d'affaires et salles de repos.",
        href: "/entreprises"
      },
    ],
    promo: {
      title: "Une glace pure, une image de marque soignée.",
      image: promoImage4,
      link: "/entreprises"
    }
  },
  {
     name: "Machines à  café",
     href: "/entreprises",
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
      link: "/faq"
    }
  },
  {
    name: "Soutien",
    hasMegamenu: true,
    megamenuCards: [
      {
        customIcon: contacticonImg,
        title: "Équipe Expert Conseil",
        description: "Parlez à  un conseiller spécialisé dans les solutions d'eau pour entreprises.",
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

