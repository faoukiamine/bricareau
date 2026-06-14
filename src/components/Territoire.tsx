import React from 'react';
import { MapPin } from 'lucide-react';
import montrealMapImg from "@/assets/montreal_dark_map.png";

const regions = [
    { name: "Ile de Montréal", desc: "Intervention rapide en milieu urbain" },
    { name: "Rive-Nord", desc: "Laval, Terrebonne, Blainville" },
    { name: "Rive-Sud", desc: "Longueuil, Brossard, Boucherville" },
    { name: "Laurentides", desc: "Saint-Jérôme et ses environs" },
    { name: "Lanaudière", desc: "Repentigny, Mascouche" },
    { name: "Montérégie", desc: "Vaudreuil, Saint-Hyacinthe" }
];

const Territoire = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden border-b border-slate-200">
            {/* Background map faint overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <img src={montrealMapImg} className="w-full h-full object-cover invert"  alt="Carte de fond - filtration Bricareau" title="Filtration Bricareau par Bricareau" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-0.5 bg-[#8CC63F]"></div>
                        <span className="text-[#8CC63F] text-xs font-bold uppercase tracking-[0.15em]">Territoire</span>
                        <div className="w-12 h-0.5 bg-[#8CC63F]"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#18448F]">Partout où vous avez besoin d'une <span className="text-[#8CC63F]">eau filtrée de meilleure qualité.</span></h2>
                    <p className="text-slate-500 text-lg">Nos équipes couvrent l'ensemble de la région métropolitaine pour des installations, de la maintenance et des dépannages rapides.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, idx) => (
                        <div key={idx} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#18448F]/20 hover:-translate-y-1 transition-all duration-300 group cursor-default flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-[#8CC63F]/10 flex items-center justify-center shrink-0 transition-colors">
                                <MapPin className="w-6 h-6 text-[#18448F] group-hover:text-[#8CC63F] transition-colors" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#18448F] text-lg mb-1">{region.name}</h4>
                                <p className="text-slate-500 text-sm">{region.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Territoire;
