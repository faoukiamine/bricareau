import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { NavLink } from "react-router-dom";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* 1. Hero Section */}
                <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h1
                                className="mb-8 text-center max-w-xl mx-auto"
                                style={{ fontFamily: 'Speedee, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 700, color: 'rgb(41, 41, 41)', fontSize: '54px', lineHeight: '56px' }}
                            >
                                Contactez-nous
                            </h1>
                            <div className="mb-12 flex justify-center">
                                <p className="text-lg md:text-xl text-slate-700 max-w-4xl font-light leading-relaxed text-center">
                                    Vous recherchez des informations sur nos produits, planifier une analyse d'eau ou vous souhaitez simplement nous contacter ? Notre équipe se fera un plaisir de vous aider à trouver les réponses.
                                </p>
                            </div>
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
                                        className="text-[32px] md:text-[48px] font-normal text-slate-900 mb-8 leading-[1.2] md:leading-[48px] tracking-tighter"
                                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', fontStyle: 'normal' }}
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
                                            <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
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
                                            <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
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
                                            <h3 className="font-semibold text-foreground mb-1">Heures d'ouverture</h3>
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

                                    <Button
                                        type="submit"
                                        className="w-full md:w-auto h-12 rounded-full px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors shadow-lg hover:shadow-xl"
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
