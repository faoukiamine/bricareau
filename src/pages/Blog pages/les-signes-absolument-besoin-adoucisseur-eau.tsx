import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2, AlertTriangle, Droplets, Sparkles, ThermometerSun, ShieldAlert, BadgeAlert, Info, Zap, Scale, Settings } from "lucide-react";

const SignesBesoinAbsoluAdoucisseur = () => {
    useEffect(() => {
        document.title = "Les signes que vous avez absolument besoin d'un adoucisseur d'eau | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Votre maison vous envoie des signaux d'alarme. Découvrez les signes indiscutables qui prouvent que vous devez agir contre l'eau dure pour protéger votre foyer.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-snug font-light text-justify text-[16px]">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-red-950 text-white overflow-hidden text-center shadow-2xl">
                    <div className="absolute inset-0 opacity-30 transform scale-110">
                        <img
                            src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"
                            alt="Abstraction de tuyauterie corrodée par le calcaire"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-400/30 px-6 py-2 rounded-full mb-8">
                            <ShieldAlert className="h-5 w-5 text-red-400" />
                            <span className="text-sm font-bold tracking-widest uppercase">Alerte Infrastructure & Santé</span>
                        </div>
                        <h1 className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl mx-auto">
                            <span className="text-red-400 font-bold">Signes alarmants :</span><br /> <span className="font-bold">Votre maison appelle à l'aide.</span>
                        </h1>
                        <p className="text-[20px] leading-snug text-slate-100 font-light mb-10 text-justify max-w-xl mx-auto italic">
                            L'eau dure n'est pas une fatalité, c'est une dégradation active et coûteuse. Apprenez à lire les symptômes d'une eau agressive avant qu'elle ne condamne votre plomberie.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-10 h-16 font-bold shadow-xl transition-all" asChild>
                                <a href="/adoucissement">Agir avec un système Signature</a>
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
                                <p className="lead text-2xl font-light text-slate-900 mb-12 border-l-4 border-red-600 pl-8 italic">
                                    Si vous attendez qu'une conduite explose ou qu'un chauffe-eau tombe en panne totale, il sera déjà trop tard. Votre maison vous envoie des signaux discrets mais indiscutables.
                                </p>

                                <div className="space-y-8">
                                    <p>
                                        L'eau dure agit comme un agent de sabotage lent à l'intérieur de vos murs. Chaque jour, des milligrammes de calcaire et de magnésium se déposent, s'accumulent et se rigidifient, créant une barrière impénétrable entre votre confort et votre système de vie. Au Québec, le coût de l'inaction face à une eau moyennement dure dépasse largement les 1000$ par an en énergie gaspillée, en produits de nettoyage inutiles et en usure prématurée des textiles. Mais comment faire la distinction entre une gêne mineure et un besoin <strong>absolu</strong> d'adoucissement ? Ce rapport spécial Bricareau identifie les points de non-retour diagnostiques.
                                    </p>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">1. Le "Ciment Blanc" sur votre Robinetterie</h2>
                                <p>
                                    C'est le symptôme le plus classique, mais lorsqu'il devient "absolu", vous ne parvenez plus à l'enlever avec des produits ménagers classiques.
                                </p>
                                <ul className="list-disc pl-8 space-y-4 mb-8">
                                    <li><strong>Le Signe :</strong> Un dépôt calcaire d'une épaisseur dépassant le demi-millimètre à la base des mitigeurs ou obstruant les buses des pommes de douche haut de gamme.</li>
                                    <li><strong>Le Danger :</strong> Ce tartre emprisonne l'humidité et les bactéries, créant des foyers de contamination biologique et bloquant mécaniquement les cartouches thermostatiques de vos robinets.</li>
                                </ul>

                                <div className="my-16 bg-red-50 border border-red-100 rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-8 opacity-10">
                                        <BadgeAlert className="w-56 h-56 text-red-900" />
                                    </div>
                                    <div className="shrink-0 bg-white p-6 rounded-2xl shadow-md border border-red-100 relative z-10 text-center">
                                        <Scale className="w-16 h-16 text-red-600" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-red-900 mb-4 tracking-tight">Perte de pression</h3>
                                        <p className="text-slate-600 text-[18px] leading-snug">
                                            Si vous remarquez que la pression d'eau chaude diminue alors que l'eau froide reste puissante, votre chauffe-eau ou vos conduites sont en train de <strong>s'asphyxier de calcaire</strong>.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">2. Crise Dermatologique et Capillaire Chronique</h2>
                                <p>
                                    N'ignorez pas les signaux envoyés par votre corps. L'eau dure est un ennemi déclaré de la barrière cutanée.
                                </p>
                                <p>
                                    Lorsque la dureté dépasse un certain seuil, le savon réagit avec le calcium pour former du "savon noir" (curd) insoluble. Plutôt que de nettoyer, votre douche dépose une couche abrasive et irritante sur votre peau et dans vos cheveux. Si vous souffrez de démangeaisons post-douche, d'une sécheresse que les crèmes les plus chères ne soignent pas, ou si vos cheveux sont radicalement différents lors de vos voyages dans des zones d'eau douce, votre besoin d'un adoucisseur est <strong>physiologique</strong> et non seulement technique.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <Droplets className="w-10 h-10 text-red-600 mb-4" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight text-red-900 italic">Peau Atopique</h4>
                                        <p className="text-slate-600 text-sm font-medium leading-snug text-justify opacity-80">
                                            Pour les enfants souffrant d'eczéma, l'eau dure est un déclencheur environnemental majeur qu'un adoucisseur peut éliminer instantanément.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                        <Zap className="w-10 h-10 text-red-600 mb-4" />
                                        <h4 className="text-xl font-bold mb-4 tracking-tight text-red-900 italic">Cheveux Eternels</h4>
                                        <p className="text-slate-600 text-sm font-medium leading-snug text-justify opacity-80">
                                            Un investissement dans un adoucisseur Signature se rentabilise aussi par la réduction drastique du budget produits capillaires de luxe.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-20 mb-8 tracking-tight">3. Le Déclin de la Vaisselle et du Linge</h2>
                                <p>
                                    Regardez vos verres à la lumière. Sont-ils "propres" mais ternes ? Couverts de cercles blanchâtres ? C'est le calcaire qui cuit sur la surface lors du cycle de séchage du lave-vaisselle. Pour votre linge, le signe absolu est la raideur des serviettes de bain et des draps, ainsi qu'une perte de couleur prématurée (blancs qui deviennent gris/jaunes).
                                </p>

                                <div className="mt-20 p-10 md:p-20 bg-red-950 text-white rounded-[4rem] relative overflow-hidden text-center shadow-2xl group">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-12 scale-125 group-hover:rotate-12 transition-transform duration-700">
                                        <AlertTriangle className="w-96 h-96" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-10 tracking-tighter italic text-red-300">Ne laissez pas le calcaire gagner.</h3>
                                    <p className="text-xl text-slate-300 opacity-90 mb-12 max-w-2xl mx-auto font-light leading-snug">
                                        Une eau dure non traitée diminue la valeur de revente de votre maison en dégradant son infrastructure interne. Protégez votre capital dès aujourd'hui.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-red-600 rounded-full px-12 h-18 text-xl font-bold shadow-xl shadow-red-900/50 transition-transform active:scale-95" asChild>
                                            <a href="/contact">Bénéficier d'un diagnostic d'urgence gratuit</a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-20 text-slate-400 text-sm border-t border-slate-100 pt-8 italic leading-snug flex items-start gap-4">
                                    <Info className="h-6 w-6 text-red-600 shrink-0 mt-1" />
                                    <p>
                                        Rappel d'expert : Au Québec, un adoucisseur bien calibré augmente la durée de vie moyenne de vos appareils de 20 à 45 %. C'est une assurance contre l'obsolescence programmée provoquée par le tartre.
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

export default SignesBesoinAbsoluAdoucisseur;
