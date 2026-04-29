import React, { useEffect } from "react";
import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ChevronRight, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import contactHero from "@/assets/118022.jpg";

const Contact = () => {
  useEffect(() => {
    document.title = "Contactez Bricareau | Service Client Traitement d'Eau au Québec";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Besoin d'aide pour votre eau ? Contactez l'équipe Bricareau par téléphone, courriel ou via notre formulaire. Experts en traitement d'eau à votre service partout au Québec.");
    }

    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Contactez Bricareau : Votre Expert Eau au Québec");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Une question ? Un projet ? Notre service client est là pour vous accompagner. Contactez-nous pour une eau plus pure dès aujourd'hui.");
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/contact");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative lg:h-[800px] flex flex-col lg:items-center overflow-hidden bg-white">
          <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none hidden lg:block">
            <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
              <GlobalBreadcrumbs variant="dark" />
            </div>
          </div>
          <div className="relative lg:absolute lg:inset-0 h-[350px] sm:h-[450px] lg:h-full w-full lg:z-0 overflow-hidden">
            <img
              src={contactHero}
              alt="Contact Bricareau"
              className="w-full h-full object-cover object-[center_35%] opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f0f9ff] via-[#f0f9ff]/40 35% to-transparent z-10" />
          </div>

          <div className="container relative z-10 mx-auto px-4 h-full flex items-center lg:px-6">
            <div className="max-w-2xl text-left py-12 lg:py-0">
              <h1 
                className="italic font-light tracking-tighter text-[#3d6aab] max-w-xl mb-4 lg:mb-8"
                style={{ 
                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    fontSize: '50px',
                    lineHeight: '55px',
                    fontWeight: 300 
                }}
              >
                <span className="italic font-light text-[#3d6aab] block">Contactez-nous.</span>
                <span className="font-bold text-[#3d6aab] block">Notre équipe est à votre écoute.</span>
              </h1>
              <p className="font-light text-slate-600 mb-8 max-w-xl text-lg leading-relaxed">
                Nous sommes là pour répondre à toutes vos questions sur le traitement de l'eau. Que ce soit pour un conseil technique ou une demande de soumission, nos experts vous accompagnent avec transparence.
              </p>
              <div className="flex flex-col sm:flex-row items-start lg:items-center gap-4 pt-4">
                <Button asChild className="w-fit">
                  <a href="tel:18552649328" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Appelez au 1 855 264 9328
                  </a>
                </Button>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-light">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span>Note de 4.9/5 par +20 000 familles au Québec</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1.5 Navigation Cards Section with Watermark */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            <span className="text-[15rem] md:text-[25rem] font-bold text-slate-100/40 opacity-30 leading-none">SUPPORT</span>
          </div>

          <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 - FAQ */}
              <NavLink 
                to="/faq" 
                className="flex flex-col h-full group bg-white border border-slate-100 rounded-[2.5rem] p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] hover:border-blue-200 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700 delay-0"
              >
                <div className="overflow-hidden mb-8 rounded-3xl aspect-[16/10] bg-slate-50 relative">
                  <img src="/images/FAQ.jpg" alt="Foire aux questions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-[#3d6aab] group-hover:text-blue-600 transition-colors">
                  Foire aux questions
                </h3>
                <p className="body-pro-max text-sm mb-8 flex-grow text-slate-500 leading-relaxed font-light">
                  Vous n'avez pas envie de nous contacter, ou vous pensez que nous avons déjà répondu à votre question ? Consultez notre FAQ exhaustive.
                </p>
                <div className="pt-2">
                  <Button variant="outline" className="rounded-full px-6 border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all pointer-events-none">
                    Consultez la FAQ <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </NavLink>

              {/* Card 2 - Consultation */}
              <NavLink 
                to="/consultation" 
                className="flex flex-col h-full group bg-white border border-slate-100 rounded-[2.5rem] p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] hover:border-blue-200 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700 delay-200"
              >
                <div className="overflow-hidden mb-8 rounded-3xl aspect-[16/10] bg-slate-50 relative">
                  <img src="/images/40-AdobeStock_365603381.jpeg" alt="Consultation gratuite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-[#3d6aab] group-hover:text-blue-600 transition-colors">
                  Demande de consultation
                </h3>
                <p className="body-pro-max text-sm mb-8 flex-grow text-slate-500 leading-relaxed font-light">
                  Pour obtenir une soumission personnalisée ou discuter d'un projet d'installation, nos experts sont à votre entière disposition.
                </p>
                <div className="pt-2">
                  <Button variant="outline" className="rounded-full px-6 border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all pointer-events-none">
                    Planifiez une consultation <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </NavLink>

              {/* Card 3 - Support */}
              <NavLink 
                to="/contact-form" 
                className="flex flex-col h-full group bg-white border border-slate-100 rounded-[2.5rem] p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] hover:border-blue-200 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700 delay-400"
              >
                <div className="overflow-hidden mb-8 rounded-3xl aspect-[16/10] bg-slate-50 relative">
                  <img src="/images/SERVICES.jpg" alt="Support client & Entretien" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-2 mb-3 bg-green-50 text-green-600 px-3 py-1 rounded-full w-fit text-[10px] font-bold uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  En ligne : Réponse &lt; 15 min
                </div>
                <h3 className="mb-4 text-xl font-bold text-[#3d6aab] group-hover:text-blue-600 transition-colors">
                  Support client & Entretien
                </h3>
                <p className="body-pro-max text-sm mb-8 flex-grow text-slate-500 leading-relaxed font-light">
                  Déjà client Bricareau ? Besoin d'aide technique ou de planifier un entretien de routine par nos techniciens certifiés.
                </p>
                <div className="pt-2">
                  <Button variant="outline" className="rounded-full px-6 border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all pointer-events-none">
                    Écrivez-nous <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </NavLink>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;
