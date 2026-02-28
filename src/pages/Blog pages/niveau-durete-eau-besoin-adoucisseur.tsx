import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, BadgeCheck, Microscope, Waves, Droplets, Info, Zap, Sparkles, Filter, CheckCircle2, Home, Layout, Search, Sparkle, Hammer, Wrench, Settings, Activity, FlaskConical, Scale, Thermometer } from "lucide-react";

const NiveauDureteAdoucisseurBesoin = () => {
    useEffect(() => {
        document.title = "À quel niveau de dureté avez-vous besoin d'un adoucisseur ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Votre eau est-elle trop dure ? Découvrez l'échelle de dureté de l'eau, à partir de quel seuil un adoucisseur devient indispensable et comment protéger votre foyer.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-relaxed font-light text-justify text-[16px]">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-slate-900 text-white overflow-hidden text-center shadow-lg">
                    <div className="absolute inset-0 opacity-20 transform scale-110">
                        <img
                            src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"
                            alt="Abstraction de calcaire et d'eau cristalline"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-400 text-sm font-bold mb-6 tracking-widest uppercase">
                            Métrologie Aquatique & Échelle de Santé
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
                            Dureté de l'eau : <span className="text-blue-400 italic">Le seuil critique.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light mb-10 leading-relaxed max-w-4xl mx-auto italic text-center">
                            À partir de quel grain de dureté le calcaire commence-t-il à dévorer silencieusement votre plomberie et votre budget énergétique ? L'analyse technique Bricareau sur votre zone de confort.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 font-bold" asChild>
                                <a href="/adoucisseur-eau-residentiel">Nos solutions d'adoucissement</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-10 h-16 font-bold backdrop-blur-sm" asChild>
                                <a href="tel:18552649328" className="flex items-center gap-2">
                                    <Phone className="h-5 w-5" /> 1-855-264-9328
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Article Intro Content */}
                <article className="py-20 lg:py-32 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-relaxed">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    L'eau dure n'est pas "sale" au sens microbiologique, mais au sens technique. Elle porte en elle une menace silencieuse pour l'économie de votre foyer.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Chaque région au Québec possède sa propre signature géologique. Certaines zones bénéficient d'une eau naturellement douce, tandis que d'autres, riches en formations calcaires et magnésiennes, subissent une eau agressive. Le consommateur se retrouve souvent face à un dilemme : "Mon eau est calcaire, mais est-elle assez dure pour justifier l'achat d'un adoucisseur ?". Il existe une frontière technique, mesurée en grains par gallon (gpg) ou en milligrammes par litre (mg/L), au-delà de laquelle l'inaction devient plus coûteuse que l'investissement. Ce guide Bricareau décortique l'échelle de dureté pour vous aider à situer votre eau.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. L'Échelle de Dureté Standardisée</h2>
                                <p>
                                    L'eau dure contient une forte concentration de minéraux dissous, principalement du calcium et du magnésium. Voici comment les experts classifient la dureté de votre eau :
                                </p>
                                <div className="overflow-x-auto my-12">
                                    <table className="w-full border-collapse border border-slate-200 text-center">
                                        <thead>
                                            <tr className="bg-slate-100">
                                                <th className="border p-4 text-left">Classement</th>
                                                <th className="border p-4">Grains / Gallon (gpg)</th>
                                                <th className="border p-4">mg/L (ppm)</th>
                                                <th className="border p-4 text-left">Niveau de besoin</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-green-50/30">
                                                <td className="border p-4 font-bold text-green-700">Dureté Douce</td>
                                                <td className="border p-4 italic">0 - 1.0</td>
                                                <td className="border p-4 italic">0 - 17</td>
                                                <td className="border p-4 font-bold italic text-green-700">Nul</td>
                                            </tr>
                                            <tr>
                                                <td className="border p-4 font-bold">Légèrement dure</td>
                                                <td className="border p-4 italic">1.0 - 3.5</td>
                                                <td className="border p-4 italic">17 - 60</td>
                                                <td className="border p-4 font-bold italic text-slate-400">Optionnel</td>
                                            </tr>
                                            <tr className="bg-orange-50/30">
                                                <td className="border p-4 font-bold text-orange-700">Moyennement dure</td>
                                                <td className="border p-4 italic">3.5 - 7.0</td>
                                                <td className="border p-4 italic">60 - 120</td>
                                                <td className="border p-4 font-bold italic text-orange-700">Recommandé</td>
                                            </tr>
                                            <tr className="bg-red-50/30">
                                                <td className="border p-4 font-bold text-red-700">Dureté Élevée</td>
                                                <td className="border p-4 italic">7.0 - 10.5</td>
                                                <td className="border p-4 italic">120 - 180</td>
                                                <td className="border p-4 font-bold italic text-red-700">Indispensable</td>
                                            </tr>
                                            <tr className="bg-red-200/20">
                                                <td className="border p-4 font-bold text-red-900">Extrêmement dure</td>
                                                <td className="border p-4 italic">10.5 +</td>
                                                <td className="border p-4 italic">180 +</td>
                                                <td className="border p-4 font-bold italic text-red-900">Urgence technique</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Le "Seuil de Rentabilité" : La Règle des 7 Grains</h2>
                                <p>
                                    La majorité des experts en gestion de l'eau, dont l'équipe de Bricareau, s'accorde pour dire que dès que votre eau dépasse le seuil de <strong>7 grains par gallon (120 mg/L)</strong>, l'installation d'un adoucisseur d'eau devient une décision financièrement rentable.
                                </p>
                                <p>
                                    <strong>Pourquoi ce chiffre spécifique ?</strong> C'est à partir de ce niveau que le calcaire commence à se solidifier massivement sur les éléments chauffants (chauffe-eau, cafetière). Une accumulation de seulement 3 mm de tartre sur un élément chauffant réduit son efficacité de 20%, augmentant drastiquement votre facture d'électricité. À 7 grains, le coût de l'énergie gaspillée et l'usure prématurée des appareils dépassent généralement le coût annuel de maintenance de l'adoucisseur.
                                </p>

                                <div className="my-16 bg-blue-50 border border-blue-100 rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="shrink-0 bg-white p-6 rounded-2xl shadow-sm">
                                        <Scale className="w-16 h-16 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">Analyse de Rentabilité</h3>
                                        <p className="text-slate-600 text-[18px]">
                                            Si votre eau est à 10 grains, un adoucisseur se rentabilise en moins de 3 ans uniquement par l'économie de détergents et d'énergie, sans compter la valeur ajoutée à la durée de vie de votre maison.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Quand même un niveau "moyen" pose problème</h2>
                                <p>
                                    Même entre 3 et 7 grains, l'eau dure peut être une nuisance majeure si vous possédez :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li>Des électroménagers haut de gamme (Miele, Bosch) très sensibles au tartre.</li>
                                    <li>De la robinetterie noire mate ou en inox brossé (où les taches blanches sont impossibles à enlever).</li>
                                    <li>Des membres de la famille souffrant d'eczéma ou de peau atopique.</li>
                                    <li>Un chauffe-eau instantané (sans réservoir), où le calcaire peut bloquer les serpentins en quelques mois seulement.</li>
                                </ul>

                                <div className="mt-20 p-10 md:p-20 bg-blue-900 text-white rounded-[4rem] relative overflow-hidden text-center shadow-2xl group">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 scale-125 group-hover:rotate-12 transition-transform duration-700">
                                        <BadgeCheck className="w-96 h-96" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic">Situez votre eau sur l'échelle de pureté.</h3>
                                    <p className="text-xl text-blue-100 opacity-90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                        Ne laissez pas l'eau dure ronger votre foyer. Un simple test peut vous faire économiser des milliers de dollars en réparations futures.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-full px-12 h-18 text-xl font-bold shadow-xl shadow-blue-900/50 transition-transform active:scale-95" asChild>
                                            <a href="/tests-eau">Réserver mon test de dureté gratuit</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed flex items-start gap-4">
                                    <Info className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                                    <p>
                                        Note pour les nouvelles constructions : Installer un adoucisseur dès l'entrée en possession de votre maison est la meilleure garantie pour conserver votre plomberie et vos verres dans un état "neuf" indéfiniment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default NiveauDureteAdoucisseurBesoin;
