import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, MapPin, Droplets, Filter, GlassWater, Waves, Search, ChevronDown, Mail, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMegamenu, setActiveMegamenu] = useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveMegamenu(null);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
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
      href: "/adoucisseurs",
      hasMegamenu: true,
      megamenuCards: [
        {
          icon: Droplets,
          title: "Adoucisseurs d'eau",
          description: "Réduisez l'accumulation sur les éviers et les douches, et profitez de cheveux et d'une peau plus doux.",
          href: "/adoucisseurs"
        },
        {
          icon: Filter,
          title: "Échange portable",
          description: "Profitez d'eau douce dans les propriétés saisonnières et les zones à restriction de saumure.",
          href: "/services"
        },
        {
          icon: Waves,
          title: "Livraison de sel",
          description: "Obtenez des livraisons régulières de sel qui correspondent à votre horaire pour des recharges sans tracas.",
          href: "/pieces"
        },
        {
          icon: GlassWater,
          title: "Conditionneurs sans sel",
          description: "Réduisez l'accumulation sans gaspillage d'eau, parfait pour les zones à restriction de saumure.",
          href: "/conditionneurs-sans-sel"
        },
      ],
      promo: {
        title: "Trouvez la bonne solution pour votre maison",
        image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=600&auto=format&fit=crop",
        link: "/services"
      }
    },
    {
      name: "Filtration d'eau",
      href: "/filtration",
      hasMegamenu: true,
      megamenuCards: [
        {
          icon: Filter,
          title: "Filtres à eau potable",
          description: "Profitez d'une eau pure et saine directement de votre robinet avec nos systèmes de filtration avancés.",
          href: "/filtration"
        },
        {
          icon: Droplets,
          title: "Systèmes sous évier",
          description: "Solutions compactes et efficaces pour une filtration optimale directement sous votre évier.",
          href: "/filtration/sous-evier"
        },
        {
          icon: GlassWater,
          title: "Filtres pour toute la maison",
          description: "Protection complète de votre maison avec une filtration centralisée pour toute l'eau.",
          href: "/filtration/maison-complete"
        },
        {
          icon: Waves,
          title: "Cartouches de remplacement",
          description: "Maintenez la performance optimale de vos systèmes avec nos cartouches de qualité.",
          href: "/filtration/cartouches"
        },
      ],
      promo: {
        title: "Eau pure pour toute la famille",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=600&auto=format&fit=crop",
        link: "/filtration"
      }
    },
    {
      name: "Fontaines à glace et eau",
      href: "/fontaines",
      hasMegamenu: true,
      megamenuCards: [
        {
          icon: GlassWater,
          title: "Fontaines d'eau froide",
          description: "Eau fraîche et filtrée à la demande pour votre bureau ou votre maison.",
          href: "/fontaines/eau-froide"
        },
        {
          icon: Droplets,
          title: "Distributeurs de glace",
          description: "Glace propre et abondante pour toutes vos occasions et besoins quotidiens.",
          href: "/fontaines/glace"
        },
        {
          icon: Waves,
          title: "Fontaines combinées",
          description: "Solutions tout-en-un offrant eau froide, chaude et glace dans un seul appareil.",
          href: "/fontaines/combinees"
        },
        {
          icon: Filter,
          title: "Entretien et service",
          description: "Service professionnel pour maintenir vos fontaines en parfait état de fonctionnement.",
          href: "/fontaines/entretien"
        },
      ],
      promo: {
        title: "Solutions hydratation pour entreprises",
        image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=600&auto=format&fit=crop",
        link: "/fontaines"
      }
    },
    {
      name: "Eau de puits",
      href: "/eau-de-puits",
      hasMegamenu: true,
      megamenuCards: [
        {
          icon: Droplets,
          title: "Analyse de l'eau",
          description: "Tests complets pour identifier les contaminants et problèmes de qualité de votre eau de puits.",
          href: "/eau-de-puits/analyse"
        },
        {
          icon: Filter,
          title: "Systèmes de traitement",
          description: "Solutions personnalisées pour traiter les problèmes spécifiques de votre eau de puits.",
          href: "/eau-de-puits/traitement"
        },
        {
          icon: Waves,
          title: "Pompes et réservoirs",
          description: "Équipement fiable pour l'extraction et le stockage de votre eau de puits.",
          href: "/eau-de-puits/pompes"
        },
        {
          icon: GlassWater,
          title: "Désinfection UV",
          description: "Éliminez les bactéries et virus avec nos systèmes de désinfection ultraviolette.",
          href: "/eau-de-puits/uv"
        },
      ],
      promo: {
        title: "Eau de puits saine et sûre",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop",
        link: "/eau-de-puits"
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

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
    setActiveMegamenu(null);
  };

  const handleMegamenuToggle = (itemName: string) => {
    setActiveMegamenu(activeMegamenu === itemName ? null : itemName);
    setActiveDropdown(null);
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

  return (
    <header className="sticky top-0 z-50 w-full bg-white font-sans" ref={dropdownRef}>

      {/* Upper Navigation Bar - Primary Menu + Utilities */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex h-12 items-center justify-between">
            {/* Left: Primary Menu (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation">
              {primaryMenuItems.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  <NavLink
                    to={item.href}
                    className="text-sm font-medium text-gray-800 hover:text-[#0052ff] transition-colors px-3"
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
                  alt="Bricareau"
                  className="h-12 w-auto object-contain"
                />
              </NavLink>
            </div>

            {/* Right: Utilities */}
            <div className="hidden lg:flex items-center gap-6 ml-auto">
              {/* Phone */}
              <a
                href="tel:18552649328"
                className="flex items-center gap-2 text-gray-700 hover:text-[#0052ff] transition-colors group"
              >
                <Phone className="h-5 w-5" />
                <span className="text-sm font-medium">Appelez-nous</span>
              </a>

              {/* Contact */}
              <a
                href="/contact"
                className="flex items-center gap-2 text-gray-700 hover:text-[#0052ff] transition-colors group"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm font-medium">Contactez-nous</span>
              </a>

              {/* Localisation */}
              <a
                href="https://www.google.com/maps/place//@45.5005535,-73.6423534,211m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-[#0052ff] transition-colors group"
              >
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">Localisation</span>
              </a>

              {/* Promotions */}
              <a
                href="/promotions"
                className="flex items-center gap-2 text-gray-700 hover:text-[#0052ff] transition-colors group"
              >
                <Tag className="h-5 w-5" />
                <span className="text-sm font-medium">Promotions</span>
              </a>
            </div>

            {/* Mobile: Icon Row */}
            <div className="lg:hidden flex items-center gap-4 ml-auto">
              <button
                className="p-2"
                aria-label="Search"
                onClick={() => {
                  setIsSearchFocused(true);
                  setIsMenuOpen(false);
                }}
              >
                <Search className="h-5 w-5 text-gray-700" />
              </button>
              <a href="tel:18552649328" className="p-2" aria-label="Phone">
                <Phone className="h-5 w-5 text-gray-700" />
              </a>
              <a href="https://www.google.com/maps/place//@45.5005535,-73.6423534,211m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" className="p-2" aria-label="Location">
                <MapPin className="h-5 w-5 text-gray-700" />
              </a>
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navigation Bar - Logo + Product Menu + Search */}
      <div className="hidden lg:block border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center gap-8">
            {/* Left: Logo */}
            <div className="flex items-center flex-shrink-0">
              <NavLink to="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Bricareau"
                  className="h-14 w-auto object-contain"
                />
              </NavLink>
            </div>

            {/* Center: Product Menu */}
            <nav className="flex items-center gap-6 flex-1 justify-center">
              {productMenuItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onMouseEnter={() => item.hasMegamenu ? handleMegamenuToggle(item.name) : null}
                    onMouseLeave={() => item.hasMegamenu ? setActiveMegamenu(null) : null}
                    onClick={() => !item.hasMegamenu && (window.location.href = item.href)}
                    className={cn(
                      "text-sm font-semibold transition-colors relative h-16 flex items-center",
                      "hover:text-[#0052ff]",
                      activeMegamenu === item.name
                        ? "text-[#0052ff] border-b-2 border-[#0052ff]"
                        : "text-gray-700"
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
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none z-10" />
                <Input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Recherche"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 h-9 pl-10 pr-4 text-sm border-gray-300 rounded-full focus-visible:ring-2 focus-visible:ring-[#0052ff] focus-visible:border-[#0052ff] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
                  onFocus={() => setIsSearchFocused(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Expandable Search Panel */}
      {isSearchFocused && (
        <>
          {/* Dimmed Overlay - Desktop only */}
          <div
            className="hidden lg:block fixed inset-0 bg-black/20 z-40 animate-in fade-in duration-200"
            onClick={handleSearchClose}
          />

          {/* Search Panel */}
          <div
            ref={searchRef}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 animate-in slide-in-from-top duration-200 max-h-[calc(100vh-80px)] overflow-y-auto"
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
            className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg z-40"
            onMouseLeave={() => setActiveMegamenu(null)}
          >
            <div className="container mx-auto px-6 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Product Cards (2x2 grid) */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {menuItem.megamenuCards?.map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <NavLink
                        key={index}
                        to={card.href}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setActiveMegamenu(null)}
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <Icon className="h-10 w-10 text-[#60A5FA] stroke-[1.5]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-base text-gray-900 group-hover:text-[#0052ff] mb-1.5 transition-colors leading-tight">
                            {card.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
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
                    <div className="rounded-xl overflow-hidden shadow-md bg-white h-full flex flex-col">
                      <div className="relative h-40 flex-shrink-0">
                        <img
                          src={menuItem.promo.image}
                          alt={menuItem.promo.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-[#0052ff] p-6 flex-1 flex flex-col justify-center">
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
                        <button
                          onClick={() => handleDropdownToggle(`mobile-${item.name}`)}
                          className="flex items-center justify-between w-full px-4 py-4 text-left"
                        >
                          <span className="text-base font-semibold text-gray-900">{item.name}</span>
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 text-gray-500 transition-transform",
                              activeDropdown === `mobile-${item.name}` && "rotate-180"
                            )}
                          />
                        </button>
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
  );
};

export default Header;
