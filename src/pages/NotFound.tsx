import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Search, Home, Hammer, Layers, TreePine } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 pt-24 flex flex-col md:flex-row items-stretch">
        <div className="flex-1 px-8 md:px-16 py-12 flex flex-col justify-center">
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-muted text-primary font-bold text-xs tracking-widest uppercase rounded">
                Erreur 404
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-none">
                Page égarée sur <span className="text-primary">le chantier !</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Il semblerait que les plans aient été mal lus. La page que vous cherchez a peut-être été déplacée ou n'existe plus.
              </p>
            </div>

            <div className="relative max-w-md group">
              <input
                className="w-full h-14 pl-12 pr-4 bg-muted border-none rounded-xl focus:ring-0 focus:bg-slate-200 dark:focus:bg-slate-800 transition-all text-foreground placeholder:text-muted-foreground"
                placeholder="Rechercher un produit ou un guide..."
                type="text"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary group-focus-within:scale-110 transition-transform h-5 w-5" />
              <div className="absolute left-0 bottom-0 h-1 w-0 bg-primary group-focus-within:w-full transition-all duration-300"></div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                className="px-8 py-4 bg-gradient-to-br from-primary to-blue-700 text-primary-foreground rounded-lg font-bold text-sm tracking-widest uppercase hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center gap-2"
                to="/"
              >
                <Home className="h-5 w-5" />
                RETOURNER À L'ACCUEIL
              </Link>
            </div>

            <div className="pt-8">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
                Continuer l'exploration
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link className="group p-6 bg-muted rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-all flex flex-col items-center text-center gap-3" to="/adoucisseurs">
                  <div className="w-12 h-12 bg-background flex items-center justify-center rounded-full text-primary group-hover:scale-110 transition-transform">
                    <Hammer className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold text-foreground">Outillage</span>
                </Link>
                <Link className="group p-6 bg-muted rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-all flex flex-col items-center text-center gap-3" to="/filtration">
                  <div className="w-12 h-12 bg-background flex items-center justify-center rounded-full text-primary group-hover:scale-110 transition-transform">
                    <Layers className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold text-foreground">Matériaux</span>
                </Link>
                <Link className="group p-6 bg-muted rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-all flex flex-col items-center text-center gap-3" to="/solutions">
                  <div className="w-12 h-12 bg-background flex items-center justify-center rounded-full text-primary group-hover:scale-110 transition-transform">
                    <TreePine className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold text-foreground">Jardin</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-1/3 relative overflow-hidden bg-muted">
          <img
            alt="High-end construction site"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6yAMP5TBYBAS5yuJBzKmKfIxCGaVuSO3OvyHxBkMce_MAkogwdR6_t4cSpmVe5mZ-Hrp98RibXllbkp5yBDv87NddHAGtx-tfgWiinILJTq5jo1aEMOSLKd5lKOuVe4xLfzPPNrJAn46SEysYX9fdnYBhE3kDi_-470-hwh17itAwAXB9I6BSmTQeomvxcG6awE8Sd1q84blpNfvZ1GfjA52tkxYTBqzD0nKQzp1CZ60LR-WK_mUvKiv8za8hJtlbtAVoG-FN7CbE"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
          <div className="absolute bottom-12 right-12 text-right">
            <div className="bg-background/80 backdrop-blur-md p-6 rounded-xl border-l-4 border-primary">
              <span className="text-4xl font-black text-primary block leading-none mb-2">404</span>
              <span className="text-sm font-bold text-foreground uppercase tracking-widest">Zone en travaux</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
