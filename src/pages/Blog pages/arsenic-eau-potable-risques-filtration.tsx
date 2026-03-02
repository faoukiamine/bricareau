import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldAlert, Microscope, Waves, Droplets, Info, FlaskConical, MicroscopeIcon as Microscope2, Search, Zap, Crosshair, Sparkles, AlertTriangle, ShieldCheck } from "lucide-react";

const ArsenicEauPotable = () => {
    useEffect(() => {
        document.title = "Arsenic dans l'eau potable : Zones à risque, Santé et Filtration | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Tout sur l'arsenic dans l'eau potable : découvrez les zones à risque au Canada, les dangers sanitaires invisibles et les technologies de filtration certifiées pour protéger votre foyer.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-snug font-light">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-red-950 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"
                            alt="Structure géologique de la roche"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-red-600/20 border border-red-400/30 text-red-500 text-sm font-bold mb-6 tracking-widest uppercase">
                            Dossier Toxicologie Environnementale
                        </span>
                        <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                            <span className="font-bold">Arsenic dans l'eau</span> : <span className="text-red-500 font-bold">Un poison géologique invisible</span>
                        </h1>
                        <p className="text-[20px] leading-snug text-slate-300 font-light mb-10 text-justify max-w-xl mx-auto italic">
                            Risques de cancer, zones de prévalence au Québec et technologies de filtration certifiées NSF pour une sécurisation totale de votre eau de puits.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-10 h-16 font-bold shadow-xl shadow-red-900/40" asChild>
                                <a href="/contact">Tester l'arsenic dans mon eau</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-10 h-16 font-bold backdrop-blur-sm shadow-lg shadow-black/20 transition-transform active:scale-95" asChild>
                                <a href="tel:18552649328" className="flex items-center gap-2">
                                    <Phone className="h-5 w-5" /> 1-855-264-9328
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Article Intro Content */}
                <article className="py-20 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 text-justify leading-snug">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-red-600 pl-8 italic">
                                    L'arsenic est l'un des contaminants les plus redoutables de l'eau potable domestique. Sans couleur, sans odeur et sans saveur, sa présence ne peut être suspectée par le consommateur, même à des concentrations léthales à long terme. Sa dangerosité est telle que l'OMS le classe parmi les dix substances chimiques les plus préoccupantes pour la santé publique.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Dans les régions rurales du Québec et du Canada, l'arsenic n'est pas issu d'une pollution industrielle accidentelle, mais d'une réalité géologique inhérente au bouclier canadien. La roche-mère libère naturellement ce métalloïde toxique dans les aquifères, contaminant ainsi les puits artésiens profonds. Ce guide Bricareau fait le point sur les connaissances scientifiques actuelles, les risques réels et les méthodes de traitement domestiques infaillibles.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. L'arsenic : Un polluant naturel complexe</h2>
                                <p>
                                    L'arsenic est un élément chimique présent dans la croûte terrestre. Dans l'eau de puits, il se présente sous deux formes chimiques principales : <strong>Arsenic III</strong> (Arsénite) et <strong>Arsenic V</strong> (Arséniate).
                                </p>
                                <p>
                                    L'arsénite (As-III) est particulièrement difficile à traiter car il est électriquement neutre et traverse plus facilement les filtres conventionnels. Pour l'éliminer, il est souvent nécessaire de procéder à une pré-oxydation (transformation en As-V) avant la filtration. C'est l'une des raisons pour lesquelles un simple filtre de comptoir est totalement inefficace contre ce contaminant complexe.
                                </p>

                                <div className="my-16 bg-red-50 p-10 md:p-16 rounded-3xl border border-red-100 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12 group-hover:rotate-12 transition-transform duration-700">
                                        <AlertTriangle className="w-48 h-48 text-red-900" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-red-900 mb-6">Toxicité Chronique (Arsénicisme)</h3>
                                        <ul className="space-y-4 text-red-800 font-medium">
                                            <li className="flex gap-4"><ShieldAlert className="w-6 h-6 shrink-0 mt-1" /> <span>Cancérogène de Groupe 1 (poumons, vessie, reins).</span></li>
                                            <li className="flex gap-4"><ShieldAlert className="w-6 h-6 shrink-0 mt-1" /> <span>Lésions cutanées irréversibles (taches sombres, kératose).</span></li>
                                            <li className="flex gap-4"><ShieldAlert className="w-6 h-6 shrink-0 mt-1" /> <span>Effets dévastateurs sur le système cardiovasculaire.</span></li>
                                            <li className="flex gap-4"><ShieldAlert className="w-6 h-6 shrink-0 mt-1" /> <span>Neurotoxicité suspectée chez le fœtus et l'enfant.</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Cartographie des zones à risque au Québec</h2>
                                <p>
                                    Bien que l'arsenic puisse être présent n'importe où, certaines formations géologiques du Québec présentent une prévalence anormalement élevée :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>L'Outaouais :</strong> Zone historique d'arsenic naturel dans les puits artésiens profonds.</li>
                                    <li><strong>L'Abitibi-Témiscamingue :</strong> En raison de la composition minérale de la ceinture de roches vertes.</li>
                                    <li><strong>Les Laurentides et Lanaudière :</strong> Certaines localités présentent des poches localisées de forte concentration.</li>
                                    <li><strong>L'Estrie (Cantons-de-l'Est) :</strong> Présence de roches volcaniques anciennes riches en minéraux d'arsenic.</li>
                                </ul>
                                <p className="italic text-slate-500 text-sm">
                                    * Important : L'absence d'arsenic dans le puits de votre voisin ne garantit en rien sa non-présence dans le vôtre. La structure des failles souterraines est capricieuse.
                                </p>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. SOLUTIONS : Comment purifier votre eau ?</h2>
                                <p>
                                    Le traitement de l'arsenic demande une expertise technique pointue. Santé Canada recommande une Concentration Maximale Acceptable (CMA) de <strong>0,010 mg/L (10 microgrammes/litre)</strong>, mais de nombreux experts plaident pour un seuil encore plus bas (0,005 mg/L) par simple précaution.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
                                    <div className="p-10 bg-slate-900 text-white rounded-3xl relative overflow-hidden group shadow-2xl">
                                        <div className="absolute top-0 right-0 p-8 opacity-10">
                                            <Droplets className="w-24 h-24 text-blue-400 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-6 tracking-tight">L'Osmose Inverse (NSF 58)</h4>
                                        <p className="text-slate-300 text-[16px] text-justify leading-snug">
                                            Installée sous l'évier, l'osmose inverse est la barrière résidentielle la plus fiable. Sa membrane moléculaire rejette l'arséniate avec une efficacité de 98-99 %. Idéal pour l'eau de boisson et la cuisson.
                                        </p>
                                    </div>
                                    <div className="p-10 bg-slate-100 border border-slate-200 rounded-3xl group relative overflow-hidden shadow-sm">
                                        <div className="absolute top-0 right-0 p-8 opacity-5">
                                            <Sparkles className="w-24 h-24 text-slate-900 group-hover:rotate-12 transition-transform" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-6 tracking-tight text-slate-900">Médias Adsorbants Spécialisés</h4>
                                        <p className="text-slate-600 text-[16px] text-justify leading-snug">
                                            Des médias à base d'oxyde de titane ou de fer ferrique agissent comme des aimants chimiques pour l'arsenic. Utilisés pour traiter toute l'entrée d'eau, ils sont particulièrement efficaces contre les fortes concentrations.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">4. Audit et Maintenance Bricareau</h2>
                                <p>
                                    Un système de traitement contre l'arsenic n'est pas un équipement qu'on installe et qu'on oublie. L'arsenic est un contaminant « à risque de percée ». Une fois le média saturé, l'arsenic traverse le filtre sans aucun changement dans le goût de l'eau.
                                </p>
                                <p>
                                    Un audit Bricareau inclut :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li>Spéciation initiale de l'arsenic (différencier As-III et As-V).</li>
                                    <li>Installation d'un système certifié NSF/ANSI avec certification de performance.</li>
                                    <li>Planification de tests de validation post-traitement rigoureux.</li>
                                    <li>Suivi d'entretien pour le remplacement préventif des cartouches ou médias filtrants.</li>
                                </ul>

                                <div className="mt-20 p-12 bg-red-600 text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-12 opacity-10 -translate-y-12 translate-x-12">
                                        <ShieldCheck className="w-96 h-96" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic">Éliminez le doute, protégez votre sang.</h3>
                                    <p className="text-xl text-red-100 opacity-90 mb-12 font-light leading-snug max-w-3xl text-justify">
                                        L'arsenic est un ennemi invisible mais mortellement patient. Ne jouez pas avec la santé neurologique et physiologique de vos enfants. Demandez dès aujourd'hui un diagnostic de laboratoire par l'équipe Bricareau.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <Button size="lg" className="bg-white text-red-600 hover:bg-slate-100 rounded-full px-12 h-18 text-xl font-bold transition-transform active:scale-95" asChild>
                                            <a href="/contact">Commander un test d'arsenic</a>
                                        </Button>
                                        <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-12 h-18 text-xl font-bold" asChild>
                                            <a href="tel:18552649328">Téléphoner à un expert</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-snug flex items-start gap-4">
                                    <Info className="h-6 w-6 text-red-600 shrink-0 mt-1" />
                                    <p>
                                        Note Scientifique : L'élimination de l'arsenic est sensible au pH de l'eau. Une analyse complète des paramètres chimiques (dureté, fer, pH) est indispensable avant de sélectionner l'équipement de filtration approprié.
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

export default ArsenicEauPotable;
