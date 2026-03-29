import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { NavLink } from "react-router-dom";

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

                {/* 2. Contact Info & Form */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div>
                                    <h2
                                        className="text-slate-900 mb-8 md:leading-[48px]"
                                        style={{ fontStyle: 'normal' }}
                                    >
                                        Informations de contact
                                    </h2>
                                    <p className="text-muted-foreground mb-8">
                                        N'hésitez pas à nous contacter par téléphone, email ou en remplissant
                                        le formulaire. Nous vous répondrons dans les plus brefs délais.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-foreground mb-1">Téléphone</h3>
                                            <a href="tel:18552649328" className="text-muted-foreground hover:text-primary transition-colors">
                                                1 855 264 9328
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-foreground mb-1">Adresse</h3>
                                            <p className="text-muted-foreground">
                                                4180 Avenue de Courtrai Suite 100
                                                Montréal, QC H3S 1C3
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Clock className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-foreground mb-1">Heures d'ouverture</h3>
                                            <div className="text-muted-foreground space-y-1">
                                                <p>Lundi - Vendredi: 8h30 - 17h00</p>
                                                <p>Sur rendez-vous</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Contact Form */}
                            <div id="contact-form" className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl relative z-10 border border-gray-100 scroll-mt-24">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-bold text-foreground mb-2">
                                                Prénom
                                            </label>
                                            <Input id="firstName" className="h-12 bg-gray-50 border-none" placeholder="Votre prénom" />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-bold text-foreground mb-2">
                                                Nom
                                            </label>
                                            <Input id="lastName" className="h-12 bg-gray-50 border-none" placeholder="Votre nom" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                                            Email
                                        </label>
                                        <Input id="email" type="email" className="h-12 bg-gray-50 border-none" placeholder="votre@email.com" />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">
                                            Téléphone
                                        </label>
                                        <Input id="phone" type="tel" className="h-12 bg-gray-50 border-none" placeholder="(xxx) xxx-xxxx" />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-2">
                                            Sujet
                                        </label>
                                        <Input id="subject" className="h-12 bg-gray-50 border-none" placeholder="Comment pouvons-nous vous aider ?" />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            placeholder="Décrivez votre besoin..."
                                            className="min-h-[150px] bg-gray-50 border-none"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <div className="flex flex-row items-start space-x-3 space-y-0 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <Checkbox id="consent" required />
                                            <div className="space-y-1 leading-none">
                                                <label htmlFor="consent" className="text-xs text-gray-600 font-normal leading-relaxed cursor-pointer block" style={{ textAlign: 'justify' }}>
                                                    Je souhaite recevoir les prochaines communications de Bricareau. (Vous pouvez vous désabonner à tout moment.)<br />
                                                    En cochant cette case ou en utilisant le site web Bricareau.com, vous reconnaissez avoir lu les <NavLink to="/conditions-generales-utilisation" className="underline hover:text-blue-700 transition-colors">Conditions générales</NavLink> et la <NavLink to="/politique-de-confidentialite" className="underline hover:text-blue-700 transition-colors">Politique de confidentialité</NavLink>, les comprendre et accepter d'y être lié.*
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-fit h-12 rounded-full px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors shadow-lg hover:shadow-xl"
                                    >
                                        Envoyer le message
                                    </Button>
                                </form>
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
