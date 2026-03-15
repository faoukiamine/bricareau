import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowRight, Droplets, Waves, Phone, ChevronRight, Search, SlidersHorizontal, Check } from "lucide-react";
import { NavLink } from "react-router-dom";
import { faqCategories } from "@/data/faqs";
import React, { useState, useEffect } from "react";

const FAQCard = ({ item }: { item: { q: string, a: string } }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    // Rough estimate for 4 lines of text
    const isLong = item.a.length > 180;

    return (
        <div className="bg-white border border-slate-200 rounded p-6 md:p-8 flex flex-col h-full hover:shadow-md transition-shadow">
            <h3 className="text-slate-900 mb-4">
                {item.q}
            </h3>
            <div className={`text-slate-700 font-light leading-relaxed mb-6 flex-grow ${!isExpanded && isLong ? 'line-clamp-4' : ''}`}>
                {item.a}
            </div>
            {isLong && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-600 text-[15px] font-medium hover:underline self-start mt-auto underline-offset-4"
                >
                    {isExpanded ? 'Lire moins' : 'Lire la suite'}
                </button>
            )}
        </div>
    );
};

const FAQ = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

    const handleCategoryToggle = (id: string) => {
        setSelectedCategories(prev => {
            if (prev.includes(id)) {
                return prev.filter(c => c !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const toggleExpandedCategory = (id: string) => {
        setExpandedCategories(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const filteredCategories = faqCategories.map(cat => {
        if (selectedCategories.length > 0 && !selectedCategories.includes(cat.id)) {
            return { ...cat, items: [] };
        }

        const lowerQuery = searchQuery.toLowerCase();
        const items = cat.items.filter(item =>
            item.q.toLowerCase().includes(lowerQuery) ||
            item.a.toLowerCase().includes(lowerQuery)
        );

        return { ...cat, items };
    }).filter(cat => cat.items.length > 0);

    const totalResults = filteredCategories.reduce((sum, cat) => sum + cat.items.length, 0);
    const isSearchingOrFiltering = searchQuery.length > 0 || selectedCategories.length > 0;

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
                        <div className="lg:hidden w-full h-[250px] relative">
                            <img
                                src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop"
                                alt="Support Bricareau"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
                        </div>

                        <div className="container mx-auto px-6 max-w-5xl h-full flex items-center">
                            <div className="py-12 lg:py-0 w-full">
                                <div className="lg:hidden">
                                    <GlobalBreadcrumbs variant="light" />
                                </div>
                                <h1
                                    className="text-[32px] md:text-[52px] leading-tight text-slate-900 mb-6 tracking-tight"
                                    style={{
                                        fontWeight: 350
                                    }}
                                >
                                    Obtenez des <span className="text-blue-600">réponses</span> à vos questions
                                </h1>
                                <p className="text-slate-600 max-w-xl font-light">
                                    Vous trouverez ci-dessous les réponses aux questions les plus fréquentes. Recherchez les sujets qui vous intéressent ou triez par catégorie.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Main Content Container (Search & Filters) */}
                <section className="pb-24 bg-white min-h-[50vh]">
                    <div className="container mx-auto px-6 max-w-5xl">

                        {/* Search Input */}
                        <div className="relative mb-4">
                            <input
                                type="text"
                                placeholder="Rechercher une question"
                                className="w-full text-2xl md:text-4xl text-slate-900 border-b-2 border-slate-300 pb-4 pt-2 outline-none focus:border-blue-600 transition-colors bg-white font-light placeholder:text-slate-300"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="absolute right-0 top-2 bottom-4 w-12 md:w-16 flex items-center justify-center bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none">
                                <Search className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                        </div>

                        {/* Results Count */}
                        <p className="font-bold text-slate-900 mb-8 border-b border-slate-900 pb-4">
                            {totalResults} résultats trouvés
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
                                            {faqCategories.map(cat => (
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
                                    <p className="">Aucune question ne correspond à votre recherche.</p>
                                </div>
                            ) : (
                                filteredCategories.map((cat) => {
                                    // If searching/filtering, expand automatically to show all matches
                                    const isExpanded = isSearchingOrFiltering ? true : (expandedCategories[cat.id] || false);
                                    const displayItems = isExpanded ? cat.items : cat.items.slice(0, 5);
                                    const hasMore = !isSearchingOrFiltering && cat.items.length > 5;

                                    return (
                                        <section key={cat.id} id={cat.id}>
                                            <div className="text-left mb-12">
                                                <h2 className="text-slate-900 mb-6">
                                                    <span className="text-[32px] md:text-[48px] font-normal leading-[1.1] block">{cat.title}</span>
                                                </h2>
                                                <div className="w-20 h-1 bg-blue-600"></div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {displayItems.map((item, qIdx) => (
                                                    <FAQCard key={qIdx} item={item} />
                                                ))}
                                            </div>

                                            {hasMore && (
                                                <div className="mt-6">
                                                    <Button
                                                        onClick={() => toggleExpandedCategory(cat.id)}
                                                        variant="ghost"
                                                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-4 h-10 -ml-4"
                                                    >
                                                        Afficher plus de questions
                                                    </Button>
                                                </div>
                                            )}
                                        </section>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </section>

                {/* 3. Final Call to Action */}
                <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <Waves className="absolute -bottom-10 -left-10 w-96 h-96 text-white" />
                        <Droplets className="absolute -top-10 -right-10 w-64 h-64 text-white" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
                        <div className="max-w-2xl text-slate-900 lg:text-white py-12 lg:py-0">
                            <h2 className="mb-8 italic">
                                Vous n'avez pas trouvé votre réponse ?
                            </h2>
                            <p className="opacity-90 mb-12 max-w-2xl mx-auto">
                                Nos experts en traitement de l'eau sont disponibles pour répondre à toutes vos interrogations et planifier une analyse gratuite.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-12 h-16 text-lg shadow-lg" asChild>
                                <NavLink to="/consultation">Planifiez une consultation gratuite</NavLink>
                            </Button>
                            <Button size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white/10 rounded-full px-12 h-16 text-lg flex items-center gap-2" asChild>
                                <a href="tel:18552649328">
                                    <Phone className="w-5 h-5" />
                                    1-855-264-9328
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    );
};

export default FAQ;
