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
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateHeaderHeight);

    // Initial measure
    updateHeaderHeight();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  // Re-measure height when scrolled or location changes
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [isScrolled, location.pathname]);

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

  const productMenuItems = [
    {
      name: "Adoucissement d'eau",
      href: "/adoucissement",
      hasMegamenu: true,
      megamenuCards: [
        {
          icon: Droplets,
          title: "Adoucisseurs d'eau",
          description: "Traitez le problème de l’eau dure, un problème courant pour les propriétaires de puits et obtenez l’eau la plus douce que vous méritez.",
          href: "/adoucisseur-eau-residentiel",
        },
        {
          icon: Leaf,
          title: "Conditionneurs d'eau sans sel",
          description: "Réduisez l'accumulation sans gaspillage d'eau, parfait pour les zones à restriction de saumure.",
          href: "/conditionneurs-sans-sel",
        },
        {
          icon: Caravan,
          title: "Adoucisseurs d'eau portables",
          description: "La solution flexible pour une eau douce sans installation permanente. Idéal pour les VR et résidences secondaires.",
          href: "/adoucisseurs-portables"
        },


      ],
      promo: {
        title: "Une eau parfaite commencence par une analyse rigoureuse.",
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
          icon: GlassWater,
          title: "Filtres d'eau pour toute la maison",
          description: "Protection complète de votre maison avec une filtration centralisée pour toute l'eau.",
          href: "/Filtres-deau-pour-toute-la-maison"
        },
        {
          icon: Filter,
          title: "Stations d'eau potable",
          description: "Profitez d'une eau pure et saine directement de votre robinet avec nos systèmes de filtration avancés.",
          href: "/systeme-de-filtration-deau-potable"
        },
        {
          icon: Droplets,
          title: "Systèmes de filtration d'eau sous-évier",
          description: "Solutions compactes et efficaces pour une filtration optimale directement sous votre évier.",
          href: "/Systemes-de-filtration-deau-sous-evier"
        },
        {
          icon: Waves,
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
      href: "/eau-de-puits",
      hasMegamenu: true,
      megamenuCards: [
        {
          icon: Droplets,
          title: "Analyses & Tests d'eau",
          description: "Tests complets pour identifier les contaminants et problèmes de qualité de votre eau de puits.",
          href: "/tests-eau"
        },
        {
          icon: Filter,
          title: "Systèmes de filtration d'eau spécialisés",
          description: "Nos systèmes de filtration d’eau spécialisés pour toute la maison est la solution abordable et durable pour obtenir une eau de meilleure qualité à chaque robinet de votre maison.",
          href: "/Filtres-deau"
        },
        {
          icon: Filter,
          title: "Adoucisseurs d'eau de puits",
          description: "Dites adieu aux problèmes de calcaire ! Nos adoucisseurs d’eau traitent durablement l’eau contre ses méfaits pour vous faire bénéficier d’une eau douce toute l’année.",
          href: "/adoucisseurs-eau-de-puits"
        },
        {
          icon: GlassWater,
          title: "Systèmes de désinfection UV",
          description: "Les systèmes de désinfection de l’eau à rayons ultraviolet stérilisent l’approvisionnement en eau de votre maison contre les micro-organismes nuisibles.",
          href: "/Systemes-de-desinfection-UV"
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
      hasMegamenu: true,
      megamenuCards: [
        {
          icon: Waves,
          title: "Distributeurs d'eau de comptoir",
          description: "Solutions tout-en-un offrant eau froide, chaude et glace dans un seul appareil.",
          href: "/distributeurs-eau-comptoir"
        },
        {
          icon: GlassWater,
          title: "Refroidisseurs d'eau sans bouteille",
          description: "Eau fraîche et filtrée à la demande pour votre bureau ou votre maison.",
          href: "/refroidisseurs"
        },
        {
          icon: Snowflake,
          title: "Machines à glaçons",
          description: "Glace propre et abondante pour toutes vos occasions et besoins quotidiens.",
          href: "/machines-a-glace"
        },

      ],
      promo: {
        title: "Profitez d'une eau pure et revitalisante au quotidien",
        image: promoImage,
        link: "/systeme-de-filtration-deau-potable"
      }
    },
    {
      name: "Ressources",
      href: "/faq",
      hasMegamenu: true,
      megamenuCards: [
        {
          icon: Filter,
          title: "FAQ",
          description: "Trouvez rapidement des réponses aux questions les plus fréquemment posées sur nos produits.",
          href: "/faq"
        },
        {
          icon: Droplets,
          title: "Blog",
          description: "Conseils, actualités et informations sur le traitement de l'eau et nos solutions.",
          href: "/blog"
        },
        {
          icon: GlassWater,
          title: "Guides",
          description: "Guides détaillés pour vous aider à choisir et entretenir vos systèmes de traitement d'eau.",
          href: "/guides"
        },
        {
          icon: Waves,
          title: "Vidéos",
          description: "Tutoriels vidéo et démonstrations de nos produits et services.",
          href: "/videos"
        },
      ],
      promo: {
        title: "Centre d'apprentissage",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop",
        link: "/ressources"
      }
    },
    {
      name: "Support",
      href: "/contact",
      hasMegamenu: true,
      megamenuCards: [
        {
          icon: Phone,
          title: "Contact",
          description: "Contactez notre équipe d'experts pour toute question ou demande d'information.",
          href: "/contact"
        },
        {
          icon: Filter,
          title: "Service",
          description: "Planifiez un entretien ou une réparation avec nos techniciens certifiés.",
          href: "/service"
        },
        {
          icon: Droplets,
          title: "Garantie",
          description: "Informations sur nos garanties et protection de vos investissements.",
          href: "/garantie"
        },
        {
          icon: GlassWater,
          title: "Pièces",
          description: "Commandez des pièces de rechange originales pour vos équipements.",
          href: "/pieces"
        },
      ],
      promo: {
        title: "Nous sommes là pour vous aider",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop",
        link: "/contact"
      }
    },
  ];

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

  // Check if we are on a page that should have a transparent header
  const transparentPaths = [
    "/",
    "/adoucisseurs-portables",
    "/adoucissement",
    "/adoucisseur-eau-residentiel",
    "/eau-de-puits",
    "/specialises-filtration-eau",
    "/conditionneurs-sans-sel",
    "/entreprises",
    "/commercial-industriel",
    "/osmose-filtration",
    "/eau-dure",
    "/filtration",
    "/fontaines",
    "/systemes-de-filtration-deau-sous-evier",
    "/systemes-de-desinfection-uv",
    "/tests-eau",
    "/filtres-deau",
    "/adoucisseurs-eau-de-puits",
    "/systeme-de-filtration-deau-potable",
    "/filtres-deau-pour-toute-la-maison",
    "/filtre-eau-haute-efficacite",
    "/ro-6",
    "/adoucisseur-deau-et-fosse-septique-mythes-et-realites",
    "/adoucisseur-deau-portable-pour-vr",
    "/adoucisseur-sans-sel-vs-avec-sel-verite-technique",
    "/comment-regler-durete-adoucisseur-eau",
    "/comment-un-adoucisseur-reduit-votre-facture-delectricite",
    "/consommation-deau-un-adoucisseur-est-il-ecologique",
    "/eau-dure-les-effets-caches-sur-vos-electromenagers",
    "/est-ce-securitaire-de-boire-de-leau-adoucie",
    "/gout-de-chlore-pourquoi-la-ville-en-ajoute-autant",
    "/hivernisation-comment-proteger-vos-filtres-du-gel",
    "/pourquoi-leau-de-votre-bac-a-sel-est-elle-sale",
    "/quel-sel-choisir-pour-votre-adoucisseur-pastilles-ou-cristaux",
    "/aquarium-pourquoi-leau-osmosee-est-vitale-pour-vos-poissons",
    "/le-vrai-cout-de-leau-embouteillee-calculez-vos-economies",
    "/eau-et-bebes-faut-il-faire-bouillir-leau-filtree"
  ];
  const isTransparentPage = transparentPaths.includes(location.pathname.toLowerCase());
  const isHeaderTransparent = isTransparentPage && !isScrolled && !isMenuOpen;

  return (
    <>
      <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isHeaderTransparent ? "bg-transparent" : "bg-white shadow-md"
      )} ref={headerRef}>

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
        <div className={cn(
          "transition-all duration-300 border-b",
          isHeaderTransparent ? "border-white/10 bg-transparent" : "border-gray-200 bg-white"
        )}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex h-16 lg:h-12 items-center justify-between">
              {/* Left: Primary Menu (Desktop) */}
              <nav className="hidden lg:flex items-center gap-1" role="navigation">
                {primaryMenuItems.map((item, index) => (
                  <div key={item.name} className="flex items-center">
                    <NavLink
                      to={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors px-3",
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
                <a
                  href="tel:18552649328"
                  className={cn(
                    "flex items-center gap-2 transition-colors group",
                    isHeaderTransparent ? "text-white hover:text-blue-200" : "text-gray-700 hover:text-[#0052ff]"
                  )}
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-sm font-medium">Appelez-nous</span>
                </a>

                {/* Contact */}
                <a
                  href="/contact"
                  className={cn(
                    "flex items-center gap-2 transition-colors group",
                    isHeaderTransparent ? "text-white hover:text-blue-200" : "text-gray-700 hover:text-[#0052ff]"
                  )}
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm font-medium">Contactez-nous</span>
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
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-medium">Localisation</span>
                </a>

                {/* Promotions */}
                <a
                  href="/promotions"
                  className={cn(
                    "flex items-center gap-2 transition-colors group",
                    isHeaderTransparent ? "text-white hover:text-blue-200" : "text-gray-700 hover:text-[#0052ff]"
                  )}
                >
                  <Tag className="h-5 w-5" />
                  <span className="text-sm font-medium">Promotions</span>
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
                  <Search className={cn("h-5 w-5", isHeaderTransparent ? "text-white" : "text-gray-700")} />
                </button>
                <a href="tel:18552649328" className="p-2" aria-label="Phone">
                  <Phone className={cn("h-5 w-5", isHeaderTransparent ? "text-white" : "text-gray-700")} />
                </a>
                <a href="https://www.google.com/maps/place/BRICAREAU+WATER+SPECIALIST/@45.5005535,-73.6423534,211m/data=!3m2!1e3!5s0x4cc919c4436a5a3f:0x5bb245a9935b5ece!4m6!3m5!1s0x4cc9229b28364297:0xd763dce82ea51a5f!8m2!3d45.5005535!4d-73.6423534!16s%2Fg%2F1pv5wd45p?entry=tts&g_ep=EgoyMDI2MDExMy4wIPu8ASoASAFQAw%3D%3D&skid=dc936ed0-8357-4347-8629-14786f46d771" className="p-2" aria-label="Location" target="_blank" rel="noopener noreferrer">
                  <MapPin className={cn("h-5 w-5", isHeaderTransparent ? "text-white" : "text-gray-700")} />
                </a>
                <button
                  className="p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className={cn("h-6 w-6", isHeaderTransparent ? "text-white" : "text-gray-700")} /> : <Menu className={cn("h-6 w-6", isHeaderTransparent ? "text-white" : "text-gray-700")} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Navigation Bar - Logo + Product Menu + Search */}
        <div className={cn(
          "hidden lg:block border-b transition-all duration-300",
          isHeaderTransparent ? "border-white/20 bg-transparent" : "border-gray-200 bg-white shadow-sm"
        )}>
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
                {productMenuItems.map((item) => (
                  <div key={item.name} className="relative">
                    <button
                      onMouseEnter={() => item.hasMegamenu ? handleMenuEnter(item.name) : null}
                      onMouseLeave={() => item.hasMegamenu ? handleMenuLeave() : null}
                      onClick={() => {
                        if (!item.hasMegamenu) {
                          navigate(item.href);
                        } else {
                          // Even if it has a megamenu, we want the parent click to navigate
                          navigate(item.href);
                        }
                      }}
                      className={cn(
                        "text-sm font-semibold transition-colors relative h-16 flex items-center",
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
                  <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none z-10", isHeaderTransparent ? "text-white" : "text-gray-500")} />
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
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Recherches populaires</h4>
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
        {productMenuItems.map((menuItem) => (
          menuItem.hasMegamenu && activeMegamenu === menuItem.name && (
            <div
              key={menuItem.name}
              className={cn(
                "absolute top-full left-0 w-full transition-all duration-300 z-40",
                isHeaderTransparent
                  ? "bg-white/10 backdrop-blur-2xl border-t border-white/10"
                  : "bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl"
              )}
              onMouseEnter={() => handleMenuEnter(menuItem.name)}
              onMouseLeave={() => handleMenuLeave()}
            >
              <div className="container mx-auto px-4 md:px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Product Cards (2x2 grid) */}
                  <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {menuItem.megamenuCards?.map((card, index) => {
                      const Icon = card.icon;
                      return (
                        <NavLink
                          key={index}
                          to={card.href}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-all group"
                          onClick={() => setActiveMegamenu(null)}
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            <Icon className={cn(
                              "h-10 w-10 stroke-[1.5] transition-colors",
                              isHeaderTransparent ? "text-blue-200 group-hover:text-white" : "text-[#60A5FA] group-hover:text-[#0052ff]"
                            )} />
                          </div>
                          <div className="flex-1">
                            <h4 className={cn(
                              "font-bold text-base mb-1.5 transition-colors leading-tight",
                              isHeaderTransparent ? "text-white group-hover:text-blue-200" : "text-gray-900 group-hover:text-[#0052ff]"
                            )}>
                              {card.title}
                            </h4>
                            <p className={cn(
                              "text-sm leading-snug transition-colors",
                              isHeaderTransparent ? "text-blue-50/70 group-hover:text-white" : "text-gray-600"
                            )}>
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
                      <div className={cn(
                        "rounded-xl overflow-hidden shadow-md h-full flex flex-col transition-all",
                        isHeaderTransparent ? "bg-white/5 border border-white/10" : "bg-white"
                      )}>
                        <div className="relative h-40 flex-shrink-0">
                          <img
                            src={menuItem.promo.image}
                            alt={menuItem.promo.title || "Promotion Bricareau"}
                            className="w-full h-full object-cover"
                          />
                          {isHeaderTransparent && <div className="absolute inset-0 bg-black/20" />}
                        </div>
                        <div className={cn(
                          "p-6 flex-1 flex flex-col justify-center",
                          isHeaderTransparent ? "bg-white/5" : "bg-[#0052ff]"
                        )}>
                          <h3 className="text-lg font-bold mb-4 leading-tight text-white">
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
                    size="lg"
                    className="w-full bg-[#0052ff] hover:bg-[#0052ff]/90 text-white rounded-full font-semibold"
                    asChild
                  >
                    <a href="/contact" className="flex items-center justify-center gap-2">
                      <span>Contactez-nous</span>
                    </a>
                  </Button>
                </div>

                {/* Product Menu - Accordion Style */}
                <div className="border-t border-gray-200">
                  {productMenuItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-200">
                      {item.hasMegamenu ? (
                        <div>
                          <div className="flex items-center justify-between w-full">
                            <NavLink
                              to={item.href}
                              className="flex-1 px-4 py-4 text-left text-base font-semibold text-gray-900"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </NavLink>
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
                          <span className="text-base font-semibold text-gray-900">{item.name}</span>
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
                    className="flex items-center justify-center gap-2 text-[#0052ff] font-semibold"
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
      {!isTransparentPage && <div style={{ height: headerHeight }} />}
    </>
  );
};

export default Header;
