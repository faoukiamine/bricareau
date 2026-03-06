import React, { useEffect } from "react";
import BlogLayout from "@/components/BlogLayout";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, BadgeCheck, Microscope, Waves, Droplets, Info, Zap, Sparkles, Filter, CheckCircle2, FlaskConical, ShowerHead, HeartPulse, User, SparkleIcon, Sparkle } from "lucide-react";

const FiltreDouchePeauCheveux = () => {
    useEffect(() => {
        document.title = "Filtre de douche : Indispensable pour la peau et les cheveux | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Pourquoi installer un filtre de douche ? Découvrez l'impact du chlore sur la peau sèche, l'eczéma et la chute de cheveux, et comment le KDF transforme votre eau de douche.");
        }
    }, []);

    const tocItems = [
        {
                "id": "section-1",
                "title": "Le Chlore : L'agresseur invisible"
        },
        {
                "id": "section-2",
                "title": "Technologie KDF vs Charbon Actif"
        },
        {
                "id": "section-3",
                "title": "Solution Individuelle vs Solution Globale"
        }
];

    return (
        <BlogLayout 
            title="Filtre de douche : Beauté & Santé" 
            headerImage={"https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=2000&auto=format&fit=crop"}
            tocItems={tocItems}
        >
            <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-teal-600 pl-8 italic">
                                    Nous dépensons des fortunes en crèmes hydratantes et en revitalisants de luxe, tout en nous lavant chaque jour dans une eau agressive et chlorée. C'est un paradoxe esthétique et sanitaire majeur.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        L'exposition au chlore ne se limite pas à ce que nous buvons. Le plus grand organe de votre corps, votre peau, absorbe les polluants chimiques lors de chaque douche chaude. Plus inquiétant encore, l'eau chauffée libère des vapeurs de chlore et de chloroforme que nous inhalons directement dans nos poumons. Les conséquences ? Peau qui gratte, eczéma, psoriasis accentué, cheveux cassants et cuirs chevelus irrités. Un filtre de douche (ou mieux, un système maison entière) n'est pas un luxe, mais le fondement indispensable d'un régime de beauté et de santé sain. Ce guide Bricareau explique l'impact réel et les solutions pour transformer votre douche en spa thérapeutique.
                                    </p>
                                </div>

                                <h2 id="section-1" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">1. Le Chlore : L'agresseur invisible</h2>
                                <p>
                                    Les municipalités au Québec utilisent le chlore pour tuer les bactéries. C'est efficace pour le transport dans les tuyaux, mais c'est un agent oxydant puissant qui agit sur nos tissus biologiques :
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Action sur la Peau :</strong> Le chlore déshydrate la peau en retirant les huiles protectrices naturelles (le sébum), favorisant le vieillissement prématuré et l'irritation chronique.</li>
                                    <li><strong>Action sur les Cheveux :</strong> Le chlore oxyde la gaine de protection du cheveu, rendant les follicules poreux, secs et cassants. Les cheveux colorés perdent leur éclat en quelques jours seulement.</li>
                                    <li><strong>Action Respiratoire :</strong> Les vapeurs inhalées peuvent irriter les voies respiratoires, augmentant la sensibilité à l'asthme et aux allergies saisonnières.</li>
                                </ul>

                                <div className="my-16 bg-teal-50 border border-teal-100 rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="shrink-0 bg-white p-6 rounded-2xl shadow-sm">
                                        <HeartPulse className="w-16 h-16 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-teal-900 mb-4 tracking-tight">Le saviez-vous ?</h3>
                                        <p className="text-slate-600 text-[18px]">
                                            Une douche de 10 minutes expose votre corps à autant de chlore que si vous aviez bu 8 verres d'eau chlorée non filtrée.
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-2" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">2. Technologie KDF vs Charbon Actif</h2>
                                <p>
                                    Filtrer une douche est techniquement plus difficile que filtrer l'eau de boisson à cause du débit élevé et de la température de l'eau.
                                </p>
                                <p>
                                    Chez Bricareau, nous recommandons la technologie <strong>KDF-55</strong>. Contrairement au charbon actif qui perd son efficacité dans l'eau chaude, le média KDF (cuivre-zinc) utilise un processus électrochimique (oxydoréduction) pour convertir le chlore passif en ions de chlorure inoffensifs. Cette technologie est également antifongique et bactériostatique, empêchant la moisissure de se développer dans votre pommeau de douche.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <User className="w-10 h-10 text-teal-600 mb-4" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Bienfaits pour la Peau</h4>
                                        <p className="text-slate-600 text-sm italic leading-relaxed text-justify">
                                            Sensation immédiate de douceur, réduction spectaculaire des démangeaisons post-douche et diminution de l'inflammation cutanée (acné, rougeurs).
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <Sparkle className="w-10 h-10 text-teal-600 mb-4" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight">Éclat des Cheveux</h4>
                                        <p className="text-slate-600 text-sm italic leading-relaxed text-justify">
                                            Équilibre du pH du cuir chevelu, cheveux plus malléables, brillants et couleurs qui durent beaucoup plus longtemps sans virer au "cuivré".
                                        </p>
                                    </div>
                                </div>

                                <h2 id="section-3" className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 tracking-tight scroll-mt-24">3. Solution Individuelle vs Solution Globale</h2>
                                <p>
                                    Alors que le petit filtre dévissable pour pommeau peut être utile pour les locataires, l'option la plus efficace reste la filtration <strong>Maison Entière au Charbon Actif Haute-Densité</strong>. En traitant l'eau à l'entrée, vous purifiez non seulement votre douche, mais aussi l'eau de vos bains, de vos lavabos et même de votre laveuse, protégeant ainsi vos vêtements.
                                </p>

                                <div className="mt-20 p-10 md:p-20 bg-teal-900 text-white rounded-[4rem] relative overflow-hidden text-center shadow-2xl group">
                                    <div className="absolute top-0 right-0 p-12 opacity-10 translate-x-12 group-hover:scale-125 transition-transform">
                                        <Sparkles className="w-80 h-80" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic">Réinventez votre rituel de douche.</h3>
                                    <p className="text-xl text-teal-100 opacity-90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                        Laissez votre peau respirer et offrez à vos cheveux la pureté qu'ils méritent. Un investissement simple pour une beauté durable.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white border-teal-600 rounded-full px-12 h-18 text-xl font-bold shadow-xl shadow-teal-900/50" asChild>
                                            <a href="/contact">Découvrir nos filtres haute performance</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-relaxed flex items-start gap-4">
                                    <Info className="h-6 w-6 text-teal-600 shrink-0 mt-1" />
                                    <p>
                                        Rappel pour les parents : Les enfants et les bébés ont une peau beaucoup plus fine et perméable que les adultes. Filtrer l'eau de leur bain est une étape cruciale pour prévenir le développement précoce d'allergies cutanées.
                                    </p>
                                </div>
        </BlogLayout>
    );
};

export default FiltreDouchePeauCheveux;
