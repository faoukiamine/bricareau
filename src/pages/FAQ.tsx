import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowRight, Droplets, Waves, Phone, ChevronRight, Search, SlidersHorizontal, Check } from "lucide-react";
import { NavLink } from "react-router-dom";
import { faqCategories } from "@/data/faqs";
import React, { useState, useEffect } from "react";
import faqHero from "@/assets/Foire aux Questions.jpg";

const FAQCard = ({ item }: { item: { q: string, a: string } }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    // Rough estimate for 4 lines of text
    const isLong = item.a.length > 180;

    return (
        <div className="bg-white border border-slate-200 rounded p-6 md:p-8 flex flex-col h-full hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                {item.q}
            </h3>
            <div className={`text-slate-700 font-light leading-relaxed mb-6 flex-grow ${!isExpanded && isLong ? 'line-clamp-4' : ''}`}>
                {item.a}
            </div>
            {isLong && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[#18448F] text-[15px] font-medium hover:underline self-start mt-auto underline-offset-4"
                >
                    {isExpanded ? 'Lire moins' : 'Lire la suite'}
                </button>
            )}
        </div>
    );
};

const FAQ = () => {
    useEffect(() => {
        document.title = "Foire aux Questions (FAQ) - Traitement d'Eau | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Toutes vos questions sur l'adoucissement, la filtration, les tests d'eau et l'entretien de vos systèmes de traitement d'eau au Québec. Réponses d'experts.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "FAQ Bricareau : Vos Questions sur l'Eau Répondues");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Trouvez rapidement des réponses claires sur la qualité de votre eau et nos solutions de traitement pour votre domicile.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/faq");
    }, []);
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
        <div className="min-h-screen bg-background font-sans text-slate-900">
            <Header />
            <main>
                {/* 1. Hero Section */}
                <section className="relative bg-white overflow-hidden min-h-screen flex flex-col justify-center pt-24 pb-16 lg:pt-28 lg:pb-16 border-b border-slate-200">
                    <div className="absolute inset-0 w-full h-full opacity-40 lg:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent z-10 lg:hidden"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10 hidden lg:block w-[50%]"></div>
                        <div className="absolute right-0 top-0 w-full h-full lg:w-[65%]">
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10 hidden lg:block w-1/3"></div>
                            <img 
                                src={faqHero} 
                                className="absolute inset-0 w-full h-full object-cover object-center lg:object-right"
                             alt="Support et Foire aux questions Bricareau - Réponses à vos besoins en traitement d'eau" title="Systèmes d'eau sur mesure par Bricareau" />
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-20"></div>
                    
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>

                    <div className="container mx-auto px-6 relative z-30">
                        <div className="max-w-3xl flex flex-col justify-center">
                            <div className="mb-8">
                                <h1 className="text-[50px] leading-[55px] font-sans font-bold mb-6 tracking-tight">
                                    <span className="text-[#18448F]">Foire aux questions,</span><br/>
                                    <span className="text-[#8CC63F]">obtenez des réponses claires.</span>
                                </h1>
                                
                                <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl">
                                    Vous trouverez ci-dessous les réponses aux questions les plus fréquentes sur le traitement de l'eau. Recherchez les sujets qui vous intéressent ou triez par catégorie pour trouver rapidement l'information dont vous avez besoin.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Main Content Container (Search & Filters) */}
                <section className="pt-20 pb-24 bg-white min-h-[50vh]">
                    <div className="container mx-auto px-6 max-w-5xl">

                        {/* Search Input */}
                        <div className="relative mb-4">
                            <input
                                type="text"
                                placeholder="Rechercher une question"
                                className="w-full text-2xl md:text-4xl text-slate-900 border-b-2 border-slate-300 pb-4 pt-2 outline-none focus:border-[#18448F] transition-colors bg-white font-light placeholder:text-slate-300"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="absolute right-0 top-2 bottom-4 w-12 md:w-16 flex items-center justify-center bg-[#18448F] text-white rounded hover:bg-[#18448F]/90 transition-colors focus:outline-none">
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
                                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                                    {cat.title}
                                                </h2>
                                                <div className="w-20 h-1 bg-[#18448F]"></div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {displayItems.map((item, qIdx) => (
                                                    <FAQCard key={qIdx} item={item} />
                                                ))}
                                            </div>

                                            {hasMore && (
                                                <div className="mt-8">
                                                    <ProMaxButton
                                                        onClick={() => toggleExpandedCategory(cat.id)}
                                                    >
                                                        Afficher plus de questions
                                                    </ProMaxButton>
                                                </div>
                                            )}
                                        </section>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </section>

                {/* 3. PREMIUM CTA SECTION */}
                <section className="relative py-32 flex items-center overflow-hidden bg-[#18448F]">
                    {/* Animated background elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/10 to-transparent -skew-x-12 -translate-x-1/4" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-4 py-1.5 bg-white text-[#18448F] rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                                    BESOIN D'ASSISTANCE ?
                                </span>
                                <h2 className="font-light block leading-tight lg:leading-[52px] text-white text-3xl md:text-5xl">
                                    Vous n'avez pas trouvé <br />
                                    <span className="text-white italic font-bold font-serif">la réponse à votre question ?</span>
                                </h2>
                                <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                                    Nos experts sont disponibles pour discuter de votre projet de traitement d'eau et répondre à toutes vos interrogations techniques ou commerciales.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-4">
                                <ProMaxButton 
                                    asChild
                                    variant="white"
                                >
                                    <a href="tel:18552649328" className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 animate-bounce" />
                                        Parler à un expert
                                    </a>
                                </ProMaxButton>

                                <ProMaxButton
                                    variant="outline-white"
                                    asChild
                                >
                                    <NavLink to="/consultation">Planifier une consultation</NavLink>
                                </ProMaxButton>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    );
};

export default FAQ;
