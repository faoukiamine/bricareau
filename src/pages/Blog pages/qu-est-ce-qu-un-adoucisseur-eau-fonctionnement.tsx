import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, BadgeCheck, Microscope, Waves, Droplets, Info, Zap, Sparkles, Filter, CheckCircle2, Home, Layout, Search, Sparkle, Hammer, Wrench, Settings, Activity, FlaskConical, Scale } from "lucide-react";

const QuEstCeQuUnAdoucisseurEau = () => {
    useEffect(() => {
        document.title = "Qu'est-ce qu'un adoucisseur d'eau et comment ça fonctionne ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Tout savoir sur l'adoucissement de l'eau : fonctionnement, science de l'échange d'ions et pourquoi c'est la solution contre le calcaire.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-snug font-light text-justify text-[16px]">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-blue-950 text-white overflow-hidden text-center">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1594411133519-2189874cb3d1?q=80&w=2000&auto=format&fit=crop"
                            alt="Abstraction de billes de résine d'adoucisseur"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-400 text-sm font-bold mb-6 tracking-widest uppercase">
                            Génie Aquatique & Technologies Ioniques
                        </span>
                        <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                            <span className="font-bold">L'Adoucisseur d'eau :</span> <span className="text-blue-400 font-bold italic">Le Guide de A à Z</span>
                        </h1>
                        <p className="text-[20px] leading-snug text-slate-300 font-light mb-10 text-justify max-w-xl mx-auto italic">
                            Démystifier la technologie qui protège votre maison contre le calcaire : de la science atomique de l'échange d'ions jusqu'aux bénéfices quotidiens sur votre budget et votre confort.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-16 font-bold" asChild>
                                <a href="/adoucissement">Voir nos adoucisseurs haute efficacité</a>
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
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-snug">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    Souvent perçu comme une simple boîte noire dans le sous-sol, l'adoucisseur d'eau est une merveille d'ingénierie chimique qui préserve la valeur de votre actif le plus précieux : votre foyer.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        L'adoucisseur d'eau est bien plus qu'une simple "préfiltre". C'est un appareil complexe qui modifie la structure moléculaire de l'eau pour éliminer les minéraux "durs" — principalement le calcium et le magnésium. Au Québec, où de nombreuses régions possèdent des sols riches en calcaire, cet équipement est devenu indispensable pour éviter que le tartre ne détruise les canalisations, n'étouffe les chauffe-eau et ne ternisse la vie quotidienne des familles. Mais comment une simple résine peut-elle transformer l'eau dure en une eau soyeuse ? Ce guide expert Bricareau dévoile les rouages internes de la science de l'adoucissement.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. La Science de l'Échange d'Ions</h2>
                                <p>
                                    Le cœur d'un adoucisseur est son réservoir de résine. Imaginez des millions de petites billes de plastique dont la surface est chargée négativement, retenant des ions sodium (sel) ou potassium.
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>L'Adoucissement :</strong> Lorsque l'eau dure traverse la résine, les ions calcium et magnésium (chargés plus positivement que le sodium) "poussent" les ions sodium hors de la résine pour prendre leur place.</li>
                                    <li><strong>Résultat :</strong> Les minéraux créateurs de tartre restent collés aux billes, et l'eau qui sort du système est désormais "douce".</li>
                                    <li><strong>La Régénération :</strong> Une fois la résine saturée de calcaire, l'appareil déclenche un cycle de rinçage à contre-courant avec de l'eau salée (la saumure). La concentration massive de sel force le calcaire à quitter la résine pour être évacué vers le drain, réarmant ainsi le système pour un nouveau cycle.</li>
                                </ul>

                                <div className="my-16 bg-blue-50 border border-blue-100 rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="shrink-0 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                        <Settings className="w-16 h-16 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-900 mb-4 tracking-tight">Efficacité Ionique</h3>
                                        <p className="text-slate-600 text-[18px]">
                                            Un adoucisseur Bricareau agit au <strong>niveau atomique</strong>. Contrairement aux "conditionneurs" magnétiques, il retire physiquement le calcaire de l'eau, garantissant une protection totale de vos équipements.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Anatomie de l'appareil</h2>
                                <p>
                                    Un adoucisseur moderne se compose de trois éléments critiques qui travaillent en parfaite harmonie :
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">La Vanne de Contrôle</h4>
                                        <p className="text-slate-600 text-[14px] leading-snug text-justify italic font-medium">
                                            Le cerveau numérique du système. Elle calcule votre consommation réelle et décide du moment exact de la régénération pour économiser l'eau et le sel.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">La Bouteille de Résine</h4>
                                        <p className="text-slate-600 text-[14px] leading-snug text-justify italic font-medium">
                                            Le réservoir où s'effectue le miracle chimique. Chez Bricareau, nous utilisons de la résine de haute capacité alimentaire pour une longévité de 15 ans et plus.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl">
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Le Bac à Sel (Saumur)</h4>
                                        <p className="text-slate-600 text-[14px] leading-snug text-justify italic font-medium">
                                            Le réservoir de stockage du sel. C'est le seul composant qui nécessite votre attention occasionnelle (ajout de sacs de sel).
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Pourquoi avez-vous besoin d'un adoucisseur ?</h2>
                                <p>
                                    Les bénéfices d'une eau douce touchent chaque aspect de la gestion de votre foyer :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Économies d'Énergie :</strong> Un seul millimètre de tartre sur les éléments chauffants de votre chauffe-eau augmente votre facture d'électricité de 10 à 15%.</li>
                                    <li><strong>Protection des Appareils :</strong> Laveuse, Lave-vaisselle, Cafetière... L'eau douce multiplie par deux leur durée de vie.</li>
                                    <li><strong>Économie de Savons :</strong> Dans l'eau douce, le savon mousse instantanément. Vous consommerez jusqu'à 75% moins de détergents, shampoings et savons corporels.</li>
                                    <li><strong>Vivre sans Taches :</strong> Dites adieu aux traces blanches sur les verres et aux cernes de calcaire autour de la robinetterie.</li>
                                </ul>

                                <div className="mt-20 p-10 md:p-20 bg-blue-900 text-white rounded-[4rem] relative overflow-hidden text-center shadow-2xl group">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 scale-125 group-hover:rotate-12 transition-transform duration-700">
                                        <BadgeCheck className="w-96 h-96" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic">Investissez dans la longévité de votre foyer.</h3>
                                    <p className="text-xl text-blue-100 opacity-90 mb-12 max-w-2xl mx-auto font-light leading-snug">
                                        L'adoucissement de l'eau est la décision budgétaire la plus rentable que vous puissiez prendre pour votre habitation.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-full px-12 h-18 text-xl font-bold shadow-xl shadow-blue-900/50 transition-transform active:scale-95" asChild>
                                            <a href="/contact">Demander une étude d'eau gratuite</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-snug flex items-start gap-4">
                                    <Info className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                                    <p>
                                        Note pour les propriétaires consciencieux : Un adoucisseur d'eau de qualité supérieure, bien entretenu, est un actif qui valorise votre propriété lors d'une éventuelle revente, certifiant une plomberie saine.
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

export default QuEstCeQuUnAdoucisseurEau;
