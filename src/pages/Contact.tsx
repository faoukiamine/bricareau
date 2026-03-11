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

        {/* 1.5 Navigation Cards Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12">
              {/* Card 1 */}
              <div className="flex flex-col h-full bg-white group cursor-pointer">
                <div className="overflow-hidden mb-6 rounded-sm w-[574px] h-[384px] max-w-full">
                  <img src="/images/FAQ.jpg" alt="Foire aux questions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3
                  className="mb-4"
                  style={{ fontFamily: 'Speedee, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, color: 'rgb(41, 41, 41)', fontSize: '36px', lineHeight: '40px' }}
                >
                  Foire aux questions
                </h3>
                <p
                  className="mb-6 flex-grow"
                  style={{ fontFamily: 'Speedee, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, color: 'rgb(41, 41, 41)', fontSize: '16px', lineHeight: '24px' }}
                >
                  Vous n'avez pas envie de nous contacter, ou vous pensez que nous avons déjà répondu à votre question ? Consultez notre FAQ exhaustive.
                </p>
                <Button className="w-fit bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 h-12 rounded-full" asChild>
                  <NavLink to="/faq">Consultez la FAQ</NavLink>
                </Button>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col h-full bg-white group cursor-pointer">
                <div className="overflow-hidden mb-6 rounded-sm w-[574px] h-[384px] max-w-full">
                  <img src="/images/40-AdobeStock_365603381.jpeg" alt="Consultation gratuite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3
                  className="mb-4"
                  style={{ fontFamily: 'Speedee, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, color: 'rgb(41, 41, 41)', fontSize: '36px', lineHeight: '40px' }}
                >
                  Demande de consultation
                </h3>
                <p
                  className="mb-6 flex-grow"
                  style={{ fontFamily: 'Speedee, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, color: 'rgb(41, 41, 41)', fontSize: '16px', lineHeight: '24px' }}
                >
                  Pour planifier une consultation gratuite, discuter de l'installation d'un nouveau système ou obtenir une soumission, nos experts sont là.
                </p>
                <Button className="w-fit bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 h-12 rounded-full" asChild>
                  <NavLink to="/consultation">Planifiez une consultation</NavLink>
                </Button>
              </div>

              <div className="flex flex-col h-full bg-white group cursor-pointer">
                <div className="overflow-hidden mb-6 rounded-sm w-[574px] h-[384px] max-w-full">
                  <img src="/images/SERVICES.jpg" alt="Support client & Entretien" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3
                  className="mb-4"
                  style={{ fontFamily: 'Speedee, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, color: 'rgb(41, 41, 41)', fontSize: '36px', lineHeight: '40px' }}
                >
                  Support client & Entretien
                </h3>
                <p
                  className="mb-6 flex-grow"
                  style={{ fontFamily: 'Speedee, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, color: 'rgb(41, 41, 41)', fontSize: '16px', lineHeight: '24px' }}
                >
                  Si vous êtes déjà client Bricareau et que vous avez besoin d'aide avec votre système ou pour planifier un entretien de routine.
                </p>
                <Button className="w-fit bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 h-12 rounded-full" asChild>
                  <NavLink to="/contact-form">Contactez-nous</NavLink>
                </Button>
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
