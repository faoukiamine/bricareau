import React from 'react';
import { ArrowRight } from "lucide-react";
import diagnosticStepImg from "@/assets/step-diagnostic.png";
import customStepImg from "@/assets/catalogue.png";
import installationStepImg from "@/assets/Installation experte - Bricareau.jpg";
import serenityStepImg from "@/assets/close-up-handsom-man-taking-bath.jpg";
import familyImg from "@/assets/happy-family-enjoying-time-together.jpg";
import bathroomImg from "@/assets/contemporary-bathroom-elements.jpg";
import officeImg from "@/assets/Bricareau-Logo-on-wall.jpg";
import { Button } from "@/components/ui/button";

const BentoExperience = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="w-full px-4 sm:px-12 lg:px-20 relative z-10">
                
                {/* Header - Identical to Model */}
                <div className="max-w-6xl mx-auto text-center mb-16 px-6">
                    <h2 
                        className="mb-8 text-[28px] md:text-[36px] lg:text-[48px] leading-tight"
                        style={{
                            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                            fontStyle: 'normal'
                        }}
                    >
                        <span className="italic font-light text-[#2563eb] block text-center">La promesse d'une eau saine,</span>
                        <span className="font-bold text-[#1e3a8a] block text-center">de notre rencontre à votre confort.</span>
                    </h2>
                    <p className="text-[14px] md:text-[16px] xl:text-[18px] leading-relaxed text-slate-400 max-w-2xl mx-auto mb-10 font-normal">
                        La promesse d'une eau saine, de notre rencontre à votre confort. Parce que la santé de votre foyer ne supporte aucune approximation, nous avons bâti un protocole rigoureux.
                    </p>
                    <div className="flex justify-center">
                        <Button asChild>
                            <a href="/consultation" className="flex items-center gap-2">
                                Planifiez une consultation gratuite
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Bento Grid - Exact Replica of Model Structure - Full Images */}
                <div className="flex flex-col md:flex-row items-end justify-center lg:justify-between gap-4 lg:gap-8 min-h-[600px] w-full max-w-[1920px] mx-auto">
                    
                    {/* Column 1: Left Square - Diagnostic */}
                    <div className="w-full md:w-[18%] h-80 relative overflow-hidden rounded-[2.5rem] bg-[#1a1a1a] group cursor-pointer border border-white/5 flex-shrink-0">
                        <img src={diagnosticStepImg} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                        <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                            <span className="text-4xl font-black text-white/20 mb-4 block leading-none">01</span>
                            <h3 className="text-white font-bold text-xl mb-4 leading-tight">Diagnostic complet</h3>
                            <p className="text-white/70 text-sm font-light leading-relaxed max-w-[200px]">
                                Un diagnostic physico-chimique rigoureux pour identifier avec précision chaque contaminant présent dans votre eau.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Middle-Left Tall/Split */}
                    <div className="flex flex-col gap-6 w-full md:w-[20%] flex-shrink-0">
                        <div className="w-full h-80 relative overflow-hidden rounded-[2.5rem] bg-[#1a1a1a] group border border-white/5">
                             <img src={customStepImg} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                             <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                                 <span className="text-4xl font-black text-white/10 mb-4 block leading-none">02</span>
                                 <h3 className="text-white font-bold text-xl mb-4 leading-tight">Solution sur mesure</h3>
                                 <p className="text-white/60 text-sm font-light leading-relaxed">
                                     Pas de solution générique. Nous concevons le système optimal sur mesure selon vos habitudes de consommation.
                                 </p>
                             </div>
                        </div>
                        <div className="w-full h-48 relative overflow-hidden rounded-[2.5rem] bg-slate-100 border border-slate-100 overflow-hidden group">
                             <img src={officeImg} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
                        </div>
                    </div>

                    {/* Column 3: Center Center */}
                    <div className="flex flex-col gap-6 w-full md:w-[22%] flex-shrink-0">
                        <div className="w-full h-44 relative overflow-hidden rounded-[2.5rem] bg-[#1a1a1a] group border border-white/5">
                            <img src={customStepImg} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60" alt="" />
                        </div>
                        <div className="w-full h-64 relative overflow-hidden rounded-[2.5rem] bg-slate-100 border border-slate-100 overflow-hidden group">
                            <img src={bathroomImg} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
                        </div>
                    </div>

                    {/* Column 4: Middle-Right Tall/Split */}
                    <div className="flex flex-col gap-6 w-full md:w-[20%] flex-shrink-0">
                        <div className="w-full h-[420px] relative overflow-hidden rounded-[2.5rem] bg-[#1a1a1a] group border border-white/5">
                            <img src={installationStepImg} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                            <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                                <span className="text-4xl font-black text-white/10 mb-4 block leading-none">03</span>
                                <h3 className="text-white font-bold text-xl mb-4 leading-tight">Installation experte</h3>
                                <p className="text-white/60 text-sm font-light leading-relaxed">
                                    Nos techniciens assurent une mise en place millimétrée, propre et conforme aux normes les plus strictes.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-44 relative overflow-hidden rounded-[2.5rem] bg-slate-100 border border-slate-100 overflow-hidden group">
                             <img src={familyImg} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
                        </div>
                    </div>

                    {/* Column 5: Right Square */}
                    <div className="w-full md:w-[18%] h-64 relative overflow-hidden rounded-[2.5rem] bg-[#1a1a1a] group flex-shrink-0 border border-white/5">
                        <img src={serenityStepImg} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                        <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                            <span className="text-4xl font-black text-white/10 mb-2 block leading-none">04</span>
                            <h3 className="text-white font-bold text-xl mb-4 leading-tight">Tranquillité totale</h3>
                            <p className="text-white/60 text-[11px] font-light leading-snug">
                                Notre engagement ne s'arrête pas après la pose. Profitez d'un suivi proactif et d'un support technique d'exception.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BentoExperience;
