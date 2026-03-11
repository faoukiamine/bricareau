import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowRight, ChevronRight, Droplets, Waves, Search, SlidersHorizontal, Check, Clock } from "lucide-react";
import { NavLink } from "react-router-dom";
import { categories } from "@/data/blogCategories";
import React, { useState } from "react";

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

    const filteredCategories = categories.map(cat => {
        // If categories are selected, check if this one is included
        if (selectedCategories.length > 0 && !selectedCategories.includes(cat.id)) {
            return { ...cat, products: [] };
        }

        const lowerQuery = searchQuery.toLowerCase();
        const products = cat.products.filter(product =>
            product.title.toLowerCase().includes(lowerQuery) ||
            product.desc.toLowerCase().includes(lowerQuery)
        );

        return { ...cat, products };
    }).filter(cat => cat.products.length > 0);

    const totalResults = filteredCategories.reduce((sum, cat) => sum + cat.products.length, 0);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* 1. Hero / Header Area */}
                <section className="pt-[180px] pb-12 bg-white">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h1 className="text-[36px] md:text-[52px] leading-tight font-bold text-slate-900 mb-6 tracking-tight">
                            Articles & Ressources
                        </h1>
                    </div>
                </section>

                {/* 2. Filters Section */}
                <section className="py-24 bg-white min-h-[50vh]">
                    <div className="container mx-auto px-6 max-w-5xl">


                        {/* Results Count */}
                        <p className="font-bold text-lg md:text-xl text-slate-900 mb-8 border-b border-slate-900 pb-4">
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
                        <div className="flex flex-col gap-16">
                            {filteredCategories.length === 0 ? (
                                <div className="text-center py-16 text-slate-500">
                                    <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p className="text-lg">Aucun article ne correspond à votre recherche.</p>
                                </div>
                            ) : (
                                filteredCategories.map((cat, idx) => (
                                    <div key={cat.id} id={cat.id}>
                                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 border-b border-gray-100 pb-6">
                                            <div>
                                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{cat.title}</h2>
                                                <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
                                            </div>
                                            {cat.products.length > 3 && (
                                                <Button variant="link" className="text-blue-600 font-bold p-0 group" asChild>
                                                    <NavLink to={`/blog/categorie/${cat.id}`} className="flex items-center">
                                                        Voir tous les articles <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                                    </NavLink>
                                                </Button>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {cat.products.slice(0, 3).map((product, pIdx) => (
                                                <NavLink
                                                    key={pIdx}
                                                    to={product.href}
                                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
                                                >
                                                    <div className="relative h-64 overflow-hidden">
                                                        <img
                                                            src={product.image}
                                                            alt={`${product.title} - Solution Bricareau`}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                                                        {/* Reading Time Badge */}
                                                        {product.readTime && (
                                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm z-10 transition-transform group-hover:scale-105">
                                                                <Clock className="w-3.5 h-3.5 text-blue-600" />
                                                                <span className="text-[12px] font-bold text-slate-900">{product.readTime}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="p-8 flex flex-col flex-1">
                                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                            {product.title}
                                                        </h3>
                                                        <p
                                                            className="text-slate-600 mb-6 flex-1 text-sm font-light leading-[19px]"
                                                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                                        >
                                                            {product.desc}
                                                        </p>
                                                        <div className="mt-auto flex justify-end">
                                                            <div className="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                                                <ArrowRight className="h-5 w-5" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <Waves className="absolute -bottom-10 -left-10 w-96 h-96 text-white" />
                        <Droplets className="absolute -top-10 -right-10 w-64 h-64 text-white" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">
                            Prêt à transformer la qualité de votre eau ?
                        </h2>
                        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-snug">
                            Nos experts sont disponibles pour une consultation personnalisée et gratuite à votre domicile ou entreprise.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-12 h-16 text-lg font-bold shadow-lg" asChild>
                                <a href="/contact">Planifier ma visite</a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-12 h-16 text-lg font-bold" asChild>
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

