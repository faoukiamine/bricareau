import React, { useState, useEffect } from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ArrowRight, ChevronRight } from "lucide-react";
import { getSearchData, type SearchResult } from "@/data/searchData";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        document.title = `Résultats de recherche pour "${query}" - Bricareau`;
        
        if (query.length >= 2) {
            setIsSearching(true);
            const allData = getSearchData();
            const lowerQuery = query.toLowerCase();
            
            const filtered = allData.filter(item => {
                const inTitle = item.title.toLowerCase().includes(lowerQuery);
                const inDescription = item.description.toLowerCase().includes(lowerQuery);
                const inCategory = item.category?.toLowerCase().includes(lowerQuery);
                const inKeywords = item.keywords?.some(k => k.toLowerCase().includes(lowerQuery));
                
                return inTitle || inDescription || inCategory || inKeywords;
            });
            
            setResults(filtered);
            setIsSearching(false);
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
            <Header />
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="mb-12">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                            <NavLink to="/" className="hover:text-blue-600">Accueil</NavLink>
                            <ChevronRight className="h-4 w-4" />
                            <span>Recherche</span>
                        </div>
                        <h1 className="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic text-gray-900 mb-6 tracking-tight">
    Résultats de <span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg">recherche</span>
</h1>
                        <p className="text-xl text-gray-600 font-light">
                            {results.length} résultats pour <span className="font-bold text-[#0052ff]">"{query}"</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {results.length > 0 ? (
                            results.map((result, idx) => (
                                <NavLink
                                    key={idx}
                                    to={result.href}
                                    className="group p-6 bg-white border border-gray-100 rounded-3xl transition-all shadow-sm hover:shadow-xl hover:border-blue-100"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={cn(
                                                    "text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full",
                                                    result.type === 'product' ? "text-emerald-700 bg-emerald-50" :
                                                    result.type === 'blog' ? "text-amber-700 bg-amber-50" :
                                                    result.type === 'faq' ? "text-purple-700 bg-purple-50" :
                                                    "text-[#0052ff] bg-blue-50"
                                                )}>
                                                    {result.type === 'product' ? 'Produit' : 
                                                     result.type === 'blog' ? 'Article' : 
                                                     result.type === 'faq' ? 'FAQ' : 'Page'}
                                                </span>
                                                {result.category && (
                                                    <span className="text-xs text-gray-400 font-medium font-mono">
                                                        / {result.category}
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#0052ff] transition-colors mb-2">
                                                {result.title}
                                            </h2>
                                            <p className="text-gray-600 font-light leading-relaxed max-w-3xl">
                                                {result.description}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0052ff] group-hover:bg-[#0052ff] group-hover:text-white transition-all transform group-hover:translate-x-1">
                                                <ArrowRight className="h-6 w-6" />
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            ))
                        ) : (
                            <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200 shadow-sm">
                                <div className="h-20 w-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                                    <Search className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun résultat trouvé</h3>
                                <p className="text-gray-500 font-light mb-8 max-w-md mx-auto">
                                    Nous n'avons rien trouvé correspondant à votre recherche. Essayez avec d'autres mots-clés ou parcourez nos catégories.
                                </p>
                                <div className="flex justify-center gap-4">
                                    <Button asChild variant="outline" className="rounded-full">
                                        <NavLink to="/blog">Voir le blog</NavLink>
                                    </Button>
                                    <Button asChild className="rounded-full bg-[#0052ff] hover:bg-blue-700">
                                        <NavLink to="/contact">Nous contacter</NavLink>
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SearchPage;
