
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { getTestimonialsByProduct, allTestimonials } from '@/data/testimonials';
import { cn } from '@/lib/utils';

interface ReviewProps {
    productName?: string;
    className?: string;
    hideHeader?: boolean;
    title?: React.ReactNode;
}

/**
 * Review component that displays customer testimonials filtered by product/page name.
 * Features a premium grid design with interactive cards.
 */
const Review = ({ productName, className, hideHeader = false, title }: ReviewProps) => {
    // If productName is provided, filter; otherwise show all
    const reviews = productName ? getTestimonialsByProduct(productName) : allTestimonials;

    // Fallback if no specific reviews found for that product (optional behavior)
    // For now, if no reviews found for specific product, we might want to return null or broad categories
    if (reviews.length === 0) return null;

    return (
        <section className={cn("py-24 bg-white relative overflow-hidden", className)}>
            {/* Subtle background element */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] bg-blue-50 rounded-full blur-[100px] opacity-40" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    {!hideHeader && (
                        <div className="text-center mb-16 space-y-4">
                            {title || (
                                <>
                                    <h2 className="text-[32px] md:text-[54px] font-bold text-slate-900 tracking-tighter leading-tight">
                                        L'excellence vue par <br className="hidden md:block" />
                                        <span className="text-blue-600">nos clients satisfaits</span>
                                    </h2>
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-12 h-[2px] bg-blue-200" />
                                        <span className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em]">Expérience Bricareau</span>
                                        <div className="w-12 h-[2px] bg-blue-200" />
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] transition-all duration-700 hover:-translate-y-3 flex flex-col h-full"
                            >
                                {/* Quote Icon Decorative */}
                                <div className="absolute top-8 right-10 text-blue-500/10 group-hover:text-blue-500/20 transition-all duration-500 transform group-hover:rotate-12">
                                    <Quote size={64} strokeWidth={1} />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-8">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={cn(
                                                "w-5 h-5 transition-colors duration-500",
                                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-200"
                                            )}
                                        />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-slate-600 text-lg md:text-xl leading-[1.6] mb-10 flex-grow font-light italic relative z-10">
                                    "{review.text}"
                                </p>

                                {/* Footer / Author */}
                                <div className="pt-8 border-t border-slate-50 mt-auto flex items-center justify-between">
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-xl tracking-tight leading-tight">
                                            {review.name}
                                        </h4>

                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
