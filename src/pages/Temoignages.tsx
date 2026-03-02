import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";

const Temoignages = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-foreground text-justify max-w-xl mx-auto">
                                <span className="font-bold">Témoignages Clients</span>
                            </h1>
                            <p className="text-[20px] leading-snug text-muted-foreground font-light text-justify max-w-xl mx-auto">
                                Découvrez ce que nos clients disent de leur expérience avec Bricareau.
                            </p>
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-6 w-6 fill-current" />
                                    ))}
                                </div>
                                <span className="text-lg font-bold">4.9/5</span>
                                <span className="text-muted-foreground font-light">(Basé sur plus de 200 avis)</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section using the new slider style */}
                <TestimonialsSection
                    title={
                        <>
                            <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">L'excellence vue par</span>
                            <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block text-blue-600">nos clients satisfaits.</span>
                        </>
                    }
                />

                {/* CTA Section */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Rejoignez nos clients satisfaits
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground">
                                Découvrez comment nous pouvons améliorer la qualité de votre eau.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/tests-eau"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-[#0052ff] text-white font-medium rounded-full hover:bg-[#0052ff]/90 transition-colors"
                                >
                                    Analyse d'eau gratuite
                                </a>
                                <a
                                    href="tel:18552649328"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-[#0052ff] text-[#0052ff] font-medium rounded-full hover:bg-[#0052ff] hover:text-white transition-colors"
                                >
                                    Appelez-nous : 1 855 264 9328
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Temoignages;
