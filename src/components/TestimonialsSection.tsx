
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        content: "Bricareau avait le produit que nous cherchions et le service a été très rapide! Le technicien est très passionné par son travail et m'a fait part de son savoir et de conseils. Je suis très satisfaite du service et nous pouvons maintenant boire de l'eau en toute confiance",
        author: "Naomie Fontaine",
        location: "Montreal, QC",
        rating: 5
    },
    {
        content: "Le technicien était extra-ordinaire et donne un excellent service à la clientèle. Pour ce qui est du produit vous devez utiliser cette eau si fraîche et bonne pour la santé autant pour vous et les membres de votre famille.",
        author: "Sylvie Thibeau",
        location: "Laval, QC",
        rating: 5
    },
    {
        content: "Je recommande fortement. On m'a très bien conseillé sur le bon produit pour mes besoins. Offre complète de produits. Service courtois, professionnel et rapide.",
        author: "Jean-François B.",
        location: "Longueuil, QC",
        rating: 5
    }
];

const TestimonialsSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1
    }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);

    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-20 bg-white overflow-hidden relative">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2
                        className="text-foreground tracking-tighter"
                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                    >
                        <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">Qualité inégalée.</span>
                        <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block">Service inoubliable.</span>
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-5xl mx-auto px-0 md:px-4">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-2 md:px-4">
                                    <div className="bg-white p-6 md:p-14 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-start text-left relative transition-all duration-300">
                                        {/* Quote Icon */}
                                        <div className="text-[#3FA9F5] mb-8">
                                            <Quote className="w-12 h-12 md:w-14 md:h-14" strokeWidth={1} />
                                        </div>

                                        {/* Quote Content */}
                                        <p className="text-[#4B5563] text-lg md:text-xl leading-relaxed mb-12 font-normal italic">
                                            « {item.content} »
                                        </p>

                                        {/* Bottom Row: Author & Stars */}
                                        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                                            <div className="space-y-1">
                                                <h4 className="font-bold text-lg text-gray-900 leading-tight">
                                                    {item.author}
                                                </h4>
                                                <p className="text-sm text-gray-400 font-medium tracking-wide">
                                                    {item.location}
                                                </p>
                                            </div>

                                            <div className="flex gap-1.5">
                                                {[1, 2, 3, 4, 5].map((s) => (
                                                    <Star key={s} className="h-5 w-5 fill-[#FBBF24] text-[#FBBF24]" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-6 mt-12">
                    <button
                        className="p-2 text-gray-400 hover:text-[#3FA9F5] transition-colors focus:outline-none"
                        onClick={scrollPrev}
                        aria-label="Précédent"
                    >
                        <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
                    </button>

                    <div className="flex items-center gap-3">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={cn(
                                    "transition-all duration-300",
                                    selectedIndex === index
                                        ? "w-8 h-2 bg-[#3FA9F5] rounded-full"
                                        : "w-2 h-2 bg-gray-200 rounded-full hover:bg-gray-300"
                                )}
                                aria-label={`Aller au témoignage ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        className="p-2 text-gray-400 hover:text-[#3FA9F5] transition-colors focus:outline-none"
                        onClick={scrollNext}
                        aria-label="Suivant"
                    >
                        <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
