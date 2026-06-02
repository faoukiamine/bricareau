import React, { useRef } from 'react';
import { Leaf } from 'lucide-react';

const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const ROICalculator = () => {
    const usersRef = useRef<HTMLSpanElement>(null);
    const savingsRef = useRef<HTMLDivElement>(null);
    const bottlesRef = useRef<HTMLSpanElement>(null);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value, 10);
        if (!isNaN(val)) {
            if (usersRef.current) usersRef.current.innerText = `${val} personnes`;
            if (savingsRef.current) savingsRef.current.innerText = `$${formatNumber(Math.round(val * 365 * 0.8))}`;
            if (bottlesRef.current) bottlesRef.current.innerText = `${formatNumber(val * 365)} Bouteilles sauvées`;
        }
    };
    
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                                L'eau pure, un investissement <span className="text-[#18448F] underline decoration-[#18448F]/30">extrêmement rentable.</span>
                            </h2>
                            <p className="text-slate-400 font-light mb-10">
                                Ajustez le curseur ci-dessous pour estimer vos économies annuelles en éliminant l'achat d'eau embouteillée pour votre foyer ou vos employés.
                            </p>
                            <div>
                                <div className="flex justify-between text-white font-bold mb-4">
                                    <span>Consommateurs réguliers</span>
                                    <span ref={usersRef} className="text-2xl text-sky-400">50 personnes</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="1" 
                                    max="200" 
                                    defaultValue={50}
                                    onInput={handleSliderChange}
                                    onChange={handleSliderChange}
                                    className="w-full h-2 bg-slate-700 rounded-lg cursor-pointer accent-[#18448F]"
                                />
                                <div className="flex justify-between text-slate-500 text-xs mt-2 font-bold">
                                    <span>1</span>
                                    <span>200+</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center">
                            <h3 className="text-slate-300 font-bold uppercase tracking-widest text-xs mb-2">Économies Annuelles Estimées</h3>
                            <div ref={savingsRef} className="text-6xl font-black text-white mb-4">
                                ${formatNumber(Math.round(50 * 365 * 0.8))}
                            </div>
                            <p className="text-sm text-slate-400 font-light">
                                *Basé sur une estimation de 0,80$ par jour/personne d'eau embouteillée.
                            </p>
                            <div className="mt-8 flex justify-center gap-4">
                                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                                    <Leaf className="w-4 h-4"/> <span ref={bottlesRef}>{formatNumber(50 * 365)} Bouteilles sauvées</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
