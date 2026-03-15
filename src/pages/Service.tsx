import Header from "@/components/Header";
import GlobalBreadcrumbs from "@/components/GlobalBreadcrumbs";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import technicianImg from "@/assets/discover_expert.jpg";
import waterTestImg from "@/assets/boire-eau-robinet.jpg";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";
import sereneLiteImg from "@/assets/Système+de+filtration+Serene+Lite.webp";

const Service = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* Section 1: Hero Section (Redesigned for Mobile) */}
                <section className="relative lg:h-[850px] flex flex-col lg:items-center overflow-hidden bg-white">
                    <div className="absolute top-[30px] left-0 right-0 z-30 pointer-events-none">
                        <div className="container mx-auto px-4 lg:px-6 pointer-events-auto">
                            <GlobalBreadcrumbs variant="light" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Mobile Image (Visible only on mobile) */}
                        <div className="lg:hidden w-full h-[350px] relative">
                            <img
                                src={technicianImg}
                                alt="Technicien expert Bricareau"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
                        </div>

                        <div className="container mx-auto px-6 h-full flex items-center">
                            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full">
                                {/* Left Content */}
                                <div className="lg:w-1/2 text-left py-12 lg:py-0">
                                    <h1
                                        className="text-[32px] md:text-[52px] leading-[1.1] mb-8 tracking-tighter text-slate-900"
                                        style={{
                                            fontWeight: 350
                                        }}
                                    >
                                        Faites confiance à <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Bricareau</span> pour tout ce qui concerne l'eau.
                                    </h1>

                                    <div className="space-y-4 mb-10">
                                        {[
                                            "Experts certifiés à votre service",
                                            "Équipements de pointe",
                                            "Analyse d'eau personnalisée"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-slate-600 font-light text-[18px]">
                                                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                                                    <Check className="w-4 h-4 text-blue-600" />
                                                </div>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="font-light text-slate-600/80 mb-12 max-w-xl">
                                        Faites appel aux meilleurs experts en traitement de l'eau, situés tout près de chez vous. Nous intervenons sur tous types de systèmes, même ceux que nous n'avons pas installés.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg group shadow-xl shadow-blue-200/50">
                                            Planifier un service
                                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Desktop Image Layout (Hidden on mobile) */}
                                <div className="hidden lg:block lg:w-1/2 relative pr-12 lg:pr-0">
                                    <div className="relative w-[400px] h-[550px] bg-slate-100 rounded-sm overflow-hidden shadow-2xl">
                                        <img
                                            src={technicianImg}
                                            alt="Technicien expert Bricareau"
                                            className="w-full h-full object-cover grayscale-[0.2]"
                                        />
                                    </div>
                                    <div className="absolute -bottom-10 -left-20 w-[280px] h-[350px] bg-white p-2 shadow-2xl rotate-[-6deg] transition-transform hover:rotate-0 duration-500">
                                        <div className="w-full h-full overflow-hidden">
                                            <img
                                                src={waterTestImg}
                                                alt="Test de qualité d'eau"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Features Rows (Redesigned Model) */}
                <section className="py-32 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="space-y-32">
                            {[
                                {
                                    num: "01",
                                    title: "Réparations",
                                    desc: "N'hésitez pas à nous contacter pour obtenir de l'aide concernant la réparation d'adoucisseurs d'eau, de systèmes de filtration pour toute la maison et de systèmes de filtration par osmose inverse.",
                                    img: technicianImg
                                },
                                {
                                    num: "02",
                                    title: "Programmes de maintenance",
                                    desc: "Assurez le bon fonctionnement de vos systèmes grâce à des vérifications régulières, incluant le changement des filtres et la livraison de sel. Renseignez-vous sur nos forfaits d'entretien annuels pour une maintenance sans tracas.",
                                    img: drinkingWaterImg
                                },
                                {
                                    num: "03",
                                    title: "Installation et inspection du système",
                                    desc: "Vous avez acheté un système ? Nous pouvons l'installer et le configurer selon vos préférences, ou inspecter un système déjà en place.",
                                    img: sereneLiteImg
                                },
                                {
                                    num: "04",
                                    title: "Analyse de l'eau",
                                    desc: "Nous effectuerons un test d'eau gratuit pour vous aider à trouver la solution de traitement adaptée ou pour nous assurer du bon fonctionnement de votre système actuel.",
                                    img: waterTestImg
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                                    <div className="lg:w-1/2 text-left">
                                        <span className="text-sm font-black text-slate-400 mb-6 block font-mono">{feature.num}</span>
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                                            {feature.title}
                                        </h3>
                                        <p className="font-light text-slate-600/80 mb-8 max-w-lg">
                                            {feature.desc}
                                        </p>
                                    </div>
                                    <div className="lg:w-1/2 w-full">
                                        <div className="aspect-[16/11] bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                                            <img src={feature.img} className="w-full h-full object-cover" alt={`${feature.title} - Expertise Bricareau en traitement d'eau`} />
                                        </div>
                                    </div>
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
                                <h2 className="text-xl text-slate-900 mb-6">
                                    Réparation et entretien des systèmes de traitement de l'eau
                                </h2>
                                <h2 className="text-slate-900 mb-8 md:leading-[48px]">
                                    Planifiez votre service en quelques clics.
                                </h2>
                                <p className="font-light text-slate-600/80">
                                    Votre expert possède les connaissances et le savoir-faire nécessaires pour entretenir et réparer tout système de traitement d'eau disponible sur le marché – même s'il ne s'agit pas d'un adoucisseur ou d'un système de filtration Bricareau – et vous garantir une eau de la meilleure qualité possible. Renseignez-vous sur nos contrats d'entretien Bricareau pour bénéficier des services, réparations et maintenances les plus prestigieux et fiables pour votre système de traitement d'eau.
                                </p>
                            </div>

                            {/* Right Form Card */}
                            <div className="lg:w-3/5">
                                <div className="bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-slate-100">
                                    <h2 className="font-black text-slate-900 mb-4 text-left">Dites-nous ce dont vous avez besoin.</h2>
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
                                            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-14 text-lg shadow-lg transition-transform hover:scale-105 uppercase tracking-wider">
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
