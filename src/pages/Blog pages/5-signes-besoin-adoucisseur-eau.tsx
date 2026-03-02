import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2, AlertTriangle, Droplets, Sparkles, ThermometerSun } from "lucide-react";

const SignesBesoinAdoucisseur = () => {
    useEffect(() => {
        document.title = "5 signes indéniables que votre maison a besoin d'un adoucisseur d'eau | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Votre eau est-elle trop dure ? Découvrez les 5 signes alarmants qui indiquent que vous avez besoin d'un adoucisseur d'eau pour protéger votre maison.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop"
                            alt="Problème de calcaire dans une maison moderne"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full mb-8">
                                <AlertTriangle className="h-4 w-4 text-blue-400" />
                                <span className="text-sm font-semibold tracking-wider uppercase">Diagnostic Résidentiel</span>
                            </div>
                            <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                                <span className="font-bold">5 signes indéniables</span> que votre maison a besoin d'un <span className="text-blue-400 whitespace-nowrap">adoucisseur d'eau</span>
                            </h1>
                            <p className="text-[20px] leading-[28px] text-slate-300 font-light mb-10 text-justify max-w-xl mx-auto">
                                L'eau dure est un fléau silencieux qui dégrade votre confort et vos infrastructures. Apprenez à identifier les symptômes avant que les dommages ne deviennent irréversibles.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 font-bold" asChild>
                                    <a href="/tests-eau">Réserver une analyse d'eau gratuite</a>
                                </Button>
                                <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 rounded-full px-8 h-14 backdrop-blur-sm shadow-xl" asChild>
                                    <a href="tel:18552649328" className="flex items-center gap-2">
                                        <Phone className="h-5 w-5" /> 1-855-264-9328
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="py-20 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-relaxed text-justify font-light">
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-blue-600 pl-8 italic">
                                    L'eau est le fluide vital de votre foyer, circulant invisiblement derrière vos murs et alimentant chaque aspect de votre vie quotidienne. Pourtant, lorsque cette eau est chargée de minéraux tels que le calcium et le magnésium, elle devient une force érosive qui s'attaque à l'esthétique de vos sanitaires, à la santé de votre peau et à la longévité de vos investissements les plus coûteux.
                                </p>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">L'eau dure : Un défi architectural et sanitaire</h2>
                                <p>
                                    Au Québec, la dureté de l'eau varie considérablement d'une région à l'autre, mais son impact reste universel : une dégradation progressive de la qualité de vie domestique. L'eau "dure" n'est pas dangereuse à boire, mais elle est techniquement incompatible avec les standards de performance des maisons modernes de haute efficacité.
                                </p>
                                <p>
                                    Voici les cinq signaux d'alarme qui devraient vous inciter à considérer l'installation d'un système d'adoucissement Bricareau.
                                </p>

                                <div className="space-y-24 mt-20">
                                    {/* Sign 1 */}
                                    <section>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                                                <Sparkles className="h-6 w-6" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-slate-900 m-0">1. L'accumulation persistante de calcaire</h2>
                                        </div>
                                        <p>
                                            C'est le signe le plus visible et le plus frustrant. Si vous remarquez des croûtes blanches et dures sur vos pommes de douche, autour de la base de vos robinets ou sur les parois de votre bouilloire, vous faites face à une eau extrêmement dure. Ce calcaire (carbonate de calcium) se précipite lorsque l'eau s'évapore ou est chauffée.
                                        </p>
                                        <p>
                                            Ce n'est pas seulement un problème de "ménage". Ces dépôts agissent comme un ciment qui obstrue les orifices des robinets, réduisant la pression d'eau et forçant le remplacement prématuré de robinetteries de luxe qui auraient dû durer des décennies. Un adoucisseur d'eau élimine ces minéraux à la source, laissant vos surfaces chromées et vos verres étincelants sans aucun effort de frottage.
                                        </p>
                                    </section>

                                    {/* Sign 2 */}
                                    <section>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                                                <Droplets className="h-6 w-6" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-slate-900 m-0">2. Problèmes dermatologiques et capillaires</h2>
                                        </div>
                                        <p>
                                            Votre peau est le plus grand organe de votre corps, et elle réagit violemment à l'agression des minéraux de l'eau dure. Si vous ressentez une sensation de tiraillement après la douche, ou si vos cheveux sont ternes, cassants et difficiles à coiffer malgré l'utilisation de produits haut de gamme, l'eau est la coupable.
                                        </p>
                                        <p>
                                            Les minéraux de l'eau dure empêchent le savon de se rincer correctement, laissant un film invisible sur votre épiderme. Ce résidu obstrue les pores, exacerbe l'eczéma et le psoriasis, et dépouille vos cheveux de leurs huiles naturelles. L'installation d'un adoucisseur transforme votre douche en un véritable spa à domicile : votre peau retrouve sa douceur naturelle et vos cheveux leur éclat soyeux, simplement parce que l'eau peut enfin faire son travail de nettoyage en profondeur.
                                        </p>
                                    </section>

                                    {/* Sign 3 */}
                                    <section>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                                                <ThermometerSun className="h-6 w-6" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-slate-900 m-0">3. Une efficacité énergétique en chute libre</h2>
                                        </div>
                                        <p>
                                            L'un des impacts les plus insidieux de l'eau dure se trouve à l'intérieur de votre chauffe-eau. Le calcaire s'y accumule rapidement, formant une couche isolante sur les éléments chauffants ou au fond du réservoir. Pour chauffer la même quantité d'eau, votre appareil doit travailler plus fort et plus longtemps.
                                        </p>
                                        <p>
                                            Une étude de la Water Quality Association (WQA) a démontré que l'eau dure peut réduire l'efficacité énergétique d'un chauffe-eau jusqu'à 24 % par an. Cela se traduit par une augmentation directe de vos factures d'Hydro-Québec. En utilisant une eau adoucie, vous éliminez cette barrière thermique, optimisez vos coûts de chauffage et prolongez de plusieurs années la vie de votre chauffe-eau.
                                        </p>
                                    </section>

                                    {/* Sign 4 */}
                                    <section>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                                                <CheckCircle2 className="h-6 w-6" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-slate-900 m-0">4. Le linge qui perd son éclat et sa souplesse</h2>
                                        </div>
                                        <p>
                                            Si vos vêtements blancs deviennent grisâtres et que vos serviettes de bain ressortent de la laveuse dures comme du carton, c'est que les minéraux se logent dans les fibres textiles. L'eau dure réagit chimiquement avec le détergent pour former des "grumeaux" de savon insolubles.
                                        </p>
                                        <p>
                                            Ces résidus agissent comme un papier sablé microscopique qui use prématurément les fibres de vos vêtements préférés. Avec un adoucisseur d'eau Bricareau, vous pouvez réduire votre consommation de savon de 50 % tout en obtenant un linge impeccablement propre et une souplesse incomparable, car les détergents moussent enfin correctement dans une eau libérée de ses impuretés.
                                        </p>
                                    </section>

                                    {/* Sign 5 */}
                                    <section>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                                                <AlertTriangle className="h-6 w-6" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-slate-900 m-0">5. Des taches suspectes sur la vaisselle</h2>
                                        </div>
                                        <p>
                                            Rien n'est plus gênant que de servir des invités dans des verres couverts de taches d'eau blanchâtres. Malgré des cycles de rinçage intensifs et des agents de rinçage coûteux, la vaisselle ressort tachetée. Ce sont les dépôts calcaires séchés.
                                        </p>
                                        <p>
                                            Ces taches ne sont qu'un symptôme superficiel : à l'intérieur de votre lave-vaisselle, le calcaire obstrue les bras d'aspersion et endommage les pompes de circulation. Un adoucisseur d'eau garantit une vaisselle étincelante et protège vos appareils ménagers à chaque cycle.
                                        </p>
                                    </section>
                                </div>

                                <div className="my-24 bg-blue-600 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                                    <h3 className="text-3xl font-bold mb-6 italic">L'élégance de la solution Bricareau</h3>
                                    <p className="text-xl font-light mb-10 leading-relaxed text-blue-50">
                                        Ne laissez pas l'eau dure dicter l'état de votre maison. Nos systèmes d'adoucissement de série Signature sont conçus pour s'intégrer discrètement à votre résidence tout en offrant une performance inégalée. C'est l'investissement le plus rentable pour préserver la valeur de votre patrimoine immobilier.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                                        <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 rounded-full px-10 h-16 text-lg font-bold shadow-xl" asChild>
                                            <a href="/adoucissement">Explorer nos modèles Signature</a>
                                        </Button>
                                        <p className="font-bold text-xl">OU</p>
                                        <a href="tel:18552649328" className="text-2xl font-bold hover:underline underline-offset-8">
                                            1-855-264-9328
                                        </a>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Conclusion</h2>
                                <p>
                                    L'adoucisseur d'eau n'est pas un luxe, c'est une nécessité technologique dans un environnement aux eaux minéralisées. En traitant l'eau dès son entrée dans votre demeure, vous offrez une protection multicouche à votre famille, vos finances et votre confort. Bricareau vous accompagne dans chaque étape du diagnostic pour assurer que votre eau soit votre meilleure alliée, et non votre pire ennemie.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default SignesBesoinAdoucisseur;
