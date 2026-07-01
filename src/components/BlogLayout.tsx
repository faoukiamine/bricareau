import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, ChevronLeft, ChevronRight, Waves, Droplets, Phone, Clock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories } from "@/data/blogCategories";
import { NavLink } from "react-router-dom";

interface BlogLayoutProps {
    title: string;
    headerImage: string;
    children: React.ReactNode;
    tocItems?: { id: string; title: string }[];
}

const RelatedArticlesCarousel = ({ articles }: { articles: Array<{ href: string; image: string; title: string; readTime?: string }> }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setItemsPerSlide(1);
            else if (window.innerWidth < 1024) setItemsPerSlide(2);
            else setItemsPerSlide(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(articles.length / itemsPerSlide);

    return (
        <div className="mt-8 mb-16 w-full">
            <h3 className="tracking-tight text-black mb-8 px-4">
                Articles Recommandés
            </h3>
            <div className="relative overflow-hidden w-full px-4 py-2">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIdx) => (
                        <div key={slideIdx} className="min-w-full grid gap-4 lg:gap-8" style={{ gridTemplateColumns: `repeat(${itemsPerSlide}, minmax(0, 1fr))` }}>
                            {articles.slice(slideIdx * itemsPerSlide, slideIdx * itemsPerSlide + itemsPerSlide).map((article, idx) => (
                                <article
                                    key={idx}
                                    className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100"
                                >
                                    <a href={article.href} className="flex flex-col h-full">
                                        <div className="h-56 overflow-hidden">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                            <h4 className="mb-4 group-hover:text-blue-600 transition-colors tracking-tight text-slate-900 mt-2">
                                                {article.title}
                                            </h4>
                                            <div className="mt-auto flex items-center justify-between">
                                                <div className="w-9 h-9 rounded-full border border-blue-600 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                                    <ArrowRight className="h-4 w-4" />
                                                </div>
                                                {article.readTime && (
                                                    <span className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                                                        <Clock className="w-3 h-3" />
                                                        {article.readTime}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            {totalSlides > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Aller à la page ${index + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? "w-6 bg-blue-600" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const BlogLayout: React.FC<BlogLayoutProps> = ({ title, headerImage, children, tocItems }) => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-100px 0px -70% 0px', threshold: 0 });

        const headings = document.querySelectorAll("h2[id]");
        headings.forEach(h => observer.observe(h));

        return () => headings.forEach(h => observer.unobserve(h));
    }, []);

    // Find the category of the current article
    const currentCategory = categories.find(cat =>
        cat.products.some(p => p.title === title)
    );

    // Find the current article object to get its details
    const currentArticle = currentCategory?.products.find(p => p.title === title);

    // Filter articles from the same category, excluding the current one
    let recommendedArticles: any[] = [];
    if (currentCategory) {
        recommendedArticles = currentCategory.products
            .filter(p => p.title !== title)
            .sort(() => 0.5 - Math.random()) // Shuffle
            .slice(0, 3);
    }

    // Fallback if not enough articles in the same category
    if (recommendedArticles.length < 3) {
        const otherArticles = categories
            .flatMap(cat => cat.products)
            .filter(p => p.title !== title && !recommendedArticles.find(r => r.title === p.title))
            .sort(() => 0.5 - Math.random())
            .slice(0, 3 - recommendedArticles.length);
        recommendedArticles = [...recommendedArticles, ...otherArticles];
    }

    return (
        <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
            <Header />

            <div className="flex-grow">
                {/* Hero Section - Split Layout */}
                <div className="w-full h-[100vh] relative flex flex-col lg:flex-row overflow-hidden bg-white lg:bg-[#1a3a5c]">

                    {/* Image and Gradients */}
                    <div className="absolute inset-0 w-full h-full opacity-40 md:opacity-100 z-[1]">
                        {/* Mobile Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent z-10 md:hidden"></div>
                        {/* Tablet Vertical Filter (Progressive) */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,white_0%,rgba(255,255,255,0.8)_25%,rgba(255,255,255,0.4)_60%,transparent_100%)] z-10 hidden md:block lg:hidden"></div>
                        {/* Desktop Gradient: fade over the text area */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10 hidden lg:block w-[50%]"></div>
                        
                        <div className="absolute right-0 top-0 w-full h-full lg:w-[65%]">
                            {/* Inner gradient to blend the hard edge on desktop */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10 hidden lg:block w-1/3"></div>
                            <img 
                                src={headerImage} 
                                className="absolute inset-0 w-full h-full object-cover object-[80%_center] lg:object-right"
                                alt={title}
                            />
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-[2]"></div>

                    <div className="relative lg:absolute lg:inset-0 z-10 flex items-center bg-white lg:bg-transparent py-12 lg:py-0 h-full">
                        <div className="container mx-auto px-4 md:px-6 w-full">
                            <div className="max-w-xl">

                                <h1
                                    className="text-[50px] leading-[55px] font-sans font-bold mb-6 tracking-tight text-[#18448F]"
                                >
                                    {title}
                                </h1>
                                <div className="flex items-center flex-wrap gap-4 text-[11px] text-slate-400 lg:text-white/50 uppercase tracking-[0.15em]">
                                    <span>Mars 20 — 2026</span>
                                    <span className="w-px h-3 bg-slate-200 lg:bg-white/25"></span>
                                    <span>Par Bricareau</span>
                                    {currentArticle?.readTime && (
                                        <>
                                            <span className="w-px h-3 bg-slate-200 lg:bg-white/25"></span>
                                            <span className="flex items-center gap-2">
                                                <Clock className="w-3.5 h-3.5" />
                                                {currentArticle.readTime}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Card */}
                <main className="container mx-auto px-4 md:px-6 relative z-10">
                    <article className="bg-white px-8 py-16 md:px-12 lg:px-16 md:py-24 shadow-sm">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                            {/* Article Body */}
                            <div className="w-full lg:w-3/4 text-[15px] leading-relaxed text-gray-500 font-light space-y-8 text-justify">
                                {children}
                            </div>

                            {/* Sidebar Index / TOC */}
                            {tocItems && tocItems.length > 0 && (
                                <div className="w-full lg:w-1/4 hidden lg:block">
                                    <div className="sticky top-24 pt-8 border-t-2 border-black">
                                        <h4 className="text-black uppercase tracking-[0.1em] mb-6">
                                            Dans cet article
                                        </h4>
                                        <ul className="space-y-4 text-sm text-gray-500 font-light">
                                            {tocItems.map((item) => (
                                                <li key={item.id}>
                                                    <a
                                                        href={`#${item.id}`}
                                                        className={`transition-colors block leading-tight ${activeSection === item.id ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}
                                                    >
                                                        {item.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Article Bottom Banner */}
                        <div className="mt-20 bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden flex flex-col items-center text-center">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Waves className="w-48 h-48" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-8 opacity-10">
                                <Droplets className="w-32 h-32" />
                            </div>

                            <h3 className="md:text-3xl mb-4 relative z-10">
                                Prêt à retrouver une eau limpide ?
                            </h3>
                            <p className="text-blue-100 mb-8 max-w-2xl relative z-10 text-[15px]">
                                Ne laissez pas l'eau de mauvaise qualité gâcher votre quotidien. Nos experts sont là pour vous proposer des solutions sur mesure et durables pour toute votre maison.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-gray-50 rounded-full px-8 h-12 font-bold shadow-sm"
                                    asChild
                                >
                                    <a href="/Analyses-et-Tests-d-eau">Demander une analyse d'eau</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10 rounded-full px-8 h-12 font-bold bg-white/10 backdrop-blur-sm"
                                    asChild
                                >
                                    <a href="tel:18552649328" className="flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        Appeler au 1-855-264-9328
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Social Share */}
                        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-end gap-6 text-gray-400">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-bold tracking-[0.15em] uppercase">Partager l'article</span>
                                <a href="#" className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-[#1877F2]/90 transition-colors">
                                    <Facebook className="w-3.5 h-3.5 fill-white" />
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:bg-[#1DA1F2]/90 transition-colors">
                                    <Twitter className="w-3.5 h-3.5 fill-white" />
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-[#0A66C2]/90 transition-colors">
                                    <Linkedin className="w-3.5 h-3.5 fill-white" />
                                </a>
                            </div>
                        </div>
                    </article>

                    <RelatedArticlesCarousel articles={recommendedArticles} />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default BlogLayout;
