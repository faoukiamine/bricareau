import React from "react";
import { ShieldCheck, Award, Star } from "lucide-react";

const LogoFarm = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-10">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
          Les leaders de l'industrie nous font confiance
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Simulated Logos */}
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#18448F]" />
            <span className="text-xl font-black tracking-tighter text-slate-800">BRITA</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-[#18448F]" />
            <span className="text-xl font-black tracking-widest text-slate-800 uppercase">Pentair</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-[#18448F]" />
            <span className="text-lg font-bold text-slate-800 uppercase">NSF Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#18448F] flex items-center justify-center text-white font-bold text-xs">
              WQA
            </div>
            <span className="text-lg font-bold text-slate-800">Water Quality</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoFarm;
