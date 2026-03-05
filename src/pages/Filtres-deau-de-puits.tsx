import React, { useEffect } from 'react';
import Header from "@/components/Header";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import heroFilter from "@/assets/person-is-holding-a-glass-of-water-from-a-faucet.jpeg";
import {
    ArrowRight,
    Droplets,
    ChevronRight,
    CheckCircle2,
    Shield,
    Zap,
    TrendingDown,
    Play,
    Phone
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import waterTestBg from "@/assets/Enercare_JP_Day_2_Kitchen_Faucet_498-2048x1365.jpg";
import bathroomImg from "@/assets/contemporary-bathroom-elements.jpg";
import specializedFiltersImg from "@/assets/Filtres d'eau spécialisés.webp";
import watersofterImg from "@/assets/Adoucisseurs d'eau.webp";
import drinkingwatersofterImg from "@/assets/Solutions d'eau potable.webp";
import waterTestGemini from "@/assets/Gemini_Generated_Image_rk3i02rk3i02rk3i.png";
import process1 from "@/assets/2148563485.jpg";
import labTestImg from "@/assets/test-laboratoire-diligence-inspection-750x500.jpg";
import waterTestingImg from "@/assets/test-laboratoire-diligence-inspection-750x500.jpg";
import ironManganeseImg from "@/assets/eau-fer-manganèse.jpg";
import waterTasteImg from "@/assets/water-taste.jpg";
import radonImg from "@/assets/radon.jpg";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const products = [
    { name: "Filtre d'eau Vortex", desc: "Spécialisé pour l'eau contenant des sédiments.", image: specializedFiltersImg },
    { name: "Filtre d'eau Zen-pH", desc: "Spécialisé pour neutraliser l'eau acide.", image: specializedFiltersImg },
    { name: "Filtre d'eau ChlorStop", desc: "Spécialisé pour l'eau contenant du chlore.", image: specializedFiltersImg },
    { name: "Filtre d'eau Iron Shield", desc: "Spécialisé pour l'eau contenant du fer.", image: specializedFiltersImg },
    { name: "Filtre d'eau Oxy-pure", desc: "Spécialisé pour l'eau contenant du fer et du manganèse.", image: specializedFiltersImg },
    { name: "Filtre d'eau Sulphur Shield", desc: "Spécialisé pour l'eau contenant du sulfure d'hydrogène.", image: specializedFiltersImg },
    { name: "Filtre d'eau Zéro-As", desc: "Spécialisé pour l'eau contenant de l'arsenic.", image: specializedFiltersImg },
    { name: "Filtre d'eau Tann-Ex", desc: "Spécialisé pour l'eau contenant du tanin.", image: watersofterImg },
    { name: "Système d'osmose inverse Sérénité Pure", desc: "Spécialisé pour l'eau contenant beaucoup de sels dissous.", image: drinkingwatersofterImg },
];

const faqItems = [
    {
        q: "Comment éliminer l'odeur d'œufs pourris dans mon eau ?",
        a: "Cette odeur est causée par le gaz sulfure d'hydrogène. Notre système Outdoor HE ou nos filtres à air à oxydation sont conçus pour neutraliser ce gaz sans produits chimiques, rendant votre eau fraîche et inodore."
    },
    {
        q: "Mon eau laisse des taches de rouille, quel filtre choisir ?",
        a: "Les taches orangées indiquent la présence de fer. Le système Bricareau Iron-Cleer est notre solution la plus performante. Il oxyde et capture le fer ferrique et ferreux, protégeant ainsi vos éviers et votre linge."
    },
    {
        q: "L'arsenic dans l'eau est-il dangereux ?",
        a: "Oui, l'arsenic est un contaminant inodore et incolore lié à des problèmes de santé graves. Notre système Select Plus utilise un média spécifique certifié pour réduire l'arsenic à des niveaux sécuritaires selon les normes de santé publique."
    },
    {
        q: "Pourquoi ma robinetterie de cuivre devient-elle verte ?",
        a: "C'est le signe d'une eau acide (pH bas) qui ronge votre tuyauterie. La série Medallist est équipée d'un neutraliseur qui remonte le pH de l'eau, protégeant ainsi l'intégrité de votre plomberie et évitant les fuites."
    },
    {
        q: "Qu'est-ce que le tanin et comment le traiter ?",
        a: "Les tanins proviennent de matières organiques et donnent à l'eau une couleur jaunâtre ou brunâtre (eau de thé). Le système Select Plus Connect utilise une résine d'échange d'anions spécifique pour éliminer cette coloration et clarifier l'eau."
    },
    {
        q: "Mon eau a un goût de chlore, même si j'ai un puits ?",
        a: "Si vous utilisez un système de chloration pour la désinfection, l'excès de chlore peut être désagréable. Notre système HE Municipal ou nos filtres au charbon actif éliminent le goût et l'odeur de chlore pour une eau plus saine."
    },
    {
        q: "Quelle est la différence entre le fer et le manganèse ?",
        a: "Le fer cause des taches rouille, tandis que le manganèse produit des taches noires et des dépôts huileux. Notre série Gold Series est spécialement conçue pour traiter ces deux métaux lourds simultanément."
    },
    {
        q: "Le filtre à sédiments est-il suffisant pour une eau trouble ?",
        a: "Un filtre à sédiments retire les particules physiques (sable, terre). Cependant, si la turbidité est causée par des particules microscopiques, un filtre multimédia ou un système Bricareau HE Connect sera plus efficace."
    },
    {
        q: "Les filtres spécialisés nécessitent-ils beaucoup d'entretien ?",
        a: "La plupart de nos systèmes sont entièrement automatiques et effectuent des cycles de nettoyage périodiques. Un entretien annuel professionnel est recommandé pour optimiser les performances et la longévité."
    },
    {
        q: "Quelle est la durée de vie des médias filtrants ?",
        a: "Selon la qualité de votre eau et votre consommation, les médias filtrants spécialisés (comme pour le fer ou le soufre) durent généralement entre 5 et 10 ans avant de nécessiter un remplacement."
    },
    {
        q: "Un seul système peut-il régler tous mes problèmes ?",
        a: "Certains systèmes mixtes peuvent traiter plusieurs minéraux, mais pour des cas complexes (fer + arsenic + acide), une combinaison de deux unités spécialisées est souvent la solution la plus durable et efficace."
    },
    {
        q: "Puis-je boire l'eau après la filtration du fer ?",
        a: "Oui, la filtration du fer améliore non seulement l'aspect esthétique de l'eau mais aussi son goût. Pour une pureté absolue, nous recommandons souvent d'ajouter un système d'osmose inverse au point de consommation."
    },
    {
        q: "Comment savoir quel système convient à mon puits ?",
        a: "Une analyse d'eau complète est la première étape essentielle. Elle nous permet de mesurer précisément les niveaux de chaque contaminant et de configurer le système Bricareau parfaitement adapté à vos besoins."
    },
    {
        q: "Le système de filtration affecte-t-il la pression d'eau ?",
        a: "Nos systèmes sont dimensionnés pour maintenir un débit optimal. Grâce à nos vannes de contrôle haute performance, la perte de pression est négligeable même lors d'utilisations simultanées dans la maison."
    },
    {
        q: "Les systèmes Bricareau sont-ils garantis ?",
        a: "Absolument. Bricareau offre l'une des meilleures garanties de l'industrie sur les réservoirs, les vannes et l'électronique, vous assurant une tranquillité d'esprit pour de nombreuses années."
    }
];

interface ComparisonItem {
    feature: string;
    Vortex: boolean | string;
    ZenPH: boolean | string;
    ChlorStop: boolean | string;
    IronShield: boolean | string;
    OxyPure: boolean | string;
    SulphurShield: boolean | string;
    ZeroAs: boolean | string;
    TannEx: boolean | string;
    SerenitePure: boolean | string;
}

const comparisonData: ComparisonItem[] = [
    { feature: "Élimination du Fer (Taches rouille)", Vortex: false, ZenPH: false, ChlorStop: false, IronShield: "Maximale", OxyPure: "Maximale", SulphurShield: "Partielle", ZeroAs: false, TannEx: false, SerenitePure: "Totale" },
    { feature: "Odeur de Soufre (Œufs pourris)", Vortex: false, ZenPH: false, ChlorStop: false, IronShield: "Moyenne", OxyPure: "Moyenne", SulphurShield: "Maximale", ZeroAs: false, TannEx: false, SerenitePure: "Partielle" },
    { feature: "Manganèse (Taches noires)", Vortex: false, ZenPH: false, ChlorStop: false, IronShield: "Partielle", OxyPure: "Maximale", SulphurShield: "Partielle", ZeroAs: false, TannEx: false, SerenitePure: "Totale" },
    { feature: "Acidité (Correction pH / Eau bleue)", Vortex: false, ZenPH: "Maximale", ChlorStop: false, IronShield: false, OxyPure: false, SulphurShield: false, ZeroAs: false, TannEx: false, SerenitePure: false },
    { feature: "Sédiments, Sable & Turbidité", Vortex: "Totale", ZenPH: "Partielle", ChlorStop: "Partielle", IronShield: "Partielle", OxyPure: "Partielle", SulphurShield: "Partielle", ZeroAs: "Partielle", TannEx: "Partielle", SerenitePure: "Totale" },
    { feature: "Arsenic & Métaux Lourds", Vortex: false, ZenPH: false, ChlorStop: false, IronShield: false, OxyPure: false, SulphurShield: false, ZeroAs: "Maximale", TannEx: false, SerenitePure: "Totale" },
    { feature: "Tanins & Coloration (Eau de thé)", Vortex: false, ZenPH: false, ChlorStop: false, IronShield: false, OxyPure: false, SulphurShield: false, ZeroAs: false, TannEx: "Maximale", SerenitePure: "Partielle" },
    { feature: "Goût & Odeur de Chlore", Vortex: false, ZenPH: false, ChlorStop: "Maximale", IronShield: false, OxyPure: false, SulphurShield: false, ZeroAs: false, TannEx: false, SerenitePure: "Totale" },
    { feature: "Entretien / Maintenance", Vortex: "Minimal", ZenPH: "Moyen", ChlorStop: "Bas", IronShield: "Bas", OxyPure: "Moyen", SulphurShield: "Bas", ZeroAs: "Moyen", TannEx: "Moyen", SerenitePure: "Élevé" },];

const FiltresPuits = () => {
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    useEffect(() => {
        document.title = "Filtres d'eau de puits | Traitement Fer, Soufre & Manganèse | Bricareau";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Éliminez les polluants de votre eau de puits : fer, odeurs de soufre, manganèse et pH acide. Solutions de filtration résidentielle expertes au Canada par Bricareau.");
        }

        // OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", "Filtres d'eau de puits spécialisés - Pureté & Protection | Bricareau");
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", "Solutions avancées pour traiter le fer, le soufre et les impuretés de votre eau de puits. Protégez votre santé et votre maison.");
    }, []);

    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-background text-slate-900 font-sans">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative h-[850px] flex items-center overflow-hidden -mt-[104px] pt-[104px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroFilter}
                            alt="Filtration eau de puits Québec - Traitement du fer, soufre et manganèse résidentiel Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                        {/* Brightening Start 1/3 Right */}
                        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-2xl text-white">
                            <h1
                                className="text-[28px] md:text-[42px] leading-[32px] md:leading-[42px] font-light mb-8 tracking-tighter text-white text-justify max-w-xl"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="font-bold text-white">Filtres d'eau de puits</span> <br />
                                <span className="font-bold text-white">pour une eau filtrée sans compromis.</span>
                            </h1>
                            <p className="font-light text-[20px] leading-snug text-white/95 mb-8 max-w-xl text-justify">
                                Nos solutions spécialisées traitent efficacement le fer, le soufre (odeurs d'œufs pourris), le manganèse et l'acidité. Protégez votre plomberie et profitez d'une eau saine et limpide partout dans votre maison.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="#specialized-filters">Explorez nos filtres d'eau</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full px-8 h-14 backdrop-blur-sm shadow-lg flex items-center gap-2"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="tel:18552649328">
                                        <Phone className="h-5 w-5" />
                                        1-855-264-9328
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Wave Separator Bottom - Transition to Blue Section */}
                    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
                        <svg
                            className="relative block w-full h-[50px] md:h-[80px]"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                fill="#2563EB"
                                transform="rotate(180 600 60)"
                            ></path>
                        </svg>
                    </div>
                </section>

                {/* Pourquoi choisir - Blue Section */}
                <section className="py-24 bg-blue-600 text-white text-center">
                    <div className="container mx-auto px-6 text-center">
                        <div className="text-center mb-16">
                            <h2 className="text-[32px] md:text-[48px] font-normal text-white mb-8 leading-[1.2] md:leading-[48px] tracking-tighter text-center">
                                Pourquoi choisir nos <br />systèmes de filtration d'eau ?
                            </h2>
                            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                                Plus qu'un simple système de filtration, c'est une protection avancée pour votre santé et un confort durable pour toute votre famille.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[
                                { icon: Droplets, title: "Eau cristalline", desc: "Éliminez les sédiments et la turbidité pour une eau d'une clarté professionnelle partout chez vous." },
                                { icon: Shield, title: "Protection totale", desc: "Empêchez le fer et les minéraux corrosifs de tacher vos éviers et de détruire votre plomberie." },
                                { icon: TrendingDown, title: "Zéro odeur", desc: "Dites adieu aux odeurs d'œufs pourris (soufre) et au goût de chlore pour une eau fraîche." }
                            ].map((item, id) => (
                                <div key={id} className="flex flex-col items-center group text-center">
                                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <item.icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h4 className="text-2xl font-medium mb-4 tracking-tight">{item.title}</h4>
                                    <p className="text-blue-100 leading-snug">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Product Grid Section */}
                <section id="specialized-filters" className="py-24 bg-gray-50 scroll-mt-20">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Nos filtres d'eau</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">spécialisés pour votre résidence</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                            <p className="mt-8 text-lg font-light leading-snug text-slate-600 text-justify w-full">
                                Découvrez notre gamme complète de filtres spécialisés, conçus pour répondre aux défis uniques des puits privés artésiens ou de surface. Que vous fassiez face à des taches de fer tenaces, des odeurs de soufre incommodantes, une eau acide corrosive ou la présence de contaminants invisibles comme l'arsenic, nos systèmes offrent une solution ciblée et performante. Chaque unité est dotée d'une technologie de pointe pour assurer une filtration maximale tout en préservant l'intégrité de votre plomberie et de vos appareils électroménagers. En investissant dans l'une de nos solutions Vortex, Iron Shield, Zen-pH, ou autres, vous choisissez une tranquillité d'esprit durable et une qualité d'eau irréprochable pour toute votre famille. Nos experts vous accompagnent dans le diagnostic et l'installation pour garantir que chaque goutte d'eau qui coule de votre robinet soit pure, sûre et limpide.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((p, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => navigate("/contact")}
                                >
                                    <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                                        <img
                                            src={p.image}
                                            alt={`${p.name} - Système de filtration spécialisé Bricareau pour éliminer le fer et les odeurs`}
                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="p-8 space-y-4 flex flex-col flex-grow border-t-2 border-transparent group-hover:border-blue-600 transition-colors">
                                        <h3
                                            className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight text-center"
                                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                        >
                                            {p.name}
                                        </h3>
                                        <p
                                            className="text-slate-500 font-light leading-snug flex-grow text-justify"
                                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                        >
                                            {p.desc}
                                        </p>
                                        <div
                                            className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase mt-4 group-hover:underline self-end"
                                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                        >
                                            <span></span>
                                            <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Table Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Comparez nos filtres d'eau</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">spécialisés pour l'eau de puits</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1600px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-8 text-left text-gray-400 font-medium uppercase tracking-wider w-[280px]">Modèles</th>
                                        {[
                                            { key: "Vortex", name: "Vortex", img: specializedFiltersImg },
                                            { key: "ZenPH", name: "Zen-pH", img: specializedFiltersImg },
                                            { key: "ChlorStop", name: "ChlorStop", img: specializedFiltersImg },
                                            { key: "IronShield", name: "Iron Shield", img: specializedFiltersImg },
                                            { key: "OxyPure", name: "Oxy-pure", img: specializedFiltersImg },
                                            { key: "SulphurShield", name: "Sulphur Shield", img: specializedFiltersImg },
                                            { key: "ZeroAs", name: "Zéro-As", img: specializedFiltersImg },
                                            { key: "TannEx", name: "Tann-Ex", img: watersofterImg },
                                            { key: "SerenitePure", name: "Sérénité Pure", img: drinkingwatersofterImg }
                                        ].map(m => (
                                            <th key={m.key} className="p-4 text-center text-gray-900 font-bold border-l border-white/50 first:border-l-0">
                                                <div className="flex flex-col items-center">
                                                    <div className="h-[100px] w-full flex items-center justify-center mb-4">
                                                        <img
                                                            src={m.img}
                                                            alt={`Modèle ${m.name} - Filtre d'eau de puits haute performance Bricareau`}
                                                            className="max-h-full max-w-full object-contain mix-blend-multiply"
                                                        />
                                                    </div>
                                                    <div className="text-[13px] leading-tight uppercase tracking-wider min-h-[32px] flex items-center justify-center px-1">
                                                        {m.name}
                                                    </div>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-8 font-medium text-gray-700">{row.feature}</td>
                                            {["Vortex", "ZenPH", "ChlorStop", "IronShield", "OxyPure", "SulphurShield", "ZeroAs", "TannEx", "SerenitePure"].map((key) => (
                                                <td key={key} className="p-8 text-center">
                                                    {typeof row[key as keyof ComparisonItem] === 'string' ? (
                                                        <span className="text-blue-600 font-bold text-[10px] bg-blue-50 px-3 py-1 rounded-full">{row[key as keyof ComparisonItem]}</span>
                                                    ) : (
                                                        row[key as keyof ComparisonItem] ? <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto" /> : null
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 7.Water Testing Section */}
                <section className="relative h-[650px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={waterTestingImg}
                            alt="Analyse d'eau de puits en laboratoire - Test de fer, soufre, pH et bactéries Bricareau"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/40 lg:bg-gradient-to-r lg:from-blue-900/90 lg:to-blue-600/20 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-white/10 to-transparent" />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl text-white">
                            <span className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4 block">
                                Contrôle de la Qualité D'EAU
                            </span>
                            <h2
                                className="text-[40px] md:text-[60px] leading-[1.1] md:leading-[60px] font-light mb-8 tracking-tighter text-white"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                L'excellence commence<br />
                                par <span className="font-bold">une eau parfaite.</span>
                            </h2>
                            <p className="text-lg font-light leading-snug text-white/95 mb-8 max-w-xl text-justify">
                                Le luxe, c'est de ne pas avoir à se soucier de la qualité de ce que l'on consomme. Offrez-vous la sérénité d'une eau analysée par des experts, pour une maison où tout brille, sans effort et sans compromis.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 shadow-lg shadow-blue-200"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                                    asChild
                                >
                                    <a href="/tests-eau">Demandez une analyse d'eau</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Grid Section */}
                <TestimonialsSection
                    filterProduct="/Filtres-deau"
                    title={
                        <>
                            <span className="text-[32px] md:text-[60px] font-light leading-[1.2] md:leading-[60px] block">Buvez l'eau de votre puits sans crainte</span>
                            <span className="text-[32px] md:text-[60px] font-normal leading-[1.2] md:leading-[60px] block text-blue-600"> Ils ont fait le saut avec nous.</span>
                        </>
                    }
                />

                {/* 5. CTA Section */}
                <section className="bg-primary py-16 md:py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                            Besoin d'aide avec votre eau ?
                        </h2>
                        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                            Discutez avec un expert en un clic. Disponible par téléphone ou à domicile selon vos préférences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full px-8 border-white text-white bg-transparent hover:bg-white/10"
                                asChild
                            >
                                <a href="tel:18552649328">Appelez le 1-855-264-9328</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-light leading-[1.1] md:leading-[60px] block">Pour vous éclairer</span>
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Questions fréquentes</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {faqItems.slice(0, showAllFaqs ? undefined : 6).map((item, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-gray-200">
                                        <AccordionTrigger className="text-left font-medium text-lg hover:no-underline py-6">
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 text-lg leading-snug pb-6 text-left">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                            <div className="mt-12 text-center">
                                <Button
                                    onClick={() => setShowAllFaqs(!showAllFaqs)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-14 shadow-lg shadow-blue-200"
                                >
                                    {showAllFaqs ? "Voir moins de questions" : "Voir toutes les questions"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resources Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-left mb-16">
                            <h2
                                className="text-slate-900 tracking-tighter mb-8 text-left"
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
                            >
                                <span className="text-[32px] md:text-[60px] font-normal leading-[1.1] md:leading-[60px] block">Ressources</span>
                            </h2>
                            <div className="w-24 h-1 bg-blue-600"></div>
                        </div>                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Radon et uranium dans les puits privés : risques réels et solutions efficaces", path: "/radon-et-uranium-dans-les-puits-prives", img: radonImg },
                                { title: "Pourquoi mon eau sent l'odeur des œufs pourris ?", path: "/pourquoi-mon-eau-sent-l-odeur-des-oeufs-pourris", img: waterTasteImg },
                                { title: "Manganèse, fer et eau brune : les remèdes", path: "/manganese-fer-eau-brune-remedes", img: ironManganeseImg }
                            ].map((art, i) => (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                                    onClick={() => navigate(art.path)}
                                >
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={art.img}
                                            alt={`${art.title} - Guide expert en traitement d'eau Bricareau`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-left border-t-2 border-transparent group-hover:border-blue-600 transition-colors flex flex-col flex-grow">
                                        <h4 className="text-xl font-medium mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{art.title}</h4>
                                        <div className="mt-auto">
                                            <NavLink
                                                to={art.path}
                                                className="text-blue-600 font-bold flex items-center gap-2 group-hover:underline text-sm"
                                            >
                                                Lire <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Consultation Form Section */}
                <ConsultationFormSection id="consultation" />
            </main>

            <Footer />
        </div>
    );
};

export default FiltresPuits;
