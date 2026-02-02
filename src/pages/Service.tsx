import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import technicianImg from "@/assets/discover_expert.jpg";

const Service = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* Section 1: Trust Card */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 text-left">
                                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
                                    Faites confiance à Culligan pour tout ce qui concerne l'eau.
                                </h2>
                                <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed max-w-lg">
                                    Faites appel aux meilleurs experts en traitement de l'eau, situés tout près de chez vous.
                                </p>
                                <Button variant="link" className="text-blue-600 font-black p-0 text-lg flex items-center gap-3 transition-all hover:gap-5 group" asChild>
                                    <a href="#form">
                                        Planifiez votre service <ArrowRight className="w-6 h-6" />
                                    </a>
                                </Button>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
                                    <img
                                        src={technicianImg}
                                        alt="Technicien Culligan avec client"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Features Grid */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                {
                                    num: "01",
                                    title: "Réparations",
                                    desc: "N'hésitez pas à nous contacter pour obtenir de l'aide concernant la réparation d'adoucisseurs d'eau, de systèmes de filtration pour toute la maison et de systèmes de filtration par osmose inverse."
                                },
                                {
                                    num: "02",
                                    title: "programmes de maintenance",
                                    desc: "Assurez le bon fonctionnement de vos systèmes grâce à des vérifications régulières, incluant le changement des filtres et la livraison de sel. Renseignez-vous sur nos forfaits d'entretien annuels pour une maintenance sans tracas."
                                },
                                {
                                    num: "03",
                                    title: "Installation et inspection du système",
                                    desc: "Vous avez acheté un système ? Nous pouvons l'installer et le configurer selon vos préférences, ou inspecter un système déjà en place."
                                },
                                {
                                    num: "04",
                                    title: "Analyse de l'eau",
                                    desc: "Nous effectuerons un test d'eau gratuit pour vous aider à trouver la solution de traitement adaptée ou pour nous assurer du bon fonctionnement de votre système actuel."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col text-left group">
                                    <span className="text-4xl font-black text-blue-100 mb-6 italic transition-colors group-hover:text-blue-200 uppercase tracking-tighter">
                                        {feature.num}
                                    </span>
                                    <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed text-sm font-medium">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Section 3: Hero & Form */}
                <section className="pt-32 pb-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20">
                            {/* Left Content */}
                            <div className="lg:w-2/5 text-left">
                                <h2 className="text-xl font-bold text-slate-900 mb-6">
                                    Réparation et entretien des systèmes de traitement de l'eau
                                </h2>
                                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 leading-tight">
                                    Planifiez votre service en quelques clics.
                                </h1>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Votre expert Culligan local possède les connaissances et le savoir-faire nécessaires pour entretenir et réparer tout système de traitement d'eau disponible sur le marché – même s'il ne s'agit pas d'un adoucisseur ou d'un système de filtration Culligan – et vous garantir une eau de la meilleure qualité possible. Renseignez-vous sur nos contrats d'entretien Culligan pour bénéficier des services, réparations et maintenances les plus prestigieux et fiables pour votre système de traitement d'eau.
                                </p>
                            </div>

                            {/* Right Form Card */}
                            <div className="lg:w-3/5">
                                <div className="bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-slate-100">
                                    <h2 className="text-3xl font-black text-slate-900 mb-4 text-left">Dites-nous ce dont vous avez besoin.</h2>
                                    <p className="text-slate-500 mb-10 text-left text-sm font-medium">Les champs marqués d'un astérisque (*) sont obligatoires.</p>

                                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="fname" className="font-bold flex gap-1">Prénom*</Label>
                                            <Input id="fname" className="h-14 bg-white border-slate-200 rounded-sm focus:ring-blue-600" />
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="lname" className="font-bold flex gap-1">Nom de famille*</Label>
                                            <Input id="lname" className="h-14 bg-white border-slate-200 rounded-sm focus:ring-blue-600" />
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="company" className="font-bold flex gap-1">Société (facultatif)</Label>
                                            <Input id="company" className="h-14 bg-white border-slate-200 rounded-sm focus:ring-blue-600" />
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="email" className="font-bold flex gap-1">Adresse courriel*</Label>
                                            <Input id="email" type="email" className="h-14 bg-white border-slate-200 rounded-sm focus:ring-blue-600" />
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="phone" className="font-bold flex gap-1">Téléphone*</Label>
                                            <Input id="phone" type="tel" className="h-14 bg-white border-slate-200 rounded-sm focus:ring-blue-600" />
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="zip" className="font-bold flex gap-1">Zip / code postal*</Label>
                                            <Input id="zip" className="h-14 bg-white border-slate-200 rounded-sm focus:ring-blue-600" />
                                        </div>
                                        <div className="md:col-span-1 space-y-3 text-left">
                                            <Label htmlFor="interest" className="font-bold flex gap-1">Domaine d'intérêt*</Label>
                                            <Select>
                                                <SelectTrigger className="h-14 bg-white border-slate-200 rounded-sm focus:ring-blue-600">
                                                    <SelectValue placeholder="Sélectionnez une option" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="repair">Réparations</SelectItem>
                                                    <SelectItem value="maintenance">Entretien/Maintenance</SelectItem>
                                                    <SelectItem value="install">Installation</SelectItem>
                                                    <SelectItem value="test">Analyse d'eau</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="md:col-span-1 space-y-3 text-left">
                                            <Label htmlFor="message" className="font-bold flex gap-1">Saisissez une question ou un message (facultatif)</Label>
                                            <Textarea id="message" className="min-h-[56px] bg-white border-slate-200 rounded-sm focus:ring-blue-600" />
                                        </div>
                                        <div className="md:col-span-2 text-left pt-4">
                                            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-14 text-lg font-bold shadow-lg transition-transform hover:scale-105 uppercase tracking-wider">
                                                Soumettre
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Service;
