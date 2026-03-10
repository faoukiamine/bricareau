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
        <div className="fixed bottom-0 right-0 sm:bottom-4 sm:right-4 z-[9999] p-4 w-full sm:max-w-[800px] animate-in slide-in-from-right-full sm:slide-in-from-bottom-8 duration-700">
            <div
                className={cn(
                    "bg-white/95 dark:bg-card/95 backdrop-blur-md w-full rounded-2xl shadow-2xl overflow-hidden border border-border/50 p-5 md:p-6 relative",
                    "hover:shadow-primary/5 transition-shadow duration-500"
                )}
            >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                    <div className="hidden md:flex w-12 h-12 bg-primary/10 rounded-full items-center justify-center shrink-0">
                        <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-2">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-tight flex items-center justify-center md:justify-start gap-2">
                            <ShieldCheck className="w-5 h-5 text-primary md:hidden" />
                            Confidentialité
                        </h2>

                        <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed max-w-2xl">
                            Nous utilisons des témoins pour améliorer votre expérience de navigation, diffuser des publicités ou des contenus personalisés et analyser notre trafic. En cliquant sur Tout accepter, vous consentez a l'utilisation de nos témoins.{' '}
                            <a
                                href="/politique-de-confidentialite"
                                className="text-primary hover:underline font-medium inline-block"
                            >
                                En savoir plus
                            </a>.
                        </p>
                    </div>

                    <div className="flex flex-row md:flex-col lg:flex-row gap-2 w-full md:w-auto shrink-0 self-center">
                         <Button
                            onClick={handleAccept}
                            className="flex-1 md:w-32 bg-primary hover:bg-primary/90 text-white h-11 text-sm font-semibold rounded-lg transition-all"
                        >   
                        Personnaliser
                        </Button>
                            <Button
                            onClick={handleAccept}
                            className="flex-1 md:w-32 bg-primary hover:bg-primary/90 text-white h-11 text-sm font-semibold rounded-lg transition-all"
                        >
                            Acccepter tout
                        </Button>
                        <Button
                            variant="outline"
                            onClick={handleDecline}
                            className="flex-1 md:w-32 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 h-11 text-sm font-semibold rounded-lg transition-all"
                        >
                            Refuser tout
                        </Button>
                    </div>
                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    aria-label="Fermer"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
