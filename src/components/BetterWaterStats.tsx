import { Microscope, Lightbulb, Drill, Headset } from "lucide-react";

const BetterWaterStats = () => {
    const steps = [
        {
            title: "Analyse Scientifique",
            desc: "Un diagnostic physico-chimique rigoureux pour identifier avec précision chaque contaminant présent dans votre eau.",
            icon: Microscope,
            stepId: "01"
        },
        {
            title: "Ingénierie Conseil",
            desc: "Pas de solution générique. Nous concevons le système optimal sur mesure selon vos habitudes de consommation.",
            icon: Lightbulb,
            stepId: "02"
        },
        {
            title: "Installation Expert",
            desc: "Nos techniciens certifiés assurent une mise en place millimétrée, propre et conforme aux normes les plus strictes.",
            icon: Drill,
            stepId: "03"
        },
        {
            title: "Service Signature",
            desc: "Notre engagement ne s'arrête pas après la pose. Profitez d'un suivi proactif et d'un support technique d'exception.",
            icon: Headset,
            stepId: "04"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-[#020617] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none opacity-50" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left Sticky Column */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                            L'Excellence Bricareau
                        </div>
                        <h2 className="text-white tracking-tighter mb-6">
                            <span className="text-[36px] md:text-[56px] font-bold leading-[1] block text-white">La promesse d'une eau saine,</span>
                            <span className="text-[36px] md:text-[56px] font-light leading-[1] text-blue-400 block mt-2">de notre rencontre à votre confort.</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full" />
                        <p className="text-xl text-slate-400 font-light leading-snug max-w-md text-justify">
                            Parce que la santé de votre foyer ne supporte aucune approximation, nous avons bâti un protocole rigoureux qui garantit une pureté absolue à chaque étape.
                        </p>
                    </div>

                    {/* Right Scrolling Column */}
                    <div className="lg:col-span-7 space-y-4 md:space-y-6">
                        {steps.map((item, i) => (
                            <div
                                key={i}
                                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/5 p-6 md:p-8 rounded-[2.5rem] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-700 shadow-2xl"
                            >
                                {/* Background step number */}
                                <div className="absolute top-12 right-12 text-7xl md:text-9xl font-black text-white/[0.02] group-hover:text-blue-500/[0.03] transition-colors pointer-events-none select-none">
                                    {item.stepId}
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center relative z-10">
                                    {/* Icon Container */}
                                    <div className="relative">
                                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-blue-600 flex items-center justify-center text-white shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-500 ease-out">
                                            <item.icon className="w-10 h-10 md:w-12 md:h-12" />
                                        </div>
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-xs font-black border border-white/10 text-white group-hover:bg-blue-500 transition-colors shadow-lg">
                                            {item.stepId}
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg text-slate-400 font-light leading-snug max-w-xl text-justify">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BetterWaterStats;

