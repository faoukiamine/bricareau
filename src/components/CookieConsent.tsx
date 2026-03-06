import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const consent = localStorage.getItem('cookieConsent');
            if (!consent) {
                setIsVisible(true);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div
                className={cn(
                    "bg-white dark:bg-card w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-border animate-in zoom-in-95 slide-in-from-bottom-4 duration-500",
                    "p-6 md:p-8 relative"
                )}
            >
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                        <ShieldCheck className="w-8 h-8 text-primary" />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                        Le respect de votre vie privée est important
                    </h2>

                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                        Nous et nos partenaires de confiance utilisons des témoins pour vous offrir une expérience de magasinage personnalisée et pour améliorer continuellement notre site Web.
                    </p>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Pour plus d'informations ou pour gérer vos préférences, veuillez consulter notre{' '}
                        <a
                            href="/politique-de-confidentialite"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium"
                        >
                            politique de confidentialité
                        </a>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 w-full pt-4">
                        <Button
                            onClick={handleAccept}
                            className="flex-1 bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            J’accepte
                        </Button>
                        <Button
                            variant="outline"
                            onClick={handleDecline}
                            className="flex-1 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 py-6 text-lg rounded-xl transition-all"
                        >
                            Je refuse
                        </Button>
                    </div>
                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    aria-label="Fermer"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
