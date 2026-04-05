import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ArrowRight, CheckCircle2, Star, Quote, ShieldCheck, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/23568974.png";

const LandingResidential = () => {
    useEffect(() => {
        document.title = "Solutions de Traitement d'Eau Résidentiel au Québec | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Expert en adoucisseurs d'eau et filtration résidentielle au Québec. Améliorez la santé de votre foyer avec une eau pure, sans calcaire ni contaminants.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Eau Pure pour votre Foyer | Bricareau Résidentiel");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Découvrez nos systèmes de filtration et adoucisseurs haute performance pour votre maison.");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/residentiel");
    }, []);

    return (
        <div className="min-h-screen bg-[#f0f9ff] text-[#1e3a8a] font-sans selection:bg-[#2563eb]/20 selection:text-[#2563eb]">
            <Header />
            <main>
                <Hero 
                    image={heroImg}
                    highlightedTitle="Pureté Absolue,"
                    mainTitle="Santé Durable pour votre foyer."
                    subtitle="Transformez chaque goutte de votre robinet en une source de vie cristalline. Nos adoucisseurs et systèmes de filtration résidentiels combinent technologie de pointe et design épuré."
                    badge="Excellence en Traitement d'Eau"
                    ctaText="Découvrir nos solutions"
                    ctaLink="/solutions"
                />

                {/* 2. Problem/Solution Section (Hero-Centric) */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8 order-2 lg:order-1">
                                <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a8a] tracking-tight">
                                    Une eau sans compromis, <br/>
                                    <span className="text-[#2563eb]">une différence visible.</span>
                                </h2>
                                <p className="text-lg text-slate-600 font-light max-w-xl">
                                    Calcaire, goût de chlore, sédiments... Votre eau mérite d'être traitée avec le respect qu'elle vous doit. Nos systèmes intelligents filtrent l'invisible.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Élimination totale du calcaire et du tartre",
                                        "Filtration des polluants et micro-plastiques",
                                        "Goût et odeur de source naturelle",
                                        "Protection durable de vos appareils"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-lg text-[#1e3a8a]">
                                            <CheckCircle2 className="w-6 h-6 text-[#2563EB]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative group order-1 lg:order-2">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-[#2563eb]/20 to-cyan-400/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                                <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#f0f9ff] to-white border border-[#2563eb]/20 shadow-2xl flex items-center justify-center">
                                    <Waves className="w-32 h-32 text-[#2563eb] animate-pulse" />
                                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-white via-white/80 to-transparent">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-[#2563eb]/10 flex items-center justify-center">
                                                <ShieldCheck className="w-6 h-6 text-[#2563eb]" />
                                            </div>
                                            <div>
                                                <div className="text-xl font-bold text-[#1e3a8a]">Certification Sûreté</div>
                                                <div className="text-sm text-slate-500">100% conforme aux normes Canada</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Testimonials (Prominent Social Proof) */}
                <section className="py-24 bg-[#f0f9ff]/50">
                    <div className="container mx-auto px-6 text-center space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a8a]">La voix de nos clients</h2>
                            <p className="text-[#2563eb] font-bold uppercase tracking-widest text-sm">Plus de 5,000 foyers protégés au Québec</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Marc-André L.",
                                    comment: "L'eau de notre puits était ferreuse. Bricareau a installé un système qui a tout changé en 24h. Le goût est impeccable.",
                                    city: "Sherbrooke"
                                },
                                {
                                    name: "Sophie D.",
                                    comment: "Service exceptionnel. Le technicien a pris le temps d'expliquer chaque étape. On voit la différence sur nos cheveux et notre peau.",
                                    city: "Laval"
                                },
                                {
                                    name: "Jean-Sébastien M.",
                                    comment: "Enfin une eau sûre pour les biberons de notre fille. Je recommande à 200%. Les adoucisseurs sont silencieux.",
                                    city: "Québec"
                                }
                            ].map((testimonial, i) => (
                                <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-[#2563eb]/5 text-left space-y-6 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} className="w-5 h-5 fill-[#2563eb] text-[#2563eb]" />
                                        ))}
                                    </div>
                                    <Quote className="w-10 h-10 text-[#2563eb]/20 group-hover:text-[#2563eb]/40 transition-colors" />
                                    <p className="text-xl text-[#1e3a8a]/90 font-light leading-relaxed">
                                        "{testimonial.comment}"
                                    </p>
                                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <div>
                                            <div className="font-bold text-[#1e3a8a]">{testimonial.name}</div>
                                            <div className="text-sm text-slate-500">{testimonial.city}</div>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] font-bold">
                                            {testimonial.name[0]}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Social Proof / Credibility Grid */}
                <section className="py-16 bg-white border-y border-[#2563eb]/10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                             <div className="text-2xl font-black text-[#1e3a8a]">WQA CERTIFIED</div>
                             <div className="text-2xl font-black text-[#1e3a8a]">NSF APPROVED</div>
                             <div className="text-2xl font-black text-[#1e3a8a]">QUEBEC QUALITY</div>
                             <div className="text-2xl font-black text-[#1e3a8a]">ECO-FRIENDLY</div>
                        </div>
                    </div>
                </section>

                {/* 5. Final CTA Section */}
                <section className="py-24 lg:py-36 bg-[#1e3a8a] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-[#2563eb]/10 -skew-x-12 transform translate-x-32" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]/50 opacity-50" />
                    
                    <div className="container mx-auto px-6 relative z-10 text-center space-y-10">
                        <div className="max-w-3xl mx-auto space-y-6">
                            <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
                                Prêt pour l'expérience <br/> de l'eau pure ?
                            </h2>
                            <p className="text-xl text-white/80 font-light">
                                Rejoignez plus de 5,000 foyers satisfaits. Planifiez votre analyse gratuite en 2 minutes.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Button asChild>
                                <a href="/tests-eau#water-test">
                                    Réserver mon analyse gratuite
                                    <ArrowRight className="ml-3 w-6 h-6" />
                                </a>
                            </Button>
                            <p className="text-white/60 text-sm">
                                Aucun engagement nécessaire. <br/> Résultat immédiat à domicile.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default LandingResidential;
