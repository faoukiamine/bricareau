import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowRight, ChevronRight, Droplets, Waves, Search, SlidersHorizontal, Check, Clock } from "lucide-react";
import { NavLink } from "react-router-dom";
import { categories } from "@/data/blogCategories";
import React, { useState } from "react";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";

const Blog = () => {
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
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* 1. Hero / Header Area (Redesigned for Mobile) */}
                <section className="relative lg:h-[700px] bg-white overflow-hidden flex flex-col lg:items-center">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-6 max-w-5xl pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        {/* Mobile Image */}
                        <div className="lg:hidden w-full h-[300px] relative">
                            <img
                                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop"
                                alt="Articles et Ressources Bricareau"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
                        </div>

                        <div className="container mx-auto px-6 max-w-5xl h-full flex items-center">
                            <div className="py-12 lg:py-0 w-full">
                                <h1
                                    className="text-[32px] md:text-[52px] leading-tight text-slate-900 mb-6 tracking-tight"
                                    style={{
                                        fontWeight: 350
                                    }}
                                >
                                    Articles & <span className="text-blue-600">Ressources</span>
                                </h1>
                                <p className="text-slate-600 max-w-2xl font-light">
                                    Découvrez nos derniers articles, guides et conseils d'experts pour une eau de meilleure qualité au quotidien.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Filters Section */}
                <section className="py-24 bg-white min-h-[50vh]">
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
                                                    <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${selectedCategories.includes(cat.id) ? 'bg-blue-600 border-blue-600' : 'border-slate-300 group-hover:border-blue-600 bg-white'}`}>
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
                                                    className="text-blue-600 text-sm font-medium hover:underline underline-offset-4"
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
                                <Button
                                    variant="outline"
                                    className="mt-8 rounded-full"
                                    onClick={() => { setSearchQuery(""); setSelectedCategories([]); }}
                                >
                                    Effacer les filtres
                                </Button>
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
                                                            <span className="text-[32px] md:text-[48px] font-normal leading-[1.1] block">{cat.title}</span>
                                                        </h2>
                                                        <NavLink
                                                            to={`/blog/categorie/${cat.id}`}
                                                            className="text-xs font-black text-blue-600 uppercase tracking-widest flex items-center gap-2 hover:text-slate-900 transition-colors"
                                                        >
                                                            Tout voir <ChevronRight className="w-4 h-4" />
                                                        </NavLink>
                                                    </div>
                                                    <div className="w-20 h-1 bg-blue-600"></div>
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
                                                                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                                                                        <span className="text-[12px] font-bold text-slate-900">{displayProducts[0].readTime}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="p-8">
                                                                    <h3 className="md:text-3xl text-slate-900 mb-4 group-hover:text-blue-600 transition-colors font-medium text-base leading-6 text-[#0F1729]">
                                                                        {displayProducts[0].title}
                                                                    </h3>
                                                                    <p className="text-slate-600 text-base font-light mb-6 flex-1">
                                                                        {displayProducts[0].desc}
                                                                    </p>
                                                                    <div className="flex justify-end">
                                                                        <div className="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
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
                                                                        <h3 className="text-slate-900 mb-2 group-hover:text-blue-600 transition-colors font-medium text-base leading-6 text-[#0F1729]">
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
                                                                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                                                                        <span className="text-[12px] font-bold text-slate-900">{product.readTime}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="p-6">
                                                                    <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-wider">
                                                                        <Clock className="w-3.5 h-3.5" />
                                                                        <span>{product.readTime}</span>
                                                                    </div>
                                                                    <h3 className="text-slate-900 mb-3 group-hover:text-blue-600 transition-colors font-medium text-base leading-6 text-[#0F1729]">
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
                <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <Waves className="absolute -bottom-10 -left-10 w-96 h-96 text-white" />
                        <Droplets className="absolute -top-10 -right-10 w-64 h-64 text-white" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h2 className="mb-8 italic">
                            Prêt à transformer la qualité de votre eau ?
                        </h2>
                        <p className="opacity-90 mb-12 max-w-2xl mx-auto">
                            Nos experts sont disponibles pour une consultation personnalisée et gratuite à votre domicile ou entreprise.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-12 h-16 text-lg shadow-lg" asChild>
                                <a href="/contact">Planifier ma visite</a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-12 h-16 text-lg" asChild>
                                <a href="tel:18552649328">1 (855) 264-9328</a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    );
};

export default Blog;

