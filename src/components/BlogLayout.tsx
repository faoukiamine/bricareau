import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, ChevronLeft, ChevronRight, Waves, Droplets, Phone, Clock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories } from "@/data/blogCategories";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
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
                <div className="w-full min-h-[450px] lg:h-[700px] relative flex flex-col lg:flex-row overflow-hidden bg-white lg:bg-[#1a3a5c]">
                    <div className="absolute top-[100px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>
                    {/* Background image - right side */}
                    <div className="absolute right-0 top-0 z-[1] hidden h-full w-3/5 lg:block">
                        <img
                            src={headerImage}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* SVG overlay */}
                    <div className="absolute inset-0 z-[2] hidden lg:block">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 640 290"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="gradPanel" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#0c2340" />
                                    <stop offset="50%" stopColor="#1a3a5c" />
                                    <stop offset="100%" stopColor="#2563a0" />
                                </linearGradient>
                                <linearGradient id="gradPetal" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#1a3a5c" />
                                    <stop offset="100%" stopColor="#3b82c4" />
                                </linearGradient>
                                <linearGradient id="gradAccent" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#163050" />
                                    <stop offset="100%" stopColor="#0c2340" />
                                </linearGradient>
                                <linearGradient id="gradCorner" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#1a3a5c" />
                                    <stop offset="100%" stopColor="#3b82c4" stopOpacity="0.4" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M269.7 85.95C260.8 58.45 254.75 29.7 251.75 0H0v290.5h287.25c-23.65-32.95-37.6-73.35-37.6-117 0-31.4 7.2-61.1 20.05-87.55Z"
                                fill="url(#gradPanel)"
                            />
                            <path
                                d="M269.7 85.95c-12.85 26.45-20.05 56.15-20.05 87.55 0 43.65 13.95 84.05 37.6 117h128.2C347.85 239.45 296.3 168.3 269.7 85.95Z"
                                fill="url(#gradPetal)"
                            />
                            <path
                                d="M349.35 0h-97.6c3 29.7 9.05 58.45 17.95 85.95C287.15 50 315 20.05 349.35 0Z"
                                fill="url(#gradAccent)"
                            />
                            <path
                                d="M640 107.15V0h-88.45c40.9 23.85 72.55 61.8 88.45 107.15Z"
                                fill="url(#gradCorner)"
                                opacity="0.4"
                            />
                            <path
                                d="M640 290.5v-50.65c-6.4 18.2-15.3 35.25-26.35 50.65H640Z"
                                fill="url(#gradCorner)"
                                opacity="0.3"
                            />
                        </svg>
                    </div>

                    {/* Mobile image - top side */}
                    <div className="lg:hidden relative h-[250px] sm:h-[350px] w-full">
                        <img
                            src={headerImage}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative lg:absolute lg:inset-0 z-10 flex items-center bg-white lg:bg-transparent py-12 lg:py-0 h-full">
                        <div className="container mx-auto px-4 md:px-6 w-full">
                            <div className="max-w-xl">

                                <h1
                                    className="italic text-slate-900 lg:text-white leading-tight mb-6 tracking-tight"
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
