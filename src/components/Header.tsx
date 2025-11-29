import { useState } from "react";
import { Menu, X, Phone, MapPin, Droplets, Filter, GlassWater, Waves, Search, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavigation = [
    {
      name: "Water Softening",
      href: "/services#adoucissement",
      items: [
        {
          name: "Water Softeners",
          description: "Reduce buildup on sinks and showers, and enjoy smoother hair and skin with soft water.",
          href: "/services#adoucissement",
          icon: Droplets
        },
        {
          name: "Salt Delivery",
          description: "Get regular salt deliveries that fit your schedule for hassle-free refills you can count on.",
          href: "/services#accessoires",
          icon: Waves
        },
        {
          name: "Portable Exchange",
          description: "Enjoy soft water at seasonal properties and in brine-restricted areas with no extra utility costs.",
          href: "/services#adoucissement-commercial",
          icon: Filter
        },
        {
          name: "Salt-Free Conditioners",
          description: "Reduce buildup with zero water waste, perfect for those in brine-restricted areas.",
          href: "/services#adoucissement",
          icon: GlassWater
        },
      ],
      promo: {
        title: "Find the Right Solution for Your Home",
        image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=600&auto=format&fit=crop",
        link: "/quiz"
      }
    },
    {
      name: "Water Filtration",
      href: "/services#filtration",
      items: [
        { name: "Whole House Filtration", description: "Filter water throughout your entire home.", href: "/services#filtration", icon: Filter },
        { name: "Reverse Osmosis", description: "Advanced filtration for the purest drinking water.", href: "/services#osmose", icon: Droplets },
      ],
      promo: {
        title: "Cleaner Water for Your Family",
        image: "https://images.unsplash.com/photo-1521424159246-e4a66f267e4b?q=80&w=600&auto=format&fit=crop",
        link: "/services#filtration"
      }
    },
    { name: "Ice & Water Dispensers", href: "/services#fontaines" },
    { name: "Well Water", href: "/services#puits" },
    { name: "Resources", href: "/faq" },
    { name: "Support", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm font-sans">
      {/* Top banner - Culligan style */}
      <div className="bg-emerald-300 text-emerald-950">
        <div className="container mx-auto px-4 py-2.5 text-center flex justify-center items-center gap-2 cursor-pointer hover:underline">
          <p className="text-sm font-semibold">
            Get Started with a Free Water Consultation
          </p>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Secondary bar */}
      <div className="hidden lg:block border-b border-border bg-background">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <NavLink to="/" className="hover:text-primary transition-colors font-semibold text-foreground">
                Residential
              </NavLink>
              <span className="text-muted-foreground/30">|</span>
              <NavLink to="/entreprises" className="hover:text-primary transition-colors font-medium text-muted-foreground">
                Workplace
              </NavLink>
              <span className="text-muted-foreground/30">|</span>
              <NavLink to="/commercial-industriel" className="hover:text-primary transition-colors font-medium text-muted-foreground">
                Commercial
              </NavLink>
              <span className="text-muted-foreground/30">|</span>
              <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors font-medium text-muted-foreground">
                <ArrowRight className="h-3 w-3 -rotate-45" />
                Discover Bricareau
              </a>
            </div>
            <div className="flex items-center gap-6 text-muted-foreground">
              <a href="tel:18883150392" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-medium">1-855-264-9328</span>
              </a>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 font-semibold"
                asChild
              >
                <a href="#localisation" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Find a Location Near Me</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-border bg-white">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between gap-8">
            {/* Logo */}
            <NavLink to="/" className="flex items-center group shrink-0">
              <img
                src="/logo.png"
                alt="Bricareau"
                className="h-12 w-auto object-contain"
              />
            </NavLink>

            {/* Desktop navigation */}
            <NavigationMenu className="hidden lg:flex flex-1 justify-start" viewportClassName="w-full left-0 absolute top-full border-t border-border bg-white shadow-lg">
              <NavigationMenuList className="gap-1">
                {mainNavigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="h-20 rounded-none border-b-2 border-transparent bg-transparent px-3 py-2 text-[15px] font-semibold text-foreground/80 hover:bg-transparent hover:text-primary focus:bg-transparent active:bg-transparent data-[active]:bg-transparent data-[state=open]:border-primary data-[state=open]:bg-transparent data-[state=open]:text-primary">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-screen max-w-[100vw] bg-white border-t shadow-lg">
                            <div className="container mx-auto py-12 px-4">
                              <div className="grid grid-cols-12 gap-8">
                                {/* Left side - Cards (8 cols) */}
                                <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {item.items.map((subItem) => (
                                    <NavLink
                                      key={subItem.name}
                                      to={subItem.href}
                                      className="flex items-start gap-5 p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                                    >
                                      <div className="shrink-0">
                                        {subItem.icon && <subItem.icon className="h-10 w-10 text-primary stroke-[1.2]" />}
                                      </div>
                                      <div>
                                        <h4 className="font-semibold text-base text-foreground group-hover:text-primary mb-2">{subItem.name}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{subItem.description}</p>
                                      </div>
                                    </NavLink>
                                  ))}
                                </div>

                                {/* Right side - Promo (4 cols) */}
                                {item.promo && (
                                  <div className="col-span-12 lg:col-span-4 flex">
                                    <div className="flex w-full rounded-2xl overflow-hidden shadow-sm">
                                      {/* Image Side */}
                                      <div className="w-2/5 relative">
                                        <img
                                          src={item.promo.image}
                                          alt={item.promo.title}
                                          className="absolute inset-0 w-full h-full object-cover"
                                        />
                                      </div>
                                      {/* Content Side */}
                                      <div className="w-3/5 bg-[#2563EB] p-8 flex flex-col justify-center items-start text-white">
                                        <h3 className="text-2xl font-bold mb-6 leading-tight">
                                          {item.promo.title}
                                        </h3>
                                        <Button variant="link" className="text-white p-0 h-auto font-semibold hover:no-underline group/btn text-base">
                                          Read More <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <NavLink
                          to={item.href}
                          className="px-3 py-2 text-[15px] font-semibold text-foreground/80 hover:text-primary transition-colors h-20 inline-flex items-center border-b-2 border-transparent hover:border-primary"
                        >
                          {item.name}
                        </NavLink>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-9 bg-slate-100 border-none rounded-full focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[115px] bg-background z-40 overflow-y-auto pb-20 animate-in slide-in-from-top-5 duration-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {mainNavigation.map((item) => (
              <div key={item.name} className="border-b border-border/50 last:border-none">
                {item.items ? (
                  <MobileMenuItem item={item} setIsMenuOpen={setIsMenuOpen} />
                ) : (
                  <NavLink
                    to={item.href}
                    className="block py-4 text-lg font-semibold text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}

            <div className="mt-6 space-y-4 bg-slate-50 -mx-4 px-4 py-6">
              <div className="grid grid-cols-2 gap-4">
                <NavLink to="/" className="text-sm font-medium text-foreground hover:text-primary">Residential</NavLink>
                <NavLink to="/entreprises" className="text-sm font-medium text-foreground hover:text-primary">Workplace</NavLink>
                <NavLink to="/commercial-industriel" className="text-sm font-medium text-foreground hover:text-primary">Commercial</NavLink>
              </div>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold"
                asChild
              >
                <a href="#localisation">
                  Find a Location Near Me
                </a>
              </Button>

              <a href="tel:18883150392" className="flex items-center justify-center gap-2 py-2 font-semibold text-primary">
                <Phone className="h-5 w-5" />
                <span>1-888-315-0392</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const MobileMenuItem = ({ item, setIsMenuOpen }: { item: any, setIsMenuOpen: (open: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-lg font-semibold text-foreground hover:text-primary transition-colors"
      >
        {item.name}
        <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", isOpen ? "rotate-180" : "")} />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out overflow-hidden",
          isOpen ? "grid-rows-[1fr] opacity-100 mt-2 mb-4" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 pl-4 space-y-4">
          {item.items.map((subItem: any) => (
            <NavLink
              key={subItem.name}
              to={subItem.href}
              className="flex items-start gap-3 group"
              onClick={() => setIsMenuOpen(false)}
            >
              {subItem.icon && <subItem.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />}
              <div>
                <div className="font-medium text-foreground group-hover:text-primary">{subItem.name}</div>
                {subItem.description && (
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{subItem.description}</p>
                )}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
