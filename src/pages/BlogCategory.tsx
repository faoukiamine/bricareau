import React, { useEffect } from "react";
import { useParams, Navigate, NavLink } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { categories } from "@/data/blogCategories";

const BlogCategory = () => {
    const { categoryId } = useParams();
    const category = categories.find((cat) => cat.id === categoryId);

    useEffect(() => {
        if (category) {
            document.title = `${category.title} - Articles de Blog | Bricareau`;
            window.scrollTo(0, 0);
        }
    }, [category]);

    if (!category) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            <main className="pt-[140px] pb-24">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="mb-12">
                        <Button variant="ghost" className="text-slate-500 hover:text-blue-600 pl-0 mb-6" asChild>
                            <NavLink to="/blog">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Retour au blog
                            </NavLink>
                        </Button>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                            {category.title}
                        </h1>
                        <div className="w-24 h-1.5 bg-blue-600 rounded-full mb-6"></div>
                        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                            Découvrez tous nos articles et guides complets concernant {category.title.toLowerCase()}.
                        </p>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.products.map((product, pIdx) => (
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
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 flex-1 leading-snug">
                                        {product.desc}
                                    </p>
                                    <div className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider group/btn">
                                        Lire l'article <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogCategory;
