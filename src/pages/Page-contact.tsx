import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock, PhoneCall, Calendar, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { 
    ShieldCheck, 
    CheckCircle2, 
    Award, 
    MessageSquare,
    Smartphone 
} from "lucide-react";
import contactHero from "@/assets/126171.jpg";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <section className="relative lg:h-[850px] flex flex-col lg:items-center overflow-hidden bg-white lg:pt-32">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>
                    <div className="relative lg:absolute lg:inset-0 h-[350px] sm:h-[450px] lg:h-full w-full lg:z-0 overflow-hidden">
                        <img
                            src={contactHero}
                            alt="Service client Bricareau"
                            className="w-full h-full object-cover object-[center_35%] opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#f0f9ff] via-[#f0f9ff]/40 35% to-transparent z-10" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 h-full flex items-start pt-12 lg:pt-0 lg:items-center lg:px-6">
                        <div className="max-w-3xl text-left space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-[10px] font-black uppercase tracking-[0.2em] w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Support Technique en ligne • Temps de réponse &lt; 15 min
                            </div>
                            <h1 className="leading-[1.1] md:leading-[1.2] tracking-tighter text-slate-900 max-w-2xl">
                                <span className="italic font-light text-[#2563eb] block mb-2">Planifiez votre</span>
                                <span className="font-bold text-[#1e3a8a] block">rendez-vous de service.</span>
                            </h1>
                            <p className="font-light text-slate-600 max-w-xl text-lg leading-relaxed">
                                Besoin d'une installation, d'une réparation ou d'un simple changement de filtres ? 
                                Nos experts interviennent partout au Grand Montréal et ses environs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. CONTACT FORM SECTION */}
                <section id="contact-form" className="py-20 lg:pb-32 bg-slate-50 relative scroll-mt-32">
                     {/* Background Watermark */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[22rem] font-black text-slate-200/10 select-none pointer-events-none tracking-tighter z-0 uppercase">
                        SUPPORT
                    </div>

                    <div className="container mx-auto px-6 relative z-10 lg:-translate-y-32">
                        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-stretch gap-16 lg:gap-20">
                            {/* Left Icons Column - Staggered Reveal */}
                            <div className="lg:w-1/3 flex flex-col justify-end space-y-6">
                                {[
                                    { 
                                        icon: PhoneCall, 
                                        title: "Appel sans frais", 
                                        content: "1-855-264-9328", 
                                        sub: "Ligne prioritaire 24/7",
                                        delay: "delay-100" 
                                    },
                                    { 
                                        icon: Calendar, 
                                        title: "Disponibilités", 
                                        content: "Lun - Ven : 8h00 - 18h00", 
                                        sub: "Service à domicile rapide",
                                        delay: "delay-200" 
                                    },
                                    { 
                                        icon: MapPin, 
                                        title: "Zone d'intervention", 
                                        content: "Grand Montréal & Environs", 
                                        sub: "Périmètre de 300km (Rayon Local)",
                                        delay: "delay-300",
                                        isMap: true
                                    }
                                ].map((item, i) => (
                                    <div key={i} className={cn(
                                        "flex flex-col bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-sm border border-slate-100 w-full group hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-left-8", 
                                        item.delay
                                    )}>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 group-hover:rotate-3 transition-all">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div className="text-left">
                                                <h4 className="font-bold text-slate-900 text-sm tracking-tight">{item.title}</h4>
                                                <p className={cn("text-lg font-bold leading-none", item.isMap ? "text-slate-800" : "text-blue-600")}>{item.content}</p>
                                                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mt-1 opacity-60">{item.sub}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                                <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-200 animate-in fade-in slide-in-from-left-12 delay-500">
                                    <h4 className="font-bold text-lg mb-2">Besoin d'aide immédiate?</h4>
                                    <p className="text-white/80 text-sm font-light mb-6">Nos techniciens sont prêts à répondre à vos questions techniques complexes dès maintenant.</p>
                                    <Button variant="outline" className="w-full rounded-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-600 border-none h-12 font-bold">
                                        <MessageSquare className="w-4 h-4 mr-2" /> Clavardage en direct
                                    </Button>
                                </div>
                            </div>

                            {/* Right Form Card */}
                            <div className="lg:w-2/3 w-full">
                                <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
                                     <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/5 rounded-full -z-10 animate-pulse" />
                                    
                                     <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2 text-left">
                                            <Label htmlFor="fname" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Prénom*</Label>
                                            <Input id="fname" className="h-14 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner" />
                                        </div>
                                        <div className="space-y-2 text-left">
                                            <Label htmlFor="lname" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Nom*</Label>
                                            <Input id="lname" className="h-14 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner" />
                                        </div>
                                        <div className="space-y-2 text-left lg:col-span-2">
                                            <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Courriel*</Label>
                                            <Input id="email" type="email" className="h-14 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner" />
                                        </div>
                                        <div className="space-y-2 text-left">
                                            <Label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Téléphone*</Label>
                                            <Input id="phone" type="tel" className="h-14 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner" />
                                        </div>
                                        <div className="space-y-2 text-left">
                                            <Label htmlFor="interest" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Service requis*</Label>
                                            <Select>
                                                <SelectTrigger className="h-14 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner">
                                                    <SelectValue placeholder="Choisir un service" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="test">Analyse d'eau</SelectItem>
                                                    <SelectItem value="maintenance">Entretien & Maintenance</SelectItem>
                                                    <SelectItem value="install">Installation & Mise en service</SelectItem>
                                                    <SelectItem value="repair">Réparations d'urgence</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="md:col-span-2 space-y-2 text-left">
                                            <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Détails de votre demande</Label>
                                            <Textarea id="message" className="min-h-[120px] bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-inner" />
                                        </div>
                                        <div className="md:col-span-2 space-y-4 pt-4">
                                            <div className="flex items-start space-x-4 bg-slate-50 p-6 rounded-[2rem] border border-slate-100 transition-all hover:bg-slate-100/50">
                                                <Checkbox id="legal_consent" className="mt-1 border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" required />
                                                <Label htmlFor="legal_consent" className="text-xs leading-relaxed text-slate-500 font-light cursor-pointer select-none" style={{ textAlign: 'justify' }}>
                                                    En cochant cette case ou en utilisant le site web Bricareau.com, vous reconnaissez avoir lu les <NavLink to="/conditions-utilisation" className="text-blue-600 font-bold hover:underline">Conditions générales</NavLink> et la <NavLink to="/politique-de-confidentialite" className="text-blue-600 font-bold hover:underline">Politique de confidentialité</NavLink>, les comprendre et accepter d'y être lié.*
                                                </Label>
                                            </div>

                                            <div className="flex items-start space-x-4 bg-slate-50 p-6 rounded-[2rem] border border-slate-100 transition-all hover:bg-slate-100/50">
                                                <Checkbox id="marketing_consent" className="mt-1 border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
                                                <Label htmlFor="marketing_consent" className="text-xs leading-relaxed text-slate-500 font-light cursor-pointer select-none">
                                                    Je souhaite recevoir les prochaines communications de Bricareau. (Vous pouvez vous désabonner à tout moment.)
                                                </Label>
                                            </div>
                                        </div>

                                         <div className="md:col-span-2 text-left pt-6 border-t border-slate-200 mt-4 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                             <Button className="rounded-full px-12 h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-200 group shrink-0">
                                                 Envoyez
                                                 <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                             </Button>

                                         </div>
                                     </form>
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

export default Contact;
