const NewEraStats = () => {
    return (
        <section className="relative py-16 md:py-20 lg:py-24 bg-slate-900 overflow-hidden">
            {/* Dot pattern background */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="container relative mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Une nouvelle ère d'eau de meilleure qualité
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                        Rejoignez des milliers de foyers canadiens qui font confiance à Bricareau
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {/* Stat 1 */}
                    <div className="text-center space-y-3">
                        <div className="text-6xl md:text-7xl font-bold text-[#2563EB]">
                            #1
                        </div>
                        <p className="text-xl md:text-2xl font-semibold text-white">
                            Au Canada
                        </p>
                        <p className="text-base text-slate-400">
                            Leader du traitement d'eau résidentiel
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="text-center space-y-3">
                        <div className="text-6xl md:text-7xl font-bold text-[#2563EB]">
                            40M+
                        </div>
                        <p className="text-xl md:text-2xl font-semibold text-white">
                            Litres traités
                        </p>
                        <p className="text-base text-slate-400">
                            D'eau purifiée chaque jour
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="text-center space-y-3">
                        <div className="text-6xl md:text-7xl font-bold text-[#2563EB]">
                            20K+
                        </div>
                        <p className="text-xl md:text-2xl font-semibold text-white">
                            Foyers satisfaits
                        </p>
                        <p className="text-base text-slate-400">
                            Partout au Canada
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewEraStats;
