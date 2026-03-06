import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import { Button } from "@/components/ui/button";
import { Phone, ShieldAlert, BadgeCheck, Microscope, Waves, Droplets, Info, Search, AlertCircle, ShieldCheck, HeartPulse, Scale, FlaskConical, Zap, Wrench, Home, Sparkles, Filter, ShieldHalf, Thermometer, GlassWater } from "lucide-react";

const ChloreEauMunicipale = () => {
    useEffect(() => {
        document.title = "Chlore dans l'eau municipale : Nocif ou Nécessaire ? | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Pourquoi votre eau sent le chlore ? Découvrez l'importance du chlore pour la sécurité sanitaire et les risques des sous-produits de désinfection (THM). Apprenez à filtrer le chlore efficacement.");
        }
    }, []);

    const tocItems = [
        {
                "id": "section-1",
                "title": "Pourquoi le chlore est-il indispensable au réseau ?"
        },
        {
                "id": "section-2",
                "title": "Les RISQUES : Sous-produits et irritation"
        },
        {
                "id": "section-3",
                "title": "Solutions : Comment retirer le chlore efficacement ?"
        }
];

    return (
        <BlogLayout 
            title="Chlore dans l'eau : Nécessaire ou Nocif ?" 
            headerImage={"https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"}
            tocItems={tocItems}
        >
            <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-sky-600 pl-8 italic">
                                    Le chlore est souvent qualifié de « miracle de la santé publique ». Depuis son introduction massive au début du XXe siècle, il a pratiquement éradiqué des maladies mortelles comme le choléra et la typhoïde au Canada. Cependant, cette sécurité sanitaire a un prix : une signature chimique persistante dans votre verre et des sous-produits toxiques.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        Chaque matin, en ouvrant votre robinet, une légère odeur de piscine peut vous accueillir. C'est le signe que votre municipalité fait son travail pour garantir que l'eau reste microbiologiquement saine pendant son transit dans des kilomètres de tuyauteries souterraines. Mais une fois l'eau rendue à votre évier, le rôle du chlore est terminé. Doit-on continuer à l'ingérer et à se doucher avec ? Ce guide Bricareau fait la lumière sur les risques et les solutions de déchloration résidentielle.
                                    </p>
                                </div>

                                <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">1. Pourquoi le chlore est-il indispensable au réseau ?</h2>
                                <p>
                                    Le chlore (et ses dérivés comme la chloramine) est utilisé par les villes pour deux raisons fondamentales :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Désinfection Primaire :</strong> Éliminer les bactéries, virus et protozoaires à la sortie de l'usine de traitement.</li>
                                    <li><strong>Protection Résiduelle :</strong> Maintenir une barrière protectrice tout au long du réseau de distribution. Si une fissure survient dans une conduite souterraine, la présence de chlore résiduel empêche les pathogènes extérieurs de proliférer dans l'eau potable.</li>
                                </ul>

                                <div className="my-16 bg-sky-50 border border-sky-100 rounded-3xl p-10 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group shadow-sm">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-12 transition-transform duration-700">
                                        <ShieldHalf className="w-48 h-48 text-sky-900" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-sky-950 mb-6">Le Chlore au Robinet : Inutile ?</h3>
                                        <p className="text-slate-600 italic">
                                            « Considérez le chlore comme l'emballage de l'eau. Indispensable pour le transport en toute sécurité, mais vous n'êtes pas censé manger l'emballage. Une fois l'eau sécurisée et arrivée à destination, retirer le chlore est l'étape logique pour une santé optimale. »
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">2. Les RISQUES : Sous-produits et irritation</h2>
                                <p>
                                    Le problème majeur du chlore n'est pas tant le chlore lui-même, mais ce qu'il crée en réagissant avec les matières organiques résiduelles dans l'eau.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">Les Trihalométhanes (THM) : Le danger sournois</h3>
                                <p className="text-justify">
                                    Les THM sont des sous-produits de désinfection classés comme cancérogènes possibles par Santé Canada. Une exposition prolongée (consommation ou inhalation lors de douches chaudes) est associée à un risque accru de cancers de la vessie et de problèmes reproductifs. L'odeur « chimique » de l'eau chauffée est souvent celle des THM s'évaporant.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">Effets sur la peau et les cheveux</h3>
                                <p className="text-justify">
                                    Le chlore est un agent oxydant puissant. Il dépouille la peau et les cheveux de leurs huiles naturelles protectrices (sébum). Résultat : peau sèche, démangeaisons, eczéma aggravé et cheveux cassants. Si vous avez l'impression que votre peau « tire » après une douche, le chlore en est probablement la cause.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl group hover:shadow-xl transition-all">
                                        <Thermometer className="w-12 h-12 text-sky-600 mb-6 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Inhalation sous la douche</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed text-justify">
                                            Dans une douche chaude, le chlore se transforme en gaz. On estime que l'on absorbe autant de chlore par inhalation et par les pores de la peau durant une douche de 10 minutes que si l'on buvait 2 litres d'eau du robinet.
                                        </p>
                                    </div>
                                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl group hover:shadow-xl transition-all">
                                        <GlassWater className="w-12 h-12 text-sky-600 mb-6 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Altération des saveurs</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed text-justify">
                                            Le chlore dénature les arômes du café, du thé et des aliments cuits à l'eau. Retirer le chlore, c'est redécouvrir le vrai goût de votre cuisine.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">3. Solutions : Comment retirer le chlore efficacement ?</h2>
                                <p>
                                    Le chlore est heureusement facile à éliminer avec la bonne technologie. Le <strong>charbon actif</strong> est le média de choix absolu pour cette tâche.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">Filtration Toute-la-Maison (Entrée principale)</h3>
                                <p className="text-justify">
                                    Un système de filtration centrale au charbon actif (Catalytic Carbon) traite l'eau dès son entrée dans la résidence. Cela signifie de l'eau sans chlore dans chaque robinet, douche et électroménager. C'est la solution de confort global par excellence pour protéger votre peau et vos poumons durant la douche.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">Osmose Inverse (Boisson & Cuisine)</h3>
                                <p className="text-justify">
                                    L'osmose inverse combine plusieurs étapes de filtration au charbon et une membrane moléculaire. Elle retire le chlore, les chloramines ainsi que l'intégralité des sous-produits THM, offrant une eau de pureté supérieure pour votre consommation.
                                </p>

                                <div className="mt-20 p-10 md:p-20 bg-sky-950 text-white rounded-[4rem] text-center shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-45">
                                        <Sparkles className="w-96 h-96 text-white" />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold mb-10 tracking-tighter italic">Redécouvrez la douceur de l'eau.</h3>
                                    <p className="text-xl text-sky-200 opacity-80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                                        Ne laissez plus les produits de désinfection agresser votre santé et celle de vos enfants. Demandez dès aujourd'hui un diagnostic chlore professionnel.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-full px-12 h-18 text-xl font-bold shadow-xl" asChild>
                                            <a href="/contact">Analyser mon taux de chlore résiduel</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed flex items-center gap-4">
                                    <Info className="h-10 w-10 text-sky-600 shrink-0" />
                                    <p>
                                        * Note de transparence : Bricareau reconnaît l'importance vitale de la chloration municipale. Nos solutions ne visent pas à remettre en cause ce service, mais à offrir aux foyers une eau de qualité supérieure débarrassée de ses agents de transport chimiques.
                                    </p>
                                </div>
        </BlogLayout>
    );
};

export default ChloreEauMunicipale;
