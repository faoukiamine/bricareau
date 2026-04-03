import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

const UNSUBSCRIBE_REASONS = [
    { id: "too_many", label: "Je reçois trop de courriels" },
    { id: "irrelevant", label: "Le contenu n'est plus pertinent" },
    { id: "not_subscribed", label: "Je ne me suis jamais abonné" },
    { id: "found_alternative", label: "J'ai trouvé une autre solution" },
    { id: "other", label: "Autre (veuillez préciser)" }
];

const Desabonnement = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [otherDetails, setOtherDetails] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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
            const { error: fnError } = await supabase.functions.invoke('resend-unsubscribe-contact', {
                body: { email, reason, details: otherDetails }
            });

            if (fnError) throw fnError;

            setIsSuccess(true);
            toast.success("Vous avez été désabonné avec succès.");
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
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Confirmation de désabonnement</h3>
                                <p className="text-gray-600">
                                    Votre demande a été traitée. Vous ne recevrez plus de communications marketing de notre part à l'adresse <strong>{email}</strong>.
                                </p>
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
