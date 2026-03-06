import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, ChevronLeft, ChevronRight, Waves, Droplets, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogLayoutProps {
    title: string;
    headerImage: string;
    children: React.ReactNode;
    tocItems?: { id: string; title: string }[];
}

const relatedArticles = [
    {
        title: "Fonctionnement : Le Guide",
        category: "Adoucissement de l'eau",
        image: "https://images.unsplash.com/photo-1594411133519-2189874cb3d1?q=80&w=2000&auto=format&fit=crop",
        link: "/qu-est-ce-qu-un-adoucisseur-eau-fonctionnement"
    },
    {
        title: "Dureté : Le Seuil Critique",
        category: "Adoucissement de l'eau",
        image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
        link: "/niveau-durete-eau-besoin-adoucisseur"
    },
    {
        title: "Mesurer sa dureté soi-même",
        category: "Adoucissement de l'eau",
        image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
        link: "/comment-mesurer-durete-eau-maison"
    },
    {
        title: "Les Signes de Besoin Absolu",
        category: "Adoucissement de l'eau",
        image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
        link: "/les-signes-absolument-besoin-adoucisseur-eau"
    },
    {
        title: "Sel vs Sans Sel : La Vérité",
        category: "Adoucissement de l'eau",
        image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
        link: "/adoucisseur-eau-sel-vs-sans-sel-efficacite"
    }
];

const RelatedArticlesCarousel = () => {
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

    const totalSlides = Math.ceil(relatedArticles.length / itemsPerSlide);

    return (
        <div className="mt-8 mb-16 w-full">
            <h3 className="text-lg font-bold tracking-tight text-black mb-8 px-4" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
                Articles Recommandés
            </h3>
            <div className="relative overflow-hidden w-full px-4 py-2">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIdx) => (
                        <div key={slideIdx} className="min-w-full grid gap-4 lg:gap-8" style={{ gridTemplateColumns: `repeat(${itemsPerSlide}, minmax(0, 1fr))` }}>
                            {relatedArticles.slice(slideIdx * itemsPerSlide, slideIdx * itemsPerSlide + itemsPerSlide).map((article, idx) => (
                                <article
                                    key={idx}
                                    className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full border border-gray-100"
                                >
                                    <a href={article.link} className="flex flex-col h-full">
                                        <div className="h-56 overflow-hidden">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                            <h4 className="text-xl font-medium mb-4 group-hover:text-blue-600 transition-colors tracking-tight text-slate-900 mt-2">
                                                {article.title}
                                            </h4>
                                            <div className="mt-auto inline-block">
                                                <span className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm">
                                                    Lire <ChevronRight className="h-4 w-4" />
                                                </span>
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

    return (
        <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
            <Header />

            <div className="flex-grow">
                {/* Header Image */}
                <div className="w-full h-[60vh] lg:h-[70vh] min-h-[500px] relative -mt-[104px]">
                    <img
                        src={headerImage}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-b lg:from-black/70 lg:via-black/30 lg:to-transparent z-10" />
                </div>

                {/* Main Content Card (overlapping) */}
                <main className="container mx-auto px-4 md:px-6 -mt-40 relative z-10">
                    <article className="bg-white px-8 py-16 md:px-12 lg:px-16 md:py-24 shadow-sm rounded-t-lg lg:rounded-t-none">
                        {/* Header of article */}
                        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
                            <span className="inline-block px-5 py-2 bg-black text-white text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-8">
                                Guide Expert
                            </span>

                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1] tracking-tight mb-8"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                            >
                                {title}
                            </h1>

                            <div className="flex items-center justify-center flex-wrap gap-4 text-[11px] text-gray-400 uppercase tracking-[0.1em]">
                                <span>Mars 20 — 2026</span>
                                <span className="w-px h-3 bg-gray-300"></span>
                                <span>Par Bricareau</span>
                                <span className="w-px h-3 bg-gray-300"></span>
                                <span>No Comments</span>
                            </div>
                        </div>

                        {/* Article Grid Container */}
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                            {/* Article Body */}
                            <div className="w-full lg:w-3/4 text-[15px] leading-relaxed text-gray-500 font-light space-y-8" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
                                {children}
                            </div>

                            {/* Sidebar Index / TOC */}
                            {tocItems && tocItems.length > 0 && (
                                <div className="w-full lg:w-1/4 hidden lg:block">
                                    <div className="sticky top-24 pt-8 border-t-2 border-black">
                                        <h4 className="text-[11px] font-bold text-black uppercase tracking-[0.1em] mb-6">
                                            Dans cet article
                                        </h4>
                                        <ul className="space-y-4 text-sm text-gray-500 font-light" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
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

                            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
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
                                    <a href="/tests-eau">Demander une analyse d'eau</a>
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

                        {/* Footer of article card */}
                        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-end gap-6 text-gray-400">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-bold tracking-[0.15em] uppercase">Share Post</span>
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

                    {/* Related Articles Carousel beneath card */}
                    <RelatedArticlesCarousel />
                </main>

            </div>
            <Footer />
        </div>
    );
};

export default BlogLayout;
