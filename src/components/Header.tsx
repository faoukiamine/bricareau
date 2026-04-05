import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, MapPin, Droplets, Filter, GlassWater, Waves, Search, ChevronDown, Mail, Tag, ArrowRight, CupSoda, Caravan, Sprout, Leaf, House, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import promoImage from "@/assets/10341859.jpg";
import promoImage2 from "@/assets/close-up-handsom-man-taking-bath.jpg";
import promoImage3 from "@/assets/woman-and-kid-drink-glass-water.jpg";
import promoImage4 from "@/assets/undersink_filtration_header.jpg";
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
import guaranteeiconImg from "@/assets/guarantee-certificate_3734879.png";
import serviceiconImg from "@/assets/services_5062832.png";

interface MegamenuCard {
  customIcon?: string;
  svgIcon?: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

interface MenuItem {
  name: string;
  href?: string;
  hasMegamenu: boolean;
  megamenuCards?: MegamenuCard[];
  promo?: {
    title: string;
    image: string;
    link: string;
  };
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMegamenu, setActiveMegamenu] = useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearchClosing, setIsSearchClosing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", updateHeaderHeight);

    // Initial measure
    updateHeaderHeight();

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  // Re-measure height when location changes
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [location.pathname]);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveMegamenu(null);
      }
      // Check if click is outside search panel, compact search input, AND mobile search button
      const clickedOutsidePanel = searchRef.current && !searchRef.current.contains(event.target as Node);
      const clickedOutsideInput = searchInputRef.current && !searchInputRef.current.contains(event.target as Node);
      const clickedOutsideMobileButton = mobileSearchButtonRef.current && !mobileSearchButtonRef.current.contains(event.target as Node);
      if (clickedOutsidePanel && clickedOutsideInput && clickedOutsideMobileButton) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setActiveMegamenu(null);
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const primaryMenuItems = [
    { name: "Résidentiel", href: "/" },
    { name: "Entreprises", href: "/entreprises" },
    { name: "Commercial", href: "/commercial-industriel" },
  ];

  const productMenuItems: MenuItem[] = [
    {
      name: "Adoucissement d'eau",
      href: "/adoucissement",
      hasMegamenu: true,
      megamenuCards: [
        {
          customIcon: WatersoftenericonImg,
          title: "Adoucisseurs d'eau",
          description: "Éliminez le calcaire, protégez vos électroménagers et profitez d'une peau et de cheveux plus sains avec une eau parfaitement douce.",
          href: "/adoucisseur-eau-residentiel"
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
          svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" fill="currentColor">
              <path d="M572-352q12-12 12-29t-12-29q-12-12-29-12t-29 12q-12 12-12 29t12 29q12 12 29 12t29-12Zm-54-114h47q2-29 8.5-43t32.5-39q27-26 37.5-45.4Q654-612.79 654-639q0-45.88-31.5-74.94Q591-743 540-743q-38 0-68 20.5T428-665l45 19q11-25 27.5-38t39.5-13q29.78 0 48.39 17T607-637q0 20-9 35t-32 32q-32 29-40 46.5t-8 57.5ZM260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"/>
            </svg>
          ),
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
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop",
        link: "/contact"
      }
    },
  ];

  const commercialProductMenuItems: MenuItem[] = [
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

  const isCommercialPage = location.pathname.includes('/commercial-industriel');
  const isEntreprisePage = location.pathname.includes('/entreprises');

  const entreprisesProductMenuItems: MenuItem[] = [
    {
      name: "Refroidisseurs d’eau",
      href: "/fontaines",
      hasMegamenu: true,
      megamenuCards: [
        {
          customIcon: waterdispensericonImg,
          title: "Fontaines Sans Bouteille",
          description: "Reliées au réseau, filtration intégrée pour une eau fraîche continue au bureau sans logistique de bouteilles.",
          href: "/fontaines"
        },
        {
          customIcon: drinkingwaterfountainiconImg,
          title: "Distributeurs Haute Capacité",
          description: "Solutions pour usines, cafétérias et grands lieux publics avec filtration UV optionnelle.",
          href: "/fontaines"
        },
      ],
      promo: {
        title: "Essai gratuit de 7 jours en entreprise au Québec.",
        image: promoImage3,
        link: "/contact"
      }
    },
    {
      name: "Eau Pétillante",
      href: "/fontaines",
      hasMegamenu: false
    },
    {
      name: "Machines à glace",
      href: "/fontaines",
      hasMegamenu: true,
      megamenuCards: [
        {
          customIcon: icemakericonImg,
          title: "Unités de Production de Glace",
          description: "Systèmes de glaçons haute performance pour vos réceptions d'affaires et salles de repos.",
          href: "/fontaines"
        },
      ],
      promo: {
        title: "Une glace pure, une image de marque soignée.",
        image: promoImage4,
        link: "/fontaines"
      }
    },
    {
       name: "Machines à café",
       href: "/fontaines",
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

  let activeMenuToDisplay = productMenuItems;
  if (isCommercialPage) {
    activeMenuToDisplay = commercialProductMenuItems;
  } else if (isEntreprisePage) {
    activeMenuToDisplay = entreprisesProductMenuItems;
  }

  const handleMenuEnter = (itemName: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMegamenu(itemName);
    setActiveDropdown(null);
    setIsSearchFocused(false);
    setIsSearchClosing(false);
  };

  const handleMenuLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegamenu(null);
    }, 150);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
    setActiveMegamenu(null);
  };

  const handleSearchClose = () => {
    setIsSearchFocused(false);
    setSearchQuery("");
  };

  const handlePopularSearchClick = (term: string) => {
    setSearchQuery(term);
    // Here you would typically trigger a search or navigation
    console.log("Searching for:", term);
  };

  const isHeaderTransparent = false;

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white shadow-md" ref={headerRef}>

        {/* Top Information Bar */}
        {/* Top Information Bar (Hidden) */}
        {/* <a
          href="/consultation"
          className={cn(
            "block w-full transition-colors text-center py-2",
            isHeaderTransparent ? "bg-transparent border-b border-white/10" : "bg-blue-600 hover:bg-blue-700"
          )}
        >
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-center gap-2 text-white">
            <span className="text-sm font-bold">Obtenez une consultation gratuite sur votre eau</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </a> */}

        {/* Upper Navigation Bar - Primary Menu + Utilities */}
        <div className="border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex h-16 lg:h-12 items-center justify-between">
              {/* Left: Primary Menu (Desktop) */}
              <nav className="hidden lg:flex items-center gap-1" role="navigation">
                {primaryMenuItems.map((item, index) => (
                  <div key={item.name} className="flex items-center">
                    <NavLink
                      to={item.href}
                      className={cn(
                        "text-sm transition-colors px-3",
                        isHeaderTransparent ? "text-white hover:text-blue-200" : "text-gray-800 hover:text-[#0052ff]"
                      )}
                    >
                      {item.name}
                    </NavLink>
                    {index < primaryMenuItems.length - 1 && (
                      <span className="text-gray-300">|</span>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Logo */}
              <div className="lg:hidden flex items-center">
                <NavLink to="/" className="flex items-center">
                  <img
                    src="/logo.png"
                    alt="Bricareau Water Specialist - Traitement d'eau résidentiel au Canada"
                    className="h-12 w-auto object-contain"
                  />
                </NavLink>
              </div>

              {/* Right: Utilities */}
              <div className="hidden lg:flex items-center gap-6 ml-auto">
                {/* Phone */}


                {/* Contact */}
                <a
                  href="/contact"
                  className={cn(
                    "flex items-center gap-2 transition-colors group",
                    isHeaderTransparent ? "text-white hover:text-blue-200" : "text-gray-700 hover:text-[#0052ff]"
                  )}
                >
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                  <span className="text-sm">Contactez-nous</span>
                </a>

                {/* Localisation */}
                <a
                  href="https://www.google.com/maps/place/BRICAREAU+WATER+SPECIALIST/@45.5005535,-73.6423534,211m/data=!3m2!1e3!5s0x4cc919c4436a5a3f:0x5bb245a9935b5ece!4m6!3m5!1s0x4cc9229b28364297:0xd763dce82ea51a5f!8m2!3d45.5005535!4d-73.6423534!16s%2Fg%2F1pv5wd45p?entry=tts&g_ep=EgoyMDI2MDExMy4wIPu8ASoASAFQAw%3D%3D&skid=dc936ed0-8357-4347-8629-14786f46d771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-2 transition-colors group",
                    isHeaderTransparent ? "text-white hover:text-blue-200" : "text-gray-700 hover:text-[#0052ff]"
                  )}
                >
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  <span className="text-sm">Localisation</span>
                </a>

                {/* Promotions */}
                <a
                  href="/promotions"
                  className={cn(
                    "flex items-center gap-2 transition-colors group",
                    isHeaderTransparent ? "text-white hover:text-blue-200" : "text-gray-700 hover:text-[#0052ff]"
                  )}
                >
                  <Tag className="h-5 w-5" strokeWidth={1.5} />
                  <span className="text-sm">Promotions</span>
                </a>
              </div>

              {/* Mobile: Icon Row */}
              <div className="lg:hidden flex items-center gap-4 ml-auto">
                <button
                  ref={mobileSearchButtonRef}
                  className="p-2"
                  aria-label="Search"
                  onClick={() => {
                    setIsSearchFocused(true);
                    setIsMenuOpen(false);
                    setActiveMegamenu(null);
                  }}
                >
                  <Search className={cn("h-5 w-5", isHeaderTransparent ? "text-white" : "text-gray-700")} strokeWidth={1.5} />
                </button>
                <a href="tel:18552649328" className="p-2 md:hidden" aria-label="Phone">
                  <Phone className={cn("h-5 w-5", isHeaderTransparent ? "text-white" : "text-gray-700")} strokeWidth={1.5} />
                </a>
                <a href="https://www.google.com/maps/place/BRICAREAU+WATER+SPECIALIST/@45.5005535,-73.6423534,211m/data=!3m2!1e3!5s0x4cc919c4436a5a3f:0x5bb245a9935b5ece!4m6!3m5!1s0x4cc9229b28364297:0xd763dce82ea51a5f!8m2!3d45.5005535!4d-73.6423534!16s%2Fg%2F1pv5wd45p?entry=tts&g_ep=EgoyMDI2MDExMy4wIPu8ASoASAFQAw%3D%3D&skid=dc936ed0-8357-4347-8629-14786f46d771" className="p-2" aria-label="Location" target="_blank" rel="noopener noreferrer">
                  <MapPin className={cn("h-5 w-5", isHeaderTransparent ? "text-white" : "text-gray-700")} strokeWidth={1.5} />
                </a>
                <button
                  className="p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className={cn("h-6 w-6", isHeaderTransparent ? "text-white" : "text-gray-700")} strokeWidth={1.5} /> : <Menu className={cn("h-6 w-6", isHeaderTransparent ? "text-white" : "text-gray-700")} strokeWidth={1.5} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Navigation Bar - Logo + Product Menu + Search */}
        <div className="hidden lg:block border-b border-gray-200 bg-white shadow-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex h-16 items-center gap-8">
              {/* Left: Logo */}
              <div className="flex items-center flex-shrink-0">
                <NavLink to="/" className="flex items-center">
                  <img
                    src="/logo.png"
                    alt="Bricareau Water Specialist - Expert en adoucissement et filtration d'eau"
                    className="h-14 w-auto object-contain"
                  />
                </NavLink>
              </div>

              {/* Center: Product Menu */}
              <nav className="flex items-center gap-6 flex-1 justify-center">
                {activeMenuToDisplay.map((item) => (
                  <div key={item.name} className="relative">
                    <button
                      onMouseEnter={() => item.hasMegamenu ? handleMenuEnter(item.name) : null}
                      onMouseLeave={() => item.hasMegamenu ? handleMenuLeave() : null}
                      onClick={() => {
                        if (item.href) {
                          navigate(item.href);
                          setActiveMegamenu(null);
                        }
                      }}
                      className={cn(
                        "text-sm transition-colors relative h-16 flex items-center",
                        !item.href && "cursor-default",
                        isHeaderTransparent
                          ? (activeMegamenu === item.name ? "text-blue-200 border-b-2 border-white" : "text-white hover:text-blue-200")
                          : (activeMegamenu === item.name ? "text-[#0052ff] border-b-2 border-[#0052ff]" : "text-gray-700 hover:text-[#0052ff]")
                      )}
                      aria-haspopup={item.hasMegamenu ? "true" : undefined}
                      aria-expanded={activeMegamenu === item.name}
                    >
                      {item.name}
                    </button>
                  </div>
                ))}
              </nav>

              {/* Right: Search */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="relative">
                  <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none z-10", isHeaderTransparent ? "text-white" : "text-gray-500")} strokeWidth={1.5} />
                  <Input
                    ref={searchInputRef}
                    type="search"
                    placeholder="Recherche"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={cn(
                      "w-64 h-9 pl-10 pr-4 text-sm border-gray-300 rounded-full focus-visible:ring-2 focus-visible:ring-[#0052ff] focus-visible:border-[#0052ff] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden transition-colors",
                      isHeaderTransparent ? "bg-white/10 border-white/30 text-white placeholder:text-white/60" : "bg-white border-gray-300 text-gray-900"
                    )}
                    onFocus={() => {
                      setIsSearchFocused(true);
                      setActiveMegamenu(null);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Expandable Search Panel */}
        {isSearchFocused && (
          <>

            {/* Search Panel */}
            <div
              ref={searchRef}
              className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 lg:animate-in lg:slide-in-from-top lg:duration-200 max-h-[calc(100vh-80px)] overflow-y-auto"
            >

              <div className="container mx-auto px-4 md:px-6 md:py-8">
                {/* Search Box with Close Button */}
                <div className="max-w-2xl mx-auto mb-6 md:mb-8 lg:mt-0 flex items-center gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-4 md:h-5 w-4 md:w-5 text-gray-500 pointer-events-none" />
                    <Input
                      type="search"
                      placeholder="Rechercher sur Bricareau.com"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-11 md:h-12 pl-10 md:pl-12 pr-4 text-sm md:text-base border-gray-300 rounded-full focus-visible:ring-2 focus-visible:ring-[#0052ff] focus-visible:border-[#0052ff] shadow-sm [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
                      autoFocus
                    />
                  </div>
                  {/* Close Button */}
                  <button
                    onClick={handleSearchClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                    aria-label="Close search"
                  >
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                </div>

                {/* Popular Search Terms */}
                <div className="max-w-2xl mx-auto">
                  <h4 className="text-sm text-gray-900 mb-3">Recherches populaires</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "adoucisseur d'eau",
                      "filtration",
                      "eau de puits",
                      "fontaines",
                      "osmose inverse",
                      "conditionneurs sans sel",
                      "analyse d'eau",
                      "service"
                    ].map((term, index) => (
                      <button
                        key={index}
                        onClick={() => handlePopularSearchClick(term)}
                        className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs md:text-sm rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0052ff] focus:ring-offset-2"
                        tabIndex={0}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Megamenus */}
        {activeMenuToDisplay.map((menuItem) => (
          menuItem.hasMegamenu && activeMegamenu === menuItem.name && (
            <div
              key={menuItem.name}
              className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl z-40"
              onMouseEnter={() => handleMenuEnter(menuItem.name)}
              onMouseLeave={() => handleMenuLeave()}
            >
              <div className="container mx-auto px-4 md:px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Product Cards (2x2 grid) */}
                  <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {menuItem.megamenuCards?.map((card, index) => {
                      const CustomIcon = card.customIcon;
                      return (
                        <NavLink
                          key={index}
                          to={card.href}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all group"
                          onClick={() => setActiveMegamenu(null)}
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            {card.svgIcon ? (
                              <div className="h-10 w-10 flex items-center justify-center text-blue-600">
                                {card.svgIcon}
                              </div>
                            ) : card.customIcon ? (
                              <img
                                src={card.customIcon}
                                alt={card.title}
                                className="h-10 w-10 object-contain transition-all"
                                style={{
                                  filter: 'invert(21%) sepia(100%) saturate(4321%) hue-rotate(225deg) brightness(98%) contrast(107%)'
                                }}
                              />
                            ) : null}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base mb-1.5 transition-colors text-gray-900 group-hover:text-[#0052ff]">
                              {card.title}
                            </h4>
                            <p className="text-sm transition-colors text-gray-600">
                              {card.description}
                            </p>
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>

                  {/* Right: Promotional Card */}
                  {menuItem.promo && (
                    <div className="lg:col-span-1">
                      <div className="rounded-xl overflow-hidden shadow-md h-full flex flex-col bg-white">
                        <div className="relative h-40 flex-shrink-0">
                          <img
                            src={menuItem.promo.image}
                            alt={menuItem.promo.title || "Promotion Bricareau"}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-center bg-[#0052ff]">
                          <h3 className="mb-4 text-white text-lg md:text-xl font-bold leading-tight">
                            {menuItem.promo.title}
                          </h3>
                          <a
                            href={menuItem.promo.link}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline"
                          >
                            En savoir plus
                            <ChevronDown className="h-4 w-4 -rotate-90" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        ))}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-12 bg-white z-40 overflow-y-auto">
            <div className="flex flex-col h-full">
              {/* Main Content Area */}
              <div className="flex-1 overflow-y-auto">
                {/* CTA Button */}
                <div className="px-4 pt-6 pb-4">
                  <Button
                    className="w-full"
                    asChild
                  >
                    <a href="/contact" className="flex items-center justify-center gap-2">
                      <span>Contactez-nous</span>
                    </a>
                  </Button>
                </div>

                {/* Product Menu - Accordion Style */}
                <div className="border-t border-gray-200">
                  {activeMenuToDisplay.map((item) => (
                    <div key={item.name} className="border-b border-gray-200">
                      {item.hasMegamenu ? (
                        <div>
                          <div className="flex items-center justify-between w-full">
                            {item.href ? (
                              <NavLink
                                to={item.href}
                                className="flex-1 px-4 py-4 text-left text-base text-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </NavLink>
                            ) : (
                              <span className="flex-1 px-4 py-4 text-left text-base text-gray-900">
                                {item.name}
                              </span>
                            )}
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleDropdownToggle(`mobile-${item.name}`);
                              }}
                              className="p-4 focus:outline-none"
                              aria-label="Toggle dropdown"
                            >
                              <ChevronDown
                                className={cn(
                                  "h-5 w-5 text-gray-500 transition-transform",
                                  activeDropdown === `mobile-${item.name}` && "rotate-180"
                                )}
                              />
                            </button>
                          </div>
                          {activeDropdown === `mobile-${item.name}` && item.megamenuCards && (
                            <div className="bg-gray-50 px-4 pb-4">
                              {item.megamenuCards.map((card, idx) => (
                                <NavLink
                                  key={idx}
                                  to={card.href}
                                  className="block py-2.5 text-sm text-gray-700 hover:text-[#0052ff]"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {card.title}
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <NavLink
                          to={item.href}
                          className="flex items-center justify-between w-full px-4 py-4"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-base text-gray-900">{item.name}</span>
                          <ChevronDown className="h-5 w-5 text-gray-500 -rotate-90" />
                        </NavLink>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Navigation Bar */}
              <div className="border-t border-gray-200 bg-white">
                {/* Primary Menu Items */}
                <div className="flex items-center justify-center gap-1 px-4 py-4 border-b border-gray-200">
                  {primaryMenuItems.map((item, index) => (
                    <div key={item.name} className="flex items-center">
                      <NavLink
                        to={item.href}
                        className={({ isActive }) => cn(
                          "text-sm font-medium px-3 py-1 transition-colors",
                          isActive
                            ? "text-[#0052ff] border-b-2 border-[#0052ff]"
                            : "text-gray-700 hover:text-[#0052ff]"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                      {index < primaryMenuItems.length - 1 && (
                        <span className="text-gray-300">|</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Phone Link */}
                <div className="px-4 py-4">
                  <a
                    href="tel:18552649328"
                    className="flex items-center justify-center gap-2 text-[#0052ff]"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Appeler 1-855-264-9328</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <div style={{ height: headerHeight }} />
    </>
  );
};

export default Header;
