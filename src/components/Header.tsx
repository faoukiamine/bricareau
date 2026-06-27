import { useState, useEffect, useRef } from "react";
import { 
    Menu, X, Phone, Mail, MapPin, 
    ChevronDown, ArrowRight, Search, 
    ArrowUpRight, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoBricareau from "@/assets/Logo Bricareau.png";
import { ProMaxButton } from "@/components/ui/ProMaxButton";

import { mainNavMenuItems, type MenuItem } from "@/data/navigation";
import { searchSite, type SearchResult } from "@/data/searchData";

interface HeaderProps {
  forceWhite?: boolean;
}

const Header = ({ forceWhite = false }: HeaderProps = {}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegamenu, setActiveMegamenu] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>("RÉSIDENTIEL");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>(null);
  const [activeMobileSubAccordion, setActiveMobileSubAccordion] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", updateHeaderHeight);
    updateHeaderHeight();
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMegamenu(null);
        setActiveDropdown(null);
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuEnter = (itemName: string, hasMegamenu: boolean) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (hasMegamenu) {
      if (activeMegamenu !== itemName) {
        setActiveMegamenu(itemName);
        setActiveDropdown(null);
        // Only reset if we are switching to a different megamenu
        setHoveredCategory("RÉSIDENTIEL"); // Default to first category
      }
    } else {
      setActiveDropdown(itemName);
      setActiveMegamenu(null);
    }
  };

  const handleMenuLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegamenu(null);
      setActiveDropdown(null);
      setHoveredCategory("RÉSIDENTIEL");
    }, 300);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
            "fixed top-0 z-50 w-full transition-all duration-500",
            isScrolled 
                ? "bg-[#18448F] shadow-lg py-0" 
                : "bg-transparent py-3"
        )} 
        ref={headerRef}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-20 items-center justify-between gap-4">
            
            {/* Logo */}
            <NavLink to="/" className="flex items-center flex-shrink-0">
              <img
                src={logoBricareau}
                className={cn("h-10 md:h-12 w-auto object-contain transition-all duration-500", isScrolled && "brightness-0 invert")}
               alt="Bricareau Water Specialist" title="Équipement de expert en eau par Bricareau" />
            </NavLink>

            {/* Main Nav (Desktop) */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              {mainNavMenuItems.map((item) => (
                <div 
                    key={item.name} 
                    className="relative px-2 py-6"
                    onMouseEnter={() => handleMenuEnter(item.name, item.hasMegamenu)}
                    onMouseLeave={handleMenuLeave}
                >
                  <button 
                    className={cn(
                        "text-[13px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors",
                        (activeMegamenu === item.name || activeDropdown === item.name) 
                            ? ((isScrolled || forceWhite) ? "text-white/70" : "text-[#18448F]/70")
                            : ((isScrolled || forceWhite) ? "text-white hover:text-white/80" : "text-[#18448F] hover:text-[#18448F]/80")
                    )}
                    onClick={() => {
                        if (item.href) {
                            navigate(item.href);
                            setActiveDropdown(null);
                            setActiveMegamenu(null);
                        }
                    }}
                  >
                    {item.name}
                    {(item.hasMegamenu || item.items) && <ChevronDown className={cn("w-4 h-4 transition-transform", (activeMegamenu === item.name || activeDropdown === item.name) && "rotate-180")} />}
                  </button>

                  {/* Standard Dropdown */}
                  {!item.hasMegamenu && item.items && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-xl py-4 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.items.map((sub, i) => (
                            <NavLink 
                                key={i} 
                                to={sub.href} 
                                className="block px-6 py-3 text-sm text-slate-600 hover:text-[#18448F] hover:bg-slate-50 transition-colors font-medium border-l-2 border-transparent hover:border-[#18448F]"
                                onClick={() => setActiveDropdown(null)}
                            >
                                {sub.name}
                            </NavLink>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Utilities (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="tel:18552649328" className={cn("text-[13px] font-bold flex items-center gap-2 group transition-colors", (isScrolled || forceWhite) ? "text-white" : "text-[#18448F]")}>
                <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors", (isScrolled || forceWhite) ? "bg-white/10 group-hover:bg-white/20" : "bg-[#18448F]/10 group-hover:bg-[#18448F]/20")}>
                    <Phone className={cn("w-4 h-4", (isScrolled || forceWhite) ? "text-white" : "text-[#18448F]")} strokeWidth={2.5} />
                </div>
                (855) 264-9328
              </a>
              
              <div className="flex items-center gap-6">
                <ProMaxButton 
                    variant={(isScrolled || forceWhite) ? "outline-white" : "outline"} 
                    className="px-8 h-12 text-[10px]"
                    onClick={() => navigate("/consultation")}
                >
                    Nous contacter
                </ProMaxButton>
                <ProMaxButton 
                    variant={(isScrolled || forceWhite) ? "white" : "primary"} 
                    className="px-8 h-12 text-[10px]"
                    onClick={() => navigate("/contact-form")}
                >
                    Demander un service
                </ProMaxButton>
              </div>
            </div>

            {/* Mobile Actions & Toggle */}
            <div className="flex items-center gap-1 lg:hidden">
                {isMenuOpen && (
                    <>
                        <button 
                            className={cn("p-2 transition-colors", (isScrolled || forceWhite) ? "text-white" : "text-[#18448F]")}
                            onClick={() => {
                                setIsMenuOpen(false);
                                // Optional logic for search
                            }}
                        >
                            <Search className="w-6 h-6" />
                        </button>
                        <a 
                            href="tel:18552649328" 
                            className={cn("p-2 transition-colors", (isScrolled || forceWhite) ? "text-white" : "text-[#18448F]")}
                        >
                            <Phone className="w-6 h-6" />
                        </a>
                    </>
                )}
                <button 
                    className={cn("p-2 transition-colors", (isScrolled || forceWhite) ? "text-white" : "text-[#18448F]")} 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>
          </div>
        </div>

        {/* Megamenu: "Ce que nous faisons" (MATCHING IMAGE) */}
        {activeMegamenu === "Ce que nous faisons" && (
            <div 
                className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl z-50 animate-in slide-in-from-top-4 duration-300"
                onMouseEnter={() => handleMenuEnter("Ce que nous faisons", true)}
                onMouseLeave={handleMenuLeave}
            >
                <div className="container mx-auto px-4 md:px-6 py-16 flex gap-12">
                    {/* Left Vertical Label */}
                    <div className="hidden xl:flex flex-col items-center justify-center w-12 border-r border-gray-100 self-stretch mr-12">
                        <div className="whitespace-nowrap -rotate-90 origin-center">
                            <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em]">
                                CE QUE NOUS FAISONS
                            </span>
                        </div>
                    </div>

                    <div className="flex-1 space-y-12">
                        {/* The Grid of 4 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mainNavMenuItems.find(m => m.name === "Ce que nous faisons")?.megamenuCards?.map((card, idx) => (
                                <div 
                                    key={card.title}
                                    className="relative group"
                                    onMouseEnter={() => setHoveredCategory(card.title)}
                                >
                                    <NavLink 
                                        to={card.href}
                                        className={cn(
                                            "group block bg-white shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden border-2",
                                            hoveredCategory === card.title ? "border-[#18448F] shadow-lg" : "border-transparent"
                                        )}
                                        onClick={() => setActiveMegamenu(null)}
                                    >
                                        <div className="aspect-video overflow-hidden relative">
                                            <img 
                                                src={card.image} 
                                                alt={card.title} 
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                            />
                                            <div className="absolute inset-0 bg-transparent group-hover:bg-blue-600/10 transition-colors duration-500" />
                                        </div>
                                        <div className="py-3 px-5 md:py-3.5 md:px-6 flex items-center justify-between border-t border-gray-50">
                                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest leading-tight">
                                                {card.title.includes(' ET ') ? (
                                                    card.title.split(' ET ').map((word, i) => (
                                                        <span key={i} className="block">
                                                            {word} {i === 0 && "ET"}
                                                        </span>
                                                    ))
                                                ) : (
                                                    card.title
                                                )}
                                            </h4>
                                            <div className={cn(
                                                "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300",
                                                hoveredCategory === card.title 
                                                    ? "bg-[#18448F] text-white border-[#18448F]" 
                                                    : "border-gray-200 text-[#18448F] group-hover:bg-[#18448F] group-hover:text-white"
                                            )}>
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
 
                        <div className="pt-8 border-t border-gray-100 min-h-[140px] flex items-center">
                            {hoveredCategory !== null ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 w-full animate-in fade-in slide-in-from-bottom-2 duration-500">
                                    {mainNavMenuItems
                                        .find(m => m.name === "Ce que nous faisons")
                                        ?.megamenuCards?.find(c => c.title === hoveredCategory)
                                        ?.links?.map((link, lIdx) => (
                                        <NavLink 
                                            key={lIdx} 
                                            to={link.href}
                                            className="group block space-y-2"
                                            onClick={() => setActiveMegamenu(null)}
                                        >
                                            <div className="flex items-center gap-2">
                                                <h5 className="text-[10px] font-black text-slate-900 group-hover:text-[#18448F] transition-colors uppercase tracking-widest">{link.title}</h5>
                                                <ArrowRight className="w-3 h-3 text-[#18448F] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                            </div>
                                            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                                {link.description}
                                            </p>
                                        </NavLink>
                                    ))}
                                </div>
                            ) : (
                                <div className="w-full flex items-center justify-center py-8">
                                    <div className="flex flex-col items-center gap-4 opacity-40">
                                        <div className="w-12 h-0.5 bg-[#18448F]" />
                                        <span className="text-[10px] font-black text-[#18448F] uppercase tracking-[0.5em] text-center">
                                            Survolez une catégorie pour explorer nos solutions
                                        </span>
                                        <div className="w-12 h-0.5 bg-[#18448F]" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Megamenu: "Qui sommes-nous ?" (MATCHING IMAGE) */}
        {activeMegamenu === "Qui sommes-nous ?" && (
            <div 
                className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl z-50 animate-in slide-in-from-top-4 duration-300"
                onMouseEnter={() => handleMenuEnter("Qui sommes-nous ?", true)}
                onMouseLeave={handleMenuLeave}
            >
                <div className="container mx-auto px-4 md:px-6 py-16 flex gap-12">
                    {/* Left Vertical Label */}
                    <div className="hidden xl:flex flex-col items-center justify-center w-12 border-r border-gray-100 self-stretch mr-12">
                        <div className="whitespace-nowrap -rotate-90 origin-center">
                            <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em]">
                                QUI SOMMES-NOUS ?
                            </span>
                        </div>
                    </div>

                    {/* Content Columns */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 pr-12">
                        {mainNavMenuItems.find(m => m.name === "Qui sommes-nous ?")?.megamenuGroups?.map((group, gIdx) => (
                            <div key={gIdx} className="space-y-10 border-r last:border-0 border-gray-50">
                                {group.items.map((item, iIdx) => (
                                    <NavLink 
                                        key={iIdx} 
                                        to={item.href}
                                        className="group block space-y-3 pr-8"
                                        onClick={() => setActiveMegamenu(null)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <h4 className="text-sm font-black text-slate-900 group-hover:text-[#18448F] transition-colors uppercase tracking-tight">{item.title}</h4>
                                            <ArrowRight className="w-3 h-3 text-[#18448F] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        </div>
                                        <p className="text-[13px] text-slate-500 font-light leading-relaxed max-w-[340px]">
                                            {item.description}
                                        </p>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Right Promo Box (MATCHING IMAGE) */}
                    {mainNavMenuItems.find(m => m.name === "Qui sommes-nous ?")?.promo && (
                        <div className="hidden lg:flex flex-col justify-center w-[450px] rounded-sm p-10 relative overflow-hidden group/promo">
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full pointer-events-none group-hover/promo:scale-110 transition-transform duration-1000">
                                <img 
                                    src={mainNavMenuItems.find(m => m.name === "Qui sommes-nous ?")?.promo?.image}
                                    alt="Promo Kit"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#18448F]/95 to-[#18448F]/40"></div>
                            </div>
                            
                            <div className="relative z-10 space-y-6 max-w-[280px]">
                                <h3 className="text-xl font-black text-white leading-tight tracking-tight">
                                    {mainNavMenuItems.find(m => m.name === "Qui sommes-nous ?")?.promo?.title}
                                </h3>
                                <p className="text-[13px] text-white/80 font-light leading-relaxed">
                                    {mainNavMenuItems.find(m => m.name === "Qui sommes-nous ?")?.promo?.subtitle}
                                </p>
                                <NavLink 
                                    to={mainNavMenuItems.find(m => m.name === "Qui sommes-nous ?")?.promo?.link || "#"}
                                    className="flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-widest pt-4 transition-colors"
                                    onClick={() => setActiveMegamenu(null)}
                                >
                                    {mainNavMenuItems.find(m => m.name === "Qui sommes-nous ?")?.promo?.cta}
                                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-white/10 group-hover/promo:bg-white group-hover/promo:text-[#18448F] transition-all">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* Megamenu: "Ressources" (MATCHING IMAGE) */}
        {activeMegamenu === "Ressources" && (
            <div 
                className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl z-50 animate-in slide-in-from-top-4 duration-300"
                onMouseEnter={() => handleMenuEnter("Ressources", true)}
                onMouseLeave={handleMenuLeave}
            >
                <div className="container mx-auto px-4 md:px-6 py-16 flex gap-12">
                    {/* Left Vertical Label */}
                    <div className="hidden xl:flex flex-col items-center justify-center w-12 border-r border-gray-100 self-stretch mr-12">
                        <div className="whitespace-nowrap -rotate-90 origin-center">
                            <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em]">
                                RESSOURCES
                            </span>
                        </div>
                    </div>

                    {/* Content Columns */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 pr-12">
                        {mainNavMenuItems.find(m => m.name === "Ressources")?.megamenuGroups?.map((group, gIdx) => (
                            <div key={gIdx} className="space-y-10 border-r last:border-0 border-gray-50">
                                {group.items.map((item, iIdx) => (
                                    <NavLink 
                                        key={iIdx} 
                                        to={item.href}
                                        className="group block space-y-3 pr-8"
                                        onClick={() => setActiveMegamenu(null)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <h4 className="text-sm font-black text-slate-900 group-hover:text-[#0052ff] transition-colors uppercase tracking-tight">{item.title}</h4>
                                            <ArrowRight className="w-3 h-3 text-[#0052ff] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        </div>
                                        <p className="text-[13px] text-slate-500 font-light leading-relaxed max-w-[340px]">
                                            {item.description}
                                        </p>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Right Promo Box (MATCHING IMAGE) */}
                    {mainNavMenuItems.find(m => m.name === "Ressources")?.promo && (
                        <div className="hidden lg:flex flex-col justify-center w-[450px] rounded-sm p-10 relative overflow-hidden group/promo">
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full pointer-events-none group-hover/promo:scale-110 transition-transform duration-1000">
                                <img 
                                    src={mainNavMenuItems.find(m => m.name === "Ressources")?.promo?.image}
                                    alt="Technical Resource"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#18448F]/95 to-[#18448F]/40"></div>
                            </div>
                            
                            <div className="relative z-10 space-y-6 max-w-[280px]">
                                <h3 className="text-xl font-black text-white leading-tight tracking-tight">
                                    {mainNavMenuItems.find(m => m.name === "Ressources")?.promo?.title}
                                </h3>
                                <p className="text-[13px] text-white/80 font-light leading-relaxed">
                                    {mainNavMenuItems.find(m => m.name === "Ressources")?.promo?.subtitle}
                                </p>
                                <NavLink 
                                    to={mainNavMenuItems.find(m => m.name === "Ressources")?.promo?.link || "#"}
                                    className="flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-widest pt-4 transition-colors"
                                    onClick={() => setActiveMegamenu(null)}
                                >
                                    {mainNavMenuItems.find(m => m.name === "Ressources")?.promo?.cta}
                                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-white/10 group-hover/promo:bg-white group-hover/promo:text-[#18448F] transition-all">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-20 bg-white z-[100] overflow-y-auto animate-in slide-in-from-right duration-300 flex flex-col">
                <div className="p-6 flex flex-col min-h-full">
                    {/* Top Button */}
                    <Button 
                        className="w-[50%] mx-auto h-12 bg-[#2a64f6] hover:bg-[#1c4bce] border-[#2a64f6] hover:border-[#1c4bce] text-white rounded-full font-medium"
                        onClick={() => {
                            setIsMenuOpen(false);
                            navigate("/contact-form");
                        }}
                    >
                        Contactez-nous
                    </Button>

                    {/* Accordion List */}
                    <div className="flex-1 mt-6">
                        {mainNavMenuItems.map((item) => (
                            <div key={item.name} className="border-b border-gray-200">
                                <button
                                    className="w-full flex items-center justify-between py-5 text-left"
                                    onClick={() => setActiveMobileAccordion(activeMobileAccordion === item.name ? null : item.name)}
                                >
                                    <span className="text-[17px] font-semibold text-gray-900">{item.name}</span>
                                    <ChevronDown className={cn("w-5 h-5 text-gray-500 transition-transform duration-300", activeMobileAccordion === item.name && "rotate-180")} />
                                </button>
                                
                                <div className={cn("overflow-hidden transition-all duration-300", activeMobileAccordion === item.name ? "max-h-[1200px] pb-5" : "max-h-0")}>
                                    <div className="flex flex-col gap-6 pl-4 pt-2">
                                        {/* For megamenuCards (like Ce que nous faisons) */}
                                        {item.megamenuCards?.map((card, idx) => (
                                            <div key={idx} className="space-y-0">
                                                <div className="w-full flex items-center justify-between py-3">
                                                    {card.href ? (
                                                        <NavLink
                                                            to={card.href}
                                                            className="text-[11px] font-black text-slate-800 uppercase tracking-widest hover:text-[#2a64f6] flex-1"
                                                            onClick={() => setIsMenuOpen(false)}
                                                        >
                                                            {card.title}
                                                        </NavLink>
                                                    ) : (
                                                        <span className="text-[11px] font-black text-slate-800 uppercase tracking-widest flex-1">{card.title}</span>
                                                    )}
                                                    <button 
                                                        className="p-1 -mr-1"
                                                        onClick={() => setActiveMobileSubAccordion(activeMobileSubAccordion === card.title ? null : card.title)}
                                                    >
                                                        <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform duration-300", activeMobileSubAccordion === card.title && "rotate-180")} />
                                                    </button>
                                                </div>
                                                
                                                <div className={cn("overflow-hidden transition-all duration-300", activeMobileSubAccordion === card.title ? "max-h-[800px] pb-3" : "max-h-0")}>
                                                    <div className="flex flex-col gap-2 pl-3">
                                                        {card.links?.map((link, lIdx) => (
                                                            <NavLink 
                                                                key={lIdx} 
                                                                to={link.href} 
                                                                className="text-[14px] text-gray-600 hover:text-[#2a64f6] py-1 font-medium block"
                                                                onClick={() => setIsMenuOpen(false)}
                                                            >
                                                                {link.title}
                                                            </NavLink>
                                                        ))}
                                                        {(!card.links || card.links.length === 0) && card.href && (
                                                            <NavLink 
                                                                to={card.href} 
                                                                className="text-[14px] text-gray-600 hover:text-[#2a64f6] py-1 font-medium block"
                                                                onClick={() => setIsMenuOpen(false)}
                                                            >
                                                                {card.title}
                                                            </NavLink>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {/* For megamenuGroups (like Qui sommes-nous ? and Ressources) */}
                                        {item.megamenuGroups && item.megamenuGroups.length > 0 && (
                                            <div className="flex flex-col gap-2">
                                                {item.megamenuGroups.flatMap(g => g.items).map((subItem, idx) => (
                                                    <NavLink 
                                                        key={idx} 
                                                        to={subItem.href} 
                                                        className="text-[15px] text-gray-600 hover:text-[#2a64f6] py-1 font-medium block"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {subItem.title}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}

                                        {/* For simple items */}
                                        {item.items?.map((subItem, idx) => (
                                            <NavLink 
                                                key={idx} 
                                                to={subItem.href} 
                                                className="text-[15px] text-gray-600 hover:text-[#2a64f6] py-1 font-medium block"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {subItem.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Links */}
                    <div className="pt-8 mt-auto space-y-6">
                        {/* Phone */}
                        <a href="tel:18552649328" className="flex items-center justify-center gap-3 text-[#2a64f6] font-medium text-[15px] pt-2 pb-8">
                            <Phone className="w-5 h-5" />
                            Appelez le 1-855-264-9328
                        </a>
                    </div>
                </div>
            </div>
        )}
      </header>
      <div className={cn("transition-all duration-500", isScrolled ? "h-[80px]" : "h-0")} />
    </>
  );
};

export default Header;
