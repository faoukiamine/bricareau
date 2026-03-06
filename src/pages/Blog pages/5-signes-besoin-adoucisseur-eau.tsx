import React, { useEffect } from 'react';
import BlogLayout from "@/components/BlogLayout";
import headerImg from "@/assets/headerarticle-.jpg";
import { Phone, ArrowRight, CheckCircle2, AlertTriangle, Droplets, Sparkles, ThermometerSun } from "lucide-react";
import { Button } from "@/components/ui/button";

const SignesBesoinAdoucisseur = () => {
    useEffect(() => {
        document.title = "5 signes indéniables que votre maison a besoin d'un adoucisseur d'eau | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Découvrez les signes avant-coureurs d'une eau dure et comment un adoucisseur d'eau peut protéger votre plomberie et votre santé. Guide complet par Bricareau.");
        }
    }, []);

    const tocItems = [
        { id: "accumulation-calcaire", title: "Accumulation de calcaire" },
        { id: "factures-energie", title: "Hausse des factures d'énergie" },
        { id: "problemes-peau", title: "Problèmes de peau et de cheveux" },
        { id: "taches-blanchatres", title: "Taches blanchâtres" },
        { id: "linge-reche", title: "Linge rêche et usé" }
    ];

    return (
        <BlogLayout
            title="5 signes indéniables que votre maison a besoin d'un adoucisseur d'eau"
            headerImage={headerImg}
            tocItems={tocItems}
        >
            <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                L'eau dure est un problème invisible qui peut causer des dommages considérables à votre domicile et affecter votre bien-être quotidien. Voici comment identifier les signes qu'il est temps d'agir.
            </p>

            <div className="space-y-16">
                <section id="accumulation-calcaire">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <Droplets className="h-8 w-8 text-blue-600" />
                        1. Accumulation de calcaire sur les robinets
                    </h2>
                    <p className="text-lg text-slate-600 mb-6">
                        Si vous remarquez une substance blanche et croûteuse sur vos pommes de douche, vos robinets et vos éviers, c'est un signe classique d'accumulation de minéraux, principalement du calcium et du magnésium.
                    </p>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 italic text-slate-700">
                        "Le calcaire ne se contente pas d'être inesthétique ; il peut réduire le débit d'eau et, avec le temps, corroder vos installations coûteuses."
                    </div>
                </section>

                <section id="factures-energie">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <ThermometerSun className="h-8 w-8 text-blue-600" />
                        2. Hausse inexpliquée des factures d'énergie
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Le calcaire s'accumule également à l'intérieur de votre chauffe-eau. Cette couche isolante oblige l'appareil à travailler plus fort pour chauffer l'eau, ce qui augmente considérablement votre consommation d'énergie.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex gap-4 items-start p-6 bg-blue-50 rounded-xl">
                            <AlertTriangle className="h-6 w-6 text-blue-600 shrink-0" />
                            <p className="text-sm text-blue-900 font-medium">Une accumulation de seulement 1.6 mm de calcaire peut réduire l'efficacité de votre chauffe-eau de 12%.</p>
                        </div>
                        <div className="flex gap-4 items-start p-6 bg-blue-50 rounded-xl">
                            <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0" />
                            <p className="text-sm text-blue-900 font-medium">Un adoucisseur d'eau peut prolonger la durée de vie de votre chauffe-eau jusqu'à 15 ans.</p>
                        </div>
                    </div>
                </section>

                <section id="problemes-peau">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <Sparkles className="h-8 w-8 text-blue-600" />
                        3. Problèmes persistants de peau et de cheveux
                    </h2>
                    <p className="text-lg text-slate-600">
                        L'eau dure empêche le savon et le shampooing de se rincer complètement. Les résidus minéraux restent sur votre corps, obstruant les pores et rendant vos cheveux ternes et cassants. Si vous souffrez d'eczéma ou de peau sèche, l'eau dure aggrave souvent ces conditions.
                    </p>
                </section>

                <section id="taches-blanchatres">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <CheckCircle2 className="h-8 w-8 text-blue-600" />
                        4. Taches blanchâtres sur la vaisselle
                    </h2>
                    <p className="text-lg text-slate-600">
                        Vous sortez vos verres du lave-vaisselle et ils semblent toujours "sales" ou voilés ? Ces taches sont des dépôts de carbonate de calcium laissés après l'évaporation de l'eau.
                    </p>
                </section>

                <section id="linge-reche">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <ArrowRight className="h-8 w-8 text-blue-600" />
                        5. Linge rêche et couleurs ternes
                    </h2>
                    <p className="text-lg text-slate-600">
                        L'eau dure use les fibres des tissus plus rapidement. Vos vêtements perdent leur éclat, vos serviettes deviennent rêches au toucher et vous devez utiliser beaucoup plus de détergent pour obtenir un linge propre.
                    </p>
                </section>
            </div>

            <div className="mt-24 p-12 bg-blue-900 text-white rounded-[3rem] relative overflow-hidden shadow-2xl">
                <div className="absolute bottom-0 right-0 opacity-10 scale-150 translate-x-10 translate-y-10">
                    <Droplets className="w-64 h-64" />
                </div>
                <div className="relative z-10">
                    <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">Prêt à transformer votre eau ?</h3>
                    <p className="text-xl text-blue-100 opacity-90 mb-10 font-light leading-relaxed max-w-2xl">
                        N'attendez pas que le calcaire détruise vos appareils. Nos experts peuvent tester votre eau gratuitement et vous proposer la solution idéale pour votre foyer.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-lg font-bold shadow-xl transition-all" asChild>
                            <a href="/contact">Analyse d'eau gratuite</a>
                        </Button>
                        <a href="tel:18552649328" className="flex items-center gap-4 text-3xl font-bold hover:text-blue-300 transition-colors">
                            <Phone className="h-8 w-8" />
                            1-855-264-9328
                        </a>
                    </div>
                </div>
            </div>
        </BlogLayout>
    );
};

export default SignesBesoinAdoucisseur;
