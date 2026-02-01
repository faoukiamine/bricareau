import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Shield, Award, PenTool, Sprout, CheckCircle2, X, Search, Settings, Zap, Droplets, Filter } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TestimonialsSection from "@/components/TestimonialsSection";

// Assets
import heroImg from "@/assets/csm_visuel1_920x630_0_09518aee48.jpg";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import ironCleerImg from "@/assets/Filtration-eau-de-puits.webp";
import uvSystemImg from "@/assets/Systèmes de désinfection UV.webp";
import technicianImg from "@/assets/discover_expert.jpg";
import waterSoftenerImg from "@/assets/Adoucisseurs d'eau.webp";
import drinkingWaterImg from "@/assets/Solutions d'eau potable.webp";

const DesinfectionUV = () => {
    const categories = [
        "Tous les produits",
        "Adoucisseurs d'eau",
        "Systèmes de filtration",
        "Solutions d'eau potable",
        "Solutions spécialisées",
        "Commercial & Industriel"
    ];

    const products = [
        { name: "Culligan HE® Water Softener", desc: "Le système le plus efficace au monde.", img: waterSoftenerImg, cat: "Adoucisseurs" },
        { name: "Culligan HE® Municipal", desc: "Conçu pour l'eau municipale traitée au chlore.", img: waterSoftenerImg, cat: "Adoucisseurs" },
        { name: "Culligan Select Plus®", desc: "Fiabilité et performance abordable.", img: waterSoftenerImg, cat: "Adoucisseurs" },
        { name: "Culligan Iron-Cleer®", desc: "Élimine le fer et le soufre sans produits chimiques.", img: ironCleerImg, cat: "Solutions spécialisées" },
        { name: "Culligan Sulfur-Cleer®", desc: "Élimine les odeurs d'œufs pourris.", img: specializedFiltersImg, cat: "Solutions spécialisées" },
        { name: "Culligan High Efficiency (HE) Filter", desc: "Filtration haute performance personnalisable.", img: specializedFiltersImg, cat: "Systèmes de filtration" },
        { name: "Aquasential™ RO", desc: "Eau potable de qualité supérieure.", img: drinkingWaterImg, cat: "Solutions d'eau potable" },
        { name: "Culligan Gold Series", desc: "Performance durable et éprouvée.", img: waterSoftenerImg, cat: "Adoucisseurs" },
        { name: "Système de désinfection UV", desc: "Protection contre les virus et bactéries.", img: uvSystemImg, cat: "Solutions spécialisées" },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-[800px] flex items-start overflow-hidden pt-[220px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImg}
                            alt="Propriété avec puits"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-sm font-bold uppercase tracking-widest text-[#60A5FA] mb-4 block">
                                SOLUTIONS POUR PUITS PRIVÉS
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-md">
                                Systèmes de filtration d'eau de puits <br />pour une eau sans pareille
                            </h1>
                            <p className="text-lg md:text-xl font-medium opacity-90 mb-8 max-w-xl drop-shadow-sm">
                                L'eau des puits privés n'étant pas réglementée par le gouvernement fédéral,
                                la qualité et la sécurité de l'eau sont la responsabilité du propriétaire -
                                et les problèmes potentiels ne sont pas toujours évidents. Les tests d'eau
                                à domicile avec Culligan sont un excellent point de départ. Nos systèmes de
                                filtration d'eau de puits vous offrent une eau plus propre et plus sûre et
                                une tranquillité d'esprit du matin au soir.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-lg font-bold"
                                    asChild
                                >
                                    <NavLink to="/water-testing">
                                        Planifiez une consultation gratuite
                                    </NavLink>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-10 h-14 text-lg font-bold backdrop-blur-sm"
                                    asChild
                                >
                                    <a href="tel:18552649328">Appelez le 1-855-264-9328</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Blue Bar */}
                <section className="bg-[#001B3D] py-16 text-white border-b border-blue-800">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
                            {[
                                { icon: Settings, title: "Analyse gratuite", desc: "Expertise à domicile" },
                                { icon: Shield, title: "Solutions Culligan", desc: "Le leader mondial" },
                                { icon: Zap, title: "Service expert", desc: "Installation certifiée" },
                                { icon: Award, title: "Meilleure garantie", desc: "Tranquillité d'esprit" }
                            ].map((b, i) => (
                                <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                                    <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <b.icon className="h-8 w-8 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{b.title}</h3>
                                        <p className="text-sm text-blue-200/60 font-medium">{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Product Catalog Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Nos systèmes de filtration</h2>

                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* Sidebar Filters */}
                            <aside className="lg:w-1/4 space-y-8">
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                    <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                        <Search className="h-5 w-5 text-blue-600" />
                                        Filtrer par
                                    </h3>
                                    <div className="space-y-4">
                                        {categories.map((c, i) => (
                                            <div key={i} className="flex items-center gap-3 cursor-pointer group">
                                                <div className="w-5 h-5 rounded border border-slate-300 group-hover:border-blue-500 transition-colors" />
                                                <span className="text-slate-600 group-hover:text-blue-600 font-medium transition-colors">{c}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-200">
                                    <h4 className="font-bold text-lg mb-4">Besoin d'aide ?</h4>
                                    <p className="text-blue-100 text-sm mb-6">Nos experts vous guident vers la solution idéale.</p>
                                    <Button variant="outline" className="w-full rounded-full border-white text-white hover:bg-white hover:text-blue-600 font-bold">
                                        Analyse d'eau
                                    </Button>
                                </div>
                            </aside>

                            {/* Product Grid */}
                            <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {products.map((p, i) => (
                                    <div key={i} className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 group">
                                        <div className="relative aspect-square mb-6 overflow-hidden flex items-center justify-center bg-slate-50 rounded-2xl">
                                            <img src={p.img} alt={p.name} className="w-4/5 h-4/5 object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" />
                                            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-widest shadow-sm">
                                                {p.cat}
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors leading-tight">{p.name}</h3>
                                        <p className="text-slate-500 text-sm mb-6 h-10 overflow-hidden">{p.desc}</p>
                                        <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                                            <NavLink to="#" className="text-blue-600 font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                                En savoir plus <ChevronRight className="h-4 w-4" />
                                            </NavLink>
                                            <Button size="sm" variant="ghost" className="text-slate-400 hover:text-blue-600 font-bold text-xs p-0">
                                                Voir produit
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Comparison Table */}
                <section className="py-24 bg-slate-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -mr-48 -mt-48" />
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Comment se comparent les systèmes ?</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto">Comparez les fonctionnalités clés de nos meilleures solutions.</p>
                        </div>
                        <div className="bg-white rounded-[3rem] shadow-2xl p-1 md:p-12 border border-slate-100 overflow-x-auto">
                            <table className="w-full min-w-[700px] border-collapse">
                                <thead>
                                    <tr>
                                        <th className="p-6 text-left text-xs font-black text-slate-300 uppercase tracking-widest">Fonctionnalités</th>
                                        <th className="p-6 text-center">
                                            <div className="flex flex-col items-center">
                                                <img src={waterSoftenerImg} className="h-24 w-24 object-contain mix-blend-multiply mb-3" alt="HE Softener" />
                                                <span className="font-bold text-slate-900 leading-tight">Culligan HE®<br />Water Softener</span>
                                            </div>
                                        </th>
                                        <th className="p-6 text-center">
                                            <div className="flex flex-col items-center">
                                                <img src={ironCleerImg} className="h-24 w-24 object-contain mix-blend-multiply mb-3" alt="Iron-Cleer" />
                                                <span className="font-bold text-slate-900 leading-tight">Culligan<br />Iron-Cleer®</span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        "Consommation efficace", "Connectivité Bluetooth", "Alertes de sel", "Filtration sédiments", "Élimination fer"
                                    ].map((feature, i) => (
                                        <tr key={i} className="border-t border-slate-50 group hover:bg-slate-50/50 transition-colors">
                                            <td className="p-6 font-bold text-slate-700">{feature}</td>
                                            <td className="p-6 text-center"><CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /></td>
                                            <td className="p-6 text-center">
                                                {i === 1 || i === 2 ? <X className="h-6 w-6 text-slate-200 mx-auto" strokeWidth={1} /> : <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" />}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 3 Solutions Blocks */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold">Trouvez l'eau parfaite pour votre foyer</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { title: "Adoucissement", desc: "Pour une peau plus douce et protéger vos tuyaux.", icon: Droplets, color: "bg-blue-600" },
                                { title: "Filtration", desc: "Élimine les impuretés pour toute la maison.", icon: Filter, color: "bg-slate-900" },
                                { title: "Eau Potable", desc: "La pureté d'une source à votre robinet.", icon: Shield, color: "bg-blue-400" }
                            ].map((s, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-10 rounded-[3rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group">
                                    <div className={`w-20 h-20 rounded-[2rem] ${s.color} flex items-center justify-center mb-8 rotate-3 group-hover:rotate-12 transition-transform shadow-lg`}>
                                        <s.icon className="h-10 w-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                                    <p className="text-slate-500 leading-relaxed mb-8">{s.desc}</p>
                                    <NavLink to="#" className="text-blue-600 font-bold border-b-2 border-blue-100 hover:border-blue-600 transition-colors pb-1">
                                        Découvrir les produits
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trusted Service Section */}
                <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-600 -translate-x-full lg:translate-x-0 skew-x-12 opacity-10" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-20">
                            <div className="lg:w-1/2">
                                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter">Installation certifiée Bricareau</h2>
                                <p className="text-xl text-blue-100/70 mb-10 leading-relaxed max-w-xl">
                                    Nos techniciens sont formés selon les normes les plus strictes de l'industrie pour vous garantir un service impeccable.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                                    {["Analyse initiale", "Pose méticuleuse", "Mise en service", "Suivi régulier"].map((step, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center font-bold text-blue-400">
                                                {i + 1}
                                            </div>
                                            <span className="font-bold text-lg">{step}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-lg font-bold">
                                    Prendre rendez-vous
                                </Button>
                            </div>
                            <div className="lg:w-1/2 relative">
                                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5">
                                    <img src={technicianImg} alt="Technicien" className="w-full h-auto" />
                                </div>
                                <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-40" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Questions fréquentes</h2>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {[
                                { q: "Est-ce que Culligan peut traiter mon eau de puits ?", a: "Oui, nous sommes spécialisés dans le traitement des eaux de puits complexes : fer, soufre, manganèse et tanins." },
                                { q: "Quelles sont les garanties ?", a: "Culligan offre des garanties limitées à vie sur certains composants et des garanties complètes sur le service." },
                                { q: "L'analyse d'eau à domicile est-elle vraiment gratuite ?", a: "Absolument. Nos experts viennent chez vous, testent votre eau et vous expliquent les résultats sans aucun engagement." }
                            ].map((item, idx) => (
                                <AccordionItem key={idx} value={`item-${idx}`} className="border border-slate-100 rounded-[2rem] px-8 bg-slate-50/30 overflow-hidden">
                                    <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-8 text-slate-800">
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-500 text-lg leading-relaxed pb-8">
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Articles Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-16 underline decoration-blue-600 underline-offset-8">Ressources</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Comment choisir son adoucisseur", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" },
                                { title: "L'importance de l'eau adoucie", img: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop" },
                                { title: "Entretien de votre système Culligan", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop" }
                            ].map((art, i) => (
                                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                    <div className="h-56 overflow-hidden">
                                        <img src={art.img} alt={art.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h4 className="text-xl font-bold mb-4">{art.title}</h4>
                                        <NavLink to="#" className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-xs tracking-widest">
                                            EN SAVOIR PLUS <ChevronRight className="h-4 w-4" />
                                        </NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Consultation Form Section */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                            <div className="lg:w-1/3 text-left">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight italic">
                                    Planifiez une consultation gratuite sur l'eau
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Remplissez le formulaire ci-dessous pour organiser une visite d'un de nos experts de l'eau.
                                </p>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-2xl">
                                    {/* Progress */}
                                    <div className="flex items-center gap-8 mb-12 overflow-x-auto pb-4 border-b border-gray-100">
                                        <div className="flex items-center gap-2 text-blue-600 font-bold whitespace-nowrap">
                                            <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">1</span>
                                            VOS INFOS
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-300 font-bold whitespace-nowrap">
                                            <span className="w-10 h-10 rounded-full bg-gray-200 text-white flex items-center justify-center">2</span>
                                            VOTRE DISPONIBILITÉ
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-300 font-bold whitespace-nowrap">
                                            <span className="w-10 h-10 rounded-full bg-gray-200 text-white flex items-center justify-center">3</span>
                                            CONFIRMATION
                                        </div>
                                    </div>

                                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="fname" className="font-bold flex gap-1">Prénom*</Label>
                                            <Input id="fname" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Jean" />
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="lname" className="font-bold flex gap-1">Nom*</Label>
                                            <Input id="lname" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Dupont" />
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="email" className="font-bold flex gap-1">Courriel*</Label>
                                            <Input id="email" type="email" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="jean@exemple.com" />
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <Label htmlFor="phone" className="font-bold flex gap-1">Téléphone*</Label>
                                            <Input id="phone" type="tel" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="(514) 000-0000" />
                                        </div>
                                        <div className="md:col-span-2 space-y-3 text-left">
                                            <Label htmlFor="address" className="font-bold flex gap-1">Adresse*</Label>
                                            <Input id="address" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="123 rue de l'Eau" />
                                        </div>
                                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                                            <div className="space-y-3 text-left">
                                                <Label htmlFor="city" className="font-bold flex gap-1">Ville*</Label>
                                                <Input id="city" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Montréal" />
                                            </div>
                                            <div className="space-y-3 text-left">
                                                <Label htmlFor="province" className="font-bold flex gap-1">Province*</Label>
                                                <Input id="province" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="Québec" />
                                            </div>
                                            <div className="space-y-3 text-left">
                                                <Label htmlFor="zip" className="font-bold flex gap-1">Code Postal*</Label>
                                                <Input id="zip" className="h-14 bg-gray-50 border-none rounded-sm" placeholder="H1A 1A1" />
                                            </div>
                                        </div>
                                        <div className="md:col-span-2 text-left">
                                            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-16 h-14 text-xl font-bold w-full md:w-auto">
                                                Continuer
                                            </Button>
                                            <p className="mt-4 text-[10px] text-gray-400 max-w-lg">
                                                En soumettant ce formulaire, vous acceptez nos conditions d'utilisation et notre politique de confidentialité. Un spécialiste Bricareau vous contactera sous peu.
                                            </p>
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

export default DesinfectionUV;
