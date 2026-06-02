import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowRight, ChevronRight, Droplets, Waves, Search, SlidersHorizontal, Check, Clock } from "lucide-react";
import { NavLink } from "react-router-dom";
import { categories } from "@/data/blogCategories";
import React, { useState, useEffect } from "react";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";

import blogHero from "@/assets/wave-banner.jpg";

const Blog = () => {
    useEffect(() => {
        document.title = "Blog & Ressources sur le Traitement d'Eau | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez nos articles, guides et conseils d'experts pour améliorer la qualité de votre eau au Québec. Tout sur l'adoucissement, la filtration et les tests d'eau.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Blog Bricareau : Conseils d'Experts en Qualité d'Eau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Guides pratiques et actualités sur le traitement de l'eau pour votre résidence ou commerce au Grand Montréal.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/blog");
    }, []);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCategoryToggle = (id: string) => {
        setSelectedCategories(prev => {
            if (prev.includes(id)) {
                return prev.filter(c => c !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const seenHrefs = new Set<string>();
    const filteredCategories = categories.map(cat => {
        // If categories are selected, check if this one is included
        const isCategorySelected = selectedCategories.length > 0;
        if (isCategorySelected && !selectedCategories.includes(cat.id)) {
            return { ...cat, products: [] };
        }

        const lowerQuery = searchQuery.toLowerCase();
        const products = cat.products.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(lowerQuery) ||
                product.desc.toLowerCase().includes(lowerQuery);
            if (!matchesSearch) return false;

            // Deduplicate across categories only when viewing multiple categories
            if (!isCategorySelected && seenHrefs.has(product.href)) return false;

            seenHrefs.add(product.href);
            return true;
        });

        return { ...cat, products };
    }).filter(cat => cat.products.length > 0);

    const totalResults = filteredCategories.reduce((sum, cat) => sum + cat.products.length, 0);

    return (
        <div className="min-h-screen bg-background font-sans text-slate-900">
            <Header />

            <main>
                {/* 1. Hero Section */}
                <section className="relative lg:h-[650px] flex flex-col lg:items-center overflow-hidden bg-white">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>
                    <div className="relative lg:absolute lg:inset-0 h-[450px] md:h-[600px] lg:h-full w-full lg:z-0 overflow-hidden">
                        {/* Mobile Title Overlay (Hidden on Desktop) */}
                        <div className="lg:hidden absolute inset-0 z-30 flex flex-col justify-center px-4 md:px-12 pointer-events-none">
                            <div className="max-w-sm md:max-w-lg">
                                <h1 className="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic text-slate-900 mb-6 tracking-tight">
    Articles & <span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg">Ressources</span>
</h1>
                            </div>
                        </div>

                        <img
                            src={blogHero}
                            alt="Articles et Ressources Bricareau - Conseils d'experts en traitement d'eau"
                            className="w-full h-full object-cover object-[center_35%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white lg:bg-none lg:z-10" />
                        <div className="hidden lg:block absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 h-full flex items-center lg:px-6 pt-10 lg:pt-0">
                        <div className="max-w-2xl lg:text-white py-12 lg:py-0">
                            {/* Desktop Only Title */}
                            <h1
                                className="hidden lg:block leading-[1.1] md:leading-[1.2] mb-4 lg:mb-8 tracking-tighter text-slate-900 lg:text-white text-left max-w-xl"
                            >
                                Articles & <span className="text-[#18448F] lg:text-[#18448F]">Ressources</span>
                            </h1>
                            <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl text-left lg:text-justify">
                                Découvrez nos derniers articles, guides et conseils d'experts pour une eau de meilleure qualité au quotidien.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. Filters Section */}
                <section className="pt-20 pb-24 bg-white min-h-[50vh]">
                    <div className="container mx-auto px-6 max-w-5xl">


                        {/* Results Count */}
                        <p className="font-bold text-slate-900 mb-8 border-b border-slate-900 pb-4">
                            {totalResults} articles trouvés
                        </p>

                        {/* Filters Accordion */}
                        <div className="mb-12">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="filters" className="border-0">
                                    <AccordionTrigger className="text-sm font-medium hover:no-underline py-2 flex flex-row-reverse justify-end gap-3 text-slate-600 w-auto">
                                        <span className="flex items-center gap-2"><SlidersHorizontal className="w-4 h-4" /> Filtres</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-6 pb-6 border-b border-slate-100">
                                        <div className="flex flex-wrap gap-x-8 gap-y-4">
                                            {categories.map(cat => (
                                                <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                                                    <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${selectedCategories.includes(cat.id) ? 'bg-[#18448F] border-[#18448F]' : 'border-slate-300 group-hover:border-[#18448F] bg-white'}`}>
                                                        {selectedCategories.includes(cat.id) && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                                    </div>
                                                    <span className="text-[15px] text-slate-700 font-medium">{cat.title}</span>
                                                    <input
                                                        type="checkbox"
                                                        className="hidden"
                                                        checked={selectedCategories.includes(cat.id)}
                                                        onChange={() => handleCategoryToggle(cat.id)}
                                                    />
                                                </label>
                                            ))}
                                        </div>
                                        {selectedCategories.length > 0 && (
                                            <div className="mt-6">
                                                <button
                                                    onClick={() => setSelectedCategories([])}
                                                    className="text-[#18448F] text-sm font-medium hover:underline underline-offset-4"
                                                >
                                                    Réinitialiser
                                                </button>
                                            </div>
                                        )}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Results List */}
                        {filteredCategories.length === 0 ? (
                            <div className="text-center py-24 text-slate-500 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                                <Search className="w-16 h-16 mx-auto mb-6 opacity-20" />
                                <h3 className="text-slate-900 mb-2">Aucun résultat</h3>
                                <p className="">Aucun article ne correspond à votre recherche "{searchQuery}".</p>
                                <div className="relative inline-block group">
                                    <div className="absolute inset-0 border border-[#18448F] rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button
                                        variant="outline"
                                        onClick={() => { setSearchQuery(""); setSelectedCategories([]); }}
                                        className="relative bg-[#18448F] border-none text-white hover:bg-white hover:text-[#18448F] rounded-[2rem] h-12 px-8 font-black uppercase tracking-widest text-[10px] transition-all"
                                    >
                                        Effacer les filtres
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <>

                                {/* 2. Varied Category Sections */}
                                <div className="space-y-24">
                                    {filteredCategories.map((cat, idx) => {
                                        // Skip the first article if it's the hero category (already shown)
                                        const displayProducts = idx === 0 ? cat.products.slice(1, 4) : cat.products.slice(0, 3);
                                        if (displayProducts.length === 0) return null;

                                        // Patterns for varied layout:
                                        // idx % 2 === 0: 1 large on left, 2 smaller on right (Total 3)
                                        // idx % 2 === 1: 3-column grid
                                        const isStaggered = idx % 2 === 0 && displayProducts.length >= 3;

                                        return (
                                            <div key={cat.id} id={cat.id} className="pt-8">
                                                <div className="text-left mb-12">
                                                    <div className="flex items-center justify-between mb-8">
                                                        <h2 className="text-slate-900">
                                                            <span className="font-normal leading-[1.1] block">{cat.title}</span>
                                                        </h2>
                                                        <NavLink
                                                            to={`/blog/categorie/${cat.id}`}
                                                            className="text-xs font-black text-[#18448F] uppercase tracking-widest flex items-center gap-2 hover:text-slate-900 transition-colors"
                                                        >
                                                            Tout voir <ChevronRight className="w-4 h-4" />
                                                        </NavLink>
                                                    </div>
                                                    <div className="w-20 h-1 bg-[#18448F]"></div>
                                                </div>

                                                {isStaggered ? (
                                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                                        {/* Left Column: 1 Large Card */}
                                                        <div className="lg:col-span-8">
                                                            <NavLink
                                                                to={displayProducts[0].href}
                                                                className="group block h-full bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
                                                            >
                                                                <div className="relative aspect-[16/9] overflow-hidden">
                                                                    <img
                                                                        src={displayProducts[0].image}
                                                                        alt={displayProducts[0].title}
                                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                                    />
                                                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                                                                        <Clock className="w-3.5 h-3.5 text-[#18448F]" />
                                                                        <span className="text-[12px] font-bold text-slate-900">{displayProducts[0].readTime}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="p-8">
                                                                    <h3 className="md:text-3xl text-slate-900 mb-4 group-hover:text-[#18448F] transition-colors font-medium text-base leading-6 text-[#0F1729]">
                                                                        {displayProducts[0].title}
                                                                    </h3>
                                                                    <p className="text-slate-600 text-base font-light mb-6 flex-1">
                                                                        {displayProducts[0].desc}
                                                                    </p>
                                                                    <div className="flex justify-end">
                                                                        <div className="w-10 h-10 rounded-full border border-[#18448F] flex items-center justify-center text-[#18448F] transition-all duration-300 group-hover:bg-[#18448F] group-hover:text-white">
                                                                            <ArrowRight className="h-5 w-5" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </NavLink>
                                                        </div>
                                                        {/* Right Column: 2 Stacked Cards */}
                                                        <div className="lg:col-span-4 flex flex-col gap-8">
                                                            {displayProducts.slice(1, 3).map((product, pIdx) => (
                                                                <NavLink
                                                                    key={pIdx}
                                                                    to={product.href}
                                                                    className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                                                                >
                                                                    <div className="relative aspect-[16/10] overflow-hidden">
                                                                        <img
                                                                            src={product.image}
                                                                            alt={product.title}
                                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                                        />
                                                                    </div>
                                                                    <div className="p-6">
                                                                        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-wider">
                                                                            <Clock className="w-3.5 h-3.5" />
                                                                            <span>{product.readTime}</span>
                                                                        </div>
                                                                        <h3 className="text-slate-900 mb-2 group-hover:text-[#18448F] transition-colors font-medium text-base leading-6 text-[#0F1729]">
                                                                            {product.title}
                                                                        </h3>
                                                                    </div>
                                                                </NavLink>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                                        {displayProducts.map((product, pIdx) => (
                                                            <NavLink
                                                                key={pIdx}
                                                                to={product.href}
                                                                className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                                                            >
                                                                <div className="relative aspect-[16/10] overflow-hidden">
                                                                    <img
                                                                        src={product.image}
                                                                        alt={product.title}
                                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                                    />
                                                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                                                        <Clock className="w-3.5 h-3.5 text-[#18448F]" />
                                                                        <span className="text-[12px] font-bold text-slate-900">{product.readTime}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="p-6">
                                                                    <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-wider">
                                                                        <Clock className="w-3.5 h-3.5" />
                                                                        <span>{product.readTime}</span>
                                                                    </div>
                                                                    <h3 className="text-slate-900 mb-3 group-hover:text-[#18448F] transition-colors font-medium text-base leading-6 text-[#0F1729]">
                                                                        {product.title}
                                                                    </h3>
                                                                    <p className="text-slate-600 text-sm font-light leading-[19px] line-clamp-2">
                                                                        {product.desc}
                                                                    </p>
                                                                </div>
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#18448F]">
                    {/* Animated background elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/10 to-transparent -skew-x-12 -translate-x-1/4" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-white text-[#18448F] rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                    PRÊT À TRANSFORMER VOTRE EAU ?
                                </span>
                                <h2 className="font-light block leading-tight lg:leading-[52px] text-white text-3xl md:text-5xl">
                                    Obtenez des conseils <br />
                                    <span className="text-white italic font-bold font-serif">personnalisés d'un expert.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                                    Nos experts sont disponibles pour une consultation gratuite afin de discuter de vos besoins en traitement d'eau résidentiel ou commercial.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-4">
                                <div className="relative inline-block w-full sm:w-auto group">
                                    <div className="absolute inset-0 border border-white rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button 
                                        asChild
                                        className="relative bg-white text-[#18448F] hover:bg-white hover:text-[#18448F] rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none w-full sm:w-auto"
                                    >
                                        <a href="/contact" className="flex items-center gap-3">
                                            Planifier ma visite
                                        </a>
                                    </Button>
                                </div>

                                <div className="relative inline-block w-full sm:w-auto group">
                                    <div className="absolute inset-0 border border-white rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]"></div>
                                    <Button
                                        variant="outline"
                                        asChild
                                        className="relative bg-transparent border-none text-white hover:bg-[#18448F] hover:text-white rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all w-full sm:w-auto"
                                    >
                                        <a href="tel:18552649328">1 (855) 264-9328</a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    );
};

export default Blog;

