import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldAlert, BadgeCheck, Microscope, Waves, Droplets, Info, Search, AlertCircle, ShieldCheck, HeartPulse, Scale, FlaskConical, Zap, Wrench, Home, Sparkles, Filter, ShieldHalf, Thermometer, GlassWater, MicroscopeIcon as Microscope2, AlertTriangle, Crosshair, ZapIcon } from "lucide-react";

const BacteriesEColiPuits = () => {
    useEffect(() => {
        document.title = "Bactéries E. coli dans l'eau de puits : Guide d'urgence | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Votre test d'eau révèle des bactéries E. coli ou coliformes ? Découvrez les causes de contamination fécale et les solutions immédiates de désinfection par UV.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800 leading-relaxed font-light">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-red-950 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1594411133519-2189874cb3d1?q=80&w=2000&auto=format&fit=crop"
                            alt="Abstraction de microorganismes bactériens sous microscope"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-red-600/20 border border-red-400/30 text-red-500 text-sm font-bold mb-6 tracking-widest uppercase animate-pulse">
                            Alerte Microbiologique : Protocole D'urgence
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
                            Bactéries E. coli dans <span className="text-red-600">votre puits</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light mb-10 leading-relaxed max-w-4xl mx-auto italic">
                            Réagir face à la contamination fécale : comprendre les risques d'infection grave et sécuriser votre foyer grâce à la stérilisation ultraviolette professionnelle.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-10 h-16 font-bold shadow-xl shadow-red-900/40" asChild>
                                <a href="/tests-eau">Réserver un test microbiologique urgent</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-10 h-16 font-bold backdrop-blur-sm shadow-lg shadow-black/20" asChild>
                                <a href="tel:18552649328" className="flex items-center gap-2">
                                    <Phone className="h-5 w-5" /> 1-855-264-9328
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Article Intro Body */}
                <article className="py-20 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 text-justify leading-relaxed">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-red-600 pl-8 italic">
                                    Rien ne provoque une inquiétude plus immédiate qu'un rapport de laboratoire affichant « présence détectée » pour les bactéries E. coli. C'est l'indicateur le plus limpide d'une contamination fécale et d'un danger sanitaire imminent pour toute la famille.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Chaque année au Québec et au Canada, des centaines de propriétaires de puits artésiens et de surface font face à cette réalité microbiologique. Une infiltration après une fonte des neiges, un puits de surface mal protégé ou une installation septique défaillante peuvent transformer votre source d'eau en réservoir de pathogènes. Face à l'E. coli, le temps n'est pas à l'observation, mais à l'action. Ce guide Bricareau détaille le protocole d'urgence absolu et les solutions technologiques permanentes pour éradiquer la menace.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. Décoderle danger : Escherichia coli (E. coli)</h2>
                                <p>
                                    Toutes les bactéries ne sont pas dangereuses, mais l'<strong>E. coli</strong> est spéciale. Il s'agit d'une bactérie vivant exclusivement dans les intestins des humains et des animaux à sang chaud. Sa présence dans votre eau potable est la <strong>preuve irréfutable</strong> que des déjections (animales ou humaines) ont trouvé un chemin direct vers votre puits.
                                </p>
                                <p>
                                    Contrairement aux coliformes totaux (qui peuvent provenir du sol ou de la végétation), l'E. coli indique une source fécale et la présence probable d'autres agents pathogènes encore plus résistants comme des virus ou des parasites (Giardia et Cryptosporidium).
                                </p>

                                <div className="my-16 bg-red-50 border border-red-100 rounded-3xl p-10 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group shadow-sm">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-12 transition-transform duration-700">
                                        <AlertTriangle className="w-48 h-48 text-red-900" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-red-950 mb-6 underline decoration-red-600/30 underline-offset-8">ALERTE MÉDICALE</h3>
                                        <p className="text-slate-700 italic">
                                            « L'ingestion d'eau contaminée par l'E. coli peut provoquer des crampes abdominales sévères, des vomissements et des diarrhées sanglantes. Chez les populations fragiles (enfants et aînés), certaines souches peuvent entraîner le syndrome hémolytique-urémique (SHU), une insuffisance rénale mortelle. »
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Pourquoi votre puits est-il contaminé ?</h2>
                                <p>
                                    La contamination n'arrive jamais par hasard. Voici les vecteurs d'infiltration les plus communs :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Défaut de scellement (Couvercle) :</strong> Un couvercle de puits non hermétique ou mal situé (sous le niveau du sol) permet aux eaux de ruissellement, chargées de déjections animales, de tomber directement dans l'aquifère.</li>
                                    <li><strong>Proximité du système septique :</strong> Une fosse septique ou un champ d'épuration défectueux peut rejeter des pathogènes qui migrent à travers les failles du sol jusqu'à la pompe du puits.</li>
                                    <li><strong>Ruissellement printanier massif :</strong> La fonte rapide des neiges sature le sol et entraîne les bactéries de surface (provenant des forêts ou des fermes voisines) vers les fissures de la roche-mère.</li>
                                    <li><strong>Canalisation endommagée :</strong> Un tuyau de puits artésien fissuré en profondeur peut laisser entrer l'eau contaminée provenant des couches superficielles du sol.</li>
                                </ul>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Protocole Immédiat : L'Avis d'Ébullition</h2>
                                <p>
                                    Dès réception d'un résultat positif, vous devez instaurer les mesures suivantes :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Ébullition obligatoire :</strong> Faire bouillir l'eau à gros bouillons pendant au moins 1 minute avant de l'utiliser pour boire, cuisiner ou se brosser les dents.</li>
                                    <li><strong>Douche prudente :</strong> L'eau peut être utilisée pour se laver, à condition de ne pas l'ingérer et qu'aucune plaie ouverte ne soit exposée. Laver les nourrissons uniquement avec de l'eau bouillie refroidie ou en bouteille.</li>
                                    <li><strong>Lavage de la vaisselle :</strong> Utiliser de l'eau bouillie (ou ajouter quelques gouttes de chlore non parfumé dans l'eau de rinçage).</li>
                                </ul>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="p-8 bg-slate-900 text-white rounded-2xl group relative overflow-hidden shadow-2xl">
                                        <div className="absolute top-0 right-0 p-8 opacity-15 rotate-45 group-hover:rotate-12 transition-transform duration-500">
                                            <Zap className="w-24 h-24 text-blue-400" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Stérilisation UV (Bouclier Infaillible)</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed text-justify">
                                            Un réacteur ultraviolet (UV) certifié bombarde l'eau de radiation photonique qui détruit l'ADN de 99,99% des bactéries et virus instantanément. C'est la seule solution passive fiable pour une sécurité 24h/24.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl group relative overflow-hidden shadow-sm">
                                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:-rotate-12 transition-transform duration-500">
                                            <Crosshair className="w-24 h-24 text-red-600" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-4 tracking-tight text-slate-900">Chloration-Choc (Mesure corrective)</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed text-justify">
                                            Désinfecter l'entièreté de la plomberie et du puits avec une dose massive de chlore. Cette opération tue les bactéries présentes mais n'offre aucune protection contre les ré-infiltrations futures.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">4. Sécuriser votre avenir : Investir dans la protection</h2>
                                <p>
                                    Une contamination bactérienne ponctuelle peut devenir chronique. Plutôt que de vivre dans la peur de chaque test d'eau, Bricareau installe des systèmes de protection à barrières multiples :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Filtration de sédiments fine (5 microns) :</strong> Pour que les bactéries n'aient aucune particule derrière laquelle se cacher lors du traitement.</li>
                                    <li><strong>Stérilisateur UV de haute intensité :</strong> Configuré selon votre débit de pointe pour garantir une dose de radiation mortelle pour l'E. coli.</li>
                                    <li><strong>Soupape de sécurité solénoïde :</strong> Bloque automatiquement l'entrée d'eau en cas de panne de la lampe UV.</li>
                                </ul>

                                <div className="mt-20 p-10 md:p-20 bg-red-900 text-white rounded-[4rem] text-center shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-45 group-hover:rotate-0 transition-transform duration-[4s]">
                                        <BadgeCheck className="w-80 h-80 text-white" />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold mb-10 tracking-tighter italic">L'E. coli n'a aucune chance contre nos UV.</h3>
                                    <p className="text-xl text-red-100 opacity-80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                                        Votre foyer mérite une sécurité biologique absolue. Ne laissez plus la chance décider de la santé de vos enfants. Demandez dès aujourd'hui un diagnostic microbiologique expert.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-white text-red-600 hover:bg-slate-100 rounded-full px-12 h-18 text-xl font-bold shadow-xl transition-all" asChild>
                                            <a href="/contact">Analyser mon eau et installer un système UV</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed flex items-center gap-4">
                                    <Info className="h-10 w-10 text-red-600 shrink-0" />
                                    <p>
                                        * Note de sécurité : Pour tout puits ayant testé positif à l'E. coli, Bricareau recommande fortement une désinfection-choc du puits effectuée par un professionnel certifié après l'installation d'un système de traitement permanent.
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

export default BacteriesEColiPuits;
