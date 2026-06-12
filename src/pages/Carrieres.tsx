import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ProMaxButton } from "@/components/ui/ProMaxButton";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

// Assets
import heroImg from "@/assets/2241.jpg"; 
import imgTeam from "@/assets/2148826999.jpg"; 
import imgFormation from "@/assets/cae3c0a4-5b4d-4b0e-8bc3-3550a714f7bb.jpg";
import imgImpact from "@/assets/2232.jpg";
import imgCTA from "@/assets/2148858959.jpg";

const jobs = [
    {
        id: 1,
        title: "Technicien en traitement de l'eau",
        department: "Installation & Service",
        location: "Montréal & Environs",
        type: "Temps plein",
        experience: "2-5 ans"
    },
    {
        id: 2,
        title: "Conseiller aux ventes techniques",
        department: "Ventes Commerciales",
        location: "Hybride",
        type: "Temps plein",
        experience: "3+ ans"
    }
];

export default function Carrieres() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Carrières | Bricareau";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 overflow-x-hidden">
            <Header />

            <main>
                {/* 1. CUSTOM HERO SECTION */}
                <section className="relative bg-white overflow-hidden min-h-screen flex flex-col justify-center pt-24 pb-16 lg:pt-28 lg:pb-16 border-b border-slate-200">
                    <div className="absolute inset-0 w-full h-full opacity-40 lg:opacity-100">
                        {/* Mobile Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent z-10 lg:hidden"></div>
                        {/* Desktop Gradient: 1/3 solid white, fading to transparent */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,white_33.33%,rgba(255,255,255,0)_85%)] z-10 hidden lg:block"></div>
                        
                        {/* Image Container */}
                        <div className="absolute right-0 top-0 w-full lg:w-[80%] h-full">
                            <img 
                                src={heroImg} 
                                alt="Carrières Bricareau" 
                                className="absolute inset-0 w-full h-full object-cover object-center animate-in fade-in duration-1000"
                            />
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none z-20"></div>

                    <div className="container mx-auto px-6 relative z-30">
                        <div className="max-w-3xl flex flex-col justify-center animate-in fade-in slide-in-from-left-10 duration-1000 delay-300 fill-mode-both">

                            <span className="inline-block py-1 px-4 bg-[#18448F] text-white rounded-full font-bold tracking-[0.2em] uppercase text-xs mb-8 w-fit">Rejoignez-nous</span>
                            
                            <h1 className="text-[50px] leading-[55px] font-sans font-bold text-[#18448F] mb-6 tracking-tight">
                                Faites de l’eau <br /> <span className="text-[#8CC63F] font-sans font-bold drop-shadow-sm">votre mission !</span>
                            </h1>
                            
                            <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl mb-12">
                                Mettez votre talent au service d'une cause essentielle. Intégrez une entreprise québécoise dynamique où chaque rôle a un impact direct sur la santé de nos clients et la préservation de notre environnement.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <ProMaxButton variant="primary" className="px-10 h-16 shadow-lg" onClick={() => document.getElementById('nos-piliers')?.scrollIntoView({ behavior: 'smooth' })}>
                                    DÉCOUVRIR NOS AVANTAGES
                                </ProMaxButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. NOTRE MISSION: Clair */}
                <section className="relative min-h-screen py-32 flex items-center bg-[#F0F7FF] overflow-hidden" id="notre-mission">
                    <div className="absolute inset-0 z-0">
                        {/* Motif abstrait / Halos */}
                        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#8CC63F]/20 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite]" />
                        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-[#18448F]/10 rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite_reverse]" />
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 invert" />
                    </div>

                    <div className="relative z-10 container mx-auto px-6 text-center">
                        <span className="inline-block py-1 px-4 bg-[#18448F] text-white rounded-full font-bold tracking-[0.2em] uppercase text-xs mb-10 shadow-sm">Notre Mission de l'employeur</span>
                        <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold text-[#18448F] tracking-tighter leading-tight mb-12">
                            L'excellence par <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] to-blue-500 italic font-light">l'humain.</span>
                        </h2>
                        <div className="text-slate-700 text-xl md:text-3xl font-light leading-relaxed max-w-4xl mx-auto space-y-6">
                            <p>
                                Chez Bricareau, nous savons que notre technologie de pointe n'est rien sans le talent des hommes et des femmes qui la conçoivent, l'installent et la soutiennent.
                            </p>
                            <p>
                                Nous offrons bien plus qu'un emploi : nous offrons une carrière stimulante, des défis techniques constants et la fierté de participer activement à la protection de la santé et de l'environnement.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. NOS PILIERS (Avantages): Split Screen */}
                <section className="py-32 bg-slate-50 relative overflow-hidden" id="nos-piliers">
                    <div className="container mx-auto px-6 mb-24 text-center">
                        <span className="inline-block py-1 px-4 bg-[#18448F] text-white rounded-full font-bold tracking-[0.2em] uppercase text-xs mb-6">Pourquoi Bricareau ?</span>
                        <h2 className="text-4xl md:text-6xl font-sans font-bold text-[#18448F] tracking-tight mb-8">
                            Votre carrière, <br />
                            <span className="text-[#8CC63F]">notre priorité.</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-light leading-relaxed max-w-3xl mx-auto">
                            En tant que leader dans le traitement de l'eau au Québec, Bricareau se spécialise dans l'installation de systèmes de filtration avancés, d'adoucisseurs d'eau et de purificateurs. Nous recrutons des professionnels engagés pour offrir une eau pure et sécuritaire aux secteurs résidentiel, commercial et industriel.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto space-y-32">
                        {/* Pilier 01 */}
                        <div className="flex flex-col lg:flex-row items-center gap-16 px-6">
                            <div className="lg:w-1/2 space-y-6">
                                <div className="text-5xl md:text-6xl font-light text-[#18448F]/20 mb-2">01.</div>
                                <h3 className="text-3xl lg:text-5xl font-light text-slate-900 leading-tight">
                                    Impact <span className="font-bold text-[#18448F]">Environnemental</span>
                                </h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-light">
                                    Donnez du sens à votre travail. Chaque système que vous installez ou vendez contribue directement à réduire la pollution plastique et à améliorer la santé des Québécois.
                                </p>
                            </div>
                            <div className="lg:w-1/2 w-full aspect-square md:aspect-video lg:aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 bg-[#18448F]/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700" />
                                <img src={imgImpact} alt="Impact Environnemental" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
                            </div>
                        </div>

                        {/* Pilier 02 */}
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 px-6">
                            <div className="lg:w-1/2 w-full aspect-square md:aspect-video lg:aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 bg-[#8CC63F]/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700" />
                                <img src={imgFormation} alt="Développement Continu" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
                            </div>
                            <div className="lg:w-1/2 space-y-6">
                                <div className="text-5xl md:text-6xl font-light text-[#18448F]/20 mb-2">02.</div>
                                <h3 className="text-3xl lg:text-5xl font-light text-slate-900 leading-tight">
                                    Développement <span className="font-bold text-[#8CC63F]">Continu</span>
                                </h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-light">
                                    L'ingénierie évolue, nous aussi. Nous investissons massivement dans la formation continue de nos équipes pour maintenir notre standard d'expertise au plus haut niveau.
                                </p>
                            </div>
                        </div>

                        {/* Pilier 03 */}
                        <div className="flex flex-col lg:flex-row items-center gap-16 px-6">
                            <div className="lg:w-1/2 space-y-6">
                                <div className="text-5xl md:text-6xl font-light text-[#18448F]/20 mb-2">03.</div>
                                <h3 className="text-3xl lg:text-5xl font-light text-slate-900 leading-tight">
                                    Équipe <span className="font-bold text-[#18448F]">d'Experts</span>
                                </h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-light">
                                    Évoluez aux côtés des meilleurs. Notre culture d'entreprise valorise le mentorat, le partage de connaissances et la rigueur technique dans un environnement convivial.
                                </p>
                            </div>
                            <div className="lg:w-1/2 w-full aspect-square md:aspect-video lg:aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 bg-[#18448F]/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700" />
                                <img src={imgTeam} alt="Équipe d'Experts" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* NOS OFFRES - Added a clean section for job postings */}
                <section className="py-24 bg-white border-t border-slate-200">
                     <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="inline-block py-1 px-4 bg-[#18448F] text-white rounded-full font-bold tracking-[0.2em] uppercase text-xs mb-6">Emplois</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#18448F] mb-6 tracking-tight">
                                Nos offres d'emploi
                            </h2>
                            <p className="text-lg text-slate-600 font-light leading-relaxed">
                                Découvrez nos postes ouverts et faites le premier pas vers une carrière florissante.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-6">
                            {jobs.map((job) => (
                                <div key={job.id} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-[#8CC63F] hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between group">
                                    <div className="mb-6 md:mb-0">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-sm font-medium text-[#18448F] bg-[#18448F]/5 px-3 py-1 rounded-full">
                                                {job.department}
                                            </span>
                                            <span className="text-sm font-medium text-[#8CC63F] bg-[#8CC63F]/10 px-3 py-1 rounded-full">
                                                {job.type}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#18448F] transition-colors">
                                            {job.title}
                                        </h3>
                                        <div className="flex items-center gap-6 text-slate-500 font-light">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="w-4 h-4" />
                                                <span>{job.experience}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <ProMaxButton variant="outline" className="w-full md:w-auto" onClick={() => navigate("/contact")}>
                                            Postuler <ArrowRight className="ml-2 w-4 h-4" />
                                        </ProMaxButton>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. CTA: Éditorial Aligné à Droite avec Image Full Width (Dark Mode) */}
                <section className="relative overflow-hidden min-h-[80vh] flex items-center py-32">
                    {/* Background Image Full Width */}
                    <div className="absolute inset-0 z-0">
                        <img src={imgCTA} alt="Candidature Bricareau" className="w-full h-full object-cover object-center" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/60 to-slate-900/95" />
                    </div>
                    
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 relative z-10">
                        <div className="md:col-span-6 md:col-start-7 space-y-10 md:pl-12">

                            <h2 className="text-[50px] leading-[55px] font-sans font-bold text-white mb-6 tracking-tight">
                                Rejoignez <br /><span className="text-[#8CC63F] font-sans font-bold drop-shadow-sm">l'aventure.</span>
                            </h2>
                            <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
                                Vous ne trouvez pas de poste correspondant à votre profil mais vous partagez notre vision de l'excellence ? Envoyez-nous votre candidature spontanée.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 items-center">
                                <ProMaxButton variant="white" className="px-12 h-16 shadow-[0_0_40px_rgba(255,255,255,0.2)] text-[#18448F] font-bold" onClick={() => navigate("/contact")}>ENVOYER MON CV</ProMaxButton>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};
