import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
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
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1200&auto=format&fit=crop"
              alt="Contact Bricareau"
              className="w-full h-full object-cover object-[center_35%]"
            />
            <div className="hidden lg:block absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
            <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
            <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 h-full flex items-center lg:px-6">
            <div className="max-w-2xl lg:text-white py-12 lg:py-0 text-left">
              <h1 className="leading-[1.1] md:leading-[1.2] mb-4 lg:mb-8 tracking-tighter text-slate-900 lg:text-white max-w-xl">
                Contactez-nous <br />
                Notre expertise à votre <span className="text-blue-600 lg:text-blue-400">service</span>.
              </h1>
              <p className="font-light text-slate-600 lg:text-white/95 mb-8 max-w-xl">
                Nous sommes là pour répondre à toutes vos questions sur le traitement de l'eau. Que ce soit pour un conseil technique ou une demande de soumission, nos experts vous accompagnent avec transparence.
              </p>
            </div>
          </div>
        </section>

        {/* 1.5 Navigation Cards Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <NavLink to="/faq" className="flex flex-col h-full group bg-white border border-slate-50 rounded-[2.5rem] p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2">
                <div className="overflow-hidden mb-8 rounded-3xl aspect-[16/10] bg-slate-50 relative">
                  <img src="/images/FAQ.jpg" alt="Foire aux questions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Foire aux questions
                </h3>
                <p className="body-pro-max text-sm mb-8 flex-grow text-slate-500 leading-relaxed font-light">
                  Vous n'avez pas envie de nous contacter, ou vous pensez que nous avons déjà répondu à votre question ? Consultez notre FAQ exhaustive pour des réponses immédiates.
                </p>
                <div className="pt-2">
                  <Button variant="outline" className="rounded-full px-6 border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all pointer-events-none">
                    Consultez la FAQ <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </NavLink>

              {/* Card 2 */}
              <NavLink to="/consultation" className="flex flex-col h-full group bg-white border border-slate-50 rounded-[2.5rem] p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2">
                <div className="overflow-hidden mb-8 rounded-3xl aspect-[16/10] bg-slate-50 relative">
                  <img src="/images/40-AdobeStock_365603381.jpeg" alt="Consultation gratuite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Demande de consultation
                </h3>
                <p className="body-pro-max text-sm mb-8 flex-grow text-slate-500 leading-relaxed font-light">
                  Pour planifier une consultation gratuite, discuter de l'installation d'un nouveau système ou obtenir une soumission personnalisée, nos experts sont à votre disposition.
                </p>
                <div className="pt-2">
                  <Button variant="outline" className="rounded-full px-6 border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all pointer-events-none">
                    Planifiez une consultation <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </NavLink>

              {/* Card 3 */}
              <NavLink to="/contact-form" className="flex flex-col h-full group bg-white border border-slate-50 rounded-[2.5rem] p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2">
                <div className="overflow-hidden mb-8 rounded-3xl aspect-[16/10] bg-slate-50 relative">
                  <img src="/images/SERVICES.jpg" alt="Support client & Entretien" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Support client & Entretien
                </h3>
                <p className="body-pro-max text-sm mb-8 flex-grow text-slate-500 leading-relaxed font-light">
                  Si vous êtes déjà client Bricareau et que vous avez besoin d'aide avec votre système actuel ou pour planifier un entretien de routine par nos techniciens.
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
