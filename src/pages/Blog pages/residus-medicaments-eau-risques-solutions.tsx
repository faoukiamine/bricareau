import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldAlert, BadgeCheck, Microscope, Waves, Droplets, Info, Search, AlertCircle, ShieldCheck, HeartPulse, Scale, FlaskConical, Pill, Activity, Stethoscope, Sparkles } from "lucide-react";

const ResidusMedicamentsEau = () => {
    useEffect(() => {
        document.title = "Résidus de médicaments dans l'eau potable : Étude complète | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Votre eau du robinet contient-elle des traces d'antibiotiques ou d'hormones ? Découvrez les risques des résidus pharmaceutiques et comment l'osmose inverse les élimine.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-relaxed font-light">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-indigo-950 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?q=80&w=2000&auto=format&fit=crop"
                            alt="Abstraction de molécules pharmaceutiques"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-indigo-600/20 border border-indigo-400/30 text-indigo-400 text-sm font-bold mb-6 tracking-widest uppercase">
                            Pharmacopée Aquatique : Rapport Indépendant
                        </span>
                        <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                            <span className="font-bold">Médicaments dans</span> <span className="text-indigo-400 font-bold italic">votre eau</span>
                        </h1>
                        <p className="text-[20px] leading-[28px] text-slate-300 font-light mb-10 text-justify max-w-xl mx-auto italic">
                            Décrypter la présence silencieuse d'antibiotiques, hormones et psychotropes dans l'eau du robinet : comprendre les enjeux et instaurer une barrière technologique.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-10 h-16 font-bold" asChild>
                                <a href="/osmose-filtration">Découvrir l'assainissement total</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-10 h-16 font-bold backdrop-blur-sm" asChild>
                                <a href="tel:18552649328" className="flex items-center gap-2">
                                    <Phone className="h-5 w-5" /> 1-855-264-9328
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Article Content Intro */}
                <article className="py-20 lg:py-32 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 text-justify leading-relaxed">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-indigo-600 pl-8 italic">
                                    Une pharmacie invisible coule-t-elle à votre robinet ? La question, bien que troublante, occupe une place de plus en plus centrale dans les débats de santé publique environnementale au Canada.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Chaque année, des tonnes de produits pharmaceutiques sont consommées par la population québécoise. Analgésiques, antibiotiques, antidépresseurs et régulateurs hormonaux sont excrétés par l'organisme ou jetés dans les égouts. Malheureusement, nos stations d'épuration municipales n'ont pas été conçues pour traiter ces micropolluants complexes. Résultat : ces substances se retrouvent dans nos sources d'eau potable à des concentrations infimes, mais omniprésentes. Doit-on s'inquiéter de cette exposition chronique et involontaire ? Ce guide Bricareau apporte des réponses fondées sur la science.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. Le cycle des médicaments dans l'eau</h2>
                                <p>
                                    La contamination de l'eau par des résidus pharmaceutiques suit un cycle complexe mais prévisible. Les médicaments pénètrent l'environnement par trois voies majeures :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Excrétion humaine :</strong> Après consommation, une partie importante des principes actifs des médicaments est rejetée par l'organisme sous forme de métabolites ou de molécules inchangées qui aboutissent aux égouts.</li>
                                    <li><strong>Élimination inadéquate :</strong> Jeter des médicaments périmés ou inutilisés dans les toilettes ou l'évier est une pratique qui injecte directement ces substances dans le circuit de traitement municipal.</li>
                                    <li><strong>Activités Vétérinaires et Agricoles :</strong> Les antibiotiques et hormones administrés au bétail sont lessivés dans les sols et s'infiltrent vers les aquifères profonds.</li>
                                </ul>

                                <div className="my-16 bg-indigo-50 border border-indigo-100 rounded-3xl p-10 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-12 transition-transform duration-700">
                                        <Pill className="w-48 h-48 text-indigo-900" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-indigo-900 mb-6">Un cocktail de molécules infimes</h3>
                                        <p className="text-slate-600 italic">
                                            « Bien que les concentrations mesurées soient souvent de l'ordre du nanogramme par litre, l'inquiétude porte sur l'effet cocktail : l'exposition simultanée et prolongée à des dizaines de substances agissant de concert sur notre système endocrinien. »
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Conséquences biologiques : À quel point faut-il s'inquiéter ?</h2>
                                <p>
                                    La science médicale met en évidence plusieurs risques associés à l'ingestion involontaire de médicaments par l'eau potable.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl group hover:shadow-xl transition-all">
                                        <Activity className="w-12 h-12 text-indigo-600 mb-6 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Perturbation Endocrinienne</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed text-justify">
                                            Les oestrogènes synthétiques (provenant des pilules contraceptives) sont extraordinairement puissants biologiquement. Ils peuvent interférer avec la reproduction et le développement foetal même à des doses ultra-faibles.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl group hover:shadow-xl transition-all">
                                        <ShieldCheck className="w-12 h-12 text-indigo-600 mb-6 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Antibiorésistance accrue</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed text-justify">
                                            L'exposition chronique à des traces d'antibiotiques dans l'eau favorise l'émergence de "super-bactéries" résistantes aux traitements médicaux, un enjeu de santé mondiale critique du XXIe siècle.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Molécules fréquentes dans le réseau municipal</h2>
                                <p>
                                    Les analyses indépendantes menées dans les grandes villes du Québec (Montréal, Québec, Laval) détectent régulièrement les substances suivantes :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Carbamazépine :</strong> Un anti-épileptique et stabilisateur d'humeur extrêmement persistant dans l'eau.</li>
                                    <li><strong>Ibuprofène et Naproxène :</strong> Des anti-inflammatoires courants retrouvés quasi systématiquement.</li>
                                    <li><strong>Sulphaméthoxazole :</strong> Un antibiotique à large spectre souvent présent dans les effluents municipaux.</li>
                                    <li><strong>Ethinylestradiol :</strong> Un oestrogène de synthèse hautement bioactif.</li>
                                </ul>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">4. Solutions technologiques d'élimination</h2>
                                <p>
                                    Bonne nouvelle : si les infrastructures municipales peinent à traiter ces molécules, les technologies résidentielles pointues offrent une protection quasi totale.
                                </p>

                                <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="bg-indigo-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-8 opacity-10">
                                            <Sparkles className="w-24 h-24 text-indigo-400 group-hover:rotate-12 transition-transform" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-6 tracking-tight">L'Osmose Inverse (Certification NSF 58)</h4>
                                        <p className="text-indigo-100 text-[16px] text-justify leading-relaxed">
                                            La membrane osmotique est l'arme fatale contre les micropolluants. Sa porosité moléculaire est si fine qu'elle rejette 99 % des principes actifs pharmaceutiques, garantissant une pureté inégalée pour la boisson.
                                        </p>
                                    </div>
                                    <div className="bg-slate-100 border border-slate-200 p-10 rounded-3xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-8 opacity-5">
                                            <Stethoscope className="w-24 h-24 text-indigo-900 group-hover:rotate-12 transition-transform" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-6 tracking-tight text-indigo-900">Charbon Actif de Haute Densité</h4>
                                        <p className="text-slate-600 text-[16px] text-justify leading-relaxed">
                                            L'adsorption chimique sur charbon actif compressé est capable de capturer la majorité des molécules organiques complexes. C'est une barrière protectrice robuste et économique pour toute la maison.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-20 p-10 md:p-20 bg-indigo-950 text-white rounded-[4rem] text-center shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:scale-175 transition-transform duration-[3s]">
                                        <HeartPulse className="w-80 h-80 text-white" />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold mb-10 tracking-tighter italic">Protégez votre équilibre biologique.</h3>
                                    <p className="text-xl text-indigo-200 opacity-80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                                        Ne laissez plus l'incertitude pharmaceutique planer sur votre santé quotidienne. Demandez dès aujourd'hui un diagnostic expert pour purifier l'eau de votre foyer.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-600 rounded-full px-12 h-18 text-xl font-bold shadow-xl shadow-indigo-900/50" asChild>
                                            <a href="/contact">Demander une étude d'eau gratuite</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed flex items-center gap-4">
                                    <Info className="h-10 w-10 text-indigo-600 shrink-0" />
                                    <p>
                                        * Note de transparence : Bien que les niveaux de résidus pharmaceutiques ne fassent pas actuellement l'objet de réglementations contraignantes au Canada, le principe de précaution incite de plus en plus de foyers à adopter la filtration domestique sélective.
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

export default ResidusMedicamentsEau;
