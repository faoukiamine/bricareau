import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { type EmblaCarouselType } from "embla-carousel";

const testimonials = [
  {
    content: "Our well water was terrible - rusty and smelly. Bricareau's system fixed everything. Can't believe the difference! The water tastes great now.",
    author: "Jennifer Martinez",
    location: "Portland, OR",
    rating: 5 },
  {
    content: "Excellent service from start to finish. The installation was quick, and the technician was very knowledgeable. Highly recommend their water softeners.",
    author: "David Chen",
    location: "Austin, TX",
    rating: 5 },
  {
    content: "We've had our system for 6 months now and our skin feels so much better. No more dry itchy skin after showers. Best investment for our home.",
    author: "Sarah Johnson",
    location: "Chicago, IL",
    rating: 5 },
  {
    content: "The drinking water system is a game changer. No more buying plastic bottles! The water is crisp and clean.",
    author: "Michael Brown",
    location: "Seattle, WA",
    rating: 5 },
  {
    content: "Professional team and top-notch products. They tested our water and recommended exactly what we needed without overselling.",
    author: "Emily Wilson",
    location: "Denver, CO",
    rating: 5 },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-foreground">
            Unmatched Quality. <span className="font-extrabold">Unforgettable Service.</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm">
          <Quote className="h-12 w-12 text-[#3FA9F5] mx-auto mb-6 opacity-80" />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <p className="md:text-2xl text-gray-700 max-w-2xl font-medium">
                      "{testimonial.content}"
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-gray-900">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>

                    <div className="flex gap-1 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10 border-gray-300 hover:bg-white hover:border-[#3FA9F5] transition-colors"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10 border-gray-300 hover:bg-white hover:border-[#3FA9F5] transition-colors"
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
