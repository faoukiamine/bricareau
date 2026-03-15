import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
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
        {/* Hero Section (Redesigned for Mobile) */}
        <section className="relative lg:h-[700px] bg-white overflow-hidden flex flex-col lg:items-center">
          <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none">
            <div className="container mx-auto px-6 max-w-5xl pointer-events-auto">
              <GlobalBreadcrumbs variant="light" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            {/* Mobile Image */}
            <div className="lg:hidden w-full h-[300px] relative">
              <img
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1200&auto=format&fit=crop"
                alt="Contact Bricareau"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 max-w-5xl h-full flex items-center">
              <div className="py-12 lg:py-0 w-full">
                <h1
                  className="text-[32px] md:text-[52px] leading-tight text-slate-900 mb-6 tracking-tight"
                  style={{
                    fontWeight: 350
                  }}
                >
                  <span className="text-blue-600">Contactez</span>-nous
                </h1>
                <p className="text-slate-600 max-w-2xl font-light">
                  Nous sommes là pour répondre à toutes vos questions sur le traitement de l'eau.
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
                <Button className="w-fit bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-full" asChild>
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
                <Button className="w-fit bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-full" asChild>
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
                <Button className="w-fit bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-full" asChild>
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
