import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Facebook, Instagram, Youtube, Twitter, ArrowRight } from "lucide-react";


const DesabonnementSucces = () => {
    useEffect(() => {
        document.title = "Désabonnement réussi | Bricareau";
    }, []);

    const socialLinks = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/bricareauwaterspecialist",
            icon: <Facebook className="w-6 h-6" />,
            color: "hover:text-[#1877F2] hover:bg-[#1877F2]/10"
        },
        {
            name: "Instagram",
            url: "http://www.instagram.com/bricareau",
            icon: <Instagram className="w-6 h-6" />,
            color: "hover:text-[#E4405F] hover:bg-[#E4405F]/10"
        },
        {
            name: "YouTube",
            url: "http://www.youtube.com/bricareau",
            icon: <Youtube className="w-6 h-6" />,
            color: "hover:text-[#FF0000] hover:bg-[#FF0000]/10"
        },
        {
            name: "X (Twitter)",
            url: "https://x.com/Bricareau",
            icon: <Twitter className="w-6 h-6" />,
            color: "hover:text-[#000000] hover:bg-[#000000]/10"
        }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#1a3a5a]">
            <Header />
            <main>
                <div className="container mx-auto px-4 py-6">
                    <GlobalBreadcrumbs />
                </div>

                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    <div
                        className="bg-white rounded-[2.5rem] p-12 text-center shadow-2xl shadow-blue-900/5 border border-slate-100"
                    >
                        <div className="mb-8 relative inline-block">
                            <div
                                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
                            >
                                <CheckCircle2 className="w-10 h-10 text-green-600" />
                            </div>
                            <div
                                className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"
                            />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                            C'est fait ! <br />
                            <span className="text-blue-600">Vous nous manquerez.</span>
                        </h1>

                        <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto leading-relaxed">
                            Votre désabonnement a été confirmé avec succès. Vous ne recevrez plus nos courriels promotionnels, mais nous espérons vous revoir bientôt !
                        </p>

                        <div className="bg-slate-50 rounded-3xl p-8 mb-10">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
                                Restez en contact différemment
                            </h3>
                            <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center transition-all duration-300 shadow-sm border border-slate-100 ${social.color} group hover:scale-110 active:scale-95`}
                                        title={social.name}
                                    >
                                        <div className="transition-transform duration-300">
                                            {social.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <p className="mt-8 text-slate-600 font-medium">
                                Suivez nos conseils et nos projets au quotidien !
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => window.location.href = "/"}
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 font-bold text-lg transition-all shadow-lg shadow-blue-200 group"
                            >
                                Retour à l'accueil
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DesabonnementSucces;
