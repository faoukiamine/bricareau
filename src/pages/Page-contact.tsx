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

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <section className="relative lg:h-[650px] flex flex-col lg:items-center overflow-hidden bg-white">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="dark" />
                        </div>
                    </div>
                    <div className="relative lg:absolute lg:inset-0 h-[350px] sm:h-[450px] lg:h-full w-full lg:z-0 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1200&auto=format&fit=crop"
                            alt="Service client Bricareau"
                            className="w-full h-full object-cover object-[center_35%]"
                        />
                        <div className="hidden lg:block absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 h-full flex items-center lg:px-6">
                        <div className="max-w-2xl lg:text-white py-12 lg:py-0 text-left">
                            <h1 className="leading-[1.1] md:leading-[1.2] mb-4 lg:mb-8 tracking-tighter text-slate-900 lg:text-white max-w-xl">
                                Parlons de votre <br />
                                <span className="text-blue-600 lg:text-blue-400">Projet d'eau</span>.
                            </h1>
                            <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl">
                                Une question ? Un projet ? Notre équipe d'experts est là pour vous conseiller
                                et vous accompagner dans le choix de votre système de traitement d'eau avec transparence et rigueur.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. CONTACT FORM SECTION */}
                <section id="contact-form" className="py-32 bg-slate-50 relative scroll-mt-24">
                     {/* Background Watermark */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[22rem] font-black text-slate-200/20 select-none pointer-events-none tracking-tighter z-0 uppercase">
                        SUPPORT
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
                            <h2 className="heading-pro-max">
                                <span className="italic font-light text-[#2563eb] block">Planifiez votre</span>
                                <span className="font-bold text-[#1e3a8a] block">rendez-vous de service.</span>
                            </h2>
                            <p className="body-pro-max max-w-2xl mx-auto">
                                Besoin d'une installation, d'une réparation ou d'un simple changement de filtres ? Nos experts interviennent sur tous les types d'équipements, au Grand Montréal et ses environs.
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
                            {/* Left Icons Column */}
                            <div className="lg:w-1/3 space-y-6">
                                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-100 w-full group hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                        <PhoneCall className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-slate-900 text-sm">Urgence technique</h4>
                                        <p className="text-blue-600 font-bold text-lg">1-855-264-9328</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-100 w-full group hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-slate-900 text-sm">Disponibilités</h4>
                                        <p className="text-slate-500 text-sm">Lun - Ven : 8h00 - 18h00</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-100 w-full group hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-slate-900 text-sm">Zone d'intervention</h4>
                                        <p className="text-slate-500 text-sm">Partout au Grand Montréal et ses environs (Périmètre de 300km)</p>
                                    </div>
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
                                                <Checkbox id="consent" className="mt-1 border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
                                                <Label htmlFor="consent" className="text-xs leading-relaxed text-slate-500 font-light cursor-pointer select-none">
                                                    En soumettant ce formulaire, j'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande. Pour en savoir plus, consultez nos <NavLink to="/conditions-utilisation" className="text-blue-600 font-bold hover:underline">Conditions d'utilisation</NavLink> et notre <NavLink to="/politique-de-confidentialite" className="text-blue-600 font-bold hover:underline">Politique de confidentialité</NavLink>.
                                                </Label>
                                            </div>
                                        </div>

                                        <div className="md:col-span-2 text-left pt-2">
                                            <Button className="rounded-full px-12 transition-all hover:scale-105 active:scale-95 group">
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
