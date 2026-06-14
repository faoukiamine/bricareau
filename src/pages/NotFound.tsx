import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertCircle, Factory, Building2, Wrench, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "Page Introuvable | Bricareau Traitement d'Eau";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Désolé, la page que vous recherchez sur Bricareau.com n'existe pas ou a été déplacée. Retournez à l'accueil pour explorer nos solutions de traitement d'eau.");
    }
    
    // Noindex for 404 pages is good practice
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, follow');
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#f8f9ff] flex flex-col font-sans selection:bg-[#dbe1ff] selection:text-[#00174b]">
      <Header />

      <main className="flex-1 pt-24 pb-12 px-6 flex flex-col justify-center max-w-7xl mx-auto w-full">
        {/* Hero Section: Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#4059aa] font-bold inline-block border-l-4 border-[#004ac6] pl-4">Erreur 404</span>
              <h1 className="text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] font-sans font-light italic text-[#0d1c2e] mb-6 tracking-tight">
    Page introuvable <span className="text-[#8CC63F] font-sans font-bold not-italic drop-shadow-lg">dans le circuit</span>.
</h1>
              <p className="text-lg text-[#434655] leading-relaxed max-w-xl">
                Il semble que le flux d'information ait été interrompu. Cette page a peut-être été filtrée lors d'une mise à jour technique ou déplacée vers une nouvelle section de notre infrastructure.
              </p>
            </div>

            {/* Primary Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                className="bg-gradient-to-br from-[#004ac6] to-[#18448F] text-white px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all w-full sm:w-auto"
                to="/"
              >
                <Home className="h-5 w-5" />
                Retourner à la source (Accueil)
              </Link>
              <Link
                className="bg-[#dce9ff] text-[#264191] px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all w-full sm:w-auto"
                to="/contact"
              >
                Consulter l'aide technique
              </Link>
            </div>
          </div>

          {/* Right: Technical Hero Image */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] shadow-2xl outline outline-1 outline-[#c3c6d7]/15">
              <img
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8zKsH683zkUlc99xrqsjgqf-zJlCsedlQFmnea1DrpYodWXOK3m7zTwKD5nfuLV93bFBTH84l3x9-vNSqz7y_PdMkAu7RT_2etn5IpGfDelVJ1cdU0hAfJMtOQT0xvweS73JG8w_SjwoFhV6GIvqe0Pa7PKONriA55SZBrhwelSPAKr6Eo8M3EPk8Aw1FuG1VMLxIj8BZx4oEQCnAKl5B8CYX2Oa9KnG58mCZHzG0d73PCCAJrWqHjjyNNM5-PcRfpuXkcwZaCCB1"
               alt="High-tech industrial water filtration system - traitement d'eau Québec" title="Traitement d'eau Québec par Bricareau" />

              {/* Measurement Overlay Component */}
              <div className="absolute top-10 left-10 p-4 bg-white/80 backdrop-blur-md rounded-lg outline outline-1 outline-[#c3c6d7]/15">
                <div className="flex items-center gap-3">
                  <AlertCircle className="text-[#004ac6] h-6 w-6" fill="currentColor" stroke="white" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#4059aa] font-bold">État du Flux</p>
                    <p className="text-sm font-bold text-[#004ac6]">Interruption Détectée</p>
                  </div>
                </div>
              </div>

              {/* Technical Annotation */}
              <div className="absolute bottom-10 right-10 hidden md:block">
                <div className="flex flex-col items-end gap-1">
                  <div className="w-24 h-[1px] bg-[#004ac6]/40"></div>
                  <p className="text-[10px] font-mono text-[#18448F] bg-[#d5e3fc] px-2 py-1">COORD_REF: 404_NOT_FOUND</p>
                </div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#004ac6]/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-[#4059aa]/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Quick Access Categories: Bento-ish Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link className="bg-[#eff4ff] p-8 rounded-2xl hover:bg-[#d5e3fc] transition-colors group cursor-pointer" to="/commercial-industriel">
            <Factory className="text-[#004ac6] mb-4 h-8 w-8" />
            <h3 className="text-xl font-bold mb-2 text-[#0d1c2e]">Industrie</h3>
            <p className="text-sm text-[#434655]">Traitements à haut débit pour les infrastructures industrielles complexes.</p>
            <div className="mt-6 flex items-center gap-2 text-[#004ac6] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Explorer <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
          <Link className="bg-[#eff4ff] p-8 rounded-2xl hover:bg-[#d5e3fc] transition-colors group cursor-pointer" to="/adoucisseurs">
            <Building2 className="text-[#004ac6] mb-4 h-8 w-8" />
            <h3 className="text-xl font-bold mb-2 text-[#0d1c2e]">Résidentiel</h3>
            <p className="text-sm text-[#434655]">Solutions d'adoucissement et de filtration pour le confort de l'habitat.</p>
            <div className="mt-6 flex items-center gap-2 text-[#004ac6] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Explorer <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
          <Link className="bg-[#eff4ff] p-8 rounded-2xl hover:bg-[#d5e3fc] transition-colors group cursor-pointer" to="/service">
            <Wrench className="text-[#004ac6] mb-4 h-8 w-8" />
            <h3 className="text-xl font-bold mb-2 text-[#0d1c2e]">Maintenance</h3>
            <p className="text-sm text-[#434655]">Services d'entretien périodique et pièces détachées d'origine.</p>
            <div className="mt-6 flex items-center gap-2 text-[#004ac6] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Explorer <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
