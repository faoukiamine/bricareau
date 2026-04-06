import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, CheckCircle2, ChevronRight, ChevronLeft, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

import { useSearchParams } from "react-router-dom";

const UNSUBSCRIBE_REASONS = [
    { id: "too_many", label: "Je reçois trop de courriels" },
    { id: "irrelevant", label: "Le contenu n'est plus pertinent" },
    { id: "not_subscribed", label: "Je ne me suis jamais abonné" },
    { id: "found_alternative", label: "J'ai trouvé une autre solution" },
    { id: "other", label: "Autre (veuillez préciser)" }
];

const Desabonnement = () => {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        document.title = "Désabonnement | Bricareau Traitement d'Eau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Gérez vos préférences de communication avec Bricareau. Formulaire de désabonnement rapide et simple.");
        }

        // Handle errors from confirmation link
        const error = searchParams.get("error");
        if (error === "invalid_token") {
            toast.error("Le lien de désabonnement est invalide ou a expiré. Veuillez soumettre une nouvelle demande.");
        } else if (error === "missing_token") {
            toast.error("Jeton de désabonnement manquant.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Désabonnement - Bricareau");
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", "https://bricareau.com/desabonnement");
    }, [searchParams]);

    const [step, setStep] = useState(1);

    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [otherDetails, setOtherDetails] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [successMessage, setSuccessMessage] = useState("");

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        if (!reason) {
            toast.error("Veuillez sélectionner un motif de désabonnement.");
            return;
        }
        if (reason === "other" && !otherDetails.trim()) {
            toast.error("Veuillez préciser la raison.");
            return;
        }
        setStep(2);
    };

    const handleUnsubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            toast.error("Veuillez entrer votre adresse courriel.");
            return;
        }

        setIsSubmitting(true);
        try {
            const { data, error: fnError } = await supabase.functions.invoke('resend-unsubscribe-contact', {
                body: { email, reason, details: otherDetails }
            });

            if (fnError) throw fnError;

            setSuccessMessage(data.message || "");
            setIsSuccess(true);

            if (data.message === "Already unsubscribed") {
                toast.success("Vous êtes déjà désabonné.");
            } else {
                toast.success("Un courriel de confirmation vous a été envoyé.");
            }
        } catch (error) {
            toast.error("Une erreur est survenue. Veuillez réessayer plus tard.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-[#1a3a5a]">
            <Header />
            <main>
                <div className="container mx-auto px-4 py-6">
                    <GlobalBreadcrumbs />
                </div>

                <div className="container mx-auto px-4 py-12 max-w-2xl font-sans text-center">
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold uppercase tracking-wide text-[#1a5a8a] mb-4">
                            Désabonnement
                        </h1>
                        <p className="text-gray-600">
                            Nous sommes désolés de vous voir partir. Aidez-nous à nous améliorer en nous indiquant la raison de votre départ.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300">
                        {isSuccess ? (
                            <div className="space-y-6 animate-in fade-in zoom-in duration-500">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                    {successMessage === "Already unsubscribed" ? (
                                        <CheckCircle2 className="w-8 h-8 text-blue-600" />
                                    ) : (
                                        <Mail className="w-8 h-8 text-blue-600" />
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    {successMessage === "Already unsubscribed"
                                        ? "Déjà désabonné"
                                        : "Action requise : Vérifiez vos courriels"}
                                </h3>
                                <div className="text-gray-600 space-y-4">
                                    {successMessage === "Already unsubscribed" ? (
                                        <p>
                                            L'adresse <strong>{email}</strong> est déjà retirée de nos listes de diffusion marketing.
                                        </p>
                                    ) : (
                                        <>
                                            <p>
                                                Pour finaliser votre désabonnement, nous avons envoyé un lien de confirmation à l'adresse <strong>{email}</strong>.
                                            </p>
                                            <p className="text-sm border-t border-gray-200 pt-4 mt-4">
                                                Veuillez cliquer sur le bouton dans le courriel pour confirmer votre choix. Si vous ne le voyez pas, vérifiez votre dossier de courriels indésirables.
                                            </p>
                                        </>
                                    )}
                                </div>
                                <Button
                                    onClick={() => window.location.href = "/"}
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
                                >
                                    Retour à l'accueil
                                </Button>
                            </div>
                        ) : (
                            <div className="max-w-md mx-auto">
                                {step === 1 ? (
                                    <form onSubmit={handleNextStep} className="space-y-6 text-left animate-in fade-in slide-in-from-right-4 duration-300">
                                        <Label className="font-bold text-sm block mb-4">Pourquoi souhaitez-vous vous désabonner ?*</Label>
                                        <div className="space-y-3">
                                            {UNSUBSCRIBE_REASONS.map((r) => (
                                                <div
                                                    key={r.id}
                                                    onClick={() => setReason(r.id)}
                                                    className={cn(
                                                        "p-4 rounded-xl border-2 cursor-pointer transition-all hover:bg-white flex items-center gap-3",
                                                        reason === r.id
                                                            ? "border-blue-600 bg-white"
                                                            : "border-transparent bg-white/50"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                                                        reason === r.id ? "border-blue-600" : "border-gray-300"
                                                    )}>
                                                        {reason === r.id && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
                                                    </div>
                                                    <span className={cn(
                                                        "text-sm",
                                                        reason === r.id ? "text-blue-900 font-bold" : "text-gray-600"
                                                    )}>{r.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {reason === "other" && (
                                            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300 mt-4">
                                                <Label htmlFor="details" className="text-xs font-bold text-gray-500">Précisez votre raison</Label>
                                                <Textarea
                                                    id="details"
                                                    placeholder="Dites-nous en plus..."
                                                    value={otherDetails}
                                                    onChange={(e) => setOtherDetails(e.target.value)}
                                                    className="bg-white rounded-xl min-h-[100px]"
                                                />
                                            </div>
                                        )}

                                        <Button
                                            type="submit"
                                            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all group"
                                        >
                                            Suivant <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </form>
                                ) : (
                                    <form onSubmit={handleUnsubscribe} className="space-y-6 text-left animate-in fade-in slide-in-from-right-4 duration-300">
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="font-bold text-sm">Confirmez votre adresse courriel*</Label>
                                            <p className="text-xs text-gray-500 mb-2">Entrez l'adresse à laquelle vous recevez nos courriels pour finaliser le désabonnement.</p>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="votre@email.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="h-12 bg-white rounded-xl"
                                                autoFocus
                                            />
                                        </div>

                                        <div className="flex gap-4">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => setStep(1)}
                                                className="h-12 rounded-full border-gray-300 px-6"
                                            >
                                                <ChevronLeft className="mr-2 w-4 h-4" /> Retour
                                            </Button>
                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Finalisation...
                                                    </>
                                                ) : (
                                                    "Confirmer le désabonnement"
                                                )}
                                            </Button>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-4 text-center italic">
                                            Nous traiterons votre demande immédiatement.
                                        </p>
                                    </form>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Desabonnement;
