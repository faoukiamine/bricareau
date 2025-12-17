import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, MapPin, Droplets, Filter, GlassWater, Waves, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMegamenu, setActiveMegamenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveMegamenu(null);
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
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const primaryMenuItems = [
    { name: "Résidentiel", href: "/" },
    { name: "Entreprises", href: "/entreprises" },
    { name: "Commercial", href: "/commercial-industriel" },
    { name: "Découvrir Bricareau", href: "/about" },
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
    { name: "Filtration d'eau", href: "/filtration" },
    { name: "Fontaines à glace et eau", href: "/fontaines" },
    { name: "Eau de puits", href: "/eau-de-puits" },
    {
      name: "Ressources",
      href: "/faq",
      dropdown: [
        { name: "FAQ", href: "/faq" },
        { name: "Blog", href: "/blog" },
        { name: "Guides", href: "/guides" },
        { name: "Vidéos", href: "/videos" },
        { name: "Témoignages", href: "/temoignages" },
      ]
    },
    {
      name: "Support",
      href: "/contact",
      dropdown: [
        { name: "Contact", href: "/contact" },
        { name: "Service", href: "/service" },
        { name: "Garantie", href: "/garantie" },
        { name: "Pièces", href: "/pieces" },
        { name: "Manuels", href: "/manuels" },
      ]
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
                  className="h-8 w-auto object-contain"
                />
              </NavLink>
            </div>

            {/* Right: Utilities */}
            <div className="hidden lg:flex items-center gap-4 ml-auto">
              {/* Phone */}
              <a href="tel:18552649328" className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-[#0052ff] transition-colors">
                <Phone className="h-4 w-4" />
                <span>1-855-264-9328</span>
              </a>

              {/* CTA Button */}
              <Button
                size="sm"
                className="bg-[#0052ff] hover:bg-[#0052ff]/90 text-white rounded-full px-5 font-semibold"
                asChild
              >
                <a href="/contact" className="flex items-center gap-2">
                  <span>Contactez-nous</span>
                </a>
              </Button>
            </div>

            {/* Mobile: Icon Row */}
            <div className="lg:hidden flex items-center gap-4 ml-auto">
              <button className="p-2" aria-label="Search">
                <Search className="h-5 w-5 text-gray-700" />
              </button>
              <a href="tel:18552649328" className="p-2" aria-label="Phone">
                <Phone className="h-5 w-5 text-gray-700" />
              </a>
              <a href="#localisation" className="p-2" aria-label="Location">
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
                  className="h-10 w-auto object-contain"
                />
              </NavLink>
            </div>

            {/* Center: Product Menu */}
            <nav className="flex items-center gap-6 flex-1 justify-center">
              {productMenuItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onMouseEnter={() => item.hasMegamenu ? handleMegamenuToggle(item.name) : item.dropdown ? handleDropdownToggle(item.name) : null}
                    onClick={() => !item.hasMegamenu && !item.dropdown && (window.location.href = item.href)}
                    className={cn(
                      "text-sm font-semibold transition-colors relative h-16 flex items-center",
                      "hover:text-[#0052ff]",
                      activeMegamenu === item.name || activeDropdown === item.name
                        ? "text-[#0052ff] border-b-2 border-[#0052ff]"
                        : "text-gray-700"
                    )}
                    aria-haspopup={item.hasMegamenu || item.dropdown ? "true" : undefined}
                    aria-expanded={activeMegamenu === item.name || activeDropdown === item.name}
                  >
                    {item.name}
                  </button>

                  {/* Simple Dropdown */}
                  {item.dropdown && !item.hasMegamenu && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right: Search */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Search className="h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher"
                className="w-48 h-8 text-sm border-gray-300 focus-visible:ring-[#0052ff]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Megamenu for Water Softening */}
      {activeMegamenu === "Adoucissement d'eau" && productMenuItems[0].hasMegamenu && (
        <div
          className="absolute top-full left-0 w-full bg-slate-50 border-t border-gray-200 shadow-xl z-40"
          onMouseLeave={() => setActiveMegamenu(null)}
        >
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-12 gap-6">
              {/* Cards Section */}
              <div className="col-span-9 grid grid-cols-4 gap-6">
                {productMenuItems[0].megamenuCards?.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <NavLink
                      key={index}
                      to={card.href}
                      className="flex flex-col items-start gap-3 p-5 rounded-lg bg-white hover:bg-slate-50 transition-colors group border border-slate-100 shadow-sm"
                      onClick={() => setActiveMegamenu(null)}
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#DBEAFE] flex items-center justify-center">
                        <Icon className="h-6 w-6 text-[#0052ff] stroke-[1.5]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[15px] text-slate-900 group-hover:text-[#0052ff] mb-1.5 transition-colors">
                          {card.title}
                        </h4>
                        <p className="text-[13px] text-slate-600 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </NavLink>
                  );
                })}
              </div>

              {/* Promo Card */}
              {productMenuItems[0].promo && (
                <div className="col-span-3">
                  <div className="h-full rounded-xl overflow-hidden shadow-md bg-white">
                    <div className="relative h-32">
                      <img
                        src={productMenuItems[0].promo.image}
                        alt={productMenuItems[0].promo.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-[#0052ff] p-6 text-white">
                      <h3 className="text-lg font-bold mb-3 leading-tight">
                        {productMenuItems[0].promo.title}
                      </h3>
                      <a
                        href={productMenuItems[0].promo.link}
                        className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
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
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[104px] bg-white z-40 overflow-y-auto">
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
                  <a href="#localisation" className="flex items-center justify-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>Trouver un emplacement près de moi</span>
                  </a>
                </Button>
              </div>

              {/* Product Menu - Accordion Style */}
              <div className="border-t border-gray-200">
                {productMenuItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-200">
                    {item.dropdown || item.hasMegamenu ? (
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
                        {activeDropdown === `mobile-${item.name}` && item.dropdown && (
                          <div className="bg-gray-50 px-4 pb-4">
                            {item.dropdown.map((subItem) => (
                              <NavLink
                                key={subItem.name}
                                to={subItem.href}
                                className="block py-2.5 text-sm text-gray-700 hover:text-[#0052ff]"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </NavLink>
                            ))}
                          </div>
                        )}
                        {activeDropdown === `mobile-${item.name}` && item.hasMegamenu && item.megamenuCards && (
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
