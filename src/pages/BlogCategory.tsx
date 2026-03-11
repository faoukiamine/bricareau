import React, { useEffect } from "react";
import { useParams, Navigate, NavLink } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, ArrowRight } from "lucide-react";
import { categories } from "@/data/blogCategories";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const BlogCategory = () => {
    const { categoryId } = useParams();
    const category = categories.find((cat) => cat.id === categoryId);
    const [visibleCount, setVisibleCount] = React.useState(6);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    useEffect(() => {
        if (category) {
            document.title = `${category.title} - Articles de Blog | Bricareau`;
            window.scrollTo(0, 0);
        }
    }, [category]);

    if (!category) {
        return <Navigate to="/blog" replace />;
    }

    const visibleArticles = category.products.slice(0, visibleCount);
    const hasMore = visibleCount < category.products.length;

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            <main className="pt-[140px] pb-24">
                <div className="container mx-auto px-6">
                    {/* Breadcrumbs */}
                    <div className="mb-12">
                        <Breadcrumb className="mb-6">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <NavLink to="/">Accueil</NavLink>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <NavLink to="/blog">Blog</NavLink>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{category.title}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                            {category.title}
                        </h1>
                        <div className="w-24 h-1.5 bg-blue-600 rounded-full mb-6"></div>
                        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                            Découvrez tous nos articles et guides complets concernant {category.title.toLowerCase()}.
                        </p>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {visibleArticles.map((product, pIdx) => (
                            <NavLink
                                key={pIdx}
                                to={product.href}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={`${product.title} - Article Bricareau`}
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

                    {/* Load More Button */}
                    {hasMore && (
                        <div className="flex justify-center">
                            <Button
                                onClick={handleLoadMore}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 h-14 rounded-full shadow-lg hover:shadow-xl transition-all"
                            >
                                Charger plus d'articles
                            </Button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogCategory;
