import React, { useEffect, useState } from "react";
import { 
    ChevronRight, 
    ArrowRight,
    Star,
    CheckCircle2,
    ShieldCheck,
    Settings,
    Users,
    Clock,
    DollarSign,
    Leaf,
    ArrowUpRight,
    Phone,
    Zap,
    Trophy,
    HeartPulse,
    Globe,
    Award,
    Shield,
    Sparkles,
    Activity,
    Target
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { cn } from "@/lib/utils";
import { ProMaxButton } from "@/components/ui/ProMaxButton";

// Assets
import heroImg from "@/assets/10341859.jpg"; 

const WhyChooseUs = () => {
    const navigate = useNavigate();
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    useEffect(() => {
        document.title = "Pourquoi Choisir Bricareau | L'Excellence en Traitement d'Eau";
        window.scrollTo(0, 0);
    }, []);

    const pillars = [
        {
            title: "Expertise Scientifique",
            desc: "Nous ne nous contentons pas de filtrer l'eau ; nous analysons sa structure moléculaire pour concevoir la solution exacte dont votre foyer a besoin.",
            icon: <Activity className="w-8 h-8" />,
            color: "blue"
        },
        {
            title: "Engagement Durable",
            desc: "Réduisez votre empreinte écologique tout en protégeant votre santé. Nos systèmes sont conçus pour durer des décennies, pas des années.",
            icon: <Leaf className="w-8 h-8" />,
            color: "emerald"
        },
        {
            title: "Soutien Infaillible",
            desc: "Un support technique d'élite disponible 24/7. Chez Bricareau, vous n'êtes pas un client, vous êtes un partenaire de pureté.",
            icon: <ShieldCheck className="w-8 h-8" />,
            color: "indigo"
        },
        {
            title: "Innovation Continue",
            desc: "De la filtration membranaire aux valves intelligentes, nous intégrons les dernières percées mondiales dans chaque installation.",
            icon: <Zap className="w-8 h-8" />,
            color: "amber"
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Header />

            <main>
                {/* 1. CINEMATIC HERO SECTION */}
                <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImg}
                            alt="Expertise Bricareau"
                            className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                        
                        {/* Abstract light effects */}
                        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] animate-pulse delay-700" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl space-y-12">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md animate-in fade-in slide-in-from-top duration-700">
                                <Award className="w-4 h-4 text-blue-400" />
                                <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Standard d'Excellence Canadien</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-7xl lg:text-[84px] leading-[1] tracking-tight animate-in fade-in slide-in-from-left duration-1000">
                                <span className="italic font-light text-white block opacity-80">Plus qu'une filtration,</span>
                                <span className="font-bold text-white block uppercase tracking-tighter">Une renaissance hydrique.</span>
                            </h1>
                            
                            <p className="text-lg md:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed animate-in fade-in slide-in-from-left duration-1000 delay-200">
                                Bricareau redéfinit la relation entre l'homme et l'eau. Depuis plus de deux décennies, nous fusionnons ingénierie de pointe et vision holistique pour transformer chaque goutte en une source de vitalité pure.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-8 pt-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
                                <ProMaxButton 
                                    variant="primary" 
                                    className="px-16 h-20 text-[12px]"
                                    onClick={() => navigate("/contact")}
                                >
                                    COMMENCER L'EXPÉRIENCE
                                </ProMaxButton>
                                <button 
                                    className="flex items-center gap-6 text-white hover:text-blue-400 transition-all group"
                                    onClick={() => document.getElementById('manifeste')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-white/5 transition-all">
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Découvrir</div>
                                        <div className="text-sm font-bold uppercase tracking-widest">Notre manifeste</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-12 right-12 hidden lg:block opacity-30">
                        <div className="flex items-center gap-4 text-slate-500">
                            <span className="text-[10px] font-black uppercase tracking-widest rotate-90 origin-right translate-y-12">DEPUIS 2004</span>
                            <div className="w-[1px] h-24 bg-white/20" />
                        </div>
                    </div>
                </section>

                {/* 2. THE MANIFESTO (Philosophy) */}
                <section id="manifeste" className="py-32 bg-white relative">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="space-y-8">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">NOTRE PHILOSOPHIE</span>
                                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none">
                                    L'eau est le <br /><span className="text-[#18448F] italic font-light">carburant de la vie.</span>
                                </h2>
                                <div className="h-1 w-24 bg-blue-600 rounded-full" />
                                <p className="text-slate-600 text-xl font-light leading-relaxed text-justify">
                                    Chez Bricareau, nous croyons que l'accès à une eau d'une pureté absolue n'est pas un luxe, mais un droit fondamental pour la santé et la longévité. Chaque système que nous installons est une promesse tenue : celle de protéger votre famille des contaminants invisibles tout en préservant l'équilibre minéral essentiel.
                                </p>
                                <div className="grid grid-cols-2 gap-8 pt-8">
                                    <div className="space-y-2">
                                        <div className="text-4xl font-black text-blue-600">20k+</div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Foyers Protégés</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-4xl font-black text-blue-600">99.9%</div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Satisfaction Client</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] blur-2xl" />
                                <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
                                    <img 
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
                                        alt="Équipe Bricareau" 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#18448F]/60 to-transparent" />
                                    <div className="absolute bottom-12 left-12 right-12 text-white">
                                        <p className="text-lg italic font-light mb-2">"La qualité ne se négocie pas, elle s'installe."</p>
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-70">— L'Équipe d'Ingénierie Bricareau</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. DNA BENTO GRID (The Reasons) */}
                <section className="py-32 bg-slate-50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(37,99,235,0.03)_0%,_transparent_50%)] pointer-events-none" />
                    
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-24 space-y-6">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">L'ADN BRICAREAU</span>
                            <h2 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-none">
                                Pourquoi nous <span className="text-[#18448F]">sommes différents.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[350px]">
                            {/* Card 1: Technical Precision (Large) */}
                            <div className="md:col-span-8 bg-white rounded-[3rem] p-12 flex flex-col justify-between overflow-hidden relative group shadow-sm hover:shadow-2xl transition-all duration-700">
                                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Settings className="w-80 h-80 rotate-12" />
                                </div>
                                <div className="space-y-6 relative z-10">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-200">
                                        <Target className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Ingénierie de Haute Précision</h3>
                                    <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
                                        Contrairement aux solutions génériques, nos systèmes sont calibrés sur mesure après une analyse physico-chimique rigoureuse de votre eau. Nous utilisons exclusivement des valves de contrôle intelligentes certifiées NSF, garantissant une longévité dépassant les 20 ans.
                                    </p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="Expert" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="h-[1px] flex-1 bg-slate-100" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Division Technique Certifiée</span>
                                </div>
                            </div>

                            {/* Card 2: Guarantee (Vertical) */}
                            <div className="md:col-span-4 bg-[#18448F] rounded-[3rem] p-12 text-white flex flex-col justify-between group hover:bg-[#153a7a] transition-all duration-500 shadow-xl shadow-blue-900/10">
                                <div className="space-y-8">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-blue-300 border border-white/10">
                                        <ShieldCheck className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-4xl font-bold leading-tight tracking-tight">Garantie <br />Patrimoniale.</h3>
                                    <p className="text-blue-100/70 font-light leading-relaxed">
                                        Une protection à vie sur les boîtiers et 10 ans sur les composants critiques. Nous ne vendons pas seulement un produit, nous protégeons votre investissement immobilier.
                                    </p>
                                </div>
                                <ProMaxButton variant="white" className="w-full text-[10px] h-14" onClick={() => navigate("/contact")}>CONSULTER LES GARANTIES</ProMaxButton>
                            </div>

                            {/* Card 3: Support (Small) */}
                            <div className="md:col-span-4 bg-white rounded-[3rem] p-10 flex flex-col justify-between border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-700 group overflow-hidden">
                                <div className="space-y-4">
                                    <Clock className="w-12 h-12 text-blue-600" />
                                    <h3 className="text-2xl font-bold text-slate-900">Réactivité 24/7</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Une ligne d'urgence technique dédiée pour garantir qu'aucune interruption ne vienne troubler votre confort hydrique. Partout au Québec.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <a href="tel:18552649328" className="text-[11px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                        APPEL PRIORITAIRE <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            {/* Card 4: Eco (Wide) */}
                            <div className="md:col-span-8 bg-blue-900 rounded-[3rem] p-12 flex flex-col md:flex-row gap-12 items-center group overflow-hidden relative">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop')] opacity-10 grayscale group-hover:scale-105 transition-transform duration-[5s]" />
                                <div className="flex-1 space-y-6 relative z-10">
                                    <div className="inline-flex items-center gap-3 text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-400/20">
                                        <Leaf className="w-4 h-4" />
                                        Impact Régénératif
                                    </div>
                                    <h3 className="text-4xl font-bold text-white tracking-tight">Pureté sans Déchets</h3>
                                    <p className="text-blue-100/70 text-lg leading-relaxed">
                                        En choisissant Bricareau, vous éliminez la nécessité de plus de 2 500 bouteilles de plastique par an. Nos systèmes haute efficacité consomment 50% d'eau de rinçage en moins que les standards du marché.
                                    </p>
                                </div>
                                <div className="relative z-10 flex flex-col items-center gap-4 bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 min-w-[200px]">
                                    <div className="text-5xl font-black text-blue-400">-50%</div>
                                    <div className="text-[10px] font-bold text-center text-blue-200 uppercase tracking-widest">Consommation <br />de Sel</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. THE 4 PILLARS OF PERFORMANCE */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                            {pillars.map((pillar, i) => (
                                <div key={i} className="space-y-8 group cursor-default">
                                    <div className={cn(
                                        "w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-6 shadow-lg",
                                        pillar.color === "blue" ? "bg-blue-50 text-blue-600 shadow-blue-100" :
                                        pillar.color === "emerald" ? "bg-emerald-50 text-emerald-600 shadow-emerald-100" :
                                        pillar.color === "indigo" ? "bg-indigo-50 text-indigo-600 shadow-indigo-100" :
                                        "bg-amber-50 text-amber-600 shadow-amber-100"
                                    )}>
                                        {pillar.icon}
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{pillar.title}</h3>
                                        <p className="text-slate-500 font-light leading-relaxed text-justify">{pillar.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. TESTIMONIALS (The Proof) */}
                <div className="bg-slate-900 py-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
                    <TestimonialsSection 
                        filterProduct="/"
                        limit={6}
                        title={
                            <div className="text-center space-y-6 mb-20 relative z-10">
                                <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em] block">LA VOIX DE NOS PARTENAIRES</span>
                                <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                                    L'Expérience <br /><span className="text-blue-500">Bricareau vécue.</span>
                                </h2>
                            </div>
                        }
                    />
                </div>

                {/* 6. FINAL CTA BOX (The Commitment) */}
                <section className="py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="relative bg-[#18448F] rounded-[4rem] p-12 md:p-28 overflow-hidden text-center space-y-12 group shadow-[0_50px_100px_-20px_rgba(24,68,143,0.3)]">
                            {/* Sophisticated background textures */}
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                            <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-[7s]" />
                            <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-[7s]" />

                            <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-black text-white uppercase tracking-widest">
                                    <Sparkles className="w-3 h-3 text-blue-300" />
                                    Transformez votre quotidien dès aujourd'hui
                                </div>
                                <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-[0.95] uppercase">
                                    Rejoignez le cercle <br /><span className="italic font-light text-blue-300 lowercase">de la pureté absolue.</span>
                                </h2>
                                <p className="text-blue-100/70 text-lg md:text-2xl font-light leading-relaxed">
                                    Votre voyage vers une eau d'exception commence par une simple analyse. Offrez-vous la sérénité que procure une ingénierie d'élite.
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 pt-6">
                                <ProMaxButton 
                                    variant="white" 
                                    className="px-20 h-24 text-[13px] shadow-2xl"
                                    onClick={() => navigate("/consultation")}
                                >
                                    ANALYSE TECHNIQUE OFFERTE
                                </ProMaxButton>
                                <div className="flex items-center gap-6 group/phone">
                                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/phone:bg-blue-500 group-hover/phone:border-blue-400 transition-all duration-500">
                                        <Phone className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-1">Division Conseil</div>
                                        <div className="text-3xl font-bold tracking-tighter text-white">1-855-264-9328</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default WhyChooseUs;
