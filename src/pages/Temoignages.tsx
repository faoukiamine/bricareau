import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";

const Temoignages = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[800px] bg-white overflow-hidden flex flex-col lg:items-center">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Mobile Image */}
                        <div className="lg:hidden w-full h-[350px] relative">
                            <img
                                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop"
                                alt="Clients satisfaits Bricareau"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent text-white p-6 flex items-end">
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-current" />
                                        ))}
                                    </div>
                                    <span className="font-bold">4.9/5</span>
                                </div>
                            </div>
                        </div>

                        <div className="container mx-auto px-6 h-full flex items-center">
                            <div className="max-w-3xl mx-auto text-center space-y-6 py-12 lg:py-0 w-full">
                                <h1
                                    className="leading-tight text-slate-900 tracking-tighter"
                                >
                                    <span className="text-blue-600">Témoignages</span> Clients
                                </h1>
                                <p className="text-slate-600 font-light max-w-xl mx-auto">
                                    Découvrez ce que nos clients disent de leur expérience avec Bricareau. Leur satisfaction est notre plus grande fierté.
                                </p>
                                <div className="hidden lg:flex items-center justify-center gap-2">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-6 w-6 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-lg font-bold">4.9/5</span>
                                    <span className="text-slate-500 font-light">(Basé sur plus de 200 avis)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section using the new slider style */}
                <TestimonialsSection
                    title={
                        <>
                            <span className="font-light block">L'excellence vue par</span>
                            <span className="font-bold text-blue-600 block">nos clients satisfaits.</span>
                        </>
                    }
                />

                {/* CTA Section */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h2 className="text-foreground">
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
